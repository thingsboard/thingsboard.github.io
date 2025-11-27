### Add a device on The Things Industries

To add a device, you can follow next steps:

{% assign addDeviceOnThingsIndustries = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/26.png,
        title: Go to the **Applications** page. Then select your **application** and click on its name.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/27.png,
        title: Click on the **+ Register end device** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/28.png,
        title: Choose "**Enter end device specifics manually**". Then, put the **APP EUI** value to the **JoinEUI** field. Press the **Confirm** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/29.png,
        title: Fill the rest parameters and press **Register end device** button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addDeviceOnThingsIndustries %}

### Configure Payload Formatter

- [Download the JSON file](https://github.com/LoRaWAN-Product-Decoder/MOKOSMART-LoRaWAN-Product-Decoder/blob/main/LW001-BG%20PRO%20V2/LW001-BG%20PRO%20V2%20on%20TTN.js){:target="_blank"} with the uplink converter settings.

{% assign ConfigurePayloadFormatter = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/30.png,
        title: Go to the **Payload formatters** page and select **Custom Javascript formatter** for Formatter type. Paste the decode function and click **Save changes** button.  
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=ConfigurePayloadFormatter %}

### Create integration in ThingsBoard

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
  
In the "Connect" step, you will need the following parameters:  
- Region: *eu1* (region where your application was registered inside The Things Industries Console);  
- Username: *thingsboard-application-2025-05@lansitec-testplan* (use Username from integration on The Things Stack Industries);  
- Password: use **Password** from integration on The Things Industries. 

Now, navigate to the **Integrations** page under the **Integrations center** section of **your ThingsBoard instance** and follow these steps:

{% assign createIntegrationInThingsBoard = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/31.png,
        title: Click "**plus**" icon in the upper right corner to add new integration. Select "**The Things Stack Industries**" integration type. Then, click "**Next**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/32.png,
        title: Paste the previously copied script to the **Decoder function** section. Click "**Next**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/33.png,
        title: Leave the "Downlink data converter" field empty. Click on "**Skip**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/34.png,
        title: Next, fill in the fields with your parameters. After, press "**Add**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createIntegrationInThingsBoard %}

### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in the [devices](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}. To check it you may open Devices page in Entities section. The device should be in devices list. You can check the data by click on it and open tab Attributes or Latest telemetry.

{% assign checkDataOnThingsBoard = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/35.png,
        title: So, the device was added and if it sends any data - it should appear in the devices. To check it you may open **Devices** page in **Entities** section. The device should be in devices list. You can check the data by click on it and open tab **Attributes** or **Latest telemetry**.  
'
%}

{% include images-gallery.liquid imageCollection=checkDataOnThingsBoard %}