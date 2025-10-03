Attribute updates allow you to update node values in the OPC-UA server. 
You can add new attribute updates in the "**Attribute updates**" section of the device configuration page.

As an example, we will use Prosys OPC-UA Simulation Server, which is available at `opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer`.
The server has the following structure:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-server-structure-overview-4.png)

### Example: Text Message Editing (Identifier)

We are interested in node "**TextMessage**", we added this node as a telemetry parameter with the key `text_message`. 
We used telemetry so that later it would be convenient for us to see if the value we changed using the attribute update  
has changed. You, also, can add this telemetry datapoint to the device configuration or use the reserved `get` method 
to check the value of the node.

Let's add an attribute update to our configuration. For this purpose, follow these steps:
- Go to "**Entities**" → "**Gateways**" in the right sidebar.
- Select your gateway.
- Click on the "**Connectors**" tab.
- Select the OPC-UA connector and click on the "**Data mapping**" tab.
- Make sure you have configured and connected device (if you don't know how to do it, see Getting Started guide or 
  Connection settings and Data mapping sections of this guide). Click on the "**Pencil**" icon on a device you want to 
  configure attribute updates for.
- Scroll down to the "**Attribute updates**" section and click on the "**Pencil**" icon to edit the attribute updates.
- Click on the "**Add attribute update**" button. In our case, we will add `text_message` attribute update, so the "**Key**" 
  field, enter `text_message`, select the "**Type**" as **Identifier**, and in the "**Value**" field enter 
  `${ns=2;i=1005}`. This is an identifier of the OPC-UA server node we want to update.
- Remember to save your changes by clicking the "**Apply**" button.

{% assign attributeUpdatesIdentifier = '
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-1.png,
        title: Go to "**Entities**" → "**Gateways**" in the right sidebar and select your gateway.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-2.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-relative-path-1.png,
        title: Select the created OPC-UA connector, click on the "**Data mapping**" tab. Make sure you have configured and connected device (if you do not know how to do it, see [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=opcua){:target="_blank"} guide or [Connection settings](/docs/iot-gateway/config/opc-ua/#connection-settings) and [Data mapping](/docs/iot-gateway/config/opc-ua/#data-mapping) sections of this guide). Click on the "**Pencil**" icon on a device you want to configure attribute updates for.
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-identifier-1.png,
        title: Scroll down to the "**Attribute updates**" section and click on the "**Pencil**" icon to edit the attribute updates.
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-identifier-2.png,
        title: Click on the "**Add attribute update**" button. In our case, we will add `text_message` attribute update, so the "**Key**" field, enter `text_message`, select the "**Type**" as **Identifier**, and in the "**Value**" field enter `${ns=2;i=1005}`. This is an identifier of the OPC-UA server node we want to update.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-relative-path-9.png,
        title: Remember to save your changes by clicking the "**Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributeUpdatesIdentifier %}

Now we can check if the attribute update works. Go to "**Devices**" → select a created device → "**Attributes**" tab → 
select "**Shared attributes**" → click on the "**+**" icon and add `text_message` attribute with type "**String**" set 
it to "**Hello from Gateway!**".

{% assign attributeUpdatesIdentifier2 = '
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-relative-path-4.png,
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-identifier-3.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=attributeUpdatesIdentifier2 %}

Now, let's check the value of the text message node. In the selected device, go to the "**Last telemetry**" tab and check the 
value of the `text_message` telemetry. It should be `Hello from Gateway!` since we set the shared attribute to `Hello from Gateway!`.

![image](/images/gateway/opc-ua-connector/examples/result-device-overview-4.png)

Try to change the value of the `text_message` shared attribute to `Hello from <your_name>!`. After a few seconds, 
you should see that the `text_message` telemetry value has changed to `Hello from <your_name>!`, which means that the 
attribute update worked correctly.

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
      "deviceNodeSource": "path",
      "deviceNodePattern": "Root\\.Objects\\.DemoDevice",
      "deviceInfo": {
        "deviceNameExpression": "Demo Device",
        "deviceNameExpressionSource": "constant",
        "deviceProfileExpression": "default",
        "deviceProfileExpressionSource": "constant"
      },
      "attributes": [],
      "timeseries": [
        {
          "key": "text_message",
          "type": "identifier",
          "value": "${ns=3;i=1018}"
        }
      ],
      "rpc_methods": [],
      "attributes_updates": [
        {
          "key": "text_message",
          "type": "identifier",
          "value": "${ns=3;i=1018}"
        }
      ]
    }
  ]
}
```
