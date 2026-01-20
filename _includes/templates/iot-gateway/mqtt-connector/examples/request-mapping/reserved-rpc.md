## Reserved RPC Methods

`GET` and `SET` RPC methods are out of the box, so you don’t need to configure them manually.

Suppose we have a device `SN-001` that tracks the light level of the room and is connected to ThingsBoard via an MQTT Gateway. 
We want to send an RPC command to know the current state of the light level with two options: in the first case we want to get a response back, and in the second case we don't need a response.
Additionally, we will update the room light level by sending a command without expecting a response.

As an example, we will use ThingsBoard MQTT Demo Broker, which can be run using Docker and the following command:

```bash
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

The broker available at `0.0.0.0:1884` and simulates a device that listens to the topic `data/get_light_level` for getting the current light level and responds on the topic `data/response`.
It also listens to the topic `data/set_light_level` to update the light level value.

{% capture difference %}
**Please note:**
The RPC Debug Terminal is used only for example purposes, so you can use any other widget that supports RPC calls.
The custom MQTT publisher is used only to simulate the device behavior, but it is not applicable for real-production
use cases.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Example 1: Get current light level (Two Way RPC with response)

In the RPC Debug Terminal widget, run the following command to send a two-way RPC request:

```bash
get requestTopicExpression=data/get_light_level;responseTopicExpression=data/response;value=${params};
```
{: .copy-code}

The gateway will:
1. Receive this RPC request
2. Process the built-in "get" method
3. Send a message to the topic `data/get_light_level` with the specified parameters
4. Subscribe to the topic `data/response` to wait for a response
5. Return the response to ThingsBoard when received

![image](/images/gateway/mqtt-connector/examples/result-device-overview-reserved-rpc-1.png)

### Example 2: Get current light level with no response (One Way RPC)

In the RPC Debug Terminal widget, run the following command to send a one-way RPC request:

```bash
get requestTopicExpression=data/get_light_level;value=${params};
```
{: .copy-code}

The gateway will:
1. Receive this RPC request
2. Process the built-in "get" method
3. Send a message to the topic `data/get_light_level` with the specified parameters
4. Not wait for any response since no response topic was specified

![image](/images/gateway/mqtt-connector/examples/result-device-overview-reserved-rpc-2.png)

### Example 3: SET new light level (One Way RPC)

In the RPC Debug Terminal widget, run the following command to set a new light level value:

```bash
set requestTopicExpression=data/set_light_level;value=90;
```
{: .copy-code}

The gateway will:
1. Receive this RPC request
2. Process the built-in "set" method
3. Send a message to the topic `data/set_light_level` with the value "90"
4. Not wait for any response since no response topic was specified

![image](/images/gateway/mqtt-connector/examples/result-device-overview-reserved-rpc-3.png)

### Example 4: Check updated light level (Two Way RPC with response)

After setting the new light level, you can verify the updated value by running:

```bash
get requestTopicExpression=data/get_light_level;responseTopicExpression=data/response;value=${params};
```
{: .copy-code}

The gateway will process this request as in Example 1, and you should see the updated light level value in the response.

![image](/images/gateway/mqtt-connector/examples/result-device-overview-reserved-rpc-4.png)

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
    "serverSideRpc": []
  }
}
```
{:.copy-code.expandable-15}