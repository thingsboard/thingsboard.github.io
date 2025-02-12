| **Parameter**                       | **Description**                                                                                                                                                                 |
|:------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| host                                | The host of the device.                                                                                                                                                         |
| port                                | The port of the device.                                                                                                                                                         |
| pollPeriod                          | The period of time when the connector will try to poll the BACnet device.                                                                                                       |
| altResponsesAddresses               | Array of alternative addresses for responses from the device (detailed examples you can find [here](/docs/iot-gateway/config/bacnet#examples-alternative-responses-addresses)). |
| deviceInfo                          |                                                                                                                                                                                 |
| ... deviceNameExpressionSource      | The source of the device name: constant, expression.                                                                                                                            |
| ... deviceNameExpression            | The device name (detailed examples you can find [here](/docs/iot-gateway/config/bacnet#examples-device-name-expression-and-device-profile-expression)).                         |
| ... deviceProfileExpressionSource   | The source of the device profile: constant, expression.                                                                                                                         |
| ... deviceProfileExpression         | The device profile name (detailed examples you can find [here](/docs/iot-gateway/config/bacnet#examples-device-name-expression-and-device-profile-expression)).                 |
| ---                                 |                                                                                                                                                                                 |

Example:

```json
{
  "host": "192.168.2.110",
  "port": "47808",
  "pollPeriod": 10000,
  "altResponsesAddresses": [
    "0.0.0.0"
  ],
  "deviceInfo": {
    "deviceNameExpression": "BACnet Device ${objectName}",
    "deviceProfileExpression": "default",
    "deviceNameExpressionSource": "expression",
    "deviceProfileExpressionSource": "constant"
  },
  ...
```
