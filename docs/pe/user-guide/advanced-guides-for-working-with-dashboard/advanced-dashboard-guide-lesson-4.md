---
layout: docwithnav-pe
assignees:
- stitenko
title: Lesson 4. Alarm management

major-high-temperature-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-1-pe.png
        title: 'Open the "Device profiles" page, click on the "smart-sensor" device profile to open its details. Enter editing mode by clicking the big orange pencil button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-2-pe.png
        title: 'Click the "Add alarm rule" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-3-pe.png
        title: 'Input the "High temperature alarm" as alarm type;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-4-pe.png
        title: 'Select "Major" severity, and click on the red "+" sign;'

major-high-temperature-alarm-rule-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-5-pe.png
        title: 'Click the "Add key filter" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-6-pe.png
        title: 'Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-7-pe.png
        title: 'Select the "greater than" operation from drop-down menu, and input "24" as the threshold value. Click "Add" again to add another rule;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-8-pe.png
        title: 'Select the "less or equal" operation from drop-down menu, and input "26" as the threshold value. Click "Add" to confirm adding key filter;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-9-pe.png
        title: 'Added the alarm rule condition of "Major" type.'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-10-pe.png
        title: 'Added the alarm rule condition of "Major" type.'

critical-high-temperature-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/critical-high-temperature-alarm-rule-1-pe.png
        title: 'Click the "Add create condition" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/critical-high-temperature-alarm-rule-2-pe.png
        title: 'Select "Critical" severity, and click on the red "+" sign;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/critical-high-temperature-alarm-rule-3-pe.png
        title: 'Click the "Add key filter" button;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/critical-high-temperature-alarm-rule-4-pe.png
        title: 'Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/critical-high-temperature-alarm-rule-5-pe.png
        title: 'Select the "greater than" operation from drop-down menu, and input `27` as the threshold value. Click "Add" to confirm adding key filter;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/critical-high-temperature-alarm-rule-6-pe.png
        title: 'Click the "Save" button to apply the alarm condition.'

high-temperature-clear-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/high-temperature-clear-alarm-rule-1-pe.png
        title: 'Click the "Add clear condition" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/high-temperature-clear-alarm-rule-2-pe.png
        title: 'Click on the red "+" sign;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/high-temperature-clear-alarm-rule-3-pe.png
        title: 'Click the "Add key filter" button;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/high-temperature-clear-alarm-rule-4-pe.png
        title: 'Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section. Select the "less or equal" operation from drop-down menu, and input "24" as the threshold value. Click "Add" to confirm adding key filter;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/high-temperature-clear-alarm-rule-5-pe.png
        title: 'Click the "“Save" button to apply the alarm condition;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/high-temperature-clear-alarm-rule-6-pe.png
        title: 'Finally, apply changes.'

final-high-temperature-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-high-temperature-alarm-rules-1-pe.png
        title: 'Finally, the high temperature alarm rules will look like this.'

final-low-temperature-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-low-temperature-alarm-rules-1-pe.png
        title: 'Similarly, add the rule for creating and clearing low temperature alerts: If the temperature falls below 20 but is not below 18 (inclusive), the alarm with the type "Major" will be created. If the temperature drops below 18, an alarm with the type "Critical" will be created. When the temperature rises above 20 degrees again, the alarm will be cleared.'

final-high-humidity-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-high-humidity-alarm-rules-1-pe.png
        title: 'Similarly, add the rule for creating and clearing low temperature alerts: If the temperature falls below 20 but is not below 18 (inclusive), the alarm with the type "Major" will be created. If the temperature drops below 18, an alarm with the type "Critical" will be created. When the temperature rises above 20 degrees again, the alarm will be cleared.'
  
final-low-humidity-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-low-humidity-alarm-rules-1-pe.png
        title: 'Finally, the high temperature alarm rules will look like this.'

final-co2-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-co2-alarm-rules-1-pe.png
        title: 'Similarly, add the rule for creating and clearing low temperature alerts: If the temperature falls below 20 but is not below 18 (inclusive), the alarm with the type "Major" will be created. If the temperature drops below 18, an alarm with the type "Critical" will be created. When the temperature rises above 20 degrees again, the alarm will be cleared.'

adding-alarms-table-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-1-pe.png
        title: 'Click on the "Indoor Air Quality Sensor" device row in the "Office sensors list" widget to transition to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-2-pe.png
        title: 'Enter dashboard editing mode;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-3-pe.png
        title: 'Click the "+ Add widget" button at the top of the screen;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-4-pe.png
        title: 'Find the "Alarm widgets" widgets bundle and click on it;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-5-pe.png
        title: 'Choose the "Alarms table" widget;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-6-pe.png
        title: 'Specify "Selected entity" alias as the data source. Check "Active" in the alarm status list of the filter section to show only active alarms;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-7-pe.png
        title: 'Remove "assignee" column;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-8-pe.png
        title: 'Change widget title to "Air sensor alarms". Next, turn off all option except "All alarms clear" option in the "Table buttons" section;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-9-pe.png
        title: 'Uncheck "Data export" option in the "Card appearance" section. Then, click "Add" to confirm adding widget;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-10-pe.png
        title: 'We have added a widget that will display the active alarms for your device. Place the "Air sensor alarms" widget on the free space of the dashboard and adjust its size by dragging the lower right corner. Then, save the dashboard.'
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-11-pe.png
        title: ''

alarm-send-telemetry-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-1-pe.png
        title: 'Open the "Devices" page. Choose the "Indoor Air Quality Sensor" device and click the "Check connectivity” button in the "Device details" window;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-2-pe.png
        title: 'In the opened window choose the desired messaging protocol and select your operating system. Install the required client tools, if necessary. Next, copy the provided command, which includes telemetry data;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-3-pe.png
        title: 'Open the Terminal and paste the copied command. This command will send a POST request to the ThingsBoard server with the {"temperature":25} data. Execute this command. After successful execution, the "temperature" reading will be published. Then, close the connectivity window;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-4-pe.png
        title: 'Return to the dashboard and navigate to the "air-sensor" state. In the "Alarm table" widget, a new alarm should appear, indicating the triggered rule;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-5-pe.png
        title: 'You will also receive a notification about the triggered alarm in the Notification center.'

clear-alarm-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-1-pe.png
        title: 'To clear the alarm, click on the "Clear" icon;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-2-pe.png
        title: 'Click "Yes" to confirm clear alarm;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-3-pe.png
        title: ''

add-alarm-widget-to-office-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-1-pe.png
        title: ''
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-2-pe.png
        title: ''
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-3-pe.png
        title: ''
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-4-pe.png
        title: ''
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-5-pe.png
        title: ''
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-6-pe.png
        title: ''
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-7-pe.png
        title: ''
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-8-pe.png
        title: ''
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-9-pe.png
        title: ''  
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-10-pe.png
        title: ''
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-11-pe.png
        title: ''

add-alarm-widget-to-building-a-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-a-state-1-pe.png
        title: ''
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-a-state-2-pe.png
        title: ''
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-a-state-3-pe.png
        title: ''
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-a-state-4-pe.png
        title: ''
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-a-state-5-pe.png
        title: ''

add-alarm-widget-to-buildings-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-1-pe.png
        title: ''
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-2-pe.png
        title: ''
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-3-pe.png
        title: ''
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-4-pe.png
        title: ''
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-5-pe.png
        title: ''




---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-4.md %}