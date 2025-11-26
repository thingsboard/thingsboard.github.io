The device name and profile can be extracted from the topic. In this example, we will use  
[regex](/docs/iot-gateway/config/mqtt/#regular-expressions) to specify the device name and constant for profile.

As an example, we will use ThingsBoard MQTT Demo Broker, which can be run using Docker and the following command:

```bash
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

The broker available at `0.0.0.0:1884` and publishes data to the topic `sensor/Thermo-A/data` where `Thermo-A` is the device name: with the following JSON payload:

```json
{
    "sensorModel": "T-100",
    "temp": 23.82,
    "hum": 60.3
}
```
To match this topic, either enter `sensor/Thermo-A/data` in **Topic filter** field or use [wildcards](/docs/iot-gateway/config/mqtt/#wildcard-usage)
to subscribe to both `sensor/Thermo-A/data` and let's say `sensor/Thermo-B/data`.

Let’s configure the MQTT connector to take the device name from the topic and use a constant for the device profile (e.g., `Thermometer`).
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
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-topic-constant-json-4.png,
        title: In the opened window, fill in "**Topic filter**" field with `sensor/+/data`, also fill "**QoS**" with one of these values(`0`,`1`,`2`) and for "**Payload type**" select `JSON`.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-topic-constant-json-5.png,
        title: Then under "**Device**" subsection choose "**Topic**" for the "**Name**" field, enter `(?<=sensor/)(.*?)(?=/data)`, this is the [regex](/docs/iot-gateway/config/mqtt/#regular-expressions) used to extract device name.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-topic-constant-json-6.png,
        title: Then under "**Profile name**" subsection choose "**Constant**" for the "**Name**" field, enter `Thermometer`, this is **Constant** value that will be used to form device profile name.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-topic-constant-json-7.png,
        title: Also, we need to add at least one attribute/time series because the connector will not add a device without any data to read. Click on the "**pencil**" icon next to the "**Time series**" section.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-8.png,
        title: In the opened window, click on the "**Add time series**" button and fill the fields as on the corresponding image. Do not forget to save changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceNameAndProfileTopicAndConstantJson %}

Now we can check if the device name and profile are set correctly. Go to "**Entities**" > "**Devices**" and as you can see, the device
name is set to `Thermo-A` and the profile is set to `Thermometer`.

![image](/images/gateway/mqtt-connector/examples/device-name-and-profile-topic-constant-json-9.png)

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
      "topicFilter": "sensor/+/data",
      "subscriptionQos": 1,
      "converter": {
        "type": "json",
        "deviceInfo": {
          "deviceNameExpression": "(?<=sensor/)(.*?)(?=/data)",
          "deviceNameExpressionSource": "topic",
          "deviceProfileExpressionSource": "constant",
          "deviceProfileExpression": "Thermometer"
        },
        "attributes": [],
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