### Create device profile

Before you add an Efento sensor to the platform you need to create a new Device profile for Efento device.

{% assign deviceProfileCreationPE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile.png,
        title: Log in to your administrator account and navigate to <b>Device profiles</b> section. Click on the <b>+</b> icon in the upper right corner to add a new profile. Select <b>Create new device profile</b>.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/configure-device-profile-name.png,
        title: Fill up the profile name (mandatory) and configure optional settings (Rule chain, Queue Name, Description). Once you are ready press <b>Next: Transport configuration</b> button.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/device-profile-select-transport.png,
        title: From the dropdown menu in the <b>Transport type</b> field select <b>CoAP</b> and from the dropdown menu in <b>CoAP device type</b> field select <b>Efento NB-IoT</b>, press <b>Add</b> button to save.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/check-device-profile-created.png,
        title: Once the profile is ready you will see it on the list in the <b>Device profiles</b> section. If you plan to use your ThingsBoard instance only with Efento sensors you can set the profile as default.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceProfileCreationPE %}

Configuration of the “Alarm rules” and “Device provisioning” tabs is optional.  
If you want to learn more about these features please refer to the [documentation](/docs/getting-started-guides/helloworld/){:target="_blank"}.  

### Create a device

In order to save a data from the sensor we should also create a device on ThingsBoard.  

{% assign deviceCreationPE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device.png,
        title: Go to the <b>Device groups</b> section of ThingsBoard. You can either create a new device group or use the default one (<b>All</b>). Click on the <b>+</b> icon in the upper right corner to add a new device.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/configure-device-with-transport.png,
        title: Name the device, in the <b>Transport type field</b> select <b>CoAP</b>. Choose <b>Select existing profile</b> option and add the profile you have recently created for Efento sensors. Press <b>Next: Credentials</b> button.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/configure-device-create-credentials.png,
        title: Select <b>Add credential</b> and in the <b>Access token</b> field set the new access token, which will be used by a sensor to validate in the platform. Note that the token must be unique for each sensor. Configuration of the token is optional. Press <b>Add</b> button to save.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/check-device-created.png,
        title: Once the device is added, it appears within group <b>All</b> list in <b>Device groups</b> section.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceCreationPE %}
