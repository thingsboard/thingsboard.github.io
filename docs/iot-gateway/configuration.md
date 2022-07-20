---
layout: docwithnav-gw
title: IoT Gateway Configuration
description: Installation structure and configuration of ThingsBoard IoT Gateway 

---


* TOC
{:toc}


## Directory structure

Please see default directory structure below for daemon installation.  

```text
/etc/thingsboard-gateway/config                   - Configuration folder.
    tb_gateway.yaml                               - Main configuration file for Gateway.
    logs.conf                                     - Configuration file for logging.
    modbus.json                                   - Modbus connector configuration.
    mqtt.json                                     - MQTT connector configuration.
    ble.json                                      - BLE connector configuration.
    opcua.json                                    - OPC-UA connector configuration.
    request.json                                  - Request connector configuration.
    can.json                                      - CAN connector configuration. 
    ... 

/var/lib/thingsboard_gateway/extensions           - Folder for custom connectors/converters.                      
    modbus                                        - Folder for Modbus custom connectors/converters.
    mqtt                                          - Folder for MQTT custom connectors/converters.
        __init__.py                               - Default python package file, needed for correct imports.
        custom_uplink_mqtt_converter.py           - Custom Mqtt converter example.
    ...
    opcua                                         - Folder for OPC-UA custom connectors/converters.
    ble                                           - Folder for BLE custom connectors/converters.
    request                                       - Folder for Request custom connectors/converters.
    can                                           - Folder for CAN custom connectors/converters.

/var/log/thingsboard-gateway                      - Logs folder
    connector.log                                 - Connector logs.
    service.log                                   - Main gateway service logs.
    storage.log                                   - Storage logs.
    tb_connection.log                             - Logs for connection to the ThingsBoard instance.
```
        
## General configuration file

The main configuration file that is used for connection to ThingsBoard platform instance and enable/disable connectors. 
This configuration points to ThingsBoard instance thingsboard.cloud and uses 
memory file storage configured to store maximum of 100,000 records. There are 4 different connectors active. 
If you like to use only one of them - just remove all other connectors. 

<br>
<details>
<summary>
<b>Example of main configuration file. Press to show.</b>
</summary>

{% highlight yaml %}

thingsboard:
  host: thingsboard.cloud
  port: 1883
  remoteShell: false
  remoteConfiguration: false
  statistics:
    enable: true
    statsSendPeriodInSeconds: 3600
  minPackSendDelayMS: 0
  checkConnectorsConfigurationInSeconds: 60
  handleDeviceRenaming: true
  checkingDeviceActivity:
    checkDeviceInactivity: false
    inactivityTimeoutSeconds: 120
    inactivityCheckPeriodSeconds: 10
  security:
    accessToken: PUT_YOUR_ACCESS_TOKEN_HERE
  qos: 1
storage:
  type: memory
  read_records_count: 100
  max_records_count: 100000
grpc:
  enabled: false
  serverPort: 9595
  keepaliveTimeMs: 10000
  keepaliveTimeoutMs: 5000
  keepalivePermitWithoutCalls: true
  maxPingsWithoutData: 0
  minTimeBetweenPingsMs: 10000
  minPingIntervalWithoutDataMs: 5000
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
    name: Modbus Connector
    type: modbus
    configuration: modbus_serial.json

  -
    name: OPC-UA Connector
    type: opcua
    configuration: opcua.json

  -
    name: BLE Connector
    type: ble
    configuration: ble.json

  -
    name: CAN Connector
    type: can
    configuration: can.json

  -
    name: Custom Serial Connector
    type: serial
    configuration: custom_serial.json
    class: CustomSerialConnector

{% endhighlight %}
<b><i>Spaces identity are important.</i></b>  
</details>

#### Sections in config file

+ **thingsboard** -- Configuration for connecting to ThingsBoard platform.
  - *security* -- Configuration for type of encryption and authorization.
+ **storage** -- Configuration for local storage of incoming data from devices.
+ **connectors** -- Array of Connectors and their configuration to use.

#### Connection to ThingsBoard

|**Parameter**             | **Default value**                            |   **Description**                                              |
|---                       |---                                           |---                                                             |
| ***thingsboard***        |                                              | Configuration for connection to server.                        |
| host                     | **thingsboard.cloud**                        | Hostname or ip address of ThingsBoard server.                  |
| port                     | **1883**                                     | Port of mqtt service on ThingsBoard server.                    |

###### Subsection "statistics"

This subsection uses to configure collecting statistics data and sending them to ThingsBoard Gateway device attributes.

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| statistics                   |                 | Configuration for enabling statistics collecting                   |
| ... enable                   | true            | A boolean value that is used to on/off collecting statistics       |
| ... statsSendPeriodInSeconds | 3600            | An integer value that is used to send data some every period       |
| ... configuration            | statistics.json | Name of a configuration file for additional user statistics data   |
|---

You can define additional parameter "configuration" and provide your own command for collecting some additional data.
This configuration file can look like the example below:
```json
[
  {
    "timeout": 100,
    "command": ["/bin/sh", "-c", "ps -A -o cpu,%mem | awk '{cpu += $1}END{print cpu}'"],
    "attributeOnGateway": "CPU"
  },
  {
    "timeout": 100,
    "command": ["/bin/sh", "-c", "ps -A -o %cpu,%mem | awk '{mem += $2}END{print mem}'"],
    "attributeOnGateway": "Memory"
  },
  {
    "timeout": 100,
    "command": ["/bin/sh", "-c", "ipconfig getifaddr en0"],
    "attributeOnGateway": "IP address"
  },
  {
    "timeout": 100,
    "command": ["/bin/sh", "-c", "sw_vers -productName"],
    "attributeOnGateway": "OS"
  },
  {
    "timeout": 100,
    "command": ["/bin/sh", "-c", "uptime"],
    "attributeOnGateway": "Uptime"
  },
  {
    "timeout": 100,
    "command": ["/bin/sh", "-c", "system_profiler SPUSBDataType"],
    "attributeOnGateway": "USBs"
  }
]
```

###### Subsection “checkingDeviceActivity”

This subsection is optional and used to monitor the activity of each connected device. 

If you define this section, the Gateway will check the activity of each device every n second that means, if the device 
is inactive for n seconds, it will disconnect it.

|**Parameter**|**Default value**|**Description**|
|:-|:-|- 
| checkingDeviceActivity           |              | Configuration for checking devices activity                   |
| ... checkDeviceInactivity        | **false**    | Boolean value that is used to on/off checking device activity |
| ... inactivityTimeoutSeconds     | **120**      | Inactivity device time after whose Gateway will disconnect it |
| ... inactivityCheckPeriodSeconds | **10**       | Periodicity of device activity check                          |
|---

###### Subsection "security"

{% capture securitytogglespec %}
Access Token<small>Basic security</small>%,%accessToken%,%templates/iot-gateway/security-accesstoken-config.md%br%
TLS + Access Token<small>Advanced security</small>%,%tlsToken%,%templates/iot-gateway/security-tls-token-config.md%br%
TLS + Private Key<small>Advanced security</small>%,%tls%,%templates/iot-gateway/security-tls-config.md{% endcapture %}

There are 3 variants of security subsection:

{% include content-toggle.html content-toggle-id="securityConfig" toggle-spec=securitytogglespec %}


#### Storage configuration

Configs in storage subsection provides configuration for saving incoming data before it will be send to ThingsBoard platform.
  
There are 2 variants for this section: memory or file.
1. **Memory** storage - Received data saving to the RAM memory.
2. **File** storage - Received data saving to the hard drive.
3. **SQLite** storage - Received data saving to the .db file.

{% capture storagetogglespec %}
Memory storage<br/> <small>(recommended if there is not enough disk space)</small>%,%memory%,%templates/iot-gateway/storage-memory-config.md%br%
File storage<br/> <small>(recommended for more persistent)</small>%,%file%,%templates/iot-gateway/storage-file-config.md%br%
SQLite storage<br/> <small>(recommended for more speed)</small>%,%sqlite%,%templates/iot-gateway/sqlite-storage-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="storageConfig" toggle-spec=storagetogglespec %}

#### Connectors configuration

Configs in connectors section configuration for connecting to devices by implemented protocols.
Config for every connector in this section must have parameters as in table below:  
 
|**Parameter**|**Default value**|**Description**|
|:-|:-|- 
| useGRPC                  | **true**                                     | **OPTIONAL** parameter that is used to on/off GRPC transport for default connector realisation |
| name                     | **MQTT Broker Connector**                    | Name of connector to broker.                                                                   |
| type                     | **mqtt**                                     | Type of connector, must be like a name of folder, contained configuration file.                |
| configuration            | **mqtt.json**                                | Name of the file with configuration in config folder.*                                         |
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

  -
    name: Modbus Connector
    type: modbus
    configuration: modbus_serial.json

  -
    name: OPC-UA Connector
    type: opcua
    configuration: opcua.json

  -
    name: BLE Connector
    type: ble
    configuration: ble.json

  -
    name: CAN Connector
    type: can
    configuration: can.json

  -
    name: Custom Serial Connector
    type: serial
    configuration: custom_serial.json
    class: CustomSerialConnector
```

**Note:** You can use several similar connectors at same time, but you should provide different names and configuration files to them. 

If you need different type of connector, you can implement it using [customization guide](/docs/iot-gateway/custom/) or email us: <info@thingsboard.io>.
