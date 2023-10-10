
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.milesight-iot.com/lorawan/sensor/ws202/" %}
{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
{% assign thingsboardHost = 'https://thingsboard.cloud' %}
{% else %}
{% assign thingsboardHost = 'https://demo.thingsboard.io' %}
{% endif %}
{% assign officialManualLink = "https://resource.milesight-iot.com/milesight/document/ws202-user-guide-en.pdf" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [WS202 PIR & Light Sensor user manual](' | append: officialManualLink | append: '){: target="_blank"}
- Smartphone with NFC-enabled and Milesight ToolBox application ([Android](https://play.google.com/store/apps/details?id=com.ursalinknfc){: target="_blank"}/[iOS](https://itunes.apple.com/app/id1518748039){: target="_blank"})
- LoRaWAN® gateway
- Configured integration on networks server and ThingsBoard
- [Network Server account](#device-connection)
'
 %}

## Introduction

![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[WS202 PIR & Light Sensor]({{deviceVendorLink}}){: target="_blank"} is a PIR sensor based on passive infrared technology to detect a motion or occupancy.  
WS202 can detect whether there is a movement within the range of 6-8 m.  
Besides, WS202 equips with a light sensor which can link PIR detection results to trigger scenes.  
WS202 can be widely used in smart homes, smart offices, schools, warehouses, etc.  
Sensor data are transmitted in real-time using the standard LoRaWAN® protocol.  
LoRaWAN® enables encrypted radio transmissions over long distances while consuming very little power.  

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}
<br>

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Device connection

According to the [official user manual]({{officialManualLink}}){: target="_blank"}, we need a smartphone with NFC enabled and the ToolBox application to connect the sensor.  
Since this device can only be operated using a LoRaWAN® gateway, we must first connect it to a network server that has an integration configured with ThingsBoard.  
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

{% include /docs/devices-library/blocks/ready-to-go-devices/ws202-pir-and-light-sensor-check-data-block.md %}

## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
