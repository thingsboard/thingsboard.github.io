---
layout: docwithnav
title: Installing ThingsBoard Edge Overview
description: ThingsBoard Edge features, FAQ
---

* TOC
{:toc}

![image](/images/edge/overview/edge_overview.svg)

### How to connect device

ThingsBoard Edge supports device connections using:
* HTTP protocol
* MQTT protocol

More info about how to connect devices to ThingsBoard you can find [here](/docs/guides/).

### Roles Management

### Rule Engine

ThingsBoard Edge uses separate [ThingsBoard Rule Engine framework](/docs/user-guide/rule-engine-2-0/re-getting-started/) for building event-based workflows on the edge side and communicating with cloud. 

![image](/images/edge/nodes/rule-chains-menu.png)

**Edge Rule chains** is almost the same as **Core Rule chains**, except few differences.
 
#### Rule nodes

 * Only **Edge rule chains** has rule node [**Push to cloud**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-cloud)
 * Only **Core rule chains** has rule node [**Push to edge**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-edge)

#### Default edge rule chains

ThingsBoard Edge allows tenant admins to make edge rule chains **default**. 
Rule chains with activated default flag will be automatically assigned to the edges.

![image](/images/edge/nodes/make-default.png)

![image](/images/edge/nodes/default.png)

#### Export/Import edge rule chains

You are able to export your rule chain to JSON format and import it to the same or another ThingsBoard instance ([see detailed how-to instruction here](/docs/user-guide/ui/rule-chains/#rule-chains-importexport)).

Keep in mind, **you won't be able to import Core rule chains to the Edge rule chains and vice versa**.

### Technologies and Frameworks
* **Client-side**: Angular.js/React (Angular 9+ coming soon)
* **Server-side**: Java, Spring
* **Database**: PostgreSQL
* **Protocols**: HTTP(S), MQTT, CoAP
* **Cloud connectivity**: gRPC

### Performance
### Security