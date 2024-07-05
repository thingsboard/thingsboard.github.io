You can use our example of downlink converter, or write your own according to your configuration:

```javascript
// Result object with encoded downlink payload
var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(msg),

    // Optional metadata object presented in key/value format
    metadata: {}

};

return result;
``` 
{: .copy-code}