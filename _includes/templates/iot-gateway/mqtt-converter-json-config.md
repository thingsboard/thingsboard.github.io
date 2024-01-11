Json converter is the default converter, it looks for '**deviceName**', '**deviceType**', attributes and telemetry in the incoming message from the broker, following the rules described in this subsection:

|**Parameter**|**Default value**| **Description**                                                                                                                                 |
|:-|:-|-------------------------------------------------------------------------------------------------------------------------------------------------
| type                        | **json**                  | Provides information to connector that default converter is to be used for converting data from topic.                                          |
| deviceNameJsonExpression    | **${serialNumber}**       | Simple JSON expression, is used for looking up device name in the incoming message (parameter "serialNumber" will be used as the device name).  |
| deviceTypeJsonExpression    | **${sensorType}**         | Simple JSON expression, is used for looking up device type in the incoming message (parameter "sensorType" will be used as the device type).    |
| timeout                     | **60000**                 | Timeout for triggering "Device Disconnected" event                                                                                              |
| attributes:                 |                           | This subsection contains parameters of the incoming message, to be interpreted as attributes for the device.                                    |
| ... type                    | **string**                | Type of incoming data for a current attribute.                                                                                                  |
| ... key                     | **model**                 | Attribute name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                   | **${sensorModel}**        | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
|                             |                           |                                                                                                                                                 |
| ... type                    | **string**                | Type of incoming data for a current attribute.                                                                                                  |
| ... key                     | **${sensorModel}**        | Simple JSON expression, is used for looking up value in the incoming message, to be used as attribute name.                                     |
| ... value                   | **on**                    | Attribute value, to be sent to ThingsBoard instance.                                                                                            |
| timeseries:                 |                           | This subsection contains parameters of the incoming message, to be interpreted as telemetry for the device.                                     |
| ... type                    | **double**                | Type of incoming data for a current telemetry.                                                                                                  |
| ... key                     | **temperature**           | Telemetry name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                   | **${temp}**               | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
|                             |                           |                                                                                                                                                 |
| ... type                    | **double**                | Type of incoming data for a current telemetry.                                                                                                  |
| ... key                     | **humidity**              | Telemetry name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                   | **${hum}**                | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
|--- 

{% capture difference %}
<br>
**Parameters in attributes and telemetry section may differ from those presented above, but will follow the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Note**: The device profile is set when the device is created. Changing the device profile using a Gateway is not supported.


Mapping subsection for Example 1 will look like:

```json
    {
      "topicFilter": "/sensor/data",
      "converter": {
        "type": "json",
        "deviceNameJsonExpression": "${serialNumber}",
        "deviceTypeJsonExpression": "${sensorType}",
        "timeout": 60000,
        "attributes": [
          {
            "type": "string",
            "key": "model",
            "value": "${sensorModel}"
          },
          {
            "type": "string",
            "key": "${sensorModel}",
            "value": "on"
          }
        ],
        "timeseries": [
          {
            "type": "double",
            "key": "temperature",
            "value": "${temp}"
          },
          {
            "type": "double",
            "key": "humidity",
            "value": "${hum}"
          }
        ]
      }
    }
```

Mapping for Example 2 will look like:

```json
    {
      "topicFilter": "/sensor/+/data",
      "converter": {
        "type": "json",
        "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/data)",
        "deviceTypeTopicExpression": "Thermometer",
        "timeout": 60000,
        "attributes": [
          {
            "type": "string",
            "key": "model",
            "value": "${sensorModel}"
          }
        ],
        "timeseries": [
          {
            "type": "double",
            "key": "temperature",
            "value": "${temp}"
          },
          {
            "type": "double",
            "key": "humidity",
            "value": "${hum}"
          }
        ]
      }
    }
```