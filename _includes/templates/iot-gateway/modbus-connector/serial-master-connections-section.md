The table below describes the parameters required to configure serial connection for slave:

| **Parameter**  | **Default value** | **Description**                                                                                                          |
|:---------------|:------------------|--------------------------------------------------------------------------------------------------------------------------
| Port           |                   | Port of Modbus server for connection                                                                                     |
| Method         | **Socket**        | Type of a framer **Socket** or **RTU**, if needed                                                                        |
| Baudrate       | **4800**          | Baudrate for The baud rate to use for the serial device                                                                  |
| Bytesize       | **5**             | The number of bits in a byte of serial data. This can be one of 5, 6, 7, or 8                                            |
| Stopbits       | **1**             | The number of bits sent after each character in a message to indicate the end of the byte                                |
| Parity         | **None**          | The type of checksum to use to verify data integrity. This can be on of the following: (**E**)ven, (**O**)dd, (**N**)one |
| Strict         | **true**          | Use Inter char timeout for baudrates <= 19200                                                                            |
| Unit ID        | **1**             | ID of current slave on Modbus                                                                                            |
| Device name    | **Temp Sensor**   | Name of the current slave                                                                                                |
| Device profile | **default**       | Device profile of the current slave                                                                                      |
| ---            

![image](https://img.thingsboard.io/gateway/modbus-connector/serial-server-connection-section.png)