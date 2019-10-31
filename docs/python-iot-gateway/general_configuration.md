---
layout: docwithnav
title: Python IoT Gateway Configuration
description: Installation structure and configuration of ThingsBoard IoT Gateway 

---


* TOC
{:toc}


## Installation structure

<br>

Installation structure can be different, caused by different types of installations:

1 - DEB/RPM package

2 - Docker container

3 - Package manager installation (pip3)

case 1:

```text
..
    /etc/thingsboard-gateway/config
        logs.conf
        modbus.json
        mqtt.json
        ...
        opcua.json
        tb_gateway.yaml
..
    /var/lib/thingsboard_gateway/extensions
        modbus
        mqtt
            __init__.py
            custom_uplink_mqtt_converter.py
        ...
        opcua
..
    /var/log/thingsboard-gateway
        connector.log
        extension.log
        service.log
        storage.log
        tb_connection.log
```
        

Example of main configuration file:

```yaml
thingsboard-client:
  host: 127.0.0.1
  port: 1883
  security:
    accessToken: FUH2Fonov6eajSHi0Zyw
storage:
  ## properties for memory storage
  type: memory
  read_records_count: 10
  max_records_count: 1000
  ## properties for file storage
#  type: file
#  data_folder_path: ./data/
#  max_file_count: 5
#  max_read_records_count: 6
#  max_records_per_file: 14
#  no_records_sleep_interval: 5000
connectors:

  -
    name: MQTT Broker Connector
    type: mqtt
    configuration: mqtt.json
#
#  -
#    name: Modbus Connector
#    type: modbus
#    configuration: modbus.json

#  -
#    name: OPC-UA Connector
#    type: opcua
#    configuration: opcua.json
```

The main configuration file that is used to setup connection to ThingsBoard server and enable/disable connectors.


Sections in config file:
thingsboard-client - Configuration for connecting to ThingsBoard server
storage - Configuration for local storage of incoming data from devices
connectors - Array of connectors (Protocols) uses. 

Parameters in "thingsboard-client" section:



|**Parameter**             | **Value**                                    |   **Description**                                              |
|---                       |---                                           |---                                                             |
| ***thingsboard-client*** |                                              | Configuration for connection to server.                        |
| host                     | **127.0.0.1**                                | Hostname or ip address of ThingsBoard server.                  |
| port                     | **1883**                                     | Port of mqtt service on ThingsBoard server.                    |
| ***security***           |                                              | There are 2 variants - accessToken or TLS.                     |
|                          |          *Variant with accessToken:*         |                                                                |
| accessToken              | **FUH2Fonov6eajSHi0Zyw**                     | Access token for device from ThingsBoard server.               |
|                          |          *Variant with TLS:*                 |                                                                |
| caCert                   | **/etc/thingsboard-gateway/ca.pem**          | Path to CA file.                                               |
| privateKey               | **/etc/thingsboard-gateway/privateKey.pem**  | Path to private key file.                                      |
| cert                     | **/etc/thingsboard-gateway/certificate.pem** | Path to certificate file.                                      |
| ***storage***            |                                              | Configuration for local storage of incoming data.              |
|                          |          *Variant with memory storage*       |                                                                |
| type                     | **memory**                                   | Storage type (Saving data in RAM, no save to hard drive).      |
| read_records_count       | **10**                                       | Count of messages to get from storage and send to ThingsBoard. |
| max_records_count        | **100**                                      | Maximum count of data in storage before send to ThingsBoard. * |
| ***connectors***         |                                              | Configuration for protocols. Pattern provided below.           |
| name                     | **MQTT Broker Connector**                    | Name of connector to device.                                   |
| type                     | **mqtt**                                     | Type of connector, must be like name of folder.                |
| configuration            | **mqtt.json**                                | Name of the file with configuration in config folder.          |

* - If receive data when storage have already count, described in this parameter, it will lost.

In this case - security section will looks like this: 

```yaml
  security:
    caCert: /etc/thingsboard-gateway/ca.pem
    privateKey: /etc/thingsboard-gateway/privateKey.pem
    cert: /etc/thingsboard-gateway/certificate.pem
```

or like this:

```yaml
  security:
    caCert: /etc/thingsboard-gateway/ca.pem
    cert: /etc/thingsboard-gateway/certificate.pem
```    
    

Parameters in "storage" section:
type - type of local storage, can be file or memory
