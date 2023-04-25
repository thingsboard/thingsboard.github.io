You can use our example of Downlink Converter, or write your own according to your configuration:

```javascript
// Encode downlink data from incoming Rule Engine message
// msg - JSON message payload downlink message json
// Result object with encoded downlink payload
var result = {
    contentType: "JSON",
    data: JSON.stringify(msg),
    metadata: {
        deviceId: 'Sensor B2'
    }
};

return result;
```
{: .copy-code}