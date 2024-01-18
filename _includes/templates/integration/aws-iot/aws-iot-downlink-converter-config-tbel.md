{% include images-gallery.html imageCollection="downlink_0-1" %}

An example of downlink converter:

```ruby
// Encode downlink data from incoming Rule Engine message

// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter

/** Encoder **/
var data = {};

// Process data from incoming message and metadata
data.v0 = msg.state;
data.m0 = "att_upd_success";
data.devSerialNumber = metadata['ss_serialNumber'];

// Result object with encoded downlink payload
var result = {
    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",
    // downlink data
    data: JSON.stringify(data),
    // Optional metadata object presented in key/value format
    metadata: {
            type: "sensors/device/upload"
    }
};
return result;
```
{: .copy-code}