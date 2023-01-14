**Example for the Uplink converter:**

```ruby
// decode payload to JSON
var data = decodeToJson(payload);
var topicParts = metadata.topic.split("/");
var deviceType = topicParts[3];
var deviceName = topicParts[4];
// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {
       state: data.val0,
   },
   telemetry: {
       temperature: data.val1,
       fan_ins: data.val2,
       fan_out: data.val3,
   }
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/aws-iot/aws-iot-uplink-converter-tbel-pe.png)