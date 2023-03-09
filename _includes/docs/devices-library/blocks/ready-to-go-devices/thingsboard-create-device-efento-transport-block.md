### Create device profile

Before you add an Efento sensor to the platform you need to create a new Device profile for Efento device.

{% assign deviceProfileCreationPE = '
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile.png,
        title: Log in to your administrator account and navigate to “Device profiles” section. Click on the “+” icon in the upper right corner to add a new profile. Select “Create new device profile”.
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/configure-device-profile-name.png,
        title: Fill up the profile name (mandatory) and configure optional settings (Rule chain, Queue Name, Description). Once you are ready press “Next: Transport configuration” button.
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/device-profile-select-transport.png,
        title: From the dropdown menu in the “Transport type” field select “CoAP” and from the dropdown menu in “CoAP device type” field select “Efento NB-IoT”, press "Add" button to save.
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/check-device-profile-created.png,
        title: Once the profile is ready you will see it on the list in the “Device profiles” section. If you plan to use your ThingsBoard instance only with Efento sensors you can set the profile as default.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceProfileCreationPE %}

Configuration of the “Alarm rules” and “Device provisioning” tabs is optional.  
If you want to learn more about these features please refer to the [documentation](/docs/getting-started-guides/helloworld.md){:target="_blank"}.  

### Create a device

In order to save a data from the sensor we should also create a device on ThingsBoard.  

{% assign deviceCreationPE = '
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device.png,
        title: Go to the “Device groups” section of ThingsBoard. You can either create a new device group or use the default one (“All”). Click on the “+” icon in the upper right corner to add a new device.
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/configure-device-with-transport.png,
        title: Name the device, in the “Transport type field” select “CoAP”. Choose “Select existing profile” option and add the profile you have recently created for Efento sensors. Press “Next: Credentials” button.
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/configure-device-create-credentials.png,
        title: Select “Add credential” and in the “Access token” field set the new access token, which will be used by a sensor to validate in the platform. Note that the token must be unique for each sensor. Configuration of the token is optional. Press "Add" button to save.
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/check-device-created.png,
        title: Once the device is added, it appears within group “All” list in “Device groups” section.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceCreationPE %}
