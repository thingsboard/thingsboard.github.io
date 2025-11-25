The device name and profile can be extracted from the incoming message. In this example, we will use  
[json path](/docs/iot-gateway/config/mqtt/#json-path) to specify the device name and profile.

As an example, we will use ThingsBoard MQTT Demo Broker, which can be run using Docker and the following command:

```bash
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

The broker available at `0.0.0.0:1884` and publishes data to the topic `sensor/data` with the following JSON payload:

```json
{
    "serialNumber": "SN-001",
    "sensorType": "Thermometer",
    "sensorModel": "T-100",
    "temp": 22.82,
    "hum": 59.3
}
```
We also want to extract the device name from the `serialNumber` field and the device profile from the `sensorType` field.
Let's configure the device name and profile in the MQTT connector. For this purpose, follow these steps:

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
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-4.png,
        title: In the opened window, fill in "**Topic filter**" field with `sensor/data`, also fill "**QoS**" with one of these values(`0`,`1`,`2`) and for "**Payload type**" select `JSON`.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-5.png,
        title: Then under "**Device**" subsection choose "**Message**" for the "**Name**" field, enter `${serialNumber}`, this is the [json path](/docs/iot-gateway/config/mqtt/#json-path) to the field that contains the device name.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-6.png,
        title: Then under "**Profile name**" subsection choose "**Message**" for the "**Name**" field, enter `${sensorType}`, this is the [json path](/docs/iot-gateway/config/mqtt/#json-path) to the field that contains the device name.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-7.png,
        title: Also, we need to add at least one attribute/time series because the connector will not add a device without any data to read. Click on the "**pencil**" icon next to the "**Time series**" section.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-8.png,
        title: In the opened window, click on the "**Add time series**" button and fill the fields as on the corresponding image. Do not forget to save changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceNameAndProfileTopicAndConstantJson %}

Now we can check if the device name and profile are set correctly. Go to "**Entities**" > "**Devices**" and as you can see, the device
name is set to `SN-001` and the profile is set to `Thermometer`.

![image](/images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-9.png)

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
      "topicFilter": "sensor/data",
      "subscriptionQos": 1,
      "converter": {
        "type": "json",
        "deviceInfo": {
          "deviceNameExpression": "${serialNumber}",
          "deviceNameExpressionSource": "message",
          "deviceProfileExpressionSource": "message",
          "deviceProfileExpression": "${sensorType}"
        },
        "attributes": [
          {
            "key": "model",
            "type": "string",
            "value": "${sensorModel}"
          }
        ],
        "timeseries": [
          {
            "key": "temperature",
            "type": "double",
            "value": "${temp}"
          }
        ]
      }
    }
  ],
  "requestsMapping": {}
}
```
{:.copy-code.expandable-15}
