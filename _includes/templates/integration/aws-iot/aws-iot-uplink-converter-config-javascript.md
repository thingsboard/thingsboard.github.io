**Example for the Uplink converter:**

```ruby
// decode payload to JSON
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);
var topicParts = metadata.topic.split("/");
var deviceType = topicParts[0];
var deviceName = topicParts[1];
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
/** Helper functions **/

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}
function decodeToJson(payload) {
   // covert payload to string and then parse string to JSON
   return JSON.parse(decodeToString(payload));
}
return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/aws-iot/aws-iot-uplink-converter-java-pe.png)
