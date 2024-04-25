| **Parameter**                 | **Default value**                     | **Description**                                                                                                          |
|:-|:-|--------------------------------------------------------------------------------------------------------------------------
| deviceName                    | **Gateway**                           | Device name                                                                                                              |
| deviceType                    | **default**                           | Device type                                                                                                              |
| type                          | **serial**                            | Type of connection may be **TCP**, **UDP** or **Serial**.                                                                |
| method                        | **rtu**                               | Type of application data unit - **RTU** or **ASCII**                                                                     |
| port                          | **/dev/ttyUSB0**                      | Serial port for connection.                                                                                              |
| baudrate                      | **19200**                             | Baudrate for The baud rate to use for the serial device.                                                                 |
| byteOrder                     | **BIG**                               | Order of bytes to read.                                                                                                  |
| unitId                        | **0**                                 | Unit id of the device                                                                                                    |
| pollPeriod                    | **5000**                              | Period in milliseconds for checking the attributes and the telemetry.                                                    |
| sendDataToThingsBoard         | **false**                             | If set to TRUE, the Gateway will perform autoconfiguration and send values to ThingsBoard every <pollPeriod> millisecond |
|---