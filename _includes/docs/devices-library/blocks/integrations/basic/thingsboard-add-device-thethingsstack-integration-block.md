### Add a device on The Things Stack Community Edition

We need to add a device on [The Things Stack Community Edition](https://console.cloud.thethings.network){:target="_blank"}.

To add a device, you can follow next steps:  

{% assign addGatewaySteps = '
    ===
        image: /images/devices-library/basic/integrations/thethingsstack/1-tts-login.png,
        title: Login to the cloud and open your console.
    ===
        image: /images/devices-library/basic/integrations/thethingsstack/create-device-step-0.png,
        title: Go to the **Applications** page. Then select your application and click on its name.
    ===
        image: /images/devices-library/basic/integrations/thethingsstack/create-device-step-1.png,
        title: Click on the **Register end device** button.
    ===
        image: /images/devices-library/basic/integrations/thethingsstack/create-device-step-3.png,
        title: Put the **APP EUI** value to the **JoinEUI** field. Press the **Confirm** button.
    ===
        image: /images/devices-library/basic/integrations/thethingsstack/create-device-step-4.png,
        title: Fill the rest parameters and press **Register end device** button.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addGatewaySteps %}


{% include /docs/devices-library/blocks/integrations/converters/basic/add-or-change-converter-block.md integration-type="thethingsstack" %}