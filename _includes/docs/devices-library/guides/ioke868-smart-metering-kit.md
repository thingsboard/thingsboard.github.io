
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://wireless-solutions.de/products/lora-ioke868-smart-metering-kit.html" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- LoRaWAN® gateway (in our case [UG56 LoRaWAN® Gateway](/docs/pe/devices-library/ug56-lorawan-gateway/){:target="_blank"})
- Configured integration on networks server and ThingsBoard
- [Network Server account](#device-connection)
'
 %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[iOKE868 Smart Metering Kit]({{deviceVendorLink}}){: target="_blank"} compliant with LoRaWAN® leverages the long range and low power of LoRa® to provide real-time data monitoring of energy consumption and secure connectivity to a LoRaWAN® IoT network. It is compatible with most modern smart meters (compliant with IEC62056-21 and SML messages). The optical reading unit iO881A can be attached magnetically to the smart meter to read out the infrared interface, extract the desired values and transfer those to a LoRaWAN® network with a period defined by the user.  

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}
<br>

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Device connection

Before you begin, you must have downloaded the [WS-Configurator](https://wireless-solutions.de/downloads.html). Since this device can be operated using a LoRaWAN® gateway, we must first connect it to a network server that has an integration configured with ThingsBoard.  
Afterward, it can be provisioned to ThingsBoard.

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
Go to the **Attributes** tab to see the attributes data received from the device.  

![LoRaWAN device data](/images/devices-library/lorawan-ioke868-data.png)


## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
