Now copy & paste the following script to the Encoder function section:

```javascript
/** Encoder **/

// Result object with encoded downlink payload
var result = {

        // downlink data content type: JSON, TEXT or BINARY (base64 format)
        contentType: "JSON",

        // downlink data
        data: JSON.stringify(msg),

        // Optional metadata object presented in key/value format
        metadata: {
            topic: 'tb-edge/mqtt-integration-tutorial/sensors/'+metadata['originatorName']+'/rx'
        }
    };

return result;
``` 
{: .copy-code}

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-3-edge.png)