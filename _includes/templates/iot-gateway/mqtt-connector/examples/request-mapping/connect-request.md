For a Connect request, the gateway must know which device name to target. You can extract it either from the `Message` payload using [json-path](/docs/iot-gateway/config/mqtt/#json-path)
or from the topic using a [regex](/docs/iot-gateway/config/mqtt/#regular-expressions). Choose [json-path](/docs/iot-gateway/config/mqtt/#json-path) when the device name is inside the JSON message; choose [regex](/docs/iot-gateway/config/mqtt/#regular-expressions) when it's encoded in the topic.

Device `SN-001` hasn't sent telemetry for 10 minutes and is marked inactive, but you still need to send an RPC (and you're not planning to resume telemetry).
Let's configure a Connect request in the MQTT connector to (re)announce the device so RPC can be delivered. We'll demonstrate two ways to extract the device name:

- From message (`JSON` payload).
- From topic (e.g., `sensor/SN-001/connect`).

Follow these steps:

{% assign deviceNameAndProfileTopicAndConstantJson = '
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-1.png,
        title: Go to "**Entities**" - "**Gateways**" on the left sidebar and select your gateway.
    ===
        image: /images/gateway/mqtt-connector/examples/connect-request-gateway.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/mqtt-connector/examples/mqtt-gateway-configuring-11-ce.png,
        title: Select the MQTT connector, click on the "**Basic**". Click the "**Add mapping**" under "**Requests mapping**" section to add new connect request mapping.
    ===
        image: /images/gateway/mqtt-connector/examples/connect-request-1.png,
        title: Select `Connect request` in the **Request type** field then fill the "**Topic filter**" with `sensor/connect`.
    ===
        image: /images/gateway/mqtt-connector/examples/connect-request-2.png,
        title: Select **Name** - source `Message` and **Profile name** - source `Constant`. In Value, enter `${serialNumber}` for the device name and `Thermometer` for the device profile.
    ===
        image: /images/gateway/mqtt-connector/examples/connect-request-3.png,
        title: Remember to save your changes by clicking the designated button.
    ===
        image: /images/gateway/mqtt-connector/examples/connect-request-4.png,
        title: Select `Connect request` in the **Request type** field then fill the "**Topic filter**" with `sensor/+/connect`.
    ===
        image: /images/gateway/mqtt-connector/examples/connect-request-5.png,
        title: Select **Name** - source `Topic` and **Profile name** - source `Constant`. In Value, enter `(?<=sensor/)(.*?)(?=/connect)` for the device name and `Thermometer` for the device profile.
    ===
        image: /images/gateway/mqtt-connector/examples/connect-request-6.png,
        title: Remember to save your changes by clicking the designated button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceNameAndProfileTopicAndConstantJson %}

After 10 minutes without sending telemetry, device `SN-001` is marked as inactive in ThingsBoard, as shown below:

![image](/images/gateway/mqtt-connector/examples/result-device-overview-1-connect.png)

To reactivate the device so it can receive RPC commands, we need to send a Connect request. Let's demonstrate this with two examples:

### Example 1: Device name from message payload

Use a terminal to simulate sending a message from the device to the MQTT broker with the device name in the JSON payload:

```bash
mosquitto_pub -h 127.0.0.1 -p 1884 -t "sensor/connect" -m '{"serialNumber": "SN-001"}'
```
{: .copy-code}

After sending this message, ThingsBoard updates both the lastActivityTime and lastConnectTime of the `SN-001` device, and its status changes to `Active`:

![image](/images/gateway/mqtt-connector/examples/result-device-overview-connect-2.png)

![image](/images/gateway/mqtt-connector/examples/result-device-overview-connect-3.png)


### Example 2: Device name from topic

The same reactivation can be achieved using the second mapping configuration, where the device name is extracted from the topic instead of the message payload:

```bash
mosquitto_pub -h 127.0.0.1 -p 1884 -t "sensor/SN-001/connect" -m ''
```
{: .copy-code}


If you are using advanced configuration mode, you can
use the following configuration:

```json
{
  "broker": {
    "host": "127.0.0.1",
    "port": 1884,
    "clientId": "ThingsBoard_gateway",
    "version": 5,
    "maxMessageNumberPerWorker": 10,
    "maxNumberOfWorkers": 100,
    "keepAlive": 60,
    "cleanSession": true,
    "cleanStart": true,
    "sessionExpiryInterval": 0,
    "security": {
      "type": "anonymous"
    }
  },
  "mapping": [],
  "requestsMapping": {
    "connectRequests": [
      {
        "topicFilter": "sensor/connect",
        "deviceInfo": {
          "deviceNameExpression": "${serialNumber}",
          "deviceNameExpressionSource": "message",
          "deviceProfileExpressionSource": "constant",
          "deviceProfileExpression": "Thermometer"
        }
      },
      {
        "topicFilter": "sensor/+/connect",
        "deviceInfo": {
          "deviceNameExpression": "(?<=sensor/)(.*?)(?=/connect)",
          "deviceNameExpressionSource": "topic",
          "deviceProfileExpressionSource": "constant",
          "deviceProfileExpression": "Thermometer"
        }
      }
    ]
  }
}
```
{:.copy-code.expandable-15}