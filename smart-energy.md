---
layout: common
title: Smart energy monitoring, data visualization and energy efficiency analysis
description: Smart energy monitoring and data visualization with ThingsBoard IoT Platform
horizontaltoc: "true"

---

## Overview

ThingsBoard platform provides out-of-the-box components and APIs to dramatically reduce time to market and your effort to create smart energy solutions and energy monitoring systems.
Save up to 90% of development time for your smart energy solution by utilizing following benefits:

 - Reliable and fault tolerant data collection for your smart meters and energy monitors;
 - Advanced and flexible data visualization for real-time and historical smart energy monitoring;
 - Customizable end-user dashboards to analyze and share the results of energy efficiency monitoring;
 - Integration with third-party analytics frameworks and solutions for advanced electricity usage monitoring;
 - Enable energy management by utilizing ThingsBoard API to control and manage smart meters.
 
The platform provides production ready server infrastructure to connect your smart meter devices, collect, store and analyze energy monitoring data, and share results of the analysis with your customers and end-users.

## Smart energy dashboard

The following interactive dashboard hosted on live demo server represents smart energy IoT data visualization that may be embedded in your IoT project or solution. See dashboard description below.

<iframe class="demoDashboardFrame" src="https://demo.thingsboard.io/dashboard/e5e72680-0eda-11e7-942c-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=docs" frameborder="0" width="100%"></iframe>
<div class="center" style="margin-bottom: 20px;">
    <a target="_blank" href="https://demo.thingsboard.io/dashboard/e8e409c0-f2b5-11e6-a6ee-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards" class="button">Live demo</a>
</div>

The attached dashboard demonstrates real-time data from smart-meters that is collected using ThingsBoard MQTT API. The data is stored in Cassandra DB on our demo server.

We would like to highlight following features:

 - low-latency updates using web-sockets;
 - ability to zoom-in into the charts by selecting time range with the mouse;
 - advanced tooltips and legend;
 - dashboard toolbar in the top-right corner enables global time selector and switch between dashboards.

## Smart energy solution overview
 
The diagram below identifies data flow and integration points for typical smart energy solution that uses ThingsBoard platform to collect and analyze energy monitoring data from smart meters.

![Smart energy solution diagram](/images/iot-use-cases/smart-energy-monitoring.svg)

You may notice that there are plenty of connectivity options for smart meters: either direct connection to the cloud or through the IoT Gateway.
Platform supports industry standard encryption algorithms (SSL) and device credentials types (X.509 certificates and access tokens).
The collected data is stored in Cassandra - fault-tolerant and reliable NoSQL database.
ThingsBoard Rule Engine allows to forward incoming data to various analytics systems, such as Apache Spark or Hadoop using Kafka or other Message buses.

## Learn more

<a style="margin-right: 10px;" href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/industries/smart-energy/" class="button">Customers feedback</a>
<a style="margin: 10px;" href="/docs/#platform-features" class="button">Platform features</a>
<a style="margin: 10px;" href="/docs/reference/" class="button">Architecture</a>
<a style="margin: 10px;" href="/docs/contact-us/" class="button">Contact us</a>
