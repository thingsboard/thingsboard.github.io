
* TOC
{:toc}

{% assign sinceVersion = "3.2" %}
{% include templates/since.md %}

A System Administrator is able to configure common settings for multiple tenants using Tenant Profiles. 
Each Tenant has the one and only profile at a single point in time.

Let's review the settings available in the tenant profile, one-by-one.

## Profile configuration

These settings allow the system administrator to configure limitations on the number of entities created by a tenant, set limits on the maximum number of messages, API calls, per month, configure the maximum number of requests the platform should process for a specific device (device-level) or for all devices belonging to a single tenant (tenant-level), etc.

Let's consider more about these settings below.

### Entities limits

This group of settings allows the System Administrator to configure a maximum number of entities that each Tenant is able to create.

{% if docsPrefix == null %}
**[ThingsBoard Community Edition](/docs/user-guide/install/installation-options/)** supports limits for the following entities: devices, dashboards, assets, users, customers, and rule chains.

**[ThingsBoard Professional Edition](/docs/user-guide/install/pe/installation-options/)** supports limits for everything listed above and as well additional constraint support for the following entities: integrations, converters, and scheduler events.
{% endif %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
**[ThingsBoard Professional Edition](/docs/user-guide/install/pe/installation-options/)** supports limits for the following entities: devices, dashboards, assets, users, integrations, scheduler events, customers, rule chains, and converters.
{% endif %}

{% include images-gallery.html imageCollection="entityLimits" %}
 
### API Limits & Usage

This group of settings allows a System Administrator to configure a maximum number of messages, API calls, etc., per month that each Tenant would like to perform. 
ThingsBoard constantly collects and analyzes statistics about API Usage. The typical update interval of the statistics is 1 minute

ThingsBoard tracks API usage for six main components: Transport, Rule Engine, JS functions, Telemetry persistence, Email, and SMS services. The platform will disable the component if one of the related API Limits reaches a threshold. 
For example, if Tenant devices produce more than 100M messages per a month, the platform will disable all connections for devices that belong to this Tenant. 
When the API usage is disabled or reaches a certain threshold (typically 80%) ThingsBoard will notify the Tenant Administrator via email.  

Let's review each limit separately:

**Rule Engine executions** mean any execution of the rule node that belongs to the current Tenant. Processing of a single telemetry message may cause multiple Rule Engine executions.
The platform will also count periodic messages produced by Generator nodes, etc.


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

{% capture difference %}
**Note**: If the value of a String or JSON key is larger than 512 characters, the platform will count it as multiple data points.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**JavaScript executions** mean any execution of the custom function defined by Tenant Administrators. For example, processing of the “Script” filter or a transformation node, an invocation of the data converter, etc.       

**Data points storage days** are calculated for all time-series data points that are stored in the database. 
Platform multiplies the number of data points by the number of days those data points will be stored. The TTL parameter is used to extract the number of days to store the data. 
For example, if you store 3 data points for 30 days, this is 90 storage data point days.
A System Administrator is able to configure default TTL using the "**Default Storage TTL Days**" parameter in the tenant profile.
A Tenant Administrator is able to overwrite default TTL using the "**Save Timeseries**" ule node configuration or using the “TTL” parameter in the post telemetry request.

**Alarms TTL** means how many days to store alarms in the database.

**Alarms sent** means the total number of alarms created per the period (one month by default).

**Emails sent** means the number of emails that are sent from the rule engine using system SMTP provider (settings). 
Please note that the Tenant Administrator is able to define custom SMTP settings in both Community and Professional Editions of the platform. 
Emails sent with custom SMTP settings do not affect API limits.  

**SMS sent** means the number of SMSes that are sent from the rule engine using the system SMS provider. 
Please note that the Tenant Administrator is able to define custom SMS provider settings in both Community and Professional Editions of the platform. 
SMS sent with custom SMTP settings do not affect API limits.

{% include images-gallery.html imageCollection="api-limits" %}

#### API Usage dashboard

As a Tenant Administrator, you can review the API Usage dashboard. 
The dashboard below allows Tenant Administrators to learn more about their hourly/daily/monthly API usage and instantly review the status of the API limits. 

{% include images-gallery.html imageCollection="apiLimitsDashboard" %}

### Files limits

The System Administrator can configure the maximum size of an individual file, the maximum total size of image files in the "[Image gallery](/docs/{{docsPrefix}}user-guide/image-gallery/)" and resource files in the "Resource Library," as well as the maximum total size of [OTA package files](/docs/{{docsPrefix}}user-guide/ota-updates/) that the platform can store in the database.

Values are specified in **bytes**.

{% include images-gallery.html imageCollection="files-limits" %}

### Rate Limits

This group of settings allows a System Administrator to configure a maximum number of
requests the platform should process for a specific device (device-level) or for all devices belonging to a single tenant (tenant-level).
The implementation of rate limits is based on the [token bucket](https://en.wikipedia.org/wiki/Token_bucket) algorithm.

The rate limit definition consists of the value and time interval. For example, "1000:60" means "no more than 1000 messages per 60 seconds". 
You can define multiple intervals with ",". For example, "100:1,1000:60" means "bursts of 100 messages per second but no more than 1000 times per 60 seconds".

{% include images-gallery.html imageCollection="rateLimits" %}

## Processing in isolated ThingsBoard Rule Engine queues

ThingsBoard Rule Engine is the main "worker" in the cluster and is responsible for processing incoming messages.

By default, all messages (such as telemetry, connectivity, and lifecycle events) are pushed to the same message queue/topic (powered by Kafka, RabbitMQ, AWS SQS, Azure Service Bus, Google Pub/Sub).
ThingsBoard pushes messages for all Tenants to a common queue when isolated processing is disabled (default). 

ThingsBoard pushes messages to a separate queue when you select processing to be isolated for a particular tenant. 
This provides a better level of isolation for those tenants. You need to create tenant profile with enabled "Use isolated ThingsBoard Rule Engine queues" box 
and assign for a particular Tenant, or update existing tenant profile. 
This will instruct Rule Engine to subscribe to specific message queue topics that contain data for corresponding tenants.

You might as well set up a separate Rule Engine instance that will be responsible for tenants of specific tenant profiles only.
See [configuration parameters](/docs/user-guide/install/config/#thingsboard-service-parameters).

### Queue configuration for isolated tenants

{% include images-gallery.html imageCollection="isolatedQueueConfiguration" showListImageTitles="true"%}

After assigning tenant profile for a particular tenant configured queues automatically created and started, and ready
for using in rule chain or device profile.

More about queue settings in [guide](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-settings)
