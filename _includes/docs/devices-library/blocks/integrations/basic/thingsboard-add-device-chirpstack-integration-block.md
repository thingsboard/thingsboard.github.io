### Add a device on the Chirpstack

We need to add a device on the [Chirpstack](https://chirpstack.io){: target="_blank"}.

To add a device, you can follow next steps:

{% assign addDeviceSteps = '
    ===
        image: /images/devices-library/basic/integrations/chirpstack/main-page.png,
        title: Login to Chirpstack server.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/add-device-profile.png,
        title: Go to the **Device profiles** page and click on **Add device profile** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/create-device-profile.png,
        title: Fill the fields and click on **Submit** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/create-device-step-0.png,
        title: Go to the **Applications** page, click on your application and press **Add device** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/create-device-step-1.png,
        title: Fill parameters with values from the device configuration. Then choose previously created device profile and click on **Submit** button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/create-device-step-2.png,
        title: Put your **Application key** to the field and click on **Submit** button to save the device.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addDeviceSteps %}

{% include /docs/devices-library/blocks/integrations/converters/basic/add-or-change-converter-block.md integration-type="chirpstack" %}

