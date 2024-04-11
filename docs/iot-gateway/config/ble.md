---
layout: docwithnav-gw
title: BLE Connector Configuration
description: BLE protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with BLE connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe connector configuration file below.

**BLE connector need some system libraries, to install them please select version of package manager in your system below and run a command to install libraries:**

{% capture systemtogglespec %}
APT-GET<br>%,%deb%,%templates/iot-gateway/ble-requirements-deb.md%br%
YUM<br>%,%rpm%,%templates/iot-gateway/ble-requirements-rpm.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="SystemLibraries" toggle-spec=systemtogglespec %}

<b> Example of BLE Connector config file.</b>

{% capture bleConf %}

{
    "name": "BLE Connector",
    "passiveScanMode": true,
    "showMap": false,
    "scanner": {
        "timeout": 10000,
        "deviceName": "STH11"
    },
    "devices": [
        {
            "name": "Temperature and humidity sensor",
            "MACAddress": "4C:65:A8:DF:85:C0",
            "pollPeriod": 5000,
            "showMap": false,
            "timeout": 10000,
            "telemetry": [
                {
                    "key": "temperature",
                    "method": "notify",
                    "characteristicUUID": "226CAA55-6476-4566-7562-66734470666D",
                    "valueExpression": "[2]"
                },
                {
                    "key": "humidity",
                    "method": "notify",
                    "characteristicUUID": "226CAA55-6476-4566-7562-66734470666D",
                    "valueExpression": "[:]"
                }
            ],
            "attributes": [
                {
                    "key": "name",
                    "characteristicUUID": "00002A00-0000-1000-8000-00805F9B34FB",
                    "method": "read",
                    "valueExpression": "[0:2]"
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


{% endcapture %}
{% include code-toggle.liquid code=bleConf params="conf|.copy-code.expandable-20" %}

<br>

To understand how this connector works, we will describe how to connect device Xiaomi Mi Smart Temperature Humidity Sensor to ThingsBoard using gateway.
We know following device parameters:
Device **MAC address** - 4C:65:A8:DF:85:C0
Default name characteristic id -  00002A00-0000-1000-8000-00805F9B34FB   - This is a default characteristic - we have got it ID from [GATT characeristics documentation](https://www.bluetooth.com/specifications/gatt/characteristics/)
Temperature characteristic id - 00002A00-0000-1000-8000-00805F9B34FB    - This is a custom characteristic - we have got it after scanning device characteristics. 

Default configuration created for this device to process data from it, receive notifies and write some information.  

In a [main section](#main-section) we write general configuration for our connector, such as connector name, scan mode, scanner, etc.  
In a [device subsection](#device-object-subsection) we write general configuration for connection to our device (name for device in ThingsBoard and device MAC address, etc.).  
In a [subsection telemetry](#subsection-telemetry) we write the configuration for processing data from the device (Where the gateway should take the data, method and converter will interpret this data to telemetry and attributes on ThingsBoard).  
In a [subsection attributeUpdates](#subsection-attributes) we write the configuration to rename the device after receiving attribute update request from ThingsBoard.  
If device shared attribute with a name "sharedName" changed - gateway will write data from this attribute to characteristic with ID - 00002A00-0000-1000-8000-00805F9B34FB.  

### Main section

This section contains general settings for the connector.

| **Parameter**                  | **Default value**                           | **Description**                                            |
|:-|:-|-
| name                           | **BLE Connector**                           | Connector name for logs and saving to persistent devices.  |
| showMap                        | **false**                                   | Show all or specific finded MAC addresses devices.         |
| scanner                        | **{"timeout": 1000, "deviceName": "NH11"}** | Using for finding specific device by it name. It is optional section, so can be deleted and BLE Connector will find **ALL** devices that are available. |
| passiveScanMode                | **true**                                    | Scanning using passive mode.                               |
| devices                        |                                             | Contains an array of devices of interest.                  |
|---


This part of configuration will look like:  

```json
{
    "name": "BLE Connector",
    "passiveScanMode": true,
    "showMap": false,
    "scanner": {
        "timeout": 10000,
        "deviceName": "NH11"
    },
    "devices": [
        ...
    ]
}
```

Also let's take a look at methods for discovering available devices. For this we will use two different scenarios.
1. **First Scenario**

   In the first scenario we have to configure BLE Connector for displaing all finded devices because we don't know MAC address of our device and his name too.
   For this we have to use the next configuration:
   ```json
   {
       ...
       "showMap": true
       ...
   }
   ```
   **Gateway output:**

   24:71:89:cc:09:05 - NH11

   54:bb:12:ff:09:01 - Unknown

   23:cc:34:23:bb:56 - XYZ123
2. **Second Scenario**

   In the second scenario we know Bluetooth displaing device name and want to know only his MAC address.
   For this we have to use the next configuration:
   ```json
   {
       ...
       "showMap": true,
       "scanner": {
           "timeout": 10000,
           "deviceName": "NH11"
       }
       ...
   }
   ```
   **Gateway output:**

   24:71:89:cc:09:05 - NH11

#### Device object subsection

This subsection contains general settings for the device and subsections for processing data.

| **Parameter**     | **Default value** | **Description**                                                                                           |
|:-|:-|-
| name              | **BLE Connector** | Name for the device in ThingsBoard.                                                                       |
| MACAddress        | **4C:65:A8:DF:C0**| MAC address for the device of interest.                                                                   |
| deviceType        | **BLEDevice**     | Device type for ThingsBoard, by default this parameter is absent, but you can add it.                     |
| pollPeriod        | **5000**          | The period of time (in ms) that data in the device will be reading.                                       |
| showMap           | **false**         | If set to **true** will show all GATT objects (characteristics, services, etc.) in device.                |
| timeout           | **10000**         | The time that BLE Connector will try to connect to a device.                                              |
| telemetry         |                   | Array of objects for processing device telemetry.                                                         |
| attributes        |                   | Array of objects for processing device attributes.                                                        |
| attributeUpdates  |                   | Array of objects for processing attributeUpdate requests from ThingsBoard.                                |
| serverSideRpc     |                   | Array of objects for processing RPC requests from ThingsBoard.                                            |
|---


This part of configuration will look like:  

```json
{
    "name": "Temperature and humidity sensor",
    "MACAddress": "4C:65:A8:DF:85:C0",
    "showMap": true,
    "pollPeriod": 5000,
    "timeout": 10000,
    "telemetry": [
        ...
    ],
    "attributes": [
        ...
    ],
    "attributeUpdates": [
        ...
    ],
    "serverSideRpc": [
        ...
    ]
}
```

##### Subsection telemetry

This subsection contains general settings for the processing data interpreted as telemetry.  

| **Parameter**         | **Default value**                         | **Description**                                                          |
|:-|:-|-
| key                   | **temperature**                           | Name for telemetry in ThingsBoard.                                       |
| method                | **notify**                                | Method for Characteristic processing (Can be **NOTIFY** or **READ**).    |
| characteristicUUID    | **226CAA55-6476-4566-7562-66734470666D**  | UUID of characteristic on the device.                                    |
| valueExpression       | **[0:1]**                                 | Final view of data that will be send to ThingsBoard, [0:1] - will replace to device data using python slice rules |
|---


This part of configuration will look like:  

```json
{
    "key": "temperature",
    "method": "notify",
    "characteristicUUID": "226CAA55-6476-4566-7562-66734470666D",
    "valueExpression": "[0:1]"
},
```

**The values shown in the table above may differ in your configuration.**

For example response from device is bytes array like b'\x08<\x08\x00', in this case -- **8** interpreted as value of key.

If you need to interpreted full response as value use **"valueExpression": "[:]"**. 

You can find more examples of data converting in section **"Examples of data converting"**.



##### Subsection attributes

This subsection contains general settings for the processing data interpreted as attributes.  

| **Parameter**         | **Default name**                          | **Description**                                                          |
|:-|:-|-
| key                   | **name**                                  | Name for telemetry in ThingsBoard.                                       |
| method                | **read**                                  | Method for Characteristic processing (Can be **NOTIFY** or **READ**).    |
| characteristicUUID    | **00002A00-0000-1000-8000-00805F9B34FB**  | UUID of characteristic on the device.                                    |
| valueExpression       | **[0:1] cm**                              | Final view of data that will be send to ThingsBoard, [0:1] - will replace to device data using python slice rules |
|---


This part of configuration will look like:  

```json
{
    "key": "name",
    "characteristicUUID": "00002A00-0000-1000-8000-00805F9B34FB",
    "method": "read",
    "valueExpression": "[0:1] cm"
}
```


**The values shown in the table above may differ in your configuration.**

For example response from device is bytes string like b'**\x08<\x08\x00**', in this case -- **8 cm** interpreted as value of key.

If you need to interpreted full response as value use **"valueExpression": "[:]"**.

You can find more examples of data converting in section **"Examples of data converting"**.
<br><br>
  
{% capture bleGATTinfo %}
Services and characteristics, from <a target="_blank" rel="noopener noreferrer" href="https://www.bluetooth.com/specifications/gatt/services/">GATT Specification</a> will also interpret as attributes of device and automatically loaded to ThingsBoard.
{% endcapture %}
{% include templates/info-banner.md content=bleGATTinfo %}



##### Examples of data converting
Let's review more examples of data converting:

**Basic scenario:** we have a device that measures temperature and humidity. Device has charasteristic that can be read and when we receive data from her, the data combine temperature
and humidity. So, data from device have the next view: **b'\x08<\x08\x00'** and in human readable format: **[8, 34]** (first array element is temperature and the second is humidity).
1. We want to read only temperature value
   
   **"valueExpression": "[0]"**
   
   Data to ThingsBoard:**8**
2. We want to read only humidity value

   **"valueExpression": "[1]"**
   
   Data to ThingsBoard:**34**
3. We want to read all values

   "valueExpression": "[:]" or "valueExpression": "[0:2]"
   
   Data to ThingsBoard: **834**
4. We want to read all values and dimensional units

   **"valueExpression": "[0]°C [1]%"**
   
   Data to ThingsBoard: **8°C 34%**    

##### Subsection attributeUpdates

This subsection contains settings for the processing attributeUpdate requests from ThingsBoard.  

| **Parameter**          | **Default name**                         | **Description**                                                      |
|:-|:-|-
| attributeOnThingsBoard | **sharedName**                           | Name of shared device attribute in ThingsBoard.                      |
| characteristicUUID     | **00002A00-0000-1000-8000-00805F9B34FB** | UUID of characteristic in which the attribute value will be written. |
|---


This part of configuration will look like:  

```json
{
    "attributeOnThingsBoard": "sharedName",
    "characteristicUUID": "00002A00-0000-1000-8000-00805F9B34FB"
}
```

{% capture bleAttrUpdInfo %}
Characteristic should support method **WRITE** for processing the attributeUpdate request.
{% endcapture %}
{% include templates/info-banner.md content=bleAttrUpdInfo %}


##### Subsection serverSideRpc

This subsection contains settings for the processing RPC requests from ThingsBoard.  

| **Parameter**      | **Default name**                         | **Description**                                                               |
|:-|:
| methodRPC          | **rpcMethod1**                           | RPC method name.                                                              |
| withResponse       | **true**                                 | If true, response will be sent to ThingsBoard.                                |
| characteristicUUID | **00002A00-0000-1000-8000-00805F9B34FB** | UUID of characteristic.                                                       |
| methodProcessing   | **read**                                 | Method for processing to characteristic. (**READ**/**WRITE**/**NOTIFY**)      |
|---


This part of configuration will look like:  

```json
{
    "methodRPC": "rpcMethod1",
    "withResponse": true,
    "characteristicUUID": "00002A00-0000-1000-8000-00805F9B34FB",
    "methodProcessing": "read"
}
```


## Next steps

Explore guides related to main ThingsBoard features:

 - [Connect BLE sensor](/docs/iot-gateway/guides/how-to-connect-ble-sensor-using-gateway/) - how to connect BLE sensor using ThingsBoard IoT Gateway
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
