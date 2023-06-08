
{% assign boardLedCount = 0 %}
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign arduinoBoardPath = "**ESP32** > **ESP32 Dev Module**" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [Arduino IDE](https://www.arduino.cc/en/software)"
 %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}

The LuaNode32 dev kit is built on the ESP-WROOM-32 module, a new miniature high-performance Wi-Fi + BT + BLE chip from Espressif, designed for a wide range of applications, from micro-power network sensors to the most complex applications, such as encoding, streaming music and MP3 encoding.  
The module contains all the necessary minimum peripherals, sufficient for a quick and comfortable start of work with ESP-WROOM-32.  
ESP-WROOM-32 is based on the popular ESP32 dual-core chipset, with a variable clock frequency from 80 MHz to 240 MHz, with the possibility of individual control and power supply.  
The module is designed for portable and autonomous electronics and Internet of Things applications, made in a miniature 25.5 mm x 18 mm package, has on-board Flash memory, 40 MHz quartz and a PCB antenna that provides good RF characteristics.  
  
{% include /docs/devices-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/devices-library/blocks/microcontrollers/esp32-arduino-library-install-block.md %}

{% include /docs/devices-library/blocks/microcontrollers/thingsboard-arduino-library-install-block.md %}

## Connect device to ThingsBoard 

{% include /docs/devices-library/blocks/basic/thingsboard-provide-device-access-token-block.md %}

{% include /docs/devices-library/blocks/microcontrollers/general-code-to-program-block.md %}

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
 