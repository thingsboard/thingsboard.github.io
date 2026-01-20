---
layout: docwithnav-gw
title: OPC-UA Connector Configuration
description: OPC-UA protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

## Overview

This documentation will help you set up the OPC-UA connector for the ThingsBoard IoT Gateway. We'll explain the configuration 
parameters in simple terms to make it easy for you to understand and follow. The OPC-UA (Open Platform Communications 
Unified Architecture) is a machine-to-machine communication protocol for industrial automation, and this connector 
allows seamless integration with the ThingsBoard platform. Use 
[general configuration](/docs/iot-gateway/configuration/){:target="_blank"} to enable this connector.

Also, if you are new to ThingsBoard IoT Gateway, we recommend you to read the [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=opcua){:target="_blank"} 
guide to understand the basic concepts of ThingsBoard IoT Gateway and how it works with OPC-UA protocol.

The connector can be configured via the user interface form, which helps you set up a connection to the OPC-UA server, 
collect data and write data to nodes. Let's look at all the available settings and explain each one clearly. 
This will help you understand how everything works.

{% capture difference %}
**Please note:**
To access the actual UI for the gateway - you need to a have connected gateway before adding a connector. Otherwise, you will see the old UI.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Configuration modes

The OPC-UA connector can be configured in two modes: **Basic** and **Advanced**.
- **Basic** mode is designed for users who are new to ThingsBoard IoT Gateway and want to quickly set up the connector with minimal configuration. It provides a simplified interface with essential settings.
- **Advanced** mode is intended for experienced users who need more control over the configuration. It offers additional options and flexibility for advanced use cases.

{% capture difference %}
**Please note:**
If you are new to IoT Gateway, use the "Basic" configuration mode. If you are familiar with configuring IoT Gateway, 
you can use the "Advanced" configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

You can switch between these modes using the toggle button at the top of the configuration page:

![image](/images/gateway/opc-ua-connector/opc-ua-modes-toggle.png)

## General settings

{% include /templates/iot-gateway/connector-commons/general-settings.md %}

![image](/images/gateway/opc-ua-connector/opc-ua-general-basic-1-ce.png)

{% capture difference %}
The General tab in settings is the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Connection settings

Connection settings define how the OPC-UA connector establishes and maintains communication with the OPC-UA 
server. These settings cover the basic connection parameters, server discovery behavior, security configuration, and 
authentication modes.

### Server

This subsection specifies the target OPC-UA server and how the gateway interacts with it. It includes the server’s 
URL, timeout settings, scan intervals, and the option to use either subscriptions or polling to monitor 
data nodes.

{% include /templates/iot-gateway/opcua-connector/opcua-basic-section.md %}

### Security

{% include /templates/iot-gateway/opcua-connector/opcua-security-basic-section.md %}

## Data mapping

Data mapping is a section that allows you to configure which node from the OPC-UA server will be assigned to which 
device in ThingsBoard.
You can also use this section to configure which data will be sent as device attributes or telemetry.
Data mapping contains all the necessary settings for flexible device and data management.

The following parameters are used to configure the base node of the device, its name and profile, as well as for 
report strategy:
- **Device node** - the base node for the device. Paths to the device name, profile, attributes, and telemetry can be specified relative to this node.
- **Device name** - the name of the device in ThingsBoard. It can be specified as a path or identifier to the node or as a static value (more information about types can be found in the [Additional information](/docs/iot-gateway/config/opc-ua/#additional-information) section).
- **Device profile** - the profile of the device in ThingsBoard. It can be specified as a path or identifier to the node or as a static value (more information about types can be found in the [Additional information](/docs/iot-gateway/config/opc-ua/#additional-information) section).
- **Report strategy** - strategy for sending data to ThingsBoard:
  - **Report period** - period for sending data to ThingsBoard in milliseconds;
  - **Type** - type of the report strategy:
    - **On report period** - sends data to ThingsBoard after the report period;
    - **On value change** - sends data to ThingsBoard when the value changes;
    - **On value change or report period** - sends data to ThingsBoard when the value changes or after the report
      period;
    - **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

![image](/images/gateway/opc-ua-connector/opc-ua-data-mapping-overview.png)

To add a new device, use the following steps:

{% assign addingDevice = '
    ===
        image: /images/gateway/opc-ua-connector/adding-device-1.png,
        title: Click the **+ Add mapping** button.
    ===
        image: /images/gateway/opc-ua-connector/adding-device-2.png,
        title: Provide the following fields in the opened model window: Device node, Device name and Profile name (all of them can be `path` or `identifier`).
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addingDevice %}

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.

All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/opc-ua/#device-mapping) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/opc-ua/#usage-examples) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Subsection "Attributes" and "Time series"

The configuration in this subsection provides settings for processing data from the OPC-UA node. These settings will be 
interpreted in ThingsBoard platform instance as attributes/time series of the device.

The following parameters are used to configure device attributes and time series:
- **Key** - the key of the attribute/time series in ThingsBoard. It can be specified as a static value.
- **Type** - the type of expression in the **Value** field (more information about types can be found in the [Additional information](/docs/iot-gateway/config/opc-ua/#additional-information) section):
  - **[Path](/docs/iot-gateway/config/opc-ua/#path-types)** - can be absolute or relative path to the node in the OPC-UA server. The value will be taken from the node with the specified path.
  - **[Identifier](/docs/iot-gateway/config/opc-ua/#identifier-types)** - can be numeric, string, byte string or GUID identifier of the node in the OPC-UA server. The value will be taken from the node with the specified identifier.
  - **Constant** - a static value that will be sent to the device as an attribute/time series key.
- **Value** - the value of the attribute/time series that will be sent to the platform device. It should be specified depending on the selected type (Path, Identifier or Constant).

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/opc-ua/#device-attributes-and-telemetry) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/opc-ua/#usage-examples) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/opc-ua-connector/opc-ua-attributes-timeseries-overview.png)

{% include /templates/iot-gateway/opcua-connector/opcua-attr-and-time-series-basic-section.md %}

### Usage examples

{% capture opcua-attributes-timeseries-examples %}
Device name/profile with Absolute Path<small></small>%,%devicenameandprofileabsolutepath%,%templates/iot-gateway/opcua-connector/examples/time-series-and-attributes/device-name-and-profile-absolute-path.md%br%
Device name/profile with Relative Path<small></small>%,%devicenameandprofilerelativepath%,%templates/iot-gateway/opcua-connector/examples/time-series-and-attributes/device-name-and-profile-relative-path.md%br%
Device name/profile with Identifier<small></small>%,%devicenameandprofileidentifier%,%templates/iot-gateway/opcua-connector/examples/time-series-and-attributes/device-name-and-profile-identifier.md%br%
Attributes/Time series with Relative Path<small></small>%,%attributestimeseriesrelativepath%,%templates/iot-gateway/opcua-connector/examples/time-series-and-attributes/attributes-time-series-relative-path.md%br%
Attributes/Time series with Relative Path and Identifier device node<small></small>%,%attributestimeseriesrelativepathdevicenode%,%templates/iot-gateway/opcua-connector/examples/time-series-and-attributes/attributes-time-series-identifier-device-node.md%br%
Attributes/Time series with Absolute Path<small></small>%,%attributestimeseriesabsolutepath%,%templates/iot-gateway/opcua-connector/examples/time-series-and-attributes/attributes-time-series-absolute-path.md%br%
Attributes/Time series with Identifier<small></small>%,%attributestimeseriesidentifier%,%templates/iot-gateway/opcua-connector/examples/time-series-and-attributes/attributes-time-series-identifier.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="opcua-attributes-timeseries-examples" toggle-spec=opcua-attributes-timeseries-examples %}

## Requests mapping

The Requests mapping section allows you to configure how the ThingsBoard platform instance will interact with the 
devices. That is, how the platform will request data from the devices, how it will update device attributes, and how 
it will send RPC commands to the devices.

OPC-UA connector supports the following requests mapping:
- **Attribute updates** - allows update device nodes values from ThingsBoard platform instance.
- **RPC methods** - allows sending RPC commands to devices. Using RPC methods, you can get or set values of the OPC-UA nodes.
  OPC-UA connector supports different types of RPC methods, such as:
  - **Reserved GET/SET methods** - these methods are automatically created for each attribute and time series parameter. 
    You can use them to get or set values of the OPC-UA nodes.
  - **RPC method to connector** - this method allows you to send a command to the connector from the ThingsBoard IoT Gateway UI. 
    The command will be processed by the connector, and the result will be sent back to the ThingsBoard platform instance.
  - **Configurable RPC methods to device** - these methods allow you to configure custom RPC commands in connector configuration that can be sent to the devices.

### Subsection "Attribute updates"

This subsection contains configuration for attribute updates request from ThingsBoard platform instance.

ThingsBoard allows the provisioning of device attributes and fetches some of them from
the device application. You can treat this as a remote configuration for devices, enabling them to request 
shared attributes from ThingsBoard. See [user guide](/docs/user-guide/attributes/){:target="_blank"} for more details.

The following parameters are used to configure attribute updates:
- **Key** - the key of the shared attribute in ThingsBoard. It can be specified as a static value.
- **Type** - the type of expression in the **Value** field (more information about types can be found in the [Additional information](/docs/iot-gateway/config/opc-ua/#additional-information) section):
  - **[Path](/docs/iot-gateway/config/opc-ua/#path-types)** - can be absolute or relative path to the node in the OPC-UA server. The value will be taken from the node with the specified path.
  - **[Identifier](/docs/iot-gateway/config/opc-ua/#identifier-types)** - can be numeric, string, byte string or GUID identifier of the node in the OPC-UA server. The value will be taken from the node with the specified identifier.
  - **Constant** - a static value that will be sent to the device.
- **Value** - the node in which the shared attribute value will be written. It should be specified depending on the selected type (Path, Identifier or Constant).

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/opc-ua/#device-attributes-updates) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/opc-ua/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/opc-ua-connector/opc-ua-attribute-updates-overview.png)

{% include /templates/iot-gateway/opcua-connector/device-attribute-updates-basic-section.md %}

### Subsection "RPC methods"

ThingsBoard allows sending [RPC commands](https://thingsboard.io/docs/user-guide/rpc/) to devices connected directly to ThingsBoard or via Gateway.
The following parameters are used to configure RPC methods:

- **Method name** - the name of the method on OPC-UA server.
- **Arguments** - list of arguments that will pass to OPC-UA server method.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/opc-ua/#device-rpc-methods) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/opc-ua/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/opc-ua-connector/opc-ua-rpc-overview.png)

{% include /templates/iot-gateway/opcua-connector/device-rpc-basic-section.md %}

{% capture methodFilterOptions %}
Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to configure
it manually. See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).
{% endcapture %}
{% include templates/info-banner.md content=methodFilterOptions %}

### Usage examples

{% capture opcua-shared-attributes-rpc-examples %}
Attribute Updates<small>with Relative Path</small>%,%sharedrelative%,%templates/iot-gateway/opcua-connector/examples/shared-attributes-rpc/shared-attributes-with-relative-path.md%br%
Attribute Updates<small>with Absolute Path</small>%,%sharedabsolute%,%templates/iot-gateway/opcua-connector/examples/shared-attributes-rpc/shared-attributes-with-absolute-path.md%br%
Attribute Updates<small>with Identifier</small>%,%sharedidentifier%,%templates/iot-gateway/opcua-connector/examples/shared-attributes-rpc/shared-attributes-with-identifier.md%br%
RPC to Device<small></small>%,%rpctodevice%,%templates/iot-gateway/opcua-connector/examples/shared-attributes-rpc/rpc-to-device.md%br%
Reserved RPCs<small></small>%,%reservedrpc%,%templates/iot-gateway/opcua-connector/examples/shared-attributes-rpc/reserved-rpc.md%br%
Reserved RPCs to foreign nodes<small></small>%,%reservedrpctoforeignnodes%,%templates/iot-gateway/opcua-connector/examples/shared-attributes-rpc/reserved-rpc-foreign-node.md%br%
RPC to Connector<small></small>%,%rpctoconnector%,%templates/iot-gateway/opcua-connector/examples/shared-attributes-rpc/rpc-to-connector.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="opcua-shared-attributes-rpc-examples" toggle-spec=opcua-shared-attributes-rpc-examples %}

## Advanced configuration

The advanced configuration section provides a detailed overview of all available parameters for the OPC-UA connector.

### Server

The server object specifies the target OPC-UA server and how the gateway interacts with it.

| **Parameter**                                      | **Default value** | **Description**                                                                                                                                                                                                                                                                                                                                   |
|:---------------------------------------------------|:------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| server                                             |                   | The server object specifies the target OPC-UA server and how the gateway interacts with it.                                                                                                                                                                                                                                                       |
| server.url                                         |                   | Hostname or ip address of OPC-UA server.                                                                                                                                                                                                                                                                                                          |
| server.timeoutInMillis (in ms)                     | **5000**          | Timeout in seconds for connecting to OPC-UA server.                                                                                                                                                                                                                                                                                               |
| server.scanPeriodInMillis (in ms)                  | **3600000**       | Period in milliseconds for scanning the OPC-UA server for changes. If your OPC-UA server structure doesn't change often, you can set a big period for gateway resource saving.                                                                                                                                                                    |
| server.pollPeriodInMillis (in ms)                  | **5000**          | Period in milliseconds to poll the server. **If enableSubscriptions is set to true, pollPeriodInMillis does not affect data reading.**                                                                                                                                                                                                            |
| server.enableSubscriptions                         | **true**          | If true - the gateway will subscribe to interesting nodes and wait for data update and if false - the gateway will rescan OPC-UA server every `scanPeriodInMillis`.                                                                                                                                                                               |
| server.subCheckPeriodInMillis (in ms)              | **100**           | Defines the publishing/check interval that the connector requests when creating OPC-UA subscriptions.                                                                                                                                                                                                                                             |
| server.subKeepAlivePeriodInSeconds (in seconds) ** | **0**             | The interval at which the connector checks whether OPC-UA subscriptions are still “alive” (i.e., the publish/data-change flow is not stalled). This check is disabled by default (set to 0). If a subscription shows no activity longer than this threshold, the connector treats it as expired and triggers resubscription to restore updates.   |
| server.subDataMaxBatchSize                         | **1000**          | Maximum number of data items in a single subscription update. This is useful for performance optimization.                                                                                                                                                                                                                                        |
| server.subDataMinBatchCreationTimeMs (in ms)       | **200**           | Minimum time in milliseconds to wait before creating a new batch of data items in a subscription update. This helps to reduce the number of updates sent to ThingsBoard.                                                                                                                                                                          |
| server.subscriptionProcessBatchSize                | **2000**          | Maximum number of data items to process in a single batch when handling subscription updates. This is useful for performance optimization.                                                                                                                                                                                                        |
| server.sessionTimeoutInMillis (in ms)              | **120000**        | Session timeout in milliseconds. This is the maximum time the session can be inactive before it is closed by the server.                                                                                                                                                                                                                          |
| server.showMap                                     | **false**         | If true - the gateway will show a map of OPC-UA server nodes in the terminal. This is useful for debugging and understanding the structure of the OPC-UA server.                                                                                                                                                                                  |
| server.security                                    | **Basic128Rsa15** | Security policy (`Basic128Rsa15`, `Basic256`, `Basic256Sha256`).                                                                                                                                                                                                                                                                                  |
| ---                                                |                   |                                                                                                                                                                                                                                                                                                                                                   |

{% capture difference %}
**Please note:**
\** -- Subscription lifetime in OPC-UA is negotiated using the publishing interval, keep-alive, and lifetime settings, and can be approximated as RequestedLifetimeCount * RequestedPublishingInterval.
In asyncua, RequestedLifetimeCount is typically an internal default which is 1000 ms, while the publishing interval comes from the value used to create the subscription (here: `server.subCheckPeriodInMillis`, e.g. 100 ms), so the approximate lifetime is (1000 * 100) / 1000 = 100 seconds.
However, the exact removal time depends on the OPC-UA server implementation and its cleanup logic - some servers keep subscriptions longer, others may drop them earlier under load or session/publish issues. Therefore, this setting is made to detect “silent” subscriptions and renew them, but you should validate it against your server to avoid extra overhead.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Example of the server configuration:

```json
"server": {
  "url": "localhost:4840/freeopcua/server/",
  "timeoutInMillis": 5000,
  "scanPeriodInMillis": 3600000,
  "pollPeriodInMillis": 5000,
  "enableSubscriptions": true,
  "subCheckPeriodInMillis": 100,
  "subDataMaxBatchSize": 1000,
  "subDataMinBatchCreationTimeMs": 200,
  "subscriptionProcessBatchSize": 2000,
  "sessionTimeoutInMillis": 120000,
  "showMap": false,
  "security": "Basic128Rsa15",
  "identity": {
    "type": "anonymous"
  }
}
```

#### Server identity

The identity object specifies the authentication method used to connect to the OPC-UA server. It can be one of the 
following: **anonymous**, **basic**, **certificates**.

##### Anonymous identity

| **Parameter**        | **Default value** | **Description**                    |
|:---------------------|:------------------|------------------------------------|
| server.identity.type | **anonymous**     | Type of identity on OPC-UA server. |
| ---                  |                   |                                    |

##### Basic identity

| **Parameter**            | **Default value** | **Description**                              |
|:-------------------------|:------------------|----------------------------------------------|
| server.identity.type     | **basic**         | Type of identity on OPC-UA server.           |
| server.identity.username |                   | Username for logging into the OPC-UA server. |
| server.identity.password |                   | Password for logging into the OPC-UA server. |
| ---                      |                   |                                              |

Example of the basic identity configuration:

```json
"identity": {
  "type": "basic",
  "username": "user",
  "password": "5Tr0nG?@$sW0rD"
},
```

##### Certificates identity

| **Parameter**              | **Default value**  | **Description**                                                   |
|:---------------------------|:-------------------|-------------------------------------------------------------------|
| server.identity.type       | **cert.PEM**       | Type of identity on OPC-UA server.                                |
| server.identity.caCert     |                    | Path to the CA certificate.                                       |
| server.identity.cert       |                    | Path to the client certificate.                                   |
| server.identity.privateKey |                    | Path to the client private key.                                   |
| server.identity.mode       | **SignAndEncrypt** | Security mode, there are 2 options – `Sign` and `SignAndEncrypt`. |
| username                   |                    | (Optional) Username for logging into the OPC-UA server.           |
| password                   |                    | (Optional) Password for logging into the OPC-UA server.           |
| ---                        |                    |                                                                   |

Example of the basic certificates configuration:

```json
"identity": {
  "type": "cert.PEM",
  "caCert": "etc/thingsboard-gateway/ca.pem",
  "privateKey": "etc/thingsboard-gateway/private_key.pem", 
  "cert": "etc/thingsboard-gateway/cert.pem",
  "mode": "SignAndEncrypt",
  "username": "user",
  "password": "5Tr0nG?@$sW0rD"
},
```

### Mapping

The Mapping list is used to configure how the OPC-UA connector will map data from the OPC-UA server to
ThingsBoard devices. It allows you to specify which nodes from the OPC-UA server will be used as device names,
device profiles, device attributes, and telemetry data.

#### Device mapping

| **Parameter**                                   | **Description**                                                                                                                                                                                                                                |
|:------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mapping[].deviceNodeSource                      | Source of the device node, can be: path, identifier or constant.                                                                                                                                                                               |
| mapping[].deviceNodePattern                     | Absolute or relative [path](#path-types), or [identifier](#identifier-types), which is used for looking up the node for a current device. Paths to the device name, profile, attributes, and telemetry can be specified relative to this node. |
| mapping[].deviceInfo                            | Device info object using for configuring device name and profile.                                                                                                                                                                              |
| mapping[].deviceInfo.deviceNameExpressionSource | Source of the device name (can be [path](#path-types), [identifier](#identifier-types) or constant).                                                                                                                                           |
| mapping[].deviceInfo.deviceNameExpression       | Path to a variable with device name, which is used for looking up the device name in a variable.                                                                                                                                               |
| mapping[].deviceInfo.deviceProfileSource        | Source of the device profile (can be [path](#path-types), [identifier](#identifier-types) or constant).                                                                                                                                        |
| mapping[].deviceInfo.deviceProfileExpression    | Path to a variable with device profile, is used for looking the device profile in some variable.                                                                                                                                               |
| mapping[].reportStrategy                        | Report strategy object using for configuring report strategy for device.                                                                                                                                                                       |
| ---                                             |                                                                                                                                                                                                                                                |

Example of the device mapping configuration:

```json
"mapping": [
  {
    "deviceNodeSource": "path",
    "deviceNodePattern": "Root\\.Objects\\.MyObject",
    "deviceInfo": {
      "deviceNameExpression": "OPCUA New Advanced Device",
      "deviceNameExpressionSource": "path",
      "deviceProfileExpression": "some other default 1",
      "deviceProfileExpressionSource": "constant"
    },
    "attributes": [],
    "timeseries": [],
    "attributes_updates": [],
    "rpc_methods": [],
  },
]
```

#### Device attributes and time series

| **Parameter**                            | **Description**                                                                                                                                            |
|:-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mapping[].attributes[]                   | List of attributes that will be sent to the ThingsBoard platform instance.                                                                                 |
| mapping[].attributes[].key               | Key name of the attribute in ThingsBoard. It can be specified as a static value.                                                                           |
| mapping[].attributes[].type              | Type of the expression in the value field (can be [path](#path-types), [identifier](#identifier-types) or constant).                                       |
| mapping[].attributes[].value             | Value of the attribute that will be sent to the platform. It should be specified depending on the selected type (`path`, `identifier` or `constant`).      |
| mapping[].attributes[].reportStrategy    | (Optional) Report strategy for the attributes data. If not specified, the device report strategy will be used.                                             |
| mapping[].timeseries[]                   | List of telemetry data that will be sent to the ThingsBoard platform instance.                                                                             |
| mapping[].timeseries[].key               | Key name of the telemetry data in ThingsBoard. It can be specified as a static value.                                                                      |
| mapping[].timeseries[].type              | Type of the expression in the value field (can be [path](#path-types), [identifier](#identifier-types) or constant).                                       |
| mapping[].timeseries[].value             | Value of the telemetry data that will be sent to the platform. It should be specified depending on the selected type (`path`, `identifier` or `constant`). |
| mapping[].timeseries[].timestampLocation | (Optional) Location of the timestamp for the attribute. If not specified, the current time will be used. Can be: `sourcetimestamp`, `servertimestamp`      |
| mapping[].timeseries[].reportStrategy    | (Optional) Report strategy for the time series data. If not specified, the device report strategy will be used.                                            |
| ---                                      |                                                                                                                                                            |

Example of the attributes and telemetry configuration:

```json
"attributes": [
  {
    "key": "Power",
    "type": "path",
    "value": "${Power}"
  },
  {
    "key": "Frequency",
    "type": "path",
    "value": "${Frequency}"
  }
],
"timeseries": [
  {
    "key": "Humidity",
    "type": "path",
    "value": "${ns=2;i=16}"
  },
  {
    "key": "Temperature",
    "type": "path",
    "value": "${Root\\.Objects\\.MyObject\\.Temperature}"
  }
],
```

#### Device attributes updates

| **Parameter**                                  | **Default value** | **Description**                                                                                                                                     |
|:-----------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| mapping[].attributes_updates[]                 |                   | List of attributes that will be updated on the device.                                                                                              |
| mapping[].attributes_updates[].key             |                   | Key name of the shared attribute in ThingsBoard. It can be specified as a static value.                                                             |
| mapping[].attributes_updates[].type            |                   | Type of the expression in the value field (can be [path](#path-types), [identifier](#identifier-types) or constant).                                |
| mapping[].attributes_updates[].value           |                   | Value of the attribute that will be sent to the device. It should be specified depending on the selected type (`path`, `identifier` or `constant`). |
| mapping[].attributes_updates[].timeout (in ms) | **5000**          | Timeout in milliseconds for the attribute update request.                                                                                           |
| ---                                            |                   |                                                                                                                                                     |

Example of the attributes updates configuration:

```json
"attributes_updates": [
  {
    "key": "nodeById",
    "type": "path",
    "value": "ns=2;i=23"
    "timeout": 5000
  },
]
```

#### Device RPC methods

| **Parameter**                             | **Default value** | **Description**                                                                  |
|:------------------------------------------|-------------------|----------------------------------------------------------------------------------|
| mapping[].rpc_methods[]                   |                   | List of RPC methods that will be sent to the device.                             |
| mapping[].rpc_methods[].method            |                   | Name of the method on the OPC-UA server.                                         |
| mapping[].rpc_methods[].arguments         |                   | (Optional) List of default arguments that will pass to the OPC-UA server method. |
| mapping[].rpc_methods[].arguments[].type  |                   | Type of the argument.                                                            |
| mapping[].rpc_methods[].arguments[].value |                   | (Optional) Value of the argument.                                                |
| mapping[].rpc_methods[].timeout (in ms)   | **5000**          | Timeout in milliseconds for the RPC method execution.                            |
| ---                                       |                   |                                                                                  |

Example of the RPC methods configuration:

```json
"rpc_methods": [
  {
    "timeout": 3000,
    "method": "multiply",
    "arguments": [
      {
        "type": "integer",
        "value": 2
      },
      {
        "type": "integer",
        "value": 4
      }
    ]
  },
]
```

## Additional information

### Path types

A Path type refers to the hierarchical address within the OPC-UA server's namespace. It is used to navigate to specific 
nodes in the server.

The path for the attribute value can be absolute or relative.

#### Absolute path

An **absolute path** specifies the full hierarchical address from the root of the OPC-UA server's namespace to the 
target node.

**Example:**

Gateway expects the node to exist and the value of "**Root\.Objects\.TempSensor\.Temperature**" to be **23.54**.

_Expression:_

`${Root\\.Objects\\.TempSensor\\.Temperature}`

_Converted data:_

`23.54`

#### Relative path

A **relative path** specifies the address relative to a predefined starting point in the OPC-UA server's namespace.

**Example:**

Gateway expects the node to exist and the value of “**Root\.Objects\.TempSensor\.Temperature**” to be 23.56.

_Device Node Expression:_

`Root\\.Objects\\.TempSensor`

_Expression:_

`${Temperature}`

_Converted data:_

`23.56`

### Identifier types

An **Identifier** type is a unique ID assigned to a node within the OPC-UA server. It is used to directly reference 
specific nodes without navigating through the namespace hierarchy.

The Identifier type in the OPC-UA connector configuration can take various forms to uniquely reference nodes 
in the OPC-UA server's address space. Identifiers can be of different types, such as numeric (`i`), string (`s`), 
byte string (`b`), and GUID (`g`). Below is an explanation of each identifier type with examples.

- **Numeric Identifier (`i`)**

  A **numeric identifier** uses an integer value to uniquely reference a node in the OPC-UA server.

  _Expression:_

  `${ns=2;i=1235}`
  
  _Converted data:_
  
  `21.34`

- **String Identifier (`s`)**

  A **string identifier** uses a string value to uniquely reference a node in the OPC-UA server.

  _Expression:_

  `${ns=3;s=TemperatureSensor}`
  
  _Converted data:_
  
  `21.34`

- **Byte String Identifier (`b`)**

  A **byte string identifier** uses a byte string to uniquely reference a node in the OPC-UA server. This is useful for binary data that can be converted to a byte string.

  _Expression:_

  `${ns=3;b=Q2xpZW50RGF0YQ==}`
  
  _Converted data:_
  
  `21.34`

- **GUID Identifier (`g`)**

  A **GUID identifier** uses a globally unique identifier (GUID) to uniquely reference a node in the OPC-UA server.

  _Expression:_

  `${ns=3;g=550e8400-e29b-41d4-a716-446655440000}`
  
  _Converted data:_
  
  `21.34`

## Next steps

Explore guides related to main ThingsBoard features:
 - [How to connect OPC-UA device to ThingsBoard CE using ThingsBoard IoT Gateway](/docs/iot-gateway/guides/how-to-connect-opc-ua-device-to-thingsboard-ce/)
 - [ThingsBoard IoT Gateway Features](/docs/iot-gateway/features/)
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
