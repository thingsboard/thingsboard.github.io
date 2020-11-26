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
