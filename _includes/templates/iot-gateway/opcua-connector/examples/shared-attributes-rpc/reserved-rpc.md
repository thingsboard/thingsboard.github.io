Every telemetry and attribute parameter has `GET` and `SET` RPC methods out of the box, so you don’t need to configure 
them manually.

As an example, we will use Prosys OPC-UA Simulation Server, which is 
available at `opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer`. The server has the following structure:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-server-structure-overview-3.png)

We are interested in node "**Relay**" that have `ns=3;i=1012` identifier, we added this node as a telemetry parameter 
with the key `relay` and as a path we used the node identifier `${ns=3;i=1012}`, so the configuration for this 
telemetry will look like this:

```json
"timeseries": [
  {
    "key": "relay",
    "path": "${ns=3;i=1012}"
  }
]
```

Let's check the value of the relay node using the reserved `get` method. To get the current value of relay node, 
run the query in RPC debug terminal:

```bash
get ns=3;i=1012;
```

Response:

```json
{"result":  {"value":  false}}
```

![image](/images/gateway/opc-ua-connector/examples/opc-ua-reserved-rpc-get-result-1.png)

So, the `get` method returns the current value of the relay node, and we can see that the relay is off.

{% capture difference %}
The RPC Debug Terminal is used only for example purpose, so you can use any other widget that supports RPC calls.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To set the value of the relay node and turn it on, run the query:

```bash
set ns=3;i=1012; true
```

Response:

```json
{"result":  {"value":  true}}
```

And as you can see, from the screenshot below, the relay telemetry value has changed to `true`:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-reserved-rpc-set-result-1.png)

Also, let's check the value of the relay telemetry again:

```bash
get ns=3;i=1012;
```

Response:

```json
{"result":  {"value":  true}}
```

![image](/images/gateway/opc-ua-connector/examples/opc-ua-reserved-rpc-get-result-2.png)

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
          "key": "relay",
          "type": "identifier",
          "value": "${ns=3;i=1012}"
        }
      ],
      "rpc_methods": []
    }
  ]
}
```
