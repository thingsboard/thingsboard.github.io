---
layout: docwithnav-paas
assignees:
- ashvayka
title: Getting Started with ThingsBoard Cloud
description: Getting started with ThingsBoard open-source IoT platform and simulated IoT devices
step1:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-1-pe.png
        title: 'Login to your ThingsBoard instance and navigate to the "Entities". Then click the "Devices" page;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-2-pe.png
        title: 'By default, you navigate to the device group “All”. Click on the "+" icon in the top right corner of the table and then select "Add new device";'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-3-pe.png
        title: 'Input device name. For example, "My New Device". No other changes are required at this time. Click "Add" to add the device;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-4-pe.png
        title: 'Your first device has been added. As long as you have one device. But as new devices are added, they will be added to the top of the table, since the table sorts devices using the time of the creation by default;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-5-pe.png
        title: 'When adding a new device, you will receive a notification. You can view it by clicking on the "bell" icon in the top right corner.'

step2:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-1-pe.png
        title: 'Click on the device row in the table to open device details;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-2-pe.png
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

step3:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-1-pe.png
        title: 'Click on the device row in the table to open device details;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-4-pe.png
        title: 'Navigate to the telemetry tab.'

step31:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-1-pe.png
        title: 'Open Dashboards page. By default, you navigate to the dashboard group “All”. Click on the "+" icon in the top right corner. Select "Create new dashboard";'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-2-pe.png
        title: 'Input dashboard name. For example, "My New Dashboard". Click "Add" to create the dashboard;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-3-pe.png
        title: 'Your first dashboard has been created. As long as you have one dashboard. But as new dashboards are added, they will be added to the top of the table, since the table sorts dashboards using the time of the creation by default. Click on the row to open the dashboard.'

step32:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-1-pe.png
        title: 'Enter edit mode. Click on the pencil button in the bottom right corner;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-2-pe.png
        title: 'Click the "Entity aliases" icon in the top right part of the screen. You will see an empty list of Entity aliases;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-3-pe.png
        title: 'Click "Add alias" button;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-4-pe.png
        title: 'Input alias name, for example "My Device". Select "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on the needed device;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-5-pe.png
        title: 'Click "Add" and then "Save";'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-6-pe.png
        title: 'Finally, click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.'

step33:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-1-pe.png
        title: 'Enter edit mode. Click on the "Add new widget" button;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-2-pe.png
        title: Select the "Cards" widget bundle;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-3-pe.png
        title: 'Select the "Entities table" widget;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-4-pe.png
        title: 'The "Add Widget" window will appear. Click "Add" to add the data source. A widget may have multiple data sources, but we will use only one in this case;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-5-pe.png
        title: 'Select "My Device" entity alias. Then click on the input field on the right. The auto-complete with available data points will appear. Select "temperature" data point and click "Add";'        
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-6-pe.png
        title: 'Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. You can also play with the advanced settings if you would like to edit the widget. Apply changes.'

step34:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-1-pe.png
        title: 'Enter Edit mode;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-2-pe.png
        title: 'Click "Add new widget" icon in the bottom right corner of the screen;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-3-pe.png
        title: 'Click "Create new widget" icon.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-4-pe.png
        title: 'Select the "Charts" widget bundle;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-5-pe.png
        title: 'Select the "Timeseries Line Chart" widget;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-6-pe.png
        title: 'Click the "Add" datasource button;'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-7-pe.png
        title: 'Select "My Device" alias. Select "temperature" key. Click "Add";'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-8-pe.png
        title: 'Drag and Drop you widget to desired space. Resize the widget. Apply changes;'
    8:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-9-pe.png
        title: 'Publish different telemetry values multiple times, as in Step 2. Note that the widget displays only one minute of data by default;'
    9:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-10-pe.png
        title: 'Now open time selection window. Change the interval and aggregation function. Update the time window and apply changes.'

step35:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-1-pe.png
        title: 'Enter Edit mode;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-2-pe.png
        title: 'Click "Add new widget" icon in the bottom right corner of the screen;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-3-pe.png
        title: 'Click "Create new widget" icon;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-4-pe.png
        title: 'Select "Alarm widgets" bundle;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-5-pe.png
        title: 'Select "Alarms table" widget;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-6-pe.png
        title: 'Select "Entity" alarm source and "My Device" alias. Click "Add";'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-7-pe.png
        title: 'Drag and Drop the "Timeseries Line Chart" widget to the top right corner of the dashboard to make room for the "Alarms" widget;'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-8-pe.png
        title: 'Scroll down and locate the new "Alarms" widget. Drag and Drop Alarm widget to the free space and resize it. Apply changes.'

step4:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-1-pe.png
        title: 'Navigate to the "Profiles". Then click the "Device profiles" page;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-2-pe.png
        title: 'Click the default profile row. This will open device profile details;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-3-pe.png
        title: 'Select the "Alarm rules" tab and toggle edit mode;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-4-pe.png
        title: 'Click "Add alarm rule" button;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-5-pe.png
        title: 'Specify alarm type and click the "+" icon to add alarm rule condition;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-6-pe.png
        title: 'Click the "Add key filter" button to specify a condition;'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-7-pe.png
        title: 'Select key type, input key name, select value type, and click "Add";'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-8-pe.png
        title: 'Select operation and input threshold value. Click "Add";'
    8:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-9-pe.png
        title: 'Click "Save";'
    9:
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

step7:
    0:
        image: /images/helloworld/hello-world-pe-step-7-item-1.png
        title: 'Navigate to the customer groups page.'
    1:
        image: /images/helloworld/hello-world-pe-step-7-item-2.png
        title: 'Then navigate to the default customer group "All".'
    2:
        image: /images/helloworld/hello-world-pe-step-7-item-3.png
        title: 'Click the "+" sign to add a new customer.'
    3:
        image: /images/helloworld/hello-world-pe-step-7-item-4.png
        title: 'Add customer title and click "Add".'
    4:
        image: /images/helloworld/hello-world-pe-step-7-item-5.png
        title: 'Click  “Manage customer user groups”.'
    5:
        image: /images/helloworld/hello-world-pe-step-7-item-6.png
        title: 'Open “Customer Users” group.'
    6:
        image: /images/helloworld/hello-world-pe-step-7-item-7.png
        title: 'Click the “+” sign to add a User'
    7:
        image: /images/helloworld/hello-world-pe-step-7-item-8.png
        title: 'Specify email that you will use to login as a customer user and click "Add".'
    8:
        image: /images/helloworld/hello-world-pe-step-7-item-9.png
        title: 'Copy the activation link and save it to a safe place. You will use it later to set the password.'
    9:
        image: /images/helloworld/hello-world-pe-step-7-item-10.png
        title: 'Open user details'          
    10:
        image: /images/helloworld/hello-world-pe-step-7-item-11.png
        title: 'Toggle edit mode'
    11:
        image: /images/helloworld/hello-world-pe-step-7-item-12.png
        title: 'Select default dashboard and check "Always fullscreen". Apply changes.'  
    12:
        image: /images/helloworld/hello-world-pe-step-7-item-13.png
        title: 'Use activation link to set the password. Click "Create Password". You will automatically login as a customer user.'
    13:
        image: /images/helloworld/hello-world-pe-step-7-item-14.png
        title: 'You have logged in as a Customer User. You may browse the data and acknowledge/clear alarms.'

step71:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-1-pe.png
        title: 'Navigate to the Customers page;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-2-pe.png
        title: 'By default, you navigate to the customer group “All”. Click the "+" sign to add a new customer;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-3-pe.png
        title: 'Add customer title and click "Add".'

step72:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-1-pe.png
        title: 'Open Devices page. Select your device and click the "Change owner" button;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-2-pe.png
        title: 'Start typing the customer name and then click on the customer item. When click the "Change owner" button;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-3-pe.png
        title: 'Click "Yes". You can always change the owner back to the tenant;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-4-pe.png
        title: 'Your device list should be empty now. This is because it displays the devices of the tenant. Toggle the "Include custom entities" slider to see your customers devices in the general list of devices. Or navigate to the customer hierarchy to see your device;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-5-pe.png
        title: 'Your device is now in the Customer device groups "All".'

step73:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-3-pe.png
        title: 'Open "Dashboard" page, go to the "Groups" tab and click the "Share" icon;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-4-pe.png
        title: 'Select the customer and click "Share".'

step74:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-1-pe.png
        title: 'Go to "Customers" page, navigate to "Hierarchy" tab, select "Customer Users" and click "Add User" icon;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-2-pe.png
        title: 'Specify email, first and last name. Click "Add";'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-3-pe.png
        title: 'Copy the activation link and save it to a safe place. Then click "OK";'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-4-pe.png
        title: 'Click on the user name to open user details. Toggle edit mode;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-5-pe.png
        title: 'Optionally, select the default dashboard and enable "Always fullscreen" mode. Apply changes.'

step75:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-5-activate-customer-user-1-pe.png
        title: 'Use activation link to set the password. Click "Create Password". You will automatically login as a customer user;'
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
                              
---

{% assign docsPrefix = "paas/" %}
{% include docs/getting-started-guides/helloworld-pe.md %}
