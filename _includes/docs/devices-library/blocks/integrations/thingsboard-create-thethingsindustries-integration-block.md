### Add a gateway on The Things Industries

We need to add a gateway on [The Things Industries cloud](){:target="_blank"}. To do this please follow next steps:  

{% assign addGatewaySteps = '
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/1-login-page.png,
        title: Login to the cloud and open your console
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/2-cloud-console.png,
        title: Choose <b>Gateways</b>
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/3-gateway-list.png,
        title: Press <b>Add gateway</b> button
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/4-register-gateway.png,
        title: Put information about the gateway (gateway EUI)
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/5-gateway-info.png,
        title: The gateway is added, copy and save <b>Gateway Server address</b>, we will need it later 
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addGatewaySteps %}

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integration-devices-configuration/" | append: articleFilename | append: "-thethingsindustries-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

### Configure integration on The Things Industries cloud

Now we need to configure integration on The Things Industries. to do this please follow next steps:  

{% assign addIntegrationSteps = '
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/application-integration-mqtt.png,
        title: Open <b>Integrations</b> -> <b>MQTT</b> in the menu.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/integration-mqtt-new-key.png,
        title: Click on <b>Generate new API key</b> button
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/integration-mqtt.png,
        title: Press on copy icon to save a key and save it (After leaving the page it won't be displayed)
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addIntegrationSteps %}


### Create uplink converter

At first, we will create an uplink converter to process the incoming data:

```javascript
decodeToJson(payload);

var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

// --- attributes and telemetry objects ---
var telemetry = {};
var attributes = {};
// --- attributes and telemetry objects ---

// --- Timestamp parsing
var incomingDateString = data.uplink_message.received_at;
var dateString = incomingDateString.substring(0, incomingDateString.lastIndexOf(".")+3) + "Z";
var timestamp = new Date(dateString).getTime();
// --- Timestamp parsing

// You can add some keys manually to attributes or telemetry
attributes.f_port = data.uplink_message.f_port;
attributes.settings = data.uplink_message.settings;
// We want to save correlation ids as single object, so we are excluding them from attributes parse and add manually
attributes.correlation_ids = data.correlation_ids;

// You can exclude some keys from the result
var excludeFromAttributesList = ["device_id", "application_id", "uplink_message", "correlation_ids"];
var excludeFromTelemetryList = ["uplink_token", "gateway_id", "settings"];

// If you want to parse incoming data somehow, you can add your code to this function.
// input: bytes 
// expected output: 
//  {
//    "attributes": {"attributeKey": "attributeValue"},
//    "telemetry": {"telemetryKey": "telemetryValue"}
//  }
// default functionality - convert bytes to HEX string with telemetry key "HEX_bytes"

function decodeFrmPayload(input) {
    var output = { attributes:{}, telemetry: {} };
    // --- Decoding code --- //
    
    output.telemetry.HEX_bytes = bytesToHex(input);
    
    // --- Decoding code --- //
    return output;
}

// Message parsing
// To avoid paths in the decoded objects we passing false value to function as "pathInKey" argument.
// Warning: pathInKey can cause already found fields to be overwritten with the last value found, e.g. receive_at from uplink_message will be written receive_at in the root.
var telemetryData = toFlatMap(data.uplink_message, excludeFromTelemetryList, false);
var attributesData = toFlatMap(data, excludeFromAttributesList, false);

// Passing incoming bytes to decodeFrmPayload function, to get custom decoding
var customDecoding = decodeFrmPayload(base64ToBytes(data.uplink_message.frm_payload));

// Collecting data to result
if (customDecoding.?telemetry.size() > 0) {
    telemetry.putAll(customDecoding.telemetry);
}

if (customDecoding.?attributes.size() > 0) {
    attributes.putAll(customDecoding.attributes);
}

telemetry.putAll(telemetryData);
attributes.putAll(attributesData);

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {
        ts: timestamp, 
        values: telemetry
    },
    attributes: attributes
};

return result;
```
{: .copy-code}

### Create integration

Next we will create Integration with TheThingsIndustries inside the ThingsBoard.  
Open **Integrations** section and add new Integration with type **TheThingsIndustries**:  

- **Name**: *TTI Integration*
- **Type**: *TheThingsIndustries*
- **Uplink** data converter: *TTI Uplink*
- **Downlink** data converter: *TTI Downlink*
- **Region**: *eu1* (region where your application was registered inside TTI)
- **Username**: *thingsboard-integration@thingsboard* (use ***Username*** from TTI integration)
- **Password**: use ***Password*** from TTI integration

![image](/images/user-guide/integrations/tti/tb-integration-1.png)  

![image](/images/user-guide/integrations/tti/tb-integration-2.png)  

Press **Add** button and integration will be added.  
