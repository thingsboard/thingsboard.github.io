---
layout: docwithnav
title: Installing ThingsBoard Edge Overview
description: ThingsBoard Edge features, FAQ
---

* TOC
{:toc}

![image](/images/edge/overview/edge_overview.svg)

### Edge devices

ThingsBoard Edge provides support for three communication protocols:
* [**HTTP API**](/docs/reference/http-api/)
* [**MQTT API**](/docs/reference/mqtt-api/)
* [**CoAP API**](/docs/reference/coap-api/)

![image](/images/edge/overview/edge_architecture.svg)

### Roles management
### Relations with assets and devices
### Data visualization
#### Widgets
#### Dashboards

### Rule Engine

ThingsBoard Edge uses separate [ThingsBoard Rule Engine framework](/docs/user-guide/rule-engine-2-0/re-getting-started/) for building event-based workflows on the edge side and communicating with cloud - **Edge Rule chains**. 

![image](/images/edge/nodes/rule-chains-menu.png)

**Edge Rule chains** framework is almost the same as **Core Rule chains**, except few differences, mentioned below.
 
#### Rule nodes

 * Only **Edge rule chains** has rule node [**Push to cloud**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-cloud)
 * Only **Core rule chains** has rule node [**Push to edge**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-edge)

#### Default edge rule chains

ThingsBoard Edge allows tenant admins to make edge rule chains **default**. 
Rule chains with activated default flag will be automatically assigned to the next edges created by the same owner.

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

ThinsBoard Edge is able to ...

### Security

Each edge instance has unique immutable credentials: pair of **Key** and **Secret**. It is used to connect cloud to edge service.

For **secure device message transporting** you can use MQTT (over SSL) or HTTPS protocols. Each device has unique access token credentials that is used to setup connection.