For Attribute updates, the gateway needs to know which devices should receive updates for which attributes. You configure this using regular expressions for both device names and attribute names. When an attribute is updated in ThingsBoard, the gateway publishes the new value to a configured MQTT topic.

Suppose you want ThingsBoard to automatically push firmware version updates to your devices. When you update the `firmwareVersion` shared attribute in ThingsBoard, the gateway should publish this update to a topic that your devices are subscribed to.

{% capture difference %}
**Please note:**
**Attribute updates** allow ThingsBoard to push shared attribute changes to devices. This is useful for:
- Remotely configuring devices
- Pushing firmware/software version information
- Sending operational parameters to devices
- Implementing device configuration management

The gateway acts as a bridge, detecting attribute changes in ThingsBoard and publishing them to MQTT topics that devices can subscribe to.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let's configure Attribute updates in the MQTT connector to allow ThingsBoard to push attribute changes to devices.

Follow these steps:

{% assign AttributesUpdate = '
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-1.png,
        title: Go to "**Entities**" - "**Gateways**" in the left sidebar and select your gateway.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-gateway.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/mqtt-connector/examples/mqtt-gateway-configuring-11-ce.png,
        title: Select the MQTT connector, click on the "**Basic**". Click the "**Add mapping**" under "**Requests mapping**" section to add new attribute update mapping.
    ===
        image: /images/gateway/mqtt-connector/examples/attribute-updates-1.png,
        title: Select "**Attribute update**" in the **Request type** field, enter the "**Device name filter**" as `.*` to match all devices, or use a specific pattern to match only certain devices).
    ===
        image: /images/gateway/mqtt-connector/examples/attribute-updates-2.png,
        title: Configure the **Attribute filter** as `firmwareVersion` to only update this specific attribute. Set the **Response topic expression** to `sensor/${deviceName}/${attributeKey}` and the **Response value expression** to `{"${attributeKey}":"${attributeValue}"}`. You can also set the **Retain** option to determine whether the attribute update message should be retained by the MQTT broker.
    ===
        image: /images/gateway/mqtt-connector/examples/attribute-updates-3.png,
        title: Remember to save your changes by clicking the designated button.
    ===
        image: /images/gateway/mqtt-connector/examples/result-device-overview-attribute-updates-1.png,
        title: Go to "**Devices**" - select device `SN-001` - "**Attributes**" tab - select "**Shared attributes**"
    ===
        image: /images/gateway/mqtt-connector/examples/result-device-overview-attribute-updates-2.png,
        title: Add the `firmwareVersion` attribute with type "**String**" and set its value to "1.2.3".
    ===
        image: /images/gateway/mqtt-connector/examples/result-device-overview-attribute-updates-3.png,
        title: Find the `firmwareVersion` attribute and click the pencil icon to edit it.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=AttributesUpdate %}

Let's demonstrate how to use this attribute update configuration:

### Example: Updating a device attribute in ThingsBoard

1. First, let's subscribe to the topic where attribute updates will be published:

```bash
mosquitto_sub -h 127.0.0.1 -p 1884 -t sensor/SN-001/firmwareVersion
```
{: .copy-code}

2. After updating the attribute in ThingsBoard, the gateway will detect the change and publish a message to the configured topic:

```json
{"firmwareVersion":"1.2.4"}
```

![image](/images/gateway/mqtt-connector/examples/result-device-overview-attribute-updates-4.png)

This message will be received by any device subscribed to the topic `sensor/SN-001/firmwareVersion`.

![image](/images/gateway/mqtt-connector/examples/result-device-overview-attribute-updates-5.png)

If you are using advanced configuration mode, you can use the following configuration:

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
    "attributeUpdates": [
      {
        "retain": true,
        "deviceNameFilter": ".*",
        "attributeFilter": "firmwareVersion",
        "topicExpression": "sensor/${deviceName}/${attributeKey}",
        "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
      }
    ]
  }
}
```
{:.copy-code.expandable-15}