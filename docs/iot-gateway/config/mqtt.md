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
These settings cover the basic connection parameters, mqtt version protocol that will be used security configuration, and 
authentication modes.

### Connection to broker

This subsection specifies the target MQTT broker and how the gateway interacts with it. It includes the broker's host,
port, mqtt version protocol, client id.

{% include /templates/iot-gateway/mqtt-connector/mqtt-basic-section.md %}

### Security

MQTT broker connections offer three distinct security types: [Anonymous](/docs/iot-gateway/config/mqtt/#anonymous), 
[Basic](/docs/iot-gateway/config/mqtt/#basic), [Certificates](/docs/iot-gateway/config/mqtt/#certificates).

#### Anonymous

{% include /templates/iot-gateway/mqtt-connector/security-subsection-anonymous.md %}

#### Basic

{% include /templates/iot-gateway/mqtt-connector/security-subsection-basic.md %}

#### Certificates

{% include /templates/iot-gateway/mqtt-connector/security-subsection-certificates.md%}

{% capture difference %}
All configuration parameters list for each authentication mode, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#advanced-configuration) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Section "Data mapping"

This configuration section contains an array of topics that the gateway will subscribe to after connecting to the broker, along with settings about processing incoming messages (converter).

Select basic or advanced MQTT configuration:

{% capture mqttdatamappingsubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/data-mapping-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/data-mapping-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttdatamappingsubsection" toggle-spec=mqttdatamappingsubsection %}

Let's assume we would like to subscribe and process the following data from Thermometer device:

<table>
  <thead>
    <tr>
      <td style="width: 25%"><b>Example Name</b></td><td style="width: 25%"><b>Topic</b></td><td style="width: 25%"><b>Topic Filter</b></td><td style="width: 30%"><b>Payload</b></td><td style="width: 20%"><b>Comments</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Example 1</td>
      <td>sensor/data</td>
      <td>sensor/data</td>
      <td>{"serialNumber": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "temp":  42, "hum": 58}</td>
      <td>Device Name is part of the payload</td>
    </tr>
    <tr>
      <td>Example 2</td>
      <td>sensor/SN-001/data</td>
      <td>sensor/+/data</td>
      <td>{"sensorType": "Thermometer", "sensorModel": "T1000", "temp":  42, "hum": 58}</td>
      <td>Device Name is part of the topic</td>
    </tr>
  </tbody>
</table>

In this case the following messages are valid:

Example 1:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/data" -m '{"serialNumber": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "temp": 42, "hum": 58}'
```
{: .copy-code}

Example 2:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/data" -m '{"sensorType": "Thermometer", "sensorModel": "T1000", "temp": 42, "hum": 58}'
```
{: .copy-code}

Now let's review how we can configure JSON converter to parse this data.

### Subsection "Data conversion"

This subsection contains configurations for processing incoming messages.

The types of MQTT converters are as follows:

- JSON – Default converter;
- Bytes – Raw default converter;
- Custom – Custom converter (You can write it yourself, and it will be used to convert incoming data from the broker).

Select the MQTT configuration you are using:

{% capture mqttdataconversionsubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/data-conversion-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/data-conversion-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttdataconversionsubsection" toggle-spec=mqttdataconversionsubsection %}

**Now let's review an example of sending data from "SN-001" thermometer device.**

Let’s assume MQTT broker is installed locally on your server.

Use terminal to simulate sending message from the device to the MQTT broker:
```bash
mosquitto_pub -h 127.0.0.1 -p 1883 -t "sensor/data" -m '{"serialNumber": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "temp": 42, "hum": 58}'
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-message-1.png)
{: refdef}

To use a configurable format for a timeseries entry, include a datetime string in the field defined by the *tsField* parameter. For example:  
```bash
mosquitto_pub -h 127.0.0.1 -p 1883 -t "sensor/data" -m '{"serialNumber": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "temp": 42, "hum": 58, "timestampField":"10.11.24 10:10:10.252"}'
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-message-with-timestampField.png)
{: refdef}

The device will be created and displayed in ThingsBoard based on the passed parameters.
{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-created-device-1.png)
{: refdef}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-created-device-2.png)
{: refdef}

## Requests mapping

This section of the configuration outlines an array that includes all the supported requests for both the gateway and ThingsBoard:

- connect requests;
- disconnect requests;
- attribute requests;
- attribute updates;
- RPC commands.

Firstly, select basic or advanced MQTT configuration:

{% capture mqttrequestsmappingsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/requests-mapping-section-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/requests-mapping-section-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttrequestsmappingsection" toggle-spec=mqttrequestsmappingsection %}

Below we go through all the supported requests for both Gateway and ThingsBoard.

### Subsection "Connect request"

ThingsBoard allows sending RPC commands and notifications about device attribute updates to the device. 
But in order to send them, the platform needs to know if the target device is connected and what gateway or session is used to connect the device at the moment. If your device is constantly sending telemetry data - ThingsBoard already knows how to push notifications. 
If your device just connects to MQTT broker and waits for commands/updates, you need to send a message to the Gateway and inform that device is connected to the broker.

Also, it is possible to configure where to get the device name: from the topic or from the message body.

Select basic or advanced MQTT configuration:

{% capture mqttconnectrequestsubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/connect-request-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/connect-request-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttconnectrequestsubsection" toggle-spec=mqttconnectrequestsubsection %}

**Now let's review an example.**

Use a terminal to simulate sending a message from the device to the MQTT broker:

```bash
mosquitto_pub -h 127.0.0.1 -p 1883 -t "sensor/connect" -m '{"serialNumber": "SN-001"}'
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-message-connect.png)
{: refdef}

Your ThingsBoard instance will get information from the broker about last connecting time of the device. You can see this information under the "Server attributes" scope in the "Attributes" tab.

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-connect-device.png)
{: refdef}

### Subsection "Disconnect request"

This configuration section is optional.
Configuration, provided in this section will be used to get information from the broker about disconnecting device.
If your device just disconnects from MQTT broker and waits for commands/updates, you need to send a message to the Gateway and inform it that device is disconnected from the broker.

Select basic or advanced MQTT configuration:

{% capture mqttdisconnectrequestsubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/disconnect-request-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/disconnect-request-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttdisconnectrequestsubsection" toggle-spec=mqttdisconnectrequestsubsection %}

**Now let's review an example.**

Use a terminal to simulate sending a message from the device to MQTT broker:

```bash
mosquitto_pub -h 127.0.0.1 -p 1883 -t "sensor/disconnect" -m '{"serialNumber": "SN-001"}'
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-message-disconnect.png)
{: refdef}

Your ThingsBoard instance will get information from the broker about last disconnecting time of the device. You can see this information under the "Server attributes" scope in the "Attributes" tab.

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-disconnect-device.png)
{: refdef}

### Subsection "Attribute requests"

This configuration section is optional.

In order to request client-side or shared device attributes to ThingsBoard server node, Gateway allows sending
attribute requests.

Select basic or advanced MQTT configuration:

{% capture mqttattributerequestsubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/attribute-request-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/attribute-request-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttattributerequestsubsection" toggle-spec=mqttattributerequestsubsection %}

### Subsection "Attribute updates"

This configuration section is optional.  
ThingsBoard allows to provision device attributes and fetch some of them from the device application.
You can treat this as a remote configuration for devices. Your devices are able to request shared attributes from ThingsBoard.
See [user guide](/docs/user-guide/attributes/) for more details.

The "**attributeUpdates**" configuration allows configuring the format of the corresponding attribute request and response messages.

Select basic or advanced MQTT configuration:

{% capture mqttattributerequestsubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/attribute-updates-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/attribute-updates-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttattributerequestsubsection" toggle-spec=mqttattributerequestsubsection %}

**Let's look at an example.**

Run the command below to start the *mosquitto_sub* client, subscribing to the topic "sensor/SN-001/firmwareVersion" of the local broker. Start waiting for new messages from ThingsBoard server to broker.

```bash
mosquitto_sub -h 127.0.0.1 -p 1883 -t sensor/SN-001/firmwareVersion
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-mosquitto-sub-wait-1.png)
{: refdef}

Update device attribute value on the ThingsBoard server following these steps:
- Open the "Devices" page;
- Click on your device and navigate to the "Attributes" tab;
- Choose "Shared attributes" scope and click on the "pencil" icon next to *"firmwareVersion"* attribute.

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-update-attribute-1.png)
{: refdef}

- Change firmware version value from "1.1" to "1.2". Then click "Update" button.

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-update-attribute-2.png)
{: refdef}

The firmware version has been updated to "1.2".

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-update-attribute-3.png)
{: refdef}

Broker received new message from the ThingsBoard server about updating attribute "FirmwareVersion" to "1.2".

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-mosquitto-sub-get-1.png)
{: refdef}

### Server side RPC commands

ThingsBoard allows sending [RPC commands](/docs/user-guide/rpc/) to the device that is connected to ThingsBoard directly or via Gateway.
Configuration, provided in this section is used for sending RPC requests from ThingsBoard to device.

Select basic or advanced MQTT configuration:

{% capture mqttattributerequestsubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/server-side-rpc-commands-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/server-side-rpc-commands-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttattributerequestsubsection" toggle-spec=mqttattributerequestsubsection %}

## Advanced configuration

The advanced configuration section provides a detailed overview of all available parameters for the MQTT connector.

### Connection to broker

The broker section defines the target MQTT broker and how the gateway interacts with it.


| **Parameter**                               | **Default value**       | **Description**                                                                                                                                                                                                                                                                                                                                           |
|:--------------------------------------------|:------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| broker                                      |                         | The broker object specifies the target mqtt broker and how the gateway interacts with it.                                                                                                                                                                                                                                                                 |
| broker.host                                 |                         | Hostname or ip address that will be used for establishing connection to MQTT broker.                                                                                                                                                                                                                                                                      |
| broker.port                                 | **1883**                | Listening MQTT port on the broker that will accept connection from a client.                                                                                                                                                                                                                                                                              |
| broker.version                              | **5**                   | MQTT protocol version (there are three versions currently supported by gateway - **3.1**, **3.11**, **5**).                                                                                                                                                                                                                                               |
| broker.clientId **                          | **ThingsBoard_gateway** | Unique identifier for each client’s session on the broker.                                                                                                                                                                                                                                                                                                |
| broker.maxMessageNumberPerWorker *          | **10**                  | Maximum number of MQTT messages a single worker (a background helper that processes queued messages)<br/> handles in one pass before letting other workers run. You may read more about this in the [Workers settings](/docs/iot-gateway/config/mqtt/#workers-settings).                                                                                  |
| broker.maxNumberOfWorkers *                 | **100**                 | Maximum number of workers (background helpers that process queued messages)<br/> the gateway can run in parallel to handle MQTT traffic. You may read more about this in the [Workers settings](/docs/iot-gateway/config/mqtt/#workers-settings).                                                                                                         |
| broker.keepAlive * (in seconds)             | **60**                  | Seconds between pings; e.g., default is 60s, the broker expects traffic within the given interval * 1.5 or it closes the connection.                                                                                                                                                                                                                      |
| broker.cleanSession *                       | **true**                | Tells the broker whether to start fresh or keep your previous session, Use `false`, if you want offline message queueing; use `true` if you always reconnect cleanly and don’t need persistence(Only for 3.1, 3.11 see details here - [MQTT Parameter Version Differences](/docs/iot-gateway/config/mqtt/#mqtt-parameter-version-differences).            |
| broker.cleanStart *                         | **true**                | Simular to **broker.cleanSession**, but unlike it, only decides what happens **at the start** of a connection; use `true`, if you want discard an old session; use `false` if you want to try to resume it (For MQTT 5.0 only see details here - [MQTT Parameter Version Differences](/docs/iot-gateway/config/mqtt/#mqtt-parameter-version-differences). |
| broker.sessionExpiryInterval * (in seconds) | **0**                   | How long the broker should keep your session after you disconnect (For MQTT 5.0 only see details here - [MQTT Parameter Version Differences](/docs/iot-gateway/config/mqtt/#mqtt-parameter-version-differences).                                                                                                                                          |
| broker.security                             | **anonymous**           | Configuration for client authorization at MQTT Broker, available modes: <br/> `anonymous` (no credentials required — not recommended for production), `basic` (username/password), and `certificates` (CA certificates). You may read more about this in the [Security](/docs/iot-gateway/config/mqtt/#security) subsection.                              |
| ---                                         |                         |                                                                                                                                                                                                                                                                                                                                                           |

{% capture difference %}
**Please note:**
\** -- The broker (or broker cluster) does not allow two simultaneous sessions with the same **broker.clientId**. If a second connection uses that ID, 
the broker closes the existing session and accepts the new one (session takeover). The Client ID can be any valid UTF-8 string; 
if you don’t have a descriptive one, you can generate it in the MQTT connector configuration UI—see the last screenshots under [Connection to broker](/docs/iot-gateway/config/mqtt/#connection-to-broker) subsection.
\* -- Parameters marked with an asterisk (*) are optional and intended for fine-tuning; we don’t recommend changing them unless you have a specific need. 
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
    
},
```
{: .copy-code}

### Security

MQTT broker connections offer three distinct security types: [Anonymous](/docs/iot-gateway/config/mqtt/#anonymous-1), 
[Basic](/docs/iot-gateway/config/mqtt/#basic-1), [Certificates](/docs/iot-gateway/config/mqtt/#certificates-1).

#### Anonymous

**Anonymous** is the simplest option: no credentials are required to publish/subscribe on the MQTT broker.
*not recommended for production*, because it allows unattended access.


| **Parameter**   | **Default value**       | **Description**                                                                                      |
|:----------------|:------------------------|------------------------------------------------------------------------------------------------------|
| broker.security |                         | The broker security object specifies authentication type for establishing connection to MQTT broker. |
| broker.type     | **anonymous**           | Type of authentication.                                                                              |
| ---             |                         |                                                                                                      |


Example of the security configuration for **anonymous** authentication option.

```json
 "security": {
      "type": "anonymous"
    }
```
{: .copy-code}

#### Basic

**Basic** authentication option uses a **username** and **password** configured on the MQTT broker. 
It’s a good default for most setups—just use strong, unique credentials.


| **Parameter**   | **Default value** | **Description**                                                                                   |
|:----------------|:------------------|---------------------------------------------------------------------------------------------------|
| broker.security |                   | The broker security object specifies authentication type for establishing connection to MQTT broker.|
| broker.type     | **basic**         | Type of authentication.                                                                           |
| broker.username | **username**      | Username that will be used for establishing connection with MQTT broker.                          |
| broker.password | **password**      | Password that will be used for establishing connection with MQTT broker.                          |
| ---             |                   |                                                                                                   |


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



| **Parameter**                                               | **Default value**                            | **Description**                                                                                                                                                                                          |
|:------------------------------------------------------------|:---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| broker.security                                             |                                              | The broker security object specifies authentication type for establishing connection to MQTT broker.                                                                                                     |
| broker.type                                                 | **certificates**                             | Type of authentication.                                                                                                                                                                                  |
| broker.pathToCACert                                         | **/etc/thingsboard-gateway/ca.pem**          | Path to the **pathToCACert** your CA certificate your MQTT client uses it to check the broker’s certificate during TLS, ensuring you’re connecting to a trusted server.                                  |
| broker.pathToPrivateKey                                     | **/etc/thingsboard-gateway/privateKey.pem**  | Path to the **pathToPrivateKey** the key that proves the client’s identity and enables secure TLS handshakes.                                                                                            |
| broker.pathToClientCert                                     | **/etc/thingsboard-gateway/certificate.pem** | Path to the **pathToClientCert** your certificate that identifies the gateway to the MQTT broker during TLS handshake. It’s paired with the gateway’s private key and is usually signed by a trusted CA. |


Example of the security configuration for **certificates** authentication option: 

```json
"security":{
    "type": "certificates",
    "pathToCACert": "/etc/thingsboard-gateway/ca.pem",
    "pathToPrivateKey": "/etc/thingsboard-gateway/privateKey.pem",
    "pathToClientCert": "/etc/thingsboard-gateway/certificate.pem"
}
```

## Workers settings

This configuration settings provides fields for configuring connector performance and message reading/formatting speed:

{% include /templates/iot-gateway/mqtt-connector/workers-settings-section-basic.md %}

## Additional information

## Troubleshooting

### MQTT Parameter Version Differences

1. **broker.cleanSession** 
*MQTT 3.1, 3.11 only*; in *MQTT 5.0* it’s replaced by **broker.cleanStart** (on connect behavior) plus **broker.sessionExpiryInterval** (how long the session is kept after disconnect).

2. **broker.sessionExpiryInterval**
*MQTT 5.0 only*; if it is `0` drop session on disconnect, if it is bigger than `0`keep it for that many seconds.

3. **broker.cleanStart**
*MQTT 5.0 only*; controls what happens at connect: `true` discards any previous session, `false` tries to resume it.

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.