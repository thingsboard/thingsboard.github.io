{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
{% assign deviceName = page.title | remove: "How to install ThingsBoard Edge on " | remove: "?" %}
{% assign prerequisites = "
- [" | append: deviceName | append: "](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/){:target='_blank' rel='noopener'}
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/){:target='_blank' rel='noopener'}
- [python ≥ 3.7](https://www.python.org/){:target='_blank' rel='noopener'}
- [Adafruit-Blinka](https://pypi.org/project/Adafruit-Blinka/){:target='_blank' rel='noopener'} "
 %}
{% else %}  
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign prerequisites = "
- [" | append: deviceName | append: "](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/){:target='_blank' rel='noopener'}
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/){:target='_blank' rel='noopener'}
- [python ≥ 3.7](https://www.python.org/){:target='_blank' rel='noopener'}
- [Adafruit-Blinka](https://pypi.org/project/Adafruit-Blinka/){:target='_blank' rel='noopener'} "
 %}
{% endif %}

## Introduction
Raspberry Pi has long been the gold standard for inexpensive single-board computing, powering everything from robots to
smart home devices to digital kiosks. When it launched in 2019, the Raspberry Pi 4 took Pi to another level, with
performance that’s good enough to use in a pinch as a desktop PC, plus the ability to output 4K video at 60 Hz or power
dual monitors. More recently, the Raspberry Pi 4 (8GB) model came out, offering enough RAM for serious desktop computing,
productivity and database hosting.

{% include /docs/devices-library/blocks/basic/introduction-block.md %}

{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
## Starting Edge on the {{deviceName}} {#starting-edge-on-device}
{% assign userName = "pi" %}
{% include /templates/edge/devices-library/install-edge-gw.md %}
{% endif %}

{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
## Create device on ThingsBoard Edge {#create-device-on-thingsboard-edge}
{% else %}
## Create device on ThingsBoard {#create-device-on-thingsboard}
{% endif %}

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools {#install-required-libraries-and-tools}

{% include /docs/devices-library/blocks/single-board-computers/install-required-libraries-and-tools-block.md %}

{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
{% assign hostName = "RPi_4_IP_ADDRESS" %}
## Connect device to ThingsBoard Edge {#connect-device-to-thingsboard-edge}
{% else %}
## Connect device to ThingsBoard {#connect-device-to-thingsboard}
{% endif %}

{% include /docs/devices-library/blocks/basic/thingsboard-provide-device-access-token-block.md %}

{% include /docs/devices-library/blocks/single-board-computers/general-code-to-program-block.md %}

## Synchronize device state using client and shared attribute requests {#synchronize-device-state-using-client-and-shared-attribute-requests}

{% include /docs/devices-library/blocks/single-board-computers/thingsboard-synchronize-device-state-using-attribute-requests-block.md %}

{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
## Check data on ThingsBoard Edge {#check-data-on-thingsboard-edge}
{% else %}
## Check data on ThingsBoard {#check-data-on-thingsboard}
{% endif %}

{% include /docs/devices-library/blocks/single-board-computers/check-data-on-thingsboard-block.md %}

## Control device using shared attributes {#control-device-using-shared-attributes}

{% include /docs/devices-library/blocks/single-board-computers/update-shared-attributes-block.md %}

## Control device using RPC {#control-device-using-rpc}

{% include /docs/devices-library/blocks/single-board-computers/using-rpc-block.md %}

## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
{% include add-device-banner.liquid %}
