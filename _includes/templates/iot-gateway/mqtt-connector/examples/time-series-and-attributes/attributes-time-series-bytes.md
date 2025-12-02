Attributes and time series data can be retrieved using [slices](/docs/iot-gateway/config/mqtt/#slices)
in the MQTT Connector. This allows to extract the required field(s) from the `BYTES` payload received on the subscribed topic(s).

As an example, we will use ThingsBoard MQTT Demo Broker, which can be run using Docker and the following command:

```bash
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

The broker available at `0.0.0.0:1884` and publishes data to the topic `sensor/raw_data` with the following BYTES payload:

`b"AM-120"` — Python bytes literal (ASCII)

The first four bytes represent the device name, and the remaining bytes represent the temperature value.
Configure the MQTT connector to store the entire raw payload in the `rawData` attribute, and to parse bytes 5–6 as the `temperature` and publish it as the temp timeseries. 
Then configure the device name and profile in the MQTT connector.

Follow these steps:

{% assign deviceNameAndProfileIdentifierPath = '
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-1.png,
        title: Go to "**Entities**" → "**Gateways**" on the left sidebar and select your gateway.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-2.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-3.png,
        title: Select the MQTT connector, click on the "**Data mapping**" tab. Select data mapping with device to which you want to add time series data (if you do not know how to add a new device, see the [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=opcua){:target="_blank"} guide or [Data mapping](/docs/iot-gateway/config/opc-ua/#data-mapping) section of this guide with respective examples).
    ===
        image: /images/gateway/mqtt-connector/examples/attributes-time-series-bytes-2.png,
        title: In the opened data mapping windows, click on the "**pencil**" icon next to the "**Attributes**" section.
    ===
        image: /images/gateway/mqtt-connector/examples/attributes-time-series-bytes-3.png,
        title: Click on the "**Add attribute**" button. Fill in the "**Key**" field with `rawData`, also select `Raw` in "**Type**" field, and fill in the "**Value**" field with `[:]`. Those are [slices](/docs/iot-gateway/config/mqtt/#slices).
    ===
        image: /images/gateway/mqtt-connector/examples/attributes-time-series-bytes-4.png,
        title: Remember to save your changes by clicking the designated button on the screenshot.
    ===
        image: /images/gateway/mqtt-connector/examples/attributes-time-series-bytes-5.png,
        title: In the opened data mapping windows, click on the "**pencil**" icon next to the "**Time series**" section.
    ===
        image: /images/gateway/mqtt-connector/examples/attributes-time-series-bytes-6.png,
        title: Click on the "**Add time series**" button. Fill in the "**Key**" field with `temp`, also select `Raw` in "**Type**" field, and fill in the "**Value**" field with `[4:]`. Those are [slices](/docs/iot-gateway/config/mqtt/#slices).
     ===
        image: /images/gateway/mqtt-connector/examples/attributes-time-series-bytes-7.png,
        title: Remember to save your changes by clicking the designated button on the screenshot.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceNameAndProfileIdentifierPath %}

Now we can check if the attribute data is set correctly. Go to "**Entities**" > "**Devices**", select a created device and as you
can see, the humidity data is available in the "**Attributes**" section:

![image](/images/gateway/mqtt-connector/examples/result-device-overview-4.png)

Now we can check if the temperature data is sending correctly. Go to "**Entities**" > "**Devices**", select a created device and as you
can see, the humidity data is available in the "**Latest telemetry**" section:

![image](/images/gateway/mqtt-connector/examples/result-device-overview-3.png)

If you are using advanced configuration mode and want to set the `temperature` and `model` data using [json-path](/docs/iot-gateway/config/mqtt/#json-path), you can
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
        "attributes": [
           {
            "key": "rawData",
            "type": "raw",
            "value": "[:]"
          }
        ],
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
````
{:.copy-code.expandable-15}