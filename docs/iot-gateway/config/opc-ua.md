---
layout: docwithnav-gw
title: OPC-UA Connector Configuration
description: OPC-UA protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This documentation will help you set up the OPC-UA connector for the ThingsBoard IoT Gateway. We'll explain the configuration 
parameters in simple terms to make it easy for you to understand and follow. The OPC-UA (Open Platform Communications 
Unified Architecture) is a machine-to-machine communication protocol for industrial automation, and this connector 
allows seamless integration with the ThingsBoard platform.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.

We will describe the connector configuration below.

{% capture difference %}
**Please note:**
If you are new to IoT Gateway, use the "Basic" configuration mode. If you are familiar with configuring IoT Gateway, 
you can use the "Advanced" configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Connector configuration

The connector configuration is a user interface form that helps you set up a connection to OPC-UA server. 
Let's look at all the available settings and explain each one clearly. This will help you understand how 
everything works.

{% capture difference %}
**Please note:**
To access the actual UI for the gateway - you need to a have connected gateway before adding a connector. Otherwise, you will see the old UI.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Section "General"

This configuration section contains general connector settings, such as:

- **Name** - connector name used for logs and saving to persistent devices;
- Logs configuration:
  - **Enable remote logging** - enables remote logging for the connector;
  - **Logging level** - logging level for local and remote logs: NONE, ERROR, CRITICAL, WARNING, INFO, DEBUG, TRACE;
- **Send data only on change** - sends data only it has changed since the last check, otherwise – data will be sent after every check;
- **Report strategy** - strategy for sending data to ThingsBoard:
  - **Report period** - period for sending data to ThingsBoard in milliseconds;
  - **Type** - type of the report strategy:
    - **On report period** - sends data to ThingsBoard after the report period;
    - **On value change** - sends data to ThingsBoard when the value changes;
    - **On value change and report period** - sends data to ThingsBoard when the value changes or after the report period;
    - **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/opc-ua-connector/opc-ua-general-basic-1-ce.png)

{% capture difference %}
The General tab in settings is the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Section "Server"

The configuration in this section is used to connect to the OPC-UA server.

Select basic or advanced OPC-UA configuration:

{% capture opcuasection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/opcua-connector/opcua-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/opcua-connector/opcua-advanced-section.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="opcuasection" toggle-spec=opcuasection %}

### Subsection "Security"

Select basic or advanced OPC-UA configuration:

{% capture opcuasecuritysubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/opcua-connector/opcua-security-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/opcua-connector/opcua-security-advanced-section.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="opcuasecuritysubsection" toggle-spec=opcuasecuritysubsection %}

## Section "Data mapping"

This section contains general settings for the nodes and subsections for data processing.

Select basic or advanced OPC-UA configuration:

{% capture opcuadatamappingsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/opcua-connector/opcua-data-mapping-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/opcua-connector/opcua-data-mapping-advanced-section.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="opcuadatamappingsection" toggle-spec=opcuadatamappingsection %}

### Subsection "Attributes" and "Time series"

The configuration in this subsection provides settings for processing data from OPC-UA node. These settings will be 
interpreted in ThingsBoard platform instance as attributes/time series of the device.

{% capture opcuaattrandtimeseriessection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/opcua-connector/opcua-attr-and-time-series-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/opcua-connector/opcua-attr-and-time-series-advanced-section.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="opcuaattrandtimeseriessection" toggle-spec=opcuaattrandtimeseriessection %}

### Subsection "Attribute updates"

This subsection contains configuration for attribute updates request from ThingsBoard platform instance.

ThingsBoard allows the provisioning of device attributes and fetches some of them from
the device application. You can treat this as a remote configuration for devices, enabling them to request 
shared attributes from ThingsBoard. See [user guide](/docs/user-guide/attributes/) for more details.

{% capture subsectiondeviceattrupdates %}
Basic<small></small>%,%basic%,%templates/iot-gateway/opcua-connector/device-attribute-updates-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/opcua-connector/device-attribute-updates-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondeviceattrupdates" toggle-spec=subsectiondeviceattrupdates %}

### Subsection "RPC methods"

ThingsBoard allows sending RPC commands to devices connected directly to ThingsBoard or via Gateway.

{% capture subsectiondevicerpc %}
Basic<small></small>%,%basic%,%templates/iot-gateway/opcua-connector/device-rpc-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/opcua-connector/device-rpc-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondevicerpc" toggle-spec=subsectiondevicerpc %}

{% capture methodFilterOptions %}
Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to configure
it manually. See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).
{% endcapture %}
{% include templates/info-banner.md content=methodFilterOptions %}

## Path types

A Path type refers to the hierarchical address within the OPC-UA server's namespace. It is used to navigate to specific 
nodes in the server.

The path for the attribute value can be absolute or relative.

### Absolute path

An **absolute path** specifies the full hierarchical address from the root of the OPC-UA server's namespace to the 
target node.

**Example:**

Gateway expects the node to exist and the value of "**Root\.Objects\.TempSensor\.Temperature**" to be **23.54**.

_Expression:_

`${Root\\.Objects\\.TempSensor\\.Temperature}`

_Converted data:_

`23.54`

### Relative path

A **relative path** specifies the address relative to a predefined starting point in the OPC-UA server's namespace.

**Example:**

Gateway expects the node to exist and the value of “**Root\.Objects\.TempSensor\.Temperature**” to be 23.56.

_Device Node Expression:_

`Root\\.Objects\\.TempSensor`

_Expression:_

`${Temperature}`

_Converted data:_

`23.56`

## Identifier types

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
 - [ThingsBoard IoT Gateway Features](/docs/iot-gateway/features/)
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
