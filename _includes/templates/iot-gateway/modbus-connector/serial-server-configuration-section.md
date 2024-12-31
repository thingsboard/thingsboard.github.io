The table below describes the parameters required to configure serial connection for slave:

| **Parameter**         | **Default value** | **Description**                                                                                                  |
|:----------------------|:------------------|------------------------------------------------------------------------------------------------------------------
| Port                  |                   | Port of Modbus server for connection                                                                             |
| Method                | **Socket**        | Type of application data unit - **RTU** or **ASCII**                                                             |
| Baudrate              | **4800**          | Baudrate for The baud rate to use for the serial device                                                          |
| Strict                | **true**          | Use Inter char timeout for baudrates <= 19200                                                                    |
| Unit ID               | **1**             | ID of current slave on Modbus                                                                                    |
| Device name           | **Temp Sensor**   | Name of the current slave **Don't use "Gateway" as the value of "Device name" parameter!**                       |
| Device profile        | **default**       | Device profile of the current slave                                                                              |
| Send data to platform | **false**         | If set to **TRUE**, the Gateway will perform autoconfiguration and send values to ThingsBoard every poll period. |
| ---                   

![image](https://img.thingsboard.io/gateway/modbus-connector/serial-server-configuration-section-1-ce.png)