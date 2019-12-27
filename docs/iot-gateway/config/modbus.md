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
    "name": "Modbus Default Server",
    "type": "tcp",
    "host": "127.0.0.1",
    "port": 5020,
    "timeout": 35,
    "method": "rtu",
    "devices": [
      {
        "unitId": 1,
        "deviceName": "Temp Sensor",
        "attributesPollPeriod": 5000,
        "timeseriesPollPeriod": 5000,
        "sendDataOnlyOnChange": true,
        "attributes": [
          {
            "byteOrder": "BIG",
            "tag": "test",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 0
          }
        ],
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
        "rpc": {
          "turnLightOn": {
            "address": 4,
            "bit": 2,
            "value": true
          },
          "turnLightOff": {
            "address": 4,
            "bit": 2,
            "value": false
          },
          "getCPULoad": {
            "tag": "Integer",
            "value": 42,
            "functionCode": 16,
            "address": 0,
            "unitId": 1,
            "byteOrder": "BIG",
            "registerCount": 1
          }
        }
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
| byteOrder     | **BIG**      | Order of bytes to read.                                                        |
| tag           | **test**     | Tag, which will use as attribute key for ThingsBoard platform instance.        |
| type          | **long**     | Type of value. (**long**, **integer**, **string**, **double**, **bit**)        |
| functionCode  | **4**        | Function to use in processing data. Based on Modbus standard.                  |
| registerCount | **1**        | Count of registers to read.                                                    |
| address       | **0**        | Register address to check.                                                     |
|---

This part of configuration will look like:  

```json
        "attributes": [
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

| **Parameter** | **Default value**     | **Description**                                                         |
|:-|:-|-
| turnLightOn   |                       | Name of RPC function. Can be different (Variants provided below.)       |
| address       | **4**                 | Register address to set/read.                                           |
| bit           | **2**                 | Bit address to set/read.                                                |
| value         | **true**              | The value will be written to register.                                  |
| registerCount | **1**                 | Count of registers to set/read.                                         |
| unitId        | **1**                 | Identifier of the device unit, on which rpc request will be executed.   |
| byteOrder     | **BIG**               | Byte order, for value, that will be written to register.                |
| tag           | **Integer**           | Type of value. (**long**, **integer**, **string**, **double**, **bit**) |
|---

This part of configuration will look like:  

```json
        "rpc": {
          "turnLightOn": {
            "address": 4,
            "bit": 2,
            "value": true
          },
          "turnLightOff": {
            "address": 4,
            "bit": 2,
            "value": false
          },
          "getCPULoad": {
            "tag": "Integer",
            "value": 42,
            "functionCode": 16,
            "address": 0,
            "unitId": 1,
            "byteOrder": "BIG",
            "registerCount": 1
          }
        }
      }
```

{% capture modbusRPCinfo %}
<br>
**Parameters in this subsection of the configuration depend on the type of rpc request, you need.**
{% endcapture %}
{% include templates/info-banner.md content=modbusRPCinfo %}


## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
