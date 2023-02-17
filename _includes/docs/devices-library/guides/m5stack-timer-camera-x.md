## Introduction

![M5Stack Timer Camera X](/images/devices-library/m5stack-timer-camera-x.svg){: style="float: left; max-width: 150px; max-height: 150px; margin: 0px 10px 0px 0px"}
[M5Stack Timer Camera X](https://shop.m5stack.com/collections/m5-cameras/products/esp32-psram-timer-camera-x-ov3660) is a camera module based on ESP32, integrated with ESP32 chip and 8M-PSRAM.  
The camera (OV3660) with 3 million pixels, DFOV 66.5° and shoot 2048x1536 resolution photo, built-in 140mAh battery and LED status indicator, featuring ultra-low power consumption design.  
There is a reset button under the LED. It is possible to realize sleep and wake-up timing through RTC (BM8563). The standby current is only 2μA.  
In this guide, we will discuss how to connect the ESP32-based boards to ThingsBoard.

{% include /docs/devices-library/blocks/basic/introduction-block.md %}

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/devices-library/blocks/esp/m5stack-arduino-library-install-block.md %}

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