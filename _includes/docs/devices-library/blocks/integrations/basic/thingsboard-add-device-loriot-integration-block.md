### Add a device on the Loriot

We need to add a device on the [Loriot](https://loriot.io){: target="_blank"}.

To add a device, you can follow next steps:

{% assign addDeviceSteps = '
    ===
        image: /images/devices-library/basic/integrations/loriot/main-page.png,
        title: Login to Loriot server. We use **eu2.loriot.io**, but it depends on chosen region during registration.
    ===
        image: /images/devices-library/basic/integrations/loriot/create-device-step-0.png,
        title: Go to the "**Applications**" page in left menu.
    ===
        image: /images/devices-library/basic/integrations/loriot/create-device-step-1.png,
        title: Open your application, in our case it is "**SampleApp**".
    ===
        image: /images/devices-library/basic/integrations/loriot/create-device-step-2.png,
        title: Go to the "**Enroll Device**" page. Fill in the fields, with a configuration from your device. Then click the "**Enroll**" button.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addDeviceSteps %}


{% include /docs/devices-library/blocks/integrations/converters/basic/add-or-change-converter-block.md integration-type="loriot" %}
