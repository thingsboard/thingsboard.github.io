
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
            temperature: parseLittleEndianHexToInt(payloadJson.data.substring(0,2)),
            humidity: parseLittleEndianHexToInt(payloadJson.data.substring(2,4)),
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

return result;

``` 
{:.copy-code.expandable-10}
