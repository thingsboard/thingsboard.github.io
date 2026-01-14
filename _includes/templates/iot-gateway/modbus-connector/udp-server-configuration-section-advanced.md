The table below describes the parameters required to configure UDP connection for slave:

| **Parameter**         | **Default value**        | **Description**                                                                                                 |
|:----------------------|:-------------------------|-----------------------------------------------------------------------------------------------------------------
| host                  | **127.0.0.1**            | Hostname or ip address of Modbus server                                                                         |
| port                  | **5021**                 | Port of Modbus server for connection                                                                            |
| method                | **socket**               | Type of a framer **Socket** or **RTU**, if needed                                                               |
| unitId                | **0**                    | ID of current slave on Modbus                                                                                   |
| deviceName            | **Modbus Slave Example** | Name of the current slave                                                                                       |
| deviceProfile         | **default**              | Device profile of the current slave                                                                             |
| sendDataToThingsBoard | **false**                | If set to **TRUE**, the Gateway will perform autoconfiguration and send values to ThingsBoard every poll period |
| pollPeriod            | **5000**                 | Period in milliseconds for checking the attributes and the telemetry                                            |
| ---                   

![image](https://img.thingsboard.io/gateway/modbus-connector/udp-server-configuration-section-advanced-1-ce.png)