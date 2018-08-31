---
layout: docwithnav
assignees:
- ashvayka
title: Device Connectivity Status
description: IoT device status and connectivity checks
redirect_from: "/docs/user-guide/rule-engine-2-0/tutorials/device-online-offline/"

---

* TOC
{:toc}

## Feature Overview

ThingsBoard Device State service is responsible for monitoring of the device connectivity state and triggering device connectivity events 
that are pushed to the [**Rule Engine**](/docs/user-guide/rule-engine-2-0/re-getting-started/). As a platform user, you are able to define how to react on this events. 

Supported events are:
 
 - **Connect event** - triggered when device connects to ThingsBoard. Meaningful in case of session based transports like MQTT.
 Will be also triggered for HTTP transport, but in this case it will be triggered on each HTTP request;
 - **Disconnect event** - triggered when device disconnects from ThingsBoard. Meaningful in case of session based transports like MQTT. 
 Will be also triggered for HTTP transport, but in this case it will be triggered on each HTTP request;
 - **Activity event** - triggered when device pushes telemetry, attribute update or rpc command;
 - **Inactivity event** - triggered when device was inactive for a certain period of time. 
 Please note that this event may be triggered even without disconnect event from device. Typically means that there was no activity events triggered for a while;

Device State service is responsible for maintaining the following [server-side](/docs/user-guide/attributes/#attribute-types) attributes:

 - **active** - represents current device state, either true or false;
 - **lastConnectTime** - represents last time device connected to ThingsBoard, number of milliseconds since January 1, 1970, 00:00:00 GMT
 - **lastDisconnectTime** - represents last time device disconnected from ThingsBoard, number of milliseconds since January 1, 1970, 00:00:00 GMT
 - **lastActivityTime** - represents last time device pushed telemetry, attribute update or rpc command, number of milliseconds since January 1, 1970, 00:00:00 GMT
 - **inactivityAlarmTime** - represents last time inactivity event triggered, number of milliseconds since January 1, 1970, 00:00:00 GMT
 
## Configuration

Device State service uses global configuration parameter for inactivity timeout. 
This parameter is defined in **thingsboard.yml** (state.defaultInactivityTimeoutInSec) and by default it is set to 10 seconds.
User can overwrite this parameter for individual device by setting "inactivityTimeout" server side attribute (value is set in milliseconds).

Device State service uses global configuration parameter to detect inactivity events.
This parameter is defined in **thingsboard.yml** (state.defaultStateCheckIntervalInSec) and by default it is set to 10 seconds.

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}



 


 
    
