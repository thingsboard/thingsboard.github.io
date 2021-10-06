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

import asyncio

from aiocoap import Context, Message, Code
from time import sleep
from zlib import crc32
from math import ceil

from json import loads, dumps
from hashlib import sha256, sha384, sha512, md5
from mmh3 import hash, hash128
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
    config["host"] = host if host or host == "localhost" else "127.0.0.1"
    port = input("Please write your ThingsBoard port or leave it blank to use default (5683): ")
    config["port"] = port if port else 5683
    token = ""
    while not token:
        token = input("Please write accessToken for device: ")
        if not token:
            print("Access token is required!")
    config["token"] = token
    chunk_size = input("Please write firmware chunk size in range 1-1024 or leave it blank to set it default (512 bytes): ")
    config["chunk_size"] = int(chunk_size) if chunk_size else 0
    config["basic_uri"] = f'coap://{config["host"]}/api/v1/{config["token"]}'
    config["firmware_uri"] = f'coap://{config["host"]}/fw/{config["token"]}'
    print("\n", "="*80, "\n", sep="")
    return config


async def send_telemetry(context: Context, telemetry, config):
    print(f"Sending current info: {telemetry}")
    request = Message(code=Code.POST, uri=f'{config["basic_uri"]}/telemetry', payload=dumps(telemetry).encode())
    try:
        response = await context.request(request).response
    except Exception as e:
        print("Failed to send data!")
        print(e)
    else:
        return response


async def get_firmware_info(context: Context, config):
    request = Message(code=Code.GET, uri=f'{config["basic_uri"]}/attributes?sharedKeys={",".join(REQUIRED_SHARED_KEYS)}')
    try:
        response = await context.request(request).response
    except Exception as e:
        print("Failed to send data!")
        print(e)
    else:
        return loads(response.payload).get("shared", {})


async def get_firmware(context: Context, fw_info, config):
    chunk_size = config["chunk_size"] if 1024 > config["chunk_size"] > 0 else 0
    chunk_count = ceil(fw_info.get(FW_SIZE_ATTR)/config["chunk_size"]) if config["chunk_size"] > 0 else 0
    firmware_data = b''
    for chunk_number in range (chunk_count + 1):
        print(f'Getting chunk with number: {chunk_number + 1}. Chunk size is : {chunk_size if chunk_size else fw_info[FW_SIZE_ATTR]} byte(s).')
        additional_parameters = f'&size={chunk_size if chunk_size > 0 and config["chunk_size"] < fw_info[FW_SIZE_ATTR] else fw_info[FW_SIZE_ATTR]}&chunk={chunk_number}' if chunk_size else ''
        uri=f'{config["firmware_uri"]}?title={fw_info[FW_TITLE_ATTR]}&version={fw_info[FW_VERSION_ATTR]}{additional_parameters}'
        request = Message(code=Code.GET, uri=uri)
        try:
            response = await context.request(request, handle_blockwise=chunk_count == 0).response
        except Exception as e:
            print("Failed to get data!")
            print(e)
        else:
            firmware_data = firmware_data + response.payload
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
        print(20*x, "%", sep="")
    print(f"Firmware is updated!\n Current firmware version is: {version_to}")


async def main():
    config = collect_required_data()
    protocol = await Context.create_client_context()
    current_firmware_info = {
        "current_fw_title": "Initial",
        "current_fw_version": "v0"
        }
    await send_telemetry(protocol, current_firmware_info, config)

    print(f"Getting firmware info from {config['host']}:{config['port']}..")
    while True:

        firmware_info = await get_firmware_info(protocol, config)

        if (firmware_info.get(FW_VERSION_ATTR) is not None and firmware_info.get(FW_VERSION_ATTR) != current_firmware_info.get("current_" + FW_VERSION_ATTR)) \
                or (firmware_info.get(FW_TITLE_ATTR) is not None and firmware_info.get(FW_TITLE_ATTR) != current_firmware_info.get("current_" + FW_TITLE_ATTR)):
            print("New firmware available!")

            current_firmware_info[FW_STATE_ATTR] = "DOWNLOADING"
            await send_telemetry(protocol, current_firmware_info, config)
            sleep(1)

            firmware_data = await get_firmware(protocol, firmware_info, config)

            current_firmware_info[FW_STATE_ATTR] = "DOWNLOADED"
            await send_telemetry(protocol, current_firmware_info, config)
            sleep(1)

            verification_result = verify_checksum(firmware_data, firmware_info.get(FW_CHECKSUM_ALG_ATTR), firmware_info.get(FW_CHECKSUM_ATTR))

            if verification_result:
                print("Checksum verified!")
                current_firmware_info[FW_STATE_ATTR] = "VERIFIED"
                await send_telemetry(protocol, current_firmware_info, config)
                sleep(1)
            else:
                print("Checksum verification failed!")
                current_firmware_info[FW_STATE_ATTR] = "FAILED"
                await send_telemetry(protocol, current_firmware_info, config)
                firmware_info = await get_firmware_info(protocol, config)
                continue

            current_firmware_info[FW_STATE_ATTR] = "UPDATING"
            await send_telemetry(protocol, current_firmware_info, config)
            sleep(1)

            with open(firmware_info.get(FW_TITLE_ATTR), "wb") as firmware_file:
                firmware_file.write(firmware_data)

            dummy_upgrade(current_firmware_info["current_" + FW_VERSION_ATTR], firmware_info.get(FW_VERSION_ATTR))

            current_firmware_info = {
                "current_" + FW_TITLE_ATTR: firmware_info.get(FW_TITLE_ATTR),
                "current_" + FW_VERSION_ATTR: firmware_info.get(FW_VERSION_ATTR),
                FW_STATE_ATTR: "UPDATED"
            }
            await send_telemetry(protocol, current_firmware_info, config)
        await asyncio.sleep(1)

if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())