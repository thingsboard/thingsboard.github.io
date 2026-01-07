
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.makerfabs.com/agrosense-positioning-water-leak-sensor-lorawan.html" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- LoRaWAN® gateway (in our case [UG56 LoRaWAN® Gateway](/docs/pe/devices-library/ug56-lorawan-gateway/){:target="_blank"})
- Configured integration on networks server and ThingsBoard
- [Network Server account](#device-connection)
'
 %}

## Introduction

[AgroSense LoRaWAN® Positioning Water Leak Sensor]({{deviceVendorLink}}){: target="_blank"} detects water leakage at fixed points. Suitable for applications such as garage/kitchen water leakage detection. It reports the water leakage via LoRaWAN® protocol instantly as leakage detected. The sensor benefits from LoRaWAN, which ensures stability and reliability. It is capable of covering a long transmission range while maintaining low power consumption. Unlike wireline devices, it is battery-powered, reducing the workload and complexity of deployment, design and development for end-users that can work via powering it, and setting the configuration in the cloud server.  

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}
<br>

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}



## Device connection

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}

{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/ready-to-go-devices/" | append: articleFilename | append: "-configuration-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

To configure the device we also need to add it to a network server, so select the network server your gateway is connected to:  

{% assign targetIntegrationTypes = '
ChirpStack,
TheThingsStack,
TheThingsIndustries,
Loriot
'%}

{% include /docs/devices-library/blocks/basic/thingsboard-add-lorawan-device-through-integration-block.liquid target-integration-types=targetIntegrationTypes %}


## Check data on ThingsBoard

After the device is connected to the network server and ThingsBoard, you can check received and converted data on the platform for this device.  

To do this, open **Entities** menu section and select **Devices**.  
Click on the device name to open the device details page.  
Go to the **Latest telemetry** tab to see the latest telemetry data received from the device.  

![LoRaWAN device data](/images/devices-library/lorawan-positioning-data.png)


## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
{% include add-device-banner.liquid %}
