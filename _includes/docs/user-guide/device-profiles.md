
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

## Create device profile

To create a new device profile:
- Go to the "**Device profiles**" page in the "Profiles" section.
- Click the "**+**" icon in the upper-right corner and select "**Create new device profile**" from the dropdown menu.
- Only the **Name** field is required; all other settings are optional.
- Click "**Add**" to create the device profile.

{% include images-gallery.html imageCollection="create-device-profile" %}

## Main device profile configuration

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

{% include images-gallery.html imageCollection="device-profile-transport" %}

### Default transport type

The **Default** transport type is designed to ensure compatibility with earlier versions of the platform.
Devices using this type can connect through ThingsBoard&#39;s standard APIs: [MQTT](/docs/{{docsPrefix}}reference/mqtt-api/){:target="_blank"}, [HTTP](/docs/{{docsPrefix}}reference/http-api/){:target="_blank"}, and [CoAP](/docs/{{docsPrefix}}reference/coap-api/){:target="_blank"}.
It requires no special configuration.

{% include images-gallery.html imageCollection="default-transport-type" %}

### MQTT transport type

The **MQTT** transport type allows for flexible communication setup with devices using the MQTT protocol.
You can define custom **MQTT topic filters** for sending telemetry and updating attributes by using ThingsBoard&#39;s [telemetry upload API](/docs/{{docsPrefix}}reference/mqtt-api/#telemetry-upload-api){:target="_blank"} and [attribute update API](/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server){:target="_blank"}.

The MQTT transport type has the following settings:

<br><b><font size="4">MQTT device topic filters</font></b>

Custom MQTT topic filters support **single-level (`+`)** and **multi-level (`#`) wildcards**, making it possible to connect to almost any **MQTT-based device** that sends payloads in **JSON** or **Protobuf** format.

{% include images-gallery.html imageCollection="mqtt-device-topic-filters" %}

<br>
Let&#39;s look at an example where we use custom MQTT topic filters to publish time-series data using "MQTT Basic" device credentials:

- Specify custom MQTT topic filters in the Device Profile. For example:
  - Telemetry topic filter: `/telemetry`
  - Attributes topic filter: `/attributes`
- Configure MQTT basic credentials for your device:
  - Client ID: `c1`
  - Username: `t1`
  - Password: `secret`

Publish time-series data using the following command:

{% if docsPrefix == null or docsPrefix == "pe/" %}
> Don&#39;t forget to replace `$THINGSBOARD_HOST_NAME` with your actual host name.

```bash
mosquitto_pub -h $THINGSBOARD_HOST_NAME -t /telemetry -i "c1" -u "t1" -P "secret" -m "{humidity:10.3}"
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
<br>
```bash
mosquitto_pub -h {{mqttHostName}} -t /telemetry -i "c1" -u "t1" -P "secret" -m "{humidity:10.3}"
```
{: .copy-code}
{% endif %}

Transmitted data will be displayed in the "**Latest telemetry**" tab of the device.

{% include images-gallery.html imageCollection="mqtt-transport-setting-example" %}

<br>
If you use the standard MQTT device topic filters configuration, you can publish time series and attributes using the commands below.

{% if (docsPrefix == null) or (docsPrefix == "pe/") %}> Don&#39;t forget to replace `$THINGSBOARD_HOST_NAME` with your actual host name.{% endif %}

Command for publish **timeseries data**:
{% if (docsPrefix == null) or (docsPrefix == "pe/") %}

```bash
mosquitto_pub -h $THINGSBOARD_HOST_NAME -t v1/devices/me/telemetry -i "c1" -u "t1" -P "secret" -m "{humidity:10.3}"
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -h {{mqttHostName}} -t v1/devices/me/telemetry -i "c1" -u "t1" -P "secret" -m "{humidity:10.3}"
```
{: .copy-code}
{% endif %}

Command for update **attributes**:
{% if (docsPrefix == null) or (docsPrefix == "pe/") %}
```bash
mosquitto_pub -h $THINGSBOARD_HOST_NAME -t v1/devices/me/attributes -i "c1" -u "t1" -P "secret" -m "{"firmwareVersion": "1.3"}"
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -h {{mqttHostName}} -t v1/devices/me/attributes -i "c1" -u "t1" -P "secret" -m "{"firmwareVersion": "1.3"}"
```
{: .copy-code}
{% endif %}

<br><b><font size="4">MQTT device payload</font></b>

- **JSON**. By default, ThingsBoard expects devices to send data in JSON format. However, it is also possible to transmit data using [Protocol Buffers](https://developers.google.com/protocol-buffers) (Protobuf).
- **Protocol Buffers (Protobuf)** is a language- and a platform-neutral way of serializing structured data. It is convenient to minimize the size of transmitted data.   
The current version of the ThingsBoard platform supports customizable proto schemas for [telemetry upload](/docs/{{docsPrefix}}reference/mqtt-api/#telemetry-upload-api) and [attribute upload](/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server) and implemented the ability to define a schema for downlink messages (RPC calls and attribute updates). 
> ThingsBoard parses the protobuf structures dynamically, that is why, it does not support some protobuf features like OneOf, extensions and maps, yet.

{% include images-gallery.html imageCollection="mqtt-device-payload" %}

- **Compatibility with other payload formats** option.   
When compatibility mode is enabled, ThingsBoard will default to using a Protobuf payload format. If parsing the Protobuf payload fails, ThingsBoard will automatically attempt to use the JSON payload format. This feature is particularly useful for ensuring backward compatibility during firmware updates. For example, an initial firmware release might use JSON, while a new release switches to Protobuf. During firmware updates across multiple devices, supporting both formats simultaneously is essential.   
> It is important to note that enabling compatibility mode can introduce slight performance degradation. Therefore, it is recommended to disable compatibility mode once all devices have been successfully updated.

{% include images-gallery.html imageCollection="compatibility-with-other-payload-formats" %}

### CoAP transport type

**CoAP (Constrained Application Protocol)** is a lightweight IoT protocol specifically designed for resource-constrained devices operating in low-bandwidth networks.

<b><font size="3">CoAP device type:</font></b>

- **Default**. The default CoAP device type uses a JSON payload. This supports basic [CoAP APIs](/docs/{{docsPrefix}}reference/coap-api/){:target="_blank"} similar to the [default transport type](#default-transport-type){:target="_blank"}.    
You can also configure devices to transmit data using [Protocol Buffers](https://developers.google.com/protocol-buffers){:target="_blank"} (Protobuf) by changing the **CoAP device payload** setting to **Protobuf**.

    - **Protocol Buffers (Protobuf)** is a language- and platform-neutral method of serializing structured data, designed primarily to reduce the size of transmitted data.   
  The current version of the ThingsBoard platform supports customizable proto schemas for [telemetry upload](/docs/{{docsPrefix}}reference/coap-api/#telemetry-upload-api){:target="_blank"} and [attribute upload](/docs/{{docsPrefix}}reference/coap-api/#publish-attribute-update-to-the-server){:target="_blank"} and implemented the ability to define a schema for downlink messages (RPC calls and attribute updates).
  ThingsBoard parses the protobuf structures dynamically, that is why, it does not support some protobuf features like OneOf, extensions and maps, yet.

{% include images-gallery.html imageCollection="coap-default" %}

- **Efento NB-IoT** devices are wireless sensors that use NB-IoT technology for energy-efficient transmission of telemetry data (e.g., temperature, humidity, pressure, open/close, leakage, and more). 
You can integrate them with ThingsBoard using the built-in CoAP transport, which receives messages from the devices, decodes them using Protobuf, and stores telemetry data on the platform.
This data becomes instantly available for viewing, charting, dashboarding, alarm setup, and automation.
> Requires Efento devices with FW version: 06.02+. 

{% include images-gallery.html imageCollection="coap-efento-nb-iot" %}

<br><b><font size="3">Power Saving Mode</font></b>

The platform supports the following power-saving mechanisms for optimized device operation:
- Power Saving Mode (PSM)
- Discontinuous Reception (DRX)
- Extended Discontinuous Reception (eDRX)

{% include images-gallery.html imageCollection="power-saving-mode" %}

### LWM2M transport type

**LwM2M** is a standardized IoT protocol designed for efficient management of resource-constrained devices. It enables centralized configuration, remote firmware updates, and real-time device monitoring.

To configure an **LwM2M device profile**, specify the following parameters:
- **Define the objects** you want to observe or interact with
- **Set the observe strategy** to determine how the platform monitors object changes
- **Configure how ThingsBoard processes LwM2M object data**, including telemetry, attributes, and key parameters

Learn more about configuring the LwM2M transport at [this link](/docs/{{docsPrefix}}reference/lwm2m-api/){:target="_blank"}.

{% include images-gallery.html imageCollection="lwm2m-transport-type" %}

### SNMP transport type

**SNMP** is a widely used protocol for managing network devices such as routers, switches, and servers. It enables the collection and analysis of device status and performance data.

To configure an **SNMP device profile**, specify the following parameters:
- **Request timeout** — how long (in milliseconds) the system waits before retrying or marking the request as failed
- **Retry count** — how many times the system will attempt the request before giving up
- **Communication configuration** — define how the device communicates with ThingsBoard over SNMP

Learn more about configuring the SNMP transport at [this link](/docs/{{docsPrefix}}reference/snmp-api/){:target="_blank"}.

{% include images-gallery.html imageCollection="snmp-transport-type" %}

## Alarm rules

**Alarm rules** in ThingsBoard define the conditions under which alarms are created, updated, or cleared. 
They are a key component of automation that enables efficient real-time monitoring of device states and data.

Alarm rules are configured in device profiles, allowing centralized control over alarm logic for entire groups of similar device types.

**Alarm Rule Structure includes:**
- **Alarm type** — a unique identifier for the alarm within the device profile.
- **Advanced settings** — optional configuration for alarm propagation to related entities such as assets, customers, tenants, or other entities.
- **Alarm creation condition** — define when an alarm is created or updated. This section includes:
  - **Severity** — the level of criticality assigned to the alarm. ThingsBoard evaluates alarm conditions in descending order of severity.
  For example, if the condition with Critical severity is true, the alarm is raised as Critical, and lower-severity conditions (e.g., Major, Minor, or Warning) are not evaluated.
  Each severity level must be unique within a single alarm rule.
  - **Alarm rule condition**:
    - **Key filters** — a list of logical expressions based on device attributes or telemetry data.   
    Example: (temperature < 0 OR temperature > 20) AND softwareVersion = '2.5.5' 
    - **Condition type** — defines how the condition is triggered:
      - **Simple** — the alarm is raised as soon as a matching event occurs. 
      - **Duration** — the condition must be continuously true for a specific period (e.g., 5 minutes). 
      - **Repeating** — the condition must occur repeatedly (e.g., 3 times in a row).
    - **Schedule** — defines the time range during which the rule is active:
      - **Active all the time**
      - **Active at a specific times**
      - **Custom**
  - **Additional info** — an optional alarm details template that supports dynamic substitution of telemetry or attribute values using ${attributeName} syntax.
- **Alarm clear condition** — specifies the criteria for clearing or deactivating the alarm.

### Alarm rule configurations

Let&#39;s explore some alarm rule configurations to better understand how it works.

#### Simple alarm condition

Imagine you want to monitor the temperature inside a fridge storing valuable goods.

We&#39;ll assume you already have a device called "Thermometer", which uses a **device profile named "Thermostats"**.

We would like to create a **Critical** alarm when the temperature is greater than 10 degrees.

{% include images-gallery.html imageCollection="simple-alarm-condition" showListImageTitles="true" %} 

#### Alarm condition with a duration

Let&#39;s assume that we would like to modify [simple alarm condition](#simple-alarm-condition) and raise alarms only if the temperature exceeds a certain threshold for 1 minute. 

For this purpose, we need to edit the alarm condition and modify the condition type from "Simple" to "Duration". We should also specify the duration value and unit.

{% include images-gallery.html imageCollection="alarmСonditionsWithDuration" showListImageTitles="true" %}

Now let&#39;s assume you would like to replace the 1 minute duration with a dynamic value that depends on the settings for a particular device, customer or tenant. 

For this purpose, you should use the server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes/#server-side-attributes) feature. 

Please create a server-side attribute *“highTemperatureDurationThreshold”* with the integer value *“1”* for your device.

{% include images-gallery.html imageCollection="alarmСonditionsWithDuration2" showListImageTitles="true" %}

#### Repeating alarm condition

Let&#39;s assume we would like to modify [simple alarm condition](#simple-alarm-condition) and raise alarms only if the sensor reports a temperature that exceeds the threshold 3 times in a row.

For this purpose, we need to edit the alarm condition and modify the condition type from "Simple" to "Repeating". We should also specify "3" as &#39;Count of events&#39;.

{% include images-gallery.html imageCollection="alarmСonditionsWithRepeating" showListImageTitles="true" %}

Now let&#39;s assume you would like to replace the set number of times the alarm condition is exceeded with a dynamic value that depends on the settings for a particular device, customer or tenant. 

For this purpose, you should use the server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes/#server-side-attributes) feature. 

Please create a server-side attribute *"highTemperatureRepeatingThreshold"*, with the integer value *"3"* for your device.

{% include images-gallery.html imageCollection="alarmСonditionsWithRepeating2" showListImageTitles="true" %}

#### Clear alarm rule

Let&#39;s assume we would like to automatically clear the alarm if the temperature in the fridge goes back to normal.

{% include images-gallery.html imageCollection="alarmСonditionsClear" showListImageTitles="true" %}

#### Define alarm rule schedule

Let&#39;s assume we would like an alarm rule to evaluate alarms only during working hours.

{% include images-gallery.html imageCollection="alarmСonditionsSchedule" showListImageTitles="true" %}

#### Advanced thresholds

Let&#39;s assume we would like our users to be able to overwrite the thresholds from Dashboard UI. 
We can also add the flag to enable or disable certain alarms for each device. 
For this, we will use dynamic values in the alarm rule condition. 
We will use two attributes: the boolean *temperatureAlarmFlag*, and the numeric *temperatureAlarmThreshold*.
Our goal is to trigger an alarm creation when "*temperatureAlarmFlag* = True AND *temperature* is greater than *temperatureAlarmThreshold*".

{% include images-gallery.html imageCollection="alarmСonditionsAdvanced" showListImageTitles="true" %}

#### Dynamic thresholds based on the tenant or customer attributes

[Advanced thresholds](#advanced-thresholds) demonstrates how to enable or disable rule based on the value of "temperatureAlarmFlag" attribute of the device. 
But what if you would like to enable or disable certain rule for all devices that belong to a tenant or customer?
To avoid configuration of the attribute for each device, you may configure alarm rule to compare constant value with the value of Tenant or Customer Attribute.
For this purpose, you should use "Constant" key type and compare it with dynamic value. See configuration example below:

{% include images-gallery.html imageCollection="alarmСonstantFilters" showListImageTitles="false" %}

The technique mentioned above may be used to enable or disable rules or combine filters on device telemetry/attributes with filters on tenant or customer attributes.

### Device profile rule node

Device profile rule node creates and clears alarms based on the alarm rules defined in the device profile. 
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
Let&#39;s assume you have a condition "Temperature is greater than 50 for 1 hour", and the first event with a temperature greater than 50 was reported at 1 pm. 
At 2 pm you should receive the alarm (assuming temperature conditions will not change). 
However, if you will restart the server after 1 pm and before 2 pm, the rule node needs to lookup the state from DB.
Basically, if you enable this and the &#39;Fetch state of alarm rules&#39; option, the rule node will be able to raise the alarm. 
If you leave it disabled, the rule node will not generate the alarm.
We disable this setting by default for performance reasons. If enabled, and if the incoming message matches at least one of the alarm conditions, it will cause additional write operation to persist in the state.

**Fetch state of alarm rules** - forces rule node to restore the state of processing on initialization. Disabled by default. This setting is useful if you have duration or repeating conditions. 
It should work in tandem with the &#39;Persist state of alarm rules&#39; option, but on rare occasions, you may want to disable this setting while the &#39;Persist state of alarm rules&#39; option is enabled.
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
The device profile rule node has three main outbound relation types that you can use: &#39;Alarm Created&#39;, &#39;Alarm Severity Updated&#39;, and &#39;Alarm Cleared&#39;.
See the example rule chain below. Please make sure that the system administrator has configured the SMS/email providers before you proceed or configure your own settings in the rule nodes. 

You may also use existing guides: 
[Send email on alarm](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) (Use part which explains &#39;to email&#39; and &#39;send email&#39; nodes) 
or [Telegram notifications](/docs/user-guide/rule-engine-2-0/tutorials/integration-with-telegram-bot/).
There is also an additional &#39;Alarm Updated&#39; relation type that should be ignored in most cases to avoid duplicate notifications.

{% if docsPrefix == null %}
![image](/images/user-guide/device-profile/device-profile-notifications-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/device-profile/device-profile-notifications-pe.png)
{% endif %}

## Device provisioning

Device provisioning allows a device to automatically register in ThingsBoard either during or after manufacturing. 
**See separate documentation [page](/docs/{{docsPrefix}}user-guide/device-provisioning/) for more details.**