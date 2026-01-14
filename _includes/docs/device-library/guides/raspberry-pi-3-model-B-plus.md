{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [tb-mqtt-client library](https://pypi.org/project/tb-mqtt-client/)
- [python ≥ 3.7](https://www.python.org/)
- [Adafruit-Blinka](https://pypi.org/project/Adafruit-Blinka/) "
 %}

## Introduction
The Raspberry Pi 3 Model B+ is currently the best Raspberry Pi computer you can buy. While the price stays at $35, the
new board one-ups its predecessor in several ways, most notably with a faster processor and Wi-Fi. The co-creator of
the board Eben Upton describes it as lying somewhere between the 2016 Raspberry Pi 3 and a future Raspberry Pi 4 in
terms of power and features. The hardware improvements, along with refinements to the Pi 3 B+’s official Raspbian OS,
elevate the board to the status of a perfectly acceptable everyday PC — impressive for a computer the price of a
restaurant meal.

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
