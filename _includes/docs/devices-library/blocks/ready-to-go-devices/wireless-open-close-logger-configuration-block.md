
The whole configuration of Efento sensors is done with a free mobile application for Android.  
Application can be downloaded from [Google Play](https://play.google.com/store/apps/details?id=pl.efento.cloud&hl=en).  
Before you start configuration make sure the sensor is able to register in the NB-IoT network and the APN settings are right. 
Detailed user manual of Efento NB-IoT sensors and Efento mobile application can be found in the [support section of Efento website](https://getefento.com/support/).  

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
{% assign thingsboardHost = 'coap.thingsboard.cloud' %}
{% else %}
{% assign thingsboardHost = 'demo.thingsboard.io' %}
{% endif %}

{% assign efentoSensorConfiguration = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/efento-sensor-configuration-1.jpg,
        title: Once you download and install the application select “Nearby sensors” mode and unlock the power user mode: open the application menu and quickly tap Efento logo five times.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/efento-sensor-configuration-2.jpg,
        title: Make sure the APN you use allow the device to connect to the server on which your ThingsBoard instance is running. You can check the network status in the Efento mobile application. Connect to the sensor -> click on the menu (three dots in the upper right corner)
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/efento-sensor-configuration-3.jpg,
        title: Click on Cellular network status. Mare sure that the field “Registration status” value is either “REGISTERED” or “REGISTERED_ROAMING”
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/efento-sensor-configuration-2.jpg,
        title: Set the sensor to send the data to the server on which ThingsBoard instance is running. Connect to the sensor -> click on the menu (three dots in the upper right corner).
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/efento-sensor-configuration-4.jpg,
        title: Click on Power user -> Server configuration. Select “Other” and fill in the address of the server (' | append: thingsboardHost | append: '). Default port used for CoAP communication is 5683. Set authentication mode to “custom token” and key in the token you created for the device on ThingsBoard platform.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=efentoSensorConfiguration %}

Set the CoAP endpoints, to which the sensor will send the data. Click on the menu (three dots in the upper right corner) -> Power user -> CoAP endpoints. Set the endpoints to the following values:

- Data: “efento/m”
- Time: “efento/t”
- Configuration: “efento/c”
- Device Info: “efento/i”

{% assign configureSensorEndpoints = '        
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/wireless-open-close-sensor/efento-sensor-configuration-5.jpg
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=configureSensorEndpoints %}

