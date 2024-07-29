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
    tb_gateway.json                               - Main configuration file for Gateway.
    logs.json                                     - Configuration file for logging.
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
        __init__.py                               - Default Python package file, needed for correct imports.
        custom_uplink_mqtt_converter.py           - Custom MQTT converter example.
    ...
    opcua                                         - Folder for OPC-UA custom connectors/converters.
    ble                                           - Folder for BLE custom connectors/converters.
    request                                       - Folder for Request custom connectors/converters.
    can                                           - Folder for CAN custom connectors/converters.

/var/log/thingsboard-gateway                      - Logs folder.
    connector.log                                 - Connector logs.
    service.log                                   - Main gateway service logs.
    storage.log                                   - Storage logs.
    tb_connection.log                             - Logs for connection to the ThingsBoard instance.
```

## Environmental variables

{% capture difference %}
**Values of environment variables have a higher priority than values of parameters from the configuration file.
This means that the gateway will use the values of the environment variables (if they are set) 
and not the values from the configuration file.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The gateway provides the capability to configure essential connection parameters using environment variables. 
For example, let's illustrate how you can configure basic parameters such as the host, port, and access token by using 
environment variables within a Docker Compose file. Here’s how you can achieve this:

```yaml
version: '3.4'
services:
  # ThingsBoard IoT Gateway Service Configuration
  tb-gateway:
    image: thingsboard/tb-gateway
    container_name: tb-gateway
    ...
    # Environment variables
    environment:
      - TB_GW_HOST=host.docker.internal
      - TB_GW_PORT=1883
      - TB_GW_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
    ...
```

In the example above, we set the "**host.docker.internal**" as a host, **1883** as a port and "**YOUR_ACCESS_TOKEN**" 
as an access token for the gateway using the "**TB_GW_HOST**", "**TB_GW_PORT**" and "**TB_GW_ACCESS_TOKEN**" 
environment variables, respectively.

The following environmental variables can be used to configure the ThingsBoard IoT Gateway:

| **ENV variable**     | **Default value**             | **Description**                                                                   |
|----------------------|-------------------------------|-----------------------------------------------------------------------------------|
| TB_GW_HOST           | **host.docker.internal**      | Hostname or IP address of ThingsBoard server.                                     |
| TB_GW_PORT           | **1883**                      | Port of MQTT service on ThingsBoard server.                                       |
| TB_GW_ACCESS_TOKEN   | **YOUR_ACCESS_TOKEN**         | Access token for the gateway from ThingsBoard server.                             |
| TB_GW_CA_CERT        |                               | Path to CA certificate file.                                                      |
| TB_GW_PRIVATE_KEY    |                               | Path to private key file.                                                         |
| TB_GW_CERT           |                               | Path to certificate file.                                                         |
| TB_GW_CLIENT_ID      |                               | MQTT client id for the gateway form ThingsBoard server.                           |
| TB_GW_USERNAME       |                               | MQTT username for the gateway form ThingsBoard server.                            |
| TB_GW_PASSWORD       |                               | MQTT password for the gateway form ThingsBoard server.                            |
| TB_GW_RATE_LIMITS    | **15:1,300:60,**              | Messages rate limit to ThingsBoard server in `MESSSAGE_COUNT:TIME,` format.       |
| TB_GW_DP_RATE_LIMITS | **15:1,300:60,**              | Data points rate limit to ThingsBoard server in `DATA_POINTS_COUNT:TIME,` format. |
| TB_GW_LOGS_PATH      | **/thingsboard_gateway/logs** | Path to the logs folder.                                                          |

## General configuration file

The main configuration file that is used for connection to ThingsBoard platform instance and enable/disable connectors. 

The example configuration file provided below sets a connection to the ThingsBoard instance located at 
thingsboard.cloud and utilizes memory file storage, which is set up to hold a maximum of 100,000 records. There are 4 
different connectors active. If you prefer to use only one, simply remove the others from the configuration.

<b>Example of main configuration file. Press to show.</b>

{% capture genConf %}

{
  "thingsboard": {
    "host": "thingsboard.cloud",
    "port": 1883,
    "remoteShell": false,
    "remoteConfiguration": true,
    "statistics": {
      "enable": true,
      "statsSendPeriodInSeconds": 60
    },
    "deviceFiltering": {
      "enable": false,
      "filterFile": "list.json"
    },
    "maxPayloadSizeBytes": 1024,
    "minPackSendDelayMS": 60,
    "minPackSizeToSend": 500,
    "checkConnectorsConfigurationInSeconds": 10,
    "handleDeviceRenaming": true,
    "security": {
      "type": "accessToken",
      "accessToken": "YOUR_ACCESS_TOKEN"
    },
    "qos": 1,
    "checkingDeviceActivity": {
      "checkDeviceInactivity": false,
      "inactivityTimeoutSeconds": 200,
      "inactivityCheckPeriodSeconds": 500
    }
  },
  "storage": {
    "type": "memory",
    "read_records_count": 100,
    "max_records_count": 10000
  },
  "grpc": {
    "enabled": false,
    "serverPort": 9595,
    "keepaliveTimeMs": 10000,
    "keepaliveTimeoutMs": 5000,
    "keepalivePermitWithoutCalls": true,
    "maxPingsWithoutData": 0,
    "minTimeBetweenPingsMs": 10000,
    "minPingIntervalWithoutDataMs": 5000,
    "keepAliveTimeMs": 10000,
    "keepAliveTimeoutMs": 5000
  },
  "connectors": [
    {
      "type": "mqtt",
      "name": "MQTT Broker Connector",
      "configuration": "mqtt.json"
    },
    {
      "type": "modbus",
      "name": "Modbus Connector",
      "configuration": "modbus.json"
    },
    {
      "type": "modbus",
      "name": "Modbus Serial Connector",
      "configuration": "modbus_serial.json"
    },
    {
      "type": "opcua",
      "name": "OPC-UA Connector",
      "configuration": "opcua.json"
    }
  ]
}

{% endcapture %}
{% include code-toggle.liquid code=genConf params="conf|.copy-code.expandable-20" %}

#### Sections in config file

+ **thingsboard** -- Configuration for connecting to ThingsBoard platform.
  - *security* -- Configuration for type of encryption and authorization.
+ **storage** -- Configuration for local storage of incoming data from devices.
+ **connectors** -- Array of Connectors and their configuration to use.

#### Connection to ThingsBoard

|**Parameter**             | **Default value**                            | **Description**                                                                         |
|---                       |---                                           |-----------------------------------------------------------------------------------------|
| ***thingsboard***        |                                              | Configuration for connection to server.                                                 |
| host                     | **thingsboard.cloud**                        | Hostname or IP address of ThingsBoard server.                                           |
| port                     | **1883**                                     | Port of MQTT service on ThingsBoard server.                                             |
| qos                      | **1**                                        | QoS levels 0 (at most once) and 1 (at least once).                                      |
| minPackSendDelayMS       | **200**                                      | Delay between sending packets (Decreasing this setting results in increased CPU usage). |
| minPackSizeToSend        | **500**                                      | Minimum size of packs to send.                                                          |

###### Subsection "statistics"

This subsection is used to configure collecting statistics data and sending them to ThingsBoard Gateway device attributes.

|**Parameter**|**Default value**| **Description**                                                                |
|:-|:-|--------------------------------------------------------------------------------
| statistics                   |                 | Configuration for enabling statistics collecting.                              |
| ... enable                   | true            | A boolean value that is used to on/off collecting statistics.                  |
| ... statsSendPeriodInSeconds | 3600            | An integer value is utilized for transmitting data at regular intervals.       |
| ... configuration            | statistics.json | Name of a configuration file for additional user statistics data (in seconds). |
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
Also, you can find example files for different OS (Linux, macOS, Windows) in `/config/statistics/` folder.

###### Subsection "deviceFiltering"

This subsection is optional and used to filter allowed devices to send data to ThingsBoard.

The Device Filtering feature allows you to define rules for filtering devices based on specific criteria.

| **Parameter**                    | **Default value** | **Description**                                       |
|:---------------------------------|:------------------|------------------------------------------------------- 
| deviceFiltering                  |                   | Configuration for device filtering                    |
| ... enable                       | **false**         | Boolean value that is used to on/off device filtering |
| ... filterFile                   | **list.json**     | Name of a configuration file                          |
| ---                              

Configuration file can look like the example below:
```json
{
  "deny": {
    "MQTT Broker Connector": [
      "Temperature Device",
      "(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)"
    ],
    "Modbus Connector": [
      "My Modbus Device"
    ]
  },
  "allow": {
    "MQTT Broker Connector": [
      "My Temperature Sensor"
    ]
  }
}
```
The configuration above consists of two main properties: "deny" and "allow". Each property contains a 
set of connector types as keys, with corresponding arrays of device names as their values.

The "deny" property is used to specify devices that should be denied access to certain connector names. 
The devices listed under each connector name will be blocked from accessing the specified connector.

The structure of the "deny" property is as follows:
```json
"deny": {
  "<Connector Name>": [
    "<Device Name 1>",
    "<Device Name 2>",
    ...
  ],
  ...
}
```
Example:
```json
"deny": {
  "MQTT Broker Connector": [
    "Temperature Device",
    "(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)"
  ],
  "Modbus Connector": [
    "My Modbus Device"
  ]
}
```

In the above example, the following rules are defined:
* The device named "Temperature Device" and any device with an email address format are denied access to the "MQTT Broker Connector".
* The device named "My Modbus Device" is denied access to the "Modbus Connector".

The "allow" property is used to specify devices that should be explicitly allowed to access certain connector names. 
The devices listed under each connector name will have unrestricted access to the specified connector.

The structure of the "allow" property is as follows:
```json
"allow": {
  "<Connector Name>": [
    "<Device Name 1>",
    "<Device Name 2>",
    ...
  ],
  ...
}
```

Example:
```json
"allow": {
  "MQTT Broker Connector": [
    "My Temperature Sensor"
  ]
}
```

In the above example, the following rule is defined:
* The device named "My Temperature Sensor" is allowed access to the "MQTT Broker Connector".

The Device Filtering feature provides a flexible way to define rules for allowing or denying access 
to connector types based on device names. By using the "deny" and "allow" properties, you can easily control device 
access within your gateway.


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
Username and password<small>Basic security</small>%,%usernamepassword%,%templates/iot-gateway/security-usernamepassword-config.md%br%
TLS + Access Token<small>Advanced security</small>%,%tlsToken%,%templates/iot-gateway/security-tls-token-config.md%br%
TLS + Private Key<small>Advanced security</small>%,%tls%,%templates/iot-gateway/security-tls-config.md{% endcapture %}

There are 3 variants of security subsection:

{% include content-toggle.liquid content-toggle-id="securityConfig" toggle-spec=securitytogglespec %}

###### Subsection "provisioning"

{% capture provisioningtogglespec %}
Auto<small>Server generated access token</small>%,%auto%,%templates/iot-gateway/provisioning-auto-config.md%br%
Access Token<small>Predefined access token</small>%,%accesstoken%,%templates/iot-gateway/provisioning-access-token-config.md%br%
Basic MQTT<small>Basic MQTT Credentials</small>%,%basicmqtt%,%templates/iot-gateway/provisioning-basic-mqtt-config.md%br%
X.509 Certificate<small></small>%,%x509%,%templates/iot-gateway/provisioning-x-509-config.md%br%{% endcapture %}

There are 4 options of provisioning configuration (you can read more about provisioning in [the official documentation](/docs/user-guide/device-provisioning/)):
{% include content-toggle.liquid content-toggle-id="provisioningConfig" toggle-spec=provisioningtogglespec %}

#### Storage configuration

Configs in storage subsection provides configuration for saving incoming data before it will be send to ThingsBoard platform.
  
There are 2 variants for this section: memory or file.
1. **Memory** storage - Received data saving to the RAM memory.
2. **File** storage - Received data saving to the hard drive.
3. **SQLite** storage - Received data saving to the .db file.

{% capture storagetogglespec %}
Memory storage<br> <small>(recommended if there is not enough disk space)</small>%,%memory%,%templates/iot-gateway/storage-memory-config.md%br%
File storage<br> <small>(recommended for more persistent)</small>%,%file%,%templates/iot-gateway/storage-file-config.md%br%
SQLite storage<br> <small>(recommended for more speed)</small>%,%sqlite%,%templates/iot-gateway/sqlite-storage-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="storageConfig" toggle-spec=storagetogglespec %}

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

```json
...
"connectors": [
  {
    "type": "mqtt",
    "name": "MQTT Broker Connector",
    "configuration": "mqtt.json"
  },
  {
    "type": "modbus",
    "name": "Modbus Connector",
    "configuration": "modbus.json"
  },
  {
    "type": "modbus",
    "name": "Modbus Serial Connector",
    "configuration": "modbus_serial.json"
  },
  {
    "type": "opcua",
    "name": "OPC-UA Connector",
    "configuration": "opcua.json"
  }
]
...
```

**Note:** You can use several similar connectors at same time, but you should provide different names and configuration files to them. 

If you need different type of connector, you can implement it using [customization guide](/docs/iot-gateway/custom/) or email us: <info@thingsboard.io>.
