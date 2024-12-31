The table below describes the attribute updates parameters:

| **Parameter** | **Description**                                                       |
|:--------------|:----------------------------------------------------------------------
| tag           | Shared attribute name                                                 |
| type          | Type of value                                                         | 
| functionCode  | The function to use in data processing, specifically Modbus functions |
| objectsCount  | Count of objects to write                                             | 
| address       | Object address                                                        |
| ---           

![image](https://img.thingsboard.io/gateway/modbus-connector/attribute-updates-advanced-1-ce.png)

<br>
Example:

```json
"attributeUpdates": [
  {
    "tag": "shared_attribute_write",
    "type": "32int",
    "functionCode": 6,
    "objectsCount": 2,
    "address": 29
  }
]
```