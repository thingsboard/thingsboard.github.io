---
layout: docwithnav
title: ThingsBoard Edge. Getting started with ThingsBoard Professional Edition
description: Getting started with ThingsBoard Edge - ThingsBoard Professional Edition 

step1:
    0:
        image: /images/edge/getting-started/step-1-item-1.png 
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Device groups page.'
    1:
        image: /images/edge/getting-started/step-1-item-2.png  
        title: 'Open "All" device group.'
    2:
        image: /images/edge/getting-started/step-1-item-3.png 
        title: 'Click on the "Add Device"("+") icon in the top right corner of the table.'
    3:
        image: /images/edge/getting-started/step-1-item-4.png 
        title: 'Input device name. For example, "My New Device". No other changes required at this time. Click "Add" to add the device.'
    4:
        image: /images/edge/getting-started/step-1-item-5.png 
        title: 'Now your device should be listed first, since table sort devices using created time by default. '

step2:
    0:
        image: /images/edge/getting-started/step-2-item-1-pe.png
        title: 'Login to your ThingsBoard <b>Professional Edition</b> instance and open Device groups page.'
    1:
        image: /images/edge/getting-started/step-2-item-2-pe.png
        title: 'Click on the "Open" icon of the "All" device group to see the list of devices.'
    2:
        image: /images/edge/getting-started/step-2-item-3-pe.png  
        title: 'Verify that "My New Device" device was created on the ThingsBoard Professional Edition cloud.'
    3:
        image: /images/edge/getting-started/step-2-item-4-pe.png
        title: 'Click on the "My New Device" device and navigate to the "Relations" tab.'
    4:
        image: /images/edge/getting-started/step-2-item-5-pe.png
        title: 'Change direction "From" to "To" and see relation to the edge that has provisioned this device.'

step31:
    0:
        image: /images/edge/getting-started/step-1-item-1.png
        title: 'Open Device groups page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/edge/getting-started/step-1-item-2.png  
        title: 'Open "All" device group.'
    2:
        image: /images/edge/getting-started/step-3-item-1.png  
        title: 'Click on the device row in the table to open device details.'
    3:
        image: /images/edge/getting-started/step-3-item-2.png  
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

step32:
    0:
        image: /images/edge/getting-started/step-3-item-1.png
        title: 'Click on the device row in the table to open device details.'
    1:
        image: /images/edge/getting-started/step-3-item-3.png
        title: 'Navigate to the "Latest telemetry" tab.'

step4:
    0:
        image: /images/edge/getting-started/step-4-item-1.png
        title: 'Open Rule chains page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/edge/getting-started/step-4-item-2.png
        title: 'Open Edge Root Rule Chain.'
    2:
        image: /images/edge/getting-started/step-4-item-3.png
        title: '<b>Push to cloud</b> rule node pushes temperature timeseries data to the cloud once it is stored in local database.'

step51:
    0:
        image: /images/edge/getting-started/step-51-item-1-pe.png
        title: 'Open <b>Dashboard groups</b> page in the ThingsBoard <b>Professional Edition</b> server. Click on the "+" icon in the top right corner "Add entity group".'
    1:
        image: /images/edge/getting-started/step-51-item-2-pe.png
        title: 'Input dashboard group name. For example, "Edge dashboards". Click "Add" to add the dashboard group.'
    2:
        image: /images/edge/getting-started/step-51-item-3-pe.png
        title: 'Click on the "Open" icon to open new dashboard group.'
    2:
        image: /images/edge/getting-started/step-51-item-4-pe.png
        title: 'Click on the "+" icon to create new dashboard.'
    3:
        image: /images/edge/getting-started/step-51-item-5-pe.png
        title: 'Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard.'
    4:
        image: /images/edge/getting-started/step-51-item-6-pe.png
        title: 'Now your dashboard should be listed first, since table sort dashboards using created time by default. Click on the "Open dashboard" icon.'

step52:
    0:
        image: /images/edge/getting-started/step-52-item-1-pe.png
        title: 'Enter edit mode. Click on the pencil button in the bottom right corner.'
    1:
        image: /images/edge/getting-started/step-52-item-2-pe.png
        title: 'Click "Entity Aliases" icon in the top right part of the screen. You will see empty list of Entity aliases.'
    2:
        image: /images/edge/getting-started/step-52-item-3-pe.png
        title: 'Click "Add alias".'
    3:
        image: /images/edge/getting-started/step-52-item-4-pe.png
        title: 'Input alias name, for example "MyDevice". Select "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on the device.'        
    4:
        image: /images/edge/getting-started/step-52-item-5-pe.png
        title: 'Click "Add" and then "Save".'        
    5:
        image: /images/edge/getting-started/step-52-item-6-pe.png
        title: 'Finally, Click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.'

step53:
    0:
        image: /images/edge/getting-started/step-53-item-1-pe.png
        title: 'Enter edit mode. Click on the "Add new widget" button.'
    1:
        image: /images/edge/getting-started/step-53-item-2-pe.png
        title: 'Select "Cards" widget bundle. Select "Latest values" tab. Click on the header of the Entities widget. The "Add Widget" window will appear.'
    2:
        image: /images/edge/getting-started/step-53-item-3-pe.png
        title: 'Click "Add" to add the data source. Widget may have multiple data sources, but we will use only one in this case.'
    3:
        image: /images/edge/getting-started/step-53-item-4-pe.png
        title: 'Select "MyDevice" entity alias. Then click on the input field to the right. The auto-complete with available data points will appear. Select "temperature" data point and click "Add".'        
    4:
        image: /images/edge/getting-started/step-53-item-5-pe.png
        title: 'Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. You can also play with the advanced settings if you edit the widget.'

step54:
    0:
        image: /images/edge/getting-started/step-54-item-1-pe.png
        title: 'Enter Edit mode.'
    1:
        image: /images/edge/getting-started/step-54-item-2-pe.png
        title: 'Click "Add new widget" icon in the bottom right corner of the screen.'
    2:
        image: /images/edge/getting-started/step-54-item-3-pe.png
        title: 'Click "Create new widget" icon.'
    3:
        image: /images/edge/getting-started/step-54-item-4-pe.png
        title: 'Select "Charts" bundle. Scroll down and click on the "Timeseries - Flot" chart widget.'        
    4:
        image: /images/edge/getting-started/step-54-item-5-pe.png
        title: 'Click "Add datasource" button.'
    5:
        image: /images/edge/getting-started/step-54-item-6-pe.png
        title: 'Select "MyDevice" Alias. Select "temperature" key. Click "Add".'
    6:
        image: /images/edge/getting-started/step-54-item-7-pe.png
        title: 'Drag and Drop you widget to desired space. Resize the widget.'
    7:
        image: /images/edge/getting-started/step-54-item-8-pe.png
        title: 'Publish different telemetry values multiple times Step 2. Note that the widget displays only one minute of data by default.'
    8:
        image: /images/edge/getting-started/step-54-item-9-pe.png
        title: 'Enter Edit mode. Open time selection window. Change the interval and aggregation function. Update the time window. Finally, apply changes.'

step6PE:
    0:
        image: /images/edge/getting-started/step-6-item-1-pe.png
        title: 'Open "Edge groups" page in the ThingsBoard <b>Professional Edition</b> server and open "All" group.'
    1:
        image: /images/edge/getting-started/step-6-item-2-pe.png
        title: 'Click on the <b>Dashboards</b> button on the edge instance to open dashboard groups that are already assigned to this edge.'
    2:
        image: /images/edge/getting-started/step-6-item-3-pe.png
        title: 'Click on the "+" icon to assign dashboard groups.'
    3:
        image: /images/edge/getting-started/step-6-item-4-pe.png
        title: 'Select "Edge dashboards" group in the list. Now this group and all its dashboards are going to be provisioned to the edge.'


step6Edge:
    0:
        image: /images/edge/getting-started/step-6-item-5-edge.png
        title: 'Open "Dashboard groups" page in the ThingsBoard <b>Edge</b> UI. Click on the "All" dashboard group to see "My New Dashboard" in the list. Open "My New Dashboard".'    
    1:
        image: /images/edge/getting-started/step-6-item-6-edge.png
        title: 'Verify that you see the same widgets that you have added on the cloud and temperature readings from the device.'

mqttWindows:
    0:
        image: /images/edge/getting-started/mqtt-windows-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below.'
    1:
        image: /images/edge/getting-started/mqtt-windows-item-2.png
        title: 'Populate the topic name and payload. Make sure the payload is a valid JSON document. Click "Publish" button.'

---

* TOC
{:toc}

## Introduction

The goal of this tutorial is to demonstrate the basic usage of the most popular ThingsBoard Edge features. You will learn how to:

- Connect devices to ThingsBoard Edge;
- Provision devices from ThingsBoard Edge to ThingsBoard Professional Edition server (cloud); 
- Push data from devices to ThingsBoard Edge and propagate this data to ThingsBoard Professional Edition server (cloud);
- Build real-time end-user dashboards on cloud and provision them to edge;

We will connect and visualize data from the temperature sensor to keep it simple.

{% include templates/edge/getting-started/prerequisites-pe.md %}

{% include templates/edge/getting-started/step-1.md %}

## Step 2. Provision Device from ThingsBoard Edge to ThingsBoard Professional Edition server (cloud)

Provision device from the edge to the cloud done automatically, so no additional actions required. 
Once device has been created on the edge, it's going to be automatically created on the cloud.

If you are interested in more details how to provision different entities from the cloud to the edge please refer to the [Professional Edition edge management](/docs/edge/config/pe/management/) for more details.

To see provisioned device please open ThingsBoard  **Professional Edition** UI using the URL: [http://localhost:8080](http://localhost:8080).

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

{% include templates/edge/getting-started/step-3.md %}

## Step 4. Push data from ThingsBoard Edge to ThingsBoard Professional Edition server (cloud)

{% include templates/edge/getting-started/step-4.md %}

## Step 5. Create Dashboard

{% include templates/edge/getting-started/step-5.md %}

## Step 6. Provision Dashboard to ThingsBoard Edge

To provision dashboard to edge we need to open edge dashboards on ThingsBoard  **Professional Edition** server and assign the newly created dashboard. Once this dashboard is assigned we are going to open ThingsBoard **Edge** UI to see the same dashboard on the edge.

If you are interested in more details how to provision different entities from the cloud to the edge please refer to [Professional Edition edge management](/docs/edge/config/pe/management/) for more details.

Please open ThingsBoard  **Professional Edition** using the URL [http://localhost:8080](http://localhost:8080) or [Live Demo](https://demo.thingsboard.io):

{% include images-gallery.html imageCollection="step6PE" showListImageTitles="true" %}

Let's open ThingsBoard **Edge** UI using the URL [http://localhost:18080](http://localhost:18080) to verify that dashboard was provisioned.

{% include images-gallery.html imageCollection="step6Edge" showListImageTitles="true" %}

Congratulations! Dashboard has been provisioned to the edge. Now you can send new telemetry reading, and it will immediately appear in the chart on the edge.

## Next steps

{% assign currentGuide = "GettingStartedGuide" %}{% include templates/edge/guides-banner-edge.md %}

## Your feedback

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.

