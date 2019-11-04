---
layout: docwithnav
title: Python IoT Gateway Configuration
description: Installation structure and configuration of ThingsBoard IoT Gateway 

---


* TOC
{:toc}


## Directory structure

<br>

Directory structure can be different it depends on type of installation:

1 - DEB/RPM package

2 - Docker container

3 - Package manager installation (pip3)

### DEB/RPM package

```text
/etc/thingsboard-gateway/config                   - Default path for configuration folder.
    logs.conf                                     - Default configuration file for logs.
    modbus.json                                   - Default configuration file for modbus connector.
    mqtt.json                                     - Default configuration file for mqtt connector.
    ...
    opcua.json                                    - Default configuration file for OPC-UA connector.
    tb_gateway.yaml                               - Default main configuration file for gateway. 

/var/lib/thingsboard_gateway/extensions           - Default folder for custom converters.                      
    modbus                                        - Default folder for Modbus custom converters.
    mqtt                                          - Default folder for Mqtt custom converters.
        __init__.py                               - Default python package file, needed for correct importing.
        custom_uplink_mqtt_converter.py           - Example of custom Mqtt converter.
    ...
    opcua                                         - Default folder for OPC-UA custom converters.

/var/log/thingsboard-gateway                      - Default configuration folder
    connector.log                                 - Default logs for all connectors.
    extension.log                                 - Default logs for all converters.
    service.log                                   - Default logs for the main gateway service.
    storage.log                                   - Default logs for storage.
    tb_connection.log                             - Default logs for connection to the ThingsBoard instance.
```
        

### Docker container

Directory structure like in DEB/RPM package, but you need mount the extension and config folders into container.

### Package manager installation

In this case you can select, which folder will be used as configuration directory. 
\#TODO write a guide about running from library.    

## General configuration file

The main configuration file that is used for connection to ThingsBoard platform instance and enable/disable connectors.  
<br>
<details>
<summary>
<b>Example of main configuration file.</b>
</summary>

{% highlight yaml %}

thingsboard:
  host: 127.0.0.1
  port: 1883
  security:
    accessToken: FUH2Fonov6eajSHi0Zyw
storage:
  type: memory
  read_records_count: 10
  max_records_count: 1000
connectors:

  -
    name: MQTT Broker Connector
    type: mqtt
    configuration: mqtt.json

  -
    name: Modbus Connector
    type: modbus
    configuration: modbus.json

  -
    name: OPC-UA Connector
    type: opcua
    configuration: opcua.json

{% endhighlight %}

***Spaces identity are important.***

</details>

### Sections in config file

+ **thingsboard-client** -- Configuration for connecting to ThingsBoard platform.
  - *security* -- Configuration for type of encryption and authorization.
+ **storage** -- Configuration for local storage of incoming data from devices.
+ **connectors** -- Array of connectors (Protocols) uses.

#### Section "thingsboard"

|**Parameter**             | **Default value**                            |   **Description**                                              |
|---                       |---                                           |---                                                             |
| ***thingsboard***        |                                              | Configuration for connection to server.                        |
| host                     | **127.0.0.1**                                | Hostname or ip address of ThingsBoard server.                  |
| port                     | **1883**                                     | Port of mqtt service on ThingsBoard server.                    |

###### Subsection "security"


{% capture securitytogglespec %}
Access Token<small>Recommended as easier to configure</small>%,%accessToken%,%templates/iot-gateway/security-accesstoken-config.md%br%
TLS<small>recommended as more safety</small>%,%tls%,%templates/iot-gateway/security-tls-config.md{% endcapture %}

There are 2 variants of security subsection - accessToken or TLS.

{% include content-toggle.html content-toggle-id="securityConfig" toggle-spec=securitytogglespec %}


#### Section "storage"

Configs in storage subsection provides configuration for saving incoming data before it will be send to ThingsBoard platform.
  
There are 2 variants for this section: memory or file.
1. **Memory** storage - Received data saving to the RAM memory.
2. **File** storage - Received data saving to the hard drive.

{% capture storagetogglespec %}
Memory storage<br/> <small>(recommended if there is not enough disk space)</small>%,%memory%,%templates/iot-gateway/storage-memory-config.md%br%
File storage<br/> <small>(recommended for more persistent)</small>%,%file%,%templates/iot-gateway/storage-file-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="storageConfig" toggle-spec=storagetogglespec %}

#### Section "connectors"
 Configs in connectors section configuration for connecting to devices by implemented protocols.  
 ***Pattern*** provided below.  
 Config for every connector in this section must have parameters as in table below:  
 
|**Parameter**|**Default value**|**Description**|
|:-|:-|- 
| name                     | **MQTT Broker Connector**                    | Name of connector to device.                                                    |
| type                     | **mqtt**                                     | Type of connector, must be like a name of folder, contained configuration file. |
| configuration            | **mqtt.json**                                | Name of the file with configuration in config folder.*                          |
|---

\* -- Folder with this configuration file.

Section connectors in your configuration file may differ from shown below, but they should have structure like this:

```yaml
connectors:

  -
    name: MQTT Broker Connector
    type: mqtt
    configuration: mqtt.json

  -
    name: Modbus Connector
    type: modbus
    configuration: modbus.json

```

**In example configuration file provided all available connectors by this time, if you don't need some from them, you should just remove it from this file.**  
If you need different type of connector, please email us: <info@thingsboard.io>.



# Connectors

There are few connectors implemented:

1. MQTT Connector
2. Modbus Connector
3. OPC-UA Connector

## MQTT Connector

This configuration file provides configuration for connecting to a broker and settings for processing incoming from broker messages.

<br>

<details>

<summary>
<b>Example of MQTT Connector config file.</b>
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

Section "broker" - provided configuration for connecting to the mqtt broker.

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
json<small>Recommended as easier to configure</small>%,%accessToken%,%templates/iot-gateway/mqtt-converter-json-config.md%br%
custom<small>recommended as more safety</small>%,%tls%,%templates/iot-gateway/mqtt-converter-custom-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="MqttConverterTypeConfig" toggle-spec=mqttconvertertypespec %}

### Section "connectRequests"
This configuration section is optional.  
Configuration, provided in this section will be used to get information from the broker about connecting new device.  

There are 2 options for this block configuration, depending on where gateway should receive device name.  

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

### Section "disconnectRequest"
This configuration section is optional.  
Configuration, provided in this section will be used to get information from the broker about disconnecting device.  

There are 2 options for this block configuration, depending on where gateway should receive device name.  

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

### Section "attributeUpdates"
This configuration section is optional.  
Configuration, provided in this section will be used to send information to configured topic when server side attributes on ThingsBoard platform instance will change.

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

### Section "serverSideRpc"
This configuration section is optional.  
Configuration, provided in this section uses for sending RPC requests to device.

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

