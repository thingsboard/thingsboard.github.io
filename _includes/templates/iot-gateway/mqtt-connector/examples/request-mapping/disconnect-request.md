For a Disconnect request, the gateway must know which device name to target. You can extract it either from the `Message` payload using [json-path](/docs/iot-gateway/config/mqtt/#json-path)
or from the topic using a [regex](/docs/iot-gateway/config/mqtt/#regular-expressions). Choose [json-path](/docs/iot-gateway/config/mqtt/#json-path) when the device name is inside the JSON message; choose [regex](/docs/iot-gateway/config/mqtt/#regular-expressions) when it's encoded in the topic.

Suppose you want to disconnect device `SN-001` from the platform immediately, without waiting for the 10-minute inactivity timeout-useful for dashboards, alarms, 
and rule chains that react to status changes.

{% capture difference %}
**Please note:**
A **Disconnect request** tells the platform the device is offline **immediately** and stops routing **RPCs** and **attribute updates** to it.
It does not block MQTT traffic: if the device (or gateway) continues publishing, 
new messages will arrive and the device may be marked active again based on the inactivity timeout which is 10 minutes.
The UI “Active” flag follows last-activity timing; it may remain active until the timeout elapses unless no further messages arrive.
.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let's configure a Disconnect request in the MQTT connector to notify the platform when a device disconnects.
We'll demonstrate two ways to extract the device name:

- From message (`JSON` payload).
- From topic (e.g., `sensor/SN-001/disconnect`).

Follow these steps:

{% assign deviceNameDisconnectJson = '
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-1.png,
        title: Go to "**Entities**" - "**Gateways**" on the left sidebar and select your gateway.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-gateway.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/mqtt-connector/examples/mqtt-gateway-configuring-11-ce.png,
        title: Select the MQTT connector, click on the "**Basic**". Click the "**Add mapping**" under "**Requests mapping**" section to add new disconnect request mapping.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-1.png,
        title: Select "**Disconnect request**" in the **Request type** field, enter the "**Topic filter**" as `sensor/disconnect`.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-2.png,
        title: Select source type for **Name** field as `Message`. In Value, enter `${serialNumber}` for the device name.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-3.png,
        title: Remember to save your changes by clicking the designated button.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-4.png,
        title: Select "**Disconnect request**" in the **Request type** field then fill the "**Topic filter**" with `sensor/+/disconnect`.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-5.png,
        title: Select source type for **Name** field as `Topic`. In Value, enter `(?<=sensor/)(.*?)(?=/disconnect)` for the device name.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-6.png,
        title: Remember to save your changes by clicking the designated button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceNameDisconnectJson %}

Let's demonstrate how to use these disconnect request configurations with two examples:

![image](/images/gateway/mqtt-connector/examples/result-device-overview-1-disconnect.png)

### Example 1: Device name from message payload

When the device name is included in the message payload, you can send a disconnect request as follows:

```bash
mosquitto_pub -h 127.0.0.1 -p 1884 -t "sensor/disconnect" -m '{"serialNumber": "SN-001"}'
```
{: .copy-code}

This message contains the device name in the JSON payload, which is extracted using the `${serialNumber}` JSON path. After processing this message, ThingsBoard will mark the device `SN-001` as disconnected.

![image](/images/gateway/mqtt-connector/examples/result-device-overview-2-disconnect.png)

### Example 2: Device name from topic

When the device name is encoded in the topic path, you can send a disconnect request as follows:

```bash
mosquitto_pub -h 127.0.0.1 -p 1884 -t "sensor/SN-001/disconnect" -m ''
```
{: .copy-code}

In this case, the device name is extracted from the topic using the regular expression `(?<=sensor/)(.*?)(?=/disconnect)`. After processing this message, ThingsBoard will mark the device `SN-001` as disconnected.

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
    "disconnectRequests": [
      {
        "topicFilter": "sensor/disconnect",
        "deviceInfo": {
          "deviceNameExpression": "${serialNumber}",
          "deviceNameExpressionSource": "message"
        }
      },
      {
        "topicFilter": "sensor/+/disconnect",
        "deviceInfo": {
          "deviceNameExpression": "(?<=sensor/)(.*?)(?=/disconnect)",
          "deviceNameExpressionSource": "topic"
        }
      }
    ]
  }
}
```
{:.copy-code.expandable-15}