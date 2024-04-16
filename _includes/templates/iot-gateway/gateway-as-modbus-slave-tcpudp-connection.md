| **Parameter**                 | **Default value**                       | **Description**                                                                                                          |
|:-|:-|--------------------------------------------------------------------------------------------------------------------------
| type                          | **tcp**                                 | Type of connection may be **TCP**, **UDP** or **Serial**.                                                                |
| host                          | **127.0.0.1**                           | Hostname or ip address of Modbus server.                                                                                 |
| port                          | **5020**                                | Port of Modbus server for connect.                                                                                       |
| method                        | **socket**                              | Type of framer **Socket** or **RTU**, if needed.                                                                         |
| deviceName                    | **Modbus_Slave_Example**                | Device name                                                                                                              |
| deviceType                    | **default**                             | Device type                                                                                                              |
| pollPeriod                    | **5000**                                | Period in milliseconds for checking the attributes and the telemetry.                                                    |
| sendDataToThingsBoard         | **false**                               | If set to TRUE, the Gateway will perform autoconfiguration and send values to ThingsBoard every <pollPeriod> millisecond |
| byteOrder                     | **BIG**                                 | Order of bytes to read.                                                                                                  |
| unitId                        | **0**                                   | Unit id of the device                                                                                                    |
|---

Also, you can configure TLS connection using the following configuration:

| **Parameter**                 | **Default value**                            | **Description**                           |
|:-|:-|-------------------------------------------
| certfile                      | **/etc/thingsboard-gateway/certificate.pem** | Path to certificate file.                 |
| keyfile                       | **/etc/thingsboard-gateway/privateKey.pem**  | Path to private key file.                 |
| password                      | **YOUR_PASSWORD**                            | Server password.                          |
| reqclicert                    | **false**                                    | Request certificate file from the client. |
|---

Configuration example:
```json
"slave": {
  "type": "tcp",
  "security": {
    "certfile": "/etc/thingsboard-gateway/certificate.pem",
    "keyfile": "/etc/thingsboard-gateway/privateKey.pem",
    "password": "YOUR_PASSWORD",
    "reqclicert": false
  },
  "host": "127.0.0.1",
  ...
```