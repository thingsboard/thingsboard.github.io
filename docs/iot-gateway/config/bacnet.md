---
layout: docwithnav-gw
title: BACnet Connector Configuration
description: BACnet protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

## Overview

This documentation will help you set up the BACnet connector for the ThingsBoard IoT Gateway. We’ll explain the
configuration parameters in simple terms to make it easy for you to understand and follow. The BACnet protocol is
widely used in building automation and control systems for applications such as heating, ventilation, air conditioning 
(HVAC), lighting control, access control, and fire detection systems. Use
[general configuration](/docs/iot-gateway/configuration/){:target="_blank"} to enable this extension.

The BACnet connector allows the ThingsBoard IoT Gateway to communicate with BACnet devices, enabling data exchange and 
control capabilities. The connector can be configured via the user interface form, which helps you set up a connection 
to the BACnet devices, collect data and write data to devices. Let’s look at all the available settings and explain 
each one clearly. This will help you understand how everything works.

{% capture difference %}
**Please note**:
Connect the gateway before creating the connector. Otherwise, the UI will display the old configuration fields for
backward compatibility.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Configuration modes

The BACnet connector can be configured in two modes: **Basic** and **Advanced**.

- **Basic** mode is designed for users who are new to ThingsBoard IoT Gateway and want to quickly set up the connector
  with minimal configuration. It provides a simplified interface with essential settings.
- **Advanced** mode is intended for experienced users who need more control over the configuration. It offers additional
  options and flexibility for advanced use cases.

{% capture difference %}
**Please note:**
If you are new to IoT Gateway, use the "**Basic**" configuration mode. If you are familiar with configuring IoT Gateway,
you can use the "**Advanced**" configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

You can switch between these modes using the toggle button at the top of the configuration page:

![image](/images/gateway/bacnet-connector/bacnet-modes-toggle.png)

## General settings

{% include /templates/iot-gateway/connector-commons/general-settings.md %}

![image](/images/gateway/bacnet-connector/bacnet-general-basic-1-ce.png)

{% capture difference %}
The General tab in settings is the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Application

Configuration in this section is used to configure the gateway in the BACnet network.
The following parameters are used to configure application settings:

{% include /templates/iot-gateway/bacnet-connector/bacnet-application-section-basic.md %}

## Advanced application settings

You can configure additional application settings like: APDU length, segmentation, network number and discovering timeout.

| **Parameter**                | **Default value** | **Description**                                                                                                  |
|:-----------------------------|:------------------|------------------------------------------------------------------------------------------------------------------|
| APDU Length (in bytes)       | **1476**          | Maximal length of the APDU.                                                                                      |
| Segmentation                 | **Both**          | Segmentation type for transmitting large BACnet messages. Can be: **Both**, **Transmit**, **Receive**, **None**. |
| Network number               | **3**             | Identifier of the network segment.                                                                               |
| Discovering timeout (in sec) | **5**             | Period of time when the connector will try to discover BACnet devices.                                           |
| ---                          |                   |                                                                                                                  |

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/bacnet/#advanced-configuration) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/bacnet-connector/bacnet-advanced-application-settings.png)

## Data mapping

This configuration section contains an array of BACnet devices that can be connected to the connector and send data.
Any BACnet device not included in this array will be rejected by the connector.

{% include /templates/iot-gateway/bacnet-connector/bacnet-device-subsection-basic.md %}

### Attributes and Time series

This configuration section includes the parameters for handling incoming data. You can specify which data will be
treated as device attributes and which as time series. Attributes are used for storing static or infrequently changing
data, while time series are used for storing dynamic or frequently changing data.

{% include /templates/iot-gateway/bacnet-connector/device-time-series-and-attributes-basic-section.md %}

### Usage examples

{% capture bacnet-attributes-timeseries-examples %}
Dynamic device name/profile<small></small>%,%dynamicdevicenameandprofile%,%templates/iot-gateway/bacnet-connector/examples/time-series-and-attributes/dynamic-device-name-and-profile.md%br%
Alternative responses addresses<small></small>%,%alternativeresponsesaddresses%,%templates/iot-gateway/bacnet-connector/examples/time-series-and-attributes/alternative-responses-addresses.md%br%
Discovering all device<small>(advanced configuration mode only)</small>%,%discoveringalldevice%,%templates/iot-gateway/bacnet-connector/examples/time-series-and-attributes/discovering-all-device.md%br%
Reading all device objects<small>(advanced configuration mode only)</small>%,%readingalldeviceobjects%,%templates/iot-gateway/bacnet-connector/examples/time-series-and-attributes/reading-all-device-objects.md%br%
Filtering objects and properties<small>(advanced configuration mode only)</small>%,%filteringobjectsandproperties%,%templates/iot-gateway/bacnet-connector/examples/time-series-and-attributes/filtering-objects-and-properties.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="bacnet-attributes-timeseries-examples" toggle-spec=bacnet-attributes-timeseries-examples %}

## Requests mapping

The Requests mapping section allows you to configure how the ThingsBoard platform instance will interact with the 
devices. That is, how the platform will request data from the devices, how it will update device attributes, and how 
it will send RPC commands to the devices.

BACnet connector supports the following requests mapping:

- **Attribute updates** - allows update device objects values from ThingsBoard platform instance.
- **RPC methods** - allows sending RPC commands to devices. Using RPC methods, you can get or set values of the BACnet
  device objects values. BACnet connector supports different types of RPC methods, such as:
  - **Reserved GET/SET methods** - these methods are automatically created for each attribute and time series parameter. You
    can use them to get or set values of the BACnet device objects values.
  - **Configurable RPC to device** - these methods allow you to configure custom RPC commands in connector configuration
    that can be sent to the devices.

### Attribute updates

This subsection contains configuration for attribute updates request from ThingsBoard platform instance.

ThingsBoard allows the provisioning of device attributes and fetches some of them from the device application. 
You can treat this as a remote configuration for devices, enabling them to request shared attributes from 
ThingsBoard. See [user guide](/docs/user-guide/attributes/) for more details.

The following parameters are used to configure attribute updates:
- **Key** - the key of the shared attribute in ThingsBoard. It can be specified as a static value.
- **Object ID** - the object id in the BACnet device.
- **Object Type** - the object type in the BACnet device.
- **Property ID** - the property id in the BACnet device.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the
[Advanced configuration](/docs/iot-gateway/config/bacnet/#device-attribute-updates) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/bacnet/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/bacnet-connector/attribute-updates-overview.png)

{% include /templates/iot-gateway/bacnet-connector/device-attribute-updates-basic-section.md %}

### RPC methods

ThingsBoard allows sending [RPC commands](https://thingsboard.io/docs/user-guide/rpc/) to devices connected directly to ThingsBoard or via Gateway.
The following parameters are used to configure RPC methods:
- **Method** - the RPC method name.
- **Request Type** - “**writeProperty**” to write data and “**readProperty**” to read data.
- **Object ID** - the object id in the BACnet device.
- **Object Type** - the object type in the BACnet device.
- **Property ID** - the property id in the BACnet device.
- **Request Timeout** - timeout in milliseconds for the RPC method execution.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the
[Advanced configuration](/docs/iot-gateway/config/bacnet/#device-rpc-methods) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/bacnet/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/bacnet-connector/rpc-overview.png)

{% include /templates/iot-gateway/bacnet-connector/device-rpc-basic-section.md %}

{% capture methodFilterOptions %}
Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to configure
it manually. See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).
{% endcapture %}
{% include templates/info-banner.md content=methodFilterOptions %}

### Usage examples

{% capture bacnet-shared-attributes-rpc-examples %}
Attribute Updates<small></small>%,%sharedattribute%,%templates/iot-gateway/bacnet-connector/examples/shared-attributes-and-rpc/attribute-updates.md%br%
RPC to Device<small></small>%,%rpctodevice%,%templates/iot-gateway/bacnet-connector/examples/shared-attributes-and-rpc/rpc-to-device.md%br%
Reserved RPCs<small></small>%,%reservedrpc%,%templates/iot-gateway/bacnet-connector/examples/shared-attributes-and-rpc/reserved-rpc.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="bacnet-shared-attributes-rpc-examples" toggle-spec=bacnet-shared-attributes-rpc-examples %}

## EDE files parsing (Advanced configuration mode only)

The BACnet connector supports EDE files parsing. EDE (Engineering Data Exchange) files are used to describe the
structure and properties of BACnet devices. By parsing EDE files, the BACnet connector can automatically configure
itself to interact with the devices described in the files.

To use EDE files parsing, you need to provide the path to the EDE file in the connector configuration. The connector
will then read the file and extract the necessary information to communicate with the BACnet devices.
The EDE file should be in CSV format and follow the BACnet EDE schema.

Let’s look at the example of the EDE file parsing configuration.

We will use an EDE file exported from YABE (Yet Another BACnet Explorer) application. The file contains the
description of a BACnet device with several objects. The file looks like this:

![image](/images/gateway/bacnet-connector/ede-file-overview.png)

Now let’s configure the BACnet connector to use this EDE file. In the advanced configuration mode, paste the following
connector configuration (**make sure to use the correct path to your EDE file**):

```json
{
  "application": {
    "objectName": "TB_gateway",
    "host": "YOUR_HOST",
    "port": 47808,
    "objectIdentifier": 599,
    "vendorIdentifier": 15,
    "maxApduLengthAccepted": 1476,
    "segmentationSupported": "segmentedBoth",
    "deviceDiscoveryTimeoutInSec": 5
  },
  "edeFilePath": "/path/to/your/file.ede"
}
```
{:.copy-code}

{% capture difference %}
**Please note**:
- The EDE file parsing is available only in the **Advanced** configuration mode.
- The EDE file should be accessible by the IoT Gateway.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

After applying the configuration, the BACnet connector will parse the EDE file and automatically configure itself to
interact with the BACnet device described in the file. You can then use the connector to read data from the device,
update device attributes, and send RPC commands to the device. As you can see on the screenshot below, the connector
has automatically created the device with the name and profile from the EDE file, as well as all the attributes and time
series from the file:

![image](/images/gateway/bacnet-connector/ede-device-overview.png)

## Advanced configuration

The advanced configuration section provides a detailed overview of all available parameters for the BACnet connector.

### Application

The application configuration parameters are used to configure the gateway in the BACnet network.

| **Parameter**                                          | **Default value**       | **Description**                                                                                                       |
|:-------------------------------------------------------|:------------------------|-----------------------------------------------------------------------------------------------------------------------|
| application.objectName                                 | **ThingsBoard Gateway** | The gateway object name in the BACnet network.                                                                        |
| application.host                                       |                         | The gateway host in the BACnet network                                                                                |
| application.port                                       | **47808**               | The gateway port in the BACnet network.                                                                               |
| application.mask                                       |                         | The gateway mask in the BACnet network.                                                                               |
| application.networkNumber                              |                         | Identifier of the network segment.                                                                                    |
| application.objectIdentifier                           | **599**                 | The gateway object identifier in the BACnet network.                                                                  |
| application.vendorIdentifier                           | **15**                  | The gateway vendor identifier in the BACnet network.                                                                  |
| application.maxApduLengthAccepted                      | **1476**                | Maximal length of the APDU.                                                                                           |
| application.segmentationSupported                      | **segmentedBoth**       | The type of segmentation, can be: **segmentedBoth**, **segmentedTransmit**, **segmentedReceive**, **noSegmentation**. |
| application.deviceDiscoveryTimeoutInSec (in sec)       | **5**                   | Timeout for discovering devices.                                                                                      |
| application.devicesDiscoverPeriodSeconds (in sec)      | **30**                  | Period of time when the connector will try to discover BACnet devices.                                                |
| application.devicesRescanObjectsPeriodSeconds (in sec) | **60**                  | The period of time when the connector will try to reread device objects that it failed to read last time.             |
| ---                                                    |                         |                                                                                                                       |

Example of the application configuration:

```json
{
  "application": {
    "objectName": "TB_gateway",
    "host": "192.168.1.168",
    "port": 47808,
    "objectIdentifier": 599,
    "vendorIdentifier": 15,
    "maxApduLengthAccepted": 1476,
    "segmentationSupported": "segmentedBoth",
    "networkNumber": 3,
    "deviceDiscoveryTimeoutInSec": 5
  }
}
```

### Foreign device (v.3.7.6+)

The foreign device configuration parameters are used to configure the gateway as a foreign device in the BACnet network.
It is useful when the gateway is behind a NAT and needs to register with a BACnet Broadcast Management Device (BBMD).

| **Parameter**              | **Default value** | **Description**                                   |
|:---------------------------|-------------------|---------------------------------------------------|
| foreignDevice.ttl (in sec) | **900**           | Time to live for the foreign device registration. |
| foreignDevice.address      | **0.0.0.0**       | The address of the BBMD to register with.         |
| ---                        |                   |                                                   |

### Devices

The device list contains an array of BACnet devices that can be connected to the connector and interact with them. 
Any BACnet device not included in this array will be rejected by the connector.

| **Parameter**                                      | **Description**                                                                                                                             |
|:---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| devices[].host                                     | The host of the device.                                                                                                                     |
| devices[].port                                     | The port of the device.                                                                                                                     |
| devices[].mask                                     | The mask of the device.                                                                                                                     |
| devices[].networkMask                              | The identifier of the device network segment.                                                                                               |
| devices[].pollPeriod                               | The period of time when the connector will try to poll the BACnet device.                                                                   |
| devices[].altResponsesAddresses[]                  | Array of alternative addresses for device responses (you can find detail examples [here](/docs/iot-gateway/config/bacnet/#usage-examples)). |
| devices[].reportStrategy                           | Report strategy object using for configuring report strategy for device.                                                                    |                                          
| devices[].deviceInfo                               | Device info object using for configuring device name and profile.                                                                           |
| devices[].deviceInfo.deviceNameExpressionSource    | The source of the device name: **constant**, **expression**.                                                                                |
| devices[].deviceInfo.deviceNameExpression          | The device name (you can find detail examples [here](/docs/iot-gateway/config/bacnet/#usage-examples)).                                     |
| devices[].deviceInfo.deviceProfileExpressionSource | The source of the device profile: **constant**, **expression**.                                                                             |
| devices[].deviceInfo.deviceProfileExpression       | The device profile name (you can find detail examples [here](/docs/iot-gateway/config/bacnet/#usage-examples)).                             |
| ---                                                |                                                                                                                                             |

Example of the device mapping configuration:

```json
{
  "devices": [
    {
      "deviceInfo": {
        "deviceNameExpression": "BACnet Device ${objectName}",
        "deviceProfileExpression": "default",
        "deviceNameExpressionSource": "expression",
        "deviceProfileExpressionSource": "constant"
      },
      "host": "192.168.2.110",
      "port": "47808",
      "pollPeriod": 10000,
      "attributes": [],
      "timeseries": [],
      "attributeUpdates": [],
      "serverSideRpc": []
    }
  ]
}
```

#### Available variables for device name/profile expressions

You can use the following parameters for forming device name and profile:
- `${objectName}` - the device object name of the BACnet device.
- `${objectId}` - the device object identifier of the BACnet device.
- `${vendorId}` - the device vendor identifier of the BACnet device.
- `${address}` - the device host address.
- `${routerId}` - the device router identifier.
- `${routerName}` - the device router name.
- `${routerAddress}` - the device router address.
- `${routerVendorId}` - the device router vendor identifier.

You can find detail examples [here](/docs/iot-gateway/config/bacnet/#usage-examples).

#### Device attributes and time series

| **Parameter**                         | **Description**                                                                                                 |
|:--------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| devices[].attributes[]                | This subsection contains parameters of the device data, that will be interpreted as attributes for the device.  |
| devices[].attributes[].key            | The name for time series on the platform.                                                                       |
| devices[].attributes[].objectType     | The object type in the BACnet device.                                                                           |
| devices[].attributes[].objectId       | The object id in the BACnet device.                                                                             |
| devices[].attributes[].propertyId     | The property id in the BACnet device.                                                                           |
| devices[].attributes[].reportStrategy | Report strategy object using for configuring report strategy for device attribute.                              |
| devices[].timeseries[]                | This subsection contains parameters of the device data, that will be interpreted as time series for the device. |
| devices[].timeseries[].key            | The name for time series on the platform.                                                                       |
| devices[].timeseries[].objectType     | The object type in the BACnet device.                                                                           |
| devices[].timeseries[].objectId       | The object id in the BACnet device.                                                                             |
| devices[].timeseries[].propertyId     | The property id in the BACnet device.                                                                           |
| devices[].timeseries[].reportStrategy | Report strategy object using for configuring report strategy for device time series.                            |
| ---                                   |                                                                                                                 |

Example of the device attributes and time series configuration:

```json
{
  "attributes": [
    {
      "key": "location",
      "objectType": "analogValue",
      "objectId": 1,
      "propertyId": "presentValue"
    }
  ],
  "timeseries": [
    {
      "key": "temperature",
      "objectType": "analogInput",
      "objectId": 2,
      "propertyId": "presentValue"
    }
  ]
}
```

#### Device attribute updates

| **Parameter**                                | **Default value** | **Description**                                           |
|:---------------------------------------------|-------------------|-----------------------------------------------------------|
| devices[].attributeUpdates[]                 |                   | List of attributes that will be updated on the device.    |
| devices[].attributeUpdates[].key             |                   | The name of the shared attribute on platform instance.    |
| devices[].attributeUpdates[].objectType      |                   | The object type in the BACnet device.                     |
| devices[].attributeUpdates[].objectId        |                   | The object id in the BACnet device.                       |
| devices[].attributeUpdates[].propertyId      |                   | The property id in the BACnet device.                     |
| devices[].attributeUpdates[].timeout (in ms) | **5000**          | Timeout in milliseconds for the attribute update request. |
| ---                                          |                   |                                                           |

Example of the device attribute updates configuration:

```json
{
  "attributeUpdates": [
    {
      "key": "setpoint",
      "objectType": "analogValue",
      "objectId": 3,
      "propertyId": "presentValue",
      "timeout": 5000
    }
  ]
}
```

#### Device RPC methods

| **Parameter**                             | **Default value** | **Description**                                                               |
|:------------------------------------------|:------------------|-------------------------------------------------------------------------------|
| devices[].serverSideRpc[]                 |                   | List of RPC methods that will be sent to the device.                          |
| devices[].serverSideRpc[].method          |                   | RPC method name.                                                              |
| devices[].serverSideRpc[].requestType     |                   | “**writeProperty**” to write data and “**readProperty**” to read data.        |
| devices[].serverSideRpc[].objectType      |                   | The object type in the BACnet device.                                         |
| devices[].serverSideRpc[].objectId        |                   | The object id in the BACnet device.                                           |
| devices[].serverSideRpc[].propertyId      |                   | The property id in the BACnet device.                                         |
| devices[].serverSideRpc[].priority        |                   | Priority of the value to write (optional, should be an integer from 1 to 16). |
| devices[].serverSideRpc[].timeout (in ms) | **5000**          | Timeout in milliseconds for the RPC method execution.                         |
| ---                                       |                   |                                                                               |

Example of the device RPC methods configuration:

```json
{
  "serverSideRpc": [
    {
      "method": "set_state",
      "requestType": "writeProperty",
      "objectType": "analogValue",
      "objectId": 3,
      "propertyId": "presentValue",
      "timeout": 5000
    }
  ]
}
```

## Additional information

### Supported Object Types

The BACnet connector support the following BACnet object types:

| **BACnet object id** | **ThingsBoard object id** |
|----------------------|---------------------------|
| **Binary input**     | **binaryInput**           |
| **Binary Output**    | **binaryOutput**          |
| **Binary Value**     | **binaryValue**           |
| **Analog Input**     | **analogInput**           |
| **Analog Output**    | **analogOutput**          |
| **Analog Value**     | **analogValue**           |
| **Schedule Object**  | **schedule**              |
| ---                  | ---                       |

### Supported Property Identifiers

Property identifiers depend on type of the BACnet object, provided in camelCase, e.g:
- presentValue
- objectName
- objectDescription
- units
- eventState
- outOfService
- priorityArray
- relinquishDefault
- currentCommandPriority
- eventMessageTexts
- eventMessageTextsConfig
- eventAlgorithmInhibitReference
- timeDelayNormal
- weeklySchedule
- listOfObjectPropertyReferences
- location

## Troubleshooting

### Device discovery issues on Linux with Docker Compose

If you are running Gateway via docker compose on Linux, and you have issues with device discovery, make sure that you 
have set the correct network mode in the docker compose file. So you should add the following line to `tb-gateway` 
service in your docker compose file:

```yaml
network_mode: "host"
extra_hosts:
    - "host.docker.internal:host-gateway"
```
{: .copy-code}

### Device discovery issues on Windows with Docker Compose

BACnet connector doesn't support device discovery on Windows OS due to the limitations of the Docker networking stack 
on Windows. Please use installation from source or other installation methods to run Gateway on Windows OS.

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
