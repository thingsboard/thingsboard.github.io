
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceName = "reComputer R1100" %}
{% assign deviceVendorLink = "https://www.seeedstudio.com/blog/2024/11/20/just-launched-recomputer-r11-a%EF%BC%84179-edge-iot-gateway-controller-could-be-the-most-adapatble-and-cost-effective-edge-iot-gateway-controller-in-your-equipment-cabinets/?srsltid=AfmBOopWn625P_n59sPhbUJavUGYus7l3ah1NTd0-90w51unAIVVTgRp" %}

* TOC
{:toc}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The [reComputer R1100]({{deviceVendorLink}}){: target="_blank"}, powered by Raspberry Pi CM4, is an adaptable edge IoT gateway with AI capabilities. 
It features comprehensive industrial interfaces (2x Ethernet, 2xUSB, 2xRS485, 2xRS232, 2xDI and 2xDO) and flexible wireless connectivity options (4G, LoRa®, Wi-Fi/BLE), making it ideal for diverse industrial applications
It has extensive applications in the IoT field. It can be used in aspects such as data acquisition and process monitoring, automation and robot control, intelligent manufacturing, and industrial communication and networking. 
With its small size, flexibility, low cost, and programmability, it provides strong support for automation & IoT system and more. 

## Integration with ThingsBoard Edge

{% if page.docsPrefix contains "pe/" or page.docsPrefix contains "paas/" %}
{% assign prerequisites = "Professional Edition<br><small>(North America)</small>%,%professionalEditionAmerica%,%_includes/templates/device-library/ready-to-go-devices/pe-prerequisites-recomuterR11.md%br%Professional Edition<br><small>(Europe)</small>%,%professionalEditionEurope%,%templates/device-library/ready-to-go-devices/pe-prerequisites-recomuterR11.md" %}
{% else %}
{% assign prerequisites = "Community Edition %,%communityEdition%,%templates/device-library/ready-to-go-devices/ce-prerequisites-recomuterR11.md" %}
{% endif %}

