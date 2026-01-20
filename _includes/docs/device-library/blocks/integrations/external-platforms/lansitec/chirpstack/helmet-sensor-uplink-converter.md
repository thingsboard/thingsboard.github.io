**Decode function:**

```javascript
// Decode uplink function.
//
// Input is an object with the following fields:
// - bytes = Byte array containing the uplink payload, e.g. [255, 230, 255, 0]
// - fPort = Uplink fPort.
// - variables = Object containing the configured device variables.
//
// Output must be an object with the following fields:
// - data = Object representing the decoded payload.
// Helmet Sensor decoder
function decodeUplink(input) {
// bytes
    var bytes = input.bytes;
// type
    var uplinkType = (bytes[0] >> 4) & 0x0f;
    switch (uplinkType) {
        case 0x01:
            return {data: decodeRegistration(bytes)};
        case 0x02:
            return {data: decodeHeartbeat(bytes)};
        case 0x03:
            return {data: decodeGNSSPosition(bytes)};
        case 0x05:
            return {data: decodeUUIDReport(bytes)};
        case 0x07:
            return {data: decodeBeacon(bytes)};
        case 0x08:
            return {data: decodeAlarm(bytes)};
        case 0x0c:
            return {data: decodeBracelet(bytes)};
        default:
            return null;
    }
}

// type: 0x1 Registration
function decodeRegistration(bytes) {
    var data = {};
    data.type = "Registration";
// adr
    data.adr = ((bytes[0] >> 3) & 0x1) == 0 ? "OFF" : "ON";
// power
    data.power = ((bytes[2] >> 3) & 0x1f) + "dBm";
// dr
    data.dr = (bytes[3] >> 4) & 0x0f;
// gnssEnable
    data.gnssEnable = ((bytes[3] >> 3) & 0x01) == 0 ? "Disable" : "Enable";
// positionReportMode
    var positionReportMode = (bytes[3] >> 1) & 0x03;
    if (positionReportMode == 0) {
        data.positionReportMode = "Period";
    } else if (positionReportMode == 0) {
        data.positionReportMode = "Autonomous";
    } else if (positionReportMode == 0) {
        data.positionReportMode = "On-Demand";
    }
// bleEnable
    data.bleEnable = (bytes[3] & 0x01) == 0 ? "Disable" : "Enable";
// blePositionReportInterval
    data.blePositionReportInterval =
        (((bytes[4] << 8) & 0xff00) | (bytes[5] & 0xff)) * 5 + "s";
// gnssPositionReportInterval
    data.gnssPositionReportInterval =
        (((bytes[6] << 8) & 0xff00) | (bytes[7] & 0xff)) * 5 + "s";
// heartbeatPeriod
    data.heartbeatPeriod = (bytes[8] & 0xff) * 30 + "s";
// versiondata.version =
    (bytes[9] & 0xff).toString(16).toUpperCase() +
    "." +
    (bytes[10] & 0xff).toString(16).toUpperCase();
// cfmmsg
    data.cfmmsg = "1 Confirmed every " + (bytes[11] & 0xff) + " Heartbeat";
// hbCount
    data.hbCount = "Disconnect Judgement " + (bytes[12] & 0xff);
// fallDetectFeatureThreshold
    data.fallDetectFeatureThreshold = (bytes[13] & 0xff) * 0.5 + " meters";
    return data;
}

// type: 0x2 Heartbeat
function decodeHeartbeat(bytes) {
    var data = {};
// type
    data.type = "Heartbeat";
// battery
    data.battery = bytes[1] + "%";
// rssi
    data.rssi = bytes[2] * -1 + "dBm";
// snr
    data.snr = (((bytes[3] << 8) & 0xff00) | (bytes[4] & 0xff)) / 100 + "dB";
// bleReceivingNumber
    data.bleReceivingNumber = bytes[5];
// gnssSearchingNumber
    data.gnssSearchingNumber = bytes[6];
// chargeTime
    data.chargeTime = bytes[7] * 30 + "s";
// wearTime
    data.wearTime = bytes[8] * 30 + "s";
// moveState
    data.moveState = (bytes[9] >> 4) & 0x0f;
// temperature
    data.temperature = 0;
    return data;
}

// type: 0x3 GNSSPosition
function decodeGNSSPosition(bytes) {
    var data = {};
// type
    data.type = "GNSSPosition";
// gnssState
    data.gnssState = ((bytes[0] >> 3) & 0x01) == 0 ? "Success" : "Fail";
// wearState
    data.wearState = (bytes[0] & 0x01) == 0 ? "Do not wear" : "Wear";
// pressure
    let pressure =
        (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | bytes[4];
    data.pressure = pressure / 10 + "pa";
// longitude
    let longitude = (bytes[5] << 24) | (bytes[6] << 16) | (bytes[7] << 8) | bytes[8];
    data.longitude = hex2float(longitude);
// latitude
    let latitude =
        (bytes[9] << 24) | (bytes[10] << 16) | (bytes[11] << 8) | bytes[12];
    data.latitude = hex2float(latitude);
// time
    let time =
        (bytes[13] << 24) | (bytes[14] << 16) | (bytes[15] << 8) | bytes[16];
    data.time = timestampToTime((time + 8 * 60 * 60) * 1000);
    return data;
}

// type: 0x5 UUIDReport
function decodeUUIDReport(bytes) {
    var data = {};
// type
    data.type = "UUIDReport";
// number
    data.number = Math.floor((bytes.length - 1) / 17);
    var beaconUUIDList = [];
    for (let i = 0; i < data.number; i++) {
        var beaconTypeId = bytes[1 + 17 * i] & 0x03;
        if (beaconTypeId == 0x00) {
            beaconTypeId = "PositionBeaconUUID";
        } else if (beaconTypeId == 0x01) {
            beaconTypeId = "AssetBeaconUUID";
        } else if (beaconTypeId == 0x02) {
            beaconTypeId = "SpecialBeaconUUID";
        } else if (beaconTypeId == 0x03) {
            beaconTypeId = "SearchBeaconUUID";
        }
        var beaconUUID = "";
        for (let j = 0; j < 16; j++) {
            beaconUUID += (bytes[2 + 17 * i + j] & 0xff)
                .toString(16)
                .toUpperCase()
                .padStart(2, "0");
        }
        beaconUUIDList.push({beaconTypeId, beaconUUID});
    }
    data.beaconUUIDList = beaconUUIDList;
    return data;
}

// type: 0x7 Beacon
function decodeBeacon(bytes) {
    var data = {};
    data.type = "Beacon";
// wearState
    data.wearState = (bytes[0] & 0x01) == 0 ? "Not wearing" : "Wearing";
// pressure
    let pressure = (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | bytes[4];
    data.pressure = pressure / 10 + "pa";
// numner
    data.number = bytes[5] & 0x0f;
    for (let i = 0; i < data.number; i++) {
        var index = 7 + 5 * i;
        var major = ((bytes[index] << 8) | bytes[index + 1])
            .toString(16)
            .toUpperCase()
            .padStart(4, "0");
        var minor = ((bytes[index + 2] << 8) | bytes[index + 3])
            .toString(16)
            .toUpperCase()
            .padStart(4, "0");
        var rssi = bytes[index + 4] - 256 + "dBm";
        data["beacon" + (i + 1)] = major + minor;
        data["rssi" + (i + 1)] = rssi;
    }
    return data;
}

// type: 0x8 Alarm
function decodeAlarm(bytes) {
    var data = {};
    data.type = "Alarm";
    var alarmValue = bytes[1] & 0xff;
    if (alarmValue == 1) {
        data.alarm = "SOS";
    } else if (alarmValue == 2) {
        data.alarm = "Fall";
    } else if (alarmValue == 3) {
        data.alarm = "Special area";
    } else if (alarmValue == 4) {
        data.alarm = "Search";
    }
    return data;
}

// type: 0x0c Bracelet
function decodeBracelet(bytes) {
    var data = {};
    data.type = "Bracelet";
    var number =
        bytes[1];
    data.number = number;
    var braceletList = [];
    for (let i = 0; i < number; i++) {
        var bracelet = {};
        var mac = ""
        for (let j = 0; j < 6; j++) {
            mac += bytes[j + 2 + i * 21]
                .toString(16)
                .toUpperCase()
                .padStart(2, "0");
        }
        bracelet.mac = mac;
        bracelet.batteryLevel = bytes[8 + i * 21]; // 电量等级
        bracelet.heartrate = bytes[9 + i * 21]; // 心率
        bracelet.systolicPressure = bytes[10 + i * 21]; // 收缩压
        bracelet.diastolicPressure = bytes[11 + i * 21]; // 舒张压
        bracelet.wristTemperature = (((bytes[12 + i * 21] << 8) & 0xff00) |
            (bytes[13 + i * 21] & 0xff)) / 10 + "℃"; // 腕温
        bracelet.bodyTemperature = (((bytes[14 + i * 21] << 8) & 0xff00) |
            (bytes[15 + i * 21] & 0xff)) / 10 + "℃"; // 体温
        bracelet.stepNumber = ((bytes[16 + i * 21] << 16) & 0xff0000) |
            ((bytes[17 + i * 21] << 8) & 0xff00) | (bytes[18 + i * 21] & 0xff); // 步数
        bracelet.wearStatus = ((bytes[19 + i * 21]) & 0x01) == 0 ? "Not
            wearing
        " : "
        Wearing
        ";
        bracelet.bluetoothBroadcastInterval = (bytes[20 + i * 21] & 0xff) +
            "s";
        bracelet.samplingInterval = (bytes[21 + i * 21] & 0x7f) + "s";
        bracelet.rssi = (bytes[22 + i * 21] - 256) + "dBm";
        braceletList.push(bracelet);
    }
    data.braceletList = braceletList;
    return data;
}

function hex2float(num) {
    var sign = num & 0x80000000 ? -1 : 1;
    var exponent = ((num >> 23) & 0xff) - 127;
    var mantissa = 1 + (num & 0x7fffff) / 0x7fffff;
    return sign * mantissa * Math.pow(2, exponent);
}

function timestampToTime(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
```
{:.copy-code.expandable-15}