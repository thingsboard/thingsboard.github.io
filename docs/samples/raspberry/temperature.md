---
layout: docwithnav
title: Temperature upload over MQTT using Raspberry Pi and DHT22 sensor
description: ThingsBoard IoT Platform sample for temperature data upload over MQTT using Raspberry Pi and DHT22 sensor.

---

* TOC
{:toc}

## Introduction
{% include templates/what-is-thingsboard.md %}

This sample application performs collection of temperature and humidity values produced by [DHT22 sensor](https://www.adafruit.com/product/385) and further visualization on the real-time web dashboard.
Collected data is pushed via MQTT to ThingsBoard server for storage and visualization.
The purpose of this application is to demonstrate ThingsBoard [data collection API](/docs/user-guide/telemetry/) and [visualization capabilities](/docs/user-guide/visualization/).

The DHT22 sensor is connected to [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi).
Raspberry Pi offers a complete and self-contained Wi-Fi networking solution.
Raspberry Pi push data to ThingsBoard server via MQTT protocol by using [paho mqtt](https://eclipse.org/paho/clients/python/) python library.
Data is visualized using built-in customizable dashboard. 
The application that is running on Raspberry Pi is written in Python which is quite simple and easy to understand.

The video below demonstrates the final result of this tutorial.

<br>
<br>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/-26bxb90tt0" frameborder="0" allowfullscreen></iframe>
    </div>
</div>
<br>
<br>

Once you complete this sample/tutorial, you will see your sensor data on the following dashboard.

![image](/images/samples/esp8266/temperature/dashboard.gif)

{% include templates/prerequisites.md %}

## List of hardware and pinouts

 - [Raspberry Pi 3](https://www.aliexpress.com/item/Raspberry-Pi-Model-B-Featuring-the-ARM1176JZF-S-Running-at-700MHz-with-512MB-of-RAM-version/2008093537.html?spm=2114.01010208.3.186.mgDFUO&ws_ab_test=searchweb0_0,searchweb201602_2_10065_10068_10000009_10084_10083_10080_10082_10081_10060_10062_10056_503_10055_10054_10059_10099_10078_501_10079_426_10103_10073_10102_10096_10052_10053_10108_10050_10107_10051_10106,searchweb201603_3,afswitch_3&btsid=2b2a0772-e248-4fa1-a79c-941b5c410deb)

  ![image](/images/samples/raspberry/RaspberryPi3.jpg)

 - [DHT22 sensor](https://www.aliexpress.com/item/1pcs-DHT22-digital-temperature-and-humidity-sensor-Temperature-and-humidity-module-AM2302-replace-SHT11-SHT15/32316036161.html?spm=2114.03010208.3.49.aZvfaG&ws_ab_test=searchweb0_0,searchweb201602_2_10065_10068_10084_10083_10080_10082_10081_10060_10061_10062_10056_10055_10054_10059_10099_10078_10079_10093_426_10073_10103_10102_10096_10052_10050_10051,searchweb201603_6&btsid=28d9ee9a-283a-4e97-af7b-a7e530490916)

  ![image](/images/samples/arduino/temperature/dht22-pinout.png)

 - Resistor (between 4.7K and 10K)
  
 - Breadboard 
  
 - 2 female-to-female jumper wires
 
 - 10 female-to-male jumper wires
 
 - 3 male-to-male jumper wire  
 
## Wiring schemes

DHT-22 Pin|Raspberry Pi Pin
-----------|-----------
DHT-22 Data|Raspberry Pi GPIO 4
DHT-22 VCC |Raspberry Pi 3.3V
DHT-22 GND (-)|Raspberry Pi GND

Finally, place a resistor (between 4.7K and 10K) between pin number 1 and 2 of the DHT sensor.

The following picture summarizes the connections for this project:

![image](/images/samples/raspberry/temperature/schema.png)
 
{% include templates/thingsboard-configuration.md %}

### Provision your device

This step contains instructions that are necessary to connect your device to ThingsBoard.

Open ThingsBoard Web UI (http://localhost:8080) in browser and login as tenant administrator

 - login: tenant@thingsboard.org
 - password: tenant
 
Goto "Devices" section. Click "+" button and create a device with the name "DHT22 Demo Device". 

![image](/images/samples/raspberry/temperature/device.png)

Once device created, open its details and click "Manage credentials".
Copy auto-generated access token from the "Access token" field. Please save this device token. It will be referred to later as **$ACCESS_TOKEN**.

![image](/images/samples/raspberry/temperature/credentials.png)


Click "Copy Device ID" in device details to copy your device id to the clipboard.
Paste your device id to some place, this value will be used in further steps.

### Provision your dashboard

Download the dashboard file using this [**link**](/docs/samples/raspberry/resources/dht22_temp_dashboard_v2.json). 
Use import/export [**instructions**](/docs/user-guide/ui/dashboards/#dashboard-importexport) to import the dashboard to your ThingsBoard instance.

## Programming the Raspberry Pi

### MQTT library installation

The following command will install MQTT Python library:

```bash
sudo pip install paho-mqtt
```

### Adafruit DHT library installation

Install python-dev package:

```bash
sudo apt-get install python-dev
```

Downloading and install the Adafruit DHT library:

```bash
git clone https://github.com/adafruit/Adafruit_Python_DHT.git
cd Adafruit_Python_DHT
sudo python setup.py install
```

### Application source code

Our application consists of a single python script that is well documented. 
You will need to modify **THINGSBOARD_HOST** constant to match your ThingsBoard server installation IP address or hostname.
Use "demo.thingsboard.io" if you are using [live demo](https://demo.thingsboard.io/) server.

The value of **ACCESS_TOKEN** constant corresponds to sample DHT22 demo device.
If you are using [live demo](https://demo.thingsboard.io/) server - [get the access token](/docs/user-guide/ui/devices/#manage-device-credentials) for pre-provisioned "DHT22 Demo Device".

{% capture tabspec %}python-script
mqtt-dht22,mqtt-dht22.py,python,resources/mqtt-dht22.py,/docs/samples/raspberry/resources/mqtt-dht22.py{% endcapture %}
{% include tabs.html %}

### Running the application

This simple command will launch the application:

```bash
python mqtt-dht22.py
```

## Data visualization

Finally, open ThingsBoard Web UI. You can access this dashboard by logging in as a tenant administrator.

In case of local installation:
 
 - login: tenant@thingsboard.org
 - password: tenant

In case of live-demo server:
 
 - login: your live-demo username (email)
 - password: your live-demo password
 
See **[live-demo](/docs/user-guide/live-demo/)** page for more details how to get your account.
  
Go to **"Devices"** section and locate **"DHT22 Demo Device"**, open device details and switch to **"Latest telemetry"** tab. 
If all is configured correctly you should be able to see latest values of *"temperature"* and *"humidity"* in the table.

![image](/images/samples/raspberry/temperature/attributes.png)

After, open **"Dashboards"** section then locate and open **"DHT22: Temperature & Humidity Demo Dashboard"**. 
As a result you will see two digital gauges and two time-series charts displaying temperature and humidity level (similar to dashboard image in the introduction).

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

