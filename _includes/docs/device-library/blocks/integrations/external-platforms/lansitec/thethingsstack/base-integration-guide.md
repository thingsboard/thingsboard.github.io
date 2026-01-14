{% assign vendorLowerCase = page.vendor | downcase %}
{% assign deviceNameInPath = page.deviceImageFileName | split: "." | first %}
{% assign converterFilePath = "/docs/device-library/blocks/integrations/external-platforms/" | append: vendorLowerCase | append: "/thethingsstack/" | append: deviceNameInPath | append: "-uplink-converter.md" %}

### Add a gateway on The Things Stack Community Edition

We need to add a gateway on [The Things Stack Community Edition](https://console.cloud.thethings.network/){:target="_blank"}.

To add a gateway, you can follow next steps:

{% assign ttnsAddGateway = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-1.png,
        title: Login to the cloud and open your console.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-add-gateway-1.png,
        title: Go to the **Home** page press the "**Register gateway**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-add-gateway-2.png,
        title: Put information about the gateway (gateway EUI) and click the "**Register gateway**"button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-add-gateway-3.png,
        title: The gateway is added. You can see its status - disconnected.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=ttnsAddGateway %}

### Add a device on The Things Stack Community Edition

We need to add a device on [The Things Stack Community Edition](https://console.cloud.thethings.network/){:target="_blank"}.

To add a device, you can follow next steps:

{% assign ttns = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-2.png,
        title: Go to the **Applications** page. Then select your application and click on its name.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-3.png,
        title: Click on the **Register end device** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-4.png,
        title: Put the **APP EUI** value to the **JoinEUI** field. Then, press the **Confirm** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-5.png,
        title: Fill the rest parameters and press **Register end device** button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=ttns %}

### Configure Payload Formatter

Go to the **Payload formatters** page and select **Custom Javascript formatter** for **Formatter type**. Paste the decode function and click **Save changes** button.

{% assign ttns1 = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/ttns-6.png,
        title: Go to the **Payload formatters** page and select **Custom Javascript formatter** for **Formatter type**. Paste the decoder function and click **Save changes** button.
'
%}

{% include images-gallery.liquid imageCollection=ttns1 %}

{% include {{ converterFilePath }} %} 

### Create integration in ThingsBoard

Next we will create "**The Things Stack**" (TTS) integration inside the ThingsBoard.

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

In the "**Connect**"step, you will need the following parameters:

- **Region**: *eu1* (region where your application was registered inside The Things Stack Community)
- **Username**: *thingsboard-application-2025-06@ttn* (use **Username** from integration on TTS)
- **Password**: use **Password** from integration on The Things Stack Community

Now, navigate to the "**Integrations**" page under the "**Integrations center**" section and follow this steps:

{% assign tbIntergration = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-intergration-1.png,
        title: Click "**plus**" icon in the upper right corner to add new integration. Select type "**The Things Stack Community**". Then, click "**Next**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-intergration-2.png,
        title: Paste the previously copied script to the Decoder function section. Click "**Next**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-intergration-3.png,
        title: Leave the "**Downlink data converter**" field empty. Click on "**Skip**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-intergration-4.png,
        title: Next, fill in the fields with your parameters. After, press "**Add**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=tbIntergration %}