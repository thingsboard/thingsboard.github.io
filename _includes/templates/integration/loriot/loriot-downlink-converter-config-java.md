You can customize the downlink according to your configuration. Let's consider an example where we send an attribute update message. So we should change code in the downlink encoder function under
line `//downlink data input`

```
data: msg.firmware
```
{: .copy-code}

Also, indicate the required parameters in the metadata:

```
metadata: {
  "EUI": "$Device_EUI",
  "port": 1
}
```
{: .copy-code}

ㅤㅤ&#42;**EUI** is device EUI and is taken from the device in LORIOT.

ㅤㅤ&#42; **port** can be from 1 to 223.

{% include images-gallery.html imageCollection="devices" %}

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

<br>
In **ThingsBoard 4.0**, an option has been added to the Loriot downlink functionality, allowing users to avoid double hexadecimal encoding.
If your data is already in hexadecimal format, you can add the following metadata property to your message:

```
"isHexEncoded": "true"
```
{: .copy-code}

With this property enabled, the downlink message will be sent to Loriot without double hexadecimal encoding.

Example for downlink converter without double hexadecimal encoding:

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
    data: "B104",
    // Optional metadata object presented in key/value format
    metadata: {
        "EUI": "BE7A000000000552",
        "port": 1, 
        "isHexEncoded": "true"
    }
};
return result;
``` 
{: .copy-code}

Add a converter to the integration. You can do this at the stage of creating an integration or editing it.

{% include images-gallery.html imageCollection="create_downlink-java" %}