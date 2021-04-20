---
layout: docwithnav-gw
title: BACnet Connector Configuration
description: BACnet protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

The BACnet connector is a way to read and write some basic objects and properties in BACnet IP device.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this connector.  
We will describe connector configuration file below.  

<br>

<details>

<summary>
<b>Example of BACnet Connector config file. Press to expand/collapse.</b>
</summary>

{% highlight json %}

{
  "general": {
    "objectName": "TB_gateway",
    "address": "192.168.188.181:1052",
    "objectIdentifier": 599,
    "maxApduLengthAccepted": 1024,
    "segmentationSupported": "segmentedBoth",
    "vendorIdentifier": 15
  },
  "devices": [
    {
      "deviceName": "BACnet Device ${objectName}",
      "deviceType": "default",
      "address": "192.168.188.181:10520",
      "pollPeriod": 10000,
      "attributes": [
        {
          "key": "temperature",
          "objectId": "analogOutput:1",
          "propertyId": "presentValue"
        }
      ],
      "timeseries": [
        {
          "key": "state",
          "objectId": "binaryValue:1",
          "propertyId": "presentValue"
        }
      ],
      "attributeUpdates": [
        {
          "key": "brightness",
          "requestType": "writeProperty",
          "objectId": "analogOutput:1",
          "propertyId": "presentValue"
        }
      ],
      "serverSideRpc": [
        {
          "method": "set_state",
          "requestType": "writeProperty",
          "requestTimeout": 10000,
          "objectId": "binaryOutput:1",
          "propertyId": "presentValue"
        },
        {
          "method": "get_state",
          "requestType": "readProperty",
          "requestTimeout": 10000,
          "objectId": "binaryOutput:1",
          "propertyId": "presentValue"
        }
      ]
    }
  ]
}

{% endhighlight %}

</details>


### Section "general": description and configuration parameters

Configuration in this section uses to configure the gateway in the BACnet network.  

| **Parameter**             | **Default value**        | **Description**                                       |
|:-|:-|-
| **objectName**            | **TB_gateway**           | The gateway object name in the BACnet network.        |
| **address**               | **192.168.188.181:1052** | The gateway address in the BACnet network.            |
| **objectIdentifier**      | **599**                  | The gateway object identifier in the BACnet network.  |
| **maxApduLengthAccepted** | **1024**                 | Maximal length of the APDU.                           |
| **segmentationSupported** | **segmentedBoth**        | 
| **vendorIdentifier**      | **15**                   | 

Example:

```json
  "general": {
    "objectName": "TB_gateway",
    "address": "192.168.188.181:1052",
    "objectIdentifier": 599,
    "maxApduLengthAccepted": 1024,
    "segmentationSupported": "segmentedBoth",
    "vendorIdentifier": 15
  },
```

##### Device object settings
This configuration contains common connection parameters and settings for data processing.  
Available parameters are as follows:

| **Parameter**  | **Default value**                  | **Description**                                                                                     |
|:-|:-|-
| **deviceName** | **BACnet Device ${objectName}**    | Device name for ThingsBoard. You can use **objectName** property to get name of object from device. |
| **deviceType** | **default**                        | Device type for ThingsBoard.                                                                        |
| **address**    | **192.168.188.181:10520**          | Device address in the BACnet network.                                                               |
| **pollPeriod** | **10000**                          | Period to check data on the device.                                                                 |

Example:

```json
  "devices": [
    {
      "deviceName": "BACnet Device ${objectName}",
      "deviceType": "default",
      "address": "192.168.188.181:10520",
      "pollPeriod": 10000,
```

###### Key settings for "attributes"

Configuration in this sub-section units provides settings for processing data from BACnet device as attribute of device on ThingsBoard platform instance.

| **Parameter**  | **Default value**  | **Description**                                     |
|:-|:-|-
| **key**        | **temperature**    | Attribute key for ThingsBoard platform instance.    |
| **objectId**   | **analogOutput:1** | Object id in the BACnet device.                     |
| **propertyId** | **presentValue**   | Property id in the BACnet device.                   |

Example:

```json
      "attributes": [
        {
          "key": "temperature",
          "objectId": "analogOutput:1",
          "propertyId": "presentValue"
        }
      ],
```

###### Key settings for "timeseries"

Configuration in this sub-section units provides settings for processing data from BACnet device as a telemetry of device on ThingsBoard platform instance. 

| **Parameter**  | **Default value** | **Description**                                     |
|:-|:-|-
| **key**        | **state**         | Telemetry key for ThingsBoard platform instance.    |
| **objectId**   | **binaryValue:1** | Object id in the BACnet device.                     |
| **propertyId** | **presentValue**  | Property id in the BACnet device.                   |

Example:

```json
      "timeseries": [
        {
          "key": "state",
          "objectId": "binaryValue:1",
          "propertyId": "presentValue"
        }
      ],
```

###### Key settings for "attributeUpdates"
Configuration in this sub-section units provides settings for processing data from shared attributes on ThingsBoard platform instance to the BACnet device.

| **Parameter**  | **Default value**  | **Description**                                                   |
|:-|:-|-
| **key**        | **brightness**     | Name of the shared attribute on ThingsBoard instance.             |
| **requestType**| **writeProperty**  | Should be a "writeProperty". Added for further development.       |
| **objectId**   | **analogOutput:1** | Object id in the BACnet device.                                   |
| **propertyId** | **presentValue**   | Property id in the BACnet device.                                 |

Example:

```json
      "attributeUpdates": [
        {
          "key": "brightness",
          "requestType": "writeProperty",
          "objectId": "analogOutput:1",
          "propertyId": "presentValue"
        }
      ],
```

###### Key settings for "serverSideRpc"
Configuration in this sub-section units provides settings for processing RPC from ThingsBoard instance to the BACnet device.

| **Parameter**         | **Default value**  | **Description**                                                           |
|:-|:-|-
| **key**               | **set_state**      | Name of the shared attribute on ThingsBoard instance.                     |
| **requestType**       | **writeProperty**  | "**writeProperty**" to write data and "**readProperty**" to read data.    |
| **requestTimeout**    | **30**             | Timeout to wait the response from the BACnet device, seconds.             |
| **objectId**          | **analogOutput:1** | Object id in the BACnet device.                                           |
| **propertyId**        | **presentValue**   | Property id in the BACnet device.                                         |

Examples:

```json
      "serverSideRpc": [
        {
          "method": "set_state",
          "requestType": "writeProperty",
          "requestTimeout": 30,
          "objectId": "binaryOutput:1",
          "propertyId": "presentValue"
        },
        {
          "method": "get_state",
          "requestType": "readProperty",
          "requestTimeout": 30,
          "objectId": "binaryOutput:1",
          "propertyId": "presentValue"
        }
      ]
```

##### Object identifiers

The BACnet connector Object identifiers consist of two parts separated by colon (“:”) symbol:  
the name of object and the number of this object on the device.  

Tested and supported objects:  

| **BACnet object id** | **ThingsBoard object id** |
|-|-
| **Binary input**     | **binaryInput**  |
| **Binary output**    | **binaryOutput** |
| **Binary value**     | **binaryValue**  |
| **Analog Input**     | **analogInput**  |
| **Analog output**    | **analogOutput** |
| **Analog value**     | **analogValue**  |

Objects in testing:  

* accumulatorObject
* averagingObject
* calendarObject
* commandObject
* fileObject
* lifeSafetyPointObject
* lifeSafetyZoneObject
* loopObject
* multiStateInputObject
* multiStateOutputObject
* multiStateValueObject
* notificationClassObject
* programObject
* pulseConverterObject
* scheduleObject
* structuredViewObject
* trendLogObject

##### Property identifiers

Property identifiers depend on type of the BACnet object, provided in camelCase, e.g.
**presentValue**
**objectName**
**objectDescription**
etc.



## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
