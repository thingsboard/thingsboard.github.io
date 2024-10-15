This configuration section contains settings of the connection to broker, such as:

| **Parameter** | **Default value**        | **Description**                                                    |
|:--------------|:-------------------------|--------------------------------------------------------------------
| name          | **Default Local Broker** | Broker name for logs and saving to persistent devices.             |
| host          | **127.0.0.1**            | MQTT broker hostname or ip address.                                |
| port          | **1883**                 | MQTT port on the broker.                                           |
| version       | **5**                    | MQTT protocol version may be 3 (3.1), 4(3.11) or 5(5)              |
| clientId      | **tb_gw_li06e**          | This is the client ID. It must be unique for each session.         |
| security      | **anonymous**            | This is the configuration for client authorization at MQTT Broker. |
| ---           

Example:

```json
"broker": {
    "name": "Default Local Broker",
    "host": "127.0.0.1",
    "port": 1883,
    "version": 5,
    "clientId": "tb_gw_li06e",
    "security": {
      "type": "anonymous"
    }
},
```
{: .copy-code}

![image](/images/gateway/mqtt-connector/connection-to-broker-advanced-section-1-ce.png)