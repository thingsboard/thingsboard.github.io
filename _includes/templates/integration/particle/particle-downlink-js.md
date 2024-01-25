You can use our example of Downlink Converter, or write your own according to your configuration:

```javascript
/** Encoder **/

var command = {};
command["code"] = msg.method;
if (msg.params == "false" || msg.params == "true") {
    command["value"] = Boolean.valueOf(msg.params);
} else {
    command["value"] = msg.params;
}

var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(command),

    // Optional metadata object presented in key/value format
    metadata: {
            deviceId: metadata.deviceName
    }

};

return result;
```
{: .copy-code.expandable-10}

![image](/images/user-guide/integrations/particle/particle-create-downlink-js.png)