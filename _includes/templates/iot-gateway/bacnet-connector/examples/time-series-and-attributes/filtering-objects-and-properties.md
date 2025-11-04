There are situations when a BACnet device has a lot of objects, and you want to read only specific objects or 
properties from the device. You can use filtering options to specify which data should be collected and sent to the 
platform. 

Let's look at an example of how to properly configure filtering feature.

In our case, we have a device that have a lot of objects, but we want to read `presentValue` and `units` properties 
from only the first three `Analog Value` objects. In order to do this, we need to configure the filtering options 
in the attributes/timeseries section as shown below:

```json
{
  "application": {
    "objectName": "TB_gateway",
    "host": "YOUR_HOST",
    "port": 47808,
    "mask": "24",
    "objectIdentifier": 599,
    "maxApduLengthAccepted": 1476,
    "segmentationSupported": "segmentedBoth",
    "vendorIdentifier": 15,
    "deviceDiscoveryTimeoutInSec": 5,
    "devicesDiscoverPeriodSeconds": 30
  },
  "devices": [
    {
      "deviceInfo": {
        "deviceNameExpression": "BACnet Device ${objectName}",
        "deviceProfileExpression": "default",
        "deviceNameExpressionSource": "expression",
        "deviceProfileExpressionSource": "constant"
      },
      "altResponsesAddresses": [],
      "host": "YOUR_DEVICE_HOST",
      "port": "YOUR_DEVICE_PORT",
      "pollPeriod": 10000,
      "attributes": [],
      "timeseries": [
        {
          "key": "${objectName} ${objectType}",
          "objectType": "analogValue",
          "objectId": "1-3",
          "propertyId": ["presentValue", "units"]
        }
      ],
      "attributeUpdates": [],
      "serverSideRpc": []
    }
  ]
}
```
{:.copy-code}

As you can see from the configuration above, we have specified `objectType` as `analogValue`, `objectId` as 
`1-3` (which means we want to read objects with IDs from 1 to 3), and `propertyId` as an array containing 
`presentValue` and `units`. This configuration will ensure that only the specified properties from the selected 
objects are read and sent to the platform. Also, we specified `key` as `${objectName} ${objectType}` to have more 
descriptive telemetry keys.

After saving the changes and starting the connector, you can see that the corresponding device has been added to the 
platform, and its telemetry has started to fill with the filtered data. The screenshot below shows an example of how 
the device telemetry looks like after applying the filtering configuration:

![image](/images/gateway/bacnet-connector/examples/filtering-objects-and-properties-overview.png)
