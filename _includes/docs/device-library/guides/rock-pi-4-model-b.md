
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/)
- [python ≥ 3.7](https://www.python.org/)
- [Adafruit-Blinka](https://pypi.org/project/Adafruit-Blinka/) "
 %}

## Introduction

Rock Pi 4 Model B is a powerful single-board computer with a Rockchip RK3399 processor, up to 4GB LPDDR4 RAM, and up to 128GB eMMC flash storage.
 It also features Gigabit Ethernet, WIFI, Bluetooth 5.
0, and a variety of connectors for peripherals and expansion.
 The board is suitable for a wide range of applications, including AI, IoT, and multimedia.

{% include /docs/device-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/device-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/device-library/blocks/single-board-computers/install-required-libraries-and-tools-block.md %}

## Connect device to ThingsBoard

{% include /docs/device-library/blocks/basic/thingsboard-provide-device-access-token-block.md %}

{% include /docs/device-library/blocks/single-board-computers/general-code-to-program-block.md %}

## Synchronize device state using client and shared attribute requests
{% include /docs/device-library/blocks/single-board-computers/thingsboard-synchronize-device-state-using-attribute-requests-block.md %}

## Check data on ThingsBoard

{% include /docs/device-library/blocks/single-board-computers/check-data-on-thingsboard-block.md %}

## Control device using shared attributes

{% include /docs/device-library/blocks/single-board-computers/update-shared-attributes-block.md %}

## Control device using RPC

{% include /docs/device-library/blocks/single-board-computers/using-rpc-block.md %}

## Conclusion

{% include /docs/device-library/blocks/basic/conclusion-block.md %}
{% include add-device-banner.liquid %}
