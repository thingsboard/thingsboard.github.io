---
layout: docwithnav
assignees:
- ashvayka
title: Working with IoT device alarms
description: IoT device alarm management using ThingsBoard alarms feature
entityAlarms:
    0:
        image: /images/user-guide/alarms/alarm-entity-details.png
        
alarmWidgetDataSettings:
    0:
        image: /images/user-guide/alarms/basic-widget-settings.png
    1:
        image: /images/user-guide/alarms/advanced-widget-settings.png        

---

* TOC
{:toc}

ThingsBoard provides the ability to create and manage alarms related to your entities: devices, assets, customers, etc.
For example, you may configure ThingsBoard to automatically create alarm when temperature sensor reading is above certain threshold.
Of course, this is a very simplified case, and real scenarios may be much more complex.


## Main concepts

Let's review main concepts of the alarm below:

**Originator**

Alarm originator is an entity that caused the alarm. 
For example, if ThingsBoard receives temperature reading from Device A and raise the "HighTemperature" alarm because the reading exceeds the threshold, then Device A is an originator of the alarm.

**Type**

Alarm type helps to identify the root cause of the alarm. For example, "HighTemperature" or "LowHumidity" are two different alarms.

**Severity**

Each alarm has severity which is either Critical, Major, Minor, Warning or Indeterminate (sorted by priority in descending order).

**Lifecycle**

Alarm may be active or cleared. When ThingsBoard creates an alarm it persists the **start** and **end time** of the alarm. By default, start and end time are the same. 
If alarm trigger condition repeats, platform will update the end time. ThingsBoard may automatically clear the alarm when event that matches alarm clear condition happens.
Alarm clear condition is optional. User may clear the alarm manually.

Besides active and cleared alarm state, ThingsBoard also tracks whether someone has acknowledged the alarm. Alarm acknowledgement is possible via dashboard widget or entity details tab.        

To summarize, there are 4 possible values of the "**status**" field: 

 * Active unacknowledged (ACTIVE_UNACK) - alarm is not cleared and not acknowledged yet;
 * Active acknowledged(ACTIVE_ACK) - alarm is not cleared but already acknowledged;
 * Cleared unacknowledged(CLEARED_UNACK) - alarm was already cleared but not yet acknowledged;
 * Cleared acknowledged(CLEARED_ACK) - alarm was already cleared and acknowledged;
 
**Alarm uniqueness**

ThingsBoard identifies alarm using a combination of originator, type, and start time. 
Thus, at a single point in time, there should be only one active alarm with the same originator, type, and start time.

Let's assume you have provisioned alarm rules to create "HighTemperature" alarm when temperature is greater than 20.
And you also provisioned alarm rules to clear the "HighTemperature" alarm when temperature is less than or equal 20.   

Assuming the following sequence of events:

 * 12:00 - temperature equals 18
 * 12:30 - temperature equals 22
 * 13:00 - temperature equals 25
 * 13:30 - temperature equals 18
 
We will create single "HithTemperature" alarm with start time = 12:30 and end time = 13:00.
 
**Propagation**

Let's assume your have a topology where one Tenant has 1000 Customers and each Customer has 1000 Devices. 
Thus, you have 1M Devices in your server installation. 
You may want to design a dashboard that displays all active alarms on the Tenant and Customer level.
To simplify the database queries and improve load time, ThingsBoard supports propagation of the alarm. 
When alarm is created, we can specify whether it should be visible for parent entities or not. 
We can also optionally specify the relations that should be present between the parent entities and the originator in order for alarm to be propagated. 

Now, when you know the theory, let's proceed to practical tutorials.       

## Alarm FAQ and How-Tos

### How to create the alarm?

The **easiest way** is to use the [**Alarm Rules**](/docs/user-guide/device-profiles/#alarm-rules).

The alternative option is to configure your custom logic in the [Rule Engine](/docs/user-guide/rule-engine-2-0/re-getting-started/) and use 
[Create Alarm](/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node) and [Clear Alarm](/docs/user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node) rule nodes. 
You may find corresponding example [here](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/).

### How to find alarms for a specific device or asset?

Click on the image below for instructions:

{% include images-gallery.html imageCollection="entityAlarms" %}

### How to visualize alarms on the dashboard?

See this [doc](/docs/getting-started-guides/helloworld/#step-35-add-alarm-widget) to add alarm widget to the dashboard. 

You may also explore datasource settings and advanced settings of the widget.

The Data Source setting allows you to:

 * Specify status filter using any combination of ack/unack/active/clear.
 * Specify severity filter using any combination of severity levels.
 * Specify list of alarm types. 
 * Enable or disable search of the propagated alarms. Disabled by default
 
{% include images-gallery.html imageCollection="alarmWidgetDataSettings" %}
 
### How to send notification when alarm is created or cleared?

Please check this [doc](/docs/user-guide/device-profiles/#notifications-about-alarms).  

### How to query alarm using REST API? 

ThingsBoard provides REST API to manage and query alarms. See demo environment [Alarm REST API](https://demo.thingsboard.io/swagger-ui.html#/alarm-controller) and general [REST API](/docs/reference/rest-api/) documentation for more details.

