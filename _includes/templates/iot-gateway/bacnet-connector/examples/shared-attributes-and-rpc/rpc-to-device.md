RPC to Device allows sending RPC commands to the device that is connected to ThingsBoard directly 
or via Gateway.

As an example, we will use a BACnet controller with temperature sensor. We also know that the temperature sensor has the
following object ID: `Analog Value:1`, so we will read this value using RPC to Device. To call this method, first, 
we need to configure the BACnet connector to support RPC calls. For this purpose, follow these steps:

{% assign rpcToDevice = '
    ===
        image: /images/gateway/bacnet-connector/examples/select-created-gateway.png,
        title: Go to "**Entities**" → "**Gateways**" in the left sidebar and select your gateway.
    ===
        image: /images/gateway/bacnet-connector/examples/select-connector-configuration.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/bacnet-connector/examples/select-device-configuration.png,
        title: Select the created BACnet connector and click on the "**Devices**" tab. Make sure you have configured and connected device (if you don’t know how to do it, see [Application settings](/docs/iot-gateway/config/bacnet/#application) and [Data mapping](/docs/iot-gateway/config/bacnet/#data-mapping) sections of this guide). Click on the “**Pencil**” icon on a device you want to configure attribute updates for.
    ===
        image: /images/gateway/bacnet-connector/examples/rpc-to-device-1.png,
        title: Scroll down to the "**RPC methods**" section and click on the "**Pencil**" icon to edit the RPC methods.
    ===
        image: /images/gateway/bacnet-connector/examples/rpc-to-device-2.png,
        title: Click on the "**Add method**" button. Fill in the "**Method**" field with `getTemperature`, select the "**Request Type**" as "**Read Property**", "**Object ID**" as "**Analog Value**" and "**1**", and "**Property ID**" as "**Present Value**".
    ===
        image: /images/gateway/bacnet-connector/examples/rpc-to-device-3.png,
        title: Remember to save your changes by clicking the "**Apply**" button and click save connector configuration button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=rpcToDevice %}

We are done with configuration, so let's check how to call the method. In the RPC Debug Terminal widget, run the 
following command:

```bash
getTemperature
```

Response:

![image](/images/gateway/bacnet-connector/examples/rpc-to-device-4.png)

{% capture difference %}
The RPC Debug Terminal is used only for example purpose, so you can use any other widget that supports RPC calls.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Full configuration for BACnet connector for the example above will look like 
this (**make sure to use the right device host and port**):

```json
{
  "application": {
    "objectName": "TB_gateway",
    "host": "YOUR_HOST",
    "port": 47808,
    "objectIdentifier": 599,
    "vendorIdentifier": 15,
    "maxApduLengthAccepted": 1476,
    "segmentationSupported": "segmentedBoth",
    "deviceDiscoveryTimeoutInSec": 5
  },
  "devices": [
    {
      "altResponsesAddresses": [],
      "host": "YOUR_DEVICE_HOST",
      "port": 47808,
      "deviceInfo": {
        "deviceNameExpression": "${objectName}",
        "deviceProfileExpression": "default",
        "deviceNameExpressionSource": "expression",
        "deviceProfileExpressionSource": "constant"
      },
      "pollPeriod": 10000,
      "timeseries": [
        {
          "key": "some-key",
          "objectType": "binaryInput",
          "objectId": 1,
          "propertyId": "presentValue"
        }
      ],
      "attributes": [],
      "attributeUpdates": [],
      "serverSideRpc": [
        {
          "method": "getTemperature",
          "objectType": "analogValue",
          "objectId": 1,
          "propertyId": "presentValue",
          "timeout": 5000,
          "requestType": "readProperty"
        }
      ]
    }
  ]
}
```
