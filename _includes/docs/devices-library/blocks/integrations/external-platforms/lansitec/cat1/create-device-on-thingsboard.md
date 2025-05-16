## Create device on ThingsBoard

{% assign tbDevice = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-device-1.png,
        title: Go to the **Devices** page and click on **Add device** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-device-2.png,
        title: Fill in the device information and click the **Next: Credentials** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-device-3.png,
        title: When adding a device to ThingsBoard, fill in the IMEI number of the device (e.g., 862990061908629) as the access token. This device is directly connected to the ThingsBoard platform through the MQTT protocol and pushes data in JSON format.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-device-4.png,
        title: Fill in the device **Access token** and click the **Add** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-device-5.png,
        title: Click on the device to view detailed information.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/tb-device-6.png,
        title: Click on **Latest telemetry** to view device reported data.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=tbDevice %}