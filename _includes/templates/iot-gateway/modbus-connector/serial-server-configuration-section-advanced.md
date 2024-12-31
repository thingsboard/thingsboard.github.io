The table below describes the parameters required to configure serial connection for slave:

| **Parameter** | **Default value**        | **Description**                                                                            |
|:--------------|:-------------------------|--------------------------------------------------------------------------------------------
| port          |                          | Port of Modbus server for connection                                                       |
| method        | **socket**               | Type of application data unit - **RTU** or **ASCII**                                       |
| unitId        | **0**                    | ID of current slave on Modbus                                                              |
| deviceName    | **Modbus Slave Example** | Name of the current slave **Don't use "Gateway" as the value of "Device name" parameter!** |
| deviceProfile | **default**              | Device profile of the current slave                                                        |
| pollPeriod    | **5000**                 | Period in milliseconds to check attributes and telemetry on the slave                      |
| baudrate      | **4800**                 | Baudrate for The baud rate to use for the serial device                                    |
| ---           

![image](https://img.thingsboard.io/gateway/modbus-connector/serial-server-configuration-section-advancd-1-ce.png)