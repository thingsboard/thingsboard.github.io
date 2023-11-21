---
layout: docwithnav-pe
assignees:
- ashvayka
title: Getting Started with ThingsBoard Professional Edition
description: Getting started with ThingsBoard open-source IoT platform and simulated IoT devices
redirect_from: "/docs/pe/getting-started-guides/helloworld/"

step1:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-1-pe.png
        title: 'Login to your ThingsBoard instance and navigate to the "Entities" section. Then go to the "Devices" page;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-2-pe.png
        title: 'By default, you navigate to the device group “All”. Click on the "+" icon in the top right corner of the table and then select "Add new device";'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-3-pe.png
        title: 'Enter the device name. For example, "My New Device". No other changes are required at this time. Click "Add" to add the device;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-connectivity-1-pe.png
        title: 'The window to check the device&#39;s connection to ThingsBoard will open. The following step is optional. Select the messaging protocol and your operating system. Then, install the necessary client tools and copy the command;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-connectivity-3-pe.png
        title: 'Execute previously copied command. The device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings. Then, close the connectivity window;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-4-pe.png
        title: 'Your first device has been added. As new devices are added, they will be added to the top of the table, since the table sorts devices using the time of the creation by default;'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-5-pe.png
        title: 'When adding a new device, you will receive a notification. You can view it by clicking on the "bell" icon in the top right corner.'

step2:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-1-pe.png
        title: 'Click on the device row in the table to open device details. Note that the device state is "Inactive";'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-2-pe.png
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

step21:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-3-pe.png
        title: 'Navigate to the "Latest telemetry" tab. You should see the previously published "temperature" readings;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-4-pe.png
        title: 'Close the device details tab and refresh the "Devices" table. The device state should be changed from "Inactive" to "Active".'
        
step31:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-1-pe.png
        title: 'Login to your ThingsBoard instance and navigate to the "Dashboards" page through the main menu on the left of the screen. By default, you navigate to the dashboard group "All";'
    1:
        image: /images/user-guide/dashboards/overview/create-dashboard-2-pe.png
        title: 'Click the "+" sign in the upper right corner of the screen, and select "Create new dashboard" from the drop-down menu;'
    2:
        image: /images/helloworld/getting-started-pe/create-dashboard-3-pe.png
        title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "Add";'
    3:
        image: /images/user-guide/dashboards/overview/create-dashboard-4-pe.png
        title: 'After creating the dashboard, it will open automatically, and you can immediately start adding widgets to it. To save the dashboard, click "Save" button in the upper right corner;'
    4:
        image: /images/helloworld/getting-started-pe/create-dashboard-5-pe.png
        title: 'Your first dashboard has been successfully created. As you continue to add new dashboards, they will appear at the top of the list. This default sorting is based on the creation timestamp.'

step32:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-0-pe.png
        title: 'Enter dashboard edit mode. Simply open the dashboard and click the "Edit mode" button found in the upper right corner of the screen;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-1-pe.png
        title: 'Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-2-pe.png
        title: 'Select the "Tables" widget bundle;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-3-pe.png
        title: 'Select the "Entities table" widget;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-4-pe.png
        title: 'The "Add Widget" window will appear. Specify the previously created device "My New Device" in the "Device" field. The “name” key has already been added to the “Columns” section, which is responsible for the column with the device name. You need to add another column that will display the value of the "temperature" key. To do this, click "Add column" to add a new field to enter the data key;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-5-pe.png
        title: 'Click on the newly appeared data key input field. A list of available data keys will open. Select "temperature" data key;'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-6-pe.png
        title: 'Click the "Add" button in the bottom right corner of the widget to complete adding the widget.'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-7-pe.png
        title: 'Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. Click "Save" to apply changes.'

step33:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-1-pe.png
        title: 'Enter edit mode and click the "Add new widget" button at the top of the screen;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-2-pe.png
        title: 'Select the "Charts" widget bundle;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-3-pe.png
        title: 'Select the "Timeseries Line Chart" widget;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-4-pe.png
        title: 'Specify the previously created device "My New Device" in the "Device" field and specify the "temperature" data key in the "Series" section. Click "Add";'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-5-pe.png
        title: 'Resize the widget and apply changes. Publish different telemetry values multiple times, as in Step 2. Note that the widget displays only one minute of data by default. Click "Save" to apply changes;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-6-pe.png
        title: 'Now open the time selection window. Change the interval and aggregation function. Update the time window setting by clicking the "Update" button.'

step34:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-1-pe.png
        title: 'Enter edit mode and click the "Add new widget" button at the top of the screen;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-2-pe.png
        title: 'Select "Alarm widgets" bundle;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-3-pe.png
        title: 'Select "Alarms table" widget;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-4-pe.png
        title: 'Specify the previously created device "My New Device" in the "Device" field and select the statuses and severities of alarms you want to display in the alarm widget;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-5-pe.png
        title: 'Drag and Drop the "Timeseries Line Chart" widget to the top right corner of the dashboard to make room for the "Alarms" widget;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-6-pe.png
        title: 'Scroll down and locate the new "Alarms" widget. Drag and Drop Alarm widget to the free space and resize it. Click "Save" to apply changes.'

step4:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-2-pe.png
        title: 'Go to the "Profiles" section, and click on the "Device profiles" page. Then click on the default device profile row to open its details;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-3-pe.png
        title: 'Navigate to the "Alarm rules" tab and click "pencil" button to enter edit mode;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-4-pe.png
        title: 'Click "Add alarm rule" button;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-5-pe.png
        title: 'Specify alarm type and click the "+" icon to add alarm rule condition;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-6-pe.png
        title: 'Click the "Add key filter" button to specify a condition;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-7-pe.png
        title: 'Select a key type, enter a key name, and select a value type. Then, click "Add" button in the "Filters" section;'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-8-pe.png
        title: 'Select an operation and enter a threshold value. Click "Add" button in the lower right corner;'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-9-pe.png
        title: 'Click "Save";'
    8:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-10-pe.png
        title: 'Finally, click "Apply changes".'        

step5:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-5-create-alarm-1-pe.png
        title: 'Notice that the new temperature telemetry causes a new active alarm;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-5-create-alarm-2-pe.png
        title: 'You may acknowledge and clear the alarms;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-5-create-alarm-3-pe.png
        title: 'When you receive a new alarm, you will receive a message in the notification center. You can view the message by clicking on the bell icon in the upper right corner.'
        
step71:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-2-pe.png
        title: 'Navigate to the "Customers" page. By default, you navigate to the customer group "All". Click the "+" sign to add a new customer;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-3-pe.png
        title: 'Input the customer title. Additionally, you can input personal details for the customer and assign a home dashboard. To finalize the customer creation, you can click the "Add" button. In this case, the new customer will be created and located in the "All" customers folder. Let`s create a separate group for our customer. To do this, click on "Next: Owner and groups" button;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-4-pe.png
        title: 'If desired, you can assign a different owner for this customer. We will leave this option unchanged. Enter a name for the new group and click "Create a new one!";'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-5-pe.png
        title: 'Click "Add" to create a new customers group;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-6-pe.png
        title: 'Now, click "Add" to create a new customer;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-7-pe.png
        title: 'The customer has been created and is located in the "My Customers" group. You can navigate to this group by clicking on its name.'

step72:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-1-pe.png
        title: 'Open "Devices" page. Select your device to open its details;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-2-pe.png
        title: 'Click "Manage owner and groups" button;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-3-pe.png
        title: 'In the "Owner" line, start typing the customer name and then select the customer;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-4-pe.png
        title: 'Now, create a device group. In the "Groups" line, input the desired device group name. Then, click "Create a new one";'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-5-pe.png
        title: 'In the next window, click "Add" button to create a device group;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-6-pe.png
        title: 'Click "Update" to change the owner of your device. You can always change the owner back to the tenant;'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-7-pe.png
        title: 'By default, the general device list displays both tenant devices and devices of your customers. Disable "Include customer entities" to only see tenant devices in the device list;'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-8-pe.png
        title: 'Your device list should be empty now.'

step72_1:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-9-pe.png
        title: 'Navigate to "Customers" page. Find your customer in the list of customers and then click on the "Manage customer devices" icon;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-10-pe.png
        title: 'Your device is owned by the customer and is located in the customer&#39;s device group "My Devices".'

step72_2:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-11-pe.png
        title: 'Click on the "+" icon in the top right corner of the table. Input device name (for example, "Thermostat") and navigate to the "Owner and groups" tab;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-12-pe.png
        title: 'Select new owner and click "Add";'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-13-pe.png
        title: 'The device has been created, and it immediately belongs to your customer.'

step73:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-3-pe.png
        title: 'Open "Dashboard" page, go to the "Groups" tab and click the "Share" icon for the "All" dashboard group;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-4-pe.png
        title: 'Select the customer and specify permission - "Read". Click "Share".'

step73_1:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-5-pe.png
        title: 'Click on the "+" icon in the top right corner of the table. Input dashboard name (for example, "Thermostats") and navigate to the "Owner and groups" tab;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-6-pe.png
        title: 'Let`s create a separate group for them. Input a name (for example, "Thermostats group") for the new group and click "Create a new one!";'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-7-pe.png
        title: 'Click "Next: Share entity group" button;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-8-pe.png
        title: 'Tick "Share entity group" checkbox, then select the customer with whom you want to share the dashboard and specify permission. Click "Add";'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-9-pe.png
        title: 'Click "Add" dashboard;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-10-pe.png
        title: 'The dashboard has been created and is located in the "Thermostats group" group. You can navigate to this group by clicking on its name.'

step74:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-1-pe.png 
        title: 'Navigate to "Customers" page. Find your customer in the list of customers and then click on the "Manage customer users" icon;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-2-pe.png
        title: 'Navigate to the "Groups" tab and select "Customer Users" group;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-3-pe.png
        title: 'Click "plus" icon in the top right corner to add a new user;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-4-pe.png
        title: 'Specify email, first and last name. Click "Add";'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-5-pe.png
        title: 'Copy the activation link and save it to a safe place. Then click "OK";'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-6-pe.png
        title: 'Click on the created user to open details. Click "pencil" icon to enter edit mode;'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-7-pe.png
        title: 'Select the default dashboard and enable "Always fullscreen" mode. Apply changes.'

step75:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-5-activate-customer-user-1-pe.png
        title: 'Paste the previously copied link into a new browser tab and press Enter. Come up with and enter a password twice, then press "Create Password". You will automatically log in as a customer user;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-7-5-activate-customer-user-2-pe.png
        title: 'You have logged in as a Customer User. You may browse the data and acknowledge/clear alarms.'

        
mqttWindows:
    0:
        image: /images/helloworld/hello-world-pe-step-3-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below;'
    1:
        image: /images/helloworld/hello-world-pe-step-3-item-2.png
        title: 'Populate the topic name and payload. Make sure the payload is a valid JSON document. Click "Publish" button.'

mosquitto-windows:
    0:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-1.png
        title: 'Press the Win + X, then select "System". Then click on the "System" page;'
    1:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-2.png
        title: 'Navigate to the "About" section, then click "Advanced system settings";'
    2:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-3.png
        title: 'In the "System Properties" pop-up window, click "Environment Variables" button on the "Advanced" tab;'
    3:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-4.png
        title: 'In the "Environment Variables" pop-up window, select the "Path", then click on the "Edit" button;'
    4:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-5.png
        title: 'In the "Edit environment variable" pop-up window click on the "New" button and add the path to the directory containing &#39;mosquitto_pub.exe&#39; and &#39;mosquitto_sub.exe&#39; (&#39;C:\Program Files\mosquitto&#39; by default). Click "OK";'
    5:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-6.png
        title: 'Click "OK" button to save changes in the environment variables;'
    6:
        image: /images/helloworld/getting-started-pe/mosquitto-windows-7.png
        title: 'Finally, click "OK" button to apply all changes in the system properties.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/getting-started-guides/helloworld-pe.md %}
