---
layout: docwithnav-gw
title: Modbus Connector Configuration
description: Modbus protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with Modbus connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this connector.
We will describe connector configuration file below.  
<br>
<details>

<summary>
<b>Example of Modbus Connector config file. Press to expand.</b>
</summary>

{% highlight json %}

{
  "server": {
    "type": "tcp",
    "host": "127.0.0.1",
    "port": 5020,
    "timeout": 35,
    "method": "socket",
    "byteOrder": "BIG",
    "devices": [
      {
        "unitId": 1,
        "deviceName": "Temp Sensor",
        "attributesPollPeriod": 5000,
        "timeseriesPollPeriod": 5000,
        "sendDataOnlyOnChange": true,
        "attributes": [
          {
            "tag": "string_read",
            "type": "string",
            "functionCode": 4,
            "objectsCount": 4,
            "address": 1
          },
          {
            "tag": "bits_read",
            "type": "bits",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 5
          },
          {
            "tag": "8int_read",
            "type": "8int",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 6
          },
          {
            "tag": "16int_read",
            "type": "16int",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 7
          },
          {
            "tag": "32int_read_divider",
            "type": "32int",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 8,
            "divider": 10
          },
          {
            "tag": "8int_read_multiplier",
            "type": "8int",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 10,
            "multiplier": 10
          },
          {
            "tag": "32int_read",
            "type": "32int",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 11
          },
          {
            "tag": "64int_read",
            "type": "64int",
            "functionCode": 4,
            "objectsCount": 4,
            "address": 13
          }
      ],
      "timeseries": [
          {
            "tag": "8uint_read",
            "type": "8uint",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 17
          },
          {
            "tag": "16uint_read",
            "type": "16uint",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 18
          },
          {
            "tag": "32uint_read",
            "type": "32uint",
            "functionCode": 4,
            "objectsCount": 4,
            "address": 20
          },
          {
            "tag": "64uint_read",
            "type": "64uint",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 24
          },
          {
            "tag": "16float_read",
            "type": "16float",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 25
          },
          {
            "tag": "32float_read",
            "type": "32float",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 26
          },
          {
            "tag": "64float_read",
            "type": "64float",
            "functionCode": 4,
            "objectsCount": 4,
            "address": 28
          }
        ],
        "attributeUpdates": [
          {
            "tag": "shared_attribute_write",
            "type": "32int",
            "functionCode": 6,
            "objectsCount": 2,
            "address": 29
          }
        ],
        "rpc": [
          {
            "tag": "setValue",
            "type": "bits",
            "functionCode": 5,
            "objectsCount": 1,
            "address": 31
          },
          {
            "tag": "getValue",
            "type": "bits",
            "functionCode": 1,
            "objectsCount": 1,
            "address": 31
          },
          {
            "tag": "setCPUFanSpeed",
            "type": "32int",
            "functionCode": 16,
            "objectsCount": 2,
            "address": 33
          },
          {
            "tag":"getCPULoad",
            "type": "32int",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 35
          }
        ]
      }
    ]
  }
}

{% endhighlight %}

</details>

### Section "server": description and configuration parameters
In order to connect to Modbus server, the one must set required parameters of section "server".
Due to the nature of preferred way of communication with Modbus server there are 2 options how to configure this part: if using TCP/UDP or via Serial port.  

{% capture modbusConnectionType %}
TCP/UDP<small>Connection over TCP/UDP protocol</small>%,%tcpUdp%,%templates/iot-gateway/modbus-tcpudp-connection.md%br%
Serial<small>Connection over serial port</small>%,%serial%,%templates/iot-gateway/modbus-serial-connection.md{% endcapture %}

There are 2 variants of server section:

{% include content-toggle.html content-toggle-id="modbusConnection" toggle-spec=modbusConnectionType %}

#### Sub-section "devices"
This sub-section provides array of configurations for devices.

##### Device object settings
This configuration contains common connection parameters and settings for data processing. Available parameters are as follows:

| **Parameter**                 | **Default value**   | **Description**                                                                             |
|:-|:-|-
| unitId                        | **1**               | Id of current device on Modbus.                                                             |
| deviceName                    | **Temp Sensor**     | Name of the current device                                                                  |
| attributesPollPeriod          | **5000**            | Period in milliseconds for check the attributes on device.                                  |
| timeseriesPollPeriod          | **5000**            | Period in milliseconds for check the telemetry on device.                                   |
| sendDataOnlyOnChange          | **true**            | Sending only if data changed from last check, if no -- data will send after every check     |
|---

Example:

```json
    "devices": [
      {
        "unitId": 1,
        "deviceName": "Temp Sensor",
        "attributesPollPeriod": 5000,
        "timeseriesPollPeriod": 5000,
        "sendDataOnlyOnChange": true,
```

###### Key settings for "attributes"
Configuration in this unit provides settings for processing data on Modbus server, which will be interpreted in ThingsBoard platform instance as attribute of device.

| **Parameter** | **Default value**   | **Description**                                                          |
|:-|:-|-
| tag           | **test**      | Tag, which will use as attribute key for ThingsBoard platform instance.        |
| type          | **32int**     | Type of value. [Available data types](#data-types)                             |
| functionCode  | **4**         | Function to use in processing data. [Modbus functions](#modbus-functions)      |
| objectsCount  | **1**         | Count of objects to read.                                                      |
| address       | **1**         | Object address to check.                                                       |
|---

Optional parameters:  
**multiplier** - result of reading will be multiplied by value of this parameter.  
**divider** - result of reading will be divided by value of this parameter.  

Example:

```json
        "attributes": [
          {
            "tag": "test",
            "type": "32int",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 1
          }
        ],
```

###### Key settings for "timeseries"
Configuration in this unit provides settings for processing data on Modbus server, which will be interpreted in ThingsBoard platform instance as telemetry of device.

| **Parameter** | **Default value**   | **Description**                                                                              |
|:-|:-|-
| tag           | **test**     | Tag, which will use as attribute key for ThingsBoard platform instance.                             |
| type          | **16uint**   | Type of value. [Available data types](#data-types)                                                  |
| functionCode  | **4**        | Function to use in processing data. [Modbus functions](#modbus-functions)                           |
| objectsCount  | **1**        | Count of objects to read.                                                                           |
| address       | **1**        | Object address to check.                                                                            |
|---

Example:

```json
        "timeseries": [
          {
            "tag": "test",
            "type": "16uint",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 1
          }
        ],
```

###### Key settings for "attributeUpdates"
Configuration in this unit provides settings for Attribute update requests from ThingsBoard platform instance.

| **Parameter** | **Default value**          | **Description**                                                             |
|:-|:-|-
| tag           | **shared_attribute_write** | Shared attribute name.                                                      |
| type          | **32int**                   | Type of value. [Available data types](#data-types)                         |
| functionCode  | **6**                      | Function to use in processing data. [Modbus functions](#modbus-functions)   |
| objectsCount  | **2**                      | Count of objects to write.                                                  |
| address       | **1**                      | Object address.                                                             |
|---

Example:

```json
        "attributeUpdates": [
          {
            "tag": "shared_attribute_write",
            "type": "32int",
            "functionCode": 6,
            "objectsCount": 2,
            "address": 1
          }
        ],
```

###### Key settings for "rpc"
Configuration in this unit provides settings for RPC requests from ThingsBoard platform instance to device.

| **Parameter** | **Default value**     | **Description**                                                             |
|:-|:-|-
| tag           | **setValue** | RPC method name.                                                                     |
| type          | **bits**     | Type of value. [Available data types](#data-types)                                   |
| functionCode  | **5**        | Function to use in processing data. [Modbus functions](#modbus-functions)            |
| objectsCount  | **1**        | Count of objects to write.                                                           |
| address       | **1**        | Object address.                                                                      |
|---

Example:

```json
        "rpc": [
          {
            "tag": "setValue",
            "type": "bits",
            "functionCode": 5,
            "objectsCount": 1,
            "address": 1
          }
        ],
```


##### Additional information

Additional information about Modbus functions and supported data types.

###### Modbus functions

The Modbus connector supports the following Modbus functions:

| **Modbus function code** | **Description**                 |
| *Read data*                                                |
| **1**                    | Read Coils                      |
| **2**                    | Read Discrete Inputs            |
| **3**                    | Read Multiple Holding Registers |
| **4**                    | Read Input Registers            |
| *Write data:*                                              |
| **5**                     | Write Coil                     |
| **6**                     | Write Register                 |
| **15**                    | Write Coils                    |
| **16**                    | Write Registers                |


###### Data types

A list and description of the supported data types for reading/writing data.

| **Type**    | **Function code** | **Objects count** | **Note**                                                                                                            |
|-|-|-|
| **string**  | 3-4               | 1-...             | Read bytes from registers and decode it ('UTF-8' coding).                                                           |
| **bytes**   | 3-4               | 1-...             | Read bytes from registers.                                                                                          |
| **bits**    | 1-4               | 1-...             | Read coils. If objects count 1 - result will be interpret as a boolean, else the result will be an array with bits. |
| **16int**   | 3-4               | 1                 | Integer 16 bit.                                                                                                     |
| **16uint**  | 3-4               | 1                 | Unsigned integer 16 bit.                                                                                            |
| **16float** | 3-4               | 1                 | Float 16 bit.                                                                                                       |
| **32int**   | 3-4               | 2                 | Integer 32 bit.                                                                                                     |
| **32uint**  | 3-4               | 2                 | Unsigned integer 32 bit.                                                                                            |
| **32float** | 3-4               | 2                 | Float 32 bit.                                                                                                       |
| **64int**   | 3-4               | 4                 | Integer 64 bit.                                                                                                     |
| **64uint**  | 3-4               | 4                 | Unsigned integer 64 bit.                                                                                            |
| **64float** | 3-4               | 4                 | Float 64 bit.                                                                                                       |



## Next steps

Explore guides related to main ThingsBoard features:

 - [Connect Modbus device](/docs/iot-gateway/guides/how-to-connect-modbus-device/) - how to connect Modbus device using ThingsBoard IoT Gateway
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
