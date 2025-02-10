The “attributeRequests” configuration allows you to configure the format of the corresponding attribute data that will be 
sent to the server.

| **Parameter**          | **Default value** | **Description**                                             |
|:-----------------------|:------------------|-------------------------------------------------------------|
| encoding               | **utf-16**        | Encoding used when writing received string data to storage. |
| attributeOnThingsBoard | **sharedName**    | Shared attribute name                                       |
| ---                    |                   |                                                             |

This subsection in configuration file looks like:

```json
"attributeUpdates": [
  {
    "encoding": "utf-16",
    "attributeOnThingsBoard": "sharedName"
  }
]
```

![image](/images/gateway/socket-connector/socket-subsection-attribute-updates-advanced-1-ce.png)
