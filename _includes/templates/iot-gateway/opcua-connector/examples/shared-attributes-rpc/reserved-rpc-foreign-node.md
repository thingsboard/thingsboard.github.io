Every telemetry and attribute parameter comes with built-in `get` and `set` RPC methods, so you don’t need to configure them manually.

Additionally, you can use the reserved RPC methods to access any node on the OPC-UA server-even if it doesn’t belong to a specific device. This is especially useful when management or control nodes are located outside the device’s node tree.
As an example, we will use Prosys OPC-UA Simulation Server, which is 
available at `opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer`. The server has the following structure:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-server-structure-overview-4.png)

We’re interested in the "**DeviceSeries**" which hast the "**[Path](/docs/iot-gateway/config/opc-ua/#absolute-path)**" - `${Root\\.Objects\\.DemoDeviceInfo\\.DeviceSeries}`, 
and does not belong to the device node tree. We added this node as a telemetry parameter
with the key `deviceseries`, so it would be easy to verify later whether the value changed after calling the reserved `set` RPC method.

```json
"timeseries": [
  {
    "key": "deviceseries",
    "type": "path",   
    "path": "${Root\\.Objects\\.DemoDeviceInfo\\.DeviceSeries}"
  }
]
```

Let's check the value of the relay node using the reserved `get` method. To get the current value of relay node, 
run the query in RPC debug terminal:

```bash
get Root\\.Objects\\.DemoDeviceInfo\\.DeviceSeries;
```

Response:

```json
{"result":{"value":"Demo Series"}}
```

![image](/images/gateway/opc-ua-connector/examples/opc-ua-reserved-rpc-get-foreign-nodes-result-1.png)

So, the `get` method returns the current value of the deviceseries node, and we can see that the deviceseries is `Demo Series`.

{% capture difference %}
The RPC Debug Terminal is used only for example purpose, so you can use any other widget that supports RPC calls.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To set the value of the relay node and turn it on, run the query:

```bash
set Root\\.Objects\\.DemoDeviceInfo\\.DeviceSeries; New Serie
```

Response:

```json
{"result":{"value":"New Serie"}}
```

And as you can see, from the screenshot below, the relay telemetry value has changed to `true`:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-reserved-rpc-set-foreign-nodes-result-1.png)

Also, let's check the value of the relay telemetry again:

```bash
get Root\\.Objects\\.DemoDeviceInfo\\.DeviceSeries;
```

Response:

```json
{"result":{"value":"New Serie"}}
```

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
          "key": "deviceseries",
          "type": "path",
          "value": "${Root\\.Objects\\.DemoDeviceInfo\\.DeviceSeries}"
        }
      ],
      "rpc_methods": []
    }
  ]
}
```
