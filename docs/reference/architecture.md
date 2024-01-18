---
layout: docwithnav
title: ThingsBoard Architecture
description: ThingsBoard IoT Platform architecture
redirect_from: "/docs/user-guide/rule-engine-2-0/architecture/"

---

* TOC
{:toc}

ThingsBoard is designed to distribute workload across multiple nodes without a single point of failure.
Each ThingsBoard node is identical and can handle request from both device and server-side applications.
 
## High-level overview

 ![image](/images/reference/architecture-in-brief.svg)

#### Device Connectivity

ThingsBoard supports [**MQTT**](/docs/reference/mqtt-api/), [**LwM2M**](/docs/reference/lwm2m-api/) , [**CoAP**](/docs/reference/coap-api/) and [**HTTP**](/docs/reference/http-api/) protocols for device connectivity.
It is possible to plugin support of different protocols or customize existing implementations.

#### Rule Engine

ThingsBoard [Rule Engine](/docs/user-guide/rule-engine/) allows to process messages from devices and trigger configurable processing modules called Plugins.

#### Core Services

ThingsBoard contains set of core services that allow managing the following entities:

 * Devices and their credentials
 * Rule Chains and Rule Nodes
 * Tenants and customers
 * Widgets and Dashboard
 * Alarms and Events
 
Rules are able to invoke a certain subset of this APIs. For example, a rule can create an alarm for certain device.

#### Server-side API Gateway

Every ThingsBoard server provides REST API for registered users. 
System Telemetry service allows to manage attributes and fetch timeseries data using websockets and REST API.
System RPC service provides REST API to push custom commands to devices.
Learn more about ThingsBoard REST APIs [here](/docs/reference/rest-api/)

## Actor model

[Actor model](https://en.wikipedia.org/wiki/Actor_model) enables high performance concurrent processing of messages from devices as long as server-side API calls.
ThingsBoard uses own Actor System implementation (sharpened for our use cases) with following actor hierarchies.

 ![image](/images/reference/actor-system-hierarchies.svg)

The brief description of each actor's functionality is listed below:

 * **App Actor** - responsible for management of tenant actors. 
 An instance of this actor is always present in memory.
 * **Tenant Actor** - responsible for management of tenant device & rule chain actors. 
 An instance of this actor is always present in memory.
 * **Device Actor** - maintain state of the device: active sessions, subscriptions, pending RPC commands, etc. 
 Caches current device attributes in memory for performance reasons.
 An actor is created when the first message from the device is processed. The actor is stopped when there is no messages from devices for a certain time.
 * **Rule Chain Actor** - process incoming messages and dispatches them to rule node actors. 
 An instance of this actor is always present in memory.
 * **Rule Node Actor** - process incoming messages, and report results back to rule chain actor. 
 An instance of this actor is always present in memory.
 
## Clustering mode

###### Service Discovery

ThingsBoard uses Zookeeper for service discovery.
All ThingsBoard nodes are identical and registered as ephemeral in Zookeeper. Apache Curator [path cache receipt](http://curator.apache.org/curator-recipes/path-cache.html) is used to keep track of all available sibling nodes.

###### Consistent Hashing

ThingsBoard adopts [consistent hashing](https://en.wikipedia.org/wiki/Consistent_hashing) to ensure scalability and availability.
Message from Device A that is received on a particular node may be forwarded to the other node based on the hash of the device ID.
Although this introduces certain networking overhead, it allows to process all messages from a particular device using corresponding device actor on a determined server, which introduces the following advantages:

 * improve cache hit rate. Device attributes and other device related data are fetched by device actor on a specific server.
 * avoid race conditions. All messages for a particular device are processed on a determined server.
 * allows targeting server-side api calls based on the device id.
   
The illustration below demonstrates how ThingsBoard handles RPC request to Device D1.
In this case, the request arrives at Server A, but D1 is connected using MQTT to Server C. 
In the worst-case scenario, D1 Device Actor will be located on another server B that obviously does not match either A or C.

 ![image](/images/reference/cluster-mode-rpc-request.svg)

## Security

### Transport encryption

As a system administrator, you are able to configure ThingsBoard to use secure sockets layer for HTTP(s) and MQTT transports.
DTLS for CoAP is not supported yet.

### Device authentication

ThingsBoard is designed to support many types of device credentials.
Current release provides support of token based credentials for all [protocols](/docs/reference/protocols/) 
and support of X.509 certificate based credentials for MQTT protocol. See [MQTT over SSL](/docs/user-guide/mqtt-over-ssl/) guide for more details.

## Third-party tools

ThingsBoard uses following main third-party projects:
 
 * Zookeeper - for services coordination
 * Cassandra - as a scalable and reliable database
 * Kafka (or RabbitMQ, AWS SQS, Azure Event Hub, Google PubSub) - as a scalable message queue

