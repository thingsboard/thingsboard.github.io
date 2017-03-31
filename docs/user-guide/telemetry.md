---
layout: docwithnav
assignees:
- ashvayka
title: Working with telemetry data
description: IoT device time-series data collection using various IoT protocols and Thingsboard telemetry feature

---

* TOC
{:toc}

Thingsboard provides rich set of features related to telemetry data:

 - **collect** data from devices using MQTT, CoAP or HTTP protocols.
 - **store** timeseries data in Cassandra (efficient, scalable and fault-tolerant NoSQL database).
 - **query** latest timeseries data values or all data within specified time interval.
 - **subscribe** to data updates using websockets (for visualization or real-time analytics).
 - **visualize** timeseries data using configurable and highly customizable widgets and dashboards.
 - **filter and analyze** data using flexible Rule Engine (/docs/user-guide/rule-engine/).
 - **generate alarms** based on collected data.
 - **forward** data to external systems using plugins (e.g. Kafka or RabbitMQ plugins).

This guide provides overview of the features listed above and some useful links to get more details.  

![image](/images/user-guide/telemetry.svg)

## Device telemetry upload API

Thingsboard provides an API to upload timeseries key-value data. 
Flexibility and simplicity of key-value format allows easy and seamless integration with almost any IoT device on the market.
Telemetry upload API is specific for each supported network protocol.
You can review API and examples in corresponding reference page:

 - [MQTT API reference](/docs/reference/mqtt-api/#telemetry-upload-api)
 - [CoAP API reference](/docs/reference/coap-api/#telemetry-upload-api)
 - [HTTP API reference](/docs/reference/http-api/#telemetry-upload-api)
  
## Telemetry plugin

Thingsboard consist of core services and plug-able modules called plugins. 
Telemetry plugin is responsible for persisting timeseries data to internal data storage; 
provides server-side api to query and subscribe for data updates. 
Since Telemetry plugin functionality is critical for data visualization purposes in dashboards, it is configured on the system level by system administrator.
Advanced users or platform developers can customize telemetry plugin functionality.

### Internal data storage

Thingsboard uses Cassandra NoSQL database. This database is optimized for storage of timeseries data.
Cassandra takes care of data replication and provides scalable, reliable and fault-tolerant storage.

Device that is sending data to the server will receive confirmation about data delivery as soon as data is stored in cassandra.
Modern MQTT clients allow temporary local storage of undelivered data. 
Thus, even if one of the Thingsboard nodes goes down, device will not lose the data and will be able to push it to other servers. 

Data is stored into several column families:
  
  - **ts_kv_cf** - raw data is partitioned by *device id*, *data key* and *partition*
  - **ts_kv_partitions_cf** - stores list of partitions for each *device id* and *data key* that allows execution of efficient queries of the data.
  - **ts_kv_latest_cf** - stores latest values for quick access.
  
Although you can query database directly, Thingsboard provide set of RESTful and Websocket API that simplify this process and apply certain security policies:
 
 - Tenant Administrator user is able to fetch data for all unassigned devices that belong to corresponding tenant.
 - Customer user is able to fetch data only for devices that are assigned to corresponding customer.
  
#### Data Query API

Telemetry plugin provides following API to fetch device data:

##### Timeseries data keys API

You can fetch list of all *data keys* for particular *device id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{deviceId}/keys/timeseries
```

{% capture tabspec %}get-telemetry-keys
A,get-telemetry-keys.sh,shell,resources/get-telemetry-keys.sh,/docs/user-guide/resources/get-telemetry-keys.sh
B,get-telemetry-keys-result.json,json,resources/get-telemetry-keys-result.json,/docs/user-guide/resources/get-telemetry-keys-result.json{% endcapture %}
{% include tabs.html %}

##### Timeseries data values API

You can fetch list of latest values for particular *device id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{deviceId}/values/timeseries?keys=key1,key2,key3
```

{% capture tabspec %}get-latest-telemetry-values
A,get-latest-telemetry-values.sh,shell,resources/get-latest-telemetry-values.sh,/docs/user-guide/resources/get-latest-telemetry-values.sh
B,get-latest-telemetry-values-result.json,json,resources/get-latest-telemetry-values-result.json,/docs/user-guide/resources/get-latest-telemetry-values-result.json{% endcapture %}
{% include tabs.html %}


You can also fetch list of historical values for particular *device id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{deviceId}/values/timeseries?keys=key1,key2,key3&startTs=1479735870785&endTs=1479735871858&interval=60000&limit=100&agg=AVG
```

The supported parameters are described below:

 - **keys** - comma separated list of telemetry keys to fetch.
 - **startTs** - unix timestamp that identifies start of the interval in milliseconds.
 - **endTs** - unix timestamp that identifies end of the interval in milliseconds.
 - **interval** - the aggregation interval, in milliseconds.
 - **agg** - the aggregation function. One of MIN, MAX, AVG, SUM, COUNT, NONE.
 - **limit** - the max amount of data points to return or intervals to process.

Thingsboard will use *startTs*, *endTs* and *interval* to identify aggregation partitions or sub-queries and execute asynchronous queries to Cassandra that levarage built-in aggregation functions.  

{% capture tabspec %}get-telemetry-values
A,get-telemetry-values.sh,shell,resources/get-telemetry-values.sh,/docs/user-guide/resources/get-telemetry-values.sh
B,get-telemetry-values-result.json,json,resources/get-telemetry-values-result.json,/docs/user-guide/resources/get-telemetry-values-result.json{% endcapture %}
{% include tabs.html %}


#### Websocket API

Websockets are actively used by Thingsobard Web UI. Websocket API duplicates REST API functionality and provides ability to subscribe to device data changes.
You can open a websocket connection to a telemetry plugin using following URL

```shell
ws(s)://host:port/api/ws/plugins/telemetry?token=$JWT_TOKEN
```

Once opened, you can send 
[subscription commands](https://github.com/thingsboard/thingsboard/blob/master/extensions/extensions-core/src/main/java/org/thingsboard/server/extensions/core/plugin/telemetry/cmd/TelemetryPluginCmdsWrapper.java) 
and receive 
[subscription updates](https://github.com/thingsboard/thingsboard/blob/master/extensions/extensions-core/src/main/java/org/thingsboard/server/extensions/core/plugin/telemetry/sub/SubscriptionUpdate.java):

where 

 - **cmdId** - unique command id (within corresponding websocket connection)
 - **deviceId** - unique device identifier
 - **keys** - comma separated list of data keys
 - **timeWindow** - fetch interval for timeseries subscriptions, in milliseconds. Data will be fetch within following interval **[now()-timeWindow, now()]**
 - **startTs** - start time of fetch interval for historical data query, in milliseconds.
 - **endTs** - end time of fetch interval for historical data query, in milliseconds.
 
Complete example is coming soon!

## Data visualization

Thingsboard provide ability to configure and customize dashboards for data visualization. 
This topic is covered in separate guide.    
<p><a href="/docs/user-guide/visualization" class="button">Data Visualization guide</a></p>

## Rule engine

Thingsboard provide ability to configure data processing rules. 
Each rule consists of

 - filters - to filter incoming data feed, 
 - processor - to generate alarms or enrich incoming data with some server-side values
 - action - to apply certain logic to filtered data.
You can find more details in a separate guide.    
<p><a href="/docs/user-guide/rule-engine" class="button">Rule Engine guide</a></p>
    
