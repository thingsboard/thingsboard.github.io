Bytes converter is the default converter, it looks for '**deviceName**', '**deviceType**', attributes and telemetry in the incoming 
message from the broker, following the rules described in this subsection:

|**Parameter**|**Default value**| **Description**                                                                                                  |
|:-|:-|------------------------------------------------------------------------------------------------------------------
| type                 | **bytes**   | Provides information to connector that default converter is to be used for converting data from topic.           |
| deviceNameExpression | **[0:4]**   | The expression that is used to find device name in the incoming message.                                         |
| deviceTypeExpression | **[1:3]**   | The expression that is used to find device type in the incoming message.                                         |
| timeout              | **60000**   | Timeout for triggering "Device Disconnected" event.                                                              |
| attributes:          |             | This subsection contains parameters of the incoming message, to be interpreted as attributes for the device.     |
| ... type             | **raw**     | Type of incoming data for a current attribute.                                                                   |
| ... key              | **temp**    | Attribute name, to be sent to ThingsBoard instance.                                                              |
| ... value            | **[:]**     | Final view of data that will be sent to ThingsBoard, [:] - will replace to device data using python slice rules. |
| timeseries:          |             | This subsection contains parameters of the incoming message, to be interpreted as telemetry for the device.      |
| ... type             | **raw**     | Type of incoming data for a current telemetry.                                                                   |
| ... key              | **rawData** | Telemetry name, to be sent to ThingsBoard instance.                                                              |
| ... value            | **[4:]**    | Final view of data that will be sent to ThingsBoard, [:] - will replace to device data using python slice rules. |
|---

{% capture difference %}
<br>
**Parameters in attributes and telemetry section may differ from those presented above, but will have the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Note**: The device profile is set when the device is created. Changing the device profile using a Gateway is not supported.

Mapping subsection will look like:
```json
    {
      "topicFilter": "/sensor/raw_data",
      "converter": {
        "type": "bytes",
        "deviceNameExpression": "[0:4]",
        "deviceTypeExpression": "default",
        "timeout": 60000,
        "attributes": [
          {
            "type": "raw",
            "key": "rawData",
            "value": "[:]"
          }
        ],
        "timeseries": [
          {
            "type": "raw",
            "key": "temp",
            "value": "[4:]"
          }
        ]
      }
    }
```
