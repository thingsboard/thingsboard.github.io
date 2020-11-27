---
layout: docwithnav
assignees:
- ashvayka
title: Getting Started
description: Getting started with ThingsBoard open-source IoT platform and simulated IoT devices
step1:
    0:
        image: /images/helloworld/hello-world-step-1-item-1.png 
        title: 'Login to your ThingsBoard instance and open Devices page.'
    1:
        image: /images/helloworld/hello-world-step-1-item-2.png 
        title: 'Click on the "+" icon in the top right corner of the table and then select "Add new device".'
    2:
        image: /images/helloworld/hello-world-step-1-item-3.png 
        title: 'Input device name. For example, "My New Device". No other changes required at this time. Click "Add" to add the device.'
    3:
        image: /images/helloworld/hello-world-step-1-item-4.png 
        title: 'Now your device should be listed first, since table sort devices using created time by default. '
        
step2:
    0:
        image: /images/helloworld/hello-world-step-2-item-1.png 
        title: 'Click on the device row in the table to open device details'
    1:
        image: /images/helloworld/hello-world-step-2-item-2.png 
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

step3:
    0:
        image: /images/helloworld/hello-world-step-2-item-1.png 
        title: 'Click on the device row in the table to open device details'
    1:
        image: /images/helloworld/hello-world-step-3-item-3.png 
        title: 'Navigate to the telemetry tab.'
        
step31:
    0:
        image: /images/helloworld/hello-world-step-31-item-1.png 
        title: 'Open Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard".'
    1:
        image: /images/helloworld/hello-world-step-31-item-2.png 
        title: 'Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard.'
    2:
        image: /images/helloworld/hello-world-step-31-item-3.png 
        title: 'Now your dashboard should be listed first, since table sort dashboards using created time by default. Click on the "Open dashboard" icon.'
        
step32:
    0:
        image: /images/helloworld/hello-world-step-32-item-1.png 
        title: 'Enter edit mode. Click on the pencil button in the bottom right corner.'
    1:
        image: /images/helloworld/hello-world-step-32-item-2.png 
        title: 'Click "Entity Aliases" icon in the top right part of the screen. You will see empty list of Entity aliases.'
    2:
        image: /images/helloworld/hello-world-step-32-item-3.png 
        title: 'Click "Add alias".'
    3:
        image: /images/helloworld/hello-world-step-32-item-4.png 
        title: 'Input alias name, for example "MyDevice". Select "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on the device.'        
    4:
        image: /images/helloworld/hello-world-step-32-item-5.png 
        title: 'Click "Add" and then "Save".'        
    5:
        image: /images/helloworld/hello-world-step-32-item-6.png 
        title: 'Finally, Click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.'

step33:
    0:
        image: /images/helloworld/hello-world-step-33-item-1.png 
        title: 'Enter edit mode. Click on the "Add new widget" button. '
    1:
        image: /images/helloworld/hello-world-step-33-item-2.png 
        title: 'Select "Cards" widget bundle. Select "Latest values" tab. Click on the header of the Entities widget. The "Add Widget" window will appear.'
    2:
        image: /images/helloworld/hello-world-step-33-item-3.png 
        title: 'Click "Add" to add the data source. Widget may have multiple data sources, but we will use only one in this case.'
    3:
        image: /images/helloworld/hello-world-step-33-item-4.png 
        title: 'Select "MyDevice" entity alias. Then click on the input field to the right. The auto-complete with available data points will appear. Select "temperature" data point and click "Add".'        
    4:
        image: /images/helloworld/hello-world-step-33-item-5.png 
        title: 'Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. You can also play with the advanced settings if you edit the widget.'
        
step34:
    0:
        image: /images/helloworld/hello-world-step-34-item-1.png 
        title: 'Enter Edit mode.'
    1:
        image: /images/helloworld/hello-world-step-34-item-2.png 
        title: 'Click "Add new widget" icon in the bottom right corner of the screen.'
    2:
        image: /images/helloworld/hello-world-step-34-item-3.png 
        title: 'Click "Create new widget" icon.'
    3:
        image: /images/helloworld/hello-world-step-34-item-4.png 
        title: 'Select "Charts" bundle. Scroll down and click on the "Timeseries - Flot" chart widget.'        
    4:
        image: /images/helloworld/hello-world-step-34-item-5.png 
        title: 'Click "Add datasource" button.'
    5:
        image: /images/helloworld/hello-world-step-34-item-6.png 
        title: 'Select "MyDevice" Alias. Select "temperature" key. Click "Add".'
    6:
        image: /images/helloworld/hello-world-step-34-item-7.png 
        title: 'Drag and Drop you widget to desired space. Resize the widget. Apply changes.'
    7:
        image: /images/helloworld/hello-world-step-34-item-8.png 
        title: 'Publish different telemetry values multiple times Step 2. Note that the widget displays only one minute of data by default.'
    8:
        image: /images/helloworld/hello-world-step-34-item-9.png 
        title: 'Enter Edit mode. Open time selection window. Change the interval and aggregation function. Update the time window and apply changes.'

step35:
    0:
        image: /images/helloworld/hello-world-step-34-item-1.png 
        title: 'Enter Edit mode.'
    1:
        image: /images/helloworld/hello-world-step-34-item-2.png 
        title: 'Click "Add new widget" icon in the bottom right corner of the screen.'
    2:
        image: /images/helloworld/hello-world-step-34-item-3.png 
        title: 'Click "Create new widget" icon.'
    3:
        image: /images/helloworld/hello-world-step-35-item-3.png 
        title: 'Select "Alarm widgets" bundle. Click on the "Alarms" widget header.'        
    4:
        image: /images/helloworld/hello-world-step-35-item-4.png 
        title: 'Select "Entity" alarm source and "MyDevice" alias. Click "Add"'
    5:
        image: /images/helloworld/hello-world-step-35-item-5.png 
        title: 'Scroll down and locate new "Alarms" widget. Drag and Drop widget to the top right corner of the dashboard.'
    6:
        image: /images/helloworld/hello-world-step-35-item-6.png 
        title: 'Resize the widget and apply changes.'

step4:
    0:
        image: /images/helloworld/hello-world-step-4-item-1.png 
        title: 'Navigate to device profiles page.'
    1:
        image: /images/helloworld/hello-world-step-4-item-2.png 
        title: 'Click default profile row. This will open device profile details.'
    2:
        image: /images/helloworld/hello-world-step-4-item-3.png 
        title: 'Select "Alarm Rules" tab and toggle edit mode.'
    3:
        image: /images/helloworld/hello-world-step-4-item-4.png 
        title: 'Click "Add alarm rule".'        
    4:
        image: /images/helloworld/hello-world-step-4-item-5.png 
        title: 'Specify alarm type and click "+" icon to add alarm rule condition.'
    5:
        image: /images/helloworld/hello-world-step-4-item-6.png 
        title: 'Click "Add key filter" button to specify condition.'
    6:
        image: /images/helloworld/hello-world-step-4-item-7.png 
        title: 'Select key type, input key name, select value type and click "Add".'
    7:
        image: /images/helloworld/hello-world-step-4-item-8.png 
        title: 'Select operation and input threshold value. Click "Add".'
    8:
        image: /images/helloworld/hello-world-step-4-item-9.png 
        title: 'Click "Save".'
    9:
        image: /images/helloworld/hello-world-step-4-item-10.png 
        title: 'Finally, click "Apply changes".'        

step5:
    0:
        image: /images/helloworld/hello-world-step-5-item-1.png 
        title: 'Notice new temperature telemetry cause new active alarm.'
    1:
        image: /images/helloworld/hello-world-step-5-item-2.png 
        title: 'User may acknowledge and clear the alarms.'     
        
step7:
    0:
        image: /images/helloworld/hello-world-step-7-item-1.png 
        title: 'Navigate to Customers page.'
    1:
        image: /images/helloworld/hello-world-step-7-item-2.png 
        title: 'Click "+" to add a customer.'
    2:
        image: /images/helloworld/hello-world-step-7-item-3.png 
        title: 'Add customer title and click "Add".'
    3:
        image: /images/helloworld/hello-world-step-71-item-1.png 
        title: 'Open Devices page. Click "Assign to customer" for "My New Device".'
    4:
        image: /images/helloworld/hello-world-step-71-item-2.png 
        title: 'Select "My New Customer" and click "Assign".'
    5:
        image: /images/helloworld/hello-world-step-71-item-3.png 
        title: 'Open Dashboards. Click "Manage assigned customers".'
    6:
        image: /images/helloworld/hello-world-step-71-item-4.png 
        title: 'Select "My New Customer" and click "Update".'
    7:
        image: /images/helloworld/hello-world-step-7-item-4.png 
        title: 'Navigate back to "Customers" page and click "manage customer users" icon.'        
    8:
        image: /images/helloworld/hello-world-step-7-item-5.png 
        title: 'Click "Add user" icon.'        
    9:
        image: /images/helloworld/hello-world-step-7-item-6.png 
        title: 'Specify email that you will use to login as a customer user and click "Add".'
    10:
        image: /images/helloworld/hello-world-step-7-item-7.png 
        title: 'Copy the activation link and save it to a safe place. You will use it later to set the password.'
    11:
        image: /images/helloworld/hello-world-step-71-item-7.png 
        title: 'Open user details'          
    12:
        image: /images/helloworld/hello-world-step-71-item-5.png 
        title: 'Toggle edit mode'
    13:
        image: /images/helloworld/hello-world-step-71-item-6.png 
        title: 'Select default dashboard and check "Always fullscreen". Apply changes.'  
    14:
        image: /images/helloworld/hello-world-step-7-item-8.png 
        title: 'Use activation link to set the password. Click "Create Password". You will automatically login as a customer user.'
    15:
        image: /images/helloworld/hello-world-step-7-item-9.png 
        title: 'You have logged in as a Customer User. You may browse the data and acknowledge/clear alarms.'              
                           
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
 
{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %} 

You may also use:
 * [Bulk provisioning](/docs/user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
 * [Device provisioning](/docs/user-guide/device-provisioning/) to allow device firmware to automatically provision the device, so you don't need to configure each device manually; 
 * [REST API](/docs/api/) to provision devices and other entities programmatically;

## Step 2. Connect device

To connect the device you need to get the device credentials first. 
ThingsBoard support different device credentials. We recommend to use default auto-generated credentials which is access token for this guide.

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

Now you are ready to publish telemetry data on behalf of your device. 
We will use simple commands to publish data over HTTP or MQTT in this example.

{% capture connectdevicetogglespec %}
HTTP<small>Linux, macOS or Windows</small>%,%http%,%templates/helloworld/http.md%br%
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/helloworld/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/helloworld/mqtt-windows.md%br%
CoAP<small>Linux or macOS</small>%,%coap%,%templates/helloworld/coap.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

Once you have successfully published the "temperature" readings, you should immediately see them in the Device Telemetry Tab:

{% include images-gallery.html imageCollection="step3" showListImageTitles="true" %}

## Step 3. Create Dashboard

We will create a dashboard and add most popular widgets. See instructions below. 

### Step 3.1 Create Empty Dashboard

{% include images-gallery.html imageCollection="step31" showListImageTitles="true" %}

### Step 3.2 Add Entity Alias

Alias is a reference to single entity or group of entities that is used in the widgets.
Alias may be static or dynamic. For simplicity, we will use "Single entity" alias reference one and only one entity ("My New Device" in our case).
It is possible to configure an alias that reference multiple devices. For example, devices of a certain type or related to a certan asset. 
You may learn more about different aliases [here](/docs/user-guide/ui/aliases/).

{% include images-gallery.html imageCollection="step32" showListImageTitles="true" %}   

### Step 3.3 Add Table Widget

To add the table widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

{% include images-gallery.html imageCollection="step33" showListImageTitles="true" %}

Congratulations! You have added first widget. Now you can send new telemetry reading and it will immediately appear in the table. 

### Step 3.4 Add Chart Widget

To add the chart widget we need to select it from the widget library. 
Chart widget displays multiple historical values of the same data key ("temperature" in our case).
We should also configure the time window to use the chart widget.

{% include images-gallery.html imageCollection="step34" showListImageTitles="true" %}

Congratulations! You have added chart widget. Now you can send new telemetry reading and it will immediately appear in the chart. 

### Step 3.5 Add Alarm Widget

{% include images-gallery.html imageCollection="step35" showListImageTitles="true" %}

Congratulations! You have added alarm widget. Not it's time to configure alarm rules and raise some alarms. 

### Step 4. Configure Alarm Rules

We will use [alarm rules](/docs/user-guide/device-profiles/#alarm-rules) feature to raise alarm when temperature reading is greater than 25 degrees.
For this purpose, we should edit device profile and add new alarm rule. 
The "My New Device" is using "Default" device profile.
We recommend creating dedicated [device profiles](/docs/user-guide/device-profiles/) for each corresponding device type but will skip this step for simplicity.

{% include images-gallery.html imageCollection="step4" showListImageTitles="true" %}

### Step 5. Create Alarm

Now our alarm rule is active (see [Step 4](/docs/getting-started-guides/helloworld/#step-4-configure-alarm-rules)), 
and we should send new telemetry on behalf of the device (see [Step 2](/docs/getting-started-guides/helloworld/#step-2-connect-device)) to trigger the alarm.
Note that temperature value should be 26 or higher to raise the alarm. Once we send new temperature reading, we should immediately see new alarm in our dashboard.

{% include images-gallery.html imageCollection="step5" showListImageTitles="true" %}

### Step 6. Alarm notifications

It is quite easy to configure email or sms notifications for alarms. We recommend to review alarm rule [examples](/docs/user-guide/device-profiles/#alarm-rules) 
and documentation about [alarm notifications](/docs/user-guide/device-profiles/#notifications-about-alarms). 
 
**Note**: At the moment ThingsBoard supports AWS SNS and Twilio to send SMS. 
Both services are non free and require you to create an account. However, you may integrate with other SMS/EMAIL gateways using [REST API call](https://thingsboard.io/docs/user-guide/rule-engine-2-0/tutorials/get-weather-using-rest-api-call/#node-d-external-rest-api-call-node) node.  

### Step 7. Assign Dashboard to Customer

One of the important ThingsBoard features is the ability to assign Dashboards to Customers. 
You may assign different devices to different customers. Then, you may create a Dashboard(s) and assign it to multiple customers.
Each customer user will see his own devices and will not be able to see devices or any other data that belong to a different customer.

Let's create "My New Customer" and add a user for this customer. Please see instruction below:

{% include images-gallery.html imageCollection="step7" showListImageTitles="true" %}


Now, let's assign our device and dashboard to the customer. Please see instruction below:



 




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
