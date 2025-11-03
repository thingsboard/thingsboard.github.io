### Add a device on the Loriot

To add a device, you can follow next steps:
• Login to Loriot server. We use eu2.loriot.io, but it depends on chosen region during   
registration.  
• Go to the “Applications” page in left menu.  
• Open your application, in our case it is “SampleApp”.  
• Go to the “Enroll Device” page. Fill in the fields, with a configuration from your   
device. Then click the “Enroll” button.

{% assign connectGatewayToNS = '
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-add-new-forwarder.png,
        title: Open gateway control panel. Go to the "**Packet Forwarder**" page and click on "**plus**" button, to add a new forwarder.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-loriot-configuration-window.png,
        title: Put into **Server address** your server address, in our case it is **eu2.loriot.io**. And set ports to **1780**. Click "**Save**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-loriot-configuration-after.png,
        title: Click "**Save & Apply**" button.
    ===
        image: /images/devices-library/basic/integrations/loriot/gateway-added-connected.png,
        title: Now you can check the status of the gateway on the Loriot, it should be connected.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=connectGatewayToNS %}

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

Now, navigate to the “Integrations” page under the “Integrations center” section and follow this steps:  
- Click “plus” icon button in the upper right corner to add new integration. Select type "Loriot". Then, click "Next" button.  
- Paste the previously copied script to the Decoder function section. Click “Next” button.  
- Leave the “Downlink data converter” field empty. Click on “Skip“ button.
- Next, fill in the fields with your parameters. After, press “Add” button.

### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in the devices. To check it you may open Devices page in Entities section. The device should be in devices list. You can check the data by click on it and open tab Attributes or Latest telemetry.