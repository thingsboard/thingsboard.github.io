* TOC
{:toc}

**Alarms** are a key tool for monitoring events related to your entities — devices, assets, customers, and other components of your system. The alarm mechanism allows you to quickly react to anomalies, condition violations, or critical state changes, helping prevent potential issues and ensuring stable, efficient system operation.

For example, you can configure ThingsBoard to automatically create an alarm when the temperature exceeds a defined threshold. This is only a simple example — real-world scenarios may involve complex conditions, combined parameters, time intervals, aggregated data, or context-dependent logic.

The foundation of the alarm mechanism lies in the conditions and logic defined in [Alarm rules](/docs/{{docsPrefix}}user-guide/alarm-rules){:target="_blank"}. These rules determine when an alarm should be created, updated, or cleared. Once the rules are configured, the system begins generating the corresponding alarms, which you can view, filter, and manage through the dedicated interface. For more details on creating and configuring rules, see the [Alarm rules](/docs/{{docsPrefix}}user-guide/alarm-rules/){:target="_blank"} section.

This section focuses on the practical use of alarms, the available interface tools, and the best practices for working with them.

<hr>

## Notification about created or cleared an alarm

The [Notification center](/docs/{{docsPrefix}}user-guide/notifications){:target="_blank"} in ThingsBoard is responsible for delivering alerts about alarm events and other system activity to the appropriate users.
By default, you receive notifications for all alarms originating from your devices, as well as alarms created by customer entities (for Tenant Administrators).

{% include images-gallery.html imageCollection="notification-about-alarm" %}

The Notification center allows you to flexibly configure notification rules, defining who should receive notifications, under which conditions, and through which delivery channels.   
Available delivery channels include:
- ThingsBoard web interface
- Email
- SMS
- [Slack](/docs/{{docsPrefix}}user-guide/notifications/#slack){:target="_blank"}
- [Microsoft Teams](/docs/{{docsPrefix}}user-guide/notifications/#microsoft-teams){:target="_blank"}
- [ThingsBoard in-app notifications](/docs/{{docsPrefix}}mobile/){:target="_blank"}

Learn more about configuring the Notification сenter [here](/docs/{{docsPrefix}}user-guide/notifications){:target="_blank"}.

<hr>

## View and manage alarms

<b><font size="4">Alarms page</font></b>

Use the **Alarms** page in the left navigation menu to view and manage alarms. The page displays alarms related to your entities — devices, assets, customers, users — in a unified list that includes:
- Creation time
- Alarm source (Originator)
- Alarm type
- Severity
- Assigned user
- Status (active/cleared, acknowledged/unacknowledged)

To view more information about an alarm, click the three dots (…) in the **Details** column of the alarm you want to inspect.

By default, the page shows all active alarms. You can apply filters and time ranges to refine the results.

{% include images-gallery.html imageCollection="find-alarms" %}

<hr>

<b><font size="4">Alarm widgets</font></b>

ThingsBoard provides dedicated widgets for visualizing and managing alarms on dashboards:

<b><font size="3">Alarms table widget</font></b>

- Displays alarms for selected entities within a configurable time window
- Supports filtering by type, severity, acknowledgment, and propagation
- Allows performing alarm actions directly from the widget (acknowledge, clear, assign)

{% include images-gallery.html imageCollection="visualize-alarms-on-dashboard-1" %}

<b><font size="3">Alarm count widget</font></b>

- Shows the number of alarms matching defined filters
- Supports filtering by severity, status, and type
- Commonly used for high-level monitoring dashboards

{% include images-gallery.html imageCollection="visualize-alarms-on-dashboard-2" %}

To learn how to add widgets to dashboards, see the [dashboard configuration](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} documentation.

<hr>

<b><font size="4">Alarms of a specific entity</font></b>

View and manage alarms associated with a specific entity (for example, a device) directly on its details page.
- Open the **Devices** page (or the corresponding entity type)
- Select the desired entity
- In the entity details view, go to the **Alarms** tab

Here you can view and manage alarms that belong specifically to this entity.

{% include images-gallery.html imageCollection="find-alarm-for-specific-device" %}

Now let&#39;s consider what operations you can perform on alarms.

<hr>

## Alarm operations

### Acknowledge and clear alarms

Each alarm can have the following status dimensions:
- **Acknowledged** / **Unacknowledged**
- **Active** / **Cleared**

You can acknowledge or clear alarms from:
- The **Alarms** page
- The **Alarms table** widget
- The **Alarms** tab of an entity details page

<b><font size="3">Acknowledge</font></b>

Click **Acknowledge** to mark the alarm as reviewed. Acknowledgment does not affect alarm logic but helps operational workflows.

{% include images-gallery.html imageCollection="acknowledge-alarm" %}

<b><font size="3">Clear</font></b>

{% include images-gallery.html imageCollection="clear-alarm" %}

Click **Clear** to close the alarm. Clearing can be performed manually or automatically if a rule defines a clear condition.

<hr>

### Alarm comments

To view or leave comments:
- Open an **alarm&#39;s details** window by clicking the three dots (…) in the **Details** column.
- Scroll to the **Activity** section.

There are two types of comments:
- **User comments** — added manually, can be edited or deleted by the author.
- **System comments** — generated automatically (for example, when severity changes or an alarm is assigned). These are read-only and displayed in gray.

Comments help maintain an audit trail of operator actions and system events.

{% include images-gallery.html imageCollection="alarm-comments-1" %}

<hr>

## Key concepts

Let&#39;s review the main concepts of the alarm below:

### Originator

The **originator** is the entity that initiated the event leading to the alarm. For example, if a device sends telemetry that exceeds a configured threshold, that device becomes the originator of the alarm.

### Type

The alarm type is a semantic identifier describing the nature of the event (e.g. *High Temperature* or *Low Humidity*). 

Alarm type defines alarm uniqueness within an entity.

{% include images-gallery.html imageCollection="alarm-type" %}

### Severity

Indicates the criticality of the event. ThingsBoard supports five levels, listed from highest to lowest priority:
- **Critical**
- **Major**
- **Minor**
- **Warning**
- **Indeterminate**

Severity is assigned when an alarm is created and may be updated by rule logic.

{% include images-gallery.html imageCollection="alarm-severity" %}

### Status

An alarm has two primary dimensions:
- **Active** / **Cleared**
- **Acknowledged** / **Unacknowledged**

Together, these dimensions form four possible alarm states:
- *Active & Unacknowledged*
- *Active & Acknowledged*
- *Cleared & Unacknowledged*
- *Cleared & Acknowledged*

Alarms can be cleared either manually by a user or automatically when a predefined clear condition is satisfied. Configuring a clear condition is optional.

### Alarm uniqueness

ThingsBoard identifies an alarm using a combination of the **originator**, **type**, and **start time**.   
This means that at any given moment, only one active alarm can exist with the same originator, type, and start time.

**Example:**   
Suppose you configure a rule to create a "High Temperature" alarm when the temperature rises above 20, and a rule to clear the same alarm when the temperature is less than or equal to 20.

Event sequence:   
12:00 — temperature = 18 → no alarm   
12:30 — temperature = 22 → **alarm is created** (**startTime = 12:30**)   
13:00 — temperature = 25 → existing alarm updated   
13:30 — temperature = 18 → **the alarm is cleared** (**endTime = 13:30**)

As a result, the system produces a **single** "High Temperature" alarm with start time 12:30 and end time 13:30.

### Alarm timing details

<b><font size="4">Alarm start time & Alarm creation time</font></b>

An alarm includes two key timestamps:
- **Start time**. The moment when the alarm condition first becomes true. This reflects the actual event time based on the incoming telemetry.
- **Creation time**. The moment when ThingsBoard receives and processes the telemetry and creates the alarm.

In most cases, these timestamps match. However, they may differ when devices send delayed or backdated telemetry — for example, when operating offline or uploading data in batches.
In this situation, the alarm start time reflects the timestamp of the telemetry that crossed the threshold, while the creation time is the moment when ThingsBoard processed that message. As a result, the start time and creation time may differ.

**Example with delayed telemetry**

An air-quality monitoring system has a pollution threshold of 100 units.

**12:00** — sensor reports 95 → no alarm condition.   
**12:05** — sensor reports 105 → **alarm condition becomes true**.   
**12:08** — ThingsBoard receives and processes the data, **creating an alarm**.

Here:
- **startTime = 12:05** (moment the threshold was actually exceeded)
- **creationTime = 12:08** (moment the platform processed the telemetry)

This distinction is important for analyzing system reaction time and understanding event chronology.

<b><font size="4">Alarm end time</font></b>

When an alarm is created, **endTime** initially equals startTime. If the condition continues triggering (e.g., additional telemetry crosses the threshold), the alarm’s endTime updates accordingly until the alarm is cleared.

**Types of alarm trigger conditions**

Alarm rules allow choosing how the alarm creation moment is evaluated.
- **Simple** — the alarm is created immediately when the threshold is exceeded.
- **Duration** — the alarm is created only if the condition remains true for a specified period (for example, temperature above threshold for 5 minutes).
- **Repeating** — the alarm is created after the condition occurs a defined number of times (for example, on the fifth exceedance).

### Assignee

Alarms can be assigned to users responsible for resolving them. Assignment is available:

- On the **Alarms page**
- In the **Alarms table widget**
- In an entity’s **Alarms tab**

{% include images-gallery.html imageCollection="assignee-alarm-1" %}

{% capture difference %}
Note: A user can be assigned an alarm only if they have access rights to the corresponding entity.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Assigned users receive notifications according to their notification settings.

{% include images-gallery.html imageCollection="assignee-alarm-2" %}

### Alarm propagation

Alarm propagation makes an alarm visible not only on its originator but across related entities according to hierarchy and rule configuration.

**How it works**

When an alarm is created, ThingsBoard:
1. Identifies the originator
2. Analyzes entity relations
3. Applies propagation filters defined in the rule
4. Displays the alarm on all relevant entities

Each propagated alarm is not an independent copy — it is a representation of the same alarm shown for a different entity. The alarm state stays fully synchronized with the originator.

**Example scenario**

Hierarchy: **Tenant → Customer A → Office A (Asset) → Device A1**

If propagation is enabled and Device A1 triggers an alarm:
- Alarm appears on **Device A1**
- Propagates to **Office A**
- Becomes visible to **Customer A**
- May propagate further to **Tenant**

This ensures centralized visibility across multi-level infrastructures.

<hr>

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

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.