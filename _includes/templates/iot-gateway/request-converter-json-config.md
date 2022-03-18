Json converter is default converter, it looks for deviceName, deviceType, attributes and telemetry in the incoming message from the broker, with rules, described in this subsection:

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type                        | **json**                  | Provides information to connector that default converter will be uses for converting data from response.                                     |
| deviceNameJsonExpression    | **SD8500**                | Simple JSON expression, uses for looking device name in the incoming message (string "SD8500" will be used as device name).               |
| deviceTypeJsonExpression    | **SD**                    | Simple JSON expression, uses for looking device type in the incoming message (string "SD" will be used as device type).                   |
| timeout                     | **60000**                 | Timeout for triggering "Device Disconnected" event                                                                                        |
| attributes                  |                           | This subsection contains parameters of the incoming message, that will be interpreted as attributes for the device.                       |
| ... type                    | **string**                | Type of incoming data for a current attribute.                                                                                            |
| ... key                     | **serialNumber**          | Attribute name, that will sends to ThingsBoard instance.                                                                                  |
| ... value                   | **${serial}**             | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter. |
| timeseries                  |                           | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.                        |
| ... type                    | **string**                | Type of incoming data for a current telemetry.                                                                                            |
| ... key                     | **Maintainer**            | Telemetry name, that will sends to ThingsBoard instance.                                                                                  |
| ... value                   | **${Developer}**          | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter. |
|--- 

{% capture difference %}
<br>
**Parameters in attributes and telemetry section may differ from those presented above, but will have the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}


Mapping subsection will look like:

```json
    {
      "url": "getdata",
      "httpMethod": "GET",
      "httpHeaders": {
        "ACCEPT": "application/json"
      },
      "allowRedirects": true,
      "timeout": 0.5,
      "scanPeriod": 5,
      "converter": {
        "type": "json",
        "deviceNameJsonExpression": "SD8500",
        "deviceTypeJsonExpression": "SD",
        "attributes": [
          {
            "key": "serialNumber",
            "type": "string",
            "value": "${serial}"
          }
        ],
        "telemetry": [
          {
            "key": "Maintainer",
            "type": "string",
            "value": "${Developer}"
          }
        ]
      }
    }
```

Also, you can combine values from MQTT message in attributes, telemetry and serverSideRpc section, for example:
```json
{
      "url": "getdata",
      "httpMethod": "GET",
      "httpHeaders": {
        "ACCEPT": "application/json"
      },
      "allowRedirects": true,
      "timeout": 0.5,
      "scanPeriod": 5,
      "converter": {
        "type": "json",
        "deviceNameJsonExpression": "SD8500",
        "deviceTypeJsonExpression": "SD",
        "attributes": [],
        "telemetry": [
          {
            "type": "double",
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
