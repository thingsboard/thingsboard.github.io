---
layout: docwithnav
title: Temperature and humidity upload over MQTT using Raspberry Pi, ESP32 with HTU21D, Xiaomi sensor and Bluetooth Low Energy
description: ThingsBoard IoT Platform sample for Raspberry Pi, ESP32 with HTU21D, Xiaomi sensor and temperature/humidity monitor using Bluetooth Low Energy
hidetoc: "true"
---

* TOC
{:toc}

## Introduction

{% include templates/what-is-thingsboard.md %}

This sample demo performs collection of temperature and humidity values produced by BLE broadcasting devices and further visualization on the real-time web dashboard. In this example we use [HTU21D]([https://www.sparkfun.com/products/13763]) connected to [ESP32](https://espressif.com/en/products/hardware/esp32/overview) and  [Xiaomi Smart Temperature & Humidity Sensor]([https://www.amazon.com/Xiaomi-Bluetooth-Temperature-Sensitive-Thermometer/dp/B07B9SJJZJ). The purpose of this application is to demonstrate ThingsBoard  [data collection API](https://thingsboard.io/docs/user-guide/telemetry/) , [visualization capabilities](https://thingsboard.io/docs/user-guide/visualization/), [gateway API](https://thingsboard.io/docs/iot-gateway/what-is-iot-gateway/) and the capabilities of [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) protocol.

Data is collected by a python script that is running on [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi). It pushes data to ThingsBoard server via MQTT protocol by using  [ThingsBoard MQTT client Python SDK](https://github.com/thingsboard/thingsboard-python-client-sdk) library. Data is visualized using built-in customizable dashboard. Demo that is running on Raspberry Pi is written in Python which is quite simple and easy to understand.

  ![Ble diagram](/images/samples/ble/ble-diagram.png)

## List of hardware

* [ESP32-PICO-KIT](https://www.espressif.com/en/products/hardware/development-boards) 
  
  <img src="https://cdn.xingosoftware.com/elektor/images/fetch/dpr_1/https%3A%2F%2Fwww.elektormagazine.com%2Fassets%2Fupload%2Fimages%2F18%2F20171221112541_esp32-pico-kit-v4-004.jpg" width="400">

* [HTU21D Digital Relative Humidity Sensor](https://ru.aliexpress.com/item/NEW-HTU21D-Temperature-Humidity-Sensor-Breakout-Board-Module/32451061596.html?spm=a2g0v.search0104.3.8.69f56062P2BU8f&ws_ab_test=searchweb0_0,searchweb201602_3_10065_10068_319_10059_10884_317_10887_10696_321_322_10084_453_10083_454_10103_10618_10307_537_536,searchweb201603_52,ppcSwitch_0&algo_expid=c8c9941c-ea29-40e5-b74a-d1c0ae217af7-1&algo_pvid=c8c9941c-ea29-40e5-b74a-d1c0ae217af7)

  <img src="https://http2.mlstatic.com/htu21d-gy-21-sht21-sensor-humedad-precision-i2c-itytarg-D_NQ_NP_729642-MLA25959905493_092017-F.jpg" width="400">

* Breadboard
* 4 female-to-male jumper wires
* [Raspberry Pi with Bluetooth](https://www.raspberrypi.org/products/)

  <img src="https://images-na.ssl-images-amazon.com/images/I/91zSu44%2B34L._SL1500_.jpg" width="400">

* Xiaomi Smart Temperature & Humidity Sensor
  
  <img src="http://cdn.shopify.com/s/files/1/0011/9957/1005/products/211941-1_1200x1200.jpg?v=1527580517" width="400">

## Hardware setup

### ESP32 Wiring scheme

| ESP32 | HTU21D |
| ----- | ------ |
| 3V3   | VIN    |
| GND   | GND    |
| 18    | SDA    |
| 19    | SCL    |

The following picture summarizes the connection of ESP32 and HTU21D:

  ![Ble diagram](/images/samples/ble/esp32-htu21d-scheme.png)

### Raspberry Pi

In this setup we use Raspberry Pi 2 Model B V1.1 with [Raspbian GNU/Linux 9.8 (stretch)](https://www.raspberrypi.org/downloads/raspbian/) installed on it. Raspbian is a free operating system based on Debian optimized for the Raspberry Pi hardware. This model does't support Bluetooth, so it needs a usb dongle. We use Grand-X BT40G.
Make sure your dongle is recognized by system. You can check it with the following command:
```
$> lsusb
...
Cambridge Silicon Radio, Ltd Bluetooth Dongle (HCI mode)
...

```

Whole setup:

  ![Ble diagram](/images/samples/ble/setup.jpg)

## Flashing ESP32 BT firmware

You need ESP-IDF (Espressif IoT Development Framework) to program your ESP32.
It is the official development framework for the ESP32 chip.
Install it with the following instructions:

```
mkdir ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
git checkout 3bf56cdd1
```

Set up IDF_PATH before running any other command:

```
export IDF_PATH=~/esp/esp-idf
```

The python packages required by ESP-IDF are located in IDF_PATH/requirements.txt. You can install them by running:

```
python -m pip install --user -r $IDF_PATH/requirements.txt
```

### Note

Please check the version of the Python interpreter that you will be using with ESP-IDF. For this, run the command `python --version` and depending on the result, you might want to use python2, python2.7 or similar instead of just python, e.g.

See [**this**](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) guide for more info.

Now you can flash your ESP:

```
git clone https://github.com/thingsboard/gatts_demo
cd gatts_demo
make flash
```

Run `make monitor` if you want to see logs of ESP and check if everything is okay.
Example of output:

```
I (30) boot: ESP-IDF v4.0-dev-584-g3bf56cdd1 2nd stage bootloader
I (30) boot: compile time 14:00:10
I (30) boot: Enabling RNG early entropy source...
I (36) boot: SPI Speed      : 40MHz
I (40) boot: SPI Mode       : DIO
I (44) boot: SPI Flash Size : 4MB
I (48) boot: Partition Table:
I (52) boot: ## Label            Usage          Type ST Offset   Length
I (59) boot:  0 nvs              WiFi data        01 02 00009000 00006000
I (66) boot:  1 phy_init         RF data          01 01 0000f000 00001000
I (74) boot:  2 factory          factory app      00 00 00010000 00100000
I (81) boot: End of partition table
I (85) esp_image: segment 0: paddr=0x00010020 vaddr=0x3f400020 size=0x23384 (144260) map
I (145) esp_image: segment 1: paddr=0x000333ac vaddr=0x3ffbdb60 size=0x02c5c ( 11356) load
I (150) esp_image: segment 2: paddr=0x00036010 vaddr=0x40080000 size=0x00400 (  1024) load
0x40080000: _WindowOverflow4 at /home/yulia/esp/esp-idf/components/freertos/xtensa_vectors.S:1779

I (152) esp_image: segment 3: paddr=0x00036418 vaddr=0x40080400 size=0x09bf8 ( 39928) load
I (177) esp_image: segment 4: paddr=0x00040018 vaddr=0x400d0018 size=0x71ea0 (466592) map
0x400d0018: _flash_cache_start at ??:?

I (341) esp_image: segment 5: paddr=0x000b1ec0 vaddr=0x40089ff8 size=0x08d50 ( 36176) load
0x40089ff8: r_lld_pdu_rx_handler at ??:?

I (367) boot: Loaded app from partition at offset 0x10000
I (367) boot: Disabling RNG early entropy source...
I (368) cpu_start: Pro cpu up.
I (371) cpu_start: Application information:
I (376) cpu_start: Project name:     gatt_server_demos
I (382) cpu_start: App version:      b2732e4-dirty
I (387) cpu_start: Compile time:     Jun  3 2019 17:06:46
I (393) cpu_start: ELF file SHA256:  2d3d593eed804970...
I (399) cpu_start: ESP-IDF:          v4.0-dev-584-g3bf56cdd1
I (406) cpu_start: Starting app cpu, entry point is 0x400810e0
0x400810e0: call_start_cpu1 at /home/yulia/esp/esp-idf/components/esp32/cpu_start.c:267

I (0) cpu_start: App cpu up.
I (416) heap_init: Initializing. RAM available for dynamic allocation:
I (423) heap_init: At 3FFAFF10 len 000000F0 (0 KiB): DRAM
I (429) heap_init: At 3FFB6388 len 00001C78 (7 KiB): DRAM
I (435) heap_init: At 3FFB9A20 len 00004108 (16 KiB): DRAM
I (441) heap_init: At 3FFBDB5C len 00000004 (0 KiB): DRAM
I (447) heap_init: At 3FFC8EA0 len 00017160 (92 KiB): DRAM
I (453) heap_init: At 3FFE0440 len 00003AE0 (14 KiB): D/IRAM
I (460) heap_init: At 3FFE4350 len 0001BCB0 (111 KiB): D/IRAM
I (466) heap_init: At 40092D48 len 0000D2B8 (52 KiB): IRAM
I (472) cpu_start: Pro cpu start user code
I (155) cpu_start: Starting scheduler on PRO CPU.
I (0) cpu_start: Starting scheduler on APP CPU.
I (157) GATTS_DEMO: starting ESP gatt demo

```

## Preparing MI Sensor
Install the battery in sensor.

## Installing gateway scripts on Raspberry Pi
Login to your Raspberry PI using SSH and install demo. It requires at least **python3.4**. 
```
sudo apt-get install libglib2.0-dev
pip3 install tb-ble-adapter
```
Run `pip3 show tb-ble-adapter` to find the location of installed demo:
```
$> pip3 show tb-ble-adapter
...
Location: /home/yulia/.local/lib/python3.6/site-packages
...
```

## Running main program
Run `sudo python3 tb-ble-adapter.py` with required arguments and enjoy (ﾉ◕ヮ◕)ﾉ*:･ﾟ

## Troubleshooting
In order to perform troubleshooting, you must check demo script output. It displays connection status with every device, as well as received and sent data. 

## Device provisioning
Run python script **before** importing dashboard. For this you have to create gateway device and specify it in command arguments:
```
sudo python3 tb-ble-adapter.py -t *your_gateway_access_token*
```
It creates devices:
![Created devices](/images/samples/ble/created_devices.png)


## Provision your dashboard
Download the dashboard file using this [**link**](/docs/samples/ble/resources/device_gw.json). Now you have to import it. To do this, configure aliases in such way (use gateway device from [**Device provisioning**](#device-provisioning) section):

  ![Configure aliases](/images/samples/ble/configure-aliases.png)

  ![Edit alias gw_devices](/images/samples/ble/edit_alias_gw_devices.png)

  ![Edit alias gw](/images/samples/ble/edit_alias_gw.png)

Also this dashboard needs a custom widget bundle. Download it with this [**link**](/docs/samples/ble/resources/custom_widget.json) and import using import/export [**instructions**](/docs/user-guide/ui/widget-library/).

## Data visualization
Finally, open ThingsBoard Web UI. You can access this dashboard by logging in as a tenant administrator.

In case of local installation:
*   login:  tenant@thingsboard.org
*   password: tenant

In case of live-demo server:
*   login: your live-demo username (email)
*   password: your live-demo password

See  **[live-demo](/docs/user-guide/live-demo/)**  page for more details how to get your account.

Go to **“Devices”** section, open created devices details and switch to **“Latest telemetry”** tab. If all is configured correctly you should be able to see latest telemetry values sent via BLE in the table.

  ![Latest telemetry](/images/samples/ble/latest-telemetry.png)

After, open **“Dashboards”** section and find previously imported dashboard **“Device GW”** and observe the following picture:

  ![Dashboard](/images/samples/ble/dashboard.png)

## See also
Browse other  [samples](https://thingsboard.io/docs/samples)  or explore guides related to main ThingsBoard features:

*   [Device attributes](https://thingsboard.io/docs/user-guide/attributes/)  - how to use device attributes.
*   [Telemetry data collection](https://thingsboard.io/docs/user-guide/telemetry/)  - how to collect telemetry data.
*   [Using RPC capabilities](https://thingsboard.io/docs/user-guide/rpc/)  - how to send commands to/from devices.
*   [Rule Engine](https://thingsboard.io/docs/user-guide/rule-engine/)  - how to use rule engine to analyze data from devices.
*   [Data Visualization](https://thingsboard.io/docs/user-guide/visualization/)  - how to visualize collected data.

{% include templates/feedback.md %}

{% include socials.html %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}

