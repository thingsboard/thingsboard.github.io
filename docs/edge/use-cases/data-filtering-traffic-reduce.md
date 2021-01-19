---
layout: docwithnav
title: Data filtering and traffic reduce
description: ThingsBoard Edge use case #2

provisionDevicesEdge:
    0:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-1.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Device groups page.'
    1:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-2.png
        title: 'Open "All" device group.'
    2:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-3.png
        title: 'Click on the "Add Device"("+") icon in the top right corner of the table.'
    3:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-4.png
        title: 'Input device name. For example, "In-vehicle monitoring system". Click "Add" to add the device.'
    4:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-5.png
        title: 'Now your "In-vehicle monitoring system" device should be listed first, since table sort devices using created time by default.

provisionDevicesCE:    
    0:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-6.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Devices page.'
    1:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-7.png
        title: 'Make sure that "In-vehicle monitoring system" device is in the devices list.'
        
rootRuleChainPreview:
    0:
        image: /images/edge/use-cases/data-filtering/root-rule-chain.png

updateRootRuleChainCE:
    0:
        image: /images/edge/use-cases/data-filtering/update-root-item-1.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Rule chain templates page.'
    1:
        image: /images/edge/use-cases/data-filtering/update-root-item-2.png
        title: 'Open default "Edge Root Rule Chain".'
    2:
        image: /images/edge/use-cases/data-filtering/update-root-item-3.png
        title: 'Filter node by "script" word and drag script node (Transformation) to rule chain.'
    3:
        image: /images/edge/use-cases/data-filtering/update-root-item-4.png
        title: 'Input node name, e.g. "Filter vehicle data" and add <b>JavaScript</b> code (you can copy and paste it from the snippet above) to send further only 'distance' readings. Click "Add" to proceed.'
    4:
        image: /images/edge/use-cases/data-filtering/update-root-item-5.png
        title: 'Drag connection from "Save Timeseries" to newly added script node.'
    5:
        image: /images/edge/use-cases/data-filtering/update-root-item-6.png
        title: 'Select "Success" from the list and click "Add" button.'
    6:
        image: /images/edge/use-cases/data-filtering/update-root-item-7.png
        title: 'Drag connection from "Filter vehicle data" to the "Push to cloud" node  the list and click "Add" button.'
    7:
        image: /images/edge/use-cases/data-filtering/update-root-item-8.png
        title: 'Select "Success" from the list and click "Add" button.'
    8:
        image: /images/edge/use-cases/data-filtering/update-root-item-9.png
        title: 'Click "Apply changes" to save current progress.'

copyAccessTokenDevice:
    0:
        image: /images/edge/use-cases/data-filtering/copy-access-token-item-1.png
        title: 'Open Device groups page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/edge/use-cases/data-filtering/copy-access-token-item-2.png
        title: 'Open "All" device group.'
    2:
        image: /images/edge/use-cases/data-filtering/copy-access-token-item-3.png
        title: 'Click on the <b>In-vehicle monitoring system</b> device row in the table to open device details.'
    3:
        image: /images/edge/use-cases/data-filtering/copy-access-token-item-4.png  
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

verifyDeviceTelemetryEdge:
    0:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-1.png
        title: 'Open Device groups page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-2.png
        title: 'Open "All" device group.'
    2:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-3.png
        title: 'Click on the <b>In-vehicle monitoring system</b> device row in the table to open device details.'
    3:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-4.png
        title: 'Click on the tab <b>Latest telemetry</b> to show the latest readings of the device.'

verifyDeviceTelemetryCE:
    0:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-5.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Devices page.'
    1:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-6.png
        title: 'Click on the row <b>In-vehicle monitoring system</b> to open device details.'
    2:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-7.png
        title: 'Click on the tab <b>Latest telemetry</b> to verify that only telemetry with distance readings is being sent by the edge to the cloud.'
---
* TOC
{:toc}

## Use case
Let's assume you have a vehicle with mounted IoT monitoring system connected to ThingsBoard **Edge**. The In-vehicle monitoring system has 10 sensors:
* Distance
* Gas consumption
* Vehicle speed
* Engine temperature
* Ambient temperature
* Tire temperature
* Pressure in each tire (4x)

ThingsBoard Edge has the following responsibilities:
 * **Collects readings** from 10 sensors
 * **Pushes to the cloud ThingsBoard Community Edition** only distance readings

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.

## Prerequisites

{% include templates/edge/use-cases/ce-prerequisites.md %}

## Create device

First we will create a new device "In-vehicle monitoring system" on the edge.

Please open ThingsBoard **Edge** UI using the URL: [http://localhost:18080](http://localhost:18080).

{% include templates/edge/bind-port-changed-banner.md %}

{% include images-gallery.html imageCollection="provisionDevicesEdge" showListImageTitles="true" %}
 
Please open ThingsBoard **CE** using the URL [http://localhost:8080](http://localhost:8080) or [Live Demo](https://demo.thingsboard.io):

{% include images-gallery.html imageCollection="provisionDevicesCE" showListImageTitles="true" %}

## Configure edge rule engine to push to the cloud filtered data

We will update "Edge Root Rule Chain" that will be saving on the edge 10 sensor readings. 
In the rule chain we add rule node that transforms incoming messages and pushes to the cloud message only with distance readings.
Here is the final configuration of the edge root rule chain:

{% include images-gallery.html imageCollection="rootRuleChainPreview" %}

In the next steps we are going to create **JavaScript** node to filter data. 
JavaScript for script node will create an empty object *newMsg*, add property "distance" with corresponding value from the "In-vehicle monitoring system" and send further new object as a new message:

{% highlight javascript %}
var newMsg = {};
newMsg.distance = msg.distance;
return {msg: newMsg, metadata: metadata, msgType: msgType}; {% endhighlight %}

Please use this snippet in the next steps, if required.

Here are the steps to update default edge "Root Rule Chain" to the rule chain above:

{% include images-gallery.html imageCollection="updateRootRuleChainCE" showListImageTitles="true" %}

Now let's open ThingsBoard **Edge** UI to see updated root rule chain:

{% include images-gallery.html imageCollection="updateRootRuleChainEdge" showListImageTitles="true" %}

## Connect "In-vehicle monitoring system" to edge and post telemetry
To connect "In-vehicle monitoring system" to the ThingsBoard Edge you need to get device credentials first.
ThingsBoard supports different device credentials. We recommend to use default auto-generated credentials which is access token for this guide.

Please open ThingsBoard **Edge** UI using the URL: [http://localhost:18080](http://localhost:18080).

{% include templates/edge/bind-port-changed-banner.md %}

{% include images-gallery.html imageCollection="copyAccessTokenDevice" showListImageTitles="true" %}

We will use simple commands to generate random telemetry for the device **In-vehicle monitoring system** and publish to the ThingsBoard **Edge** by the MQTT protocol.

Please download following script to your local folder:
- [**mqtt-generator.py**](/docs/edge/use-cases/resources/)

Before running the scripts, please modify **mqtt-generator.py** accordingly:

- Replace **YOUR_ACCESS_TOKEN** with **In-vehicle monitoring system** device access token copied from the steps above. 

- Replace **YOUR_TB_EDGE_HOST** with your ThingsBoard Edge host. For example, **localhost**.

- Replace **YOUR_TB_EDGE_MQTT_PORT** with your ThingsBoard Edge MQTT port. For example, **11883** or **1883**.

Open the terminal and install MQTT Python library:
```bash
sudo pip install paho-mqtt
```

Go to the folder that contains Python script and launch an application by this command:

```bash
python mqtt-generator.py
```

Congratulations! You have successfully sent to the device **In-vehicle monitoring system** 10 readings.

Open ThingsBoard **Edge** UI and verify that device successfully receives data:

{% include images-gallery.html imageCollection="verifyDeviceTelemetryEdge" showListImageTitles="true" %}

Open ThingsBoard **CE** UI and verify that edge successfully pushes data to the cloud:

{% include images-gallery.html imageCollection="verifyDeviceTelemetryCE" showListImageTitles="true" %}

## Create dashboard (optional step)

Also we will create a dashboard that displays how many miles has been traveled and how many are left to change the oil in the vehicle.

Please open ThingsBoard **CE** to start creating new dashboard:

{% include images-gallery.html imageCollection="createDashboardCE" showListImageTitles="true" %}

## Next Steps

{% assign currentGuide = "ManageAlarmsAndRpcRequestsOnEdgeDevices" %}{% include templates/edge/guides-banner-edge.md %}
