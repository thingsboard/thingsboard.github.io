Json converter is default converter, it looks for deviceName, deviceType, attributes and telemetry in the incoming message from the broker, with rules, described in this subsection:

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type                        | **json**                  | Provides information to connector that default converter will be uses for converting data from topic.                                   |
| filterExpression            |                           | Not implemented yet.                                                                                                                    |
| deviceNameJsonExpression    | **${$.serialNumber}**     | JSON-path expression, uses for looking device name in the incoming message (parameter "serialNumber" will be used as device name).      |
| deviceTypeJsonExpression    | **${$.sensorType}**       | JSON-path expression, uses for looking device type in the incoming message (parameter "sensorType" will be used as device type).        |
| timeout                     | **60000**                 | Timeout for connection to broker.                                                                                                       |
| attributes                  |                           | This subsection contains parameters of the incoming message, that will be interpreted as attributes for the device.                     |
| ... type                    | **string**                | Type of incoming data for a current attribute.                                                                                          |
| ... key                     | **model**                 | Attribute name, that will sends to ThingsBoard instance.                                                                                |
| ... value                   | **${$.model}**            | JSON-path expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter. |
| timeseries                  |                           | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.                      |
| ... type                    | **double**                | Type of incoming data for a current telemetry.                                                                                          |
| ... key                     | **temperature**           | Telemetry name, that will sends to ThingsBoard instance.                                                                                |
| ... value                   | **${$.temperature}**      | JSON-path expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter. |
|--- 

{% capture difference %}
<br>
**Parameters in attributes and telemetry section may differ from those presented above, but will have the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}


Converter subsection in the configuration will look like:

```json
      "converter": {
        "type": "json",
        "filterExpression": "",
        "deviceNameJsonExpression": "${SerialNumber}",
        "deviceTypeJsonExpression": "${SensorType}",
        "timeout": 60000,
        "attributes": [
          {
            "type": "string",
            "key": "test_key",
            "value": "${SerialNumber}"
          }
        ]
      }
```