Now copy & paste the following script to the Decoder function section:

```javascript
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

// decode payload to JSON
var data = decodeToJson(payload);

var deviceName = data.devId;
var deviceType = 'Tuya device';

var telemetry = [];
if (data.status != null) {
    for (var i = 0; i < data.status.length; i++) {
        var res = {};
        var code = data.status[i].code;
        var value = data.status[i].value;
        if (code == "cur_voltage" || code == "cur_power") {
            value = data.status[i].value / 10;
        } else if (code == "cur_current") {
            value = data.status[i].value / 100;
        }
        res[code] = value;
        telemetry.push(res);
    }
    
} else {
    telemetry = data;
}

var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {},
   telemetry: telemetry
};

return result;

/** Helper functions **/

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
{: .copy-code}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-uplink-converter-java-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tuya/tuya-create-uplink-converter-java-pe.png)
{% endif %}