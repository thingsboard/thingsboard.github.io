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
        title: 'Login to your ThingsBoard instance and go to the <b>Devices</b> page of the <b>Entities</b> section.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-2-pe.png
        title: 'By default, you navigate to the device group <b>All</b>. Click on the "<b>+</b>" icon in the top right corner of the table and then select <b>Add new device</b> from drop-down menu.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-3-pe.png
        title: 'Enter a device name (e.g., <b>My New Device</b>) No other changes required at this time. Click <b>Add</b>.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-4-pe.png
        title: 'A window for checking the device connection will open — we&#39;ll skip this step for now and return to connection checking in the next step.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-5-pe.png
        title: 'Congratulations, you&#39;ve added your first device! As you add more devices, they will be added at the top of the table, as the table automatically sorts devices by their creation time, with the newest ones listed first.'

step11:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-6-pe.png
        title: 'You will also receive a notification upon adding devices. Click the <b>bell icon</b> (top right) to view notifications.'

step2:
    0:
        image: /images/helloworld/getting-started-pe/check-connectivity-device-1-pe.png
        title: 'Click on your device, then click the <b>Check connectivity</b> button in the <b>Device details</b> window.'
    1:
        image: /images/helloworld/getting-started-pe/check-connectivity-device-2-pe.png
        title: 'In the opened window, choose your messaging protocol and operating system. Install any necessary client tools and copy the provided command.'
    2:
        image: /images/helloworld/getting-started-pe/check-connectivity-device-3-pe.png
        title: 'Execute the copied command in Terminal. Once telemetry data (e.g., temperature readings) is successfully published, the device status will change from "<b>Inactive</b>" to "<b>Active</b>", and you&#39;ll see the data displayed. You can now close the connectivity window.'

step31:
    0:
        image: /images/helloworld/getting-started-pe/create-dashboard-1-pe.png
        title: 'Navigate to the <b>Dashboards</b> page through the main menu on the left of the screen. By default, you navigate to the dashboard group <b>All</b>.'
    1:
        image: /images/helloworld/getting-started-pe/create-dashboard-2-pe.png
        title: 'Click the "<b>+</b>" sign in the upper right corner of the screen, and select <b>Create new dashboard</b> from the drop-down menu.'
    2:
        image: /images/helloworld/getting-started-pe/create-dashboard-3-pe.png
        title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click <b>Add</b>.'
    3:
        image: /images/helloworld/getting-started-pe/create-dashboard-4-pe.png
        title: 'After creating the dashboard, it will open automatically, and you can immediately start adding widgets to it. To save the dashboard, click <b>Save</b> button in the upper right corner.'
    4:
        image: /images/helloworld/getting-started-pe/create-dashboard-5-pe.png
        title: 'Your first dashboard has been successfully created. As you continue to add new dashboards, they will appear at the top of the list. This default sorting is based on the creation timestamp.'

step32:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-0-pe.png
        title: 'Enter dashboard edit mode. Simply open the dashboard and click the <b>Edit mode</b> button found in the upper right corner of the screen.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-1-pe.png
        title: 'Click the <b>+ Add widget</b> button at the top of the screen or click the large <b>+ Add new widget</b> icon in the center of the screen (if this is your first widget on this dashboard).'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-2-pe.png
        title: 'Find the <b>Tables</b> widget bundle and click on it.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-3-pe.png
        title: 'Select the <b>Entities table</b> widget.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-4-pe.png
        title: 'The add widget window will appear. Specify the previously created device <b>My New Device</b> as the data source in the <b>Device</b> field. The <b>name</b> key has already been added to the <b>Columns</b> section, which is responsible for the column with the device name. You need to add another column that will display the value of the <b>temperature</b> key. To do this, click <b>Add column</b> to add a new field to enter the data key.'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-5-pe.png
        title: 'Click on the newly appeared data key input field. A list of available data keys will open. Select <b>temperature</b> data key.'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-6-pe.png
        title: 'Click the <b>Add</b> button in the bottom right corner of the widget to complete adding the widget.'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-table-widget-7-pe.png
        title: 'To make the widget slightly larger, simply grab the bottom right corner and drag it. Once you&#39;re happy with the new size, don&#39;t forget to click <b>Save</b> to save your changes to the dashboard.'

step33:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-1-pe.png
        title: 'Enter edit mode and click the <b>Add new widget</b> button at the top of the screen.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-2-pe.png
        title: 'Find the <b>Charts</b> widget bundle and click on it.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-3-pe.png
        title: 'Select the <b>Time series сhart</b> widget.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-4-pe.png
        title: 'Specify the previously created device **My New Device** as the data source in the <b>Device</b> field. In the <b>Series</b> section, specify the data key <b>temperature</b> to start monitoring the temperature values of the device. Then, click <b>Add</b>.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-5-pe.png
        title: 'Resize the widget and apply changes. Publish different telemetry values multiple times, as in Step 2. Note that the widget displays only one minute of data by default. Click <b>Save</b> to apply changes.'

step33_2:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-1-add-chart-widget-6-pe.png
        title: 'You can also adjust the time interval for displaying data in the widget, change the aggregation function, and specify the grouping interval. To do this, open the Time window and make the necessary adjustments. Update the time window settings by clicking the <b>Update</b> button.'

step34:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-1-pe.png
        title: 'Enter edit mode and click the <b>Add new widget</b> button at the top of the screen.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-2-pe.png
        title: 'Find the <b>Alarm widgets</b> bundle and click on it.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-3-pe.png
        title: 'Select <b>Alarms table</b> widget.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-4-pe.png
        title: 'Specify the previously created device <b>My New Device</b> as the data source in the <b>Device</b> field. Next, we will configure the filters. All alarms have specific severities and statuses. Mark those you want to see in the widget. If none are marked, all alarms will be displayed regardless of their status or severity.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-5-pe.png
        title: 'Congratulations! You have added the alarm widget. By default, new widgets are added one below the other, stacking downwards. Let&#39;s organize our widgets a bit to tidy up their arrangement. Drag the <b>Time series chart</b> widget to the top right corner of the dashboard to make room for the <b>Alarms table</b> widget.'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-3-4-add-alarm-widget-6-pe.png
        title: 'Scroll down, find the <b>Alarms table</b> widget, and drag it over to a free spot. Adjust its size to fit your needs. After you&#39;re done tweaking, click <b>Save</b> to save the dashboard.'

step4:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-1-pe.png
        title: 'Go to the <b>Devices</b> page in the <b>Entities</b> section.<br>Click <b>My New Device</b> to open its details, and navigate to the <b>Alarm rules</b> tab.<br>Click the "<b>+</b>" button, and select <b>Create new alarm rule</b>.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-2-pe.png
        title: 'In the <b>General</b> section, specify the <b>alarm type</b> — <i>High temperature</i> (or any other name you prefer) — which serves as both the name and the unique identifier of the alarm.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-3-pe.png
        title: 'Add the argument — the data source that the rule will use when evaluating the conditions.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-4-pe.png
        title: 'Click <b>Add trigger condition</b>.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-5-pe.png
        title: 'Keep the <b>Critical</b> severity level and click <b>Add condition</b>.'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-6-pe.png
        title: 'Click the <b>Add argument filter</b>.'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-7-pe.png
        title: '<b>General:</b> <b>Argument:</b> temperature (the argument added earlier); <b>Value type:</b> Numeric<br><b>Filters:</b> Click <b>Add</b>; <b>Operation:</b> greater than; <b>Value source:</b> Static; <b>Value:</b> 25.<br>Click <b>Add</b>.'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-8-pe.png
        title: '<b>Type:</b> Simple.<br><b>Save</b> condition.'
    8:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-9-pe.png
        title: 'Finally, click the <b>Add</b>.'
    9:
        image: /images/helloworld/getting-started-pe/hello-world-4-configure-alarm-rules-10-pe.png
        title: 'The new alarm rule will be created and activated.'        

step5:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-5-create-alarm-1-pe.png
        title: 'As soon as a new <b>temperature</b> value goes above the threshold, a new active alarm will appear on the dashboard.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-5-create-alarm-2-pe.png
        title: 'You can <b>acknowledge</b> and <b>clear</b> alarms using the <b>Alarm table</b> widget.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-5-create-alarm-3-pe.png
        title: 'After the alarm is created, you will also receive a notification in the <b>Notification center</b>. Click the bell icon in the top-right corner to view the latest notifications.'

notification-center:
    0:
        image: /images/helloworld/getting-started-pe/notification-center-getting-started-1-pe.png
        title: 'The ThingsBoard Notification center allows sending personalized notifications to end-users. These can include notifications about device activity, changes in temperature within your environment, or other events detected in your IoT ecosystem.'

step71:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-1-pe.png
        title: 'Navigate to the <b>Customers</b> page. By default, you navigate to the customer group <b>All</b>. Click the "<b>+</b>" sign to add a new customer.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-2-pe.png
        title: 'Input the customer title. Additionally, you can input personal details for the customer and assign a home dashboard. To finalize the customer creation, you can click the "Add" button. In this case, the new customer will be created and located in the "All" customers folder. Let`s create a separate group for our customer. To do this, click on <b>Next: Owner and groups</b> button.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-3-pe.png
        title: 'If needed, you can assign a different owner for this customer. We will leave this option unchanged. Enter a name for the new group and click <b>Create a new one!</b>.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-4-pe.png
        title: 'Click <b>Add</b> to create a new customers group.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-5-pe.png
        title: 'Now, click <b>Add</b> to create a new customer.'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-6-pe.png
        title: 'The customer has been created and is located in the <b>My Customers</b> group.'

step72:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-1-pe.png
        title: 'Open <b>Devices</b> page. Click on your device to open its details.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-2-pe.png
        title: 'Click <b>Manage owner and groups</b> button.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-3-pe.png
        title: 'In the <b>Owner</b> line, start typing the customer name and then select the customer.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-4-pe.png
        title: 'Now, create a device group. In the <b>"Groups</b> line, input the desired device group name. Then, click <b>Create a new one!</b>.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-5-pe.png
        title: 'In the next window, click <b>Add</b> button to create a device group.'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-6-pe.png
        title: 'Click <b>Update</b> to add to the group and change the owner of your device. You can always change the owner back to the tenant.'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-7-pe.png
        title: 'By default, the general device list displays both tenant devices and devices of your customers. Disable <b>Include customer entities</b> to only see tenant devices in the device list.'
    7:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-8-pe.png
        title: 'Your device list should be empty now.'

step72_1:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-9-pe.png
        title: 'Navigate to <b>Customers</b> page. Find your customer in the list of customers and then click on the <b>Manage customer devices</b> icon.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-10-pe.png
        title: 'Your device is owned by the customer and is located in the customer&#39;s device group <b>My Devices</b>.'

step72_2:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-11-pe.png
        title: 'Open the <b>Devices</b> page. Click on the "<b>+</b>" icon in the top right corner of the table and then select <b>Add new device</b> from drop-down menu.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-12-pe.png
        title: 'Input device name (for example, <b>Thermostat</b>) and select the new owner in the <b>Owner</b> field. Then, click <b>Add</b>.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-13-pe.png
        title: 'Close check connectivity window.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-71-assign-device-to-customer-14-pe.png
        title: 'The device has been created, and it immediately belongs to your customer.'

step73:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-3-pe.png
        title: 'Open the <b>Dashboards</b> page and go to the <b>Groups</b> tab. Click the <b>Share</b> icon next to the <b>All</b> dashboard group.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-4-pe.png
        title: 'Select the customer you want to share the dashboard with and set the permission level. In this case, choose "Read", then click <b>Share</b>.'

step73_1:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-5-pe.png
        title: 'On the <b>All</b> tab of the <b>Dashboards</b> page, click on the "<b>+</b>" icon in the top right corner of the table and select <b>Create new dashboard</b> from the drop-down menu.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-6-pe.png
        title: 'Enter a name for the dashboard (e.g., <b>Thermostats</b>). In the <b>Groups</b> field of the <b>Owner and groups</b> section, select an existing group or enter a name for a new dashboard group (for example, <b>Thermostats group</b>) and click <b>Create a new one!</b>.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-7-pe.png
        title: 'In the <b>Add entity group</b> window that opens, click <b>Next: Share entity group</b>.'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-8-pe.png
        title: 'Check the <b>Share entity group</b> box, select the customer to share the dashboard with, and set their permissions. Then click <b>Add</b>.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-9-pe.png
        title: 'Click <b>Add</b> again to confirm dashboard creation.'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-10-pe.png
        title: 'The new dashboard will open automatically — click <b>Save</b> in the top-right corner.'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-71-share-the-dashboard-11-pe.png
        title: 'Your dashboard has been created and placed in the <b>Thermostats group</b>. You can quickly access it by clicking the group name.'

step74:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-1-pe.png 
        title: 'Navigate to <b>Customers</b> page. Find your customer in the list of customers and then click on the <b>Manage customer users</b> icon;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-2-pe.png
        title: 'Navigate to the <b>Groups</b> tab and select <b>Customer Users</b> group;'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-3-pe.png
        title: 'Click "<b>plus</b>" icon in the top right corner;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-4-pe.png
        title: 'Enter the user&#39;s email. Additionally, specify the first and last name. Click <b>Add</b>.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-5-pe.png
        title: 'Copy the activation link and save it to a safe place. Then click "<b>OK</b>".'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-6-pe.png
        title: 'Click on the created user to open details. Click "<b>pencil</b>" icon to enter edit mode.'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-7-create-customer-user-7-pe.png
        title: 'Select your "My New Dashboard" as default dashboard and check <b>Always fullscreen</b>. <b>Apply changes</b>.'

step75:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-7-5-activate-customer-user-1-pe.png
        title: '<b>Paste the previously copied link</b> into a new browser tab and press the <b>Enter</b> key. Now <b>create a password</b> by entering it twice and clicking <b>Create Password</b>.'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-7-5-activate-customer-user-2-pe.png
        title: 'You are now logged in as a customer user. Since this user has read-only access, you can view device data and its alarms, but you cannot acknowledge or clear them.'
        
mqttWindows:
    0:
        image: /images/helloworld/hello-world-pe-step-3-item-1.png
        title: 'Create new MQTT Client with the properties listed in screenshots below.'
    1:
        image: /images/helloworld/hello-world-pe-step-3-item-2.png
        title: 'Populate the topic name and payload. Make sure the payload is a valid JSON document. Click <b>Publish</b> button.'

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
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/getting-started-guides/helloworld-pe.md %}
