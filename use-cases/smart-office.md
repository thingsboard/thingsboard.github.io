---
layout: use-case
title: IoT smart office solutions with ThingsBoard
description: IoT smart office solutions with ThingsBoard
notitle: "true"

---

{% include usecase-nav.html usecase="smart-office" %}

<h1 class="usecase-title">Smart office solutions</h1>

ThingsBoard platform dramatically reduces time to market and efforts to create smart office solutions.
Platform is widely used for:

  - smart energy management;
  - access logging and control;
  - indoor tracking of employees;
  - occupancy of meeting and lavatory rooms;
  - indoor air quality and HVAC monitoring;

Save up to 90% of development time for your smart office solution by utilizing the following platform benefits:

  - Reliable and fault-tolerant data collection from your IoT devices and sensors;
  - Powerful rule engine to process collected data and produce alarms and valuable insights;
  - Advanced and flexible visualization for real-time and historical data;
  - Customizable end-user dashboards to share the monitoring results;
  - On-premises and cloud deployment options;
  - Remote control and OTA updates for your IoT devices;
  - Customizable mobile applications with minimum coding efforts;

The platform provides production-ready server infrastructure to connect your IoT devices, store, analyze and share collected IoT data;

## Smart office template

Smart Office [template](https://thingsboard.io/docs/paas/solution-templates/smart-office/) represents a basic work space monitoring and management solution. 
With this layout you get an interactive dashboard with the ability to control HVAC system, 
and have a high-level report of key metrics necessary for effective and proactive office management.

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/usecases/smart-office/so1.png" alt="smart office 1">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-office/so2.png" alt="smart office 2">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-office/so3.png" alt="smart office 3">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-office/so4.png" alt="smart office 4">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-office/so5.png" alt="smart office 5">
    </div>
</div>

<div class="center" style="margin-bottom: 64px;">
    <a target="_blank" href="https://thingsboard.cloud/dashboard/bf47dcb0-8b38-11ec-a344-c767c1ab1bb8?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button">View live demo</a>
</div>

The live dashboard is part of the [solution template](https://thingsboard.io/docs/paas/solution-templates/smart-office/) 
and displays office floor plan and data from various IoT sensors that is collected using ThingsBoard MQTT API.

You may use the dashboard to:

* observe office sensors and their location;
* browse indoor temperature and power consumption history;
* monitor temperature alarms;
* control HVAC (requires connected device);
* observe specific details for each sensor.

The dashboard has multiple states. The main state displays the list of the devices, their location on the office map as well as the list of their alarms.
You may drill down to the device details state by clicking on the table row. The device details are specific to the device type.

## ThingsBoard advantages
<section class="usecase-advantages">
    <div class="usecase-background">
        <div class="bottom-features1"></div><div class="bottom-features2"></div><div class="small11"></div><div class="small12"></div>
    </div>
    <div class="cards row">
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/microservices-icon.svg" alt="Microservice icon">
                <div>
                    <a class="title" href="/docs/reference/msa/">Scalability and high availability</a>
                    <p>ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. 
                        Platform components are horizontally scalable. ThingsBoard has production deployments supporting more then 500 000 devices connected.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/telemetry-icon.svg" alt="Telemetry icon">
                <div>
                    <a class="title" href="/docs/getting-started-guides/connectivity/">Connectivity</a>
                    <p>Connect devices directly to the platform via the following built-in protocols: HTTP, CoAP, MQTT, LwM2M, and SNMP. 
                        Connect devices in your local network to the cloud using ThingsBoard Gateway via Modbus, BLE, BACnet, OPC-UA, and other protocols.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/integration-icon.svg" alt="Integration icon">
                <div>
                    <a class="title" href="/docs/user-guide/integrations/">LoRaWAN & SigFox Support</a>
                    <p>Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, ChirpStack, Actility, etc. Connect SigFox devices via integrations with the SigFox backend.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/security-icon.svg" alt="Security icon">
                <div>
                    <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">Security</a>
                    <p>ThingsBoard supports industry-standard encryption algorithms like RSA and ECDSA to ensure the data is secure during transfer via TLS(TCP) and DTLS (UDP).</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/engine-icon.svg" alt="Gear icon">
                <div>
                    <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">Data processing</a>
                    <p>ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. You are free to process data with the Rule engine or push it to further processing in external systems.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/visualization-icon.svg" alt="Data visualization icon">
                <div>
                    <a class="title" href="/docs/user-guide/dashboards/">Data visualization</a>
                    <p>Visualize collected data using rich interactive dashboards. Develop multi-state interactive dashboards with zero coding efforts and built-in charts, gauges, maps, tables, and control widgets. Customize every dashboard aspect using advanced widget settings or even custom widget bundles. Low latency updates are possible with embedded web-sockets support.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/device-icon.svg" alt="Device icon">
                <div>
                    <a class="title" href="/docs/mobile/">Mobile application</a>
                    <p>Build your own IoT mobile application with minimum coding efforts using ThingsBoard Mobile Application, an open-source project based on Flutter. Leverage a built-in set of mobile actions to take a photo, scan QR code, update location, and more directly within the dashboard.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <img src="/images/tenancy-icon.svg" alt="Tenancy icon">
                <div>
                    <a class="title" href="/docs/user-guide/entities-and-relations/">Multi-tenancy</a>
                    <p>ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. Single tenant may have multiple tenant administrators and millions of devices and customers. It also offers out-of-the-box support of OTA updates for your smart meters.</p>
                </div>
            </div>
        </div>
    </div>
</section>

## Smart office solution overview

The diagram below identifies data flow and integration points for a typical smart office solution that uses the ThingsBoard platform to collect and analyze data from IoT sensors.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="/images/iot-use-cases/common-edge.svg"></object>

You may notice plenty of connectivity options for the IoT sensors: direct connection to the cloud, through the IoT Gateway, integration with a third-party system or ThingsBoard Edge.
Most of the smart office projects today use IoT Gateway deployed at the office site. 
Usually this device is either running [ThingsBoard IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/) or using [Gateway API](/docs/reference/gateway-mqtt-api/).
Using the gateway, customers optimize hardware and connectivity cost. You may connect multiple sensors via BLE or other technology to a gateway and use only one WiFi or wired connectivity module.

Advanced smart-office IoT solutions may use LoRaWAN or SigFox devices as well.

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
