The table below describes the parameters required to configure TCP connection for slave:

| **Parameter**   | **Default value** | **Description**                                   |
|:----------------|:------------------|---------------------------------------------------
| Host            | **127.0.0.1**     | Hostname or ip address of Modbus server           |
| Port            | **5021**          | Port of Modbus server for connection              |
| Method          | **Socket**        | Type of a framer **Socket** or **RTU**, if needed |
| Unit ID         | **1**             | ID of current slave on Modbus                     |
| Device name     | **Temp Sensor**   | Name of the current slave                         |
| Device profile  | **default**       | Device profile of the current slave               |
| ---             

![image](https://img.thingsboard.io/gateway/modbus-connector/tcp-server-connection-section.png)