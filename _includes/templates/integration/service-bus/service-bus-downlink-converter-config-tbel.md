You can use our example of downlink converter or write your own according to your configuration:

```javascript
// Encode downlink data from incoming Rule Engine message
// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// Result object with encoded downlink payload
var result = {
    contentType: "JSON",
    data: JSON.stringify(msg),
    metadata: {
        deviceId: 'Sensor A1'
    }
};

return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/azure-service-bus/azure-service-bus-integration-create-downlink-converter-tbel-1-pe.png)