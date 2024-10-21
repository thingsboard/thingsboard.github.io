
This section in configuration file looks like:

```json
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
```
{: .copy-code}

![image](/images/gateway/mqtt-connector/server-side-rpc-commands-advanced-1-ce.png)

| **Parameter**           | **Default value**                                            | **Description**                                                                                                                                |
|:------------------------|:-------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------
| deviceNameFilter        | **.\***                                                      | Regular expression device name filter, is used to determine, which function to execute.                                                        |
| methodFilter            | **echo**                                                     | Regular expression method name filter, is used to determine, which function to execute.                                                        |
| requestTopicExpression  | **sensor/${deviceName}/request/${methodName}/${requestId}**  | JSON-path expression, is used for creating topic address to send RPC request.                                                                  |
| responseTopicExpression | **sensor/${deviceName}/response/${methodName}/${requestId}** | JSON-path expression, is used for creating topic address to subscribe for response message.                                                    |
| responseTimeout         | **10000**                                                    | Value in milliseconds. If there is no response within this period after sending the request, gateway will unsubscribe from the response topic. |
| valueExpression         | **${params}**                                                | JSON-path expression, is used for creating data for sending to broker.                                                                         |
| ---

{% capture methodFilterOptions %}
There are 2 options for RPC request:
1. **With a response** -- If the configuration includes a responseTopicExpression, the gateway will attempt to subscribe to it and wait for a response.
2. **Without a response** -- If the configuration does not include a responseTopicExpression, the gateway will simply send the message without waiting for a response.
   {% endcapture %}
   {% include templates/info-banner.md content=methodFilterOptions %}

You can use **deviceNameFilter** and **methodFilter** to apply different mapping rules for various devices/methods.
Once Gateway receives RPC request from the server to the device, it will publish the corresponding message based on **requestTopicExpression** and **valueExpression**.
In case you expect a reply to the request from the device, you should also specify **responseTopicExpression** and **responseTimeout**.
The Gateway will subscribe to the "response" topic and wait for a device reply until "responseTimeout" is reached (in milliseconds).

Here is an example of an RPC request (rpc-request.json) that needs to be sent from the server:

```json
{
  "method": "echo",
  "params": {
    "message": "Hello!"
  }
}
```

Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to configure
it manually. To use them, make sure you set all the required parameters (in the case of MQTT Connector, these are the following:
**requestTopicExpression**, **responseTopicExpression**, **responseTimeout**, **valueExpression**).
See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).