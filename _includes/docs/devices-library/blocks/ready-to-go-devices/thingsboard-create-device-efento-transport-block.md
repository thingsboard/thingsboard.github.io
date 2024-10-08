### Create device profile

Before you add an Efento sensor to the platform you need to create a new Device profile for Efento device.

{% assign deviceProfileCreationPE = '
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile-1-pe.png,
        title: Log in to your administrator account and navigate to "Device profiles" page. Click on the "+" icon in the top right corner of the table and then select "Create new device profile" from drop-down menu;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile-2-pe.png,
        title: Fill up the profile name (mandatory) and configure optional settings (Rule chain, Queue Name, Description). Once you are ready press "Next: Transport configuration" button;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile-3-pe.png,
        title: From the dropdown menu in the "Transport type" field select "CoAP", and from the dropdown menu in "CoAP device type" field select "Efento NB-IoT", click "Add" button to confirm adding new device profile;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile-4-pe.png,
        title: Once the profile is ready you will see it on the list in the "Device profiles" section. If you plan to use your ThingsBoard instance only with Efento sensors you can set the profile as default.
'
%}

{% assign deviceProfileCreationCE = '
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile-1-ce.png,
        title: Log in to your administrator account and navigate to "Device profiles" page. Click on the "+" icon in the top right corner of the table and then select "Create new device profile" from drop-down menu;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile-2-ce.png,
        title: Fill up the profile name (mandatory) and configure optional settings (Rule chain, Queue Name, Description). Once you are ready press "Next: Transport configuration" button;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile-3-ce.png,
        title: From the dropdown menu in the "Transport type" field select "CoAP", and from the dropdown menu in "CoAP device type" field select "Efento NB-IoT", click "Add" button to confirm adding new device profile;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-profile-4-ce.png,
        title: Once the profile is ready you will see it on the list in the "Device profiles" section. If you plan to use your ThingsBoard instance only with Efento sensors you can set the profile as default.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceProfileCreationPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceProfileCreationCE %}
{% endif %}

Configuration of the “Alarm rules” and “Device provisioning” tabs is optional.  
If you want to learn more about these features please refer to the [documentation](/docs/getting-started-guides/helloworld/){:target="_blank"}.  

### Create a device

In order to save a data from the sensor we should also create a device on ThingsBoard.  

{% assign deviceAddingPE = '
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-1-pe.png,
        title: Go to the "Devices" page of the "Entities" section. By default, you navigate to the device group "All". Click on the "+" icon in the top right corner of the table and then select "Add new device" from drop-down menu;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-2-pe.png,
        title: Enter the device name. In the "Device profile" field specify the profile you have recently created for Efento sensors. Then, click "Next: Credentials" button;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-3-pe.png,
        title: Leave the credential type as "Access token". Set the new access token, which will be used by a sensor to validate in the ThingsBoard platform. Note that the token must be unique for each sensor. Configuration of the token is optional. Click "Add" button to confirm adding new device;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-4-pe.png,
        title: A window will open where you can check the device&#39;s connection to ThingsBoard. This step is optional. Close this window;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-5-pe.png,
        title: Once added, the device appears in the "All" device group list.
'
%}

{% assign deviceAddingCE = '
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-1-ce.png,
        title: Go to the "Devices" page of the "Entities" section. Click on the "+" icon in the top right corner of the table and then select "Add new device" from drop-down menu;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-2-ce.png,
        title: Enter the device name. In the "Device profile" field specify the profile you have recently created for Efento sensors. Then, click "Next: Credentials" button;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-3-ce.png,
        title: Leave the credential type as "Access token". Set the new access token, which will be used by a sensor to validate in the ThingsBoard platform. Note that the token must be unique for each sensor. Configuration of the token is optional. Click "Add" button to confirm adding new device;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-4-ce.png,
        title: A window will open where you can check the device&#39;s connection to ThingsBoard. This step is optional. Close this window;
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/create-device-5-ce.png,
        title: Once added, the device appears in the device list.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceAddingPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceAddingCE %}
{% endif %}