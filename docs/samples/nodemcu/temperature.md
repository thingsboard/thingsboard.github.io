---
layout: docwithnav
title: Temperature upload over MQTT using NodeMCU and DHT11 sensor
description: ThingsBoard IoT Platform sample for temperature data upload over MQTT using NodeMCU and DHT11 sensor.

---

* TOC
{:toc}

## Introduction
{% include templates/what-is-thingsboard.md %}

This sample application performs collection of temperature and humidity values produced by DHT11 sensor. 
Collected data is pushed to ThingsBoard for storage and visualization.
The purpose of this application is to demonstrate ThingsBoard [data collection API](/docs/user-guide/telemetry/) and [visualization capabilities](/docs/user-guide/visualization/).

The DHT11 sensor is connected to [NodeMCU](https://en.wikipedia.org/wiki/NodeMCU). NodeMCU push data to ThingsBoard server via [MQTT](https://en.wikipedia.org/wiki/MQTT) protocol.
Data is visualized using built-in customizable dashboard. The application that is running on NodeMCU is written using Lua scripting language which is quite simple and easy to understand.

Once you complete this sample/tutorial, you will see your sensor data on the following dashboard.

![image](/images/samples/nodemcu/temperature/dashboard.png)

{% include templates/prerequisites.md %}

## List of hardware and pinouts

 - [NodeMCU V3](https://www.aliexpress.com/item/1pcs-Wireless-module-NodeMcu-Lua-WIFI-Internet-of-Things-development-board-based-ESP8266-CP2102-with-pcb/32656401198.html?spm=2114.01010208.3.1.JnJev4&ws_ab_test=searchweb0_0,searchweb201602_3_10065_10068_10000007_10084_10083_10080_10082_10081_10060_10061_10062_10056_10055_10037_10054_10033_10059_10032_10099_10078_10079_10077_10073_10097_10100_10096_10070_423_10052_10050_424_10051,searchweb201603_2&btsid=22a4a35a-c3ac-4896-b8b4-8ce38945d312) - You 
 can find list of additional documentation in [NodeMCU overview](/docs/samples/nodemcu/)
 
 ![image](/images/samples/nodemcu/temperature/nodemcu-pinout.jpg)
 
 - [Keyes DHT-11](https://www.aliexpress.com/item/Smart-3pin-KEYES-KY-015-DHT-11-DHT11-Digital-Temperature-And-Relative-Humidity-Sensor-Module-PCB/32571935933.html) - DHT11 sensor with built-in resistor. 

 ![image](/images/samples/nodemcu/temperature/dht-pinout.jpg)
 
 - 3 female-to-female jumper wires

## Wiring schema

 ![image](/images/samples/nodemcu/temperature/schema.png)

NodeMCU Pin| DHT-11 Pin
-----------|-----------
NodeMCU 3.3V|DHT-11 VCC
NodeMCU GND|DHT-11 GND (-)
NodeMCU D5|DHT-11 Data (S)

## Programming the NodeMCU device

We need to download and build firmware with Lua interpreter for NodeMCU. 
This process is described in [official documentation](https://nodemcu.readthedocs.io/) and there are multiple ways to do this.
You can use [cloud build service](http://nodemcu-build.com/) for this purpose, however, we will use [Docker Image](https://hub.docker.com/r/marcelstoer/nodemcu-build/).

### Firmware download

Use the following commands to clone the official GitHub repository for NodeMCU firmware.

```bash
$ mkdir -p ~/samples/nodemcu
$ cd ~/samples/nodemcu
$ git clone https://github.com/nodemcu/nodemcu-firmware.git
```
There is ability to customize firmware by changing two files:

 - ~/samples/nodemcu/nodemcu-firmware/app/include/user_config.h - There is an ability to change default baud rate in. 
 
 Please find and update line below to specify custom baud rate.
 
```
...
#define BIT_RATE_DEFAULT BIT_RATE_115200
...
```

 - ~/samples/nodemcu/nodemcu-firmware/app/include/user_modules.h - Contains list of what kind of modules included by default.

In our case, all necessary modules included by default. However, please check that these modules are uncommented.

```
...
define LUA_USE_MODULES_DHT
...
define LUA_USE_MODULES_MQTT
...
```

### Building firmware using Docker

The easiest way to build nodemcu firmware is by using prepared docker container for that task.

Please visit [docker installation](https://docs.docker.com/engine/installation/) page and install docker on your machine.

After installation you need to download docker image from docker hub by the command:

```bash
$ sudo docker pull marcelstoer/nodemcu-build 
```

Eventually build the firmware by next command:

```bash
$ sudo docker run --rm -ti -v ~/samples/nodemcu/nodemcu-firmware:/opt/nodemcu-firmware marcelstoer/nodemcu-build
```

As the result binary firmware located in the **~/samples/nodemcu/nodemcu-firmware/bin** folder.

### Application source code

Our application consists of three *.lua* files:

 - config.lua - configuration file, where we define a custom configuration. 
   You need to modify this file in order to setup your wifi network parameters and address of ThingsBoard server.
   - your wifi network SSID - name of the wifi network.
   - your wifi network password - password to the network.
   - thingsboard server IP - host of your thingsboard installation. Use "demo.thingsboard.io" if you are using [live demo](https://demo.thingsboard.io/) server.
   - thingsboard mqtt port - 1883 is the default value.
   - thingsboard access token - DHT11_DEMO_TOKEN is the default value that corresponds to pre-provisioned [demo account](/docs/samples/demo-account/#tenant-devices).
   
   If you are using [live demo](https://demo.thingsboard.io/) server - [get the access token](/docs/user-guide/ui/devices/#manage-device-credentials) for pre-provisioned "DHT11 Demo Device".
 - dht11.lua - sending temperature and humidity every 10 seconds to thingsboard server via MQTT protocol.
 - init.lua - initalization file that contains 
config.lua:

{% capture tabspec %}lua-scripts
Config,config.lua,lua,resources/config.lua,/docs/samples/nodemcu/resources/config.lua
Dht11,dht11.lua,lua,resources/dht11.lua,/docs/samples/nodemcu/resources/dht11.lua
Init,init.lua,lua,resources/init.lua,/docs/samples/nodemcu/resources/init.lua{% endcapture %}
{% include tabs.html %}

### Flashing the firmware

Before flashing firmware, we need to figure out which serial interface using to communicate with NodeMCU.

```bash
$ dmesg
...
[845270.901509] usb 3-3: ch341-uart converter now attached to ttyUSB0
...
```

In our case **/dev/ttyUSB0** is used for communication.

In order to flash firmware for NodeMCU, please download and install following utilities 
 
 - [Esptool](https://github.com/espressif/esptool)
 - [Luatool](https://github.com/4refr0nt/luatool)

Upload nodemcu firmware using command:

```bash
$ sudo ./esptool.py -b 115200 write_flash --flash_mode dio --flash_size 32m 0x0 ~~/samples/nodemcu/nodemcu-firmware/bin/nodemcu_integer_master_*.bin --verify
```

Upload application files using following commands:

```bash
$ sudo ./luatool.py --port /dev/ttyUSB0 -b 115200 --src config.lua --dest config.lua -v
$ sudo ./luatool.py --port /dev/ttyUSB0 -b 115200 --src dht11.lua --dest dht11.lua -v
$ sudo ./luatool.py --port /dev/ttyUSB0 -b 115200 --src init.lua --dest init.lua -v
```

### Troubleshooting

Sometimes you can observe frequent blinking of the blue led after firmware upload. This is probably related to missing initialization data. Use following command to fix this: 

```bash
$ sudo ./esptool.py -b 115200 write_flash --flash_mode dio --flash_size 32m 0x3fc000 ~/samples/nodemcu/nodemcu-firmware/bin/esp_init_data_default.bin --verify
```

Sometimes you are not able to upload lua files. Try to reset the device and execute a command again within the first 10 seconds after reset. If no success, try to delete init.lua code from NodeMCU:

```bash
$ sudo ./luatool.py --port /dev/ttyUSB0 -b 115200 --delete init.lua
```

## Data visualization

In order to simplify this guide, we have included "Temperature & Humidity Demo Dashboard" to the [demo data](/docs/samples/demo-account/) that is available in each ThingsBoard installation.
You still can modify this dashboard: tune, add, delete widgets, etc.
You can access this dashboard by logging in as a tenant administrator. Use

 - login: tenant@thingsboard.org
 - password: tenant
 
in case of local ThingsBoard installation.
 
Once logged in, open **Dashboards->Temperature & Humidity Demo Dashboard** page. You should observe demo dashboard with live data from your device (similar to dashboard image in the introduction).
 
## See also

Browse other [samples](/docs/samples) or explore guides related to main ThingsBoard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.

{% include templates/feedback.md %}
 
{% include socials.html %}


## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}

