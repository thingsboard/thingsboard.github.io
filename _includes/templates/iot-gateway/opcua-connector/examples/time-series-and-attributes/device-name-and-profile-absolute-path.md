The device name and profile can be set dynamically using node values. In this example, we will use an 
[absolute path](/docs/iot-gateway/config/opc-ua/#absolute-path) to specify the device name and profile.

As an example, we will use Prosys OPC-UA Simulation Server, which is available at
`opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer`. The server has the following structure:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-server-structure-overview.png)

We are interested in nodes: "**DeviceModelName**" and "**DeviceSeries**". We will use these nodes to set the device name
and profile, respectively.

Let's configure the device name and profile in the OPC-UA connector. For this purpose, follow these steps:

{% assign deviceNameAndProfileAbsolutePath = '
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-1.png,
        title: Go to "**Entities**" → "**Gateways**" in the right sidebar and select your gateway.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-2.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-3.png,
        title: Select the created OPC-UA connector, click on the "**Data mapping**" tab. Firstly, we need to configure parent (or device) node. Click on the "**+ Add mapping**" button.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-4.png,
        title: In the opened window, fill in "**Device node**" field with `Root\.Objects\.DemoDevice`, also select "**[Path](/docs/iot-gateway/config/opc-ua/#absolute-path)**" in "**Source**" field. This is an absolute path to the parent node of the device we want to create.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-5.png,
        title: In the "**Name**" field, enter `${Root\.Objects\.DemoDeviceInfo\.DeviceModelName}`, also select "**[Path](/docs/iot-gateway/config/opc-ua/#absolute-path)**" in "**Source**" field. This is an absolute path to the node that contains the device name.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-6.png,
        title: In the "**Profile name**" field, enter `${Root\.Objects\.DemoDeviceInfo\.DeviceSeries}`, also select "**[Path](/docs/iot-gateway/config/opc-ua/#absolute-path)**" in "**Source**" field. This is an absolute path to the node that contains the device profile.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-7.png,
        title: Also, we need to add one attribute/time series because the connector will not add a device without any data to read (you can use any pre-installed Prosys OPC-UA Simulation Server node). Click on the "**pencil**" icon next to the "**Attributes**" section.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-8.png,
        title: In the opened window, click on the "**Add attribute**" button and fill the fields as on the corresponding image.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-9.png,
        title: Remember to save your changes by clicking the "**Save**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceNameAndProfileAbsolutePath %}

Now we can check if the device name and profile are set correctly. Go to "**Entities**" > "**Devices**" and as you can see, the device
name is set to `Demo Device` and the profile is set to `Demo Series`.

![image](/images/gateway/opc-ua-connector/examples/result-device-overview.png)

If you are using advanced configuration mode and want to set the device name and profile using an absolute path, you can
use the following configuration:

```json
{
  "name": "OPC-UA",
  "server": {
    "url": "opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer",
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
      "deviceNodePattern": "Root\\.Objects\\.DemoDevice",
      "deviceInfo": {
        "deviceNameExpression": "${Root\\.Objects\\.DemoDeviceInfo\\.DeviceModelName}",
        "deviceNameExpressionSource": "path",
        "deviceProfileExpressionSource": "path",
        "deviceProfileExpression": "${Root\\.Objects\\.DemoDeviceInfo\\.DeviceSeries}"
      },
      "attributes": [
        {
          "key": "some_key",
          "type": "identifier",
          "value": "${ns=3;i=1001}"
        }
      ],
      "timeseries": [],
      "rpc_methods": [],
      "attributes_updates": []
    }
  ]
}
```
