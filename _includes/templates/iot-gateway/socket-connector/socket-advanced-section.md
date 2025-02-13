This configuration section contains settings of the socket, such as:

| **Parameter** | **Default value**         | **Description**                       |
|:--------------|:--------------------------|---------------------------------------|
| name          | **TCP Connector Example** | Connector name                        |
| type          | **TCP**                   | Socket type, can either be TCP or UDP |
| address       | **127.0.0.1**             | Connector bound address               |
| port          | **50000**                 | Connector bound port                  |
| bufferSize    | **1024**                  | Size of received data block buffer    |
| ---           |                           |                                       |

Configuration section will look like this:

```json
{
  "type": "TCP",
  "address": "127.0.0.1",
  "port": 50000,
  "bufferSize": 1024,
  ...
}
```

![image](/images/gateway/socket-connector/socket-advanced-configuration-section-1-ce.png)
