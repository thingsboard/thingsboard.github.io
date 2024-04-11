---
layout: docwithnav
assignees:
- zbeacon
title: How to connect BLE temperature and humidity sensor using the gateway
description: Understand how to connect BLE temperature and humidity sensor using the gateway 

---

* TOC
{:toc}

## Device information

For the purpose of this guide, we will use a Mi humidity and temperature sensor.
We will use [BLE connector](/docs/iot-gateway/config/ble/) to connect to the device and collect data.

Our goals for this device:  
1. Temperature and humidity data.
2. Get a device name.

At this moment the only info about the device are it's MAC address and characteristic identifiers:  

MAC Address - 4C:65:A8:DF:85:C0  

Characteristics IDs:  
00002A00-0000-1000-8000-00805F9B34FB - identifier of standard device name characteristic ([GATT Specification](https://www.bluetooth.com/specifications/gatt/services/))  
226CAA55-6476-4566-7562-66734470666D - identifier of a custom temperature and humidity characteristic ([How to get characteristics list from BLE device](#how-to-get-characteristics-identifiers-list-from-ble-device))    

## Step 1. Required libraries

Before we start configure our BLE connector within the gateway.
These libraries depend on type of your OS:


{% capture systemtogglespec %}
Debian based<br>%,%deb%,%templates/iot-gateway/ble-requirements-deb.md%br%
Red Hat based<br>%,%red-hat%,%templates/iot-gateway/ble-requirements-rpm.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="SystemLibraries" toggle-spec=systemtogglespec %}


 

## Step 2. Configuring the BLE connector

We need to create ble setup file and put configuration there. For example:

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
{: .copy-code}

  
About sections of BLE configuration file you can [read more here](/docs/iot-gateway/config/ble/).  

In this guide we will use configuration above.

Let's analyze our settings:

1. General configuration for the connector. In this section we have defined general connector settings, such as connector name ("BLE Connector"), rescan interval (100) etc. You can read more about available parameters [here](/docs/iot-gateway/config/ble/#main-section).  
2. General device configuration. In this section we have defined general device settings, such as device name in ThingsBoard ("Temperature and humidity sensor"), MAC-address ("4C:65:A8:DF:85:C0") etc. You can read more about available parameters [here](/docs/iot-gateway/config/ble/#device-object-subsection).
3. Telemetry configuration. In this section we have defined a configuration for temperature and humidity parameters. You can read more about available parameters [here](/docs/iot-gateway/config/ble/#subsection-telemetry).  
4. Attributes configuration. In this section we have defined that connector will read value from characteristic ("00002A00-0000-1000-8000-00805F9B34FB") and write it as the device client-side attribute ("name") on ThingsBoard. You can read more about available parameters [here](/docs/iot-gateway/config/ble/#subsection-attributes).    
5. Attribute updates configuration. In this section we have configured the gateway to change the device name when we change shared attribute ("sharedName") in ThingsBoard device. You can read more about available parameters [here](/docs/iot-gateway/config/ble/#subsection-attributeupdates).   
6. Server side rpc configuration. In this section we have configured the gateway to read the device name and return it when we call RPC method ("rpcMethod1") from ThingsBoard. You can read more about available parameters [here](/docs/iot-gateway/config/ble/#subsection-serversiderpc).   

If you have a different device, you should provide your device characteristic identifiers in the configuration json.    

We have saved the configuration file as **ble.json** in the config folder (the directory, that contains the general configuration file - **tb_gateway.yaml**).  

## Step 3. Turn on the connector 

To use the connector, we must turn it on in the main configuration file (**[tb_gateway.yaml](/docs/iot-gateway/configuration/#connectors-configuration)**)

In "connectors" section we should uncomment following strings:

```yaml
   -
     name: BLE Connector
     type: ble
     configuration: ble.json
```

## Step 4. Run the gateway

To run the gateway with BLE Connector we will use root permissions.  
Command for run depends on type of installation.  
If you have installed the gateway as daemon, run the following command:  
```bash
sudo systemctl restart thingsboard-gateway
```  
{: .copy-code}

If you have installed the gateway as a python module (using [pip package manager](/docs/iot-gateway/install/pip-installation/) or [from sources](/docs/iot-gateway/install/source-installation/)), use following command or script to run the gateway.  
**Notice**: You must place correct path to the main configuration file (**tb_gateway.yaml**) in the command/script.  

```bash
sudo python3 -c 'from thingsboard_gateway.gateway.tb_gateway_service import TBGatewayService; TBGatewayService("YOUR_PATH_HERE")'
```

or script:

```python
from thingsboard_gateway.gateway.tb_gateway_service import TBGatewayService 

config_file_path = "YOUR_PATH_HERE"

TBGatewayService(config_file_path)
```

## Step 5. Check information on ThingsBoard

Check data in your ThingsBoard instance, that you have been configured in the [general configuration guide](/docs/iot-gateway/configuration/).  
    - Go to the your ThingsBoard instance and login.  
    - Go to the "Devices" tab. "Temperature and Humidity sensor" should be there.
    <br>    
    ![](/images/gateway/temp-hum-sensor.png)
<br><br>
Go to the device details, **ATTRIBUTES** tab, which contains all client-side attributes, including requested from our configuration file attributes.  
**Notify:** Attributes from the GATT specification updates only on first connect to device after the gateway start.  
<br>
![](/images/gateway/attribute-on-ble-device.png)

## Step 6. Change the device name using shared attributes

Let's try to change the device name.
We should follow several steps:
1. Create a shared attribute in the device on ThingsBoard, to do this we go to the **ATTRIBUTES** tab, select from a list of attributes option "Shared attributes" instead of "Client attributes", press plus icon, put "sharedName" as Key and "New_name_" as "String value".
2. Check name of device using "rpcMethod1" from RPC Dashboard or scan devices around using default ability in the device where installed the gateway. 

**Notify:** Some devices can reset their name to default.

![](/images/gateway/changed-name-ble-tb-gateway.png)



#### How to get characteristic identifiers list from BLE device

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
name (if exists) - Characteristic name, if it has description in a [GATT specification](https://www.bluetooth.com/specifications/gatt/services/).  
available methods - Characteristic supports methods.  

Characteristic methods:  
1. READ - Read value from the characteristic.  
2. WRITE - Write value to the characteristic.  
3. NOTIFY - Subscribe to characteristic updates.  

Usually characteristics where name is equals to id is custom.  
