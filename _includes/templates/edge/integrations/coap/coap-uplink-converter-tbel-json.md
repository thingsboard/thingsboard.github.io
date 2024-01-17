Now copy & paste the following script to the TBEL Decoder function section:

```javascript
/** Decoder **/

// decode payload to JSON
var data = decodeToJson(payload);

// Result object with device/asset attributes/telemetry data

var deviceName = data.deviceName;
var deviceType = data.deviceType;
var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    attributes: {},
    telemetry: {
        temperature: data.temperature,
        humidity: data.humidity
    }
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
``` 
{: .copy-code}

![image](/images/pe/edge/integrations/coap/add-coap-integration-template-json-payload-2-edge.png)

If you want to use JavaScript to develop functions, please use [the JSON payload script for JS](/docs/pe/edge/user-guide/resources/json-payload-converter.json){:target="_blank"}.