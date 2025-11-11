---
layout: docwithnav-gw
title: Socket Connector Configuration
description: Socket API support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you get familiar with Socket Connector configuration for ThingsBoard IoT Gateway. 
Use the [general configuration guide](/docs/iot-gateway/configuration/) to enable this connector. 
A Socket connector runs a server on the local machine to which other devices can connect. This connector is useful 
when you have devices that can send data over TCP or UDP protocols. 

We will describe the connector configuration file below.

{% capture difference %}
**Please note:**
If you are new to IoT Gateway, use the "Basic" configuration mode. If you are familiar with configuring IoT Gateway, you can use the "Advanced" configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Connector configuration

Connector configuration is a UI form that contains information on how to connect to an external server, how to process
the data and other service features. Let’s review the format of the configuration file using the example below.
Let’s take a comprehensive look at all the available settings. We will go through each option in detail to ensure 
that we thoroughly understand their functions and implications. By doing so, we can make well-informed decisions about 
which settings will best suit our needs and preferences.

## Section "General"

This configuration section contains general connector settings, such as:

- **Name** - connector name used for logs and saving to persistent devices;
- Logs configuration:
  - **Enable remote logging** - enables remote logging for the connector;
  - **Logging level** - logging level for local and remote logs: INFO, DEBUG, WARNING, ERROR, CRITICAL, NONE;
- **Send data only on change** - sends data only it has changed since the last check, otherwise – data will be sent after every check;
- **Report strategy** - strategy for sending data to ThingsBoard:
  - **Report period** - period for sending data to ThingsBoard in milliseconds;
  - **Type** - type of the report strategy:
    - **On report period** - sends data to ThingsBoard after the report period;
    - **On value change** - sends data to ThingsBoard when the value changes;
    - **On value change or report period** - sends data to ThingsBoard when the value changes or report period;
    - **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/socket-connector/socket-general-basic-section-1-ce.png)

{% capture difference %}
The settings are the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Section "Socket"

The “Socket” section is used for configuring local socket settings.

{% capture socketsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/socket-connector/socket-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/socket-connector/socket-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="socketsection" toggle-spec=socketsection %}

## Section "Devices"

This configuration section contains an array of objects that contains clients that can be connected to the connector\'s 
socket and send the data to it. Any connection not included in this array will be rejected by the connector.

### Subsection "Device"

{% capture subsectiondevicesection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/socket-connector/device-subsection-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/socket-connector/device-subsection-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondevicesection" toggle-spec=subsectiondevicesection %}

Let’s review more examples of IP addresses filtering:

For example, we have a device that has the following IP address: 192.168.0.120:5001. Now, let's look at configuration examples 
of the field to allow connections with different IP address variants:

1. Only one device with a specified IP address and port can connect:

   **Address filter:** 192.168.0.120:5001
2. Allow any devices with any IP address, but only port 5001:

   **Address filter:** *:5001
3. Allow all devices that have the IP address 192.168.0.120 with any port:

   **Address filter:** 192.168.0.120:*
4. Allow all devices with any IP address and any port:

   **Address filter:** *:*

#### Subsection "Time series" and "Attributes"

This configuration section includes the parameters for handling incoming data.

{% capture subsectiondevicedataconversion %}
Basic<small></small>%,%basic%,%templates/iot-gateway/socket-connector/device-time-series-and-attributes-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/socket-connector/device-time-series-and-attributes-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondevicedataconversion" toggle-spec=subsectiondevicedataconversion %}

#### Subsection "Attribute request"

This configuration section is optional.

In order to request client-side or shared device attributes to ThingsBoard server node, Gateway allows 
sending attribute requests.

{% capture subsectiondeviceattrrequest %}
Basic<small></small>%,%basic%,%templates/iot-gateway/socket-connector/device-attribute-requests-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/socket-connector/device-attribute-requests-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondeviceattrrequest" toggle-spec=subsectiondeviceattrrequest %}

#### Subsection "Attribute update"

This configuration section is optional. 

ThingsBoard allows the provisioning of device attributes and fetches some of them from 
the device application. You can treat this as a remote configuration for devices, enabling them to request 
shared attributes from ThingsBoard. See [user guide](/docs/user-guide/attributes/) for more details.

{% capture subsectiondeviceattrupdates %}
Basic<small></small>%,%basic%,%templates/iot-gateway/socket-connector/device-attribute-updates-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/socket-connector/device-attribute-updates-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondeviceattrupdates" toggle-spec=subsectiondeviceattrupdates %}

#### Subsection "RPC methods"

This configuration section is optional. 

ThingsBoard allows sending RPC commands to devices connected directly to ThingsBoard or via Gateway.

{% capture subsectiondevicerpc %}
Basic<small></small>%,%basic%,%templates/iot-gateway/socket-connector/device-rpc-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/socket-connector/device-rpc-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondevicerpc" toggle-spec=subsectiondevicerpc %}

Also, every telemetry and attribute parameter has a built-in SET RPC method out of the box, eliminating the need for 
manual configuration. To use them, make sure you set all the required parameters (in the case of Socket Connector, 
these are the following:
**withResponse**, **methodProcessing**, **encoding**). 
See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
