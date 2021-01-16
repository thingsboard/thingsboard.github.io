---
layout: docwithnav
assignees:
- ashvayka
title: Working with telemetry data
description: IoT device time-series data collection using various IoT protocols and ThingsBoard telemetry feature

---

* TOC
{:toc}

ThingsBoard provides a rich set of features related to telemetry data:

 - **Collect** data from devices using MQTT, CoAP, or HTTP protocols;
 - **Store** time series data in Cassandra (efficient, scalable, and fault-tolerant NoSQL database);
 - **Query** the latest time series data values or all data within the specified timeframe;
 - **Subscribe** to data updates using WebSockets (for visualization or real-time analytics);
 - **Visualize** time series data using configurable and highly customizable widgets and dashboards;
 - **Filter and analyze** data using flexible Rule Engine (/docs/user-guide/rule-engine/);
 - **Generate alarms** based on collected data;
 - **Forward** data to external systems using Rule Nodes (e.g. Kafka or RabbitMQ Rule Nodes).

This guide provides an overview of the features listed above, and some useful links to get more details.  

![image](/images/user-guide/telemetry.svg)

## Device telemetry upload API

ThingsBoard provides an API to upload time series key-value data.
Flexibility and simplicity of a key-value format allow easy and seamless integration with almost any IoT device on the market.
Telemetry upload API depends on each supported network protocol.
API and examples can be reviewed in corresponding reference page:

 - [MQTT API reference](/docs/reference/mqtt-api/#telemetry-upload-api)
 - [CoAP API reference](/docs/reference/coap-api/#telemetry-upload-api)
 - [HTTP API reference](/docs/reference/http-api/#telemetry-upload-api)
  
## Telemetry Service

Telemetry Service is responsible for persisting time series data to internal data storage. It also 
provides server-side API to query and subscribe to data updates. 

### Internal data storage

ThingsBoard uses either Cassandra NoSQL database or SQL database to store all data.

A device that sends data to the server will receive confirmation about data delivery as soon as data is stored in DB.
Modern MQTT clients allow temporary local storage of undelivered data. 
Thus, even if one of the ThingsBoard nodes goes down, the device will not lose the data and will be able to push it to other servers.
 
Server-side applications are also able to publish telemetry values for different entities and entity types.
  
Although you can query the database directly, ThingsBoard provides set of RESTful and WebSocket API that simplify this process and apply certain security policies:
 
 - a Tenant Administrator user is able to fetch data for all entities that belong to the corresponding tenant.
 - a Customer user is able to fetch data only for entities that are assigned to the corresponding customer.
  
#### Data Query API

Telemetry Service provides following REST API to fetch entity data:

![image](/images/user-guide/telemetry-service/rest-api.png)

**NOTE:** The API listed above is available via Swagger UI. Please review the general [REST API](/docs/reference/rest-api/) documentation for more details.
The API is backward compatible with TB v1.0+ and this is the main reason why API call URLs contain "plugin".

##### Time series data keys API

You can fetch list of all *data keys* for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/keys/timeseries
```

{% capture tabspec %}get-telemetry-keys
A,get-telemetry-keys.sh,shell,resources/get-telemetry-keys.sh,/docs/user-guide/resources/get-telemetry-keys.sh
B,get-telemetry-keys-result.json,json,resources/get-telemetry-keys-result.json,/docs/user-guide/resources/get-telemetry-keys-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, ALARM, ENTITY_VIEW

##### Time series data values API

You can fetch list of latest values for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/values/timeseries?keys=key1,key2,key3
```

{% capture tabspec %}get-latest-telemetry-values
A,get-latest-telemetry-values.sh,shell,resources/get-latest-telemetry-values.sh,/docs/user-guide/resources/get-latest-telemetry-values.sh
B,get-latest-telemetry-values-result.json,json,resources/get-latest-telemetry-values-result.json,/docs/user-guide/resources/get-latest-telemetry-values-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, ALARM, ENTITY_VIEW

You can also fetch list of historical values for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/values/timeseries?keys=key1,key2,key3&startTs=1479735870785&endTs=1479735871858&interval=60000&limit=100&agg=AVG
```

The supported parameters are described below:

 - **keys** - comma-separated list of telemetry keys to fetch.
 - **startTs** - Unix timestamp that identifies the start of the interval in milliseconds.
 - **endTs** - Unix timestamp that identifies the end of the interval in milliseconds.
 - **interval** - the aggregation interval, in milliseconds.
 - **agg** - the aggregation function. One of MIN, MAX, AVG, SUM, COUNT, NONE.
 - **limit** - the max amount of data points to return or intervals to process.

ThingsBoard will use *startTs*, *endTs*, and *interval* to identify aggregation partitions or sub-queries and execute asynchronous queries to DB that leverage built-in aggregation functions.

{% capture tabspec %}get-telemetry-values
A,get-telemetry-values.sh,shell,resources/get-telemetry-values.sh,/docs/user-guide/resources/get-telemetry-values.sh
B,get-telemetry-values-result.json,json,resources/get-telemetry-values-result.json,/docs/user-guide/resources/get-telemetry-values-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, ALARM, ENTITY_VIEW

#### WebSocket API

WebSockets are actively used by Thingsobard Web UI. WebSocket API duplicates REST API functionality and provides the ability to subscribe to device data changes.
You can open a WebSocket connection to a telemetry service using the following URL

```shell
ws(s)://host:port/api/ws/plugins/telemetry?token=$JWT_TOKEN
```

Once opened, you can send 

[subscription commands](https://github.com/thingsboard/thingsboard/blob/master/application/src/main/java/org/thingsboard/server/service/telemetry/cmd/TelemetryPluginCmdsWrapper.java) 
and receive 
[subscription updates](https://github.com/thingsboard/thingsboard/blob/master/application/src/main/java/org/thingsboard/server/service/telemetry/sub/TelemetrySubscriptionUpdate.java):

where 

 - **cmdId** - unique command id (within corresponding WebSocket connection)
 - **entityType** - unique entity type. Supported entity types are: TENANT, CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, ALARM
 - **entityId** - unique entity identifier
 - **keys** - a comma-separated list of data keys
 - **timeWindow** - fetch interval for time series subscriptions, in milliseconds. Data will be fetch within following interval **[now()-timeWindow, now()]**
 - **startTs** - start time of fetch interval for historical data query, in milliseconds.
 - **endTs** - end time of fetch interval for historical data query, in milliseconds.
 
##### Example 

Change values of the following variables : 

 - **token** - to the JWT token which you can get using the [following link](https://thingsboard.io/docs/reference/rest-api/#rest-api-auth).

 - **entityId** - to your device id.
 
 In case of live-demo server : 
 
 - replace **host:port** with **demo-thingsboard.io** and choose secure connection - **wss://**
 
 In case of local installation :
 
 - replace **host:port** with **127.0.0.1:8080** and choose **ws://**
 
{% capture tabspec %}web-socket
A,web-socket.html,html,resources/web-socket.html,/docs/user-guide/resources/web-socket.html{% endcapture %}  
{% include tabs.html %}

## Data visualization

ThingsBoard provides the ability to configure and customize dashboards for data visualization.
This topic is covered in a separate guide.    
<p><a href="/docs/user-guide/visualization" class="button">Data Visualization guide</a></p>

## Rule engine

ThingsBoard provides the ability to configure data processing rules.
Each rule consists of

 - **filters** to filter incoming data feed; 
 - **processor** to generate alarms or enrich incoming data with some server-side values;
 - **action** to apply a certain logic to filtered data.

You can find more details in a separate guide:    
<p><a href="/docs/user-guide/rule-engine" class="button">Rule Engine guide</a></p>
    
