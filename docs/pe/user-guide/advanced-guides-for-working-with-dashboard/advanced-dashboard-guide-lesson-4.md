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
        title: ''
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-2-pe.png
        title: ''
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-3-pe.png
        title: ''
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-4-pe.png
        title: ''
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-5-pe.png
        title: ';'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-6-pe.png
        title: ''
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-7-pe.png
        title: ''
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-8-pe.png
        title: ''
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-9-pe.png
        title: ''
  
alarm-send-telemetry-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/alarm-send-telemetry-1-pe.png
        title: ''
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/alarm-send-telemetry-2-pe.png
        title: ''
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/alarm-send-telemetry-3-pe.png
        title: ''
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/alarm-send-telemetry-4-pe.png
        title: ''
  
clear-alarm-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-1-pe.png
        title: 'To clear the alarm, click on the "Clear" icon;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-2-pe.png
        title: ''
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-3-pe.png
        title: ''











---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-4.md %}