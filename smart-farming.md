---
layout: docwithnav
title: Smart farming and smart agriculture solutions
description: Smart farming, future farming and smart agriculture with Thingsboard IoT Platform
horizontaltoc: "true"

---

## Overview

Thingsboard platform provides out-of-the-box components and APIs to dramatically reduce time to market and your effort to develop smart farming solutions and projects.
The platform is device-agnostic, so you can feed and analyze the data from any sensor, connected device or application.
Save up to 90% of development time for your smart farming project by utilizing following benefits:

 - Reliable and fault-tolerant data collection from your IoT devices and sensors to monitor facilities state, crop growth characteristics, humidity level, etc.;
 - Advanced and flexible data visualization for real-time and historical monitoring of future farms;
 - Customizable end-user dashboards to share farm monitoring results;
 - Integration with third-party analytics frameworks and solutions for advanced analytics and machine learning;
 - Optimize returns on inputs while preserving resources by remotely configuring IoT devices based on results of the analytics.

The platform provides production ready server infrastructure to connect your IoT devices, store and analyze collected IoT data, optimizing returns on inputs and resources.

## Smart farming dashboard

The following interactive dashboard hosted on live demo server represents smart farming IoT data visualization that may be embedded in your IoT agriculture project or future farm solution. See dashboard description below.

<iframe class="demoDashboardFrame" src="https://demo.thingsboard.io/demo?dashboardId=198c2b60-0edc-11e7-942c-bb0136cc33d0&source=docs" frameborder="0" width="100%"></iframe>
<div class="center" style="margin-bottom: 20px;">
    <a target="_blank" style="padding: 0 40px;" href="https://demo.thingsboard.io/demo?dashboardId=1f9828d0-058e-11e7-87f7-bb0136cc33d0&source=realtimeIotDashboards" class="button">Live demo</a>
</div>

The attached dashboard demonstrates real-time data from IoT sensors that is collected using Thingsboard MQTT API. The data is stored in Cassandra DB on our demo server.

We would like to highlight following features:

 - low-latency updates using web-sockets;
 - ability to zoom-in into the charts by selecting time range with the mouse;
 - advanced tooltips and legend;
 - dashboard toolbar in the top-right corner enables global time selector and switch between dashboards.

## Smart farming solution overview
 
The diagram below identifies data flow and integration points for typical smart farming solution that uses Thingsboard platform to collect and analyze smart farming data from IoT sensors.

![Smart farming solution diagram](/images/iot-use-cases/smart-farming.svg)

You may notice that there are plenty of connectivity options for IoT sensors: either direct connection to the cloud or through the IoT Gateway.
Platform supports industry standard encryption algorithms (SSL) and device credentials types (X.509 certificates and access tokens).
The collected data is stored in Cassandra - fault-tolerant and reliable NoSQL database.
Thingsboard Rule Engine allows to forward incoming data to various analytics systems, such as Apache Spark or Hadoop using Kafka or other Message buses.

## Learn more

<a style="margin: 10px;" href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/docs/feedback/" class="button">Customers feedback</a>
<a style="margin: 10px;" href="/docs/#platform-features" class="button">Platform features</a>
<a style="margin: 10px;" href="/docs/reference/architecture/" class="button">Architecture</a>
<a style="margin: 10px;" href="/docs/contact-us/" class="button">Contact us</a>
