Json converter is the default converter, it looks for '**deviceName**', '**deviceType**', attributes and telemetry in the incoming message from the broker, following the rules described in this subsection:

| **Parameter**                     | **Default value**   | **Description**                                                                                                                                 |
|:----------------------------------|:--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| type                              | **json**            | Provides information to connector that default converter is to be used for converting data from topic.                                          |
| topicFilter                       | **sensor/connect**  | Topic address on the broker, where the broker sends information about new connected devices.                                                    |
| deviceInfo                        |                     | JSON object that describe how to parce device name and device profile.                                                                          |
| ... deviceNameExpressionSource    | **message**         | Specifies the source from which the device name will be extracted ("message", "topic", "constant").                                             |
| ... deviceNameExpression          | **${serialNumber}** | Contains the expression used to extract the device name from the specified source.                                                              |
| ... deviceProfileExpressionSource | **message**         | Specifies the source from which the device profile will be extracted ("message", "topic", "constant").                                          |
| ... deviceProfileExpression       | **${serialType}**   | Contains the expression used to extract the device profile from the specified source.                                                           |
| timeout                           | **60000**           | Timeout for triggering "Device Disconnected" event                                                                                              |
| attributes:                       |                     | This subsection contains parameters of the incoming message, to be interpreted as attributes for the device.                                    |
| ... type                          | **string**          | Type of incoming data for a current attribute.                                                                                                  |
| ... key                           | **model**           | Attribute name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                         | **${sensorModel}**  | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
|                                   |                     |                                                                                                                                                 |
| ... type                          | **string**          | Type of incoming data for a current attribute.                                                                                                  |
| ... key                           | **${sensorModel}**  | Simple JSON expression, is used for looking up value in the incoming message, to be used as attribute name.                                     |
| ... value                         | **on**              | Attribute value, to be sent to ThingsBoard instance.                                                                                            |
| timeseries:                       |                     | This subsection contains parameters of the incoming message, to be interpreted as telemetry for the device.                                     |
| ... type                          | **integer**         | Type of incoming data for a current telemetry.                                                                                                  |
| ... key                           | **temperature**     | Telemetry name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                         | **${temp}**         | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
|                                   |                     |                                                                                                                                                 |
| ... type                          | **integer**         | Type of incoming data for a current telemetry.                                                                                                  |
| ... key                           | **humidity**        | Telemetry name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                         | **${hum}**          | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
| ---                               |                     |                                                                                                                                                 |

{% capture difference %}
**Parameters in attributes and telemetry section may differ from those presented above, but will follow the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Note**: The device profile is set when the device is created. Changing the device profile using a Gateway is not supported.


Mapping subsection for Example 1 will look like:

```json
    {
      "topicFilter": "sensor/data",
      "converter": {
        "type": "json",
        "deviceInfo": {
          "deviceNameExpressionSource": "message",
          "deviceNameExpression": "${serialNumber}",
          "deviceProfileExpressionSource": "message",
          "deviceProfileExpression": "${serialType}"
        },
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
            "type": "integer",
            "key": "temperature",
            "value": "${temp}"
          },
          {
            "type": "integer",
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
      "topicFilter": "sensor/+/data",
      "converter": {
        "type": "json",
        "deviceInfo": {
          "deviceNameExpressionSource": "topic",
          "deviceNameExpression": "(?<=sensor\/)(.*?)(?=\/data)",
          "deviceProfileExpressionSource": "constant",
          "deviceProfileExpression": "Thermometer"
        },
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
            "type": "integer",
            "key": "temperature",
            "value": "${temp}"
          },
          {
            "type": "integer",
            "key": "humidity",
            "value": "${hum}"
          }
        ]
      }
    }
```