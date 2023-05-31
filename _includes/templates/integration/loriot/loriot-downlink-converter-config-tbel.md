
You can customize the downlink according to your configuration. Let's consider an example where we send an attribute update message. So we should change code in the downlink encoder function under
line `//downlink data input`

```
data: msg.firmware
```

Also, indicate the required parameters in the metadata:

```
metadata: {
  "EUI": "$Device_EUI",
  "port": 1
}
```
Example for downlink converter:

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
    data: msg.firmware,
    // Optional metadata object presented in key/value format
    metadata: {
            "EUI": "BE7A000000000552",
            "port": 1
    }
};
return result;

``` 
{: .copy-code}

{% include images-gallery.html imageCollection="create_downlink-tbel" %}

where **EUI** is device EUI and is taken from the device in LORIOT.
A **port** can be from 1 to 223