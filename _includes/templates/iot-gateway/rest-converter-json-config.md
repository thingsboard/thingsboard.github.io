Json converter is default converter, it looks for deviceName, deviceType, attributes and telemetry in the incoming request from the client, with rules, described in this subsection:

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type                        | **json**                  | Provides information to connector that default converter will be uses for converting data from the incoming request.                                                     | 
| deviceNameExpression        | **Device ${name}**        | Simple JSON expression, uses for looking device name in the incoming message (value of the parameter "name" from the request will be used as device name).               |
| deviceTypeExpression        | **default**               | Simple JSON expression, uses for looking device type in the incoming message (string "default" will be used as device type).                                             |
| attributes                  |                           | This subsection contains parameters of the incoming requests, that will be interpreted as attributes for the device.                                                     |
| ... type                    | **string**                | Type of incoming data for a current attribute.                                                                                                                           |
| ... key                     | **model**                 | Simple JSON expression, uses for looking key in the incoming data, that will send to ThingsBoard instance as attribute key.                                              |
| ... value                   | **${sensorModel}**        | Simple JSON expression, uses for looking value in the incoming data, that will send to ThingsBoard instance as value of key parameter.                                   |
| timeseries                  |                           | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.                                                       |
| ... type                    | **double**                | Type of incoming data for a current telemetry.                                                                                                                           |
| ... key                     | **temperature**           | Simple JSON expression, uses for looking key in the incoming message, that will send to ThingsBoard instance as attribute key.                                           |
| ... value                   | **${temp}**               | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter.                                |
|--- 

{% capture difference %}
<br>
**Parameters in attributes and telemetry section may differ from those presented above, but will have the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}


Mapping subsection looks like:

```json
    {
      "endpoint": "/test_device",
      "HTTPMethod": [
        "POST"
      ],
      "security":
      {
        "type": "basic",
        "username": "user",
        "password": "passwd"
      },
      "converter": {
        "type": "json",
        "deviceNameExpression": "Device ${name}",
        "deviceTypeExpression": "default",
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

Also, you can combine values from MQTT message in attributes, telemetry and serverSideRpc section, for example:
{% highlight json %}
{
      "endpoint": "/test_device",
      "HTTPMethod": [
        "POST"
      ],
      "security":
      {
        "type": "basic",
        "username": "user",
        "password": "passwd"
      },
      "converter": {
        "type": "json",
        "deviceNameExpression": "Device ${name}",
        "deviceTypeExpression": "default",
        "attributes": [],
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
          },
          {
            "type": "string",
            "key": "combine",
            "value": "${hum}:${temp}"
          }
        ]
      }
    }
{% endhighlight %}
