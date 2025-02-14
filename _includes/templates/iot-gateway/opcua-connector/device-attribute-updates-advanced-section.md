| **Parameter** | **Default value**                                 | **Description**                                                                                           |
|:--------------|:--------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| key           | **deviceName**                                    | Shared attribute name on the platform.                                                                    |
| type          | **path**                                          | Source of the shared attribute (can be [path](#path-types), [identifier](#identifier-types) or constant). |
| value         | **Root\\\\.Objects\\\\.Device1\\\\.serialNumber** | Regular expression or identifier, is used for looking the node for a current device.                      |
| ---           |                                                   |                                                                                                           |

This subsection in configuration file looks like this:

```json
"attributes_updates": [
    {
      "key": "deviceName",
      "type": "path",
      "value": "Root\\.Objects\\.Device1\\.serialNumber"
    }
]
```

**image**
