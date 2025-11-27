### Add a device on the Chirpstack  

To add a device, you can follow next steps:  

- [Download the JSON file](https://github.com/LoRaWAN-Product-Decoder/MOKOSMART-LoRaWAN-Product-Decoder/blob/main/LW001-BG%20PRO%20V2/LW001-BG%20PRO%20V2%20on%20chirpstack.js){:target="_blank"} with the uplink converter settings.  

{% assign AddDeviceOnChirpstack = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/1.png,
        title: Login to ChirpStack server. Go to the **Device profiles** page and click on **Add device profile** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/2.png,
        title: Fill the fields.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/3.png,
        title: Go to the **Codec** page and paste the script just copied. Click **Submit** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/4.png,
        title: Go to the **Applications** page, and click on "**Add application**".
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/5.png,
        title: Named your application. **Click Submit**.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/6.png,
        title: Open created application and press **Add device** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/7.png,
        title: Fill the parameters with values from the device configuration, then choose previously created device profile and click on **Submit** button
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/8.png,
        title: Go to the **Variables** tab, put your **Application key** to the field and click on **Submit** button to save the device.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=AddDeviceOnChirpstack %}

### Configure application integration with ThingsBoard

{% assign configureApplicationIntegrationWithThingsBoard = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/9.png,
        title: Go to the "**Integrations**" page, find and select the **ThingsBoard**.  
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/10.png,
        title: Enter the URL of your **ThingsBoard** server and click **Submit** button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=configureApplicationIntegrationWithThingsBoard %}


### Create device on ThingsBoard

To create device on ThingsBoard, follow the next steps:  

{% assign createDeviceOnThingsBoard = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/11.png,
        title: **Log in** to your **ThingsBoard** account. Navigate to the **Devices** page and click the "**+**" button to add a new device.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/12.png,
        title: Enter the **device name** and click **Next: Credentials**. 
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/13.png,
        title: In the **Credentials** step, specify the device’s **Access token** (use the previously copied **Device EUI** value), then click **Add**.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/14.png,
        title: The device is now created. Click on the device to open its **details** page. Navigate to the **Latest telemetry** tab to view the data reported by the device.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createDeviceOnThingsBoard %}