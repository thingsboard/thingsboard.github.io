
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.milesight.com/iot/product/lorawan-sensor/am319" %}
{% assign thingsboardHost = "https://" | append: {{hostName}} %}
{% assign officialManualLink = "https://resource.milesight.com/milesight/iot/document/am300-series-user-guide-en.pdf" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [AM300-series-user-guide](' | append: officialManualLink | append: '){: target="_blank"}
- Smartphone with NFC-enabled and Milesight ToolBox application ([Android](https://play.google.com/store/apps/details?id=com.ursalinknfc){: target="_blank"}/[iOS](https://itunes.apple.com/app/id1518748039){: target="_blank"})
- LoRaWAN® gateway (in our case [UG56 LoRaWAN® Gateway](/docs/pe/devices-library/ug56-lorawan-gateway/){:target="_blank"})
- Configured integration on networks server and ThingsBoard
- [Network Server account](#device-connection)
'
 %}

[AM300 series]({{deviceVendorLink}}){: target="_blank"} is a compact indoor ambiance monitoring sensor for measurement of temperature, humidity, light, CO2 concentration, barometric pressure, PM2.5, PM10 and motion. 
The data will be shown on the E-ink screen in real-time, which helps to measure the indoor environment and comfort. 
AM300 series is widely used for offices, stores, classrooms, hospitals, etc. Sensor data is transmitted using LoRaWAN ® technology. 
Using Milesight LoRaWAN® gateway and ThingsBoard, users can manage all sensor data remotely and visually.

<br><br><br>
Features of the AM300 series device:
- Integrated with multiple sensors like humidity, temperature, CO2, level light, barometric pressure, PM2.5, PM10, etc. Multiple display modes and clear emoticons to easily understand the comfort levels via screen;
- Support batteries or DC power supply;
- Equipped with traffic light indicator and buzzer to indicate device status and threshold alarms;
- Able to store locally more than 18, 000 records of 512 KB in total;
- Compliant with standard LoRaWAN® gateways and network servers.

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

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

{% include /docs/devices-library/blocks/ready-to-go-devices/am308-sensor-check-data-block.md %}

## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
{% include add-device-banner.liquid %}