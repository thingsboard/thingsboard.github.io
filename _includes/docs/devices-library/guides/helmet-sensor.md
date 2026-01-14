{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.lansitec.com/products/helmet-tracker-sensor/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [LoRaWAN Gateway](https://www.lansitec.com/products/outdoor-lorawan-gateway/){:target="_blank"}
- [Bluetooth Beacon](https://www.lansitec.com/products/bluetooth-beacon/){:target="_blank"}
- [Network Server account](https://www.chirpstack.io/){:target="_blank"}
'
%}

[Helmet Sensor]({{deviceVendorLink}}){:target="_blank"} is designed based on GNSS, Bluetooth5.0 and LoRaWAN technology. It supports indoor and outdoor tracking.<br>
It supports various features which contribute to easy management in industrial settings. Its built-in 3-axis accelerator could be used for determining the motion status of the terminal. Therefore, it can help save battery and enhance user experience. It is suitable for the following use cases: visitor management, factory worker tracking, construction worker tracking, vehicle tracking etc.<br><br>

## Prerequisites

To continue with this guide we will need the following:
{{prerequisites}}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Configuration

Only ThingsBoard Cloud works when using direct communication from this device to ThingsBoard via MQTT.

You may use ThingsBoard PE on-premises or ThingsBoard Cloud when using ThingsBoard Integrations.

To create an integration with a network server please choose first one of the supported network servers:

{% assign targetIntegrationTypes = '
ChirpStack,
TheThingsStack,
TheThingsIndustries,
Loriot
' %}

{% include /docs/devices-library/blocks/integrations/external-platforms/add-device-through-integration-with-external-converter.liquid target-integration-types=targetIntegrationTypes %}

{% include /docs/devices-library/blocks/integrations/external-platforms/lansitec/check-data-on-thingsboard-block.md %}

{% include /docs/devices-library/blocks/integrations/external-platforms/lansitec/conclusion-block.md %}
{% include add-device-banner.liquid %}