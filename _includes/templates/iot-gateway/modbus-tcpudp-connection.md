| **Parameter**                 | **Default value**                       | **Description**                                                                       |
|:-|:-|-
| name                          | **Modbus Default Server**               | Name of connector to server.                                                          |
| type                          | **tcp**                                 | Type of connection may be **tcp**, **udp** or **serial**.                             |
| host                          | **127.0.0.1**                           | Hostname or ip address of Modbus server.                                              |
| port                          | **5020**                                | Port of Modbus server for connect.                                                    |
| timeout                       | **35**                                  | Timeout in seconds for connecting to Modbus server.                                   |
| method                        | **socket**                              | Type of a framer **socket** or **rtu**, if needed.                                    |
| byteOrder                     | **BIG**                               | Order of bytes to read.                                                                 |
|---