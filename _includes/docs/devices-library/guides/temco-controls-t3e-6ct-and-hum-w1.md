{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://temcocontrols.com/shop/t3-6ct/" %}
{% assign sensorName = "Temco HUM-W1" %}
{% assign sensorVendorLink = "https://temcocontrols.com/shop/humidity-and-temp-transmitters-with-waterproof-connector/" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- Humidity and Temp Transmitter (in our case <a href="' | append: sensorVendorLink | append: '" target="_blank">' | append: sensorName | append: '</a>) '
 %}
{% assign thingsboardInstanceLink = "https://" | append: hostName %}

## Introduction

[{{deviceName}}]({{deviceVendorLink}}){: target="_blank"} is general purpose input / ouput modules for building 
integrators. Available in several input/output configurations, the T3 module provide convenient termination for field 
devices and interfacing to your HVAC, lighting, temperature sensors, and other typical building automation 
applications. Each of the analog inputs can be jumper configured for signals of either 0-5V, 0-20mA, or dry contact. 
The outputs are available in dry contacts 1amp/output, 0-10V analog, and PNP sinking.<br><br>

## Prerequisites

To continue with this guide, we will need the following:  
{{ prerequisites }}
- [ThingsBoard IoT Gateway](/docs/iot-gateway/installation/){: target="_blank"} installed
- [ThingsBoard account]({{thingsboardInstanceLink}}){: target="_blank"}


## Devices connection

According to the [official user manual](https://assets.temcocontrols.com/products/t3e6ct/brochure_pdf/T3E-6CT-1.pdf){: target="_blank"}, firstly you need to wired connection between the controller and the temperature 
sensor. The controller has to be connected to the PC using the RS485 to USB converter for configuration.
Also, you need to download and install the T3000 software from the [official website](https://assets.temcocontrols.com/products/tstat10_fully_programmable_thermostat/software_file/09T3000Software.zip){: target="_blank"}.

### Controller configuration

Using the T3000 software, you can configure the controller. You need to connect the controller to your network 
over Ethernet. For this purpose, use the following steps:

{% assign configuringDevice = '
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-configuring-1.png,
        title: Connect T3E-6CT to PC by Ethernet cable and start T3000 software. Click the button "**Search**" to scan your network, the following view will appear;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-configuring-2.png,
        title: When T3E-6CT will discover, close the view.
' 
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=configuringDevice %}

## Creating and configuring ThingsBoard IoT Gateway

{% capture configuringgatewaytogglespec %}
Basic%,%basicConfig%,%templates/device-library/ready-to-go-devices/temco-controls-t3e-6ct-configuring-gateway-basic.md%br%
Advanced%,%advancedConfig%,%templates/device-library/ready-to-go-devices/temco-controls-t3e-6ct-configuring-gateway-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="creatingAndConfiguringGateway" toggle-spec=configuringgatewaytogglespec %}

## Check data on ThingsBoard

Once you have successfully done all the steps above and Gateway sent data, you can see it in the 
Device Telemetry Tab:

- Click on the device row in the table to open device details;
- Navigate to the telemetry tab.

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
![imagePe](/images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-device-1-pe.png)
{% else %}
![imageCe](/images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-device-1-ce.png)
{% endif %}

Let’s display Temco T3E-6CT time series on a dashboard. For this purpose, you can create your own dashboard with your 
custom widgets or use a ready-made dashboard and simply import it.

{% capture readytogodevicestogglespec %}
Imported Dashboard%,%importedDashboard%,%templates/device-library/ready-to-go-devices/temco-controls-t3e-6ct-imported-dashboard.md%br%
New Dashboard%,%newDashboard%,%templates/device-library/ready-to-go-devices/gateway-new-dashboard.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="minicomputersDashboard" toggle-spec=readytogodevicestogglespec %}

## Conclusion

With the knowledge in this guide, you can easily connect your Temco T3E-6CT controller with Temperature and humidity 
sensor to ThingsBoard. After connecting the devices to the gateway, you will be able to see and process the data coming 
from the devices on the ThingsBoard.

Explore the platform [documentation](/docs/{{page.docsPrefix}}){: target="_blank"} to learn more about key concepts and features.
{% include add-device-banner.liquid %}
