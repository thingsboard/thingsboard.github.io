Json converter is the default converter, it looks for '**deviceName**', '**deviceType**', attributes and telemetry in the incoming message from the broker, following the rules described in this subsection:

| **Parameter**            | **Default value**   | **Description**                                                                                                                                 |
|:-------------------------|:--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| type                     | **json**            | Provides information to connector that default converter is to be used for converting data from topic.                                          |
| deviceNameExpression | **${serialNumber}** | Simple JSON expression, is used for looking up device name in the incoming message (parameter "serialNumber" will be used as the device name).  |
| deviceProfileExpression | **${sensorType}**   | Simple JSON expression, is used for looking up device type in the incoming message (parameter "sensorType" will be used as the device type).    |
| timeout                  | **60000**           | Timeout for triggering "Device Disconnected" event                                                                                              |
| attributes:              |                     | This subsection contains parameters of the incoming message, to be interpreted as attributes for the device.                                    |
| ... type                 | **string**          | Type of incoming data for a current attribute.                                                                                                  |
| ... key                  | **model**           | Attribute name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                | **${sensorModel}**  | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
|                          |                     |                                                                                                                                                 |
| ... type                 | **string**          | Type of incoming data for a current attribute.                                                                                                  |
| ... key                  | **${sensorModel}**  | Simple JSON expression, is used for looking up value in the incoming message, to be used as attribute name.                                     |
| ... value                | **on**              | Attribute value, to be sent to ThingsBoard instance.                                                                                            |
| timeseries:              |                     | This subsection contains parameters of the incoming message, to be interpreted as telemetry for the device.                                     |
| ... type                 | **integer**         | Type of incoming data for a current telemetry.                                                                                                  |
| ... key                  | **temperature**     | Telemetry name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                | **${temp}**         | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
|                          |                     |                                                                                                                                                 |
| ... type                 | **integer**         | Type of incoming data for a current telemetry.                                                                                                  |
| ... key                  | **humidity**        | Telemetry name, to be sent to ThingsBoard instance.                                                                                             |
| ... value                | **${hum}**          | Simple JSON expression, is used for looking up value in the incoming message, to be sent to ThingsBoard instance as the value of key parameter. |
| ---                      

{% capture difference %}
**Parameters in attributes and telemetry section may differ from those presented above, but will follow the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture difference %}
**Note**: The device profile is set when the device is created. Changing the device profile using a Gateway is not supported.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Mapping subsection for Example 1 will look like:

```json
{
  "topicFilter": "sensor/data",
  "subscriptionQos": 1,
  "converter": {
    "type": "json",
    "deviceInfo": {
      "deviceNameExpressionSource": "message",
      "deviceNameExpression": "${serialNumber}",
      "deviceProfileExpressionSource": "message",
      "deviceProfileExpression": "${sensorType}"
    },
    "sendDataOnlyOnChange": false,
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
        "type": "string",
        "key": "temperature",
        "value": "${temp}"
      },
      {
        "type": "double",
        "key": "humidity",
        "value": "${hum}"
      },
      {
        "type": "string",
        "key": "combine",
        "value": "${hum}:${temp}"
      }
    ]
  }
}
```

![image](https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-advanced-json-1-ce.png)

Mapping for Example 2 will look like:

```json
"topicFilter": "sensor/+/data",
  "subscriptionQos": 1,
  "converter": {
    "type": "json",
    "deviceInfo": {
      "deviceNameExpressionSource": "topic",
      "deviceNameExpression": "(?<=sensor/)(.*?)(?=/data)",
      "deviceProfileExpressionSource": "constant",
      "deviceProfileExpression": "Thermometer"
    },
    "sendDataOnlyOnChange": false,
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
        "type": "string",
        "key": "humidity",
        "value": "${hum}"
      }
    ]
  }
}
```

![image](https://img.thingsboard.io/gateway/mqtt-connector/data-conversion-advanced-json-2-ce.png)