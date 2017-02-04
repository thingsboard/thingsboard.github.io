---
layout: docwithnav
assignees:
- ashvayka
title: MQTT Extension Configuration

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

MQTT extension supports "anonymous" and "basic" client credentials.
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

#### Mapping

Mapping configuration setup rules of MQTT topics monitoring and data conversion to Thingsboard Key-Value format. 
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

Mapping process subscribes to the MQTT topics using **topicFilter** parameter of the mapping object. 
Each message that is published to this topic by other devices or applications is analyzed to extract device name and device data (attributes or timeseries values).
By default, gateway use [Json converter](TODO link to github), but you can customize this behaviour and implement your own converter. See [converter interface](TODO link to github) for more details.

The Json converter is based on [**JsonPath**](https://github.com/jayway/JsonPath) library to provide ability of flexible mapping and filtering of JSON structures.
You can define **filterExpression** based on the [**path**](https://github.com/jayway/JsonPath#path-examples) and [**filter**](https://github.com/jayway/JsonPath#filter-operators) examples.

The **deviceNameJsonExpression** mapping parameter is used to extract device name from the incoming JSON message. 

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

## Next steps

Explore examples:
 
 - [Mosquitto connection example](/docs/iot-gateway/getting-started/#step-8-connect-to-external-mqtt-broker)

Explore guides related to main Thingsboard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
