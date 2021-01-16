---
layout: docwithnav
assignees:
- ashvayka
title: Tenant Profiles
description: IoT tenant profiles
redirect_from: "/docs/user-guide/ui/tenant-profiles"
entityLimits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-ce-tenant-profiles-entity-limits.png  
    1:
        image: /images/user-guide/tenant-profile/thingsboard-pe-tenant-profiles-entity-limits.png  

apiLimitsDashboard:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-tenant-profiles-api-limits-dashboard.png  

rateLimits:
    0:
        image: /images/user-guide/tenant-profile/thingsboard-ce-rate-limits.png  

---

* TOC
{:toc}

## Overview

Since ThingsBoard 3.2, a System Administrator is able to configure common settings for multiple tenants using Tenant Profiles. 
Each Tenant has the one and only profile at a single point in time.

Let's review the settings available in the tenant profile, one-by-one.
 
## Entity Limits

This group of settings allows the System Administrator to configure a maximum number of entities that each Tenant is able to create.

**ThingsBoard Community** edition supports limits for the following entities: devices, assets, customers, users, dashboards, and rule chains.

**ThingsBoard Professional** edition supports limits for everything listed above and as well additional constraint support for the following entities: integrations, converters, and scheduler events.

{% include images-gallery.html imageCollection="entityLimits" %}
 
## API Limits & Usage

This group of settings allows a System Administrator to configure a maximum number of messages, API calls, etc., per month that each Tenant would like to perform. 
ThingsBoard constantly collects and analyzes statistics about API Usage. The typical update interval of the statistics is 1 minute

ThingsBoard tracks API usage for six main components: Transport, Rule Engine, JS functions, Telemetry persistence, Email, and SMS services. The platform will disable the component if one of the related API Limits reaches a threshold. 
For example, if Tenant devices produce more than 100M messages per a month, the platform will disable all connections for devices that belong to this Tenant. 
When the API usage is disabled or reaches a certain threshold (typically 80%) ThingsBoard will notify the Tenant Administrator via email.  

Let's review each limit separately:

**Transport Messages** means any message that your device sends to the server. This may be telemetry, attribute update, RPC call, etc.

**Transport Data Points** means a number of the Key-Value pairs that your telemetry or attribute messages contain. 
For example, the message listed below contains 5 data points, because the “jsonKey” corresponds to one data point.  

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

**Note**: If the value of a String or JSON key is larger than 512 characters, the platform will count it as multiple data points. 
  
**Rule Engine executions** mean any execution of the rule node that belongs to the current Tenant. Processing of a single telemetry message may cause multiple Rule Engine executions. 
The platform will also count periodic messages produced by Generator nodes, etc.

**JavaScript executions** mean any execution of the custom function defined by Tenant Administrators. For example, processing of the “Script” filter or a transformation node, an invocation of the data converter, etc.       

**Data points storage days** are calculated for all time-series data points that are stored in the database. 
Platform multiplies the number of data points by the number of days those data points will be stored. The TTL parameter is used to extract the number of days to store the data. 
For example, if you store 3 data points for 30 days, this is 90 storage data point days.
A System Administrator is able to configure default TTL using the "**Default Storage TTL Days**" parameter in the tenant profile.
A Tenant Administrator is able to overwrite default TTL using the "**Save Timeseries**" ule node configuration or using the “TTL” parameter in the post telemetry request.

**Emails sent** means the number of emails that are sent from the rule engine using system SMTP provider (settings). 
Please note that the Tenant Administrator is able to define custom SMTP settings in both Community and Professional Editions of the platform. 
Emails sent with custom SMTP settings do not affect API limits.  

**SMS sent** means the number of SMSes that are sent from the rule engine using the system SMS provider. 
Please note that the Tenant Administrator is able to define custom SMS provider settings in both Community and Professional Editions of the platform. 
SMS sent with custom SMTP settings do not affect API limits.

### API Usage dashboard

As a Tenant Administrator, you can review the API Usage dashboard. 
The dashboard below allows Tenant Administrators to learn more about their hourly/daily/monthly API usage and instantly review the status of the API limits. 

{% include images-gallery.html imageCollection="apiLimitsDashboard" %}

## Rate Limits

This group of settings allows a System Administrator to configure a maximum number of
requests the platform should process for a specific device (device-level) or for all devices belonging to a single tenant (tenant-level).
The implementation of rate limits is based on the [token bucket](https://en.wikipedia.org/wiki/Token_bucket) algorithm.

The rate limit definition consists of the value and time interval. For example, "1000:60" means "no more than 1000 messages per 60 seconds". 
You can define multiple intervals with ",". For example, "100:1,1000:60" means "bursts of 100 messages per second but no more than 1000 times per 60 seconds".

{% include images-gallery.html imageCollection="rateLimits" %}

## Processing in isolated ThingsBoard Core and Rule Engine containers

Isolated processing should be disabled by default. These options are only useful in rare cases of a [microservices](/docs/reference/msa/) deployment.
Experienced DevOps / System Administrators are required to configure the ThingsBoard cluster to use these settings. 
Misconfiguration may cause issues with the processing of incoming messages. 
ThingsBoard team is working to simplify the configuration process and expect to provide improvements in ThingsBoard 3.3 release.  

Starting ThingsBoard 2.5 you may deploy isolated Core and Rule Engine [microservices](/docs/reference/msa/) for each or specific tenants. 
ThingsBoard Core is responsible for handling WebSocket subscriptions, tracking device connectivity, and other calculations that are not directly related to message processing.
ThingsBoard Rule Engine is the main "worker" in the cluster and is responsible for processing incoming messages.

By default, all messages (such as telemetry, connectivity, and lifecycle events) are pushed to the same message queue/topic (powered by Kafka, RabbitMQ, AWS SQS, Azure Service Bus, Goole Pub/Sub).
ThingsBoard pushes messages for all Tenants to a common queue when isolated processing is disabled (default). 
This requires fewer processing resources and allows data from multiple Tenants to be processed under a single Rule Engine.
This way, you don't need to host a separate container or VM per Tenant.  

ThingsBoard pushes messages to a separate queue when you select processing to be isolated for a particular tenant. 
This provides a better level of isolation for those tenants. However, this also requires you to launch separate microservices for a particular Tenant. 
In order to do this, you should specify the TB_SERVICE_TENANT_ID environment variable for that microservice. The value should be set to the isolated Tenant Id.
This will instruct Rule Engine / Core microservice to subscribe to specific message queue topics that contain data for that particular Tenant.    





 
    
