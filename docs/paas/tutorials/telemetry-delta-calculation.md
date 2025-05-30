---
layout: docwithnav-paas
assignees:
- stitenko
title: Telemetry delta calculation
description: Telemetry delta calculation using the Calculated fields feature

adding-thermometer-device:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/add-thermometer-device-1-pe.png
        title: 'Go to the "Devices" page of the "Entities" section. Click on the "+" icon in the top right corner of the table, and select "Add new device" from drop-down menu.'
    1:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/add-thermometer-device-2-pe.png
        title: 'Name the device. For example Smart Device. Then, create a new device profile: enter a name for it, then click "Create a new one".'
    2:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/add-thermometer-device-3-pe.png
        title: 'Complete the device adding by clicking the "Add" button.'
    3:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/add-thermometer-device-4-pe.png
        title: 'Confirm the creation of the device profile by clicking the "Add" button.'
    4:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/add-thermometer-device-5-pe.png
        title: 'Device added.'

adding-alarm-rule-1:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/alarm-rule-1-pe.png
        title: 'Go to the "Device profiles" page of the "Profiles" section. Click on the "smart sensor" device profile to open its details. Navigate to the "Alarm rules" tab, and enter editing mode by clicking the big orange pencil button.'
    1:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/alarm-rule-2-pe.png
        title: 'Click the "Add alarm rule" button.'
    2:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/alarm-rule-3-pe.png
        title: 'Input the "Deviation alarm" as alarm type. Leave the "Critical" severity, and click on the red "+" sign.'

adding-alarm-rule-2:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/alarm-rule-4-pe.png
        title: 'Click the "Add key filter" button.'
    1:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/alarm-rule-5-pe.png
        title: 'Select the "Time series" as key type, and set the "deltaTemperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section.'
    2:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/alarm-rule-6-pe.png
        title: 'Select the "greater or equal" operation from drop-down menu, and input <b>5</b> as the threshold value. Click "Add" to confirm adding key filter.'
    3:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/alarm-rule-7-pe.png
        title: 'Save the alarm rule condition.'
    5:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/alarm-rule-8-pe.png
        title: 'The alarm trigger condition has been successfully added.'

clear-alarm-rule:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/clear-alarm-rule-1-pe.png
        title: 'Click the "Add clear condition" button.'
    1:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/clear-alarm-rule-2-pe.png
        title: 'Click on the red "+" sign.'
    2:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/clear-alarm-rule-3-pe.png
        title: 'Click the "Add key filter" button.'
    3:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/clear-alarm-rule-4-pe.png
        title: 'Select the "Time series" as key type, and set the "deltaTemperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section. Select the "less then" operation from drop-down menu, and input "<b>5</b>" as the threshold value. Click "Add" to confirm adding key filter.'
    4:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/clear-alarm-rule-5-pe.png
        title: 'Click the "Save" button to save the alarm condition.'
    5:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/clear-alarm-rule-6-pe.png
        title: 'Finally, apply changes.'

configured-alarm-rule:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/configured-alarm-rule-1-pe.png
        title: 'Finally, you have successfully configured the rule for creating and clearing alarms based on deviations in the deltaTemperature key value from the defined thresholds.'

create-calculated-field-1:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/create-calculated-field-1-pe.png
        title: 'Go back to your device and open its details, and navigate to the "Calculated fields" tab. Click the "plus" icon button and select "Create new calculated field" from the dropdown menu.'

create-calculated-field-2:
    0:  
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/create-calculated-field-2-pe.png
        title: 'The calculated field configuration window will open. Enter a descriptive title for the calculated field. Select "Script" as the type of calculated field. This allows you to perform complex calculations using the TBEL scripting language.'

create-calculated-field-3:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/create-calculated-field-3-pe.png
        title: 'Click "Add argument" and fill in the required fields. Then, click "Add".'

create-calculated-field-4:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/create-calculated-field-4-pe.png
        title: 'Define a function that will perform calculations using the variables defined in the "Arguments" section. The variable name that will store the calculation result is defined within the function itself. Set the output type as "Time series" to store the calculation result as time series data. To finish adding the calculated field, click "Add".'
    1:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/create-calculated-field-5-pe.png
        title: 'The calculated field has been successfully added to your device.'
  
check-configuration-1:
    0:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/check-configuration-1-pe.png
        title: 'In the "Details" tab of your device view, click the "Check connectivity" button.'
    1:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/check-configuration-2-pe.png
        title: 'Copy the generated telemetry publishing command.'
    2:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/check-configuration-3-pe.png
        title: 'Go to the "Latest telemetry" tab to monitor the incoming data in real time, and execute the copied command in the Terminal to send telemetry to ThingsBoard on behalf of the device. You will see two telemetry data keys: the temperature key with a value of 25, and the deltaTemperature key — the result of processing the temperature value using the calculated field function. Its value is 0 because, so far, only a single telemetry value has been sent to ThingsBoard.'
    3:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/check-configuration-4-pe.png
        title: 'Send another temperature value, for example, 32. The deltaTemperature value should now be 7, which matches the condition for triggering the alarm.'
    4:
        image: https://img.thingsboard.io/tutorials/telemetry-delta-calculation/check-configuration-5-pe.png
        title: 'Navigate to the "Alarms" tab, where you should see the newly created alarm. This confirms that all our configurations are correct.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/tutorials/telemetry-delta-calculation.md %}