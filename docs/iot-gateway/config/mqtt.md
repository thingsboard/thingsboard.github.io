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

This guide will help you to get familiar with MQTT Connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this Connector. 
The purpose of this Connector is to connect to an external MQTT broker and subscribe to data feed from devices. 
The connector is also able to push data to MQTT brokers based on the updates/commands from ThingsBoard. 

This connector is useful when you have local MQTT broker in your facility or corporate network, and you would like to push data from this broker to ThingsBoard.

We will describe connector configuration file below.

{% capture difference %}
**Please note:**
If you are new to IoT Gateway, use the "Basic" configuration mode. If you are familiar with configuring IoT Gateway, you can use the "Advanced" configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Connector configuration

Connector configuration is a UI form that contains information about how to connect to external MQTT broker, what topics to use when subscribing to data feed and how to process the data. 
Let's take a comprehensive look at all the possible settings. We will go through each option in detail to ensure that we thoroughly understand their functions and implications. 
By doing so, we can make well-informed decisions about which settings will best suit our needs and preferences.

## Section "General"

This configuration section contains general connector settings, such as:

- Name - connector name for logs and saving to persistent devices;
- Logs configuration:
  - Enable remote logging - enabling remote logging for connector;
  - Logging level - logging level for local and remote logs: INFO, DEBUG, WARNING, ERROR, CRITICAL, NONE;
- Send data only on change - sending only if data changed from last check, if not – data will be sent after every check.

![image](/images/gateway/mqtt-connector/general-basic-section-1-ce.png)

{% capture difference %}
The settings are the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Section "Connection to broker"

Section "Connection to broker" offers detailed connection configuration options and contains several important fields, including host, port, MQTT version, client ID, and security settings.
The host field specifies the address of the broker, while the port field indicates the communication port.
The MQTT version field ensures compatibility with the protocol version being used.
The client ID uniquely identifies the client, and the security settings provides configuration for client authorization at MQTT Broker.

{% capture mqttconnectiontobrokersection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/connection-to-broker-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/connection-to-broker-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttconnectiontobrokersection" toggle-spec=mqttconnectiontobrokersection %}

### Subsection "Security"

Subsection "Security" provides configuration for client authorization at MQTT Broker.

Firstly, select basic or advanced MQTT configuration:

{% capture mqttsecuritysubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/security-subsection-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/security-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttsecuritysubsection" toggle-spec=mqttsecuritysubsection %}

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

## Workers settings

This configuration settings provides fields for configuring connector performance and message reading/formatting speed:

Select basic or advanced MQTT configuration:

{% capture mqttattributerequestsubsection %}
Basic<small></small>%,%basic%,%templates/iot-gateway/mqtt-connector/workers-settings-section-basic.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/mqtt-connector/workers-settings-section-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttattributerequestsubsection" toggle-spec=mqttattributerequestsubsection %}

## Configuration file

Example of MQTT Connector configuration file:

```json
{
  "broker": {
    "name": "Default Local Broker",
    "host": "127.0.0.1",
    "port": 1883,
    "clientId": "ThingsBoard_gateway",
    "version": 5,
    "maxMessageNumberPerWorker": 10,
    "maxNumberOfWorkers": 100,
    "sendDataOnlyOnChange": false,
    "security": {
      "type": "basic",
      "username": "user",
      "password": "password"
    }
  },
  "mapping": [
    {
      "topicFilter": "sensor/data",
      "converter": {
        "type": "json",
        "deviceNameJsonExpression": "${serialNumber}",
        "deviceTypeJsonExpression": "${sensorType}",
        "sendDataOnlyOnChange": false,
        "timeout": 60000,
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
            "value": "${hum}"
          },
          {
            "type": "string",
            "key": "combine",
            "value": "${hum}:${temp}"
          }
        ]
      }
    },
    {
      "topicFilter": "sensor/+/data",
      "converter": {
        "type": "json",
        "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/data)",
        "deviceTypeTopicExpression": "Thermometer",
        "sendDataOnlyOnChange": false,
        "timeout": 60000,
        "attributes": [
          {
            "type": "string",
            "key": "model",
            "value": "${sensorModel}"
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
            "value": "${hum}"
          }
        ]
      }
    },
    {
      "topicFilter": "sensor/raw_data",
      "converter": {
        "type": "bytes",
        "deviceNameExpression": "[0:4]",
        "deviceTypeExpression": "default",
        "sendDataOnlyOnChange": false,
        "timeout": 60000,
        "attributes": [
          {
            "type": "raw",
            "key": "rawData",
            "value": "[:]"
          }
        ],
        "timeseries": [
          {
            "type": "raw",
            "key": "temp",
            "value": "[4:]"
          }
        ]
      }
    },
    {
      "topicFilter": "custom/sensors/+",
      "converter": {
        "type": "custom",
        "extension": "CustomMqttUplinkConverter",
        "cached": true,
        "extension-config": {
          "temperatureBytes": 2,
          "humidityBytes": 2,
          "batteryLevelBytes": 1
        }
      }
    }
  ],
  "connectRequests": [
    {
      "topicFilter": "sensor/connect",
      "deviceNameJsonExpression": "${serialNumber}"
    },
    {
      "topicFilter": "sensor/+/connect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/connect)"
    }
  ],
  "disconnectRequests": [
    {
      "topicFilter": "sensor/disconnect",
      "deviceNameJsonExpression": "${serialNumber}"
    },
    {
      "topicFilter": "sensor/+/disconnect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/disconnect)"
    }
  ],
  "attributeRequests": [
    {
      "retain": false,
      "topicFilter": "v1/devices/me/attributes/request",
      "deviceNameJsonExpression": "${serialNumber}",
      "attributeNameJsonExpression": "${versionAttribute}, ${pduAttribute}",
      "topicExpression": "devices/${deviceName}/attrs",
      "valueExpression": "${attributeKey}: ${attributeValue}"
    }
  ],
  "attributeUpdates": [
    {
      "retain": true,
      "deviceNameFilter": ".*",
      "attributeFilter": "firmwareVersion",
      "topicExpression": "sensor/${deviceName}/${attributeKey}",
      "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
    }
  ],
  "serverSideRpc": [
    {
      "deviceNameFilter": ".*",
      "methodFilter": "echo",
      "requestTopicExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "responseTopicExpression": "sensor/${deviceName}/response/${methodName}/${requestId}",
      "responseTimeout": 10000,
      "valueExpression": "${params}"
    },
    {
      "deviceNameFilter": ".*",
      "methodFilter": "no-reply",
      "requestTopicExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "valueExpression": "${params}"
    }
  ]
}
```
{:.copy-code.expandable-15}

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.