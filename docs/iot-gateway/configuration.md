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
    modbus.json                                   - Default configuration file for Modbus connector.
    mqtt.json                                     - Default configuration file for MQTT connector.
    ble.json                                      - Default configuration file for BLE connector.
    ...
    opcua.json                                    - Default configuration file for OPC-UA connector.
    tb_gateway.yaml                               - Default main configuration file for gateway. 

/var/lib/thingsboard_gateway/extensions           - Default folder for custom connectors/converters.                      
    modbus                                        - Default folder for Modbus custom connectors/converters.
    mqtt                                          - Default folder for MQTT custom connectors/converters.
        __init__.py                               - Default python package file, needed for correct imports.
        custom_uplink_mqtt_converter.py           - Example of custom Mqtt converter.
    ...
    opcua                                         - Default folder for OPC-UA custom connectors/converters.

/var/log/thingsboard-gateway                      - Default configuration folder
    connector.log                                 - Default logs for default connectors.
    converter.log                                 - Default logs for default converters.
    extension.log                                 - Default logs for custom connectors.
    service.log                                   - Default logs for the main gateway service.
    storage.log                                   - Default logs for storage.
    tb_connection.log                             - Default logs for connection to the ThingsBoard instance.
```
        

### Docker container

Directories structure like in DEB/RPM package, but you need mount the extensions  and config folders into container.


## General configuration file

The main configuration file that is used for connection to ThingsBoard platform instance and enable/disable connectors.  
<br>
<details>
<summary>
<b>Example of main configuration file. Press to show.</b>
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
   
  -
    name: BLE Connector
    type: ble
    configuration: ble.json

{% endhighlight %}
<b><i>Spaces identity are important.</i></b>  
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

  -
    name: BLE Connector
    type: ble
    configuration: ble.json

  -
    name: OPC-UA
    type: opcua
    configuration: opcua.json

  -
    name: Modbus Serial Connector
    type: modbus
    configuration: modbus_serial.json

  -
    name: Custom Serial Connector
    type: serial
    configuration: custom_serial.json
    class: CustomSerialConnector
```

**Notice:** You can use several similar connectors at same time, but you should provide different names and configuration files to them. 

If you need different type of connector, you can implement it by yourself, using custom connector or email us: <info@thingsboard.io>.
