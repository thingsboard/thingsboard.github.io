
```ruby
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
/** Decoder **/
// decode payload to string
// var payloadStr = decodeToString(payload);
// decode payload to JSON
var data = decodeToJson(payload);
var deviceName = data.deviceName;
var deviceType = data.deviceType;
// Result object with device attributes/telemetry data
var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    attributes: {
        model: data.model,
    },
    telemetry: {
        temperature: data.temperature
    }
};
/** Helper functions **/
function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}
function decodeToJson(payload) {
    // covert payload to string.
    var str = decodeToString(payload);
    var params = str.split(',');
    var data = {
        deviceName: params[0],
        deviceType: params[1],
        temperature: params[2],
        model: params[3]
    };
    return data;
}
return result;
```