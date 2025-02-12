For adding new device, click the "plus" icon:

**image**

In the opened modal window provide the following fields:
- **Host** - the host of the device;
- **Port** - the port of the device;
- **Device name source** - the source of the device name, can be:
  - **Constant** - the name of the device is static;
  - **Expression** - the name of the device is an expression;
- **Device name value / expression** - the device name (detailed examples you can find [here](/docs/iot-gateway/config/bacnet#examples-device-name-expression-and-device-profile-expression));
- **Device profile source** - the source of the device profile, can be the same as the device name source;
- **Device profile value / expression** - the device profile name (detailed examples you can find [here](/docs/iot-gateway/config/bacnet#examples-device-name-expression-and-device-profile-expression));
- **Poll period** - the period of time when the connector will try to poll BACnet device;
- **Advanced configuration settings**:
  - **Alternative responses addresses** - the alternative address for responses from the device (detailed examples you can find [here](/docs/iot-gateway/config/bacnet#examples-alternative-responses-addresses)).

**image**
