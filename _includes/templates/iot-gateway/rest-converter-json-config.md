Json converter is default converter, it looks for deviceName, deviceType, attributes and telemetry in the incoming request from the client, with rules, described in this subsection:

| **Parameter**                 | **Default value**     | **Description**                                                                                                                                                                                                                                          |
|:------------------------------|:----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| type                          | **json**              | Provides information to connector that default converter will be used for converting data from the incoming request.                                                                                                                                     | 
| deviceNameExpression          | **Device ${name}**    | JSON expression used to build the device name. In this example, the connector takes the name field from the incoming request payload and produces a device name like Device SensorA                                                                      |
| deviceNameExpressionSource    | **request**           | Defines where the connector should take values for **deviceNameExpression** from: `request` means read from the incoming request payload; `constant` means treat the expression as a fixed value (no payload parsing).                                   |
| deviceProfileExpressionSource | **request**           | Defines where the connector should take values for **deviceProfileExpression** from: `request` means read from the incoming request payload; `constant` means use the expression as a fixed value.                                                       |
| deviceProfileExpression       | **default**           | JSON expression used to resolve the device profile name. With `default`, the connector will assign the device to the default profile (or use the payload field if **deviceProfileExpressionSource** is `request` and the expression references a field). |
| attributes                    |                       | This subsection contains parameters of the incoming requests, that will be interpreted as attributes for the device.                                                                                                                                     |
| ... type                      | **string**            | Type of incoming data for a current attribute.                                                                                                                                                                                                           |
| ... key                       | **model**             | Simple JSON expression, uses for looking key in the incoming data, that will send to ThingsBoard instance as attribute key.                                                                                                                              |
| ... value                     | **${sensorModel}**    | Simple JSON expression, uses for looking value in the incoming data, that will send to ThingsBoard instance as value of key parameter.                                                                                                                   |
| timeseries                    |                       | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.                                                                                                                                       |
| ... type                      | **double**            | Type of incoming data for a current telemetry.                                                                                                                                                                                                           |
| ... key                       | **temperature**       | Simple JSON expression, uses for looking key in the incoming message, that will send to ThingsBoard instance as attribute key.                                                                                                                           |
| ... value                     | **${temp}**           | Simple JSON expression, uses for looking value in the incoming message, that will send to ThingsBoard instance as value of key parameter.                                                                                                                |
| ... tsField                   | **${timestampField}** | **Optional.** JSON-path expression for field that carries a datetime string. If not present, the `ts` or `timestamp` properties from incoming message will be used as timestamp for data entry.                                                          |                                                                                                                     
| ... dayfirst                  | **false**             | **Optional.** Points out that the first number is the **day** (`DD.MM.YY HH:mm:ss.SSS`).<br>• `false` → `10.11.24 10:10:10.252` → **11 Oct 2024 10:10:10.252** <br>• `true`  → `10.11.24 10:10:10.252` → **10 Nov 2024 10:10:10.252**                    |
| ... yearfirst                 | **false**             | **Optional.** Points out that the first number is the **year** (`DD.MM.YY HH:mm:ss.SSS`).<br>• `false` → follows `dayfirst` rule<br>• `true`  → `10.11.24 10:10:10.252` → **24 Nov 2010 10:10:10.252**                                                   |
| ---                           

{% capture difference %}
**Parameters in attributes and telemetry section may differ from those presented above, but will have the same structure.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

In addition, you can send **multipart/form-data** requests while still using the `json` converter - no additional configuration is required. 
The REST connector merges multipart fields into a single key-value object, so you can reference them the same way as with **application/json**.

Below are two equivalent requests. The first one sends data as `application/json`:

```json
{
  "name": "SensorA",
  "sensorModel": "TX100",
  "temp": 23.5,
  "hum": 56.2,
  "timestampField": "10.11.24 14:30:00.000"
}
```
Send this request to the `/test_device` endpoint with the POST method, using Basic Auth with credentials (user / passwd):

```bash
curl -X POST http://127.0.0.1:5000/test_device \
  -H "Content-Type: application/json" \
  -u username:password \
  -d '{
        "name": "SensorA",
        "sensorModel": "TX100",
        "temp": 23.5,
        "hum": 56.2,
        "timestampField": "10.11.24 14:30:00.000"
      }'
```
{: .copy-code}

You can achieve the same result using a `multipart/form-data` request, where each field is sent as a separate part.
Note: when using `curl -F`, `curl` automatically sets the `Content-Type: multipart/form-data; boundary=...` header.

```bash
curl -X POST "http://127.0.0.1:5000/test_device" \
  -u "username:password" \
  -F 'name=SensorA' \
  -F 'sensorModel=TX100' \
  -F 'temp=23.5' \
  -F 'hum=56.2' \
  -F 'timestampField=10.11.24 14:30:00.000'
```
{: .copy-code}

{% capture difference %}
**Notes:**
1. **File uploads are not supported** for device attributes or telemetry. If a multipart request contains file parts, the gateway will ignore them and log an info message.
2. **Multipart form fields are received as strings.** Values will be converted to boolean, integer, or double according to the configured field type in the `json` converter.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

This is how the mapping subsection for both examples above looks like:

```json
 {
  "endpoint": "/test_device",
  "HTTPMethods": [
    "POST"
  ],
  "security": {
    "type": "basic",
    "username": "username",
    "password": "password"
  },
  "converter": {
    "type": "json",
    "deviceInfo": {
      "deviceNameExpression": "Device ${name}",
      "deviceNameExpressionSource": "request",
      "deviceProfileExpressionSource": "request",
      "deviceProfileExpression": "default"
    },
    "attributes": [
      {
        "key": "model",
        "type": "string",
        "value": "${sensorModel}"
      }
    ],
    "timeseries": [
      {
        "key": "temperature",
        "type": "double",
        "value": "${temp}"
      },
      {
        "key": "humidity",
        "type": "double",
        "value": "${hum}",
        "tsField": "${timestampField}",
        "dayfirst": true
      }
    ]
  }
}
```
{: .copy-code}

{% capture tsField %}
**Note**: In **Mapping subsection** configuration section for `humidity` timeseries key illustrates how to use the `tsField` and
`dayfirst` options.
{% endcapture %}
{% include templates/info-banner.md content=tsField %}

Also, you can combine values from HTTP request in attributes, telemetry and serverSideRpc section, for example:

```json
{
  "endpoint": "/test_device",
  "HTTPMethods": [
    "POST"
  ],
  "security": {
    "type": "basic",
    "username": "username",
    "password": "password"
  },
  "converter": {
    "type": "json",
    "deviceInfo": {
      "deviceNameExpression": "Device ${name}",
      "deviceNameExpressionSource": "request",
      "deviceProfileExpressionSource": "request",
      "deviceProfileExpression": "default"
    },
    "attributes": [
      {
        "key": "model",
        "type": "string",
        "value": "${sensorModel}"
      }
    ],
    "timeseries": [
      {
        "key": "temperature",
        "type": "double",
        "value": "${temp}"
      },
      {
        "key": "humidity",
        "type": "double",
        "value": "${hum}"
      },
      {
        "key": "combine",
        "type": "string",
        "value": "${hum}:${temp}"
      }
    ]
  }
}
```
{: .copy-code}
