To adding new requests mapping, navigate to the "Requests mapping" tab and click the "plus" icon.
In the open modal window, select the "Connect request" type, set a topic filter, and fill in the "Name" and "Profile name" fields of the "Device" section. Then, click "Add".

**Device name from the message body:**

![image](https://img.thingsboard.io/gateway/mqtt-connector/connect-request-1-ce.png)

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/connect" -m '{"serialNumber":"SN-001"}'
```
{: .copy-code}

**Device name from the topic:**

![image](https://img.thingsboard.io/gateway/mqtt-connector/connect-request-device-name-from-the-topic-1-ce.png)

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/connect" -m ''
```
{: .copy-code}