```javascript
/** Encoder **/

const command = {
        code: msg.method,
        value:
            msg.params === "false" || msg.params === "true"
                ? msg.params === "true"
                : msg.params
    };
const result = {
    contentType: "JSON",
    data: JSON.stringify(command),
    metadata: {
        deviceId: metadata.deviceName
    }
};
return result;
```
{: .copy-code}