RPC To Connector allows you to send a command to the connector from the ThingsBoard IoT Gateway UI.
It is important to note that the method you are calling must be defined on the OPC-UA server.

{% capture difference %}
**Please note**: The RPC To Connector will execute the method on every device that has the OPC-UA connector configured.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

As an example, we will use ThingsBoard OPC-UA Demo Server, which can be run using Docker and the following command:
```bash
docker run -it -p 4840:4840 thingsboard/tb-gw-opcua-server:latest
```

The server has the following endpoint URL: `opc.tcp://0.0.0.0:4840/freeopcua/server/`.

#### Example: Relay Controlling

Let's see a practical example of using RPC To Connector. On our OPC-UA server, we have "set_relay" method that
turns on or off the relay. The method accepts a boolean argument, where `true` turns on the relay and `false` turns 
it off. To call this method, use the following steps:

{% assign rpcToConnector = '
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-1.png,
        title: Go to "**Entities**" → "**Gateways**" in the right sidebar and select your gateway.
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-2.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: https://img.thingsboard.io/gateway/opc-ua-connector/examples/rpc-to-connector-1.png,
        title: Select the created OPC-UA connector, click on the "**RPC**" icon. Make sure you have configured and connected device (if you do not know how to do it, see [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=opcua){:target="_blank"} guide or [Connection settings](/docs/iot-gateway/config/opc-ua/#connection-settings) and [Data mapping](/docs/iot-gateway/config/opc-ua/#data-mapping) sections of this guide).
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=rpcToConnector %}

Let's first turn on the relay. To do this, fill in the "**Method**" field with `set_relay` and in the "**Arguments**" field
enter `true`, then click on the "**Send**" button.

![image](https://img.thingsboard.io/gateway/opc-ua-connector/examples/rpc-to-connector-2.png)

As you can see, the response contains `true`, which means that the method was executed successfully and the relay is 
now on:

![image](https://img.thingsboard.io/gateway/opc-ua-connector/examples/rpc-to-connector-3.png)

And finally, let's turn off the relay. To do this, fill in the "**Method**" field with `set_relay` and in the
"**Arguments**" field enter `false`, then click on the "**Send**" button:

![image](https://img.thingsboard.io/gateway/opc-ua-connector/examples/rpc-to-connector-4.png)

Result:

![image](https://img.thingsboard.io/gateway/opc-ua-connector/examples/rpc-to-connector-5.png)

Full configuration for OPC-UA connector for the example above will look like this:

```json
{
  "server": {
    "url": "opc.tcp://0.0.0.0:4840/freeopcua/server/",
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
      "deviceNodePattern": "Root\\.Objects\\.MyObject",
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
          "key": "Frequency",
          "type": "path",
          "value": "${Frequency}"
        }
      ],
      "rpc_methods": []
    }
  ]
}
```
