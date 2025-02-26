| **Parameter**           | **Default value** | **Description**                                                                                        |
|:------------------------|:------------------|--------------------------------------------------------------------------------------------------------|
| type                    | **shared**        | The type of requested attribute, can be either “shared” or “client”.                                   |
| requestExpression       | **${[0:3]==atr}** | The expression that is used to determine if the request from the device is "Attribute Request" or not. |
| attributeNameExpression | **[3:]**          | The expression that is used to get the name of the requested attribute from the received data.         |
| ---                     |                   |                                                                                                        |

Configuration of this subsection looks like this:

```json
"attributeRequests": [
  {
    "type": "shared",
    "requestExpression": "${[0:3]==atr}",
    "attributeNameExpression": "[3:]"
  }
]
```

Additionally, you can request multiple attributes at once. Simply add one more slice expression to 
attributeNameExpression parameter. For example, if we want to request two shared attributes in a single request, our config 
will look like this:

```json
"attributeRequests": [
  {
    "type": "shared",
    "requestExpression": "${[0:3]==atr}",
    "attributeNameExpression": "[4:19][20:]"
  }
]
```

This means that we have to send the following message to request two shared attributes:
`atr sharedAttribute sharedAttribute1`

![image](/images/gateway/socket-connector/socket-subsection-attribute-request-advanced-1-ce.png)
