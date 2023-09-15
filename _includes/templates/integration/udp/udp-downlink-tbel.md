You can use our example of Downlink Converter,
or write your own according to your configuration:

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

{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/integrations/udp/udp-create-downlink-converter-tbel-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](https://img.thingsboard.io/user-guide/integrations/udp/udp-create-downlink-converter-tbel-paas.png)
{% endif %}