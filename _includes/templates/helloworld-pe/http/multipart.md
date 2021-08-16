Example of the binary payload:

```ruby
{
"deviceName": "Sensor T1",
"deviceType": "Temperature Sensor",
"temperature": 33,
"model": "test"
}
```

```ruby
var data = decodeToObject(payload).data;
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

function decodeToJson(payload) {

    var str = decodeToString(payload);

    var data = JSON.parse(str);
    return data;
}
return result;
```