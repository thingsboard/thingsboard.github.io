{% assign boardLedCount = 1 %}
{% assign hasCamera = "true" %}
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign arduinoBoardPath = "**M5Stack** > **M5TimerCAM** (Or M5Stack-Timer-CAM in older ESP-IDF versions)" %}
{% assign prerequisites = "
- [" | append: deviceName | append: "](https://shop.m5stack.com/collections/m5-cameras/products/esp32-psram-timer-camera-x-ov3660)
- [Arduino IDE](https://www.arduino.cc/en/software)"
 %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[M5Stack Timer Camera X](https://shop.m5stack.com/collections/m5-cameras/products/esp32-psram-timer-camera-x-ov3660) is a camera module based on ESP32, integrated with ESP32 chip and 8M-PSRAM.
The camera (OV3660) with 3 million pixels, DFOV 66.5° and shoot 2048x1536 resolution photo, built-in 140mAh battery and LED status indicator, featuring ultra-low power consumption design.
There is a reset button under the LED. It is possible to realize sleep and wake-up timing through RTC (BM8563). The standby current is only 2μA.
In this guide, we will discuss how to connect the ESP32-based boards to ThingsBoard.

{% include /docs/devices-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/devices-library/blocks/microcontrollers/m5stack-arduino-library-install-block.md %}

{% include /docs/devices-library/blocks/microcontrollers/thingsboard-arduino-library-install-block.md %}

## Connect device to ThingsBoard 

{% include /docs/devices-library/blocks/basic/thingsboard-provide-device-access-token-block.md %}

{% include /docs/devices-library/blocks/microcontrollers/camera-code-to-program-block.md %}

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
