* TOC
{:toc}

The goal of this tutorial is to demonstrate the basic usage of the most popular ThingsBoard features. You will learn how to:

- Connect devices to ThingsBoard;
- Push data from devices to ThingsBoard;
- Build real-time end-user dashboards;
- Define thresholds and trigger alarms;
- Set up push notifications about new alarms over email, SMS, or other systems.

**In this guide, we will connect and visualize data from the temperature sensor to keep it simple.**
 
{% include templates/prerequisites-pe.md %}

## Step 1. Provision device

As an example, let&#39;s add a device that will transmit the following data to ThingsBoard platform: the device&#39;s name and temperature readings as telemetry.

To add a new device, follow these steps:
 
{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %} 

<br>
When adding a new device, you will receive a notification. You can view it by clicking on the "bell" icon in the top right corner.

{% include images-gallery.html imageCollection="step11" %}

Learn more about **notifications** and how to configure them [here](#step-6-alarm-notifications).

<br>
You may also use:
 * [Bulk provisioning](/docs/{{docsPrefix}}user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
 * [Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning/) to allow device firmware to provision the device automatically, so you don&#39;t need to configure each device manually;
 * [REST API](/docs/{{docsPrefix}}api/) to provision devices and other entities programmatically;

## Step 2. Connect device

Now, let&#39;s check the connection of our device to the ThingsBoard platform.
To accomplish this, use the "Check connectivity" functionality to publish telemetry data (for example, temperature readings) on behalf of your device. You can do this both while adding the device and after.

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

<br>
You may also use [ThingsBoard API reference](/docs/{{docsPrefix}}api). Here, you can find more detailed information about all supported protocols for device connectivity.

## Step 3. Create dashboard

A dashboard in ThingsBoard allows users to visualize and monitor data collected from IoT devices.

Let&#39;s create a dashboard and add three widgets to it in order to display a list of entities and their latest values, as well as show alarm signals related to the specified entity.

### Step 3.1 Create an empty dashboard

To create a new dashboard, follow these steps:

{% include images-gallery.html imageCollection="step31" showListImageTitles="true" %}

### Step 3.2 Add an Entities table widget

The "Entities table" widget displays a list of entities and their latest values. 
The list of entities corresponds to selected devices or other entities, and filters with the ability of additional full-text search and pagination options.

To add the table widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how the widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

Let&#39;s add your first widget:

{% include images-gallery.html imageCollection="step32" showListImageTitles="true" %}

Congratulations! You&#39;ve added your first widget.

In the "Entities table" widget, there are two columns. 
The first column displays the device&#39;s name, and the second column displays the value of the "temperature" key (device telemetry). 
So, each column corresponds to an added key.

Now you are able to send a new telemetry reading (as in [Step 1](#step-1-provision-device)), and it will immediately appear in the table.

### Step 3.3 Add a Chart widget

Chart widgets allow you to display time series data with customizable line charts and bar charts.

To add the chart widget we need to select it from the widget library. 
Chart widget displays multiple historical values of the same data key ("temperature" in our case).
We should also configure the time window to use the chart widget.

{% include images-gallery.html imageCollection="step33" showListImageTitles="true" %}

Congratulations! You have added the chart widget. Now you are able to send a new telemetry reading, and it will immediately appear in the chart. 

You can also adjust the time interval for displaying data in the widget, change the aggregation function, and specify the grouping interval.
To do this, open the [Time window](/docs/{{docsPrefix}}user-guide/dashboards/#time-window){:target="_blank"} and make the necessary adjustments. Update the time window settings by clicking the "Update" button.

{% include images-gallery.html imageCollection="step33_2" %}

### Step 3.4 Add an Alarms table widget

The alarms table widget displays alarms related to the specified entity in the certain time window.
Alarm widget is configured by specifying an entity as the alarm source, and the corresponding alarm fields.

{% include images-gallery.html imageCollection="step34" showListImageTitles="true" %}

Now it&#39;s time to configure alarm rules and raise some alarms. 

> **Note:** in this documentation, we are using a single device as a data source for the widgets. 
To use dynamic entities (for example, devices of a certain type or related to a certain asset) as data source, you should use the alias.
Alias is a reference to a single entity or a group of entities that are used in the widgets. 
You may learn more [about different aliases here](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"}.

## Step 4. Configure alarm rules

We will use the [alarm rules](/docs/user-guide/device-profiles/#alarm-rules){:target="_blank"} feature to raise the alarm when the temperature reading exceeds 25 degrees.
To do this, we should edit the device profile and add a new alarm rule.
The "My New Device" is using the "Default" device profile.
We recommend creating dedicated [device profiles](/docs/user-guide/device-profiles/){:target="_blank"} for each corresponding device type, but we&#39;ll skip this step here for simplicity.

{% include images-gallery.html imageCollection="step4" showListImageTitles="true" %}

## Step 5. Create alarm

Now, our alarm rule is active (see [Step 3](#step-3-configure-alarm-rules-and-trigger-an-alarm)), and we should send new telemetry on behalf of the device (see [Step 1.2](#step-12-connect-a-device)) to trigger the alarm.
> Note that the temperature value should be **26 or higher** to raise the alarm. Once we send a new temperature reading, we should immediately see a new alarm on our dashboard.

{% include images-gallery.html imageCollection="step5" showListImageTitles="true" %}

We also recommend reviewing alarm rule [examples](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules){:target="_blank"} and documentation about [alarm notifications](/docs/{{docsPrefix}}user-guide/device-profiles/#notifications-about-alarms){:target="_blank"}.

## Step 6. Alarm notifications

The ThingsBoard Notification center allows sending personalized notifications to end-users. These can include notifications about device activity, changes in temperature within your environment, or other events detected in your IoT ecosystem.
Learn more about notifications and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"}.

{% include images-gallery.html imageCollection="notification-center" %}

Additionally, the [ThingsBoard PE Mobile Application](/docs/pe/mobile/){:target="_blank"} allows users to receive instant push notifications directly on their smartphone. This ensures that you will always be promptly informed about any events in your IoT solution, no matter where you are.
Follow [this guide](/docs/pe/mobile/getting-started/){:target="_blank"} to learn how to install the ThingsBoard PE Mobile Application and set up push notifications delivery directly from ThingsBoard instance to your smartphone.

## Step 7. Share dashboard with customers

One of the most important ThingsBoard features is the ability to create end-user dashboards.
Each Customer User should see his own devices and should not be able to see devices or any other data that belongs to a different customer. 

We have already created the Device (see [Step 1](#step-1-provision-device)), the Dashboard and added widgets to it (see [Step 3](#step-3-create-dashboard)).
Now it&#39;s time to create a Customer and a Customer User and make sure they will have access to the device&#39;s data and the dashboard.
There are two options for how Tenant Administrator can give access to a certain Entity (Device, Dashboard, Asset, etc.) for a Customer:

* A. Assign the Customer as the owner of the entity. This option is useful to ensure that only this customer can access the device and its data (see [Step 7.2](#step-72-change-owner-of-the-device)).
* B. Share the entity with the Customer. This option is useful to share a single dashboard with multiple customers (see [Step 7.3](#step-73-share-the-dashboard)).
 
#### Step 7.1 Create a customer

Let&#39;s create a customer with the title "My New Customer". Please see the instructions below:

{% include images-gallery.html imageCollection="step71" showListImageTitles="true" %}

### Step 7.2 Change owner of the device

Let&#39;s assign the Customer as the owner of the device. We will also create a group of devices and add our device to this group.

{% include images-gallery.html imageCollection="step72" showListImageTitles="true" %}

Make sure that the device is assigned to your customer.

{% include images-gallery.html imageCollection="step72_1" showListImageTitles="true" %}

You can make the customer the owner of the device during its creation stage. To do this, follow this steps:

{% include images-gallery.html imageCollection="step72_2" showListImageTitles="true" %}

### Step 7.3 Share the dashboard

Let&#39;s share our dashboard with the customer.
In ThingsBoard, you can&#39;t share a single dashboard directly—you can only share a dashboard group that includes the dashboard you want to share.
By default, our dashboard is in the "All" group. Ideally, we would create a new dashboard group and move our dashboard there, but to keep things simple, we&#39;ll use the existing "All" group for this guide.

{% include images-gallery.html imageCollection="step73" showListImageTitles="true" %}

You can also share the dashboard with your customer or user during its creation stage.

{% include images-gallery.html imageCollection="step73_1" showListImageTitles="true" %}

### Step 7.4 Create a customer user

Now, let&#39;s create a user that will belong to the customer and will have `read-only` access both to the dashboard and the device itself.
You may optionally configure the dashboard to appear just after user logs in to the platform&#39;s web UI.

{% include images-gallery.html imageCollection="step74" showListImageTitles="true" %}

### Step 7.5 Activate the customer user

Finally, log in to ThingsBoard as a customer user.

- Paste the previously copied link into a new browser tab and press the "Enter" key. Now create a password by entering it twice and clicking "Create Password".
- You are now logged in as a customer user. Since this user has read-only access, you can view device data and its alarms, but you cannot acknowledge or clear them.   
To learn more about permissions and role-based access control (RBAC), click [here](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}.

{% include images-gallery.html imageCollection="step75" %}

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word. 
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.