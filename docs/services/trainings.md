---
layout: common
title: Training sessions
notitle: "true"
description: ThingsBoard training sessions

---

<h1 class="mainTitle">Training sessions</h1>

ThingsBoard training sessions are educational events that are delivered to your company’s engineers by ThingsBoard core team members. The primary goals of ThingsBoard education courses are:

- Boosting your experience with the ThingsBoard platform.
- Familiarizing you with platform features, APIs and integrations.
- Addressing practical questions related to your use cases.
- Minimizing time-to-market for your IoT product or solution.

ThingsBoard training sessions are on-demand online events for up to 8 people. On-site training sessions are also available. [Contact us](/docs/contact-us/) for more details.

<br>

<span class="heading">Training courses:</span>

<div class="service-info-blocks">
  <div class="card">
    <h3 class="title">ThingsBoard Basics</h3>
    <p class="sub-title">Basic understanding of IoT and programming concepts</p>
    <p class="description">Learn how ThingsBoard platform helps businesses to implement IoT use cases and support IoT solutions. This training session will provide you with the basic understanding of ThingsBoard features and how they can be used in your IoT product.</p>
    <div class="card-bot">
      <p class="length"><b>8 hours</b> ( 1 full work day or two 4-hour sessions)</p>
      <p class="audience"><b>software and hardware engineers, architects</b></p>
      <div id="thingsboard-basics" class="card-drop" onclick="dropContent(id)">Agenda</div>
    </div>
    <div id="thingsboard-basics" class="drop-content">
      <div>
        <p>Platform overview</p>
        <li>Explain platform capabilities and functionality.</li>
        <li>Discussion on your use case to highlight key points during the training session.</li>
        <p>Platform installation</p>
        <li>Review available installation options. Highlight security and configuration aspects.</li>
        <li>Exercise: setup ThingsBoard instance on AWS.</li>
        <p>Web UI</p>
        <li>Explain basic web UI capabilities and main entities: Devices, Customers, Users, Dashboards.</li>
        <li>Review available widget types and explain their basic configuration parameters.</li>
        <li>Explain ThingsBoard user roles and their permissions.</li>
        <li>Exercise: create Device and provision Device Credentials.</li>
        <li>Exercise: create Dashboard and assign it to the Customer.</li>
        <p>ThingsBoard API</p>
        <li>Explain ThingsBoard API for device connectivity and integration with server-side applications.</li>
        <li>Exercise: create device firmware to publish telemetry and attributes over MQTT.</li>
        <li>Exercise: add widgets to the Dashboard to visualize data from the previous exercise.</li>
        <p>Rule Engine</p>
        <li>Explain Rule engine data flow.</li>
        <li>Review Rule components: messages, relations, nodes and their available implementations.</li>
        <li>Exercise: configure alerting rule based on device attributes and timeseries values.</li>
        <p>Use-cases and Q&A session</p>
      </div>
    </div>
  </div>

  <div class="card">
    <h3 class="title">ThingsBoard Data Visualization</h3>
    <p class="sub-title">Basic concepts of ThingsBoard platform</p>
    <p class="description">Learn how ThingsBoard platform helps to collect and visualize IoT data and use this knowledge to improve customer experience. This training session will provide you with the in-depth understanding of ThingsBoard visualization capabilities, widget customization, user roles, and permissions.</p>
    <div class="card-bot">
      <p class="length"><b>8 hours</b> ( 1 full work day or two 4-hour sessions)</p>
      <p class="audience"><b>front-end developers, engineers, architects</b></p>
      <div id="thingsboard-data-visualization" class="card-drop" onclick="dropContent(id)">Agenda</div>
    </div>
    <div id="thingsboard-data-visualization" class="drop-content">
      <div>
        <p>Web UI</p>
        <li>Explain web UI capabilities and main business entities: Devices, Customers, Users, and Dashboards.</li>
        <li>Explain ThingsBoard user roles and their permissions.</li>
        <li>Exercise: create Device and provision Device Credentials</li>
        <p>Dashboards</p>
        <li>Explain Dashboard features and capabilities</li>
        <li>Exercise: create Dashboard and assign it to Customer.</li>
        <li>Exercise: modify dashboard settings: background color, image, margins.</li>
        <li>Exercise: working with device aliases.</li>
        <li>Exercise: import/export your dashboard.</li>
        <p>Widgets</p>
        <li>Explain widget types, data sources, basic and advanced settings.</li>
        <li>Exercise: configure and tune widget to show simulated device values.</li>
        <li>Exercise: configure and tune widget to show real device values.</li>
        <li>Exercise: configure and tune card widgets.</li>
        <li>Exercise: configure and tune gauge widgets.</li>
        <li>Exercise: configure and tune line chart widgets.</li>
        <li>Exercise: configure and tune map widgets.</li>
        <p>Real-time and historical data visualization</p>
        <li>Configure line chart widget to show historical data</li>
        <li>Configure line chart widget to show real-time data with time-window.</li>
        <p>Custom widgets</p>
        <li>Explain widget library functionality</li>
        <li>Exercise: Customize widget look and feel</li>
        <li>Exercise: Customize widget logic</li>
      </div>
    </div>
  </div>

  <div class="card">
    <h3 class="title">Device connectivity and application development using ThingsBoard</h3>
    <p class="sub-title">Basic concepts of ThingsBoard platform</p>
    <p class="description">Learn how to use ThingsBoard platform APIs to build connected applications for your IoT devices. This training session will provide you with the in-depth understanding of supported network protocols and device APIs.</p>
    <div class="card-bot">
      <p class="length"><b>8 hours</b> ( 1 full work day or two 4-hour sessions)</p>
      <p class="audience"><b>developers, engineers, architects</b></p>
      <div id="device-connectivity" class="card-drop" onclick="dropContent(id)">Agenda</div>
    </div>
    <div id="device-connectivity" class="drop-content">
      <div>
        <p>Platform overview</p>
        <li>Explain platform capabilities and functionality.</li>
        <li>Discussion on your use case to highlight key points during the training session.</li>
        <p>Device connectivity options</p>
        <li>Review of supported network protocols: MQTT, HTTP and CoAP.</li>
        <li>Exercise: telemetry data upload using MQTT.</li>
        <li>Exercise: telemetry data upload using HTTP.</li>
        <li>Exercise: telemetry data upload using CoAP.</li>
        <p>Attributes API</p>
        <li>Use cases and feature overview.</li>
        <li>Exercise: Reporting device attribute changes to ThingsBoard.</li>
        <li>Exercise: Subscribe to server-side attribute updates.</li>
        <li>Exercise: Save and restore application state using ThingsBoard server.</li>
        <p>Timeseries API</p>
        <li>Use cases and feature overview.</li>
        <li>Exercise: Reporting time-series data to ThingsBoard.</li>
        <p>RPC API</p>
        <li>Use cases and feature overview.</li>
        <li>Exercise: Send one-way RPC command to Device.</li>
        <li>Exercise: Send two-way RPC command to Device.</li>
        <li>Exercise: Send RPC command from Device to Server.</li>
        <p>Messaging between Devices</p>
        <li>Messaging rule nodes overview.</li>
        <li>Exercise: Send message from one device application to another.</li>
        <p>Load Balancing, Scalability, and Failover</p>
        <li>Use cases and platform capabilities overview.</li>
      </div>
    </div>
  </div>

  <div class="card">
    <h3 class="title">Server-side application development using ThingsBoard API</h3>
    <p class="sub-title">Basic concepts of ThingsBoard platform</p>
    <p class="description">Learn how to connect your cloud applications with your IoT devices using ThingsBoard platform APIs. This training session will provide you with in-depth understanding platform REST and websocket APIs, rule engine, data collection and analytics use cases.</p>
    <div class="card-bot">
      <p class="length"><b>8 hours</b> ( 1 full work day or two 4-hour sessions)</p>
      <p class="audience"><b>developers, engineers, analysts and architects</b></p>
      <div id="server-side-application" class="card-drop" onclick="dropContent(id)">Agenda</div>
    </div>
    <div id="server-side-application" class="drop-content">
      <div>
        <p>Platform overview</p>
        <li>Explain platform capabilities and functionality.</li>
        <li>Discussion on your use case to highlight key points during the training session.</li>
        <p>Platform API</p>
        <li>REST API overview.</li>
        <li>Exercise: Create tenant, device and customer using REST API.</li>
        <li>Exercise: Create dashboard and assign it to user using REST API.</li>
        <li>Exercise: Send RPC command to device using REST API.</li>
        <li>Exercise: Fetch device data using REST API.</li>
        <li>Exercise: Update device attribute using REST API.</li>
        <li>Exercise: Subscribe to device data feed using websocket.</li>
        <p>Rule engine</p>
        <li>Explain Rule engine data flow.</li>
        <li>Review Rule components: filters, processors and actions and their available implementations.</li>
        <li>Explain available rule nodes and their implementations.</li>
        <p>Data collection and analytics</p>
        <li>Use cases and data flow overview.</li>
        <li>Exercise: Pushing telemetry and attributes data to Kafka.</li>
        <li>Exercise: Pushing telemetry and attributes data to RabbitMQ.</li>
        <li>Exercise: Pushing telemetry and attributes data to REST API.</li>
        <p>RPC API</p>
        <li>Use cases and feature overview.</li>
        <li>Exercise: Send one-way RPC command to Device.</li>
        <li>Exercise: Send two-way RPC command to Device.</li>
        <p>Load Balancing, Scalability and Failover</p>
        <li>Use cases and platform capabilities overview.</li>
      </div>
    </div>
  </div>

  <div class="card">
    <h3 class="title">ThingsBoard Administration</h3>
    <p class="sub-title">Basic understanding of IoT and system administration</p>
    <p class="description">Learn how to provision, monitor and scale your ThingsBoard cluster. This training session will provide you with in-depth understanding platform configuration, troubleshooting and scalability. We will also cover security and load balancing topics.</p>
    <div class="card-bot">
      <p class="length"><b>8 hours</b> ( 1 full work day or two 4-hour sessions)</p>
      <p class="audience"><b>system administrators and architects</b></p>
      <div id="thingsboard-administration" class="card-drop" onclick="dropContent(id)">Agenda</div>
    </div>
    <div id="thingsboard-administration" class="drop-content">
      <div>
        <p>Platform overview</p>
        <li>Explain platform capabilities and functionality.</li>
        <li>Discussion on your use case to highlight key points during the training session.</li>
        <p>Single-node platform installation</p>
        <li>Explain installation options. Highlight security and configuration aspects.</li>
        <li>Exercise: setup ThingsBoard instance on AWS using public AMIs.</li>
        <li>Exercise: setup ThingsBoard instance on CentOS.</li>
        <p>ThingsBoard configuration</p>
        <li>Explain main configuration files.</li>
        <li>Exercise: general system configuration.</li>
        <p>ThingsBoard troubleshooting</p>
        <li>Review log files and their configuration.</li>
        <li>Exercise: changing log levels for particular components.</li>
        <p>ThingsBoard cluster installation</p>
        <li>Explain cluster deployment options and configuration.</li>
        <li>Exercise: ThingsBoard cluster setup.</li>
        <li>Exercise: ThingsBoard cluster setup troubleshooting.</li>
        <p>Load Balancing, Scalability, and Failover</p>
        <li>Use cases and platform capabilities overview.</li>
        <li>ThingsBoard architecture overview.</li>
        <li>Exercise: Tuning cluster performance.</li>
        <li>Exercise: Scaling ThingsBoard cluster.</li>
        <li>Exercise: Replacing Failed node.</li>
        <li>Exercise: Load balancing device connections.</li>
        <li>Exercise: Load balancing server-side API calls.</li>
        <p>Security</p>
        <li>Use cases and security options overview.</li>
        <li>Exercise: Securing MQTT API calls using SSL and X.509 certificates.</li>
        <li>Exercise: Securing HTTP API calls using SSL.</li>
      </div>
    </div>
  </div>
</div>

<div class="bottom">
    <a id="Serv_Trainings_ContactUs" href="/docs/contact-us/" class="contact-button gtm_button">Contact Us</a>
    <p>Contact us to join the ThingsBoard training courses</p>
</div>
