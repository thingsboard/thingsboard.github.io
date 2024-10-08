This section in configuration file looks like:

```json
"disconnectRequests": [
  {
    "topicFilter": "sensor/disconnect",
    "deviceInfo": {
      "deviceNameExpressionSource": "message",
      "deviceNameExpression": "${serialNumber}"
  }
},
  {
    "topicFilter": "sensor/+/disconnect",
    "deviceInfo": {
      "deviceNameExpressionSource": "topic",
      "deviceNameExpression": "(?<=sensor/)(.*?)(?=/connect)"
      }
  }
]
```
{: .copy-code}

![image](https://img.thingsboard.io/gateway/mqtt-connector/disconnect-request-example-1-ce.png)

**Name in a message from broker:**

| **Parameter**                 | **Default value**                    | **Description**                                                                                   |
|:-|:-------------------------------------|-
| topicFilter                   | **sensor/disconnect**                | Topic address on the broker, where the broker sends information about disconnected devices.       |
| deviceNameExpression      | **${serialNumber}**                  | JSON-path expression, for looking the new device name.                                            |
|---

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/disconnect" -m '{"serialNumber":"SN-001"}'
```
{: .copy-code}

**Name in topic address:**

| **Parameter**                 | **Default value**                    | **Description**                                                                                   |
|:-|:-------------------------------------|-
| topicFilter                   | **sensor/+/disconnect**              | Topic address on the broker, where the broker sends information about disconnected devices.       |
| deviceNameTopicExpression     | **(?<=sensor\/)(.\*?)(?=\/connect)** | Regular expression for looking the device name in topic path.                                     |
|---

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/disconnect" -m ''
```
{: .copy-code}