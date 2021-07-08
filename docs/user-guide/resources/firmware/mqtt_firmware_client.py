#      Copyright 2021. ThingsBoard
#  #
#      Licensed under the Apache License, Version 2.0 (the "License");
#      you may not use this file except in compliance with the License.
#      You may obtain a copy of the License at
#  #
#          http://www.apache.org/licenses/LICENSE-2.0
#  #
#      Unless required by applicable law or agreed to in writing, software
#      distributed under the License is distributed on an "AS IS" BASIS,
#      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#      See the License for the specific language governing permissions and
#      limitations under the License.


from paho.mqtt.client import Client
from time import sleep, time
from json import dumps, loads
from zlib import crc32
from hashlib import sha256, sha384, sha512, md5
from mmh3 import hash, hash128
from math import ceil
from threading import Thread
from random import randint


FW_CHECKSUM_ATTR = "fw_checksum"
FW_CHECKSUM_ALG_ATTR = "fw_checksum_algorithm"
FW_SIZE_ATTR = "fw_size"
FW_TITLE_ATTR = "fw_title"
FW_VERSION_ATTR = "fw_version"

FW_STATE_ATTR = "fw_state"

REQUIRED_SHARED_KEYS = f"{FW_CHECKSUM_ATTR},{FW_CHECKSUM_ALG_ATTR},{FW_SIZE_ATTR},{FW_TITLE_ATTR},{FW_VERSION_ATTR}"


def collect_required_data():
    config = {}
    print("\n\n", "="*80, sep="")
    print(" "*20, "ThingsBoard getting firmware example script.", sep="")
    print("="*80, "\n\n", sep="")
    host = input("Please write your ThingsBoard host or leave it blank to use default (localhost): ")
    config["host"] = host if host else "localhost"
    host = input("Please write your ThingsBoard port or leave it blank to use default (1883): ")
    config["port"] = host if host else 1883
    token = ""
    while not token:
        token = input("Please write accessToken for device: ")
        if not token:
            print("Access token is required!")
    config["token"] = token
    chunk_size = input("Please write firmware chunk size in bytes or leave it blank to get all firmware by request: ")
    config["chunk_size"] = int(chunk_size) if chunk_size else 0
    print("\n", "="*80, "\n", sep="")
    return config


def verify_checksum(firmware_data, checksum_alg, checksum):
    if firmware_data is None:
        print("Firmware wasn't received!")
        return False
    if checksum is None:
        print("Checksum was't provided!")
        return False
    checksum_of_received_firmware = None
    print(f"Checksum algorithm is: {checksum_alg}")
    if checksum_alg.lower() == "sha256":
        checksum_of_received_firmware = sha256(firmware_data).digest().hex()
    elif checksum_alg.lower() == "sha384":
        checksum_of_received_firmware = sha384(firmware_data).digest().hex()
    elif checksum_alg.lower() == "sha512":
        checksum_of_received_firmware = sha512(firmware_data).digest().hex()
    elif checksum_alg.lower() == "md5":
        checksum_of_received_firmware = md5(firmware_data).digest().hex()
    elif checksum_alg.lower() == "murmur3_32":
        reversed_checksum = f'{hash(firmware_data, signed=False):0>2X}'
        if len(reversed_checksum) % 2 != 0:
            reversed_checksum = '0' + reversed_checksum
        checksum_of_received_firmware = "".join(reversed([reversed_checksum[i:i+2] for i in range(0, len(reversed_checksum), 2)])).lower()
    elif checksum_alg.lower() == "murmur3_128":
        reversed_checksum = f'{hash128(firmware_data, signed=False):0>2X}'
        if len(reversed_checksum) % 2 != 0:
            reversed_checksum = '0' + reversed_checksum
        checksum_of_received_firmware = "".join(reversed([reversed_checksum[i:i+2] for i in range(0, len(reversed_checksum), 2)])).lower()
    elif checksum_alg.lower() == "crc32":
        reversed_checksum = f'{crc32(firmware_data) & 0xffffffff:0>2X}'
        if len(reversed_checksum) % 2 != 0:
            reversed_checksum = '0' + reversed_checksum
        checksum_of_received_firmware = "".join(reversed([reversed_checksum[i:i+2] for i in range(0, len(reversed_checksum), 2)])).lower()
    else:
        print("Client error. Unsupported checksum algorithm.")
    print(checksum_of_received_firmware)
    random_value = randint(0, 5)
    if random_value > 3:
        print("Dummy fail! Do not panic, just restart and try again the chance of this fail is ~20%")
        return False
    return checksum_of_received_firmware == checksum


def dummy_upgrade(version_from, version_to):
    print(f"Updating from {version_from} to {version_to}:")
    for x in range(5):
        sleep(1)
        print(20*(x+1),"%", sep="")
    print(f"Firmware is updated!\n Current firmware version is: {version_to}")


class FirmwareClient(Client):
    def __init__(self, chunk_size = 0):
        super().__init__()
        self.on_connect = self.__on_connect
        self.on_message = self.__on_message
        self.__chunk_size = chunk_size

        self.__request_id = 0
        self.__firmware_request_id = 0

        self.current_firmware_info = {
            "current_" + FW_TITLE_ATTR: "Initial",
            "current_" + FW_VERSION_ATTR: "v0"
            }
        self.firmware_data = b''
        self.__target_firmware_length = 0
        self.__chunk_count = 0
        self.__current_chunk = 0
        self.firmware_received = False
        self.__updating_thread = Thread(target=self.__update_thread, name="Updating thread")
        self.__updating_thread.daemon = True
        self.__updating_thread.start()

    def __on_connect(self, client, userdata, flags, result_code, *extra_params):
        print(f"Requesting firmware info from {config['host']}:{config['port']}..")
        self.subscribe("v1/devices/me/attributes/response/+")
        self.subscribe("v1/devices/me/attributes")
        self.subscribe("v2/fw/response/+")
        self.send_telemetry(self.current_firmware_info)
        self.request_firmware_info()

    def __on_message(self, client, userdata, msg):
        update_response_pattern = "v2/fw/response/" + str(self.__firmware_request_id) + "/chunk/"
        if msg.topic.startswith("v1/devices/me/attributes"):
            self.firmware_info = loads(msg.payload)
            if "/response/" in msg.topic:
                self.firmware_info = self.firmware_info.get("shared", {}) if isinstance(self.firmware_info, dict) else {}
            if (self.firmware_info.get(FW_VERSION_ATTR) is not None and self.firmware_info.get(FW_VERSION_ATTR) != self.current_firmware_info.get("current_" + FW_VERSION_ATTR)) or \
                    (self.firmware_info.get(FW_TITLE_ATTR) is not None and self.firmware_info.get(FW_TITLE_ATTR) != self.current_firmware_info.get("current_" + FW_TITLE_ATTR)):
                print("Firmware is not the same")
                self.firmware_data = b''
                self.__current_chunk = 0

                self.current_firmware_info[FW_STATE_ATTR] = "DOWNLOADING"
                self.send_telemetry(self.current_firmware_info)
                sleep(1)

                self.__firmware_request_id = self.__firmware_request_id + 1
                self.__target_firmware_length = self.firmware_info[FW_SIZE_ATTR]
                self.__chunk_count = 0 if not self.__chunk_size else ceil(self.firmware_info[FW_SIZE_ATTR]/self.__chunk_size)
                self.get_firmware()
        elif msg.topic.startswith(update_response_pattern):
            firmware_data = msg.payload

            self.firmware_data = self.firmware_data + firmware_data
            self.__current_chunk = self.__current_chunk + 1

            print(f'Getting chunk with number: {self.__current_chunk}. Chunk size is : {self.__chunk_size} byte(s).')

            if len(self.firmware_data) == self.__target_firmware_length:
                self.process_firmware()
            else:
                self.get_firmware()

    def process_firmware(self):
        self.current_firmware_info[FW_STATE_ATTR] = "DOWNLOADED"
        self.send_telemetry(self.current_firmware_info)
        sleep(1)

        verification_result = verify_checksum(self.firmware_data, self.firmware_info.get(FW_CHECKSUM_ALG_ATTR), self.firmware_info.get(FW_CHECKSUM_ATTR))

        if verification_result:
            print("Checksum verified!")
            self.current_firmware_info[FW_STATE_ATTR] = "VERIFIED"
            self.send_telemetry(self.current_firmware_info)
            sleep(1)
        else:
            print("Checksum verification failed!")
            self.current_firmware_info[FW_STATE_ATTR] = "FAILED"
            self.send_telemetry(self.current_firmware_info)
            self.request_firmware_info()
            return
        self.firmware_received = True

    def get_firmware(self):
        payload = '' if not self.__chunk_size or self.__chunk_size > self.firmware_info.get(FW_SIZE_ATTR, 0) else str(self.__chunk_size).encode()
        self.publish(f"v2/fw/request/{self.__firmware_request_id}/chunk/{self.__current_chunk}", payload=payload, qos=1)

    def send_telemetry(self, telemetry):
        return self.publish("v1/devices/me/telemetry", dumps(telemetry), qos=1)

    def request_firmware_info(self):
        self.__request_id = self.__request_id + 1
        self.publish(f"v1/devices/me/attributes/request/{self.__request_id}", dumps({"sharedKeys": REQUIRED_SHARED_KEYS}))

    def __update_thread(self):
        while True:
            if self.firmware_received:
                self.current_firmware_info[FW_STATE_ATTR] = "UPDATING"
                self.send_telemetry(self.current_firmware_info)
                sleep(1)

                with open(self.firmware_info.get(FW_TITLE_ATTR), "wb") as firmware_file:
                    firmware_file.write(self.firmware_data)

                dummy_upgrade(self.current_firmware_info["current_" + FW_VERSION_ATTR], self.firmware_info.get(FW_VERSION_ATTR))

                self.current_firmware_info = {
                    "current_" + FW_TITLE_ATTR: self.firmware_info.get(FW_TITLE_ATTR),
                    "current_" + FW_VERSION_ATTR: self.firmware_info.get(FW_VERSION_ATTR),
                    FW_STATE_ATTR: "UPDATED"
                }
                self.send_telemetry(self.current_firmware_info)
                self.firmware_received = False
                sleep(1)


if __name__ == '__main__':
    config = collect_required_data()

    client = FirmwareClient(config["chunk_size"])
    client.username_pw_set(config["token"])
    client.connect(config["host"], config["port"])
    client.loop_forever()