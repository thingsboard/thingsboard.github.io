| **Parameter**                 | **Default value**                     | **Description**                                                                                                               |
|:-|:-|-
| deviceName                    | **Gateway**                           | Device name                                                                                                                   |
| deviceType                    | **default**                           | Device type                                                                                                                   |
| type                          | **serial**                            | Type of connection may be **tcp**, **udp** or **serial**.                                                                     |
| method                        | **rtu**                               | Type of application data unit - **rtu** or **ascii**                                                                          |
| port                          | **/dev/ttyUSB0**                      | Serial port for connection.                                                                                                   |
| baudrate                      | **19200**                             | Baudrate for The baud rate to use for the serial device.                                                                      |
| byteOrder                     | **BIG**                               | Order of bytes to read.                                                                                                       |
| unitId                        | **0**                                 | Unit id of the device                                                                                                         |
| pollPeriod                    | **5000**                              | Period in milliseconds for check the attributes and the telemetry.                                                            |
| sendDataToThingsBoard         | **false**                             | If set to TRUE, Gateway make autoconfiguration and every <pollPeriod> ms send values to ThingsBoard                           |
|---
