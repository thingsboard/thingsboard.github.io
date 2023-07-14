### Add a gateway on the Chirpstack

We need to add a gateway on the [Chirpstack](https://chirpstack.io){: target="_blank"}.   
To add a gateway, you can follow next steps:

{% assign addGatewaySteps = '
    ===
        image: /images/devices-library/basic/integrations/chirpstack/main-page.png,
        title: Login to Chirpstack server.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/gateways.png,
        title: Go to **Gateways** and click on **Add gateway**.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/add-gateway.png,
        title: Fill **name**, **gateway EUI** (It will be different, you can find it on the gateway control panel) with your data, scroll down and click on **Submit** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/add-gateway.png,
        title: Scroll up and put information about the gateway **MAC Address** (Just remove **FFFF** or **FFFE** in the middle of ***gateway EUI***) into **eth0 MAC address** and gateway EUI to **Custom EUI** field.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/gateway-added-offline.png,
        title: The gateway is added. In gateways tab you can see its status.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addGatewaySteps %}

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integration-devices-configuration/" | append: articleFilename | append: "-chirpstack-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

### Configure application on the Chirpstack

Now we need to configure application on the Chirpstack. To do this please follow next steps:  

{% assign addIntegrationSteps = '
    ===
        image: /images/devices-library/basic/integrations/chirpstack/applications.png,
        title: Go to **Applications** in the left menu and click **Add application**.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/create-application.png,
        title: Fill application name and click on **Submit** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/api-keys.png,
        title: Go to **API keys** in the left menu and click on the **Add API key** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/create-api-key.png,
        title: Put some name for the API key and click on **Submit** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/api-key-created.png,
        title: Copy the created API key and save it, we will need it for integration on ThingsBoard.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addIntegrationSteps %}

Now we can move to ThingsBoard to configure integration.  

### Create uplink converter

At first, copy the code for uplink converter, we will need it for integration:

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

{% include code-toggle.liquid code=converterCode params="javascript|.copy-code.expandable-20" %}

### Create integration

Next we will create an integration with Chirpstack inside the ThingsBoard and configure the integration on Chirpstack.

{% assign createChirpstackIntegration = '
    ===
        image: /images/devices-library/basic/integrations/chirpstack/1-create-integration.png,
        title: Go to **Integrations**, press **plus** button and choose **Chirpstack** as a type, put some name.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/2-create-integration-uplink.png,
        title: Check **Create new uplink data converter** and replace a code or create the existing one.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/3-create-integration-configuration.png,
        title: Put your **Application server URL** and **API Key** from Chirpstack and copy **HTTP endpoint URL**, Click on **Add** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/application-integrations.png,
        title: Open your Chirpstack, go to **Applications** -> Your application -> **Integrations** tab.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/create-application-integration.png,
        title: Scroll down and click on **+** under **HTTP** tile. Put **HTTP URL endpoint** into **Event Endpoint URL(s)** field and click on **Submit** button.
'
%}

To add integration click on '**+**' button and follow the next steps:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createChirpstackIntegration %} 

Integrations are created.
