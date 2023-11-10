
{% assign boardLedCount = 1 %}
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign arduinoBoardPath="**Raspberry Pi Pico/RP2040** > **Raspberry Pi Pico W**" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [Arduino IDE](https://www.arduino.cc/en/software)"
 %}

## Introduction

![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}

Following the hugely popular Raspberry Pi Pico, the new Raspberry Pi Pico W is a wireless-enabled version of the RP2040-based board, adding 2.4GHz 802.11n WiFi connectivity.
The addition of wireless connectivity opens up the Pico W to a vast new range of projects such as remote sensor readings, remote control, home automation, mini web servers, wireless GPIO pin control and more.
At the heart of the Pico W is the RP2040 – the same chip used in the original Raspberry Pi Pico, featuring two ARM Cortex-M0+ cores clocked at 133MHz; 256KB RAM; 30 GPIO pins; and a broad range of interfacing options. This is paired with 2MB of onboard QSPI Flash memory for code and data storage.
WiFi is enabled via the use of an Infineon CYW43439 wireless chip.

{% include /docs/devices-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/devices-library/blocks/microcontrollers/raspberry-pi-pico-arduino-library-install-block.md %}

{% include /docs/devices-library/blocks/microcontrollers/thingsboard-arduino-library-install-block.md %}

## Connect device to ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-provide-device-access-token-block.md %}

{% include /docs/devices-library/blocks/microcontrollers/rp2040-general-code-to-program-block.md %}

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-upload-example-dashboard.md %}

{% include /docs/devices-library/blocks/microcontrollers/thingsboard-check-example-data-block.md %}

## Synchronize device state using client and shared attribute requests

{% include /docs/devices-library/blocks/microcontrollers/thingsboard-synchronize-device-state-using-attribute-requests-block.md %}

## Control device using shared attributes

{% include /docs/devices-library/blocks/microcontrollers/thingsboard-update-shared-attributes-device-block.md %}

## Control device using RPC

{% include /docs/devices-library/blocks/microcontrollers/thingsboard-send-rpc-to-device-block.md %}

## Conclusion
{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
