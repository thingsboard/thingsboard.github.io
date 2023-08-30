{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-create-data-converters-1-java-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/http/data-converters-2-java-pe.png)
{% endif %}

**Example for the Uplink converter:**

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
       serialNumber: data.param2,
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
   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}

return result;
```
{: .copy-code}

You can change the decoder function while creating the converter or after creating it. If the converter has already been created, then click on the “pencil” icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function. Save changes by clicking on the “checkmark” icon.

{% include images-gallery.html imageCollection="converter-java" %}