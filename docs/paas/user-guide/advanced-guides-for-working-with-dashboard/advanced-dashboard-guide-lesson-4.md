---
layout: docwithnav-paas
assignees:
- stitenko
title: Lesson 4. Alarm management

dashboard-lesson-4:
    0:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/dashboard-final-lesson-4-1-pe.png
    1:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/dashboard-final-lesson-4-2-pe.png
    2:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/dashboard-final-lesson-4-3-pe.png
    3:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/dashboard-final-lesson-4-4-pe.png

major-high-temperature-alarm-rule:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-1-pe.png
        title: 'Open the "Device profiles" page, click on the "air-sensor" device profile to open its details. Enter editing mode by clicking the big orange pencil button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-2-pe.png
        title: 'Click the "Add alarm rule" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-3-pe.png
        title: 'Input the "High temperature alarm" as alarm type. Check the "Propagate alarm to related entities" option in the advanced settings to propagate the alarm to all related entities;'
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
        title: 'Select the "greater than" operation from drop-down menu, and input <b>24</b> as the threshold value. Click "Add" again to add another rule;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-8-pe.png
        title: 'Select the "less or equal" operation from drop-down menu, and input <b>26</b> as the threshold value. Click "Add" to confirm adding key filter;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/major-high-temperature-alarm-rule-9-pe.png
        title: 'Click "Save";'
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
        title: 'Select the "greater than" operation from drop-down menu, and input <b>27</b> as the threshold value. Click "Add" to confirm adding key filter;'
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
        title: 'Select the "Time series" as key type, and the "temperature" as the key name. Change "Value type" to "Numeric". Click the "Add" button in the "Filters" section. Select the "less or equal" operation from drop-down menu, and input "<b>24</b>" as the threshold value. Click "Add" to confirm adding key filter;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/high-temperature-clear-alarm-rule-5-pe.png
        title: 'Click the "Save" button to apply the alarm condition;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/high-temperature-clear-alarm-rule-6-pe.png
        title: 'Finally, apply changes.'

final-high-temperature-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-high-temperature-alarm-rules-1-pe.png
        title: 'Finally, the configured rule for creating a high-temperature alarm and the condition for clearing it will look like this.'

final-low-temperature-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-low-temperature-alarm-rules-1-pe.png
        title: 'Similarly, add the rule for creating and clearing a low temperature alarm: If the temperature falls below 20 °C but is not below 18 °C (inclusive), the alarm with the type "Major" will be created. If the temperature drops below 18, an alarm with the type "Critical" will be created. When the temperature rises above 20 °C again, the alarm will be automatically cleared.'

final-high-humidity-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-high-humidity-alarm-rules-1-pe.png
        title: 'Add the rule for creating and clearing a high humidity alarm: if the humidity is between 60% and 65%, an alarm with severity type "Major" will be triggered. If the humidity rises above 65%, the alarm "Critical" is triggered. When the humidity drops below 60% again, the alarm will be automatically cleared.'
  
final-low-humidity-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-low-humidity-alarm-rules-1-pe.png
        title: 'Add the rule for creating and clearing a low humidity alarm: If the humidity falls below 40 % but is not below 35 % (inclusive), the alarm with the severity type "Major" will be created. If the humidity drops below 35 %, an alarm with th severty type "Critical" will be created. When the humidity rises above 40 % again, the alarm will be automatically cleared.'

final-co2-alarm-rules:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/final-co2-alarm-rules-1-pe.png
        title: 'Finally, add a rule for creating and clearing a high-level CO2 alarm: if the CO2 level rises above 490 ppm, an alarm with severity type "Major" will be triggered. If the CO2 level rises above 500 ppm, an alarm with severity type "Critical" will be triggered. When the CO2 level drops below 490 ppm again, the alarm will be automatically cleared.'

customizing-rule-chain-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/customizing-rule-chain-1-pe.png
        title: 'Go to the "Rule chains" page, and open the "Device Telemetry Emulators" rule chain. Remove all links from the "generator" nodes to the "save telemetry" node;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/customizing-rule-chain-2-pe.png
        title: 'Find the “device profile” node in the node library, and drag it into the rule chain canvas;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/customizing-rule-chain-3-pe.png
        title: 'Node configuration window will be opened. Name it "Device profile node", and click "Add";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/customizing-rule-chain-4-pe.png
        title: 'Link the "generator" nodes to the "device profile" node. Select the "Success" link for these connections. Link the "device profile" node to the "save timeseries" node. Again, select the "Success" link. Afterwards, save rule chain.'

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
        title: 'Change widget title to "Air sensor alarms". In the "Table buttons" section, leave only the "Allow alarms acknowledgment" and "Allow alarms clear" options turned on;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-9-pe.png
        title: 'Uncheck "Data export" option in the "Card appearance" section. Then, click "Add" to confirm adding widget;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-10-pe.png
        title: 'We have added a widget that will display the active alarms for your device. Place the "Air sensor alarms" widget on the free space of the dashboard and adjust its size by dragging the lower right corner. Then, save the dashboard.'

final-air-sensor-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/adding-alarms-table-widget-11-pe.png
        title: 'The final view of <b>air_sensor</b> state.'

alarm-send-telemetry-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-1-pe.png
        title: 'Go to the "Devices" page. Choose the "Indoor Air Quality Sensor" device and click the "Check connectivity” button in the "Device details" window;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-2-pe.png
        title: 'In the opened window choose the desired messaging protocol and select your operating system. Install the required client tools, if necessary. Next, copy the provided command, which includes telemetry data;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-3-pe.png
        title: 'Open the <b>Terminal</b> and paste the copied command. This command will send a POST request to the ThingsBoard server with the {"temperature":25} data. Execute this command. After successful execution, the "temperature" reading will be published. Then, close the connectivity window.'

alarm-send-telemetry-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-4-pe.png
        title: 'Return to the <b>air_sensor</b> dashboard state. In the Alarms table widget, an alarm should appear displaying the created time, originator of the alarm, its severity and its status.'

alarm-send-telemetry-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/send-telemetry-5-pe.png
        title: 'You will also receive a notification about the triggered alarm in the Notification center.'

acknowledge-alarm-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/acknowledge-alarm-1-pe.png
        title: 'To acknowledge the alarm, click on the "Acknowledge" icon;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/acknowledge-alarm-2-pe.png
        title: 'Click "Yes" to confirm acknowledge alarm;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/acknowledge-alarm-3-pe.png
        title: 'Alarm status changed to "Active Acknowledged".'

clear-alarm-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-1-pe.png
        title: 'To clear the alarm, click on the "Clear" icon;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-2-pe.png
        title: 'Click "Yes" to confirm clear alarm;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/clear-alarm-3-pe.png
        title: 'Alarm cleared.'

add-alarm-widget-to-office-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-1-pe.png
        title: 'Go to the <b>air_sensor</b> state, and enter dashboard edit mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-2-pe.png
        title: 'Right-click on the alarm widget, and select "Copy" from the dropdown menu;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-3-pe.png
        title: 'Navigate to the <b>office</b> state, right-click on an empty area of the dashboard, and select "Paste";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-4-pe.png
        title: 'Place the widget in an empty spot on the dashboard and adjust its size. Then, save the dashboard;'

add-alarm-widget-to-office-state-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-5-pe.png
        title: 'After saving the changes, you will automatically be redirected to the <b>air_sensor</b> state. Switch to the <b>Office A</b> state to check the result.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-6-pe.png
        title: 'As you may notice, active alarms are not displayed in the widget. This happens because the Office A entity is currently selected, while the alarm was created on a device that has a relation to this office. Previously, in the alarm rule, we specified that the alarm should be propagated to related entities. Now, we need to configure the widget to search for these propagated alarms.'

add-alarm-widget-to-office-state-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-7-pe.png
        title: 'Enter the dashboard edit mode and click the "pencil" icon on the alarm widget to edit it;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-8-pe.png
        title: 'Change the alarms source to "Office sensors" entity alias. Turn on the "Search propagated alarms" option. This option enables displaying alarms for both the selected entity and its child entities, provided that relationships exist between them;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-9-pe.png
        title: 'Change the widget title to "Office alarms". Then, apply the changes;'  
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-10-pe.png
        title: 'Save the dashboard.'

final-office-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-office-state-11-pe.png
        title: 'Now, as you can see, the widget displays the alarms of the devices that have a relation to the selected office.'

add-alarm-widget-to-building-a-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-state-1-pe.png
        title: 'Being in the <b>office</b> state, enter dashboard edit mode. Right-click on the alarm widget, and select "Copy" from the dropdown menu;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-state-2-pe.png
        title: 'Navigate to the <b>Buildings</b> (default) state, right-click on an empty area of the dashboard, and select "Paste";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-state-3-pe.png
        title: 'Place the widget in an empty spot on the dashboard and adjust its size. Click the "pencil" icon on the alarm widget to edit it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-state-4-pe.png
        title: 'Change the alarms source to "Building offices" entity alias;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-state-5-pe.png
        title: 'Change the widget title to "Building alarms". Then, apply the changes;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-state-6-pe.png
        title: 'Save the dashboard.'

add-alarm-widget-to-building-a-state-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-building-state-7-pe.png
        title: 'The alarm widget displays the alarms of the devices related to the selected building.'

add-alarm-widget-to-buildings-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-1-pe.png
        title: 'Being in the <b>office</b> state, enter dashboard edit mode. Right-click on the alarm widget, and select "Copy" from the dropdown menu;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-2-pe.png
        title: 'Navigate to the <b>Buildings</b> (default) state, right-click on an empty area of the dashboard, and select "Paste";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-3-pe.png
        title: 'Place the widget in an empty area on the dashboard and adjust its size. Then, click the "pencil" icon on the alarm widget to edit it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-4-pe.png
        title: 'Change the alarm source to "Buildings" entity alias;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-5-pe.png
        title: 'Rename the widget to "All alarms", and apply changes;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-6-pe.png
        title: 'Finally, save the dashboard.'

add-alarm-widget-to-buildings-state-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/add-alarm-widget-to-buildings-state-7-pe.png
        title: 'Now, if there are alarms on your devices, they will be displayed in the alarms widget in the <b>Building</b> (default) state.'

dashboard-final-lesson-4:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/dashboard-final-lesson-4-1-pe.png
        title: 'Default state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/dashboard-final-lesson-4-2-pe.png
        title: 'Building&#39;s state'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/dashboard-final-lesson-4-3-pe.png
        title: 'Office&#39;s state'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-4/dashboard-final-lesson-4-4-pe.png
        title: 'Indoor Air Quality Sensor state;'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-4.md %}