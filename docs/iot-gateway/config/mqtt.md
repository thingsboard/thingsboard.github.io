---
layout: docwithnav-gw
title: MQTT Connector Configuration
description: MQTT protocol support for ThingsBoard IoT Gateway
redirect_from: 
  - "/docs/iot-gateway/mqtt/"  
  - "/docs/iot-gateway/resources/mqtt-gui-extension-configuration.json"

---

* TOC
{:toc}

## Overview

This documentation will help you set up the MQTT connector for the ThingsBoard IoT Gateway. We'll explain the configuration 
parameters in simple terms to make it easy for you to understand and follow. The MQTT(Message Queuing Telemetry Transport)
is a lightweight publish-subscribe, machine-to-machine network protocol that is widely used for connections with remote 
locations with devices that have resource constraints or network transfer rate.
Use [general configuration](/docs/iot-gateway/configuration/){:target="_blank"} to enable this connector. 

Also, if you are new to ThingsBoard IoT Gateway, we recommend you to read the [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=mqtt){:target="_blank"} 
guide to understand the basic concepts of ThingsBoard IoT Gateway and how it works with MQTT protocol.

The connector can be configured via the user interface form, which helps you set up a connection to an MQTT broker and
read/write data by subscribing/publishing to MQTT topics, that can be defined statically or generated on the fly. 
Let's look at all the available settings and explain each one clearly. 
This will help you understand how everything works.

{% capture difference %}
**Please note:**
To access the actual UI for the gateway - you need to a have connected gateway before adding a connector. Otherwise, you will see the old UI.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Configuration modes 

The MQTT connector can be configured in two modes: **Basic** and **Advanced**.
- **Basic** mode is designed for users who are new to ThingsBoard IoT Gateway and want to quickly set up the connector with minimal configuration. It provides a simplified interface with essential settings.
- **Advanced** mode is intended for experienced users who need more control over the configuration. It offers additional options and flexibility for advanced use cases.

{% capture difference %}
**Please note:**
If you are new to IoT Gateway, use the "Basic" configuration mode. If you are familiar with configuring IoT Gateway, 
you can use the "Advanced" configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

You can switch between these modes using the toggle button at the top of the configuration page:

![image.png](/images/gateway/mqtt-connector/mqtt-modes-toggle.png)

## General settings

{% include /templates/iot-gateway/connector-commons/general-settings.md %}

![image](/images/gateway/mqtt-connector/general-basic-section-1-ce.png)

{% capture difference %}
The General tab in settings is the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Connection settings

Connection settings how the MQTT connector establishes and maintains communication with the MQTT broker.
These settings configure the basic connection parameters, the MQTT protocol version used, and the corresponding security and authentication modes.

### Connection to broker

This subsection specifies the target MQTT broker and how the gateway interacts with it. It includes the broker's host,
port, mqtt version protocol and client id.

{% include /templates/iot-gateway/mqtt-connector/mqtt-basic-section.md %}

### Security

MQTT broker connections offer three distinct security types: Anonymous, Basic, Certificates.

{% capture mqtt-security-examples %}
Anonymous <small></small>%,%anonymous%,%templates/iot-gateway/mqtt-connector/security-subsection-anonymous.md%br%
Basic <small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/security-subsection-basic.md%br%
Certificates <small></small>%,%certificates%,%templates/iot-gateway/mqtt-connector/security-subsection-certificates.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="mqtt-security-examples" toggle-spec=mqtt-security-examples %}

{% capture difference %}
All configuration parameters list for each authentication mode, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#advanced-configuration) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Data mapping

**Data Mapping** lets you configure the topic/topics the gateway subscribes to for device creation and incoming data handling.
You can generate topic/topics and device names on the fly, and choose what data is sent 
as device attributes or telemetry. This section provides the essential settings for flexible device and data management.

The following parameters configure the topic(s) the gateway subscribes to for data feed, device creation (name and profile), 
and the reporting strategy:
- **Topic filter** - The topic/topics the gateway will subscribe to that is used for data feed .The **Topic filter**  supports special symbols: ‘#’ and ‘+’
*wildcards* (more information how you may use them for matching topic patterns [Additional information](/docs/iot-gateway/config/mqtt/#wildcard-usage) section). 
- Also MQTT connector supports shared subscriptions to create one you need to add `$share/` as a prefix for **Topic filter** and shared subscription group name (more information how you may use it [Additional information](/docs/iot-gateway/config/mqtt/#shared-subscriptions) section) and problems.
that may appear while using them [Shared subscriptions limitations](/docs/iot-gateway/config/mqtt/#shared-subscriptions-limitations).
- **QoS** - *MQTT Quality of Service*  is an agreement between the message sender and receiver that defines the level of delivery guarantee for a specific message. (0-At most once, 1-At least once, 2-Exactly once)
- **Report strategy** - strategy for sending data to ThingsBoard:
  - **Report period** - period for sending data to ThingsBoard in milliseconds;
  - **Type** - type of the report strategy:
    - **On report period** - sends data to ThingsBoard after the report period;
    - **On value change** - sends data to ThingsBoard when the value changes;
    - **On value change or report period** - sends data to ThingsBoard when the value changes or after the report period;
    - **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

### Data conversion

- **Payload type** - The incoming data type that will be processed as  `JSON`, `Bytes`, `Custom` (more information about supported Payload types see in the [Additional information](/docs/iot-gateway/config/mqtt/#convertor-types) *Convertor types section* ).
- **Device Name** - The name of the device in ThingsBoard. It can be parsed from `Message`, `Topic`, `Constant` (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples) section).
- **Device Profile name** - The device profile in ThingsBoard. It can be parsed from `Message`, `Topic`, `Constant` (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples) section).

To add a new device, use the following steps:

{% assign dataMapping = '
    ===
        image: /images/gateway/mqtt-connector/data-mapping-1.png,
        title: Click the **+ Add mapping** button.
    ===
        image: /images/gateway/mqtt-connector/data-mapping-2.png,
        title: Provide the following fields for the Data mapping section in the opened modal window: Topic filter, QoS, Payload type (can be `JSON`, `Bytes` or `Custom`).
    ===
        image: /images/gateway/mqtt-connector/data-mapping-3.png,
        title: Provide the following fields in the Data conversion subsection of the opened modal window: Name and Profile name (can be sourced from `Message`, `Topic` or `Constant`).
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=dataMapping %}

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.

All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#device-mapping) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}


### Attributes and Time series

The configuration in this subsection provides settings for processing data from MQTT topic/topics. These settings will be 
interpreted in ThingsBoard platform instance as attributes/time series of the device.

The following parameters are used to configure device attributes and time series:
- **Key** - the key of the attribute/time series in ThingsBoard. It can be specified as a static value.
- **Type** - the type of attribute/time series field (It could be one of the following `string`, `boolean`, `integer`, `double` or `Raw` if the **Payload type** `Bytes`.):
- **Value** - the value of the attribute/time series that will be sent to the platform device. It should be specified depending on the selected **Payload type** (`Bytes`, `JSON`, `CUSTOM`).

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#device-attributes-and-timeseries) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/mqtt-connector/mqtt-attributes-timeseries-overview.png)

{% include /templates/iot-gateway/mqtt-connector/mqtt-attr-and-time-series-basic-section.md %}

### Usage examples

{% capture difference %}
Note: If you are running the gateway in Docker and using our MQTT Demo broker from [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=mqtt){:target="_blank"} 
, you must use `host.docker.internal` as the host.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture mqtt-attributes-timeseries-examples %}
Device name/profile from message and JSON payload<small></small>%,%devicenameandprofilemessageandjson%,%templates/iot-gateway/mqtt-connector/examples/time-series-and-attributes/device-name-and-profile-message-json.md%br%
Device name/profile from topic and JSON payload<small></small>%,%devicenameandprofiletopiconstantandjson%,%templates/iot-gateway/mqtt-connector/examples/time-series-and-attributes/device-name-and-profile-topic-and-constant-json.md%br%
Device name/profile from message and BYTES payload<small></small>%,%devicenameandprofilemessageconstantantbytes%,%templates/iot-gateway/mqtt-connector/examples/time-series-and-attributes/device-name-and-profile-message-and-constant-bytes.md%br%
Attributes/Time series with JSON Path<small></small>%,%attributestimeseriesjsonpath%,%templates/iot-gateway/mqtt-connector/examples/time-series-and-attributes/attributes-time-series-json-path.md%br%
Attributes/Time series with Slices<small></small>%,%attributestimeseriesslices%,%templates/iot-gateway/mqtt-connector/examples/time-series-and-attributes/attributes-time-series-bytes.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="mqtt-attributes-timeseries-examples" toggle-spec=mqtt-attributes-timeseries-examples %}


## Requests mapping

The **Requests mapping** section allows you to configure how the ThingsBoard platform instance will interact with the 
devices. That is, how the platform will request data from the devices, how it will update/request device attributes, and how 
it will send RPC commands to the devices.

MQTT connector supports the following requests mapping:
- **Connect requests** - tell the ThingsBoard platform that a device is online on the MQTT broker by publishing a “connect” message the Gateway listens for.
- **Disconnect requests** - inform ThingsBoard (via the Gateway) that a device is offline by publishing a disconnect message to the configured topic.
- **Attribute updates** - push shared attributes from ThingsBoard to the device by publishing an update message to the configured topic via the Gateway.
- **Attribute requests** - the device asks ThingsBoard for attributes by publishing a request to a specific topic; the Gateway replies on the response topic with the values.
- **RPC methods** - allows sending RPC commands to devices.
  MQTT connector supports different types of RPC methods, such as:

  - **Reserved GET/SET methods** - these methods are automatically created for each attribute and time series parameter. 
    You can use them to get or set values of the device. For every configured attribute or timeseries key, the connector exposes built-in RPCs:

    - `get` - reads the current value (as the connector can provide/resolve it)
    - `set` - sets/updates the value (the connector applies or forwards it)

    These do not require extra mapping, because they are managed by the connector and the result is returned to ThingsBoard.
    The command will be processed by the connector, and the result will be sent back to the ThingsBoard platform instance.

  - **Configurable RPC methods to device** - These methods allow you to configure custom RPC commands in connector configuration that can be sent to the devices.

  - **One Way and Two Way RPC methods** - All RPC's can be two types:

    - `One Way` - if you do not want to get a response back from a device
    - `Two Way` - if you do want to get a response back from a device

### Connect request

Connect request is used for sending a message to the Gateway indicating that a device has connected, so the device can be marked as online on the platform.

Suppose we have a scenario where the device connects to the MQTT broker but doesn't send any telemetry data. By default, after 10 minutes of inactivity, the device becomes offline for the ThingsBoard platform instance. 
However, we may want to be able to send RPC/attribute updates to this device even if it does not send any telemetry data.
In this case, the platform needs to know if the target device is connected and what gateway or session is used to connect the device at the moment. 
If your device is constantly sending telemetry data, you may skip this section - ThingsBoard already knows how to push notifications.

The following parameters are used to configure connect requests:
- **Request type** - the type of the request sent to ThingsBoard (set to "Connect request").
- **Topic filter** - the topic/topics the gateway will subscribe to and wait for device to publish the connect request. The **Topic filter** supports special symbols: ‘#’ and ‘+’
*wildcards* (more information how you may use them for matching topic patterns [Additional information](/docs/iot-gateway/config/mqtt/#wildcard-usage) section).
- **Name** - the name of the device in ThingsBoard to which the request will be sent to. It can be parsed from `Message`, `Topic`, `Constant`, (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).
- **Profile name** - the name of the device in ThingsBoard to which the request will be sent to. It can be parsed from `Message`, `Topic`, `Constant` (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#device-connect-requests) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/mqtt-connector/mqtt-connect-request-overview.png)

{% include /templates/iot-gateway/mqtt-connector/device-connect-request-basic-section.md %}

### Disconnect request

Disconnect request is used for sending a message to the Gateway indicating that a device has disconnected, so the device can be marked as offline on the platform.

When a device disconnects from the MQTT broker, ThingsBoard needs to be notified to update the device's status and last disconnect time. 
The disconnect request allows the gateway to inform ThingsBoard when a device disconnects from the MQTT broker. This information is stored as server attributes and can be used for monitoring device connectivity patterns, troubleshooting connection issues, or triggering workflows based on disconnect events.
If your device uses a clean disconnect process (rather than just timing out), configuring disconnect requests provides more immediate and accurate status updates in ThingsBoard.

The following parameters are used to configure disconnect requests:
- **Request type** - the type of the request sent to ThingsBoard (set to "Disconnect request").
- **Topic filter** - the topic/topics the gateway will subscribe to and wait for device to publish the disconnect notification. The **Topic filter** supports special symbols: '#' and '+'
*wildcards* (more information how you may use them for matching topic patterns in the [Additional information](/docs/iot-gateway/config/mqtt/#wildcard-usage) section).
- **Name** - the name of the device in ThingsBoard to which the disconnect status will be applied. It can be parsed from `Message`, `Topic`, or `Constant` (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#device-disconnect-requests) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/mqtt-connector/mqtt-message-disconnect.png)

{% include /templates/iot-gateway/mqtt-connector/disconnect-request-subsection-basic.md %}

### Attribute requests

Attribute requests are used for requesting the values of its client-side or shared attributes from ThingsBoard via the Gateway.

When a device needs to retrieve attribute values from ThingsBoard, it can send an attribute request. This allows devices to request shared or client attributes stored on the ThingsBoard platform.
When a device publishes a request to a specific topic, the gateway fetches the requested shared/client attributes from ThingsBoard and publishes a response to a response topic.

The following parameters are used to configure attribute requests:
- **Request type** - the type of the request sent to ThingsBoard (set to "Attribute request").
- **Topic filter** - the topic/topics that the gateway subscribes to for incoming requests. The **Topic filter** supports special symbols: `#` and `+`
*wildcards* (more information how you may use them for matching topic patterns in the [Additional information](/docs/iot-gateway/config/mqtt/#wildcard-usage) section).
- **Device name expression** - the name of the device in ThingsBoard from which to request the attributes. It can be parsed from `Message`, `Topic`, or `Constant` (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).
- **Attribute name expression** - the name of the attribute in ThingsBoard to be requested. It can be parsed from `Message`, `Topic`, or `Constant` (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).
- **Response value expression** - the format of the attribute value in the response message. It can be parsed from `Message`, `Topic`, or `Constant` (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).
- **Response topic expression** - the topic/topics the gateway will publish the attribute response message to. It can be parsed from `Message`, `Topic`, or `Constant` (more information about sources with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).
- **Retain** - whether the attribute response message should be retained by the MQTT broker.

{% capture difference %}

All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#device-attribute-requests) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/mqtt-connector/mqtt-message-attribute-requests-1.png)

![image](/images/gateway/mqtt-connector/mqtt-message-attribute-requests-2.png)

{% include /templates/iot-gateway/mqtt-connector/attribute-request-subsection-basic.md %}

### Attribute updates

Attribute updates are used for provisioning or updating its client-side or shared attributes on ThingsBoard through the Gateway.

You can treat this as a remote configuration for devices, enabling them to request 
shared attributes from ThingsBoard. See [user guide](/docs/user-guide/attributes/){:target="_blank"} for more details.

The following parameters are used to configure attribute updates:
- **Request type** - the type of the request sent to ThingsBoard (set to "Attribute updates"). 
- **Device name filter** - regular expression device name filter, used to determine which devices should receive attribute updates see [regex](#regular-expressions) (more information with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section.
- **Attribute filter** - regular expression attribute name filter, used to determine which attributes should be updated see [regex](#regular-expressions) (more information with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).
- **Response value expression** - the format of the attribute value in the response message. It can be parsed from [json-path](#json-path) (more information with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).
- **Response topic expression** - the topic/topics the gateway will publish the attribute response message to. It can be parsed from [json-path](#json-path) (more information with screenshot examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section).
- **Retain** - whether the attribute response message should be retained by the MQTT broker.

{% capture difference %}

All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#device-attribute-updates) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/mqtt-connector/mqtt-message-attributes-update.png)

{% include /templates/iot-gateway/mqtt-connector/attribute-updates-subsection-basic.md %}

### Server side RPC commands

Server side RPC commands are used for delivering remote procedure call (RPC) commands from ThingsBoard to a device connected via the Gateway.

ThingsBoard allows sending [RPC commands](https://thingsboard.io/docs/user-guide/rpc/) to devices connected directly to ThingsBoard or via Gateway.
The following parameters are used to configure RPC methods:
- **Request type** - set to RPC command. Can be with response (`Two Way`) or without response (`One Way`).
- **Device name filter** - regular expression device name filter, used to determine which devices should receive RPC commands.
- **Method filter** - regular expression method name filter, used to determine which RPC methods should be processed.
- **Request topic expression** - JSON-path expression used for creating topic address to send RPC request.
- **Value expression** - JSON-path expression used for creating data for sending to broker.
- **Response topic expression** (only for `Two Way`) - JSON-path expression used for creating topic address to subscribe for response message.
- **Response topic QoS** (only for `Two Way`) - quality of Service level for the response topic subscription.
- **Response timeout** (only for `Two Way`) - timeout in milliseconds. If there is no response within this period after sending the request, gateway will unsubscribe from the response topic.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#device-rpc-methods) section.

More usage examples can be found in the [Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples-1) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

One way and Two way RPC overview:

{% assign OneWayTwoWayRPC = '
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-1.png,
        title: Two way RPC expects response from a topic.
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-2.png,
        title: Since Two way RPC expects response from a topic, we also need to specify **Response topic expression**, **Response topic Qos**, **Response timeout**.
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-3.png,
        title: One way RPC does not expect response from a topic.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=OneWayTwoWayRPC %}

{% include /templates/iot-gateway/mqtt-connector/device-rpc-basic-section.md %}

{% capture methodFilterOptions %}
Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to configure
it manually. See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).
{% endcapture %}
{% include templates/info-banner.md content=methodFilterOptions %}


### Usage examples

{% capture difference %}
Note: If you are running the gateway in Docker and using our MQTT Demo broker from [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=mqtt){:target="_blank"} 
, you must use `host.docker.internal` as the host.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture mqtt-request-mapping-examples %}
Connect request <small></small>%,%connectrequest%,%templates/iot-gateway/mqtt-connector/examples/request-mapping/connect-request.md%br%
Disconnect request <small></small>%,%sharedabsolute%,%templates/iot-gateway/mqtt-connector/examples/request-mapping/disconnect-request.md%br%
Attribute request <small></small>%,%sharedidentifier%,%templates/iot-gateway/mqtt-connector/examples/request-mapping/attribute-request.md%br%
Attribute update <small></small>%,%rpctodevice%,%templates/iot-gateway/mqtt-connector/examples/request-mapping/attribute-update.md%br%
Reserved RPCs <small></small>%,%reservedrpc%,%templates/iot-gateway/mqtt-connector/examples/request-mapping/reserved-rpc.md%br%
RPC to Device <small></small>%,%rpctoconnector%,%templates/iot-gateway/mqtt-connector/examples/request-mapping/configurable-rpc.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="mqtt-request-mapping-examples" toggle-spec=mqtt-request-mapping-examples %}

## Advanced configuration

The advanced configuration section provides a detailed overview of all available parameters for the MQTT connector.

### Connection to broker

The broker section defines the target MQTT broker and how the gateway interacts with it.


| **Parameter**                             | **Default value**       | **Description**                                                                                                                                                                                                                                                                                                                                                      |
|:------------------------------------------|:------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| broker                                    |                         | The broker object specifies the target mqtt broker and how the gateway interacts with it.                                                                                                                                                                                                                                                                            |
| broker.host                               |                         | Hostname or ip address that will be used for establishing connection to MQTT broker.                                                                                                                                                                                                                                                                                 |
| broker.port                               | **1883**                | Listening MQTT port on the broker that will accept connection from a client.                                                                                                                                                                                                                                                                                         |
| broker.version                            | **5**                   | MQTT protocol version (there are three versions currently supported by gateway - **3.1**, **3.11**, **5**).                                                                                                                                                                                                                                                          |
| broker.clientId **                        | **ThingsBoard_gateway** | Unique identifier for each client’s session on the broker.                                                                                                                                                                                                                                                                                                           |
| broker.maxMessageNumberPerWorker          | **10**                  | (Optional) Maximum number of MQTT messages a single worker (a background helper that processes queued messages)<br/> handles in one pass before letting other workers run. You may read more about this in the [Workers settings](/docs/iot-gateway/config/mqtt/#workers-settings).                                                                                  |
| broker.maxNumberOfWorkers                 | **100**                 | (Optional) Maximum number of workers (background helpers that process queued messages)<br/> the gateway can run in parallel to handle MQTT traffic. You may read more about this in the [Workers settings](/docs/iot-gateway/config/mqtt/#workers-settings).                                                                                                         |
| broker.keepAlive (in seconds)             | **60**                  | (Optional) Seconds between pings; e.g., default is 60s, the broker expects traffic within the given interval * 1.5 or it closes the connection.                                                                                                                                                                                                                      |
| broker.cleanSession                       | **true**                | (Optional) Tells the broker whether to start fresh or keep your previous session, Use `false`, if you want offline message queueing; use `true` if you always reconnect cleanly and don’t need persistence(Only for 3.1, 3.11 see details here - [MQTT Parameter Version Differences](/docs/iot-gateway/config/mqtt/#mqtt-parameter-version-differences).            |
| broker.cleanStart                         | **true**                | (Optional) Simular to **broker.cleanSession**, but unlike it, only decides what happens **at the start** of a connection; use `true`, if you want discard an old session; use `false` if you want to try to resume it (For MQTT 5.0 only see details here - [MQTT Parameter Version Differences](/docs/iot-gateway/config/mqtt/#mqtt-parameter-version-differences). |
| broker.sessionExpiryInterval (in seconds) | **0**                   | (Optional) How long the broker should keep your session after you disconnect (For MQTT 5.0 only see details here - [MQTT Parameter Version Differences](/docs/iot-gateway/config/mqtt/#mqtt-parameter-version-differences).                                                                                                                                          |
| ---                                       |                         |                                                                                                                                                                                                                                                                                                                                                                      |

{% capture difference %}
**Please note:**
\** -- The broker (or broker cluster) does not allow two simultaneous sessions with the same **broker.clientId**. If a second connection uses that ID, 
the broker closes the existing session and accepts the new one (session takeover). The Client ID can be any valid UTF-8 string; 
if you don’t have a descriptive one, you can generate it in the MQTT connector configuration UI—see the last screenshots under [Connection to broker](/docs/iot-gateway/config/mqtt/#connection-to-broker) subsection.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Example of the server configuration:

```json
"broker": {
  "host": "127.0.0.1",
  "port": 1883,
  "version": 5,
  "clientId": "ThingsBoard_gateway",
  "maxMessageNumberPerWorker": 10,
  "maxNumberOfWorkers": 100, 
  "keepAlive": 60,
  "cleanSession": true,
  "cleanStart": true,
  "sessionExpiryInterval": 0,    
  "security": {
    "type": "anonymous"
  }
}
```
{: .copy-code}

### Security

MQTT broker connections offer three distinct security types: [Anonymous](/docs/iot-gateway/config/mqtt/#anonymous-1), 
[Basic](/docs/iot-gateway/config/mqtt/#basic-1), [Certificates](/docs/iot-gateway/config/mqtt/#certificates-1).

#### Anonymous

**Anonymous** is the simplest option: no credentials are required to publish/subscribe on the MQTT broker.
*not recommended for production*, because it allows unattended access.


| **Parameter**        | **Default value**       | **Description**                                                                                      |
|:---------------------|:------------------------|------------------------------------------------------------------------------------------------------|
| broker.security      |                         | The broker security object specifies authentication type for establishing connection to MQTT broker. |
| broker.security.type | **anonymous**           | Type of authentication.                                                                              |
| ---                  |                         |                                                                                                      |


Example of the security configuration for **anonymous** authentication option.

```json
"security": {
  "type": "anonymous"
}
```
{: .copy-code}

#### Basic

**Basic** authentication option uses a **username** and **password** configured on the MQTT broker. 
It’s a good default for most setups - just use strong, unique credentials.


| **Parameter**                   | **Default value** | **Description**                                                                                   |
|:--------------------------------|:------------------|---------------------------------------------------------------------------------------------------|
| broker.security                 |                   | The broker security object specifies authentication type for establishing connection to MQTT broker.|
| broker.security.type            | **basic**         | Type of authentication.                                                                           |
| broker.security.username        | **username**      | Username that will be used for establishing connection with MQTT broker.                          |
| broker.security.password        | **password**      | Password that will be used for establishing connection with MQTT broker.                          |
| ---                             |                   |                                                                                                   |


Example of the security configuration for **basic** authentication option: 

```json
"security": {
  "type": "basic",
  "username": "username", 
  "password": "password"
}
```
{: .copy-code}

#### Certificates

**Certificate-based authentication** uses TLS certificates so the gateway and broker verify each other.
The safest authentication mode, setting up use the broker’s TLS port (typically 8883) for encrypted, production-grade security.


| **Parameter**                    | **Default value**                            | **Description**                                                                                                                                                                                          |
|:---------------------------------|:---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| broker.security                  |                                              | The broker security object specifies authentication type for establishing connection to MQTT broker.                                                                                                     |
| broker.security.type             | **certificates**                             | Type of authentication.                                                                                                                                                                                  |
| broker.security.pathToCACert     | **/etc/thingsboard-gateway/ca.pem**          | Path to the **pathToCACert** your CA certificate your MQTT client uses it to check the broker’s certificate during TLS, ensuring you’re connecting to a trusted server.                                  |
| broker.security.pathToPrivateKey | **/etc/thingsboard-gateway/privateKey.pem**  | Path to the **pathToPrivateKey** the key that proves the client’s identity and enables secure TLS handshakes.                                                                                            |
| broker.security.pathToClientCert | **/etc/thingsboard-gateway/certificate.pem** | Path to the **pathToClientCert** your certificate that identifies the gateway to the MQTT broker during TLS handshake. It’s paired with the gateway’s private key and is usually signed by a trusted CA. |


Example of the security configuration for **certificates** authentication option: 

```json
"security": {
  "type": "certificates",
  "pathToCACert": "/etc/thingsboard-gateway/ca.pem",
  "pathToPrivateKey": "/etc/thingsboard-gateway/privateKey.pem",
  "pathToClientCert": "/etc/thingsboard-gateway/certificate.pem"
}
```
{: .copy-code}

### Mapping

Mapping lets you configure the topic/topics the gateway subscribes to for device creation and incoming data handling.
You can generate topic/topics and device names on the fly, and choose what data is sent 
as device attributes or telemetry. This section provides the essential settings for flexible device and data management.

#### Device mapping

| **Parameter**                                             | **Description**                                                                                                                                                                                        |
|:----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mapping[].topicFilter                                     | The topic/topics the gateway will subscribe to that is used for data feed .[Wildcards](#wildcard-usage) can be used for topic creation.                                                                |
| mapping[].subscriptionQos                                 | An agreement between the message sender and receiver that defines the level of delivery guarantee for a specific message. (0-At most once, 1-At least once, 2-Exactly once).                           |
| mapping[].convertor.type                                  | Explains how the connector parses MQTT payloads and extracts device information can be [json](#json), [bytes](#bytes), [custom](#custom).                                                              |
| mapping[].deviceInfo.convertor.deviceNameExpressionSource | Source of the device name (can be `message`, `topic` or `constant`).                                                                                                                                   |
| mapping[].deviceInfo.convertor.deviceNameExpression       | Expression used to extract the device name from the selected source (Message/Topic/Constant). Supports JSON path, regular expression, byte slice, or literal - see [expression](#expression-types).    |
| mapping[].deviceInfo.convertor.deviceProfileSource        | Source of the device profile (can be `message`, `topic` or `constant`).                                                                                                                                |
| mapping[].deviceInfo.convertor.deviceProfileExpression    | Expression used to extract the device profile from the selected source (Message/Topic/Constant). Supports JSON path, regular expression, byte slice, or literal - see [expression](#expression-types). |
| mapping[].reportStrategy                                  | (Optional) Report strategy object using for configuring report strategy for device.                                                                                                                    |
| mapping[].timeout                                         | (Optional) Timeout for triggering “Device Disconnected” event by default - `60000`(in milliseconds).                                                                                                   |
| ---                                                       |                                                                                                                                                                                                        |

Example of the device mapping configuration:

```json
"mapping": [
  {
    "topicFilter": "sensor/data",
    "subscriptionQos": 1,
    "converter": {
      "type": "json",
      "deviceInfo": {
        "deviceNameExpressionSource": "message",
        "deviceNameExpression": "${serialNumber}",
        "deviceProfileExpressionSource": "message",
        "deviceProfileExpression": "${sensorType}"
      },
      "attributes": [],
      "timeseries": []
    }
  }
]
```
{: .copy-code}

#### Device attributes and timeseries

| **Parameter**                         | **Description**                                                                                                                                                                                                                          |
|:--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mapping[].attributes[]                | List of attributes that will be sent to the ThingsBoard platform instance.                                                                                                                                                               |
| mapping[].attributes[].key            | Key name of the attribute in ThingsBoard. It can be specified as a static value.                                                                                                                                                         |
| mapping[].attributes[].type           | The type of attribute field (It could be one of the following `string`, `boolean`, `integer`, `double` or `Raw` if the **Payload type** `Bytes`).                                                                                        |
| mapping[].attributes[].value          | The value of the attribute that will be sent to the platform device. It should be specified depending on the selected **Payload type** (`Bytes`, `JSON`, `CUSTOM`).                                                                      |
| mapping[].attributes[].reportStrategy | (Optional) Report strategy for the attributes data. If not specified, the device report strategy will be used.                                                                                                                           |
| mapping[].timeseries[]                | List of telemetry data that will be sent to the ThingsBoard platform instance.                                                                                                                                                           |
| mapping[].timeseries[].key            | Key name of the telemetry data in ThingsBoard. It can be specified as a static value.                                                                                                                                                    |
| mapping[].timeseries[].type           | The type of telemetry field (It could be one of the following `string`, `boolean`, `integer`, `double` or `Raw` if the **Payload type** `Bytes`).                                                                                        |
| mapping[].timeseries[].value          | Value of the telemetry data that will be sent to the platform. It should be specified depending on the selected type (`json path`, `regular expressions` or `slices`).                                                                   |
| mapping[].timeseries[].tsField        | (Optional) [json-path](/docs/iot-gateway/config/mqtt/#json-path) expression for field that carries a datetime string. If not present, the `ts` or `timestamp` properties from incoming message will be used as timestamp for data entry. |
| mapping[].timeseries[].dayfirst       | (Optional)  Points out that the first number is the day (`DD.MM.YY HH:mm:ss.SSS`).• `false` → `10.11.24 10:10:10.252` → 11 Oct 2024 10:10:10.252• `true` → `10.11.24 10:10:10.252` → 10 Nov 2024 10:10:10.252.                           |
| mapping[].timeseries[].yearfirst      | (Optional) Points out that the first number is the year `(DD.MM.YY HH:mm:ss.SSS)`. • `false` → follows dayfirst rule• `true` → `10.11.24 10:10:10.252` → 24 Nov 2010 10:10:10.252.                                                       |
| mapping[].timeseries[].reportStrategy | (Optional) Report strategy for the time series data. If not specified, the device report strategy will be used.                                                                                                                          |
| ---                                   |                                                                                                                                                                                                                                          |

Example of the attributes and telemetry configuration:

```json
"attributes": [
  {
    "type": "string",
    "key": "model",
    "value": "${sensorModel}"
  },
  {
    "type": "string",
    "key": "${sensorModel}",
    "value": "on"
  }
],
"timeseries": [
  {
    "type": "double",
    "key": "temperature",
    "value": "${temp}"
  },
  {
    "type": "double",
    "key": "humidity",
    "value": "${hum}",
    "tsField": "${timestampField}",
    "dayfirst": true    
  },
  {
    "type": "string",
    "key": "combine",
    "value": "${hum}:${temp}"
  }
],
```
{: .copy-code}


### Request mapping

#### Device connect requests


| **Parameter**                                                                                                                                    | **Description**                                                                                                                                                                                     |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| requestsMapping.connectRequests[].topicFilter                                                                                                    | The topic/topics the gateway will subscribe to and wait for device to publish the connect request.[Wildcards](#wildcard-usage) can be used for topic creation.                                      |
| requestsMapping.connectRequests[].deviceInfo.deviceNameExpressionSource                                                                          | Source of the device name to which the request will be sent to (can be `message`, `topic` or `constant`).                                                                                           |
| requestsMapping.connectRequests[].deviceInfo.deviceNameExpression                                                                                | Expression used to extract the device name from the selected source (Message/Topic/Constant). Supports JSON path, regular expression, byte slice, or literal - see [expression](#expression-types). |
| requestsMapping.connectRequests[].deviceInfo.deviceProfileExpressionSource                                                                       | Source of the device profile to which the request will be sent to (can be `message`, `topic` or `constant`).                                                                                         |
| requestsMapping.connectRequests[].deviceInfo.deviceProfileExpression                                                                             | Expression used to extract the device name from the selected source (Message/Topic/Constant). Supports JSON path, regular expression, byte slice, or literal - see [expression](#expression-types). |
| ---                                                                                                                                              |                                                                                                                                                                                                     |

Example of the connect request configuration:

```json
"requestsMapping": {
  "connectRequests": [
    {
      "topicFilter": "sensor/connect",
      "deviceInfo": {
        "deviceNameExpressionSource": "message",
        "deviceNameExpression": "${serialNumber}",
        "deviceProfileExpressionSource": "constant",
        "deviceProfileExpression": "Thermometer"
      }
    }
  ]
}
```
{: .copy-code}

#### Device disconnect requests


| **Parameter**                                                                                                                                     | **Description**                                                                                                                                                                                     |
|:--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| requestsMapping.disconnectRequests[].topicFilter                                                                                                  | The topic/topics the gateway will subscribe to and wait for device to publish the disconnect request.[Wildcards](#wildcard-usage) can be used for topic creation.                                   |
| requestsMapping.disconnectRequests[].deviceInfo.deviceNameExpressionSource                                                                        | Source of the device name to which the request will be sent to (can be `message`, `topic` or `constant`).                                                                                           |
| requestsMapping.disconnectRequests[].deviceInfo.deviceNameExpression                                                                              | Expression used to extract the device name from the selected source (Message/Topic/Constant). Supports JSON path, regular expression, byte slice, or literal - see [expression](#expression-types). |
| ---                                                                                                                                               |                                                                                                                                                                                                     |

Example of the disconnect request configuration:

```json
"requestsMapping": {
  "disconnectRequests": [
    {
      "topicFilter": "sensor/disconnect",
      "deviceInfo": {
        "deviceNameExpression": "${serialNumber}",
        "deviceNameExpressionSource": "message"
      }
    }
  ]
}
```
{: .copy-code}

#### Device attribute requests


| **Parameter**                                                             | **Description**                                                                                                                                                                                        |
|:--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| requestsMapping.attributeRequests[].scope                                 | (Optional) Determines the scope from where the attributes are taken use `client` if want to request client attributes                                                                                  |
| requestsMapping.attributeRequests[].retain                                | Whether the attribute response message should be retained by the MQTT broker can be `true` or `false`.                                                                                                 |
| requestsMapping.attributeRequests[].topicFilter                           | The topic/topics that the gateway subscribes to for incoming requests. The **Topic filter** supports special symbols: `#` and `+`                                                                      |
| requestsMapping.attributeRequests[].deviceInfo.deviceNameExpressionSource | Source of the device name to which the request will be sent to (can be `message`, `topic` or `constant`).                                                                                              |
| requestsMapping.attributeRequests[].deviceInfo.deviceNameExpression       | Expression used to extract the device name from the selected source (Message/Topic/Constant). Supports JSON path, regular expression, byte slice, or literal - see [expression](#expression-types).    |
| requestsMapping.attributeRequests[].attributeNameExpressionSource         | Source of the attribute name to which the request will be sent to (can be `message`, `topic` or `constant`).                                                                                           |
| requestsMapping.attributeRequests[].attributeNameExpression               | Expression used to extract the attribute name from the selected source (Message/Topic/Constant). Supports JSON path, regular expression, byte slice, or literal - see [expression](#expression-types). |
| requestsMapping.attributeRequests[].topicExpression                       | Expression used to format the response topic. It can be parsed from `message`, `topic`, or `constant`.                                                                                                 |
| requestsMapping.attributeRequests[].valueExpression                       | Expression used to format the response value. It can be parsed from `message`, `topic`, or `constant`.                                                                                                 |
| ---                                                                       |                                                                                                                                                                                                        |


Example of the attribute requests configuration:

```json
"requestsMapping": {
  "attributeRequests": [
    {
      "retain": false,
      "topicFilter": "v1/devices/me/attributes/request",
      "deviceInfo": {
        "deviceNameExpressionSource": "message",
        "deviceNameExpression": "${serialNumber}"
      },
      "attributeNameExpressionSource": "message",
      "attributeNameExpression": "${versionAttribute}",
      "topicExpression": "devices/${deviceName}/attrs",
      "valueExpression": "${attributeKey}: ${attributeValue}"
    }
  ]
}
```
{: .copy-code}

#### Device attribute updates


| **Parameter**                                              | **Description**                                                                                                                                                            |
|:-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| requestsMapping.attributeUpdates[].retain                  | Whether the attribute response message should be retained by the MQTT broker.                                                                                              |
| requestsMapping.attributeUpdates[].deviceNameFilter        | Regular expression device name filter, used to determine which devices should receive attribute updates see [expression](#expression-types)                                |
| requestsMapping.attributeUpdates[].attributeFilter         | Regular expression attribute name filter, used to determine which attributes should be updated see [expression](#expression-types)                                         |
| requestsMapping.attributeUpdates[].topicExpression         | JSON-path expression used for creating topic address to send a message. Supports variables like `${deviceName}` and `${attributeKey}` see [expression](#expression-types). |
| requestsMapping.attributeUpdates[].valueExpression         | JSON-path expression used for creating the message data that will be sent to the topic. Supports variables like `${attributeKey}` and `${attributeValue}` see [expression](#expression-types) .                    |
| ---                                                        |                                                                                                                                                                            |


Example of the attribute updates configuration:

```json
"requestsMapping": {
  "attributeUpdates": [
    {
      "retain": true,
      "deviceNameFilter": ".*",
      "attributeFilter": "firmwareVersion",
      "topicExpression": "sensor/${deviceName}/${attributeKey}",
      "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
    }
  ]
}
```
{: .copy-code}

#### Device RPC methods

Device RPC (Remote Procedure Call) methods allow you to send commands from ThingsBoard to your devices through the MQTT connector. The gateway acts as an intermediary, translating ThingsBoard RPC calls into MQTT messages that your devices can understand.

There are two types of RPC requests supported by the MQTT connector:

1. **Two-way (with response)** - The gateway sends a request to the device and waits for a response. This is useful when you need to get data back from the device.
2. **One-way (without response)** - The gateway sends a request to the device without expecting a response. This is useful for simple commands that don't require confirmation.


| **Parameter**                                                                         | **Description**                                                                                                                                                                                 |
|:--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| requestsMapping.serverSideRpc[].deviceNameFilter                                      | Regular expression device name filter, is used to determine which devices this RPC configuration applies to. See [expression](#expression-types)                                                |
| requestsMapping.serverSideRpc[].methodFilter                                          | Regular expression method name filter, is used to determine which RPC methods this configuration applies to. See [expression](#expression-types)                                                |
| requestsMapping.serverSideRpc[].requestTopicExpression                                | JSON-path expression, is used for creating topic address to send RPC request. Supports variables like `${deviceName}` and `${attributeKey}` applies to. See [expression](#expression-types)               |
| requestsMapping.serverSideRpc[].responseTopicExpression                               | JSON-path expression, is used for creating topic address to subscribe for response message.  Supports variables like `${deviceName}` and `${attributeKey}` applies to. See [expression](#expression-types) |
| requestsMapping.serverSideRpc[].responseTopicQoS                                      | Quality of Service level for the response topic subscription.                                                                                                                                   | 
| requestsMapping.serverSideRpc[].responseTimeout                                       | Value in milliseconds. If there is no response within this period after sending the request, gateway will unsubscribe from the response topic.                                                  |
| requestsMapping.serverSideRpc[].valueExpression                                       | JSON-path expression, is used for creating data for sending to broker. Supports variables like `${deviceName}` and `${attributeKey}` applies to. See [expression](#expression-types)                       |
| ---                                                                                   |                                                                                                                                                                                                 |

The configuration for Device RPC methods is defined in the "serverSideRpc" section of the MQTT connector configuration:

```json
"requestsMapping": {
  "serverSideRpc": [
    {
      "type": "twoWay",
      "deviceNameFilter": ".*",
      "methodFilter": "echo",
      "requestTopicExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "responseTopicExpression": "sensor/${deviceName}/response/${methodName}/${requestId}",
      "responseTopicQoS": 1,
      "responseTimeout": 10000,
      "valueExpression": "${params}"
    },
    {
      "type": "oneWay",
      "deviceNameFilter": ".*",
      "methodFilter": "no-reply",
      "requestTopicExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "valueExpression": "${params}"
    }
  ]
}
```
{: .copy-code}

Additionally, every telemetry and attribute parameter has built-in GET and SET RPC methods available out of the box, so you don't need to configure them manually.

For more information on using the built-in GET and SET RPC methods, see [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).


## Workers settings

This configuration settings provides fields for configuring connector performance and message reading/formatting speed:

{% include /templates/iot-gateway/mqtt-connector/workers-settings-section-basic.md %}

## Additional information

### Wildcard usage

**Wildcards** let the gateway subscribe to many topics with one pattern, or to topics whose exact names you don’t know,
but whose structure you do.

- **(`#`) - wildcard**

  A **(`#`) - wildcard** matches *this level and all following levels*. Put it only at the *end*.

  _Expression:_

  `sensor/data/#`

  _Matching examples:_

  `sensor/data/room1`

  `sensor/data/room1/temp`

  `sensor/data/`


- **(`+`) - wildcard**

  A **(`+`) - wildcard** *uses exactly one level* may be used *anywhere* at the topic level.

  _Expression:_

  `sensor/+/data`

  _Matching examples:_

  `sensor/A/data`

  `sensor/B/data`

  _Non-Matching examples:_

  `sensor/A/lab/data`

### Shared subscriptions

**Shared subscription** is a special type of subscription that let multiple MQTT clients “share” a single subscription
so the broker load-balances messages among them.
Instead of every subscriber getting every message (fan-out), only one member of the group receives each matching
publish.
For example to subscribe to the `sensor/+/data` in group `workers` you can set the topic filter to.

**Example:**

`$share/workers/sensor/+/data`

### Convertor types

The **Convertor types** section explains how the connector parses MQTT payloads 
and extracts device information (Name, Profile) and data (attributes/telemetry); 
choose a convertor based on your payload format and preferred extraction method.

#### JSON

Use this type of conversion if incoming data is `json`.

**Example:**

`{"serialNumber": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "temp": 42, "hum": 58}`

#### BYTES

Use this type of conversion if incoming data are sequence of `bytes`.

**Example:**

`b'AM-120'`

#### CUSTOM

Use the `CUSTOM` converter when incoming data is neither `BYTES` nor `JSON`. Implement your custom converter and configure it in the MQTT connector (see 
[Usage examples](/docs/iot-gateway/config/mqtt/#usage-examples) for examples with screenshots). 

### Expression types

The **Expression types** section explains how to extract device information (Name, Profile) from different sources—Message, 
Topic, or Constant—using JSON paths, regular expressions, or byte slices.

#### Json path

Use **Json path** when the **Name** and/or **Profile Name** must be extracted from the **Message** source and the
**Payload type**  is **JSON**.
In other words, these values are read directly from fields in the incoming JSON payload.

_Expressions:_

`${serialNumber}`
`${sensorType}`

_Payload example:_
`{"serialNumber": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "temp": 42, "hum": 58}`

_Converted data:_
`SN-001`
`Thermometer`

#### Regular expressions

**Regular expression**
Use **regular expression** when the **Name** and/or **Profile Name** must be extracted from the **Topic**.
In other words, these values will be extracted from your topic depending on the regular expression you write.

_Expression:_

`(?<=sensor/)(.*?)(?=/data)`

_Matching example:_
`sensor/Thermo-A/data`

_Converted data:_
`Thermo-A`

#### Slices

**Slices** (**Bytes** source)

Use **Slices** when the **Name** and/or **Profile Name** must be extracted from the bytes sequence and the 
*Payload type* is **BYTES**.Slices use Python-style indexing over the raw byte sequence. Example rule: device name = first 4 bytes; 
temperature = the rest.

_Expressions:_

`[0:4]`
`[4:]`

_Payload example:_
`b'AM-120'`

_Converted data:_
`AM-1`
`20`


## Troubleshooting

### MQTT Parameter Version Differences

1. **broker.cleanSession** 
*MQTT 3.1, 3.11 only*; in *MQTT 5.0* it’s replaced by **broker.cleanStart** (on connect behavior) plus **broker.sessionExpiryInterval** (how long the session is kept after disconnect).

2. **broker.sessionExpiryInterval**
*MQTT 5.0 only*; if it is `0` drop session on disconnect, if it is bigger than `0` keep it for that many seconds.

3. **broker.cleanStart**
*MQTT 5.0 only*; controls what happens at connect: `true` discards any previous session, `false` tries to resume it.

### Shared subscriptions limitations

1. Don’t subscribe to both `sensor/+/data` and `$share/workers/sensor/+/data` in the same connector you will risk double handling.

2. Make sure your broker supports shared subscriptions, because some **don't**. 

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
