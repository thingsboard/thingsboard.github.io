---
layout: use-case
title: Fleet tracking and fleet management
description: Fleet tracking and fleet management with ThingsBoard IoT Platform
notitle: "true"

---

{% include usecase-nav.html usecase="fleet-tracking" %}

<h1 class="usecase-title">Smart tracking and fleet management</h1>

Manage your company's fleet and assets with ThingsBoard using convenient and efficient IoT solutions. 
Fleet tracking systems allow businesses to easily control and monitor their assets, routes, fuel consumption, etc. Having the necessary information about the state of assets affairs, responsible persons can make appropriate strategic decisions and improve the work of the links that need it.

Installing a fleet tracking <a href="/docs/paas/solution-templates/fleet-tracking/">template</a> allows drivers, managers, and staff to improve communication, increase efficiency, and maintain a high level of safety.

Therefore, use IoT solutions in your enterprise and get the benefits now.

## Fleet Tracking Structure

As part of this solution, we have created a dashboard that displays data from tracking sensors.
This dashboard helps to monitor and control location, speed, and fuel level in real time.
Our dashboard has multiple states - **Main state** and  **Bus state**.

**Main state** contains an interactive map for monitoring the movement of transport, a list of existing buses with detailed information about them, and a table of Alarms.

**Bus state** contains an interactive map of the history of the route, the current route area, detailed information about the bus, and corresponding alarms.

Collected data is processed via the rule engine to raise alarms when:
- vehicle leaves configurable route perimeter;
- the vehicle is not moving for 2 minutes while on the route;
- fuel level is low;
- violation of speed limits.

The following interactive dashboard presents an intelligent visualization of IoT data that you can easily integrate into your IoT solution. See more details <a href="/docs/paas/solution-templates/fleet-tracking/">here</a>.

## Fleet tracking dashboard

The following interactive dashboard hosted on live demo server represents vehicle routes and state indicators that may be embedded in your IoT fleet tracking project. 

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/usecases/fleet-tracking/ft1.png" />
    </div>
    <div>
        <img class="item-image" src="/images/usecases/fleet-tracking/ft2.png" />
    </div>
    <div>
        <img class="item-image" src="/images/usecases/fleet-tracking/ft3.png" />
    </div>
</div>

<div class="center" style="margin-bottom: 64px;">
    <a target="_blank" href="https://demo.thingsboard.io/dashboard/3d0bf910-ee09-11e6-b619-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button">View live demo</a>
</div>

The live Fleet Tracking dashboard displays real-time data from several tracking sensors collected using ThingsBoard MQTT API. Collected data is processed via the rule engine to raise alarms on certain thresholds. You may export the dashboard from our live demo server and import it to your ThingsBoard instance.

## Benefits of the Fleet Tracking template

Save up to 90% of development time for your fleet tracking solution by utilizing the following platform benefits:
- reliable and scalable data collection for your fleet tracking sensors;
- powerful rule engine to process collected data and produce alarms and valuable insights;
- advanced and flexible visualization for real-time and historical data;
- customizable end-user dashboards to analyze and share the results of fleet tracking;
- integration with third-party analytics frameworks and solutions for advanced analytics;
- remote control and OTA updates for your tracking sensors and other devices;
- customizable mobile applications with minimum coding efforts.

Of course, you may extend the list of alarms and completely customize the dashboard. 
You may export the dashboard from our live demo server and import it to your ThingsBoard instance.
You may edit the route area widget and enable configuration of the route area for your local copy of the dashboard. 


## ThingsBoard advantages
<section class="usecase-advantages">
    <div class="usecase-background">
        <div class="bottom-features1"></div><div class="bottom-features2"></div><div class="small11"></div><div class="small12"></div>
    </div>
    <div class="cards row">
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/microservices-icon.svg">
                <div>
                    <a class="title" href="/docs/reference/msa/">Scalability and high availability</a>
                    <p>ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. 
                        Platform components are horizontally scalable. ThingsBoard has production deployments supporting more then 18 000 vehicles and 500 000 devices connected.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/telemetry-icon.svg">
                <div>
                    <a class="title" href="/docs/getting-started-guides/connectivity/">Connectivity</a>
                    <p>Connect devices directly to the platform via the following built-in protocols: HTTP, CoAP, MQTT, LwM2M, and SNMP. 
                        Connect devices in your local network to the cloud using ThingsBoard Gateway via Modbus, BLE, BACnet, OPC-UA, and other protocols.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/integration-icon.svg">
                <div>
                    <a class="title" href="/docs/user-guide/integrations/">LoRaWAN & SigFox Support</a>
                    <p>Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, ChirpStack, Actility, etc. Connect SigFox devices via integrations with the SigFox backend.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/security-icon.svg">
                <div>
                    <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">Security</a>
                    <p>ThingsBoard supports industry-standard encryption algorithms like RSA and ECDSA to ensure the data is secure during transfer via TLS(TCP) and DTLS (UDP).</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/engine-icon.svg">
                <div>
                    <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">Data processing</a>
                    <p>ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. You are free to process data with the Rule engine or push it to further processing in external systems.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/visualization-icon.svg">
                <div>
                    <a class="title" href="/docs/user-guide/dashboards/">Data visualization</a>
                    <p>Visualize collected data using rich interactive dashboards. Develop multi-state interactive dashboards with zero coding efforts and built-in charts, gauges, maps, tables, and control widgets. Customize every dashboard aspect using advanced widget settings or even custom widget bundles. Low latency updates are possible with embedded web-sockets support.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/device-icon.svg">
                <div>
                    <a class="title" href="/docs/mobile/">Mobile application</a>
                    <p>Build your own IoT mobile application with minimum coding efforts using ThingsBoard Mobile Application, an open-source project based on Flutter. Leverage a built-in set of mobile actions to take a photo, scan QR code, update location, and more directly within the dashboard.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/tenancy-icon.svg">
                <div>
                    <a class="title" href="/docs/user-guide/entities-and-relations/">Multi-tenancy</a>
                    <p>ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. Single tenant may have multiple tenant administrators and millions of devices and customers. It also offers out-of-the-box support of OTA updates for your smart meters.</p>
                </div>
            </div>
        </div>
    </div>
</section>

## Fleet tracking solution overview

The diagram below identifies data flow and integration points for a typical fleet-tracking solution that uses the ThingsBoard platform to collect and analyze data from vehicle trackers.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="/images/iot-use-cases/fleet-tracking.svg"></object>

You may notice plenty of connectivity options for the vehicle trackers: direct connection to the cloud, through the IoT Gateway or integration with a third-party system.
Most of vehicle-tracking projects today use direct connection to the cloud using MQTT or CoAP in case of NB IoT. 
ThingsBoard supports either plain JSON or Protobuf, which significantly optimize network traffic and increase battery life;

The platform supports industry-standard encryption algorithms and device credentials types. ThingsBoard stores data in the fault-tolerant and reliable Cassandra database.
The Rule Engine enables forwarding incoming data to various analytics systems, such as Apache Spark or Hadoop, using Kafka or other Message buses.


## Learn more

<a style="margin-right: 10px;" href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/industries/smart-energy/" class="button">Customers feedback</a>
<a style="margin: 10px;" href="/docs/#platform-features" class="button">Platform features</a>
<a style="margin: 10px;" href="/docs/reference/" class="button">Architecture</a>
<a style="margin: 10px;" href="/docs/contact-us/" class="button">Contact us</a>