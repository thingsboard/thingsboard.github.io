---
layout: docwithnav-pe
assignees:
- stitenko
title: Lesson 5. Alarm management

major-high-temperature-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-1-pe.png
        title: 'Open the "Device profiles" page, click on the "smart-sensor" device profile to open its details. Enter editing mode by clicking the big orange pencil button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-2-pe.png
        title: 'Click the "Add alarm rule" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-3-pe.png
        title: 'Input the "High temperature alarm" as alarm type;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-4-pe.png
        title: 'Select "Major" severity, and click on the red "+" sign;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-5-pe.png
        title: 'Click the "Add key filter" button;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-6-pe.png
        title: 'Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-7-pe.png
        title: 'Select the "greater than" operation from drop-down menu, and input "30" as the threshold value. Click "Add" again to add another rule;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-8-pe.png
        title: 'Select the "less or equal" operation from drop-down menu, and input "32" as the threshold value. Click "Add" to confirm adding key filter;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-high-temperature-alarm-rule-9-pe.png
        title: 'Added the alarm rule condition of "Major" type.'

critical-high-temperature-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-high-temperature-alarm-rule-1-pe.png
        title: 'Click the "Add create condition" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-high-temperature-alarm-rule-2-pe.png
        title: 'Select "Critical" severity, and click on the red "+" sign;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-high-temperature-alarm-rule-3-pe.png
        title: 'Click the "Add key filter" button;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-high-temperature-alarm-rule-4-pe.png
        title: 'Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-high-temperature-alarm-rule-5-pe.png
        title: 'Select the "greater than" operation from drop-down menu, and input `32` as the threshold value. Click "Add" to confirm adding key filter;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-high-temperature-alarm-rule-6-pe.png
        title: 'Click the "Save" button to apply the alarm condition.'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-high-temperature-alarm-rule-7-pe.png
        title: 'alarm condition'

high-temperature-clear-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/high-temperature-clear-alarm-rule-1-pe.png
        title: 'Click the "Add clear condition" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/high-temperature-clear-alarm-rule-2-pe.png
        title: 'Click on the red "+" sign;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/high-temperature-clear-alarm-rule-3-pe.png
        title: 'Click the "Add key filter" button;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/high-temperature-clear-alarm-rule-4-pe.png
        title: 'Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section. Select the "less or equal" operation from drop-down menu, and input "30" as the threshold value. Click "Add" to confirm adding key filter;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/high-temperature-clear-alarm-rule-5-pe.png
        title: 'Click the "“Save" button to apply the alarm condition;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/high-temperature-clear-alarm-rule-6-pe.png
        title: 'Finally, apply changes.'

final-high-temperature-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/final-high-temperature-alarm-rules-1-pe.png
        title: 'Finally, the high temperature alarm rules will look like this.'

final-low-temperature-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/final-low-temperature-alarm-rules-1-pe.png
        title: 'Similarly, add the rule for creating and clearing low temperature alerts: If the temperature falls below 20 but is not below 18 (inclusive), the alarm with the type "Major" will be created. If the temperature drops below 18, an alarm with the type "Critical" will be created. When the temperature rises above 20 degrees again, the alarm will be cleared.'

final-high-humidity-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/final-high-humidity-alarm-rules-1-pe.png
        title: 'Similarly, add the rule for creating and clearing low temperature alerts: If the temperature falls below 20 but is not below 18 (inclusive), the alarm with the type "Major" will be created. If the temperature drops below 18, an alarm with the type "Critical" will be created. When the temperature rises above 20 degrees again, the alarm will be cleared.'
  
final-low-humidity-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/final-low-humidity-alarm-rules-1-pe.png
        title: 'Finally, the high temperature alarm rules will look like this.'

final-co2-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/final-co2-alarm-rules-1-pe.png
        title: 'Similarly, add the rule for creating and clearing low temperature alerts: If the temperature falls below 20 but is not below 18 (inclusive), the alarm with the type "Major" will be created. If the temperature drops below 18, an alarm with the type "Critical" will be created. When the temperature rises above 20 degrees again, the alarm will be cleared.'

major-power-consumption-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-1-pe.png
        title: 'Open the "Device profiles" page, click on the "energy-sensor" device profile to open its details. Enter editing mode by clicking the big orange pencil button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-2-pe.png
        title: 'Click the "Add alarm rule" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-3-pe.png
        title: 'Input the "Power consumption alarm" as alarm type. Select "Major" severity, and click on the red "+" sign;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-4-pe.png
        title: 'Click the "Add key filter" button;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-5-pe.png
        title: 'Select the "Time series" as key type, and the "powerConsumption" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-6-pe.png
        title: 'Select the "greater than" operation from drop-down menu, and input "2" as the threshold value. Click "Add" again to add another rule;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-7-pe.png
        title: 'Select the "less or equal" operation from drop-down menu, and input "3" as the threshold value. Click "Add" to confirm adding key filter;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-8-pe.png
        title: 'Click the "Save" button to apply the alarm condition.'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/major-power-consumption-alarm-rule-9-pe.png
        title: 'Added the alarm rule condition of "Major" type.'

critical-power-consumption-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-power-consumption-alarm-rule-1-pe.png
        title: 'Click the "Add create condition" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-power-consumption-alarm-rule-2-pe.png
        title: 'Select "Critical" severity, and click on the red "+" sign;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-power-consumption-alarm-rule-3-pe.png
        title: 'Click the "Add key filter" button;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-power-consumption-alarm-rule-4-pe.png
        title: 'Select the "Time series" as key type, and the "powerConsumption" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-power-consumption-alarm-rule-5-pe.png
        title: 'Select the ""greater than" operation from drop-down menu, and input 3 as the threshold value. Click "Add" to confirm adding key filter;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-power-consumption-alarm-rule-6-pe.png
        title: 'Click the "Save" button to apply the alarm condition.'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/critical-power-consumption-alarm-rule-7-pe.png
        title: 'Select the "greater than" operation from drop-down menu, and input "30" as the threshold value. Click "Add" again to add another rule;'

clear-power-consumption-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/clear-power-consumption-alarm-rule-1-pe.png
        title: 'Click the "Add clear condition" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/clear-power-consumption-alarm-rule-2-pe.png
        title: 'Click on the red "+" sign;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/clear-power-consumption-alarm-rule-3-pe.png
        title: 'Click the "Add key filter" button;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/clear-power-consumption-alarm-rule-4-pe.png
        title: 'Select the "Time series" as key type, and the "powerConsumption" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/clear-power-consumption-alarm-rule-5-pe.png
        title: 'Select the "less or equal" operation from drop-down menu, and input "2" as the threshold value. Click "Add" to confirm adding key filter;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/clear-power-consumption-alarm-rule-6-pe.png
        title: 'Click the "Save" button to apply the alarm condition;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/clear-power-consumption-alarm-rule-7-pe.png
        title: 'Finally, apply changes.'

final-power-consumption-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-5/final-power-consumption-alarm-rule-1-pe.png
        title: 'Similarly, add the rule for creating and clearing low temperature alerts: If the temperature falls below 20 but is not below 18 (inclusive), the alarm with the type "Major" will be created. If the temperature drops below 18, an alarm with the type "Critical" will be created. When the temperature rises above 20 degrees again, the alarm will be cleared.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-5.md %}
