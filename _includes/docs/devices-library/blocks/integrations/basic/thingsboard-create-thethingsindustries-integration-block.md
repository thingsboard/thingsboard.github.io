### Add a gateway on The Things Industries

We need to add a gateway on The Things Industries cloud.  
To add a gateway, you can follow next steps:  

{% assign addGatewaySteps = '
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/1-login-page.png,
        title: Login to the cloud and open your console.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/2-cloud-console.png,
        title: Choose **Gateways**.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/3-gateway-list.png,
        title: Press **Add gateway** button.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/4-register-gateway.png,
        title: Put information about the gateway (gateway EUI).
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/5-gateway-info.png,
        title: The gateway is added, copy and save **Gateway Server address**, we will need it later. 
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addGatewaySteps %}

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integrations/devices-configuration/" | append: articleFilename | append: "-thethingsindustries-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

### Configure application on The Things Industries cloud

Now we need to configure integration on The Things Industries. to do this please follow next steps:  

{% assign addIntegrationSteps = '
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/application-integration-mqtt.png,
        title: Open <b>Integrations</b> -> <b>MQTT</b> in the menu.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/integration-mqtt-new-key.png,
        title: Click on <b>Generate new API key</b> button.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/integration-mqtt.png,
        title: Press on copy icon to copy a key and save it (After leaving the page it won't be displayed).
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addIntegrationSteps %}


### Create uplink converter

At first, we will create an uplink converter to process the incoming data:

{% capture converterCode %}
var data = decodeToJson(payload);

var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

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

// Message parsing
// To avoid paths in the decoded objects we passing false value to function as "pathInKey" argument.
// Warning: pathInKey can cause already found fields to be overwritten with the last value found, e.g. receive_at from uplink_message will be written receive_at in the root.
var telemetryData = toFlatMap(data.uplink_message, excludeFromTelemetryList, false);
var attributesData = toFlatMap(data, excludeFromAttributesList, false);

// Passing incoming bytes to decodeFrmPayload function, to get custom decoding
var customDecoding = {};
if (data.uplink_message.get("frm_payload") != null) {
  customDecoding = decodeFrmPayload(base64ToBytes(data.uplink_message.frm_payload));
}

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
{% endcapture %}

{% include code-toggle.liquid code=converterCode params="javascript|.copy-code.expandable-20" %}

### Create integration

Next we will create an integration with The Things Industries inside the ThingsBoard.  

{% assign createTTIIntegration = '
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/1-create-tti-integration.png,
        title: Go to **Integrations**, press **plus** button and choose **The Things Industries Integration** as a type, put some name.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/2-create-tti-integration-uplink.png,
        title: Check **Create new uplink data converter** and replace a code or create the existing one.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/3-create-tti-integration-configuration.png,
        title: Fill the field with your parameters, 
'
%}

Open **Integrations** section and add new Integration with the following parameters:  

- **Region**: *eu1* (region where your application was registered inside The Things Industries Console)
- **Username**: *thingsboard-data-integration@thingsboard* (use ***Username*** from integration on The Things Stack Industries)
- **Password**: use ***Password*** from integration on The Things Industries

To add integration click on '**+**' button and follow the next steps:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createTTIIntegration %} 

Press **Add** button and integration will be added.  