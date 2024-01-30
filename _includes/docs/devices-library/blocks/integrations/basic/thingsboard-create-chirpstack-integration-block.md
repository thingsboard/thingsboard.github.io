### Add a gateway on the Chirpstack

We need to add a gateway on the [Chirpstack](https://chirpstack.io){: target="_blank"}.   

To add a gateway, follow next steps:

{% assign addGatewaySteps = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/gateways.png,
        title: Login to Chirpstack server. Go to the "**Gateways**" page and click on the "**Add gateway**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/add-gateway.png,
        title: Fill **name**, **gateway EUI** (It will be different, you can find it on the gateway control panel) with your data, scroll down and click on the "**Submit**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/gateway-added-offline.png,
        title: The gateway is added. In gateways tab you can see its status.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addGatewaySteps %}

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integrations/devices-configuration/" | append: articleFilename | append: "-chirpstack-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

### Configure application on the Chirpstack

Now we need to configure application on the Chirpstack. To do this please follow next steps:  

{% assign addIntegrationSteps = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/applications.png,
        title: Go to the "**Applications**" page in the left menu and click on the "**Add application**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/create-application.png,
        title: Fill application name and click on the "**Submit**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/api-keys.png,
        title: Go to the **API keys** page in the left menu and click on the "**Add API key**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/create-api-key.png,
        title: Put some name for the API key and click on the "**Submit**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/api-key-created.png,
        title: Copy the created API key and save it, we will need it for integration on ThingsBoard.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addIntegrationSteps %}

Now we can move to ThingsBoard to configure integration.  

### Create integration in ThingsBoard

Next, we will create an integration with Chirpstack inside the ThingsBoard and configure the integration on Chirpstack.

At first, copy the code, we will need it to create the uplink converter:

{% capture converterCode %}
var data = decodeToJson(payload);
var deviceName = data.deviceInfo.deviceName;
var deviceType = data.deviceInfo.deviceProfileName;

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
var dateString = data.time.substring(0, data.time.lastIndexOf('+')-3) + "Z";
var timestamp = new Date(dateString).getTime();
// --- Timestamp parsing

// You can add some keys manually to attributes or telemetry
attributes.fPort = data.port;
attributes.encodedData = data.data;

// You can exclude some keys from the result
var excludeFromAttributesList = ["deviceName", "rxInfo", "txInfo", "deduplicationId", "time", "dr", "fCnt", "fPort"];
var excludeFromTelemetryList = ["data", "deviceInfo", "devAddr", "adr"];

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

{% assign createChirpstackIntegration = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/1-create-integration.png,
        title: Go to the "**Integration center**" section, "**Integrations**" page and click "**plus**" button to add new integration. Select type "**Chirpstack**". Then, click "**Next**".
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/2-create-integration-uplink.png,
        title: Paste the previously copied script to the Decoder function section. Click "**Next**".
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/3-create-integration-downlink.png,
        title: Leave the "**Downlink data converter**" field empty. Click on "**Skip**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/4-create-integration-configuration.png,
        title: Put your "**Application server URL**" and "**API Key**" from Chirpstack and copy "**HTTP endpoint URL**", Click on "**Add**" button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/application-integrations.png,
        title: Now, open your Chirpstack, go to the "**Applications**" page -> Your application -> "**Integrations**" tab, Find and click on the **HTTP** tile.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/chirpstack/create-application-integration.png,
        title: Put "**HTTP URL endpoint**" into "**Event Endpoint URL(s)**" field and click on "**Submit**" button.
'
%}

To add integration follow the next steps:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createChirpstackIntegration %} 

Integration is created.