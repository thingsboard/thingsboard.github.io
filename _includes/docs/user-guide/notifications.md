* TOC 
{:toc}

## Overview

ThingsBoard Notification Center allows you to send notifications to the end-users. 
You may send notifications manually, via REST API, or based on a specific trigger event.
Each notification may be delivered using multiple delivery methods: WebSocket, SMS, email, or [Slack](https://slack.com/). 
You may also schedule delivery of the notification for a specific time. 

Let's review the key components of the notification center below. 

### Inbox

The "Inbox" tab displays unread notifications by default. 
You may use the inbox table to browse the notifications and mark them as read. 
You may also switch the view to browse all notifications.

TODO: image

### Sent 

The "Sent" tab displays the status of sent notifications. 
You may use the "Notify again" button to copy an existing notification and send it again.

Also, you may investigate issues with the delivery of certain notifications here. 
In case of delivery issues, the corresponding notification row will have information about the recipient who missed the update. 
This typically happens when the email address is wrong, or the phone number is not configured.

TODO: image

### Recipients

The "Recipients" tab displays the list of notification recipients. You may create and delete notification recipients here.

There are two types of recipients: platform users and Slack entities. Recipients group defines either a set of platform users or set of Slack entities.

TODO: image

###### Platform users

There are several user filters that help you to define a recipient group. The scope of the filter depends on the role of the user that creates the recipient group.

For **System Administrator**:

 * *All users* - all users of the platform. Includes all tenant administrators and all customer users;

TODO: image

 * *Tenant administrators* - set of tenant administrator users that are selected based on the list of tenants or their tenant profiles.

TODO: image

For **Tenant Administrator**:

 * *All users* - all users of the current tenant. Includes the tenant administrator and all customer users;

TODO: image

 * *Tenant administrators* - all administrators of the current tenant;

TODO: image

 * *Customer users* - all users that belong to customers of the current tenant;

TODO: image

 * *User list* - selected users;

TODO: image

 * *Users of the entity owner* - all users that belong to the entity owner. For example, users of the customer that owns the device or tenant administrators if the device is not assigned to the customer;

TODO: image

 * *Affected user* - The user that is affected by the notification trigger event. For example, the person that is assigned to investigate the alarm event;

###### Slack entities

As a platform user, you may send notifications as a Slack message to a list of Users or Channels. Both public and private channels are supported. 

**Note:** Tenant administrator must configure a Slack API [token](https://api.slack.com/authentication/token-types) in the *System Settings -> Notification* tab.

### Templates

The "Templates" tab displays the list of notification templates. You may create, copy and delete notification templates here.

TODO: image

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

##### General template

The general template is used to send generic notifications. For example, system maintenance or important announcement. 
Available template parameters:

  * *recipientEmail* - email of the recipient;
  * *recipientFirstName* - first name of the recipient;
  * *recipientLastName* - last name of the recipient;

##### Alarm template

The alarm template is used to send notification about alarms. For example, alarm creation or acknowledgment. 
Available template parameters contain all parameters available for the [General](#general-template) template, plus:

  * *alarmType* - alarm type;
  * *action* - one of: 'created', 'severity changed', 'acknowledged', 'cleared', 'deleted';
  * *alarmId* - the alarm id as uuid string;
  * *alarmSeverity* - alarm severity (lower case);
  * *alarmStatus* - the alarm status;
  * *alarmOriginatorEntityType* - the entity type of the alarm originator, e.g. 'Device';
  * *alarmOriginatorName* - the name of the alarm originator, e.g. 'Sensor T1';
  * *alarmOriginatorId* - the alarm originator entity id as uuid string;

##### Alarm comment

The alarm comment template is used to send notification about comments on alarms. 
Available template parameters contain all parameters available for the [Alarm](#alarm-template) template, plus:

  * *comment* - text of the comment;
  * *userName* - name of the user who made the comment;
  * *action* - one of: 'added', 'updated';

##### Alarm assignment

The alarm assignment template is used to send notification when alarm is assigned or unassigned. 
Available template parameters contain all parameters available for the [Alarm](#alarm-template) template, plus:

  * *assigneeEmail* - email of the assignee;
  * *assigneeFirstName* - first name of the assignee;    
  * *assigneeLastName* - last name of the assignee;
  * *assigneeId* - the id of the assignee as uuid string;
  * *action* - one of: 'assigned', 'unassigned';

##### Device activity

The alarm template is used to send notification about inactive devices. 
Available template parameters contain all parameters available for the [General](#general-template) template, plus:

  * *deviceId* - the device id as uuid string;
  * *deviceName* - the device name;    
  * *deviceLabel* - the device label;    
  * *deviceType* - the device type;
  * *actionType* - one of: 'inactive', 'active';    

##### Entity action

The alarm template is used to send notification about entity action: creation, update or deletion. 
Available template parameters contain all parameters available for the [General](#general-template) template, plus:

  * *entityType* - the entity type, e.g. 'Device';
  * *entityId* - the entity id as uuid string;
  * *entityName* - the name of the entity;
  * *actionType* - one of: 'added', 'updated', 'deleted';    
  * *originatorUserId* - the user who made the action;    
  * *originatorUserName* - the user who made the action;    // WHY no EMAIL, first, last, entityLabel (if applicable)

##### Rule engine lifecycle event

The alarm template is used to send notification about rule chain or rule node lifecycle events. For example, notify when new rule node fails to start. 
Available template parameters contain all parameters available for the [General](#general-template) template, plus:

  * *componentType* - one of: 'rule chain', 'rule node';
  * *componentId* - the component id as uuid string;
  * *componentName* - the rule chain or rule node name;    
  * *ruleChainId* - the rule chain id as uuid string;
  * *ruleChainName* - the rule chain name;
  * *eventType* - one of: 'started', 'updated', 'stopped';
  * *action* - one of: 'start', 'update', 'stop';    
  * *error* - the error text;

##### Entity count limit

The system administrator uses the entity count limit template to notify tenants that they will reach the limit on the number of entities (devices or assets).
Available template parameters contain all parameters available for the [General](#general-template) template, plus:

  * *entityType* - one of: 'Device', 'Asset', 'User', etc.;
  * *currentCount* - the current count of entities;
  * *limit* - the limit on number of entities;    
  * *percents* - the percent from the notification rule configuration;

### Rules

Notification rules allow you to automate the delivery of notifications on a particular trigger event. 
For example, rule automatically sends a notification when a new alarm is created.
The trigger event types are tightly coupled to the notification template types. Let's review them below:

##### Alarm trigger

The alarm rule sends notifications on specific events: alarm is created, acknowledged, cleared, severity updated, or alarm deleted.

*Escalation chain*

The escalation chain allows you to configure multiple recipients of the notification. 
The first recipient group will receive the notification immediately. 
Other recipient groups will receive the notification after a configurable delay. 
You may also configure alarm statuses, which will stop the escalation chain.

*Trigger settings*

The alarm trigger filter allows you to filter events based on alarm type and severity. 
You may also select the event types that will trigger notification.

*Default rule*

The default rule 'Alarm' will notify all tenant administrators and customer users when any alarm is created, acknowledged, cleared, or severity changed.

Template subject: `Alarm '${alarmType}' - ${action:lowerCase}`

Template message: `${alarmOriginatorEntityType:capitalize} '${alarmOriginatorName}'`

See [Alarm](#alarm-template) template for a list of the available template parameters.

##### Alarm comment

The alarm comment rule sends notifications when alarm is commented.

*Trigger settings*

The trigger filter allows you to filter alarms by type, severity, and status. 
You may also select to notify only on user comments and skip system comments. Optionally, you may notify users on comments update.

*Default rule*

The default rule 'Comment on active alarm' will notify all tenant administrators and customer users when any active alarm receives new comment.

Template subject: `Comment on '${alarmType}' alarm`

Template message: `${userName} ${action} comment: ${comment}`

See [Alarm comment](#alarm-comment) template for a list of the available template parameters.

##### Alarm assignment

The alarm assignment rule sends notifications when alarm is assigned or unassigned.

*Trigger settings*

The trigger filter allows you to filter alarms by type, severity, and status. 
You may also select the event types that will trigger notification: assign or unassign.

*Default rule*

The default rule 'Assignment of the alarm' will notify all tenant administrators and customer users when any alarm is assigned.

Template subject: `Alarm '${alarmType}' (${alarmSeverity}) was assigned to user`

Template message: `${userName} assigned alarm on ${alarmOriginatorEntityType} '${alarmOriginatorName}' to ${assigneeEmail}`

See [Alarm assignment](#alarm-assignment) template for a list of the available template parameters.

##### Device activity

The device inactivity rule sends notifications when device becomes inactive or active.

*Trigger settings*

The trigger filter allows you to configure specific devices or device types. 
You may also select the event types that will trigger notification.

*Default rule*

The default rule 'Device become inactive' will notify all tenant administrators and customer users when any device becomes inactive.

Template subject: `Device '${deviceName}' inactive`

Template message: `Device '${deviceName}' with type '${deviceType}' became inactive`

See [Device activity](#device-activity) template for a list of the available template parameters.

##### Entity action

The entity action rule sends notifications when entity is created, updated or deleted.

*Trigger settings*

The trigger filter allows you to filter events by entity type. 
You may also select the event types that will trigger notification.

*Default rule*

The default rule 'Device created or deleted' will notify all tenant administrators and customer users when any device is created or deleted.

Template subject: `${entityType} was ${actionType}`

Template message: `${entityType} '${entityName}' was ${actionType} by user ${originatorUserName}`

See [Entity action](#entity-action) template for a list of the available template parameters.

##### Rule engine lifecycle event

The rule engine lifecycle event rule sends notifications about the rule chain or rule node lifecycle events. 
For example, notify when a new rule node fails to start (typically due to misconfiguration).

*Trigger settings*

The trigger filter allows you to filter based on rule chains and events: Started, Updated, Stopped.

*Default rule*

The default rule 'Rule node initialization failure' will notify all tenant administrators and customer users when any rule node initialization fails.

Template subject: `${componentType} '${componentName}' failed to ${action}`

Template message: `Rule chain '${ruleChainName}' - ${action} failure:<br/>${error}`

See [Rule engine lifecycle event](#rule-engine-lifecycle-event) template for a list of the available template parameters.

##### Entity count limit

The system administrator uses the entity count limit rule to notify tenants that they will reach the limit on the number of entities (devices or assets). 
For example, notify when tenant has reached 80% of the 100 devices allowed. The max number of devices is extracted from the tenant profile. 

*Trigger settings*

The trigger filter allows you to filter entities by type and setup threshold.

*Default rule*

The default rule 'Entities Limit' will notify affected tenant administrators and system administrators when number of devices is above 80% of allowed.

Template subject: `${entityType}s limit will be reached soon`

Template message: `${entityType}s usage: ${currentCount}/${limit} (${percents}%)`

See [Entity count limit](#entity-count-limit) template for a list of the available template parameters.
