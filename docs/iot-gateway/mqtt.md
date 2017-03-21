---
layout: docwithnav
assignees:
- ashvayka
title: MQTT Extension Configuration
description: MQTT protocol support for Thingsboard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with OPC-UA extension configuration for Thingsboard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe extension configuration file below.

### Extension configuration: mqtt-config.json

Extension configuration is a JSON file that contain information about how to connect and monitor list of MQTT brokers.
The root JSON element should contain "brokers" array. Each broker in the array is configured using following properties:

#### Basic connection properties

| **Property**       | **Description**                                      | **Default Value** |
|--------------------|------------------------------------------------------|-------------------|
| host               | MQTT broker host                                     | localhost         |
| port               | MQTT broker port                                     | 1883              |
| ssl                | Boolean flag to enable/disable encrypted connection  | false             |
| truststore         | Path to the Truststore file for encrypted connection | empty             |
| truststorePassword | Password to the Truststore                           | empty             |
| retryInterval      | Interval to retry connection in milliseconds         | 3000              |

For Example:

```json
{
  "brokers": [
    {
      "host": "localhost",
      "port": 1883,
      "ssl": false,
      "retryInterval": 3000
      ...
    }
  ]
}
```

#### Client identity properties

MQTT extension supports next client credentials:
 - "anonymous"
 - "basic"
 - "cert.PEM"

Example of anonymous identity configuration:

```json
{
      ...
      "credentials": {
        "type": "anonymous"
      }
      ...
}
      
```

Example of basic identity configuration:

```json
{
      ...
      "credentials": {
        "type": "basic",
        "username": "Your username",
        "password": "Your password"
      }
      ...
}
      
```

Example of PEM certificate identity configuration:

```json
{
    ...
    "credentials": {
        "type": "cert.PEM",
        "caCert" : "Path to Your CA certificate file",
        "privateKey" : "Path to Your private key file",
        "cert" : "Path to Your certificate file"
    }
    ...
}

```

#### Mapping

This section will describe various configuration options that allow to specify mapping between Thingsboard features and existing/legacy device protocols. 

##### Attributes & Timeseries data upload 

The "**mapping**" configuration setup rules of MQTT topics monitoring and data conversion to Thingsboard Key-Value format. 
For example:

```json
{
...
"mapping": [
        {
          "topicFilter": "sensors",
          "converter": {
            "type": "json",
            "filterExpression": "",
            "deviceNameJsonExpression": "${$.serialNumber}",
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
        }
        ...
        ]
}
```

**Note**: You can specify multiple mapping objects inside array.

Mapping process subscribes to the MQTT topics using **topicFilter** parameter of the mapping object. 
Each message that is published to this topic by other devices or applications is analyzed to extract device name and device data (attributes or timeseries values).
By default, gateway use [Json converter](https://github.com/thingsboard/thingsboard-gateway/blob/release-1.0/src/main/java/org/thingsboard/gateway/extensions/mqtt/client/conf/mapping/MqttJsonConverter.java), but you can customize this behaviour and implement your own converter. See [converter interface](https://github.com/thingsboard/thingsboard-gateway/blob/release-1.0/src/main/java/org/thingsboard/gateway/extensions/mqtt/client/conf/mapping/MqttDataConverter.java) for more details.

The Json converter is based on [**JsonPath**](https://github.com/jayway/JsonPath) library to provide ability of flexible mapping and filtering of JSON structures.
You can define **filterExpression** based on the [**path**](https://github.com/jayway/JsonPath#path-examples) and [**filter**](https://github.com/jayway/JsonPath#filter-operators) examples.

The **deviceNameJsonExpression** mapping parameter is used to extract device name from the incoming JSON message.

The **timeout** mapping parameter is optional inactivity timeout in milliseconds. If this parameter is specified, the gateway will report that device is disconnected once there is no new telemetry or attribute updates within particular timeout. 

For example, if you have following message:

```json
{"serialNumber":"SN-001", "model":"T1000", "temperature":36.6}
```

The **"${$.serialNumber}"** expression will return **"SN-001"** device name. Similar, **"Device ${$.serialNumber} (${$.model})"** will return **"Device SN-001 (T1000)"** device name.

If device name is a part of the MQTT topic, you can use **deviceNameTopicExpression** parameter, which is basically Java regular expression.

For example, if you have **"sensor/SN-001/temperature"**" topic, the **"(?<=sensor\/)(.*?)(?=\/temperature)"** expression will return **"SN-001"** device name.

Similar [**JsonPath**](https://github.com/jayway/JsonPath) mapping rules are applied for **attributes** and **timeseries** values:

 - **key** - constant Attribute or Timeseries Thingsboard key.
 - **type** - either boolean, long, double or string.
 - **value** - expression based on JsonPath syntax that may be specified inside **${}** 

##### Device connect & disconnect requests

Thingsboard allows to send RPC commands and notifications about device attribute updates to the device. 
But in order to send them, platform needs to know if the target device is connected and what gateway or session is used to connect device at the moment.
If your device is constantly sending telemetry data - Thingsboard already knows how to push notifications.
If your device just connects to MQTT broker and waits for commands/updates, you need to send a message to the Gateway and inform that device is connected to the broker.
 
The "**connectRequests**" and "**disconnectRequests**" allows to convert MQTT messages to corresponding events that will be delivered to Thingsboard through the Gateway.
For example:

```json
{
...
      "connectRequests": [
        {
          "topicFilter": "sensors/connect",
          "deviceNameJsonExpression": "${$.serialNumber}"
        },
        {
          "topicFilter": "sensor/+/connect",
          "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/connect)"
        }
      ]
...
}
```

The **topicFilter** accepts wildcards ('+' and '#'). The device name may be extracted from the topic using **deviceNameTopicExpression** or from the incoming json message using **deviceNameJsonExpression**.

In this case following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensors/connect" -m '{"serialNumber":"SN-001"}'
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/connect" -m ''
```

**Note**: The "**connectRequests**" and "**disconnectRequests**" configuration structure and syntax is the same.

##### Device attributes requests

Thingsboard allows to provision device attributes and fetch some of them from the device application. 
You can treat this as a remote configuration for devices. Your devices are able to request client-side and shared attributes from Thingsboard. 
See [user guide](/docs/user-guide/attributes/) for more details.

The "**attributeRequests**" configuration allows to configure format of corresponding attribute request and response messages. 

For example:

```json
{
...
      "attributeRequests": [
        {
          "topicFilter": "sensors/attributes",
          "deviceNameJsonExpression": "${$.serialNumber}",
          "attributeKeyJsonExpression": "${$.key}",
          "requestIdJsonExpression": "${$.requestId}",
          "clientScope": false,
          "responseTopicExpression": "sensors/${deviceName}/attributes/${responseId}",
          "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
        },
        {
          "topicFilter": "sensors/+/attributes/+/request/+",
          "deviceNameTopicExpression": "(?<=sensors\/)(.*?)(?=\/attributes)",
          "attributeKeyTopicExpression": "(?<=attributes\/)(.*?)(?=\/request)",
          "requestIdTopicExpression": "(?<=request\/)(.*?)($)",
          "clientScope": false,
          "responseTopicExpression": "sensors/${deviceName}/attributes/${attributeKey}/response/${requestId}",
          "valueExpression": "${attributeValue}"
        }
      ]
...
}
```

Corresponding configuration properties and their description is listed in the table below.
 
| Property | Description | Mandatory | Example |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| topicFilter | **Topic** filter that accepts wildcards ('+' and '#') | yes | sensors/+/attributes/+/request/+ |
| deviceNameJsonExpression | [JsonPath](https://github.com/jayway/JsonPath) expression to extract **device name** from message JSON | Either **deviceNameJsonExpression** or **deviceNameTopicExpression** is required | ${$.serialNumber} |
| attributeKeyJsonExpression | [JsonPath](https://github.com/jayway/JsonPath) expression to extract **attribute key** from message JSON | Either **attributeKeyJsonExpression** or **attributeKeyTopicExpression** is required | ${$.key} |
| requestIdJsonExpression | [JsonPath](https://github.com/jayway/JsonPath) expression to extract **request id** from message JSON | Either **requestIdJsonExpression** or **requestIdTopicExpression** is required | ${$.requestId} |
| deviceNameTopicExpression | Regular expression to extract **device name** from topic | Either **deviceNameTopicExpression** or **deviceNameJsonExpression** is required | (?<=sensors\/)(.*?)(?=\/attributes) |
| attributeKeyTopicExpression | Regular expression to extract **attribute key** from topic | Either **attributeKeyTopicExpression** or **attributeKeyJsonExpression** is required | (?<=attributes\/)(.*?)(?=\/request) |
| requestIdTopicExpression | Regular expression to extract **request id** from topic | Either **requestIdTopicExpression** or **requestIdJsonExpression** is required | (?<=request\/)(.*?)($) |
| clientScope | Identifies scope of the attribute: client-side or shared | yes | **true** for client-side attribute, **false** otherwise |
|  responseTopicExpression | Expression for the topic where the response will be published. You can use **${deviceName}**,**${requestId}** and **${attributeKey}** in this expression. | yes | sensors/${deviceName}/attributes/${attributeKey}/response/${requestId} |
| valueExpression | Expression for the response message that will be published. You can use **${deviceName}**,**${requestId}** **${attributeKey}** and **${attributeValue}** in this expression. | yes | ${attributeValue} |

In this case following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensors/attributes" -m '{"serialNumber":"SN-001", "key":"dataUploadFrequency", "requestId": 123}'
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensors/SN-001/attributes/dataUploadFrequency/request/123" -m ''
```

##### Device attribute updates

Thingsboard allows to subscribe to changes of shared device attributes from the device application. See [user guide](/docs/user-guide/attributes/) for more details.

The "**attributeUpdates**" configuration allows to configure format of corresponding subscription messages. 

For example:

```json
{
...
      "attributeUpdates": [
        {
          "deviceNameFilter": ".*",
          "attributeFilter": ".*",
          "topicExpression": "sensor/${deviceName}/${attributeKey}",
          "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
        }
      ]
...
}
```
As you can see, you are able to filter out devices and attributes and forward this updates to certain topic.
The topic and value expressions support following parameters: **${deviceName}**,**${requestId}** **${attributeKey}** and **${attributeValue}**. 

##### Server side RPC commands

Thingsboard allows to send [RPC commands](/docs/user-guide/rpc/) to the device that is connected to Thingsboard directly or via Gateway. 
 
The "**serverSideRpc**" allows to configure format of request and response MQTT messages.
For example:

```json
{
...
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
...
}
```

As you can use **deviceNameFilter** and **methodFilter** to apply different mapping rules for different devices/methods.
Once Gateway receives RPC request from server to device, it will publish corresponding message based on **requestTopicExpression** and **valueExpression**.
In case you expect reply to the request from device, you should also specify **responseTopicExpression** and **responseTimeout**. 
The Gateway will subscribe to the "response" topic and wait for device reply until "timeout" is detected.
 
Example of device application written in javascript:

```javascript
var mqtt = require('mqtt');
var broker = 'mqtt://127.0.0.1:1883';
var device = 'SN-001';
var client  = mqtt.connect(broker, {
  // Will topic to report that device is disconnected 
  will: {topic: 'sensor/' + device + '/disconnect', payload: '', qos: 1}
});

client.on('connect', function () {
    console.log('connected');
    // Report that device is connected to the gateway
    client.publish('sensor/' + device + '/connect', '');
    // Subscribe to RPC requests topic
    client.subscribe('sensor/' + device + '/request/+/+');
});

client.on('message', function (topic, message) {
    console.log('request.topic: ' + topic);
    console.log('request.body: ' + message.toString());
    console.log('response.topic: ' + topic.replace('request','response'));
    // Publish the response that will simply echo the request.
    client.publish(topic.replace('request','response'), message);
});

```

Example of RPC request (rpc-request.json) that need to be sent from the server:

```json
{
  "method": "echo",
  "params": {
    "message": "Hello!"
  },
  "timeout": 5000
}
```

Example of the POST command using CURL:

```bash
$ SERVER_BASE_URL=http://localhost:8080
$ JWT_TOKEN=YOUR_TOKEN_HERE
$ DEVICE_ID=YOUR_DEVICE_ID_HERE
$ curl -v -X POST -d @rpc-request.json $SERVER_BASE_URL/api/plugins/rpc/twoway/$DEVICE_ID \
--header "Content-Type:application/json" \
--header "X-Authorization: Bearer $JWT_TOKEN"
```



## Next steps

Explore examples:
 
 - [Mosquitto connection example](/docs/iot-gateway/getting-started/#step-8-connect-to-external-mqtt-broker)

Explore guides related to main Thingsboard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
