---
layout: docwithnav
title: Fleet tracking and fleet management
description: Fleet tracking and fleet management with Thingsboard IoT Platform
horizontaltoc: "true"

---

## Overview

Thingsboard platform provides out-of-the-box components and APIs to dramatically reduce time to market and your effort to develop
fleet tracking solutions and gps vehicle tracking systems.
Save up to 90% of development time for your fleet tracking project by utilizing following benefits:

 - Reliable and fault-tolerant data collection for your vehicle trackers and other embedded sensors;
 - Advanced and flexible IoT data visualization for both real-time and historical vehicle data;
 - Customizable end-user dashboards to share data from the vehicle tracking system with end users and customers;
 - Integration with third-party analytics frameworks and solutions for advanced insights and import those insights back to your vehicle tracking system.

The platform provides production ready server infrastructure to connect your smart cars and vehicles, collect, store and analyze various vehicle data, and share results of the analysis with your customers and end-users.

## Fleet tracking dashboard

The following interactive dashboard hosted on live demo server represents vehicle routes and state indicators visualization that may be embedded in your IoT fleet tracking project. See dashboard description below.

<iframe class="demoDashboardFrame" src="https://demo.thingsboard.io/demo?dashboardId=83cbe060-0edc-11e7-942c-bb0136cc33d0&source=docs" frameborder="0" width="100%"></iframe>
<div class="center" style="margin-bottom: 20px;">
    <a target="_blank" style="padding: 0 40px;" href="https://demo.thingsboard.io/demo?dashboardId=3d0bf910-ee09-11e6-b619-bb0136cc33d0&source=realtimeIotDashboards" class="button">Live demo</a>
</div>

The attached dashboard demonstrates real-time data from vehicle sensors that is collected using Thingsboard MQTT API. The data is stored in Cassandra DB on our demo server.

We would like to highlight following features:

 - low-latency updates using web-sockets;
 - ability to zoom-in into the charts by selecting time range with the mouse;
 - advanced tooltips and legend;
 - dashboard toolbar in the top-right corner enables global time selector and switch between dashboards.

## Fleet tracking solution overview
 
The diagram below identifies data flow and integration points for typical fleet tracking solution that uses Thingsboard platform to collect and analyze vehicle data.

![Fleet tracking solution diagram](/images/iot-use-cases/fleet-tracking.svg)

You may notice that there are plenty of connectivity options for vehicle sensors: either direct connection to the cloud or through the IoT Gateway.
Platform supports industry standard encryption algorithms (SSL) and device credentials types (X.509 certificates and access tokens).
The collected data is stored in Cassandra - fault-tolerant and reliable NoSQL database.
Thingsboard Rule Engine allows to forward incoming data to various analytics systems, such as Apache Spark or Hadoop using Kafka or other Message buses.

## Learn more

<a style="margin: 10px;" href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/docs/feedback/" class="button">Customers feedback</a>
<a style="margin: 10px;" href="/docs/#platform-features" class="button">Platform features</a>
<a style="margin: 10px;" href="/docs/reference/architecture/" class="button">Architecture</a>
<a style="margin: 10px;" href="/docs/contact-us/" class="button">Contact us</a>
