* TOC 
{:toc}

The ThingsBoard Notification center is a comprehensive tool for sending, managing, and automating notifications within the platform. It allows for a variety of notification methods, including web, email, mobile application, SMS, and integrations with Slack and Microsoft Teams. 
Users can manually send notifications, automate them through REST API, or set triggers based on events within the system.
Users may also schedule delivery of the notification for a particular time.

The Notification center is accessible through the sidebar menu and includes options for [sending notifications](#send-notification), viewing [inbox](#inbox) and [sent](#sent) messages, [managing recipients](#recipients), [creating templates](#templates), and [setting up rules](#rules) for automated notifications.

{% if docsPrefix == null %}
![image](/images/user-guide/notifications/notification-center-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/notifications/notification-center-1-pe.png)
{% endif %}

Let's look at each of the key components of the notification center below.

## Notification options available in ThingsBoard

Each notification may be delivered using multiple delivery methods: Web, Mobile app, SMS, Email, [Slack](https://slack.com/) or [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software/).

- **Web**. The notification will be sent to the Web UI in Thingsboard;
- **Mobile app**. The notification will be sent to the [ThingsBoard Mobile Application](/docs/{{docsPrefix}}mobile/);
- **SMS**. The notification is sent to the user's phone. To send notifications via SMS, a system administrator should set up the [SMS provider](/docs/user-guide/ui/sms-provider-settings/) properly;
- **Email**. With this approach, the user receives a notification by Email. To send notifications via Email, a tenant administrator [outgoing mail server](/docs/user-guide/ui/mail-settings/) should be configured;
- **Slack**. Notifications will send as a Slack message to the list of Users or Channels. To send notifications via Slack, a tenant administrator must configure a Slack API [token](https://api.slack.com/authentication/token-types) in the "Settings" -> "Notifications" tab. Learn more about how to configure Slack settings in Thingsboard [here](/docs/{{docsPrefix}}user-guide/ui/slack-settings/).
- **Microsoft Teams**. Notifications will send as a Microsoft Teams message to the list of channels. To send notifications via Microsoft Teams, a tenant administrator must get **webhook URL** for a needed channel using this [guide](/docs/{{docsPrefix}}user-guide/ui/microsoft-teams-settings/).

## Send notification

To send a notification manually, follow these steps:

{% include images-gallery.html imageCollection="notification-center-send-notification" showListImageTitles="true" %}

## Inbox

The "Inbox" tab displays unread notifications by default. 
You may use the inbox table to browse the notifications and mark them as read. 
You may also switch the view to browse all notifications.

{% include images-gallery.html imageCollection="notification-center-inbox" %}

You can also view incoming notifications by clicking on the bell icon in the top right corner of the screen. 
The number next to the icon indicates the number of unread messages. 
Here you can read the notification, mark it as read, or take action by clicking the action button.

{% include images-gallery.html imageCollection="notification-center-inbox-bell-icon" %}

## Sent 

The "Sent" tab displays sent notifications and their status.
You can use the "Notify again" button to send notification again. You can also delete notifications by clicking the "delete" icon.

{% include images-gallery.html imageCollection="notification-center-sent" %}

Also, you may investigate issues with the delivery of certain notifications here. 
In case of delivery issues, the corresponding notification row will have information about the recipient who missed the update. 
This typically happens when the email address is wrong, or the phone number is not configured.

If you decide to delete an outgoing message, it will also be deleted for all recipients. This only applies to the Web delivery method.

## Recipients

The "Recipients" tab displays the list of notification recipients. Here you can create and delete notification recipients here.

{% include images-gallery.html imageCollection="notification-center-recipients" %}

##### Add new recipient

To add notification recipients, follow these steps:

 - Click the "Add recipients" button in the upper right corner of the "Recipients" tab;
 - In the new window, enter the name of the notification recipients;
 - Select one of the three types of recipients: platform users, Microsoft Teams, or Slack entities;
 - In the "User filter" list, select who you want to send notifications to;
 - Click "Add";

{% include images-gallery.html imageCollection="notification-center-recipients-1" %}

You can also add a new recipient at the stage of creating a new notification:

 - Start creating a new notification. In the "New notification" window (in the "Recipients" field) click the "Create new" button;
 - Enter the name of the notification recipients;
 - Select one of the three types of recipients: platform users, Microsoft Teams or Slack entities;
 - In the "User filter" list, select who you want to send notifications to;
 - Click "Add".

{% include images-gallery.html imageCollection="notification-center-recipients-2" %}

##### Platform users

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

##### Slack entities

As a platform user, you may send notifications as a Slack message to a list of Users or Channels. Both public and private channels and direct messages are supported.

{% include images-gallery.html imageCollection="notification-center-recipients-slack" %}

##### Microsoft Teams

As a platform user, you may send notifications as a Microsoft Teams message to a list of сhannels.

To send notifications via Microsoft Teams, get your **webhook URL** for a needed channel using this [guide](/docs/{{docsPrefix}}user-guide/ui/microsoft-teams-settings/).

Then add new notification recipients group.

{% include images-gallery.html imageCollection="notification-center-recipients-microsoft-teams" %}

## Templates

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

#### Add new template

To add a new template, follow these steps:

- Click the "Add template" button in the upper right corner of the "Templates" tab;
- In the new window, enter the notification template name;
- Select a template type from the drop-down list;
- Next, select one or more delivery methods. In this example, let’s consider the Web delivery method. Click "Next";
- Enter the subject and text of the message;
- Optionally, you can display the icon in the notification and set its color. Also, you can use the action button in the notification; 
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-templates" %}

#### General

The general template is used to send generic notifications. For example, system maintenance or important announcement. 
Available template parameters:

  * *recipientTitle* - title of the recipient (first and last name if specified, email otherwise);
  * *recipientEmail* - email of the recipient;
  * *recipientFirstName* - first name of the recipient;
  * *recipientLastName* - last name of the recipient.

#### Alarm

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

#### Device activity

The device activity template is used to send notification about inactive devices.
Available template parameters contain all parameters available for the [General](#general) template, plus:

* *deviceId* - the device id as uuid string;
* *deviceName* - the device name;
* *deviceLabel* - the device label;
* *deviceType* - the device type;
* *eventType* - one of: 'inactive', 'active'.

#### Entity action

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

#### Alarm comment

The alarm comment template is used to send notification about comments on alarms.
Available template parameters contain all parameters available for the [Alarm](#alarm) template, plus:

* *comment* - text of the comment;
* *action* - one of: 'added', 'updated';
* *userEmail* - email of the user who made the action;
* *userFirstName* - first name of the user who made the action;
* *userLastName* - last name of the user who made the action.

#### Alarm assignment

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

#### Rule engine lifecycle event

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

#### Rule node

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
#### Integration lifecycle event

The integration lifecycle event template is used to send notification about integration lifecycle events. For example, notify when new integration fails to start.
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *integrationType* - type of the integration;
  * *integrationName* - name of the integration;
  * *integrationId* - id of the integration as uuid string;
  * *eventType* - one of: 'started', 'updated', 'stopped';
  * *action* - one of: 'start', 'update', 'stop';
  * *error* - the error text.
{% endif %}
 
#### Edge connection

The Edge connection template is used to send notifications about changes in the connection status between ThingsBoard and the Edge.

Available template parameters:

* *edgeId* - the edge id as uuid string;
* *edgeName* - the name of the edge;
* *eventType* - the string representation of the connectivity status: connected or disconnected.

#### Edge communication failure

The Edge communication failure template is used to send notifications about communication failures occur.

Available template parameters:

* *edgeId* - the edge id as uuid string;
* *edgeName* - the name of the edge;
* *failureMsg* - the string representation of the failure, occurred on the Edge.

{% unless docsPrefix == 'paas/' %}
#### Entities limit

The system administrator uses the entities limit template to notify tenants that they will reach the limit on the number of entities (devices, assets, etc.).
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *entityType* - one of: 'Device', 'Asset', 'User', etc.;
  * *currentCount* - the current count of entities;
  * *limit* - the limit on number of entities;    
  * *percents* - the percent from the notification rule configuration;
  * *tenantId* - id of the tenant;
  * *tenantName* - name of the tenant.

#### API usage limit

The system administrator uses the API usage limit template to notify tenants when they hit a specific API limit.
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *feature* - API feature for which the limit is applied; one of: 'Device API', 'Telemetry persistence', 'Rule Engine execution', 'JavaScript functions execution', 'Email messages', 'SMS messages', 'Alarms';
  * *status* - one of: 'enabled', 'warning', 'disabled';
  * *unitLabel* - name of the limited unit; one of: 'message', 'data point', 'Rule Engine execution', 'JavaScript execution', 'email message', 'SMS message', 'alarm';
  * *limit* - the limit on used feature units;
  * *currentValue* - current number of used units;
  * *tenantId* - id of the tenant;
  * *tenantName* - name of the tenant.

#### New platform version

The system administrator uses the new platform version template to notify tenants of the release of a new version of the Thingsboard platform.
Available template parameters contain all parameters available for the [General](#general) template, plus:

  * *latestVersion* - the latest platform version available;
  * *latestVersionReleaseNotesUrl* - release notes link for latest version;
  * *upgradeInstructionsUrl* - upgrade instructions link for latest version;
  * *currentVersion* - the current platform version;
  * *currentVersionReleaseNotesUrl* - release notes link for current version.
{% endunless %}

## Rules

Notification rules allow you to automate the delivery of notifications on a particular trigger event. 
For example, rule automatically sends a notification when a new alarm is created.
The trigger event types are tightly coupled to the notification template types. Let's review them below:

{% include images-gallery.html imageCollection="notification-center-rules" %}

#### Alarm

The "Alarm" rule sends notifications on specific events: alarm is created, acknowledged, cleared, severity updated, or alarm deleted.

To create a new alarm rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
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
 - You may also select the event types that will trigger notification;
 - Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-alarm" %}

*Default rule*

The default rule 'New alarm' will notify tenant administrators when an alarm is created.

Template subject: `New alarm '${alarmType}'`

Template message: `Severity: ${alarmSeverity}, originator: ${alarmOriginatorEntityType} '${alarmOriginatorName}'`

See [Alarm](#alarm) template for a list of the available template parameters.

#### Device activity

The "Device activity" rule sends notifications when device becomes active or inactive.

To create a new device activity rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Device activity;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to configure specific devices or device types;
- You may also select the event types that will trigger notification;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-device-activity" %}

*Default rule*

The default rule 'Device activity status change' will notify tenant admins when any device changes its activity state

Template subject: `Device '${deviceName}' became ${eventType}`

Template message: `Device '${deviceName}' of type '${deviceType}' is now ${eventType}`

See [Device activity](#device-activity) template for a list of the available template parameters.

#### Entity action

The "Entity action" rule sends notifications when entity is created, updated or deleted.

To create a new entity action rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Entity action;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter events by entity type;
- You may also select the event types that will trigger notification;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-entity-action" %}

*Default rule*

The default rule 'Device created' will notify tenant administrators when device is created.

Template subject: `${entityType} was ${actionType}`

Template message: `${entityType} '${entityName}' was ${actionType} by user ${userEmail}`

See [Entity action](#entity-action) template for a list of the available template parameters.

#### Alarm comment

The "Alarm comment" rule sends notifications when alarm is commented.

To create a new alarm comment rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Alarm comment;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter alarms by type, severity, and status;
- You may also select to notify only on user comments and skip system comments. Optionally, you may notify users on comments update;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-alarm-comment" %}

*Default rule*

The default rule 'Comment on active alarm' will notify tenant administrators when comment is added by user on active alarm.

Template subject: `Comment on '${alarmType}' alarm`

Template message: `${userEmail} ${action} comment: ${comment}`

See [Alarm comment](#alarm-comment) template for a list of the available template parameters.

#### Alarm assignment

The "Alarm assignment" rule sends notifications when alarm is assigned or unassigned.

To create a new alarm assignment rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Alarm assignment;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter alarms by type, severity, and status;
- You may also select the event types that will trigger notification: assign or unassign;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-alarm-assignment" %}

*Default rule*

The default rule 'Alarm assignment' will notify a user when any alarm was assigned to him.

Template subject: `Alarm '${alarmType}' (${alarmSeverity}) was assigned to user`

Template message: `${userEmail} assigned alarm on ${alarmOriginatorEntityType} '${alarmOriginatorName}' to ${assigneeEmail}`

See [Alarm assignment](#alarm-assignment) template for a list of the available template parameters.

#### Rule engine lifecycle event

The "Rule engine lifecycle event" rule sends notifications about the rule chain or rule node lifecycle events. 
For example, notify when a new rule node fails to start (typically due to misconfiguration).

Trigger settings: the trigger filter allows you to filter based on rule chains and events status: Started, Updated, Stopped.

To create a new Rule engine lifecycle event rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Rule engine lifecycle event;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter notifications by type, severity, and status;
- You may also select the event types that will trigger notification: assign or unassign;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-engine-lifecycle-event" %}

*Default rule*

The default rule 'Rule node initialization failure' will notify tenant administrators when any Rule chain or Rule node failed to start, update or stop.

Template subject: `${action:capitalize} failure in Rule chain '${ruleChainName}'`

Template message: `${componentType} '${componentName}' failed to ${action}`

See [Rule engine lifecycle event](#rule-engine-lifecycle-event) template for a list of the available template parameters.

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
#### Integration lifecycle event

The "Integration lifecycle event" rule sends notifications about the integration lifecycle events.
For example, notify when a integration fails to start (typically due to misconfiguration).

Trigger settings: the trigger filter allows you to filter based on integration status: Started, Updated, Stopped.

To create a new integration lifecycle event rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Integration lifecycle event;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter notifications by integration type;
- You may also select the event types that will trigger notification: started, updated, stopped;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-integration-lifecycle-event" %}

*Default rule*

The default rule 'Integration start failure' will notify tenant administrators when any integration fails to start.

Template subject: `${integrationType} integration start failure`

Template message: `Integration '${integrationName}' failed to start:<br/>${error}`

See [Integration lifecycle event](#integration-lifecycle-event) template for a list of the available template parameters.
{% endif %}

#### Edge connection

The "Edge connection" rule sends a notification to tenant admins when the connection status between TB and Edge changes.

Trigger settings: the trigger filter allows you to filter notifications based on Edge instance status: Connected, Disconnected.

To create a new Edge connection rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Edge connection;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter notifications by Edge instances. If the field is empty, the trigger will be applied to all edge instances;
- You may also select the event types that will trigger notification: connected, disconnected;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-edge-connection" %}

*Default rule*

The default rule 'Edge connection status change' will notify tenant administrators when connection status between TB and Edge changes.

Template subject: `Edge connection status change`

Template message: `Edge '${edgeName}' is now ${eventType}`

See [Edge connection](#edge-connection) template for a list of the available template parameters.

#### Edge communication failure

The "Edge communication failure" rule sends a notification to tenant admins when communication failures occur.

To create a new Edge communication failure rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Edge communication failure;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter notifications by Edge instances. If the field is empty, the trigger will be applied to all edge instances;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-edge-communication-failure" %}

*Default rule*

The default rule 'Edge communication failure' will notify tenant administrators when communication failures occur.

Template subject: `Edge '${edgeName}' communication failure occurred`

Template message: `Failure message: '${failureMsg}'`

See [Edge communication failure](#edge-communication-failure) template for a list of the available template parameters.

{% unless docsPrefix == 'paas/' %}
#### Entities limit

The system administrator uses the "Entities limit" rule to notify tenants that they will reach the limit on the number of entities (devices or assets). 
For example, notify when tenant has reached 80% of the 100 devices allowed. The max number of devices is extracted from the tenant profile. 

To create a new entities limit rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - Entities limit;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter entities by type and setup threshold;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-entities-limit" %}

*Default rule*

The default rule 'Entities Limit' will notify affected tenant administrators and system administrators when number of devices is above 80% of allowed.

Template subject: `${entityType}s limit will be reached soon`

Template message: `${entityType}s usage: ${currentCount}/${limit} (${percents}%)`

See [Entities limit](#entities-limit) template for a list of the available template parameters.

#### API usage limit

The system administrator uses the "API usage limit" rule to notify tenants that they have reached the limit of used units.

For example, notify when tenant has reached 80% of the 100 alarms . The max number of alarms is extracted from the tenant profile.

To create a new API usage limit rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
- Select trigger - API usage limit;
- Then, select template from the list or [create your own](#templates);
- Specify the recipient of the notification. Click "Next";
- The trigger filter allows you to filter entities by API features;
- You may also select the event types that will trigger notification: enable, warning, disabled;
- Click "Add".

{% include images-gallery.html imageCollection="notification-center-add-rule-api-usage-limit" %}

*Default rule*

The default rule 'API usage limit' will notify affected tenant administrators and system administrators when number of units is above 80% of allowed.

Template subject: `${feature}s limit will be reached soon`

Template message: `${feature} feature - ${status:upperCase} (usage: ${currentValue} out of ${limit} ${unitLabel}s)`

See [API usage limit](#api-usage-limit) template for a list of the available template parameters.

#### New platform version

The system administrator uses the "New platform version" rule to notify tenants about the release of a new version of the Thingsboard platform.

To create a new platform version rule, follow these steps:

- Click the "Add rule" button in the upper right corner of the "Rules" tab;
- In the new pop-up window, enter the rule&#39;s name;
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