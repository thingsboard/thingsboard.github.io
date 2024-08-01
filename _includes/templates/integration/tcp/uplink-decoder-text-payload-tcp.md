{% include templates/tbel-vs-js.md %}

Now copy the following **TBEL** script:

```javascript
/** Decoder **/

// decode payload to string
var strArray = decodeToString(payload);
var payloadArray = strArray.replaceAll("\"", "").replaceAll("\\\\n", "").split(',');

var telemetryPayload = {};
for (var i = 2; i < payloadArray.length; i = i + 2) {
    var telemetryKey = payloadArray[i];
    var telemetryValue = parseFloat(payloadArray[i + 1]);
    telemetryPayload[telemetryKey] = telemetryValue;
}

// Result object with device attributes/telemetry data
var result = {
    deviceName: payloadArray[0],
    deviceType: payloadArray[1],
    telemetry: telemetryPayload,
    attributes: {}
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
```
{:.copy-code.expandable-15}

<br>
If you want to use the **JavaScript decoder function**, use this script:

```javascript
/** Decoder **/

// decode payload to string
var strArray = decodeToString(payload);
var payloadArray = strArray.replace(/\"/g, "").replace(/\s/g, "").split(',');

var telemetryKey = payloadArray[2];
var telemetryValue = payloadArray[3];

var telemetryPayload = {};
telemetryPayload[telemetryKey] = telemetryValue;

// Result object with device attributes/telemetry data
var result = {
    deviceName: payloadArray[0],
    deviceType: payloadArray[1],
    telemetry: telemetryPayload,
    attributes: {}
};

/** Helper functions **/

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

return result;
``` 
{:.copy-code.expandable-10}

<br>
Paste the copied script to the decoder function section. Then, click "**Next**";

![image](/images/user-guide/integrations/tcp/tcp-create-uplink-converter-text-tbel-pe.png)