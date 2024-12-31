The configuration in this unit provides settings for processing data on Modbus server. These settings will be interpreted in ThingsBoard platform instance as attributes/time series of the device.

The table below describes the attributes and time series parameters:

| **Parameter** | **Description**                                                       |
|:--------------|:----------------------------------------------------------------------
| tag           | Key name                                                              |
| type          | Type of value                                                         | 
| functionCode  | The function to use in data processing, specifically Modbus functions |
| objectsCount  | Count of objects to write                                             | 
| address       | Object address                                                        |
| ---           

![image](https://img.thingsboard.io/gateway/modbus-connector/attributes-advanced-1-ce.png)

<br>
Example of attributes section:

```json
"attributes": [
  {
    "tag": "string_read",
    "type": "string",
    "functionCode": 4,
    "objectsCount": 4,
    "address": 1
  }
]
```

Example of time series section:

```json
"timeseries": [
  {
    "tag": "16uint_read",
    "type": "16uint",
    "functionCode": 4,
    "objectsCount": 2,
    "address": 18
  },
]
```