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

The goal of this tutorial is to demonstrate the basic usage of the most popular ThingsBoard features. You will learn how to:

 - Connect devices to ThingsBoard;
 - Push data from the device to ThingsBoard;
 - Build real-time end-user dashboards;
 - Define thresholds and trigger alarms;
 - Push notification about new alarms over email, sms or other systems.

We will connect and visualize data from temperature sensor to keep it simple. 
 
{% include templates/prerequisites.md %}

## Step 1. Provision Device

For simplicity, we will provision device manually using the UI. 
 
* Login to your ThingsBoard instance and open Devices page.
* You may notice some demo devices in the list. We will create new one. 
Click on the "+" icon in the top right corner of the table and then select "Add new device". 
* Input device name. For example, "My New Device". No other changes required at this time. Click "Add" to add the device.
* Now your device should be listed first, since table sort devices using created time by default. 

{% capture gallery %}
/images/helloworld/hello-world-step-1-item-1.png
/images/helloworld/hello-world-step-1-item-2.png
/images/helloworld/hello-world-step-1-item-3.png
/images/helloworld/hello-world-step-1-item-4.png
{% endcapture %} 
{% include images-gallery.html%}

You may also use:
 * [Bulk provisioning](/docs/user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
 * [Device provisioning](/docs/user-guide/device-provisioning/) to allow device firmware to automatically provision the device, so you don't need to configure each device manually; 
 * [REST API](/docs/api/) to provision devices and other entities programmatically;

## Step 2. Connect device

To connect the device you need to get the device credentials first. 
ThingsBoard support different device credentials. We recommend to use default auto-generated credentials which is access token for this guide.

* Click on the device row in the table to open device details
* Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.

{% capture gallery %}
/images/helloworld/hello-world-step-2-item-1.png
/images/helloworld/hello-world-step-2-item-2.png
{% endcapture %} 
{% include images-gallery.html%}

Now you are ready to publish telemetry data on behalf of your device. 
We will use simple commands to publish data over HTTP or MQTT in this example.

{% capture connectdevicetogglespec %}
HTTP<small>Linux, macOS or Windows</small>%,%http%,%templates/helloworld/http.md%br%
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/helloworld/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/helloworld/mqtt-windows.md%br%
CoAP<small>Linux or macOS</small>%,%coap%,%templates/helloworld/coap.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

Once you have successfully published the "temperature" readings, you should immediately see them in the Device Telemetry Tab:

* Click on the device row in the table to open device details
* Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.

{% capture gallery %}
/images/helloworld/hello-world-step-2-item-1.png
/images/helloworld/hello-world-step-3-item-3.png
{% endcapture %} 
{% include images-gallery.html%}

## Step 3. Create Dashboard

We will create a dashboard and add most popular widgets. See instructions below. 

### Step 3.1 Create Empty Dashboard

* Open Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard".
* Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard.
* Now your dashboard should be listed first, since table sort dashboards using created time by default. Click on the "Open dashboard" icon.  

{% capture gallery %}
/images/helloworld/hello-world-step-31-item-1.png
/images/helloworld/hello-world-step-31-item-2.png
/images/helloworld/hello-world-step-31-item-3.png
{% endcapture %} 
{% include images-gallery.html%}

### Step 3.2 Add Entity Alias

Alias is a reference to single entity or group of entities that is used in the widgets.
Alias may be static or dynamic. For simplicity, we will use "Single entity" alias reference one and only one entity ("My New Device" in our case).   

* Enter edit mode. Click on the pencil button in the bottom right corner. 
* Click "Entity Aliases" icon in the top right part of the screen. You will see empty list of Entity aliases.
* Click "Add alias".
* Input alias name, for example "MyDevice". Select "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on the device.
* Click "Add" and then "Save".
* Finally, Click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again. 

{% capture gallery %}
/images/helloworld/hello-world-step-32-item-1.png
/images/helloworld/hello-world-step-32-item-2.png
/images/helloworld/hello-world-step-32-item-3.png
/images/helloworld/hello-world-step-32-item-4.png
/images/helloworld/hello-world-step-32-item-5.png
/images/helloworld/hello-world-step-32-item-6.png
{% endcapture %} 
{% include images-gallery.html%}

### Step 3.3 Add Table Widget

To add a widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

* Enter edit mode. Click on the "Add new widget" button. 
* Select "Cards" widget bundle. Select "Latest values" tab. Click on the header of the Entities widget. The "Add Widget" window will appear.
* Click "Add" to add the data source. Widget may have multiple data sources, but we will use only one in this case.
* Select "MyDevice" entity alias. Then click on the input field to the right. The auto-complete with available data points will appear. Select "temperature" data point and click "Add".
* Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. You can also play with the advanced settings if you edit the widget.  

Congratulations! You have added first widget.

{% capture gallery %}
/images/helloworld/hello-world-step-33-item-1.png
/images/helloworld/hello-world-step-33-item-2.png
/images/helloworld/hello-world-step-33-item-3.png
/images/helloworld/hello-world-step-33-item-4.png
/images/helloworld/hello-world-step-33-item-5.png
{% endcapture %} 
{% include images-gallery.html%}   

### Step 3.4 Add Chart Widget

### Step 3.5 Add Alarm Widget

### Step 4. Configure Alarm Rules

### Step 5. Configure Alarm Notifications

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
