| **Parameter**               | **Default value** | **Description**                                                                                                                    |
|:----------------------------|:------------------|------------------------------------------------------------------------------------------------------------------------------------|
| objectName                  | **TB_gateway**    | The gateway object name in the BACnet network.                                                                                     |
| host                        | **0.0.0.0**       | The gateway host in the BACnet network.                                                                                            |
| port                        | **47808**         | The gateway port in the BACnet network.                                                                                            |
| mask                        |                   | The gateway mask in the BACnet network.                                                                                            |
| objectIdentifier            | **599**           | The gateway object identifier in the BACnet network.                                                                               |
| maxApduLengthAccepted       | **1476**          | Maximal length of the APDU.                                                                                                        |
| segmentationSupported       | **segmentedBoth** | The type of segmentation, can be (detailed description below): segmentedBoth, segmentedTransmit, segmentedReceive, noSegmentation. |
| vendorIdentifier            | **15**            | The gateway vendor identifier in the BACnet network.                                                                               |
| networkNumber               | **3**             | Identifier of the network segment.                                                                                                 |
| deviceDiscoveryTimeoutInSec | **5**             | Period of time when the connector will try to discover BACnet devices.                                                             |
| ---                         |                   |                                                                                                                                    |

**segmentationSupported** can be one of the following values:
- **segmentedBoth** - support sending and receiving segmented messages;
- **segmentedTransmit** - support only sending segmented messages;
- **segmentedReceive** - support only receiving segmented messages;
- **noSegmentation** - don't support segmented messages.

Example:

```json
"application": {
    "objectName": "TB_gateway",
    "host": "0.0.0.0",
    "port": "47808",
    "objectIdentifier": 599,
    "maxApduLengthAccepted": 1476,
    "segmentationSupported": "segmentedBoth",
    "vendorIdentifier": 15
},
```
**image**
