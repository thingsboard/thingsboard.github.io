Configuration, provided in this section is used for sending RPC requests from ThingsBoard to the device.

| **Parameter**    | **Default value** | **Description**                                                             |
|:-----------------|:------------------|-----------------------------------------------------------------------------|
| methodRPC        | **rpcMethod1**    | RPC method name.                                                            |
| withResponse     | **true**          | Boolean value that determines whether to send response back to ThingsBoard. |
| methodProcessing | **write**         | Type of operation.                                                          |
| encoding         | **utf-8**         | Encoding used when writing received string data to storage.                 |
| ---              |                   |                                                                             |

This subsection in configuration file looks like this:

```json
"serverSideRpc": [
  {
    "methodRPC": "rpcMethod1",
    "withResponse": true,
    "methodProcessing": "write",
    "encoding": "utf-8"
  }
]
```

![image](https://img.thingsboard.io/gateway/socket-connector/socket-subsection-rpc-methods-advanced-1-ce.png)
