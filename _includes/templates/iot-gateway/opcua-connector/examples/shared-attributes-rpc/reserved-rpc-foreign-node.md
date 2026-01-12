Every telemetry and attribute parameter comes with built-in `get` and `set` RPC methods, so you don’t need to configure them manually.

Additionally, you can use the reserved RPC methods to access any node on the OPC-UA server - even if it doesn’t belong to a specific device. This is especially useful when management or control nodes are located outside the device’s node tree.
We will set the device node to `Root\.Objects\.DemoDevice`, but we will access the `TextMessage` node located at `Root\.Objects\.DemoDeviceInfo\.TextMessage`, which is outside the device node tree.
As an example, we will use Prosys OPC-UA Simulation Server, which is 
available at `opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer`. The server has the following structure:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-server-structure-overview-4.png)

We’re interested in the "**TextMessage**" which has the "**[Path](/docs/iot-gateway/config/opc-ua/#absolute-path)**" - `Root\.Objects\.DemoDeviceInfo\.TextMessage`, 
and does not belong to the device node tree. We added this node as a telemetry parameter
with the key `textmessage`, so it would be easy to verify later whether the value changed after calling the reserved `set` RPC method.

```json
"timeseries": [
  {
    "key": "textmessage",
    "type": "path",   
    "path": "${Root\\.Objects\\.DemoDeviceInfo\\.TextMessage}"
  }
]
```
{: .copy-code}

Let's check the value of the textmessage node using the reserved `get` method. To get the current value of textmessage node, 
run the query in RPC debug terminal:

```bash
get Root\\.Objects\\.DemoDeviceInfo\\.TextMessage;
```
{: .copy-code}

Response:

```json
{"result":{"value":"HI"}}
```
{: .copy-code}

![image](/images/gateway/opc-ua-connector/examples/opc-ua-reserved-rpc-get-foreign-nodes-result-1.png)

So, the `get` method returns the current value of the textmessage node, and we can see that the textmessage is `HI`.

{% capture difference %}
The RPC Debug Terminal is used only for example purpose, so you can use any other widget that supports RPC calls.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To set the value of the textmessage node and change its value, run the query:

```bash
set Root\\.Objects\\.DemoDeviceInfo\\.TextMessage; New Message
```
{: .copy-code}

Response:

```json
{"result":{"value":"New Message"}}
```
{: .copy-code}

And as you can see, from the screenshot below, the textmessage telemetry value has changed to `New Message`:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-reserved-rpc-set-foreign-nodes-result-1.png)

Also, let's check the value of the textmessage telemetry again:

```bash
get Root\\.Objects\\.DemoDeviceInfo\\.TextMessage;
```
{: .copy-code}

Response:

```json
{"result":{"value":"New Message"}}
```
{: .copy-code}

![image](/images/gateway/opc-ua-connector/examples/opc-ua-reserved-rpc-get-foreign-nodes-result-2.png)

Full configuration for OPC-UA connector for the examples above will look like this:

```json
{
  "server": {
    "url": "opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer",
    "timeoutInMillis": 5000,
    "scanPeriodInMillis": 3600000,
    "enableSubscriptions": true,
    "subCheckPeriodInMillis": 100,
    "showMap": false,
    "security": "Basic128Rsa15",
    "identity": {
      "type": "anonymous"
    },
    "pollPeriodInMillis": 5000
  },
  "mapping": [
    {
      "deviceNodePattern": "Root\\.Objects\\.DemoDevice",
      "deviceNodeSource": "path",
      "deviceInfo": {
        "deviceNameExpression": "Demo Device",
        "deviceNameExpressionSource": "constant",
        "deviceProfileExpression": "default",
        "deviceProfileExpressionSource": "constant"
      },
      "attributes": [],
      "attributes_updates": [],
      "timeseries": [
        {
          "key": "textmessage",
          "type": "path",
          "value": "${Root\\.Objects\\.DemoDeviceInfo\\.TextMessage}"
        }
      ],
      "rpc_methods": []
    }
  ]
}
```
{: .copy-code}
