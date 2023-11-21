
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/)
- [python ≥ 3.7](https://www.python.org/)
- [Adafruit-Blinka](https://pypi.org/project/Adafruit-Blinka/) "
 %}

## Introduction

![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The Rock64 is a single-board computer designed to provide a powerful and efficient computing solution in a small form factor.
 It is built around a Rockchip RK3328 quad-core ARM Cortex-A53 processor, which offers reliable performance and energy efficiency.
 The board features 1GB, 2GB, or 4GB of LPDDR3 RAM, as well as a microSD card slot for expandable storage.
 The board also has a USB 3.0 port, a USB 2.0 port, and a 40-pin GPIO header, allowing it to interface with a variety of peripherals and sensors.
The Rock64 runs a variety of operating systems, including Debian, Ubuntu, and Android, which makes it an excellent choice for developers, hobbyists, and DIY enthusiasts looking to build anything from media centers to home automation systems.
 Its compact form factor, powerful performance, and versatile connectivity make it a valuable addition to any project that requires a reliable and efficient computing solution.

{% include /docs/devices-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/devices-library/blocks/single-board-computers/install-required-libraries-and-tools-block.md %}

## Connect device to ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-provide-device-access-token-block.md %}

{% include /docs/devices-library/blocks/single-board-computers/general-code-to-program-block.md %}

## Synchronize device state using client and shared attribute requests
{% include /docs/devices-library/blocks/single-board-computers/thingsboard-synchronize-device-state-using-attribute-requests-block.md %}

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/single-board-computers/check-data-on-thingsboard-block.md %}

## Control device using shared attributes

{% include /docs/devices-library/blocks/single-board-computers/update-shared-attributes-block.md %}

## Control device using RPC

{% include /docs/devices-library/blocks/single-board-computers/using-rpc-block.md %}

## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
