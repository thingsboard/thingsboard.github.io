* TOC
{:toc}

## Device connectivity events

ThingsBoard Device State service is responsible for monitoring the device connectivity state and triggering the device connectivity events 
that are pushed to the [**Rule Engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/). As a platform user, you are able to define how to react to these events. 

Supported events are:

 - **Connect event** - triggered when a device connects to ThingsBoard. Relevant in the case of session-based transports like MQTT.
 It is also triggered for HTTP transport, but in this case, it will be triggered on each HTTP request;
 - **Disconnect event** - triggered when the device disconnects from ThingsBoard. Relevant in the case of session-based transports like MQTT. 
 It is also triggered for HTTP transport, but in this case, it will be triggered on each HTTP request;
 - **Activity event** - triggered when an inactive device becomes active by pushing telemetry, attribute update, or an RPC command.
 - **Inactivity event** - triggered when a device was inactive for a certain period of time. 
 Please note that this event may be triggered even without disconnect event from the device. Typically, means that there were no activity events triggered for a while.

Device State service is responsible for maintaining the following [server-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) attributes:

 - **active** - represents current device state, either true or false;
 - **lastConnectTime** - represents the last time device connected to ThingsBoard, number of milliseconds since January 1, 1970, 00:00:00 GMT;
 - **lastDisconnectTime** - represents the last time device disconnected from ThingsBoard, number of milliseconds since January 1, 1970, 00:00:00 GMT;
 - **lastActivityTime** - represents the last time device pushed telemetry, attribute update, or RPC command, number of milliseconds since January 1, 1970, 00:00:00 GMT;
 - **inactivityAlarmTime** - represents the last time inactivity event was triggered, number of milliseconds since January 1, 1970, 00:00:00 GMT.

## Controlling how a platform manages activities

Each device activity results in a number of actions performed by Device State service such as DB calls and internal bookkeeping.
This provides useful information about the current device state, but at the same time impacts performance.
For some use cases, precise monitoring of device state is not needed and users are willing to trade some degree of real time activity information for improved overall system performance.

To cover this need, a platform provides activity reporting strategies feature to control how often and how many activities are reported to the Device State service.
There are four strategies: **ALL**, **FIRST**, **LAST** and **FIRST_AND_LAST**. 
We will go into more detail about what each strategy does, but first let's understand key concepts to make the most of this feature.

### What is an activity?

An activity represents an event that indicates a device is actively performing actions or communicating with a platform.
Some examples of activities: 
- connecting to or disconnecting from a platform
- pushing time-series or attributes data via integrations or transports
- pushing RPC commands
- subscribing to attribute updates

### Reporting an activity

Reporting an activity means notifying Device State service that an activity has occurred. 
Device State service then updates attributes and triggers connectivity events based on a type of activity.

For example, if activity is a device connecting to a platform then Device State service, once activity is reported, 
will update **lastConnectTime**, **lastActivityTime** attributes and trigger **Connect event**.

### Activity reporting period

An activity reporting period is a set timeframe during which the system records activities.
Time is divided into consecutive periods; this means as soon as one period finishes, the next one begins.
The duration of a period is [configurable](#configuration).

The very first reporting period begins when ThingsBoard starts.
For example, if the system launches at the 15-second mark, that's also when the initial reporting period starts.
If period duration is set to 15 seconds, this period will end at 30 seconds and the next one would start.
This pattern repeats in a cycle while ThingsBoard is running.

![image](/images/user-guide/activity-reporting-periods.png)

### First and last activity events

- **First event**: first activity received during a reporting period.
- **Last event**: last activity received during a reporting period.

![image](/images/user-guide/first-and-last-activity-events.png)

> **Note**: If there is only one activity, then it is considered to be both first and last at the same time.

![image](/images/user-guide/one-event-both-first-and-last.png)

### Activity reporting strategies

- **ALL**: all activities are reported to Device State service immediately.

![image](/images/user-guide/activity-strategy-all.png)

- **FIRST**: only first activity is reported immediately to Device State service.

![image](/images/user-guide/activity-strategy-first.png)

> **Note**: Last activity will still be reported if there were no activities for a reporting period.

![image](/images/user-guide/first-strategy-reporting-last-event.png)

- **LAST**: only last activity is reported to Device State service. Activity is reported when reporting period ends.

![image](/images/user-guide/activity-strategy-last.png)

- **FIRST_AND_LAST**: both first and last activities are reported to Device State service.
  First activity is reported immediately, last activity is reported when reporting period ends.

![image](/images/user-guide/activity-strategy-first-and-last.png)

## Configuration

All configuration is done using global parameters defined in **thingsboard.yml** configuration file.

- **state.defaultInactivityTimeoutInSec** - period of time after which a device is considered inactive by Device State service if no activities were reported. Value is set in seconds.
Default value is 600 seconds (10 minutes). A user can overwrite this parameter for an individual device by setting the **inactivityTimeout** server-side attribute (value is set in milliseconds).

{% capture difference %}
**Please note:**
<br>
This parameter controls only how the core service detects a device’s connectivity status (the value is stored in **"active"** attribute of device); it does **not** affect the device session timeout.
The device session inactivity timeout is configured separately via the **transport.sessions.inactivity_timeout** property.

To avoid inconsistencies, we recommend keeping these two parameters in sync: the transport session inactivity timeout should be **greater than or equal to** the device inactivity timeout.

{% endcapture %}
{% include templates/info-banner.md content=difference %}

- **state.defaultStateCheckIntervalInSec** - interval for periodic checks of a device activity state, performed by a Device State service. Value is set in seconds. Default value is 60 seconds (1 minute).
- **state.telemetryTtl** - time-to-live value for activity telemetry data. Value is set in milliseconds. Default value is 0 milliseconds (meaning time-to-live mechanism is disabled).
{% if docsPrefix == 'pe/' %}
- **integrations.activity.reporting_strategy** - activity reporting strategy for integrations. Allowed values: ALL, FIRST, LAST, FIRST_AND_LAST. Default value is LAST.
- **integrations.activity.reporting_period** - duration of a reporting period for integrations. Value is set in milliseconds. Default value is 3000 milliseconds (3 seconds).
{% endif %}
- **transport.activity.reporting_strategy** - activity reporting strategy for transports. Allowed values: ALL, FIRST, LAST, FIRST_AND_LAST. Default value is LAST.
- **transport.sessions.report_timeout** - duration of a reporting period for transports. Value is set in milliseconds. Default value is 3000 milliseconds (3 seconds).
- **transport.sessions.inactivity_timeout** - defines how long the device transport session will be opened after the last message arrives from the device. Value is set in milliseconds. Default value is 60000 milliseconds (10 min).

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}

