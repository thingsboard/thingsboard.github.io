---
layout: use-case
title: Air Quality Monitoring solution
description: Air quality monitoring, AQI determination, data visualization and device management with ThingsBoard IoT Platform
notitle: "true"

---

{% include usecase-nav.html usecase="air-quality-monitoring" %}

<h1 class="usecase-title">Air Quality Monitoring solution</h1>

Air quality control is an important component of modern life, as high levels of pollutants can negatively affect people's health. 
Particularly noteworthy are megacities with a large number of cars and industrial areas in which the concentration of pollutants is higher.

We developed the AIR Quality Monitoring <a href="/docs/paas/solution-templates/air-quality-monitoring/">template</a> which represents a solution for general air pollution monitoring and provides general recommendations in a user-friendly manner. 
The main metric for controlling the level of air pollution is AQI.
AQI is calculated based on the sensor readings about such pollutants: Ozone (ppm), PM2.5 (µg/m3 ), PM10 (µg/m3 ), CO (ppm), SO2 (ppb), NO2 (ppb);
The solution supports sensors that report either all or a subset of the readings.
You will also have the opportunity to manage air control stations using the Administration Dashboard.

You can use this solution as a part of a Smart City and cover the all needed requirements.

<h2>Solution Structure</h2>

As part of this solution, we have created 2 dashboards that display data from multiple sensors - **Public Air Quality Monitoring Dashboard** and **Administration Air Quality Monitoring Dashboard**.

The **Public Dashboard** is designed for end-users. It is configured to be "public", meaning the end-user does NOT need to log in to access the dashboard. The dashboard has multiple states:
- **City state** represents the air pollution monitoring of a specific city (in our case Los Angeles) and calculates  value based on the AQI received from city sensors.
- **Sensor state** represents the selected sensor deployed in a particular city district.

<h2>Air Quality Monitoring Benefits</h2>
Save up to 90% of development time for your air monitoring solution by utilizing the following platform benefits:
- reliable and scalable data collection for your smart monitors;
- powerful rule engine to process collected data and produce alarms and valuable insights;
- advanced and flexible visualization for real-time and historical data;
- customizable end-user dashboards to analyze and share the results of air quality monitoring;
- integration with third-party analytics frameworks and solutions for advanced usage analytics;
- remote control and OTA updates for your smart sensors and other devices;
- customizable mobile applications with minimum coding efforts.

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/usecases/air-quality/aq1.png" alt="air quality 1">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/air-quality/aq2.png" alt="air quality 2">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/air-quality/aq3.png" alt="air quality 3">
    </div>
</div>

<div class="center" style="margin-bottom: 64px;">
    <a target="_blank" href="https://thingsboard.cloud/dashboard/ec564620-82b2-11ed-a624-8360a2a6cb0e?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button">View live demo</a>
</div>

The **Administration Dashboard** dashboard is designed for tenant administrators to perform basic device management tasks, and has multiple states:
-  **Main state** which is intended for monitoring sensors health: battery level, connectivity, etc. The Main state contains:
- **Sensor state** allows you to view detailed information about the sensor: It's latest sensor readings, location, etc. 

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/usecases/air-quality/aq4.png" alt="air quality 4">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/air-quality/aq5.png" alt="air quality 5">
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

## Air Quality Monitoring solution overview

The diagram below identifies data flow and integration points for a typical air quality monitoring solution that uses the ThingsBoard platform to collect and analyze monitoring data from air stations.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="/images/iot-use-cases/smart-energy-diagram.svg"></object>

You may notice plenty of connectivity options for the air monitoring stations: direct connection to the cloud, through the IoT Gateway, or an Integration with a third-party system.
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
