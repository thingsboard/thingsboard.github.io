{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://temcocontrols.com/shop/tstat10-bacnet-thermostat/" %}
{% assign sensorName = "Temco HUM-W1" %}
{% assign sensorVendorLink = "https://temcocontrols.com/shop/humidity-and-temp-transmitters-with-waterproof-connector/" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- Humidity and Temp Transmitter (in our case <a href="' | append: sensorVendorLink | append: '" target="_blank">' | append: sensorName | append: '</a>) '
 %}
{% assign thingsboardInstanceLink = "https://" | append: hostName %}

## Introduction

[{{deviceName}}]({{deviceVendorLink}}){: target="_blank"} Bacnet programmable controller is a low-cost high
performance programmable controller. With an I/O configuration, it can be extended through external I/O modules to
form a complete building automation solution. There are five relays and two analog outputs as well as
8 universal inputs. These i/o can be configured using the free software. There are more than 300 settings with many
options for each of the settings so it's possible to configure these devices for almost any application. Once the unit 
is configured, save the config file for copying to other controllers and backing up project settings. Options are 
available for occupancy sensor, zigbee, and humidity / enthalpy. Supports Bacnet MSTP and Modbus RTU for the RS485 model.
Wi-Fi version supports Bacnet IP and Modbus IP.
<br><br>

## Prerequisites

To continue with this guide, we will need the following:  
{{ prerequisites }}
- [ThingsBoard IoT Gateway](/docs/iot-gateway/installation/){: target="_blank"} installed
- [ThingsBoard account]({{thingsboardInstanceLink}}){: target="_blank"}


## Devices connection

According to the [official user manual](https://assets.temcocontrols.com/products/humidity_and_temp_transmitters_with_waterproof_connector/brochure_pdf/HummidityTransmitterWithWaterproofConnector-1.pdf){: target="_blank"}, firstly you need to wired connection between the controller and the temperature 
sensor. The controller has to be connected to the PC using the RS485 to USB converter for configuration.
Also, you need to download and install the T3000 software from the [official website](https://assets.temcocontrols.com/products/tstat10_fully_programmable_thermostat/software_file/09T3000Software.zip){: target="_blank"}.

### Controller configuration

Using the T3000 software, you can configure the controller. You need to connect the controller to your network 
over Wi-Fi or Ethernet. For this purpose, use the following steps:

{% assign configuringDevice = '
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-configuring-1.png,
        title: Connect Tstat10 to PC by RS485 and start T3000 software. Click the button "**Search**" to scan your network, the following view will appear;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-configuring-2.png,
        title: When Tstat10 will discover, close the view;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-configuring-3.png,
        title: Click on "**Tstat10**" device in the sidebar, in the opened window select "**TCP/IP**" tab and click on the "**Wifi Configuration**" button. In the opened window, provide your Wi-Fi network credentials and click "**Apply**".
' 
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=configuringDevice %}

## Creating and configuring ThingsBoard IoT Gateway

{% capture configuringgatewaytogglespec %}
Basic%,%basicConfig%,%templates/device-library/ready-to-go-devices/temco-controls-tstat10-configuring-gateway-basic.md%br%
Advanced%,%advancedConfig%,%templates/device-library/ready-to-go-devices/temco-controls-tstat10-configuring-gateway-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="creatingAndConfiguringGateway" toggle-spec=configuringgatewaytogglespec %}

## Check data on ThingsBoard

Once you have successfully done all the steps above and Gateway sent data, you can see it in the device telemetry tab:

- Click on the device row in the table to open its details;
- Navigate to the "Latest telemetry" tab.

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
![imagePe](/images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-device-1-pe.png)
{% else %}  
![imageCe](/images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-device-1-ce.png)
{% endif %}

Let&#39;s display Temco Tstat10 time series on a dashboard. For this purpose, you can create your own dashboard with your 
custom widgets or use a ready-made dashboard and simply import it.

{% capture readytogodevicestogglespec %}
Imported Dashboard%,%importedDashboard%,%templates/device-library/ready-to-go-devices/temco-controls-tstat10-imported-dashboard.md%br%
New Dashboard%,%newDashboard%,%templates/device-library/ready-to-go-devices/gateway-new-dashboard.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="minicomputersDashboard" toggle-spec=readytogodevicestogglespec %}

## Conclusion

With the knowledge in this guide, you can easily connect your Temco Tstat10 controller with Temperature and humidity 
sensor to ThingsBoard. After connecting the devices to the gateway, you will be able to see and process the data coming 
from the devices on the ThingsBoard.

Explore the platform [documentation](/docs/{{page.docsPrefix}}){: target="_blank"} to learn more about key concepts and features.
{% include add-device-banner.liquid %}
