
* TOC
{:toc}

ThingsBoard provides a rich set of features related to time-series data:

 - **Collect** data from devices using various [protocols and integrations](/docs/{{docsPrefix}}getting-started-guides/connectivity/);
 - **Store** time series data in SQL (PostgreSQL) or NoSQL (Cassandra or Timescale) databases;
 - **Query** the latest time series data values or all data within the specified time range with flexible aggregation;
 - **Subscribe** to data updates using [WebSockets](#websocket-api) for visualization or real-time analytics;
 - **Visualize** time series data using configurable and highly customizable widgets and [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/);
 - **Filter and analyze** data using flexible [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/);
 - **Generate [alarms](/docs/{{docsPrefix}}user-guide/alarms/)** based on collected data;
 - **Forward** data to external systems using [External Rule Nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/) (e.g. Kafka or RabbitMQ Rule Nodes).

This guide provides an overview of the features listed above, and some useful links to get more details.

## Data points

ThingsBoard internally treats time-series data as timestamped key-value pairs. We call single timestamped key-value pair a **data point**. 
Flexibility and simplicity of the key-value format allow easy and seamless integration with almost any IoT device on the market. 
Key is always a string and is basically a data point key name, while the value can be either string, boolean, double, integer or JSON.

{% capture internal_data_format %}
Examples below use **internal** data format. The device itself may upload data using **various protocols and data formats**. 
See [Time-series data upload API](/docs/{{docsPrefix}}user-guide/telemetry/#time-series-data-upload-api) for more details.
{% endcapture %}
{% include templates/info-banner.md content=internal_data_format %}


The following JSON contains 5 data points: temperature (double), humidity (integer), hvacEnabled (boolean), hvacState (string) and configuration (JSON):  

```json
{
 "temperature": 42.2, 
 "humidity": 70,
 "hvacEnabled": true,
 "hvacState": "IDLE",
 "configuration": {
    "someNumber": 42,
    "someArray": [1,2,3],
    "someNestedObject": {"key": "value"}
 }
}
```
{: .copy-code}

You may notice that the JSON listed above does not have a timestamp information. In such case, ThingsBoard uses current server timestamp. 
However, you may include timestamp information into the message. See example below:

```json
{
  "ts": 1527863043000,
  "values": {
    "temperature": 42.2,
    "humidity": 70
  }
}
```
{: .copy-code}


## Time-series data upload API

You may use built-in transport protocol implementations:

- [MQTT API reference](/docs/{{docsPrefix}}reference/mqtt-api/#telemetry-upload-api)
- [CoAP API reference](/docs/{{docsPrefix}}reference/coap-api/#telemetry-upload-api)
- [HTTP API reference](/docs/{{docsPrefix}}reference/http-api/#telemetry-upload-api)
- [LwM2M API reference](/docs/{{docsPrefix}}reference/lwm2m-api/#telemetry-upload-api)

Most of the protocols above support JSON, Protobuf or own data format. For other protocols, please review ["How to connect your device?"](/docs/{{docsPrefix}}getting-started-guides/connectivity/) guide.

## Data visualization

We assume you have already pushed time-series data to ThingsBoard. Now you may use it in your dashboards. 
We recommend [dashboards overview](/docs/{{docsPrefix}}user-guide/dashboards/) to get started.
Once you are familiar how to create dashboards and configure data sources,
you may use widgets to visualize either latest values or real-time changes and historical values.
Good examples of widgets that visualize latest values are [digital](/docs/{{docsPrefix}}user-guide/ui/widget-library/#digital-gauges) and [analog](/docs/{{docsPrefix}}user-guide/ui/widget-library/#analog-gauges) gauges, or [cards](/docs/{{docsPrefix}}user-guide/ui/widget-library/#cards).
[Charts](/docs/{{docsPrefix}}user-guide/ui/widget-library/#charts) are used to visualize historical and real-time values and [maps](/docs/{{docsPrefix}}user-guide/ui/widget-library/#maps-widgets) to visualize movement of devices and assets.

You may also use [input widgets](/docs/{{docsPrefix}}user-guide/ui/widget-library/#input-widgets) to allow dashboard users to input new time-series values using the dashboards.

## Data storage

{% if docsPrefix == "paas/" %}

ThingsBoard Cloud stores time-series data in the Cassandra database with replication factor of 3. 
The on-prem installation of ThingsBoard support storage of time-series data in SQL (PostgreSQL) or NoSQL (Cassandra or Timescale) databases.

{% else %}

System administrator is able to configure ThingsBoard to store time-series data in SQL (PostgreSQL) or NoSQL (Cassandra or Timescale) databases.
Using SQL storage is recommended for small environments with less than 5000 [data points](#data-points) per second.
Storing data in Cassandra makes sense when you have either high throughput or high availability requirements for your solution.

See [SQL vs NoSQL vs Hybrid](/docs/{{docsPrefix}}reference/#sql-vs-nosql-vs-hybrid-database-approach) for more information.

{% endif %}

## Data retention

{% if docsPrefix == "paas/" %}

ThingsBoard Cloud stores data with configurable time-to-live (TTL) parameter. 
The value of the parameter is part of the [Subscription](/products/paas/subscription/) plan.
You may overwrite the default value in the "Save Timeseries" rule node or using "TTL" metadata field of your message.
This allows you to optimize storage consumption. The maximum allowed value of TTL is 5 years.
For example, you may store "raw" data for 3 month and aggregated data for 3 years.

{% else %}

Data retention policy and configuration depends on the chosen [storage](#data-storage).

Cassandra supports time-to-live(TTL) parameter for each inserted row.
That is why, you may [configure](/docs/user-guide/install/{{docsPrefix}}config/) default TTL parameter on a system level, using 'TS_KV_TTL' environment variable.
You may overwrite the default value in the "Save Timeseries" rule node or using "TTL" metadata field of your message.
This allows you to optimize storage consumption. The maximum allowed value of TTL is 5 years.
For example, you may store "raw" data for 3 month and aggregated data for 3 years.

PostgreSQL and Timescale does not support time-to-live(TTL) parameter for each inserted row.
That is why, you may only [configure](/docs/user-guide/install/{{docsPrefix}}config/) periodic time-series data cleanup routine using 'SQL_TTL_*' environment variables. 
{% endif %}

## Data durability

The device that sends message with time-series data to ThingsBoard will receive confirmation 
once the message is successfully stored into the Rule Engine [Queue](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/) 
that is configured for particular device [profile](/docs/{{docsPrefix}}user-guide/device-profiles/#queue-name).

As a tenant administrator, you may configure [processing strategy](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy) for the queue.
You may configure the queue either to reprocess or ignore the failures of the message processing. 
This allows granular control on the level of durability for the time-series data and all other messages processed by the rule engine. 

## Rule engine

The [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/) is responsible for processing all sorts of incoming data and event.
You may find most popular scenarios of using attributes within rule engine below:

**Generate alarms based on the logical expressions against time-series values**

Use [alarm rules](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules) to configure most common alarm conditions via UI
or use [filter nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/) to configure more specific use cases via custom JS functions.

**Modify incoming time-series data before they are stored in the database**

Use [message type switch](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/#message-type-switch-node) rule node to filter messages that contain "Post telemetry" request.
Then, use [transformation rule nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/) to modify a particular message.

**Calculate delta between previous and current time-series value**

Use [calculate delta](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/enrichment-nodes/#calculate-delta) rule node to calculate power, water and other consumption based on smart-meter readings.

**Fetch previous time-series values to analyze incoming telemetry from device**

Use [originator telemetry](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/enrichment-nodes/#originator-telemetry) rule node to enrich incoming time-series data message with previous time-series data of the device.

**Fetch attribute values to analyze incoming telemetry from device**

Use [enrichment](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/enrichment-nodes/) rule nodes to enrich incoming telemetry message with attributes of the device, related asset, customer or tenant.
This is extremely powerful technique that allows to modify processing logic and parameters based on settings stored in the attributes.

**Use analytics rule nodes to aggregate data for related assets**

{% if docsPrefix == "paas/" or docsPrefix == "pe/" %}
Use [analytics](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/analytics-nodes/) rule nodes to aggregate data from multiple devices or assets.
{% else %}
Use [analytics](/docs/pe/user-guide/rule-engine-2-0/analytics-nodes/) rule nodes to aggregate data from multiple devices or assets.
{% endif %}

Useful to calculate total water consumption for the building/district based on data from multiple water meters.     

## Data Query REST API

ThingsBoard provides following REST API to fetch entity data:

{% capture api_note %}
**NOTE:** The API is available via Swagger UI. Please review the general [REST API](/docs/{{docsPrefix}}reference/rest-api/) documentation for more details.
The API is backward compatible with TB v1.0+ and this is the main reason why API call URLs contain "plugin".
{% endcapture %}
{% include templates/info-banner.md content=api_note %}

##### Get time-series data keys for specific entity

You can fetch list of all time-series *data keys* for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/keys/timeseries
```
{: .copy-code}

{% capture tabspec %}get-telemetry-keys
A,get-telemetry-keys.sh,shell,resources/get-telemetry-keys.sh,/docs/{{docsPrefix}}user-guide/resources/get-telemetry-keys.sh
B,get-telemetry-keys-result.json,json,resources/get-telemetry-keys-result.json,/docs/{{docsPrefix}}user-guide/resources/get-telemetry-keys-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, ALARM, ENTITY_VIEW

##### Get latest time-series data values for specific entity

You can fetch list of latest values for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/values/timeseries?keys=key1,key2,key3
```
{: .copy-code}

{% capture tabspec %}get-latest-telemetry-values
A,get-latest-telemetry-values.sh,shell,resources/get-latest-telemetry-values.sh,/docs/{{docsPrefix}}user-guide/resources/get-latest-telemetry-values.sh
B,get-latest-telemetry-values-result.json,json,resources/get-latest-telemetry-values-result.json,/docs/{{docsPrefix}}user-guide/resources/get-latest-telemetry-values-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, ALARM, ENTITY_VIEW

##### Get historical time-series data values for specific entity

You can also fetch list of historical values for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/values/timeseries?keys=key1,key2,key3&startTs=1479735870785&endTs=1479735871858&interval=60000&limit=100&agg=AVG
```
{: .copy-code}

The supported parameters are described below:

 - **keys** - comma-separated list of telemetry keys to fetch.
 - **startTs** - Unix timestamp that identifies the start of the interval in milliseconds.
 - **endTs** - Unix timestamp that identifies the end of the interval in milliseconds.
 - **interval** - the aggregation interval, in milliseconds.
 - **agg** - the aggregation function. One of MIN, MAX, AVG, SUM, COUNT, NONE.
 - **limit** - the max amount of data points to return or intervals to process.

ThingsBoard will use *startTs*, *endTs*, and *interval* to identify aggregation partitions or sub-queries and execute asynchronous queries to DB that leverage built-in aggregation functions.

{% capture tabspec %}get-telemetry-values
A,get-telemetry-values.sh,shell,resources/get-telemetry-values.sh,/docs/{{docsPrefix}}user-guide/resources/get-telemetry-values.sh
B,get-telemetry-values-result.json,json,resources/get-telemetry-values-result.json,/docs/{{docsPrefix}}user-guide/resources/get-telemetry-values-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, ALARM, ENTITY_VIEW

## WebSocket API

WebSockets are actively used by Thingsboard Web UI. WebSocket API duplicates REST API functionality and provides the ability to subscribe to device data changes.
You can open a WebSocket connection to a telemetry service using the following URL

```shell
ws(s)://host:port/api/ws
```
{: .copy-code}

Once opened, you need to authenticate the session within 10 seconds with auth command:
```json
{
  "authCmd": {
    "cmdId": 0,
    "token": "$JWT_TOKEN"
  }
}
```
{: .copy-code}

Then you can send [subscription commands](https://github.com/thingsboard/thingsboard/blob/release-3.6/application/src/main/java/org/thingsboard/server/service/ws/WsCommandsWrapper.java) 
and receive 
[subscription updates](https://github.com/thingsboard/thingsboard/blob/release-3.6/application/src/main/java/org/thingsboard/server/service/ws/telemetry/sub/TelemetrySubscriptionUpdate.java):

where 

 - **cmdId** - unique command id (within corresponding WebSocket connection)
 - **entityType** - unique entity type. Supported entity types are: TENANT, CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, ALARM
 - **entityId** - unique entity identifier
 - **keys** - a comma-separated list of data keys
 - **timeWindow** - fetch interval for time series subscriptions, in milliseconds. Data will be fetch within following interval **[now()-timeWindow, now()]**
 - **startTs** - start time of fetch interval for historical data query, in milliseconds.
 - **endTs** - end time of fetch interval for historical data query, in milliseconds.
 
#### Example 

Change values of the following variables : 

 - **token** - to the JWT token which you can get using the [following link](/docs/{{docsPrefix}}reference/rest-api/#rest-api-auth).

 - **entityId** - to your device id.
 
 In case of live-demo server : 
 
 - replace **host:port** with **demo.thingsboard.io** and choose secure connection - **wss://**
 
 In case of local installation :
 
 - replace **host:port** with **127.0.0.1:8080** and choose **ws://**
 
{% capture tabspec %}web-socket
A,web-socket.html,html,resources/web-socket.html,/docs/{{docsPrefix}}user-guide/resources/web-socket.html{% endcapture %}  
{% include tabs.html %}
