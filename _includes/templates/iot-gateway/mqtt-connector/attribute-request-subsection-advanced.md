

| **Parameter**                 | **Default value**                                     | **Description**                                                       |
|:-|:-|-
| retain                        | **false**                                             | If set to true, the message will be set as the "last known good"/retained message for the topic.    |
| topicFilter                   | **v1/devices/me/attributes/request**                  | Topic for attribute request |
| deviceNameJsonExpression      | **${serialNumber}**                                   | JSON-path expression, for looking the device name in topicFilter message |
| attributeNameJsonExpression   | **${versionAttribute}**                               | JSON-path expression, for looking the attribute name in topicFilter message |
| topicExpression               | **devices/${deviceName}/attrs**                       | JSON-path expression, for formatting reply topic |
| valueExpression               | **${attributeKey}: ${attributeValue}**                | Message that will be sent to topic from topicExpression |
|---

This section in configuration file looks like:
```json
"attributeRequests": [
  {
    "retain": false,
    "topicFilter": "v1/devices/me/attributes/request",
    "deviceNameJsonExpression": "${serialNumber}",
    "attributeNameJsonExpression": "${versionAttribute}",
    "topicExpression": "devices/${deviceName}/attrs",
    "valueExpression": "${attributeKey}: ${attributeValue}"
  }
]
```

Also, you can request multiple attributes at once. Simply add one more JSON-path to
attributeNameExpression parameter. For example, we want to request two shared attributes in one request, our config
will look like:
```json
"attributeRequests": [
  {
    "retain": false,
    "topicFilter": "v1/devices/me/attributes/request",
    "deviceNameJsonExpression": "${serialNumber}",
    "attributeNameJsonExpression": "${versionAttribute}, ${pduAttribute}",
    "topicExpression": "devices/${deviceName}/attrs",
    "valueExpression": "${attributeKey}: ${attributeValue}"
  }
]
```