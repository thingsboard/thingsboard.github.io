### Add a gateway on the Loriot

We need to add a gateway on the [Loriot](https://loriot.io){: target="_blank"}.   

To add a gateway, you can follow next steps:

{% assign addGatewaySteps = '
    ===
        image: /images/devices-library/basic/integrations/loriot/main-page-network.png,
        title: Login to Loriot server. Open the "**Sample network**" or create a new one in the "**Networks**" section
    ===
        image: /images/devices-library/basic/integrations/loriot/sample-network.png,
        title: Click on the "**Add Gateway**" button.
    ===
        image: /images/devices-library/basic/integrations/loriot/register-gateway.png,
        title: Scroll down and select "**Packet Forwarder Semtech**".
    ===
        image: /images/devices-library/basic/integrations/loriot/add-gateway.png,
        title: Scroll up and put information about the gateway **MAC Address** (Just remove **FFFF** or **FFFE** in the middle of ***gateway EUI***) into **eth0 MAC address** and gateway EUI to **Custom EUI** field.
    ===
        image: /images/devices-library/basic/integrations/loriot/gateway-added-disconnected.png,
        title: The gateway is added. You can see its status - disconnected.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addGatewaySteps %}

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integrations/devices-configuration/" | append: articleFilename | append: "-loriot-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

### Configure application on the Loriot

Now we need to copy the "**Application ID**" in the Loriot. It is required for configuring the integration in ThingsBoard. 

To do this please follow next steps:

{% assign copyLoriotApplicationId = '
    ===
        image: /images/devices-library/basic/integrations/loriot/main-page-application.png,
        title: Go to te "**Applications**" in the left menu and choose "**SampleApp**" or create a new one.
    ===
        image: /images/devices-library/basic/integrations/loriot/sample-application.png,
        title: Copy "**Application ID**" value and save it.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=copyLoriotApplicationId %}

Now we can move to ThingsBoard to configure integration.

### Create integration in ThingsBoard

Next we will create an integration with Loriot inside the ThingsBoard.  

At first, copy the code, we will need it to create the uplink converter:

{% capture converterCode %}
var data = decodeToJson(payload);
var deviceName = data.EUI;
var deviceType = "LoraDevices";

// If you want to parse incoming data somehow, you can add your code to this function.
// input: bytes
// expected output:
//  {
//    "attributes": {"attributeKey": "attributeValue"},
//    "telemetry": {"telemetryKey": "telemetryValue"}
//  }
// default functionality - convert bytes to HEX string with telemetry key "HEX_bytes"

function decodePayload(input) {
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
var timestamp = data.ts;
// --- Timestamp parsing

// You can add some keys manually to attributes or telemetry
attributes.fPort = data.port;
attributes.battery = data.bat;

// You can exclude some keys from the result
var excludeFromAttributesList = ["data", "gws", "EUI", "ts", "cmd", "port", "seqno", "fcnt", "toa", "ack", "bat", "snr", "rssi"];
var excludeFromTelemetryList = ["gws", "EUI", "ts", "freq", "port", "data", "cmd", "dr", "offline"];

// Message parsing
// To avoid paths in the decoded objects we passing false value to function as "pathInKey" argument.
// Warning: pathInKey can cause already found fields to be overwritten with the last value found.

var telemetryData = toFlatMap(data, excludeFromTelemetryList, false);
var attributesData = toFlatMap(data, excludeFromAttributesList, false);

var uplinkDataList = [];

// Passing incoming bytes to decodePayload function, to get custom decoding
var customDecoding = decodePayload(hexToBytes(data.data));

// Collecting data to result
if (customDecoding.?telemetry.size() > 0) {
    telemetry.putAll(customDecoding.telemetry);
}

if (customDecoding.?attributes.size() > 0) {
    attributes.putAll(customDecoding.attributes);
}

telemetry.putAll(telemetryData);
attributes.putAll(attributesData);

var deviceInfo = {
deviceName: deviceName,
deviceType: deviceType,
telemetry: {
ts: timestamp,
values: telemetry
},
attributes: attributes
};

uplinkDataList.add(deviceInfo);

if (data.cmd == "gw") {
    foreach( gatewayInfo : data.gws ) {
        var gatewayInfoMsg = {
            deviceName: gatewayInfo.gweui,
            deviceType: "LoraGateway",
            attributes: {},
            telemetry: {
                "ts": gatewayInfo.ts,
                "values": toFlatMap(gatewayInfo, ["ts", "time", "gweui"], false)
            }
        };
        uplinkDataList.add(gatewayInfoMsg);
    }
}

return uplinkDataList;
{% endcapture %}

{% include code-toggle.liquid code=converterCode params="javascript|.copy-code.expandable-15" %}

{% assign createLoriotIntegration = '
    ===
        image: /images/devices-library/basic/integrations/loriot/1-create-integration-name-type.png,
        title: Click "**plus**" button to add new integration. Select type "**Loriot**". Then, click "**Next**".
    ===
        image: /images/devices-library/basic/integrations/loriot/2-create-integration-uplink.png,
        title: Paste the previously copied script to the Decoder function section. Click "**Next**".
    ===
        image: /images/devices-library/basic/integrations/loriot/3-create-integration-downlink.png,
        title: Leave the "**Downlink data converter**" field empty. Click on "**Skip**" button.
    ===
        image: /images/devices-library/basic/integrations/loriot/4-create-integration-configuration.png,
        title: Next, fill in the fields with your parameters. After, press "**Add**" button.
'
%}

<br>
Now, open the "**Integration center**" section -> "**Integrations**" page and follow this steps:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createLoriotIntegration %}

Integration is created.