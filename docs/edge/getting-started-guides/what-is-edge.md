---
layout: docwithnav-edge
title: What is ThingsBoard Edge?
description: ThingsBoard Edge features, FAQ
---

The **ThingsBoard Edge** is a ThingsBoard's software product for edge computing. 
It allows bringing data analysis and management to the edge, where the data created. At the same time ThingsBoard Edge seamlessly synchronizing with the ThingsBoard cloud (ThingsBoard Cloud, ThingsBoard Demo, ThingsBoard PE or ThingsBoard CE) according to your business needs.

ThingsBoard Edge is **single** Tenant and **single** Customer entity.
You cannot share ThingsBoard Edge between multiple tenants or customers or you cannot connect devices from multiple tenants to a single ThingsBoard Edge entity. 
In this case you'll need to provision multiple ThingsBoard Edge instances for every tenant (customer).
But you can use a single ThingsBoard Edge instance for one tenant and one customer from the same tenant.  

ThingsBoard is an open-source IoT platform for data collection, processing, visualization, and device management. See [**What is ThingsBoard?**](/docs/getting-started-guides/what-is-thingsboard/) if you are new platform user.  
<br>

![image](/images/edge/overview/edge_overview.svg)

#### ThingsBoard Edge use-cases

- **Autonomous Vehicles**
Edge computing makes it possible to collect, process and react to road events with almost no latency. Modern autonomous vehicles produces tons of data - between 5 TB and 20 TB a day. 4G or 5G will not able to provide that network throughput, but with ThingsBoard Edge you are able to filter data. Most of this data should be processed locally, and only subset of this data will be pushed to the cloud.

- **Smart Farming**
Quickly react to failures of silo aeration systems on a remote site even if connectivity to the cloud from on-field location is pure at the moment.

- **Smart Houses**
Bringing the processing and analyzing data closer to the smart house provides the possibility to secure sensitive user information at the edge. Additionally, it provides a good user experience because of the low latency of smart house solutions - user will get responses from end devices much faster, comparing to connecting edge devices to the cloud to make some decisions. 

- **Security Solutions**
It's necessary to react to security violations and threats within seconds and edge provides this possibility. You don't need to care about quality of your connectivity to cloud - decision will be made by local edge engine on a remote site in real-time. 

- **In-hospital Monitoring**
To secure data privacy in healthcare devices processing of this data must be done on the edge. Push to the cloud only required pieces of readings from medical devices, while storing all other sensitive data on the edge. 
Additional benefit from edge processing in this use-case - react to critical medical cases as quickly as possible due to real time processing of data from edge medical devices. 

- **Predictive Maintenance**
Brings processing and storage of edge device readings closer to the equipment. Analyze tons of data locally and detect changes in the production lines before a failure occurs. Send to the cloud only average readings from productions lines according to your business needs.

#### ThingsBoard Edge features

With **ThingsBoard Edge** you get the following benefits:

 - **Local deployment and storage** to process and store data from edge (local) devices without connection to the cloud. Push updates to the cloud once connection restored.
 
 ![image](/images/edge/overview/offline_network_.svg)

 - **Traffic filtering** to filter data from edge (local) devices on the ThingsBoard Edge service and push to cloud only subset of the data for further processing or storage.
 
  ![image](/images/edge/overview/data_filtering.svg)
 
 - **Local alarms** to react instantly to critical situations on site without connectivity to cloud.
 
  ![image](/images/edge/overview/alarm.svg)

 - Monitor local events and timeseries data with a **real-time dashboards**.
 - **Batch Update** thousands of edge configurations in a single click.
 
 ![image](/images/edge/overview/update_dashboard.svg)
 
 - **Local storage** to store data from the edge devices on the edge if there is no active connection to cloud and push to the cloud updates once connection restored.

ThingsBoard Edge inherits features from ThingsBoard CE/PE to provide you the same experience how to connect, manage and process data from your devices.  

It supports next **ThingsBoard Community Edition** features:
 * [**Attributes**](/docs/user-guide/attributes/) - assign and manage custom attributes to your entities.
 * [**Telemetry**](/docs/user-guide/telemetry/) - API for collection of time-series data of your devices.
 * [**Entities and relations**](/docs/user-guide/entities-and-relations/) - model physical world objects (e.g. devices and assets) and relations between them.
 * [**Data visualization**](/docs/guides#AnchorIDDataVisualization) - develop custom dashboards and widgets.
 * [**Rule engine**](/docs/rule-engine/general/) - manage data processing & actions on incoming telemetry and events.
 * [**RPC**](/docs/user-guide/rpc/) - send remote procedure calls (RPC) **both from edge and cloud sides** to devices and vice versa.
 * [**Audit log**](/docs/user-guide/audit-log/) - track user activity.
 * [**API Limits**](/docs/user-guide/api-limits/) - control and limit number of API requests from a single host.

As well ThingsBoard Edge supports major **ThingsBoard PE** features:
 * [**White-labeling**](/docs/user-guide/white-labeling/) - allows you to configure a custom menu, logo, color scheme, email server settings, customer email templates to interact with the users etc.
 * [**Scheduler**](/docs/user-guide/scheduler/) - allows you to schedule various types of events with flexible schedule configuration.
 * [**Entity Groups**](/docs/user-guide/groups/) - allows you to organize entities into groups, assign roles to specific user group, grant specific permissions to specific user groups over specific device groups.

#### Project Roadmap

<p><a href="/docs/edge/roadmap" class="button">ThingsBoard Edge Roadmap</a></p>

#### Next Steps

<p><a href="/docs/edge/getting-started/getting-started-ce" class="button">Getting Started Guide (CE)</a></p>
<p><a href="/docs/edge/getting-started/getting-started-pe" class="button">Getting Started Guide (PE)</a></p>
