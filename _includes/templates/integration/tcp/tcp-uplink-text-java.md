Now copy & paste the following script to the Decoder function section:

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
{: .copy-code}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-create-uplink-converter-text-java-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-create-uplink-converter-text-java-paas.png)
{% endif %}