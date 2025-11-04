There are situations when a BACnet device has a lot of objects, and you want to read all the objects of the device 
without having to manually add each object to the connector configuration. Or maybe you don't know what objects are in 
the device and want to read all the objects automatically. The BACnet connector supports this functionality and allows 
you to read all the objects of the device by easily configuring just one parameter.

Let's look at an example of how to properly configure reading all device objects.

In order to read all the device objects, you need to decide where exactly the values of these objects will be stored: 
in `telemetry` or `attributes`. Depending on this, you need to put `*` in the corresponding section.

In our case, we will store all objects in time series, so the device configuration will look like this:

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
      "timeseries": "*",
      "attributes": [],
      "attributeUpdates": [],
      "serverSideRpc": []
    }
  ]
}
```
{:.copy-code}

As you can see from the configuration above, we have put `*` in the `timeseries` section, which means that all device 
objects will be saved in the telemetry. In the `attributes` section, we have not put `*`, so the attributes will not 
be read.

After saving the changes and starting the connector, you can see that the corresponding device has been added to the 
platform, and its telemetry has started to fill with all the device objects:

![image](/images/gateway/bacnet-connector/examples/device-objects-overview.png)
