---
layout: docwithnav-pe
assignees:
- ashvayka
title: Notification center
description: IoT alarm notifications

notification-center-send-notification-1:
    0:
        image: /images/user-guide/notifications/notification-center-send-notification-1-pe.png
        title: 'Click the "<b>Send notification</b>" button in the top-right corner to open the new notification wizard.'
    1:
        image: /images/user-guide/notifications/notification-center-send-notification-2-pe.png
        title: '<b>Specify recipients</b> and <b>at least one delivery method</b>.<br><i>In this example, we&#39;ll select the Web delivery method.</i>'
    2:
        image: /images/user-guide/notifications/notification-center-send-notification-3-pe.png
        title: '<b>Optionally</b>:<br> - <b>Attach a report</b> (available only for <b>Email</b> and <b>Slack</b> delivery methods).<br> - <b>Schedule the notification</b> for a later time.<br> Click "<b>Next</b>".'
    3:
        image: /images/user-guide/notifications/notification-center-send-notification-4-pe.png
        title: 'At this step, <b>configure the subject and message content</b> for each selected delivery method.'
    4:
        image: /images/user-guide/notifications/notification-center-send-notification-5-pe.png
        title: 'For the <b>Web</b> delivery method, you can add an <b>action button</b> to the notification:<br> - Enter the <b>button text</b>.<br> - Select the <b>action type</b> ("<b>Open dashboard</b>" or "<b>Open URL link</b>").<br>- <b>Specify the URL or dashboard</b> to be opened when the button is clicked.<br> You can also display the icon in the notification and set its color.<br> Then, click "<b>Next</b>";'
    5:
        image: /images/user-guide/notifications/notification-center-send-notification-6-pe.png
        title: 'Here you can preview how your message will look. If everything is set up correctly, click "<b>Send</b>".'

notification-center-send-notification-2:
    0:
        image: /images/user-guide/notifications/notification-center-send-notification-7-pe.png
        title: 'The recipient will receive the notification in the ThingsBoard interface and can view it on the Notification center page or by clicking the bell icon in the top-right corner of the screen.'
    1:
        image: /images/user-guide/notifications/notification-center-send-notification-8-pe.png
        title: 'Clicking the "Open this dashboard" button in the notification will open the corresponding dashboard.'

notification-center-inbox:
    0:
        image: /images/user-guide/notifications/notification-center-inbox-1-pe.png
        title: 'The “Inbox” tab displays unread notifications by default;'
    1:
        image: /images/user-guide/notifications/notification-center-inbox-2-pe.png
        title: 'Browse the notifications, delete them and mark them as read;'
    2:
        image: /images/user-guide/notifications/notification-center-inbox-3-pe.png
        title: 'Switch to the "All" tab to view all notifications.'

notification-center-inbox-bell-icon:
    0:
        image: /images/user-guide/notifications/notification-inbox-bell-icon-1-pe.png
        title: 'Click on the "bell" icon to view incoming notifications.'

notification-center-sent:
    0:
        image: /images/user-guide/notifications/notification-center-sent-1-pe.png
        title: 'The "Sent" tab displays sent notifications and their status. You may use the "Notify again" button to send it again.'

notification-center-recipients:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-1-pe.png
        title: 'The "Recipients" tab displays the list of notification recipients. Here you can create and delete notification recipients here.'

notification-center-recipients-1:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-2-pe.png
        title: 'Click the "Add recipients" button in the upper right corner of the "Recipients" tab. A new window will pop up. Here, type in the name of the notification recipient(s). Next, select the "Platform users" type. In the "User Filter" list, select who you want to send notifications to. Than, click "Add".'
    1:
        image: /images/user-guide/notifications/notification-center-recipients-3-pe.png
        title: 'The new recipient is added. Now you can use it to send a new notification or create a new notification rule.'

notification-center-recipients-2:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-4-pe.png
        title: 'Click the "Send notification" button. Then click the "Create new" button;'
    1:
        image: /images/user-guide/notifications/notification-center-recipients-5-pe.png
        title: 'A new window will pop up. Enter the name of the notification recipient(s). Next, select one of the three types of recipients: platform users, Microsoft Teams, or Slack entities, and specify who exactly you want to send notifications to. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-recipients-6-pe.png
        title: 'The new recipient is added. Now continue with creating the new notification.'

notification-center-recipients-slack:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-slack-1-pe.png
        title: 'Click the "Add recipients" button in the upper right corner of the "Recipients" tab. A new window will pop up. Enter the name of the notification recipient(s). Next, select the "Slack" type. In the “Slack channel type” field, choose the destination where you’d like your notifications to land: public channel, private channel, or direct message. In the additional “Conversation” field, specify the exact conversation or channel in Slack where you want to send notifications. Click "Add";'
    1:
        image: /images/user-guide/notifications/notification-center-recipients-slack-2-pe.png
        title: 'The new recipient is added. Now you can use it to send a new notification or create a new notification rule.'

notification-center-recipients-microsoft-teams:
    0:
        image: /images/user-guide/notifications/notification-center-recipients-microsoft-teams-1-pe.png
        title: 'Click the "Add recipients" button in the upper right corner of the "Recipients" tab. A new window will pop up. Enter the name of the notification recipient(s). Next, select the "Microsoft Teams" type. Next, you need to specify the webhook URL for the Microsoft Teams channel where the notifications will be sent. In the “Channel name” field, specify the channel to which you want to send notifications. Click "Add";'
    1:
        image: /images/user-guide/notifications/notification-center-recipients-microsoft-teams-2-pe.png
        title: 'The new recipient is added. Now you can use it to send a new notification or create a new notification rule.'

notification-center-templates:
    0:
        image: /images/user-guide/notifications/notification-center-templates-1-pe.png
        title: 'The "Templates" tab displays the list of notification templates. You may create, copy and delete notification templates here.'

notification-center-add-templates:
    0:
        image: /images/user-guide/notifications/notification-center-add-templates-1-pe.png
        title: 'Click the "Add template" button in the upper right corner of the "Templates" tab. In the new window, enter the notification template name. Select a template type from the drop-down list. Select one or more delivery methods. In this example, let’s consider the Web delivery method. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-templates-2-pe.png
        title: 'Enter the subject of the message and the text of the message. Optionally, you can display the icon in the notification and set its color. Also, you can use the action button in the notification. Then, click "Add".'
    2:
        image: /images/user-guide/notifications/notification-center-add-templates-3-pe.png
        title: 'The new template is added.'

notification-center-rules:
    0:
        image: /images/user-guide/notifications/notification-center-rules-1-pe.png
        title: 'The "Rules" tab displays the list of notifications rules. You may create, copy and delete notification rules here.'

notification-center-add-rule-alarm:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Alarm. Then, select template from the list or create your own;'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-2-pe.png
        title: 'Build an Escalation chain. Configure one or multiple recipients of the notification. Also configure alarm statuses, which will stop the escalation chain Click "Next";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-3-pe.png
        title: 'Filter alarms by type and severity. Also select the event types that will trigger notification. Click "Add";'
    3:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-4-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-device-activity:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-device-activity-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Alarm. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-device-activity-2-pe.png
        title: 'Filter notifications by specific devices or by device types. You may also select the event types that will trigger notification. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-device-activity-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-entity-action:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-entity-action-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Entity action. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-entity-action-2-pe.png
        title: 'Filter notifications by entity type. You may also select the event types that will trigger notification. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-entity-action-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-alarm-comment:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-comment-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Alarm comment. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-comment-2-pe.png
        title: 'The trigger filter allows you to filter alarms by type, severity, and status. You may also select to notify only on user comments and skip system comments. Optionally, you may notify users on comments update. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-comment-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-alarm-assignment:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-assignment-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Alarm assignment. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-assignment-2-pe.png
        title: 'The trigger filter allows you to filter alarms by type, severity, and status. You may also select the event types that will trigger notification: assign or unassign. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-alarm-assignment-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-engine-lifecycle-event:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-engine-lifecycle-event-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Rule engine lifecycle event. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-engine-lifecycle-event-2-pe.png
        title: 'The trigger filter allows you to filter alarms by type, severity, and status. You may also select the event types that will trigger notification: assign or unassign. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-engine-lifecycle-event-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-integration-lifecycle-event:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-integration-lifecycle-event-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Integration lifecycle event. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-integration-lifecycle-event-2-pe.png
        title: 'The trigger filter allows you to filter alarms by type, severity, and status. You may also select the event types that will trigger notification: assign or unassign. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-integration-lifecycle-event-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-edge-connection:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-edge-connection-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Edge connection. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-edge-connection-2-pe.png
        title: 'The trigger filter allows you to filter notifications by Edge instances. You may also select the event types that will trigger notification: connected, disconnected. Click "Add".;'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-edge-connection-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-edge-communication-failure:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-edge-communication-failure-1-pe.png
        title: 'Click the "Add rule" button. Then enter rule name. Select trigger - Edge communication failure. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-edge-communication-failure-2-pe.png
        title: 'The trigger filter allows you to filter notifications by Edge instances. If the field is empty, the trigger will be applied to all edge instances. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-edge-communication-failure-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-entities-limit:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-entities-count-limit-1-pe.png
        title: 'Сlick the "Add rule" button. Then enter rule name. Select trigger - Entities limit. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-entities-count-limit-2-pe.png
        title: 'The trigger filter allows you to filter entities by type and setup threshold. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-entities-count-limit-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-api-usage-limit:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-api-usage-limit-1-pe.png
        title: 'Сlick the "Add rule" button. Then enter rule name. Select trigger - API usage limit. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-api-usage-limit-2-pe.png
        title: 'The trigger filter allows you to filter entities by API features. You may also select the event types that will trigger notification: enable, warning, disabled. Click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-api-usage-limit-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-new-platform-version:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-new-platform-version-1-pe.png
        title: 'Сlick the "Add rule" button. Then enter rule name. Select trigger - New platform version. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-new-platform-version-2-pe.png
        title: 'Optionally enter a description, then click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-new-platform-version-3-pe.png
        title: 'The new rule is created.'

notification-center-add-rule-exceeded-rate-limits:
    0:
        image: /images/user-guide/notifications/notification-center-add-rule-exceeded-rate-limits-1-pe.png
        title: 'Сlick the "Add rule" button. Then enter rule name. Select trigger - Exceeded rate limits. Then, select template from the list and specify recipient. Click "Next";'
    1:
        image: /images/user-guide/notifications/notification-center-add-rule-exceeded-rate-limits-2-pe.png
        title: 'The trigger filter allows you to filter entities by API features. Optionally enter a description, then click "Add";'
    2:
        image: /images/user-guide/notifications/notification-center-add-rule-exceeded-rate-limits-3-pe.png
        title: 'The new rule is created.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/notifications.md %}