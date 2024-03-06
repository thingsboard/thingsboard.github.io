* TOC
{:toc}

## Activity reporting strategies

# General
- What are activity reporting strategies?
- What is their purpose? What is the design goal behind them? What is their intended usage?
- Main concepts: strategies itself and reporting period
- What does it mean to "report" an activity?
- What is an "activity"?

TODO: activity events in existing doc and activity events in the new doc are different things but have same names.
This will create confusion.

# Concepts

- **Activity reporting period**: time is divided into a chunks of a configurable (link to configuration section?) duration. 
Each chunk is called activity reporting period. For brevity, we will call it just reporting period.
(Picture with timeline and a "marks" showing that time is split into chunks)
- **First event**: first activity event received during reporting period.
- **Last event**: last activity event received during reporting period.
(Picture with reporting period marks and three events: first event, middle event (or several) and last event)

# Activity reporting strategies

- **ALL**: all events are reported to Device State service immediately.
- **FIRST**: only first event is reported to Device State service. Event is reported immediately after it happens (arrives?).
- **LAST**: only last event is reported to Device State service. Event is reported when reporting period ends.
- **FIRST_AND_LAST**: both first event and last event are reported to Device State service. 
First event is reported immediately, last event is reported when reporting period ends.

# Configuration
- thingsboard.yml config

## Feature Overview

ThingsBoard Device State service is responsible for monitoring the device connectivity state and triggering the device connectivity events 
that are pushed to the [**Rule Engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/). As a platform user, you are able to define how to react to these events. 

Supported events are:

 - **Connect event** - triggered when a device connects to ThingsBoard. Relevant in the case of session-based transports like MQTT.
 It is also triggered for HTTP transport, but in this case, it will be triggered on each HTTP request;
 - **Disconnect event** - triggered when the device disconnects from ThingsBoard. Relevant in the case of session-based transports like MQTT. 
 It is also triggered for HTTP transport, but in this case, it will be triggered on each HTTP request;
 - **Activity event** - triggered when a device pushes telemetry, attribute update, or RPC command;
 - **Inactivity event** - triggered when a device was inactive for a certain period of time. 
 Please note that this event may be triggered even without disconnect event from the device. Typically, means that there were no activity events triggered for a while.

Device State service is responsible for maintaining the following [server-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) attributes:

 - **active** - represents current device state, either true or false;
 - **lastConnectTime** - represents the last time device was connected to ThingsBoard, number of milliseconds since January 1, 1970, 00:00:00 GMT;
 - **lastDisconnectTime** - represents the last time device was disconnected from ThingsBoard, number of milliseconds since January 1, 1970, 00:00:00 GMT;
 - **lastActivityTime** - represents the last time device pushed telemetry, attribute update, or RPC command, number of milliseconds since January 1, 1970, 00:00:00 GMT;
 - **inactivityAlarmTime** - represents the last time inactivity event was triggered, number of milliseconds since January 1, 1970, 00:00:00 GMT.

## Configuration

Device State service uses a global configuration parameter for inactivity timeout. 
This parameter is defined in **thingsboard.yml** (state.defaultInactivityTimeoutInSec) and by default it is set to 600 seconds (10 minutes).
A user can overwrite this parameter for an individual device by setting the "inactivityTimeout" server-side attribute (value is set in milliseconds).

Device State service uses a global configuration parameter to detect inactivity events.
This parameter is defined in **thingsboard.yml** (state.defaultStateCheckIntervalInSec) and by default it is set to 60 seconds (1 minute).

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}

