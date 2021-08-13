---
layout: docwithnav-edge
title: What is ThingsBoard Edge?
description: ThingsBoard Edge features, FAQ
---

The **ThingsBoard Edge** is a ThingsBoard's software product for edge computing. 
It allows bringing data analysis and management to the edge, while seamlessly synchronizing with ThingsBoard CE/PE server (cloud).

ThingsBoard is an open-source IoT platform for data collection, processing, visualization, and device management. See [**What is ThingsBoard?**](/docs/getting-started-guides/what-is-thingsboard/) if you are new platform user.  
<br>

![image](/images/edge/overview/edge_overview.svg)

#### ThingsBoard Edge features                                                       
                                                                
With **ThingsBoard Edge** you get the following benefits:

 - **Local deployment and storage** to operate with and store data from local devices without internet connection. Push updates to the cloud once connection restored.
 
 ![image](/images/edge/overview/offline_network_.svg)

 - **Traffic filtering** to filter data from devices on the ThingsBoard Edge service and push to cloud only subset of the data.
 
  ![image](/images/edge/overview/data_filtering.svg)
 
 - **Local alarms** to react instantly to critical situations on site if there is no connection with the cloud.
 
  ![image](/images/edge/overview/alarm.svg)

 - Monitor local events and timeseries data with a **real-time dashboards**.
 - **Batch Update** thousands of edge configurations in a single click.
 
 ![image](/images/edge/overview/update_dashboard.svg)
 
 - **Local storage** to store data from the devices on the edge if there is no internet connection and push to the cloud updates once connection restored.

ThingsBoard Edge inherits features from ThingsBoard CE/PE to provide you the same experience how to connect, manage and process data from your devices.  

It supports next **ThingsBoard Community Edition** features:
 * [**Attributes**](/docs/user-guide/attributes/) - assign and manage custom attributes to your entities.
 * [**Telemetry**](/docs/user-guide/telemetry/) - API for collection of time-series data of your devices.
 * [**Entities and relations**](/docs/user-guide/entities-and-relations/) - model physical world objects (e.g. devices and assets) and relations between them.
 * [**Data visualization**](/docs/guides#AnchorIDDataVisualization) - develop custom dashboards and widgets.
 * [**Rule engine**](/docs/edge/rule-engine/general/) - manage data processing & actions on incoming telemetry and events.
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
