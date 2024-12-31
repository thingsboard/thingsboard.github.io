The table below describes the parameters required to configure serial connection for slave:

| **Parameter** | **Default value** | **Description**                                                                                                          |
|:--------------|:------------------|--------------------------------------------------------------------------------------------------------------------------
| port          |                   | Port of Modbus server for connection                                                                                     |
| method        | **Socket**        | Type of a framer **Socket** or **RTU**, if needed                                                                        |
| baudrate      | **4800**          | Baudrate for The baud rate to use for the serial device                                                                  |
| bytesize      | **5**             | The number of bits in a byte of serial data. This can be one of 5, 6, 7, or 8                                            |
| stopbits      | **1**             | The number of bits sent after each character in a message to indicate the end of the byte                                |
| parity        | **None**          | The type of checksum to use to verify data integrity. This can be on of the following: (**E**)ven, (**O**)dd, (**N**)one |
| strict        | **true**          | Use Inter char timeout for baudrates <= 19200                                                                            |
| unitId        | **1**             | ID of current slave on Modbus                                                                                            |
| deviceName    | **Temp Sensor**   | Name of the current slave                                                                                                |
| deviceProfile | **default**       | Device profile of the current slave                                                                                      |
| ---           

![image](https://img.thingsboard.io/gateway/modbus-connector/serial-master-connections-advanced-ce.png)

<br>
Example:

```json
"master": {
    "slaves": [
        {
            "method": "ascii",
            "baudrate": 4800,
            "stopbits": 1,
            "bytesize": 5,
            "parity": "N",
            "strict": true,
            "unitId": 1,
            "deviceName": "Temp Sensor",
            "deviceType": "default",
        }
    ]
}
```