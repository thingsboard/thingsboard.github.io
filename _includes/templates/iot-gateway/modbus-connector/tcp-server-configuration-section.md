The table below describes the parameters required to configure TCP connection for slave:

| **Parameter**            | **Default value** | **Description**                                                                                                 |
|:-------------------------|:------------------|-----------------------------------------------------------------------------------------------------------------
| Host                     | **127.0.0.1**     | Hostname or ip address of Modbus server                                                                         |
| Port                     | **5021**          | Port of Modbus server for connection                                                                            |
| Method                   | **Socket**        | Type of a framer **Socket** or **RTU**, if needed                                                               |
| Unit ID                  | **1**             | ID of current slave on Modbus                                                                                   |
| Device name              | **Temp Sensor**   | Name of the current slave                                                                                       |
| Device profile           | **default**       | Device profile of the current slave                                                                             |
| Send data to ThingsBoard | **false**         | If set to **TRUE**, the Gateway will perform autoconfiguration and send values to ThingsBoard every poll period |
| Poll period (ms)         | **5000**          | Period in milliseconds for checking the attributes and the telemetry                                            |
| ---                      

![image](https://img.thingsboard.io/gateway/modbus-connector/tcp-server-configuration-section-1-ce.png)