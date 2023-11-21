* TOC
{:toc}

## ThingsBoard services

ThingsBoard is designed to be:

* **scalable**: horizontally scalable platform, build using leading open-source technologies.
* **fault-tolerant**: no single-point-of-failure, every node in the cluster is identical.
* **robust and efficient**: single server node can handle tens or even hundreds thousands of devices depending on use-case. 
ThingsBoard cluster can handle millions of devices.
* **durable**: never lose your data. ThingsBoard supports various queue implementations to provide extremely high message durability.
* **customizable**: adding new functionality is easy with customizable widgets and rule engine nodes.


The diagram below shows key system components and interfaces they provide. Let's walk through them.


{% if docsPrefix == null %}
<object width="100%" data="https://img.thingsboard.io/reference/thingsboard-architecture.svg"></object>
{% endif %}
{% if docsPrefix == "pe/" %}
<object width="100%" data="https://img.thingsboard.io/reference/thingsboard-architecture-pe.svg"></object>
{% endif %}


**ThingsBoard Transports**
 
ThingsBoard provides [MQTT](/docs/{{docsPrefix}}reference/mqtt-api/), [HTTP](/docs/{{docsPrefix}}reference/http-api/), [CoAP](/docs/{{docsPrefix}}reference/coap-api/) and [LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api/) based APIs that are available for your device applications/firmware. 
Each of the protocol APIs are provided by a separate server component and is part of ThingsBoard "Transport Layer". 
MQTT Transport also provides [Gateway APIs](/docs/{{docsPrefix}}reference/gateway-mqtt-api/) to be used by gateways that represent multiple connected devices and/or sensors.

Once the Transport receives the message from device, it is parsed and pushed to durable [Message Queue](/docs/{{docsPrefix}}reference/#message-queues-are-awesome). 
The message delivery is acknowledged to device only after corresponding message is acknowledged by the message queue.

**ThingsBoard Core**

ThingsBoard Core is responsible for handling [REST API](/docs/{{docsPrefix}}reference/rest-api/) calls and WebSocket [subscriptions](/docs/{{docsPrefix}}user-guide/telemetry/#websocket-api).
It is also responsible for storing up to date information about active device sessions and monitoring device [connectivity state](/docs/{{docsPrefix}}user-guide/device-connectivity-status/).
ThingsBoard Core uses Actor System under the hood to implement actors for main entities: tenants and devices. 
Platform nodes can join the cluster, where each node is responsible for certain partitions of the incoming messages.

**ThingsBoard Rule Engine**

ThingsBoard Rule Engine is the heart of the system and is responsible for processing incoming [messages](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-engine-message).
Rule Engine uses Actor System under the hood to implement actors for main entities: rule chains and rule nodes.
Rule Engine nodes can join the cluster, where each node is responsible for certain partitions of the incoming messages.

Rule Engine subscribes to incoming data feed from queue(s) and acknowledge the message only once it is processed. 
There are multiple strategies available that control the order or message processing and the criteria of message acknowledgement.
See [submit strategies](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-submit-strategy) and [processing strategies](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy)
for more details.

ThingsBoard Rule Engine may operate in two modes: shared and isolated. In shared mode, rule engine process messages that belong to multiple tenants.
In isolated mode Rule Engine may be configured to process messages for tenants of specific tenant profile only. 

**ThingsBoard Web UI**

ThingsBoard provides a lightweight component written using Express.js framework to host static web ui content. 
Those components are completely stateless and no much configuration available. 
The static web UI contains application bundle. Once it is loaded, the application starts using the REST API and WebSockets API provided by ThingsBoard Core.  
 
## Message Queues are awesome!

ThingsBoard supports multiple message queue implementations: Kafka, RabbitMQ, AWS SQS, Azure Service Bus and Google Pub/Sub. We plan to extend this list in the future.
Using durable and scalable queues allow ThingsBoard to implement back-pressure and load balancing. Back-pressure is extremely important in case of peak loads.  
We provide "abstraction layer" over specific queue implementations and maintain two main concepts: topic and topic partition. 
One topic may have configurable number of partitions. Since most of the queue implementations does not support partitions, we use *topic + "." + partition* pattern.
  
ThingsBoard message Producers determines which partition to use based on the hash of entity id. 
Thus, all messages for the same entity are always pushed to the same partition.
ThingsBoard message Consumers coordinate using Zookeeper and use consistent-hash algorithm to determine list of partitions that each Consumer should subscribe to.
While running in microservices mode, each service also has the dedicated "Notifications" topic based on the unique service id that has only one partition.      
   
ThingsBoard uses following topics:

 * **tb_transport.api.requests**: to send generic API calls to check device credentials from Transport to ThingsBoard Core.
 * **tb_transport.api.responses**: to receive device credentials verification results from ThingsBoard Core to Transport.
 * **tb_core**: to push messages from Transport or Rule Engine to ThingsBoard Core. Messages include session lifecycle events, attribute and RPC subscriptions, etc.
 * **tb_rule_engine**: to push messages from Transport or ThingsBoard Core to Rule Engine. Messages include incoming telemetry, device states, entity lifecycle events, etc.
 
**Note:** All topic properties including names and number of partitions are [configurable](/docs/user-guide/install/{{docsPrefix}}config/) via thingsboard.yml or environment variables. 
Since ThingsBoard 3.4 we can configure Rule Engine queues by the UI, see the [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/).

**Note:** Starting version 2.5 we have switched from using [gRPC](https://grpc.io/) to  [Message Queues](/docs/{{docsPrefix}}reference/#message-queues-are-awesome)
for all communication between ThingsBoard components. 
The main idea was to sacrifice small performance/latency penalties in favor of persistent and reliable message delivery and automatic load balancing.  

## On-premise vs cloud deployments

ThingsBoard supports both on-premise and cloud deployments. 
With more then 5000 ThingsBoard servers running all over the world, ThingsBoard is running in production on AWS, Azure, GCE and private data centers.
It is possible to launch ThingsBoard in the private network with no internet access at all.

## Standalone vs cluster mode

Platform is designed to be horizontally scalable and supports automatic discovery of new ThingsBoard servers (nodes). 
All ThingsBoard nodes inside cluster are identical and are sharing the load. 
Since all nodes are identical there is no "master" or "coordinator" processes and there is no single point of failure. 
The load balancer of your choice may forward request from devices, applications and users to all ThingsBoard nodes.

## Monolithic vs microservices architecture

Starting ThingsBoard v2.2, it is possible to run the platform as a monolithic application or as a set of microservices. 
Supporting both options requires some additional programming efforts, however, is critical due to back-ward compatibility with variety of existing installations.

Approximately 80% of the platform installations are still using monolithic mode due to minimum support efforts, knowledge and hardware resources to do the setup and low maintenance efforts.

However, if you do need high availability or would like to scale to millions of devices, then microservices is a way to go.
There are also some challenges that are solved with microservices architecture and applicable for more complex deployments and usage scenarios. 
For example, running a multi-tenant deployments where one need more granular isolation to protect from:

* unpredictable load spikes;
* unpredictable rule chain misconfiguration;
* single devices opening 1000s of concurrent connections due to firmware bugs;
* and many other cases.
 
Please follow the links listed below to learn more and choose the right architecture and deployment option:

* [**monolithic**](/docs/{{docsPrefix}}reference/monolithic): Learn more about deployment, configuring and running ThingsBoard platform in a monolythic mode.  
* [**microservices**](/docs/{{docsPrefix}}reference/msa): Learn more about deployment, configuring and running ThingsBoard platform in a microservices mode.
 

## SQL vs NoSQL vs Hybrid database approach

ThingsBoard uses database to store 
[entities](/docs/{{docsPrefix}}user-guide/entities-and-relations/) (devices, assets, customers, dashboards, etc) and 
[telemetry](/docs/{{docsPrefix}}user-guide/telemetry/) data (attributes, timeseries sensor readings, statistics, events). 
Platform supports three database options at the moment:

* **SQL** - Stores all entities and telemetry in SQL database. ThingsBoard authors recommend to use PostgreSQL and this is the main SQL database that ThingsBoard supports. 
It is possible to use HSQLDB for local development purposes. **We do not recommend to use HSQLDB** for anything except running tests and launching dev instance that has minimum possible load.
* **NoSQL (Deprecated)** - Stores all entities and telemetry in NoSQL database. ThingsBoard authors recommend to use Cassandra and this is the only NoSQL database that ThingsBoard supports at the moment.
Please note that this option is deprecated in favor of Hybrid approach due to many limitations of NoSQL for transactions and "joins" that are required to enable advanced search over IoT entities.
* **Hybrid (PostgreSQL + Cassandra)** - Stores all entities in PostgreSQL database and timeseries data in Cassandra database. 
* **Hybrid (PostgreSQL + TimescaleDB)** - Stores all entities in PostgreSQL database and timeseries data in Timescale database. 

It is possible to configure this options using **thingsboard.yml** file. See database [configuration](/docs/user-guide/install/{{docsPrefix}}config/) page for more details.

```yaml
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
  ts_latest:
    type: "${DATABASE_TS_LATEST_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)

```

## Programming languages and third-party

ThingsBoard back-end is written in Java, but we also have some micro-services based on Node.js. ThingsBoard front-end is a SPA based on Angular 9 framework. 
See [monolithic](/docs/{{docsPrefix}}reference/monolithic) and [microservices](/docs/{{docsPrefix}}reference/monolithic) pages for more details about third-party components used.  