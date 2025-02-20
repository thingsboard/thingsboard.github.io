| **Parameter**                     | **Default value**                                           | **Description**                                                                                         |
|:----------------------------------|:------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| deviceNodePattern                 | **Root\\\\.Objects\\\\.Device1**                            | Regular expression, which is used for looking up the node for a current device.                         |
| deviceNodeSource                  | **path**                                                    | Source of the device node.                                                                              |
| deviceInfo                        |                                                             |                                                                                                         |
| ... deviceNameExpressionSource    | **path**                                                    | Source of the device name (can be [path](#path-types), [identifier](#identifier-types) or constant).    |
| ... deviceNameExpression          | **Device ${Root\\\\.Objects\\\\.Device1\\\\.serialNumber}** | Path to a variable with device name, which is used for looking up the device name in a variable.        |
| ... deviceProfileExpressionSource | **constant**                                                | Source of the device profile (can be [path](#path-types), [identifier](#identifier-types) or constant). |
| ... deviceProfileExpression       | **Device**                                                  | Path to a variable with device profile, is used for looking the device profile in some variable.        |
| ---                               |                                                             |                                                                                                         |

This part of the configuration will look like this:  

```json
"deviceNodePattern": "Root\\.Objects\\.Device1",
"deviceNodeSource": "path",
"deviceInfo": {
    "deviceNameExpression": "Device ${Root\\.Objects\\.Device1\\.serialNumber}",
    "deviceNameExpressionSource": "path",
    "deviceProfileExpression": "Device",
    "deviceProfileExpressionSource": "constant"
},
```

![image](https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-section-mapping-advanced-1-ce.png)
