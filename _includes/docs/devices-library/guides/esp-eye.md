


## Introduction

![ESP-EYE](/images/devices-library/esp-eye.png){: style="float: left; max-width: 150px; max-height: 150px; margin: 0px 10px 0px 10px"}
[ESP-EYE](https://www.espressif.com/en/products/devkits/esp-eye/overview) is a development board for image recognition and audio processing, which can be used in various AIoT applications.  
It features an ESP32 chip, a 2-Megapixel camera and a microphone. ESP-EYE offers plenty of storage, with an 8 Mbyte PSRAM and a 4 Mbyte flash.  
It also supports image transmission via Wi-Fi and debugging through a Micro-USB port.

{% include /docs/devices-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/devices-library/blocks/esp/esp32-arduino-library-install-block.md %}

{% include /docs/devices-library/blocks/esp/thingsboard-arduino-library-install-block.md %}

## Connect device to ThingsBoard 

{% include /docs/devices-library/blocks/esp/camera-code-to-program-block.md %}

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-upload-example-dashboard.md %}

{% include /docs/devices-library/blocks/esp/thingsboard-check-example-data-block.md %}

## Synchronize device state using client and shared attribute requests

{% include /docs/devices-library/blocks/esp/thingsboard-synchronize-device-state-using-attribute-requests-block.md %}

## Control device using shared attributes

{% include /docs/devices-library/blocks/esp/thingsboard-update-shared-device-interval-block.md %}

## Control device using RPC

{% include /docs/devices-library/blocks/esp/thingsboard-send-rpc-to-device-block.md %}

## Conclusion

 {% include /docs/devices-library/blocks/basic/conclusion-block.md %} 