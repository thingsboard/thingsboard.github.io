---
layout: docwithnav
assignees:
- ashvayka
title: Getting Started with ThingsBoard Professional Edition
description: Getting started with ThingsBoard open-source IoT platform and simulated IoT devices
step1:
    0:
        image: /images/helloworld/hello-world-pe-step-1-item-1.png
        title: 'Login to your ThingsBoard instance and open Device Groups page.'
    1:
        image: /images/helloworld/hello-world-pe-step-1-item-3.png
        title: 'Navigate to default Device group “ALL”.'
    2:
        image: /images/helloworld/hello-world-pe-step-1-item-2.png 
        title: 'Click on the "+" icon in the top right corner of the table and then select "Add Device".'
    3:
        image: /images/helloworld/hello-world-pe-step-1-item-4.png
        title: 'Input device name. For example, "My New Device". No other changes are required at this time. Click "Add" to add the device.'
    4:
        image: /images/helloworld/hello-world-pe-step-1-item-5.png
        title: 'Now your device should be listed first, since the table sorts devices using the time of the creation by default. '
        
step2:
    0:
        image: /images/helloworld/hello-world-pe-step-2-item-1.png
        title: 'Click on the device row in the table to open device details;'
    1:
        image: /images/helloworld/hello-world-pe-step-2-item-2.png
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

step3:
    0:
        image: /images/helloworld/hello-world-pe-step-2-item-1.png 
        title: 'Click on the device row in the table to open device details;'
    1:
        image: /images/helloworld/hello-world-pe-step-2-item-4.png
        title: 'Navigate to the telemetry tab.'
        
step31:
    0:
        image: /images/helloworld/hello-world-pe-step-31-item-1.png
        title: 'Open Dashboard Groups page. Open default dashboard group “All”. Click on the "+" icon in the top right corner to create a new dashboard.'
    1:
        image: /images/helloworld/hello-world-pe-step-31-item-2.png
        title: 'Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard.'
    2:
        image: /images/helloworld/hello-world-pe-step-31-item-3.png
        title: 'Now your dashboard should be listed first, since the table sorts dashboards using the time of the creation by default. Click on the "Open dashboard" icon.'
        
step32:
    0:
        image: /images/helloworld/hello-world-pe-step-32-item-1.png 
        title: 'Enter edit mode. Click on the pencil button in the bottom right corner.'
    1:
        image: /images/helloworld/hello-world-pe-step-32-item-2.png  
        title: 'Click "Entity Aliases" icon in the top right part of the screen. You will see an empty list of Entity aliases.'
    2:
        image: /images/helloworld/hello-world-pe-step-32-item-3.png  
        title: 'Click "Add alias".'
    3:
        image: /images/helloworld/hello-world-pe-step-32-item-4.png  
        title: 'Input alias name, for example "MyDevice". Select "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on the needed device.'        
    4:
        image: /images/helloworld/hello-world-pe-step-32-item-5.png  
        title: 'Click "Add" and then "Save".'        
    5:
        image: /images/helloworld/hello-world-pe-step-32-item-6.png  
        title: 'Finally, Click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.'

step33:
    0:
        image: /images/helloworld/hello-world-pe-step-33-item-1.png
        title: 'Enter edit mode. Click on the "Add new widget" button. '
    1:
        image: /images/helloworld/hello-world-pe-step-33-item-2.png
        title: 'Select "Cards" widget bundle. Select "Latest values" tab. Click on the header of the Entities widget. The "Add Widget" window will appear.'
    2:
        image: /images/helloworld/hello-world-pe-step-33-item-3.png
        title: 'Click "Add" to add the data source. Widget may have multiple data sources, but we will use only one in this case.'
    3:
        image: /images/helloworld/hello-world-pe-step-33-item-4.png 
        title: 'Select "MyDevice" entity alias. Then click on the input field to the right. The auto-complete with available data points will appear. Select "temperature" data point and click "Add".'        
    4:
        image: /images/helloworld/hello-world-pe-step-33-item-5.png
        title: 'Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. You can also play with the advanced settings if you want to edit the widget.'
        
step34:
    0:
        image: /images/helloworld/hello-world-pe-step-34-item-1.png 
        title: 'Enter Edit mode.'
    1:
        image: /images/helloworld/hello-world-pe-step-34-item-2.png 
        title: 'Click "Add new widget" icon in the bottom right corner of the screen.'
    2:
        image: /images/helloworld/hello-world-pe-step-34-item-3.png 
        title: 'Click "Create new widget" icon.'
    3:
        image: /images/helloworld/hello-world-pe-step-34-item-4.png 
        title: 'Select "Charts" bundle. Scroll down and click on the "Timeseries - Flot" chart widget.'        
    4:
        image: /images/helloworld/hello-world-pe-step-34-item-5.png  
        title: 'Click "Add datasource" button.'
    5:
        image: /images/helloworld/hello-world-pe-step-34-item-6.png 
        title: 'Select "MyDevice" Alias. Select "temperature" key. Click "Add".'
    6:
        image: /images/helloworld/hello-world-pe-step-34-item-7.png
        title: 'Drag and Drop you widget to desired space. Resize the widget. Apply changes.'
    7:
        image: /images/helloworld/hello-world-pe-step-34-item-8.png  
        title: 'Publish different telemetry values multiple times Step 2. Note that the widget displays only one minute of data by default.'
    8:
        image: /images/helloworld/hello-world-pe-step-34-item-9.png  
        title: 'Enter Edit mode. Open time selection window. Change the interval and aggregation function. Update the time window and apply changes.'

step35:
    0:
        image: /images/helloworld/hello-world-pe-step-35-item-1.png 
        title: 'Enter Edit mode.'
    1:
        image: /images/helloworld/hello-world-pe-step-35-item-2.png  
        title: 'Click "Add new widget" icon in the bottom right corner of the screen.'
    2:
        image: /images/helloworld/hello-world-pe-step-35-item-3.png  
        title: 'Click "Create new widget" icon.'
    3:
        image: /images/helloworld/hello-world-pe-step-35-item-4.png  
        title: 'Select "Alarm widgets" bundle. Click on the "Alarms" widget header.'        
    4:
        image: /images/helloworld/hello-world-pe-step-35-item-5.png  
        title: 'Select "Entity" alarm source and "MyDevice" alias. Click "Add"'
    5:
        image: /images/helloworld/hello-world-pe-step-35-item-6.png  
        title: 'Scroll down and locate new "Alarms" widget. Drag and Drop widget to the top right corner of the dashboard.'
    6:
        image: /images/helloworld/hello-world-pe-step-35-item-7.png  
        title: 'Resize the widget and apply changes.'

step4:
    0:
        image: /images/helloworld/hello-world-pe-step-4-item-1.png 
        title: 'Navigate to the device profiles page.'
    1:
        image: /images/helloworld/hello-world-pe-step-4-item-2.png
        title: 'Click the default profile row. This will open device profile details.'
    2:
        image: /images/helloworld/hello-world-pe-step-4-item-3.png
        title: 'Select the "Alarm Rules" tab and toggle edit mode.'
    3:
        image: /images/helloworld/hello-world-pe-step-4-item-4.png
        title: 'Click "Add alarm rule".'        
    4:
        image: /images/helloworld/hello-world-pe-step-4-item-5.png 
        title: 'Specify alarm type and click the "+" icon to add alarm rule condition.'
    5:
        image: /images/helloworld/hello-world-pe-step-4-item-6.png
        title: 'Click the "Add key filter" button to specify a condition.'
    6:
        image: /images/helloworld/hello-world-pe-step-4-item-7.png 
        title: 'Select key type, input key name, select value type, and click "Add".'
    7:
        image: /images/helloworld/hello-world-pe-step-4-item-8.png
        title: 'Select operation and input threshold value. Click "Add".'
    8:
        image: /images/helloworld/hello-world-pe-step-4-item-9.png
        title: 'Click "Save".'
    9:
        image: /images/helloworld/hello-world-pe-step-4-item-10.png 
        title: 'Finally, click "Apply changes".'        

step5:
    0:
        image: /images/helloworld/hello-world-pe-step-5-item-1.png
        title: 'Notice that the new temperature telemetry causes a new active alarm.'
    1:
        image: /images/helloworld/hello-world-pe-step-5-item-2.png 
        title: 'User may acknowledge and clear the alarms.'     
        
step7:
    0:
        image: /images/helloworld/hello-world-pe-step-7-item-1.png 
        title: 'Navigate to the customer groups page.'
    1:
         image: /images/helloworld/hello-world-pe-step-7-item-2.png
         title: 'Then navigate to the default customer group "All".'
    2:
        image: /images/helloworld/hello-world-pe-step-7-item-3.png 
        title: 'Click the "+" sign to add a new customer.'
    3:
        image: /images/helloworld/hello-world-pe-step-7-item-4.png 
        title: 'Add customer title and click "Add".'
    4:
        image: /images/helloworld/hello-world-pe-step-7-item-5.png 
        title: 'Click  “Manage customer user groups”.'
    5:
        image: /images/helloworld/hello-world-pe-step-7-item-6.png 
        title: 'Open “Customer Users” group.'
    6:
        image: /images/helloworld/hello-world-pe-step-7-item-7.png 
        title: 'Click the “+” sign to add a User'
    7:
        image: /images/helloworld/hello-world-pe-step-7-item-8.png 
        title: 'Specify email that you will use to login as a customer user and click "Add".'
    8:
        image: /images/helloworld/hello-world-pe-step-7-item-9.png 
        title: 'Copy the activation link and save it to a safe place. You will use it later to set the password.'
    9:
        image: /images/helloworld/hello-world-pe-step-7-item-10.png
        title: 'Open user details'          
    10:
        image: /images/helloworld/hello-world-pe-step-7-item-11.png
        title: 'Toggle edit mode'
    11:
        image: /images/helloworld/hello-world-pe-step-7-item-12.png
        title: 'Select default dashboard and check "Always fullscreen". Apply changes.'  
    12:
        image: /images/helloworld/hello-world-pe-step-7-item-13.png 
        title: 'Use activation link to set the password. Click "Create Password". You will automatically login as a customer user.'
    13:
        image: /images/helloworld/hello-world-pe-step-7-item-14.png 
        title: 'You have logged in as a Customer User. You may browse the data and acknowledge/clear alarms.'
        
step71:
    0:
        image: /images/helloworld/hello-world-pe-step-7-item-1.png 
        title: 'Navigate to the customer groups page.'
    1:
         image: /images/helloworld/hello-world-pe-step-7-item-2.png
         title: 'Then navigate to the default customer group "All".'
    2:
        image: /images/helloworld/hello-world-pe-step-7-item-3.png 
        title: 'Click the "+" sign to add a customer.'
    3:
        image: /images/helloworld/hello-world-pe-step-7-item-4.png 
        title: 'Add customer title and click "Add".' 
        
step72:
    0:
        image: /images/helloworld/hello-world-pe-step-72-item-1.png 
        title: 'Select your device and click the "Change Owner" button.'
    1:
        image: /images/helloworld/hello-world-pe-step-72-item-2.png
        title: 'Start typing the customer name and then click on the customer item.'
    2:
        image: /images/helloworld/hello-world-pe-step-72-item-3.png 
        title: 'Click the "Change owner" button.'
    3:
        image: /images/helloworld/hello-world-pe-step-72-item-4.png 
        title: 'Click "Yes". You can always change the owner back to the tenant.'
    4:
        image: /images/helloworld/hello-world-pe-step-72-item-5.png 
        title: 'Your device list should be empty now. This is because it displays the devices of the tenant. Navigate to the customer hierarchy to see your device.' 
    5:
        image: /images/helloworld/hello-world-pe-step-72-item-6.png 
        title: 'Your device is now in the Customers group "All".'                          
        
step73:
    0:
        image: /images/helloworld/hello-world-pe-step-73-item-1.png 
        title: 'Open "Dashboard Groups" and click the "Share" button.'
    1:
        image: /images/helloworld/hello-world-pe-step-73-item-2.png
        title: 'Select the customer and click "Share".'
        
step74:
    0:
        image: /images/helloworld/hello-world-pe-step-74-item-1.png 
        title: 'Open "Customers hierarchy", select "Customer Users" and click "Add".'
    1:
        image: /images/helloworld/hello-world-pe-step-74-item-2.png
        title: 'Specify email, first and last name. Click "Add".'
    2:
        image: /images/helloworld/hello-world-pe-step-74-item-3.png 
        title: 'Copy the activation link and save it to a safe place. Then click "OK".'
    3:
        image: /images/helloworld/hello-world-pe-step-74-item-4.png 
        title: 'Click on the user name to open user details. Toggle edit mode.' 
    4:
        image: /images/helloworld/hello-world-pe-step-74-item-5.png 
        title: 'Optionally, select the dashboard and enable "always fullscreen" mode. Apply changes.'

step75:
    0:
        image: /images/helloworld/hello-world-pe-step-75-item-1.png 
        title: 'Use activation link to set the password. Click "Create Password". You will automatically login as a customer user.'
    1:
        image: /images/helloworld/hello-world-pe-step-75-item-2.png 
        title: 'You have logged in as a Customer User. You may browse the data and acknowledge/clear alarms.'

        
mqttWindows:
    0:
        image: /images/helloworld/hello-world-pe-step-3-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below.' 
    1:
        image: /images/helloworld/hello-world-pe-step-3-item-2.png
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
 - Push notification about new alarms over email, SMS, or other systems.

**In this guide, we will connect and visualize data from the temperature sensor to keep it simple.** 
 
{% include templates/prerequisites-pe.md %}

## Step 1. Provision device

For simplicity, we will provision device manually using the UI. 
 
{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %} 

You may also use:
 * [Bulk provisioning](/docs/user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
 * [Device provisioning](/docs/user-guide/device-provisioning/) to allow device firmware to automatically provision the device, so you don't need to configure each device manually; 
 * [REST API](/docs/api/) to provision devices and other entities programmatically;

## Step 2. Connect device

To connect the device you need to get the device credentials first. 
ThingsBoard supports various device credentials. We recommend using the default auto-generated credentials which is an access token for this guide.

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

Now you are ready to publish telemetry data on behalf of your device. 
We will use simple commands to publish data over HTTP or MQTT in this example.

{% capture connectdevicetogglespec %}
HTTP<small>Linux, macOS or Windows</small>%,%http%,%templates/helloworld-pe/http.md%br%
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/helloworld-pe/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/helloworld-pe/mqtt-windows.md%br%
CoAP<small>Linux or macOS</small>%,%coap%,%templates/helloworld-pe/coap.md%br%
Other Protocols<small>Modbus, SNMP, LoRaWAN, etc</small>%,%other%,%templates/helloworld/other.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

Once you have successfully published the "temperature" readings, you should immediately see them in the Device Telemetry Tab:

{% include images-gallery.html imageCollection="step3" showListImageTitles="true" %}

## Step 3. Create dashboard

We will create a dashboard to add the most popular widgets. See instructions below. 

### Step 3.1 Create an empty dashboard

{% include images-gallery.html imageCollection="step31" showListImageTitles="true" %}

### Step 3.2 Add entity alias

Alias is a reference to a single entity or a group of entities that are used in the widgets.
Alias may be static or dynamic. For simplicity, we will use "Single entity" alias reference the one and only entity ("My New Device" in our case).
It is possible to configure an alias that references multiple devices. For example, devices of a certain type or related to a certain asset. 
You may learn more about different aliases [here](/docs/user-guide/ui/aliases/).

{% include images-gallery.html imageCollection="step32" showListImageTitles="true" %}   

### Step 3.3 Add table widget

To add the table widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how the widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

{% include images-gallery.html imageCollection="step33" showListImageTitles="true" %}

Congratulations! You have added the first widget. Now you are able to send a new telemetry reading and it will immediately appear in the table. 

### Step 3.4 Add chart widget

To add the chart widget we need to select it from the widget library. 
Chart widget displays multiple historical values of the same data key ("temperature" in our case).
We should also configure the time window to use the chart widget.

{% include images-gallery.html imageCollection="step34" showListImageTitles="true" %}

Congratulations! You have added chart widget. Now you are able to send new telemetry reading and it will immediately appear in the chart. 

### Step 3.5 Add alarm widget

{% include images-gallery.html imageCollection="step35" showListImageTitles="true" %}

Congratulations! You have added alarm widget. Now it's time to configure alarm rules and raise some alarms. 

## Step 4. Configure alarm rules

We will use the [alarm rules](/docs/user-guide/device-profiles/#alarm-rules) feature to raise alarm when the temperature reading is greater than 25 degrees.
For this purpose, we should edit the device profile and add a new alarm rule. 
The "My New Device" is using the "Default" device profile.
We recommend creating dedicated [device profiles](/docs/user-guide/device-profiles/) for each corresponding device type but will skip this step for simplicity.

{% include images-gallery.html imageCollection="step4" showListImageTitles="true" %}

## Step 5. Create alarm

Now our alarm rule is active (see [Step 4](/docs/getting-started-guides/helloworld-pe/#step-4-configure-alarm-rules)), 
and we should send new telemetry on behalf of the device (see [Step 2](/docs/getting-started-guides/helloworld-pe/#step-2-connect-device)) to trigger the alarm.
Note that the temperature value should be 26 or higher to raise the alarm. Once we send new temperature reading, we should immediately see a new alarm on our dashboard.

{% include images-gallery.html imageCollection="step5" showListImageTitles="true" %}

## Step 6. Alarm notifications

It is quite easy to configure email or sms notifications for alarms. We recommend reviewing alarm rule [examples](/docs/user-guide/device-profiles/#alarm-rules) 
and documentation about [alarm notifications](/docs/user-guide/device-profiles/#notifications-about-alarms). 
 
**Note**: At the moment ThingsBoard supports AWS SNS and Twilio to send SMS. 
Both services are non-free and require you to create an account. However, you may integrate with other SMS/EMAIL gateways using [REST API call](https://thingsboard.io/docs/user-guide/rule-engine-2-0/tutorials/get-weather-using-rest-api-call/#node-d-external-rest-api-call-node) node.  

## Step 7. Share dashboard with customers

One of the most important ThingsBoard features is the ability to create end-user dashboards.
Each Customer User should see his own devices and should not be able to see devices or any other data that belongs to a different customer. 

We have already created a Device (see [Step 1](/docs/getting-started-guides/helloworld-pe/#step-1-provision-device)), and a Dashboard (see [Step 3](/docs/getting-started-guides/helloworld-pe/#step-3-create-dashboard)). 
Now it's time to create a Customer and a Customer User and make sure they will have access to the device's data and to the dashboard.
There are two options how Tenant Administrator can give access to certain Entity (Device, Dashboard, Asset, etc.) for a Customer:

* A. Make Customer become the owner of the entity. This option is useful to ensure that only this customer can access the device and its data (see [Step 7.2](/docs/getting-started-guides/helloworld-pe/#step-72-change-owner-of-the-device)).
* B. Share the entity with the Customer. This option is useful to share a single dashboard with multiple customers (see [Step 7.3](/docs/getting-started-guides/helloworld-pe/#step-73-share-the-dashboard)).
 
#### Step 7.1 Create customer

Let's create a customer with title "My New Customer". Please see instruction below:

{% include images-gallery.html imageCollection="step71" showListImageTitles="true" %}

#### Step 7.2 Change owner of the device

Let's make Customer become the owner of the device.

{% include images-gallery.html imageCollection="step72" showListImageTitles="true" %}

#### Step 7.3 Share the dashboard

Let's share our dashboard with the Customer. 
Our dashboard is in the group "All". Ideally, we should create another dashboard group, but to simplify the guide, we will use the group "All". 

{% include images-gallery.html imageCollection="step73" showListImageTitles="true" %}

#### Step 7.4 Create customer user

Finally, let's create a user that will belong to the customer and will have read-only access to the dashboard and the device itself.
You may optionally configure the dashboard to appear just after the user login to the platform web UI. 

{% include images-gallery.html imageCollection="step74" showListImageTitles="true" %}

#### Step 7.5 Activate customer user

{% include images-gallery.html imageCollection="step75" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/guides-banner.md %}

## ThingsBoard Professional Edition white-labeling guide

 <div id="video">  
     <div id="video_wrapper">
         <iframe src="https://www.youtube.com/embed/VSNZWl1NjWU" frameborder="0" allowfullscreen></iframe>
     </div>
 </div>
 <p></p>


## Your feedback

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.
