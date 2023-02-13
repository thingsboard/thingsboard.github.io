---
layout: use-case
title: Assisted Living solution
description: Monitoring and controlling residents' health, tracking their movement and environment with ThingsBoard IoT Platform
notitle: "true"

---

{% include usecase-nav.html usecase="assisted-living" %}

<h1 class="usecase-title">Assisted Living solution</h1>

We developed the Assisted Living <a href="/docs/paas/solution-templates/assisted-living">template</a> to represent a generic senior housing industry solution.

The field of care for the elderly and people with disabilities is widespread in many countries. Caring for residents of such institutions requires a lot of attention, effort, and specially trained personnel.
We have developed a solution that helps both staffs and raises the comfort level of residents to a new level. Personnel responsible for monitoring residents' condition in real-time can monitor residents' health status and placement and reduce the response time in the event of unforeseen circumstances.

Take care of your guests now with the Assisted Living solution.


<h2>Solution Structure</h2>

The **Assisted Living Administration** dashboard allows you to monitor the condition and movement of residents in real-time and also allows you to manage locations, sensors, and alarms. We are using components that you can easily embed into your IoT solution.


Also, this dashboard has several states:

- **Main state** - intended for provisions of residents, alarms of residents, and rooms;
- **Residents state** - assigned to resident management;
- **Zones state** - responsible for the management of zones, which in the future will be the basis for rooms and devices;
- **Zone State** - intended for room and device management.

<h2>Assisted Living Benefits</h2>
Save up to 90% of development time for your assisted living solution by utilizing the following platform benefits:
- reliable and scalable data collection for your room sensors and smart bracelets;
- powerful rule engine to process collected data and produce alarms and valuable insights;
- advanced and flexible visualization for real-time and historical data;
- customizable end-user dashboards to analyze and share the results of residents monitoring;
- integration with third-party analytics frameworks and solutions for advanced usage analytics;
- remote control and OTA updates for your room sensors and other devices;
- customizable mobile applications with minimum coding efforts.


<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/solutions/assisted_living/assisted-living-1.png" />
    </div>
    <div>
        <img class="item-image" src="/images/solutions/assisted_living/assisted-living-2.png" />
    </div>
    <div>
        <img class="item-image" src="/images/solutions/assisted_living/assisted-living-3.png" />
    </div>
    <div>
        <img class="item-image" src="/images/solutions/assisted_living/assisted-living-4.png" />
    </div>
    <div>
        <img class="item-image" src="/images/solutions/assisted_living/assisted-living-5.png" />
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
                    <a class="title" href="/integrations">LoRaWAN & SigFox Support</a>
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

## Assisted Living solution overview 

The diagram below identifies data flow and integration points for a typical assisted living solution that uses the ThingsBoard platform to collect and analyze monitoring data from sensors.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="/images/iot-use-cases/smart-energy-diagram.svg"></object>

You may notice plenty of connectivity options for the room sensors: direct connection to the cloud, through the IoT Gateway, or an Integration with a third-party system.
The platform supports industry-standard encryption algorithms and device credentials types. ThingsBoard stores data in the fault-tolerant and reliable Cassandra database. 
The Rule Engine enables forwarding incoming data to various analytics systems, such as Apache Spark or Hadoop, using Kafka or other Message buses.

## Learn more

<a style="margin-right: 10px;" href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/industries/smart-energy/" class="button">Customers feedback</a>
<a style="margin: 10px;" href="/docs/#platform-features" class="button">Platform features</a>
<a style="margin: 10px;" href="/docs/reference/" class="button">Architecture</a>
<a style="margin: 10px;" href="/docs/contact-us/" class="button">Contact us</a>
