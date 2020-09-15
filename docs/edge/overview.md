---
layout: docwithnav
title: ThingsBoard Edge Overview
description: ThingsBoard Edge features, FAQ
---

* TOC
{:toc}

![image](/images/edge/overview/edge_overview.svg)

### Features overview

ThingsBoard Edge supports all **ThingsBoard Community Edition features**:
<ul>
<li><b><a href="/docs/user-guide/attributes/">Attributes</a></b> - assign and manage custom attributes to your entities.</li>
<li><b><a href="/docs/user-guide/telemetry/">Telemetry</a></b> - API for collection of time-series data and related use cases.</li>
<li><b><a href="/docs/user-guide/entities-and-relations/">Entities and relations</a></b> - model physical world objects (e.g. devices and assets) and relations between them.</li>
<li><b><a href="/docs/guides#AnchorIDDataVisualization">Data visualization</a></b> - develop custom dashboards and widgets.</li>
<li><b><a href="/docs/edge/overview/#edge-rule-engine">Rule engine</a></b> - manage data processing & actions on incoming telemetry and events separately for edge and cloud service side.</li>
<li><b><a href="/docs/user-guide/rpc/">RPC</a></b> - send remote procedure calls (RPC) <b>both from edge and cloud sides</b> to devices and vice versa.</li>
<li><b><a href="/docs/user-guide/audit-log/">Audit log</a></b> - track user activity.</li>
<li><b><a href="/docs/user-guide/api-limits/">API Limits</a></b> - control and limit number of API requests from single host.</li>
</ul>

Major **ThingsBoard PE** features also included:
 * [**White-labeling**](/docs/user-guide/white-labeling/) - allows you to configure a custom menu, logo, color scheme, email server settings, customer email templates to interact with the users etc.
 * [**Scheduler**](/docs/user-guide/scheduler/) - allows you to schedule various types of events with flexible schedule configuration.
 * [**Entity Groups**](/docs/user-guide/groups/) - allows you to organize entities into groups, assign roles to specific user group, grant specific permissions to specific user groups over specific device groups.

For user convenience ThingsBoard Edge also shows basic edge and cloud info on UI page **Edge Info** : 
* Name, ID, Type, Routing Key
* Connection status with the cloud: **Connected / Disconnected**
* Cloud type: **PE(Professional Edition) / CE(Community Edition)**
* Last time connected to/disconnected from cloud

![image](/images/edge/edge-overview.png)

### Connecting edge device

ThingsBoard Edge provides support for standard ThingsBoard communication protocols that pushes data to the rule engine:
* [**HTTP API**](/docs/reference/http-api/)
* [**MQTT API**](/docs/reference/mqtt-api/)
* [**CoAP API**](/docs/reference/coap-api/)

![image](/images/edge/overview/edge_architecture.svg)


### Edge Rule Engine

ThingsBoard Edge uses separate [ThingsBoard Rule Engine framework](/docs/user-guide/rule-engine-2-0/re-getting-started/) for building event-based workflows on the edge side and communicating with cloud.
You can find **Edge Rule chains** in the menu by clicking on **Rule chains** button toggle. 

![image](/images/edge/nodes/rule-chains-menu.png)

**Edge Rule chains** framework is almost the same as **Core Rule chains**, except few differences mentioned below.
 
#### Rule nodes

 * Only **Edge rule chains** has rule node [**Push to cloud**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-cloud)
 * Only **Core rule chains** has rule node [**Push to edge**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-edge)

#### Default edge rule chains

ThingsBoard Edge allows tenants to make edge rule chains **default**. 
Rule chains with activated default flag will be automatically assigned to the next edges created by the same owner.

![image](/images/edge/nodes/make-default.png)

![image](/images/edge/nodes/default.png)

#### Export/Import edge rule chains

You are able to export your rule chain to JSON format and import it to the same or another ThingsBoard instance ([see detailed how-to instruction here](/docs/user-guide/ui/rule-chains/#rule-chains-importexport)).

Keep in mind, **you won't be able to import Core rule chains to the Edge rule chains and vice versa**.

### Entity Groups management

ThingsBoard Edge is almost completely managed from the cloud UI. 

Tenant Administator have to assign particular entity or entity group (EG) in order to have access in the it to

What can be assigned to edge?
 * **Entity Group(s) of Users, Assets, Devices, Entity Views, Dashboards**. You may also create new entities in assigned groups.
 * **Rule chains**. By default, new edges are created with assigned **root** and **default** rule chains. **Only** Edge Rule chains can be assigned. 
 * **Scheduler events**.

Edge's entity groups management can be accessed from UI:  

![image](/images/edge/overview/cloud-management2.png)

Customer user is able to view entities/EG that are assigned to specific edge.

Tenant Administrator is also able to **create a new device from ThingsBoard Edge UI**. In this case such device will be created in the cloud and located in device group with special name template: *[Edge] ${name} All*.

### Roles management

Each Edge Group can only belong to one owner. This may be either Tenant or Customer. 

As Tenant Administrator you are able to **manage roles and permissions** for user groups that will have access to ThingsBoard Edge features:
 * Manage flexible set of permissions to interact with devices, assets, entity views, dashboards.
 * Assign roles to specific user groups.
 
Here you can find more information about [**ThingsBoard roles management**](/docs/user-guide/rbac/).

### Technologies and Frameworks
* **Client-side**: Angular.js/React (Angular 9+ coming soon)
* **Server-side**: Java, Spring
* **Database**: PostgreSQL
* **Protocols**: HTTP(S), MQTT, CoAP
* **Cloud connectivity**: gRPC

### Security
Each edge has unique immutable credentials - autogenerated pair of **Key** and **Secret** is used to connect cloud to edge service.

For **secure device message transporting** you can use MQTT (over SSL) or HTTPS protocols. Each device has unique access token credentials that is used to setup connection.
