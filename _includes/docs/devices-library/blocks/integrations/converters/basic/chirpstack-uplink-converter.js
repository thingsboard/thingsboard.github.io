var data = decodeToJson(payload);
var deviceName = data.deviceInfo.deviceName;
var deviceType = data.deviceInfo.deviceProfileName;
// var groupName = 'IAQ devices';
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

    output.telemetry.HEX_bytes = bytesToHex(input);// Custom decoding placeholder
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
//  groupName: groupName,
    attributes: attributes,
    telemetry: {
        ts: timestamp,
        values: telemetry
    }
};

return result;
