Now copy & paste the following script to the Decoder function section:

```javascript
/** Decoder **/

// decode payload to JSON
var data = decodeToJson(payload).reports[0].value;

// Result object with device telemetry data
var result = {
    deviceName: hexToString(data.substring(0, 12)),
    deviceType: hexToString(data.substring(12, 26)),
    telemetry: {
        temperature: parseFloat(hexToString(data.substring(26, 34))),
        humidity: parseFloat(hexToString(data.substring(34, 38))),
    }
};

/** Helper functions **/

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

// Hexadecimal string to string
function hexToString(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var notNullValue = parseInt(hex.substr(i, 2), 16);
        if (notNullValue) {
            str += String.fromCharCode(notNullValue);
        }
    }
    return str;
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

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-uplink-converter-hex-java-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-uplink-converter-hex-java-paas.png)
{% endif %}