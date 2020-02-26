---
layout: docwithnav
assignees:
- ashvayka
title: Getting Started
description: Getting started with ThingsBoard open-source IoT platform and simulated IoT devices

---

* TOC
{:toc}


## Introduction

The goal of this tutorial is to demonstrate the basic usage of the most popular ThingsBoard features. 
You will learn how to:

 - Provision Assets and Devices in the system;
 - Define relations between Assets and Devices;
 - Push data from a device to ThingsBoard;
 - Build real-time end-user Dashboards;
 - Define thresholds and trigger alarms;
 - Push notification about new alarms over email.
 
The tutorial is based on a popular facility monitoring use-case. 
We will show how to monitor temperature in a different parts of the building,
raise alarms when temperature exceeds certain threshold and visualize collected data and alarms.
 
## Video tutorial 
 
We recommend you to review the following video tutorial. 
All the resources used in this tutorial are listed below for your convenience.
 
&nbsp; 
  
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/TwJJbxwQX5k" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Tutorial resources

#### Live Demo and the installation guides

If you don't have access to a running ThingsBoard instance, 
use either [Live Demo](https://demo.thingsboard.io/signup) or
[Installation Guide](/docs/user-guide/install/installation-options/)
to fix this. 

In case you decided to install your own ThingsBoard server and loaded the demo data ( "--loadDemo" option, according to the installation guides), 
the list of default accounts (login/password) and device credentials is located [here](/docs/samples/demo-account/). 

#### Pushing data from the device

In order to simplify this guide, we will push data using HTTP, MQTT or CoAP protocol from your local PC. 
Please review [connect your device](/docs/guides#AnchorIDConnectYourDevice) guides for all available connectivity solutions and options and 
[hardware samples](/docs/guides#AnchorIDHardwareSamples) to learn how to connect various hardware platforms to ThingsBoard.

#### Client-side libraries installation

Install preferred HTTP (cURL), MQTT (Mosquitto or MQTT.js) or CoAP (CoAP.js) client using following commands.

{% capture tabspec %}mqtt-client
ClientA,cURL (Windows),shell,resources/curl-win.sh,/docs/getting-started-guides/resources/curl-win.sh
ClientB,cURL (macOS),shell,resources/curl-macos.sh,/docs/getting-started-guides/resources/curl-macos.sh
ClientC,cURL (Ubuntu),shell,resources/curl-ubuntu.sh,/docs/getting-started-guides/resources/curl-ubuntu.sh
ClientD,MQTT.js,shell,resources/node-mqtt.sh,/docs/getting-started-guides/resources/node-mqtt.sh
ClientE,Mosquitto (Ubuntu),shell,resources/mosquitto-ubuntu.sh,/docs/getting-started-guides/resources/mosquitto-ubuntu.sh
ClientF,Mosquitto (macOS),shell,resources/mosquitto-macos.sh,/docs/getting-started-guides/resources/mosquitto-macos.sh
ClientG,CoAP.js,shell,resources/node-coap.sh,/docs/getting-started-guides/resources/node-coap.sh{% endcapture %}
{% include tabs.html %}

#### Sample cURL command used in the video tutorial

This command works for Windows, Ubuntu and macOS, assuming that cURL tool is installed. 

```bash
# Please replace $HOST_NAME and $ACCESS_TOKEN with corresponding values.
curl -v -X POST -d "{\"temperature\": 25}" $HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

# For example, $HOST_NAME in case of live demo server:
curl -v -X POST -d "{\"temperature\": 25}" https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

# For example, $HOST_NAME in case of local installation:
curl -v -X POST -d "{\"temperature\": 25}" http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```

#### Sample generator script

```javascript
var msg = { temperature: +(Math.random()*5 + 25).toFixed(1)};
var metadata = {};
var msgType = "POST_TELEMETRY_REQUEST";

return { msg: msg, metadata: metadata, msgType: msgType };
```

#### Rule Engine guides

[Rule Engine overview](/docs/user-guide/rule-engine-2-0/overview/) - learn the Rule Engine basics and architecture.

[Rule Engine guides](/docs/guides#AnchorIDDataProcessing) - learn how to use ThingsBoard Rule Engine.

#### Mail settings

Use this [guide](/docs/user-guide/ui/mail-settings/#step-31-sendgrid-configuration-example) to configure SendGrid or use any other SMTP server available.

#### Other sample data files

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

#### Pushing data using MQTT, CoAP or HTTP

Download the following files to **previously created folder** according to the preferred client:

 - **MQTT.js (MQTT)**
   - {% include ghlink.html content='mqtt-js.sh' ghlink='/docs/getting-started-guides/resources/mqtt-js.sh' %} (Ubuntu & MacOS) or {% include ghlink.html content='mqtt-js.bat' ghlink='/docs/getting-started-guides/resources/mqtt-js.bat' %} (Windows)
   - {% include ghlink.html content='publish.js' ghlink='/docs/getting-started-guides/resources/publish.js' %}
 - **Mosquitto (MQTT)**
   - {% include ghlink.html content='mosquitto.sh' ghlink='/docs/getting-started-guides/resources/mosquitto.sh' %}
 - **CoAP.js (CoAP)**
   - {% include ghlink.html content='coap-js.sh' ghlink='/docs/getting-started-guides/resources/coap-js.sh' %}
 - **cURL (HTTP)**
   - {% include ghlink.html content='curl.sh' ghlink='/docs/getting-started-guides/resources/curl.sh' %}

If you are using a shell script (*.sh) make sure that it is executable:

```shell
chmod +x *.sh
```

Before executing script don't forget to: 

 - replace **$ACCESS_TOKEN** with one from **Device credentials** window.
 - replace **$THINGSBOARD_HOST** with either **127.0.0.1** (in case of local installation) or **demo.thingsboard.io** (in case of live-demo).

Finally, execute corresponding *.sh or *.bat script to push data to the server.

Below are tabs with the content of the scripts provided. 
 
{% capture tabspec %}mqtt-telemetry-upload
A,MQTT.js (Ubuntu & MacOS),shell,resources/mqtt-js.sh,/docs/getting-started-guides/resources/mqtt-js.sh
B,MQTT.js (Windows),shell,resources/mqtt-js.bat,/docs/getting-started-guides/resources/mqtt-js.bat
C,publish.js,shell,resources/publish.js,/docs/getting-started-guides/resources/publish.js
D,Mosquitto (MQTT),shell,resources/mosquitto.sh,/docs/getting-started-guides/resources/mosquitto.sh
E,CoAP.js (CoAP),shell,resources/coap-js.sh,/docs/getting-started-guides/resources/coap-js.sh
F,cURL (HTTP),shell,resources/curl.sh,/docs/getting-started-guides/resources/curl.sh{% endcapture %}
{% include tabs.html %}

## ThingsBoard Community Edition education course
 
 <div id="video">  
     <div id="video_wrapper">
         <iframe src="https://www.youtube.com/embed/videoseries?list=PLYEKB_XwLCZJ6T8RPLTjRwMw0eoabpEKO" frameborder="0" allowfullscreen></iframe>
     </div>
 </div>
 <p></p>

  
## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/guides-banner.md %}

## Your feedback

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.
