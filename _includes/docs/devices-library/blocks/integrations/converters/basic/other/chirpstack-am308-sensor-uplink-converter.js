var data = decodeToJson(payload);
var deviceName = data.EUI;
var deviceType = "LoraDevices";
var groupName = 'IAQ devices';
// var customerName = 'Customer A';
// use assetName and assetType instead of deviceName and deviceType
// to automatically create assets instead of devices.
// var assetName = 'Asset A';
// var assetType = 'building';
var gatewayDeviceType = "LoraGateway";

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
    var historyData = {};
    var decoded = {};
    decoded.hexString = bytesToHex(input);
    for (var i = 0; i < input.length; ) {
        var channel_id = input[i++];
        var channel_type = input[i++];
        // BATTERY
        if (channel_id === 0x01 && channel_type === 0x75) {
            decoded.battery = input[i];
            i += 1;
        }
        // TEMPERATURE
        if (channel_id === 0x03 && channel_type === 0x67) {
            // ℃
            decoded.temperature = parseBytesToInt(input, i, 2, false) / 10;
            i += 2;
            // ℉
            // decoded.temperature = parseBytesToInt(input, i, 2, false) / 10 * 1.8 + 32;
            // i +=2;
        }
        // HUMIDITY
        if (channel_id === 0x04 && channel_type === 0x68) {
            decoded.humidity = input[i] / 2;
            i += 1;
        }
        // PIR
        if (channel_id === 0x05 && channel_type === 0x00) {
            decoded.pir = input[i] === 1 ? "trigger" : "idle";
            i += 1;
        }
        // LIGHT
        if (channel_id == 0x06 && channel_type == -53) {
            decoded.light_level = input[i];
            i += 1;
        }
        // CO2
        if (channel_id === 0x07 && channel_type === 0x7d) {
            decoded.co2 = parseBytesToInt(input, i, 2, false);
            i += 2;
        }
        // TVOC
        if (channel_id === 0x08 && channel_type === 0x7d) {
            decoded.tvoc = parseBytesToInt(input, i, 2, false);
            i += 2;
        }
        // PRESSURE
        if (channel_id === 0x09 && channel_type === 0x73) {
            decoded.pressure = parseBytesToInt(input, i, 2, false) / 10;
            i += 2;
        }
        // HCHO
        if (channel_id === 0x0a && channel_type === 0x7d) {
            decoded.hcho = parseBytesToInt(input, i, 2, false) / 100;
            i += 2;
        }
        // PM2.5
        if (channel_id === 0x0b && channel_type === 0x7d) {
            decoded.pm2_5 = parseBytesToInt(input, i, 2, false);
            i += 2;
        }
        // PM10
        if (channel_id === 0x0c && channel_type === 0x7d) {
            decoded.pm10 = parseBytesToInt(input, i, 2, false);
            i += 2;
        }
        // O3
        if (channel_id === 0x0d && channel_type === 0x7d) {
            decoded.o3 = parseBytesToInt(input, i, 2, false) / 100;
            i += 2;
        }
        // BEEP
        if (channel_id === 0x0e && channel_type === 0x01) {
            decoded.beep = input[i] === 1 ? "yes" : "no";
            i += 1;

        }
        // HISTORY DATA (AM307)
        if (channel_id === 32 && channel_type === 206) {
            historyData = {};
            historyData.timestamp = parseBytesToInt(input, i, 4, false);
            historyData.temperature = parseBytesToInt(input, i + 4, 2, false) / 10;
            historyData.humidity = parseBytesToInt(input, i + 6, 2, false) / 2;
            historyData.pir = input[i + 8] === 1 ? "trigger" : "idle";
            historyData.light_level = input[i + 9] === 1;
            historyData.co2 = parseBytesToInt(input, i + 10, 2, false);
            historyData.tvoc = parseBytesToInt(input, i + 12, 2, false);
            historyData.pressure = parseBytesToInt(input, i + 14, 2, false) / 10;
            i += 16;
            if (decoded.history == null) {
                decoded.history = [];
            }
            decoded.history.push(historyData);
        }
        // HISTORY DATA (AM308)
        if (channel_id === 32 && channel_type === 206) {
            historyData = {};
            historyData.timestamp = parseBytesToInt(input, i, 4, false);
            historyData.temperature = parseBytesToInt(input, i + 4, 2, false) / 10;
            historyData.humidity = parseBytesToInt(input, i + 6, 2, false) / 2;
            historyData.pir = input[i + 8] === 1 ? "trigger" : "idle";
            historyData.light_level = input[i + 9] === 1;
            historyData.co2 = parseBytesToInt(input, i + 10, 2, false);
            historyData.tvoc = parseBytesToInt(input, i + 12, 2, false);
            historyData.pressure = parseBytesToInt(input, i + 14, 2, false) / 10;
            historyData.pm2_5 = parseBytesToInt(input, i + 16, 2, false);
            historyData.pm10 = parseBytesToInt(input, i + 18, 2, false);
            i += 20;
            if (decoded.history == null) {
                decoded.history = [];
            }
            decoded.history.push(historyData);
        }
        // HISTORY DATA (AM319 CH2O)
        if (channel_id === 32 && channel_type === 206) {
            historyData = {};
            historyData.timestamp = parseBytesToInt(input, i, 4, false);
            historyData.temperature = parseBytesToInt(input, i + 4, 2, false) / 10;
            historyData.humidity = parseBytesToInt(input, i + 6, 2, false) / 2;
            historyData.pir = input[i + 8] === 1 ? "trigger" : "idle";
            historyData.light_level = input[i + 9] === 1;
            historyData.co2 = parseBytesToInt(input, i + 10, 2, false);
            historyData.tvoc = parseBytesToInt(input, i + 12, 2, false);
            historyData.pressure = parseBytesToInt(input, i + 14, 2, false) / 10;
            historyData.pm2_5 = parseBytesToInt(input, i + 16, 2, false);
            historyData.pm10 = parseBytesToInt(input, i + 18, 2, false);
            historyData.hcho = parseBytesToInt(input, i + 20, 2, false) / 100;
            i += 22;
            if (decoded.history == null) {
                decoded.history = [];
            }
            decoded.history.push(historyData);
        }
        // HISTORY historyData (AM319 O3)
        if (channel_id === 0x20 && channel_type === 0xce) {
            historyData = {};
            historyData.timestamp = parseBytesToInt(input, i, 4, false);
            historyData.temperature = parseBytesToInt(input, i + 4, 2, false) / 10;
            historyData.humidity = parseBytesToInt(input, i + 6, 2, false) / 2;
            historyData.pir = input[i + 8] === 1 ? "trigger" : "idle";
            historyData.light_level = input[i + 9] === 1;
            historyData.co2 = parseBytesToInt(input, i + 10, 2, false);
            historyData.tvoc = parseBytesToInt(input, i + 12, 2, false);
            historyData.pressure = parseBytesToInt(input, i + 14, 2, false) / 10;
            historyData.pm2_5 = parseBytesToInt(input, i + 16, 2, false);
            historyData.pm10 = parseBytesToInt(input, i + 18, 2, false);
            historyData.o3 = parseBytesToInt(input, i + 20, 2, false) / 100;
            i += 22;
            if (decoded.history == null) {
                decoded.history = [];
            }
            decoded.history.push(historyData);
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
var timestamp = data.ts;
// If we cannot parse timestamp - we will use the current timestamp
if (timestamp == -1) {
    timestamp = Date.now();
}
// --- Timestamp parsing

// You can add some keys manually to attributes or telemetry
attributes.fPort = data.port;
attributes.dataRange = data.dr;

// You can exclude some keys from the result
var excludeFromAttributesList = ["data", "gws", "EUI", "ts", "cmd", "port", "seqno", "fcnt", "toa", "dr", "ack", "bat", "snr", "rssi"];
var excludeFromTelemetryList = ["gws", "EUI", "ts", "freq", "port", "data", "cmd", "dr", "offline"];

// Message parsing
// To avoid paths in the decoded objects we passing false value to function as "pathInKey" argument.
// Warning: pathInKey can cause already found fields to be overwritten with the last value found.

var telemetryData = toFlatMap(data, excludeFromTelemetryList, false);
var attributesData = toFlatMap(data, excludeFromAttributesList, false);

var uplinkDataList = [];

// Passing incoming bytes to decodePayload function, to get custom decoding
var customDecoding = decodePayload(hexToBytes(data.data));

// Collecting data to result
if (customDecoding.?telemetry.size() > 0) {
    telemetry.putAll(customDecoding.telemetry);
}

if (customDecoding.?attributes.size() > 0) {
    attributes.putAll(customDecoding.attributes);
}

telemetry.putAll(telemetryData);
attributes.putAll(attributesData);

var deviceInfo = {
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

uplinkDataList.add(deviceInfo);

if (data.cmd == "gw") {
    foreach( gatewayInfo : data.gws ) {
        var gatewayInfoMsg = {
            deviceName: gatewayInfo.gweui,
            deviceType: gatewayDeviceType,
            attributes: {},
            telemetry: {
                "ts": gatewayInfo.ts,
                "values": toFlatMap(gatewayInfo, ["ts", "time", "gweui"], false)
            }
        };
        uplinkDataList.add(gatewayInfoMsg);
    }
}

return uplinkDataList;
