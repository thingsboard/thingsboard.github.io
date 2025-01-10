---
layout: docwithnav
title: Register of a mokosmart LoRaWAN device and Gateway in ThingsBoard

---

* TOC
{:toc}

The purpose of this guide is to outline how to register mokosmart LoRaWAN end devices and gateway in ThingsBoard. This document is applicable to all the end point LoRaWan product of mokosmart.

## Add Gateway

### Add Gateway on TTN

**Step 1**: Power on gateway, and connect to gateway WIFI, access to the Web GUI, get the gateway ID on the "FUNCTAION-Server Access" page of Web GUI.

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-1.png)

**Step 2**: Login in TTN account, choose the corresponding cluster, Here select US915 frequency plan as example, so the cluster will be North America 1.

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-2.png)

**Step 3**: Go to gateway console on the home page.

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-3.png)

**Step 4**: Register new gateway:

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-4.png)

<br>

- Fill in the gateway ID got in step 1:

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-5.png)

<br>

- Customize your gateway ID in TTN;
- Choose the frequency plan United States 902-928 MHz as your plan; 
- Click the "Register gateway" to finish gateway register.

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-6.png)

**Step 5**: Configure gateway’s parameter on the "FUNCTION-Server Access" page of Web GUI.

- Get the gateway server address in gateway General setting page.

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-7.png)

- Fill in the server address in MKGW2 Web GUI page, the port will be 1700.

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-8.png)


- Select the Frequency as your plan, here choose 915, and channel must be same as the configuration in TTN, we choose FSB2 in Step 4, so here we select channel US915_CH08-15.

**Step 6**: Check the gateway status:

- Check the status in gateway Web GUI, if it’s green, it means the gateway connect to server successfully, if it’s red, it means the gateway doesn't connect to the server.

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-9.png)

<br>

- Check the status on TTN platform.

![image](https://img.thingsboard.io/samples/moko-smart/add-gateway-on-ttn-10.png)

<br>

{% capture difference %}
**Note**: When registering the gateway, please choose the gateway frequency band carefully and make sure the frequency band of the device and the gateway are the same.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Create Application on TTN

**Step 1**: Open your console and click on the "Create an application".

![image](https://img.thingsboard.io/samples/moko-smart/create-application-on-ttn-1.png)

<br>

**Step 2**: Fill in the required fields about the application. Then click "Create application" button.

![image](https://img.thingsboard.io/samples/moko-smart/create-application-on-ttn-2.png)

<br>

**Step 3**: Go to the "Integrations" -> open the "MQTT" page in the left menu. Then, click on the "Generate new API key" button.

![image](https://img.thingsboard.io/samples/moko-smart/create-application-on-ttn-3.png)

<br>

**Step 4**: Copy and save the password (API key) (after leaving the page it won't be displayed).

![image](https://img.thingsboard.io/samples/moko-smart/create-application-on-ttn-4.png)

<br>

### Create Integration in ThingsBoard

- Go to the "**Integrations**" page of the "**Integrations center**" section. Click "**plus**" icon in the upper right corner to add new integration. Select "**The Things Stack Community**" as the integration type. Then, click "**Next**".

![image](https://img.thingsboard.io/samples/moko-smart/create-integration-in-thingsboard-1.png)

- Paste the following script to the Decoder function section. Click "**Next**".

```js
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
```
{:.copy-code.expandable-15}

![image](https://img.thingsboard.io/samples/moko-smart/create-integration-in-thingsboard-2.png)

- Leave the "**Downlink data converter**" field empty. Click on "**Skip**" button.

![image](https://img.thingsboard.io/samples/moko-smart/create-integration-in-thingsboard-3.png)

- Next, fill in the fields with your parameters. After, press "**Add**" button.

![image](https://img.thingsboard.io/samples/moko-smart/create-integration-in-thingsboard-4.png)

## Add Device

**Step 1**: 
- Go to the application console - "End devices" page;
- Click "Register end device".

![image](https://img.thingsboard.io/samples/moko-smart/add-device-1.png)

<br>

**Step 2**: 
- Choose enter end device specifies manually;
- Select frequency plan (the frequency plan should be totally same as your gateway frequency plan);
- Select LoRaWan version as v1.0.3.

![image](https://img.thingsboard.io/samples/moko-smart/add-device-2.png)

<br>

**Step 3**: Enter the JoinEUI, MOKO device default JoinEUI is 70 B3 D5 7E D0 02 6B 87

**Step 4**: After JoinEUI is confirmed, enter the DevEUI and AppKEY, for MOKO device, you can get the DevEUI on the package label, and the AppKEY for device is 2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C by default. Or you can connect to the device via “MKLora” APP and read the DevEUI and AppKEY from the APP.

![image](https://img.thingsboard.io/samples/moko-smart/add-device-3.png)

<br>

**Step 5**: Click Register end device to finish.

**Step 6**: Check the status of device on TTN.

![image](https://img.thingsboard.io/samples/moko-smart/add-device-4.png)

<br>

And you can also check the live data, if there is payload uploaded means the device already connect to the server.

![image](https://img.thingsboard.io/samples/moko-smart/add-device-5.png)

<br>

**Step 7**: Navigate to Payload formatters, get the decoder from the [moko github_link](https://github.com/LoRaWAN-Product-Decoder/MOKOSMART-LoRaWAN-Product-Decoder/tree/main/LW006){:target="_blank"}, copy the related decoder and paste it. And then save it.

![image](https://img.thingsboard.io/samples/moko-smart/add-device-6.png)

<br>

**Step 8**: Navigate to the "**Devices**" page of the "**Entities**" section, here you can see that:

- Devices registered in TTN were registered in ThingsBoard in the "Latest telemetry" section you will the update data from the device.

![image](https://img.thingsboard.io/samples/moko-smart/add-device-7.png)

## Add Dashboard

A dashboard in ThingsBoard allows users to visualize and monitor data collected from IoT devices. Let's create a dashboard and add two widgets to it:

- The first widget will show the device's battery level.
- The second widget will display the device's location on a map.

### Add Dashboard

{% assign addindDashboard = '
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-dashboard-1.png,
        title: Navigate to the "**Dashboards**" page through the main menu on the left of the screen. Click the "**+**" sign in the upper right corner of the screen, and select "**Create new dashboard**" from the drop-down menu. In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "**Add**";
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addindDashboard %}

### Add Battery level widget

{% assign addingBatteryLevelWidget = '
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-1.png,
        title: Click the "**+ Add widget**" button at the top of the screen or click the large "**Add new widget**" icon in the center of the screen (if this is your first widget on this dashboard);
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-2.png,
        title: Find the "**Status indicators**" widget bundle and click on it;
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-3.png,
        title: Select the "**Battery level**" widget;
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-4.png,
        title: The "Add widget" window will appear. Specify the "**lw006test**" device as the datasource and "**batt_level**" data ket as the variable that you want to monitor. Click "**Add**";
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-5.png,
        title: You have added a widget that displays the battery level.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addingBatteryLevelWidget %}

### Add Map widget

{% assign addingMapWidget = '
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-6.png,
        title: Click the "**+ Add widget**" button at the top of the screen to add another one widget;
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-7.png,
        title: Find the "**Maps**" widget bundle and click on it;
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-8.png,
        title: Select the "**Google map**" widget;
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-9.png,
        title: The "Add widget" window will appear. Select "Device" as the datasource type. Specify the "**lw006test**" device as the datasource. Add "**latitude**" and "**longitude**" as time series data keys. Click "**Add**";
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-10.png,
        title: To save the dashboard, click "**Save**" button in the upper right corner;
    ===
        image: https://img.thingsboard.io/samples/moko-smart/add-widget-11.png,
        title: You have added a widget that displays the device&#39;s location on a map.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addingMapWidget %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}