### Add a device on The Things Industries

We need to add a device on [The Things Industries cloud](https://www.thethingsindustries.com/){:target="_blank"}.

To add a device, you can follow next steps:  

{% assign addDeviceSteps = '
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/1-login-page.png,
        title: Login to the cloud and open your console.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/the-things-industries-create-device-1.png,
        title: Go to the **Applications** page. Then select your application and click on its name.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/the-things-industries-create-device-2.png,
        title: Click on the **Register end device** button.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/the-things-industries-create-device-3.png,
        title: Put the **APP EUI** value to the **JoinEUI** field. Press the **Confirm** button.
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/the-things-industries-create-device-4.png,
        title: Fill the rest parameters and press **Register end device** button.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addDeviceSteps %}


{% include /docs/devices-library/blocks/integrations/converters/basic/add-or-change-converter-block.md integration-type="thethingsindustries" %}
