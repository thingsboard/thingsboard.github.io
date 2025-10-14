{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
{% assign deviceName = page.title | remove: "How to install ThingsBoard Edge on " | remove: "?" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/){:target='_blank' rel='noopener'}
- [python ≥ 3.7](https://www.python.org/){:target='_blank' rel='noopener'}
- [Adafruit-Blinka](https://pypi.org/project/Adafruit-Blinka/){:target='_blank' rel='noopener'} "
  %}
{% else %}  
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/){:target='_blank' rel='noopener'}
- [python ≥ 3.7](https://www.python.org/){:target='_blank' rel='noopener'}
- [Adafruit-Blinka](https://pypi.org/project/Adafruit-Blinka/){:target='_blank' rel='noopener'} "
 %}
{% endif %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The NVIDIA Jetson Xavier NX Developer Kit is a powerful, compact AI computer that delivers up to 21 TOPS of accelerated computing in a small form factor.
 It's designed for autonomous machines, industrial robots, and embedded systems that require high-performance AI at the edge.

{% include /docs/devices-library/blocks/basic/introduction-block.md %}

{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
## Starting Edge on the {{deviceName}} {#starting-edge-on-device}
{% assign userName = "nvidia" %}
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
{% assign hostName = "NVIDIA_JETSON_XAVIER_NX_IP_ADDRESS" %}
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

## Control device using shared attributes  {#control-device-using-shared-attributes}

{% include /docs/devices-library/blocks/single-board-computers/update-shared-attributes-block.md %}

## Control device using RPC {#control-device-using-rpc}

{% include /docs/devices-library/blocks/single-board-computers/using-rpc-block.md %}

## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
