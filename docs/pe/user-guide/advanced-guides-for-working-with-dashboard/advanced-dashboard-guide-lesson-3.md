---
layout: docwithnav-pe
assignees:
- stitenko
title: Lesson 3. Charts and card widgets

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
        title: 'Go to the "Rule chains" page and click "plus" icon, then "Create new rule chain";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-2-pe.png
        title: 'Name it "Device Telemetry Emulators", and click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-3-pe.png
        title: 'Open created rule chain by clicking on it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-4-pe.png
        title: 'Find the "generator" node and drag it to the rules chain. With its help, we will generate telemetry values for further visualization on the dashboard;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-5-pe.png
        title: 'Name it "Indoor air quality data emulator". Set the number of messages to send to 100 and the sending period to 600. Specify the device "SD-001" (Indoor Air Quality Sensor) as originator. Copy the script from the documentation and paste it into the generation function section to simulate telemetry data for temperature, humidity, and CO2. Click "Add".'

adding-new-rule-chain-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-6-pe.png
        title: 'Name it "Power consumption data emulator" Set the number of messages to send to 100 and the sending period to 600. Specify the device "EM-002" (Energy Meter) as originator. Copy the script from the documentation and paste it into the generation function section to simulate power consumption telemetry data. Click "Add."'

adding-new-rule-chain-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-7-pe.png
        title: 'Name it "Water consumption data emulator". Set the number of messages to send to 100 and the sending period to 600. Specify the device "WM-003" (Water Flow Meter) as originator. Copy the script from the documentation and paste it into the generation function section to simulate water consumption, and battery voltage telemetry data. Click "Add."'

adding-new-rule-chain-4:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-8-pe.png
        title: 'Name it "IAQ data emulator". Set the number of messages to send to 100 and the sending period to 600. Specify the device "AM-307" (IAQ Sensor) as originator. Copy the script from the documentation and paste it into the generation function section to simulate water consumption, and battery voltage telemetry data. Click "Add."'

adding-new-rule-chain-5:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-9-pe.png
        title: 'Find the "rule chain" node and drag it to the rules chain. This node forwards all messages to the Root Rule Chain;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-10-pe.png
        title: 'Name it "to Root Rule Chain", specify "Root Rule Chain" and click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-11-pe.png
        title: 'We have added all the necessary nodes. Now, we need to connect the generator nodes to the "rule chain" node for routing messages;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-12-pe.png
        title: 'Tap on the right grey circle of "generator" node and drag this circle to the left side of "rule chain" node. Select the "Success" link and click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-new-rule-chain-13-pe.png
        title: 'Repeat this for each  generator node. After, save rule chain.'

incoming-telemetry-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/incoming-telemetry-1-pe.png
        title: 'After waiting for the period specified in the generator node, you can see the telemetry on your device&#39;s "Latest telemetry" tab.'

customize-office-sensors-list-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-1-pe.png
        title: 'Go to the dashboard and enter edit mode by clicking the "Edit mode" button on the toolbar;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-2-pe.png
        title: 'Click on the "pencil" icon of the Office sensors list widget to enter its editing mode;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-3-pe.png
        title: 'Add the columns for the following data keys: "temperature", "humidity", "co2", "powerConsumption", and "waterConsumption";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-4-pe.png
        title: 'Add another column: name it "Telemetry value". Click the "Time series" icon to add a new key;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-5-pe.png
        title: 'Rename the labels for the keys "label" and "telemetryValue" to "Device name" and "Telemetry value," respectively. Next, click the "gear" icon next to the "telemetryValue" row to open its settings;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-6-pe.png
        title: 'Scroll to the "Use cell content function" option and enable it. Paste the function from the documentation into the appropriate field, and click "Save";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-7-pe.png
        title: 'Now we need to hide the unnecessary columns like temperature, humidity, co2, powerConsumption, and waterConsumption. Click the "gear icon next to the "temperature" to open its settings;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-8-pe.png
        title: 'Select "Hidden" in the "Default Column Visibility" menu. Click "Save";'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-9-pe.png
        title: 'Similarly, hide all other columns. Keep only the "telemetryValue" column visible. Save changes;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-10-pe.png
        title: 'Apply all changes by clicking the "Save" button in the upper right corner of the dashboard.'

customize-office-sensors-list-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-11-pe.png
        title: 'For Office A, the widget displays a list of devices with their respective telemetry values;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-sensors-list-widget-12-pe.png
        title: 'For Office B, the widget similarly shows a list of devices along with their telemetry values.'

adding-devices-states-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-devices-states-1-pe.png
        title: 'Open dashboard and enter editing mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-devices-states-2-pe.png
        title: 'Click on the "Manage dashboard states" menu option, then click the "plus" icon;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-devices-states-3-pe.png
        title: 'Enter "<b>Indoor Air Quality Sensor</b>" as the name of the state, and enter state ID - "<b>smart_sensor</b>". Click "Add".'

adding-devices-states-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/adding-devices-states-4-pe.png
        title: 'Similarly, add "<b>Energy Meter</b>" with the "<b>energy_sensor</b>" state Id and "<b>Water Flow Meter</b>" state with the "<b>water_sensor</b>" state Id.'

action-go-to-device-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-1-pe.png
        title: 'Go to the “office” state and enter the editing mode of the "Office sensors list" widget;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-2-pe.png
        title: 'Scroll to the "Actions" menu section and click the "Add action" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-3-pe.png
        title: 'The "Actions" window will open. Click the "plus" icon in the top right corner of the screen to open a new "Add action" window;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-4-pe.png
        title: 'In the "Add action" dialog, select "On row click" action source, and enter action name. Then, choose the "Custom action" action type. After choosing an action type, the "Custom action function" section appears. Paste the function by copying it from the documentation. After, click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-5-pe.png
        title: 'Now in the "Actions" window, you can see the configured action, so you can double-check the action source, icon, and action type. Click "Save";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-6-pe.png
        title: 'Click "Apply" to save the widget settings;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-7-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper right corner of the dashboard page.'

action-go-to-device-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-8-pe.png
        title: 'Click on the row of any device to transition to its state.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-device-state-9-pe.png
        title: ''

customize-office-plan-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-1-pe.png
        title: 'While in the "office" state, enter the dashboard edit mode, and click the "pencil" icon of the "Office sensors list" widget to modify its settings.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-2-pe.png
        title: 'Add the following data keys to the existing ones: "temperature", "humidity", "co2", "powerConsumption", "waterConsumption," and "batteryLevel". After, navigate to the "Appearance" tab;'

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
        title: 'In the "Add action" dialog, select "On row click" as the action source. Choose "Custom action" for the action type and paste the specified function in the "Custom action function" section. After, click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-7-pe.png
        title: 'Click "Apply" to save the modifications;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-8-pe.png
        title: 'Save your dashboard configuration by selecting "Save" in the upper-right corner of the dashboard.'

customize-office-plan-widget-5:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-9-pe.png
        title: 'Click any marker on the "Office plan" widget to open a tooltip. In each device&#39;s tooltip, there is a line to access the details of the selected device. Click on this line.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/customize-office-plan-widget-10-pe.png
        title: ''

indoor-air-quality-sensor-card-widgets-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-indoor-ai-quality-state-1-pe.png
        title: 'Click on the "Indoor Air Quality Sensor" device row in the "Office sensors list" widget to transition to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-1-pe.png
        title: 'Enter dashboard editing mode and click either the "+ Add widget" button at the top or the large "Add new widget" icon in the center of the screen;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-2-pe.png
        title: 'Find the "Indoor Environment" widgets bundle and click on it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-3-pe.png
        title: 'Choose the "Indoor temperature card" widget;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-4-pe.png
        title: 'Specify "SD-001" (Indoor Air Quality Sensor) as the data source. The "temperature" key, from which the temperature value will be "extracted", has already been added;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-5-pe.png
        title: 'Clear the "Card border radius" value, and click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-6-pe.png
        title: 'We&#39;ve added a widget that displays the current temperature. Adjust the widget size to your liking.'

indoor-air-quality-sensor-card-widgets-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-7-pe.png
        title: 'Click the "Add widget" button at the top of the screen;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-8-pe.png
        title: 'Navigate to the "Indoor Environment" widgets bundle and select the "Indoor humidity card" widget;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-9-pe.png
        title: 'Specify "SD-001" (Indoor Air Quality Sensor) as the data source. The "humidity" key, from which the humidity value will be "extracted", has already been added;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-10-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-11-pe.png
        title: 'The widget displaying the current humidity has been added. Place it to the right of the "Temperature" card widget and adjust its size.'

indoor-air-quality-sensor-card-widgets-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-12-pe.png
        title: 'Click the "+ Add widget" button at the top of the screen;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-13-pe.png
        title: 'Select the "Indoor CO2 card" widget. This widget is located in the "Indoor Environment" widgets bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-14-pe.png
        title: 'Specify "SD-001" (Indoor Air Quality Sensor) as the data source with "CO2" as the data key;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-15-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-16-pe.png
        title: 'The widget displaying the current CO2 level has been added. Place it to the right of the "Humidity" widget. Adjust the widget size to match the dashboard aesthetics.'

indoor-air-quality-sensor-card-widgets-4:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/indoor-air-quality-sensor-card-widgets-17-pe.png
        title: 'Now on our dashboard, you can see the current values of temperature, humidity, and CO2 levels.'

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
        title: 'In this widget, we&#39;ll use the dashboard&#39;s timewindow. Specify "SD-001" (Indoor Air Quality Sensor) device as the data source, and add data keys "temperature" and "humidity". Specify their labels and units. Then, click the "gear" icon for "temperature" key to open its configuration window;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-5-pe.png
        title: 'Enable "Show points" and "Point label" options. Click "Save". Repeat this for the "humidity" data key;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-6-pe.png
        title: 'By default, there is one scale on the Y-axis in the chart. Label it "Temperature" and set units - °C. Add another scale for "Humidity", place it on the right, and set units - %;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-7-pe.png
        title: 'Change the chart title to "Temperature and Humidity history";'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-8-pe.png
        title: 'Uncheck "Average" of the "Show values" section;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-9-pe.png
        title: 'Clear the "Card border radius" value to streamline the widget&#39;s appearance. Click "Add";'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-10-pe.png
        title: 'Move the widget to the top right corner of your dashboard and adjust its size;'
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-11-pe.png
        title: 'The "Temperature and Humidity history" widget has been added. Save your dashboard to implement the changes.'

temperature-and-humidity-history-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-12-pe.png
        title: 'Now you need to change the dashboard&#39;s time interval and aggregation function. To do this, open the dashboard&#39;s time window settings, set it to display data from the last 12 hours, choose "Average" as the aggregation function and set the grouping interval to "1 hour";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/temperature-and-humidity-history-13-pe.png
        title: 'Now you can monitor the average temperature and humidity readings for each hour over the past 12 hours.'

air-quality-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-1-pe.png
        title: 'Enter the edit mode of your dashboard, and click the "+ Add widget" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-2-pe.png
        title: 'Navigate to the "Charts" widgets bundle and select the "Line chart" widget;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-3-pe.png
        title: 'This widget will also use the dashboard&#39;s time window. Specify "SD-001" (Indoor Air Quality Sensor) device as the data source, and add "co2" as the data key. Specify its label and units. Then, click the gear icon to configure the "co2" data key settings;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-4-pe.png
        title: 'Enable the "Smooth line" option to make the chart line appear smoother. Click "Save";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-5-pe.png
        title: 'Enter a name for the Y-axis, such as "CO2 level", and specify the units - ppm (parts per million);'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-6-pe.png
        title: 'Change the chart title to "Air Quality";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-7-pe.png
        title: 'Check "Min", "Max" and "Average" options in the "Show values" section to display these statistics on the chart;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-8-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/air-quality-widget-9-pe.png
        title: 'Place this widget below the "Temperature and Humidity history" widget in the right bottom corner of the dashboard and adjust its size. Save the dashboard to apply the changes.'

smart-sensor-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/smart-sensor-state-1-pe.png
        title: 'The configured "Indoor Air Quality Sensor" state should look like this.'

power-consumption-per-hour-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-energy-meter-state-1-pe.png
        title: 'Click on the "Energy Meter" device to go to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-1-pe.png
        title: 'Enter dashboard editing mode and click the "+ Add widget" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-2-pe.png
        title: 'Find the "Industrial widgets" widgets bundle and click on it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-3-pe.png
        title: 'Select the "Power consumption card" widget;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-4-pe.png
        title: 'Specify "EM-002" (Energy Meter) as the data source, and add "powerConsumption" key as data key. Click "pencil" icon to open data key configuration;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-5-pe.png
        title: 'The "Energy Meter" device sends data every 10 minutes. We need to use data aggregation to calculate the average value among the data points in the selected time interval. In our case, this will be 1 hour, representing hourly electricity usage. Select the "Average" as the aggregation function;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-6-pe.png
        title: 'For this widget, we will use the widget&#39;s time window. Select the "Current hour" option as the time interval. Click "Update". Then, disable the display of the time interval selection on the widget;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-7-pe.png
        title: 'Change the label to "Power consumption per hour", set to display two decimal places, and open the font settings menu;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-8-pe.png
        title: 'Set font size to 35 pixels, and click "Apply";'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-9-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-per-hour-10-pe.png
        title: 'The widget that displays the average power consumption per hour has been added. Resize it to your liking.'

power-consumption-range-chart-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-1-pe.png
        title: 'While in dashboard editing mode click the "+ Add widget" button at the top of the screen;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-2-pe.png
        title: 'Navigate to the "Charts" widgets bundle and select the "Range chart" widget;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-3-pe.png
        title: 'Use the widgets timewindow. For the time interval, select the "12 time interval", and select "None" for the data aggregation function. Click "Update";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-4-pe.png
        title: 'Specify "EM-002" (Energy Meter) device as the data source, and add "powerConsumption" data key. Change the chart title to "Power consumption history";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-5-pe.png
        title: 'Change the units to kWh. Now, proceed to the color range settings;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-6-pe.png
        title: 'The line color on the chart is colored according to the range in which the value falls. This will allow you to quickly orient themselves with the data, seeing visual changes in color according to variations in the metrics. Add five ranges and their corresponding colors: range 1: from 0 to 1, color, for example, yellow; range 2: from 1 to 2, color, for example, orange, and so on. Click "Apply";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-7-pe.png
        title: 'Go to the "Range thresholds settings", proceed to "Line Color", and set the opacity - 40%. Apply changes;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-8-pe.png
        title: 'Uncheck "Fill area" option;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-9-pe.png
        title: 'For the Y-axis, set the scale: minimum value 0, maximum value 5;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-10-pe.png
        title: 'Expand the Y-axis settings. Enter axis label to "Power consumption", and uncheck "Show split lines" option;'
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-11-pe.png
        title: 'Uncheck the "Data export" box in the "Show card buttons" section, and remove the value for the "Card border radius". Click "Add" to complete adding the range chart widget;'
    11:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/power-consumption-range-chart-12-pe.png
        title: 'The "Power consumption history" widget has been added. Place it to the right of the "Power consumption per hour" widget and resize it to your liking. Save the dashboard to apply the changes.'

energy-meter-state-final:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/energy-meter-state-final-1.png
        title: 'Now you can track the average hourly power consumption and historical data on power consumption usage over the last 12 hours.'

water-consumption-per-hour-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/go-to-water-flow-meter-state-1-pe.png
        title: 'Click on the "Water Flow Meter" device to go to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-1-pe.png
        title: 'While in dashboard editing mode click the "+ Add widget" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-2-pe.png
        title: 'Navigate to the "Industrial" widgets bundle and select any widget, for example "Power consumption card";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-3-pe.png
        title: 'Specify "WM-003" (Water Flow Meter) as the data source. Add "waterConsumption" key as data key and click "pencil" icon to open its data key configuration;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-4-pe.png
        title: 'In this widget, we will also use data aggregation to calculate the hourly average of the received data. Select the "Average" as the aggregation function;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-5-pe.png
        title: 'Use the dashboard&#39;s timewindow. Select the "Current hour" option as the time interval. Click "Update". Then, disable the time window display on the widget;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-6-pe.png
        title: 'Change the label to "Water consumption per hour". Now, open the "Icons" window;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-7-pe.png
        title: 'Choose a new icon for the widget that better corresponds to the type of data displayed, specifically water consumption;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-8-pe.png
        title: 'Change units to gal (gallon) and clear the "Card border radius" value. Click "Add";'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-per-hour-9-pe.png
        title: 'The widget that displays the average water consumption per hour has been added. Resize it to your liking.'

water-consumption-range-chart-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-1-pe.png
        title: 'Go to the "Energy Meter" state, enter dashboard editing mode and copy the "Power consumption history" widget;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-2-pe.png
        title: 'Navigate to the "Water Flow Meter" state, and paste copied widget;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-3-pe.png
        title: 'Place this widget to the right of the "Power consumption per hour" widget, resize it, and click the "pencil" icon to enter widget settings;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-4-pe.png
        title: 'Specify "WM-003" (Water Flow Meter) as the data source, and add "waterConsumption" key as data key. Change the title to "Water consumption history";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-5-pe.png
        title: 'Change units to gal (gallon), and proceed to edit the range colors;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-6-pe.png
        title: 'Remove the extra color range and apply the changes;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-7-pe.png
        title: 'For the Y-axis, change the scale: minimum value 0, maximum value 4;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-8-pe.png
        title: 'Expand the Y-axis settings. Change axis label to "Water consumption". Click "Apply" to save changes;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-consumption-range-chart-9-pe.png
        title: 'The "Water consumption history" widget has been added.'
      
battery-charge-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-1-pe.png
        title: 'While in dashboard editing mode click the "+ Add widget" button;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-2-pe.png
        title: 'Navigate to the "Status indicators" widgets bundle and select the "Battery level" widget;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-3-pe.png
        title: 'Specify "WM-003" (Water Flow Meter) as the data source, and add "batteryLevel" key as data key. Change the title to "Battery charge";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-4-pe.png
        title: 'Clear the "Card border radius" value. Click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/battery-charge-5-pe.png
        title: 'Place this widget to the right of the "Water consumption history" widget, resize it. Save the dashboard.'

water-flow-meter-final:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/water-flow-meter-state-final-1-pe.png
        title: 'Now you can track water usage per hour, over the last 12 hours, and the battery charge level in the "Water Flow Meter" device.'

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
        title: 'Water Flow Meter state'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-6-pe.png
        title: 'Energy Meter state'

---

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3.md %}