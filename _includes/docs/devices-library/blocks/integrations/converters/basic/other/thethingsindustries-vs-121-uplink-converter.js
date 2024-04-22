var data = decodeToJson(payload);

var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

// If you want to parse incoming data somehow, you can add your code to this function.
// input: bytes
// expected output:
//  {
//    "attributes": {"attributeKey": "attributeValue"},
//    "telemetry": {"telemetryKey": "telemetryValue"}
//  }
// default functionality - convert bytes to HEX string with telemetry key "HEX_bytes"

function decodeFrmPayload(input) {
    var output = { attributes:{}, telemetry: {} };
    // --- Decoding code --- //
    var historyData = {};
    var decoded = {};
    decoded.hexString = bytesToHex(input);
    for (var i = 0; i < input.length; ) {
        var channel_id = input[i];
        var channel_type = input[i+1];

        i += 2;

        // PROTOCOL VERSION
        if (channel_id == -1 && channel_type == 1) {
            decoded.protocol_version = input[i];
            i += 1;
        }
        // SERIAL NUMBER
        else if (channel_id == -1 && channel_type == 8) {
            var temp = [];
            var last_index_sn = i + 6;
            for (var idxsn = i; idxsn < last_index_sn; idxsn++) {
                temp.push(bytesToHex([input[idxsn] & 0xff]));
            }
            decoded.serialNumber = temp.join("");
            i += 6;
        }
        // HARDWARE VERSION
        else if (channel_id == -1 && channel_type == 9) {
            var temphv = [];
            var last_index_hv = i + 2;
            for (var idxhv = i; idxhv < last_index_hv; idxhv++) {
                temphv.push((input[idxhv] & 0xff).toString());
            }
            decoded.hardwareVersion = temphv.join(".");
            i += 2;
        }
        // FIRMWARE VERSION
        else if (channel_id == -1 && channel_type == 31) {
            var tempfv = [];
            var last_index_fv = i + 4;
            for (var idxfv = i; idxfv < last_index_fv; idxfv++) {
                tempfv.push((input[idxfv] & 0xff).toString());
            }
            decoded.firmwareVersion = tempfv.join(".");
            i += 4;
        }
        // PEOPLE COUNTER
        else if (channel_id == 4 && channel_type == -55) {
            decoded.peopleCountAll = input[i];
            decoded.regionCount = input[i + 1];
            var region = parseBytesToInt(input, i + 2, 2, false);
            for (var idxpc = 0; idxpc < decoded.regionCount; idxpc++) {
                var tmp = "region" + (idxpc + 1);
                decoded[tmp] = (region >> idxpc) & 1;
            }
            i += 4;
        }
        // PEOPLE IN/OUT
        else if (channel_id == 5 && channel_type == -52) {
            decoded.peopleIn = parseBytesToInt(input, i, 2, false);
            decoded.peopleOut = parseBytesToInt(input, i + 2, 2, false);
            i += 4;
        }
        // PEOPLE MAX
        else if (channel_id == 6 && channel_type == -51) {
            decoded.peopleCountMax = input[i];
            i += 1;
        }
        // REGION COUNTER
        else if (channel_id == 7 && channel_type == -43) {
            decoded.region1Count = input[i];
            decoded.region2Count = input[i + 1];
            decoded.region3Count = input[i + 2];
            decoded.region4Count = input[i + 3];
            decoded.region5Count = input[i + 4];
            decoded.region6Count = input[i + 5];
            decoded.region7Count = input[i + 6];
            decoded.region8Count = input[i + 7];
            i += 8;
        }
        // REGION COUNTER
        else if (channel_id == 8 && channel_type == -43) {
            decoded.region9Count = input[i];
            decoded.region10Count = input[i + 1];
            decoded.region11Count = input[i + 2];
            decoded.region12Count = input[i + 3];
            decoded.region13Count = input[i + 4];
            decoded.region14Count = input[i + 5];
            decoded.region15Count = input[i + 6];
            decoded.region16Count = input[i + 7];
            i += 8;
        }
        // A FLOW
        else if (channel_id == 9 && channel_type == -38) {
            decoded.aToA = parseBytesToInt(input, i, 2, false);
            decoded.aToB = parseBytesToInt(input, i + 2, 2, false);
            decoded.aToC = parseBytesToInt(input, i + 4, 2, false);
            decoded.aToD = parseBytesToInt(input, i + 6, 2, false);
            i += 8;
        }
        // B FLOW
        else if (channel_id == 10 && channel_type == -38) {
            decoded.bToA = parseBytesToInt(input, i, 2, false);
            decoded.bToB = parseBytesToInt(input, i + 2, 2, false);
            decoded.bToC = parseBytesToInt(input, i + 4, 2, false);
            decoded.bToD = parseBytesToInt(input, i + 6, 2, false);
            i += 8;
        }
        // C FLOW
        else if (channel_id == 11 && channel_type == -38) {
            decoded.cToA = parseBytesToInt(input, i, 2, false);
            decoded.cToB = parseBytesToInt(input, i + 2, 2, false);
            decoded.cToC = parseBytesToInt(input, i + 4, 2, false);
            decoded.cToD = parseBytesToInt(input, i + 6, 2, false);
            i += 8;
        }
        // D FLOW
        else if (channel_id == 12 && channel_type == -38) {
            decoded.dToA = parseBytesToInt(input, i, 2, false);
            decoded.dToB = parseBytesToInt(input, i + 2, 2, false);
            decoded.dToC = parseBytesToInt(input, i + 4, 2, false);
            decoded.dToD = parseBytesToInt(input, i + 6, 2, false);
            i += 8;
        }
        // TOTAL IN/OUT
        else if (channel_id == 13 && channel_type == -52) {
            decoded.peopleTotalIn = parseBytesToInt(input, i, 2, false);
            decoded.peopleTotalOut = parseBytesToInt(input, i + 2, 2, false);
            i += 4;
        }
        // DWELL TIME
        else if (channel_id == 14 && channel_type == -28) {
            var region1 = input[i];
            decoded.region = region1;
            decoded.dwellTimeAvg = parseBytesToInt(input, i + 1, 2, false);
            decoded.dwellTimeMax = parseBytesToInt(input, i + 3, 2, false);
            i += 5;
        }
        // TIMESTAMP
        else if (channel_id == 15 && channel_type == -123) {
            decoded.timestamp = parseBytesToInt(input, i, 4, false);
            i += 4;
        } else {
            break;
        }
    }

    output.telemetry = decoded;
    // --- Decoding code --- //
    return output;
}

// --- attributes and telemetry objects ---
var telemetry = {};
var attributes = {};
// --- attributes and telemetry objects ---

// --- Timestamp parsing
var incomingDateString = data.uplink_message.received_at;
var dateString = incomingDateString.substring(0, incomingDateString.lastIndexOf(".")+3) + "Z";
var timestamp = new Date(dateString).getTime();
// --- Timestamp parsing

// You can add some keys manually to attributes or telemetry
attributes.f_port = data.uplink_message.f_port;
attributes.settings = data.uplink_message.settings;
// We want to save correlation ids as single object, so we are excluding them from attributes parse and add manually
attributes.correlation_ids = data.correlation_ids;

// You can exclude some keys from the result
var excludeFromAttributesList = ["device_id", "application_id", "uplink_message", "correlation_ids"];
var excludeFromTelemetryList = ["uplink_token", "gateway_id", "settings"];

// Message parsing
// To avoid paths in the decoded objects we passing false value to function as "pathInKey" argument.
// Warning: pathInKey can cause already found fields to be overwritten with the last value found, e.g. receive_at from uplink_message will be written receive_at in the root.
var telemetryData = toFlatMap(data.uplink_message, excludeFromTelemetryList, false);
var attributesData = toFlatMap(data, excludeFromAttributesList, false);


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
    telemetry: {
        ts: timestamp,
        values: telemetry
    },
    attributes: attributes
};

return result;