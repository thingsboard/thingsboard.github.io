---
layout: docwithnav
title: Smart metering solutions, data visualization and drill-down navigation 
description: Smart metering solutions, data visualization and drill-down navigation
horizontaltoc: "true"

---

## Overview

Thingsboard platform provides out-of-the-box components and APIs to dramatically reduce time to market and your effort to create smart metering solutions.
Save up to 90% of development time for your smart metering solution by utilizing following benefits:

 - Reliable and fault tolerant data collection for your smart water meters, energy monitors, smart energy meters, etc.;
 - Advanced and flexible data visualization for real-time and historical smart metering monitoring;
 - Alarm widgets to pro-actively react to any unexpected situations in the shortest time;
 - Grouping of entities using relations to navigate through them and efficiently analyze smart metering data;
 - Customizable end-user dashboards(including drill-down capabilities) to analyze and share the results of smart metering monitoring;
 - Integration with third-party analytics frameworks and solutions for advanced metering usage monitoring;
 - Enable metering management by utilizing Thingsboard API to control and manage smart meters.
 
The platform provides production ready server infrastructure to connect your smart meter devices, collect, store and analyze metering monitoring data, and share results of the analysis with your customers and end-users.

## Smart metering dashboard

The following interactive dashboard hosted on live demo server represents smart metering IoT data visualization that may be embedded in your IoT project or solution. See dashboard description below.

<iframe class="demoDashboardFrame" src="https://demo.thingsboard.io/dashboards/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909" frameborder="0" width="100%"></iframe>
<div class="center" style="margin-bottom: 20px;">
    <a target="_blank" style="padding: 0 40px;" href="https://demo.thingsboard.io/dashboards/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909" class="button">Live demo</a>
</div>

The attached dashboard demonstrates real-time data from smart-meters that is collected using Thingsboard MQTT API. The data is stored in Cassandra DB on our demo server.

We would like to highlight following features:

 - low-latency updates using web-sockets;
 - ability to zoom-in into the charts by selecting time range with the mouse;
 - advanced tooltips and legend;
 - dashboard toolbar in the top-right corner enables global time selector and switch between dashboards.

## Smart metering solution overview
 
The diagram below identifies data flow and integration points for typical smart metering solution that uses Thingsboard platform to collect and analyze monitoring data from smart meters.

![Smart metering solution diagram](/images/iot-use-cases/smart-energy-monitoring.svg)

You may notice that there are plenty of connectivity options for smart meters: either direct connection to the cloud or through the IoT Gateway.
Platform supports industry standard encryption algorithms (SSL) and device credentials types (X.509 certificates and access tokens).
The collected data is stored in Cassandra - fault-tolerant and reliable NoSQL database.
Thingsboard Rule Engine allows to forward incoming data to various analytics systems, such as Apache Spark or Hadoop using Kafka or other Message buses.

## Learn more

<a style="margin: 10px;" href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/docs/feedback/" class="button">Customers feedback</a>
<a style="margin: 10px;" href="/docs/#platform-features" class="button">Platform features</a>
<a style="margin: 10px;" href="/docs/reference/architecture/" class="button">Architecture</a>
<a style="margin: 10px;" href="/docs/contact-us/" class="button">Contact us</a>
