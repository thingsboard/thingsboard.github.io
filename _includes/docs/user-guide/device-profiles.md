
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

By default, the [Root Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain) processes all incoming messages and events for any device. 
However, the more different device types you have, the more complex your Root Rule Chain may become. 
Many platform users create their Root Rule Chain for the sole purpose of sending messages to specific rule chains depending on the device type. 

To avoid this painful and mundane activity, since ThingsBoard 3.2, you can specify a custom Rule Chain for your devices.
The new Rule Chain will receive all telemetry, device activity(Active/Inactive), and device lifecycle(Created/Updated/Deleted) events.
This setting is available in the Device Profile wizard and in the Device Profile details.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-rule-chain-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-rule-chain-1-pe.png)
{% endif %}

### Queue Name

By default, the [Main](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/) queue will be used to store all incoming messages and events from any device.
The transport layer will submit messages to this queue and Rule Engine will poll the queue for new messages.
However, for multiple use cases, you might want to use different queues for different devices. 
For example, you might want to isolate data processing for Fire Alarm/Smoke Detector sensors and other devices.
This way, even if your system has a peak load produced by millions of water meters, whenever the Fire Alarm is reported, it will be processed without delay.
Separation of the queues also allows you to customize different [submit](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-submit-strategy) and [processing](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy) strategies.

This setting is available in the Device Profile wizard and Device Profile details.

{% unless docsPrefix == 'paas/' %}
{% capture difference %}
**Please note:**
<br>
if you choose to use a custom queue, you should configure it with the **system administrator** before you using it.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
{% endunless %}

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-queue-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-queue-1-pe.png)
{% endif %}

### Transport configuration

The current version of the ThingsBoard platform supports the following transport types: Default, MQTT, CoAP, LWM2M and SNMP

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-1-pe.png)
{% endif %}

#### Default transport type

The Default transport type is intended for backward compatibility with previous releases. 
With the Default transport type, you can continue to use the platform's default [MQTT](/docs/{{docsPrefix}}reference/mqtt-api/), [HTTP](/docs/{{docsPrefix}}reference/http-api/), [CoAP](/docs/{{docsPrefix}}reference/mqtt-api/) and [LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api/) APIs to connect your devices.
There is no specific configuration setting for the default transport type. 

#### MQTT transport type

The MQTT transport type enables advanced MQTT transport settings. 
Now you are able to specify custom MQTT topics filters for time-series data and attribute updates that correspond to the
[telemetry upload API](/docs/{{docsPrefix}}reference/mqtt-api/#telemetry-upload-api) and [attribute update API](/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server), respectively.

**The MQTT transport type has the following settings:**

##### MQTT device topic filters

Custom MQTT topic filters support single '**+**' and multi-level '**#**' wildcards and allow you to connect to almost any MQTT based device that sends a payload using JSON or Protobuf.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-mqtt-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-mqtt-1-pe.png)
{% endif %}

<br>

Using the configuration from the image below will allow you to publish time-series data with the following command:

{% if docsPrefix == null %}
```bash
mosquitto_pub -h 'demo.thingsboard.io' -i 'c1' -u 't1' -P 'secret' -t '/telemetry' -m '{"humidity": 10.3}'
```
{: .copy-code}
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
```bash
mosquitto_pub -h 'mqtt.thingsboard.cloud' -i 'c1' -u 't1' -P 'secret' -t '/telemetry' -m '{"humidity": 10.3}'
```
{: .copy-code}
{% endif %}

and attribute updates with the following command:

{% if docsPrefix == null %}
```bash
mosquitto_pub -h 'demo.thingsboard.io' -i 'c1' -u 't1' -P 'secret' -t '/attributes' -m '{"firmwareVersion": "1.3"}'
```
{: .copy-code}
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
```bash
mosquitto_pub -h 'mqtt.thingsboard.cloud' -i 'c1' -u 't1' -P 'secret' -t '/attributes' -m '{"firmwareVersion": "1.3"}'
```
{: .copy-code}
{% endif %}

Let's look at an example:

{% include images-gallery.html imageCollection="mqttTransportSettingExample" showListImageTitles="true" %}

##### MQTT device payload

By default, the platform expects devices to send data via JSON. However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers)

Protocol Buffers, or Protobuf, is a language- and a platform-neutral way of serializing structured data. It is convenient to minimize the size of transmitted data.  

The current version of the ThingsBoard platform supports customizable proto schemas for [telemetry upload](/docs/{{docsPrefix}}reference/mqtt-api/#telemetry-upload-api) 
and [attribute upload](/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server) and implemented the ability to define a schema for downlink messages (RPC calls and attribute updates). 

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-1-pe.png)
{% endif %}


{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-3-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-3-pe.png)
{% endif %}

ThingsBoard parses the protobuf structures dynamically, that is why, it does not support some protobuf features like OneOf, extensions and maps, yet.

###### Compatibility with other payload formats

When enabled, the platform will use a Protobuf payload format by default. If parsing fails, the platform will attempt to use JSON payload format. Useful for backward compatibility during firmware updates. For example, the initial release of the firmware uses Json, while the new release uses Protobuf. During the process of firmware update for the fleet of devices, it is required to support both Protobuf and JSON simultaneously.

The compatibility mode introduces slight performance degradation, so it is recommended to disable this mode once all devices are updated.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-2-pe.png)
{% endif %}

#### CoAP transport type

The CoAP transport type enables advanced CoAP transport settings. With the CoAP transport type, you have the ability to select the CoAP device type.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-coap-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-coap-1-pe.png)
{% endif %}

##### CoAP device type: Default

By default CoAP device type Default have CoAP device payload set to JSON that supports basic [CoAP API](/docs/{{docsPrefix}}reference/coap-api/) same as for [Default transport type](#default-transport-type).
However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers) by changing the parameter CoAP device payload to Protobuf.

Protocol Buffers, or Protobuf, is a language- and a platform-neutral way of serializing structured data. It is convenient to minimize the size of transmitted data.  

The current version of the ThingsBoard platform supports customizable proto schemas for [telemetry upload](/docs/{{docsPrefix}}reference/coap-api/#telemetry-upload-api) 
and [attribute upload](/docs/{{docsPrefix}}reference/coap-api/#publish-attribute-update-to-the-server) and implemented the ability to define a schema for downlink messages (RPC calls and attribute updates).

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-coap-protobuf-setting-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-coap-protobuf-setting-1-pe.png)
{% endif %}


{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-coap-protobuf-setting-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-coap-protobuf-setting-2-pe.png)
{% endif %}

ThingsBoard parses the protobuf structures dynamically, that is why, it does not support some protobuf features like OneOf, extensions and maps, yet.

##### CoAP device type: Efento NB-IoT

The current version of the ThingsBoard platform supports integration with next Efento NB-IoT sensors: 

 - temperature,
 - humidity,
 - air pressure,
 - differential pressure,
 - open / close,
 - leakage,
 - I/O. 
 
Requires Efento devices with FW version: 06.02+. 

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-coap-efento-nb-iot-setting-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-setting-coap-efento-nb-iot-setting-1-pe.png)
{% endif %}

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
The command listed below upload the temperature readings to {{YOUR_HOST}}.  

{% if docsPrefix == null %}
```bash
mosquitto_pub -d -h 'demo.thingsboard.io' -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m '{"temperature": 5.3}'
```
{: .copy-code}
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
```bash
mosquitto_pub -d -h 'mqtt.thingsboard.cloud' -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m '{"temperature": 5.3}'
```
{: .copy-code}
{% endif %}

#### Example 1. Simple alarm conditions 
 
We would like to create a **Critical** alarm when the temperature is greater than 10 degrees.

{% include images-gallery.html imageCollection="alarmСonditions" showListImageTitles="true" %} 

#### Example 2. Alarm condition with a duration

Let's assume that we would like to modify Example 1 and raise alarms only if the temperature exceeds a certain threshold for 1 minute. 

For this purpose, we need to edit the alarm condition and modify the condition type from "Simple" to "Duration". We should also specify the duration value and unit.

{% include images-gallery.html imageCollection="alarmСonditionsWithDuration" showListImageTitles="true" %}

Now let’s assume you would like to replace the 1 minute duration with a dynamic value that depends on the settings for a particular device, customer or tenant. 

For this purpose, you should use the server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes/#server-side-attributes) feature. 

Please create a server-side attribute *“highTemperatureDurationThreshold”* with the integer value *“1”* for your device.

{% include images-gallery.html imageCollection="alarmСonditionsWithDuration2" showListImageTitles="true" %}

#### Example 3. Repeating alarm condition

Let's assume we would like to modify Example 1 and raise alarms only if the sensor reports a temperature that exceeds the threshold 3 times in a row.

For this purpose, we need to edit the alarm condition and modify the condition type from "Simple" to "Repeating". We should also specify "3" as 'Count of events'.

{% include images-gallery.html imageCollection="alarmСonditionsWithRepeating" showListImageTitles="true" %}

Now let’s assume you would like to replace the set number of times the alarm condition is exceeded with a dynamic value that depends on the settings for a particular device, customer or tenant. 

For this purpose, you should use the server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes/#server-side-attributes) feature. 

Please create a server-side attribute *“highTemperatureRepeatingThreshold”*, with the integer value *“3”* for your device.

{% include images-gallery.html imageCollection="alarmСonditionsWithRepeating2" showListImageTitles="true" %}

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

#### Example 7. Dynamic thresholds based on the tenant or customer attributes

Example 6 demonstrates how to enable or disable rule based on the value of "temperatureAlarmFlag" attribute of the device. 
But what if you would like to enable or disable certain rule for all devices that belong to a tenant or customer?
To avoid configuration of the attribute for each device, you may configure alarm rule to compare constant value with the value of Tenant or Customer Attribute.
For this purpose, you should use "Constant" key type and compare it with dynamic value. See configuration example below:

{% include images-gallery.html imageCollection="alarmСonstantFilters" showListImageTitles="false" %}

The technique mentioned above may be used to enable or disable rules or combine filters on device telemetry/attributes with filters on tenant or customer attributes.

#### Device profile rule node

Device Profile rule node creates and clears alarms based on the alarm rules defined in the device profile. 
By default, this is the first rule node in the chain of processing. 
The rule node processes all incoming messages and reacts to the attributes and telemetry values.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-rule-node-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-rule-node-1-pe.png)
{% endif %}

<br>
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

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-rule-node-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-rule-node-2-pe.png)
{% endif %}

#### Notifications about alarms

Assuming you have configured alarm rules you may also want to receive a notification when ThingsBoard creates or updates the alarm.
The device profile rule node has three main outbound relation types that you can use: 'Alarm Created', 'Alarm Severity Updated', and 'Alarm Cleared'.
See the example rule chain below. Please make sure that the system administrator has configured the SMS/email providers before you proceed or configure your own settings in the rule nodes. 

You may also use existing guides: 
[Send email on alarm](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) (Use part which explains 'to email' and 'send email' nodes) 
or [Telegram notifications](/docs/user-guide/rule-engine-2-0/tutorials/integration-with-telegram-bot/).
There is also an additional 'Alarm Updated' relation type that should be ignored in most cases to avoid duplicate notifications.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-notifications-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/device-profile/device-profile-notifications-pe.png)
{% endif %}

### Device provisioning

Device provisioning allows a device to automatically register in ThingsBoard either during or after manufacturing. 
**See separate documentation [page](/docs/{{docsPrefix}}user-guide/device-provisioning/) for more details.**




 
    
