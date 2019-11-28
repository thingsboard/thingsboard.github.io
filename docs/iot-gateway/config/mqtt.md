---
layout: docwithnav
assignees:
- ashvayka
title: MQTT Extension Configuration
description: MQTT protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with MQTT connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe connector configuration file below.

## Connector configuration: mqtt.json

Connector configuration is a JSON file that contains information about how to connect and monitor a MQTT broker.  
<br>
<details>

<summary>
<b>Example of MQTT Connector config file. Press to expand.</b>
</summary>

{% highlight json %}

{
  "broker": {
    "name":"Default Broker",
    "host":"demo.thingsboard.io",
    "port":1883,
    "security": {
      "type": "basic",
      "username": "GIjr0vTtbOLwpouuBxL9",
      "password": ""
    }
  },
  "mapping": [
    {
      "topicFilter": "v1/devices/me/attributes",
      "converter": {
        "type": "json",
        "filterExpression": "",
        "deviceNameJsonExpression": "${SerialNumber}",
        "deviceTypeJsonExpression": "${SensorType}",
        "timeout": 60000,
        "attributes": [
          {
            "type": "string",
            "key": "test_key",
            "value": "${SerialNumber}"
          }
        ]
      }
    },
    {
      "topicFilter": "/temperature-sensors/+",
      "converter": {
        "type": "json",
        "filterExpression": "",
        "deviceNameJsonExpression": "${$.serialNumber}",
        "deviceTypeJsonExpression": "${$.sensorType}",
        "timeout": 60000,
        "attributes": [
          {
            "type": "string",
            "key": "model",
            "value": "${$.model}"
          }
        ],
        "timeseries": [
          {
            "type": "double",
            "key": "temperature",
            "value": "${$.temperature}"
          }
        ]
      }
    },
    {
      "topicFilter": "/temperature-sensors/+",
      "converter": {
        "type": "json",
        "filterExpression": "",
        "deviceNameJsonExpression": "${$.sensorId}",
        "deviceTypeJsonExpression": "${$.sensorType}",
        "timeout": 60000,
        "timeseries": [
          {
            "type": "double",
            "key": "humidity",
            "value": "${$.humidity}"
          }
        ]
      }
    },
    {
      "topicFilter": "/custom-sensors/+",
      "converter": {
        "type": "custom",
        "extension": "CustomMqttUplinkConverter",
        "extension-config": {
            "temperatureBytes" : 2,
            "humidityBytes" :  2,
            "batteryLevelBytes" : 1
        }
      }
    }
  ],
  "connectRequests": [
    {
      "topicFilter": "sensors/connect",
      "deviceNameJsonExpression": "${$.SerialNumber}"
    },
    {
      "topicFilter": "sensor/+/connect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/connect)"
    }
  ],
  "disconnectRequests": [
    {
      "topicFilter": "sensors/disconnect",
      "deviceNameJsonExpression": "${$.SerialNumber}"
    },
    {
      "topicFilter": "sensor/+/disconnect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/disconnect)"
    }
  ],
  "attributeUpdates": [
    {
      "deviceNameFilter": "SmartMeter.*",
      "attributeFilter": "uploadFrequency",
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


{% endhighlight %}

</details>



### Section "broker"

| **Parameter** | **Default value**              | **Description**                                        |
|:-|:-|-
| name          | **Default Broker**             | Broker name for logs and saving to persistent devices. |
| host          | **demo.thingsboard.io**        | Mqtt broker hostname or ip address.                    |
| port          | **1883**                       | Mqtt port on the broker.                               |
|---

#### Subsection "security"

Subsection "security" -- provided configuration for security authorization.  
There are 2 variants:
1. basic -- username and password.
2. cert.PEM -- For authorization will be used TLS certificate.
 
{% capture mqttconnectorsecuritytogglespec %}
basic<small>Recommended as easier to configure</small>%,%accessToken%,%templates/iot-gateway/mqtt-connector-basic-security-config.md%br%
cert.PEM<small>recommended as more safety</small>%,%tls%,%templates/iot-gateway/mqtt-connector-tls-security-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="mqttConnectorCredentialsConfig" toggle-spec=mqttconnectorsecuritytogglespec %}  

### Section "mapping"
This configuration section contains array of topics that the gateway will subscribe to after connecting to the broker and settings about processing incoming messages (converter).


|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| topicFilter | **/temperature-sensors/+** | Topic address for subscribing. |
|---

#### Subsection "converter"
This subsection contains configuration for processing incoming messages.  

Types of mqtt converters:  
1. json -- Default converter
2. custom -- Custom converter (You can write it by yourself, and it will use to convert incoming data from the broker.) 

{% capture mqttconvertertypespec %}
json<small>Recommended as easier to configure</small>%,%json%,%templates/iot-gateway/mqtt-converter-json-config.md%br%
custom<small>recommended as more safety</small>%,%custom%,%templates/iot-gateway/mqtt-converter-custom-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="MqttConverterTypeConfig" toggle-spec=mqttconvertertypespec %}


**Note**: You can specify multiple mapping objects inside the array.

Mapping process subscribes to the MQTT topics using **topicFilter** parameter of the mapping object. 
Each message that is published to this topic by other devices or applications is analyzed to extract device name and device data (attributes or timeseries values).
By default, gateway use [Json converter](https://github.com/thingsboard/thingsboard-gateway/blob/release-1.0/src/main/java/org/thingsboard/gateway/extensions/mqtt/client/conf/mapping/MqttJsonConverter.java), but you can customize this behaviour and implement your own converter. See [converter interface](https://github.com/thingsboard/thingsboard-gateway/blob/release-1.0/src/main/java/org/thingsboard/gateway/extensions/mqtt/client/conf/mapping/MqttDataConverter.java) for more details.

The Json converter is based on [**JsonPath**](https://github.com/jayway/JsonPath) library to provide the ability of flexible mapping and filtering of JSON structures.
You can define **filterExpression** based on the [**path**](https://github.com/jayway/JsonPath#path-examples) and [**filter**](https://github.com/jayway/JsonPath#filter-operators) examples.

The **deviceNameJsonExpression** mapping parameter is used to extract device name from the incoming JSON message.

For example, if you have following message:

```json
{"serialNumber":"SN-001", "model":"T1000", "temperature":36.6}
```

The **"${$.serialNumber}"** expression will return **"SN-001"** device name. Similar, **"Device ${$.serialNumber} (${$.model})"** will return **"Device SN-001 (T1000)"** device name.

If the device name is a part of the MQTT topic, you can use **deviceNameTopicExpression** parameter, which is basically Java regular expression.

For example, if you have **"sensor/SN-001/temperature"**" topic, the **"(?<=sensor\/)(.*?)(?=\/temperature)"** expression will return **"SN-001"** device name.

Similar [**JsonPath**](https://github.com/jayway/JsonPath) mapping rules are applied for **attributes** and **timeseries** values:

 - **key** - constant Attribute or Timeseries ThingsBoard key.
 - **type** - either boolean, long, double or string.
 - **value** - expression based on JsonPath syntax that may be specified inside **${}** 

### Section "connectRequests"

ThingsBoard allows sending RPC commands and notifications about device attribute updates to the device.
But in order to send them, the platform needs to know if the target device is connected and what gateway or session is used to connect the device at the moment.
If your device is constantly sending telemetry data - ThingsBoard already knows how to push notifications.
If your device just connects to MQTT broker and waits for commands/updates, you need to send a message to the Gateway and inform that device is connected to the broker.
 
**1. Name in a message from broker:**

| **Parameter**                 | **Default value**                     | **Description**                                                                                   |
|:-|:-|-
| topicFilter                   | **sensors/connect**                   | Topic address on the broker, where the broker sends information about new connected devices.      |
| deviceNameJsonExpression      | **${$.SerialNumber}**                 | JSON-path expression, for looking the new device name.                                            |
|---

**2. Name in topic address:**

| **Parameter**                 | **Default value**                     | **Description**                                                                                   |
|:-|:-|-
| topicFilter                   | **sensors/+/connect**                 | Topic address on the broker, where the broker sends information about new connected devices.      |
| deviceNameTopicExpression     | **(?<=sensor\/)(.\*?)(?=\/connect)**  | Regular expression for looking the device name in topic path.                                     |
|---

This section in configuration looks like:  
```json
  "connectRequests": [
    {
      "topicFilter": "sensors/connect",
      "deviceNameJsonExpression": "${$.SerialNumber}"
    },
    {
      "topicFilter": "sensor/+/connect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/connect)"
    }
  ]
```

In this case following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensors/connect" -m '{"serialNumber":"SN-001"}'
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/connect" -m ''
```


### Section "disconnectRequest"

This configuration section is optional.  
Configuration, provided in this section will be used to get information from the broker about disconnecting device.  
If your device just disconnects from MQTT broker and waits for commands/updates, you need to send a message to the Gateway and inform that device is disconnected from the broker.
 
**1. Name in a message from broker:**

| **Parameter**                 | **Default value**                     | **Description**                                                                                   |
|:-|:-|-
| topicFilter                   | **sensors/disconnect**                | Topic address on the broker, where the broker sends information about disconnected devices.       |
| deviceNameJsonExpression      | **${$.SerialNumber}**                 | JSON-path expression, for looking the new device name.                                            |
|---

**2. Name in topic address:**

| **Parameter**                 | **Default value**                     | **Description**                                                                                   |
|:-|:-|-
| topicFilter                   | **sensors/+/disconnect**              | Topic address on the broker, where the broker sends information about disconnected devices.       |
| deviceNameTopicExpression     | **(?<=sensor\/)(.\*?)(?=\/connect)**  | Regular expression for looking the device name in topic path.                                     |
|---

This section in configuration file looks like:  

```json
  "disconnectRequests": [
    {
      "topicFilter": "sensors/disconnect",
      "deviceNameJsonExpression": "${$.SerialNumber}"
    },
    {
      "topicFilter": "sensor/+/disconnect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/disconnect)"
    }
  ]
```

In this case following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensors/disconnect" -m '{"serialNumber":"SN-001"}'
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/disconnect" -m ''
```

### Section "attributeUpdates"

This configuration section is optional.  
ThingsBoard allows to provision device attributes and fetch some of them from the device application.
You can treat this as a remote configuration for devices. Your devices are able to request shared attributes from ThingsBoard.
See [user guide](/docs/user-guide/attributes/) for more details.

The "**attributeRequests**" configuration allows configuring the format of the corresponding attribute request and response messages. 

| **Parameter**                 | **Default value**                                     | **Description**                                                                                    |
|:-|:-|-
| deviceNameFilter              | **SmartMeter.\***                                     | Regular expression device name filter, uses to determine, which function to execute.               |
| attributeFilter               | **uploadFrequency**                                   | Regular expression attribute name filter, uses to determine, which function to execute.            |
| topicExpression               | **sensor/${deviceName}/${attributeKey}**              | JSON-path expression uses for creating topic address to send a message.                            |
| valueExpression               | **{\\"${attributeKey}\\":\\"${attributeValue}\\"}**   | JSON-path expression uses for creating the message data that will send to topic.                   |
|---


This section in configuration file looks like:  

```json
  "attributeUpdates": [
    {
      "deviceNameFilter": "SmartMeter.*",
      "attributeFilter": "uploadFrequency",
      "topicExpression": "sensor/${deviceName}/${attributeKey}",
      "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
    }
  ]
```

##### Server side RPC commands

ThingsBoard allows sending [RPC commands](/docs/user-guide/rpc/) to the device that is connected to ThingsBoard directly or via Gateway.
 
Configuration, provided in this section uses for sending RPC requests from ThingsBoard to device.
| **Parameter**                 | **Default value**                                                 | **Description**                                                                                                           |
|:-|:-|-
| deviceNameFilter              | **SmartMeter.\***                                                 | Regular expression device name filter, uses to determine, which function to execute.                                      |
| methodFilter                  | **echo**                                                          | Regular expression method name filter, uses to determine, which function to execute.                                      |
| requestTopicExpression        | **sensor/${deviceName}/request/${methodName}/${requestId}**       | JSON-path expression, uses for creating topic address to send RPC request.                                                |
| responseTopicExpression       | **sensor/${deviceName}/response/${methodName}/${requestId}**      | JSON-path expression, uses for creating topic address to subscribe for response message.                                  |
| responseTimeout               | **10000**                                                         | Value in milliseconds, if no response in this period after sending request, gateway will unsubscribe from response topic. |
| valueExpression               | **${params}**                                                     | JSON-path expression, uses for creating data for sending to broker.                                                       |
|---

{% capture methodFilterOptions %}
<br>
There are 2 options for RPC request:  
1. **With response** -- If in the configuration exists responseTopicExpression, gateway will try to subscribe on it and wait for response.
2. **Without response** -- If in the configuration not exists responseTopicExpression, gateway have just send message and won't wait for response.
{% endcapture %}
{% include templates/info-banner.md content=methodFilterOptions %}

This section in configuration file looks like:  

```json
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
```

As you can use **deviceNameFilter** and **methodFilter** to apply different mapping rules for different devices/methods.
Once Gateway receives RPC request from the server to the device, it will publish the corresponding message based on **requestTopicExpression** and **valueExpression**.
In case you expect the reply to the request from device, you should also specify **responseTopicExpression** and **responseTimeout**. 
The Gateway will subscribe to the "response" topic and wait for device reply until "responseTimeout" is detected (in milliseconds).

Example of RPC request (rpc-request.json) that need to be sent from the server:

```json
{
  "method": "echo",
  "params": {
    "message": "Hello!"
  }
}
```

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
