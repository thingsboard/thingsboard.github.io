Now copy & paste the following script to the Decoder function section:

```javascript

// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

// decode payload to JSON
var data = decodeToJson(payload);
if (data.coreid != "api") {
    var deviceName = data.coreid;
    var deviceType = 'Photon';
    var groupName = 'Particle devices';

    var attributes = {
        integrationName: metadata['integrationName']
    };

    var telemetry = {};

    if (data.data == 'online' || data.data == 'offline') {
        attributes.status = data.data;
    } else {
        telemetry.rawData = data.data;
    }

// Result object with device/asset attributes/telemetry data
    var result = {
// Use deviceName and deviceType or assetName and assetType, but not both.
        deviceName: deviceName,
        deviceType: deviceType,
        groupName: groupName,
        attributes: attributes,
        telemetry: telemetry
    };

    /** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

    return result;
}
```
{: .copy-code.expandable-10}

![image](/images/user-guide/integrations/particle/particle-create-uplink-converter-tbel.png)