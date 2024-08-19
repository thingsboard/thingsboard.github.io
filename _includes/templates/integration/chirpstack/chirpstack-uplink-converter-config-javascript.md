![image](/images/user-guide/integrations/chirpstack/chirpstack-integration-setup-javascript-2-pe.png)

The script used in the example:

```javascript
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);

// decode payload to JSON
// var data = decodeToJson(payload);

var deviceName = 'Device A';
var deviceType = 'thermostat';
var customerName = 'Customer C';
var groupName = 'thermostat devices';
var manufacturer = 'Example corporation';
// use assetName and assetType instead of deviceName and deviceType
// to automatically create assets instead of devices.
// var assetName = 'Asset A';
// var assetType = 'building';

// Result object with device/asset attributes/telemetry data
var result = {
// Use deviceName and deviceType or assetName and assetType, but not both.
  deviceName: deviceName,
  deviceType: deviceType,
// assetName: assetName,
// assetType: assetType,
// customerName: customerName,
  groupName: groupName,
  attributes: {
    model: 'Model A',
    serialNumber: 'SN111',
    integrationName: metadata['integrationName'],
    manufacturer: manufacturer
  },
  telemetry: {
    temperature: 42,
    humidity: 80,
    rawData: payloadStr
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
{:.copy-code.expandable-15}