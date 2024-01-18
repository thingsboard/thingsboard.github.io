You can use the following code, copy it to the decoder function section:

```javascript
/** Decoder **/

// decode payload to string
var json = decodeToJson(payload);
var deviceName = 'Sigfox-' + json.device;
var deviceType = 'Sigfox Airwits CO2';
var groupName = 'UC-0023 Sigfox Airwits CO2';

var attrByte = parseInt(json.data.substring(0, 2), 16); // force javascript to convert to INT
var autoCalibration = (attrByte & 0x1) === 1 ? "on" : "off"; // bitmask for first bit
var zeroPointAdjusted = ((attrByte & 0x2) >> 1) === 1 ? true : false; // bitmask for second bit; right shift one bit to get second bit to the LSB position
var transmitPower = ((attrByte & 0x4) >> 2) === 1 ? "full" : "low"; // bitmask for third bit; right shift two bits to get third bit to the LSB position
var powerControl = ((attrByte & 0x8) >> 3) === 1 ? "on" : "off"; // bitmask for third bit; right shift three bits to get fourth bit to the LSB position
var firmwareVersion = attrByte >> 4; // shift right to bring the nibble down to the first four bits; result is INT

var temperature = parseInt(json.data.substring(2, 6), 16) / 10.0 - 40;
var humidity = parseInt(json.data.substring(6, 8), 16);
var co2 = parseInt(json.data.substring(8, 12), 16);

var co2Baseline = 0;
var co2BaselineN = parseInt(json.data.substring(12, 14), 16);
if(co2BaselineN === 0){ // see documentation for more information on baseline
    co2Baseline = 400;
}else{
    co2Baseline = co2BaselineN * 10;
}

var result = {
// Use deviceName and deviceType or assetName and assetType, but not both.
    deviceName: deviceName,
    deviceType: deviceType,
    groupName: groupName,
    telemetry: {
        ts: json.time + "000",
        values:{
            //rssi: parseFloat(json.rssi),
            //snr: parseFloat(json.snr),
            temperature: toFixed(temperature, 1),
            humidity: humidity,
            co2: co2,
            co2Baseline: co2Baseline
        }
    },
    attributes:{
        //station: json.station,
        sigfox_id: json.device,
        autoCalibration: autoCalibration,
        zeroPointAdjusted: zeroPointAdjusted,
        transmitPower: transmitPower,
        powerControl: powerControl,
        fwVersion: firmwareVersion
    }
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter-tbel-pe.png)
