
* TOC
{:toc}

{% assign sinceVersion = "3.2" %}
{% include templates/since.md %}

Device profiles in ThingsBoard allows an administrator to define and centrally manage common settings for multiple devices at once.   
This greatly simplifies the management of a large number of similar devices, making it especially valuable in IoT solutions where numerous devices share identical configurations and behaviors.

Typical device profile settings include:
- Setting a Default **Rule Chain**.
- Configuring **Message Queues** for efficient message handling.
- Defining **Firmware** and **Software** versions to be distributed automatically to devices.
- Configuring **transport protocols** used for device communication.
- Defining and managing **Alarm rules**.
- Automating **device registration and provisioning**.

## Create Device profile

To create a new device profile:
- Go to the "**Device profiles**" page in the "Profiles" section.
- Click the "**+**" icon in the upper-right corner and select "**Create new device profile**" from the dropdown menu.
- Only the **Name** field is required; all other settings are optional.
- Click "**Add**" to create the device profile.

{% include images-gallery.html imageCollection="create-device-profile" %}

## Device profile settings

### Default rule chain

The Default [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain){:target="_blank"} processes all incoming messages and events from any device. 
As the number of device types increases, the Default Rule Chain may become complex and challenging to manage. Often, users create custom root rule chains to redirect messages to specialized rule chains based on the device type.

To simplify this process, starting from ThingsBoard version 3.2, you can specify separate rule chains for individual device profiles. 
This enables centralized and flexible management of telemetry processing, device status (active/inactive), and device lifecycle events (creation, update, deletion).

{% include images-gallery.html imageCollection="device-profile-rule-chain" %}

### Queue

By default, the [Main](/docs/pe/user-guide/rule-engine-2-5/queues/) queue will be used to store all incoming messages and events from any device.
The transport layer will submit messages to this queue and Rule Engine will poll the queue for new messages.
However, for multiple use cases, you might want to use different queues for different devices. 
For example, you might want to isolate data processing for Fire Alarm/Smoke Detector sensors and other devices.
This way, even if your system has a peak load produced by millions of water meters, whenever the Fire Alarm is reported, it will be processed without delay.
Separation of the queues also allows you to customize different [submit](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-submit-strategy){:target="_blank"} and [processing](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy){:target="_blank"} strategies.

> **Please note:** if you choose to use a custom queue, you should configure it with the **system administrator** before you using it.

{% include images-gallery.html imageCollection="device-profile-queue" %}

## Transport configuration

The current version of ThingsBoard platform supports the following transport types: 
- [Default](#default-transport-type){:target="_blank"} - standard HTTP transport suitable for basic device interactions with ThingsBoard. Easy to configure, but less efficient for a large number of devices or frequent updates.
- [MQTT](#mqtt-transport-type){:target="_blank"} -  lightweight, bidirectional protocol specifically optimized for IoT devices, providing efficient telemetry delivery, high throughput, and resource efficiency.
- [CoAP](#coap-transport-type){:target="_blank"} - lightweight IoT protocol ideal for resource-constrained devices operating in low-bandwidth networks.
- [LWM2M](/docs/{{docsPrefix}}reference/lwm2m-api/#step-2-define-lwm2m-device-profile){:target="_blank"} - standardized IoT protocol designed for efficient management of resource-constrained devices, enabling centralized configuration management, firmware updates, and device monitoring.
- [SNMP](/docs/{{docsPrefix}}reference/snmp-api/#device-profile-configuring){:target="_blank"} - widely used protocol for managing network devices like routers, switches, servers, enabling collection and analysis of device health information.

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-1-pe.png)
{% endif %}

### Default transport type

The **Default** transport type is designed to ensure compatibility with earlier versions of the platform.
Devices using this type can connect through ThingsBoard’s standard APIs: [MQTT](/docs/{{docsPrefix}}reference/mqtt-api/){:target="_blank"}, [HTTP](/docs/{{docsPrefix}}reference/http-api/){:target="_blank"}, [CoAP](/docs/{{docsPrefix}}reference/coap-api/){:target="_blank"}, [LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api/){:target="_blank"} and [SMTP](/docs/{{docsPrefix}}reference/smtp-api/){:target="_blank"}.
It requires no special configuration.

### MQTT transport type

The **MQTT** transport type allows for **flexible communication setup** with devices using the MQTT protocol.
You can define custom **MQTT topic filters** for sending telemetry and updating attributes by using ThingsBoard’s [telemetry upload API](/docs/{{docsPrefix}}reference/mqtt-api/#telemetry-upload-api){:target="_blank"} and [attribute update API](/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server){:target="_blank"}.

The MQTT transport type has the following settings:

<br><b><font size="4">MQTT device topic filters</font></b>

Custom MQTT topic filters support single '**+**' and multi-level '**#**' wildcards and allow you to connect to almost any MQTT based device that sends a payload using JSON or Protobuf.

Let's look at an example where we use a custom MQTT device topic filters to publish time series data using "MQTT Basic" device credentials:

- Specify custom MQTT device topic filter for the Device profile, for example:
  - Telemetry topic filter: `/telemetry`;
  - Attributes topic filter: `/attributes`;
- Provide basic MQTT credentials for your device with the client id ‘`c1`’, username ‘`t1`’ and password ‘`secret`’;
- Use the command below to publish time-series data. {% if (docsPrefix == null) or (docsPrefix == "pe/") %}Don't forget to replace `$THINGSBOARD_HOST_NAME` with your host.{% endif %}
  {% if (docsPrefix == null) or (docsPrefix == "pe/") %}
```bash
mosquitto_pub -h '$THINGSBOARD_HOST_NAME' -i 'c1' -u 't1' -P 'secret' -t '/telemetry' -m '{"humidity": 10.3}'
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -h '{{mqttHostName}}' -i 'c1' -u 't1' -P 'secret' -t '/telemetry' -m '{"humidity": 10.3}'
```
{: .copy-code}
{% endif %}
- Transmitted data will be displayed in the "Latest telemetry" tab of the device.

{% include images-gallery.html imageCollection="mqttTransportSettingExample" %}

<br>
If you use the standard MQTT device topic filters configuration, you can publish time series and attributes using the commands below.

{% if (docsPrefix == null) or (docsPrefix == "pe/") %}Don't forget to replace `$THINGSBOARD_HOST_NAME` with your host.{% endif %}

- Command for publish timeseries data:
{% if (docsPrefix == null) or (docsPrefix == "pe/") %}
```bash
mosquitto_pub -h '$THINGSBOARD_HOST_NAME' -i 'c1' -u 't1' -P 'secret' -t 'v1/devices/me/telemetry' -m '{"humidity": 10.3}'
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -h '{{mqttHostName}}' -i 'c1' -u 't1' -P 'secret' -t 'v1/devices/me/telemetry' -m '{"humidity": 10.3}'
```
{: .copy-code}
{% endif %}

- Command for update attributes:
{% if (docsPrefix == null) or (docsPrefix == "pe/") %}
```bash
mosquitto_pub -h '$THINGSBOARD_HOST_NAME' -i 'c1' -u 't1' -P 'secret' -t 'v1/devices/me/attributes' -m '{"firmwareVersion": "1.3"}'
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -h '{{mqttHostName}}' -i 'c1' -u 't1' -P 'secret' -t 'v1/devices/me/attributes' -m '{"firmwareVersion": "1.3"}'
```
{: .copy-code}
{% endif %}

{% include images-gallery.html imageCollection="mqttTransportSettingDefault" %}

<br><b><font size="4">MQTT device payload</font></b>

By default, the platform expects devices to send data via JSON. However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers)

Protocol Buffers, or Protobuf, is a language- and a platform-neutral way of serializing structured data. It is convenient to minimize the size of transmitted data.  

The current version of the ThingsBoard platform supports customizable proto schemas for [telemetry upload](/docs/{{docsPrefix}}reference/mqtt-api/#telemetry-upload-api) 
and [attribute upload](/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server) and implemented the ability to define a schema for downlink messages (RPC calls and attribute updates). 

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-1-pe.png)
{% endif %}

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-3-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-3-pe.png)
{% endif %}

ThingsBoard parses the protobuf structures dynamically, that is why, it does not support some protobuf features like OneOf, extensions and maps, yet.

<br><b><font size="4">Compatibility with other payload formats</font></b>

When enabled, the platform will use a Protobuf payload format by default. If parsing fails, the platform will attempt to use JSON payload format. Useful for backward compatibility during firmware updates. For example, the initial release of the firmware uses Json, while the new release uses Protobuf. During the process of firmware update for the fleet of devices, it is required to support both Protobuf and JSON simultaneously.

The compatibility mode introduces slight performance degradation, so it is recommended to disable this mode once all devices are updated.

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-mqtt-protobuf-setting-2-pe.png)
{% endif %}

### CoAP transport type

The CoAP transport type is lightweight IoT protocol ideal for resource-constrained devices operating in low-bandwidth networks.

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-coap-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-coap-1-pe.png)
{% endif %}

<br>
The CoAP device type has the following settings:

- **Default**

By default CoAP device type Default have CoAP device payload set to JSON that supports basic [CoAP API](/docs/{{docsPrefix}}reference/coap-api/) same as for [Default transport type](#default-transport-type).
However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers) by changing the parameter CoAP device payload to Protobuf.

Protocol Buffers, or Protobuf, is a language- and a platform-neutral way of serializing structured data. It is convenient to minimize the size of transmitted data.  

The current version of the ThingsBoard platform supports customizable proto schemas for [telemetry upload](/docs/{{docsPrefix}}reference/coap-api/#telemetry-upload-api) 
and [attribute upload](/docs/{{docsPrefix}}reference/coap-api/#publish-attribute-update-to-the-server) and implemented the ability to define a schema for downlink messages (RPC calls and attribute updates).

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-coap-protobuf-setting-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-coap-protobuf-setting-1-pe.png)
{% endif %}


{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-coap-protobuf-setting-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-coap-protobuf-setting-2-pe.png)
{% endif %}

ThingsBoard parses the protobuf structures dynamically, that is why, it does not support some protobuf features like OneOf, extensions and maps, yet.

- **Efento NB-IoT**

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
![image](/images/user-guide/device-profile/device-profile-transport-setting-coap-efento-nb-iot-setting-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-transport-setting-coap-efento-nb-iot-setting-1-pe.png)
{% endif %}

## Alarm Rules

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
We also assume that we have already created a device profile called "Temperature Sensors", and provisioned our device with a temperature sensor and an access token. Using the command as in the example below, you can upload the temperature readings.

{% if (docsPrefix == null) or (docsPrefix == "pe/") %}
```bash
mosquitto_pub -d -h '$THINGSBOARD_HOST_NAME' -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m '{"temperature": 5.3}'
```
{: .copy-code}
Where:
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -d -h '{{mqttHostName}}' -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m '{"temperature": 5.3}'
```
{: .copy-code}
Where **$ACCESS_TOKEN** is your device access token.
{% endif %}

### Example 1. Simple alarm conditions 
 
We would like to create a **Critical** alarm when the temperature is greater than 10 degrees.

{% include images-gallery.html imageCollection="alarmСonditions" showListImageTitles="true" %} 

### Example 2. Alarm condition with a duration

Let's assume that we would like to modify Example 1 and raise alarms only if the temperature exceeds a certain threshold for 1 minute. 

For this purpose, we need to edit the alarm condition and modify the condition type from "Simple" to "Duration". We should also specify the duration value and unit.

{% include images-gallery.html imageCollection="alarmСonditionsWithDuration" showListImageTitles="true" %}

Now let’s assume you would like to replace the 1 minute duration with a dynamic value that depends on the settings for a particular device, customer or tenant. 

For this purpose, you should use the server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes/#server-side-attributes) feature. 

Please create a server-side attribute *“highTemperatureDurationThreshold”* with the integer value *“1”* for your device.

{% include images-gallery.html imageCollection="alarmСonditionsWithDuration2" showListImageTitles="true" %}

### Example 3. Repeating alarm condition

Let's assume we would like to modify Example 1 and raise alarms only if the sensor reports a temperature that exceeds the threshold 3 times in a row.

For this purpose, we need to edit the alarm condition and modify the condition type from "Simple" to "Repeating". We should also specify "3" as 'Count of events'.

{% include images-gallery.html imageCollection="alarmСonditionsWithRepeating" showListImageTitles="true" %}

Now let’s assume you would like to replace the set number of times the alarm condition is exceeded with a dynamic value that depends on the settings for a particular device, customer or tenant. 

For this purpose, you should use the server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes/#server-side-attributes) feature. 

Please create a server-side attribute *“highTemperatureRepeatingThreshold”*, with the integer value *“3”* for your device.

{% include images-gallery.html imageCollection="alarmСonditionsWithRepeating2" showListImageTitles="true" %}

### Example 4. Clear alarm rule

Let's assume we would like to automatically clear the alarm if the temperature in the fridge goes back to normal.

{% include images-gallery.html imageCollection="alarmСonditionsClear" showListImageTitles="true" %}

### Example 5. Define alarm rule schedule

Let's assume we would like an alarm rule to evaluate alarms only during working hours.

{% include images-gallery.html imageCollection="alarmСonditionsSchedule" showListImageTitles="true" %}

### Example 6. Advanced thresholds

Let's assume we would like our users to be able to overwrite the thresholds from Dashboard UI. 
We can also add the flag to enable or disable certain alarms for each device. 
For this, we will use dynamic values in the alarm rule condition. 
We will use two attributes: the boolean *temperatureAlarmFlag*, and the numeric *temperatureAlarmThreshold*.
Our goal is to trigger an alarm creation when "*temperatureAlarmFlag* = True AND *temperature* is greater than *temperatureAlarmThreshold*".

{% include images-gallery.html imageCollection="alarmСonditionsAdvanced" showListImageTitles="true" %}

### Example 7. Dynamic thresholds based on the tenant or customer attributes

Example 6 demonstrates how to enable or disable rule based on the value of "temperatureAlarmFlag" attribute of the device. 
But what if you would like to enable or disable certain rule for all devices that belong to a tenant or customer?
To avoid configuration of the attribute for each device, you may configure alarm rule to compare constant value with the value of Tenant or Customer Attribute.
For this purpose, you should use "Constant" key type and compare it with dynamic value. See configuration example below:

{% include images-gallery.html imageCollection="alarmСonstantFilters" showListImageTitles="false" %}

The technique mentioned above may be used to enable or disable rules or combine filters on device telemetry/attributes with filters on tenant or customer attributes.

### Device profile rule node

Device Profile rule node creates and clears alarms based on the alarm rules defined in the device profile. 
By default, this is the first rule node in the chain of processing. 
The rule node processes all incoming messages and reacts to the attributes and telemetry values.

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-rule-node-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-rule-node-1-pe.png)
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
![image](/images/user-guide/device-profile/device-profile-rule-node-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-rule-node-2-pe.png)
{% endif %}

### Notifications about alarms

Assuming you have configured alarm rules you may also want to receive a notification when ThingsBoard creates or updates the alarm.
The device profile rule node has three main outbound relation types that you can use: 'Alarm Created', 'Alarm Severity Updated', and 'Alarm Cleared'.
See the example rule chain below. Please make sure that the system administrator has configured the SMS/email providers before you proceed or configure your own settings in the rule nodes. 

You may also use existing guides: 
[Send email on alarm](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) (Use part which explains 'to email' and 'send email' nodes) 
or [Telegram notifications](/docs/user-guide/rule-engine-2-0/tutorials/integration-with-telegram-bot/).
There is also an additional 'Alarm Updated' relation type that should be ignored in most cases to avoid duplicate notifications.

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-notifications-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-notifications-pe.png)
{% endif %}

## Device provisioning

Device provisioning allows a device to automatically register in ThingsBoard either during or after manufacturing. 
**See separate documentation [page](/docs/{{docsPrefix}}user-guide/device-provisioning/) for more details.**