---
layout: docwithnav
title: ESP32 Pico Kit GPIO control and DHT22 sensor monitor using ThingsBoard Arduino SDK
description: ThingsBoard IoT Platform sample for ESP32 Pico Kit GPIO control and temperature/humidity monitor using ThingsBoard Arduino SDK
hidetoc: "true"
---

* TOC
{:toc}

## Introduction

{% include templates/what-is-thingsboard.md %}

[ESP32](https://www.espressif.com/en/products/hardware/esp32/overview) is a series of low-cost, low-power system-on-a-chip microcontrollers with integrated self-contained Wi-Fi and dual-mode Bluetooth. ESP32 is a successor of ESP8266 chip.

This sample application will allow you to control GPIO of your ESP32 device using ThingsBoard web UI and display humidity/temperature data from DHT22 sensor. We will observe GPIO control using LEDs connected to the pins. The purpose of this application is to demonstrate ThingsBoard [RPC capabilities](/docs/user-guide/rpc/) and ThingsBoard [Telemetry](/docs/user-guide/telemetry/).

The application that is running on ESP32 is written using ThingsBoard Arduino SDK which is quite simple and easy to understand.

Current GPIO state and GPIO control widget is visualized using built-in customizable dashboard.

Once you complete this sample/tutorial, you will see your sensor data on the following dashboard.

 ![image](/images/samples/esp32/gpio-temperature/dashboard.png)

## List of hardware

 - [ESP32 Pico Kit board](https://www.espressif.com/en/products/hardware/development-boards).

  ![image](https://docs.espressif.com/projects/esp-idf/en/latest/_images/esp32-pico-kit-v4.1-layout.jpg)

 - [DHT22 sensor](https://www.aliexpress.com/item/1pcs-DHT22-digital-temperature-and-humidity-sensor-Temperature-and-humidity-module-AM2302-replace-SHT11-SHT15/32316036161.html)

  ![image](/images/samples/arduino/temperature/dht22-pinout.png)

 - 6 LEDs
 - 6 Resistors in range between 68Ω and 100Ω
 - Breadboard
 - Micro-USB cable

## Wiring

### DHT22 connection

Pin | Connect to
-----------|-----------
DHT22 VCC |  Pico 5V
DHT22 DATA | Pico 33

### LEDs connection

Pin | Connect to
-----------|-----------
LED1 Anode | Pico 32 trough resistor (68Ω - 100Ω)
LED2 Anode | Pico 26 trough resistor (68Ω - 100Ω)
LED3 Anode | Pico 25 trough resistor (68Ω - 100Ω)
LED4 Anode | Pico 19 trough resistor (68Ω - 100Ω)
LED5 Anode | Pico 22 trough resistor (68Ω - 100Ω)
LED6 Anode | Pico 21 trough resistor (68Ω - 100Ω)
All LEDs cathodes | Pico Ground

### Connection diagram

The following picture summarizes the connections for this project:

![image](/images/samples/esp32/gpio-temperature/wiring.png)

## Device provisioning

This step contains instructions that are necessary to connect your device to ThingsBoard.

Open ThingsBoard Web UI (http://localhost:8080) in browser and login as tenant administrator.
If you loaded the demo data during TB installation, the next credentials can be used:

 - login: tenant@thingsboard.org
 - password: tenant

Go to "Devices" section. Click "+" button and create a device with the name "ESP32 Pico Device". Set "Device type" to "default".

![image](/images/samples/esp32/gpio-temperature/device.png)

Once device created, open its details and click "Manage credentials".

Copy auto-generated access token from the "Access token" field. Please save this device token. It will be referred to later as **$ACCESS_TOKEN**.

![image](/images/samples/esp32/gpio-temperature/credentials.png)

## Provision your dashboard

Download the dashboard file using this [**link**](/docs/samples/esp32/resources/esp32-dht22-temp-and-gpio-dashboard.json).
Use import/export [**instructions**](/docs/user-guide/ui/dashboards/#dashboard-importexport) to import the dashboard to your ThingsBoard instance.

## Creating ESP32 firmware

Easiest way to program ESP32 Pico Kit is to use Arduino IDE. Following sections are describing that approach.

### ESP32 and Arduino IDE setup

First you will need Arduino IDE and all related software installed.

Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).

The Pico board support must be added to Arduino IDE before any program can be built and flashed into ESP32. To do so, install ESP32 package as described below:

1. Open Arduino IDE.

1. Open **File -> Preferences** menu, and add a board manager URLs

   ```
   https://dl.espressif.com/dl/package_esp32_index.json,http://arduino.esp8266.com/stable/package_esp8266com_index.json
   ```

   into **Additional Boards Manager URL** field, as shown below:

   ![image](/images/samples/esp32/gpio-temperature/add-esp32-url.png)

1. Select **Tools -> Board... -> Board manager** menu.

1. Enter **ESP32** in the search field. Click **Install**

   ![image](/images/samples/esp32/gpio-temperature/install-esp32-arduino.png)

### Install Arduino ThingsBoard SDK

To simplify application development, install the ThingsBoard Arduino SDK and its dependencies from standard Arduino library repository:

1. Proceed to **Sketch -> Include Library...** submenu. Select **Manage Libraries**.

1. Find and install **ThingsBoard Arduino SDK**, **PubSubClient by Nick O'Leary** and **ArduinoHttpClient** libraries.

   ![image](/images/samples/esp32/gpio-temperature/install-thingsboard-arduino.png)
   ![image](/images/samples/esp32/gpio-temperature/install-pubsubclient-arduino.png)
   ![image](/images/samples/esp32/gpio-temperature/install-arduinohttpclient-arduino.png)

1. Install **ArduinoJSON** library **v6.9.1** or higher. <span style="color:red">Avoid installing beta releases of the ArduinoJson library</span>.

   ![image](/images/samples/esp32/gpio-temperature/do-not-use-beta-version-arduinojson.png)

From now on, you can use ThingsBoard SDK right from Arduino IDE.

### Install ESP32 DHT22 driver

DHT22 sensor, connected to the ESP32 requires a special driver. To install it, proceed as follows:

1. Click on "Sketch" menu. Open "Include Library..." submenu. Select "Manage Libraries".

1. Type "ESP DHT22" in the search field.

1. Click install on "DHT22 Sensor Library for ESPx", as shown below:

   ![image](/images/samples/esp32/gpio-temperature/install-esp32-dht22-arduino.png)

### Connect ESP32 Pico to PC

ESP32 Pico Kit does not require a sophisticated connection. Just plug micro-USB cable into PC and Pico, this should be enough.

### Prepare and upload sketch

Download and open **esp32-dht-gpio.ino** sketch.

**Note** You need to edit following constants and variables in the sketch:

- `WIFI_AP` - name of your access point
- `WIFI_PASSWORD` - access point password
- `TOKEN` - the **$ACCESS_TOKEN** from ThingsBoard configuration step.
- `THINGSBOARD_SERVER` - ThingsBoard HOST/IP address that is accessible within your wifi network. Specify `demo.thingsboard.io` if you are using [live demo](https://demo.thingsboard.io/) server.

{% capture tabspec %}arduino-sketch
esp32-dht-gpio,esp32-dht-gpio.ino,c,resources/esp32-dht-gpio.ino,/docs/samples/esp32/resources/esp32-dht-gpio.ino{% endcapture %}
{% include tabs.html %}

## Troubleshooting

In order to to perform troubleshooting, you must check ESP32 Pico logs. For that, simply open **Serial Monitor** in the Arduino IDE.

## Data visualization and GPIO control

Finally, open ThingsBoard Web UI. You can access this dashboard by logging in as a tenant administrator.

In case of local installation (if the demo data was added during TB installation):

 - login: tenant@thingsboard.org
 - password: tenant

In case of live-demo server:

 - login: your live-demo username (email)
 - password: your live-demo password

See **[live-demo](/docs/user-guide/live-demo/)** page for more details how to get your account.

Go to **"Devices"** section and locate **"ESP32 Pico Device"**, open device details and switch to **"Latest telemetry"** tab.
If all is configured correctly you should be able to see latest values of *"temperature"* and *"humidity"* in the table.

![image](/images/samples/esp32/gpio-temperature/telemetry.png)

After, open **"Dashboards"** section then locate and open **"ESP32 Pico Dashboard"**.
As a result, you will see a time-series chart displaying temperature and humidity level (similar to dashboard image in the introduction).

You should also observe a GPIO control for your device. It consists of two widgets: one is for controlling LED blink speed (in milliseconds) and second for turning individual LEDs on and off.

You can switch status of GPIOs using control panel. As a result, you will see LEDs status change on the device. To control LED blink speed, simply turn a knob and observe a speed change.

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
