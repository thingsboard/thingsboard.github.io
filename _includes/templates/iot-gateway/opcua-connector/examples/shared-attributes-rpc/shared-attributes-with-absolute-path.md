Attribute updates allow you to update node values in the OPC-UA server. 
You can add new attribute updates in the "**Attribute updates**" section of the device configuration page.

As an example, we will use Prosys OPC-UA Simulation Server, which is available at `opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer`.
The server has the following structure:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-server-structure-overview-4.png)

#### Example: Fan Speed (Absolute Path)

We are interested in node "**FanSpeed**", we added this node as a telemetry parameter with the key `fan_speed`. We used 
telemetry so that later it would be convenient for us to see if the value we changed using the attribute update  
has changed. You, also, can add this telemetry datapoint to the device configuration or use the reserved `get` method 
to check the value of the node.

Let's add an attribute update to our configuration. For this purpose, follow these steps:

{% assign attributeUpdatesAbsolutePath = '
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-1.png,
        title: Go to "**Entities**" → "**Gateways**" in the left sidebar and select your gateway.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-2.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-relative-path-1.png,
        title: Select the created OPC-UA connector, click on the "**Data mapping**" tab. Make sure you have configured and connected device (if you do not know how to do it, see [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=opcua){:target="_blank"} guide or [Connection settings](/docs/iot-gateway/config/opc-ua/#connection-settings) and [Data mapping](/docs/iot-gateway/config/opc-ua/#data-mapping) sections of this guide). Click on the "**Pencil**" icon on a device you want to configure attribute updates for.
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-absolute-path-1.png,
        title: Scroll down to the "**Attribute updates**" section and click on the "**Pencil**" icon to edit the attribute updates.
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-absolute-path-2.png,
        title: Click on the "**Add attribute update**" button. In our case, we will add `fan_speed` attribute update, so the "**Key**" field, enter `fan_speed`, select the "**Type**" as **Path**, and in the "**Value**" field enter `${Root\.Objects\.DemoDeviceInfo\.FanSpeed}`. This is an absolute path to the OPC-UA server node we want to update.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-relative-path-9.png,
        title: Remember to save your changes by clicking the "**Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributeUpdatesAbsolutePath %}

Now we can check if the attribute update works. Go to "**Devices**" → select a created device → "**Attributes**" tab → 
select "**Shared attributes**" → click on the "**+**" icon and add `fan_speed` attribute with type "**Integer**" set it 
to "**90**".

{% assign attributeUpdatesAbsolutePath2 = '
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-relative-path-4.png,
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-absolute-path-3.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=attributeUpdatesAbsolutePath2 %}

Now, let's check the value of the fan speed node. In the selected device, go to the "**Last telemetry**" tab and check the 
value of the `fan_speed` telemetry. It should be `90` since we set the shared attribute to `90`.

![image](/images/gateway/opc-ua-connector/examples/result-device-overview-3.png)

Try to change the value of the `fan_speed` shared attribute to `30`. After a few seconds, you should see that the
`fan_speed` telemetry value has changed to `30`, which means that the attribute update worked correctly.

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
      "attributes_updates": [
        {
          "key": "fan_speed",
          "type": "path",
          "value": "${Root\\.Objects\\.DemoDeviceInfo\\.FanSpeed}"
        }
      ],
      "timeseries": [
        {
          "key": "fan_speed",
          "type": "identifier",
          "value": "${ns=3;i=1017}"
        }
      ],
      "rpc_methods": []
    }
  ]
}
```
