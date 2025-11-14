There are situations when there are many devices with the same list of objects, the values of which need to be read.
Copying the configuration for each device is not very convenient, so the BACnet connector allows you to automatically
find all devices on the network and connect them with the same configuration. To do this, you need to specify the host
and port of the device, as well as set templates for the device name and device profile.

Let's look at an example of how to properly configure automatic device discovery. 

Suppose we have two devices with the same list of objects:

| Object Type  | Object ID | Property ID   | Key         |
|--------------|-----------|---------------|-------------|
| Analog Input | 1         | Present Value | temperature |
| Binary Input | 1         | Present Value | relay       |
| Analog Input | 2         | Present Value | humidity    |
| Analog Input | 3         | Present Value | pressure    |
| ---          |           |               |             |

To configure automatic device discovery, use the following BACnet connector configuration:

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
      "host": "*",
      "port": "*",
      "deviceInfo": {
        "deviceNameExpression": "${objectName}",
        "deviceProfileExpression": "default",
        "deviceNameExpressionSource": "expression",
        "deviceProfileExpressionSource": "constant"
      },
      "pollPeriod": 10000,
      "timeseries": [
        {
          "key": "temperature",
          "objectType": "analogInput",
          "objectId": 1,
          "propertyId": "presentValue"
        },
        {
          "key": "relay",
          "objectType": "binaryInput",
          "objectId": 1,
          "propertyId": "presentValue"
        },
        {
          "key": "humidity",
          "objectType": "analogInput",
          "objectId": 2,
          "propertyId": "presentValue"
        },
        {
          "key": "pressure",
          "objectType": "analogInput",
          "objectId": 3,
          "propertyId": "presentValue"
        }
      ],
      "attributes": [],
      "attributeUpdates": [],
      "serverSideRpc": []
    }
  ]
}
```
{:.copy-code}

Below are the main parameters that you can use to properly configure automatic device detection. Let's take a closer 
look at them:

- `host` - you need to specify `*`, this is done so that the connector accepts all IAm messages from all devices on the
  network.
- `port` - you need to specify `*`, this is done so that the connector accepts all IAm messages from all devices on the
  network.
- `deviceNameExpression` - This is a template for the device name. `${objectName}` is used to match the device name to
  the object name in the BACnet network.
- `deviceProfileExpression` - This is a template for a device profile. In our case, we use `default` because all devices
  have the same type.

After saving the changes and starting the connector, it will send a WhoIs query to the network and start receiving IAm 
messages from all devices. After receiving the IAm message, the connector will automatically create a device for each 
device found with the specified templates and start reading data from the objects. The screenshot below shows what the 
device list looks like after automatic discovery:

![image](/images/gateway/bacnet-connector/examples/discovered-devices-overview.png)
