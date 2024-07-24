There are 2 options for RPC request:
**With a response** -- If the configuration includes a responseTopicExpression, the gateway will attempt to subscribe to it and wait for a response.

To adding new requests mapping, navigate to the "Requests mapping" tab and click the "plus" icon.
In the open modal window, select the "RPC command" request type, and set a device name filter, method filter, request topic expression, value expression, response topic expression, response topic QoS and response timeout. Then, click "Add".

![image](/images/gateway/mqtt-connector/server-side-rpc-commands-basic-1-ce.png)

**Without a response** -- If the configuration does not include a responseTopicExpression, the gateway will simply send the message without waiting for a response.

To adding new requests mapping, navigate to the "Requests mapping" tab and click the "plus" icon.
In the open modal window, select the "RPC command" request type, toggle "Without response" option, and set a device name filter, method filter, and value expression. Then, click "Add".

![image](/images/gateway/mqtt-connector/server-side-rpc-commands-basic-2-ce.png)

| **Parameter**           | **Default value**                                            | **Description**                                                                                                                                |
|:------------------------|:-------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------
| deviceNameFilter        | **.\***                                                      | Regular expression device name filter, is used to determine, which function to execute.                                                        |
| methodFilter            | **echo**                                                     | Regular expression method name filter, is used to determine, which function to execute.                                                        |
| requestTopicExpression  | **sensor/${deviceName}/request/${methodName}/${requestId}**  | JSON-path expression, is used for creating topic address to send RPC request.                                                                  |
| responseTopicExpression | **sensor/${deviceName}/response/${methodName}/${requestId}** | JSON-path expression, is used for creating topic address to subscribe for response message.                                                    |
| responseTimeout         | **10000**                                                    | Value in milliseconds. If there is no response within this period after sending the request, gateway will unsubscribe from the response topic. |
| valueExpression         | **${params}**                                                | JSON-path expression, is used for creating data for sending to broker.                                                                         |
| ---

You can use **device name filter** and **method filter** to apply different mapping rules for various devices/methods.
Once Gateway receives RPC request from the server to the device, it will publish the corresponding message based on **request topic expression** and **value expression**.
In case you expect a reply to the request from the device, you should also specify **response topic expression** and **response timeout**.
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
**request topic expression**, **response topic expression**, **response timeout**, **value expression**).
See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).