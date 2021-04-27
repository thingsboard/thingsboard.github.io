---
layout: docwithnav
title: Magicbit (ESP32) DHT11 sensor monitor using ThingsBoard Arduino SDK
description: ThingsBoard IoT Platform sample for Magicbit temperature/humidity monitor using ThingsBoard Arduino SDK
hidetoc: "true"
---

* TOC
{:toc}

## Introduction


[Magicbit](https://www.magicbit.cc) which is an innovation platform designed to learn and practice new technologies such as the Internet of Things(IoT). It’s a hardware, software and mobile app integrated environment.  Magicbit provides an easy to learn, feature rich and cost effective solution to all innovators, learners and students. Since the Magicbit hardware has ESP 32 based design, it supports integration to Cloud IoT platforms with a wide range of programming options for innovators.

This sample application will allow you to display humidity/temperature data from DHT11 sensor using your magicbit device and ThingsBoard web UI.The application that is running on Magicbit is written using ThingsBoard Arduino SDK which is quite simple and easy to understand.

Once you complete this sample/tutorial, you will see your sensor data on the following dashboard.

 ![image](/images/samples/magicbit/DashboardTemp_NEW.jpeg)

## List of hardware

 - [Magicbit](https://www.magicbit.cc).

  ![image](/images/samples/magicbit/magicbit_unit.png)

 - [DHT11 module](https://www.magicbit.cc)

  ![image](/images/samples/magicbit/Temprature%20%26%20Humidity%20Sensor.png)

 - Micro-USB cable



### Connection diagram

Connect DHT11 module to pin 33 of the Magicbit as following image.

![image](/images/samples/magicbit/magicbit%20dht11.png)

## Device provisioning

This step contains instructions that are necessary to connect your device to ThingsBoard.

Open ThingsBoard Web UI (http://localhost:8080) in browser and login as tenant administrator.
If you loaded the demo data during TB installation, the next credentials can be used:

 - login: tenant@thingsboard.org
 - password: tenant

After Signing in On the Left Side Bar you will see Devices. Click devices and add a new device.

![image](/images/samples/magicbit/Addnewdevice_NEW.jfif)

Once device created, open its details and click "Manage credentials".

On the credentials tab tick Add credentials tab and choose Access Token from the drop down box. Either you can add your own Access Token or leave blank to auto generate token.

Set device to magicbit in alias. Go to the dashboard tab and import dashboard.

## Provision your dashboard

Download the dashboard file using this [**link**](/docs/samples/magicbit/magicbit__temperature___humidity_demo_dashboard.json).
Use import/export [**instructions**](/docs/user-guide/ui/dashboards/#dashboard-importexport) to import the dashboard to your ThingsBoard instance.

![image](/images/samples/magicbit/importdashboard_NEW.jpeg)

![image](/images/samples/magicbit/setofDashboards_NEW.jpeg)

![image](/images/samples/magicbit/Editaliases_NEW.jpeg)

![image](/images/samples/magicbit/Entityaliases_NEW.jpeg)

## Creating Magicbit firmware

Easiest way to program Magicbit is to use Arduino IDE. Following sections are describing that approach.

### Magicbit and Arduino IDE setup

First you will need Arduino IDE and all related software installed.

Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).

The Magicbit support must be added to Arduino IDE before any program can be built and flashed into Magicbit. To do so, install Magicbit package as described below:

1. Open Arduino IDE.

1. Open **File -> Preferences** menu, and add a board manager URLs

   ```
   https://github.com/magicbitlk/arduino-esp32/releases/download/Magicbit/package_magicbit_index.json
   ```

   into **Additional Boards Manager URL** field, as shown below:

   ![image](/images/samples/magicbit/Preferences_NEW.jpeg)

1. Select **Tools -> Board... -> Board manager** menu.

1. Enter **Magicbit** in the search field. Click **Install**

   ![image](/images/samples/magicbit/ard_1NEW.jpeg)
   
1. Select **Magicbit** as the board when uploading.

   ![image](/images/samples/magicbit/ard_2NEW.jpeg)

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


### Connect **Magicbit** to PC

Magicbit does not require a sophisticated connection. Just plug micro-USB cable into PC and Magicbit, this should be enough.

### Prepare and upload sketch

Download and open **Magicbit_thingsboard.ino** sketch using this [**link**](/docs/samples/magicbit/Magicbit_thingsboard.ino).

**Note** You need to edit following constants and variables in the sketch:

- `WIFI_AP` - name of your access point
- `WIFI_PASSWORD` - access point password
- `TOKEN` - the **$ACCESS_TOKEN** from ThingsBoard configuration step.
- `THINGSBOARD_SERVER` - ThingsBoard HOST/IP address that is accessible within your wifi network. Specify `demo.thingsboard.io` if you are using [live demo](https://demo.thingsboard.io/) server.

{% capture tabspec %}arduino-sketch
esp32-dht-gpio,esp32-dht-gpio.ino,c,resources/esp32-dht-gpio.ino,/docs/samples/esp32/resources/esp32-dht-gpio.ino{% endcapture %}
{% include tabs.html %}

## Troubleshooting

In order to to perform troubleshooting, simply open **Serial Monitor** in the Arduino IDE.

## Data visualization

Finally, open ThingsBoard Web UI. You can access this dashboard by logging in as a tenant administrator.

In case of local installation (if the demo data was added during TB installation):

 - login: tenant@thingsboard.org
 - password: tenant

In case of live-demo server:

 - login: your live-demo username (email)
 - password: your live-demo password

See **[live-demo](/docs/user-guide/live-demo/)** page for more details how to get your account.

Go to **"Devices"** section and locate **"Magicbit"**, open device details and switch to **"Latest telemetry"** tab.
If all is configured correctly you should be able to see latest values of *"temperature"* and *"humidity"* in the graph.

![image](/images/samples/magicbit/DashboardAfter_NEW.jpeg)

After, open **"Dashboards"** section then locate and open **"magicbit_temperature_humidity_demo_dashboard"**.
As a result, you will see a time-series chart displaying temperature and humidity level (similar to dashboard image in the introduction).

## See also

Browse other [samples](/docs/samples) or explore guides related to main ThingsBoard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
