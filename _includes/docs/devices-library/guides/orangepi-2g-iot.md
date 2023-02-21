{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/)
- [python ≥ 3.7](https://www.python.org/)
- [board library](https://pypi.org/project/board/)
- [digitalio library](https://pypi.org/project/adafruit-circuitpython-mcp3xxx/) "
 %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
Orange Pi 2G-IoT uses the Allwinner H6 SoC, and has 2GB LPDDR3 SDRAM, 8GB EMMC Flash. It can run Android 9, Ubuntu, Debian. 
Orange Pi 2G-IoT offers a range of different ports, including HDMI output, 26pin headers, Gbps Ethernet port, 1 * USB 3.0, 
2 * USB2.0，etc. It is powered through Type-C. It is a good choice for applications that need strong networking performance. 

{% include /docs/devices-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/devices-library/blocks/single-board-computers/orangepi/install-required-libraries-and-tools-block.md %}

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

With the knowledge outlined in this guide, you can easily connect your {{deviceName}} and send data to ThingsBoard.
From now on you can move forward and send any data that you want.