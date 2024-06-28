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

// Hexadecimal string to string
function hexToString(hex) {
    return bytesToString(hexToBytes(hex));
}

return result;
``` 
{: .copy-code}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-uplink-converter-hex-tbel-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-uplink-converter-hex-tbel-paas.png)
{% endif %}