Trigger the transmission in order to check if the device sends the data to your ThingsBoard instance.  
Click on the menu (three dots in the upper right corner -> Trigger transmission.  
If everything is set correctly, you should see the data in ThingsBoard. To do this click on the device and the most recent data from the device will be visible in the "Latest telemetry" tab.

{% assign checkEfentoSensorDataPE = '
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/check-device-data-1-pe.png,
        title: Click on the device and the most recent data from the device will be visible in the "Latest telemetry" tab.
'
%}

{% assign checkEfentoSensorDataCE = '
    ===
        image: /images/devices-library/ready-to-go-devices/wireless-open-close-sensor/check-device-data-1-ce.png,
        title: Click on the device and the most recent data from the device will be visible in the "Latest telemetry" tab.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
{% include images-gallery.liquid showListImageTitles="false" imageCollection=checkEfentoSensorDataPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="false" imageCollection=checkEfentoSensorDataCE %}
{% endif %}

{% capture effento-offer %}

**Important!**  
For orders over 250 devices Efento can pre-configure the devices for you, so they will send the data to your ThingsBoard instance out-of-the-box and no configuration will be required on the sensor side.  
Efento will provide you with a csv file, which allows you easily add and [provision all the devices at once](/docs/{{page.docsPrefix}}user-guide/bulk-provisioning/) on ThingsBoard instance.  

{% endcapture %}

{% include templates/info-banner.md content=effento-offer %}
