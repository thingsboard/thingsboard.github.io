---
layout: docwithnav-paas
assignees:
- ashvayka
title: Notification center
description: IoT alarm notifications

notification-center:
    0:
        image: /images/user-guide/notifications/notification-center-1-pe.png

notification-center-send-notification:
    0:
        image: /images/user-guide/notifications/notification-center-send-notification-1-pe.png
        title: 'To send a notification click the “Send notification” button in the upper right corner of the notification page;'
    1:
        image: /images/user-guide/notifications/notification-center-send-notification-2-pe.png
        title: 'In new window, select recipients and one or more delivery methods;'
    2:
        image: /images/user-guide/notifications/notification-center-send-notification-3-pe.png
        title: 'If necessary, use the scheduler. Click "Next";'
    3:
        image: /images/user-guide/notifications/notification-center-send-notification-4-pe.png
        title: 'Enter the subject of the message and the text of the message;'
    4:
        image: /images/user-guide/notifications/notification-center-send-notification-5-pe.png
        title: 'You can use the Action button in the notification. Enter the button name, select the action type ("Open dashboard" or "Open URL link") and specify the URL link or dashboard that should open when the button is clicked. You can also display the icon and set its color. Click "Next";'
    5:
        image: /images/user-guide/notifications/notification-center-send-notification-6-pe.png
        title: 'In this window, you can see how the notification will look and also view the list of notification recipients. Click "Send";'
    6:
        image: /images/user-guide/notifications/notification-center-send-notification-7-pe.png
        title: 'User received a new notification. The user can view it by clicking on the bell icon in the upper right corner of the screen or in the Notification center page;'
    7:
        image: /images/user-guide/notifications/notification-center-send-notification-9-pe.png
        title: 'By clicking on the "Open this dashboard" button in the message, the user will open the dashboard window.'
    8:
        image: /images/user-guide/notifications/notification-center-send-notification-10-pe.png
        title: ''

notification-center-inbox:
    0:
        image: /images/user-guide/notifications/notification-center-inbox-1-pe.png
        title: 'The “Inbox” tab displays unread notifications by default;'
    1:
        image: /images/user-guide/notifications/notification-center-inbox-2-pe.png
        title: 'You may browse the notifications, delete them and mark them as read;'
    2:
        image: /images/user-guide/notifications/notification-center-inbox-3-pe.png
        title: 'You may also switch the view to browse all notifications.'

notification-center-sent:
    0:
        image: /images/user-guide/notifications/notification-center-sent-1-pe.png
        title: 'The “Sent” tab displays the status of sent notifications. You may use the “Notify again” button to copy an existing notification and send it again.'

notification-center-recipients:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-1-pe.png
        title: 'Click the "Add recipients" button;'

notification-center-recipients-1:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-2-pe.png
        title: 'Enter the name of the notification recipients. Next, select one of the two types of recipients: platform users and Slack entities. Recipients group defines either a set of platform users or set of Slack entities. From the "User filter" list, select who you want to send messages or notifications to. Click "Add";'
    1:
        image: /images/user-guide/notifications/notification-center-recipients-3-pe.png
        title: 'The new recipient is added.'

notification-center-recipients-slack:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-slack-1-pe.png
        title: 'Select Slack channel type to define notification recipients.'

notification-center-platform users:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-list-1-pe.png
        title: 'Use "User filter" to define notification recipients.'

---

{% assign docsPrefix = "paas/" %}
{% include docs/user-guide/notifications.md %}