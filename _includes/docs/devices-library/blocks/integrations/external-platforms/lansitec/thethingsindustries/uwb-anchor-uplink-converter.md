**Decode function:**

```javascript
// UWB Anchor decoder
function decodeUplink(input) {
// bytes
    var bytes = input.bytes;
// type
    var type = (bytes[0] >> 4) & 0x0f;
    switch (type) {
        case 0x01:
            return {data: decodeRegistration(bytes)};
        case 0x02:
            return {data: decodeHeartbeat(bytes)};
        default:
            return;
    }
}

// type: 0x1 Registration
function decodeRegistration(bytes) {
    var data = {};
    data.type = "RegistrationMessage";
    data.softwareVersion = ((bytes[1] << 8) & 0xff00) | (bytes[2] & 0xff);
    data.hardwareVersion = ((bytes[3] << 8) & 0xff00) | (bytes[4] & 0xff);
    data.deviceState =
        (bytes[5] << 24) | (bytes[6] << 16) | (bytes[7] << 8) | bytes[8];
    data.lorSynPeriod = bytes[9];
    data.lorSynFreq =
        (bytes[10] << 24) | (bytes[11] << 16) | (bytes[12] << 8) | bytes[13];
    data.lorSynDr = bytes[14];
    data.heartbeatPeriod = ((bytes[15] << 8) & 0xff00) | (bytes[16] & 0xff);
    data.messageId = ((bytes[17] << 8) & 0xff00) | (bytes[18] & 0xff);
    return data;
}

// type: 0x2 Heartbeat
function decodeHeartbeat(bytes) {
    var data = {};
    data.type = "HeartbeatMessage";
    data.deviceState =
        (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | bytes[4];
    data.powerVol = bytes[5];
    data.powerPersent = bytes[6];
    data.uwbRangeCount = bytes[7];
    data.bleOnCount = bytes[8];
    data.gnssOnCount = bytes[9];
    data.temperature = ((bytes[10] << 8) & 0xff00) | (bytes[11] & 0xff);
    data.movementTime = ((bytes[12] << 8) & 0xff00) | (bytes[13] & 0xff);
    data.wearTime = ((bytes[14] << 8) & 0xff00) | (bytes[15] & 0xff);
    data.chargeTime = ((bytes[16] << 8) & 0xff00) | (bytes[17] & 0xff);
    data.messageId = ((bytes[18] << 8) & 0xff00) | (bytes[19] & 0xff);
    return data;
}
```
{:.copy-code.expandable-15}
