---
layout: docwithnav
title: ThingsBoard Microservices architecture
description: ThingsBoard architecture

---

* TOC
{:toc}

Since ThingsBoard v2.2, the platform supports microservices deployment mode. 
This article consist of high level diagram, description of data flow between various services and some architecture choices made.       

## Architecture diagram

 <object width="80%" data="/images/reference/msa-architecture.svg"></object> 
  
## Transport Microservices

ThingsBoard provides MQTT, HTTP and CoAP based APIs that are available for your device applications/firmware. 
Each of the protocol APIs are provided by a separate server component and is part of ThingsBoard "Transport Layer". 
The full list of components and corresponding documentation pages are listed below:

* HTTP Transport microservice provides device APIs described [here](/docs/reference/http-api/); 
* MQTT Transport microservice provides device APIs described [here](/docs/reference/mqtt-api/)
and also enables gateway APIs described [here](/docs/reference/gateway-mqtt-api/);
* CoAP Transport microservice provides device APIs described [here](/docs/reference/coap-api/).

Each of the transport servers listed above communicates with the main ThingsBoard Node microservices using Kafka. 
[Apache Kafka](https://kafka.apache.org) is a distributed, reliable and scalable persistent message queue and streaming platform.

The messages that are sent to Kafka are serialized using [protocol buffers](https://developers.google.com/protocol-buffers/) 
with the messages definition available [here](https://github.com/thingsboard/thingsboard/blob/master/common/transport/transport-api/src/main/proto/transport.proto).

**Note**: Starting v2.3, ThingsBoard PE is going to support alternative queue implementation: Amazon DynamoDB. See [roadmap](/docs/reference/roadmap) for more details.
 
There are two main topics that are used by the transport layer microservices.

First topic "tb.transport.api.requests" is used to execute short-living API requests to check device credentials or create device on behalf of the gateway.
Responses to this requests are sent to the topic that is specific for each transport microservice. The prefix of such "callback" topic is "tb.transport.api.responses" by default.

Second topic "tb.rule-engine" is used to store all incoming telemetry messages from devices until they are not processed by the rule engine. In case the rule engine node(s) are down
, messages will be persisted and available for later processing.

You can see a part of configuration file to specify those properties below:   

```yaml
transport:
  type: "${TRANSPORT_TYPE:local}" # local or remote
  remote:
    transport_api:
      requests_topic: "${TB_TRANSPORT_API_REQUEST_TOPIC:tb.transport.api.requests}"
      responses_topic: "${TB_TRANSPORT_API_RESPONSE_TOPIC:tb.transport.api.responses}"
    rule_engine:
      topic: "${TB_RULE_ENGINE_TOPIC:tb.rule-engine}"
```    

Since ThingsBoard uses very simple communication protocol between transport and core services, 
it is quite easy to implement support of custom transport protocol, for example: CSV over plain TCP, binary payloads over UDP, etc.
We suggest to review existing transports [implementation](https://github.com/thingsboard/thingsboard/tree/master/common/transport/mqtt) to get started or [contact us](/docs/contact-us/) if you need any help. 

## Web UI Microservices

ThingsBoard provides a lightweight component written using Express.js framework to host static web ui content. Those components are completely stateless and no much configuration available. 

## JavaScript Executor Microservices

ThingsBoard rule engine allows users to specify custom javascript functions to parse, filter and transform messages. 
Since those functions are user defined, we need to execute them in an isolated context to avoid impact on main processing.
ThingsBoard provides a lightweight component written using Node.js to execute user defined JavaScript functions remotely to isolate them from the core rule engine components.

**Note**: ThingsBoard monolith app executes user defined functions in a java embedded JS engine, which does not allow to isolate resource consumption.    
 
We recommend to launch 20+ separate JavaScript Executors that will allow certain concurrency level and load balancing of JS execution requests. 
Each microservice will subscribe to "js.eval.requests" kafka topic as part of single consumer group to enable load balancing. 
Requests for the same script are forwarded to the same JS executor using built-in Kafka partitioning by key (key is a script/rule node id).

It is possible to define max amount of pending JS execution requests and max request timeout to avoid single JS execution blocking the JS exector microservice.
Each ThingsBoard core service has individual blacklist for JS functions and will not invoke blocked function more then 3(by default) times.

## ThingsBoard Node

ThingsBoard node is a core service written in Java that is responsible for handling:
 
 * [REST API](/docs/reference/rest-api/) calls;
 * WebSocket [subscriptions](/docs/user-guide/telemetry/#websocket-api) on entity telemetry and attribute changes;
 * Processing messages via [rule engine](/docs/user-guide/rule-engine-2-0/re-getting-started/);
 * Monitoring device [connectivity state](/docs/user-guide/device-connectivity-status/) (active/inactive).
 
**Note**: moving rule engine to a separate microservice is scheduled for ThingsBoard v2.4. See [roadmap](/docs/reference/roadmap) for more details. 
 
ThingsBoard node uses Akka actor system to implement tenant, device, rule chains and rule node actors. 
Platform nodes can join the cluster, where each node is equal. Service discovery is done via Zookeeper. 
ThingsBoard nodes route messages between each other using consistent hashing algorithm based on entity id. 
So, messages for the same entity are processed on the same ThingsBoard node. Platform uses [gRPC](https://grpc.io/) to send messages between ThingsBoard nodes.

**Note**: ThingsBoard authors consider moving from gRPC to Kafka in the future releases for exchanging messages between ThingsBoard nodes. 
The main idea is to sacrifice small performance/latency penalties in favor of persistent and reliable message delivery and automatic load balancing provided by Kafka consumer groups. 

## Third-party  

### Kafka

[Apache Kafka](https://kafka.apache.org/) is an open-source stream-processing software platform. ThingsBoard uses Kafka to persist incoming telemetry from HTTP/MQTT/CoAP transpots 
until it is processed by the rule engine. ThingsBoard also uses Kafka for some API calls between micro-services.

### Redis

[Redis](https://redis.io/) is an open source (BSD licensed), in-memory data structure store used by ThingsBoard for caching. 
ThingsBoard caches assets, entity views, devices, device credentials, device sessions and entity relations.

### Zookeeper

[Zookeeper](https://zookeeper.apache.org/) is an open-source server which enables highly reliable distributed coordination. 
ThingsBoard uses Zookeeper to address requests processing from a single entity (device,asset,tenant) to a certain ThingsBoard server 
and guarantee that only one server process data from particular device at a single point in time. 

**Note**: Zookeeper is also used by Kafka, so there was almost no reasons to use two different coordination services (Consul, etcd) in parallel.      

### HAProxy (or other LoadBalancer)

We recommend to use HAProxy for load balancing. 
You can find the reference [haproxy.cfg](https://github.com/thingsboard/thingsboard/blob/c84bcd51d843472c3e96ad3da226d12df9915fda/docker/haproxy/config/haproxy.cfg) 
configuration that corresponds to the architecture diagram below: 

{% highlight conf %}
{% github_sample /thingsboard/thingsboard/blob/c84bcd51d843472c3e96ad3da226d12df9915fda/docker/haproxy/config/haproxy.cfg %}
{% endhighlight %}

### Databases

See "[SQL vs NoSQL vs Hybrid?](/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach)" for more details. 

## Deployment

You can find the reference [docker-compose.yml](https://github.com/thingsboard/thingsboard/blob/master/docker/docker-compose.yml)
and corresponding [documentation](https://github.com/thingsboard/thingsboard/blob/master/docker/README.md) that will help you to run ThingsBoard containers in a cluster mode 
(although on a single host machine)  

{% highlight yaml %}
{% github_sample /thingsboard/thingsboard/blob/master/docker/docker-compose.yml 15 1000%}
{% endhighlight %}




    
