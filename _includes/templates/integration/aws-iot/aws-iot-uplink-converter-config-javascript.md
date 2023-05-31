**Example for the Uplink converter:**

```ruby
// decode payload to JSON
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);
var topicPattern = 'tb/aws/iot/(.+)/(.+)';
var deviceName = metadata.topic.match(topicPattern)[2];
var deviceType = metadata.topic.match(topicPattern)[1];

// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {
        state: data.val0,
   },
   telemetry: {
       temperature: data.val1,
       fan_ins:     data.val2,
       fan_out:     data.val3,
   }
};

/** Helper functions **/
function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}
function decodeToJson(payload) {
   // convert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}
return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/aws-iot/aws-iot-uplink-converter-java-pe.png)