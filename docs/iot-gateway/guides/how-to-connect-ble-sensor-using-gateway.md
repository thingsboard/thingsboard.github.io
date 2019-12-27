---
layout: docwithnav
assignees:
- zbeacon
title: How to connect BLE temperature and humidity sensor using the gateway.
description: Understand how to connect BLE temperature and humidity sensor using the gateway. 

---

## Device information

To understand how to connect devices to the gateway using the BLE protocol, we will use a humidity and temperature sensor from MI.
We will use [BLE connector](/docs/iot-gateway/config/ble-connector/) to connect to device and collect data.

Information about the device that we have is:  
MAC Address - 4C:65:A8:DF:85:C0  

Characteristics IDs:  
00002A00-0000-1000-8000-00805F9B34FB - identifier of standard device name characteristic ([GATT Specification](https://www.bluetooth.com/specifications/gatt/services/))  
226CAA55-6476-4566-7562-66734470666D - identifier of a custom temperature and humidity characteristic ([How to get characteristics list from BLE device](#how-to-get-characteristics-list-from-ble-device))    

## Step 1. Configure the BLE connector

We need create ble configuration file and write a configuration template and write general configuration for the connector:

```json
{
    "name": "BLE Connector",
    "rescanIntervalSeconds": 100,
    "checkIntervalSeconds": 100,
    "scanTimeSeconds": 5,
    "passiveScanMode": true,
    "devices": [
        {
            "name": "Temperature and humidity sensor",
            "MACAddress": "4C:65:A8:DF:85:C0",
            "telemetry": [
                {
                    "key": "temperature",
                    "method": "notify",
                    "characteristicUUID": "226CAA55-6476-4566-7562-66734470666D",
                    "byteFrom": 2,
                    "byteTo": 6
                },
                {
                    "key": "humidity",
                    "method": "notify",
                    "characteristicUUID": "226CAA55-6476-4566-7562-66734470666D",
                    "byteFrom": 9,
                    "byteTo": 13
                }
            ],
            "attributes": [
                {
                    "key": "name",
                    "characteristicUUID": "00002A00-0000-1000-8000-00805F9B34FB",
                    "method": "read",
                    "byteFrom": 0,
                    "byteTo": -1
                }
            ],
            "attributeUpdates": [
                {
                    "attributeOnThingsBoard": "sharedName",
                    "characteristicUUID": "00002A00-0000-1000-8000-00805F9B34FB"
                }
            ],
            "serverSideRpc": [
                {
                    "methodRPC": "sharedName",
                    "withResponse": true,
                    "characteristicUUID": "00002A00-0000-1000-8000-00805F9B34FB",
                    "methodProcessing": "write"
                }
            ]
        }
    ]
}
```  
About sections of BLE configuration file you can [read more here](/docs/iot-gateway/config/ble/)

In this guide we should configure like  

#### How to get characteristics list from BLE device

To get all available device characteristics, you can use the following Python script:  

```python
from bluepy.btle import Peripheral

MAC = "PUT_DEVICE_MAC_ADDRESS_HERE"

peripheral = Peripheral(MAC)

for service in peripheral.getServices():
    for characteristic in service.getCharacteristics():
        print("Characteristic - id: %s\tname (if exists): %s\tavailable methods: %s" % (str(characteristic.uuid), str(characteristic), characteristic.propertiesToString()))
``` 

{: .copy-code}

**Notate: To run the script - you should have installed Bluepy library and permissions to access to Bluetooth module.**  

After run the script, you will receive output in console like following:  
```text
Characteristic - id: 00002a00-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Device Name>	available methods: READ WRITE 
Characteristic - id: 00002a01-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Appearance>	available methods: READ 
Characteristic - id: 00002a04-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Peripheral Preferred Connection Parameters>	available methods: READ 
Characteristic - id: 00002a05-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Service Changed>	available methods: INDICATE 
Characteristic - id: 226caa55-6476-4566-7562-66734470666d	name (if exists): Characteristic <226caa55-6476-4566-7562-66734470666d>	available methods: NOTIFY 
Characteristic - id: 226cbb55-6476-4566-7562-66734470666d	name (if exists): Characteristic <226cbb55-6476-4566-7562-66734470666d>	available methods: WRITE NOTIFY 
Characteristic - id: 00002a19-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Battery Level>	available methods: READ NOTIFY 
Characteristic - id: 00002a29-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Manufacturer Name String>	available methods: READ 
Characteristic - id: 00002a24-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Model Number String>	available methods: READ 
Characteristic - id: 00002a25-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Serial Number String>	available methods: READ 
Characteristic - id: 00002a27-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Hardware Revision String>	available methods: READ 
Characteristic - id: 00002a26-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <Firmware Revision String>	available methods: READ 
Characteristic - id: 00001532-1212-efde-1523-785feabcd123	name (if exists): Characteristic <00001532-1212-efde-1523-785feabcd123>	available methods: WRITE NO RESPONSE 
Characteristic - id: 00001531-1212-efde-1523-785feabcd123	name (if exists): Characteristic <00001531-1212-efde-1523-785feabcd123>	available methods: WRITE NOTIFY 
Characteristic - id: 00001534-1212-efde-1523-785feabcd123	name (if exists): Characteristic <00001534-1212-efde-1523-785feabcd123>	available methods: READ 
Characteristic - id: 00000001-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <0001>	available methods: WRITE NOTIFY 
Characteristic - id: 00000002-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <0002>	available methods: READ 
Characteristic - id: 00000004-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <0004>	available methods: READ 
Characteristic - id: 00000010-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <0010>	available methods: WRITE 
Characteristic - id: 00000013-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <0013>	available methods: READ WRITE 
Characteristic - id: 00000014-0000-1000-8000-00805f9b34fb	name (if exists): Characteristic <0014>	available methods: READ WRITE 
```  

Where:  
id - characteristic identifier.  
name (if exists) - Characteristic name, if it has description in the [GATT specification](https://www.bluetooth.com/specifications/gatt/services/).  
available methods - Characteristic supports methods.  

Characteristic methods:  
1. READ - Read value from the characteristic.  
2. WRITE - Write value to the characteristic.  
3. NOTIFY - Subscribe to characteristic updates.  

Usually characteristics where name is equals to id is custom.  