---
layout: docwithnav-pe
assignees:
- ashvayka
title: Device profiles
description: IoT device profiles
redirect_from: "/docs/pe/user-guide/ui/device-profiles"

create-device-profile:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/create-device-profile-1-pe.png
        title: 'Go to the "<b>Device profiles</b>" page in the "<b>Profiles</b>" section. Click the "<b>+</b>" icon in the upper-right corner and select "<b>Create new device profile</b>" from the dropdown menu.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/create-device-profile-2-pe.png
        title: 'Only the <b>Name</b> field is required; all other settings are optional. Click "<b>Add</b>" to create the device profile.'

device-profile-rule-chain:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/device-profile-rule-chain-1-pe.png
        title: 'You can simplify the processing of incoming messages and events from any device by assigning separate rule chains to device profiles based on device type, instead of using the default rule chain.'

device-profile-queue:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/device-profile-queue-1-pe.png
        title: 'Using separate queues for different device types allows isolated and prioritized processing, ensuring critical events like fire alarms are handled promptly despite high system load.'

device-profile-transport:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/device-profile-transport-1-pe.png
        title: 'The current version of ThingsBoard platform supports the following transport types: <b>Default, MQTT, CoAP, LWM2M, SNMP</b>.'

default-transport-type:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/default-transport-type-1-pe.png
        title: 'The <b>Default</b> transport type is designed to ensure compatibility with earlier versions of the platform. Devices using this type can connect through ThingsBoard&#39;s standard APIs: <b>MQTT</b>, <b>HTTP</b>, and <b>CoAP</b>. It requires no special configuration.'

mqtt-device-topic-filters:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/mqtt-device-topic-filters-1-pe.png
        title: 'Custom MQTT topic filters support <b>single-level (+)</b> and <b>multi-level (#) wildcards</b>, making it possible to connect to almost any <b>MQTT-based device</b> that sends payloads in <b>JSON</b> or <b>Protobuf</b> format.'

mqtt-transport-setting-example:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/mqtt-transport-example-1-pe.png
        title: 'Specify custom <b>MQTT device topic filters</b> in the device profile.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/mqtt-transport-example-2-pe.png
        title: 'Click the "<b>Manage credentials</b>" button in your device details.'
    2:
        image: https://img.thingsboard.io/user-guide/device-profile/mqtt-transport-example-3-pe.png
        title: '<b>Provide basic MQTT credentials</b> for your device with the client id &#39;c1&#39;, username &#39;t1&#39; and password &#39;secret&#39;.'
    3:
        image: https://img.thingsboard.io/user-guide/device-profile/mqtt-transport-example-4-pe.png
        title: 'Use <b>Terminal</b> to publish time-series data. Transmitted data will be displayed in the <b>"Latest telemetry" tab</b> of the device.'

mqtt-device-payload:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/mqtt-device-payload-1-pe.png
        title: 'Go to the "Device profiles" page in the "Profiles" section. Click the "+" icon in the upper-right corner and select "Create new device profile" from the dropdown menu.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/mqtt-device-payload-2-pe.png
        title: 'Go to the "Device profiles" page in the "Profiles" section. Click the "+" icon in the upper-right corner and select "Create new device profile" from the dropdown menu.'

compatibility-with-other-payload-formats:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/mqtt-device-payload-3-pe.png
        title: 'Go to the "Device profiles" page in the "Profiles" section. Click the "+" icon in the upper-right corner and select "Create new device profile" from the dropdown menu.'

coap-default:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/coap-default-1-pe.png
        title: 'The default CoAP device type uses a JSON payload. This supports basic CoAP APIs similar to the default transport type. You can also configure devices to transmit data using Protocol Buffers (Protobuf) by changing the CoAP device payload setting to Protobuf.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/coap-default-2-pe.png
        title: 'Protocol Buffers (Protobuf) is a language- and platform-neutral method of serializing structured data, designed primarily to reduce the size of transmitted data.'

coap-efento-nb-iot:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/coap-efento-nb-iot1-pe.png
        title: 'Efento NB-IoT devices are wireless sensors that use NB-IoT technology for energy-efficient transmission of telemetry data (e.g., temperature, humidity, pressure, open/close, leakage, and more). You can integrate them with ThingsBoard using the built-in CoAP transport, which receives messages from the devices, decodes them using Protobuf, and stores telemetry data on the platform. This data becomes instantly available for viewing, charting, dashboarding, alarm setup, and automation.'

power-saving-mode:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/power-saving-mode-1-pe.png
        title: 'The platform supports the following power-saving mechanisms for optimized device operation: Power Saving Mode (PSM), Discontinuous Reception (DRX), Extended Discontinuous Reception (eDRX).'

lwm2m-transport-type:
    0:
      image: https://img.thingsboard.io/user-guide/device-profile/lwm2m-transport-type-1-pe.png
      title: 'LwM2M is a standardized IoT protocol designed for efficient management of resource-constrained devices. It enables centralized configuration, remote firmware updates, and real-time device monitoring.'

snmp-transport-type:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/snmp-transport-type-1-pe.png
        title: 'SNMP is a widely used protocol for managing network devices such as routers, switches, and servers. It enables the collection and analysis of device status and performance data.'

simple-alarm-condition:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-1-step-1-pe.png
        title: 'Go to the "<b>Device profiles</b>" page in the "<b>Profiles</b>" section. Select your device profile (e.g., Thermostats). Navigate to the "Alarm rules" tab and click the "pencil" icon to edit.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-1-step-2-pe.png
        title: 'Click "<b>Add alarm rule"</b>.'
    2:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-1-step-3-pe.png
        title: 'Define alarm type and severity. Then click "<b>+</b>" icon to add a new alarm condition.'
    3:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-1-step-4-pe.png
        title: 'Click "<b>Add key filter</b>".'
    4:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-1-step-5-pe.png
        title: 'Select the <b>key type</b>, <b>specify attribute/time series key name</b>, and choose the <b>value type</b>. Then click "<b>Add</b>" under the "<b>Filters</b>".'
    5:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-1-step-6-pe.png
        title: 'Choose a <b>comparison operator</b> and enter the <b>threshold value</b>. Click "<b>Add</b>" in the bottom-right corner to confirm.'
    6:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-1-step-7-pe.png
        title: 'Click "<b>Save</b>".'
    7:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-1-step-8-pe.png
        title: 'Finally, save changes.'

alarmСonditionsWithDuration:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-2-step-1-pe.png
        title: 'Edit the alarm condition: change the condition type from "<b>Simple</b>" to "<b>Duration</b>". Specify the <b>duration value</b> and its <b>unit of measurement</b>. Save changes.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-2-step-2-pe.png
        title: 'Alarm condition changed.'

alarmСonditionsWithDuration2:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-2-step-3-pe.png
        title: 'Edit the alarm condition. Go to the dynamic value of the alarm delay by pressing the "<b>Switch to dynamic value</b>" button.'
    1:      
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-2-step-4-pe.png
        title: 'Select a value: current device, current customer or current tenant. And specify the attribute from which the alarm threshold value will be taken.
        You may optionally check "Inherit from owner". Inheritance allows to take the threshold value from customer if it is not set on the device level. If the attribute value is not set on both device and customer levels, rule will take the value from the tenant attributes. Save changes.'
    2:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-2-step-5-pe.png
        title: 'Alarm condition changed.'

alarmСonditionsWithRepeating:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-3-step-1-pe.png
        title: 'Edit the alarm condition and set the type to "<b>Repeating</b>". Specify the <b>count of events</b>. Save the condition.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-3-step-2-pe.png
        title: 'Alarm condition changed.'

alarmСonditionsWithRepeating2:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-3-step-3-pe.png
        title: 'Go to the dynamic value of the repeating alarm condition by pressing the "<b>Switch to dynamic value" button</b>".'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-3-step-4-pe.png
        title: 'Select a value: current device, current customer or current tenant. And specify the attribute from which the value will be taken, how many times the threshold value must be exceeded for an alarm to be triggered. You may optionally check "Inherit from owner". Inheritance allows to take the threshold value from customer if it is not set on the device level. If the attribute value is not set on both device and customer levels, rule will take the value from the tenant attributes. Save changes.'
    2:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-3-step-5-pe.png
        title: 'Alarm condition changed.'

alarmСonditionsClear:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-4-step-1-pe.png
        title: 'In the alarm rule configuration click "<b>Add clear condition</b>" button.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-4-step-2-pe.png
        title: 'Click on the red "<b>+</b>" sign.'
    2:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-4-step-3-pe.png
        title: 'Click "<b>Add key filter</b>".'
    3:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-4-step-4-pe.png
        title: 'Select the <b>key type</b>, specify <b>attribute/time series key name</b>, and choose the <b>value type</b>. Then click "<b>Add</b>" under the "<b>Filters</b>".'
    4:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-4-step-5-pe.png
        title: 'Choose a <b>comparison operator</b> and enter the <b>threshold value</b>. Click "<b>Add</b>" in the bottom-right corner to confirm. Click "Add".'
    5:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-4-step-6-pe.png
        title: 'Click "Save".'
    6:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-4-step-7-pe.png
        title: 'Added alarm clearing condition. Finally, apply changes.'

alarmСonditionsSchedule:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-5-step-1-pe.png
        title: 'Edit the schedule of the alarm rule.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-5-step-2-pe.png
        title: 'Specify timezone, days, time interval during which the alarm rule should be active. Click "Save".'
    2:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-5-step-3-pe.png
        title: 'Finally, apply changes.'


alarmСonditionsAdvanced1:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-6-step-6-pe.png
        title: 'Provide <b>temperatureAlarmFlag</b> and <b>temperatureAlarmThreshold</b> as server attributes for your device.'

alarmСonditionsAdvanced2:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-6-step-1-pe.png  
        title: '<b>Modify the temperature key filter</b> and change the <b>value type to dynamic</b>.'
    1:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-6-step-2-pe.png
        title: 'Select a dynamic source type, enter <b>temperatureAlarmThreshold</b>, and click "<b>Update</b>". Optionally, check "Inherit from owner". This allows the threshold value to be taken from the customer if it is not set at the device level. If it is not set at either the device or customer level, the rule will use the value from <b>tenant attributes</b>.'
    2:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-6-step-3-pe.png
        title: 'Add another <b>key filter</b> for the <b>temperatureAlarmFlag</b>, then click "<b>Add</b>".'
    3:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-6-step-4-pe.png
        title: 'Select the key type "<b>Attribute</b>", specify <b>temperatureAlarmFlag</b> attribute as the key name, and choose "<b>Boolean</b>" value type. Choose a <b>comparison operator</b> and enter <b>threshold value</b>. Then click "<b>Add</b>".'
    4:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-6-step-5-pe.png
        title: 'Save all changes.'

alarmСonstantFilters:
    0:
        image: https://img.thingsboard.io/user-guide/device-profile/alarm-example-7-step-1-pe.png
        title: 'Use the <b>"Constant" key type</b> and specify the <b>constant value</b> you want to compare with the tenant or customer attribute value. Apply all changes.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/device-profiles.md %}