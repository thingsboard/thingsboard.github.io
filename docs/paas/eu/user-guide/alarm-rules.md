---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Alarm rules
description: Creating alarm rules

step-1-add-alarm-rule-1:
    0:
        image: /images/user-guide/alarm-rules/step-1-add-alarm-rule-1-pe.png
        title: '- Navigate to <b>Alarms</b> page &#8702; <b>Alarm rules</b> tab.<br>- Click the "<b>+</b>" button in the top-right corner and select <b>Create new alarm rule</b> from the dropdown menu.'

step-2-general-section-1:
    0:
        image: /images/user-guide/alarm-rules/step-2-general-section-1-pe.png
        title: 'Specify the <b>alarm type</b> — the name and unique identifier of the alarm.<br>- Set the <b>entity type</b> - the target entity or entity profile where the alarm rule will be applied.'

step-3-arguments-1:
    0:
        image: /images/user-guide/alarm-rules/step-3-arguments-1-pe.png
        title: 'Before defining alarm conditions, you must add at least one <b>argument</b> — a data source that the rule will use during evaluation.Click <b>Add argument</b> and configure the following parameters.'

step-3-arguments-2:
    0:
        image: /images/user-guide/alarm-rules/step-3-arguments-2-pe.png
        title: '<b>Entity type</b> defines where the argument value comes from.'

step-3-arguments-3:
    0:
        image: /images/user-guide/alarm-rules/step-3-arguments-3-pe.png
        title: '<b>Argument type</b> defines what kind of data the argument will represent.'

step-3-arguments-4:
    0:
        image: /images/user-guide/alarm-rules/step-3-arguments-4-pe.png
        title: '<b>Argument name</b> — the identifier you will use in formulas and conditions.<br>After configuring the fields, click <b>Add</b>.'
    1:
        image: /images/user-guide/alarm-rules/step-3-arguments-5-pe.png

step-4-creation-conditions-1:
    0:
        image: /images/user-guide/alarm-rules/step-4-creation-conditions-1-pe.png
        title: 'This step defines the core logic of the alarm rule.<br>Click <b>Add trigger condition</b> and configure the following parameters.'

step-4-creation-conditions-severity-1:
    0:
        image: /images/user-guide/alarm-rules/step-4-creation-conditions-severity-1-pe.png
        title: '<b>Severity</b> defines the criticality of the alarm at the moment it is created.<br>It affects incident prioritization, UI representation, and automation workflows (Rule Engine, notification rules, etc.).'

step-4-creation-condition-add-filter-1:
    0:
        image: /images/user-guide/alarm-rules/step-4-creation-condition-add-filter-1-pe.png
        title: 'Click <b>Add condition</b>.'
    1:
        image: /images/user-guide/alarm-rules/step-4-creation-condition-add-filter-2-pe.png
        title: 'Configure the alarm trigger logic by defining one or more filters. Click <b>Add argument filter</b>.'
    2:
        image: /images/user-guide/alarm-rules/step-4-creation-condition-add-filter-3-pe.png
        title: '<b>General configuration</b>:<br>- <b>Argument</b> — the variable you want to compare (e.g., temperature).<br>- <b>Value type</b> — the data type of the value being evaluated (Numeric, Boolean, String, etc.).'
    3:
        image: /images/user-guide/alarm-rules/step-4-creation-condition-add-filter-4-pe.png
        title: '<b>Configure filters</b>:<br>- <b>Operation</b> — the comparison operator.<br>- <b>Value source</b> — select one of the following.<br>- <b>Value</b> — specify the value to compare against.<br>- After adding all required filters, click <b>Add</b> to save the condition.'
    4:
        image: /images/user-guide/alarm-rules/step-4-creation-condition-add-filter-5-pe.png

step-4-creation-condition-types-1:
    0:
        image: /images/user-guide/alarm-rules/step-4-creation-condition-types-1-pe.png
        title: 'ThingsBoard supports three types of conditions:<br>- <b>Simple.</b> Triggers immediately when the expression becomes true. <br>- <b>Duration.</b> The condition must stay true continuously for a defined time period.<br>- <b>Repeating.</b> Triggers only after the condition occurs a specified number of times.'

step-4-schedule-1:
    0:
        image: /images/user-guide/alarm-rules/step-4-schedule-1-pe.png
        title: 'The <b>Schedule</b> defines the time periods during which the alarm creation rule is active. The system evaluates create conditions only when the current time falls within an allowed interval.'
    1:
        image: /images/user-guide/alarm-rules/step-4-schedule-2-pe.png
        title: 'If the create condition becomes true <b>outside the defined schedule</b>, the alarm <b>will not be created</b> — even if the logical expression evaluates to true.'

step-4-schedule-types-1:
    0:
        image: /images/user-guide/alarm-rules/step-4-schedule-types-1-pe.png
        title: '<b>Active all time</b> — always active'
    1:
        image: /images/user-guide/alarm-rules/step-4-schedule-types-2-pe.png
        title: '<b>Active at a specific time range</b> <i>Example:</i> Mon–Fri, 09:00–18:00'
    2:
        image: /images/user-guide/alarm-rules/step-4-schedule-types-3-pe.png
        title: '<b>Custom schedule</b> - define different intervals for each day of the week'
  
step-4-schedule-dynamic-mode-1:
    0:
        image: /images/user-guide/alarm-rules/step-4-schedule-dynamic-mode-1-pe.png
        title: '<b>Dynamic mode</b><br>. Instead of configuring the schedule manually, you can provide a JSON object through an attribute or telemetry. This is useful when the schedule needs to vary from one device to another or from one customer to another.'

step-5-clear-conditions-1:
    0:
        image: /images/user-guide/alarm-rules/step-5-clear-conditions-1-pe.png
        title: 'Click <b>Add clear condition</b>.'

step-5-clearing-condition-add-filter-1:
    0:
        image: /images/user-guide/alarm-rules/step-5-clearing-condition-add-filter-1-pe.png
        title: 'Click <b>Add condition</b>.'
    1:
        image: /images/user-guide/alarm-rules/step-5-clearing-condition-add-filter-2-pe.png
        title: 'Configure the alarm trigger logic by defining one or more filters. Click <b>Add argument filter</b>.'
    2:
        image: /images/user-guide/alarm-rules/step-5-clearing-condition-add-filter-3-pe.png
        title: '- <b>Argument</b> — the variable you want to compare (e.g., temperature)<br>- <b>Value type</b> — the data type of the value being evaluated (Numeric, Boolean, String, etc.).'
    3:
        image: /images/user-guide/alarm-rules/step-5-clearing-condition-add-filter-4-pe.png
        title: '<b>Configure filters</b>.<br>- <b>Operation</b> — the comparison operator.<br>- <b>Value source</b> — select one of the following.<br>- <b>Value</b> — specify the value to compare against<br>- After adding all required filters, click <b>Add</b> to save the condition.'

step-5-clearing-condition-types-1:
    0:
        image: /images/user-guide/alarm-rules/step-5-clearing-condition-add-filter-5-pe.png
        title: 'ThingsBoard supports three types of conditions:<br>- <b>Simple.</b> Clears immediately when the condition becomes true. <br>- <b>Duration.</b> Must remain true for a specified period before clearing.<br>- <b>Repeating.</b> The condition must be satisfied a certain number of times before clearing.'

step-5-schedule-1:
    0:
        image: /images/user-guide/alarm-rules/step-5-schedule-1-pe.png
        title: 'The <b>clear schedule</b> defines <i>when</i> a clear condition is allowed to trigger.'
    1:
        image: /images/user-guide/alarm-rules/step-5-schedule-2-pe.png
        title: 'Example use cases:<br>- callow automatic clearing only during working hours<br>- allow clearing only at night<br>- restrict clearing during specific time intervals.'

step-6-propagate-alarm-1:
    0:
        image: /images/user-guide/alarm-rules/step-6-propagate-alarm-1-pe.png
        title: '<b>Propagate alarm to related entities</b>.<br>When enabled, the alarm becomes visible to all entities related to the originator, regardless of the relation type.'

step-6-propagate-alarm-2:
    0:
        image: /images/user-guide/alarm-rules/step-6-propagate-alarm-2-pe.png
        title: '<b>Propagate alarm to the owner (Customer / Tenant)</b>.<br>Makes the alarm visible to the direct owner of the originator — either a Customer or the Tenant.'

step-6-propagate-alarm-3:
    0:
        image: /images/user-guide/alarm-rules/step-6-propagate-alarm-3-pe.png
        title: '<b>Propagate alarm to entity owners hierarchy</b>.<br>Propagates the alarm up the entire ownership chain, ensuring visibility at every parent level: <b>Asset &#8702; Customer &#8702; Tenant</b>.'

step-6-propagate-alarm-4:
    0:
        image: /images/user-guide/alarm-rules/step-6-propagate-alarm-4-pe.png
        title: '<b>Propagate alarm to Tenant</b>.<br>Makes the alarm visible at the Tenant level, regardless of ownership or relations.'

step-7-save-rule-1:
    0:
        image: /images/user-guide/alarm-rules/step-7-save-rule-1-pe.png
        title: 'Click <b>Add</b> to save the rule configuration.'
    1:
        image: /images/user-guide/alarm-rules/step-7-save-rule-2-pe.png
        title: 'After saving, ThingsBoard will automatically begin creating, updating, and processing alarms according to the conditions, schedule, and propagation settings you defined.'

alarm-rules-parameters-1:
    0:
        image: /images/user-guide/alarm-rules/alarm-rules-parameters-1-pe.png
        title: 'Managing Alarm Rules in the Alarm rules list.'

alarm-rules-parameters-2:
    0:
        image: /images/user-guide/alarm-rules/alarm-rules-parameters-2-pe.png
        title: 'Click an alarm rule to view its detailed information.'

alarm-rules-parameters-3:
    0:
        image: /images/user-guide/alarm-rules/alarm-rules-parameters-3-pe.png
        title: 'To modify the alarm rule, click the rule. The alarm rule details window will open.<br>Click the <b>orange pencil</b> icon to switch to <b>edit mode</b>.'
    1:
        image: /images/user-guide/alarm-rules/alarm-rules-parameters-4-pe.png
        title: 'After making the required changes, click the <b>orange checkmark</b> icon to apply and save the changes.'

export-alarm-rule-1:
    0:
        image: /images/user-guide/alarm-rules/export-alarm-rule-1-pe.png
        title: 'Navigate to <b>Alarms</b> page &#8702; <b>Alarm rules</b> tab.<br>Click the <b>Export</b> button located in the row of the specific alarm rule.'

import-alarm-rule-1:
    0:
        image: /images/user-guide/alarm-rules/import-alarm-rule-1-pe.png
        title: '- Navigate to <b>Alarms</b> page &#8702; <b>Alarm rules</b> tab.<br>- Click the "<b>+</b>" button in the top-right corner, and select <b>Import alarm rule</b> from the dropdown menu.'
    1:
        image: /images/user-guide/alarm-rules/import-alarm-rule-2-pe.png
        title: '- In the import dialog, drag and drop the JSON file or choose it manually.<br>- Click <b>Import</b> to upload the configuration.'
    2:
        image: /images/user-guide/alarm-rules/import-alarm-rule-3-pe.png
        title: '- Specify the <b>target profile or entity</b> for the imported alarm rule.<br>- Finally, click <b>Add</b> to save the rule.'

alarm-rules-example-prepare-device-1:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-prepare-device-1-pe.png
        title: 'Go to the <b>Devices</b> and <b>import device configuration</b> from a CSV file.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-prepare-device-2-pe.png
        title: '<b>Time series:</b> temperature.'
    2:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-prepare-device-3-pe.png
        title: 'The imported <b>Thermometer</b> device publishes <b>temperature</b> as telemetry data.'

alarm-rules-example-simple-1:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-1-pe.png
        title: 'Go to the <b>Alarm rules</b> page under <b>Alarms</b>.<br>Click the "<b>+</b>" button in the top-right corner. Select <b>Create new alarm rule</b> from the dropdown menu.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-2-pe.png
        title: 'In the <b>General</b> section:<br>- Set <b>Alarm type</b> to <i>High temperature</i>.<br>- Select <b>Target entity type</b>: <i>Device</i>.<br>- Specify the <b>target device</b>: <i>Thermometer</i>.'
    2:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-3-pe.png
        title: 'In the <b>Arguments</b> section, add new argument.'
    3:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-4-pe.png
        title: 'In the <b>Trigger conditions</b> section, click <b>Add trigger condition</b>.'
    4:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-5-pe.png
        title: '- <b>Severity:</b> Critical<br>- Click <b>Add condition</b>.'
    5:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-6-pe.png
        title: 'Click <b>Add argument filter</b>.'
    6:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-7-pe.png
        title: '<b>Argument:</b> temperature; <b>Value type:</b> Numeric; <b>Operation:</b> greater than; <b>Static value:</b> 10.'
    7:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-8-pe.png
        title: '<b>Condition type:</b> Simple. Click <b>Save</b>.'
    8:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-9-pe.png
        title: 'Click <b>Add</b>.'
    9:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-simple-10-pe.png
        title: 'As a result, the rule will create a <b>critical</b> alarm as soon as the temperature exceeds <b>10°C</b>.'

alarm-rule-example-clear-condition-1:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rule-example-clear-condition-1-pe.png
        title: 'Go to the <b>High Temperature</b> rule and open it for editing.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rule-example-clear-condition-2-pe.png
        title: 'Scroll down to the <b>Clear condition</b> section. Click <b>Add clear condition</b>.'
    2:
        image: /images/user-guide/alarm-rules/examples/alarm-rule-example-clear-condition-3-pe.png
        title: 'Click <b>Add condition</b>.'
    3:
        image: /images/user-guide/alarm-rules/examples/alarm-rule-example-clear-condition-4-pe.png
        title: 'Click <b>Add argument filter</b>.'
    4:
        image: /images/user-guide/alarm-rules/examples/alarm-rule-example-clear-condition-5-pe.png
        title: '<b>Argument:</b> temperature; <b>Value type:</b> Numeric; <b>Operation:</b> less or equal; <b>Static value:</b> 4.<br>Click <b>Add</b>.'
    5:
        image: /images/user-guide/alarm-rules/examples/alarm-rule-example-clear-condition-6-pe.png
        title: 'Click <b>Save</b>.'
    6:
        image: /images/user-guide/alarm-rules/examples/alarm-rule-example-clear-condition-7-pe.png
        title: 'Apply changes.'

alarm-rules-example-condition-duration-1:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-duration-1-pe.png
        title: 'Go to the <b>High Temperature</b> rule and open it for editing.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-duration-2-pe.png
        title: 'Scroll down to the <b>Trigger condition</b> section and edit the existing condition.'
    2:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-duration-3-pe.png
        title: '<b>Condition type:</b> Duration; <b>Duration value:</b> 1 minute.<br>Click <b>Save</b>.'
    3:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-duration-4-pe.png
        title: 'Apply changes.'

alarm-rules-example-condition-with-dynamic-duration-1:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-with-dynamic-duration-1-pe.png
        title: 'Add a <b>highTemperatureDurationThreshold</b> server attribute to the <b>Thermometer</b> device.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-with-dynamic-duration-2-pe.png
        title: 'This value will be used by the alarm rule as the duration requirement.'

alarm-rules-example-condition-with-dynamic-duration-2:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-with-dynamic-duration-3-pe.png
        title: 'Go to the <b>High Temperature</b> rule and open it for editing.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-with-dynamic-duration-4-pe.png
        title: 'In the <b>Arguments</b> section, add new argument that will be used in the <b>Duration</b> condition.'
    2:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-with-dynamic-duration-5-pe.png
        title: 'Scroll down to the <b>Trigger condition</b> section and edit the existing condition.'
    3:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-with-dynamic-duration-6-pe.png
        title: '<b>Condition type:</b> Duration; <b>Dynamic value:</b> <b>Argument</b> highTemperatureDurationThreshold; <b>Time unit:</b> minutes.<br>Click <b>Save</b>.'
    4:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-with-dynamic-duration-7-pe.png
        title: 'Apply changes.'

alarm-rules-example-condition-repeating-1:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-repeating-1-pe.png
        title: 'Go to the <b>High Temperature</b> rule and open it for editing.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-repeating-2-pe.png
        title: 'Scroll down to the <b>Trigger condition</b> section and edit the existing condition.'
    2:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-repeating-3-pe.png
        title: 'Condition type: "<b>Repeating</b>". <b>Count of events</b>: 3. Save the condition.'
    3:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-condition-repeating-4-pe.png
        title: 'Apply changes.'

alarm-rules-example-schedule-1:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-schedule-1-pe.png
        title: 'Go to the <b>High Temperature</b> rule and open it for editing.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-schedule-2-pe.png
        title: 'Open the schedule settings for the alarm&#39;s trigger condition.'
    2:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-schedule-3-pe.png
        title: 'Select the schedule type: <i>Active at a specific time</i>.<br>Configure the rule to be active only on weekdays from 10:00 to 19:00. Click <b>Save</b>.'
    3:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-schedule-4-pe.png
        title: 'Apply changes.'

alarm-rules-example-advanced-thresholds-1:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-1-pe.png
        title: 'Add a <b>temperatureAlarmFlag</b> <i>server attribute</i> to the <b>Thermometer</b> device.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-2-pe.png
        title: 'This attribute determines whether the alarm rule is active for the device.'

alarm-rules-example-advanced-thresholds-2:
    0:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-3-pe.png
        title: 'Go to the <b>High Temperature</b> rule and open it for editing.'
    1:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-4-pe.png
        title: 'In the <b>Arguments</b> section, add new argument that will be used in the <b>creation</b> condition.'
    2:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-5-pe.png
        title: 'Scroll down to the <b>Trigger condition</b> section and edit the existing condition.'
    3:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-6-pe.png
        title: 'Click <b>Add argument filter</b>.'
    4:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-7-pe.png
        title: '<b>Argument:</b> <i>temperatureAlarmFlag</i>; <b>Value type:</b> <i>Boolean</i>; <b>Operation:</b> <i>equal</i>; <b>Static value:</b> <i>True</i>.<br>Click <b>Add</b>.'
    5:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-8-pe.png
        title: 'Click <b>Save</b>.'
    6:
        image: /images/user-guide/alarm-rules/examples/alarm-rules-example-advanced-thresholds-9-pe.png
        title: 'Apply changes.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/user-guide/alarm-rules.md %}