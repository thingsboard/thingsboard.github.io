The table below describes the parameters required to configure UDP connection for slave:

| **Parameter**            | **Default value**        | **Description**                                                                                                 |
|:-------------------------|:-------------------------|-----------------------------------------------------------------------------------------------------------------
| Host                     | **127.0.0.1**            | Hostname or ip address of Modbus server                                                                         |
| Port                     | **5021**                 | Port of Modbus server for connection                                                                            |
| Method                   | **Socket**               | Type of a framer **Socket** or **RTU**, if needed                                                               |
| Unit ID                  | **0**                    | ID of current slave on Modbus                                                                                   |
| Device name              | **Modbus Slave Example** | Name of the current slave                                                                                       |
| Device profile           | **default**              | Device profile of the current slave                                                                             |
| Send data to ThingsBoard | **false**                | If set to **TRUE**, the Gateway will perform autoconfiguration and send values to ThingsBoard every poll period |
| Poll period (ms)         | **5000**                 | Period in milliseconds for checking the attributes and the telemetry                                            |
| ---                      

![image](https://img.thingsboard.io/gateway/modbus-connector/udp-server-configuration-section-1-ce.png)