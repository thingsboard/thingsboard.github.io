Json converter is default converter, it looks for deviceName, deviceType, attributes and telemetry in the incoming message from the broker, with rules, described in this subsection:

| **Parameter**             | **Default value**     | **Description**                                                                                                                                                                                                                       |
|:--------------------------|:----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| type                      | **json**              | Provides information to connector that default converter will be uses for converting data from response.                                                                                                                              |
| deviceNameJsonExpression  | **SD8500**            | Simple JSON expression, uses for looking device name in the incoming message (string "SD8500" will be used as device name).                                                                                                           |
| deviceTypeJsonExpression  | **SD**                | Simple JSON expression, uses for looking device type in the incoming message (string "SD" will be used as device type).                                                                                                               |
| timeout                   | **60000**             | Timeout for triggering "Device Disconnected" event                                                                                                                                                                                    |
| attributes                |                       | This subsection contains parameters of the incoming message, that will be interpreted as attributes for the device.                                                                                                                   |
| ... type                  | **string**            | Type of incoming data for a current attribute.                                                                                                                                                                                        |
| ... key                   | **serialNumber**      | Attribute name, that will sends to ThingsBoard instance.                                                                                                                                                                              |
| ... value                 | **${serial}**         | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter.                                                                                             |
| timeseries                |                       | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.                                                                                                                    |
| ... type                  | **string**            | Type of incoming data for a current telemetry.                                                                                                                                                                                        |
| ... key                   | **Maintainer**        | Telemetry name, that will sends to ThingsBoard instance.                                                                                                                                                                              |
| ... value                 | **${Developer}**      | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter.                                                                                             |
| ... type                  | **string**            | Type of incoming data for a current telemetry.                                                                                                                                                                                        |
| ... key                   | **Vendor**            | Telemetry name, that will sends to ThingsBoard instance.                                                                                                                                                                              |
| ... value                 | **${Client}**         | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter.                                                                                             |
| ... tsField               | **${timestampField}** | **Optional.** JSON-path expression for field that carries a datetime string. If not present, the `ts` or `timestamp` properties from incoming message will be used as timestamp for data entry.                                       |                                                                                                                     
| ... dayfirst              | **false**             | **Optional.** Points out that the first number is the **day** (`DD.MM.YY HH:mm:ss.SSS`).<br>• `false` → `10.11.24 10:10:10.252` → **11 Oct 2024 10:10:10.252** <br>• `true`  → `10.11.24 10:10:10.252` → **10 Nov 2024 10:10:10.252** |
| ... yearfirst             | **false**             | **Optional.** Points out that the first number is the **year** (`DD.MM.YY HH:mm:ss.SSS`).<br>• `false` → follows `dayfirst` rule<br>• `true`  → `10.11.24 10:10:10.252` → **24 Nov 2010 10:10:10.252**                                |
| ---                       

{% capture difference %}
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
      },
      {
        "key": "Vendor",
        "type": "string",
        "value": "${Client}",
        "tsField": "${timestampField}",
        "dayfirst": true
      }
    ]
  }
}
```

{% capture tsField %}
**Note**: In **Mapping subsection** configuration section for `Vendor` timeseries key illustrates how to use the `tsField` and `dayfirst` options.
{% endcapture %}
{% include templates/info-banner.md content=tsField %}

Also, you can combine values from HTTP request in attributes, telemetry and serverSideRpc section, for example:
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
