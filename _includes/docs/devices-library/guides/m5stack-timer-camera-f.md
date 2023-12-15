{% assign boardLedCount = 1 %}
{% assign hasCamera = "true" %}
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign arduinoBoardPath = "**M5Stack** > **M5TimerCAM** (Or M5Stack-Timer-CAM in older ESP-IDF versions)" %}
{% assign prerequisites = "
- [" | append: deviceName | append: "](https://shop.m5stack.com/collections/m5-cameras/products/esp32-psram-timer-camera-fisheye-ov3660)
- [Arduino IDE](https://www.arduino.cc/en/software)"
 %}

## Introduction

![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[M5Stack Timer Camera F](https://shop.m5stack.com/collections/m5-cameras/products/esp32-psram-timer-camera-fisheye-ov3660) is a fisheye camera module based on ESP32-D0WDQ6-V3 with 8M PSRAM and 4M Flash on board.  
3.0 megapixel camera (OV3660) with DFOV 120° and a maximum resolution of 2048x1536 photos can be captured.  
The camera features an ultra-low-power design, and the internal integrated RTC (BM8563) draws out the IRQ signal, which can be used for sleep and timer wake-up (sleep current down to 2μA).  
The built-in 270mAh battery provides more than one month of battery life with timed pictures (one per hour) enabled.  
The module supports Wi-Fi image transfer and USB port debugging, and the HY2.0-4P output on the bottom can be used to expand other peripherals.  
The on-board LED status indicator and reset button facilitate program development and debugging.  

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