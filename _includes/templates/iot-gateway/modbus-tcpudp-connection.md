| **Parameter**                 | **Default value**                       | **Description**                                                                       |
|:-|:-|-
| name                          | **Modbus Default Server**               | Name of connector to server.                                                          |
| host                          | **127.0.0.1**                           | Hostname or ip address of Modbus server.                                              |
| port                          | **5021**                                | Port of Modbus server for connect.                                                    |
| type                          | **tcp**                                 | Type of connection may be **tcp**, **udp** or **serial**.                             |
| method                        | **socket**                              | Type of a framer **socket** or **rtu**, if needed.                                    |
| timeout                       | **35**                                  | Timeout in seconds for connecting to Modbus server.                                   |
| byteOrder                     | **LITTLE**                              | Order of bytes to read.                                                               |
| wordOrder                     | **LITTLE**                              | Order of words in case of reading several registers.                                  |
|---