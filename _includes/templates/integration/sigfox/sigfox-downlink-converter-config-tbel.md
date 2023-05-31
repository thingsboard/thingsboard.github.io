You can use our example of downlink converter, or write your own according to your configuration:

```javascript
// Encode downlink data from incoming Rule Engine message
// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter
// Result object with encoded downlink payload
var result = {
    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "TEXT",
    // downlink data
    data:  msg.test,
    // Optional metadata object presented in key/value format
    metadata: {
        "device": "2203961"
    }
};
return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/sigfox/sigfox-create-downlink-converter-tbel-1-pe.png)
