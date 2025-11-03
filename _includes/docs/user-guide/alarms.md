* TOC
{:toc}

ThingsBoard provides the ability to create and manage alarms related to your entities: devices, assets, customers, etc.
Alarms assist in promptly addressing issues, preventing potential negative consequences, and ensuring efficient system operation. 

For example, you may configure ThingsBoard to automatically create an alarm when the temperature sensor reading is above a certain threshold.
Of course, this is a very simplified case, and real scenarios can be much more complex.

## Main concepts

Let's review the main concepts of the alarm below:

### Originator

The alarm originator is an entity that causes the alarm. For example, "Device A" is the initiator of an alarm if ThingsBoard receives a temperature reading from it that exceeds the threshold value specified in the alarm rule, and it creates a "High Temperature" alarm.

### Type

Alarm type helps to identify the root cause of the alarm. It is set when [creating an alarm rule](#how-to-create-the-alarm). For example, "High Temperature" and "Low Humidity" are two different alarms.

{% include images-gallery.html imageCollection="alarm-type" %}

### Severity

Each alarm has severity which is either **Critical**, **Major**, **Minor**, **Warning**, or **Indeterminate** (sorted by priority in descending order). Also, set when [creating an alarm rule](#how-to-create-the-alarm).

{% include images-gallery.html imageCollection="alarm-severity" %}

### Status

Alarms in ThingsBoard can be **active** or **cleared**. The system can automatically clear an alarm if a predefined condition is met, though setting such an Alarm clear condition is optional. 
Additionally, users have the option to manually clear alarms.

Apart from the active and cleared states, ThingsBoard also monitors whether an alarm has been acknowledged by a user.

To summarize, there are four alarm statuses:
* **Active unacknowledged (ACTIVE_UNACK)** - alarm is not cleared and not acknowledged yet;
* **Active acknowledged (ACTIVE_ACK)** - alarm is not cleared but already acknowledged;
* **Cleared unacknowledged (CLEARED_UNACK)** - alarm was already cleared but not yet acknowledged;
* **Cleared acknowledged (CLEARED_ACK)** - alarm was already cleared and acknowledged.

[Managing alarms](#view-and-manage-alarms) can be done through the "Alarms" page, via a dashboard widget, or within an entity's details tab.

### Alarm uniqueness

ThingsBoard identifies alarm using a combination of originator, type, and start time. 
Thus, at a single point in time, there is only one active alarm with the same originator, type, and start time.

Let's assume you have provisioned alarm rules to create a "HighTemperature" alarm when the temperature is greater than 20.
And you also provisioned alarm rules to clear the "HighTemperature" alarm when the temperature is less than or equal to 20.   

Assuming the following sequence of events:

 * 12:00 - temperature equals 18
 * 12:30 - temperature equals 22
 * 13:00 - temperature equals 25
 * 13:30 - temperature equals 18

So, a single "High Temperature" alarm will be generated with start time = 12:30 and end time = 13:00.

### Alarm timing details

The alarm has a start time and a creation time. The alarm start time is determined by the moment the set threshold is exceeded (i.e., when the conditions for triggering the alarm first occurred), while the alarm creation time refers to the moment when the ThingsBoard system received telemetry from the device and processed it.
By default, start time and creation time are the same.

However, a device may send telemetry with a timestamp from the past, for example, if it was offline or if it's transmitting data for a specific time period with a delay.
And if the processing of this telemetry reveals that a threshold has been exceeded, ThingsBoard will generate an alarm. The alarm start time will be the timestamp of the message with the threshold value exceeded, and the alarm creation time will be the time ThingsBoard processed messages from the device.
In this case, the start time and alarm creation time will be different.

Imagine we have an air quality monitoring system that tracks pollution levels. The threshold for triggering an alarm is set at 100 pollution units.
- At 12:00, the sensor measures the pollution level, and it is 95 units — the alarm threshold is not exceeded.
- At 12:05, the next measurement shows 105 pollution units -  the alarm threshold is exceeded.
- At 12:08, the ThingsBoard receives data from the device, analyzes it, and registers the alarm. The alarm created time is 12:08, as that is the moment when the ThingsBoard system received and processed the device message.
The alarm start time is 12:05 because that is the exact moment when the conditions for triggering the alarm were first met.
 
Thus, the alarm start time and the alarm creation time can differ, which is important to consider when analyzing the system's response to emerging events.

Also, within the alarm's rule settings, you can define specific conditions under which the alarm is created:

- **Simple** - if the threshold value is exceeded, an alarm is created immediately;

{% include images-gallery.html imageCollection="alarm-creation-time-simple" %}

- **Duration** - an alarm will be created if the duration of exceeding the threshold value exceeds the specified value. For example, you allow a short-term increase in temperature in the room. But if the temperature remains elevated for more than 5 minutes, an alarm is created;

{% include images-gallery.html imageCollection="alarm-creation-time-duration" %} 

- **Repeating** - an alarm will be created if the threshold value is exceeded the specified number of times. For example, you allow the room temperature to rise above the threshold value four times. On the fifth occurrence, an alarm will be created.

{% include images-gallery.html imageCollection="alarm-creation-time-repeating" %}

When ThingsBoard creates an alarm, in addition to the creation and start time, it also stores the **end time** of the alarm. By default, the start time and the end time are the same. 
If the alarm trigger condition repeats, the platform updates the end time.

### Assignee

You can assign an alarm to a specific user so that, for example, he can respond to the elevated temperature in the room and take appropriate action.

You can assign an alarm to the user on the "Alarms" page, in the "Alarm Table" widget, or on the "Alarms" tab in the details window of the selected entity.

{% include images-gallery.html imageCollection="assignee-alarm-1" %}

{% capture difference %}
**Note**. To assign an alarm to a specific user, this user must be the owner of the device from which the alarm came.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Once the alarm is assigned, the user will receive a notification about it.

{% include images-gallery.html imageCollection="assignee-alarm-2" %}

### Propagation of alarms

Suppose you have a topology where one Tenant has 1000 Customers and each Customer has 1000 Devices.
Thus, you have 1M Devices in your server installation.
You may want to design a dashboard that displays all active alarms on the Tenant and Customer level.
To simplify the database queries and improve load time, ThingsBoard supports the propagation of the alarm.
We can specify whether an alarm should be visible for parent entities or not.
We can also optionally specify the relations that should be present between the parent entities and the originator for the alarm to propagate.

Alarm propagation settings are available in the *advanced settings* of the alarm rule of the device profile.

{% include images-gallery.html imageCollection="propagation-settings" %}

Let's look at an example of how it works. But first, we recommend reading the "[Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/)" guide. This will improve your understanding of ThingsBoard devices and dashboards and the concepts presented here.

Let's say you have multiple offices with numerous devices in them. However, you only want to see alarms from devices that are associated with a specific office.
Let's create a dashboard that will display alarms only from devices that are related to Office A.

To find devices related to Office A, go to the "Assets" page, click on the needed asset and navigate to the "Relations" tab in the asset details window.
The following devices relations to the Office A: Thermometer A1, Thermometer B1, Thermometer B2, and Thermometer C3.

{% include images-gallery.html imageCollection="relations-to-asset" %}

In order for the alarm created on the device to propagate further, in the alarm rule settings of the device profile, check the box "**Propagate alarm to related entities**". Additionally, you can specify relation types for alarm propagation.

{% include images-gallery.html imageCollection="propagate-alarm-to-related-entities" %}

Now, create a dashboard. Before adding a widget, create an alias that will filter the selected asset - "Office A".

{% include images-gallery.html imageCollection="propagate-alias" %}

Add the Alarms table widget. Specify the previously created alias as the alarm source.
Be sure to activate the "**Search propagated alarms**" option.

{% include images-gallery.html imageCollection="add-alarms-widget" %}

Now, send telemetry to one of the devices that exceeds the threshold value specified in the alarm rule to trigger an alarm.

{% include images-gallery.html imageCollection="propagate-send-telemetry" %}

An alarm has been created on the device, and thanks to our settings, the alarm has propagated to the related asset. You can also see the created alarm on the "Alarms" tab   the asset details window.

{% include images-gallery.html imageCollection="propagate-alarm-created" %}

Now that you know the theory, let's proceed to practical tutorials.

## How to create the alarm?

You must define parameters and rules according to which the alarm will be triggered.

The easiest way to create an alarm is to use the **alarm rules** in the **Device profile**. By following [this guide](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules), you can easily configure the rules for creating alarms for most of your tasks.

Device Profile alarm rules are not limited to basic conditions. They are flexible enough to handle more complex logic, enabling you to combine multiple parameters, thresholds, or states into a single alarm definition. This makes them suitable for both simple monitoring scenarios (such as temperature exceeding a limit) and advanced workflows (such as combining device attributes and telemetry, and time conditions).

## Notification about created or cleared an alarm

To send notifications, including alarms, there is the ThingsBoard [Notification Center](/docs/{{docsPrefix}}user-guide/notifications).
By default, you will receive notifications about all your alarms and alarms of your customers.
The Notification Center allows you to flexibly configure rules for sending notifications about alarms to end users through the ThingsBoard web interface, email, Slack, Microsoft Teams, or SMS.
Learn more about notifications and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications).

{% include images-gallery.html imageCollection="notification-about-alarm" %}

Alternatively, you can configure your custom logic in the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/), using the [Send Email](/docs/user-guide/rule-engine-2-0/nodes/external/send-email/) and [Send SMS](/docs/user-guide/rule-engine-2-0/nodes/external/send-sms/) rule nodes or others from the [External Nodes](/docs/user-guide/rule-engine-2-0/nodes/external/) to configure.
You can find an example of how to send an email to a user using the rules engine [here](/docs/user-guide/rule-engine-2-0/tutorials/send-email/).

## View and manage alarms

**Alarms page**

To view and manage alarms, use the "Alarms" page in the left menu.
Here you will see all alarms related to your entities: devices, assets, customers, etc., and alarms of your customers and users in the form of a list form, as well as the following information: creation time, source, alarm type, severity, [to whom assigned](#assign-alarm-to-user), and status of the alarm.
By default, only active alarms for all time are displayed here. If necessary, apply a filter and time interval to see other results.
To view more information about an alarm, click on the ellipsis (...) in the "Details" column of the alarm you want to view.

{% include images-gallery.html imageCollection="find-alarms" %}

<br>
**Alarm widgets**

Also, the ThingsBoard has handy widgets for visualizing alarms on the dashboard.

The "**Alarms table**" widget allows you to conveniently display and manage alarms for selected entities based on a defined time window and filters.

{% include images-gallery.html imageCollection="visualize-alarms-on-dashboard-1" %}

The "**Alarm count**" widget displays the number of alarms based on the selected filter.

{% include images-gallery.html imageCollection="visualize-alarms-on-dashboard-2" %}

The filter setting allows you to:

* Filter alarms by status using any combination of acknowledge/unacknowledge/active/clear;
* Filter alarms by severity using any combination of severity levels;
* Displaying a list of alarms by type;
* Enable or disable search of the propagated alarms (only for "Alarms table" widget).

How to add a widget to the monitoring panel, see this [document](/docs/{{docsPrefix}}user-guide/widgets/#adding-a-widget-to-the-dashboard).

<br>
**Alarms of a specific entity**

To find alarms for a specific entity (in our case, device), you should:

- Go to the entities page. In our case, these are the "Devices" page;
- Click on the needed entity (device) to open its details;
- Navigate to the "Alarms" tab.

Here you will see all alarms related to this entity. Optionally, apply a filter and time interval.

{% include images-gallery.html imageCollection="find-alarm-for-specific-device" %}

Now let's consider what operations you can perform on alarms.

### Acknowledge and/or clear alarm

Alarms have four statuses: acknowledged/unacknowledged/active/clear.

To acknowledge the alarm, click on the "Acknowledge" icon in the Alarms table widget or click on the "Acknowledge" button in the alarm details window on the "Alarms" page, or on the "Alarms" tab of the entity details window.

{% include images-gallery.html imageCollection="acknowledge-alarm" %}

To clear the alarm, click on the "Clear" icon in the Alarms table widget or click on the "Clear" button in the alarm details window.

{% include images-gallery.html imageCollection="clear-alarm" %}

### Alarm comments

To find comments on a specific alarm, open the detailed information about the alarm by clicking on the ellipsis (...) in the "Details" column.
Here you can view system comments, comments from other users, and leave your own.

{% include images-gallery.html imageCollection="alarm-comments-1" %}

There are two types of comments: user and system.
Authorized users may add, edit, and delete their comments. System comments are non-editable grey-colored comments that describe alarm events such as changes to severity, alarm assignee etc. 

## Alarm management using REST API

ThingsBoard provides REST API to manage and query alarms. See demo environment [Alarm REST API](https://demo.thingsboard.io/swagger-ui.html#/alarm-controller) and general [REST API](/docs/{{docsPrefix}}reference/rest-api/) documentation for more details.
