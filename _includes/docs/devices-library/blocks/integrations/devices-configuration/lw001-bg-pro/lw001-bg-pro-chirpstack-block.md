### Add a device on the Chirpstack  

To add a device, you can follow next steps:  
- Login to chirpstack server  
- Go to the Device profiles page and click on Add device profile button  
- Copy the following script  
- Fill the fields and click on submit button  
- Go to the application page, click on “Add application”, and fill the parameters your application and press Add device button  
- Fill the parameters with values from the device configuration, then choose previously created device profile and click on Submit button  
- Put your Application key to the field and click on Submit button to save the device  

Download the JSON file with the uplink converter settings by clicking the button below:  

https://github.com/LoRaWAN-Product-Decoder/MOKOSMART-LoRaWAN-Product-Decoder/blob/main/LW001-BG%20PRO%20V2/LW001-BG%20PRO%20V2%20on%20chirpstack.js


{% assign connectGatewayToNS = '
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-add-new-forwarder.png,
        title: Open gateway control panel. Go to the "**Packet Forwarder**" page and click on "**plus**" button, to add a new forwarder.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-chirpstack-configuration-window.png,
        title: Put into "**Server address**" your server address, in our case it is **sample.network.server.com**. Click "**Save**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-after.png,
        title: Click "**Save & Apply**" button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/gateway-added.png,
        title: Now you can check the status of the gateway on Chirpstack, it should be online.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=connectGatewayToNS %}

### Configure application integration with ThingsBoard

To configure the integration, follow the next steps:  
- Go to the "Integrations" page, find and select the ThingsBoard.  
- Enter the URL of your ThingsBoard server and click Submit button.

### Create device on ThingsBoard

To create device on ThingsBoard, follow the next steps:  
- Go to the Devices page.  
- Click on Add device button.  
- Fill in the device name and click the Next: Credentials button.  
- Enter the device Access token (previously copied Device EUI value) and click the Add button.
- Click on the device to open device information window.  
- Go to the Latest telemetry tab to view device reported data.
