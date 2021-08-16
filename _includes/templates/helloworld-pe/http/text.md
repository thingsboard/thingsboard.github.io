Example of the text payload:

```ruby
Senor T1,Temperature Sensor,33,test
```

Text converter:

```ruby
var data = decodeToObject(payload);
var deviceName = data.deviceName;
var deviceType = data.deviceType;

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

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToObject(payload) {

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