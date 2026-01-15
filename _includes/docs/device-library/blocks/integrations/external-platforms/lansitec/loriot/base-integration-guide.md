{% assign vendorLowerCase = page.vendor | downcase %}
{% assign deviceNameInPath = page.deviceImageFileName | split: "." | first %}
{% assign converterFilePath = "/docs/device-library/blocks/integrations/external-platforms/" | append: vendorLowerCase | append: "/loriot/" | append: deviceNameInPath | append: "-uplink-converter.md" %}

### Add a gateway on the Loriot

We need to add a gateway on the [Loriot](https://loriot.io/){:target="_blank"}.

To add a gateway, you can follow next steps:

{% assign loriotAddGateway = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-add-gateway-1.png,
        title: Login to Loriot server. Open the "**Sample network**" or create a new one in the "**Networks**" section.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-add-gateway-2.png,
        title: Click on the "**Add Gateway**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-add-gateway-3.png,
        title: Scroll down and select "**MultiTech Conduit AEP**".
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-add-gateway-4.png,
        title: Scroll up and put information about the gateway **MAC Address** (Just remove **FFFF** or **FFFE** in the middle of **gateway EUI**) into **eth0 MAC address** and gateway EUI to **Custom EUI** field.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-add-gateway-5.png,
        title: The gateway is added. You can see its status - disconnected.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=loriotAddGateway %}

### Add a device on the Loriot

We need to add a device on the [Loriot](https://loriot.io/){:target="_blank"}.

To add a device, you can follow next steps:

{% assign loriotAddGateway = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-1.png,
        title: Login to Loriot server. We use **eu2.loriot.io**, but it depends on chosen region during registration.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-2.png,
        title: Go to the "**Applications**" page in left menu.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-3.png,
        title: Open your application, in our case it is "**SampleApp**".
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-4.png,
        title: Go to the "**Enroll Device**" page. Fill in the fields, with a configuration from your device. Then click the "**Enroll**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=loriotAddGateway %}

### Create integration in ThingsBoard

Next we will create an integration with Loriot inside the ThingsBoard.

At first, copy the code, we will need it to create the uplink converter:

```javascript
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var result = {
  deviceName: deviceName,
  deviceType: deviceType,
  telemetry: data.uplink_message.decoded_payload
};

return result;
```
{:.copy-code}

Now, navigate to the "**Integrations**" page under the "**Integrations center**" section and follow this steps:

{% assign ttnsAddGateway = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-intergration-1.png,
        title: Click "**plus**" icon button in the upper right corner to add new integration. Select type "**Loriot**". Then, click "**Next**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-intergration-2.png,
        title: Paste the previously copied script to the Decoder function section. Click "**Next**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-intergration-3.png,
        title: Leave the "**Downlink data converter**" field empty. Click on "**Skip**"button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/loriot-intergration-4.png,
        title: Next, fill in the fields with your parameters. After, press "**Add**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=ttnsAddGateway %}