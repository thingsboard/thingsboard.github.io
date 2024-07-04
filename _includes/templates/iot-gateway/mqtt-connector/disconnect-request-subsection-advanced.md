**1. Name in a message from broker:**

| **Parameter**                 | **Default value**                    | **Description**                                                                                   |
|:-|:-------------------------------------|-
| topicFilter                   | **sensor/disconnect**                | Topic address on the broker, where the broker sends information about disconnected devices.       |
| deviceNameJsonExpression      | **${serialNumber}**                  | JSON-path expression, for looking the new device name.                                            |
|---

**2. Name in topic address:**

| **Parameter**                 | **Default value**                    | **Description**                                                                                   |
|:-|:-------------------------------------|-
| topicFilter                   | **sensor/+/disconnect**              | Topic address on the broker, where the broker sends information about disconnected devices.       |
| deviceNameTopicExpression     | **(?<=sensor\/)(.\*?)(?=\/connect)** | Regular expression for looking the device name in topic path.                                     |
|---

This section in configuration file looks like:

```json
  "disconnectRequests": [
    {
      "topicFilter": "sensor/disconnect",
      "deviceNameJsonExpression": "${serialNumber}"
    },
    {
      "topicFilter": "sensor/+/disconnect",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/disconnect)"
    }
  ]
```

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/disconnect" -m '{"serialNumber":"SN-001"}'
```
{: .copy-code}
```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/disconnect" -m ''
```
{: .copy-code}

**Now let’s review an example.**

Use a terminal to simulate sending a message from the device to MQTT broker:

```bash
mosquitto_pub -h 127.0.0.1 -p 1883 -t "sensor/disconnect" -m '{"serialNumber": "SN-001"}'
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-message-disconnect.png)
{: refdef}

Your ThingsBoard instance will get information from the broker about last disconnecting time of the device. You can see this information under the "Server attributes" scope in the "Attributes" tab.

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-disconnect-device.png)
{: refdef}