---
layout: docwithnav
title: Humidity and temperature upload over HTTP using Arduino UNO, SIM808 Shield and HTU21D sensor
description: ThingsBoard IoT Platform sample for humidity and temperature data upload over HTTP using Arduino UNO, SIM808 GSM shield and HTU21D sensor.

---

* TOC
{:toc}

## Introduction

{% include templates/what-is-thingsboard.md %}

This sample application performs collection of humidity and temperature values produced by [HTU21D sensor](https://www.sparkfun.com/products/13763) and further visualization on the real-time web dashboard.
Collected data is pushed via HTTP to ThingsBoard server for storage and visualization.
The purpose of this application is to demonstrate ThingsBoard [data collection API](/docs/user-guide/telemetry/) and [visualization capabilities](/docs/user-guide/visualization/).

The HTU21D sensor is connected to [Arduino UNO](https://en.wikipedia.org/wiki/Arduino).
Arduino UNO connects to the Internet using [SIM808 GSM shield](https://www.elecrow.com/wiki/index.php?title=SIM808_GPRS/GSM%2BGPS_Shield_v1.1).
Arduino UNO pushes data to ThingsBoard server via HTTP protocol by using [Arduino ThingsBoard SDK](https://github.com/thingsboard/ThingsBoard-Arduino-MQTT-SDK).
Data is visualized using built-in customizable dashboard.
The application that is running on Arduino UNO is written using Arduino SDK which is quite simple and easy to understand.

Once you complete this sample/tutorial, you will see your sensor data on the following dashboard.

![image](/images/samples/arduino/sim808-htu21d/dashboard.png)

{% include templates/prerequisites.md %}

## List of hardware

 - Arduino UNO

   ![image](/images/samples/arduino/sim808-htu21d/arduino-uno-pinout.png)

 - [HTU21D sensor](https://www.sparkfun.com/products/13763)

   ![image](/images/samples/arduino/sim808-htu21d/htu21d.jpg)

 - [SIM808 GSM shield](https://www.elecrow.com/wiki/index.php?title=SIM808_GPRS/GSM%2BGPS_Shield_v1.1)

   ![image](/images/samples/arduino/sim808-htu21d/sim808_shield.jpg)

## Wiring

### SIM808 shield connection

Simply connect SIM808 shield on top of your Arduino.

### HTU21D connection

Connect HTU21D in following manner:

* VCC - Arduino 3.3V
* GND - Arduino GND
* SDA - Arduino A5
* SCL - Arduino A4

## Complete wiring

Double-check that your wiring follows schematics below:

   ![image](/images/samples/arduino/sim808-htu21d/arduino-uno-sim808-htu21d.png)

The complete setup will look like that:

   ![image](/images/samples/arduino/sim808-htu21d/arduino-uno-sim808-htu21d-photo.png)

## Device provisioning

This step contains instructions that are necessary to connect your device to ThingsBoard.

Open ThingsBoard Web UI (http://localhost:8080) in browser and login as tenant administrator.
If you loaded the demo data during TB installation, the next credentials can be used:

 - login: tenant@thingsboard.org
 - password: tenant

Go to "Devices" section. Click "+" button and create a device with the name "Arduino UNO Demo Device". Set "Device type" to "default".

![image](/images/samples/arduino/sim808-htu21d/device.png)

Once device created, open its details and click "Manage credentials".

Copy auto-generated access token from the "Access token" field. Please save this device token. It will be referred to later as **$ACCESS_TOKEN**.

![image](/images/samples/arduino/sim808-htu21d/credentials.png)

## Provision your dashboard

Download the dashboard file using this [**link**](/docs/samples/arduino/resources/arduino_uno_with_sim808_shield_and_htu21d_sensor_dashboard.json).
Use import/export [**instructions**](/docs/user-guide/ui/dashboards/#dashboard-importexport) to import the dashboard to your ThingsBoard instance.

## Creating Arduino firmware

If you already familiar with basics of Arduino UNO programming using Arduino IDE you can skip the following step and proceed with step 2.

### Step 1. Arduino UNO and Arduino IDE setup.
In order to start programming the Arduino UNO device, you will need Arduino IDE and all related software installed.

Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).

To learn how to connect your Uno board to the computer and upload your first sketch please follow this [guide](https://www.arduino.cc/en/Guide/ArduinoUno).

### Step 2. Install Arduino ThingsBoard SDK and dependencies

To simplify application development, install the ThingsBoard Arduino SDK and its dependencies from standard Arduino library repository:

1. Proceed to **Sketch -> Include Library...** submenu. Select **Manage Libraries**.

1. Find and install **ThingsBoard Arduino SDK** and **PubSubClient by Nick O'Leary** libraries.

   ![image](/images/samples/arduino/sim808-htu21d/install-tb-arduino.png)

1. Install **ArduinoJSON** library **v6.9.1** or higher. <span style="color:red">Avoid installing beta releases of the ArduinoJson library</span>.

   ![image](/images/samples/arduino/sim808-htu21d/do-not-use-beta-version-arduinojson.png)

1. Install **ArduinoHttpClient** library.

   ![image](/images/samples/arduino/sim808-htu21d/install-http-arduino.png)

From now on, you can use ThingsBoard SDK right from Arduino IDE.

### Step 3. Install HTU21D library

Use SparkFun HTU21D library, as shown in the screenshot below.

![image](/images/samples/arduino/sim808-htu21d/install-htu21d.png)

### Step 4. Install SIM808 driver

The SIM808 is support by the TinyGSM driver, which can be installed as described below.

![image](/images/samples/arduino/sim808-htu21d/install-tinygsm.png)

### Step 5. Prepare and upload a sketch.

Download and open **arduino_htu21d_sim808_http.ino** sketch.

**Note** You need to edit following constants and variables in the sketch:

- `apn` - GPRS access point name. Consult your cellular network provider to get more information.
- `user` - GPRS access point user. Consult your cellular network provider to get more information.
- `pass` - GPRS access point password. Consult your cellular network provider to get more information.
- `TOKEN` - the **$ACCESS_TOKEN** from ThingsBoard configuration step.
- `THINGSBOARD_SERVER` - ThingsBoard HOST/IP address that is accessible from within your wifi network. Specify "demo.thingsboard.io" if you are using [live demo](https://demo.thingsboard.io/) server.
- `THINGSBOARD_PORT` - HTTP port to connect to. Change it if necessary.

{% capture tabspec %}arduino-sketch
arduino_uno_sim808_htu21d_http,arduino_uno_sim808_htu21d_http.ino,c,resources/arduino_uno_sim808_htu21d_http.ino,/docs/samples/arduino/resources/arduino_uno_sim808_htu21d_http.ino{% endcapture %}
{% include tabs.html %}

Connect your Arduino UNO device via USB cable and select "Arduino/Genuino Uno" port in Arduino IDE. Compile and Upload your sketch to the device using "Upload" button.

After application will be uploaded and started it will try to connect to ThingsBoard node using HTTP and upload "humidity" and "temperature" timeseries data once per second.

## Troubleshooting

When the application is running you can select "Arduino/Genuino Uno" port in Arduino IDE and open "Serial Monitor" in order to view debug information produced by serial output.

## Data visualization

Finally, open ThingsBoard Web UI. You can access this dashboard by logging in as a tenant administrator. Use

 - login: tenant@thingsboard.org
 - password: tenant

in case of local ThingsBoard installation.

Go to **"Devices"** section and locate **"Arduino UNO Demo Device"**, open device details and switch to **"Latest telemetry"** tab.
If all is configured correctly you should be able to see latest values of *humidity* and *temperature* in the table.

![image](/images/samples/arduino/sim808-htu21d/telemetry.png)

After, open **"Dashboards"** section then locate and open **"dashboard  Arduino Uno with SIM808 Shield and HTU21D sensor"**.
As a result, you will see two time-series charts and digital gauges displaying humidity and temperature level (similar to dashboard image in the introduction).
