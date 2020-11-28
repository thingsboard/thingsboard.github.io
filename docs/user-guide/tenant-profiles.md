---
layout: docwithnav
assignees:
- ashvayka
title: Tenant Profiles
description: IoT tenant profiles
entityLimits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-ce-tenant-profiles-entity-limits.png  
    1:
        image: /images/user-guide/tenant-profile/thingsboard-pe-tenant-profiles-entity-limits.png  

---

* TOC
{:toc}

## Overview

Since ThingsBoard 3.2, System administrator is able to configure common settings for multiple tenants using Tenant Profiles. 
Each Tenant has one and only one profile at a single point in time. 

Let's review the settings available in the tenant profile, one-by-one.
 
## Entity Limits

This group of settings allow System Administrator to configure maximum number of entities that each Tenant may create.

ThingsBoard Community edition supports limits for the following entities: devices, assets, customers, users, dashboards and rule chains.

ThingsBoard Professional edition supports adds support of the limits for the following entities: integrations, converters and scheduler events.

{% include images-gallery.html imageCollection="entityLimits" %}
 
## API Limits & Usage

This group of settings allow System Administrator to configure maximum number of messages, api calls, etc per month that each Tenant may perform.
ThingsBoard constantly collects and analyze statistics about API Usage. The typical update interval of the statistics is 1 minute.

ThingsBoard tracks API usage for six main components: Transport, Rule Engine, JS functions, Telemetry persistence, Email and SMS services.
The platform will disable the component if one of the related API Limits reaches threshold. 
For example, if Tenant devices will produce more than 100M messages per month, platform will disable all connections for devices that belong to this Tenant.

Let's review each limit separately:

**Transport Messages** means any message that your device sends to the server. This may be telemetry, attribute update, RPC call, etc.

**Transport Data Points** means number of the Key-Value pairs that your telemetry or attribute messages contain. 
For example, message listed below contains 5 data points, because "jsonKey" corresponds to one data point.  

```json
{
 "stringKey":"value1", 
 "booleanKey":true, 
 "doubleKey":42.0, 
 "longKey":73, 
 "jsonKey": {
    "someNumber": 42,
    "someArray": [1,2,3],
    "someNestedObject": {"key": "value"}
 }
}
```

Note: If the value of a String or JSON key is larger than 512 characters, platform will count it as multiple data points. 
  
**Rule Engine executions** means any execution of the rule node that belongs to current Tenant. 
Processing of a single telemetry message may cause multiple Rule Engine executions. The platform will also count periodic messages produced by Generator nodes, etc.

**JavaScript executions** means any execution of the custom function defined by tenant administrators. For example, processing of the "Script" filter or transformation node, invocation of the data converter, etc.       

**Data points storage days** is calculated for all time-series data points that are stored to the database. 
Platform multiplies number of data points with the number of days extracted from the TTL parameter. 
For example, if you store 3 data points for 30 days, this is 90 storage data point days.
System administrator is able to configure default TTL using "**Default Storage TTL Days**" parameter.
Tenant administrator is able to overwrite default TTL using "**Save Timeseries**" rule node configuration or using "TTL" parameter in the post telemetry request.

**Emails sent**

TODO

**SMS sent**

TODO

### Api Usage dashboard



## Rate Limits

## Processing in isolated ThingsBoard Core and Rule Engine containers

Isolated processing should be disabled by default. These options are useful for rare cases of a [microservices](/docs/reference/msa/) deployment only.
ThingsBoard cluster configuration that will use this options requires experienced DevOps / System Administrators. 
Misconfiguration may cause issues with the processing of incoming messages. 
ThingsBoard team is working to simplify configuration process and expect to provide improvements in ThingsBoard 3.3 release.  

Starting ThingsBoard 2.5 you may deploy isolated Core and Rule Engine [microservices](/docs/reference/msa/) for each or specific tenants. 
ThingsBoard Core is responsible for handling websocket subscriptions, tracking the connectivity of devices and other calculations that are not directly related to message processing.
ThingsBoard Rule Engine is a main "worker" in the cluster and is responsible for processing incoming messages.

By default, all messages like (telemetry, connectivity and lifecycle events) are pushed to the same message queue/topic (powered by Kafka, RabbitMQ, AWS SQS, Azure Service Bus, Goole Pub/Sub).
ThingsBoard push message for all Tenants to a common queue when isolated processing is disabled (default). 
This requires less processing resources and allows processing data from multiple Tenants within one Rule Engine.
So, you don't need to host separate container or VM per Tenant.  

ThingsBoard push messages to a separate queue when you select processing to be isolated for a particular tenant. 
This provides better level of isolation for those tenants. However, it also requires you to launch separate microservices for particular Tenant. 
In order to do this, you should specify TB_SERVICE_TENANT_ID environment variable for that microservice. The value should be set to the isolated Tenant Id.
This will instruction Rule Engine / Core microservice to subscribe to specific message queue topics that contain data for this particular Tenant.    





 
    
