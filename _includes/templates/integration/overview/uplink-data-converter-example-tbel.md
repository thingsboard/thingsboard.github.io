![image](/images/user-guide/integrations/uplink-converter-example-tbel.png)

The full source code of TBEL function used in converter:

```shell
// decode payload to JSON
var data = decodeToJson(payload);
var result = [];
for (var i = 0; i < data.length; i++) {
    var report = data[i];
    var deviceName = report.serialNumber;
    var deviceType = metadata.deviceType;
    var raw = report.value;
    var decoded = hexStringToByte(raw);
    // Result object with device attributes/telemetry data
    result.push({
        deviceName: deviceName,
        deviceType: deviceType,
        attributes: {
            model: metadata.model
        },
        telemetry: {
            ts: report.timestamp,
            values: {
                battery: dataConverter(decoded, 0, 2, 100),
                temperature: dataConverter(decoded, 2, 4, 100),
                rawData: JSON.stringify(report)
            }
        }
    });
}


/** Helper functions **/

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function hexStringToByte(str) {
    var a = [];
    if (str == null) {
        return a;
    }
    for (var j = 0; j < str.length; j += 2) {
        a.push(parseInt(str.substring(j, j + 2), 16));
    }
    return a;
}

function dataConverter(decoded, byteIdxFrom, byteIdxTo, divided) {
    // var bytes = decoded.subarray(byteIdxFrom, byteIdxTo);
    var val = 0;
    for (var j = byteIdxFrom; j < byteIdxTo; j++) {
        val += decoded[j];
        if (j < byteIdxTo - 1) {
            val = val << 8;
        }
    }
    return val / divided;
}
return result;
```
{: .copy-code}