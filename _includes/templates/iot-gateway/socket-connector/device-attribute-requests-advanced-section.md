| **Parameter**           | **Default value** | **Description**                                                                                   |
|:------------------------|:------------------|---------------------------------------------------------------------------------------------------|
| type                    | **shared**        | The type of requested attribute can be “shared” or “client”.                                      |
| requestExpression       | **${[0:3]==atr}** | The expression that is used to know if the request from the device is "Attribute Request" or not. |
| attributeNameExpression | **[3:]**          | The expression that is used to get the name of the requested attribute from the received data.    |
| ---                     |                   |                                                                                                   |

Configuration of this subsection looks like:

```json
"attributeRequests": [
  {
    "type": "shared",
    "requestExpression": "${[0:3]==atr}",
    "attributeNameExpression": "[3:]"
  }
]
```

Also, you can request multiple attributes at once. Simply add one more slice expression to 
attributeNameExpression parameter. For example, we want to request two shared attributes in one request, our config 
will look like:

```json
"attributeRequests": [
  {
    "type": "shared",
    "requestExpression": "${[0:3]==atr}",
    "attributeNameExpression": "[4:19][20:]"
  }
]
```

That means that we have to send the next message for requesting two shared attributes:
`atr sharedAttribute sharedAttribute1`

![image](/images/gateway/socket-connector/socket-subsection-attribute-request-advanced-1-ce.png)
