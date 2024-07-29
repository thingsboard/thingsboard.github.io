This section in configuration file looks like:

```json
  "attributeUpdates": [
    {
      "retain": false,
      "deviceNameFilter": ".*",
      "attributeFilter": "firmwareVersion",
      "topicExpression": "sensor/${deviceName}/${attributeKey}",
      "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
    }
  ]
```

![image](https://img.thingsboard.io/gateway/mqtt-connector/attribute-updates-example-advanced-1-ce.png)

| **Parameter**                 | **Default value**                                   | **Description**                                                                                  |
|:-|:----------------------------------------------------|--------------------------------------------------------------------------------------------------
| retain                        | **false**                                           | If set to true, the message will be set as the "last known good"/retained message for the topic. |
| deviceNameFilter              | **.\***                                             | Regular expression device name filter, used to determine, which function to execute.             |
| attributeFilter               | **uploadFrequency**                                 | Regular expression attribute name filter, used to determine, which function to execute.          |
| topicExpression               | **sensor/${deviceName}/${attributeKey}**            | JSON-path expression used for creating topic address to send a message.                          |
| valueExpression               | **{\\"${attributeKey}\\":\\"${attributeValue}\\"}** | JSON-path expression used for creating the message data that will send to topic.                 |
|---