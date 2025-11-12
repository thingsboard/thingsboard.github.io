BACnet connector allows you to set dynamic device names and profiles using expressions. This is especially useful when 
you have multiple devices with similar configurations and want to differentiate them based on their properties.
In this example, we will configure a BACnet device to have a dynamic device name based on its `objectName` and `address` 
properties and a dynamic device profile based on its `vendorId` property.

Here is an example configuration snippet for a BACnet device with dynamic device name and profile:

```json
{
  "application": {
    "objectName": "TB_gateway",
    "host": "YOUR_HOST",
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
      "host": "*",
      "port": "*",
      "pollPeriod": 10000,
      "deviceInfo": {
        "deviceNameExpressionSource": "expression",
        "deviceNameExpression": "${objectName} at ${address}",
        "deviceProfileExpressionSource": "expression",
        "deviceProfileExpression": "${vendorId}_profile"
      },
      "attributes": [],
      "timeseries": "*",
      "attributeUpdates": [],
      "serverSideRpc": []
    }
  ]
}
```
{:.copy-code}

In this configuration:
- The `deviceNameExpression` is set to `${objectName} at ${address}`, which will create a device name that includes the 
  device's object name and address.
- The `deviceProfileExpression` is set to `${vendorId}_profile`, which will create a device profile name based on the vendor ID of the device.

After applying this configuration, the device will be created with a name and profile that reflect its specific 
properties. The screenshot below shows how the device appears in ThingsBoard with the dynamic name and profile:

![image](/images/gateway/bacnet-connector/examples/dynamic-device-name-and-profile-overview.png)

As you can see, the device name is generated based on the `objectName` and `address`, and the device profile is based 
on the `vendorId`.

Device name/profile dynamic expressions provide flexibility in managing multiple BACnet devices with varying 
configurations and can help in organizing devices effectively within ThingsBoard.

{% capture dynamicDeviceNameProfileExample %}
You can find full list of available variables in
the [Advanced configuration](/docs/iot-gateway/config/bacnet/#available-variables-for-device-nameprofile-expressions) section.
{% endcapture %}
{% include templates/info-banner.md content=dynamicDeviceNameProfileExample %}
