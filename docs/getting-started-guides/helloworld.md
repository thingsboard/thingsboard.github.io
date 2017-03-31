---
layout: docwithnav
assignees:
- ashvayka
title: Getting Started
description: Getting started with Thingsboard open-source IoT platform and simulated IoT devices

---

* TOC
{:toc}


## Introduction

The goal of this guide is for you to collect and visualize some IoT device data using Thingsboard. 
This guide will let you:

 - Provision your device
 - Manage device credentials
 - Push data from device to your Thingsboard instance using MQTT, CoAP or HTTP protocols
 - Create dashboard to visualize the data
  
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/dIKXFxpfB_Q" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Setup and Requirements

If you don't have access to a running Thingsboard instance, use either [Live Demo](https://demo.thingsboard.io/signup) or 
[Installation Guide](/docs/user-guide/install/installation-options/) 
to fix this.

## Demo account

All Thingsboard installations are equipped with demo account that simplifies first user experience.
This demo account contains several pre-provisioned devices, dashboards, rules and plugins installed.
Please note that you are free to delete this account in production deployment.

You can use Thingsboard device emulators to simulate real-life devices and play-around with server-side APIs, data visualization and processing logic.
   
We will use this emulators in advanced tutorials, however, the for the purpose of this guide, we will just use pre-provisioned tenant administrator account.
 
## Login as a tenant administrator 

The first step is to login to administration Web UI.

If you are using local Thingsboard installation you can login to administration Web UI using default account:
 
  - Username: **tenant@thingsboard.org**
  - Password: **tenant**

If you are using Live Demo you can login to [Live Demo](https://demo.thingsboard.io/login) server using Tenant Administrator account (the one that you created during sign-up).
  
{:refdef: style="text-align: center;"}
![image](/images/helloworld/login.png)
{: refdef}

## Provision your device

Open Devices panel and click on "+" button in the bottom-right corner of the page.

{:refdef: style="text-align: center;"}
![image](/images/helloworld/devices.png)
{: refdef}

Populate and save device name (for example, "SN-001"). It will be referred to later as $DEVICE_NAME.
Device names must be unique. Populating device name based on unique serial number or other device identifier is generally a good idea.
Click "Add" button will add corresponding device card to the panel.

{:refdef: style="text-align: center;"}
![image](/images/helloworld/add-device.png)
{: refdef}


## Manage device credentials

Click on the "device card" we have created in the previous step. This action will open "device details" panel.

Click on the "manage credentials" button on the top of the panel. This action will open popup window with device credentials.

{:refdef: style="text-align: center;"}
![image](/images/helloworld/manage-credentials.png)
{: refdef}

Device credentials window will show auto-generated device access token that you can change. 
Please save this device token. It will be referred to later as **$ACCESS_TOKEN**.

{:refdef: style="text-align: center;"}
![image](/images/helloworld/device-credentials.png)
{: refdef}


Congratulations! You have just provisioned your first device! 
Now you can push some data from this device to Thingsboard for visualization and analysis.

## Pushing data from the device

In order to simplify this guide, we will push data using MQTT, CoAP or HTTP protocol from your local PC.
Please refer to [samples](/docs/samples/) for advanced examples of for various hardware platforms.

### Client-side libraries installation

Install preferred MQTT (Mosquitto or MQTT.js), CoAP (CoAP.js) or HTTP (cURL) client using following commands.

{% capture tabspec %}mqtt-client
ClientA,MQTT.js,shell,resources/node-mqtt.sh,/docs/getting-started-guides/resources/node-mqtt.sh
ClientB,Mosquitto (Ubuntu),shell,resources/mosquitto-ubuntu.sh,/docs/getting-started-guides/resources/mosquitto-ubuntu.sh
ClientC,Mosquitto (macOS),shell,resources/mosquitto-macos.sh,/docs/getting-started-guides/resources/mosquitto-macos.sh
ClientD,CoAP.js,shell,resources/node-coap.sh,/docs/getting-started-guides/resources/node-coap.sh
ClientE,cURL (Ubuntu),shell,resources/curl-ubuntu.sh,/docs/getting-started-guides/resources/curl-ubuntu.sh
ClientF,cURL (macOS),shell,resources/curl-macos.sh,/docs/getting-started-guides/resources/curl-macos.sh{% endcapture %}
{% include tabs.html %}

### Sample data files

**Create some folder** to store all necessary files for this tutorial.
Download to this folder or create the following data files:

 - {% include ghlink.html content='**attributes-data.json**' ghlink='/docs/getting-started-guides/resources/attributes-data.json' %} - contains two device attributes values: firmware version and serial number.
 - {% include ghlink.html content='**telemetry-data.json**' ghlink='/docs/getting-started-guides/resources/telemetry-data.json' %} - contains three time-series values: temperature, humidity and active flag.
 
Please note that data in this files is basically in key-value format. You can use your own keys and values. 
See [MQTT](/docs/reference/mqtt-api/#key-value-format), [CoAP](/docs/reference/coap-api/#key-value-format)
or [HTTP](/docs/reference/http-api/#key-value-format) protocol reference for more details. 

{% capture tabspec %}data
A,attributes-data.json,json,resources/attributes-data.json,/docs/getting-started-guides/resources/attributes-data.json
B,telemetry-data.json,json,resources/telemetry-data.json,/docs/getting-started-guides/resources/telemetry-data.json{% endcapture %}
{% include tabs.html %}

### Pushing data using MQTT, CoAP or HTTP

Download the following files to **previously created folder** according to the preferred client:

 - **MQTT.js (MQTT)**
   - {% include ghlink.html content='mqtt-js.sh' ghlink='/docs/getting-started-guides/resources/mqtt-js.sh' %} (Ubuntu & MacOS) or {% include ghlink.html content='mqtt-js.bat' ghlink='/docs/getting-started-guides/resources/mqtt-js.bat' %} (Windows)
   - {% include ghlink.html content='public.js' ghlink='/docs/getting-started-guides/resources/public.js' %}
 - **Mosquitto (MQTT)**
   - {% include ghlink.html content='mosquitto.sh' ghlink='/docs/getting-started-guides/resources/mosquitto.sh' %}
 - **CoAP.js (CoAP)**
   - {% include ghlink.html content='coap-js.sh' ghlink='/docs/getting-started-guides/resources/coap-js.sh' %}
 - **cURL (HTTP)**
   - {% include ghlink.html content='curl.sh' ghlink='/docs/getting-started-guides/resources/curl.sh' %}

If you are using shell script (*.sh) make sure that it is executable:

```shell
chnod +x *.sh
```

Before executing script don't forget to: 

 - replace **$ACCESS_TOKEN** with one from **Device credentials** window.
 - replace **$THINGSBOARD_HOST** with either **127.0.0.1** (in case of local installation) or **demo.thingsboard.io** (in case of live-demo).

Finally execute corresponding *.sh or *.bat script to push data to the server.

Below are tabs with content of provided scripts. 
 
{% capture tabspec %}mqtt-telemetry-upload
A,MQTT.js (Ubuntu & MacOS),shell,resources/mqtt-js.sh,/docs/getting-started-guides/resources/mqtt-js.sh
B,MQTT.js (Windows),shell,resources/mqtt-js.bat,/docs/getting-started-guides/resources/mqtt-js.bat
C,publish.js,shell,resources/publish.js,/docs/getting-started-guides/resources/publish.js
D,Mosquitto (MQTT),shell,resources/mosquitto.sh,/docs/getting-started-guides/resources/mosquitto.sh
E,CoAP.js (CoAP),shell,resources/coap-js.sh,/docs/getting-started-guides/resources/coap-js.sh
F,cURL (HTTP),shell,resources/curl.sh,/docs/getting-started-guides/resources/curl.sh{% endcapture %}
{% include tabs.html %}

## Observe device data on the Web UI

Once you execute commands listed above you should see [attributes](/docs/user-guide/attributes/) and latest [telemetry data](/docs/user-guide/telemetry/) in corresponding device detail tabs.

{:refdef: style="text-align: center;"}
![image](/images/helloworld/device-attributes.png)
{: refdef}


{:refdef: style="text-align: center;"}
![image](/images/helloworld/device-telemetry.png)
{: refdef}

## Create new dashboard to visualize the data
 
The easiest way to create new dashboard is to select device attributes and show them on widget

{:refdef: style="text-align: center;"}
![image](/images/helloworld/attributes-selected.png)
{: refdef}

Once you click on "Show on widget" button, you will see a "widget preview" panel where you can

 - Select widget bundle
 - Select preferred widget
 - Add widget to new or existing dashboard
 
{:refdef: style="text-align: center;"}
![image](/images/helloworld/widget-selected.png)
{: refdef}

Let's add our first widget to new dashboard named "SN-001 Dashboard"

{:refdef: style="text-align: center;"}
![image](/images/helloworld/add-widget.png)
{: refdef}

Let's also add widget to visualize temperature    

{:refdef: style="text-align: center;"}
![image](/images/helloworld/temperature-selected.png)
{: refdef}

Click **Show on widget** and select **Digital gauges** bundle. Use carousel to select thermometer widget as shown below. 

{:refdef: style="text-align: center;"}
![image](/images/helloworld/termometer-widget.png)
{: refdef}

**Please note** that in this case we will add widget to already existing dashboard. We will also select "Open dashboard" option to see results of our work.

{:refdef: style="text-align: center;"}
![image](/images/helloworld/add-termometer.png)
{: refdef}

Finally, we are able to see our new dashboard. Now we can edit the dashboard to

 - Configure dashboard settings
 - Tune widget sizes and layout
 - Modify advanced settings of individual widget
 - Add new widgets or remove existing
 - Widgets import/export  
 
{:refdef: style="text-align: center;"}
![image](/images/helloworld/new-dashboard.png)
{: refdef}

 
## Next steps

Explore guides related to main Thingsboard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.


## Your feedback

Don't hesitate to star Thingsboard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.
