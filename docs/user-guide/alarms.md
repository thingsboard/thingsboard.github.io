---
layout: docwithnav
assignees:
- ashvayka
title: Working with alarms
description: IoT device alarm management using ThingsBoard alarms feature

alarm-type:
    0:
        image: /images/user-guide/alarms/alarms-type-ce.png

alarm-severity:
    0:
        image: /images/user-guide/alarms/alarms-severity-ce.png

find-alarms:
    0:
        image: /images/user-guide/alarms/find-alarms-1-ce.png
        title: 'To view alarms use the "Alarms" page in the left menu. Here you will see all reminders in list form, as well as the following information: creation time, source, alarm type, severity, to whom assigned, and status of the alarm.'
    1:
        image: /images/user-guide/alarms/find-alarms-2-ce.png
        title: 'To view alarm details, click on the ellipsis (...) in the "Details" column of the alarm you want to view.'

find-alarm-for-specific-device:
    0:
        image: /images/user-guide/alarms/find-alarm-for-specific-device-ce.png
        title: 'Go to the relevant entity&#39;s page to find reminders for a specific entity. In our case, these are the "Devices" page. Click on the needed entity (device) to open its details. Navigate to the "Alarms" tab.'
    
notification-about-alarm:
    0:
        image: /images/user-guide/alarms/notification-about-alarm-ce.png

assignee-alarm-1:
    0:
        image: /images/user-guide/alarms/assign-alarm-to-user-3-ce.png
        title: 'Go to the "Alarms" page and specify the user in the "Assignee" column of the desired alarm.'
    1:
        image: /images/user-guide/alarms/assign-alarm-to-user-4-ce.png
        title: 'Go to the "Dashboards" page with Alarms table widget. Specify the user in the "Assignee" column of the desired alarm;'
    2:
        image: /images/user-guide/alarms/assign-alarm-to-user-1-ce.png
        title: 'Navigate to the "Alarms" tab of the entity details window selected entity and specify the user in the "Assignee" column.'

assignee-alarm-2:
    0:
        image: /images/user-guide/alarms/assign-alarm-to-user-2-ce.png
        title: 'When an alarm is assigned to the user, they will receive a notification about it.'

acknowledge-alarm:
    0:
        image: /images/user-guide/alarms/acknowledge-alarm-1-ce.png
        title: 'Click on the "Acknowledge" icon in the Alarm table widget.'
    1:
        image: /images/user-guide/alarms/acknowledge-alarm-2-ce.png
        title: 'Click on the "Acknowledge" button in the alarm details window.'

clear-alarm:
    0:
        image: /images/user-guide/alarms/clear-alarm-1-ce.png
        title: 'Click on the "Clear" icon in the Alarms table widget.'
    1:
        image: /images/user-guide/alarms/clear-alarm-2-ce.png
        title: 'Click on the "Clear" button in the alarms details window.'

alarm-comments-1:
    0:
        image: /images/user-guide/alarms/alarm-comments-1-ce.png
        title: 'To find alarm comments and leave your own, open the details of the selected alarm.'
    1:
        image: /images/user-guide/alarms/alarm-comments-2-ce.png
        title: 'Here you can view system comments, comments from other users, and leave your own.'

visualize-alarms-on-dashboard-1:
    0:
        image: /images/user-guide/alarms/visualize-alarms-on-dashboard-1-ce.png
        title: 'The "Alarms table" widget allows you to conveniently display alarms for selected entities based on a defined time window and filters.'

visualize-alarms-on-dashboard-2:
    0:
        image: /images/user-guide/alarms/visualize-alarms-on-dashboard-2-ce.png
        title: 'The "Alarm count" widget displays the number of alarms based on the selected filters. In this case, the number of active alarms is displayed.'

propagation-settings:
    0:
        image: /images/user-guide/alarms/propagation-settings-ce.png
    
relations-to-asset:
    0:
        image: /images/user-guide/alarms/propagation-1-ce.png
        title: 'To find devices related to Office A, go to the "Assets" page, click on the needed asset and navigate to the "Relations" tab in the asset details window. The following devices relations to the Office A: Thermometer A1, Thermometer B1, Thermometer B2, and Thermometer C3.'

alarm-creation-time-simple:
    0:
        image: /images/user-guide/alarms/alarm-creation-time-simple-ce.png
        title: 'If the threshold value is exceeded, an alarm is created immediately.'

alarm-creation-time-duration:
    0:
        image: /images/user-guide/alarms/alarm-creation-time-duration-ce.png
        title: 'An alarm will be created if the duration of exceeding the threshold value exceeds the specified value.'

alarm-creation-time-repeating:
    0:
        image: /images/user-guide/alarms/alarm-creation-time-repeating-ce.png
        title: 'An alarm will be created if the threshold value is exceeded the specified number of times.'

propagate-alarm-to-related-entities:
    0:
        image: /images/user-guide/alarms/propagation-5-ce.png
        title: 'In the alarm rule settings of the device profile, tick "Propagate alarm to related entities".'
    
propagate-alias:
    0:
        image: /images/user-guide/alarms/propagation-2-ce.png
        title: 'Create an alias that will filter the selected asset - "Office A".'

add-alarms-widget:
    0:
        image: /images/user-guide/alarms/propagation-3-ce.png
        title: 'Add the Alarms table widget. Specify the previously created alias as the alarm source. Be sure to activate the "Search propagated alarms" option to search for propagated alarms.'
    1:
        image: /images/user-guide/alarms/propagation-4-ce.png
        title: 'The alarm Table widget has been added.'

propagate-send-telemetry:
    0:
        image: /images/user-guide/alarms/propagation-6-ce.png
        title: 'Send telemetry to one of the devices that exceeds the threshold value specified in the alarm rule to trigger an alarm.'

propagate-alarm-created:
    0:
        image: /images/user-guide/alarms/propagation-7-ce.png
        title: 'An alarm has been created on the device, and thanks to our settings, the alarm has propagated to the related asset.'
    1:
        image: /images/user-guide/alarms/propagation-8-ce.png
        title: 'You can also see the created alarm on the "Alarms" tab in the asset details window.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/alarms.md %}