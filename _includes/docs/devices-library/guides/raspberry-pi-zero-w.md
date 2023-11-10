
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/)
- [python ≥ 3.7](https://www.python.org/)
- [Adafruit-Blinka](https://pypi.org/project/Adafruit-Blinka/) "
 %}

## Introduction

![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The Raspberry Pi Zero W is a small, low-cost, and powerful single-board computer that is designed for DIY enthusiasts, hobbyists, and makers.
 It is a variant of the popular Raspberry Pi Zero, which is known for its tiny size and affordability.
 The "W" in the Raspberry Pi Zero W stands for "wireless", as it comes equipped with both WIFI and Bluetooth connectivity.
 This allows it to easily connect to the internet, other devices, and a variety of sensors and peripherals.
Despite its small size (measuring just 65mm x 30mm x 5mm), the Raspberry Pi Zero W is packed with features, including a Broadcom BCM2835 processor with a clock speed of 1GHz, 512MB of RAM, a mini-HDMI port, a micro-USB port for power and data, a CSI camera connector, and a 40-pin GPIO header for interfacing with external components.
 The Raspberry Pi Zero W runs on the popular Linux-based operating system Raspbian, and it is compatible with a wide range of software, tools, and programming languages.
This makes it an ideal platform for learning, prototyping, and building a wide range of projects, such as home automation systems, robots, media centers, and more.

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
