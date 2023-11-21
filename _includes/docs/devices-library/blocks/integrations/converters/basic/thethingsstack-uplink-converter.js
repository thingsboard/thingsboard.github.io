var data = decodeToJson(payload);

var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;
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

function decodeFrmPayload(input) {
    var output = {
        attributes: {}, telemetry: {}
    };
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
var dateString = data.uplink_message.received_at;
// If data is simulated or device doesn't send his own date string - we will use date from upcoming message, set by network server
if ((data.simulated != null && data.simulated) || dateString == null) {
    dateString = data.received_at;
}
var timestamp = new Date(dateString).getTime();
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
attributes.devEui = data.end_device_ids.dev_eui;
attributes.fPort = data.uplink_message.f_port;
// We want to save correlation ids as single object, so we are excluding them from attributes parse and add manually
attributes.correlation_ids = data.correlation_ids;

// You can exclude some keys from the result
var excludeFromTelemetryList = ["uplink_token", "gateway_id", "settings", "f_port", "time", "timestamp", "received_at", "network_ids"];
var excludeFromAttributesList = ["uplink_token", "gateway_id", "f_port", "time", "timestamp", "received_at", "session_key_id", "dev_eui"];

// Message parsing
// To avoid paths in the decoded objects we passing false value to function as "pathInKey" argument.
// Warning: pathInKey can cause already found fields to be overwritten with the last value found, e.g. receive_at from uplink_message will be written receive_at in the root.
var telemetryData = toFlatMap(data.uplink_message, excludeFromTelemetryList, false);
var attributesData = {};
attributesData.putAll(toFlatMap(data.uplink_message.settings, excludeFromAttributesList, false));
attributesData.putAll(toFlatMap(data.uplink_message.network_ids, excludeFromAttributesList, false));
attributesData.putAll(toFlatMap(data.end_device_ids, excludeFromAttributesList, false));

// Passing incoming bytes to decodeFrmPayload function, to get custom decoding
var customDecoding = {};
if (data.uplink_message.get("frm_payload") != null) {
    customDecoding = decodeFrmPayload(base64ToBytes(data.uplink_message.frm_payload));
}

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
//  customerName: customerName
//  groupName: groupName,
    attributes: attributes,
    telemetry: {
        ts: timestamp,
        values: telemetry
    }
};

return result;
