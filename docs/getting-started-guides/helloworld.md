---
layout: docwithnav
assignees:
- ashvayka
title: Getting Started with ThingsBoard
description: Getting started with ThingsBoard open-source IoT platform and simulated IoT devices
step1:
    0:
        image: /images/helloworld/hello-world-step-1-item-1.png 
        title: 'Login to your ThingsBoard instance and open the Devices page.'
    1:
        image: /images/helloworld/hello-world-step-1-item-2.png 
        title: 'Click on the "+" icon in the top right corner of the table and then select "Add new device".'
    2:
        image: /images/helloworld/hello-world-step-1-item-3.png 
        title: 'Input device name. For example, "My New Device". No other changes required at this time. Click "Add" to add the device.'
    3:
        image: /images/helloworld/hello-world-step-1-item-4.png 
        title: 'Now your device should be listed first, since the table sort devices using the time of the creation by default. '
        
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
        title: 'Open the Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard".'
    1:
        image: /images/helloworld/hello-world-step-31-item-2.png 
        title: 'Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard.'
    2:
        image: /images/helloworld/hello-world-step-31-item-3.png 
        title: 'Now your dashboard should be listed first, since the table sorts dashboards using the time of the creation by default. Click on the "Open dashboard" icon.'
        
step32:
    0:
        image: /images/helloworld/hello-world-step-32-item-1.png 
        title: 'Enter edit mode. Click on the pencil button in the bottom right corner.'
    1:
        image: /images/helloworld/hello-world-step-32-item-2.png 
        title: 'Click the "Entity Aliases" icon in the top right part of the screen. You will see an empty list of Entity aliases.'
    2:
        image: /images/helloworld/hello-world-step-32-item-3.png 
        title: 'Click "Add alias".'
    3:
        image: /images/helloworld/hello-world-step-32-item-4.png 
        title: 'Input alias name, for example, "MyDevice". Select the "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on it.'        
    4:
        image: /images/helloworld/hello-world-step-32-item-5.png 
        title: 'Click "Add" and then "Save".'        
    5:
        image: /images/helloworld/hello-world-step-32-item-6.png 
        title: 'Finally, click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.'

step33:
    0:
        image: /images/helloworld/hello-world-step-33-item-1.png 
        title: 'Enter edit mode. Click on the "Add new widget" button. '
    1:
        image: /images/helloworld/hello-world-step-33-item-2.png 
        title: 'Select the "Cards" widget bundle. Select the "Latest values" tab. Click on the header of the Entities widget. The "Add Widget" window will appear.'
    2:
        image: /images/helloworld/hello-world-step-33-item-3.png 
        title: 'Click "Add" to add the data source. A widget may have multiple data sources, but we will use only one in this case.'
    3:
        image: /images/helloworld/hello-world-step-33-item-4.png 
        title: 'Select "MyDevice" entity alias. Then click on the input field on the right. The auto-complete with available data points will appear. Select "temperature" data point and click "Add".'        
    4:
        image: /images/helloworld/hello-world-step-33-item-5.png 
        title: 'Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. You can also play with the advanced settings if you would like to edit the widget.'
        
step34:
    0:
        image: /images/helloworld/hello-world-step-34-item-1.png 
        title: 'Enter Edit mode.'
    1:
        image: /images/helloworld/hello-world-step-34-item-2.png 
        title: 'Click the "Add new widget" icon in the bottom right corner of the screen.'
    2:
        image: /images/helloworld/hello-world-step-34-item-3.png 
        title: 'Click the "Create new widget" icon.'
    3:
        image: /images/helloworld/hello-world-step-34-item-4.png 
        title: 'Select the "Charts" bundle. Scroll down and click on the "Timeseries - Flot" chart widget.'        
    4:
        image: /images/helloworld/hello-world-step-34-item-5.png 
        title: 'Click the "Add Datasource" button.'
    5:
        image: /images/helloworld/hello-world-step-34-item-6.png 
        title: 'Select "MyDevice" Alias. Select the "temperature" key. Click "Add".'
    6:
        image: /images/helloworld/hello-world-step-34-item-7.png 
        title: 'Drag and Drop your widget to the desired space. Resize the widget. Apply changes.'
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
        title: 'Click the "Add new widget" icon in the bottom right corner of the screen.'
    2:
        image: /images/helloworld/hello-world-step-34-item-3.png 
        title: 'Click the "Create new widget" icon.'
    3:
        image: /images/helloworld/hello-world-step-35-item-3.png 
        title: 'Select the "Alarm widgets" bundle. Click on the "Alarms" widget header.'        
    4:
        image: /images/helloworld/hello-world-step-35-item-4.png 
        title: 'Select the "Entity" alarm source and "MyDevice" alias. Click "Add"'
    5:
        image: /images/helloworld/hello-world-step-35-item-5.png 
        title: 'Scroll down and locate the new "Alarms" widget. Drag and Drop widget to the top right corner of the dashboard.'
    6:
        image: /images/helloworld/hello-world-step-35-item-6.png 
        title: 'Resize the widget and apply changes.'

step4:
    0:
        image: /images/helloworld/hello-world-step-4-item-1.png 
        title: 'Navigate to the device profiles page.'
    1:
        image: /images/helloworld/hello-world-step-4-item-2.png 
        title: 'Click the default profile row. This will open device profile details.'
    2:
        image: /images/helloworld/hello-world-step-4-item-3.png 
        title: 'Select the "Alarm Rules" tab and toggle edit mode.'
    3:
        image: /images/helloworld/hello-world-step-4-item-4.png 
        title: 'Click "Add alarm rule".'        
    4:
        image: /images/helloworld/hello-world-step-4-item-5.png 
        title: 'Specify alarm type and click the "+" icon to add alarm rule condition.'
    5:
        image: /images/helloworld/hello-world-step-4-item-6.png 
        title: 'Click the "Add key filter" button to specify a condition.'
    6:
        image: /images/helloworld/hello-world-step-4-item-7.png 
        title: 'Select key type, input key name, select value type, and click "Add".'
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
        title: 'Notice that the new temperature telemetry causes a new active alarm.'
    1:
        image: /images/helloworld/hello-world-step-5-item-2.png 
        title: 'User may acknowledge and clear the alarms.'     
        
step71:
    0:
        image: /images/helloworld/hello-world-step-7-item-1.png 
        title: 'Navigate to the Customers page.'
    1:
        image: /images/helloworld/hello-world-step-7-item-2.png 
        title: 'Click the "+" sign to add a customer.'
    2:
        image: /images/helloworld/hello-world-step-7-item-3.png 
        title: 'Add customer title and click "Add".'

step72:
    0:
        image: /images/helloworld/hello-world-step-71-item-1.png 
        title: 'Open Devices page. Click "Assign to customer" for "My New Device".'
    1:
        image: /images/helloworld/hello-world-step-71-item-2.png 
        title: 'Select "My New Customer" and click "Assign".'

step73:
    0:
        image: /images/helloworld/hello-world-step-71-item-3.png 
        title: 'Open Dashboards. Click "Manage assigned customers".'
    1:
        image: /images/helloworld/hello-world-step-71-item-4.png 
        title: 'Select "My New Customer" and click "Update".'

step74:
    0:
        image: /images/helloworld/hello-world-step-7-item-4.png 
        title: 'Navigate back to the "Customers" page and click the "manage customer users" icon.'        
    1:
        image: /images/helloworld/hello-world-step-7-item-5.png 
        title: 'Click the "Add user" icon.'        
    2:
        image: /images/helloworld/hello-world-step-7-item-6.png 
        title: 'Specify email that you will use to login as a customer user and click "Add".'
    3:
        image: /images/helloworld/hello-world-step-7-item-7.png 
        title: 'Copy the activation link and save it to a safe place. You will use it later to set the password.'
    4:
        image: /images/helloworld/hello-world-step-71-item-7.png 
        title: 'Open user details.'         
    5:
        image: /images/helloworld/hello-world-step-71-item-5.png 
        title: 'Toggle edit mode.'
    6:
        image: /images/helloworld/hello-world-step-71-item-6.png 
        title: 'Select default dashboard and check "Always fullscreen". Apply changes.'

step75:
    0:
        image: /images/helloworld/hello-world-step-7-item-8.png 
        title: 'Use the activation link to set the password. Click "Create Password". You will automatically login as a customer user.'
    1:
        image: /images/helloworld/hello-world-step-7-item-9.png 
        title: 'You have logged in as a Customer User. You may browse the data and acknowledge/clear alarms.'
        
mqttWindows:
    0:
        image: /images/helloworld/hello-world-step-3-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below.' 
    1:
        image: /images/helloworld/hello-world-step-3-item-2.png
        title: 'Populate the topic name and payload. Make sure the payload is a valid JSON document. Click "Publish" button.' 
                           
---

* TOC
{:toc}


## Introduction

The goal of this tutorial is to demonstrate the basic usage of the most popular ThingsBoard features. You will learn how to:

 - Connect devices to ThingsBoard;
 - Push data from devices to ThingsBoard;
 - Build real-time end-user dashboards;
 - Define thresholds and trigger alarms;
 - Push notifications about new alarms over email, sms or other systems.

We will connect and visualize data from the temperature sensor to keep it simple. 
 
{% include templates/prerequisites.md %}

## Step 1. Provision Device

For simplicity, we will provision the device manually using the UI. 
 
{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %} 

You may also use:
 * [Bulk provisioning](/docs/user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
 * [Device provisioning](/docs/user-guide/device-provisioning/) to allow device firmware to automatically provision the device, so you don't need to configure each device manually; 
 * [REST API](/docs/api/) to provision devices and other entities programmatically;

## Step 2. Connect device

To connect the device you need to get the device credentials first. 
ThingsBoard supports various device credentials. We recommend using default auto-generated credentials which is access token for this guide.

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

Now you are ready to publish telemetry data on behalf of your device. 
We will use simple commands to publish data over HTTP or MQTT in this example.

{% capture connectdevicetogglespec %}
HTTP<small>Linux, macOS or Windows</small>%,%http%,%templates/helloworld/http.md%br%
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/helloworld/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/helloworld/mqtt-windows.md%br%
CoAP<small>Linux or macOS</small>%,%coap%,%templates/helloworld/coap.md%br%
Other Protocols<small>Modbus, SNMP, LoRaWAN, etc</small>%,%other%,%templates/helloworld/other.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

Once you have successfully published the "temperature" readings, you should immediately see them in the Device Telemetry Tab:

{% include images-gallery.html imageCollection="step3" showListImageTitles="true" %}

## Step 3. Create Dashboard

We will create a dashboard and add the most popular widgets. See the instructions below. 

### Step 3.1 Create Empty Dashboard

{% include images-gallery.html imageCollection="step31" showListImageTitles="true" %}

### Step 3.2 Add Entity Alias

Alias is a reference to a single entity or group of entities that are used in the widgets.
Alias may be static or dynamic. For simplicity, we will use "Single entity" alias references the one and only entity ("My New Device" in our case).
It is possible to configure an alias that references multiple devices. For example, devices of a certain type or related to a certain asset. 
You may learn more about different aliases [here](/docs/user-guide/ui/aliases/).

{% include images-gallery.html imageCollection="step32" showListImageTitles="true" %}   

### Step 3.3 Add Table Widget

To add the table widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how the widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

{% include images-gallery.html imageCollection="step33" showListImageTitles="true" %}

Congratulations! You have added the first widget. Now you can send new telemetry reading and it will immediately appear in the table. 

### Step 3.4 Add Chart Widget

To add the chart widget we need to select it from the widget library. 
Chart widget displays multiple historical values of the same data key ("temperature" in our case).
We should also configure the time window to use the chart widget.

{% include images-gallery.html imageCollection="step34" showListImageTitles="true" %}

Congratulations! You have added a chart widget. Now you can send new telemetry reading and it will immediately appear in the chart. 

### Step 3.5 Add Alarm Widget

{% include images-gallery.html imageCollection="step35" showListImageTitles="true" %}

Congratulations! You have added an alarm widget. Now it's time to configure alarm rules and raise some alarms. 

## Step 4. Configure Alarm Rules

We will use the [alarm rules](/docs/user-guide/device-profiles/#alarm-rules) feature to raise alarm when the temperature reading is greater than 25 degrees.
For this purpose, we should edit the device profile and add a new alarm rule. 
The "My New Device" is using the "Default" device profile.
We recommend creating dedicated [device profiles](/docs/user-guide/device-profiles/) for each corresponding device type but will skip this step for simplicity.

{% include images-gallery.html imageCollection="step4" showListImageTitles="true" %}

## Step 5. Create Alarm

Now our alarm rule is active (see [Step 4](/docs/getting-started-guides/helloworld/#step-4-configure-alarm-rules)), 
and we should send new telemetry on behalf of the device (see [Step 2](/docs/getting-started-guides/helloworld/#step-2-connect-device)) to trigger the alarm.
Note that the temperature value should be 26 or higher to raise the alarm. Once we send a new temperature reading, we should immediately see a new alarm on our dashboard.

{% include images-gallery.html imageCollection="step5" showListImageTitles="true" %}

## Step 6. Alarm notifications

It is quite easy to configure email or sms notifications for alarms. We recommend reviewing alarm rule [examples](/docs/user-guide/device-profiles/#alarm-rules) 
and documentation about [alarm notifications](/docs/user-guide/device-profiles/#notifications-about-alarms). 
 
**Note**: At the moment ThingsBoard supports AWS SNS and Twilio to send SMS. 
Both services are non-free and require you to create an account. However, you may integrate with other SMS/EMAIL gateways using [REST API call](https://thingsboard.io/docs/user-guide/rule-engine-2-0/tutorials/get-weather-using-rest-api-call/#node-d-external-rest-api-call-node) node.  

## Step 7. Assign Device and Dashboard to Customer

One of the most important ThingsBoard features is the ability to assign Dashboards to Customers. 
You may assign different devices to different customers. Then, you may create a Dashboard(s) and assign it to multiple customers.
Each customer user will see his own devices and will not be able to see devices or any other data that belongs to a different customer.

#### Step 7.1 Create customer

Let's create a customer with title "My New Customer". Please see instruction below:

{% include images-gallery.html imageCollection="step71" showListImageTitles="true" %}

#### Step 7.2 Assign device to Customer

Let's assign device to the Customer. The Customer users will have ability to read and write telemetry and send commands to devices. 

{% include images-gallery.html imageCollection="step72" showListImageTitles="true" %}

#### Step 7.3 Assign dashboard to Customer

Let's share our dashboard with the Customer. The Customer users will have read-only access to the Dashboard. 

{% include images-gallery.html imageCollection="step73" showListImageTitles="true" %}

#### Step 7.4 Create customer user

Finally, let's create a user that will belong to the customer and will have read-only access to the dashboard and the device.
You may optionally configure the dashboard to appear just after user login to the platform web UI.

{% include images-gallery.html imageCollection="step74" showListImageTitles="true" %}

#### Step 7.5 Activate customer user

{% include images-gallery.html imageCollection="step75" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/guides-banner.md %}

## ThingsBoard Community Edition education course
 
 <div id="video">  
     <div id="video_wrapper">
         <iframe src="https://www.youtube.com/embed/videoseries?list=PLYEKB_XwLCZJ6T8RPLTjRwMw0eoabpEKO" frameborder="0" allowfullscreen></iframe>
     </div>
 </div>
 <p></p>


## Your feedback

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.
