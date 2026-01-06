There are scenarios where the key names for time-series data and attributes need to be extracted directly from the 
MQTT topic structure. This can be particularly useful when dealing with dynamic topics or when the topic structure 
conveys important metadata. In this example, we will demonstrate how to configure the MQTT connector to extract key 
names for both time-series data directly from the topic using regular expression.

As an example, we will use ThingsBoard MQTT Demo Broker, which can be run using Docker and the following command:

```bash
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

The broker available at `0.0.0.0:1884` and publishes data to the topic `sensors/demo-device/{sensor-name}/value`. 
The `{sensor-name}` part of the topic is dynamic and represents different sensors, such as `temperature` or `humidity`.

So the topics will look like this:
- `sensors/demo-device/temperature/value` with payload `{"value": 25.5}`
- `sensors/demo-device/humidity/value` with payload `{"value": 60.2}`

We’ll map the `{sensor-name}` part of the topic to time-series data.

Copy and paste the following configuration into the MQTT connector advanced configuration mode:
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
      "topicFilter": "sensors/demo-device/+/value",
      "subscriptionQos": 0,
      "converter": {
        "type": "json",
        "deviceInfo": {
          "deviceNameExpressionSource": "constant",
          "deviceNameExpression": "Demo Device",
          "deviceProfileExpressionSource": "constant",
          "deviceProfileExpression": "default"
        },
        "timeout": 60000,
        "attributes": [],
        "timeseries": [
          {
            "type": "double",
            "keySource": "topic",
            "key": "(?<=sensors/demo-device/)(.*?)(?=/value)",
            "value": "${value}"
          }
        ]
      }
    }
  ],
  "requestsMapping": {}
}
```
{:.copy-code}

Let's review the key parts of this configuration:
- The `topicFilter` is set to `sensors/demo-device/+/value`, where the `+` wildcard captures the dynamic sensor name.
- In the `timeseries` section, we use a regular expression in the `key` field to extract the sensor name from the 
topic. The regex `(?<=sensors/demo-device/)(.*?)(?=/value)` captures the part of the topic 
between `sensors/demo-device/` and `/value`.
- The `keySource` is set to `topic`, indicating that the key name should be extracted from the topic.
- The `value` field uses `${value}` to extract the actual sensor value from the JSON payload.

After applying this configuration, the MQTT connector will extract the sensor name from the topic and use it as the 
key name for both time-series data. So you will see that the corresponding time series are being updated correctly:

![image](/images/gateway/mqtt-connector/examples/time-series-key-name-from-topic-overview.png)
