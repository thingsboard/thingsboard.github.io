### Add a device on The Things Industries

To add a device, you can follow next steps:
- Go to the Applications page. Then select your application and click on its name.  
- Click on the Register end device button.  
- Put the APP EUI value to the JoinEUI field. Then, press the Confirm button.  
- Fill the rest parameters and press Register end device button.

{% assign connectGatewayToNS = '
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-add-new-forwarder.png,
        title: Open gateway control panel. Go to the "**Packet Forwarder**" page and click on "**plus**" button, to add a new forwarder.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-the-things-industries-window.png,
        title: Put into "**Server address**" from the network server. Click "**Save**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-the-things-industries-after.png,
        title: Click "**Save & Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=connectGatewayToNS %}

### Configure Payload Formatter

Go to the Payload formatters page and select Custom JavaScript formatter as the Formatter   
type. Paste the decode function into the editor and click the Save changes button.  
Download the JSON file with the uplink converter settings by clicking the button below:  
https://github.com/LoRaWAN-Product-Decoder/MOKOSMART-LoRaWAN-Product
Decoder/blob/main/LW001-BG%20PRO%20V2/LW001-BG%20PRO%20V2%20on%20TTN.js

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
  
In the “Connect“step, you will need the following parameters:  
- Region: eu1 (region where your application was registered inside The Things Industries Console);  
- Username: thingsboard-application-2025-05@lansitec-testplan (use Username from integration on The Things Stack Industries);  
- Password: use Password from integration on The Things Industries. Now, navigate to the “Integrations” page under the “Integrations center” section and follow this steps:  
- Click “plus“ icon in the upper right corner to add new integration. Select type “The Things Industries Integration”. Then, click “Next” button.  
- Paste the previously copied script to the Decoder function section. Click “Next” button.  
- Leave the "Downlink data converter" field empty. Click on "Skip" button.  
- Next, fill in the fields with your parameters. After, press "Add" button.

### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in the devices. To check it you may open Devices page in Entities section. The device should be in devices list. You can check the data by click on it and open tab Attributes or Latest telemetry.