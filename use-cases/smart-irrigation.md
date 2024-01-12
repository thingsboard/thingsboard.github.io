---
layout: use-case
title: Smart Irrigation solution
description: Irrigation management, fields provision and data visualization with ThingsBoard IoT Platform
notitle: "true"

---

{% include usecase-nav.html usecase="smart-irrigation" %}

<h1 class="usecase-title">Smart Irrigation solution</h1>

Everyone knows that when it comes to agriculture, the critical indicator of success is the yield and high quality of the product. However, achieving these indicators costs farmers a lot of effort and resources. One of the main conditions for the stable production of agricultural products is the necessary soil moisture for the growth of crops. However, not all regions can boast of ideal climatic conditions. Sometimes the lack of soil moisture and improper monitoring and care of crops during growth can lead to negative consequences: loss of harvest and, as a result - profit.

An irrigation system is usually used to solve the problem of agricultural and irrigated land, which helps farmers achieve good results in growing and harvesting products.

We developed the Smart Irrigation <a href="/docs/paas/solution-templates/smart-irrigation/">template</a> to represent a generic field irrigation solution.

<h2>Solution Structure</h2>

Smart Irrigation dashboard allows you to monitor the irrigation system and respond in time to changes in field conditions and has components that you may easily embed into your IoT solution.

Also, this dashboard has several states: **Main state** and **Field state**:
- **Main state**  is intended for the user to list the fields and monitor their soil moisture, location, statistics, etc.;
- **Field state** displays detailed information about the field. It allows you to manage moisture monitoring sensors, observes soil moisture levels, schedule irrigation, view statistics, etc.

<h2>Smart Irrigation Benefits</h2>
Save up to 90% of development time for your smart irrigation solution by utilizing the following platform benefits:
- reliable and scalable data collection for your smart sensors and soil moisture monitors;
- powerful rule engine to process collected data and produce alarms and valuable insights;
- advanced and flexible visualization for real-time and historical data;
- customizable end-user dashboards to analyze and share the results of soil moisture monitoring;
- integration with third-party analytics frameworks and solutions for advanced usage analytics;
- remote control and OTA updates for your smart sensors and other devices;
- customizable mobile applications with minimum coding efforts.


<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/solutions/smart_irrigation/smart-irrigation-1.png" alt="smart irrigation 1">
    </div>
    <div>
        <img class="item-image" src="/images/solutions/smart_irrigation/smart-irrigation-2.png" alt="smart irrigation 2">
    </div>
    <div>
        <img class="item-image" src="/images/solutions/smart_irrigation/smart-irrigation-3.png" alt="smart irrigation 3">
    </div>
    <div>
        <img class="item-image" src="/images/solutions/smart_irrigation/smart-irrigation-4.png" alt="smart irrigation 4">
    </div>
    <div>
        <img class="item-image" src="/images/solutions/smart_irrigation/smart-irrigation-5.png" alt="smart irrigation 5">
    </div>
</div>


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
                    <a class="title" href="/docs/mobile">Mobile application</a>
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

## Smart Irrigation solution overview

The diagram below identifies data flow and integration points for a typical smart irrigation monitoring solution that uses the ThingsBoard platform to collect and analyze monitoring data from sensors.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="/images/iot-use-cases/smart-energy-diagram.svg"></object>

You may notice plenty of connectivity options for the soil moisture sensors: direct connection to the cloud, through the IoT Gateway, or an Integration with a third-party system.
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
