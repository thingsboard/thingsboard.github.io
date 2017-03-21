---
layout: docwithnav
title: Thingsboard Architecture
description: Thingsboard IoT Platform architecture

---

* TOC
{:toc}

Thingsboard is designed to distribute workload between multiple nodes without single point of failure.
Each Thingsboard node is identical and can handle request from both device and server-side applications. 
 
## High level overview

 ![image](/images/reference/architecture-in-brief.svg)

#### Device Connectivity

Thingsboard supports [**MQTT**](/docs/reference/mqtt-api/), [**CoAP**](/docs/reference/coap-api/) and [**HTTP**](/docs/reference/http-api/) protocols for device connectivity. 
It is possible to plugin support of different protocols or customize existing implementations.

#### Rule Engine

Thingsboard [Rule Engine](/docs/user-guide/rule-engine/) allows to process messages from devices and trigger configurable processing modules called Plugins.

#### Core Services

Thingsboard contains set of core services that allow to manage following entities:

 * Devices and their credentials
 * Rules and Plugins
 * Tenants and customers
 * Widgets and Dashboard
 * Alarms and Events
 
Rules and Plugins are able to invoke certain subset of this APIs. For example, rule can create an alarm for certain device.

#### Server-side API Gateway

Every Thingsboard server provides REST API for registered users. 
Plugins are able to extend existing REST APIs and also handle websocket connections. 
For example:
 - System Telemetry plugin allows to manage attributes and fetch timeseries data using websockets and REST API.
 - System RPC plugin provides REST API to push custom commands to devices.

## Actor model

[Actor model](https://en.wikipedia.org/wiki/Actor_model) enables high performant concurrent processing of messages from devices as long as server-side API calls.
Thingsboard uses [Akka](http://akka.io/) as an actor system implementation with following actor hierarchies.

 ![image](/images/reference/actor-system-hierarchies.svg)

Brief description of each actors functionality is listed below:

 * **App Actor** - responsible for management of tenant, system rules & plugins actors. 
 Instance of this actor is always present in memory.
 * **Tenant Actor** - responsible for management of tenant device, rules & plugins actors. 
 Instance of this actor is always present in memory.
 * **Device Actor** - maintain state of the device: active sessions, subscriptions, pending RPC commands, etc. 
 Caches current device attributes in memory for performance reasons.
 Actor is created when first message from device is processed. Actor is stopped when there is no messages from devices for a certain time.
 * **Rule Actor** - filter and process incoming messages, converts them to actions and forward this actions to plugin actors. 
 Instance of this actor is always present in memory.
 * **Plugin Actor** - process incoming messages, and report results back to rule actor. Also handles server side requests. 
 Instance of this actor is always present in memory.
 
 * **Device Session Manager Actor** - responsible for management of device session actors. 
 Creates session actors on first message with corresponding session id. Closes session actors when corresponding session is closed. 
 * **Session Actor** - represents communication session between device and Thingsboard server. 
 Session may be synchronous (HTTP, CoAP) and asynchronous (MQTT, CoAP with Observe option).
 
 * **RPC Session Manager Actor** - responsible for management of cluster RPC session actors.
 Creates session actor when new server is up. Closes session actor when server is down.
 * **RPC Session Actor** - represents communication session between two Thingsboard servers in the cluster mode.
 Communication is done using HTTP/2 based on [gRPC](http://www.grpc.io/). 

## Clustering mode

###### Service Discovery

Thingsboard uses Zookeeper for service discovery. 
All Thingsboard nodes are identical and registered as ephemeral in Zookeeper. Apache Curator [path cache receipt](http://curator.apache.org/curator-recipes/path-cache.html) is used to keep track of all available sibling nodes.  

###### Consistent Hashing

Thingsboard adopts [consistent hashing](https://dzone.com/articles/simple-magic-consistent) to ensure scalability and availability.
Message from Device A that is received on particular node may be forwarded to the other node based on the hash of the device ID.
Although this introduce certain networking overhead, 
it allows to process all messages from particular device using corresponding device actor on a determined server, which introduce following advantages:

 * improve cache hit rate. Device attributes and other device related data are fetched by device actor on a specific server.
 * avoid race conditions. All messages for particular device are processed on a determined server.
 * allows to target server-side api calls based on device id.
   
The illustration below demonstrates how Thingsboard handles RPC request to Device D1. 
In this case request arrives to Server A, but D1 is connected using MQTT to Server C. 
In the worst-case scenario, D1 Device Actor will be located on another server B that obviously does not match either A or C.

 ![image](/images/reference/cluster-mode-rpc-request.svg)

## Security

### Transport encryption

As a system administrator you are able to configure Thingsboard to use secure sockets layer for HTTP(s) and MQTT transports.
DTLS for CoAP is not supported yet.

### Device authentication

Thingsboard is designed to support many types of device credentials. 
Current release provides support of token based credentials for all [protocols](/docs/reference/protocols/) 
and support of X.509 certificate based credentials for MQTT protocol. See [MQTT over SSL](/docs/user-guide/mqtt-over-ssl/) guide for more details.

## Third-party tools

Thingsboard uses following main third-party projects:
 
 * Akka - for actor system implementation
 * Zookeeper - for services coordination 
 * gRPC - for high-performance RPC 
 * Cassandra - as a scalable and reliable database

