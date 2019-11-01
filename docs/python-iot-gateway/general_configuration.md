---
layout: docwithnav
title: Python IoT Gateway Configuration
description: Installation structure and configuration of ThingsBoard IoT Gateway 

---


* TOC
{:toc}


## Directory structure

<br>

Directory structure can be different, caused by different types of installations, there are few cases:

1 - DEB/RPM package

2 - Docker container

3 - Package manager installation (pip3)

### DEB/RPM package

```text
/etc/thingsboard-gateway/config
    logs.conf
    modbus.json
    mqtt.json
    ...
    opcua.json
    tb_gateway.yaml

/var/lib/thingsboard_gateway/extensions
    modbus
    mqtt
        __init__.py
        custom_uplink_mqtt_converter.py
    ...
    opcua

/var/log/thingsboard-gateway
    connector.log
    extension.log
    service.log
    storage.log
    tb_connection.log
```
        

### Docker container

Directory structure like in DEB/RPM package, but you need mount the extension and config folders into container.

### Package manager installation

In this case you can select which folder will be uses for config. 
\#TODO write guide about running from library.    

## General configuration file

The main configuration file that is used to setup connection to ThingsBoard platform and enable/disable connectors.

Example of main configuration file:

```yaml
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
```

***Spaces identity are important.***


### Sections in config file

+ **thingsboard-client** - Configuration for connecting to ThingsBoard platform.
  - *security* - Configuration for type of encryption and authorization.
+ **storage** - Configuration for local storage of incoming data from devices.
+ **connectors** - Array of connectors (Protocols) uses.

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
| name                     | **MQTT Broker Connector**                    | Name of connector to device.                                   |
| type                     | **mqtt**                                     | Type of connector, must be like name of folder.                |
| configuration            | **mqtt.json**                                | Name of the file with configuration in config folder.*         |
|---

\* - Folder with this configuration file.

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

**In example configuration file provided all available connectors by this time, if you don't need some from them, you should just remove it from configuration.**  
If you need different type of connector, please email us: <info@thingsboard.io>.



# Connectors

There are few connectors implemented:

1. MQTT Connector
2. Modbus Connector
3. OPC-UA Connector

## MQTT Connector

Example of MQTT Connector config file.


```json
{
  "broker": {
    "name":"Default Broker",
    "host":"demo.thingsboard.io",
    "port":1883,
    "credentials": {
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
```

## Section "broker"

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
|name|**Default Broker**|Name of broker for logs and saving to persistent devices|
|host|**demo.thingsboard.io**|ThingsBoard platform instance hostname or ip address|
|port|**1883**|Mqtt port on ThingsBoard platform instance|
|---

### Subsection "credentials"

## Section "mapping"
## Section "connectRequests"
## Section "disconnectRequest"
## Section "attributeUpdates"
## Section "serverSideRpc"
