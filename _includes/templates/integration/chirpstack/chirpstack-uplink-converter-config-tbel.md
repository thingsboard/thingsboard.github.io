![image](/images/user-guide/integrations/chirpstack/chirpstack-integration-setup-tbel-2-pe.png)

The script used in the example:

```javascript
var data = decodeToJson(payload);
var deviceName = data.deviceInfo.deviceName;
var deviceType = data.deviceInfo.deviceProfileName;
var groupName = 'IAQ devices';
// var customerName = 'Customer A';
// use assetName and assetType instead of deviceName and deviceType
// to automatically create assets instead of devices.
// var assetName = 'Asset A';
// var assetType = 'building';

// If you want to parse incoming data somehow, you can add your code to this function.
// input: bytes
// expected output:
//  {
//    "attributes": {"attributeKey": "attributeValue"},
//    "telemetry": {"telemetryKey": "telemetryValue"}
//  }
//
// In the example - bytes will be saved as HEX string and also parsed as light level, battery level and PIR sensor value.
//

function decodePayload(input) {
var output = { attributes:{}, telemetry: {} };
// --- Decoding code --- //

    output.telemetry.HEX_bytes = bytesToHex(input);

    // If the length of the input byte array is odd - we cannot parse it using the example below
    if (input.length > 0) {
        for (var i = 0; i < input.length; ) {
            var channel_id = input[i++];
            if (i < input.length) {
                var channel_type = input[i++];
                // BATTERY
                if (channel_id === 0x01 && channel_type === 0x75) {
                    output.telemetry.battery = input[i];
                    i += 1;
                }
                // PIR
                else if (channel_id === 0x03 && channel_type === 0x00) {
                    output.telemetry.pir = input[i] === 0 ? "normal" : "trigger";
                    i += 1;
                }
                // DAYLIGHT
                else if (channel_id === 0x04 && channel_type === 0x00) {
                    output.telemetry.daylight = input[i] === 0 ? "dark" : "light";
                    i += 1;
                }
            }
        }
    }

    // --- Decoding code --- //
    return output;
}

// --- attributes and telemetry objects ---
var telemetry = {};
var attributes = {};
// --- attributes and telemetry objects ---

// --- Timestamp parsing
var dateString = data.time;
var timestamp = -1;
if (dateString != null) {
  timestamp = new Date(dateString).getTime();
  if (timestamp == -1) {
    var secondsSeparatorIndex = dateString.lastIndexOf('.') + 1;
    var millisecondsEndIndex = dateString.lastIndexOf('+');
    if (millisecondsEndIndex == -1) {
      millisecondsEndIndex = dateString.lastIndexOf('Z');
    }
    if (millisecondsEndIndex == -1) {
      millisecondsEndIndex = dateString.lastIndexOf('-');
    }
    if (millisecondsEndIndex == -1) {
      if (dateString.length >= secondsSeparatorIndex + 3) {
        dateString = dateString.substring(0, secondsSeparatorIndex + 3);
      }
    } else {
      dateString = dateString.substring(0, secondsSeparatorIndex + 3) +
        dateString.substring(millisecondsEndIndex, dateString.length);
    }
    timestamp = new Date(dateString).getTime();
  }
}
// If we cannot parse timestamp - we will use the current timestamp
if (timestamp == -1) {
timestamp = Date.now();
}
// --- Timestamp parsing

// You can add some keys manually to attributes or telemetry
attributes.deduplicationId = data.deduplicationId;

// You can exclude some keys from the result
var excludeFromAttributesList = ["deviceName", "rxInfo", "confirmed", "data", "deduplicationId","time", "adr", "dr", "fCnt"];
var excludeFromTelemetryList = ["data", "deviceInfo", "txInfo", "devAddr", "adr", "time", "fPort", "region_common_name", "region_config_id", "deduplicationId"];

// Message parsing
// To avoid paths in the decoded objects we passing false value to function as "pathInKey" argument.
// Warning: pathInKey can cause already found fields to be overwritten with the last value found.

var telemetryData = toFlatMap(data, excludeFromTelemetryList, false);
var attributesData = toFlatMap(data, excludeFromAttributesList, false);

var uplinkDataList = [];

// Passing incoming bytes to decodePayload function, to get custom decoding
var customDecoding = decodePayload(base64ToBytes(data.data));

// Collecting data to result
if (customDecoding.?telemetry.size() > 0) {
  telemetry.putAll(customDecoding.telemetry);
}

if (customDecoding.?attributes.size() > 0) {
  attributes.putAll(customDecoding.attributes);
}

telemetry.putAll(telemetryData);
attributes.putAll(attributesData);

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    //  assetName: assetName,
    //  assetType: assetType,
    //  customerName: customerName,
    groupName: groupName,
    attributes: attributes,
    telemetry: {
    ts: timestamp,
    values: telemetry
    }
};

return result;
```
{:.copy-code.expandable-15}
