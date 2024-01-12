---
layout: use-case
title: ᐉ IoT Smart Metering Solutions — Smart Meter Solution
description: IoT smart metering solutions ✔ Smart meter data visualization ⚫ ThingsBoard ➤ Remote monitoring and recording of energy consumption
notitle: "true"

---

{% include usecase-nav.html usecase="smart-metering" %}

<h1 class="usecase-title">IoT Smart Metering Solutions</h1>

## IoT and smart meters

Traditionally being a part of the electrical grid infrastructure, a smart meter is an electronic device that allows for remote monitoring and recording of energy consumption. 
However, in the age of IoT and IoT platforms, standalone smart meters give way to more advanced and multi-purpose smart metering solutions. 
These solutions offer a broader range of remote monitoring and alerting capabilities as well as provide powerful data analytics tools to help companies and individual users optimize their energy, water, gas, or fuel consumption.  

A typical challenge for companies implementing smart meters is how to integrate them within their infrastructure and set up custom-tailored smart metering use cases. 
The best way to achieve these goals is by using an IoT platform that offers out-of-the-box solutions and templates for smart metering, such as ThingsBoard. 
One of the strongest advantages of an enterprise-grade IoT platform is its data processing capabilities. 
Not only will you be able to collect data from your diverse smart meters in a centralized way, but also set up custom visualization dashboards, configure user alerts and notifications, and feed the collected data into other applications or data stores.

Another critical advantage is the cost of smart metering implementation. 
Using an IoT platform allows you to have all the necessary functionality right away and focus on building particular smart metering use cases instead, saving time and avoiding the risks associated with in-house IoT development.  


## Building end-to-end smart metering solutions with ThingsBoard

ThingsBoard IoT platform provides out-of-the-box components and APIs to dramatically drive down effort required to create smart metering solutions, 
resulting in highly improved time to market, reliability, and competitiveness of your solutions. 
By our estimates, companies may save up to 90% of their product development time when utilizing the following features and benefits of ThingsBoard:

  - Reliable and fault tolerant data collection for your smart water meters, energy monitors, smart energy meters, etc.;
  - Powerful rule engine to process collected data and produce alarms and valuable insights;  
  - Advanced, customizable [data visualization](/docs/user-guide/visualization/) for real-time and historical smart metering monitoring;
  - [Alarm widgets](/docs/user-guide/ui/widget-library/#alarm-widgets) to instantly notify users and / or operators about any critical events or unusual consumption levels;
  - Device management to allow you to organize your endpoints in [groups](/docs/user-guide/groups/) by specific attributes;
  - Customizable [end-user dashboards](/docs/user-guide/ui/dashboards/) (featuring drill-down capabilities) to analyze and share the results of smart metering monitoring;
  - Remote control and OTA updates for your smart meters and other devices;
  - Customizable mobile applications with minimum coding efforts;

The ThingsBoard IoT platform provides production ready server infrastructure to connect your smart meter devices, collect, store and analyze smart metering data, and share results of the analysis with your customers and end-users.

## Smart metering dashboard

The following interactive dashboard hosted on live demo server represents smart metering IoT data visualization that may be embedded in your IoT project or solution. See the dashboard description below.

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/usecases/smart-metering/sm1.png" alt="Smart metering dashboard with a map">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-metering/sm2.png" alt="Smart metering dashboard with a location">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-metering/sm3.png" alt="Smart metering dashboard with a building plan">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-metering/sm4.png" alt="Smart metering dashbord with a thermostat controller">
    </div>
</div>

<div class="center" style="margin-bottom: 64px;">
    <a target="_blank" href="https://demo.thingsboard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909" class="button">View live demo</a>
</div>

The live dashboard displays real-time data from several smart meters and thermostats collected using ThingsBoard MQTT API. 
Collected data is processed via the rule engine to raise alarms on certain thresholds.
The main dashboard displays multiple districts and enables user to drill down from a district to the building and apartment levels. 
Click on the apartment level to open the statistics from multiple apartment devices. 
You may export the dashboard from our live demo server and import it to your ThingsBoard instance.

## ThingsBoard advantages
<section class="usecase-advantages">
    <div class="usecase-background">
        <div class="bottom-features1"></div><div class="bottom-features2"></div><div class="small11"></div><div class="small12"></div>
    </div>
    <div class="cards row">
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/microservices-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/reference/msa/">Scalability and high availability</a>
                    <p>ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. Platform components are horizontally scalable. ThingsBoard has production deployments with more than 500 000 smart-meters.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/telemetry-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/getting-started-guides/connectivity/">Connectivity</a>
                    <p>Connect devices directly to the platform via the following built-in protocols: HTTP, CoAP, MQTT, LwM2M, and SNMP. Connect devices in your local network to the cloud using ThingsBoard Gateway via Modbus, BLE, BACnet, OPC-UA, and other protocols.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/integration-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/integrations/">LoRaWAN & SigFox Support</a>
                    <p>Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, ChirpStack, Actility, etc. Connect SigFox devices via integrations with the SigFox backend.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/security-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">Security</a>
                    <p>ThingsBoard supports industry-standard encryption algorithms like RSA and ECDSA to ensure the data is secure during transfer via TLS(TCP) and DTLS (UDP).</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/engine-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">Data processing</a>
                    <p>ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. You are free to process data with the Rule engine or push it to further processing in external systems.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/visualization-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/dashboards/">Data visualization</a>
                    <p>Visualize collected data using rich interactive dashboards. Develop multi-state interactive dashboards with zero coding efforts and built-in charts, gauges, maps, tables, and control widgets. Customize every dashboard aspect using advanced widget settings or even custom widget bundles. Low latency updates are possible with embedded web-sockets support.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/phone-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/mobile/">Mobile application</a>
                    <p>Build your own IoT mobile application with minimum coding efforts using ThingsBoard Mobile Application, an open-source project based on Flutter. Leverage a built-in set of mobile actions to take a photo, scan QR code, update location, and more directly within the dashboard.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/tenancy-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/entities-and-relations/">Multi-tenancy</a>
                    <p>ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. Single tenant may have multiple tenant administrators and millions of devices and customers. It also offers out-of-the-box support of OTA updates for your smart meters.</p>
                </div>
            </div>
        </div>
    </div>
</section>

## Smart energy solution overview

The diagram below identifies data flow and integration points for a typical smart-metering solution that uses the ThingsBoard platform to collect and analyze energy monitoring data from smart meters.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="/images/iot-use-cases/smart-energy-diagram.svg"></object>

You may notice plenty of connectivity options for the smart meters: direct connection to the cloud, through the IoT Gateway, or an Integration with a third-party system.
The platform supports industry-standard encryption algorithms and device credentials types. ThingsBoard stores data in the fault-tolerant and reliable Cassandra database. 
The Rule Engine enables forwarding incoming data to various analytics systems, such as Apache Spark or Hadoop, using Kafka or other Message buses.

## Learn more
<div class="usecases-bottom-nav">
    <a href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
    <a href="/industries/smart-energy/" class="button">Customers feedback</a>
    <a href="/docs/#platform-features" class="button">Platform features</a>
    <a href="/docs/reference/" class="button">Architecture</a>
    <a href="/docs/contact-us/" class="button">Contact us</a>
</div>
