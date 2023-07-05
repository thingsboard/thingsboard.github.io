```javascript
/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);

var deviceName =  metadata.topic.split("/")[3];
// decode payload to JSON
var deviceType = 'sensor';

// Result object with device attributes/telemetry data
var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    attributes: {
        integrationName: metadata['integrationName'],
    },
    telemetry: {
        temperature: data.value,
    }
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
``` 
{: .copy-code}