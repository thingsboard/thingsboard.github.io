Attributes and time series data can be accessed using [relative paths](/docs/iot-gateway/config/opc-ua/#relative-path)
in the OPC UA Connector. This allows you to retrieve data without needing to specify the full path to the node.
Additionally, we may use [identifiers](/docs/iot-gateway/config/opc-ua/#identifier-types) for "**Device node**".
 
As an example, we will use Prosys OPC-UA Simulation Server, which is available at
`opc.tcp://0.0.0.0:53530/OPCUA/SimulationServer`. The server has the following structure:

![image](/images/gateway/opc-ua-connector/examples/opc-ua-server-structure-overview-2.png)


We are interested in node "**Humidity**". We will use this node to retrieve the humidity data.

Let's configure the humidity data in the OPC-UA connector, using [relative paths](/docs/iot-gateway/config/opc-ua/#relative-path).
For this purpose, follow these steps:

{% assign attributesAndTimeSeriesRelativePathIdentifierDeviceNode = '
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-1.png,
        title: Go to "**Entities**" → "**Gateways**" in the left sidebar and select your gateway.
    ===
        image: /images/gateway/opc-ua-connector/examples/device-name-and-profile-absolute-path-2.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/opc-ua-connector/examples/attributes-time-series-relative-path-device-identifier-1.png,
        title: Select the OPC-UA connector, click on the "**Data mapping**" tab. Select data mapping with device to which you want to add time series data (if you do not know how to add a new device, see the [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=opcua){:target="_blank"} guide or [Data mapping](/docs/iot-gateway/config/opc-ua/#data-mapping) section of this guide with respective examples).
    ===
        image: /images/gateway/opc-ua-connector/examples/attributes-time-series-relative-path-device-identifier-2.png,
        title: In the opened data mapping windows, click on the "**pencil**" icon next to the "**Time series**" or "**Attributes**" section.
    ===
        image: /images/gateway/opc-ua-connector/examples/attributes-time-series-relative-path-3.png,
        title: Click on the "**Add time series**" button. Fill in the "**Key**" field with `Humidity`, also select "**[Path](/docs/iot-gateway/config/opc-ua/#relative-path)**" in "**Type**" field, and fill in the "**Value**" field with `${Humidity}`. This is a relative path to the node that contains the humidity data.
    ===
        image: /images/gateway/opc-ua-connector/examples/attributes-time-series-relative-path-device-identifier-3.png,
        title: Remember to save your changes by clicking the "**Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributesAndTimeSeriesRelativePathIdentifierDeviceNode %}

Now we can check if the humidity data is sending correctly. Go to "**Entities**" > "**Devices**", select a created device and as you
can see, the humidity data is available in the "**Time series**" section:

![image](/images/gateway/opc-ua-connector/examples/result-device-overview-relative-path-device-identifier.png)

If you are using advanced configuration mode and want to set the humidity data using a relative path, you can 
use the following configuration:

```json
{
  "name": "OPCUA",
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
      "deviceNodeSource": "identifier",
      "deviceNodePattern": "ns=3;i=1008",
      "deviceInfo": {
        "deviceNameExpression": "Demo Device",
        "deviceNameExpressionSource": "constant",
        "deviceProfileExpressionSource": "constant",
        "deviceProfileExpression": "default"
      },
      "attributes": [],
      "timeseries": [
        {
          "key": "Humidity",
          "type": "path",
          "value": "${Humidity}"
        }
      ],
      "rpc_methods": [],
      "attributes_updates": []
    }
  ]
}
```