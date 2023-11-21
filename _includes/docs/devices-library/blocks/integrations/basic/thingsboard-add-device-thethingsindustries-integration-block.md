### Add a device on The Things Industries

We need to add a device on The Things Industries cloud.  
To add a device, you can follow next steps:  

{% assign addDeviceSteps = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsindustries/1-login-page.png,
        title: Login to the cloud and open your console.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsindustries/2-cloud-console.png,
        title: Choose **Gateways**.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsindustries/3-gateway-list.png,
        title: Press the **+ Register gateway** button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsindustries/4-register-gateway.png,
        title: Put information about the gateway (gateway EUI). Then click the **Register gateway** button.
    ===
        image: https://img.thingsboard.io/devices-library/basic/integrations/thethingsindustries/5-gateway-info.png,
        title: The gateway is added, copy and save **Gateway Server address**, we will need it later. 
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addDeviceSteps %}


{% include /docs/devices-library/blocks/integrations/converters/basic/add-or-change-converter-block.md integration-type="thethingsindustries" %}
