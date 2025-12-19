For an Attribute request, the gateway must know which device name to target and which attribute to request. You can extract the device name either from the `Message` payload using [json-path](/docs/iot-gateway/config/mqtt/#json-path)
or from the topic using a [regex](/docs/iot-gateway/config/mqtt/#regular-expressions). Choose [json-path](/docs/iot-gateway/config/mqtt/#json-path) when the device name is inside the JSON message; choose [regex](/docs/iot-gateway/config/mqtt/#regular-expressions) when it's encoded in the topic.

Suppose you want to retrieve the current firmware version for device `SN-001` from ThingsBoard to make decisions based on the firmware version.

{% capture difference %}
**Please note:**
An **Attribute request** allows a device to retrieve attribute values from ThingsBoard. This is useful for:
- Getting configuration parameters stored as shared attributes
- Retrieving client attributes that were previously reported
- Implementing device configuration management

The gateway acts as a bridge, receiving the attribute request from the device, fetching the attribute from ThingsBoard, and delivering the response back to the device.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let's configure an Attribute request in the MQTT connector to allow devices to request attribute values from ThingsBoard.
We'll demonstrate two ways to extract the device name:

- From message (`JSON` payload).
- From topic (e.g., `sensor/SN-001/attributes/request`).

Follow these steps:

{% assign deviceNameAttributeJson = '
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-1.png,
        title: Go to "**Entities**" - "**Gateways**" on the left sidebar and select your gateway.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-gateway.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/mqtt-connector/examples/mqtt-gateway-configuring-11-ce.png,
        title: Select the MQTT connector, click on the "**Basic**". Click the "**Add mapping**" under "**Requests mapping**" section to add new attribute request mapping.
    ===
        image: /images/gateway/mqtt-connector/examples/attribute-request-1.png,
        title: Select "**Attribute request**" in the **Request type** field, enter the "**Topic filter**" as `v1/devices/me/attributes/request`.
    ===
        image: /images/gateway/mqtt-connector/examples/attribute-request-2.png,
        title: Configure the device name and attribute settings. For device name expression, select source type as `Message` and enter `${serialNumber}` as the value. For attribute name expression, select source type as `Message` and enter `${versionAttribute}, ${pduAttribute}` as the value.
    ===
        image: /images/gateway/mqtt-connector/examples/attribute-request-3.png,
        title: Configure the response topic as `devices/${deviceName}/attrs` and the response value expression as `${attributeKey}: ${attributeValue}`. 
    ===
        image: /images/gateway/mqtt-connector/examples/attribute-request-4.png,
        title: Remember to save your changes by clicking the designated button.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceNameAttributeJson %}

Let's demonstrate how to use these attribute request configurations with two examples:

### Example 1: Device name and attribute from message payload

Suppose we have a device with an attribute `firmwareVersion` stored as a shared attribute in ThingsBoard and suppose we want to request this attribute
for some purposes.

Let's add this attribute to the device `SN-001` in ThingsBoard first:

1. Go to "**Devices**" → select device `SN-001` - "**Attributes**" tab - select "**Shared attributes**".

2. Then click on the "**+**" icon and add `firmwareVersion` attribute with type "**String**" and set it to `1.2.3` click the "**Add**" button.

![image](/images/gateway/mqtt-connector/examples/result-device-overview-attribute-requests-1.png)

This message contains the device name in the JSON payload, which is extracted using the `${serialNumber}` JSON path, and the attribute name using the `${attributeNames}` JSON path. After processing this message, ThingsBoard will retrieve the "firmwareVersion" attribute for device "SN-001" and publish it to the response topic.

The response will be published to the topic `devices/SN-001/attrs` with a payload like: Let's subscribe to the response topic to see the result:
Open terminal and type the following command and press Enter:

```bash
mosquitto_sub -h 127.0.0.1 -p 1884 -t devices/SN-001/attrs
```
{: .copy-code}

Open another terminal to simulate sending a message from the device to the MQTT broker with the device name and attribute name in the JSON payload:

```bash
mosquitto_pub -h 127.0.0.1 -p 1884 -t v1/devices/me/attributes/request -m '{"serialNumber": "SN-001", "versionAttribute": "firmwareVersion"}'
```
{: .copy-code}

This message contains the device name in the JSON payload, which is extracted using the `${serialNumber}` JSON path, 
and the attribute name using the `${attributeNames}` JSON path. After processing this message, ThingsBoard will retrieve the `firmwareVersion` attribute for device `SN-001` and publish it to the response topic.)

![image](/images/gateway/mqtt-connector/examples/result-device-overview-attribute-requests-2.png)

```bash
firmwareVersion: "1.2.3"
```

![image](/images/gateway/mqtt-connector/examples/result-device-overview-attribute-requests-3.png)



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
  "mapping": [
    {
      "topicFilter": "sensor/data",
      "subscriptionQos": 1,
      "converter": {
        "type": "json",
        "deviceInfo": {
          "deviceNameExpressionSource": "message",
          "deviceNameExpression": "${serialNumber}",
          "deviceProfileExpressionSource": "message",
          "deviceProfileExpression": "${sensorType}"
        },
        "timeout": 60000,
        "attributes": [
    
        ],
        "timeseries": [
          {
            "type": "string",
            "key": "temperature",
            "value": "${temp}"
          }
        ]
      }
    }
  ],
  "requestsMapping": {
    "attributeRequests": [
      {
        "retain": false,
        "topicFilter": "v1/devices/me/attributes/request",
        "deviceInfo": {
          "deviceNameExpressionSource": "message",
          "deviceNameExpression": "${serialNumber}"
        },
        "attributeNameExpressionSource": "message",
        "attributeNameExpression": "${attributeNames}",
        "topicExpression": "v1/devices/${deviceName}/attributes/response",
        "valueExpression": "{\"${attributeKey}\": \"${attributeValue}\"}"
      }
    ]
  }
}
```
{:.copy-code.expandable-15}