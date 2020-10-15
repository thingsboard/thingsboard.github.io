---
layout: docwithnav
title: What is ThingsBoard Edge?
description: ThingsBoard Edge features, FAQ
---

The [**ThingsBoard Edge**](/products/thingsboard-edge/) is a ThingsBoard's software product for edge computing. 
It allows bringing data analysis and management to the edge, while seamlessly synchronizing with the cloud (ThingsBoard CE/PE).  

ThingsBoard is an open-source IoT platform for data collection, processing, visualization, and device management. See [**What is ThingsBoard?**](/docs/getting-started-guides/what-is-thingsboard/) if you are new platform user.  

![image](/images/thingsboard-edge/overview/edge_overview.svg)

#### ThingsBoard Edge features                                                       
                                                                
ThingsBoard Edge provides following features:

 - **Local deployment and storage** to operate with and store data from local devices without internet connection. Push updates to the cloud once connection restored.
 
 ![image](/images/thingsboard-edge/overview/offline_network_.svg)

 - **Traffic filtering** to filter data from devices on the ThingsBoard Edge service and push to cloud only subset of the data.
 
  ![image](/images/thingsboard-edge/overview/data_filtering.svg)
 
 - React instantly to critical situations on site without internet connection to cloud with **Local alarms**.
 
  ![image](/images/thingsboard-edge/overview/alarm.svg)

 - Monitor local events and timeseries data with a **real-time dashboards**.
 - **Batch Update** thousands of edge configurations in a single click.
 
 ![image](/images/thingsboard-edge/overview/update_dashboard.svg)
 
 - **Local storage** to store data from the devices on the edge without internet connection to the cloud and push to the cloud updates once connection restored

ThingsBoard Edge developed on to of ThingsBoard CE/PE and inheritances functionality from them.  

It supports next **ThingsBoard Community Edition** features:
 * [**Attributes**](/docs/user-guide/attributes/) - assign and manage custom attributes to your entities.
 * [**Telemetry**](/docs/user-guide/telemetry/) - API for collection of time-series data and related use cases.
 * [**Entities and relations**](/docs/user-guide/entities-and-relations/) - model physical world objects (e.g. devices and assets) and relations between them.
 * [**Data visualization**](/docs/guides#AnchorIDDataVisualization) - develop custom dashboards and widgets.
 * [**Rule engine**](/docs/thingsboard-edge/features/edge-rule-engine/) - manage data processing & actions on incoming telemetry and events separately for edge and cloud service side.
 * [**RPC**](/docs/user-guide/rpc/) - send remote procedure calls (RPC) **both from edge and cloud sides** to devices and vice versa.
 * [**Audit log**](/docs/user-guide/audit-log/) - track user activity.
 * [**API Limits**](/docs/user-guide/api-limits/) - control and limit number of API requests from single host.

As well ThingsBoard Edge supports major **ThingsBoard PE** features:
 * [**White-labeling**](/docs/user-guide/white-labeling/) - allows you to configure a custom menu, logo, color scheme, email server settings, customer email templates to interact with the users etc.
 * [**Scheduler**](/docs/user-guide/scheduler/) - allows you to schedule various types of events with flexible schedule configuration.
 * [**Entity Groups**](/docs/user-guide/groups/) - allows you to organize entities into groups, assign roles to specific user group, grant specific permissions to specific user groups over specific device groups.

**Edge Info** page introduced to provide user information regarding basic edge configuration and cloud information (URL and cloud type): 
* Name, ID, Type, Routing Key
* Connection status with the cloud: **Connected / Disconnected**
* Cloud type: **PE(Professional Edition) / CE(Community Edition)**
* Maximum amount of allowed devices and assets
* Last time connected to/disconnected from cloud

![image](/images/thingsboard-edge/edge-info.png)

#### Architecture

ThingsBoard Edge designed to be:

* **scalable**: spread your computation and data analysis on thousands of edges.
* **robust and efficient**: single edge can handle up to 1000 of devices depending on the [use-case](/docs/thingsboard-edge/use-cases/overview/) and deployed hardware.
* **customizable**: adding new functionality is easy with customizable widgets and rule engine nodes.
* **durable**: all messages and events collected in the persistence layer and will be delivered to cloud.

**Device Connectivity**

ThingsBoard Edge provides support for standard ThingsBoard CE/PE device communication protocols:
* [**HTTP API**](/docs/reference/http-api/)
* [**MQTT API**](/docs/reference/mqtt-api/)
* [**CoAP API**](/docs/reference/coap-api/)

![image](/images/thingsboard-edge/overview/edge_architecture.svg)

**Technologies and Frameworks**

* **Client-side**: Angular.js/React or Angular 9+
* **Server-side**: Java, Spring
* **Database**: PostgreSQL
* **Protocols**: HTTP(S), MQTT, CoAP
* **Cloud connectivity**: gRPC(SSL)

**Security**

Autogenerated pair of **Key** and **Secret** is a default way to securely connect ThingsBoard Each to cloud instance using gRPC protocol. 

For additional security gRPC connection could be established on top of **SSL** technology.

#### Project Roadmap

<p><a href="/docs/thingsboard-edge/roadmap" class="button">ThingsBoard Edge Roadmap</a></p>

#### Next Steps

<p><a href="/docs/thingsboard-edge/getting-started" class="button">Getting Started Guide</a></p>