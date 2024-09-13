---
layout: docwithnav-gw
title: Modbus Connector Configuration
description: Modbus protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

{% capture difference %}
**Note that the configuration of the Modbus connector has changed since Gateway 3.0. The new configuration will be 
generated after installing the new version and running Gateway in the new_modbus.json file.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

This guide will help you to get familiar with Modbus connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this connector.
The connector configuration file will be described below.

<b>Example of Modbus Connector config file.</b>

{% capture modbusConf %}

{
  "master": {
    "slaves": [
      {
        "host": "host.docker.internal",
        "port": 5021,
        "type": "tcp",
        "method": "socket",
        "timeout": 35,
        "byteOrder": "LITTLE",
        "wordOrder": "LITTLE",
        "retries": true,
        "retryOnEmpty": true,
        "retryOnInvalid": true,
        "pollPeriod": 5000,
        "unitId": 1,
        "deviceName": "Demo Device",
        "deviceType": "default",
        "sendDataOnlyOnChange": false,
        "connectAttemptTimeMs": 5000,
        "connectAttemptCount": 5,
        "waitAfterFailedAttemptsMs": 300000,
        "attributes": [
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
            "objectsCount": 1,
            "address": 18
          },
          {
            "tag": "32uint_read",
            "type": "32uint",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 20
          },
          {
            "tag": "64uint_read",
            "type": "64uint",
            "functionCode": 4,
            "objectsCount": 4,
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
            "tag": "shared_attribute",
            "type": "16int",
            "functionCode": 16,
            "objectsCount": 1,
            "address": 29
          }
        ],
        "rpc": [
          {
            "tag": "shared_attribute_read",
            "type": "16int",
            "functionCode": 3,
            "objectsCount": 1,
            "address": 29
          },
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
            "tag": "getCPULoad",
            "type": "32int",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 35
          }
        ]
      }
    ]
  },
  "slave": {
    "type": "tcp",
    "host": "127.0.0.1",
    "port": 5026,
    "method": "socket",
    "deviceName": "Modbus_Slave_Example",
    "deviceType": "default",
    "pollPeriod": 5000,
    "sendDataToThingsBoard": false,
    "byteOrder": "BIG",
    "unitId": 0,
    "values": {
      "holding_registers": [
        {
          "attributes": [
            {
              "tag": "sm",
              "type": "string",
              "objectsCount": 1,
              "address": 1,
              "value": "ON"
            }
          ],
          "timeseries": [
            {
              "tag": "smm",
              "type": "int",
              "objectsCount": 1,
              "address": 2,
              "value": "12334"
            }
          ],
          "attributeUpdates": [
            {
              "tag": "shared_attribute_write",
              "type": "32int",
              "functionCode": 6,
              "objectsCount": 2,
              "address": 29,
              "value": 1243
            }
          ],
          "rpc": [
            {
              "tag": "setValue",
              "type": "bits",
              "functionCode": 5,
              "objectsCount": 1,
              "address": 31,
              "value": 22
            }
          ]
        }
      ],
      "coils_initializer": [
        {
          "attributes": [
            {
              "type": "string",
              "tag": "sm",
              "objectsCount": 1,
              "address": 5,
              "value": "12"
            }
          ],
          "timeseries": [],
          "attributeUpdates": [],
          "rpc": []
        }
      ]
    }
  }
}

{% endcapture %}
{% include code-toggle.liquid code=modbusConf params="conf|.copy-code.expandable-20" %}

## Section "master": description and configuration parameters
A Modbus Master is used to query data from devices. In order to configure the slaves that the master must query, you need to specify the "master" section which includes the "slaves" list.

### Subsection "slaves"
This subsection provides an array of configurations for slaves.

#### Slave object settings
This configuration contains common connection parameters and settings for data processing.

Due to the nature of preferred way of communication between Modbus master there are 2 options how to configure this part: if using TCP/UDP or via Serial port.  

{% capture modbusConnectionType %}
TCP/UDP<small>Connection over TCP/UDP protocol</small>%,%tcpUdp%,%templates/iot-gateway/modbus-tcpudp-connection.md%br%
Serial<small>Connection over serial port</small>%,%serial%,%templates/iot-gateway/modbus-serial-connection.md{% endcapture %}

There are 2 variants of server section:

{% include content-toggle.liquid content-toggle-id="modbusConnection" toggle-spec=modbusConnectionType %}

The next part of the slave section contains common connection parameters and settings for data processing. The available parameters are as follows:

| **Parameter**                 | **Default value** | **Description**                                                                                   |
|:-|:------------------|---------------------------------------------------------------------------------------------------
| retries                       | **true**          | Retrying sending data to the master. The values can be either: true or false                      |
| retryOnEmpty                  | **true**          | Retrying sending data to the master if it is empty                                                |
| retryOnInvalid                | **true**          | Retrying sending data to the master if it is failed                                                |
| pollPeriod                    | **5000**          | Period in milliseconds to check the attributes and the telemetry on the slave                     |
| unitId                        | **1**             | Id of current slave on Modbus.                                                                    |
| deviceName                    | **Demo Device**   | Name of the current slave                                                                         |
| deviceType                    | **default**       | Type of the current slave                                                                         |
| sendDataOnlyOnChange          | **false**         | Sending only if data has changed since the last check. If not, data will be sent after every check|
| connectAttemptTimeMs          | **5000**          | A waiting period in milliseconds before connecting to the master                                  |
| connectAttemptCount           | **5**             | The number of connection attempts made through the ThingsBoard gateway                            |
| waitAfterFailedAttemptsMs     | **300000**        | A waiting period in milliseconds before trying to send data to the master                         |
|---

<br>
**Example:**

```json
{
  "master": {
    "slaves": [
      {
        "host": "host.docker.internal",
        "port": 5021,
        "type": "tcp",
        "method": "socket",
        "timeout": 35,
        "byteOrder": "LITTLE",
        "wordOrder": "LITTLE",
        "retries": true,
        "retryOnEmpty": true,
        "retryOnInvalid": true,
        "pollPeriod": 5000,
        "unitId": 1,
        "deviceName": "Demo Device",
        "deviceType": "default",
        "sendDataOnlyOnChange": false,
        "connectAttemptTimeMs": 5000,
        "connectAttemptCount": 5,
        "waitAfterFailedAttemptsMs": 300000
      }
    ]
  }
}
```

##### Key settings for "attributes"

The configuration in this unit provides settings for processing data on Modbus server. These settings will be interpreted in ThingsBoard platform instance as attributes of the device.

| **Parameter** | **Default value**   | **Description**                                                                            |
|:-|:-|--------------------------------------------------------------------------------------------
| tag           | **certificateNumber** | Tag, which will be used as attribute key for ThingsBoard platform instance                 |
| type          | **32int**             | Type of value. [Available data types](#data-types)                                         |
| functionCode  | **4**                 | The function to use in data processing, specifically [Modbus functions](#modbus-functions) |
| objectsCount  | **2**                 | Count of objects to read.                                                                  |
| address       | **0**                 | Object address to check.                                                                   |
|---

Optional parameters:  
**multiplier** - the result of reading will be multiplied by the value of this parameter.  
**divider** - the result of reading will be divided by the value of this parameter.  

<br>
**Example**:

```json
        ...
          "attributes": [
          {
            "tag": "certificateNumber",
            "type": "32int",
            "functionCode": 4,
            "objectsCount": 2,
            "address": 0
          }
        ],
        ...
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-attributes-1.png)
{: refdef}

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-attributes-2.png)
{: refdef}

##### Key settings for "timeseries"

The configuration in this unit provides settings for processing data on Modbus server. These settings will be interpreted in ThingsBoard platform instance as telemetry of the device.

| **Parameter** | **Default value**   | **Description**                                                                              |
|:-|:-|-
| tag           | **telemetry_1** | Tag, which will be used as attribute key for ThingsBoard platform instance.                             |
| type          | **16uint**      | Type of value. [Available data types](#data-types)                                                  |
| functionCode  | **4**           | The function to use in data processing, specifically [Modbus functions](#modbus-functions)                           |
| objectsCount  | **1**           | Count of objects to read.                                                                           |
| address       | **1**           | Object address to check.                                                                            |
|               |                 |                                                                                                     |
| tag           | **telemetry_2** | Tag, which will be used as attribute key for ThingsBoard platform instance.                             |
| type          | **16uint**      | Type of value. [Available data types](#data-types)                                                  |
| functionCode  | **4**           | The function to use in data processing, specifically [Modbus functions](#modbus-functions)                           |
| objectsCount  | **1**           | Count of objects to read.                                                                           |
| address       | **3**           | Object address to check.                                                                            |
|---

<br>
**Example:**

```json
        ...
        "timeseries": [
          {
            "tag": "telemetry_1",
            "type": "16uint",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 1
          },
          {
            "tag": "telemetry_2",
            "type": "16uint",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 3
          }
        ],
        ...
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-timeseries-1.png)
{: refdef}

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-timeseries-2.png)
{: refdef}

##### Key settings for "attributeUpdates"

The configuration in this unit provides settings for Attribute update requests from ThingsBoard platform instance.

| **Parameter** | **Default value**          | **Description**                                                             |
|:-|:-|-
| tag           | **maxTemperature**         | Shared attribute name.                                                      |
| type          | **16int**                  | Type of value. [Available data types](#data-types)                          |
| functionCode  | **16**                     | The function to use in data processing, specifically [Modbus functions](#modbus-functions)   |
| objectsCount  | **1**                      | Count of objects to write.                                                  |
| address       | **29**                     | Object address.                                                             |
|---

<br>
**Example:**

```json
        ...
        "attributeUpdates": [
          {
            "tag": "maxTemperature",
            "type": "16int",
            "functionCode": 16,
            "objectsCount": 1,
            "address": 29
          }
        ],
        ...
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-attributeUpdates-1.png)
{: refdef}

For example, create a new attribute “maxTemperature” and give it a value “25”.

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-attributeUpdates-2.png)
{: refdef}

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-attributeUpdates-3.png)
{: refdef}

##### Key settings for "RPC"

The configuration in this unit provides settings for RPC requests from ThingsBoard platform instance to the device.

| **Parameter** | **Default value**       | **Description**                                                             |
|:-|:-|-
| tag           | **maxTemperature_read** | RPC method name.                                                                     |
| type          | **16int**               | Type of value. [Available data types](#data-types)                                   |
| functionCode  | **3**                   | The function to use in data processing, specifically [Modbus functions](#modbus-functions)            |
| objectsCount  | **1**                   | Count of objects to write.                                                           |
| address       | **29**                  | Object address.                                                                      |
|---

<br>
**Example:**

```json
        ...
        "rpc": [
          {
            "tag": "maxTemperature_read",
            "type": "16int",
            "functionCode": 3,
            "objectsCount": 1,
            "address": 29
          }
        ],
        ...
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-rpc-1.png)
{: refdef}

To send RPC requests to the gateway, use the RPC Debug Terminal from the Control widgets bundle.

Execute "maxTemperature_read" RPC request from the ThingsBoard instance to the device.

In response, you should receive the previously recorded value - "25".

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-modbus-rpc-2.png)
{: refdef}


Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to configure
it manually. To use them, make sure you set all required parameters (in the case of Modbus Connector, these are the following:
**type**, **functionCode**, **objectsCount**, **address**). 
See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).

## Section "slave": description and configuration parameters
Starting with version 3.0, Gateway can run as a Modbus slave. In order to configure Gateway as a Modbus slave,
specify the "slave" section in the configuration file.

There are 2 variants of Gateway slave section:

{% capture modbusConnectionType2 %}
TCP/UDP<small>Connection over TCP/UDP protocol</small>%,%tcpUdp%,%templates/iot-gateway/gateway-as-modbus-slave-tcpudp-connection.md%br%
Serial<small>Connection over serial port</small>%,%serial%,%templates/iot-gateway/gateway-as-modbus-slave-serial-connection.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="modbusConnection" toggle-spec=modbusConnectionType2 %}

{% capture difference %}
**Don't use "Gateway" as the value of "deviceName" parameter!**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<br>
**Example:**

```json
{
  "slave": {
    "type": "tcp",
    "host": "127.0.0.1",
    "port": 5026,
    "method": "socket",
    "deviceName": "Modbus_Slave_Example",
    "deviceType": "default",
    "pollPeriod": 5000,
    "sendDataToThingsBoard": false,
    "byteOrder": "BIG",
    "unitId": 0
  }
}
```

You can also specify service information about the device using the "identity" subsection as follows:

| **Parameter**        | **Default value**                                             |
|:-|-
| vendorName           | **Gateway**                                                   |
| productCode          | **GT**                                                        |
| vendorUrl            | **https://github.com/thingsboard/thingsboard-gateway**        |
| productName          | **Gateway**                                                   |
| modelName            | **1**                                                         |
|--

### Subsection "values"
In this section you can specify values that Gateway will save in the store. Each value refers to a specific type of 
register. There are:
1. holding_registers
2. coils_initializer
3. input_registers
4. discrete_inputs

Depending on which value the register belongs to, you must add it to the appropriate array. For example:
```json
"values": {
      "holding_registers": [
        {
          "attributes": [
            {
              "tag": "sm",
              "type": "string",
              "objectsCount": 1,
              "address": 1,
              "value": "ON"
            }
          ],
          "timeseries": [
            {
              "tag": "smm",
              "type": "int",
              "objectsCount": 1,
              "address": 2,
              "value": "12334"
            }
          ],
          "attributeUpdates": [
            {
              "tag": "shared_attribute_write",
              "type": "32int",
              "functionCode": 6,
              "objectsCount": 2,
              "address": 29,
              "value": 1243
            }
          ],
          "rpc": [
            {
              "tag": "setValue",
              "type": "bits",
              "functionCode": 5,
              "objectsCount": 1,
              "address": 31,
              "value": 22
            }
          ]
        }
      ], 
        "coils_initializer": [
        {
          "attributes": [
            {
              "tag": "sm",
              "type": "string",
              "objectsCount": 1,
              "address": 5,
              "value": "12"
            }
         ],
          "timeseries": [],
          "attributeUpdates": [],
          "rpc": []
        }
      ]
    }
  }
}

```

{% capture difference %}
**In this section of the configuration, the only difference is in the placement of values to a certain type of register. However, the configuration of telemetry, attributes, RPCs, etc., remains the same as in the "master" section.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Additional information

Here's more details regarding Modbus functions and the supported data types.

### Modbus functions

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


### Data types

A list and description of the supported data types for reading/writing data.

| **Type**    | **Function code** | **Objects count** | **Note**                                                                                                                        |
|-|-|-|
| **string**  | 3-4               | 1-...             | Read bytes from registers and decode it ('UTF-8' coding).                                                                       |
| **bytes**   | 3-4               | 1-...             | Read bytes from registers.                                                                                                      |
| **bits**    | 1-4               | 1-...             | Read coils. If the objects count is 1, result will be interpreted as a boolean. Otherwise the result will be an array with bits.|
| **16int**   | 3-4               | 1                 | Integer 16 bit.                                                                                                                 |
| **16uint**  | 3-4               | 1                 | Unsigned integer 16 bit.                                                                                                        |
| **16float** | 3-4               | 1                 | Float 16 bit.                                                                                                                   |
| **32int**   | 3-4               | 2                 | Integer 32 bit.                                                                                                                 |
| **32uint**  | 3-4               | 2                 | Unsigned integer 32 bit.                                                                                                        |
| **32float** | 3-4               | 2                 | Float 32 bit.                                                                                                                   |
| **64int**   | 3-4               | 4                 | Integer 64 bit.                                                                                                                 |
| **64uint**  | 3-4               | 4                 | Unsigned integer 64 bit.                                                                                                        |
| **64float** | 3-4               | 4                 | Float 64 bit.                                                                                                                   |



## Next steps

Explore guides related to main ThingsBoard features:

 - [Connect Modbus device](/docs/iot-gateway/guides/how-to-connect-modbus-device/) - how to connect Modbus device using ThingsBoard IoT Gateway
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
