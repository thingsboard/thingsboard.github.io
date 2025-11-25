RPC to Device allows sending RPC commands to the device that is connected to ThingsBoard directly or via Gateway.

Suppose we have a device `SN-001` that tracks the light level of the room and is connected to ThingsBoard via an MQTT Gateway. 
We want to send an RPC command to know the current state of the light level with two options: in the first case we want to get a response back, and in the second case we don't need a response.

As an example, we will use ThingsBoard MQTT Demo Broker, which can be run using Docker and the following command:

```bash
docker run -it -p 1884:1884 thingsboard/tb-gw-mqtt-broker:latest
```
{:.copy-code}

The demo broker runs at `0.0.0.0:1884` and simulates a device for our RPC examples. For configurable RPC, the device listens on topic `sensor/${deviceName}/request/${methodName}/${requestId}` for incoming commands and responds on topic `sensor/${deviceName}/response/${methodName}/${requestId}` when a response is expected.

{% capture difference %}
**Please note:**
The RPC Debug Terminal is used only for example purposes, so you can use any other widget that supports RPC calls.
The custom MQTT publisher is used only to simulate the device behavior, but it is not applicable for real-production
use cases.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let's configure RPC commands in the MQTT connector to allow ThingsBoard to send commands to devices.

Follow these steps:

{% assign CustomRPC = '
    ===
        image: /images/gateway/mqtt-connector/examples/device-name-and-profile-message-json-1.png,
        title: Go to "**Entities**" - "**Gateways**" on the left sidebar and select your gateway.
    ===
        image: /images/gateway/mqtt-connector/examples/disconnect-request-gateway.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/mqtt-connector/examples/mqtt-gateway-configuring-11-ce.png,
        title: Select the MQTT connector, click on the "**Basic**". Click the "**Add mapping**" under "**Requests mapping**" section to add new RPC mapping.
    ===
        image: /images/gateway/mqtt-connector/examples/server-side-rpc-commands-1.png,
        title: Select "**RPC command**" in the **Request type** field. For two-way RPC (with response).
    ===
        image: /images/gateway/mqtt-connector/examples/server-side-rpc-commands-2.png,
        title: Configure the **Device name filter** as `.*` to apply to all devices, set the **Method filter** to `echo`, the **Request topic expression** to `sensor/${deviceName}/request/${methodName}/${requestId}`, the **Value expression** to `${params}`, the **Response topic expression** to `sensor/${deviceName}/response/${methodName}/${requestId}`, and set an appropriate **Response timeout** (e.g., 10000 ms).
    ===
        image: /images/gateway/mqtt-connector/examples/server-side-rpc-commands-3.png,
        title: Remember to save your changes by clicking the designated button.
    ===
        image: /images/gateway/mqtt-connector/examples/server-side-rpc-commands-4.png,
        title: For one-way RPC (without response), click on the **Without response** tab. Configure the **Device name filter** as `.*` to apply to all devices, set the **Method filter** to `no-reply`, the **Request topic expression** to `sensor/${deviceName}/request/${methodName}/${requestId}`, and the **Value expression** to `${params}`.
    ===
        image: /images/gateway/mqtt-connector/examples/server-side-rpc-commands-5.png,
        title: Remember to save your changes by clicking the designated button.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=CustomRPC %}

Let's demonstrate how to use this RPC configuration:

### Example 1: Two Way RPC (with response)

In the RPC Debug Terminal widget, run the following command to send a two-way RPC request:

```bash
echo {"deviceName":"SN-001", "methodName":"echo"}
```
{: .copy-code}

The gateway will:
1. Receive this RPC request
2. Match it to the "echo" method configuration
3. Send a message to the topic `sensor/SN-001/request/echo/12345` (where 12345 is a unique request ID)
4. Subscribe to the topic `sensor/SN-001/response/echo/12345` to wait for a response
5. Return the response to ThingsBoard when received

![image](/images/gateway/mqtt-connector/examples/result-device-overview-rpc-1.png)

### Example 2: One Way RPC (without response)

In the RPC Debug Terminal widget, run the following command to send a one-way RPC request:

```bash
no-reply {"deviceName":"SN-001", "methodName":"no-reply"}
```
{: .copy-code}

The gateway will:
1. Receive this RPC request
2. Match it to the "no-reply" method configuration
3. Send a message to the topic `sensor/SN-001/request/no-reply/12345` (where 12345 is a unique request ID)
4. Not wait for any response

![image](/images/gateway/mqtt-connector/examples/result-device-overview-rpc-2.png)

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
    "serverSideRpc": [
      {
        "type": "twoWay",
        "deviceNameFilter": ".*",
        "methodFilter": "echo",
        "requestTopicExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
        "responseTopicExpression": "sensor/${deviceName}/response/${methodName}/${requestId}",
        "responseTopicQoS": 1,
        "responseTimeout": 10000,
        "valueExpression": "${params}"
      },
      {
        "type": "oneWay",
        "deviceNameFilter": ".*",
        "methodFilter": "no-reply",
        "requestTopicExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
        "valueExpression": "${params}"
      }
    ]
  }
}
```
{:.copy-code.expandable-15}
