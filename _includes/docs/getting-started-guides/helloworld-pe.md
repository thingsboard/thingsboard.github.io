* TOC
{:toc}

This is a step-by-step tutorial aimed at familiarizing users with the ThingsBoard platform’s fundamental and most popular functionalities. 

The guide covers:

 - **Connecting devices to ThingsBoard.** This section provides instructions on how to add a new device using the UI, and check its connections to the ThingsBoard platform;
 - **Push data from devices to ThingsBoard.** Details on how to send telemetry data using various protocols such as HTTP, MQTT, CoAp, and others, including command line examples for publishing data;
 - **Build real-time end-user dashboards.** The guide explains how to create a dashboard, add widgets (such as Entities table, Charts, and Alarms table) to visualize data, and configure these widgets to display specific information like temperature readings;
 - **Define thresholds and trigger alarms.** Configure alarm rules to trigger notifications when certain conditions are met (e.g., temperature exceeds a specific threshold);
 - **Alarm notifications.** This section covers the setup notifications in the ThingsBoard Notification center to inform end-users about triggered alarms over email, SMS, or other systems;
 - **Sharing dashboards with customers.** It discusses how to share dashboards with customers, ensuring they have access to their respective dashboards, devices, and data;
 - **Create customer user.** Finally, it explains the process of creating and activating a customer user, allowing them to log in and interact with the dashboards and devices they have access to.

Overall, this tutorial serves as an initial orientation to enable new users to effectively navigate and utilize the ThingsBoard Professional Edition for IoT device management and data visualization.

As an example, we will connect and visualize data from the temperature sensor. Let's get started.
 
{% include templates/prerequisites-pe.md %}

## Step 1. Provision device

As an example, let's add a device that will transmit the following data to ThingsBoard platform: the device's name and temperature readings as telemetry.

To add a new device, follow these steps:
 
{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %} 

Learn more about **notifications** and how to configure them [here](#step-6-alarm-notifications).

<br>
You may also use:
 * [Bulk provisioning](/docs/{{docsPrefix}}user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
 * [Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning/) to allow device firmware to provision the device automatically, so you don't need to configure each device manually;
 * [REST API](/docs/{{docsPrefix}}api/) to provision devices and other entities programmatically;

## Step 2. Connect device

To connect the device you need to get the device credentials first. 
ThingsBoard supports various device credentials. We recommend using the default auto-generated credentials, which is an access token for this guide.

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

Now, you are ready to publish telemetry data on behalf of your device. 
We will use simple commands to publish data over HTTP or MQTT in this example.

{% capture connectdevicetogglespec %}
HTTP<small>Linux, macOS or Windows</small>%,%http%,%templates/helloworld-pe/http.md%br%
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/helloworld-pe/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/helloworld-pe/mqtt-windows.md%br%
CoAP<small>Linux or macOS</small>%,%coap%,%templates/helloworld-pe/coap.md%br%
Other Protocols<small>Modbus, SNMP, LoRaWAN, etc</small>%,%other%,%templates/helloworld/other.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

Once you have successfully published the "temperature" readings, you should immediately see them in the Device Telemetry Tab:

{% include images-gallery.html imageCollection="step21" showListImageTitles="true" %}

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
To use multiple entities (for example, devices of a certain type or related to a certain asset) as data source, you must use the alias.
Alias is a reference to a single entity or a group of entities that are used in the widgets. 
You may learn more [about different aliases here](/docs/{{docsPrefix}}user-guide/ui/aliases/).

## Step 4. Configure alarm rules

We will use the [alarm rules](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules) feature to raise the alarm when the temperature reading is greater than 25 degrees.
For this purpose, we should edit the device profile and add a new alarm rule. 
The "My New Device" is using the "Default" device profile.
We recommend creating dedicated [device profiles](/docs/{{docsPrefix}}user-guide/device-profiles/) for each corresponding device type but will skip this step for simplicity.

{% include images-gallery.html imageCollection="step4" showListImageTitles="true" %}

## Step 5. Create alarm

Now, our alarm rule is active (see [Step 3](#step-3-configure-alarm-rules-and-trigger-an-alarm)),
and we should send new telemetry on behalf of the device (see [Step 1.2](#step-12-connect-a-device)) to trigger the alarm.
Note that the temperature value should be 26 or higher to raise the alarm. Once we send a new temperature reading, we should immediately see a new alarm on our dashboard.

{% include images-gallery.html imageCollection="step5" showListImageTitles="true" %}

## Step 6. Alarm notifications

It's quite easy to set up notifications using the **Notification center**. ThingsBoard Notification center allows you to send notifications to the end-users.
Learn more about notifications and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/).

We also recommend reviewing alarm rule [examples](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules)
and documentation about [alarm notifications](/docs/{{docsPrefix}}user-guide/device-profiles/#notifications-about-alarms).

## Step 7. Share dashboard with customers

One of the most important ThingsBoard features is the ability to create end-user dashboards.
Each Customer User should see his own devices and should not be able to see devices or any other data that belongs to a different customer. 

We have already created a Device (see [Step 1](#step-1-provision-device)), and a Dashboard (see [Step 3](#step-3-create-dashboard)).
Now it's time to create a Customer and a Customer User and make sure they will have access to the device's data and the dashboard.
There are two options for how Tenant Administrator can give access to a certain Entity (Device, Dashboard, Asset, etc.) for a Customer:

* A. Assign the Customer as the owner of the entity. This option is useful to ensure that only this customer can access the device and its data (see [Step 7.2](#step-72-change-owner-of-the-device)).
* B. Share the entity with the Customer. This option is useful to share a single dashboard with multiple customers (see [Step 7.3](#step-73-share-the-dashboard)).
 
#### Step 7.1 Create a customer

Let's create a customer with the title "My New Customer". Please see the instructions below:

{% include images-gallery.html imageCollection="step71" showListImageTitles="true" %}

### Step 7.2 Change owner of the device

Let's assign the Customer as the owner of the device. We will also create a group of devices and add our device to this group.

{% include images-gallery.html imageCollection="step72" showListImageTitles="true" %}

Make sure that the device is assigned to your customer.

{% include images-gallery.html imageCollection="step72_1" showListImageTitles="true" %}

You can make the customer the owner of the device during its creation stage.

{% include images-gallery.html imageCollection="step72_2" showListImageTitles="true" %}

### Step 7.3 Share the dashboard

Let's share our dashboard with the customer. 
Our dashboard is in the group "All". Ideally, we should create another dashboard group, but to simplify the guide, we will use the group "All". 

{% include images-gallery.html imageCollection="step73" showListImageTitles="true" %}

You can also share the dashboard with your customer or user during its creation stage.

{% include images-gallery.html imageCollection="step73_1" showListImageTitles="true" %}

### Step 7.4 Create a customer user

Finally, let's create a user that will belong to the customer and will have `read-only` access to the dashboard and the device itself.
You may optionally configure the dashboard to appear just after the user login to the platform web UI. 

{% include images-gallery.html imageCollection="step74" showListImageTitles="true" %}

### Step 7.5 Activate the customer user

{% include images-gallery.html imageCollection="step75" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

## Your feedback

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.
