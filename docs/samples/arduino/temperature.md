---
layout: docwithnav
title: Temperature upload over MQTT using Arduino UNO, ESP8266 and DHT22 sensor
description: ThingsBoard IoT Platform sample for temperature data upload over MQTT using Arduino UNO, ESP8266 and DHT22 sensor.

---

* TOC
{:toc}

## Introduction
{% include templates/what-is-thingsboard.md %}

This sample application performs collection of temperature and humidity values produced by [DHT22 sensor](https://www.adafruit.com/product/385) and further visualization on the real-time web dashboard.
Collected data is pushed via MQTT to ThingsBoard server for storage and visualization.
The purpose of this application is to demonstrate ThingsBoard [data collection API](/docs/user-guide/telemetry/) and [visualization capabilities](/docs/user-guide/visualization/).

The DHT22 sensor is connected to [Arduino UNO](https://en.wikipedia.org/wiki/Arduino).
Arduino UNO connects to the WiFi network using [ESP8266](https://en.wikipedia.org/wiki/ESP8266).
Arduino UNO pushes data to ThingsBoard server via MQTT protocol by using [PubSubClient](https://github.com/knolleary/pubsubclient) library for Arduino.
Data is visualized using built-in customizable dashboard.
The application that is running on Arduino UNO is written using Arduino SDK which is quite simple and easy to understand.

Once you complete this sample/tutorial, you will see your sensor data on the following dashboard.

![image](/images/samples/arduino/temperature/dashboard.png)

{% include templates/prerequisites.md %}

## List of hardware and pinouts

 - Arduino UNO

  ![image](/images/samples/arduino/temperature/arduino-uno-pinout.png)

 - [ESP8266 module](https://www.aliexpress.com/item/Free-shipping-50pcs-lot-ESP8266-serial-WIFI-wireless-module-wireless-transceiver/32257568124.html?spm=2114.03010208.3.126.6Ir2oN&ws_ab_test=searchweb0_0,searchweb201602_2_10065_10068_10084_10083_10080_10082_10081_10060_10061_10062_10056_10055_10054_10059_10099_10078_10079_10093_426_10073_10103_10102_10096_10052_10050_10051,searchweb201603_6&btsid=5ad90a6c-2282-48ee-a450-5ab29e2e5d84)

  ![image](/images/samples/arduino/temperature/esp8266-pinout.png)

 - [DHT22 sensor](https://www.aliexpress.com/item/1pcs-DHT22-digital-temperature-and-humidity-sensor-Temperature-and-humidity-module-AM2302-replace-SHT11-SHT15/32316036161.html?spm=2114.03010208.3.49.aZvfaG&ws_ab_test=searchweb0_0,searchweb201602_2_10065_10068_10084_10083_10080_10082_10081_10060_10061_10062_10056_10055_10054_10059_10099_10078_10079_10093_426_10073_10103_10102_10096_10052_10050_10051,searchweb201603_6&btsid=28d9ee9a-283a-4e97-af7b-a7e530490916)

  ![image](/images/samples/arduino/temperature/dht22-pinout.png)

 - Resistor (between 4.7K and 10K)

 - Breadboard

 - 2 female-to-female jumper wires

 - 11 female-to-male jumper wires

 - 3 male-to-male jumper wire

## ESP8266 Firmware

In the current tutorial [WiFiEsp Arduino library](https://github.com/bportaluri/WiFiEsp) is used to connect Arduino board to the internet.
This library supports ESP SDK version 1.1.1 and above (AT version 0.25 and above).
Please make sure that your ESP8266 has compatible firmware. You can download and flash [AT25-SDK112 firmware](http://www.espruino.com/files/ESP8266_AT25-SDK112-512k.bin) which is tested in this tutorial.

Please note that serial baud rate of ESP8266 should be set to 9600 by the following AT command:

```bash
AT+UART_DEF=9600,8,1,0,0
```

## Wiring scheme

Arduino UNO Pin| ESP8266 Pin
-----------|-----------
Arduino UNO 3.3V|ESP8266 VCC
Arduino UNO 3.3V|ESP8266 CH_PD
Arduino UNO GND|ESP8266 GND (-)
Arduino UNO D2|ESP8266 RX
Arduino UNO D3|ESP8266 TX

Arduino UNO Pin| DHT-22 Pin
-----------|-----------
Arduino UNO 5V|DHT-22 VCC
Arduino UNO GND|DHT-22 GND (-)
Arduino UNO D4|DHT-22 Data

Finally, place a resistor (between 4.7K and 10K) between pin number 1 and 2 of the DHT sensor.

The following picture summarizes the connections for this project:

![image](/images/samples/arduino/temperature/schema.png)

{% include templates/thingsboard-configuration.md %}

### Provision your device

This step contains instructions that are necessary to connect your device to ThingsBoard.

Open ThingsBoard Web UI (http://localhost:8080) in browser and login as tenant administrator

 - login: tenant@thingsboard.org
 - password: tenant

Go to "Devices" section. Click "+" button and create a device with the name "Arduino UNO Demo Device".

![image](/images/samples/arduino/temperature/device.png)

Once device created, open its details and click "Manage credentials".

Copy auto-generated access token from the "Access token" field. Please save this device token. It will be referred to later as **$ACCESS_TOKEN**.

![image](/images/samples/arduino/temperature/credentials.png)

### Provision your dashboard

Download the dashboard file using this [**link**](/docs/samples/arduino/resources/arduino_dht_temp_dashboard_v2.json).
Use import/export [**instructions**](/docs/user-guide/ui/dashboards/#dashboard-importexport) to import the dashboard to your ThingsBoard instance.

## Programming the Arduino UNO device

If you already familiar with basics of Arduino UNO programming using Arduino IDE you can skip the following step and proceed with step 2.

### Step 1. Arduino UNO and Arduino IDE setup.
In order to start programming the Arduino UNO device, you will need Arduino IDE and all related software installed.

Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).

To learn how to connect your Uno board to the computer and upload your first sketch please follow this [guide](https://www.arduino.cc/en/Guide/ArduinoUno).

### Step 2. Install Arduino libraries.

Open Arduino IDE and go to **Sketch -> Include Library -> Manage Libraries**.
Find and install the following libraries:

- [PubSubClient by Nick O'Leary](http://pubsubclient.knolleary.net/)
- [WiFiEsp by bportaluri](https://github.com/bportaluri/WiFiEsp)
- [Adafruit Unified Sensor by Adafruit](https://github.com/adafruit/Adafruit_Sensor)
- [DHT sensor library by Adafruit](https://github.com/adafruit/DHT-sensor-library)
- [Arduino ThingsBoard SDK by ThingsBoard](https://github.com/thingsboard/ThingsBoard-Arduino-MQTT-SDK)
- [ArduinoJSON by bblanchon](https://github.com/bblanchon/ArduinoJson)
- [Arduino Http Client](https://github.com/arduino-libraries/ArduinoHttpClient)

**Note** that this tutorial was tested with the following versions of the libraries:

- PubSubClient 2.6
- WiFiEsp 2.1.2
- Adafruit Unified Sensor 1.0.2
- DHT sensor library 1.3.0
- Arduino ThingsBoard SDK 0.4
- ArduinoJSON 6.10.1
- Arduino Http Client 0.4.0

### Step 3. Prepare and upload a sketch.

Download and open **arduino-dht-esp8266-mqtt.ino** sketch.

**Note** You need to edit following constants and variables in the sketch:

- WIFI_AP - name of your access point
- WIFI_PASSWORD - access point password
- TOKEN - the **$ACCESS_TOKEN** from ThingsBoard configuration step.
- thingsboardServer - ThingsBoard HOST/IP address that is accessible from within your wifi network. Specify "demo.thingsboard.io" if you are using [live demo](https://demo.thingsboard.io/) server.

{% capture tabspec %}arduino-sketch
arduino-dht-esp8266-mqtt,arduino-dht-esp8266-mqtt.ino,c,resources/arduino-dht-esp8266-mqtt.ino,/docs/samples/arduino/resources/arduino-dht-esp8266-mqtt.ino{% endcapture %}
{% include tabs.html %}

Connect your Arduino UNO device via USB cable and select "Arduino/Genuino Uno" port in Arduino IDE. Compile and Upload your sketch to the device using "Upload" button.

After application will be uploaded and started it will try to connect to ThingsBoard node using mqtt client and upload "temperature" and "humidity" timeseries data once per second.

## Troubleshooting

When the application is running you can select "Arduino/Genuino Uno" port in Arduino IDE and open "Serial Monitor" in order to view debug information produced by serial output.

## Data visualization

Finally, open ThingsBoard Web UI. You can access this dashboard by logging in as a tenant administrator. Use

 - login: tenant@thingsboard.org
 - password: tenant

in case of local ThingsBoard installation.

Go to **"Devices"** section and locate **"Arduino UNO Demo Device"**, open device details and switch to **"Latest telemetry"** tab.
If all is configured correctly you should be able to see latest values of *"temperature"* and *"humidity"* in the table.

![image](/images/samples/arduino/temperature/attributes.png)

After, open **"Dashboards"** section then locate and open **"Arduino DHT22: Temperature & Humidity Demo Dashboard"**.
As a result, you will see two time-series charts and two digital gauges displaying temperature and humidity level (similar to dashboard image in the introduction).

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
