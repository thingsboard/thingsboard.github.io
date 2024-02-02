* TOC
{:toc}

In the context of ThingsBoard, an "Alarm" refers to a notification system that is triggered when certain conditions occur in your devices, assets, customers, etc. 
These alarms are configured to monitor various situations such as exceeding threshold values, equipment malfunctions, or other important events requiring attention. 
Alarms assist in promptly addressing issues, preventing potential negative consequences, and ensuring efficient system operation. 

For example, you may configure ThingsBoard to automatically create an alarm when the temperature sensor reading is above a certain threshold.
Of course, this is a very simplified case, and real scenarios can be much more complex.

## Main concepts

Let's review the main concepts of the alarm below:

- **Originator**

The alarm originator is an entity that causes the alarm. For example, "Device A" is the initiator of an alarm if ThingsBoard receives a temperature reading from it that exceeds the threshold value specified in the alarm rule, and it creates a "High Temperature" alarm.

Alarm originator is an entity that causes the alarm.
For instance, "Device A" is an originator of the alarm if ThingsBoard receives a temperature reading from it and raise the "HighTemperature" alarm because the reading exceeds the threshold.

- **Type**

Alarm type helps to identify the root cause of the alarm. It is set when creating an alarm rule. For example, "HighTemperature" and "LowHumidity" are two different alarms.

- **Severity**

Each alarm has severity which is either **Critical**, **Major**, **Minor**, **Warning**, or **Indeterminate** (sorted by priority in descending order). Also set when creating an alarm rule.

- **Lifecycle**

Alarm may be **active** or **cleared**. When ThingsBoard creates an alarm it persists the *start* and *end time* of the alarm. By default, the start time and the end time are the same. 
If the alarm trigger condition repeats, the platform updates the end time. ThingsBoard can automatically clear the alarm when an event occurs that matches an alarm clearing condition.
Alarm clear condition is optional. A user can clear the alarm manually.

Besides active and cleared alarm state, ThingsBoard also keeps track of whether someone has acknowledged the alarm. 
Alarm acknowledgment is possible via the [dashboard widget](#how-to-visualize-alarms-on-the-dashboard), or an entity details tab.        

To summarize, there are 4 possible values of the "*status*" field: 

 * **Active unacknowledged(ACTIVE_UNACK)** - alarm is not cleared and not acknowledged yet;
 * **Active acknowledged(ACTIVE_ACK)** - alarm is not cleared, but already acknowledged;
 * **Cleared unacknowledged(CLEARED_UNACK)** - alarm was already cleared, but not yet acknowledged;
 * **Cleared acknowledged(CLEARED_ACK)** - alarm was already cleared and acknowledged.

- **Alarm uniqueness**

ThingsBoard identifies alarm using a combination of originator, type, and start time. 
Thus, at a single point in time, there is only one active alarm with the same originator, type, and start time.

Let's assume you have provisioned alarm rules to create a "HighTemperature" alarm when the temperature is greater than 20.
And you also provisioned alarm rules to clear the "HighTemperature" alarm when the temperature is less than or equal to 20.   

Assuming the following sequence of events:

 * 12:00 - temperature equals 18
 * 12:30 - temperature equals 22
 * 13:00 - temperature equals 25
 * 13:30 - temperature equals 18

Hence, you should create a single "HighTemperature" alarm with start time = 12:30 and end time = 13:00.

## How to create the alarm?

You must define parameters and rules according to which the alarm will be triggered.

The easiest way to create an alarm is to use the **Alarm rules** in the [Device profile](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules).

Let's create a rule when the temperature is greater than 25, an alarm with the type "High Temperature" and "Critical" severity will be triggered:

{% include images-gallery.html imageCollection="configure-alarm-rule" showListImageTitles="true" %}

Now, when the device receives a temperature value greater than 25, an alarm will be created.

The alternative option is to configure your custom logic in the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/) and use 
[Create Alarm](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#create-alarm-node) and [Clear Alarm](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node) rule nodes. 
You can find a corresponding example [here](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/).

## How to find alarms for a specific entity?

To view alarms use the "Alarms" page in the left menu.
Here you will see all reminders in list form, as well as the following information: creation time, source, alarm type, severity, [to whom assigned](#how-to-assign-alarm-to-user), and status of the alarm.
By default, only active alarms for all time are displayed here. If necessary, apply a filter and time interval to see other results.
To view alarm details, click on the ellipsis (...) in the "Details" column of the alarm you want to view.

{% include images-gallery.html imageCollection="find-alarms" %}

To find alarms for a specific entity (using the example of a device) you should:

- Go to the entities page. In our case, these are the "Devices" page;
- Click on the needed entity (device) to open its details;
- Navigate to the "Alarms" tab.

Here you will see all alarms related to this entity. Optionally, apply a filter and time interval.

{% include images-gallery.html imageCollection="find-alarm-for-specific-device" %}

## How to send notification when alarm is created or cleared?

To send notifications, including alarms, there is the ThingsBoard **Notification Center**.
By default, you will receive notifications about all your alarms and alarms of your customers.
The Notification Center allows you to flexibly configure rules for sending notifications about alarms to end users through the Thingsboard web interface, email, Slack, Microsoft Teams, or SMS.
Learn more about notifications and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications).

{% include images-gallery.html imageCollection="notification-about-alarm" %}

Alternatively, you can configure your custom logic in the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/), using the [Send Email](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#send-email-node) and [Send SMS](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#send-sms-node) rule nodes or others from the [External Nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/) to configure.
You can find an example, of how to send an email user using the rules engine [here](/docs/user-guide/rule-engine-2-0/tutorials/send-email/).

## Operations with alarms

Operations with alarms are possible via "Alarms" page, "Alarms table" widget, or a specific entity details tab.

### Assign alarm to user

To assign an alarm to a user, navigate to the "Alarms" tab of the entity details window and specify the user in the "Assignee" column.

When an alarm is assigned to the user, they will receive a notification about it.

{% include images-gallery.html imageCollection="assignee-alarm-1" %}

{% capture difference %}
**Note**. To assign an alarm to a specific user, this user must be the owner of the device from which the alarm came.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Acknowledge and/or clear alarm

Alarms have four statuses: acknowledged/unacknowledged/active/clear.

To acknowledge the alarm, click on the "acknowledge" icon in the Alarms table widget or click on the "acknowledge" button in the alarm details window.

{% include images-gallery.html imageCollection="acknowledge-alarm" %}

To clear the alarm, click on the "Clear" icon in the Alarms table widget or click on the "Clear" button in the alarm details window.

{% include images-gallery.html imageCollection="clear-alarm" %}

## How to find alarm comments and add your own?

To find comments on a specific alarm, open the detailed information about the alarm by clicking on the ellipsis (...) in the "Details" column.
Here you can view system comments, comments from other users, and leave your own.

{% include images-gallery.html imageCollection="alarm-comments-1" %}

There are two types of comments: user and system.
Authorized user may add, edit, and delete heir comments. System comments are non-editable grey-colored comments that describe alarm events such as changes to severity, alarm assignee etc. 

## How to visualize alarms on the dashboard?

Thingsboard has handy widgets for visualizing alarms on the dashboard.

The "**Alarms table**" widget allows you to conveniently display and management of alarms for selected entities based on a defined time window and filters.

{% include images-gallery.html imageCollection="visualize-alarms-on-dashboard-1" %}

The "**Alarm count**" widget displays the number of alarms based on the selected filter.

{% include images-gallery.html imageCollection="visualize-alarms-on-dashboard-2" %}

The filter setting allows you to:

 * Filter alarms by status using any combination of ack/unack/active/clear;
 * Filter alarms by severity using any combination of severity levels;
 * Displaying a list of alarms by types;
 * Enable or disable search of the propagated alarms (only for "Alarms table" widget).

How to add a widget to the monitoring panel, see this [document](/docs/pe/user-guide/widgets/#adding-a-widget-to-the-dashboard).

## How to query alarm using REST API? 

ThingsBoard provides REST API to manage and query alarms. See demo environment [Alarm REST API](https://demo.thingsboard.io/swagger-ui.html#/alarm-controller) and general [REST API](/docs/{{docsPrefix}}reference/rest-api/) documentation for more details.

## Propagation of alarms

Suppose you have a topology where one Tenant has 1000 Customers and each Customer has 1000 Devices.
Thus, you have 1M Devices in your server installation.
You may want to design a dashboard that displays all active alarms on the Tenant and Customer level.
To simplify the database queries and improve load time, ThingsBoard supports the propagation of the alarm.
When the alarm is created, we can specify whether it should be visible for parent entities or not.
We can also optionally specify the relations that should be present between the parent entities and the originator for the alarm to propagate.

Let's look at an example of how it works.

Let's say you have multiple offices with numerous devices in them. However, you only want to see alarms from devices that are associated with a specific office.
Let's create a dashboard that will display alarms only from devices that are related to Office A.

To find devices related to Office A, go to the "Assets" page, click on the needed asset and navigate to the "Relations" tab in the asset details window.
The following devices relations to the Office A: Thermometer A1, Thermometer B1, Thermometer B2, and Thermometer C3.

{% include images-gallery.html imageCollection="relations-to-asset" %}

In order for the alarm created on the device to propagate further, in the alarm rule settings of the device profile, check the box "**Propagate alarm to related entities**".

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