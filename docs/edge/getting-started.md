---
layout: docwithnav
title: Getting started with ThingsBoard Edge
description: Getting started with ThingsBoard Edge
step1:
    0:
        image: /images/edge/getting-started-step-1-item-1.png 
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Device groups page.'
    1:
        image: /images/edge/getting-started-step-1-item-2.png  
        title: 'Open "All" device group.'
    2:
        image: /images/edge/getting-started-step-1-item-3.png 
        title: 'Click on the "Add Device"("+") icon in the top right corner of the table.'
    3:
        image: /images/edge/getting-started-step-1-item-4.png 
        title: 'Input device name. For example, "My New Device". No other changes required at this time. Click "Add" to add the device.'
    4:
        image: /images/edge/getting-started-step-1-item-5.png 
        title: 'Now your device should be listed first, since table sort devices using created time by default. '

step2:
    0:
        image: /images/edge/getting-started-step-2-item-1.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Devices page.'
    1:
        image: /images/edge/getting-started-step-2-item-2.png  
        title: 'Verify that "My New Device" device was created on the ThingsBoard CE cloud.'
    2:
        image: /images/edge/getting-started-step-2-item-3.png
        title: 'Click on the "My New Device" device and navigate to the "Relations" tab.'
    3:
        image: /images/edge/getting-started-step-2-item-4.png
        title: 'Change direction "From" to "To" and see relation to the edge that has provisioned this device.'

step31:
    0:
        image: /images/edge/getting-started-step-1-item-1.png
        title: 'Open Device groups page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/edge/getting-started-step-1-item-2.png  
        title: 'Open "All" device group.'
    2:
        image: /images/edge/getting-started-step-3-item-1.png  
        title: 'Click on the device row in the table to open device details.'
    3:
        image: /images/edge/getting-started-step-3-item-2.png  
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

step32:
    0:
        image: /images/edge/getting-started-step-3-item-1.png
        title: 'Click on the device row in the table to open device details.'
    1:
        image: /images/edge/getting-started-step-3-item-3.png
        title: 'Navigate to the telemetry tab.'

step4:
    0:
        image: /images/edge/getting-started-step-4-item-1.png
        title: 'Open Rule chains page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/edge/getting-started-step-4-item-2.png
        title: 'Open Edge Root Rule Chain.'
    2:
        image: /images/edge/getting-started-step-4-item-3.png
        title: '<b>Push to cloud</b> rule node pushes temperature timeseries data to the cloud once it is stored in local database.'

step51:
    0:
        image: /images/edge/getting-started-step-51-item-1.png
        title: 'Open <b>Dashboards</b> page in the ThingsBoard <b>CE</b> server. Click on the "+" icon in the top right corner. Select "Create new dashboard".'
    1:
        image: /images/edge/getting-started-step-51-item-2.png
        title: 'Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard.'
    2:
        image: /images/edge/getting-started-step-51-item-3.png
        title: 'Now your dashboard should be listed first, since table sort dashboards using created time by default. Click on the "Open dashboard" icon.'

step52:
    0:
        image: /images/edge/getting-started-step-52-item-1.png
        title: 'Enter edit mode. Click on the pencil button in the bottom right corner.'
    1:
        image: /images/edge/getting-started-step-52-item-2.png
        title: 'Click "Entity Aliases" icon in the top right part of the screen. You will see empty list of Entity aliases.'
    2:
        image: /images/edge/getting-started-step-52-item-3.png
        title: 'Click "Add alias".'
    3:
        image: /images/edge/getting-started-step-52-item-4.png
        title: 'Input alias name, for example "MyDevice". Select "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on the device.'        
    4:
        image: /images/edge/getting-started-step-52-item-5.png
        title: 'Click "Add" and then "Save".'        
    5:
        image: /images/edge/getting-started-step-52-item-6.png
        title: 'Finally, Click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.'

step53:
    0:
        image: /images/edge/getting-started-step-53-item-1.png
        title: 'Enter edit mode. Click on the "Add new widget" button. '
    1:
        image: /images/edge/getting-started-step-53-item-2.png
        title: 'Select "Cards" widget bundle. Select "Latest values" tab. Click on the header of the Entities widget. The "Add Widget" window will appear.'
    2:
        image: /images/edge/getting-started-step-53-item-3.png
        title: 'Click "Add" to add the data source. Widget may have multiple data sources, but we will use only one in this case.'
    3:
        image: /images/edge/getting-started-step-53-item-4.png
        title: 'Select "MyDevice" entity alias. Then click on the input field to the right. The auto-complete with available data points will appear. Select "temperature" data point and click "Add".'        
    4:
        image: /images/edge/getting-started-step-53-item-5.png
        title: 'Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. You can also play with the advanced settings if you edit the widget.'

step54:
    0:
        image: /images/edge/getting-started-step-54-item-1.png
        title: 'Enter Edit mode.'
    1:
        image: /images/edge/getting-started-step-54-item-2.png
        title: 'Click "Add new widget" icon in the bottom right corner of the screen.'
    2:
        image: /images/edge/getting-started-step-54-item-3.png
        title: 'Click "Create new widget" icon.'
    3:
        image: /images/edge/getting-started-step-54-item-4.png
        title: 'Select "Charts" bundle. Scroll down and click on the "Timeseries - Flot" chart widget.'        
    4:
        image: /images/edge/getting-started-step-54-item-5.png
        title: 'Click "Add datasource" button.'
    5:
        image: /images/edge/getting-started-step-54-item-6.png
        title: 'Select "MyDevice" Alias. Select "temperature" key. Click "Add".'
    6:
        image: /images/edge/getting-started-step-54-item-7.png
        title: 'Drag and Drop you widget to desired space. Resize the widget. Apply changes.'
    7:
        image: /images/edge/getting-started-step-54-item-8.png
        title: 'Publish different telemetry values multiple times Step 2. Note that the widget displays only one minute of data by default.'
    8:
        image: /images/edge/getting-started-step-54-item-9.png
        title: 'Enter Edit mode. Open time selection window. Change the interval and aggregation function. Update the time window and apply changes.'

step6:
    0:
        image: /images/edge/getting-started-step-6-item-1.png
        title: 'Open Edge instances page in the ThingsBoard <b>CE</b> server.'
    1:
        image: /images/edge/getting-started-step-6-item-2.png
        title: 'Click on the <b>Dashboards</b> button on the edge instance to open dashboards that are already assigned to this edge.'
    2:
        image: /images/edge/getting-started-step-6-item-3.png
        title: 'Click on the "+" plus icon and select "My New Dashboard" in the list. Now this dashboard is going to be provisioned to the edge.'
    3:
        image: /images/edge/getting-started-step-6-item-4.png
        title: 'Open "Dashboard groups" page in the ThingsBoard <b>Edge</b> UI.'    
    4:
        image: /images/edge/getting-started-step-6-item-5.png
        title: 'Open "All" dashboards group to see "My New Dashboard" in the list. Open "My New Dashboard".'
    5:
        image: /images/edge/getting-started-step-6-item-6.png
        title: 'Verify that you see the same widgets that you have added on the cloud and temperature readings from the device.'

mqttWindows:
    0:
        image: /images/edge/getting-started-step-3-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below.'
    1:
        image: /images/edge/getting-started-step-3-item-2.png
        title: 'Populate the topic name and payload. Make sure the payload is a valid JSON document. Click "Publish" button.'

---

* TOC
{:toc}

## Introduction

The goal of this tutorial is to demonstrate the basic usage of the most popular ThingsBoard Edge features. You will learn how to:

- Connect devices to ThingsBoard Edge;
- Provision devices from ThingsBoard Edge to ThingsBoard CE server (cloud); 
- Push data from devices to ThingsBoard Edge and propagate this data to ThingsBoard CE server (cloud);
- Build real-time end-user dashboards on cloud and provision them to edge;

We will connect and visualize data from the temperature sensor to keep it simple.

{% include templates/edge/prerequisites.md %}

## Step 1. Provision Device

For simplicity, we will provision device manually using the UI.

We are going to provision device on the Edge. Please open ThingsBoard **Edge** UI using the URL: [http://localhost:18080](http://localhost:18080).

{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %}

You may also use:
* [Bulk provisioning](/docs/user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
* [REST API](/docs/api/) to provision devices and other entities programmatically;

## Step 2. Provision Device from ThingsBoard Edge to ThingsBoard CE server (cloud)

Provision device from the edge to the cloud done automatically, so no additional actions required. 
Once device has been created on the edge, it's going to be automatically created on the cloud.

If you are interested in more details how to provision different entities from the cloud to the edge please refer to [CE edge management](/docs/edge/config/ce/management/) or [PE edge management](/docs/edge/config/pe/management/) for more details.

To see provisioned device please open ThingsBoard **CE** UI using the URL: [http://localhost:8080](http://localhost:8080).

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

## Step 3. Connect device

To connect the device you need to get the device credentials first.
ThingsBoard support different device credentials. We recommend to use default auto-generated credentials which is access token for this guide.

{% include images-gallery.html imageCollection="step31" showListImageTitles="true" %}

Now you are ready to publish telemetry data on behalf of your device.
We will use simple commands to publish data over HTTP or MQTT in this example.

{% capture connectdevicetogglespec %}
HTTP<small>Linux, macOS or Windows</small>%,%http%,%templates/edge/getting-started/http.md%br%
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/edge/getting-started/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/edge/getting-started/mqtt-windows.md%br%
CoAP<small>Linux or macOS</small>%,%coap%,%templates/edge/getting-started/coap.md%br%
Other Protocols<small>Modbus, SNMP, LoRaWAN, etc</small>%,%other%,%templates/edge/getting-started/other.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

Once you have successfully published the "temperature" readings, you should immediately see them in the Device Telemetry Tab:

{% include images-gallery.html imageCollection="step32" showListImageTitles="true" %}

## Step 4. Push data from ThingsBoard Edge to ThingsBoard CE server (cloud)

Timeseries data and attributes pushed to the cloud according to the [Edge Rule Engine](/docs/edge/rule-engine/general/).
We will go over default **Edge Root Rule chain** to see how temperature data is going to be pushed from edge to cloud.

If you are interested in more details how to push data from edge to cloud please refer to [Push data from edge to cloud and vise versa](/docs/edge/rule-engine/push-data/) for more details.

{% include images-gallery.html imageCollection="step4" showListImageTitles="true" %}

## Step 5. Create Dashboard

We will create a dashboard and add table and chart widget to see temperature data on cloud and edge. See instructions below.

### Step 5.1 Create Empty Dashboard

{% include images-gallery.html imageCollection="step51" showListImageTitles="true" %}

### Step 5.2 Add Entity Alias

Alias is a reference to single entity or group of entities that is used in the widgets.
Alias may be static or dynamic. For simplicity, we will use "Single entity" alias reference one and only one entity ("My New Device" in our case).
It is possible to configure an alias that reference multiple devices. For example, devices of a certain type or related to a certan asset.
You may learn more about different aliases [here](/docs/user-guide/ui/aliases/).

{% include images-gallery.html imageCollection="step52" showListImageTitles="true" %}

### Step 5.3 Add Table Widget

To add the table widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

{% include images-gallery.html imageCollection="step53" showListImageTitles="true" %}

Congratulations! You have added first widget. Now you can send new telemetry reading and it will immediately appear in the table.

### Step 5.4 Add Chart Widget

To add the chart widget we need to select it from the widget library.
Chart widget displays multiple historical values of the same data key ("temperature" in our case).
We should also configure the time window to use the chart widget.

{% include images-gallery.html imageCollection="step54" showListImageTitles="true" %}

You have added chart widget. Now you can send new telemetry reading and it will immediately appear in the chart. Let's provision this dashboard to the edge to see temperature data from the device on the edge as well. 

## Step 6. Provision Dashboard to ThingsBoard Edge

To provision dashboard to edge we need to open edge dashboards on ThingsBoard **CE** server and assign the newly created dashboard. Once this dashboard is assigned we are going to open ThingsBoard **Edge** UI to see the same dashboard on the edge.

If you are interested in more details how to provision different entities from the cloud to the edge please refer to [CE edge management](/docs/edge/config/ce/management/) or [PE edge management](/docs/edge/config/pe/management/) for more details.

{% include images-gallery.html imageCollection="step6" showListImageTitles="true" %}

Congratulations! Dashboard provisioned to edge. Now you can send new telemetry reading and it will immediately appear in the chart on the edge.

## Next steps

{% assign currentGuide = "GettingStartedGuide" %}{% include templates/edge/guides-banner-edge.md %}

## Your feedback

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.

