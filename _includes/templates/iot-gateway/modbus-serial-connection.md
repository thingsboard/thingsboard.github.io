| **Parameter**                 | **Default value**                     | **Description**                                                                                                           |
|:-|:-|---------------------------------------------------------------------------------------------------------------------------
| name                          | **Modbus Default Server**             | Name of connector to server.                                                                                              |
| type                          | **serial**                            | Type of connection may be **tcp**, **udp** or **serial**.                                                                 |
| method                        | **rtu**                               | Type of application data unit - **RTU** or **ASCII**                                                                 |
| port                          | **/dev/ttyUSB0**                      | Serial port for connection.                                                                                               |
| baudrate                      | **19200**                             | Baudrate for The baud rate to use for the serial device.                                                                  |
| stopbits                      | **1**                                 | The number of bits sent after each character in a message to indicate the end of the byte.                                |
| bytesize                      | **8**                                 | The number of bits in a byte of serial data.  This can be one of 5, 6, 7, or 8.                                           |
| parity                        | **N**                                 | The type of checksum to use to verify data integrity. This can be on of the following: (**E**)ven, (**O**)dd, (**N**)one. |
| strict                        | **true**                              | Use Inter char timeout for baudrates <= 19200.                                                                            | 
| timeout                       | **35**                                | Timeout in seconds for connecting to Modbus server.                                                                       |
| byteOrder                     | **BIG**                               | Order of bytes to read.                                                                                                   |
|---