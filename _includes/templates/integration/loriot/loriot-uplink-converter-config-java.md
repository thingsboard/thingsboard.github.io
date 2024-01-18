
**Example for the Uplink converter:**

```javascript
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
/** Decoder **/
// decode payload to JSON
var payloadJson = decodeToJson(payload);
// Use EUI as unique device name.
var deviceName = payloadJson.EUI;
// Specify the device type. Use one data converter per device type or application.
var deviceType = 'temperature-sensor';
// Optionally, add the customer name and device group to automatically create them in ThingsBoard and assign new device to it.
// var customerName = 'customer';
// var groupName = 'thermostat devices';
// Result object with device/asset attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
//   customerName: customerName,
//   groupName: groupName,
   attributes: {},
   telemetry: {
        ts: payloadJson.ts,
        values: {
            temperature: stringToInt(payloadJson.data.substring(0,2)),
            humidity: stringToInt(payloadJson.data.substring(2,4)),
            fcnt: payloadJson.fcnt,
            port: payloadJson.port,
            freq: payloadJson.freq,
            dr: payloadJson.dr,
            rssi: payloadJson.rssi,
            snr: payloadJson.snr,
            rawData: payloadJson.data
       }
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
function stringToInt(hex) {
    return parseInt('0x' + hex.match(/../g).reverse().join(''));
}
return result;

``` 
{: .copy-code}

{% include images-gallery.html imageCollection="uplink-java" %}

You can change the decoder function while creating the converter or after creating it. If the converter has already been created, then click on the "pencil" icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function. Save changes by clicking on the "checkmark" icon.

{% include images-gallery.html imageCollection="uplink-edit-java" %}