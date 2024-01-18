{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-create-downlink-tbel-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/http/downlink-tbel-1-pe.png)
{% endif %}

<br>
Add a converter to the integration. You can customize a downlink according to your configuration.
Let’s consider an example where we send an attribute update message. So we should change code in the downlink encoder function under line **//downlink data** input:

```ruby
data: JSON.stringify(msg)
```
{: .copy-code}
where **msg** is the message that we receive and send back to the device.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/http/http-create-downlink-tbel-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/http/downlink-tbel-2-pe.png)
{% endif %}

<br>
An example of downlink converter:

```ruby
// Encode downlink data from incoming Rule Engine message

// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter

var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(msg),

    // Optional metadata object presented in key/value format
    metadata: {
    }
};

return result;
```
{: .copy-code}
