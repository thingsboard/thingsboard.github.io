
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://mclimate.eu/products/mclimate-co2-display-lite?variant=47310167998796" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- LoRaWAN® gateway (in our case [UG56 LoRaWAN® Gateway](/device-library/pe/ug56-lorawan-gateway/){:target="_blank"})
- Configured integration on networks server and ThingsBoard
- [Network Server account](#device-connection)
'
 %}

## Introduction

[The MClimate CO2 Display lite ]({{deviceVendorLink}}){: target="_blank"} the lite version is equipped with temperature and humidity sensor, LUX sensor and NDIR CO2 sensor. Featuring smaller 1.54" e-ink screen the device is showing the current levels of CO2 as well as historical trends. The data from the CO2 Display lite can be used in any LoRaWAN® compatible system, incl. Building Management Systems to control demand-based ventilation. Sensor information can be exposed as datapoints in Modbus, BACnet and KNX systems through the use of a special gateway.  

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}
<br>

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}



## Device connection

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}

{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/device-library/blocks/ready-to-go-devices/" | append: articleFilename | append: "-configuration-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

To configure the device we also need to add it to a network server, so select the network server your gateway is connected to:  

{% assign targetIntegrationTypes = '
ChirpStack,
TheThingsStack,
TheThingsIndustries,
Loriot
'%}

{% include /docs/device-library/blocks/basic/thingsboard-add-lorawan-device-through-integration-block.liquid target-integration-types=targetIntegrationTypes %}


## Check data on ThingsBoard

After the device is connected to the network server and ThingsBoard, you can check received and converted data on the platform for this device.  

To do this, open **Entities** menu section and select **Devices**.  
Click on the device name to open the device details page.  
Go to the **Latest telemetry** tab to see the latest telemetry data received from the device.  

![LoRaWAN device data](/images/devices-library/lorawan-co2-display-lite-data.png)


## Conclusion

{% include /docs/device-library/blocks/basic/conclusion-block.md %}
{% include add-device-banner.liquid %}
