---
layout: docwithnav
title: Modbus Extension Configuration
description: Modbus protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with Modbus extension configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe extension configuration file below.

### Extension configuration: modbus-config.json

Extension configuration is a JSON file that contains information about how to connect and monitor a list of Modbus slaves.
The root JSON element should contain "servers" array. Each server (slave or gateway) in the array is configured using following properties:

#### Basic connection properties

| **Property**        | **Description**                               |
|---------------------|-----------------------------------------------|
| transport           | Protocol configuration                        |
| devices             | Devices (slaves) mapping configuration        |

For Example:

```json
{
  "servers": [
    {
      "transport": {
      ...
      },
      "devices": [
      ...
      ]
    }
  ]
}
      
```

#### Transport properties

Modbus extension supports "tcp", "udp" and "rtu" transports.

##### TCP transport

| **Property**           | **Description**                        | **Default value**  |
|------------------------|----------------------------------------|--------------------|
| type                   | Transport type                         | tcp                |
| host                   | Host                                   | localhost          |
| port                   | Port                                   | 502                |
| timeout                | Socket timeout     in milliseconds     | 3000               |
| reconnect              | Automatically reconnect                | true               |
| rtuOverTcp             | Enable RTU over TCP feature            | false              |

Example of "tcp" transport configuration:

```json
{
      ...
      "transport": {
        "type": "tcp",
        "host": "localhost",
        "port": 654,
        "timeout": 5000,
        "reconnect": true,
        "rtuOverTcp": false
      }
      ...
}
      
```

##### UDP transport

| **Property**        | **Description**                        | **Default value** |
|---------------------|----------------------------------------|-------------------|
| type                | Transport type                         | udp               |
| host                | Host                                   | localhost         |
| port                | Port                                   | 502               |
| timeout             | Socket timeout in milliseconds         | 3000              |

Example of "udp" transport configuration:

```json
{
      ...
      "transport": {
        "type": "udp",
        "host": "localhost",
        "port": 502,
        "timeout": 5000
      }
      ...
}
      
```

##### RTU transport

| **Property**        | **Description**                    | **Values**        |
|---------------------|------------------------------------|-------------------|
| type                | Transport type                     | rtu (default)     |
| portName            | Name of port                       |                   |
| encoding            | Serial encoding                    | ascii,rtu         |
| baudRate            | Baud rate                          | 9600,115200 ...   |
| dataBits            | Number of data bits                | 7,8               |
| stopBits            | Number of stop bits                | 1,2               |
| parity              | Type of parity                     | none,even,odd     |
| timeout             | Socket timeout in milliseconds     | 3000 (default)    |

Example of "rtu" transport configuration:

```json
{
      ...
      "transport": {
        "type": "rtu",
        "portName": "COM1",
        "encoding": "ascii",
        "baudRate": 115200,
        "dataBits": 7,
        "stopBits": 1,
        "parity": "even",
        "timeout": 5000
      }
      ...
}
      
```

#### Device mapping

Device mapping configuration setup rules of Modbus slave(s) monitoring.

| **Property**          | **Description**                                       | **Values**        |
|-----------------------|-------------------------------------------------------|-------------------|
| unitId                | Modbus unit identifier                                | 1-247             |
| deviceName            | Arbitrary name of device                              |                   |
| attributesPollPeriod  | Period of polling attributes in milliseconds          | 1000 (default)    |
| timeseriesPollPeriod  | Period of polling timeseries in milliseconds          | 1000 (default)    |
| attributes            | Attributes (tags) mapping rules                       |                   |
| timeseries            | Timeseries (tags) mapping rules                       |                   |

Example of device mapping configuration:

```json
{
      ...
      "devices": [
        {
          "unitId": 1,
          "deviceName": "Temp Sensor",
          "attributesPollPeriod": 5000,
          "timeseriesPollPeriod": 5000,
          "attributes": [
            {
            ...tag mappings
            }
          ],
          "timeseries": [
            {
            ...tag mappings
            }
          ]
        }
      ]
      ...
}
```

#### Tag mapping

Tag mapping configuration setup rules of Modbus entities (coils, discrete inputs, holding and input registers) monitoring and conversion to ThingsBoard Key-Value format.

| **Property**          | **Description**                                                                       | **Values**                            |
|-----------------------|---------------------------------------------------------------------------------------|---------------------------------------|
| tag                   | Arbitrary name of Modbus entity what will be read                                     |                                       |
| pollPeriod            | Period of polling in milliseconds. Overrides values defined on device mapping level   |                                       |
| type                  | Type of data to what Modbus entity will converted                                     | boolean,long,double,string            |
| functionCode          | Modbus function code                                                                  | 1,2,3,4                               |
| address               | Address of coil/discrete input/register                                               | 0-65535                               |
| registerCount         | Number of hardware registers to be read                                               | 1 (default) -...                      |
| bit                   | **ONLY boolean**: Index of bit to be read (ascending numbering from right to left)    | 0-15                                  |
| byteOrder             | Order of bytes                                                                        | BIG (default),LITTLE,1023,CD AB EG FH |

##### Modbus functions

The Modbus extension supports the following Modbus functions:

* Read Coils (function code 1)
* Read Discrete Inputs (function code 2)
* Read Multiple Holding Registers (function code 3)
* Read Input Registers (function code 4)

##### Data conversion rules

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

##### Byte order

The byte order can be different among hardware manufactures. To correctly map data to Thingsboard types you must specify the byte order.
There are several ways how to do it:

* **BIG (big)** and **LITTLE( little)** constants mean big-endianness and little-endianness correspondingly
* numerical markers 0,1,2,3,4,5.... where 0 means least significant byte
* literal markers A(a),B(b),C(c),D(d),E(e)... where A means least significant byte

| **Hardware type** | **Marker limits**                      |
|-------------------|----------------------------------------|
| Bool              | [0-1],[A-B] for function codes 3 and 4 |
| Word              | [0-1],[A-B]                            |
| DWord/Integer     | [0-3],[A-D]                            |
| Integer64         | [0-7],[A-H]                            |
| Float             | [0-3],[A-D]                            |
| Double            | [0-7],[A-H]                            |
| String            | [0-1],[A-B]                            |

##### Examples

Read each second (1000 ms - default value for polling) a coil to get a boolean value.

```json
  "timeseries": [
    {
      "tag": "Coil",
      "type": "boolean",
      "functionCode": 1,
      "address": 75
    }
  ]
```

Read each second (1000 ms - default value for polling) 14th bit of a holding register in little-endianness to get a boolean value.

```json
  "timeseries": [
    {
      "tag": "BooleanValue",
      "type": "boolean",
      "functionCode": 3,
      "address": 150,
      "bit": 14,
      "byteOrder": "little"
    }
  ]
```

Read each second (1000 ms - default value for polling) 4 holding register in the 'CD AB EF GH' byte order to get a long value.

```json
  "timeseries": [
    {
      "tag": "LongValue",
      "type": "long",
      "functionCode": 3,
      "address": 154,
      "registerCount": 4,
      "byteOrder": "CD AB EF GH"
    }
  ]
```

Read each hour (3600000 ms) 6 input registers in big-endianness to get a string 12-character long.

```json
  "attributes": [
    {
      "tag": "Serial number",
      "type": "string",
      "functionCode": 4,
      "address": 146,
      "registerCount": 6,
      "pollPeriod": 3600000
    }
  ]
```

### Server-side RPC

For general information how to use server-side RPC feature please visit [this guide](/docs/user-guide/rpc/#server-side-rpc-api/).

#### Multiple tags write

This RPC method allows user to simultaneously write values to the multiple tags of the connected device.

##### Request format

| **Property** | **Description**                 | **Value**             |
|--------------|---------------------------------|-----------------------|
| method       | RPC method name                 | write                 |
| params       | Format of RPC method parameters | JSON array of objects |

###### Method parameters format

The method parameters are represented as JSON array of objects. Each object describes how the value needs to be encoded and written via Modbus protocol.
Each object has the following structure:

| **Property**  | **Description**                                   | **Value**                             |
|---------------|---------------------------------------------------|---------------------------------------|
| tag           | Arbitrary name of Modbus tag that will be written |                                       |
| value         | The value that will be written                    | boolean,long,double,string            |
| functionCode  | Modbus function code                              | 5,6,16                                |
| address       | Address of coil/register                          | 0-65535                               |
| registerCount | Number of hardware registers to be written        | 1 (default) -...                      |
| byteOrder     | Order of bytes                                    | BIG (default),LITTLE,1023,CD AB EG FH |

**NOTE:** For more details about the _registerCount_ and _byteOrder_ parameters see above the _Tag mapping_ section.

The Modbus RPC extension supports the following Modbus functions:

* Force Single Coil (function code 5)
* Preset Single Register (function code 6)
* Preset Multiple Registers (function code 16)

##### Response format

###### Success

| **Property**   | **Description**                           | **Value** |
|----------------|-------------------------------------------|-----------|
| _tag name 1_   | Name of Modbus tag that has been written  | ok        |
| _tag name 2_   | Name of Modbus tag that has been written  | ok        |
| ...            | ...                                       | ok        |

###### Global error

| **Property**  | **Description**           |
|---------------|---------------------------|
| error         | Description of the error  |

###### Tag error

| **Property**   | **Description**                                      |
|----------------|------------------------------------------------------|
| _tag name 1_   | Description of the error while writing the tag value |
| _tag name 2_   | ...                                                  |
| ...            | ...                                                  |


##### Examples

###### Request

```json
    [
        {
            "tag": "WriteCoil",
            "value": true,
            "functionCode": 5,
            "address": 1
        },
        {
            "tag": "WriteLittleWord",
            "value": 123,
            "functionCode": 6,
            "address": 1,
            "byteOrder": "LITTLE"
        },
        {
            "tag": "WriteBigWord",
            "value": 4567,
            "functionCode": 6,
            "address": 2,
            "byteOrder": "BIG"
        },
        {
            "tag": "WriteInteger1032",
            "value": 345678,
            "functionCode": 16,
            "address": 3,
            "byteOrder": "1032",
            "registerCount": 2
        },
        {
            "tag": "WriteLong10325476",
            "value": 9223372036854775806,
            "functionCode": 16,
            "address": 7,
            "registerCount": 4,
            "byteOrder": "1 0 3 2 5 4 7 6"
        },
        {
            "tag": "WriteFloat1032",
            "value": 3.4028234e+38,
            "functionCode": 16,
            "address": 11,
            "registerCount": 2,
            "byteOrder": "B A D C"
        },
        {
            "tag": "WriteDouble45670123",
            "value": 1.7976931348623156e+308,
            "functionCode": 16,
            "address": 13,
            "registerCount": 4,
            "byteOrder": "45670123"
        },
        {
            "tag": "WriteString",
            "value": "Salute!",
            "functionCode": 16,
            "address": 17,
            "registerCount": 5
        }
    ]
```

###### Response

```json
    {
        "SuccesWriteTag": "ok",
        "ErrorWriteTag": "No tag found"
    }
```

```json
    {
        "error": "Unsupported RPC method"
    }
```

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
