The table below describes the RPC request parameters:

| **Parameter** | **Description**                                                       |
|:--------------|:----------------------------------------------------------------------
| tag           | RPC method name                                                       |
| type          | Type of value                                                         | 
| functionCode  | The function to use in data processing, specifically Modbus functions |
| objectsCount  | Count of objects to write or read                                     | 
| address       | Object address                                                        |
| ---           

![image](https://img.thingsboard.io/gateway/modbus-connector/rpc-requests-advanced-1-ce.png)

<br>
Example:

```json
"rpc": [
  {
    "tag": "setValue",
    "type": "bits",
    "functionCode": 5,
    "objectsCount": 1,
    "address": 31
  }
]
```