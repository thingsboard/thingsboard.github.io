---
layout: docwithnav
title: Scheduler
description: Scheduler Guide

---

{% assign feature = "Scheduler" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

### Overview

ThingsBoard allows you to schedule various types of events using a flexible schedule configuration.

ThingsBoard Scheduler triggers configured scheduler events according to their schedule.

When a scheduler event is triggered, the [Rule Engine Message](/docs/user-guide/rule-engine-2-0/overview/#rule-engine-message) is generated
from the event configuration that has a similar structure to the Rule Engine Message.

The generated message is then forwarded to the [Rule Engine](/docs/user-guide/rule-engine-2-0/re-getting-started/) and processed starting from
the [Root Rule Chain](/docs/user-guide/rule-engine-2-0/overview/#rule-chain).

<br/>

![image](/images/user-guide/scheduler.svg)

### Scheduler Administration

The tenant administrator and customer users are able to configure **Scheduler events** in ThingsBoard.

![image](/images/user-guide/ui/scheduler.png)

The **Scheduler events** page displays the current configured scheduler events. It allows you to add, update or delete scheduler events.

You can view this page in two modes:

- the **List view** mode.
- the **Calendar view** mode.

You can switch between these view modes by clicking the corresponding icon displayed on the page header.

![image](/images/user-guide/ui/scheduler-view-buttons.png)

In the calendar view mode, scheduler events are displayed as labels according to their schedule.

![image](/images/user-guide/ui/scheduler-calendar-view.png)

By default, the calendar view is displayed as a **Month** view type.

You can switch to any of the other view types by selecting the desired view type from the **Calendar view type** dropdown list.

The following view types are available:

- *Month / Week / Day / List Year / List Month / List Week / List Day / Agenda Week / Agenda Day*

A new scheduler event can be created by clicking the `+` button displayed at the top right corner or by clicking any cell of the Calendar view.

#### Scheduler Event Dialog

A scheduler event edit dialog consists of two tabs:

- **Configuration** tab.
- **Schedule** tab.

![image](/images/user-guide/ui/scheduler-event-dialog.png)

The **Configuration** tab allows you to set the event type and the event configuration parameters according to the selected event type.
The Configuration of the scheduler event is described in the [Scheduler Event Types](#scheduler-event-types) section.

The **Schedule** tab allows you to set up the event schedule configuration.

![image](/images/user-guide/ui/scheduler-event-schedule.png)

The Schedule tab has the following parameter fields:

- **Timezone** - timezone in which this scheduler event should be processed.
- **Start Date/Time** - date/time when this scheduler event should be fired.
- **Repeat** - if this scheduler event is one time or it should be repeated.
- **Repeats** - repeat rule, can be either *Daily* or *Weekly*.
- **Repeat on** - applicable for *Weekly* repeat rule. Specifies weekdays when this scheduler event should be fired.
- **Ends on** - date until which this scheduler event should be repeated.


### Scheduler Event Types

In Configuration, the **Event type** field can be selected from the existing event types or you can create a custom one.

#### Custom Type

The custom type uses the default scheduler event configuration form according to the message structure.

![image](/images/user-guide/ui/scheduler-custom-event-type.png)

- **Originator** - the message originator, can be a *single entity* (ex. Device, Asset etc.) or a [*group of entities*](/docs/user-guide/groups/). If it is not specified, the scheduler event entity itself will be considered the originator.
- **Message type** - the message type according to the Rule Engine message types. It can be an [existing message type](/docs/user-guide/rule-engine-2-0/overview/#predefined-message-types) or a custom message type. If it is not specified, the scheduler event type will be considered the message type.
- **Message body** - the message body in JSON format.
- **Metadata** - a table of key-value pairs representing the message metadata fields.

#### Generate Report

It allows you to schedule reports generation supported by the [Reporting](/docs/user-guide/reporting/#generate-report-rule-chain) feature.

![image](/images/user-guide/ui/scheduler-generate-report-event-type-report-config.png)

![image](/images/user-guide/ui/scheduler-generate-report-event-type-email-config.png)

- **Report configuration**:
    - **Base URL** - the base URL of ThingsBoard UI that should be accessible by the Report Server.
    - **Dashboard** - the dashboard that will be used for report generation.
    - **Dashboard state parameter value** - used to specify the target dashboard state for report generation. It can be set automatically by clicking the rightmost button of the field to invoke the **Select dashboard state** dialog.
    - **Timezone** - the timezone in which the target dashboard will be presented in the report.
    - **Use dashboard timewindow** - if it is set, the timewindow configured in the target dashboard will be used during report generation.
    - **Timewindow** - the specific dashboard timewindow that will be used during report generation.
    - **Report name pattern** - the file name pattern of the generated report. It can contain a date-time pattern in the form of the `%d{date-time pattern}`. See the [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html) documentation for the date-time pattern details.
    - **Report type** - the report file type. It can be a *PDF \| PNG \| JPEG*.
    - **Use current user credentials** - if it is set, the credentials of the user who created this report configuration will be used to open the dashboard UI during report generation.
    - **Customer user credentials** - the target customer user whose credentials will be used to open the dashboard UI during report generation.
    - **Generate Test Report** button - it is used for testing purposes. It invokes the report generation process with the provided configuration. The resulting report file will be automatically downloaded if the report generation will be successful.

- **Send email** - if it is set, an email message enclosing the report file as an attachment will be sent.

- **Email configuration**:
    - **From** - from address
    - **To** - comma separated address list of recipients
    - **Cc** - comma separated address list
    - **Bcc** - comma separated address list
    - **Subject** - the email subject. It can contain a date-time pattern in the form of `%d{date-time pattern}` according to the [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html) documentation .
    - **Body** - the email body. It can contain a date-time pattern in the form of `%d{date-time pattern}` according to the [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html) documentation.

#### Update Attributes

It allows you to schedule an update of attributes for a single entity or a group of entities.

![image](/images/user-guide/ui/scheduler-update-attributes-event-type.png)

- **Target** - the target entity whose attributes should be updated. It can be a *single entity* (ex. Device, Asset etc.) or s [*group of entities*](/docs/user-guide/groups/).
- **Entity attributes scope** - the [scope](/docs/user-guide/attributes/#attribute-types) of the updated attributes. It can be selected if the device entity type is specified in the **Target**. It can be either **Server attributes** or **Shared attributes**. For all other entity types, the **Server attributes** scope is used.
- **Server / Shared attributes** - a table of key-value pairs representing attributes with values to update.

#### Send RPC Request to Device

Allows to schedule command ([RPC call](/docs/user-guide/rpc/#server-side-rpc-api)) to device or group of devices.

![image](/images/user-guide/ui/scheduler-send-rpc-request-event-type.png)

- **Target** - target device to which command should be sent, can be *Single device* or [*Group of devices*](/docs/user-guide/groups/).
- **Method** - RPC call method.
- **Params** - RPC call params in JSON representation.

### Scheduler Widget

ThingsBoard provides the ability to manage scheduler events via the **Scheduler events** or **Reports schedule** Widgets, which are parts of the **Scheduling** Widgets Bundle.

![image](/images/user-guide/ui/scheduler-scheduler-events-widget.png)

The **Scheduler events** widget has the same capabilities as the [**Scheduler events** page](#scheduler-administration).
Additionally, it can be customized with predefined forms for custom scheduler event types.
This can be achieved by configuring a list of **Custom event types** in the **Advanced** tab of the widget configuration.

![image](/images/user-guide/ui/scheduler-scheduler-events-widget-custom-types.png)

- **Display name** - display name of the custom event type.
- **Type name** - internal name of the custom event.
- **Display originator entity select** - whether to select the originator in the scheduler event configuration form.
- **Display message type select** - whether to select the message type in the scheduler event configuration form.
- **Display message metadata table** - whether to display the metadata table in the scheduler event configuration form.
- **Configuration HTML template** - HTML code to generate the custom event configuration form that can be used to edit the event configuration object.

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}
