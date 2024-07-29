You can use our example of downlink converter, or write your own according to your configuration:

```javascript
// Encode downlink data from incoming Rule Engine message

// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter

/** Encoder **/

// Result object with encoded downlink payload
var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "TEXT",

    // downlink data
    data: btoa(msg.downlink),

    // Optional metadata object presented in key/value format
    metadata: {
            DevEUI: metadata.cs_devEui,
            fPort: metadata.cs_fPort
    }

};

return result;
```
{:.copy-code.expandable-15}

To add the downlink converter to the integration, follow this steps:

{% assign addDownlinkConverterTbel = '
    ===
        image: https://img.thingsboard.io/user-guide/integrations/chirpstack/add-downlink-converter-1-pe.png,
        title: Go to the "Integrations" page, click ChirpStack integration to open its details, and enter integration editing mode by clicking the "pencil" icon;
    ===
        image: https://img.thingsboard.io/user-guide/integrations/chirpstack/add-downlink-converter-2-pe.png,
        title: Enter a name for the downlink data converter and click "Create new converter";
    ===
        image: https://img.thingsboard.io/user-guide/integrations/chirpstack/add-downlink-converter-tbel-3-pe.png,
        title: Paste the script to the encoder function section, and click "Add";
    ===
        image: https://img.thingsboard.io/user-guide/integrations/chirpstack/add-downlink-converter-4-pe.png,
        title: Apply changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addDownlinkConverterTbel %}