### Add a gateway on The Things Stack Community Edition

We need to add a gateway on [The Things Stack Community Edition](https://console.cloud.thethings.network){:target="_blank"}.  

To add a gateway, you can follow next steps:  

{% assign addGatewaySteps = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/1-tts-login.png,
        title: Login to the cloud and open your console.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/2-welcome-screen.png,
        title: Select the "**Register a gateway**".
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/3-gateway-list.png,
        title: Press the "**Register gateway**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/4-register-gateway.png,
        title: Put information about the gateway (gateway EUI) and click the "**Register gateway**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/5-gateway-info.png,
        title: The gateway is added. You can see its status - disconnected.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addGatewaySteps %}


{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integrations/devices-configuration/" | append: articleFilename | append: "-thethingsstack-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

### Configure application on The Things Stack Community Edition

Now we need to configure application on The Things Stack. To do this please follow next steps:  

{% assign addIntegrationSteps = '
    === 
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/2-welcome-screen-application.png,
        title: Open your console and click on the "<b>Create an application</b>".
    === 
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/3-create-application.png,
        title: Fill in the required fields about the application. Then click "**Create application**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/5-generate-new-api-key.png,
        title: Open "<b>Integrations</b>" -> "<b>MQTT</b>" page in the left menu. Click on the "<b>Generate new API key</b>" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/6-copy-access-key.png,
        title: Press on copy icon to copy a key and save it.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addIntegrationSteps %}

Now we can move to ThingsBoard to configure integration.  

### Create integration in ThingsBoard

Next we will create "**The Things Stack**" (TTS) integration inside the ThingsBoard.

At first, copy the code, we will need it to create the uplink converter:

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

{% include code-toggle.liquid code=converterCode params="javascript|.copy-code.expandable-15" %}

In the "**Connect**" step, you will need the following parameters:

- **Region**: *eu1* (region where your application was registered inside The Things Stack Community)
- **Username**: *thingsboard-application@ttn* (use ***Username*** from integration on TTS)
- **Password**: use ***Password*** from integration on The Things Stack Community

{% assign createTTSIntegration = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/1-create-tts-integration.png,
        title: Click "**plus**" icon in the upper right corner to add new integration. Select type "**The Things Stack Community**". Then, click "**Next**".
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/2-create-tts-integration-uplink.png,
        title: Paste the previously copied script to the Decoder function section. Click “Next”.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/3-create-tts-integration-downlink.png,
        title: Leave the “Downlink data converter” field empty. Click on “Skip” button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsstack/4-create-tts-integration-configuration.png,
        title: Next, fill in the fields with your parameters. After, press “Add” button.
'
%}

<br>
Now, open the "**Integration center**" section -> "**Integrations**" page and follow this steps:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createTTSIntegration %} 

Integration is created.