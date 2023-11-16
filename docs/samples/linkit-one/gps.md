---
layout: docwithnav
title: GPS data upload and visualization using LinkIt ONE and ThingsBoard
description: ThingsBoard IoT Platform sample for GPS data upload and visualization using LinkIt ONE

---

* TOC
{:toc}

## Introduction
{% include templates/what-is-thingsboard.md %}

This sample application shows the capability to track GPS location of LinkIt ONE device and perform further visualization on the map. 
It performs collection of latitude and longitude values produced by GPS module. 
Collected data is pushed to ThingsBoard for storage and visualization.
The purpose of this application is to demonstrate ThingsBoard data collection API and visualization capabilities.

The GPS module is a built-in module of [LinkIt ONE](https://wiki.seeedstudio.com/LinkIt_ONE/). 
LinkIt ONE pushes data to ThingsBoard server via MQTT protocol by using [PubSubClient](https://github.com/knolleary/pubsubclient) library for Arduino.
Data is visualized using the map widget which is a part of a customizable dashboard. 
The application that is running on LinkIt ONE is written using Arduino SDK which is quite simple and easy to understand.

Once you complete this sample/tutorial, you will see your device GPS and battery data on the following dashboard.

![image](/images/samples/linkit-one/gps/dashboard.png)

{% include templates/prerequisites.md %}

This tutorial was prepared for Windows OS users. However, it is possible to run it on other OS (Linux or MacOS).
 
## List of hardware

 - [LinkIt One](https://www.seeedstudio.com/LinkIt-ONE-p-2017.html) 
   
   GPS and WIFI Antenna are shipped with a board.
 
{% include templates/thingsboard-configuration.md %}

### Provision your device

This step contains instructions that are necessary to connect your device to ThingsBoard.

Open ThingsBoard Web UI (http://localhost:8080) in browser and login as tenant administrator

 - login: tenant@thingsboard.org
 - password: tenant
 
Go to "Devices" section. Click "+" button and create a device with the name "LinkIt One Demo Device". 

![image](/images/samples/linkit-one/gps/device.png)

Once device created, open its details and click "Manage credentials".

Copy auto-generated access token from the "Access token" field. Please save this device token. It will be referred to later as **$ACCESS_TOKEN**.

![image](/images/samples/linkit-one/gps/credentials.png)


Click "Copy Device ID" in device details to copy your device id to the clipboard.
Paste your device id to some place, this value will be used in further steps.

### Provision your dashboard

Download the dashboard file using this [**link**](/docs/samples/linkit-one/resources/linkit_one_gps_dashboard_v2.json). 
Use import/export [**instructions**](/docs/user-guide/ui/dashboards/#dashboard-importexport) to import the dashboard to your ThingsBoard instance.

## Programming the LinkIt One device

If you already familiar with basics of LinkIt One programming using Arduino IDE you can skip the following step and proceed with step 2.

### Step 1. LinkIt ONE and Arduino IDE setup.

In order to start programming LinkIt One device, you will need Arduino IDE installed and all related libraries. Please follow this [guide](https://github.com/MediaTek-Labs) in order to install the Arduino IDE and LinkIt One SDK:

### Step 2. PubSubClient library installation.

Open Arduino IDE and go to **Sketch -> Include Library -> Manage Libraries**. Find PubSubClient by Nick O'Leary and install it. 

**Note** that this tutorial was tested with PubSubClient 2.6.

Download and open **gps_tracker.ino** sketch. 

**Note** You need to edit following constants and variables in the sketch:

 - WIFI_AP - name of your access point
 - WIFI_PASSWORD - access point password
 - WIFI_AUTH - choose one of LWIFI_OPEN, LWIFI_WPA, or LWIFI_WEP.
 - TOKEN - the **$ACCESS_TOKEN** from ThingsBoard configuration step.
 - thingsboardServer - ThingsBoard HOST/IP address that is accessible within your wifi network. Specify "demo.thingsboard.io" if you are using [live demo](https://demo.thingsboard.io/) server.

{% capture tabspec %}gps-arduino
gps,gps_tracker.ino,c,resources/gps_tracker.ino,/docs/samples/linkit-one/resources/gps_tracker.ino{% endcapture %}
{% include tabs.html %}

Connect your LinkIt One device via USB cable and select Serial Debug COM port in Arduino IDE. Compile and Upload your sketch to the device using "Upload" button.

After application will be uploaded and started it will try to connect to ThingsBoard node using mqtt client and upload "latitude" and "longitude" attributes once per second.

## Troubleshooting

When the application is running you can connect your device to Serial Debug COM port in Arduino IDE and open "Serial Monitor" in order to view debug information produced by serial output.

## Data visualization

Finally, open ThingsBoard Web UI. You can access this dashboard by logging in as a tenant administrator. Use

 - login: tenant@thingsboard.org
 - password: tenant

in case of local ThingsBoard installation.
  
Go to **"Devices"** section and locate **"LinkIt One Demo Device"**, open device details and switch to **"Attributes"** tab. 
If all is configured correctly you should be able to see *"latitude"*, *"longitude"* and battery status attributes and their latest values in the table.

![image](/images/samples/linkit-one/gps/attributes.png)

After, open **"Dashboards"** section then locate and open **"LinkIt One GPS Tracking Demo Dashboard"**. 
As a result, you will see the map widget with a pointer indicating your device location and a battery level widget (similar to dashboard image in the introduction).

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


