---
layout: docwithnav-gw
title: Modbus Connector Configuration
description: Modbus protocol support for ThingsBoard IoT Gateway
redirect_from: "/docs/iot-gateway/guides/how-to-use-rpc-modbus-connector/"

---

* TOC
{:toc}

## Overview

This documentation will help you set up the Modbus connector for the ThingsBoard IoT Gateway. We’ll explain the
configuration parameters in simple terms to make it easy for you to understand and follow. The Modbus is a widely used
protocol for industrial automation and control systems, allowing devices to communicate with each other over a network,
and this connector allows seamless integration with the ThingsBoard platform. Use
[general configuration](/docs/iot-gateway/configuration/){:target="_blank"} to enable this extension.

Also, if you are new to ThingsBoard IoT Gateway, we recommend you to read the
[Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=modbus){:target="_blank"}
guide to understand the basic concepts of ThingsBoard IoT Gateway and how it works with Modbus protocol.

The connector can be configured via the user interface form, which helps you set up a connection to the Modbus server,
collect data and write data to slaves (devices). Let’s look at all the available settings and explain each one clearly. This will
help you understand how everything works.

&nbsp;
<div id="video">
    <div id="video_wrapper">
        <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/kBMcsg7YEcQ" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

{% capture difference %}
**Please note**:
Connect the gateway before creating the connector. Otherwise, the UI will display the old configuration fields for
backward compatibility.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Configuration modes

The Modbus connector can be configured in two modes: **Basic** and **Advanced**.

- **Basic** mode is designed for users who are new to ThingsBoard IoT Gateway and want to quickly set up the connector
  with minimal configuration. It provides a simplified interface with essential settings.
- **Advanced** mode is intended for experienced users who need more control over the configuration. It offers additional
  options and flexibility for advanced use cases.

{% capture difference %}
**Please note:**
If you are new to IoT Gateway, use the "Basic" configuration mode. If you are familiar with configuring IoT Gateway,
you can use the "Advanced" configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

You can switch between these modes using the toggle button at the top of the configuration page:

![image](/images/gateway/modbus-connector/modbus-modes-toggle.png)

## General settings

{% include /templates/iot-gateway/connector-commons/general-settings.md %}

![image](/images/gateway/modbus-connector/modbus-general-basic-section-1-ce.png)

{% capture difference %}
The general tab is the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Master connections (Gateway as a Master) settings

A Modbus Master is used to query data from Modbus servers (slaves). In order to configure servers for data retrieving,
you need to specify list of slaves.

![image](/images/gateway/modbus-connector/gateway-as-a-master.png)

### Servers (Slaves) settings

A Modbus Slave is a device that responds to requests from a Modbus Master. In this section, you can configure the
Modbus slaves that the master will query data from. You can add multiple slaves to the list, and each slave can have
its own configuration.

The following parameters are used to configure the slave device, its name and profile, as well as for 
report strategy:

- **Unit ID** - ID of the Modbus slave.
- **Device name** - name of the device on the platform.
- **Device profile** - device profile name on the platform.
- **Report strategy**  strategy for sending data to ThingsBoard:
  - **Report period** - period for sending data to ThingsBoard in milliseconds;
  - **Type** - type of the report strategy: 
    - **On report period** - sends data to ThingsBoard after the report period;
    - **On value change** - sends data to ThingsBoard when the value changes;
    - **On value change or report period** - sends data to ThingsBoard when the value changes or after the report period;
    - **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.

All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-mapping) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To add a new configuration for connection to server, navigate to the "**Master Connections**" tab and click the 
"**plus**" icon:

![image](/images/gateway/modbus-connector/add-new-server-connection-1-ce.png)

### Connection settings

{% include /templates/iot-gateway/modbus-connector/modbus-master-connections-section-basic.md %}

### Advanced connection settings

{% include /templates/iot-gateway/modbus-connector/advanced-connection-settings-subsection-basic-1.md %}

### Data mapping

In the data mapping, you can specify how the Modbus master will interact with the slaves. This includes reading data from 
the slaves. You can also use this section to configure which data will be sent as device attributes or telemetry. 
Data mapping contains all the necessary settings for flexible data management.

#### Attributes and time series

{% include /templates/iot-gateway/modbus-connector/attributes-and-time-series-subsections-basic.md %}

#### Usage examples

{% capture modbus-attributes-timeseries-examples %}
Reading attributes/time series<small></small>%,%readingattributesandtimeseries%,%templates/iot-gateway/modbus-connector/examples/time-series-and-attributes/reading-attributes-and-time-series.md%br%
Multiplier<small>in attributes/time series</small>%,%multiplierinattributesandtimeseries%,%templates/iot-gateway/modbus-connector/examples/time-series-and-attributes/multiplier-in-attributes-and-time-series.md%br%
Divider<small>in attributes/time series</small>%,%dividerinattributesandtimeseries%,%templates/iot-gateway/modbus-connector/examples/time-series-and-attributes/divider-in-attributes-and-time-series.md%br%
Batch reading<small>(advanced configuration mode only)</small>%,%batchreading%,%templates/iot-gateway/modbus-connector/examples/time-series-and-attributes/batch-reading.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbus-attributes-timeseries-examples" toggle-spec=modbus-attributes-timeseries-examples %}

### Requests mapping

The Requests mapping section allows you to configure how the ThingsBoard platform instance will interact with the
devices. That is, how the platform will request data from the devices, how it will update device attributes, and how
it will send RPC commands to the devices.

Modbus connector supports the following requests mapping:

- **Attribute updates** - allows update device nodes values from ThingsBoard platform instance.
- **RPC methods** - allows sending RPC commands to devices. Using RPC methods, you can get or set values of the Modbus
  registers. Modbus connector supports different types of RPC methods, such as:
    - **Reserved GET/SET methods** - these methods are automatically created for each attribute and time series
      parameter.
      You can use them to get or set values of the Modbus registers.
    - **Configurable RPC methods to device** - these methods allow you to configure custom RPC commands in connector
      configuration that can be sent to the devices.

#### Subsection "Attribute updates"

This subsection contains configuration for attribute updates request from ThingsBoard platform instance.

ThingsBoard allows provisioning device attributes and fetches some of them from the device application. You can treat
this as a remote configuration for devices. Your devices are able to request shared attributes from ThingsBoard.
See [user guide](https://thingsboard.io/docs/user-guide/attributes/) for more details.

The following parameters are used to configure attribute updates:

- **Key** - shared attribute name.
- **Type** - [type](/docs/iot-gateway/config/modbus/#data-types) of value, which is used to identify the data type of
  the value that is being received.
- **Function code** - function to use for data processing,
  specifically [Modbus functions](/docs/iot-gateway/config/modbus/#modbus-functions).
- **Objects count** - count of objects to write or read, which specifies how many registers will be processed in the
  request.
- **Address** - object address, which is used to identify the specific object in the Modbus protocol.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-attributes-updates) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/modbus/#usage-examples-2) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/modbus-connector/attribute-updates-overview.png)

{% include /templates/iot-gateway/modbus-connector/attribute-updates-subsection-basic-1.md %}

#### Subsection "RPC requests"

ThingsBoard allows sending [RPC commands](https://thingsboard.io/docs/user-guide/rpc/) to the device that is connected
to ThingsBoard directly or via Gateway.
Configuration, provided in this section is used for sending RPC requests from ThingsBoard to device. The following
parameters are used to configure RPC methods:

- **Method name** - RPC method name, which is used to identify the request.
- **Type** - [data type](/docs/iot-gateway/config/modbus/#data-types) of value, which is used to identify the data type of
  the value that is being received.
- **Function code** - function to use for data processing,
  specifically [Modbus functions](/docs/iot-gateway/config/modbus/#modbus-functions).
- **Objects count** - count of objects to write or read, which specifies how many registers will be processed in the
  request.
- **Address** - object address, which is used to identify the specific object in the Modbus protocol.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-rpc-methods) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/modbus/#usage-examples-2) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/modbus-connector/rpc-requests-overview.png)

{% include /templates/iot-gateway/modbus-connector/modbus-rpc-requests-subsection-basic-1.md %}

{% capture methodFilterOptions %}
Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to
configure
it manually. See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).
{% endcapture %}
{% include templates/info-banner.md content=methodFilterOptions %}

#### Usage examples

{% capture modbus-attributes-timeseries-examples %}
Attribute Updates<small></small>%,%readingattributesandtimeseries%,%templates/iot-gateway/modbus-connector/examples/shared-attributes-rpc/attribute-updates.md%br%
RPC to Device<small></small>%,%multiplierinattributesandtimeseries%,%templates/iot-gateway/modbus-connector/examples/shared-attributes-rpc/rpc-to-device.md%br%
Reserved RPCs<small></small>%,%dividerinattributesandtimeseries%,%templates/iot-gateway/modbus-connector/examples/shared-attributes-rpc/reserved-rpcs.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbus-attributes-timeseries-examples" toggle-spec=modbus-attributes-timeseries-examples %}

### Advanced configuration

The advanced configuration section provides a detailed overview of all available parameters for the Master section 
configuration.

#### Master

Gateway can run as a Modbus master. This configuration section for the Modbus master, which is used to query data from
Modbus servers (slaves).

##### Slaves

The Slaves list is used to specify the list of Modbus slaves that the master will query data from.

| **Parameter**                                     | **Default value** | **Description**                                                                                                                                               |
|:--------------------------------------------------|:------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| server.slaves[].unitId                            |                   | Unit ID of Modbus slave.                                                                                                                                      |
| server.slaves[].deviceName                        |                   | Device name on the platform.                                                                                                                                  |
| server.slaves[].deviceType                        | **default**       | (Optional) Device profile name on the platform.                                                                                                               |
| server.slaves[].pollPeriod (in ms)                |                   | Period in milliseconds to check the attributes and the telemetry on the slave.                                                                                |
| server.slaves[].delayBetweenRequestsMs            | **0**             | (Optional) Delay between reading and writing requests. Useful for devices that implement Modbus RTU over TCP internally consist of a TCP-to-Serial converter. |
| server.slaves[].timeout (in sec)                  | **35**            | (Optional) Timeout in seconds for connecting to Modbus server.                                                                                                |
| server.slaves[].retries                           | **true**          | (Optional) Retrying sending data to the master. The values can be either: true or false.                                                                      |
| server.slaves[].retryOnEmpty                      | **true**          | (Optional) Retrying sending data to the master if it is empty.                                                                                                |
| server.slaves[].retryOnInvalid                    | **true**          | (Optional) Retrying sending data to the master if it is failed.                                                                                               |
| server.slaves[].connectAttemptTimeMs (in ms)      | **5000**          | (Optional) A waiting period in milliseconds before connecting to the master.                                                                                  |
| server.slaves[].connectAttemptCount               | **5**             | (Optional) The number of connection attempts made through the ThingsBoard gateway.                                                                            |
| server.slaves[].waitAfterFailedAttemptsMs (in ms) | **300000**        | (Optional) A waiting period in milliseconds before trying to send data to the master.                                                                         |
| server.slaves[].byteOrder                         | **LITTLE**        | Order of bytes to read.                                                                                                                                       |
| server.slaves[].wordOrder                         | **LITTLE**        | The order of words when reading several registers.                                                                                                            |
| server.slaves[].reportStrategy                    |                   | (Optional) Report strategy object using for configuring report strategy for device.                                                                           |
| ---                                               |                   |                                                                                                                                                               |

Example of the slave configuration:

```json
"master": {
  "slaves": [
    {
      "timeout": 35,
      "byteOrder": "LITTLE",
      "wordOrder": "LITTLE",
      "retries": true,
      "retryOnEmpty": true,
      "retryOnInvalid": true,
      "pollPeriod": 5000,
      "sendDataOnlyOnChange": true,
      "connectAttemptTimeMs": 5000,
      "connectAttemptCount": 5,
      "waitAfterFailedAttemptsMs": 300000,
      "deviceName": "Demo Device",
      "deviceType": "default",
      "unitId": 1, 
      ...
    }
  ]
}
```

##### Slave connection types

The Modbus connector supports three types of connections to the Modbus slave:
- **TCP** - connection to the Modbus slave over TCP/IP protocol.
- **UDP** - connection to the Modbus slave over UDP protocol.
- **Serial** - connection to the Modbus slave over serial port (RS-232, RS-485, etc.).

###### TCP/UDP

| **Parameter**          | **Default value** | **Description**                                    |
|:-----------------------|:------------------|----------------------------------------------------|
| master.slaves[].type   |                   | Type of connection to Modbus device.               |
| master.slaves[].host   | **localhost**     | Hostname or ip address of Modbus server.           |
| master.slaves[].port   | **5021**          | Port of Modbus server for connection.              |
| master.slaves[].method | **socket**        | Type of a framer **Socket** or **RTU**, if needed. |
| ---                    |                   |                                                    |

Example of the TCP/UDP slave configuration:

```json
"master": {
    "slaves": [
        {
            "host": "127.0.0.1",
            "port": 5021,
            "method": "socket",
            ...
        }
    ]
}
```

###### Serial

| **Parameter**                   | **Default value** | **Description**                                                                                                                      |
|:--------------------------------|:------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| master.slaves[].type            | **serial**        | Type of connection to Modbus device.                                                                                                 |
| master.slaves[].port            |                   | Port of Modbus slave for connection.                                                                                                 |
| master.slaves[].method          | **socket**        | Type of a framer Socket or RTU, if needed.                                                                                           |
| master.slaves[].baudrate        | **19200**         | Baud rate for serial connection.                                                                                                     |
| master.slaves[].stopbits        | **1**             | (Optional) The number of bits sent after each character in a message to indicate the end of the byte.                                |
| master.slaves[].parity          | **None**          | (Optional) The type of checksum to use to verify data integrity. This can be on of the following: (**E**)ven, (**O**)dd, (**N**)one. |
| master.slaves[].bytesize        | **8**             | (Optional) The number of bits in a byte of serial data. This can be one of **5**, **6**, **7**, or **8**.                            |
| master.slaves[].strict          | **true**          | (Optional) Use Inter char timeout for baud rates <= 19200                                                                            |
| master.slaves[].repack          | **false**         | (Optional) Repack data to remove padding bytes.                                                                                      |
| master.slaves[].handleLocalEcho | **false**         | (Optional) Handle local echo for serial connections. This is useful for devices that echo back the data sent to them.                |
| ---                             |                   |                                                                                                                                      |

Example of the serial slave configuration:

```json
"master": {
    "slaves": [
        {
            "method": "ascii",
            "baudrate": 4800,
            "stopbits": 1,
            "bytesize": 5,
            "parity": "N",
            "strict": true,
            ...
        }
    ]
}
```

##### Device attributes and time series

| **Parameter**                              | **Description**                                                                                                                                                    |
|:-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| server.slaves[].attributes[]               | List of attributes that will be sent to the ThingsBoard platform instance.                                                                                         |
| server.slaves[].attributes[].tag           | Key name of the attribute in ThingsBoard. It can be specified as a static value.                                                                                   |
| server.slaves[].attributes[].type          | [Data type](/docs/iot-gateway/config/modbus/#data-types) of value.                                                                                                 |
| server.slaves[].attributes[].functionCode  | [Function code](/docs/iot-gateway/config/modbus/#modbus-functions) to use for reading the attribute value from the Modbus slave.                                   |
| server.slaves[].attributes[].objectsCount  | Number of objects to read from the Modbus slave.                                                                                                                   |
| server.slaves[].attributes[].address       | Address of the object in the Modbus slave. Can be configured for [batch reading](/docs/iot-gateway/config/modbus/#batch-reading-advanced-configuration-mode-only). |
| server.slaves[].attributes[].divider       | (Optional) Divider for the value. If not specified, the value will be sent as is.                                                                                  |
| server.slaves[].attributes[].multiplier    | (Optional) Multiplier for the value. If not specified, the value will be sent as is.                                                                               |
| server.slaves[].attributes[].bitTargetType | The response type can be either an integer (0/1) or a boolean (True/False). **Used only with type `bits`**.                                                        |
| mapping[].attributes[].reportStrategy      | (Optional) Report strategy for the attributes data. If not specified, the device report strategy will be used.                                                     |
| server.slaves[].timeseries[]               | List of time series that will be sent to the ThingsBoard platform instance.                                                                                        |
| server.slaves[].timeseries[].tag           | Key name of the time series in ThingsBoard. It can be specified as a static value.                                                                                 |
| server.slaves[].timeseries[].type          | [Data type](/docs/iot-gateway/config/modbus/#data-types) of value.                                                                                                 |
| server.slaves[].timeseries[].functionCode  | [Function code](/docs/iot-gateway/config/modbus/#modbus-functions) to use for reading the time series value from the Modbus slave.                                 |
| server.slaves[].timeseries[].objectsCount  | Number of objects to read from the Modbus slave.                                                                                                                   |
| server.slaves[].timeseries[].address       | Address of the object in the Modbus slave. Can be configured for [batch reading](/docs/iot-gateway/config/modbus/#batch-reading-advanced-configuration-mode-only). |
| server.slaves[].timeseries[].divider       | (Optional) Divider for the value. If not specified, the value will be sent as is.                                                                                  |
| server.slaves[].timeseries[].multiplier    | (Optional) Multiplier for the value. If not specified, the value will be sent as is.                                                                               |
| server.slaves[].timeseries[].bitTargetType | The response type can be either an integer (0/1) or a boolean (True/False). **Used only with type `bits`**.                                                        |
| mapping[].attributes[].reportStrategy      | (Optional) Report strategy for the time series data. If not specified, the device report strategy will be used.                                                    |
| ---                                        |                                                                                                                                                                    |

Example of the attributes and telemetry configuration:

```json
"attributes": [
  {
    "tag": "string_read",
    "type": "string",
    "functionCode": 4,
    "objectsCount": 4,
    "address": 1
  }
],
"timeseries": [
  {
    "tag": "16uint_read",
    "type": "16uint",
    "functionCode": 4,
    "objectsCount": 2,
    "address": 18
  },
]
```

##### Device attributes updates

| **Parameter**                                      | **Description**                                                                                                                  |
|:---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| server.slaves[].attributeUpdates[]                 | List of attributes that will be updated on the device.                                                                           |
| server.slaves[].attributeUpdates[].tag             | Key name of the shared attribute in ThingsBoard. It can be specified as a static value.                                          |
| server.slaves[].attributeUpdates[].type            | [Data type](/docs/iot-gateway/config/modbus/#data-types) of value.                                                               |
| server.slaves[].attributeUpdates[].functionCode    | [Function code](/docs/iot-gateway/config/modbus/#modbus-functions) to use for reading the attribute value from the Modbus slave. |
| server.slaves[].attributeUpdates[].objectsCount    | Number of objects to read from the Modbus slave.                                                                                 |
| server.slaves[].attributeUpdates[].address         | Address of the object in the Modbus slave.                                                                                       |
| server.slaves[].attributeUpdates[].timeout (in ms) | (Optional) Timeout for the request in milliseconds. If not specified, the default timeout is used (5 sec).                       |
| server.slaves[].attributeUpdates[].bitTargetType   | The response type can be either an integer (0/1) or a boolean (True/False). **Used only with type `bits`**.                      |
| ---                                                |                                                                                                                                  |

Example of the attributes updates configuration:

```json
{
    "tag": "relay",
    "type": "bits",
    "functionCode": 5,
    "objectsCount": 1,
    "bitTargetType": "int",
    "address": 29
}
```

##### Device RPC methods

| **Parameter**                         | **Description**                                                                                                                   |
|:--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| server.slaves[].rpc[]                 | List of RPC methods that will be available on the device.                                                                         |
| server.slaves[].rpc[].tag             | Name of the RPC method. It can be specified as a static value.                                                                    |
| server.slaves[].rpc[].type            | [Data type](/docs/iot-gateway/config/modbus/#data-types) of value.                                                                |
| server.slaves[].rpc[].functionCode    | [Function code](/docs/iot-gateway/config/modbus/#modbus-functions) to use for reading the RPC method value from the Modbus slave. |
| server.slaves[].rpc[].objectsCount    | Number of objects to read from the Modbus slave.                                                                                  |
| server.slaves[].rpc[].address         | Address of the object in the Modbus slave.                                                                                        |
| server.slaves[].rpc[].timeout (in ms) | (Optional) Timeout for the request in milliseconds. If not specified, the default timeout is used (5 sec).                        |
| server.slaves[].rpc[].bitTargetType   | The response type can be either an integer (0/1) or a boolean (True/False). **Used only with type `bits`**.                       |
| ---                                   |                                                                                                                                   |

Example of the RPC methods configuration:

```json
"rpc": [
  {
    "tag": "setValue",
    "type": "16int",
    "functionCode": 6,
    "objectsCount": 1,
    "address": 31
  }
]
```

## Server (Gateway as a Slave) settings

Gateway can run as a Modbus slave. Gateway as a slave can store data, send updates to the platform when changes occur 
or at fixed intervals, also, user can change storing data via RPCs or shared attribute updates.

### Enabling Gateway as a Slave and sending data to the platform

To enable the Gateway as a Modbus slave, you need to toggle "**Enable**" button in the "**Server configuration**" 
section. Please note that this option will only create a modbus slave, but it will not send any data to the platform 
automatically:

![image](/images/gateway/modbus-connector/enable-gateway-as-a-slave.png)

To send data to the platform, you need to enable "**Send data to the platform**" toggle in the 
"**Server configuration**", which will enable sending data to the platform when changes occur or at fixed intervals:

![image](/images/gateway/modbus-connector/send-data-gateway-as-a-slave.png)

### Connection settings

{% include /templates/iot-gateway/modbus-connector/server-configuration-section-basic.md %}

### Advanced connection settings

{% include /templates/iot-gateway/modbus-connector/advanced-connection-settings-subsection-basic-2.md %}

### Data mapping

In this section, you can specify initial values for registers and coils. Each value refers to a specific type of
register. There are:

1. Holding registers
2. Coils initializer
3. Input registers
4. Discrete inputs

For each register type, you can configure the value types that will be used to read/write data.
According to the data type you select, the gateway will use the appropriate Modbus function code to
read or write data.

To configure the value types for reading, use the attributes and telemetry sections. To write data, use the RPC methods 
and shared attributes sections. Also note that each value type is configured similarly to the corresponding data types 
in the attributes and telemetry, RPC methods, and shared attributes sections. The only exception is that
you need to set an initial value in the "**Value**" field.

Depending on which value the register belongs to, you should add it to the appropriate array.

Select basic or advanced Modbus configuration:

{% include /templates/iot-gateway/modbus-connector/values-subsection-basic.md %}

### Advanced configuration

The advanced configuration section provides a detailed overview of all available parameters for the Gateway as a Slave 
configuration section.

#### Slave

Gateway can run as a Modbus slave. This configuration section for the Modbus slave, which is used to store data and
send updates to the platform when changes occur or at fixed intervals.

| **Parameter**               | **Default value** | **Description**                                                                                                 |
|:----------------------------|:------------------|-----------------------------------------------------------------------------------------------------------------|
| slave.byteOrder             | **LITTLE**        | The order of bytes to read.                                                                                     |
| slave.wordOrder             | **LITTLE**        | The order of words when reading several registers.                                                              |
| slave.pollPeriod (in ms)    | **5000**          | Period in milliseconds to read and send the attributes and the telemetry to the platform.                       |
| slave.sendDataToThingsBoard | **true**          | If set to **TRUE**, the Gateway will perform autoconfiguration and send values to ThingsBoard every poll period |
| slave.unitId                |                   | ID of current gateway slave on Modbus.                                                                          |
| slave.deviceName            |                   | Device name on the platform.                                                                                    |
| slave.deviceType            | **default**       | (Optional) Device profile name on the platform.                                                                 |
| ---                         |                   |                                                                                                                 |

Example of the slave configuration:

```json
"slave": {
  "type": "tcp",
  "host": "127.0.0.1",
  "port": 5026,
  "method": "socket",
  "deviceName": "Modbus Slave Example",
  "deviceType": "default",
  "pollPeriod": 5000,
  "sendDataToThingsBoard": false,
  "byteOrder": "LITTLE",
  "wordOrder": "LITTLE",
  "unitId": 0,
  ...
}
```

#### Slave connection types

The Modbus connector supports three types of connections to the Modbus slave:
- **TCP** - connection to the Modbus slave over TCP/IP protocol.
- **UDP** - connection to the Modbus slave over UDP protocol.
- **Serial** - connection to the Modbus slave over serial port (RS-232, RS-485, etc.).

##### TCP/UDP

| **Parameter** | **Description**                                                  |
|:--------------|------------------------------------------------------------------|
| slave.type    | Type of connection to Modbus device, can be: **tpc** or **udp**. |
| slave.host    | Hostname or ip address of Modbus server.                         |
| slave.port    | Port of Modbus server for connection.                            |
| slave.method  | Type of a framer **Socket** or **RTU**, if needed.               |
| ---           |                                                                  |

Example of the TPC/UDP configuration:

```json
"slave": {
  "type": "tcp",
  "host": "127.0.0.1",
  "port": 5026,
  "method": "socket",
  ...
}
```

##### Serial

| **Parameter**         | **Default value** | **Description**                                                                                                                       |
|:----------------------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| slave.type            | **serial**        | Type of connection to Modbus device, can be: **tpc** or **udp**.                                                                      |
| slave.port            |                   | Port of Modbus slave for connection.                                                                                                  |
| slave.method          | **rtu**           | Type of a framer **Socket** or **RTU**, if needed.                                                                                    |
| slave.baudrate        | **19200**         | (Optional) Baud rate for serial connection.                                                                                           |
| slave.stopbits        | **1**             | (Optional) The number of bits sent after each character in a message to indicate the end of the byte.                                 |
| slave.parity          | **N**             | (Optional) The type of checksum to use to verify data integrity. This can be on of the following: (**E**) ven, (**O**)dd, (**N**)one. |
| slave.bytesize        | **8**             | (Optional) The number of bits in a byte of serial data. This can be one of **5**, **6**, **7**, or **8**.                             |
| slave.strict          | **true**          | (Optional) Use Inter char timeout for baud rates <= 19200.                                                                            |
| slave.handleLocalEcho | **false**         | (Optional) Handle local echo for serial connections. This is useful for devices that echo back the data sent to them.                 |
| ---                   |                   |                                                                                                                                       |

Example of the serial configuration:

```json
"slave": {
  "type": "serial",
  "port": 5026,
  "method": "rtu",
  "baudrate": 4800,
  "stopbits": 1,
  "bytesize": 5,
  "parity": "N",
  "strict": true,
  "handleLocalEcho": false,
  ...
}
```

##### Security

The Gateway as a Salve supports security configuration. This configuration is used to secure the
connection to the Modbus slave and to authenticate the connection. **Available only for the TCP and UDP connections.**

| **Parameter**           | **Description**                                    |
|:------------------------|----------------------------------------------------|
| slave.security          | Security object.                                   |
| slave.security.keyfile  | Hostname or ip address of Modbus server.           |
| slave.security.certfile | Port of Modbus server for connection.              |
| slave.security.password | Type of a framer **Socket** or **RTU**, if needed. |
| ---                     |                                                    |

Example of the security configuration:

```json
"slave": {
  "type": "tcp",
  "host": "127.0.0.1",
  "port": 5026,
  "method": "socket",
  "security": {
      "keyfile": "/path/to/keyfile.pem",
      "certfile": "/path/to/certfile.pem",
      "password": "your_password"
  }
  ...
}
```

#### Values

The Values list is used to specify the initial values for registers and coils. Each value refers to a specific type of
register. There are:

1. Holding registers
2. Coils initializer
3. Input registers
4. Discrete inputs

For each register type, you can configure the value types that will be used to read/write data.
According to the data type you select, the gateway will use the appropriate Modbus function code to
read or write data.

##### Attributes and timeseries

| **Parameter**                                               | **Description**                                                                                             |
|:------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| slave.values[].`<register_type>`.attributes[]               | The list of attributes.                                                                                     |
| slave.values[].`<register_type>`.attributes[].tag           | Key name of the attribute on the platform.                                                                  |
| slave.values[].`<register_type>`.attributes[].address       | Object address.                                                                                             |
| slave.values[].`<register_type>`.attributes[].type          | Type of value.                                                                                              |
| slave.values[].`<register_type>`.attributes[].objectsCount  | Count of objects to write.                                                                                  |
| slave.values[].`<register_type>`.attributes[].value         | Initial register value.                                                                                     |
| slave.values[].`<register_type>`.attributes[].bitTargetType | The response type can be either an integer (0/1) or a boolean (True/False). **Used only with type `bits`**. |
| slave.values[].`<register_type>`.timeseries[]               | The list of timeseries.                                                                                     |
| slave.values[].`<register_type>`.timeseries[].tag           | Key name of the timeseries on the platform.                                                                 |
| slave.values[].`<register_type>`.timeseries[].address       | Object address.                                                                                             |
| slave.values[].`<register_type>`.timeseries[].type          | Type of value.                                                                                              |
| slave.values[].`<register_type>`.timeseries[].objectsCount  | Count of objects to write.                                                                                  |
| slave.values[].`<register_type>`.timeseries[].value         | Initial register value.                                                                                     |
| slave.values[].`<register_type>`.timeseries[].bitTargetType | The response type can be either an integer (0/1) or a boolean (True/False). **Used only with type `bits`**. |
| ---                                                         |                                                                                                             |

Example of the attributes and timeseries configuration:

```json
"slave": {
  ...
  "values": {
    "holding_registers": {
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
          "type": "16int",
          "tag": "smm",
          "objectsCount": 1,
          "value": 12334
        }
      ],
    }
  }
}
```

##### Attribute updates

| **Parameter**                                                     | **Description**                                                                                             |
|:------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| slave.values[].`<register_type>`.attributeUpdates[]               | The list of attribute updates.                                                                              |
| slave.values[].`<register_type>`.attributeUpdates[].tag           | Key name of the attribute on the platform.                                                                  |
| slave.values[].`<register_type>`.attributeUpdates[].address       | Object address.                                                                                             |
| slave.values[].`<register_type>`.attributeUpdates[].type          | Type of value.                                                                                              |
| slave.values[].`<register_type>`.attributeUpdates[].functionCode  | Function code to write value.                                                                               |
| slave.values[].`<register_type>`.attributeUpdates[].objectsCount  | Count of objects to write.                                                                                  |
| slave.values[].`<register_type>`.attributeUpdates[].value         | Initial register value.                                                                                     |
| slave.values[].`<register_type>`.attributeUpdates[].bitTargetType | The response type can be either an integer (0/1) or a boolean (True/False). **Used only with type `bits`**. |
| ---                                                               |                                                                                                             |

Example of the attribute updates configuration:

```json
"slave": {
  ...
  "values": {
    "holding_registers": {
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
    }
  }
}
```

##### RPC methods

| **Parameter**                                        | **Description**                                                                                             |
|:-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| slave.values[].`<register_type>`.rpc[]               | The list of attribute updates.                                                                              |
| slave.values[].`<register_type>`.rpc[].tag           | Key name of the attribute on the platform.                                                                  |
| slave.values[].`<register_type>`.rpc[].address       | Object address.                                                                                             |
| slave.values[].`<register_type>`.rpc[].type          | Type of value.                                                                                              |
| slave.values[].`<register_type>`.rpc[].functionCode  | Function code to write value.                                                                               |
| slave.values[].`<register_type>`.rpc[].objectsCount  | Count of objects to write.                                                                                  |
| slave.values[].`<register_type>`.rpc[].value         | Initial register value.                                                                                     |
| slave.values[].`<register_type>`.rpc[].bitTargetType | The response type can be either an integer (0/1) or a boolean (True/False). **Used only with type `bits`**. |
| ---                                                  |                                                                                                             |

Example of the RPC methods configuration:

```json
"slave": {
  ...
  "values": {
    "holding_registers": {
      "rpc": [
        {
          "tag": "setValue",
          "type": "16int",
          "functionCode": 5,
          "objectsCount": 1,
          "address": 31,
          "value": 22
        }
      ]
    }
  }
}
```

## Additional information

Here's more details regarding Modbus functions and the supported data types.

### Modbus functions

The Modbus connector supports the following Modbus functions:

| **Modbus function code** | **Description**                 |
|:-------------------------|---------------------------------|
| *Read data*              |                                 |
| **1**                    | Read Coils                      |
| **2**                    | Read Discrete Inputs            |
| **3**                    | Read Multiple Holding Registers |
| **4**                    | Read Input Registers            |
| *Write data:*            |                                 |
| **5**                    | Write Coil                      |
| **6**                    | Write Register                  |
| **15**                   | Write Coils                     |
| **16**                   | Write Registers                 |
| ---                      |                                 |

### Data types

A list and description of the supported data types for reading/writing data.

| **Type**    | **Function code** | **Objects count** | **Note**                                                                                                                         |
|:------------|-------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **string**  | 3-4               | 1-...             | Read bytes from registers and decode it ('UTF-8' coding).                                                                        |
| **bytes**   | 3-4               | 1-...             | Read bytes from registers.                                                                                                       |
| **bits**    | 1-4               | 1-...             | Read coils. If the objects count is 1, result will be interpreted as a boolean. Otherwise the result will be an array with bits. |
| **16int**   | 3-4               | 1                 | Integer 16 bit.                                                                                                                  |
| **16uint**  | 3-4               | 1                 | Unsigned integer 16 bit.                                                                                                         |
| **16float** | 3-4               | 1                 | Float 16 bit.                                                                                                                    |
| **32int**   | 3-4               | 2                 | Integer 32 bit.                                                                                                                  |
| **32uint**  | 3-4               | 2                 | Unsigned integer 32 bit.                                                                                                         |
| **32float** | 3-4               | 2                 | Float 32 bit.                                                                                                                    |
| **64int**   | 3-4               | 4                 | Integer 64 bit.                                                                                                                  |
| **64uint**  | 3-4               | 4                 | Unsigned integer 64 bit.                                                                                                         |
| **64float** | 3-4               | 4                 | Float 64 bit.                                                                                                                    |
| ---         |                   |                   |                                                                                                                                  |

## Next steps

Explore guides related to main ThingsBoard features:

- [How to connect Modbus device to ThingsBoard CE using ThingsBoard IoT Gateway](/docs/iot-gateway/guides/how-to-connect-modbus-device/)
- [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
- [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
- [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
- [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
- [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
