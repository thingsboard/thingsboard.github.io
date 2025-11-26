The device name and profile can be extracted from the message source and bytes payload. In this example, we will use  
[slices](/docs/iot-gateway/config/mqtt/#slices) to specify the device name and constant for profile.

As an example, we will use ThingsBoard MQTT Demo Broker, which can be run using Docker and the following command:

```bash
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

The broker available at `0.0.0.0:1884` and publishes data to the topic `sensor/raw_data` with the following BYTES payload:

`b"AM-120"` — Python bytes literal (ASCII)

Suppose we want to create a device from this payload. The first four bytes represent the device name, and the remaining bytes represent the temperature value.

Configure the MQTT connector to extract the device name from the raw bytes and use a constant value for the device profile (for example, `default`). 

Follow these steps:

{% assign deviceNameAndProfileTopicAndConstantJson = '
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-1.png,
        title: Go to "**Entities**" → "**Gateways**" on the left sidebar and select your gateway.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-2.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-3.png,
        title: Select the created MQTT connector, select "**Basic**" click on the "**Data mapping**" Click on the "**+ Add mapping**" button.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-and-constant-bytes-4.png,
        title: In the opened window, fill in "**Topic filter**" field with `sensor/raw_data`, also fill "**QoS**" with one of these values(`0`,`1`,`2`) and for "**Payload type**" select `Bytes`.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-and-constant-bytes-5.png,
        title: Then under "**Device**" subsection choose "**Message**" for the "**Name**" field, enter `[0:4]`, those are the [slices](/docs/iot-gateway/config/mqtt/#slices) used to extract device name.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-and-constant-bytes-6.png,
        title: Then under "**Profile name**" subsection choose "**Constant**" for the "**Name**" field, enter `default`, this is **Constant** value that will be used to form device profile name.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-and-constant-bytes-7.png,
        title: Also, we need to add at least one attribute/time series because the connector will not add a device without any data to read as we remember. The first four bytes represent the device name, and the remaining bytes represent the temperature value. Click on the "**pencil**" icon next to the "**Time series**" section.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-and-constant-bytes-8.png,
        title: In the opened window, click on the "**Add time series**" button and fill the fields as on the corresponding image. Do not forget to save changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceNameAndProfileTopicAndConstantJson %}

Now we can check if the device name and profile are set correctly. Go to "**Entities**" > "**Devices**" and as you can see, the device
name is set to `AM-1` and the profile is set to `default`.

![image](/images/gateway/mqtt-connector/examples/device-name-and-profile-message-and-constant-bytes-9.png)

If you are using advanced configuration mode and want to set the device name and profile using topic and json path, you can
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
      "topicFilter": "sensor/raw_data",
      "subscriptionQos": 1,
      "converter": {
        "type": "bytes",
        "deviceInfo": {
          "deviceNameExpression": "[0:4]",
          "deviceNameExpressionSource": "message",
          "deviceProfileExpressionSource": "constant",
          "deviceProfileExpression": "default"
        },
        "attributes": [],
        "timeseries": [
          {
            "key": "temp",
            "type": "raw",
            "value": "[4:]"
          }
        ]
      }
    }
  ],
  "requestsMapping": {}
}
```
{:.copy-code.expandable-15}