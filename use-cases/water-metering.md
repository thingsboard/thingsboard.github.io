---
layout: use-case
title: IoT water metering solutions with ThingsBoard
description: IoT water metering solutions with ThingsBoard
notitle: "true"

---

{% include usecase-nav.html usecase="water-metering" %}

<h1 class="usecase-title">Water metering solutions</h1>

ThingsBoard platform dramatically reduces time to market and efforts to create water metering solutions.
Save up to 90% of development time for your smart office solution by utilizing the following platform benefits:

  - Reliable and fault-tolerant data collection from your IoT devices and sensors;
  - Powerful rule engine to process collected data and produce alarms and valuable insights;
  - Advanced and flexible visualization for real-time and historical data;
  - Customizable end-user dashboards to share the monitoring results;
  - On-premises and cloud deployment options;
  - Remote control and OTA updates for your IoT devices;
  - Customizable mobile applications with minimum coding efforts;

The platform provides production-ready server infrastructure to connect your IoT water meters, store, analyze and share collected IoT data;

## Water metering template

Water Metering [solution template](https://thingsboard.io/docs/paas/solution-templates/water-metering/) represent generic water metering solution. 
With this template, you get interactive dashboards that allow administrators and end-users to browse the state of the water meters and aggregated water consumption statistics. 
Users are able to define thresholds and enable alarms and notifications over SMS or email. 
You may easily integrate with external billing systems to produce and distribute invoices based on the aggregated consumption data from ThingsBoard. 

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/water-metering/wm1.png" alt="water metering 1">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/water-metering/wm2.png" alt="water metering 2">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/water-metering/wm3.png" alt="water metering 3">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/water-metering/wm4.png" alt="water metering 4">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/water-metering/wm5.png" alt="water metering 5">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/water-metering/wm6.png" alt="water metering 6">
    </div>
</div>

<div class="center" style="margin-bottom: 64px;">
    <a target="_blank" href="https://thingsboard.cloud/dashboard/aff5f200-8b48-11ec-a344-c767c1ab1bb8?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button">View live demo</a>
</div>

The live dashboard is part of the [solution template](https://thingsboard.io/docs/paas/solution-templates/smart-office/) and allows you to:

* observe location and status of the water meters on the map. Markers are clustered to be able to show thousands of meters simultaneously;
* browse active alarms and water consumption per day and week;
* use "Analytics", "Devices", "Alarms" views that are similar to the main dashboard;
* use "Settings" view to define alarm thresholds for the particular customer. Generated alarms will not be visible to Tenant Administrator by default;

Once you install the solution template, you will also receive access to "Water Metering Tenant Dashboard"
that allows you to manage water metering devices, users and alarms:

* observe location and status of the water meters on the map. Markers are clustered to be able to show thousands of meters simultaneously;
* use "Analytics" view to compare consumption for the current and previous month;
* use "Devices" view to get the list of all water meter devices with ability to
    * create a new device and assign it to the customer;
    * change the location of the device;
    * configure alarm thresholds for this device;
    * navigate to "Device" view by clicking on the device row;
* use "Device" view to:
    * browse water consumption history for a particular water meter device;
    * browse active alarms for a particular water meter device;
    * change water meter location information
    * upload water meter photo;
    * change location of the device;
* use "Customers" view to manage your customers;
* use "Alarms" view to browse and clear alarms from water meters;
* use "Settings" view to:
    * turn system alarms on and off;
    * define thresholds for system alarms;
    * turn sms and email notifications on and off;

Some dashboard features (for example, ability to create devices) were disabled on the live demo dashboard because it is publicly available.

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
                        Platform components are horizontally scalable. ThingsBoard has production deployments supporting more then 500 000 devices connected.</p>
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

## Water metering solution overview

The diagram below identifies data flow and integration points for a typical water metering solution that uses the ThingsBoard platform to collect and analyze data from smart water meters.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="https://img.thingsboard.io/iot-use-cases/common.svg"></object>

You may notice plenty of connectivity options for the IoT sensors: direct connection to the cloud, through the IoT Gateway, integration with a third-party system or ThingsBoard Edge.
Most of the water metering projects today use LoRaWAN, SigFox or NB IoT to connect the water meters. 

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
