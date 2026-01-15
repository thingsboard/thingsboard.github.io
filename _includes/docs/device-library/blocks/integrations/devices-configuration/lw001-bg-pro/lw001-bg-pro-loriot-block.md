### Add a device on the Loriot

To add a device, you can follow next steps:

{% assign addDeviceOnLoriot = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/36.png,
        title: Login to **Loriot** server. We use **eu2.loriot.io**, but it depends on chosen region during registration.  
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/37.png,
        title: Go to the **Applications** page in left menu.
===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/38.png,
        title: Open your **application**.
===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/39.png,
        title: Go to the "**Enroll Device**" page. Fill in the fields, with a configuration from your device.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/40.png,
        title: Then click the "**Create Device**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addDeviceOnLoriot %}

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

Now, navigate to the **Integrations** page under the **Integrations center** section of **your ThingsBoard instance** and follow these steps:
{% assign createIntegrationInThingsBoard = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/41.png,
        title: Click "**plus**" icon in the upper right corner to add new integration. Select "**Loriot**" integration type. Then, click "**Next**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/42.png,
        title: Paste the previously copied script to the **Decoder function** section. Click "**Next**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/43.png,
        title: Leave the "Downlink data converter" field empty. Click on "**Skip**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/44.png,
        title: Next, fill in the fields with your parameters. After, press "**Add**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createIntegrationInThingsBoard %}

### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in the [devices](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}. To check it you may open Devices page in Entities section. The device should be in devices list. You can check the data by click on it and open tab Attributes or Latest telemetry.

{% assign checkDataOnThingsBoard = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/45.png,
        title: So, the device was added and if it sends any data - it should appear in the devices. To check it you may open **Devices** page in **Entities** section. The device should be in devices list. You can check the data by click on it and open tab **Attributes** or **Latest telemetry**.  
'
%}

{% include images-gallery.liquid imageCollection=checkDataOnThingsBoard %}