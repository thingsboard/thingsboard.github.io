| **Parameter** | **Default value**  | **Description**                                                                                                    |
|:--------------|:-------------------|--------------------------------------------------------------------------------------------------------------------|
| addressFilter | *.*                | Used to filter the allowed IP addresses to connect to the connector.                                               |
| deviceName    | **Device Example** | Name for the device in ThingsBoard.                                                                                |
| deviceType    | **default**        | Device type for ThingsBoard, by default this parameter is absent, but you can add it.                              |
| encoding      | **utf-8**          | Encoding used when writing string data to storage.                                                                 |
| ---           |                    |                                                                                                                    |

Example:
```json
{
  "address": "127.0.0.1:50001",
  "deviceName": "Device Example",
  "deviceType": "default",
  "encoding": "utf-8",
  ...
```

![image](https://img.thingsboard.io/gateway/socket-connector/socket-subsection-device-advanced-1-ce.png)
