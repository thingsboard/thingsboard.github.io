// decode payload to string
var payloadStr = decodeToString(payload);

var deviceName = 'Device A';
var deviceType = 'thermostat';

var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {
       model: 'Model A',
       serialNumber: 'SN111',
       integrationName: metadata['integrationName']
   },
   telemetry: {
       temperature: 42,
       rawData: payloadStr
   }
};

/** Helper functions **/

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   var str = decodeToString(payload);
   var data = JSON.parse(str);
   return data;
}

return result;

