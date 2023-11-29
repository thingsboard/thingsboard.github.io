---
layout: use-case
title: Waste Management solution
description: Waste management of garbage containers, data visualization, and device management with the ThingsBoard IoT Platform
notitle: "true"


---

{% include usecase-nav.html usecase="waste-management" %}

<h1 class="usecase-title">Waste Management solution</h1>

Efficient waste management is crucial for businesses seeking to reduce costs and improve environmental sustainability. Inaccurate waste monitoring can lead to inefficient disposal, environmental harm, and unnecessary expenses.
 
Our Waste Management <a href="/docs/paas/solution-templates/waste-management/">template</a> provides real-time visibility into waste levels, enabling proactive management of waste inventory and optimization of operations. The solution utilizes cutting-edge technology, including customizable sensors and secure communication protocols. With our user-friendly dashboard, you can easily monitor waste levels, set custom alerts, and track waste usage. By taking control of your waste management processes, you can minimize environmental harm and waste, leading to streamlined operations and increased sustainability.

Additionally, our solution is fully customizable to meet the specific needs of your industry, whether you're in manufacturing, healthcare, or any other sector. With our Waste Management solution, you can gain a competitive advantage and achieve greater efficiency in your operations. Transform waste management and optimize your business with our Waste Management solution.


<h2>Solution Structure</h2>

As a part of this solution we have created a Waste Management dashboard that displays data from multiple sensors.

The **Waste Management** dashboard is designed for tenant administrators to perform basic device management tasks, and has multiple states:
- **Main state** - intended for monitoring garbage bin filling, control over the alarm, and sensors management;
- **Bin state** - designed to edit and revise a particular garbage bin.


<h2>Waste Management Benefits</h2>
Save up to 90% of development time for your waste management solution by utilizing the following platform benefits:
- reliable and scalable data collection for your waste monitors;
- powerful rule engine to process collected data and produce alarms and valuable insights;
- advanced and flexible visualization for real-time and historical data;
- customizable end-user dashboards to analyze and share the results of waste monitoring;
- integration with third-party analytics frameworks and solutions for advanced usage analytics;
- remote control and OTA updates for your smart sensors and other devices;
- customizable mobile applications with minimum coding efforts.

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="https://img.thingsboard.io/solutions/waste_monitoring/waste-monitoring-1.png" alt="waste monitoring 1">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/solutions/waste_monitoring/waste-monitoring-2.png" alt="waste monitoring 2">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/solutions/waste_monitoring/waste-monitoring-3.png" alt="waste monitoring 3">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/solutions/waste_monitoring/waste-monitoring-4.png" alt="waste monitoring 4">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/solutions/waste_monitoring/waste-monitoring-5.png" alt="waste monitoring 5">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/solutions/waste_monitoring/waste-monitoring-6.png" alt="waste monitoring 6">
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
                <object data="https://img.thingsboard.io/microservices-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/reference/msa/">Scalability and high availability</a>
                    <p>ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. Platform components are horizontally scalable. ThingsBoard has production deployments with more than 500 000 smart-meters.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="https://img.thingsboard.io/telemetry-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/getting-started-guides/connectivity/">Connectivity</a>
                    <p>Connect devices directly to the platform via the following built-in protocols: HTTP, CoAP, MQTT, LwM2M, and SNMP. Connect devices in your local network to the cloud using ThingsBoard Gateway via Modbus, BLE, BACnet, OPC-UA, and other protocols.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="https://img.thingsboard.io/integration-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/integrations/">LoRaWAN & SigFox Support</a>
                    <p>Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, ChirpStack, Actility, etc. Connect SigFox devices via integrations with the SigFox backend.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="https://img.thingsboard.io/security-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">Security</a>
                    <p>ThingsBoard supports industry-standard encryption algorithms like RSA and ECDSA to ensure the data is secure during transfer via TLS(TCP) and DTLS (UDP).</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="https://img.thingsboard.io/engine-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">Data processing</a>
                    <p>ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. You are free to process data with the Rule engine or push it to further processing in external systems.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="https://img.thingsboard.io/visualization-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/dashboards/">Data visualization</a>
                    <p>Visualize collected data using rich interactive dashboards. Develop multi-state interactive dashboards with zero coding efforts and built-in charts, gauges, maps, tables, and control widgets. Customize every dashboard aspect using advanced widget settings or even custom widget bundles. Low latency updates are possible with embedded web-sockets support.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="https://img.thingsboard.io/phone-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/mobile/">Mobile application</a>
                    <p>Build your own IoT mobile application with minimum coding efforts using ThingsBoard Mobile Application, an open-source project based on Flutter. Leverage a built-in set of mobile actions to take a photo, scan QR code, update location, and more directly within the dashboard.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="https://img.thingsboard.io/tenancy-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/entities-and-relations/">Multi-tenancy</a>
                    <p>ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. Single tenant may have multiple tenant administrators and millions of devices and customers. It also offers out-of-the-box support of OTA updates for your smart meters.</p>
                </div>
            </div>
        </div>
    </div>
</section>

## Waste Management solution overview

The diagram below identifies data flow and integration points for a typical waste management solution that uses the ThingsBoard platform to collect and analyze monitoring data from waste sensors.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="https://img.thingsboard.io/iot-use-cases/smart-energy-diagram.svg"></object>

You may notice plenty of connectivity options for the waste sensors: direct connection to the cloud, through the IoT Gateway, or an Integration with a third-party system.
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
