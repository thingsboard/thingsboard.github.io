| **Parameter**                 | **Default value**                                   | **Description**                                                                                  |
|:-|:----------------------------------------------------|--------------------------------------------------------------------------------------------------
| retain                        | **false**                                           | If set to true, the message will be set as the "last known good"/retained message for the topic. |
| deviceNameFilter              | **.\***                                             | Regular expression device name filter, used to determine, which function to execute.             |
| attributeFilter               | **uploadFrequency**                                 | Regular expression attribute name filter, used to determine, which function to execute.          |
| topicExpression               | **sensor/${deviceName}/${attributeKey}**            | JSON-path expression used for creating topic address to send a message.                          |
| valueExpression               | **{\\"${attributeKey}\\":\\"${attributeValue}\\"}** | JSON-path expression used for creating the message data that will send to topic.                 |
|---

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

**Let's look at an example.**

Run the command below to start the *mosquitto_sub* client, subscribing to the topic "sensor/SN-001/firmwareVersion" of the local broker. Start waiting for new messages from ThingsBoard server to broker.

```bash
mosquitto_sub -h 127.0.0.1 -p 1883 -t sensor/SN-001/firmwareVersion
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-mosquitto-sub-wait-1.png)
{: refdef}

Update device attribute value on the ThingsBoard server following these steps:
- Open the "Devices" page;
- Click on your device and navigate to the "Attributes" tab;
- Choose "Shared attributes" scope and click on the "pencil" icon next to *"firmwareVersion"* attribute.

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-update-attribute-1.png)
{: refdef}

- Change firmware version value from "1.1" to "1.2". Then click "Update" button.

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-update-attribute-2.png)
{: refdef}

The firmware version has been updated to "1.2".

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-update-attribute-3.png)
{: refdef}

Broker received new message from the ThingsBoard server about updating attribute "FirmwareVersion" to "1.2".

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-mosquitto-sub-get-1.png)
{: refdef}
