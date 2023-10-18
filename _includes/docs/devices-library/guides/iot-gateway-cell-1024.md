{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://exxn.es/en/iot-gateway/" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- Device have to be connected to the Internet via Ethernet, Modem or WIFI. '
 %}
 {% assign thingsboardInstanceLink = "https://demo.thingsboard.io" %}
{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
{% assign thingsboardInstanceLink = "https://thingsboard.cloud" %}
{% endif %}

## Introduction
![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The EXXN IoT Gateway is a versatile device with an ARM processor that can be adapted to a variety of use cases, including monitoring environmental sensors, energy consumption, radon gas levels, marine environments, and edge computing.
<br>
<br>
<br>
<br>

### Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{thingsboardInstanceLink}}){: target="_blank"}  

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/iot-gateway-cell-1024-create-device-thingsboard-block.md %}

## Connect device to ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/iot-gateway-cell-1024-configuration-block.md %}

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/iot-gateway-cell-1024-check-data-on-thingsboard-block.md %}

## Control device using RPC

{% include /docs/devices-library/blocks/ready-to-go-devices/iot-gateway-cell-1024-using-rpc-block.md %}

## Additional info
Here you can find some additional links, that can be useful.  

### Troubleshooting
 - The most common problem in the integration process is not having a connection with the MQTT Broker. Make sure the device is connected to the internet and is able to communicate with the ThingsBoard Broker.  
 - Another common problem is not setting the correct Access Token. Check that the provided Access token is configured in ThingsBoard for the device.  

### Feedback & Help

For more information, visit the website at [EXXN Engineering](https://exxn.es/en/){:target="_blank"}.  
If you have any problems or doubts, please do not hesitate in contact to EXXN support at: [troubleshooting@exxn.es](mailto://troubleshooting@exxn.es).  

## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}