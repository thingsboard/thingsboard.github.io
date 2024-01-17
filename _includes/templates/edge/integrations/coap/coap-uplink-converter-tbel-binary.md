Now copy & paste the following script to the TBEL Decoder function section:

```javascript
/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);

// decode payload to JSON
// var data = decodeToJson(payload);

var deviceName = payloadStr.substring(0,6);
var deviceType = payloadStr.substring(6,13);

// Result object with device/asset attributes/telemetry data
var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    attributes: {},
    telemetry: {
        temperature: parseFloat(payloadStr.substring(13,17)),
        humidity: parseFloat(payloadStr.substring(17,19))
    }
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
``` 
{: .copy-code}

![image](/images/pe/edge/integrations/coap/add-coap-integration-template-binary-payload-2-edge.png)

If you want to use JavaScript to develop functions, please use [the binary payload script for JS](/docs/pe/edge/user-guide/resources/binary-payload-converter.json){:target="_blank"}.