
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://getefento.com/product/wireless-open-close-logger-nb-iot/" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [Efento mobile application](https://play.google.com/store/apps/details?id=pl.efento.cloud&hl=en)
- [Read user manual (Optional)](https://getefento.com/support/)
'
 %}

## Introduction

![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}

Wireless open / close sensor detects and logs in its memory events of door opening and closing.  
If a change of state is detected, the device immediately sends the notification to cloud.  
The device uses magnetic sensor to detect open / close event.  

Efento NB-IoT sensors transmit the data over cellular network (Narrowband IoT) and do not require any additional devices (router, gateway, etc.).  
Sensors are also equipped with Bluetooth Low Energy interface, which allows quick and easy configuration with a smartphone.  
Efento NB-IoT sensors can be integrated with any cloud platform.  

- Sensor detects open / close events
- Batteries ensure up to 10 years of maintenance free operation
- NB-IoT sensors send the data over the cellular network to Efento Cloud or any other cloud platform.
- Sensor's configuration can be changed remotely from the cloud or with a mobile application over Bluetooth Low Energy
- The device stores 40,000 measurements in its memory, when the memory is full, the oldest measurements are overwritten

### Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
- [ThingsBoard account](https://thingsboard.cloud)
{% else %}
- [ThingsBoard account](https://demo.thingsboard.io)
{% endif %}

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/thingsboard-create-device-efento-transport-block.md %}

## Connect device to ThingsBoard 

{% include /docs/devices-library/blocks/ready-to-go-devices/wireless-open-close-logger-configuration-block.md %}

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/wireless-open-close-logger-check-data-block.md %}

## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
