* Select the **"Create new"** tab and enter the **converter name**.
* Copy and insert the **TBEL Decoder function** script:

```javascript
/** Decoder **/

// decode payload to JSON
var data = decodeToJson(payload);

// Result object with device/asset attributes/telemetry data

var deviceName = data.deviceName;
var deviceType = data.deviceType;
var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    attributes: {},
    telemetry: {
        temperature: data.temperature,
        humidity: data.humidity
    }
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
``` 
{: .copy-code.expandable-8}

{% include images-gallery.html imageCollection="json-converter" %}
* After adding the uplink converter, click the **"Next"** button.

If you want to develop functions using JavaScript, please use [the JSON payload script for JS](/docs/pe/edge/user-guide/resources/json-payload-converter.json){:target="_blank"}.