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
For example, you may configure ThingsBoard to automatically create an alarm when the temperature sensor reading is above a certain threshold.
Of course, this is a very simplified case, and real scenarios can be much more complex.


## Main concepts

Let's review the main concepts of the alarm below:

**Originator**

Alarm originator is an entity that causes the alarm.
For instance, Device A is an originator of the alarm if ThingsBoard receives a temperature reading from it and raise the “HighTemperature” alarm because the reading exceeds the threshold.

**Type**

Alarm type helps to identify the root cause of the alarm. For example, "HighTemperature" and "LowHumidity" are two different alarms.

**Severity**

Each alarm has severity which is either Critical, Major, Minor, Warning, or Indeterminate (sorted by priority in descending order).

**Lifecycle**

Alarm may be active or cleared. When ThingsBoard creates an alarm it persists the **start** and **end time** of the alarm. By default, the start time and the end time are the same. 
If the alarm trigger condition repeats, the platform updates the end time. ThingsBoard can automatically clear the alarm when an event occurs that matches an alarm clearing condition.
Alarm clear condition is optional. A user can clear the alarm manually.

Besides active and cleared alarm state, ThingsBoard also keeps track of whether someone has acknowledged the alarm. 
Alarm acknowledgment is possible via the dashboard widget, or an entity details tab.        

To summarize, there are 4 possible values of the "**status**" field: 

 * Active unacknowledged (ACTIVE_UNACK) - alarm is not cleared and not acknowledged yet;
 * Active acknowledged(ACTIVE_ACK) - alarm is not cleared, but already acknowledged;
 * Cleared unacknowledged(CLEARED_UNACK) - alarm was already cleared, but not yet acknowledged;
 * Cleared acknowledged(CLEARED_ACK) - alarm was already cleared and acknowledged;
 
**Alarm uniqueness**

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
 
**Propagation**

Suppose you have a topology where one Tenant has 1000 Customers and each Customer has 1000 Devices. 
Thus, you have 1M Devices in your server installation. 
You may want to design a dashboard that displays all active alarms on the Tenant and Customer level.
To simplify the database queries and improve load time, ThingsBoard supports the propagation of the alarm. 
When the alarm is created, we can specify whether it should be visible for parent entities or not. 
We can also optionally specify the relations that should be present between the parent entities and the originator for the alarm to propagate. 

Now, when you know the theory, let's proceed to practical tutorials.       

## Alarm FAQ and How-Tos

### How to create the alarm?

**The easiest way** is to use the [**Alarm Rules**](/docs/user-guide/device-profiles/#alarm-rules).

The alternative option is to configure your custom logic in the [Rule Engine](/docs/user-guide/rule-engine-2-0/re-getting-started/) and use 
[Create Alarm](/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node) and [Clear Alarm](/docs/user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node) rule nodes. 
You can find a corresponding example [here](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/).

### How to find alarms for a specific device or asset?

To find alarms for a specific device or asset you should:
* Open Assets or Device list;
* Select needed entity;
* Navigate to the Alarms tab;
* Choose an Alarm status and a time interval.

{% include images-gallery.html imageCollection="entityAlarms" %}

### How to visualize alarms on the dashboard?

See this [doc](/docs/getting-started-guides/helloworld/#step-35-add-alarm-widget) to add an alarm widget to the dashboard. 

You can also explore datasource settings and advanced settings of the widget.

The Datasource setting allows you to:

 * Specify the status filter using any combination of ack/unack/active/clear;
 * Specify severity filter using any combination of severity levels;
 * Specify a list of alarm types;
 * Enable or disable search of the propagated alarms (disabled by default).
 
{% include images-gallery.html imageCollection="alarmWidgetDataSettings" %}
 
### How to send notification when alarm is created or cleared?

To send notification when alarm is created or cleared, please check this [doc](/docs/user-guide/device-profiles/#notifications-about-alarms).  

### How to query alarm using REST API? 

ThingsBoard provides REST API to manage and query alarms. See demo environment [Alarm REST API](https://demo.thingsboard.io/swagger-ui.html#/alarm-controller) and general [REST API](/docs/reference/rest-api/) documentation for more details.

