To add a new device, click the "plus" icon:

![image](/images/gateway/bacnet-connector/bacnet-gateway-configuring-1-ce.png)

Provide the following fields in the opened model window:
- **Host** - the host of the device;
- **Port** - the port of the device;
- **Device name source** - the source of the device name, can be:
  - **Constant** - the device name is static;
  - **Expression** - the device name is an expression;
- **Device name value / expression** - the device name (you can find detail examples [here](/docs/iot-gateway/config/bacnet#examples-device-name-expression-and-device-profile-expression));
- **Device profile source** - the source of the device profile, can be the same as the device name source;
- **Device profile value / expression** - the device profile name (you can find detail examples [here](/docs/iot-gateway/config/bacnet#examples-device-name-expression-and-device-profile-expression));
- **Poll period** - the period of time when the connector will try to poll BACnet device;
- **Advanced configuration settings**:
  - **Alternative responses addresses** - the alternative address for responses from the device (you can find detail examples [here](/docs/iot-gateway/config/bacnet#examples-alternative-responses-addresses)).

![image](/images/gateway/bacnet-connector/bacnet-gateway-configuring-2-ce.png)
