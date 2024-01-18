Use this function:

```ruby
var data = decodeToJson(payload);
var deviceName = metadata['opcUaNode_name'];
var deviceType = 'airconditioner';

var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   telemetry: {
   },
   attributes: {
   }
};

if (data.temperature != null) {
    result.telemetry.temperature = toFixed(data.temperature, 2);
}

if (data.humidity != null) {
   result.telemetry.humidity = toFixed(data.humidity, 2);
}

if (data.powerConsumption != null) {
   result.telemetry.powerConsumption = toFixed(data.powerConsumption, 2);
}

if (data.state != null) {
   result.attributes.state = data.state == '1' ? true : false;
}

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/opc-ua/opc-ua-uplink-converter-tbel.png)