{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.lansitec.com/products/cat-1-macro-bluetooth-gateway/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [Bluetooth Beacon](https://www.lansitec.com/products/bluetooth-beacon/){:target="_blank"}
'
%}

[Cat-1 Macro Bluetooth Gateway]({{deviceVendorLink}}){:target="_blank"} receives data from nearby Bluetooth beacons, sensors, or controllers, restructures it, and forwards it to a server via Cat-1 connectivity.<br>
It supports iBeacon, Eddystone, private protocols, and both scan and response features.<br>
Powered by a 38,000 mAh low-discharge-rate battery, the gateway offers a battery life of over 5 years.<br>

## Prerequisites

To continue with this guide we will need the following:
{{prerequisites}}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Configuration

You will need to have access to ThingsBoard Professional Edition. The easiest way is to use [ThingsBoard Cloud](https://thingsboard.io/installations/choose-region/){:target="_blank"} server.
The alternative option is to install ThingsBoard using [installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

{% include /docs/device-library/blocks/integrations/external-platforms/lansitec/cat1/create-device-on-thingsboard.md %}

{% include /docs/device-library/blocks/integrations/external-platforms/lansitec/cat1/check-data-on-thingsboard-cat-1-block.md %}

{% include /docs/device-library/blocks/integrations/external-platforms/lansitec/cat1/conclusion-cat-1-block.md %}
{% include add-device-banner.liquid %}