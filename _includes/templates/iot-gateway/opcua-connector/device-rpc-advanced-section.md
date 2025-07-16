This subsection contains the configuration for RPC requests from ThingsBoard platform instance.

| **Parameter** | **Default value** | **Description**                                                                                       |
|:--------------|:------------------|-------------------------------------------------------------------------------------------------------|
| method        | **multiply**      | Name of method on OPC-UA server.                                                                      |
| arguments     |                   | Arguments for the method (if this parameter doesn't exist, arguments will be taken from RPC request). |
| ... type      | **integer**       | Type of the argument.                                                                                 |
| .. value      | **2**             | Value of the argument.                                                                                |
| ---           |                   |                                                                                                       |

This part of configuration will look like this:  

```json
"rpc_methods": [
    {
      "method": "multiply",
      "arguments": [
        {
          "type": "integer",
          "value": 2
        },
        {
          "type": "integer",
          "value": 4
        }
      ]
    }
],
```

![image](/images/gateway/opc-ua-connector/opc-ua-subsection-rpc-methods-advanced-1-ce.png)
