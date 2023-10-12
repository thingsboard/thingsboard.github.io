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
from requests import get, post
from time import sleep
from zlib import crc32
from hashlib import sha256, sha384, sha512, md5
from mmh3 import hash, hash128
from math import ceil
from random import randint


FW_CHECKSUM_ATTR = "fw_checksum"
FW_CHECKSUM_ALG_ATTR = "fw_checksum_algorithm"
FW_SIZE_ATTR = "fw_size"
FW_TITLE_ATTR = "fw_title"
FW_VERSION_ATTR = "fw_version"

FW_STATE_ATTR = "fw_state"

REQUIRED_SHARED_KEYS = [FW_CHECKSUM_ATTR, FW_CHECKSUM_ALG_ATTR, FW_SIZE_ATTR, FW_TITLE_ATTR, FW_VERSION_ATTR]


def collect_required_data():
    config = {}
    print("\n\n", "="*80, sep="")
    print(" "*20, "ThingsBoard getting firmware example script.", sep="")
    print("="*80, "\n\n", sep="")
    host = input("Please write your ThingsBoard host or leave it blank to use default (localhost): ")
    config["host"] = host if host else "localhost"
    port = input("Please write your ThingsBoard port or leave it blank to use default (8080): ")
    config["port"] = port if port else 8080
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


def send_telemetry(telemetry):
    print(f"Sending current info: {telemetry}")
    post(f"http://{config['host']}:{config['port']}/api/v1/{config['token']}/telemetry",json=telemetry)


def get_firmware_info():
    response = get(f"http://{config['host']}:{config['port']}/api/v1/{config['token']}/attributes", params={"sharedKeys": REQUIRED_SHARED_KEYS}).json()
    return response.get("shared", {})


def get_firmware(fw_info):
    chunk_count = ceil(fw_info.get(FW_SIZE_ATTR, 0)/config["chunk_size"]) if config["chunk_size"] > 0 else 0
    firmware_data = b''
    for chunk_number in range (chunk_count + 1):
        params = {"title": fw_info.get(FW_TITLE_ATTR),
                  "version": fw_info.get(FW_VERSION_ATTR),
                  "size": config["chunk_size"] if config["chunk_size"] < fw_info.get(FW_SIZE_ATTR, 0) else fw_info.get(FW_SIZE_ATTR, 0),
                  "chunk": chunk_number
                  }
        print(params)
        print(f'Getting chunk with number: {chunk_number + 1}. Chunk size is : {config["chunk_size"]} byte(s).')
        print(f"http{'s' if config['port'] == 443 else ''}://{config['host']}:{config['port']}/api/v1/{config['token']}/firmware", params)
        response = get(f"http{'s' if config['port'] == 443 else ''}://{config['host']}:{config['port']}/api/v1/{config['token']}/firmware", params=params)
        if response.status_code != 200:
            print("Received error:")
            response.raise_for_status()
            return
        firmware_data = firmware_data + response.content
    return firmware_data


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
        print(20*x,"%", sep="")
    print(f"Firmware is updated!\n Current firmware version is: {version_to}")


if __name__ == '__main__':
    config = collect_required_data()
    current_firmware_info = {
        "current_fw_title": None,
        "current_fw_version": None
    }
    send_telemetry(current_firmware_info)

    print(f"Getting firmware info from {config['host']}:{config['port']}..")
    while True:

        firmware_info = get_firmware_info()

        if (firmware_info.get(FW_VERSION_ATTR) is not None and firmware_info.get(FW_VERSION_ATTR) != current_firmware_info.get("current_" + FW_VERSION_ATTR)) \
                or (firmware_info.get(FW_TITLE_ATTR) is not None and firmware_info.get(FW_TITLE_ATTR) != current_firmware_info.get("current_" + FW_TITLE_ATTR)):
            print("New firmware available!")

            current_firmware_info[FW_STATE_ATTR] = "DOWNLOADING"
            sleep(1)
            send_telemetry(current_firmware_info)

            firmware_data = get_firmware(firmware_info)

            current_firmware_info[FW_STATE_ATTR] = "DOWNLOADED"
            sleep(1)
            send_telemetry(current_firmware_info)

            verification_result = verify_checksum(firmware_data, firmware_info.get(FW_CHECKSUM_ALG_ATTR), firmware_info.get(FW_CHECKSUM_ATTR))

            if verification_result:
                print("Checksum verified!")
                current_firmware_info[FW_STATE_ATTR] = "VERIFIED"
                sleep(1)
                send_telemetry(current_firmware_info)
            else:
                print("Checksum verification failed!")
                current_firmware_info[FW_STATE_ATTR] = "FAILED"
                sleep(1)
                send_telemetry(current_firmware_info)
                firmware_data = get_firmware(firmware_info)
                continue

            current_firmware_info[FW_STATE_ATTR] = "UPDATING"
            sleep(1)
            send_telemetry(current_firmware_info)

            with open(firmware_info.get(FW_TITLE_ATTR), "wb") as firmware_file:
                firmware_file.write(firmware_data)

            dummy_upgrade(current_firmware_info["current_" + FW_VERSION_ATTR], firmware_info.get(FW_VERSION_ATTR))

            current_firmware_info = {
                "current_" + FW_TITLE_ATTR: firmware_info.get(FW_TITLE_ATTR),
                "current_" + FW_VERSION_ATTR: firmware_info.get(FW_VERSION_ATTR),
                FW_STATE_ATTR: "UPDATED"
            }
            sleep(1)
            send_telemetry(current_firmware_info)
        sleep(1)