---
layout: docwithnav-pe
assignees:
- stitenko
title: Alarm rules
description: Creating alarm rules

alarm-type:
    0:
        image: /images/user-guide/alarms/alarms-type-pe.png

alarm-severity:
    0:
        image: /images/user-guide/alarms/alarms-severity-pe.png

relations-to-asset:
    0:
        image: /images/user-guide/alarms/propagation-1-pe.png
        title: 'To find devices related to Office A, go to the "Assets" page, click on the needed asset and navigate to the "Relations" tab in the asset details window. The following devices relations to the Office A: Thermometer A1, Thermometer B1, Thermometer B2, and Thermometer C3.'

alarm-creation-time-simple:
    0:
        image: /images/user-guide/alarms/alarm-creation-time-simple-pe.png
        title: 'If the threshold value is exceeded, an alarm is created immediately.'
        
alarm-creation-time-duration:
    0:
        image: /images/user-guide/alarms/alarm-creation-time-duration-pe.png
        title: 'An alarm will be created if the duration of exceeding the threshold value exceeds the specified value.'
    
alarm-creation-time-repeating:
    0:
        image: /images/user-guide/alarms/alarm-creation-time-repeating-pe.png
        title: 'An alarm will be created if the threshold value is exceeded the specified number of times.'

propagate-alarm-to-related-entities:
    0:
        image: /images/user-guide/alarms/propagation-5-pe.png
        title: 'In the alarm rule settings of the device profile, tick "Propagate alarm to related entities".'

propagate-alias:
    0:
        image: /images/user-guide/alarms/propagation-2-pe.png
        title: 'Create an alias that will filter the selected asset - "Office A".'

add-alarms-widget:
    0:
        image: /images/user-guide/alarms/propagation-3-pe.png
        title: 'Add the Alarms table widget. Specify the previously created alias as the alarm source. Be sure to activate the "Search propagated alarms" option to search for propagated alarms.'
    1:
        image: /images/user-guide/alarms/propagation-4-pe.png
        title: 'The alarm Table widget has been added.'

propagate-send-telemetry:
    0:
        image: /images/user-guide/alarms/propagation-6-pe.png
        title: 'Send telemetry to one of the devices that exceeds the threshold value specified in the alarm rule to trigger an alarm.'
        
propagate-alarm-created:
    0:
        image: /images/user-guide/alarms/propagation-7-pe.png
        title: 'An alarm has been created on the device, and thanks to our settings, the alarm has propagated to the related asset.'
    1:
        image: /images/user-guide/alarms/propagation-8-pe.png
        title: 'You can also see the created alarm on the "Alarms" tab in the asset details window.'

find-alarms:
    0:
        image: /images/user-guide/alarms/find-alarms-1-pe.png
        title: 'To view alarms use the "Alarms" page in the left menu. Here you will see all reminders in list form, as well as the following information: creation time, source, alarm type, severity, to whom assigned, and status of the alarm.'
    1:
        image: /images/user-guide/alarms/find-alarms-2-pe.png
        title: 'To view alarm details, click on the ellipsis (...) in the "Details" column of the alarm you want to view.'

find-alarm-for-specific-device:
    0:
        image: /images/user-guide/alarms/find-alarm-for-specific-device-pe.png
        title: 'Go to the relevant entity&#39;s page to find reminders for a specific entity. In our case, these are the "Devices" page. Click on the needed entity (device) to open its details. Navigate to the "Alarms" tab.'

assignee-alarm-1:
    0:
        image: /images/user-guide/alarms/assign-alarm-to-user-3-pe.png
        title: 'Go to the "Alarms" page and specify the user in the "Assignee" column of the desired alarm.'
    1:
        image: /images/user-guide/alarms/assign-alarm-to-user-4-pe.png
        title: 'Go to the "Dashboards" page with Alarms table widget. Specify the user in the "Assignee" column of the desired alarm;'
    2:
        image: /images/user-guide/alarms/assign-alarm-to-user-1-pe.png
        title: 'Navigate to the "Alarms" tab of the entity details window selected entity and specify the user in the "Assignee" column.'

assignee-alarm-2:
    0:
        image: /images/user-guide/alarms/assign-alarm-to-user-2-pe.png
        title: 'When an alarm is assigned to the user, they will receive a notification about it.'

acknowledge-alarm:
    0:
        image: /images/user-guide/alarms/acknowledge-alarm-1-pe.png
        title: 'Click on the "Acknowledge" icon in the Alarm table widget.'
    1:
        image: /images/user-guide/alarms/acknowledge-alarm-2-pe.png
        title: 'Click on the "Acknowledge" button in the alarm details window.'

clear-alarm:
    0:
        image: /images/user-guide/alarms/clear-alarm-1-pe.png
        title: 'Click on the "Clear" icon in the Alarms table widget.'
    1:
        image: /images/user-guide/alarms/clear-alarm-2-pe.png
        title: 'Click on the "Clear" button in the alarms details window.'
        
alarm-comments-1:
    0:
        image: /images/user-guide/alarms/alarm-comments-1-pe.png
        title: 'To find alarm comments and leave your own, open the details of the selected alarm.'
    1:
        image: /images/user-guide/alarms/alarm-comments-2-pe.png
        title: 'Here you can view system comments, comments from other users, and leave your own.'

visualize-alarms-on-dashboard-1:
    0:
        image: /images/user-guide/alarms/visualize-alarms-on-dashboard-1-pe.png
        title: 'The "Alarms table" widget allows you to conveniently display alarms for selected entities based on a defined time window and filters.'

visualize-alarms-on-dashboard-2:
    0:
        image: /images/user-guide/alarms/visualize-alarms-on-dashboard-2-pe.png
        title: 'The "Alarm count" widget displays the number of alarms based on the selected filters. In this case, the number of active alarms is displayed.'

notification-about-alarm:
    0:
        image: /images/user-guide/alarms/notification-about-alarm-pe.png

propagation-settings:
    0:
        image: /images/user-guide/alarms/propagation-settings-pe.png



  
example-prepare-device:
    0:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-1-pe.png
        title: 'To follow the examples, you need a device named "<b>Thermometer</b>" that sends <b>temperature</b> telemetry.'

example-simple-alarm-condition-1:
    0:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-2-pe.png
        title: 'Go to the <b>Devices</b> page under <b>Entities</b>. Select your device (<b>Thermometer</b>). In the <b>device details</b>, go to the <b>Alarm rules</b> tab and click the "<b>+</b>" button and select <b>Create new alarm rule</b>.'
    1:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-3-pe.png
        title: '- In the <b>General</b> section, specify <b>Alarm type:</b> High temperature<br>- In the <b>Arguments</b> section, add new argument'
    2:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-4-pe.png
        title: '- In the <b>Create condition</b> section, click <b>Add create condition</b>.'
    3:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-5-pe.png
        title: '- <b>Severity:</b> Critical<br>- Click "<b>Please add alarm rule condition</b>"'
    4:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-6-pe.png
        title: 'Click "<b>Add filter</b>".'
    5:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-7-pe.png
        title: '<b>Argument:</b> temperature; <b>Value type:</b> Numeric; <b>Operation:</b> greater than; <b>Value:</b> 10'
    6:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-8-pe.png
        title: '<b>Condition settings:</b> <b>Condition type:</b> Simple'
    7:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-9-pe.png
        title: 'In this example, the other configuration sections do not need to be configured. Click <b>Add</b>.'
    8:
        image: /images/user-guide/alarm-rules/alarm-example-simple-alarm-condition-10-pe.png
        title: 'As a result, the rule will create a **critical** alarm as soon as the temperature exceeds <b>10°C</b>.'

alarm-example-clear-alarm-condition-1:
    0:
        image: /images/user-guide/alarm-rules/alarm-example-clear-alarm-condition-1-pe.png
        title: 'Go to the <b>Devices</b> page under <b>Entities</b>. Select your device (<b>Thermometer</b>). In the <b>device details</b>, go to the <b>Alarm rules</b> tab and click the "<b>+</b>" button and select <b>Create new alarm rule</b>.'
    1:
        image: /images/user-guide/alarm-rules/alarm-example-clear-alarm-condition-2-pe.png
        title: '- In the <b>General</b> section, specify <b>Alarm type:</b> High temperature<br>- In the <b>Arguments</b> section, add new argument'
    2:
        image: /images/user-guide/alarm-rules/alarm-example-clear-alarm-condition-3-pe.png
        title: '- In the <b>Create condition</b> section, click <b>Add create condition</b>.'
    3:
        image: /images/user-guide/alarm-rules/alarm-example-clear-alarm-condition-4-pe.png
        title: '- <b>Severity:</b> Critical<br>- Click "<b>Please add alarm rule condition</b>"'
    4:
        image: /images/user-guide/alarm-rules/alarm-example-clear-alarm-condition-5-pe.png
        title: 'Click "<b>Add filter</b>".'
    5:
        image: /images/user-guide/alarm-rules/alarm-example-clear-alarm-condition-6-pe.png
        title: '<b>Argument:</b> temperature; <b>Value type:</b> Numeric; <b>Operation:</b> greater than; <b>Value:</b> 10'
    6:
        image: /images/user-guide/alarm-rules/alarm-example-clear-alarm-condition-7-pe.png
        title: '<b>Condition settings:</b> <b>Condition type:</b> Simple'

alarm-example-clear-with-duration-1:
    0:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-duration-1-pe.png
        title: 'Go to the <b>Devices</b> page under <b>Entities</b>. Select your device (<b>Thermometer</b>). In the <b>device details</b>, go to the <b>Alarm rules</b> tab and click the "<b>+</b>" button and select <b>Create new alarm rule</b>.'
    1:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-duration-2-pe.png
        title: '- In the <b>General</b> section, specify <b>Alarm type:</b> High temperature<br>- In the <b>Arguments</b> section, add new argument'
    2:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-duration-3-pe.png
        title: '- In the <b>Create condition</b> section, click <b>Add create condition</b>.'
    3:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-duration-4-pe.png
        title: '- <b>Severity:</b> Critical<br>- Click "<b>Please add alarm rule condition</b>"'
    4:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-duration-5-pe.png
        title: 'Click "<b>Add filter</b>".'

alarm-example-clear-with-dynamic-duration-1:
    0:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-dynamic-duration-1-pe.png
        title: 'Go to the <b>Devices</b> page under <b>Entities</b>. Select your device (<b>Thermometer</b>). In the <b>device details</b>, go to the <b>Alarm rules</b> tab and click the "<b>+</b>" button and select <b>Create new alarm rule</b>.'
    1:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-dynamic-duration-2-pe.png
        title: '- In the <b>General</b> section, specify <b>Alarm type:</b> High temperature<br>- In the <b>Arguments</b> section, add new argument'

alarm-example-clear-with-dynamic-duration-2:
    0:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-dynamic-duration-3-pe.png
        title: '- In the <b>Create condition</b> section, click <b>Add create condition</b>.'
    1:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-dynamic-duration-4-pe.png
        title: '- <b>Severity:</b> Critical<br>- Click "<b>Please add alarm rule condition</b>"'
    2:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-dynamic-duration-5-pe.png
        title: 'Click "<b>Add filter</b>".'
    3:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-dynamic-duration-6-pe.png
        title: '- <b>Severity:</b> Critical<br>- Click "<b>Please add alarm rule condition</b>"'
    4:
        image: /images/user-guide/alarm-rules/alarm-example-clear-with-dynamic-duration-7-pe.png
        title: 'Click "<b>Add filter</b>".'





alarmСonditionsWithDuration:
  0:
    image: /images/user-guide/device-profile/alarm-example-2-step-1-pe.png
    title: 'Edit the alarm condition: change the condition type from "<b>Simple</b>" to "<b>Duration</b>". Specify the <b>duration value</b> and its <b>unit of measurement</b>. Save changes.'
  1:
    image: /images/user-guide/device-profile/alarm-example-2-step-2-pe.png
    title: 'Alarm condition changed.'

alarmСonditionsWithDuration2:
  0:
    image: /images/user-guide/device-profile/alarm-example-2-step-3-pe.png
    title: 'Edit the alarm condition. Go to the dynamic value of the alarm delay by pressing the "<b>Switch to dynamic value</b>" button.'
  1:
    image: /images/user-guide/device-profile/alarm-example-2-step-4-pe.png
    title: 'Select a value: current device, current customer or current tenant. And specify the attribute from which the alarm threshold value will be taken.
        You may optionally check "Inherit from owner". Inheritance allows to take the threshold value from customer if it is not set on the device level. If the attribute value is not set on both device and customer levels, rule will take the value from the tenant attributes. Save changes.'
  2:
    image: /images/user-guide/device-profile/alarm-example-2-step-5-pe.png
    title: 'Alarm condition changed.'

alarmСonditionsWithRepeating:
  0:
    image: /images/user-guide/device-profile/alarm-example-3-step-1-pe.png
    title: 'Edit the alarm condition and set the type to "<b>Repeating</b>". Specify the <b>count of events</b>. Save the condition.'
  1:
    image: /images/user-guide/device-profile/alarm-example-3-step-2-pe.png
    title: 'Alarm condition changed.'

alarmСonditionsWithRepeating2:
  0:
    image: /images/user-guide/device-profile/alarm-example-3-step-3-pe.png
    title: 'Go to the dynamic value of the repeating alarm condition by pressing the "<b>Switch to dynamic value" button</b>".'
  1:
    image: /images/user-guide/device-profile/alarm-example-3-step-4-pe.png
    title: 'Select a value: current device, current customer or current tenant. And specify the attribute from which the value will be taken, how many times the threshold value must be exceeded for an alarm to be triggered. You may optionally check "Inherit from owner". Inheritance allows to take the threshold value from customer if it is not set on the device level. If the attribute value is not set on both device and customer levels, rule will take the value from the tenant attributes. Save changes.'
  2:
    image: /images/user-guide/device-profile/alarm-example-3-step-5-pe.png
    title: 'Alarm condition changed.'

alarmСonditionsClear:
  0:
    image: /images/user-guide/device-profile/alarm-example-4-step-1-pe.png
    title: 'In the alarm rule configuration click "<b>Add clear condition</b>" button.'
  1:
    image: /images/user-guide/device-profile/alarm-example-4-step-2-pe.png
    title: 'Click on the red "<b>+</b>" sign.'
  2:
    image: /images/user-guide/device-profile/alarm-example-4-step-3-pe.png
    title: 'Click "<b>Add key filter</b>".'
  3:
    image: /images/user-guide/device-profile/alarm-example-4-step-4-pe.png
    title: 'Select the <b>key type</b>, specify <b>attribute/time series key name</b>, and choose the <b>value type</b>. Then click "<b>Add</b>" under the "<b>Filters</b>".'
  4:
    image: /images/user-guide/device-profile/alarm-example-4-step-5-pe.png
    title: 'Choose a <b>comparison operator</b> and enter the <b>threshold value</b>. Click "<b>Add</b>" in the bottom-right corner to confirm. Click "Add".'
  5:
    image: /images/user-guide/device-profile/alarm-example-4-step-6-pe.png
    title: 'Click "Save".'
  6:
    image: /images/user-guide/device-profile/alarm-example-4-step-7-pe.png
    title: 'Added alarm clearing condition. Finally, apply changes.'

alarmСonditionsSchedule:
  0:
    image: /images/user-guide/device-profile/alarm-example-5-step-1-pe.png
    title: 'Edit the schedule of the alarm rule.'
  1:
    image: /images/user-guide/device-profile/alarm-example-5-step-2-pe.png
    title: 'Specify timezone, days, time interval during which the alarm rule should be active. Click "Save".'
  2:
    image: /images/user-guide/device-profile/alarm-example-5-step-3-pe.png
    title: 'Finally, apply changes.'


alarmСonditionsAdvanced1:
  0:
    image: /images/user-guide/device-profile/alarm-example-6-step-6-pe.png
    title: 'Provide <b>temperatureAlarmFlag</b> and <b>temperatureAlarmThreshold</b> as server attributes for your device.'

alarmСonditionsAdvanced2:
  0:
    image: /images/user-guide/device-profile/alarm-example-6-step-1-pe.png
    title: '<b>Modify the temperature key filter</b> and change the <b>value type to dynamic</b>.'
  1:
    image: /images/user-guide/device-profile/alarm-example-6-step-2-pe.png
    title: 'Select a dynamic source type, enter <b>temperatureAlarmThreshold</b>, and click "<b>Update</b>". Optionally, check "Inherit from owner". This allows the threshold value to be taken from the customer if it is not set at the device level. If it is not set at either the device or customer level, the rule will use the value from <b>tenant attributes</b>.'
  2:
    image: /images/user-guide/device-profile/alarm-example-6-step-3-pe.png
    title: 'Add another <b>key filter</b> for the <b>temperatureAlarmFlag</b>, then click "<b>Add</b>".'
  3:
    image: /images/user-guide/device-profile/alarm-example-6-step-4-pe.png
    title: 'Select the key type "<b>Attribute</b>", specify <b>temperatureAlarmFlag</b> attribute as the key name, and choose "<b>Boolean</b>" value type. Choose a <b>comparison operator</b> and enter <b>threshold value</b>. Then click "<b>Add</b>".'
  4:
    image: /images/user-guide/device-profile/alarm-example-6-step-5-pe.png
    title: 'Save all changes.'

alarmСonstantFilters:
  0:
    image: /images/user-guide/device-profile/alarm-example-7-step-1-pe.png
    title: 'Use the <b>"Constant" key type</b> and specify the <b>constant value</b> you want to compare with the tenant or customer attribute value. Apply all changes.'


---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/alarm-rules.md %}