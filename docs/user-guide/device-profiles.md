---
layout: docwithnav
assignees:
- ashvayka
title: Device Profiles
description: IoT device profiles
redirect_from: "/docs/user-guide/ui/device-profiles"
ruleChainSetting:
    0:
        image: /images/user-guide/device-profile/rule-chain-setting.png

queueNameSetting:
    0:
        image: /images/user-guide/device-profile/queue-name-setting.png

transportSetting:
    0:
        image: /images/user-guide/device-profile/transport-setting.png

mqttProtobufSetting:
    0:
        image: /images/user-guide/device-profile/mqtt-protobuf-setting.png
    
alarmСonditions:
    0:
        image: /images/user-guide/device-profile/alarm-example-1-step-1.png  
        title: 'Step 1. Open the device profile and toggle edit mode.'
    1:
        image: /images/user-guide/device-profile/alarm-example-1-step-2.png
        title: 'Step 2. Click the "Add alarm rule" button.'
    2:
        image: /images/user-guide/device-profile/alarm-example-1-step-3.png
        title: 'Step 3. Input Alarm Type and click on the red "+" sign.'
    3:
        image: /images/user-guide/device-profile/alarm-example-1-step-4.png
        title: 'Step 4. Click the "Add Key Filter" button.'
    4:
        image: /images/user-guide/device-profile/alarm-example-1-step-5.png
        title: 'Step 5. Select the "Timeseries" key type. Input the "temperature" key name. Change "Value type" to "Numeric". Click the "Add" button.'
    5:
        image: /images/user-guide/device-profile/alarm-example-1-step-6.png
        title: 'Step 6. Select the "greater than" operation and input the threshold value. Click "Add".'
    6:
        image: /images/user-guide/device-profile/alarm-example-1-step-7.png
        title: 'Step 7. Click the "Save" button.'
    7:
        image: /images/user-guide/device-profile/alarm-example-1-step-8.png
        title: 'Step 8. Finally, apply changes.'

alarmСonditionsWithDuration:
    0:
        image: /images/user-guide/device-profile/alarm-example-2-step-1.png  
        title: 'Step 1. Edit the alarm condition and change the condition type to "Duration". Specify duration value and unit. Save the condition.'
    1:
        image: /images/user-guide/device-profile/alarm-example-2-step-2.png
        title: 'Step 2. Apply changes.'
        
alarmСonditionsWithRepeating:
    0:
        image: /images/user-guide/device-profile/alarm-example-3-step-1.png  
        title: 'Step 1. Edit the alarm condition and change the condition type to "Repeating". Specify 3 as "Count of events".  Save the condition.'
    1:
        image: /images/user-guide/device-profile/alarm-example-3-step-2.png
        title: 'Step 2. Apply changes.'
        
alarmСonditionsClear:
    0:
        image: /images/user-guide/device-profile/alarm-example-4-step-1.png  
        title: 'Step 1. Open the device profile and toggle edit mode. Click the "Add clear condition" button.'
    1:
        image: /images/user-guide/device-profile/alarm-example-4-step-2.png
        title: 'Step 2. Click on the red "+" sign.'
    2:
        image: /images/user-guide/device-profile/alarm-example-4-step-3.png
        title: 'Step 3. Add Key Filter.'
    3:
        image: /images/user-guide/device-profile/alarm-example-4-step-4.png
        title: 'Step 4. Finally, apply changes.'
 
alarmСonditionsSchedule:
    0:
        image: /images/user-guide/device-profile/alarm-example-5-step-1.png  
        title: 'Step 1. Edit the schedule of the alarm rule.'
    1:
        image: /images/user-guide/device-profile/alarm-example-5-step-2.png
        title: 'Step 2. Select timezone, days, time interval, and click "Save".'
    2:
        image: /images/user-guide/device-profile/alarm-example-5-step-3.png
        title: 'Step 3. Finally, apply changes.'
        
alarmСonditionsAdvanced:
    0:
        image: /images/user-guide/device-profile/alarm-example-6-step-1.png  
        title: 'Step 1. Modify the temperature key filter and change the value type to dynamic.'
    1:
        image: /images/user-guide/device-profile/alarm-example-6-step-2.png
        title: 'Step 2. Select a dynamic source type and input the *temperatureAlarmThreshold*, then click "Update".'
    2:
        image: /images/user-guide/device-profile/alarm-example-6-step-3.png
        title: 'Step 3. Add another key filter for the *temperatureAlarmFlag*, then click "Add".'
    3:
        image: /images/user-guide/device-profile/alarm-example-6-step-4.png
        title: 'Step 4. Finally, click "Save" and apply changes.'
    4:
        image: /images/user-guide/device-profile/alarm-example-6-step-5.png
        title: 'Step 5. Provision device attributes either manually or via the script.'

ruleNode:
    0:
        image: /images/user-guide/device-profile/device-profile-rule-node.png 
    1:
        image: /images/user-guide/device-profile/device-profile-rule-node2.png
        
notifications:
    0:
        image: /images/user-guide/device-profile/device-profile-notifications.png           
---

* TOC
{:toc}

## Overview

Since ThingsBoard 3.2, the Tenant administrator is able to configure common settings for multiple devices using Device Profiles. 
Each Device has one and only profile at a single point in time. 

Experienced ThingsBoard users can notice that the device type has been deprecated in favor of the Device Profile. 
The update script will automatically create Device Profiles based on unique Device Types and assign them to the appropriate devices.  

Let's take a look at the settings available in the device profile one by one.
 
## Device Profile settings

### Rule Chain

By default, the [Root Rule Chain](/docs/user-guide/rule-engine-2-0/overview/#rule-chain) processes all incoming messages and events for any device. 
However, the more different device types you have, the more complex your Root Rule Chain may become. 
Many platform users create their Root Rule Chain for the sole purpose of sending messages to specific rule chains depending on the device type. 

To avoid this painful and mundane activity, since ThingsBoard 3.2, you can specify a custom root Rule Chain for your devices.
The new Rule Chain will receive all telemetry, device activity(Active/Inactive), and device lifecycle(Created/Updated/Deleted) events.
This setting is available in the Device Profile wizard and in the Device Profile details.  

{% include images-gallery.html imageCollection="ruleChainSetting" %}

### Queue Name

By default, the [Main](/docs/user-guide/rule-engine-2-0/overview/#rule-engine-queue) queue will be used to store all incoming messages and events from any device.
The transport layer will submit messages to this queue and Rule Engine will poll the queue for new messages.
However, for multiple use cases, you might want to use different queues for different devices. 
For example, you might want to isolate data processing for Fire Alarm/Smoke Detector sensors and other devices.
This way, even if your system has a peak load produced by millions of water meters, whenever the Fire Alarm is reported, it will be processed without delay.
Separation of the queues also allows you to customize different [submit](/docs/user-guide/rule-engine-2-0/overview/#queue-submit-strategy) and [processing](/docs/user-guide/rule-engine-2-0/overview/#queue-processing-strategy) strategies.

This setting is available in the Device Profile wizard and Device Profile details. 
**Please note** that if you choose to use a custom queue name, you should configure it in the [thingsboard.yml](/docs/user-guide/install/config/#thingsboard-core-settings) file before you using it.

{% include images-gallery.html imageCollection="queueNameSetting" %}

### Transport configuration

Since ThingsBoard 3.2, the platform supports two transport types: Default and MQTT. 

#### Default transport type

The Default transport type is intended for backward compatibility with previous releases. 
With the Default transport type, you can continue to use the platform's default [MQTT](/docs/reference/mqtt-api/), [HTTP](/docs/reference/http-api/), and [CoAP](/docs/reference/mqtt-api/) APIs to connect your devices.
There is no specific configuration setting for the default transport type. 

#### MQTT transport type

The MQTT transport type enables advanced MQTT transport settings. 
Now you are able to specify custom MQTT topics filters for time-series data and attribute updates that correspond to the
[telemetry upload API](/docs/reference/mqtt-api/#telemetry-upload-api) and [attribute update API](/docs/reference/mqtt-api/#publish-attribute-update-to-the-server), respectively.

**The MQTT transport type has the following settings:**

##### MQTT device topic filters

Custom MQTT topic filters support single '+' and multi-level '#' wildcards and allow you to connect to almost any MQTT based device that sends a payload using JSON or Protobuf.
For example, using the configuration from the image below will allow you to publish time-series data with the following command:

```bash
mosquitto_pub -h 'demo.thingsboard.io' -i 'c1' -u 't1' -P 'secret' -t '/telemetry' -m '{"humidity": 10.3}'
```
{: .copy-code}

and attribute updates with the following command:

```bash
mosquitto_pub -h 'demo.thingsboard.io' -i 'c1' -u 't1' -P 'secret' -t '/attributes' -m '{"firmwareVersion": "1.3"}'
```
{: .copy-code}

assuming you have provisioned basic MQTT credentials for your device with the client id 'c1', username 't1' and password 'secret'.

{% include images-gallery.html imageCollection="transportSetting" %}

##### MQTT device payload

By default, the platform expects devices to send data via JSON. However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers)

Protocol Buffers, or Protobuf, is a language- and a platform-neutral way of serializing structured data. It is convenient to minimize the size of transmitted data.  

At the moment of writing (ThingsBoard 3.2), platform supports customizable proto schemas for [telemetry upload](/docs/reference/mqtt-api/#telemetry-upload-api) 
and [attribute upload]/docs/reference/MQTT-API/#publish-attribute-update-to-the-server). 
We plan to the add ability to define a schema for downlink messages (RPC calls and attribute updates) in future releases.  

{% include images-gallery.html imageCollection="mqttProtobufSetting" %}


ThingsBoard parses the protobuf structures dynamically, that is why, it does not support some protobuf features like OneOf, extensions and maps, yet.


### Alarm Rules

Platform users can use Rule Engine to configure alarms. Rule Engine is a quite powerful feature, but it requires some programming skills.
Since ThingsBoard 3.2, we have introduced Alarm Rules to simplify the process of configuring the most popular alarm types.
Now you don't need to be the Rule Engine guru to configure your processing logic. 
Under the hood, Rule Engine evaluates Alarm Rules using the "Device Profile" rule node.


Alarm Rule consists of the following properties:

 * **Alarm Type** - a type of Alarm. Alarm type must be unique within the device profile alarm rules;
 * **Create Conditions** - defines the criteria when the Alarm will be created/updated. The condition consists of the following properties:
   * Severity - will be used to create/update an alarm. ThingsBoard verifies Create Conditions in the descending order of the severity. For example, if a condition with Critical severity is true, the platform will raise alarm with Critical severity, and "Major", "Minor" or "Warning" conditions will not be evaluated. Severity must be unique per alarm rule (e.g., two conditions created within the same alarm rule can't have the same severity);        
   * Key Filters - list of logical expressions against attributes or telemetry values. For example, *"(temperature < 0 OR temperature > 20) AND softwareVersion = '2.5.5'"*;
   * Condition Type - either simple, duration, or repeating. For example, *3 times in a row* or *during 5 minutes*. The simple condition will raise an alarm once the first matching event occurrs;
   * Schedule - defines the time interval during which the rule is active. Either "active all the time", "active at specific time" or "custom";
   * Details - the alarm details template supports substitution of the telemetry and/or attribute values using ${attributeName} syntax;
 * **Clear condition** - defines criteria when the Alarm will be cleared;
 * **Advanced settings** - defines alarm propagation to related assets, customers, tenant, or other entities.    

Let's learn how to use the Alarm Rules with an example. Let's assume we would like to keep track of the temperature inside of the fridge with valuable goods.  
We also assume that we have already created a device profile called "Temperature Sensors", and provisioned our device with the temperature sensor and with access token - "ACCESS_TOKEN".
The command listed below upload the temperature readings to demo.thingsboard.io.  

```bash
mosquitto_pub -d -h 'demo.thingsboard.io' -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m '{"temperature": 5.3}'
```
{: .copy-code}

#### Example 1. Simple alarm conditions 
 
We would like to create a **Critical** alarm when the temperature is greater than 10 degrees.

{% include images-gallery.html imageCollection="alarmСonditions" showListImageTitles="true" %} 

#### Example 2. Alarm condition with a duration

Let's assume that we would like to modify Example 1 and raise alarms only if the temperature exceeds a certain threshold for 1 minute. 

For this purpose, we need to edit the alarm condition and modify the condition type from "Simple" to "Duration". We should also specify the duration value and unit.

{% include images-gallery.html imageCollection="alarmСonditionsWithDuration" showListImageTitles="true" %} 

#### Example 3. Repeating alarm condition

Let's assume we would like to modify Example 1 and raise alarms only if the sensor reports a temperature that exceeds the threshold 3 times in a row.

For this purpose, we need to edit the alarm condition and modify the condition type from "Simple" to "Repeating". We should also specify 3 as 'Count of events'.

{% include images-gallery.html imageCollection="alarmСonditionsWithRepeating" showListImageTitles="true" %} 

#### Example 4. Clear alarm rule

Let's assume we would like to automatically clear the alarm if the temperature in the fridge goes back to normal.

{% include images-gallery.html imageCollection="alarmСonditionsClear" showListImageTitles="true" %}

#### Example 5. Define alarm rule schedule

Let's assume we would like an alarm rule to evaluate alarms only during working hours.

{% include images-gallery.html imageCollection="alarmСonditionsSchedule" showListImageTitles="true" %}

#### Example 6. Advanced thresholds

Let's assume we would like our users to be able to overwrite the thresholds from Dashboard UI. 
We can also add the flag to enable or disable certain alarms for each device. 
For this, we will use dynamic values in the alarm rule condition. 
We will use two attributes: the boolean *temperatureAlarmFlag*, and the numeric *temperatureAlarmThreshold*.
Our goal is to trigger an alarm creation when "*temperatureAlarmFlag* = True AND *temperature* is greater than *temperatureAlarmThreshold*".

{% include images-gallery.html imageCollection="alarmСonditionsAdvanced" showListImageTitles="true" %}

#### Device profile rule node

Device Profile rule node creates and clears alarms based on the alarm rules defined in the device profile. 
By default, this is the first rule node in the chain of processing. 
The rule node processes all incoming messages and reacts to the attributes and telemetry values.
There are two important settings in the rule node:

**Persist state of alarm rules** - forces the rule node to store the state of processing. Disabled by default. This setting is useful if you have duration or repeating conditions. 
Let's assume you have a condition "Temperature is greater than 50 for 1 hour", and the first event with a temperature greater than 50 was reported at 1 pm. 
At 2 pm you should receive the alarm (assuming temperature conditions will not change). 
However, if you will restart the server after 1 pm and before 2 pm, the rule node needs to lookup the state from DB.
Basically, if you enable this and the 'Fetch state of alarm rules' option, the rule node will be able to raise the alarm. 
If you leave it disabled, the rule node will not generate the alarm.
We disable this setting by default for performance reasons. If enabled, and if the incoming message matches at least one of the alarm conditions, it will cause additional write operation to persist in the state.

**Fetch state of alarm rules** - forces rule node to restore the state of processing on initialization. Disabled by default. This setting is useful if you have duration or repeating conditions. 
It should work in tandem with the 'Persist state of alarm rules' option, but on rare occasions, you may want to disable this setting while the 'Persist state of alarm rules' option is enabled.
Assuming you have many devices that send data frequently or constantly, you can avoid loading the state from the DB on initialization. 
The Rule Node will fetch the state from the database when the first message from a specific device arrives.     

{% include images-gallery.html imageCollection="ruleNode" %}

#### Notifications about alarms

Assuming you have configured alarm rules you may also want to receive a notification when ThingsBoard creates or updates the alarm.
The device profile rule node has three main outbound relation types that you can use: 'Alarm Created', 'Alarm Severity Updated', and 'Alarm Cleared'.
See the example rule chain below. Please make sure that the system administrator has configured the SMS/email providers before you proceed or configure your own settings in the rule nodes. 

You may also use existing guides: 
[Send email on alarm](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) (Use part which explains 'to email' and 'send email' nodes) 
or [Telegram notifications](/docs/user-guide/rule-engine-2-0/tutorials/integration-with-telegram-bot/).
There is also an additional 'Alarm Updated' relation type that should be ignored in most cases to avoid duplicate notifications.

{% include images-gallery.html imageCollection="notifications" %}

### Device provisioning

Device provisioning allows a device to automatically register in ThingsBoard either during or after manufacturing. 
**See separate documentation [page](/docs/user-guide/device-provisioning/) for more details.**




 
    
