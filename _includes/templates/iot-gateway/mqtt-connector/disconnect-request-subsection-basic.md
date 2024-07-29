To adding new requests mapping, navigate to the "Requests mapping" tab and click the "plus" icon.
In the open modal window, select the "Disconnect request" type, set a topic filter, and fill in the "Name" field of the "Device" section. Then, click "Add".

**Name in a message from broker:** 

![image](/images/gateway/mqtt-connector/disconnect-request-1-ce.png)

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/disconnect" -m '{"serialNumber":"SN-001"}'
```
{: .copy-code}

**Name in topic address:**

![image](/images/gateway/mqtt-connector/disconnect-request-2-ce.png)

In this case the following messages are valid:

```bash
mosquitto_pub -h YOUR_MQTT_BROKER_HOST -p YOUR_MQTT_BROKER_PORT -t "sensor/SN-001/disconnect" -m ''
```
{: .copy-code}