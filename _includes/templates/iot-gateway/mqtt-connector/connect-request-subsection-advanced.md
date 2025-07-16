This section in configuration looks like:
```json
"connectRequests": [
  {
    "topicFilter": "sensor/connect",
    "deviceInfo": {
      "deviceNameExpressionSource": "message",
      "deviceNameExpression": "${serialNumber}",
      "deviceProfileExpressionSource": "constant",
      "deviceProfileExpression": "Thermometer"
    }
  }        
]
```
{: .copy-code}

![image](/images/gateway/mqtt-connector/connect-request-example-1-ce.png)

**Device name from the message body:**

| **Parameter**         | **Default value**                    | **Description**                                                                              |
|:----------------------|:-------------------------------------|:---------------------------------------------------------------------------------------------|
| topicFilter           | **sensor/connect**                   | Topic address on the broker, where the broker sends information about new connected devices. |
| deviceNameExpression  | **${serialNumber}**                  | JSON-path expression, for looking the new device name.                                       |
| ---                   

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/connect" -m '{"serialNumber":"SN-001"}'
```
{: .copy-code}

**Device name from the topic:**

| **Parameter**             | **Default value**                    | **Description**                                                                              |
|:--------------------------|:-------------------------------------|:---------------------------------------------------------------------------------------------|
| topicFilter               | **sensor/+/connect**                 | Topic address on the broker, where the broker sends information about new connected devices. |
| deviceNameTopicExpression | **(?<=sensor\/)(.\*?)(?=\/connect)** | Regular expression for looking the device name in topic path.                                |
| ---                       

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/connect" -m ''
```
{: .copy-code}