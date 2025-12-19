Attribute updates allow you to update objects values on the BACnet device. You can add new attribute updates in the 
“**Attribute updates**” section of the device configuration page.

As an example, we will use a BACnet controller to which a relay is connected. We also know that the relay has the 
following object ID: `Binary Input:1`. We added this Object ID as a telemetry parameter with the key `relay`. We used 
telemetry so that later it would be convenient for us to see if the value we changed using the attribute update 
has changed. You, also, can add this telemetry datapoint to the device configuration or use the reserved `get` method 
to check the value of the node.

Let’s add an attribute update to our configuration. For this purpose, follow these steps:

{% assign attributeUpdates = '
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
        image: /images/gateway/bacnet-connector/examples/connector-configuration-attribute-updates-1.png,
        title: Scroll down to the “**Attribute updates**” section and click on the “**Pencil**” icon to edit the attribute updates.
    ===
        image: /images/gateway/bacnet-connector/examples/connector-configuration-attribute-updates-2.png,
        title: Click on the “**Add attribute update**” button. In our case, we will add `relay` attribute update, so the “**Key**” field, enter `relay`, select the “**Object ID**” as **Analog Input** and "**1**", "**Property ID**" as "**Present Value**".
    ===
        image: /images/gateway/bacnet-connector/examples/connector-configuration-attribute-updates-3.png,
        title: Remember to save your changes by clicking the “**Apply**” button and click save connector configuration button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributeUpdates %}

Now we can check if the attribute update works. Go to "**Entities**" → "**Devices**" → select a created 
device → "**Attributes**" tab → select "**Shared attributes**" → click on the "**+**" icon and add `relay` attribute 
with type "**Boolean**" set it to "**True**".

{% assign attributeUpdates2 = '
    ===
        image: /images/gateway/bacnet-connector/examples/connector-configuration-attribute-updates-4.png,
    ===
        image: /images/gateway/bacnet-connector/examples/connector-configuration-attribute-updates-5.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=attributeUpdates2 %}

Now, let’s check the value of the relay Object ID. In the selected device, go to the "**Last telemetry**" tab and 
check the value of the `relay` telemetry. It should be `true` since we set the shared attribute to `true`.

![image](/images/gateway/bacnet-connector/examples/connector-configuration-attribute-updates-6.png)

Try to change the value of the `relay` shared attribute to `false`. After a few seconds, you should see that the
`relay` telemetry value has changed to `false`, which means that the attribute update worked correctly.

Full configuration for BACnet connector for the examples above will look like this 
(**make sure to use the right device host and port**):

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
    "networkNumber": 3,
    "deviceDiscoveryTimeoutInSec": 5
  },
  "devices": [
    {
      "altResponsesAddresses": [],
      "host": "YOUR_DEVICE_HOST",
      "port": 47808,
      "networkMask": "",
      "deviceInfo": {
        "deviceNameExpression": "${objectName}",
        "deviceProfileExpression": "default",
        "deviceNameExpressionSource": "expression",
        "deviceProfileExpressionSource": "constant"
      },
      "pollPeriod": 10000,
      "timeseries": [
        {
          "key": "relay",
          "objectType": "binaryInput",
          "objectId": 1,
          "propertyId": "presentValue"
        }
      ],
      "attributes": [],
      "attributeUpdates": [
        {
          "key": "relay",
          "objectType": "binaryInput",
          "objectId": 1,
          "propertyId": "presentValue"
        }
      ],
      "serverSideRpc": []
    }
  ]
}
```
{:.copy-code}
