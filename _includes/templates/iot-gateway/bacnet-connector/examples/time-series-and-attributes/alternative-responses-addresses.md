Alternative response addresses field allows you to specify an alternative IP address for device responses.
It is especially useful when the gateway and the BACnet device are located in different networks.

For example, consider the following network setup:

![image](/images/gateway/bacnet-connector/examples/alternative-responses-addresses-network-setup.png)

In this setup, the gateway runs inside a Docker container and the BACnet device is located on a local network with IP 
address `192.168.1.200:45606` and is not directly accessible from the Docker container. BACPypes sends APDUs to the 
gateway without including the port number, making it impossible for the connector to determine whether a response came 
from an allowed device. When you configure an alternative response address, the connector uses this IP to correctly 
recognize and validate the device.

To configure the alternative response address, you need to add the `altResponsesAddresses` field to the device 
configuration. Here is an example configuration snippet:

```json
{
  "application": {
    "objectName": "TB_gateway",
    "host": "0.0.0.0",
    "port": 47808,
    "mask": 24,
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
        "deviceNameExpressionSource": "expression",
        "deviceNameExpression": "BACnet Device ${objectName}",
        "deviceProfileExpressionSource": "constant",
        "deviceProfileExpression": "default"
      },
      "host": "192.168.1.200",
      "port": 45606,
      "altResponsesAddresses": ["192.168.1.200"],
      "pollPeriod": 10000,
      "attributes": [],
      "timeseries": "*",
      "attributeUpdates": [],
      "serverSideRpc": []
    }
  ]
}
```
{:.copy-code}

After applying this configuration, the connector will use the specified alternative response address 
`192.168.1.200:45606` to recognize and validate responses from the BACnet device. This ensures that the connector can
communicate effectively with the device even when they are located in different networks. As a result, you should see 
created device in ThingsBoard:

![image](/images/gateway/bacnet-connector/examples/alternative-responses-addresses-overview.png)
