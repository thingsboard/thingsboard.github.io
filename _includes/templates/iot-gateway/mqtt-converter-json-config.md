Json converter is default converter, it looks for deviceName, deviceType, attributes and telemetry in the incoming message from the broker, with rules, described in this subsection:

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type                        | **json**                  | Provides information to connector that default converter will be uses for converting data from topic.                                     |
| deviceNameJsonExpression    | **${serialNumber}**       | Simple JSON expression, uses for looking device name in the incoming message (parameter "serialNumber" will be used as device name).      |
| deviceTypeJsonExpression    | **${sensorType}**         | Simple JSON expression, uses for looking device type in the incoming message (parameter "sensorType" will be used as device type).        |
| timeout                     | **60000**                 | Timeout for triggering "Device Disconnected" event                                                                                        |
| attributes                  |                           | This subsection contains parameters of the incoming message, that will be interpreted as attributes for the device.                       |
| ... type                    | **string**                | Type of incoming data for a current attribute.                                                                                            |
| ... key                     | **model**                 | Attribute name, that will sends to ThingsBoard instance.                                                                                  |
| ... value                   | **${sensorModel}**        | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter. |
| timeseries                  |                           | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.                        |
| ... type                    | **double**                | Type of incoming data for a current telemetry.                                                                                            |
| ... key                     | **temperature**           | Telemetry name, that will sends to ThingsBoard instance.                                                                                  |
| ... value                   | **${temp}**               | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter. |
|--- 

{% capture difference %}
<br>
**Parameters in attributes and telemetry section may differ from those presented above, but will have the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}


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