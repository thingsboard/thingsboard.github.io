The table below describes the parameters required to configure TCP connection for slave:

| **Parameter** | **Default value** | **Description**                                   |
|:--------------|:------------------|---------------------------------------------------
| host          | **127.0.0.1**     | Hostname or ip address of Modbus server           |
| port          | **5021**          | Port of Modbus server for connection              |
| method        | **Socket**        | Type of a framer **Socket** or **RTU**, if needed |
| unitId        | **1**             | ID of current slave on Modbus                     |
| deviceName    | **Temp Sensor**   | Name of the current slave                         |
| deviceProfile | **default**       | Device profile of the current slave               |
| ---           

![image](https://img.thingsboard.io/gateway/modbus-connector/tcp-master-connections-advanced-ce.png)

<br>
Example:

```json
"master": {
    "slaves": [
        {
            "host": "127.0.0.1",
            "port": 5021,
            "method": "socket",
            "unitId": 1,
            "deviceName": "Temp Sensor",
            "deviceType": "default",
        }
    ]
}
```