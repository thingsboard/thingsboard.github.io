{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.lansitec.com/products/asset-management-tracker/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [LoRaWAN Gateway](https://www.lansitec.com/products/outdoor-lorawan-gateway/){:target="_blank"}
- [Bluetooth Beacon](https://www.lansitec.com/products/bluetooth-beacon/){:target="_blank"}
- [Network Server account](https://www.chirpstack.io/){:target="_blank"} 
'
%}

[Asset Management Tracker]({{deviceVendorLink}}){:target="_blank"} optimize how you track, monitor, and safeguard high-value items with the Lansitec Asset Management Tracker. Featuring GNSS, Bluetooth 5.0, and LoRaWAN technology, this device delivers accurate indoor and outdoor positioning—ensuring full visibility of assets ranging from shipping containers and transit cases to industrial machinery.<br>
Its IP68-rated enclosure and ultra-long battery life provide dependable performance in harsh conditions, while features like tamper detection, door open/close sensing, and vibration monitoring strengthen security and operational oversight.<br>
Whether you&#39;re managing remote equipment, monitoring valuable shipments, or consolidating on-site inventory, the Asset Management Tracker helps you stay informed in real time, reduce losses, and streamline processes.

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

{% include /docs/device-library/blocks/integrations/external-platforms/add-device-through-integration-with-external-converter.liquid target-integration-types=targetIntegrationTypes %}

{% include /docs/device-library/blocks/integrations/external-platforms/lansitec/check-data-on-thingsboard-block.md %}

{% include /docs/device-library/blocks/integrations/external-platforms/lansitec/conclusion-block.md %}
{% include add-device-banner.liquid %}