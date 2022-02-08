---
layout: common
title: Smart energy monitoring, data visualization and energy efficiency analysis
description: Smart energy monitoring and data visualization with ThingsBoard IoT Platform
notitle: "true"

---

{% include usecase-nav.html usecase="smart-energy" %}

<h1 class="usecase-title">Smart energy monitoring, data visualization and energy efficiency analysis</h1>

## Overview

ThingsBoard platform dramatically reduces time to market and efforts to create smart-energy solutions. Save up to 90% of development time for your smart-energy solution by utilizing the following platform benefits:

  - Reliable and scalable data collection for your smart meters and energy monitors;
  - Powerful rule engine to process collected data and produce valuable insights;
  - Advanced and flexible visualization for real-time and historical data;
  - Customizable end-user dashboards to analyze and share the results of energy efficiency monitoring;
  - Integration with third-party analytics frameworks and solutions for advanced electricity usage analytics;
  - Enable energy management by utilizing ThingsBoard API to control and manage smart meters.

## Smart energy dashboard

The following interactive dashboard represents smart-energy IoT data visualization that you may easily embed into your IoT solution. See dashboard description below.

<div class="usecase-carousel owl-carousel owl-theme" id="slider">
    <div class="slide">
        <img class="item-image" src="/images/fleet-tracking.png" />
    </div>
    <div class="slide">
        <img class="item-image" src="/images/fleet-tracking.png" />
    </div>
    <div class="slide">
        <img class="item-image" src="/images/fleet-tracking.png" />
    </div>
</div>

<div class="center" style="margin-bottom: 20px;">
    <a target="_blank" href="https://demo.thingsboard.io/dashboard/e8e409c0-f2b5-11e6-a6ee-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards" class="button">View live demo</a>
</div>

The live dashboard displays real-time data from several smart meters collected using ThingsBoard MQTT API. 
Collected data is processed via the rule engine to raise alarms on certain thresholds. 
The main dashboard displays the energy meters, corresponding alarms, and real-time data feeds. 
Click on the alarm or energy meter row to open the meter details.

You may export the dashboard from our live demo server and import it to your ThingsBoard instance.

## ThingsBoard advantages

#### Scalability and high availability

ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. 
Platform components are horizontally scalable. ThingsBoard has production deployments with more than 500 000 smart-meters devices.

#### Data collection

Connect devices directly to the platform via the following built-in protocols: HTTP, CoAP, MQTT, LwM2M, and SNMP. 
Connect devices in your local network to the cloud using ThingsBoard Gateway via Modbus, BLE, BACnet, OPC-UA, and other protocols. 
Connect SigFox devices via integrations with the SigFox backend. 
Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, Chirpstack, Actility, etc.

ThingsBoard supports industry-standard encryption algorithms like RSA and ECDSA to ensure the data is secure during transfer via TLS(TCP) and DTLS (UDP).

#### Data processing

ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. 
The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. 
You are free to process data with the Rule engine or push it to further processing in external systems.

#### Data visualization

Visualize collected data using rich interactive dashboards. Develop multi-state interactive dashboards with zero coding efforts and built-in charts, gauges, maps, tables, and control widgets. 
Customize every dashboard aspect using advanced widget settings or even custom widget bundles. 
Low latency updates are possible with embedded web-sockets support.

#### Mobile application

Build your own IoT mobile application with minimum coding efforts using ThingsBoard Mobile Application, an open-source project based on Flutter. 
Leverage a built-in set of mobile actions to take a photo, scan QR code, update location, and more directly within the dashboard.

#### Multi-tenancy

ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. 
Single tenant may have multiple tenant administrators and millions of devices and customers.
It also offers out-of-the-box support of OTA updates for your smart meters.


## Smart energy solution overview

TODO: rewrite
 
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
