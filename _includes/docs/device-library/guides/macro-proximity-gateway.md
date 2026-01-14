{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.lansitec.com/products/macro-proximity-sensor/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [LoRaWAN Gateway](https://www.lansitec.com/products/outdoor-lorawan-gateway/){:target="_blank"}
- [Bluetooth Beacon](https://www.lansitec.com/products/bluetooth-beacon/){:target="_blank"}
- [Network Server account](https://www.chirpstack.io/){:target="_blank"}
'
%}

[Macro Proximity Gateway]({{deviceVendorLink}}){:target="_blank"} is equipped with Bluetooth 5.0 and
LoRaWAN capabilities. When a [Bluetooth beacon](https://www.lansitec.com/products/bluetooth-beacon/){:target="_blank"} comes into close proximity, the sensor activates buzzing and flashing.<br> 
It then transmits the beacon’s ID and received signal strength indicator (RSSI) to a LoRaWAN gateway. The sensor calculates the distance based on the RSSI between the two devices.<br>
Additionally, the proximity sensor functions as a Bluetooth gateway, collecting messages from nearby Bluetooth beacons and forwarding them to the LoRaWAN gateway. Users can adjust settings such as the alarm range, duration, heartbeat message period, beacon report interval, Bluetooth receiving duration, and message payload size.<br>
It has multiple battery capacity options with at least one year battery life.

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
