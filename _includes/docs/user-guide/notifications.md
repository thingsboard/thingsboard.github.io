* TOC 
{:toc}

## Overview

ThingsBoard Notification Center allows you to send notifications to the end-users. 
You may send notifications manually, via REST API, or based on a specific trigger event.
You may also schedule delivery of the notification for a particular time. 

To go to the notification center, click on “Notification center” in the sidebar menu.
On this page you see the button to send a notification and five tabs: "Inbox", "Sent", "Recipients", "Templates" and "Rules".

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/notifications/notification-center-1-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/notifications/notification-center-1-pe.png)
{% endif %}

Let's look at each of the key components of the notification center below.

### Notification options available in ThingsBoard

Each notification may be delivered using multiple delivery methods: Web, SMS, Email, [Slack](https://slack.com/) or [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software/).

- **Web**. The notification will be sent to the Web UI in Thingsboard;
- **SMS**. The notification is sent to the user's phone. To send notifications via SMS, a system administrator should set up the [SMS provider](/docs/user-guide/ui/sms-provider-settings/) properly;
- **Email**. With this approach, the user receives a notification by Email. To send notifications via Email, a tenant administrator [outgoing mail server](/docs/user-guide/ui/mail-settings/) should be configured;
- **Slack**. Notifications will send as a Slack message to the list of Users or Channels. To send notifications via Slack, a tenant administrator must configure a Slack API [token](https://api.slack.com/authentication/token-types) in the *Settings* -> *Notifications* tab. Learn more about how to configure Slack settings in Thingsboard [here](/docs/{{docsPrefix}}user-guide/ui/slack-settings/).
- **Microsoft Teams**. Notifications will send as a Microsoft Teams message to the list of channels. To send notifications via Microsoft Teams, a tenant administrator must get **webhook URL** for a needed channel using this [guide](/docs/{{docsPrefix}}user-guide/ui/microsoft-teams-settings/).

### Send notification

To send a notification manually, follow these steps:

 - Сlick the “Send notification” button in the upper right corner of the "Notification center" page to open the new notification wizard;
 - Select recipients and one or more delivery methods. In this example, let's consider the Web delivery method. Click "Next";
 - Enter the subject and text of the message;
 - Also you can use the Action button in the notification. Enter the button text, select the action type ("Open dashboard" or "Open URL link") and specify the URL link or dashboard that should open when the button is clicked. You can also display the icon and set its color. Click "Next";
 - In this window, you can see how the notification will look and also view the list of notification recipients. Click "Send";
 - User received a new notification. The user can view it by clicking on the bell icon in the upper right corner of the screen or in the Notification center page;
 - By clicking on the "Open this dashboard" button in the message, the user will open the dashboard window.

{% include images-gallery.html imageCollection="notification-center-send-notification" %}

### Inbox

The "Inbox" tab displays unread notifications by default. 
You may use the inbox table to browse the notifications and mark them as read. 
You may also switch the view to browse all notifications.

{% include images-gallery.html imageCollection="notification-center-inbox" %}

You can also view incoming notifications by clicking on the bell icon in the top right corner of the screen. 
The number next to the icon indicates the number of unread messages. 
Here you can read the notification, mark it as read, or take action by clicking the action button.

{% include images-gallery.html imageCollection="notification-center-inbox-bell-icon" %}

### Sent 

The "Sent" tab displays the status of sent notifications. 
You may use the "Notify again" button to copy an existing notification and send it again. 

{% include images-gallery.html imageCollection="notification-center-sent" %}

Also, you may investigate issues with the delivery of certain notifications here. 
In case of delivery issues, the corresponding notification row will have information about the recipient who missed the update. 
This typically happens when the email address is wrong, or the phone number is not configured.

If you decide to delete an outgoing message, it will also be deleted for all recipients. This only applies to the Web delivery method.

### Recipients

The "Recipients" tab displays the list of notification recipient groups. You may create and delete notification recipient groups here.

{% include images-gallery.html imageCollection="notification-center-recipients" %}

To add notification recipients, follow these steps:

 - Click the "Add recipients" button in the upper right corner of the Recipients tab;
 - In the new window, enter the name of the notification recipients;
 - Next, select one of the three types of recipients: platform users, Microsoft Teams and Slack entities;
 - From the "User filter" list, select who you want to send messages or notifications to;
 - Click "Add".

{% include images-gallery.html imageCollection="notification-center-recipients-1" %}

You can also add a new recipient at the stage of creating a new notification:

 - Start creating a new notification. In the "New notification" window (in the "Recipients" field) click the "Create new" button;
 - Enter the name of the notification recipients;
 - Next, select one of the three types of recipients: platform users, Microsoft Teams and Slack entities;
 - From the "User filter" list, select who you want to send messages or notifications to;
 - Click "Add".

{% include images-gallery.html imageCollection="notification-center-recipients-2" %}

###### Platform users

There are several user filters that help you to define a recipient group. The scope of the filter depends on the role of the user that creates the recipient group.

{% include images-gallery.html imageCollection="notification-center-platform-users" %}

For **System Administrator**:

 * *All users* - all users of the platform. Includes all tenant administrators and all customer users;

 * *Tenant administrators* - set of tenant administrator users that are selected based on the list of tenants or their tenant profiles;

 * *Affected tenant administrators*;

 * *System administrators*.

For **Tenant Administrator**:

 * *All users* - all users of the current tenant. Includes the tenant administrator and all customer users;

 * *Tenant administrators* - all administrators of the current tenant;

 * *User list* - selected users;

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
 * *User group list* - selected user group;
{% endif %}

 * *Customer users* - all users that belong to customers of the current tenant;

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
 * *User role* - selected user role;
{% endif %}

 * *Users of the entity owner* - all users that belong to the entity owner. For example, users of the customer that owns the device or tenant administrators if the device is not assigned to the customer;

 * *Affected user* - The user that is affected by the notification trigger event. For example, the person that is assigned to investigate the alarm event.

###### Slack entities

As a platform user, you may send notifications as a Slack message to a list of Users or Channels. Both public and private channels and direct messages are supported.

{% include images-gallery.html imageCollection="notification-center-recipients-slack" %}

###### Microsoft Teams

As a platform user, you may send notifications as a Microsoft Teams message to a list of сhannels.

To send notifications via Microsoft Teams, get your **webhook URL** for a needed channel using this [guide](/docs/{{docsPrefix}}user-guide/ui/microsoft-teams-settings/).

Then add new notification recipients group.

{% include images-gallery.html imageCollection="notification-center-recipients-microsoft-teams" %}

### Templates

The "Templates" tab displays the list of notification templates. You may create, copy and delete notification templates here.

{% include images-gallery.html imageCollection="notification-center-templates" %}

The template defines the content of the notification and the set of delivery methods to use.
Each template contains a notification subject and message. 
The user may adjust the notification content for specific delivery methods. 
For example, you may use a concise message for SMS and an advanced HTML template for the Email.

Notification subject and message fields support templatization. The list of available templatization parameters depends on the template type. See the available types and parameters below.
Parameter names must be wrapped using `${...}`. For example: `${recipientFirstName}`. 
You may also modify the value of the parameter with one of the sufixes:

 * `upperCase`, for example - `${recipientFirstName:upperCase}`
 * `lowerCase`, for example - `${recipientFirstName:lowerCase}`
 * `capitalize`, for example - `${recipientFirstName:capitalize}`

To create a new template, follow these steps:

- Click the "Add template" button in the upper right corner of the "Templates" window;
- In the new window, enter the notification template name;
- Select a template from the template type list;
- Next, select one or more delivery methods. In this example, let’s consider the Web delivery method. Click "Next";
- Enter the subject and text of the message;
- Also you can use the Action button in the notification. Enter the button name, select the action type ("Open dashboard" or "Open URL link") and specify the URL link or dashboard that should open when the button is clicked. You can also display the icon and set its color. Click "Next";
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-templates" %}


##### General

The general template is used to send generic notifications. For example, system maintenance or important announcement. 
Available template parameters:

  * *recipientTitle* - title of the recipient (first and last name if specified, email otherwise);
  * *recipientEmail* - email of the recipient;
  * *recipientFirstName* - first name of the recipient;
  * *recipientLastName* - last name of the recipient.

##### Alarm

The alarm template is used to send notification about alarms. For example, alarm creation or acknowledgment. 
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *alarmType* - alarm type;
  * *action* - one of: 'created', 'severity changed', 'acknowledged', 'cleared', 'deleted';
  * *alarmId* - the alarm id as uuid string;
  * *alarmSeverity* - alarm severity (lower case);
  * *alarmStatus* - the alarm status;
  * *alarmOriginatorEntityType* - the entity type of the alarm originator, e.g. 'Device';
  * *alarmOriginatorName* - the name of the alarm originator, e.g. 'Sensor T1';
  * *alarmOriginatorId* - the alarm originator entity id as uuid string.

##### Device activity

The device activity template is used to send notification about inactive devices.
Available template parameters contain all parameters available for the [General](#general) template, plus:

* *deviceId* - the device id as uuid string;
* *deviceName* - the device name;
* *deviceLabel* - the device label;
* *deviceType* - the device type;
* *eventType* - one of: 'inactive', 'active'.

##### Entity action

The entity action template is used to send notification about entity action: creation, update or deletion.
Available template parameters contain all parameters available for the [General](#general) template, plus:

* *entityType* - the entity type, e.g. 'Device';
* *entityId* - the entity id as uuid string;
* *entityName* - the name of the entity;
* *actionType* - one of: 'added', 'updated', 'deleted';
* *userId* - id of the user who made the action;
* *userEmail* - email of the user who made the action;
* *userFirstName* - first name of the user who made the action;
* *userLastName* - last name of the user who made the action.

##### Alarm comment

The alarm comment template is used to send notification about comments on alarms.
Available template parameters contain all parameters available for the [Alarm](#alarm) template, plus:

* *comment* - text of the comment;
* *action* - one of: 'added', 'updated';
* *userEmail* - email of the user who made the action;
* *userFirstName* - first name of the user who made the action;
* *userLastName* - last name of the user who made the action.

##### Alarm assignment

The alarm assignment template is used to send notification when alarm is assigned or unassigned. 
Available template parameters contain all parameters available for the [Alarm](#alarm) template, plus:

  * *assigneeEmail* - email of the assignee;
  * *assigneeFirstName* - first name of the assignee;    
  * *assigneeLastName* - last name of the assignee;
  * *assigneeId* - the id of the assignee as uuid string;
  * *userEmail* - email of the user who made the action;
  * *userFirstName* - first name of the user who made the action;
  * *userLastName* - last name of the user who made the action;
  * *action* - one of: 'assigned', 'unassigned'.

##### Rule engine lifecycle event

The rule engine lifecycle event template is used to send notification about rule chain or rule node lifecycle events. 
For example, notify when new rule node fails to start. 
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *componentType* - one of: 'rule chain', 'rule node';
  * *componentId* - the component id as uuid string;
  * *componentName* - the rule chain or rule node name;    
  * *ruleChainId* - the rule chain id as uuid string;
  * *ruleChainName* - the rule chain name;
  * *eventType* - one of: 'started', 'updated', 'stopped';
  * *action* - one of: 'start', 'update', 'stop';    
  * *error* - the error text.

##### Rule node

The rule node template is used to send notifications from the 'send notification' rule node.
You may use data or metadata from the incoming message to build the notification subject and body.
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * values from the incoming message metadata referenced using the metadata key name;
  * values from the incoming message data referenced using the data key name;
  * *originatorType* - type of the originator, e.g. 'Device';
  * *originatorId* - id of the originator;
  * *msgType* - type of the message;
  * *recipientEmail* - email of the recipient;
  * *recipientFirstName* - first name of the recipient;
  * *recipientLastName* - last name of the recipient.

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
##### Integration lifecycle event

The integration lifecycle event template is used to send notification about integration lifecycle events. For example, notify when new integration fails to start.
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *integrationType* - type of the integration;
  * *integrationName* - name of the integration;
  * *integrationId* - id of the integration as uuid string;
  * *eventType* - one of: 'started', 'updated', 'stopped';
  * *action* - one of: 'start', 'update', 'stop';
  * *error* - the error text.
{% endif %}

{% unless docsPrefix == 'paas/' %}
##### Entities limit

The system administrator uses the entities limit template to notify tenants that they will reach the limit on the number of entities (devices, assets, etc.).
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *entityType* - one of: 'Device', 'Asset', 'User', etc.;
  * *currentCount* - the current count of entities;
  * *limit* - the limit on number of entities;    
  * *percents* - the percent from the notification rule configuration;
  * *tenantId* - id of the tenant;
  * *tenantName* - name of the tenant.

##### API usage limit

The system administrator uses the API usage limit template to notify tenants when they hit a specific API limit.
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *feature* - API feature for which the limit is applied; one of: 'Device API', 'Telemetry persistence', 'Rule Engine execution', 'JavaScript functions execution', 'Email messages', 'SMS messages', 'Alarms';
  * *status* - one of: 'enabled', 'warning', 'disabled';
  * *unitLabel* - name of the limited unit; one of: 'message', 'data point', 'Rule Engine execution', 'JavaScript execution', 'email message', 'SMS message', 'alarm';
  * *limit* - the limit on used feature units;
  * *currentValue* - current number of used units;
  * *tenantId* - id of the tenant;
  * *tenantName* - name of the tenant.

##### New platform version

The system administrator uses the new platform version template to notify tenants of the release of a new version of the Thingsboard platform.
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *latestVersion* - the latest platform version available;
  * *latestVersionReleaseNotesUrl* - release notes link for latest version;
  * *upgradeInstructionsUrl* - upgrade instructions link for latest version;
  * *currentVersion* - the current platform version;
  * *currentVersionReleaseNotesUrl* - release notes link for current version.
{% endunless %}

### Rules

Notification rules allow you to automate the delivery of notifications on a particular trigger event. 
For example, rule automatically sends a notification when a new alarm is created.
The trigger event types are tightly coupled to the notification template types. Let's review them below:

##### Alarm

The alarm rule sends notifications on specific events: alarm is created, acknowledged, cleared, severity updated, or alarm deleted.

To create a new alarm rule, follow these steps:

 - Сlick the “Add rule” button in the upper right corner of the Rules tab;
 - In the new pop-up window, enter the rule`s name;
 - Select trigger - Alarm;
 - Then, select Template from the list or [create your own](#templates);
 - Build an escalation chain. The escalation chain allows you to configure multiple recipients of the notification. 
The first recipient group will receive the notification immediately. 
Other recipient groups will receive the notification after a configurable delay. 
You may also configure alarm statuses, which will stop the escalation chain. Click "Next";

{% capture difference %}
**Important!**
<br>
If the first recipient of the notification cleared the alarm before the second recipient received the notification, the second and subsequent recipients will not receive the alarm notification.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

 - The alarm trigger filter allows you to filter events based on alarm type and severity;
 - You may also select the event types that will trigger notification. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-alarm" %}

*Default rule*

The default rule 'Alarm' will notify all tenant administrators and customer users when any alarm is created, acknowledged, cleared, or severity changed.

Template subject: `Alarm '${alarmType}' - ${action:lowerCase}`

Template message: `${alarmOriginatorEntityType:capitalize} '${alarmOriginatorName}'`

See [Alarm](#alarm) template for a list of the available template parameters.

##### Device activity

The device inactivity rule sends notifications when device becomes inactive or active.

To create a new device activity rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - Device activity;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to configure specific devices or device types;
- You may also select the event types that will trigger notification. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-device-activity" %}

*Default rule*

The default rule 'Device become inactive' will notify all tenant administrators and customer users when any device becomes inactive.

Template subject: `Device '${deviceName}' inactive`

Template message: `Device '${deviceName}' with type '${deviceType}' became inactive`

See [Device activity](#device-activity) template for a list of the available template parameters.

##### Entity action

The entity action rule sends notifications when entity is created, updated or deleted.

To create a new entity action rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - Entity action;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter events by entity type;
- You may also select the event types that will trigger notification. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-entity-action" %}

*Default rule*

The default rule 'Device created or deleted' will notify all tenant administrators and customer users when any device is created or deleted.

Template subject: `${entityType} was ${actionType}`

Template message: `${entityType} '${entityName}' was ${actionType} by user ${originatorUserName}`

See [Entity action](#entity-action) template for a list of the available template parameters.

##### Alarm comment

The alarm comment rule sends notifications when alarm is commented.

To create a new alarm comment rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - Alarm comment;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter alarms by type, severity, and status;
- You may also select to notify only on user comments and skip system comments. Optionally, you may notify users on comments update. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-alarm-comment" %}

*Default rule*

The default rule 'Comment on active alarm' will notify all tenant administrators and customer users when any active alarm receives new comment.

Template subject: `Comment on '${alarmType}' alarm`

Template message: `${userName} ${action} comment: ${comment}`

See [Alarm comment](#alarm-comment) template for a list of the available template parameters.

##### Alarm assignment

The alarm assignment rule sends notifications when alarm is assigned or unassigned.

To create a new alarm assignment rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - Alarm assignment;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter alarms by type, severity, and status;
- You may also select the event types that will trigger notification: assign or unassign. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-alarm-assignment" %}

*Default rule*

The default rule 'Assignment of the alarm' will notify all tenant administrators and customer users when any alarm is assigned.

Template subject: `Alarm '${alarmType}' (${alarmSeverity}) was assigned to user`

Template message: `${userName} assigned alarm on ${alarmOriginatorEntityType} '${alarmOriginatorName}' to ${assigneeEmail}`

See [Alarm assignment](#alarm-assignment) template for a list of the available template parameters.

##### Rule engine lifecycle event

The rule engine lifecycle event rule sends notifications about the rule chain or rule node lifecycle events. 
For example, notify when a new rule node fails to start (typically due to misconfiguration).

*Trigger settings*

The trigger filter allows you to filter based on rule chains and events: Started, Updated, Stopped.

To create a new Rule engine lifecycle event rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - Rule engine lifecycle event;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter alarms by type, severity, and status;
- You may also select the event types that will trigger notification: assign or unassign. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-engine-lifecycle-event" %}

*Default rule*

The default rule 'Rule node initialization failure' will notify all tenant administrators and customer users when any rule node initialization fails.

Template subject: `${componentType} '${componentName}' failed to ${action}`

Template message: `Rule chain '${ruleChainName}' - ${action} failure:<br>${error}`

See [Rule engine lifecycle event](#rule-engine-lifecycle-event) template for a list of the available template parameters.

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
##### Integration lifecycle event

The integration lifecycle event rule sends notifications about the integration lifecycle events.
For example, notify when a integration fails to start (typically due to misconfiguration).

*Trigger settings*

The trigger filter allows you to filter based on integration: Started, Updated, Stopped.

To create a new integration lifecycle event rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - Integration lifecycle event;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter alarms by integartion type;
- You may also select the event types that will trigger notification: started, updated, stopped. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-integration-lifecycle-event" %}

*Default rule*

The default rule 'Integration initialization failure' will notify all tenant administrators and customer users when any integration initialization fails.

Template subject: `${integrationType} '${integrationName}' failed to ${action}`

Template message: `${integrationType} integration '${integrationName}' - ${action} failure: ${error}`

See [Integration lifecycle event](#integration-lifecycle-event) template for a list of the available template parameters.
{% endif %}

{% unless docsPrefix == 'paas/' %}
##### Entities limit

The system administrator uses the entities limit rule to notify tenants that they will reach the limit on the number of entities (devices or assets). 
For example, notify when tenant has reached 80% of the 100 devices allowed. The max number of devices is extracted from the tenant profile. 

To create a new entities limit rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - Entities limit;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter entities by type and setup threshold. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-entities-limit" %}

*Default rule*

The default rule 'Entities Limit' will notify affected tenant administrators and system administrators when number of devices is above 80% of allowed.

Template subject: `${entityType}s limit will be reached soon`

Template message: `${entityType}s usage: ${currentCount}/${limit} (${percents}%)`

See [Entities limit](#entities-limit) template for a list of the available template parameters.

##### API usage limit

The system administrator uses the API usage limit rule to notify tenants that they have reached the limit of used units.

For example, notify when tenant has reached 80% of the 100 alarms . The max number of alarms is extracted from the tenant profile.

To create a new API usage limit rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - API usage limit;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter entities by API features;
- You may also select the event types that will trigger notification: enable, warning, disabled. Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-api-usage-limit" %}

*Default rule*

The default rule 'API usage limit' will notify affected tenant administrators and system administrators when number of units is above 80% of allowed.

Template subject: `${feature}s limit will be reached soon`

Template message: `${feature} feature - ${status:upperCase} (usage: ${currentValue} out of ${limit} ${unitLabel}s)`

See [API usage limit](#api-usage-limit) template for a list of the available template parameters.

##### New platform version

The system administrator uses the "New platform version" rule to notify tenants about the release of a new version of the Thingsboard platform.

To create a new platform version rule, follow these steps:

- Сlick the “Add rule” button in the upper right corner of the Rules tab;
- In the new pop-up window, enter the rule`s name;
- Select trigger - New platform version;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- Optionally enter a description, then click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-new-platform-version" %}

*Default rule*

The default rule 'New platform version' will notify affected tenant administrators and system administrators when a new version of the Thingsboard platform is released.

Template subject: `New version ${latestVersion} is available`

Template message: `Current version is ${currentVersion}. You can upgrade your Thingsboard instance to version ${latestVersion}. `

See [New platform version](#new-platform-version) template for a list of the available template parameters.
{% endunless %}
