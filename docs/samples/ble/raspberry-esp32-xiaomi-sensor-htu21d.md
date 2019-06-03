# Temperature and humidity upload over MQTT using Raspberry Pi, ESP32 with HTU21D, Xiaomi sensor and Bluetooth Low Energy

* [**Introduction**](#introduction)
* [**List of hardware**](#list-of-hardware)
* [**Hardware setup**](#hardware-setup)
	* [**ESP32 Wiring scheme**](#esp32-wiring-scheme)
	* [**Raspberry Pi**](#raspberry-pi)
* [**Preparing ESP32**](#preparing-esp32)
* [**Preparing Raspberry Pi**](#preparing-raspberry-pi)
* [**Running main program**](#running-main-program)

## Introduction
ThingsBoard is an open-source server-side platform that allows you to monitor and control IoT devices. It is free for both personal and commercial usage and you can deploy it anywhere. If this is your first experience with the platform we recommend to review [what-is-thingsboard](https://thingsboard.io/docs/getting-started-guides/what-is-thingsboard/) page and [getting-started](https://thingsboard.io/docs/getting-started-guides/helloworld/) guide.

This sample demo performs collection of temperature and humidity values produced by BLE broadcasting devices and further visualization on the real-time web dashboard. In this example we use [HTU21D]([https://www.sparkfun.com/products/13763]) connected to [ESP32](https://espressif.com/en/products/hardware/esp32/overview) and  [Xiaomi Smart Temperature & Humidity Sensor]([https://www.amazon.com/Xiaomi-Bluetooth-Temperature-Sensitive-Thermometer/dp/B07B9SJJZJ). The purpose of this application is to demonstrate ThingsBoard  [data collection API](https://thingsboard.io/docs/user-guide/telemetry/) , [visualization capabilities](https://thingsboard.io/docs/user-guide/visualization/), [gateway API](https://thingsboard.io/docs/iot-gateway/what-is-iot-gateway/) and the capabilities of [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) protocol.

Data is collected by program that is running on [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi). It pushes data to ThingsBoard server via MQTT protocol by using  [ThingsBoard MQTT client Python SDK](https://github.com/thingsboard/thingsboard-python-client-sdk) library. Data is visualized using built-in customizable dashboard. Demo that is running on Raspberry Pi is written in Python which is quite simple and easy to understand.

## List of hardware
* ESP32-PICO-KIT 
* HTU21D Digital Relative Humidity Sensor
* Breadboard
* 4 female-to-male jumper wires
* Raspberry Pi with Bluetooth
* Xiaomi Smart Temperature & Humidity Sensor

**_TODO:_ Add photos of hardware**


## Hardware setup
#### ESP32 Wiring scheme
| ESP32 | HTU21D |
| ----- | ------ |
| 3V3   | VIN    |
| GND   | GND    |
| 18    | SDA    |
| 19    | SCL    |

The following picture summarizes the connection of ESP32 and HTU21D:
**_TODO:_ Add final picture of setup**

#### Raspberry Pi
In this setup we use Raspberry Pi 2 Model B V1.1 with Raspbian GNU/Linux 9.8 (stretch) installed on it. Raspbian is a free operating system based on Debian optimized for the Raspberry Pi hardware. This model does't support Bluetooth, so it needs a usb dongle. We use Grand-X BT40G.
Make sure your dongle is recognized by system. You can check it with the following command:
```
$> lsusb
...
Cambridge Silicon Radio, Ltd Bluetooth Dongle (HCI mode)
...

```

## Preparing ESP32
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
##### Note
Please check the version of the Python interpreter that you will be using with ESP-IDF. For this, run the command `python --version` and depending on the result, you might want to use python2, python2.7 or similar instead of just python, e.g.

See [this](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) guide for more info.

Now you can flash your ESP:
```
git clone name_of_repo_with_firmware
cd name_of_repo_with_firmware
make flash
```


## Preparing Raspberry Pi
This demo requires at least **python3.4**. Install the following packages:
```
sudo apt-get install libglib2.0-dev
pip3 install bluepy btlewrap tb-mqtt-client
```

## Running main program
Execute the following command to get demo script:
```
git clone name_of_repo_with_script
cd name_of_repo_with_script
```

Run `sudo python3 tb-ble-adapter.py` with required arguments and enjoy (ﾉ◕ヮ◕)ﾉ*:･ﾟ

