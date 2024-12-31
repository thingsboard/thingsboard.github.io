---
layout: docwithnav-gw
title: Modbus Connector Configuration
description: Modbus protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This comprehensive guide is designed to familiarize you with the Modbus connector configuration for ThingsBoard IoT Gateway. In the following sections, we will provide a detailed description of the connector configuration, covering all aspects necessary for successful implementation and customization.

The Modbus connector is a powerful tool that allows seamless integration between Modbus devices and the ThingsBoard platform.

{% capture difference %}
**Please note**: 
If you are new to IoT Gateway, use the “Basic” configuration mode. If you are familiar with configuring IoT Gateway, you can use the “Advanced” configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Connector configuration

Connector configuration is a UI form that contains information about how to connect to Modbus slaves. Let's look at all the available settings and explain each one clearly. This will help you understand how everything works.

{% capture difference %}
**Please note**:
Connect the gateway before creating the connector. Otherwise, the UI will display the old configuration fields for backward compatibility.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Section "General"

This configuration section contains general connector settings, such as:

- Name - connector name for logs and saving to persistent devices;
- Logs configuration:
  - Enable remote logging - enabling remote logging for connector;
  - Logging level - logging level for local and remote logs: INFO, DEBUG, WARNING, ERROR, CRITICAL, TRACE, NONE;

![image](https://img.thingsboard.io/gateway/modbus-connector/modbus-general-basic-section-1-ce.png)

{% capture difference %}
The general tab is the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Section "Master Connections"

A Modbus Master is used to query data from Modbus servers (slaves). In order to configure servers for data retrieving, you need to specify list of slaves.

### Subsection "Server settings"

Select basic or advanced Modbus configuration:

{% capture modbusMasterConnectionsSection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/modbus-master-connections-section-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/modbus-master-connections-section-advanced.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusMasterConnectionsSection" toggle-spec=modbusMasterConnectionsSection %}

### Subsection "Report strategy"

Select basic or advanced Modbus configuration:

{% capture modbusReportStrategySubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/modbus-report-strategy-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/modbus-report-strategy-subsection-advanced.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusReportStrategySubsection" toggle-spec=modbusReportStrategySubsection %}

### Subsection "Advanced connection settings"

{% capture advancedConnectionSettingsSubsection1 %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/advanced-connection-settings-subsection-basic-1.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/advanced-connection-settings-subsection-advanced-1.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="advancedConnectionSettingsSubsection1" toggle-spec=advancedConnectionSettingsSubsection1 %}

### Subsection "Attributes" & "Time series"

Select basic or advanced Modbus configuration:

{% capture attributesAndTimeSeriesSubsections %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/attributes-and-time-series-subsections-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/attributes-and-time-series-subsections-advanced.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="attributesTimeSeriesSubsections" toggle-spec=attributesAndTimeSeriesSubsections %}

### Subsection "Attribute updates"

This configuration section is optional.

ThingsBoard allows to provision device attributes and fetch some of them from the device application. You can treat this as a remote configuration for devices. Your devices are able to request shared attributes from ThingsBoard. See [user guide](https://thingsboard.io/docs/user-guide/attributes/) for more details.

The "**attributeUpdates**" configuration allows configuring the format of the corresponding attribute request and response messages.

Select basic or advanced Modbus configuration:

{% capture AttributeUpdatesSubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/attribute-updates-subsection-basic-1.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/attribute-updates-subsection-advanced-1.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="attributesTimeSeriesSubsections" toggle-spec=AttributeUpdatesSubsection %}

### Subsection "RPC requests"

ThingsBoard allows sending [RPC commands](https://thingsboard.io/docs/user-guide/rpc/) to the device that is connected to ThingsBoard directly or via Gateway.
Configuration, provided in this section is used for sending RPC requests from ThingsBoard to device.

Select basic or advanced Modbus configuration:

{% capture RpcRequestsSubsection1 %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/modbus-rpc-requests-subsection-basic-1.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/modbus-rpc-requests-subsection-advanced-1.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="attributesTimeSeriesSubsections" toggle-spec=RpcRequestsSubsection1 %}

## Section "Server configuration": description and configuration parameters

Gateway can run as a Modbus slave. Configuration section for the Modbus server, storing data and sending updates to the platform when changes occur or at fixed intervals.

### Subsection "Server (Slave) configuration"

Select basic or advanced Modbus configuration:

{% capture modbusConnectionToBrokerSubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/server-configuration-section-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/server-configuration-section-advanced.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusConnectionToBrokerSubsection" toggle-spec=modbusConnectionToBrokerSubsection %}

### Subsection "Advanced connection settings"

Select basic or advanced Modbus configuration:

{% capture modbusconnectiontobrokersection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/advanced-connection-settings-subsection-basic-2.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/advanced-connection-settings-subsection-advanced-2.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusconnectiontobrokersection" toggle-spec=modbusconnectiontobrokersection %}

### Subsection "Values"

In this section you can specify initial values for registers and coils. Each value refers to a specific type of
register. There are:

1. Holding registers
2. Coils initializer
3. Input registers
4. Discrete inputs



Depending on which value the register belongs to, you must add it to the appropriate array.

Select basic or advanced Modbus configuration:

{% capture modbusvaluessubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/modbus-connector/values-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/modbus-connector/values-subsection-advanced.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusconnectiontobrokersection" toggle-spec=modbusvaluessubsection %}

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
