You can use the following code, copy it to the decoder function section:

```javascript
/** Decoder **/

// decode payload to string
var data = decodeToJson(payload);
var deviceName = data.devName;
var deviceType = 'thermostat';

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {
        temperature: data.msg.temp,
        humidity: data.msg.humidity
    }
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/
return result;
```
{: .copy-code}