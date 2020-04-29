---
layout: docwithnav
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

### Section "server"
Configuration in this section uses for connecting to Modbus server.  

{% capture modbusConnectionType %}
TCP/UDP<small>Connection over TCP/UDP protocol</small>%,%tcpUdp%,%templates/iot-gateway/modbus-tcpudp-connection.md%br%
Serial<small>Connection over serial port</small>%,%serial%,%templates/iot-gateway/modbus-serial-connection.md{% endcapture %}

There are 2 variants of server section:

{% include content-toggle.html content-toggle-id="modbusConnection" toggle-spec=modbusConnectionType %}

<br>

#### Subsection "devices"
In this subsection provides array of configurations for devices, which connected to the Modbus server.

##### Parameters of device 
This configuration section provides configuration for device connection and data processing from those.

| **Parameter**                 | **Default value**   | **Description**                                                                             |
|:-|:-|-
| unitId                        | **1**               | Id of current device on Modbus.                                                             |
| deviceName                    | **Temp Sensor**     | Name of the current device                                                                  |
| attributesPollPeriod          | **5000**            | Period in milliseconds for check the attributes on device.                                  |
| timeseriesPollPeriod          | **5000**            | Period in milliseconds for check the telemetry on device.                                   |
| sendDataOnlyOnChange          | **true**            | Sending only if data changed from last check, if no -- data will send after every check     |
|---

This part of configuration will look like:  

```json
    "devices": [
      {
        "unitId": 1,
        "deviceName": "Temp Sensor",
        "attributesPollPeriod": 5000,
        "timeseriesPollPeriod": 5000,
        "sendDataOnlyOnChange": true,
```

###### Subsection attributes
Configuration in this subsection provides settings for processing data on Modbus server, which will be interpreted in ThingsBoard platform instance as attribute of device.

| **Parameter** | **Default value**   | **Description**                                                         |
|:-|:-|-
| tag           | **test**      | Tag, which will use as attribute key for ThingsBoard platform instance.        |
| type          | **32int**     | Type of value. (**long**, **integer**, **string**, **double**, **bit**)        |
| functionCode  | **4**         | Function to use in processing data. Based on Modbus standard.                  |
| objectsCount  | **1**         | Count of registers to read.                                                    |
| address       | **1**         | Register address to check.                                                     |
|---

Optional parameters:
**multiplier** - result of reading will be multiplied by value of this parameter.
**divider** - result of reading will be divided by value of this parameter.

This part of configuration will look like:  

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

**\*\* Datatypes:**
**string**
**bytes**
**bits**
**8int**
**8uint**
**16int**
**16uint**
**16float**
**32int**
**32uint**
**32float**
**64int**
**64uint**
**64float**

###### Subsection "timeseries"
Configuration in this subsection provides settings for processing data on Modbus server, which will be interpreted in ThingsBoard platform instance as telemetry of device.

| **Parameter** | **Default value**   | **Description**                                                         |
|:-|:-|-
| byteOrder     | **BIG**      | Order of bytes to read. Can be **BIG** or **LITTLE**, depends on hardware.     |
| tag           | **test**     | Tag, which will use as attribute key for ThingsBoard platform instance.        |
| type          | **long**     | Type of value. (**long**, **integer**, **string**, **double**, **bit**)        |
| functionCode  | **4**        | Function to use in processing data. Based on Modbus standard.                  |
| registerCount | **1**        | Count of registers to read.                                                    |
| address       | **0**        | Register address to check.                                                     |
|---

This part of configuration will look like:  

```json
        "timeseries": [
          {
            "byteOrder": "BIG",
            "tag": "test",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 0
          }
        ],
```

The Modbus connector supports the following Modbus functions:

* Read Coils (function code 1)
* Read Discrete Inputs (function code 2)
* Read Multiple Holding Registers (function code 3)
* Read Input Registers (function code 4)

The hardware manufactures can implement various data types. Here are mapping rules that help to convert common hardware data types to Thingsboard key value format:

| **Hardware type** | **Thingsboard type**  | **Function code**  | **Hardware registers** | **Note**                                        |
|-------------------|-----------------------|--------------------|------------------------|-------------------------------------------------|
| Bool              | boolean               | 1-4                | 1                      | Use **bit** property for function codes 3 and 4 |
| Word              | long                  | 3-4                | 1                      |                                                 |
| DWord/Integer     | long                  | 3-4                | 2                      |                                                 |
| Integer64         | long                  | 3-4                | 4                      |                                                 |
| Float             | double                | 3-4                | 2                      |                                                 |
| Double            | double                | 3-4                | 4                      |                                                 |
| String            | string                | 3-4                | 1-...                  | 1 register = 2 characters                       |


###### Subsection "rpc"
Configuration in this subsection provides settings for RPC requests from ThingsBoard platform instance to device.

| **Parameter** | **Default value**     | **Description**                                                             |
|:-|:-|-
| tag           | **turnLightOn**       | Name of RPC function. Can be different (Variants provided below.)           |
| type          | **Integer**           | Type of value. (**long**, **integer**, **string**, **double**, **bit**)**\***    |
| address       | **4**                 | Register address to set/read.                                               |
| bit           | **2**                 | Bit address to set/read.                                                    |
| value         | **true**              | The value will be written to register.                                      |
| registerCount | **1**                 | Count of registers to set/read.                                             |
| unitId        | **1**                 | Identifier of the device unit, on which rpc request will be executed.       |
| byteOrder     | **BIG**               | Byte order, for value, that will be written to register.                    |


|---

This part of configuration will look like:  

```json
        "rpc": [
          {
            "tag": "turnLightOn",
            "address": 4,
            "type": "bit",
            "bit": 2,
            "value": true
          },
          {
            "tag": "turnLightOff",
            "address": 4,
            "type": "bit",
            "bit": 2,
            "value": false
          },
          {
            "tag": "setCPUFanSpeed",
            "type": "int",
            "functionCode": 16,
            "address": 1,
            "byteOrder": "BIG",
            "registerCount": 2
          },
          {
            "tag":"getCPULoad",
            "type": "int",
            "functionCode": 4,
            "address": 0,
            "byteOrder": "BIG",
            "registerCount": 1
          }
        ]
```

{% capture modbusRPCinfo %}
<br>
**Parameters in this subsection of the configuration depend on the type of rpc request, you need.**
{% endcapture %}
{% include templates/info-banner.md content=modbusRPCinfo %}


## Next steps

Explore guides related to main ThingsBoard features:

 - [Connect MODBUS device](/docs/iot-gateway/guides/how-to-connect-modbus-device/) - how to connect MODBUS device using ThingsBoard IoT Gateway
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
