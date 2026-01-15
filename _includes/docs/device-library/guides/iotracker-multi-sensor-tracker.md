
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.iotracker.eu/iotracker" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- LoRaWAN® gateway (in our case [UG56 LoRaWAN® Gateway](/device-library/pe/ug56-lorawan-gateway/){:target="_blank"})
- Configured integration on networks server and ThingsBoard
- [Network Server account](#device-connection)
'
 %}

## Introduction

[ioTracker Multi-sensor tracker]({{deviceVendorLink}}){: target="_blank"} ioTracker is a compact multi‑sensor LoRaWAN® tracker with built‑in temperature, light, shock, tilt, optional humidity and pressure sensors for versatile environment monitoring.  
The ioTracker contains multiple pre-set
configurations, which can cover many use
cases. If needed, the individual parameters
can be tuned to match your business
needs. Almost every setting of the ioTracker
can be changed — over-the-air (OTAA) —
allowing you to reconfigure / repurpose
your ioTrackers wherever they are.
The ioTracker features multiple localisation
features: GPS, Wi-Fi, Bluetooth LE and
LoRaWAN. This provides the best balance
between high-accurate positioning and
power efficiency in almost every in- and
outdoor situation.

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

![LoRaWAN device data](/images/devices-library/io-tracker-device-data.png)


## Conclusion

{% include /docs/device-library/blocks/basic/conclusion-block.md %}
{% include add-device-banner.liquid %}
