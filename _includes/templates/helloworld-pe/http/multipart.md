**Example of the text/plain converter:**

```ruby
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
/** Decoder /
// decode payload to string
// var payloadStr = decodeToString(payload);
// decode payload to JSON
var data = decodeToJson(payload).data;
var deviceName = data.deviceName;
var deviceType = data.deviceType;
// Result object with device attributes/telemetry data
var result = {
deviceName: deviceName,
deviceType: deviceType,
attributes: {
model: data.model,
serialNumber: data.param2,
},
telemetry: {
temperature: data.temperature
}
};
/ Helper functions **/
function decodeToString(payload) {
return String.fromCharCode.apply(String, payload);
}
function decodeToJson(payload) {
// covert payload to string.
var str = decodeToString(payload);
// parse string to JSON
var data = JSON.parse(str);
return data;
}
return result;
```