---
layout: docwithnav

---

* TOC
{:toc}

## Introduction

This sample application shows capability to track GPS location of LinkIt ONE device and further visualization on the map. 
It performs collection of latitude and longitude values produced by GPS module. 
Collected data is pushed to Thingsboard for storage and visualization. 
The purpose of this application is to demonstrate Thingsboard data collection API and visualization capabilities.

The GPS module is built-in module of [LinkIt ONE](http://wiki.seeed.cc/LinkIt_ONE/). 
LinkIt ONE pushes data to Thingsboard server via MQTT protocol by using [PubSubClient](https://github.com/knolleary/pubsubclient) library for Arduino. 
Data is visualized using map widget which is part of customizable dashboard. 
The application that is running on LinkIt ONE is written using Arduino SDK which is quite simple and easy to understand.

## Prerequisites

This tutorial was prepared for Windows OS users. However it is possible to run it on other OS (Linux or MacOS).
 
You will need to have Thingsboard server up and running. 
Use following [guide](/docs/user-guide/install/docker-windows/) to install Thingsboard on Windows. 

## List of hardware

 - [LinkIt One](https://www.seeedstudio.com/LinkIt-ONE-p-2017.html) 
   
   GPS and WIFI Antenna are shipped with board.
 
## Configuring Thingsboard

### Provision your device

This step contains instructions that are necessary to connect your device to Thingsboard.

Open Thingsboard Web UI (http://localhost:8080) in browser and login as tenant administrator

 - login: tenant@thingsboard.org
 - password: tenant
 
Goto "Devices" section. Click "+" button and create device with name "LinkIt One Demo Device". 

![image](/images/samples/linkit-one/gps/device.png)

Once device created, open its details and click "Manage credentials".
Enter "LINKITONE_DEMO_TOKEN" in "Access token" field and click "Save".

![image](/images/samples/linkit-one/gps/credentials.png)


Click "Copy Device ID" in device details to copy your device id to clipboard.
Paste your device id to some place, this value will be used in further steps.

### Provision your dashboard

This step contains instructions that are necessary to provision new dashboard with map widgets to Thingsboard.

Open "Docker Quickstart Terminal" and download file containing demo dashboard JSON:

```bash
curl -L http://thingsboard.io/docs/samples/linkit-one/resources/linkit_one_gps_dashboard.json > linkit_one_gps_dashboard.json
```

Update dashboard configuration with your device Id (obtained in previous step) by issuing the following command:

```bash
sed -i "s/{DEVICE_ID}/<your device id>/" linkit_one_gps_dashboard.json
```

Obtain JWT token by issuing login POST command:

```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username":"tenant@thingsboard.org", "password":"tenant"}' 'http://localhost:8080/api/auth/login'
```

You will receive response in the following format:

```json
{"token":"$YOUR_JSON_TOKEN", "refreshToken": "$REFRESH_TOKEN"}
```

copy $YOUR_JSON_TOKEN to some place. **Note** that it will be valid for 15 minutes by default.

Execute dashboard upload command:

```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Authorization: Bearer $YOUR_JSON_TOKEN' -d "@linkit_one_gps_dashboard.json" 'http://localhost:8080/api/dashboard'
```

## Programming the LinkIt One device

If you already familiar with basics of LinkIt One programming using Arduino IDE you can skip the following step and proceed with step 2.

### Step 1. LinkIt ONE and Arduino IDE setup.
In order to start programming LinkIt One device you will need Arduino IDE installed and all related libraries. Please follow this [guide](http://labs.mediatek.com/site/global/developer_tools/mediatek_linkit/get-started/windows_os_stream/install/index.gsp) in order to install the Arduino IDE and LinkIt One SDK:

It's recommended to update your firmware by following [this guide](http://labs.mediatek.com/site/global/developer_tools/mediatek_linkit/get-started/windows_os_stream/update_firmware/index.gsp).
To try your first LinkIt One sample, please follow [this guide](http://labs.mediatek.com/site/global/developer_tools/mediatek_linkit/get-started/windows_os_stream/configure/index.gsp).

### Step 2. PubSubClient library installation.

Open Arduino IDE and go to **Sketch -> Include Library -> Manage Libraries**. Find PubSubClient by Nick O'Leary and install it. 

**Note** that this tutorial was tested with PubSubClient 2.6.

Download and open **gps_tracker.ino** sketch. 

**Note** You need to edit following constants and variables in the sketch:

 - WIFI_AP - name of your access point
 - WIFI_PASSWORD - access point password
 - WIFI_AUTH - choose one of LWIFI_OPEN, LWIFI_WPA, or LWIFI_WEP.
 - thingsboardServer - Thingsboard HOST/IP address that is accessable within your wifi network.

{% capture tabspec %}gps-arduino
gps,gps_tracker.ino,c,resources/gps_tracker.ino,/docs/samples/linkit-one/resources/gps_tracker.ino{% endcapture %}
{% include tabs.html %}

Connect your LinkIt One device via USB cable and select Serial Debug COM port in Arduino IDE. Compile and Upload your sketch to device using "Upload" button.

After application will be uploaded and started it will try to connect to Thingsboard node using mqtt client and upload "latitude" and "longitude" attributes once per second.

## Troubleshooting

When application is running you can connect your device to Serial Debug COM port in Arduino IDE and open "Serial Monitor" in order to view debug information produced by serial output.

## Data visualization

Finally, open Thingsboard Web UI. You can access this dashboard by logging in as a tenant administrator:

 - login: tenant@thingsboard.org
 - password: tenant
  
Go to **"Devices"** section and locate **"LinkIt One Demo Device"**, open device details and switch to **"Attributes"** tab. 
If all is configured correctly you should be able to see *"latitude"*, *"longitude"* and battery status attributes and theirs latest values in the table.

![image](/images/samples/linkit-one/gps/attributes.png)

After, open **"Dashboards"** section then locate and open **"LinkIt One GPS Tracking Demo Dashboard"**. 
As a result you will see the map widget with pointer indicating your device location and battery level widget.

![image](/images/samples/linkit-one/gps/dashboard.png)

## Next steps

Browse other [samples](/docs/samples) or explore guides related to main Thingsboard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.

{% include templates/feedback.md %}
 
{% include socials.html %}
