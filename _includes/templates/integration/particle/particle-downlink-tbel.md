You can use our example of Downlink Converter, or write your own according to your configuration:

```javascript
/** Encoder **/

var command = {};
command["method"] = msg.method;
if (msg.params == "false" || msg.params == "true") {
    command["params"] = Boolean.valueOf(msg.params);
} else {
    command["params"] = msg.params;
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

![image](/images/user-guide/integrations/particle/particle-create-downlink-tbel.png)