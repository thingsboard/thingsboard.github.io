---
layout: docwithnav-gw
title: Modbus Connector Configuration
description: Modbus protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

{% capture difference %}
<br>
**Note that the configuration of the Modbus connector has changed since Gateway 3.0. The new configuration will be 
generated after installing the new version and running Gateway in the new_modbus.json file.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

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
  "master": {
    "slaves": [
      {
        "host": "127.0.0.1",
        "port": 5021,
        "type": "tcp",
        "method": "socket",
        "timeout": 35,
        "byteOrder": "BIG",
        "retries": true,
        "retryOnEmpty": true,
        "retryOnInvalid": true,
        "pollPeriod": 5000,
        "unitId": 1,
        "deviceName": "Temp Sensor",
        "attributesPollPeriod": 5000,
        "timeseriesPollPeriod": 5000,
        "sendDataOnlyOnChange": true,
        "connectAttemptTimeMs": 5000,
        "connectAttemptCount": 5,
        "waitAfterFailedAttemptsMs": 300000,
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
    "deviceName": "Gateway",
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
              "address": 1,
              "type": "string",
              "tag": "sm",
              "objectsCount": 1,
              "value": "ON"
            }
          ],
          "timeseries": [
            {
              "address": 2,
              "type": "int",
              "tag": "smm",
              "objectsCount": 1,
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
              "address": 5,
              "type": "string",
              "tag": "sm",
              "objectsCount": 1,
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

{% endhighlight %}

</details>

### Section "master": description and configuration parameters
A Modbus Master is used to query data from devices. In order to configure slaves which the master must be queried, it 
must be specified "master" section that includes the "slaves" list.

#### Subsection "slaves"
This subsection provides array of configurations for slaves.

##### Slave object settings
This configuration contains common connection parameters and settings for data processing.

Due to the nature of preferred way of communication between Modbus master there are 2 options how to configure this part: if using TCP/UDP or via Serial port.  

{% capture modbusConnectionType %}
TCP/UDP<small>Connection over TCP/UDP protocol</small>%,%tcpUdp%,%templates/iot-gateway/modbus-tcpudp-connection.md%br%
Serial<small>Connection over serial port</small>%,%serial%,%templates/iot-gateway/modbus-serial-connection.md{% endcapture %}

There are 2 variants of server section:

{% include content-toggle.html content-toggle-id="modbusConnection" toggle-spec=modbusConnectionType %}

The next part of slave section contains common connection parameters and settings for data processing. 
Available parameters are as follows:

| **Parameter**                 | **Default value**   | **Description**                                                                            |
|:-|:-|-
| unitId                        | **1**               | Id of current slave on Modbus.                                                             |
| deviceName                    | **Temp Sensor**     | Name of the current slave                                                                  |
| deviceType                    | **default**         | Type of the current slave                                                                  |
| pollPeriod                    | **5000**            | Period in milliseconds for check the attributes and the telemetry on slave.                |
| sendDataOnlyOnChange          | **true**            | Sending only if data changed from last check, if no -- data will send after every check    |
| waitAfterFailedAttemptsMs     | **0**               | A period in milliseconds for a wait before trying to send data to the master               |
| connectAttemptTimeMs          | **0**               | A period in milliseconds for waiting to connect to the master                              |
| retryOnEmpty                  | **false**           | Retrying sending data to the master if it is empty                                         |
| retryOnInvalid                | **false**           | Retrying sending data to the master if it is failed                                        |
|---

Example:

```json
    ...
    "unitId": 1,
    "deviceName": "Temp Sensor",
    "attributesPollPeriod": 5000,
    "timeseriesPollPeriod": 5000,
    "sendDataOnlyOnChange": true,
    "waitAfterFailedAttemptsMs": 0,
    "connectAttemptTimeMs": 0,
    "retryOnEmpty": false,
    "retryOnInvalid": false
  }
]
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

### Section "slave": description and configuration parameters
Starting with version 3.0, Gateway can run as a Modbus slave. In order to configure Gateway as a Modbus slave,
specify the "slave" section in the configuration file.

There are 2 variants of Gateway slave section:

{% capture modbusConnectionType %}
TCP/UDP<small>Connection over TCP/UDP protocol</small>%,%tcpUdp%,%templates/iot-gateway/gateway-as-modbus-slave-tcpudp-connection.md%br%
Serial<small>Connection over serial port</small>%,%serial%,%templates/iot-gateway/gateway-as-modbus-slave-serial-connection.md{% endcapture %}

There are 2 variants of server section:

{% include content-toggle.html content-toggle-id="modbusConnection" toggle-spec=modbusConnectionType %}

You can also specify service information about the device using the "identity" subsection as follows:

| **Parameter**        | **Default value**                                             |
|:-|-
| vendorName           | **Gateway**                                                   |
| productCode          | **GT**                                                        |
| vendorUrl            | **https://github.com/thingsboard/thingsboard-gateway**        |
| productName          | **Gateway**                                                   |
| modelName            | **1**                                                         |
|--

#### Subsection "values"
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
              "address": 1,
              "type": "string",
              "tag": "sm",
              "objectsCount": 1,
              "value": "ON"
            }
          ],
          "timeseries": [
            {
              "address": 2,
              "type": "int",
              "tag": "smm",
              "objectsCount": 1,
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
```

{% capture difference %}
<br>
**In this section of the configuration, the only difference is the placement of values to a certain type of 
register, but the configuration of telemetry, attributes, rps, etc. is the same as the "master" section.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Additional information

Additional information about Modbus functions and supported data types.

#### Modbus functions

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


#### Data types

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
