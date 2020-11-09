---
layout: docwithnav
assignees:
- ashvayka
title: Device Profiles
description: IoT device profiles

---

* TOC
{:toc}

## Overview

Since ThingsBoard 3.2, Tenant administrator is able to configure common settings for multiple devices using Device Profiles. 
Each Device has one and only one profile at a single point in time. 

Experienced ThingsBoard users may notice that Device Type is deprecated in favor of Device Profile. 
The upgrade script will automatically create Device Profiles based on unique Device Types and assign them to corresponding devices.  

Let's review the settings available in the device profile, one-by-one.
 
## Device Profile settings

### Rule Chain

By default, [Root Rule Chain](/docs/user-guide/rule-engine-2-0/overview/#rule-chain) will process all incoming messages and events for any device. 
However, the more different device types you have, the more complex your Root Rule Chain may become. 
Many platform users design their root rule chain with only one purpose - dispatch the messages to specific rule chain based on device type. 

To avoid this painful and routine activity, since ThingsBoard 3.2 you may specify alternative default Rule Chain for your devices.
The new Rule Chain will receive all telemetry, device activity(Active/Inactive) and device lifecycle(Created/Updated/Deleted) events.
This setting is available in the Device Profile wizard and Device Profile details.  

 ![image](/images/user-guide/device-profile/rule-chain-setting.png)      


### Transport configuration

Since ThingsBoard 3.2, the platform supports two transport types: Default and MQTT. 

The Default transport type is for backward compatibility with previous releases. 
With Default transport type, you can continue to use [MQTT](/docs/reference/mqtt-api/), [HTTP](/docs/reference/http-api/) and [CoAP](/docs/reference/mqtt-api/) APIs to connect your devices.

The MQTT transport type enables advanced MQTT transport settings. 
Now you are able to specify custom MQTT topics filters for time-series data and attribute updates which correspond to 
[telemetry upload API](/docs/reference/mqtt-api/#telemetry-upload-api) and [attribute update API](/docs/reference/mqtt-api/#publish-attribute-update-to-the-server) respectively.

Custom MQTT topic filters support single '+' and multi-level '#' wildcards and allow you to connect almost any MQTT based device that sends payload using JSON.
For example, using configuration from the image below will allow you to publish time-series data with the following command:

```bash
mosquitto_pub -h 'demo.thingsboard.io' -i c1 -u 't1' -P 'secret' -t '/telemetry' -m '{"humidity": 10.3}'
```
{: .copy-code}

and attribute updates with the following command:

```bash
mosquitto_pub -h 'demo.thingsboard.io' -i c1 -u 't1' -P 'secret' -t '/attributes' -m '{"firmwareVersion": "1.3"}'
```
{: .copy-code}

assuming you have provisioned basic mqtt credentials for your device with the client id 'c1', username 't1' and password 'secret'.

![image](/images/user-guide/device-profile/transport-setting.png)       

However, the platform also supports Protobuf payloads. //TODO: add description.

### Alarm Rules

By default, platform users should use Rule Engine to configure alarms. 
Rule Engine is a quite powerful feature but requires some programming skills.
We have introduced simple Alarm Rules to simplify the process of configuring most popular alarm types. 
Under the hood, Alarm Rules are still evaluated in the Rule Engine using the "Device Profile" rule node. 
Although now you don't need to be the Rule Engine guru to configure your processing logic. 

Let's learn how to use the Alarm Rules by example.

#### Example 1. Simple alarm conditions 
 
Let's assume I would like to create **Minor** alarm when temperature is greater than 30 degrees and **Critical** alarm when temperature is greater than 40 degrees.

We assume that the "Thermostat" device profile is already present. Let's open the profile details and navigate to the "Alarm Rules" tab.

TODO: screen with two arrows (how to click this).

Now, you need to add the Alarm Rule and configure two alarm conditions for Minor and Critical severity respectfully. 

#### Example 2. Alarm condition with duration

Let's assume that I would like to modify Example 1 and raise alarms only if the temperature exceeds certain threshold for 1 minute. 

For this purpose, I need to edit the alarm condition and modify the condition type from "Simple" to "Duration". Now, I should also specify duration value and unit.

#### Example 3. Repeating alarm condition

Let's assume that I would like to modify Example 1 and raise alarms only if the sensor reports that the temperature exceeds the threshold 3 times in a row.

For this purpose, I need to edit the alarm condition and modify the condition type from "Simple" to "Repeating". Now, I should also specify 3 as 'Count of events'.

### Device provisioning




 
    
