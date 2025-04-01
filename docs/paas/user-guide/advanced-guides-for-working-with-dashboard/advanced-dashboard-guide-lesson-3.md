---
layout: docwithnav-paas
assignees:
- stitenko
title: Lesson 3. Adding and configuring individual states for each device

dashboard-lesson-3:
    0:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-1-pe.png
    1:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-2-pe.png
    2:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-3-pe.png
    3:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-4-pe.png
    4:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-5-pe.png
    5:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-6-pe.png

adding-new-rule-chain-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-1-pe.png
        title: 'Go to the "Rule chains" page and click "plus" icon, then select the "Create new rule chain" from drop-down menu;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-2-pe.png
        title: 'Name it "Device Telemetry Emulators", and click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-3-pe.png
        title: 'Open created rule chain by clicking on it.'

adding-new-rule-chain-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-4-pe.png
        title: 'Find the "generator" node and drag it to the rule chain. With its help, we will generate telemetry values for further visualization on the dashboard;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-5-pe.png
        title: 'Name it "Indoor air quality data emulator". Set the number of messages to send to 100 and the sending period to 600. Specify the device "SD-001" (Indoor Air Quality Sensor) as originator. Copy the script from the documentation and paste it into the generator function section to simulate telemetry data for temperature, humidity, and CO2. Click "Add".'

adding-new-rule-chain-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-6-pe.png
        title: 'Name it "Power consumption data emulator" Set the number of messages to send to 100 and the sending period to 600. Specify the device "EM-002" (Energy Meter) as originator. Copy the script from the documentation and paste it into the generator function section to simulate power consumption telemetry data. Click "Add."'

adding-new-rule-chain-4:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-7-pe.png
        title: 'Name it "Water consumption data emulator". Set the number of messages to send to 100 and the sending period to 600. Specify the device "WM-003" (Water Flow Meter) as originator. Copy the script from the documentation and paste it into the generator function section to simulate water consumption, and battery voltage telemetry data. Click "Add."'

adding-new-rule-chain-5:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-8-pe.png
        title: 'Name it "IAQ data emulator". Set the number of messages to send to 100 and the sending period to 600. Specify the device "AM-307" (IAQ Sensor) as originator. Copy the script from the documentation and paste it into the generator function section to simulate water consumption, and battery voltage telemetry data. Click "Add."'

adding-new-rule-chain-6:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-9-pe.png
        title: 'Find the "save timeseries" node and drag it to the rule chain;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-10-pe.png
        title: 'Name it "save time series", and click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-11-pe.png
        title: 'We have added all the necessary nodes.'

adding-new-rule-chain-7:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-12-pe.png
        title: 'Tap on the right grey circle of "generator" node and drag this circle to the left side of "save timeseries" node. Select the "Success" link and click "Add";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-13-pe.png
        title: 'Repeat this for each generator node. Afterwards, save rule chain.'

incoming-telemetry-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/incoming-telemetry-1-pe.png
        title: 'After waiting for the period specified in the generator nodes, you will be able to see the telemetry on the "Latest telemetry" tab of your devices.'

customize-office-sensors-list-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-1-pe.png
        title: 'Go to the dashboard and enter edit mode by clicking the "Edit mode" button on the toolbar;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-2-pe.png
        title: 'Click on the "pencil" icon of the "Office sensors list" widget to enter its editing mode;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-3-pe.png
        title: 'Add the columns for the following data keys: "temperature", "humidity", "co2", "powerConsumption", and "waterConsumption". Then, apply the changes to the widget;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-4-pe.png
        title: 'Now the table displays the devices&#39; telemetry.'

customize-office-sensors-list-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-5-pe.png
        title: 'Re-enter the edit mode of the "Office sensors list" widget by clicking the pencil icon;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-6-pe.png
        title: 'Add another column: name it "telemetryValue", and click the "Time series" icon to add a new key;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-7-pe.png
        title: 'Rename the labels for the keys "Name" and "telemetryValue" to "Device name" and "Telemetry value," respectively. Next, click the "gear" icon next to the "telemetryValue" row to open its settings;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-8-pe.png
        title: 'Turn on the "Use cell content function" option. Insert the function from the documentation into the corresponding field. This function will combine several telemetry columns into one for a single device. Then click "Save";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-9-pe.png
        title: 'Now we need to hide the unnecessary columns such as "temperature", "humidity", "co2", "powerConsumption", and "waterConsumption". Click the "gear" icon next to the "temperature" to open its settings;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-10-pe.png
        title: 'Select "Hidden" in the "Default column visibility" menu. Click "Save" to apply the changes for this column;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-11-pe.png
        title: 'Repeat the steps described above for the columns "humidity", "co2", "powerConsumption", and "waterConsumption". Ensure that only the columns "Device name" and "Telemetry value" remain visible;'

customize-office-sensors-list-widget-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-12-pe.png
        title: 'Click the "pencil" icon of the "powerConsumption" key;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-13-pe.png
        title: 'Select the "Sum" as the aggregation function, and click "Save";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-14-pe.png
        title: 'Also, set "Sum" as the aggregation function for the telemetry key "waterConsumption". Remove the automatically added prefixes from the keys label "powerConsumption" and "waterConsumption" after selecting aggregation;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-15-pe.png
        title: 'Scroll up to locate the time window settings. Use the dashboard&#39;s time window and apply the changes to the widget;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-16-pe.png
        title: 'Save changes to the dashboard.'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-17-pe.png
        title: 'Now, in the "Office sensors list" widget, the telemetry for the Indoor Air Quality Sensor is displayed in a single column.'

time-window-configuration-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-1-pe.png
        title: 'Enter dashboard editing mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-2-pe.png
        title: 'Click the "Edit time window" icon on the toolbar and then click the "gear" icon to open the time window settings;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-3-pe.png
        title: 'A new settings window will open. Start with the "Realtime" tab. Hide interval selection parameter for the "Last" tab;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-4-pe.png
        title: 'On the "Relative" tab, click the "pencil" icon in the interval settings row;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-5-pe.png
        title: 'Uncheck all intervals except for "Current day," "Current week" (Sun-Sat), and "Current week" (Mon-Sun). Set their grouping interval and default grouping interval to 1 hour;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-6-pe.png
        title: 'Also check the "Current month" interval. Set grouping interval and default grouping interval to 2 hour. Click "Apply";'

time-window-configuration-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-7-pe.png
        title: 'Navigate to the "History" tab. Hide the "Last" interval option from users;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-8-pe.png
        title: 'Also, hide the "Range" interval option from users;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-9-pe.png
        title: 'For the "Relative" tab, leave the default settings; Set "Sum" as the aggregation function and ensure users cannot modify this parameter by hiding it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-10-pe.png
        title: 'Configure the grouping interval to "1 hour" and restrict users from changing it. Click "Apply";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-11-pe.png
        title: 'Select "Update" to apply the updated time window settings to the dashboard;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-12-pe.png
        title: 'Save the dashboard to confirm the changes;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/time-window-configuration-13-pe.png
        title: 'As you can see, the "Office sensors list" widget now displays data on the office&#39;s energy and water consumption for the selected time period, which in our case is the current day.'

adding-devices-states-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-devices-states-1-pe.png
        title: 'Enter dashboard editing mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-devices-states-2-pe.png
        title: 'Click on the "Manage dashboard states" menu option, then click the "plus" icon to add new dashboard state;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-devices-states-3-pe.png
        title: 'Name it "Indoor Air Quality Sensor", and enter state ID - <b>air_sensor</b>. Click "Add".'

adding-devices-states-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-devices-states-4-pe.png
        title: 'Similarly, add "Energy Meter" with the <b>energy_sensor</b> state Id and "Water Flow Meter" state with the <b>water_sensor</b> state Id.'

action-go-to-device-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-1-pe.png
        title: 'Go to the “office” state and enter the editing mode of the "Office sensors list" widget;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-2-pe.png
        title: 'Scroll to the "Actions" menu section and click the "Add action" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-3-pe.png
        title: 'The "Actions" window will open. Click the "plus" icon in the top-right corner of the screen to open a new "Add action" window;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-4-pe.png
        title: 'In the "Add action" dialog, select "On row click" action source, and enter action name. Then, choose the "Custom action" action type. After choosing an action type, the "Custom action function" section appears. Paste the function by copying it from the documentation. Afterwards, click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-5-pe.png
        title: 'In the "Actions" window, you can review the configured action, including its source, icon, and type Click "Save";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-6-pe.png
        title: 'Click "Apply" to save the widget settings;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-7-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper-right corner of the dashboard page.'

action-go-to-device-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-8-pe.png
        title: 'Click on the row of any device to transition to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-9-pe.png
        title: 'You will transition to the state of the selected device.'

customize-office-plan-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-1-pe.png
        title: 'While in the "office" state, enter the dashboard edit mode, and click the "pencil" icon of the "Office sensors list" widget to modify its settings.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-2-pe.png
        title: 'Add the following data keys to the existing ones: "temperature", "humidity", "co2", "powerConsumption", "waterConsumption," and "batteryLevel". Afterwards, navigate to the "Appearance" tab;'

customize-office-plan-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-3-pe.png
        title: 'Scroll down to the "Tooltip" section, and enable "Use tooltip function" option. Then, copy the tooltip function from the documentation and paste it into the "Tooltip function" field of the widget. Then, set the tooltip Y offset relative to the marker to -0.77;'

customize-office-plan-widget-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-4-pe.png
        title: 'Go to the "Widget card" tab. Access "Advanced widget style" and paste the provided CSS into the "Widget CSS" field;'

customize-office-plan-widget-4:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-5-pe.png
        title: 'Navigate to the "Actions" tab and click "plus" to add new action;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-6-pe.png
        title: 'In the "Add action" dialog, select "Tooltip tag action" as the action source. Enter "sensor_details" as action name. Choose "Custom action" for the action type and paste the specified function in the "Custom action function" section. Then, click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-7-pe.png
        title: 'Click "Apply" to save the modifications;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-8-pe.png
        title: 'Save your dashboard configuration by selecting "Save" in the upper-right corner of the dashboard.'

customize-office-plan-widget-5:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-9-pe.png
        title: 'Click any marker on the "Office plan" widget to open a tooltip. Each device&#39;s tooltip includes a line button to access the details of the selected device. Click on this line.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-10-pe.png
        title: 'You will transition to the state of the selected device.'

indoor-air-quality-sensor-card-widgets-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-indoor-ai-quality-state-1-pe.png
        title: 'Click on the "Indoor Air Quality Sensor" device row in the "Office sensors list" widget to transition to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-temperature-card-widgets-1-pe.png
        title: 'Enter dashboard editing mode and click either the "+ Add widget" button at the top or the large "Add new widget" icon in the center of the screen;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-temperature-card-widgets-2-pe.png
        title: 'Find the "Indoor Environment" widgets bundle and click on it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-temperature-card-widgets-3-pe.png
        title: 'Choose the "Indoor temperature card" widget;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-temperature-card-widgets-4-pe.png
        title: 'Specify "Selected entity" alias as the data source. The "temperature" key, from which the temperature value will be "extracted", has already been added;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-temperature-card-widgets-5-pe.png
        title: 'Scroll down to the "Icon" section. Customize icon color change based on temperature value using predefined ranges. This helps to estimate the temperature value faster. Set the value ranges and their corresponding colors. Then, click "Apply";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-temperature-card-widgets-6-pe.png
        title: 'Set the value ranges and their corresponding colors for the "Value" section. Apply changes;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-temperature-card-widgets-7-pe.png
        title: 'Clear the "Card border radius" value, and click "Add";'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-temperature-card-widgets-8-pe.png
        title: 'We&#39;ve added a widget that displays the current temperature. Adjust the widget size to your liking.'

indoor-air-quality-sensor-card-widgets-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-humidity-card-widgets-1-pe.png
        title: 'Click the "Add widget" button at the top of the screen;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-humidity-card-widgets-2-pe.png
        title: 'Navigate to the "Indoor Environment" widgets bundle and select the "Indoor humidity card" widget;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-humidity-card-widgets-3-pe.png
        title: 'Specify "Selected entity" alias as the data source. The "humidity" key, from which the humidity value will be "extracted", has already been added;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-humidity-card-widgets-4-pe.png
        title: 'Scroll down to the "Icon" section. Set the value ranges and their corresponding colors. Then, click "Apply";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-humidity-card-widgets-5-pe.png
        title: 'Set the value ranges and their corresponding colors for the "Value" section. Apply changes;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-humidity-card-widgets-6-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-humidity-card-widgets-7-pe.png
        title: 'The widget displaying the current humidity has been added. Place it to the right of the "Temperature" card widget and adjust its size.'

indoor-air-quality-sensor-card-widgets-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-co2-card-widgets-1-pe.png
        title: 'Click the "+ Add widget" button at the top of the screen;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-co2-card-widgets-2-pe.png
        title: 'Select the "Indoor CO2 card" widget. This widget is located in the "Indoor Environment" widgets bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-co2-card-widgets-3-pe.png
        title: 'Specify "Selected entity" alias as the data source. The "CO2" key has already been added, from which the CO2 value in the air will be "extracted";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-co2-card-widgets-4-pe.png
        title: 'Scroll down to the "Icon" section. Set the value ranges and their corresponding colors. Then, click "Apply";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-co2-card-widgets-5-pe.png
        title: 'Set the value ranges and their corresponding colors for the "Value" section. Apply changes;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-co2-card-widgets-6-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-co2-card-widgets-7-pe.png
        title: 'The widget displaying the current CO2 level has been added. Place it to the right of the "Humidity" widget. Adjust the widget size to match the dashboard aesthetics, and save the dashboard.'

indoor-air-quality-sensor-card-widgets-4:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-three-widgets-1-pe.png
        title: 'Now you can see the current temperature, humidity, and CO2 values.'

temperature-and-humidity-history-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-1-pe.png
        title: 'Enter the edit mode of your dashboard and click the "+ Add widget" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-2-pe.png
        title: 'Find the "Charts" widgets bundle and click on it;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-3-pe.png
        title: 'Choose the "Line chart" widget;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-4-pe.png
        title: 'Use the widget&#39;s time window and make some changes to its settings. Select "Relative" and set "Current day" as the time interval. Leave the aggregation function as "Average" and set the grouping interval to 1 hour. Then, click "Update;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-5-pe.png
        title: 'Specify "Selected entity" alias as the data source. Add data keys "temperature" and "humidity" and specify their labels and units. Then, click the "gear" icon for "temperature" key to open its configuration window;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-6-pe.png
        title: 'Turn on "Show points" and "Point label" options. Click "Save". Repeat this for the "humidity" data key;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-7-pe.png
        title: 'By default, the chart includes a single scale on the Y-axis. Label it "Temperature" and set the units to °C. Add another scale for "Humidity", place it on the right, and set the units to %. Now, apply the "axis1" scale to the "humidity" key;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-8-pe.png
        title: 'Change the chart title to "Temperature and Humidity history";'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-9-pe.png
        title: 'Set the "Bottom" legend position and uncheck "Average" of the "Show values" section;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-10-pe.png
        title: 'Clear the "Card border radius" value to streamline the widget&#39;s appearance. Click "Add";'
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-11-pe.png
        title: 'Move the widget to the top-right corner of your dashboard and adjust its size;'
    11:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-12-pe.png
        title: 'The "Temperature and Humidity history" widget has been added. Save your dashboard to implement the changes.'

air-quality-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-1-pe.png
        title: 'Enter the dashboard editing mode, and click the "+ Add widget" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-2-pe.png
        title: 'Select the "Line chart" widget of the "Charts" widgets bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-3-pe.png
        title: 'Use the widget&#39;s time window. In the time window settings, select "Relative" and set "Current day" as the time interval. Leave the aggregation function as "Average" and set the grouping interval to 1 hour. Then, click "Update;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-4-pe.png
        title: 'Now, specify "Selected entity" alias as the datasource. Add "co2" as the data key, and set its label and units. Then, click the "gear" icon to configure the "co2" data key settings;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-5-pe.png
        title: 'Turn on the "Smooth line" option to make the chart line appear smoother. Click "Save";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-6-pe.png
        title: 'Enter a name for the Y-axis, such as "CO2 level", and specify "ppm" as the units;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-7-pe.png
        title: 'Change the chart title to "Air Quality";'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-8-pe.png
        title: 'Set the "Bottom" legend position. Check "Min", "Max" and "Average" options in the "Show values" section to display these statistics on the chart;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-9-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-10-pe.png
        title: 'Place this widget below the "Temperature and Humidity history" widget in the right-bottom corner of the dashboard and adjust its size. Save the dashboard to apply the changes.'

air-sensor-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/smart-sensor-state-1-pe.png
        title: 'Monitor the current air quality status and analyze its changes over time in a separate dashboard state.'

power-consumption-card-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-energy-meter-state-1-pe.png
        title: 'Click the "Energy Meter" device row in the "Office sensors list" widget to navigate to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-1-pe.png
        title: 'Enter dashboard editing mode, and click the "+ Add widget" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-2-pe.png
        title: 'In the widget library, locate and click on the "Industrial widgets" bundle;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-3-pe.png
        title: 'Select the "Power consumption card" widget;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-4-pe.png
        title: 'Specify the "Selected entity" alias as the datasource. The "powerConsumption" key is already specified as the data key. Open the "powerConsumption" data key configuration by clicking the "pencil" icon;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-5-pe.png
        title: 'Select the "Sum" as the aggregation function to sum all data point values within the selected time period. Click "Save";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-6-pe.png
        title: 'Use the dashboard time window;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-7-pe.png
        title: 'Change the widget label to "Power consumption". Open the icon color settings;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-8-pe.png
        title: 'Set the value ranges and their corresponding colors as shown in the screenshot. Then, click "Apply";'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-9-pe.png
        title: 'Open the font settings;'
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-10-pe.png
        title: 'Set the font size to 35 pixels, and click "Apply";'
    11:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-11-pe.png
        title: 'Open the value color settings;'
    12:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-12-pe.png
        title: 'Set the value ranges and their corresponding colors as shown in the screenshot. Then, click "Apply";'
    13:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-13-pe.png
        title: 'Clear the "Card border radius" value, and click "Add";'
    14:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-14-pe.png
        title: 'The widget has been added to display the total power consumption for the time period specified in the dashboard&#39;s time window. Adjust widget size to your preference. Then, save the dashboard to apply the changes.'

power-consumption-range-chart-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-1-pe.png
        title: 'Enter dashboard editing mode, and click the "+ Add widget" button at the top of the screen;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-2-pe.png
        title: 'Select the "Range chart" widget of the "Charts" widgets bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-3-pe.png
        title: 'Use the dashboard time window. Specify "Selected entity" alias as the datasource, and the "powerConsumption" key as the data key. Change the chart title to "Power consumption history";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-4-pe.png
        title: 'Change the units to kW. Then, open the range colors settings;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-5-pe.png
        title: 'The line color on the chart is colored according to the range in which the value falls. This will help you to quickly orient yourself with the data by visually highlighting changes in color according to variations in values. Set the value ranges and their corresponding colors. Click "Apply";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-6-pe.png
        title: 'Go to the "Range thresholds settings", and turn off the "Label" option;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-7-pe.png
        title: 'Open the "Line color" settings, and set the opacity to 40%. Apply changes;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-8-pe.png
        title: 'Expand the Y-axis settings. Enter the "Power consumption" as the axis label, and turn off the "Show split lines" option;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-9-pe.png
        title: 'Uncheck the "Data export" box in the "Show card buttons" section, and remove the value for the "Card border radius". Click "Add" to complete adding the range chart widget;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-10-pe.png
        title: 'The "Power consumption history" widget has been added. Place it to the right of the "Power consumption" widget and resize it to your liking. Save the dashboard to apply the changes.'

energy-meter-state-final:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/energy-meter-state-final-1-pe.png
        title: 'Now you can monitor the total energy consumption for the current day and track historical data on hourly energy consumption.'

water-consumption-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-water-flow-meter-state-1-pe.png
        title: 'Click on the "Water Flow Meter" device in the "Office sensors list" to go to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-1-pe.png
        title: 'Enter the dashboard editing mode, and click the "+ Add widget" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-2-pe.png
        title: 'Navigate to the "Industrial widgets" bundle and select any widget, for example "Flow rate card";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-3-pe.png
        title: 'Specify "Selected entity" alias as the data source. Add the "waterConsumption" key as data key, and click "pencil" icon to open its data key configuration;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-4-pe.png
        title: 'Select the "Sum" as the aggregation function. Click "Save";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-5-pe.png
        title: 'Use the dashboard time window. Change the widget label to "Water consumption". Let&#39;s change the widget icon to better correspond to the type of data displayed. Open the "Icons" window;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-6-pe.png
        title: 'Choose a new icon;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-7-pe.png
        title: 'Open the color settings of the icon. Set the value ranges and their corresponding colors. Then, click "Apply";'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-8-pe.png
        title: 'Set gallon as the units. Open the color settings of the "Value" option;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-9-pe.png
        title: 'Set the value ranges and their corresponding colors as shown in the screenshot. Then, click "Apply";'
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-10-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    11:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-11-pe.png
        title: 'The widget has been added to display the total water consumption for the time period specified in the dashboard&#39;s time window. Resize widget to your liking, and save the dashboard.'

water-consumption-range-chart-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-1-pe.png
        title: 'Go to the "Energy Meter" state, and enter the dashboard editing mode. Right-click on the "Power consumption history" widget and select "Copy" from the dropdown menu that appears;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-2-pe.png
        title: 'Navigate to the "Water Flow Meter" state. Right-click on the dashboard and select "Paste" to insert the copied widget on the dashboard;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-3-pe.png
        title: 'Place this widget to the right of the "Water consumption" widget, and resize it. Now, enter the "Power consumption history" widget settings by clicking the "pencil" icon;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-4-pe.png
        title: 'Leave the "Selected entity" alias as the datasource. Replace the data key "powerConsumption" with "waterConsumption". Change the title to "Water consumption history";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-5-pe.png
        title: 'Change units to gal (gallon). Turn off the "Fill area" option. Now, go to the range colors settings;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-6-pe.png
        title: 'Set the value ranges and their corresponding colors as shown in the screenshot. Then, click "Apply";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-7-pe.png
        title: 'Expand the Y-axis settings. Change axis label to "Water consumption". Click "Apply" to save changes;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-8-pe.png
        title: 'The "Water consumption history" widget has been added. Save the dashboard.'
      
battery-charge-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-1-pe.png
        title: 'While in dashboard editing mode click the "+ Add widget" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-2-pe.png
        title: 'Select the "Battery level" widget of the "Status indicators" widgets bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-3-pe.png
        title: 'Specify the "Selected entity" alias as the datasource. The "batteryLevel" key is already specified as the data key;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-4-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-5-pe.png
        title: 'Place this widget to the right of the "Water consumption history" widget, and resize it. Finally, save the dashboard.'

water-flow-meter-final:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-flow-meter-state-final-1-pe.png
        title: 'The state for the "Water Flow Meter" device has been configured. Monitor water consumption for the current day, track historical data on hourly water consumption, and control the battery charge level of the "Water Flow Meter" device.'

dashboard-final-lesson-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-1-pe.png
        title: 'Default state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-2-pe.png
        title: 'Building&#39;s state'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-3-pe.png
        title: 'Office&#39;s state'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-4-pe.png
        title: 'Indoor Air Quality Sensor state;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-5-pe.png
        title: 'Energy Meter state'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-6-pe.png
        title: 'Water Flow Meter state'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3.md %}