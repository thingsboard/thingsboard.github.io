---
layout: use-case
title: Fleet tracking and fleet management
description: Fleet tracking and fleet management with ThingsBoard IoT Platform
notitle: "true"

---

{% include usecase-nav.html usecase="fleet-tracking" %}

<h1 class="usecase-title">Smart tracking and fleet management</h1>

## Overview

ThingsBoard platform dramatically reduces time to market and efforts to create fleet-tracking solutions.
Save up to 90% of development time for your fleet-tracking solution by utilizing the following platform benefits:

  - Reliable and scalable data collection for your vehicle trackers and embedded sensors;
  - Built-in support of geolocation rules and complex perimeter definitions;
  - Built-in support of protobuf to optimize network traffic and increase battery life;  
  - Advanced and flexible IoT data visualization for both real-time and historical vehicle data;
  - Customizable end-user dashboards to share data from the vehicle tracking system with end users and customers;
  - Remote control and OTA updates for your smart trackers;
  - Customizable mobile applications with minimum coding efforts;

## Fleet tracking dashboard

The following interactive dashboard hosted on live demo server represents vehicle routes and state indicators that may be embedded in your IoT fleet tracking project. See dashboard description below.

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

The live dashboard displays real-time bus location, speed and fuel level collected using ThingsBoard MQTT API.
Collected data is processed via the rule engine to raise alarms on when:

 * Vehicle leaves configurable route perimeter;
 * Vehicle is not moving for 2 minutes while on route;
 * Fuel level is low;
 * Violation of speed limits;

The main dashboard displays the bus location, corresponding alarms, and the latest values of bus speed, fuel and status.
Click on the alarm or bus row to open the vehicle details and route history.

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

![Smart energy solution diagram](/images/iot-use-cases/fleet-tracking.svg)

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