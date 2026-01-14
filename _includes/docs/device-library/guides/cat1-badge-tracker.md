{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.lansitec.com/products/cat-1-badge-tracker/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [Bluetooth Beacon](https://www.lansitec.com/products/bluetooth-beacon/){:target="_blank"}
'
%}

[Cat-1 Badge Tracker]({{deviceVendorLink}}){:target="_blank"} is designed based on GNSS, Bluetooth 5.0, and Cat-1 technology.<br>
It supports indoor and outdoor tracking. The badge is mainly used for personnel and asset management.<br> 
The build-in 3-axis accelerator could be used for determining the motion status of the terminal to help save battery life and enhance user experience.<br>

## Prerequisites

To continue with this guide we will need the following:
{{prerequisites}}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Configuration

You will need to have access to ThingsBoard Professional Edition. The easiest way is to use [ThingsBoard Cloud](https://thingsboard.io/installations/choose-region/){:target="_blank"} server.
The alternative option is to install ThingsBoard using [installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

{% include /docs/devices-library/blocks/integrations/external-platforms/lansitec/cat1/create-device-on-thingsboard.md %}

{% include /docs/devices-library/blocks/integrations/external-platforms/lansitec/cat1/check-data-on-thingsboard-cat-1-block.md %}

{% include /docs/devices-library/blocks/integrations/external-platforms/lansitec/cat1/conclusion-cat-1-block.md %}
{% include add-device-banner.liquid %}