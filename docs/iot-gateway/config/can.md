---
layout: docwithnav-gw
title: CAN Connector Configuration
description: CAN protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with CAN connector configuration for ThingsBoard IoT Gateway.  
Use [general configuration](/docs/iot-gateway/configuration/) to enable this connector.  
We will describe connector configuration file below.

<b>Example of CAN Connector config file.</b>

{% capture canConf %}

{
  "interface": "socketcan",
  "channel": "vcan0",
  "backend": {
    "fd": true
  },
  "reconnectPeriod": 5,
  "devices": [
    {
      "name": "Car",
      "sendDataOnlyOnChange": false,
      "enableUnknownRpc": true,
      "strictEval": false,
      "attributes": [
        {
          "key": "isDriverDoorOpened",
          "nodeId": 41,
          "command": "2:2:big:8717",
          "value": "4:1:int",
          "expression": "bool(value & 0b00000100)",
          "polling": {
            "type": "once",
            "dataInHex": "AB CD AB CD"
          }
        }
      ],
      "timeseries": [
        {
          "key": "rpm",
          "nodeId": 1918,
          "isExtendedId": true,
          "command": "2:2:big:48059",
          "value": "4:2:big:int",
          "expression": "value / 4",
          "polling": {
            "type": "always",
            "period": 5,
            "dataInHex": "aaaa bbbb aaaa bbbb"
          }
        },
        {
          "key": "milliage",
          "nodeId": 1918,
          "isExtendedId": true,
          "value": "4:2:little:int",
          "expression": "value * 10",
          "polling": {
            "type": "always",
            "period": 30,
            "dataInHex": "aa bb cc dd ee ff aa bb"
          }
        }
      ],
      "attributeUpdates": [
        {
          "attributeOnThingsBoard": "softwareVersion",
          "nodeId": 64,
          "isExtendedId": true,
          "dataLength": 4,
          "dataExpression": "value + 5",
          "dataByteorder": "little"
        }
      ],
      "serverSideRpc": [
        {
          "method": "sendSameData",
          "nodeId": 4,
          "isExtendedId": true,
          "isFd": true,
          "bitrateSwitch": true,
          "dataInHex": "aa bb cc dd ee ff    aa bb aa bb cc d ee ff"
        },
        {
          "method": "setLightLevel",
          "nodeId": 5,
          "dataLength": 2,
          "dataByteorder": "little",
          "dataBefore": "00AA"
        },
        {
          "method": "setSpeed",
          "nodeId": 16,
          "dataAfter": "0102",
          "dataExpression": "userSpeed if maxAllowedSpeed > userSpeed else maxAllowedSpeed"
        }
      ]
    }
  ]
}

{% endcapture %}
{% include code-toggle.liquid code=canConf params="conf|.copy-code.expandable-20" %}

## Root section
The root part of the CAN connector configuration provides basic information on how to connect/reconnect to a Can bus and  includes the list of device configurations.

| **Parameter**                 | **Default value**  | **Description**                                                                                            |
|:-|:-------------------|------------------------------------------------------------------------------------------------------------
| name                          | **CAN Connector**  | Name of connector.                                                                                         |
| **interface**                 | **socketcan**      | Type of CAN interface.                                                                                     |
| **channel**                   | **vcan0**          | Channel name of CAN interface.                                                                             |
| backend                       |                    | Interface specific configuration.                                                                          |
| reconnect                     | **true**           | Determines whether to reconnect after bus error while sending/receiving CAN messages.                      |
| reconnectPeriod               | **30.0**           | The period, in seconds, between reconnect attempts. Floating point means more precise time than seconds.   |
| reconnectCount                |                    | Number of reconnect attempts after a bus error. If not specified, it means an infinite number of attempts. |
| **devices**                   |                    | List of devices.                                                                                           |
|---

You can [find](https://python-can.readthedocs.io/en/stable/configuration.html#interface-names) the list of supported CAN interfaces in the documentation of the Python CAN library.  

### Section "backend"
This section is optional and it provides configuration for specific CAN interface. Each option has a default value. To get a list of available options, [see](https://python-can.readthedocs.io/en/stable/configuration.html#interface-names) the documentation for specific interface type.  

For example, the SocketCAN interface [supports](https://python-can.readthedocs.io/en/stable/interfaces/socketcan.html#bus) the following configuration options:  
* *receive_own_messages*
* *fd*
* *can_filters*

```json
"backend": {
  "receive_own_messages": true,
  "fd": true
}
```
This means that transmitted messages should also be received and CAN-FD frames should be supported. By default, these options are disabled.  

### Section "devices"
This section provides an array of configurations for devices connected through the CAN bus.  

| **Parameter**                 | **Default value** | **Description**                                                                                                                 |
|:-|:------------------|--------------------------------------------------------------------------------------------------------------------------------- 
| **name**                      |                   | Name of device.                                                                                                                 |
| type                          | **can**           | Type of device.                                                                                                                 |
| sendDataOnlyOnChange          | **false**         | Sends data only if it has changed from the last check, if not specified data will be sent after each received CAN message.      |
| strictEval                    | **true**          | Restricted mode of Python [eval()](https://docs.python.org/3/library/functions.html#eval) API.                                  |
| enableUnknownRpc              | **false**         | Allow processing RPC commands not listed in [serverSideRpc](/docs/iot-gateway/config/can/#subsection-serversiderpc) subsection. |
| overrideRpcConfig             | **false**         | Allow overriding RPC command configuration (all or some of options) by data received from server.                               |
| converters                    |                   | Custom converters.                                                                                                              |
| attributes                    |                   | List of device attributes.                                                                                                      |
| timeseries                    |                   | List of time series keys.                                                                                                       |
| attributeUpdates              |                   | List of shared attributes to be subscribed for.                                                                                 |
| serverSideRpc                 |                   | List of RPC commands.                                                                                                           |
|---

If *enableUnknownRpc* is set to *true*, *overrideRpcConfig* is forcibly set to *true* as well.  

**Note** that despite [attributes](/docs/iot-gateway/config/can/#subsection-attributes-or-timeseries), [timeseries](/docs/iot-gateway/config/can/#subsection-attributes-or-timeseries), [attributeUpdates](/docs/iot-gateway/config/can/#subsection-attributeupdates) and [serverSideRpc](/docs/iot-gateway/config/can/#subsection-serversiderpc) being optional subsections, at least one of them must be set to utilize the device configuration.

#### Subsection "converters"
CAN connector is provided with built-in uplink/downlink data converters. One can specify a custom converter for either uplink, downlink, or both.

| **Parameter**                     | **Default value**   | **Description**                     |
|:-|:-|-
| uplink                            |                     | Python class of uplink converter.   |
| downlink                          |                     | Python class of downlink converter. |

*As input data* **the uplink converter** gets CAN payload (array of bytes) and list of configurations from ["attributes" and "timeseries" subsection](/docs/iot-gateway/config/can/#subsection-attributes-or-timeseries) to know which bytes to get and how they need to be interpreted.  

*As output data* **the uplink converter** returns dictionary with attribute and telemetry lists. Each element of this list is key/value pair, where key is attribute name or time series key and the value is what it is.  

```json
{
  "attributes": [{"isDriverDoorOpened": "true"}],
  "telemetry": [{"rpm":100},{"milliage": 300000}]
}
```
*As input data* **the downlink converter** gets the value (or values in case of RPC) and configuration (from ["attributeUpdates"](/docs/iot-gateway/config/can/#subsection-attributeupdates) or ["serverSideRpc"](/docs/iot-gateway/config/can/#subsection-serversiderpc) subsections) that describes how to convert the value (or values) to CAN payload.  

*As output data* **the downlink converter** returns CAN payload (array of bytes) for the further sending.  

#### Subsection "attributes" or "timeseries"
This subsection provides the list of configurations, each of them describes which bytes to get from CAN payload (array of bytes) and how to convert these bytes to a Thingsboard attribute or a time series key.  

| **Parameter** | **Default value**   | **Description**                                                         |
|:-|:-|-
| **key**       |                     | Name of attribute or time series key.                                                        |
| **nodeId**    |                     | CAN node (arbitration) id.        |
| **value**     |                     | Value conversion configuration.       |
| expression    |                     | Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to modify _value_ in some way.                                                     |
| command       |                     | Command conversion configuration.                                                    |
| polling       |                     | Polling configuration.                                                     |
| isExtendedId  | **false**           | If True means extended CAN node (arbitration) id.                                                     |
| isFd          | **false**           | If True means using CAN FD mode.                                                     |
| bitrateSwitch | **false**           | **Only for CAN FD mode** If True means a higher bitrate is used for the data transmission.                                    |
|---

##### "commmand"
The option *command* is an additional but non-neccessary level of abstraction what lets one to interpret the one part of CAN message differently
based on the another part of this CAN message.

For example, the controller of an irrigation system can inform about different parameters of the system. Communication is done via CAN bus.  
The first byte of a CAN payload is *command*. If the value of a command is 2, it means that following bytes is temperature.  
If value of command is 4, data is a humidity level.

The option _command_ supports the following formats:   
 - As JSON string:
```json
command: "<start>:<length>:[byteorder]:[value]"
```
 - As JSON object: 
```json
"command": {
  "start": <start_value>,
  "length": <length_value>,
  "byteorder": <byteorder_value>,
  "value": <value>
}
```

where:
* *start* - the position of the first byte - 0 to 7 for CAN protocol, 0 to 63 for CAN FD protocol
* *length* - the number of bytes to get the value of a command
* *byteorder* - the order of bytes - *big* or *little* (default *big*)
* *value* - the integer value of a command in the decimal format

Example:


1. Read 2 bytes starting from 0th position as the *little* byte order and trigger processing of the following bytes only if the command value is 12345.
```json
"command": "0:2:little:12345"
```

##### "value"
The option *value* describes how many bytes to get from CAN payload and the corresponding primitive type for conversion. 
<br>
<br>
The option _value_ supports the following formats:
 - As JSON string:
```json
"value": "<start>:<length>:[byteorder]:<type>:[encoding|signed]"
```
 - As JSON object: 
```json
"value": {
  "start": <start_value>,
  "length": <length_value>,
  "byteorder": <byteorder_value>,
  "type": <type_value>,
  "encoding": <encoding_value>,
  "signed": <signed_value>
}
```

where
* *start* - the position of the first byte - 0-7 for CAN protocol, 0-63 for CAN FD protocol
* *length* - the number of bytes to get the value
* *byteorder* - the order of bytes - *big* or *little* (default *big*)
* *type* - the Python primitive types **bool**, **boolean**, **int**, **long**, **float**, **double** or **string**.
By types **bool**, **int** and **float** it is meant Thingsboard **boolean**, **long** and **double** types respectively.
**Note**, **float** type value requires 4 bytes and **double** type value requires 8 bytes.
* *encoding* - **Only for string type** [Encoding](https://docs.python.org/3/library/codecs.html#standard-encodings) of string (default *ascii*).
* *signed* - **Only for int/long types** indicates whether integer is signed value or not - *signed* or *unsigned* (default *unsigned*)

Examples:

 - Read 1 byte starting from 2d position as the *big* byte order and cast to the value of the *unsigned int* type.
```json 
"value": "2:1:int" 
``` 
 - Read 8 bytes starting from 0th position as the big byte order and cast to the value of the *double* type. 
```json
"value": "0:7:double"
```
 - Read 4 bytes starting from 0th position as the *little* byte order and cast to the value of the *float* type. 
```json
"value": "0:4:little:float"
```
 - Read 2 bytes starting from 4th position as the *little* byte order and cast to the value the *signed int* type. The value is used in Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to
get the final value. 
```json
"value": "4:2:little:int:signed",
"expression": "value / 4"
```

##### "expression"
The option _expression_ is evaluated via Python [eval()](https://docs.python.org/3/library/functions.html#eval) API. The following variables are available in the [eval()](https://docs.python.org/3/library/functions.html#eval) context:

1. *value* - the result of applying the [value configuration](/docs/iot-gateway/config/can/#value) to the CAN payload
2. *can_data* - the CAN payload (array of bytes)

**Note**, by default Python [eval()](https://docs.python.org/3/library/functions.html#eval) API is working in some kind of a restricted mode by denying the explicit access to [\_\_builtins\_\_ API](https://docs.python.org/3/library/builtins.html). To
disable the restricted mode, [set](/docs/iot-gateway/config/can/#section-devices) the option *strictEval* to _False_.

##### "polling"
If a polling configuration is not specified the CAN connector receives only the data that CAN node decides to send on its own.

On-demand sending is activated after CAN node receives specific data, as specified in the polling configuration. Depending on the type of polling, the CAN connector can send that data either once or periodically.   

| **Parameter** | **Default value**      | **Description**                                                                                   |
|:-|:-----------------------|---------------------------------------------------------------------------------------------------
| type          | **always**             | Type *always* implies sending CAN message periodically, while *once* implies single-time sending. |
| period        | **1.0**                | Period of polling in seconds. Floating point means more precise time than seconds.                |
| **dataInHex** |                        | CAN message payload in the hexadecimal format.                                                    |

#### Subsection "attributeUpdates"
This subsection provides the list of configurations to subscribe for changes of Thingsboard shared attributes.

| **Parameter**              | **Default value**     | **Description**                                                                                                                                                |
|:-|:-|----------------------------------------------------------------------------------------------------------------------------------------------------------------
| **attribute**              |                       | Name of the shared attribute.                                                                                                                                  |
| **nodeId**                 |                       | CAN node (arbitration) id.                                                                                                                                     |
| isExtendedId               | **false**             | If True means extended CAN node (arbitration) id.                                                                                                              |
| isFd                       | **false**             | If True means using CAN FD mode.                                                                                                                               |
| bitrateSwitch              | **false**             | **Only for CAN FD mode** If True means a higher bitrate is used for the data transmission.                                                                     |
| dataLength                 | **1**                 | **Only for integer values** Number of bytes to pack **integer** value.                                                                                         |
| dataByteorder              | **big**               | **Only for integer and float values** Order of bytes to pack **numeric** value.                                                                                |
| dataSigned                 | **false**             | **Only for int/long types** indicates whether integer is signed value or not.                                                                                  |
| dataExpression             |                       | Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to modify attribute value in some way before packing it to array of bytes.   |
| dataEncoding               | **ascii**             | **Only for string values** [Encoding](https://docs.python.org/3/library/codecs.html#standard-encodings) of string packing.                                     |
| dataBefore                 |                       | Hexadecimal string of bytes that are preceded value bytes.                                                                                                     |
| dataAfter                  |                       | Hexadecimal string of bytes that are followed by value bytes.                                                                                                  |
|---

The steps of processing an attribute update are the following:

1. If *dataExpression* is set, [the value](/docs/reference/gateway-mqtt-api/#subscribe-to-attribute-updates-from-the-server) that received from Thingsboard server is modified via Python [eval()](https://docs.python.org/3/library/functions.html#eval) API. The variable *value* is available in *dataExpression*. This is a value of the attribute that was changed.
If *dataExpression* is not set, the value is left as it is.
2. The value from the step 1 is packed to the array of bytes based on its type (deduced by Python [isinstance()](https://docs.python.org/3/library/functions.html#isinstance) API) and [configuration](/docs/iot-gateway/config/can/#subsection-attributeupdates) provided for this attribute. **Note**, *float* type value requires 4 bytes.
3. If *dataBefore* or/and *dataAfter* are set, they are converted to the arrays of bytes and are added to the *value* bytes (from the step 2) before and after respectively.
4. Send the final byte array through a CAN bus.

#### Subsection "serverSideRpc"
This subsection provides the list of configurations to process RPC commands from a ThingsBoard server to a device.

| **Parameter**            | **Default value**     | **Description**                                                         |
|:-|:-|-
| **method**               |                       | Name of RPC command.       |
| response                 | **false**             | If true, [response](/docs/reference/gateway-mqtt-api/#server-side-rpc) will be sent to ThingsBoard.       |
| **nodeId**               |                       | CAN node (arbitration) id.                                           |
| isExtendedId             | **false**             | If True means extended CAN node (arbitration) id.                                                 |
| isFd                     | **false**             | If True means using CAN FD mode.                                  |
| bitrateSwitch            | **false**             | **Only for CAN FD mode** If True means a higher bitrate is used for the data transmission.                                         |
| dataLength               | **1**                 | **Only for integer values** Number of bytes to pack **integer** value.   |
| dataByteorder            | **big**               | **Only for integer and float values** Order of bytes to pack **numeric** value. |
| dataSigned               | **false**             | **Only for int/long types** indicates whether integer is signed value or not. |
| dataExpression           |                       | Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to modify attribute value in some way before packing it to array of bytes. |
| dataEncoding             | **ascii**             | **Only for string values** [Encoding](https://docs.python.org/3/library/codecs.html#standard-encodings) of string packing. |
| dataBefore               |                       | Hexadecimal string of bytes that are preceded value bytes. |
| dataAfter                |                       | Hexadecimal string of bytes that are followed by value bytes. |
| dataInHex                |                       | **Only for RPC without parameters** Hexadecimal string of bytes that are sent to CAN node. |
|---

The CAN connector supports RPC commands *without* and *with* parameters (see [params](/docs/reference/gateway-mqtt-api/#server-side-rpc) JSON object).  

The *without parameters* RPC type requires **only** *dataInHex* to be set (another *data\** options are not used). The value of *dataInHex* is sent as payload of a CAN message each time when the RPC command is processed.  

The *with parameters* RPC type is based on all *data\** options except *dataInHex*. The steps of processing are the same as for [attribute updates](/docs/iot-gateway/config/can/#subsection-attributeupdates) except:  
- if *dataExpression* is **not set**, [RPC params](/docs/reference/gateway-mqtt-api/#server-side-rpc) **must have** the JSON property named *value*. The value of this JSON property is packed to the array of bytes and send to CAN node as payload of a CAN message.  
```json
{
  "device": "Car", 
  "data": {
    "method": "setLightLevel", 
    "params": {
      "value": 70
    }
  }
}
```
- if *dataExpression* is **set**, no specific JSON property is required and [all RPC params](/docs/reference/gateway-mqtt-api/#server-side-rpc) are available in *dataExpression*.  
<br><br>For example, **user** wants to increase a car speed to **150 mph**, but a car control system has its own **limit** that is set to **100 mph**.  
```json
{
  "device": "Car", 
  "data": {
    "id": 1,
    "method": "setSpeed", 
    "params": {
      "userSpeed": 150,
      "maxAllowedSpeed": 100
    }
  }
}
```
The configuration of such RPC command is set up in a way **that if user exceeds the limit** the car speed is **forcibly set to this limit**:  
```json
"serverSideRpc": [
{
    "method": "setSpeed",
    "nodeId": 16,
    "dataBefore": "09",
    "dataAfter": "aabb",
    "dataExpression": "userSpeed if maxAllowedSpeed > userSpeed else maxAllowedSpeed"
}
]
```
So after processing the _setSpeed_ RPC command, CAN payload is as follows: 
`[ 0x09, 0x64, 0xAA, 0xBB ]`, where **0x64** is **100 mph** because **user exceeded the limit**.  

## Next steps

Explore guides related to main ThingsBoard features:  

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
