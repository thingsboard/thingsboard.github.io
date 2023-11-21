---
layout: docwithnav
assignees:
- ashvayka
title: Getting Started with ThingsBoard
description: Getting started with ThingsBoard open-source IoT platform and simulated IoT devices

step1:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-1-ce.png 
        title: 'Login to your ThingsBoard instance and navigate to the "Entities" section. Then go to the "Devices" page;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-2-ce.png 
        title: 'Click on the "+" icon in the top right corner of the table and then select "Add new device";'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-3-ce.png 
        title: 'Enter the device name. For example, "My New Device". No other changes required at this time. Click "Add" to add the device;'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-connectivity-1-ce.png
        title: 'Device is created. A window will open where you can check the device&#39;s connection to ThingsBoard. This step is optional. Let&#39;s close this window for now and return to checking the connection in the next step in more detail;'
    4:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-4-ce.png 
        title: 'Your first device has been added. As new devices are added, they will be added to the top of the table, since the table sort devices using the time of the creation by default.'

step11:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-5-ce.png 
        title: 'You can view notification by clicking on the "bell" icon in the top right corner.'

step2:
    0:
        image: /images/helloworld/getting-started-ce/check-connectivity-device-1-ce.png
        title: 'Click on the your device, and click the "Check connectivity” button in the "Device details" window;'
    1:
        image: /images/helloworld/getting-started-ce/check-connectivity-device-2-ce.png
        title: 'In the opened window select the messaging protocol and your operating system. Install the necessary client tools and copy the command;'
    2:
        image: /images/helloworld/getting-started-ce/check-connectivity-device-3-ce.png
        title: 'Execute previously copied command. Once you have successfully published the “temperature” readings, the device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings. Now, close the connectivity window.'

step21:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-2-1-connect-device-3-ce.png
        title: 'Navigate to the "Latest telemetry" tab. You should see the previously published "temperature" readings;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-2-1-connect-device-4-ce.png
        title: 'Close the device details tab and refresh the "Devices" table. The device state should be changed from "Inactive" to "Active".'

step31:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-1-ce.png
        title: 'Login to your ThingsBoard instance and navigate to the "Dashboards" page through the main menu on the left of the screen. Then, click the "+" sign in the upper right corner of the screen, and select "Create new dashboard" from the drop-down menu;'
    1:
        image: /images/user-guide/dashboards/overview/create-dashboard-2-ce.png
        title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "Add";'
    2:
        image: /images/user-guide/dashboards/overview/create-dashboard-3-ce.png
        title: 'After creating the dashboard, it will open automatically, and you can immediately start adding widgets to it. To save the dashboard, click "Save" button in the upper right corner;'
    3:
        image: /images/user-guide/dashboards/overview/create-dashboard-4-ce.png
        title: 'Your first dashboard has been successfully created. As you continue to add new dashboards, they will appear at the top of the list. This default sorting is based on the creation timestamp.'

step32:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-table-widget-0-ce.png
        title: 'Enter dashboard edit mode. Simply open the dashboard and click the "Edit mode" button found in the upper right corner of the screen;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-table-widget-1-ce.png
        title: 'Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-table-widget-2-ce.png
        title: 'Select the "Tables" widget bundle;'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-table-widget-3-ce.png
        title: 'Select the "Entities table" widget;'
    4:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-table-widget-4-ce.png
        title: 'The "Add Widget" window will appear. Specify the previously created device "My New Device" in the "Device" field. The “name” key has already been added to the “Columns” section, which is responsible for the column with the device name. You need to add another column that will display the value of the "temperature" key. To do this, click "Add column" to add a new field to enter the data key;'
    5:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-table-widget-5-ce.png
        title: 'Click on the newly appeared data key input field. A list of available data keys will open. Select "temperature" data key;'
    6:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-table-widget-6-ce.png
        title: 'Click the "Add" button in the bottom right corner of the widget to complete adding the widget.'
    7:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-table-widget-7-ce.png
        title: 'Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. Click "Save" to apply changes.'

step33:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-chart-widget-1-ce.png
        title: 'Enter edit mode and click the "Add new widget" button at the top of the screen;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-chart-widget-2-ce.png
        title: 'Select the "Charts" widget bundle;'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-chart-widget-3-ce.png
        title: 'Select the "Timeseries Line Chart" widget;'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-chart-widget-4-ce.png
        title: 'Specify the previously created device "My New Device" in the "Device" field and specify the "temperature" data key in the "Series" section. Click "Add";'
    4:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-chart-widget-5-ce.png
        title: 'Resize the widget and apply changes. Publish different telemetry values multiple times, as in Step 2. Note that the widget displays only one minute of data by default. Click "Save" to apply changes;'
    5:
        image: /images/helloworld/getting-started-ce/hello-world-3-1-add-chart-widget-6-ce.png
        title: 'Now open the time selection window. Change the interval and aggregation function. Update the time window setting by clicking the "Update" button.'

step34:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-3-4-add-alarm-widget-1-ce.png
        title: 'Enter edit mode and click the "Add new widget" button at the top of the screen;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-3-4-add-alarm-widget-2-ce.png
        title: 'Select "Alarm widgets" bundle;'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-3-4-add-alarm-widget-3-ce.png
        title: 'Select "Alarms table" widget;'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-3-4-add-alarm-widget-4-ce.png
        title: 'Specify the previously created device "My New Device" in the "Device" field and select the statuses and severities of alarms you want to display in the alarm widget;'
    4:
        image: /images/helloworld/getting-started-ce/hello-world-3-4-add-alarm-widget-5-ce.png
        title: 'Drag and Drop the "Timeseries Line Chart" widget to the top right corner of the dashboard to make room for the "Alarms" widget;'   
    5:
        image: /images/helloworld/getting-started-ce/hello-world-3-4-add-alarm-widget-6-ce.png
        title: 'Scroll down and locate the new "Alarms" widget. Drag and Drop Alarm widget to the free space and resize it. Click "Save" to apply changes.'

step4:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-2-ce.png
        title: 'Go to the "Profiles" section, and click on the "Device profiles" page. Then click on the default device profile row to open its details;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-3-ce.png
        title: 'Select the "Alarm rules" tab and click "pencil" button to enter edit mode;'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-4-ce.png
        title: 'Click "Add alarm rule" button;' 
    3:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-5-ce.png
        title: 'Specify alarm type and click the "+" icon to add alarm rule condition;'
    4:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-6-ce.png
        title: 'Click the "Add key filter" button to specify a condition;'
    5:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-7-ce.png
        title: 'Select a key type, enter a key name, and select a value type. Then, click "Add" button in the "Filters" section;'
    6:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-8-ce.png
        title: 'Select an operation and enter a threshold value. Click "Add" button in the lower right corner;'
    7:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-9-ce.png
        title: 'Click "Save";'
    8:
        image: /images/helloworld/getting-started-ce/hello-world-4-configure-alarm-rules-10-ce.png
        title: 'Finally, click "Apply changes".'        

step5:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-5-create-alarm-1-ce.png
        title: 'Notice that the new temperature telemetry causes a new active alarm;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-5-create-alarm-2-ce.png
        title: 'You may acknowledge and clear the alarms;'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-5-create-alarm-3-ce.png
        title: 'When you receive a new alarm, you will receive a message in the notification center. You can view the message by clicking on the bell icon in the upper right corner.'   

step71:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-7-create-customer-2-ce.png
        title: 'Navigate to the Customers page. Click the "+" sign to add a customer;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-7-create-customer-3-ce.png
        title: 'Input customer title and click "Add".'

step72:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-1-ce.png
        title: 'Open "Devices" page, then select your device to open its details;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-2-ce.png
        title: 'Click "Assign to customer" button;'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-3-ce.png
        title: 'Select the customer to whom you want to assign the device, and then click "Assign";'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-4-ce.png
        title: 'You have changed the owner of the device. In the "Customer" column, you can see the owners name of the device;'

step72_1:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-5-ce.png
        title: 'Navigate to "Customers" page to make sure that the device is assigned to your customer. Find your customer in the list of customers and then click on the "Manage customer devices" icon;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-6-ce.png
        title: 'The device is with your client.'

step72_2:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-8-ce.png
        title: 'Click on the "+" icon in the top right corner of the table. Input device name (for example, "Thermostat") and navigate to the "Customer" tab;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-9-ce.png
        title: 'Select the customer to whom you want to assign the new device. Then click "Add";'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-device-to-customer-10-ce.png
        title: 'The device has been created, and it immediately belongs to the selected customer.'

step73:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-dashboard-to-customer-3-ce.png
        title: 'Open "Dashboards" page. Mark your dashboard and click the "Assign dashboards" icon;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-dashboard-to-customer-4-ce.png
        title: 'Mark "My New Customer" and click "Assign";'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-dashboard-to-customer-5-ce.png
        title: 'Navigate to the "Customers" page. Click "Manage customer dashboards" icon for "My New Customer";'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-71-assign-dashboard-to-customer-6-ce.png
        title: '"My New Dashboard" is assigned to your customer.'

step74:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-7-create-customer-user-1-ce.png
        title: 'Navigate to "Customers" page. Find your customer in the list of customers and then click on the "Manage customer users" icon;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-7-create-customer-user-2-ce.png
        title: 'Click the "Add user" icon in the top right corner of the table;'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-7-create-customer-user-3-ce.png
        title: 'Specify email that you will use to login as a customer user and click "Add";'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-7-create-customer-user-4-ce.png
        title: 'Copy the activation link and save it to a safe place. You will use it later to set the password. Click "OK";'
    4:
        image: /images/helloworld/getting-started-ce/hello-world-7-create-customer-user-6-ce.png
        title: 'Click on the created user to open details. Click "pencil" icon to enter edit mode;'
    5:
        image: /images/helloworld/getting-started-ce/hello-world-7-create-customer-user-7-ce.png
        title: 'Select default dashboard and check "Always fullscreen". Apply changes.'

step75:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-7-5-activate-customer-user-1-ce.png
        title: 'Paste the previously copied link into a new browser tab and press Enter. Come up with and enter a password twice, then press "Create Password". You will automatically log in as a customer user;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-7-5-activate-customer-user-2-ce.png
        title: 'You have logged in as a Customer User. You may browse the data and acknowledge/clear alarms.'

mqttWindows:
    0:
        image: /images/helloworld/hello-world-step-3-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below.' 
    1:
        image: /images/helloworld/hello-world-step-3-item-2.png
        title: 'Populate the topic name and payload. Make sure the payload is a valid JSON document. Click "Publish" button.' 

mosquitto-windows:
    0:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-1.png
        title: 'Press the Win + X, then select "System". Then click on the "System" page;'
    1:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-2.png
        title: 'Navigate to the "About" section, then click "Advanced system settings";'
    2:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-3.png
        title: 'In the "System Properties" pop-up window, click "Environment Variables" button on the "Advanced" tab;'
    3:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-4.png
        title: 'In the "Environment Variables" pop-up window, select the "Path", then click on the "Edit" button;'
    4:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-5.png
        title: 'In the "Edit environment variable" pop-up window click on the "New" button and add the path to the directory containing &#39;mosquitto_pub.exe&#39; and &#39;mosquitto_sub.exe&#39; (&#39;C:\Program Files\mosquitto&#39; by default). Click "OK" button;'
    5:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-6.png
        title: 'Click "OK" button to save changes in the environment variables;'
    6:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-7.png
        title: 'Finally, click "OK" button to apply all changes in the system properties.'

---

* TOC
{:toc}

The goal of this tutorial is to demonstrate the basic usage of the most popular ThingsBoard features. You will learn how to:

- Connect devices to ThingsBoard;
- Push data from devices to ThingsBoard;
- Build real-time end-user dashboards;
- Define thresholds and trigger alarms;
- Set up push notifications about new alarms over email, SMS, or other systems.

**In this guide, we will connect and visualize data from the temperature sensor to keep it simple.**

{% include templates/prerequisites.md %}

## Step 1. Provision device

As an example, let's add a device that will transmit the following data to ThingsBoard platform: the device's name and temperature readings as telemetry.

To add a new device, follow these steps:
 
{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %}

<br>
When adding a new device, you will receive a notification. You can view it by clicking on the "bell" icon in the top right corner.

{% include images-gallery.html imageCollection="step11" %}

Learn more about **notifications** and how to configure them [here](#step-6-alarm-notifications).

<br>
You may also use:
 * [Bulk provisioning](/docs/user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
 * [Device provisioning](/docs/user-guide/device-provisioning/) to allow device firmware to provision the device automatically, so you don't need to configure each device manually; 
 * [REST API](/docs/api/) to provision devices and other entities programmatically;

## Step 2. Connect device

Now, let's check the connection of our device to the ThingsBoard platform.
To accomplish this, use the "Check connectivity" functionality to publish telemetry data (for example, temperature readings) on behalf of your device. You can do this both while adding the device and after.

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

<br>
You may also use [ThingsBoard API reference](/docs/{{docsPrefix}}api). Here, you can find more detailed information about all supported protocols for device connectivity.

## Step 3. Create dashboard

A dashboard in ThingsBoard allows users to visualize and monitor data collected from IoT devices.

Let's create a dashboard and add three widgets to it in order to display a list of entities and their latest values, as well as show alarm signals related to the specified entity.

### Step 3.1 Create an empty dashboard

To create a new dashboard, follow these steps:

{% include images-gallery.html imageCollection="step31" showListImageTitles="true" %}

### Step 3.2 Add an Entities table widget

The "Entities table" widget displays a list of entities and their latest values.
The list of entities corresponds to selected devices or other entities, and filters with the ability of additional full-text search and pagination options.

To add the table widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how the widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

Let's add your first widget:

{% include images-gallery.html imageCollection="step32" showListImageTitles="true" %}

Congratulations! You've added your first widget.

In the "Entities table" widget, there are two columns.
The first column displays the device's name, and the second column displays the value of the "temperature" key (device telemetry).
So, each column corresponds to an added key.

Now you are able to send a new telemetry reading (as in [Step 1](#step-1-provision-device)), and it will immediately appear in the table.

### Step 3.3 Add a Chart widget

Chart widgets allow you to display time series data with customizable line charts and bar charts.

To add the chart widget we need to select it from the widget library.
Chart widget displays multiple historical values of the same data key ("temperature" in our case).
We should also configure the time window to use the chart widget.

{% include images-gallery.html imageCollection="step33" showListImageTitles="true" %}

Congratulations! You have added the chart widget. Now you are able to send a new telemetry reading, and it will immediately appear in the chart.

### Step 3.4 Add an Alarms table widget

The alarms table widget displays alarms related to the specified entity in the certain time window.
Alarm widget is configured by specifying an entity as the alarm source, and the corresponding alarm fields.

{% include images-gallery.html imageCollection="step34" showListImageTitles="true" %}

Congratulations! You have added the alarm widget. Now it's time to configure alarm rules and raise some alarms.

**Note:** in this documentation, we are using a single device as a data source for the widgets. 
To use dynamic entities (for example, devices of a certain type or related to a certain asset) as data source, you should use the alias.
Alias is a reference to a single entity or a group of entities that are used in the widgets. 
You may learn more [about different aliases here](/docs/{{docsPrefix}}user-guide/ui/aliases/).

## Step 4. Configure alarm rules

We will use the [alarm rules](/docs/user-guide/device-profiles/#alarm-rules) feature to raise the alarm when the temperature reading is greater than 25 degrees.
For this purpose, we should edit the device profile and add a new alarm rule. 
The "My New Device" is using the "Default" device profile.
We recommend creating dedicated [device profiles](/docs/user-guide/device-profiles/) for each corresponding device type but will skip this step for simplicity.

{% include images-gallery.html imageCollection="step4" showListImageTitles="true" %}

## Step 5. Create alarm

Now, our alarm rule is active (see [Step 4](/docs/getting-started-guides/helloworld/#step-4-configure-alarm-rules)), 
and we should send new telemetry on behalf of the device (see [Step 2](/docs/getting-started-guides/helloworld/#step-2-connect-device)) to trigger the alarm.
Note that the temperature value should be 26 or higher to raise the alarm. Once we send a new temperature reading, we should immediately see a new alarm on our dashboard.

{% include images-gallery.html imageCollection="step5" showListImageTitles="true" %}

## Step 6. Alarm notifications

It's quite easy to set up notifications using the **Notification center**. ThingsBoard Notification center allows you to send notifications to the end-users.
Learn more about notifications and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/).

We also recommend reviewing alarm rule [examples](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules)
and documentation about [alarm notifications](/docs/{{docsPrefix}}user-guide/device-profiles/#notifications-about-alarms).

## Step 7. Assign device and dashboard to customer

One of the most important ThingsBoard features is the ability to assign Dashboards to Customers. 
You may assign different devices to different customers. Then, you may create a Dashboard(s) and assign it to multiple customers.
Each customer user will see his own devices and will not be able to see devices or any other data that belongs to a different customer.

We have already created a Device (see [Step 1](#step-1-provision-device)), and a Dashboard (see [Step 3](#step-3-create-dashboard)).
Now it's time to create a Customer and a Customer User and make sure they will have access to the device's data and the dashboard.

### Step 7.1 Create customer

Let's create a customer with the title "My New Customer". Please see the instruction below:

{% include images-gallery.html imageCollection="step71" showListImageTitles="true" %}

### Step 7.2 Assign the device to customer

Let's assign device to the customer. The customer users will have ability to read and write telemetry and send commands to devices. 

{% include images-gallery.html imageCollection="step72" showListImageTitles="true" %}

Make sure that the device is assigned to your customer.

{% include images-gallery.html imageCollection="step72_1" showListImageTitles="true" %}

You can make the customer the owner of the device during its creation stage.

{% include images-gallery.html imageCollection="step72_2" showListImageTitles="true" %}

### Step 7.3 Assign the dashboard to customer

Let's share our dashboard with the customer. The customer users will have read-only access to the dashboard. 

{% include images-gallery.html imageCollection="step73" showListImageTitles="true" %}

### Step 7.4 Create customer user

Finally, let's create a user that will belong to the customer and will have `read-only` access to the dashboard and the device.
You may optionally configure the dashboard to appear just after user login to the platform web UI.

{% include images-gallery.html imageCollection="step74" showListImageTitles="true" %}

### Step 7.5 Activate customer user

{% include images-gallery.html imageCollection="step75" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/guides-banner.md %}

## Your feedback

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.
