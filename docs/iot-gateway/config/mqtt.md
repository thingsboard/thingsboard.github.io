---
layout: docwithnav
title: MQTT Connector Configuration
description: MQTT protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with MQTT Connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this Connector. 
The purpose of this Connector is to connect to external MQTT broker and subscribe to data feed from devices. 
Connector is also able to push data to MQTT brokers based on the updates/commands from ThingsBoard. 

This Connector is useful when you have local MQTT broker in your facility or corporate network and you would like to push data from this broker to ThingsBoard.

We will describe connector configuration file below.

## Connector configuration: mqtt.json

Connector configuration is a JSON file that contains information about how to connect to external MQTT broker, 
what topics to use when subscribing to data feed and how to process the data. 
Let's review the format of the configuration file using example below.

<br>
<details>

<summary>
<b>Example of MQTT Connector config file. Press to expand.</b>
</summary>

Example listed below will connect to MQTT broker in a local network deployed on server with IP 192.168.1.100. 
Connector will use basic MQTT auth using username and password. 
Then, connector will subscribe to a list of topics using topic filters from mapping section. See more info in a description below.    

{% highlight json %}

{
  "broker": {
    "name":"Default Local Broker",
    "host":"192.168.1.100",
    "port":1883,
    "security": {
      "type": "basic",
      "username": "user",
      "password": "password"
    }
  },
  "mapping": [
    {
      "topicFilter": "/sensor/data",
      "converter": {
        "type": "json",
        "deviceNameJsonExpression": "${serialNumber}",
        "deviceTypeJsonExpression": "${sensorType}",
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
      "topicFilter": "/sensor/+/data",
      "converter": {
        "type": "json",
        "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/data)",
        "deviceTypeTopicExpression": "Thermometer",
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
      "topicFilter": "/custom/sensors/+",
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
      "topicFilter": "sensor/connect",
      "deviceNameJsonExpression": "${SerialNumber}"
    },
    {
      "topicFilter": "sensor/+/connect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/connect)"
    }
  ],
  "disconnectRequests": [
    {
      "topicFilter": "sensor/disconnect",
      "deviceNameJsonExpression": "${SerialNumber}"
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
| host          | **localhost**                  | Mqtt broker hostname or ip address.                    |
| port          | **1883**                       | Mqtt port on the broker.                               |
|---

#### Subsection "security"

Subsection "security" provides configuration for client authorization at Mqtt Broker.
 
{% capture mqttconnectorsecuritytogglespec %}
Basic<small>Recommended</small>%,%accessToken%,%templates/iot-gateway/mqtt-connector-basic-security-config.md%br%
Anonymous<small>No security</small>%,%anonymous%,%templates/iot-gateway/mqtt-connector-anonymous-security-config.md%br%
Certificates<small>For advanced security</small>%,%tls%,%templates/iot-gateway/mqtt-connector-tls-security-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="mqttConnectorCredentialsConfig" toggle-spec=mqttconnectorsecuritytogglespec %}  

### Section "mapping"

This configuration section contains array of topics that the gateway will subscribe to after connecting to the broker and settings about processing incoming messages (converter).

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| topicFilter | **/sensor/data** | Topic address for subscribing. |
|---


The **topicFilter** supports special symbols: '#' and '+' to allow to subscribe to multiple topics.

Let's assume we would like to subscribe and process following data from Thermometer devices:

|**Example Name**|**Topic**|**Topic Filter**|**Payload**|**Comments**|
|:-|:-|:-|-
| Example 1 | /sensor/data | /sensor/data | {"serialNumber": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "temp":  42, "hum": 58} | Device Name is part of the payload|
| Example 2 | /sensor/SN-001/data | /sensor/+/data | { "sensorType": "Thermometer", "sensorModel": "T1000", "temp":  42, "hum": 58} | Device Name is part of the topic|
|---

Now let's review how we can configure JSON converter to parse this data

#### Subsection "converter"
This subsection contains configuration for processing incoming messages.  

Types of mqtt converters:  
1. json -- Default converter
2. custom -- Custom converter (You can write it by yourself, and it will use to convert incoming data from the broker.) 

{% capture mqttconvertertypespec %}
json<small>Recommended if json will be received in response</small>%,%json%,%templates/iot-gateway/mqtt-converter-json-config.md%br%
custom<small>Recommended if bytes or anything else will be received in response</small>%,%custom%,%templates/iot-gateway/mqtt-converter-custom-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="MqttConverterTypeConfig" toggle-spec=mqttconvertertypespec %}


**Note**: You can specify multiple mapping objects inside the array.

Mapping process subscribes to the MQTT topics using **topicFilter** parameter of the mapping object. 
Each message that is published to this topic by other devices or applications is analyzed to extract device name, type and data (attributes and/or timeseries values).
By default, gateway uses Json converter, but it is possible to provide custom converter. See examples in the source code.

### Section "connectRequests"

ThingsBoard allows sending RPC commands and notifications about device attribute updates to the device.
But in order to send them, the platform needs to know if the target device is connected and what gateway or session is used to connect the device at the moment.
If your device is constantly sending telemetry data - ThingsBoard already knows how to push notifications.
If your device just connects to MQTT broker and waits for commands/updates, you need to send a message to the Gateway and inform that device is connected to the broker.
 
**1. Name in a message from broker:**

| **Parameter**                 | **Default value**                     | **Description**                                                                                   |
|:-|:-|-
| topicFilter                   | **sensors/connect**                   | Topic address on the broker, where the broker sends information about new connected devices.      |
| deviceNameJsonExpression      | **${SerialNumber}**                 | JSON-path expression, for looking the new device name.                                            |
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
| deviceNameJsonExpression      | **${SerialNumber}**                 | JSON-path expression, for looking the new device name.                                            |
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
      "deviceNameJsonExpression": "${SerialNumber}"
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
