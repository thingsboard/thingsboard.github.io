
{% assign boardLedCount = 1 %}
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign arduinoBoardPath="**ESP8266** > **LOLIN(WEMOS) D1 R2 & mini**" %}
{% assign prerequisites = "
- " | append: deviceName | append: "
- [Arduino IDE](https://www.arduino.cc/en/software)"
 %}

## Introduction


The WEMOS D1 mini is based on a 32-bit ESP8266 microcontroller and has a WiFi module.  
The amount of flash memory of the device reaches 4 MB.  
The improved WEMOS D1 mini model has 16 MB of memory, an SMD antenna, and an output for connecting an external antenna.  
The sizes and location of contacts in both types of boards are the same.

{% include /docs/device-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/device-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/device-library/blocks/microcontrollers/esp8266-arduino-library-install-block.md %}

{% include /docs/device-library/blocks/microcontrollers/thingsboard-arduino-library-install-block.md %}

## Connect device to ThingsBoard 

{% include /docs/device-library/blocks/basic/thingsboard-provide-device-access-token-block.md %}

{% include /docs/device-library/blocks/microcontrollers/general-code-to-program-block.md %}

## Check data on ThingsBoard

{% include /docs/device-library/blocks/basic/thingsboard-upload-example-dashboard.md %}

{% include /docs/device-library/blocks/microcontrollers/thingsboard-check-example-data-block.md %}

## Synchronize device state using client and shared attribute requests

{% include /docs/device-library/blocks/microcontrollers/thingsboard-synchronize-device-state-using-attribute-requests-block.md %}

## Control device using shared attributes

{% include /docs/device-library/blocks/microcontrollers/thingsboard-update-shared-attributes-device-block.md %}

## Control device using RPC

{% include /docs/device-library/blocks/microcontrollers/thingsboard-send-rpc-to-device-block.md %}

## Conclusion

{% include /docs/device-library/blocks/basic/conclusion-block.md %}
{% include add-device-banner.liquid %}
