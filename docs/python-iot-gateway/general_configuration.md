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

There are 2 variants of security subsection:
1. accessToken
2. TLS

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
| name                     | **MQTT Broker Connector**                    | Name of connector to broker.                                                    |
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
json<small>Recommended as easier to configure</small>%,%json%,%templates/iot-gateway/mqtt-converter-json-config.md%br%
custom<small>recommended as more safety</small>%,%custom%,%templates/iot-gateway/mqtt-converter-custom-config.md{% endcapture %}

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

## Modbus Connector

This configuration file provides configuration for connecting to a Modbus server and settings for processing data.

<br>

<details>

<summary>
<b>Example of Modbus Connector config file.</b>
</summary>

{% highlight json %}

{
  "server": {
    "name": "Modbus Default Server",
    "type": "tcp",
    "host": "127.0.0.1",
    "port": 5020,
    "timeout": 35,
    "rtuOverTcp": false,
    "devices": [
      {
        "unitId": 1,
        "deviceName": "Temp Sensor",
        "attributesPollPeriod": 5000,
        "timeseriesPollPeriod": 5000,
        "sendDataOnlyOnChange": true,
        "attributes": [
          {
            "byteOrder": "BIG",
            "tag": "test",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 0
          }
        ],
        "timeseries": [
          {
            "byteOrder": "BIG",
            "tag": "test",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 0
          }
        ],
        "rpc": {
          "turnLightOn": {
            "address": 4,
            "bit": 2,
            "value": true
          },
          "turnLightOff": {
            "address": 4,
            "bit": 2,
            "value": false
          },
          "getCPULoad": {
            "tag": "Integer",
            "value": 42,
            "functionCode": 16,
            "address": 0,
            "unitId": 1,
            "byteOrder": "BIG",
            "registerCount": 1
          }
        }
      }
    ]
  }
}

{% endhighlight %}

</details>

### Section "server"
Configuration in this section uses for connecting to Modbus server.  

| **Parameter**                 | **Default value**                       | **Description**                                                                       |
|:-|:-|-
| name                          | **Modbus Default Server**               | Name of connector to server.                                                          |
| type                          | **tcp**                                 | Type of connection may be **tcp** or **udp**.                                         |
| host                          | **127.0.0.1**                           | Hostname or ip address of Modbus server.                                              |
| port                          | **5020**                                | Port of Modbus server for connect.                                                    |
| timeout                       | **35**                                  | Timeout in seconds for connecting to Modbus server.                                   |
| rtuOverTcp                    | **false**                               | Depends on type of connection, may be **rtuOverUdp**, if true then RTU will use.      |
|---

#### Subsection "devices"
In this subsection provides array of configurations for devices, which connected to the Modbus server.

##### Parameters of device (object in the subsection "devices")
This configuration section provides configuration for device connection and data processing from those.

| **Parameter**                 | **Default value**   | **Description**                                                                             |
|:-|:-|-
| unitId                        | **1**               | Id of current device on Modbus.                                                             |
| deviceName                    | **Temp Sensor**     | Name of the current device                                                                  |
| attributesPollPeriod          | **5000**            | Period in milliseconds for check the attributes on device.                                  |
| timeseriesPollPeriod          | **5000**            | Period in milliseconds for check the telemetry on device.                                   |
| sendDataOnlyOnChange          | **true**            | Sending only if data changed from last check, if no -- data will send after every check     |
|---

This part of configuration will look like:  

```json
    "devices": [
      {
        "unitId": 1,
        "deviceName": "Temp Sensor",
        "attributesPollPeriod": 5000,
        "timeseriesPollPeriod": 5000,
        "sendDataOnlyOnChange": true,
```

###### Subsection attributes
Configuration in this subsection provides settings for processing data on Modbus server, which will be interpreted in ThingsBoard platform instance as attribute of device.

| **Parameter** | **Default value**   | **Description**                                                         |
|:-|:-|-
| byteOrder     | **BIG**      | Order of bytes to read.                                                        |
| tag           | **test**     | Tag, which will use as attribute key for ThingsBoard platform instance.        |
| type          | **long**     | Type of value. (**long**, **integer**, **string**, **double**, **bit**)        |
| functionCode  | **4**        | Function to use in processing data. Based on Modbus standard.                  |
| registerCount | **1**        | Count of registers to read.                                                    |
| address       | **0**        | Register address to check.                                                     |
|---

This part of configuration will look like:  

```json
        "attributes": [
          {
            "byteOrder": "BIG",
            "tag": "test",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 0
          }
        ],
```

###### Subsection "timeseries"
Configuration in this subsection provides settings for processing data on Modbus server, which will be interpreted in ThingsBoard platform instance as telemetry of device.

| **Parameter** | **Default value**   | **Description**                                                         |
|:-|:-|-
| byteOrder     | **BIG**      | Order of bytes to read.                                                        |
| tag           | **test**     | Tag, which will use as attribute key for ThingsBoard platform instance.        |
| type          | **long**     | Type of value. (**long**, **integer**, **string**, **double**, **bit**)        |
| functionCode  | **4**        | Function to use in processing data. Based on Modbus standard.                  |
| registerCount | **1**        | Count of registers to read.                                                    |
| address       | **0**        | Register address to check.                                                     |
|---

This part of configuration will look like:  

```json
        "timeseries": [
          {
            "byteOrder": "BIG",
            "tag": "test",
            "type": "long",
            "functionCode": 4,
            "registerCount": 1,
            "address": 0
          }
        ],
```

###### Subsection "rpc"
Configuration in this subsection provides settings for RPC requests from ThingsBoard platform instance to device.

| **Parameter** | **Default value**     | **Description**                                                         |
|:-|:-|-
| turnLightOn   |                       | Name of RPC function. Can be different (Variants provided below.)       |
| address       | **4**                 | Register address to set/read.                                           |
| bit           | **2**                 | Bit address to set/read.                                                |
| value         | **true**              | The value will be written to register.                                  |
| registerCount | **1**                 | Count of registers to set/read.                                         |
| unitId        | **1**                 | Identifier of the device unit, on which rpc request will be executed.   |
| byteOrder     | **BIG**               | Byte order, for value, that will be written to register.                |
| tag           | **Integer**           | Type of value. (**long**, **integer**, **string**, **double**, **bit**) |
|---

This part of configuration will look like:  

```json
        "rpc": {
          "turnLightOn": {
            "address": 4,
            "bit": 2,
            "value": true
          },
          "turnLightOff": {
            "address": 4,
            "bit": 2,
            "value": false
          },
          "getCPULoad": {
            "tag": "Integer",
            "value": 42,
            "functionCode": 16,
            "address": 0,
            "unitId": 1,
            "byteOrder": "BIG",
            "registerCount": 1
          }
        }
      }
```

{% capture modbusRPCinfo %}
<br>
**Parameters in this subsection of the configuration depend on the type of rpc request, you need.**
{% endcapture %}
{% include templates/info-banner.md content=modbusRPCinfo %}

## OPC-UA Connector

This configuration file provides configuration for connecting to an OPC-UA server and settings for processing OPC-UA server data.

<br>

<details>

<summary>
<b>Example of OPC-UA Connector config file.</b>
</summary>

{% highlight json %}

{
  "server": {
    "name": "OPC-UA Default Server",
    "url": "localhost:4840/freeopcua/server/",
    "scanPeriodInMillis": 10000,
    "timeoutInMillis": 5000,
    "security": "Basic128Rsa15",
    "identity": {
      "type": "anonymous"
    },
    "mapping": [
      {
        "deviceNodePattern": "MyObject\\d+",
        "deviceNamePattern": "Device ${MyVariable22}",
        "attributes": [
          {
            "key": "Tag1",
            "path": "${MyVariable1}"
          }
        ],
        "timeseries": [
          {
            "key": "Tag3",
            "path": "${Tag3}"
          },
          {
            "key": "Tag2",
            "path": "${MyVariable3}"
          }
        ],
        "rpc_methods": [
          {
            "method": "multiply",
            "arguments": [2, 4]
          }
        ],
        "attributes_updates": [
          {
            "attributeOnThingsBoard": "t",
            "attributeOnDevice": "MyVariable1"
          }
        ]
      }
    ]
  }
}

{% endhighlight %}

</details>

### Section "server"

Configuration in this section uses for connecting to Modbus server.  

| **Parameter**                 | **Default value**                    | **Description**                                                                       |
|:-|:-|-
| name                          | **OPC-UA Default Server**            | Name of connector to server.                                                          |
| host                          | **localhost:4840/freeopcua/server/** | Hostname or ip address of Modbus server.                                              |
| scanPeriodInMillis            | **10000**                            | Port of Modbus server for connect.                                                    |
| timeoutInMillis               | **5000**                             | Timeout in seconds for connecting to Modbus server.                                   |
| security                      | **Basic128Rsa15**                    | Security policy (**Basic128Rsa15**, **Basic256**, **Basic256Sha256**)                 |
|---

#### Subsection "identity"
There are several types available for this subsection:  
1. anonymous  
2. username  
3. cert.PEM  

{% capture identityopcuatogglespec %}
<b>anonymous</b><br/> <small>(recommended if all servers in the local network)</small>%,%anonymous%,%templates/iot-gateway/opcua-identity-anonymous-config.md%br%
<b>username</b><br/> <small>(recommended as basic level of security)</small>%,%username%,%templates/iot-gateway/opcua-identity-username-config.md%br%
<b>cert.PEM</b><br/> <small>(recommended as better level of security)</small>%,%certpem%,%templates/iot-gateway/opcua-identity-certpem-config.md%br%{% endcapture %}

{% include content-toggle.html content-toggle-id="opcuaIdentityConfig" toggle-spec=identityopcuatogglespec %}

### Section "mapping"
This configuration section contains array of nodes that the gateway will subscribe to after connecting to the OPC-UA server and settings about processing data from these nodes.

| **Parameter**                 | **Default value**                    | **Description**                                                                       |
|:-|:-|-
| deviceNodePattern             | **MyObject\\d+**                     | Regular expression, uses for looking the node for a current device.                   |
| deviceNamePattern             | **Device ${MyVariable22}**           | JSON-path expression, uses for looking the device name in some variable.              |
|---

This part of configuration will look like:  

```json
        "deviceNodePattern": "MyObject\\d+",
        "deviceNamePattern": "Device ${MyVariable22}",
```

***Optionally, you can add in this section parameter "converter" for using custom converter.***

#### Subsection "attributes"
This subsection contains configurations for variables of the object, that will be interpreted as attributes for the device.

| **Parameter**   | **Default value**           | **Description**                                                                   |
|:-|:-|-
| key             | **Tag1**                    | Tag, that will interpreted as attribute for ThingsBoard platform instance.        |
| path            | **${MyVariable}**           | JSON-path expression, uses for looking the value in some variable.                |
|---

This part of configuration will look like:  

```json
        "attributes": [
          {
            "key": "Tag1",
            "path": "${MyVariable1}"
          }
        ],
```

#### Subsection "timeseries"
This subsection contains configurations for variables of the object, that will be interpreted as telemetry for the device.

| **Parameter**   | **Default value**           | **Description**                                                                   |
|:-|:-|-
| key             | **Tag1**                    | Tag, that will interpreted as telemetry for ThingsBoard platform instance.        |
| path            | **${MyVariable}**           | JSON-path expression, uses for looking the value in some variable.                |
|---

This part of configuration will look like:  

```json
        "timeseries": [
          {
            "key": "Tag3",
            "path": "${Tag3}"
          }
        ],
```

#### Subsection "rpc_methods"
This subsection contains configuration for RPC request from ThingsBoard platform instance.

| **Parameter**         | **Default value**                 | **Description**                                                                                    |
|:-|:-|-
| method                | **multiply**                      | Name of method on OPC-UA server.                                                                   |
| arguments             | **[2,4]**                         | Arguments for the method (if this parameter doesn't exist, arguments will take from rpc request). |
|---

This part of configuration will look like:  

```json
        "rpc_methods": [
          {
            "method": "multiply",
            "arguments": [2, 4]
          }
        ],
```


#### Subsection "attributes_updates"
This subsection contains configuration for RPC request from ThingsBoard platform instance.

| **Parameter**             | **Default value**                 | **Description**                                                                               |
|:-|:-|-
| attributeOnThingsBoard    | **t**                             | Name of server side argument.                                                                 |
| attributeOnDevice         | **MyVariable1**                   | Name of variable that will change itself value with a value from attribute update request.    |
|---

This part of configuration will look like:  

```json
        "attributes_updates": [
          {
            "attributeOnThingsBoard": "t",
            "attributeOnDevice": "MyVariable1"
          }
        ]
```
