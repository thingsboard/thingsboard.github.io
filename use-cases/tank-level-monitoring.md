---
layout: use-case
title: Tank Level Monitoring
description: Tank Level Monitoring with ThingsBoard IoT Platform
notitle: "true"

---

{% include usecase-nav.html usecase="tank-level-monitoring" %}

<h1 class="usecase-title">Tank level monitoring solution</h1>

Efficient tank level monitoring is indispensable for businesses, particularly gas stations, focusing on optimizing fuel inventory and preventing shortages or surpluses. Inaccurate fuel level monitoring can lead to operational inefficiencies, loss of revenue, and, in severe cases, safety hazards due to fuel spillage.

Our Fuel Level Monitoring <a href="/docs/paas/solution-templates/fuel-level-monitoring/">template</a> offers real-time insight into fuel levels, facilitating proactive management of fuel stocks and refining operational workflows. The solution employs advanced technology, including adaptable sensors and robust communication protocols, to accurately track tank fuel levels. With our intuitive dashboard, users can effortlessly monitor tank state, configure measurement details and custom alerts, and track fuel consumption. Mastering your fuel management processes can diminish operational disruptions and ensure continuous fuel availability, leading to streamlined operations and enhanced customer satisfaction.

Moreover, our solution is entirely customizable to accommodate the unique requirements of your business, whether you operate within the retail, industrial, or any other sector requiring meticulous fuel level monitoring. By leveraging our Fuel Level Monitoring solution, you can secure a competitive edge and attain superior operational efficiency. Revolutionize fuel management and propel your business to new heights with our Fuel Level Monitoring solution.

## Tank Level Monitoring Solution Structure

We have developed a Fuel Level Monitoring solution template that allows you to provision tanks and monitor the fuel level.
This dashboard empowers you to check fuel levels meticulously and react promptly to alterations in the tank state.  
It features components that can be effortlessly integrated into your IoT solution, enhancing the adaptability and user-friendliness of the system. 
Additionally, the dashboard is equipped with multiple states, allowing for a diverse range of interactions and data presentations to accommodate varying user needs and preferences:

**Main state** - designed to monitor the remaining fuel and control the placement of tanks, device management, and the alarm system;

**Tank state** - designed to display information about a specific tank.

## Tank Level Monitoring dashboard

The Fuel Level Monitoring interactive dashboard contains 2 states that are specialised for monitoring fuel levels in tanks, observing consumption statistics, managing devices.

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/fuel-level-monitoring/fuel-monitoring-1.png" />
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/fuel-level-monitoring/fuel-monitoring-2.png" />
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/fuel-level-monitoring/fuel-monitoring-3.png" />
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/fuel-level-monitoring/fuel-monitoring-4.png" />
    </div>
</div>

The incorporation of tanks and units selection further personalises the user interface, enabling more precise monitoring and management, while the streamlined interface ensures swift navigation and enhanced user experience, catering to various monitoring and management needs related to fuel level in tanks.

## Benefits of the Tank Level Monitoring template

Save up to 90% of development time for your fuel level monitoring solution by utilising the following platform benefits:
 - reliable and scalable data collection for your tanks sensors;
 - powerful rule engine to process collected data and produce alarms and valuable insights;
 - advanced and flexible visualisation for real-time and historical data;
 - customisable end-user dashboards to analyse and share the results of tank monitoring;
 - integration with third-party analytics frameworks and solutions for advanced usage analytics;
 - remote control and OTA updates for your smart sensors and other devices;
 - customisable mobile applications with minimum coding efforts.

## ThingsBoard advantages
<section class="usecase-advantages">
    <div class="usecase-background">
        <div class="bottom-features1"></div><div class="bottom-features2"></div><div class="small11"></div><div class="small12"></div>
    </div>
    <div class="cards row">
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/microservices-icon.svg">
                <div>
                    <a class="title" href="/docs/reference/msa/">Scalability and high availability</a>
                    <p>ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. 
                        Platform components are horizontally scalable. ThingsBoard has production deployments supporting more then 18 000 vehicles and 500 000 devices connected.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/telemetry-icon.svg">
                <div>
                    <a class="title" href="/docs/getting-started-guides/connectivity/">Connectivity</a>
                    <p>Connect devices directly to the platform via the following built-in protocols: HTTP, CoAP, MQTT, LwM2M, and SNMP. 
                        Connect devices in your local network to the cloud using ThingsBoard Gateway via Modbus, BLE, BACnet, OPC-UA, and other protocols.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/integration-icon.svg">
                <div>
                    <a class="title" href="/docs/user-guide/integrations">LoRaWAN & SigFox Support</a>
                    <p>Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, ChirpStack, Actility, etc. Connect SigFox devices via integrations with the SigFox backend.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/security-icon.svg">
                <div>
                    <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">Security</a>
                    <p>ThingsBoard supports industry-standard encryption algorithms like RSA and ECDSA to ensure the data is secure during transfer via TLS(TCP) and DTLS (UDP).</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/engine-icon.svg">
                <div>
                    <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">Data processing</a>
                    <p>ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. You are free to process data with the Rule engine or push it to further processing in external systems.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/visualization-icon.svg">
                <div>
                    <a class="title" href="/docs/user-guide/dashboards/">Data visualization</a>
                    <p>Visualize collected data using rich interactive dashboards. Develop multi-state interactive dashboards with zero coding efforts and built-in charts, gauges, maps, tables, and control widgets. Customize every dashboard aspect using advanced widget settings or even custom widget bundles. Low latency updates are possible with embedded web-sockets support.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/device-icon.svg">
                <div>
                    <a class="title" href="/docs/mobile">Mobile application</a>
                    <p>Build your own IoT mobile application with minimum coding efforts using ThingsBoard Mobile Application, an open-source project based on Flutter. Leverage a built-in set of mobile actions to take a photo, scan QR code, update location, and more directly within the dashboard.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="https://img.thingsboard.io/tenancy-icon.svg">
                <div>
                    <a class="title" href="/docs/user-guide/entities-and-relations/">Multi-tenancy</a>
                    <p>ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. Single tenant may have multiple tenant administrators and millions of devices and customers. It also offers out-of-the-box support of OTA updates for your smart meters.</p>
                </div>
            </div>
        </div>
    </div>
</section>

## Tank level monitoring solution overview

The diagram below identifies data flow and integration points for a typical fuel level monitoring solution that uses the ThingsBoard platform to collect and analyze data from fuel tanks.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="https://img.thingsboard.io/iot-use-cases/smart-energy-diagram.svg"></object>

You may notice plenty of connectivity options for the fuel tanks devices: direct connection to the cloud, through the IoT Gateway or integration with a third-party system.
Most of a fuel level monitoring projects today use direct connection to the cloud using MQTT or CoAP in case of NB IoT. 
ThingsBoard supports either plain JSON or Protobuf, which significantly optimize network traffic and increase battery life.

The platform supports industry-standard encryption algorithms and device credentials types. ThingsBoard stores data in the fault-tolerant and reliable Cassandra database.
The Rule Engine enables forwarding incoming data to various analytics systems, such as Apache Spark or Hadoop, using Kafka or other Message buses.


## Learn more

<a style="margin-right: 10px;" href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/industries/smart-energy/" class="button">Customers feedback</a>
<a style="margin: 10px;" href="/docs/#platform-features" class="button">Platform features</a>
<a style="margin: 10px;" href="/docs/reference/" class="button">Architecture</a>
<a style="margin: 10px;" href="/docs/contact-us/" class="button">Contact us</a>