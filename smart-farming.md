---
layout: use-case
title: ᐉ Smart Farming & Agriculture — IoT Agriculture Solutions
description: Internet of things farming ✔ Smart agriculture ✔ IoT sensors in agriculture ⚫ ThingsBoard ➤ Save up to 90% of development time for your smart-farming & agriculture solutions
notitle: "true"

---

{% include usecase-nav.html usecase="smart-farming" %}

<h1 class="usecase-title">Smart Farming & IoT Agriculture Solutions</h1>

ThingsBoard platform dramatically reduces time to market and efforts to create smart-farming solutions.
Save up to 90% of development time for your smart-farming solution by utilizing the following platform benefits:

  - Reliable and fault-tolerant data collection from your IoT devices and sensors to monitor facilities state, crop growth characteristics, humidity level, etc.;
  - Powerful rule engine to process collected data and produce alarms and valuable insights;
  - Optimize resource consumption with automatic remote control of actuators;
  - Advanced and flexible visualization for real-time and historical data;
  - Customizable end-user dashboards to share farm monitoring results;
  - On-premises and cloud deployment options;
  - Tolerate connectivity issues with the farm sites with the help of [ThingsBoard Edge](/products/thingsboard-edge/);
  - Customizable mobile applications with minimum coding efforts;

The platform provides production-ready server infrastructure to connect your IoT devices, store and analyze collected IoT data and optimize returns on inputs and resources.

## Smart farming dashboard

The following interactive dashboard represents a smart-farming component that you may easily embed into your IoT solution. 
This particular dashboard allows users to monitor and control the aeration inside silos. 
You may quickly adapt it to other farm assets tracking or remote control scenarios.

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/smart-farming/sf1.png" alt="Smart farming dashboard with location">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/smart-farming/sf2.png" alt="Smart farming dashboard with big linear chart">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/smart-farming/sf3.png" alt="Smart farming dashboard dark theme">
    </div>
</div>

<div class="center" style="margin-bottom: 64px;">
    <a target="_blank" href="https://demo.thingsboard.io/dashboard/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button">View live demo</a>
</div>

The live dashboard displays real-time data from temperature, moisture, and ultrasonic sensor collected using ThingsBoard MQTT API.
Collected data is processed via the rule engine to raise alarms on certain thresholds.
The main dashboard displays the silo asset's location, corresponding alarms, and real-time data feeds.
Click on the alarm or silo row to open the asset details and access the aeration controls.
You may export the dashboard from our live demo server and import it to your ThingsBoard instance.

## ThingsBoard advantages
<section class="usecase-advantages">
    <div class="usecase-background">
        <div class="bottom-features1"></div><div class="bottom-features2"></div><div class="small11"></div><div class="small12"></div>
    </div>
    <div class="cards row">
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/microservices-icon.svg" alt="Microservice icon">
                <div>
                    <a class="title" href="/docs/reference/msa/">Scalability and high availability</a>
                    <p>ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. 
                        Platform components are horizontally scalable. ThingsBoard has production deployments supporting more then 1000 agriculture sites and 500 000 devices connected.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/telemetry-icon.svg" alt="Telemetry icon">
                <div>
                    <a class="title" href="/docs/getting-started-guides/connectivity/">Connectivity</a>
                    <p>Connect devices directly to the platform via the following built-in protocols: HTTP, CoAP, MQTT, LwM2M, and SNMP. 
                        Connect devices in your local network to the cloud using ThingsBoard Gateway via Modbus, BLE, BACnet, OPC-UA, and other protocols.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/integration-icon.svg" alt="Integration icon">
                <div>
                    <a class="title" href="/docs/user-guide/integrations/">LoRaWAN & SigFox Support</a>
                    <p>Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, ChirpStack, Actility, etc. Connect SigFox devices via integrations with the SigFox backend.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/security-icon.svg" alt="Security icon">
                <div>
                    <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">Security</a>
                    <p>ThingsBoard supports industry-standard encryption algorithms like RSA and ECDSA to ensure the data is secure during transfer via TLS(TCP) and DTLS (UDP).</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/engine-icon.svg" alt="Gear icon">
                <div>
                    <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">Data processing</a>
                    <p>ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. You are free to process data with the Rule engine or push it to further processing in external systems.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/visualization-icon.svg" alt="Data visualization icon">
                <div>
                    <a class="title" href="/docs/user-guide/dashboards/">Data visualization</a>
                    <p>Visualize collected data using rich interactive dashboards. Develop multi-state interactive dashboards with zero coding efforts and built-in charts, gauges, maps, tables, and control widgets. Customize every dashboard aspect using advanced widget settings or even custom widget bundles. Low latency updates are possible with embedded web-sockets support.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/device-icon.svg" alt="Device icon">
                <div>
                    <a class="title" href="/docs/mobile/">Mobile application</a>
                    <p>Build your own IoT mobile application with minimum coding efforts using ThingsBoard Mobile Application, an open-source project based on Flutter. Leverage a built-in set of mobile actions to take a photo, scan QR code, update location, and more directly within the dashboard.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/tenancy-icon.svg" alt="Tenancy icon">
                <div>
                    <a class="title" href="/docs/user-guide/entities-and-relations/">Multi-tenancy</a>
                    <p>ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. Single tenant may have multiple tenant administrators and millions of devices and customers. It also offers out-of-the-box support of OTA updates for your smart meters.</p>
                </div>
            </div>
        </div>
    </div>
</section>

## Smart farming solution overview

The diagram below identifies data flow and integration points for a typical smart-farming solution that uses the ThingsBoard platform to collect and analyze data from IoT sensors.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="https://img.thingsboard.io/iot-use-cases/smart-farming.svg"></object>

You may notice plenty of connectivity options for the IoT sensors: direct connection to the cloud, through the IoT Gateway, integration with a third-party system or ThingsBoard Edge.
Most of the smart-farming projects today use IoT Gateway deployed at the farm. 
Usually this device is either running [ThingsBoard IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/) or using [Gateway API](/docs/reference/gateway-mqtt-api/).
Using the gateway, customers optimize hardware cost and connect Modbus, BACnet and other sensors to the cloud.  

Advanced smart-farming IoT solutions may leverage the [ThingsBoard Edge](/products/thingsboard-edge/). 
The Edge computing solution is especially useful in case of poor or frequent network outages. See edge [use-cases](/docs/edge/use-cases/overview/) to learn more.

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


