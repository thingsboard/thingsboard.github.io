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

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[Asset Management Tracker]({{deviceVendorLink}}){:target="_blank"} optimize how you track, monitor, and safeguard high-value items with the Lansitec Asset Management Tracker. Featuring GNSS, Bluetooth 5.0, and LoRaWAN technology, this device delivers accurate indoor and outdoor positioning—ensuring full visibility of assets ranging from shipping containers and transit cases to industrial machinery. 
Its IP68-rated enclosure and ultra-long battery life provide dependable performance in harsh conditions, while features like tamper detection, door open/close sensing, and vibration monitoring strengthen security and operational oversight. 
Whether you&#39;re managing remote equipment, monitoring valuable shipments, or consolidating on-site inventory, the Asset Management Tracker helps you stay informed in real time, reduce losses, and streamline processes.

## Prerequisites

To continue with this guide we will need the following:
{{prerequisites}}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}

## Configuration

Only ThingsBoard Cloud works when using direct communication from this device to ThingsBoard via MQTT.

You may use ThingsBoard PE on-premises or ThingsBoard Cloud when using ThingsBoard Integrations.

To create an integration with a network server please choose first one of the supported network servers:

{% capture lansiteclorawantemplates %}
Chirpstack<small></small>%,%chirpstack%,%templates/device-library/lansitec-lorawan-templates/chirpstack-integration-type.md%br%
The Things Stack<small></small>%,%theThingsStack%,%templates/device-library/lansitec-lorawan-templates/the-things-stack-integration-type.md%br%
The Things Industries<small></small>%,%theThingsIndustries%,%templates/device-library/lansitec-lorawan-templates/the-things-industries-integration-type.md%br%
Loriot<small></small>%,%Loriot%,%templates/device-library/lansitec-lorawan-templates/loriot-integration-type.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="lansiteclorawantemplates" toggle-spec=lansiteclorawantemplates %}

{% include /templates/device-library/lansitec-lorawan-templates/check-data-on-thingsboard-block.md %}

## Conclusion

With the knowledge outlined in this guide, you can easily connect your Asset Management Tracker and send data to ThingsBoard.

Explore the platform [documentation](https://thingsboard.io/docs/pe/){:target="_blank"} to learn more about key concepts and features. For example, configure [alarm rules](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules){:target="_blank"} or [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"}.
