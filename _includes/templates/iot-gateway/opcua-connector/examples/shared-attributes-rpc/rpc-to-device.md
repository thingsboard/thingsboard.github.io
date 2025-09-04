RPC to Device allows you to execute an OPC-UA server method on a specific device.
It is important to note that the method you are calling must be defined on the OPC-UA server.

As an example, we will use ThingsBoard OPC-UA Demo Server, which can be run using Docker and the following command:
```bash
docker run -it -p 4840:4840 thingsboard/tb-gw-opcua-server:latest
```

The server has the following endpoint URL: `opc.tcp://0.0.0.0:4840/freeopcua/server/`.

#### Example: Multiplying Numbers

We are interested in "**multiply**" method node which will multiply two numbers that we will pass as arguments.
To call this method, first we need to configure the OPC-UA connector to support RPC calls. For this purpose, follow 
these steps:

{% assign rpcToDevice = '
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-1.png,
        title: Go to "**Entities**" → "**Gateways**" in the right sidebar and select your gateway.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-2.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-relative-path-1.png,
        title: Select the created OPC-UA connector, click on the "**Data mapping**" tab. Make sure you have configured and connected device (if you do not know how to do it, see [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=opcua){:target="_blank"} guide or [Connection settings](/docs/iot-gateway/config/opc-ua/#connection-settings) and [Data mapping](/docs/iot-gateway/config/opc-ua/#data-mapping) sections of this guide). Click on the "**Pencil**" icon on a device you want to configure RPC method for.
    ===
        image: /images/gateway/opc-ua-connector/examples/rpc-to-device-1.png,
        title: Scroll down to the "**RPC methods**" section and click on the "**Pencil**" icon to edit the RPC methods.
    ===
        image: /images/gateway/opc-ua-connector/examples/rpc-to-device-2.png,
        title: Click on the "Add method" button. In our case, we will add the `multiply` method, so fill in the "**Method**" field with `multiply` and in the "**Arguments**" field, enter the arguments that the method accepts, in our case it is two numbers, feel free to enter any numbers.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-relative-path-9.png,
        title: Remember to save your changes by clicking the "**Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=rpcToDevice %}

We are done with configuration, so let's check how to call the method. In the RPC Debug Terminal widget, run the 
following command:

```bash
multiply
```

In this case, the method will be called with the arguments that we specified in the configuration (default arguments). 
As you remember, in our case, we enter 5 and 4, so the result is:

![image](/images/gateway/opc-ua-connector/examples/result-device-overview-5.png)

Also, we can pass arguments to the method directly from the RPC Debug Terminal widget using the following command:

```bash
multiply [3,4]
```

Response:

![image](/images/gateway/opc-ua-connector/examples/result-device-overview-6.png)

Full configuration for OPC-UA connector for the example above will look like this:

```json
{
  "name": "OPCUA",
  "server": {
    "url": "opc.tcp://0.0.0.0:4840/freeopcua/server/",
    "timeoutInMillis": 5000,
    "scanPeriodInMillis": 3600000,
    "pollPeriodInMillis": 5000,
    "enableSubscriptions": false,
    "subCheckPeriodInMillis": 100,
    "showMap": false,
    "security": "Basic128Rsa15",
    "identity": {
      "type": "anonymous"
    }
  },
  "mapping": [
    {
      "deviceNodeSource": "path",
      "deviceNodePattern": "Root\\.Objects\\.MyObject",
      "deviceInfo": {
        "deviceNameExpression": "Demo Device",
        "deviceNameExpressionSource": "constant",
        "deviceProfileExpression": "default",
        "deviceProfileExpressionSource": "constant"
      },
      "attributes": [],
      "timeseries": [
        {
          "key": "some_key",
          "type": "path",
          "value": "${some_key}"
        }
      ],
      "rpc_methods": [
        {
          "method": "multiply",
          "arguments": [
            {
              "type": "integer",
              "value": 5
            },
            {
              "type": "integer",
              "value": 4
            }
          ]
        }
      ],
      "attributes_updates": []
    }
  ]
}
```
