---
layout: use-case
title: IoT smart retail solutions with ThingsBoard
description: IoT smart retail solutions with ThingsBoard
notitle: "true"

---

{% include usecase-nav.html usecase="smart-retail" %}

<h1 class="usecase-title">Smart retail solutions</h1>

Smart retail [solution template](/docs/paas/solution-templates/smart-retail/) represent generic smart retail solution. 
As a solution provider, you may provision multiple Customers 
and assign pool of IoT devices to each customer.

Each Customer may provision their supermarket assets including custom floor plans.
Either you our your customer may physically install the devices and logically place them on the floor plan.

Customer users may configure specific thresholds per each device. 
All the logic to raise the alarms is already pre-configured in the corresponding device profiles.  

With this template you get interactive dashboards that allow you and your customers to 
browse current and historical state of their supermarkets.  

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/smart-retail/sr1.png" alt="smart retail 1">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/smart-retail/sr2.png" alt="smart retail 2">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/smart-retail/sr3.png" alt="smart retail 3">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/smart-retail/sr4.png" alt="smart retail 4">
    </div>
    <div>
        <img class="item-image" src="https://img.thingsboard.io/usecases/smart-retail/sr5.png" alt="smart retail 5">
    </div>
</div>

<div class="center" style="margin-bottom: 64px;">
    <a target="_blank" href="https://thingsboard.cloud/dashboard/551d4ca0-8b54-11ec-98f9-ff45c37940c6?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button">View live demo</a>
</div>

The live dashboard is part of the [solution template](/docs/paas/solution-templates/smart-retail) and 
is designed for supermarket managers to monitor state of the supermarket and react on alarms. It has multiple states:

* **Main** state contains a map of the supermarkets, and a list of alarms.
  Alarms are propagated from devices to the corresponding supermarket.
  The platform calculates state of each supermarket based on the highest severity of the propagated alarms.
  As a user, you are able to filter supermarkets on the map based on the state of the supermarket. 
* **Floor plan** state contains an indoor map with the floor plan of supermarket and device markers.
  Besides the map, state also contains two filters: based on device type and device state.
  Filter settings are persisted on the user level.
    * State filter allows you to filter devices based on the highest severity of the alarms. 
      For example, you may choose to display devices that have at least one critical alarm.
    * Device type filter allows you to show or hide specific devices based on the type of device.
      For example, you may display only Freezers and Chillers and hide all other devices.
    * Click on specific device marker to display device details state in the right panel of the dashboard.
      Content of the device details is specific to the device type. 
      For example, freezer device have a line chart with the temperature readings while smart bin has a bar chart with the fullness level.
      Nevertheless, the common elements of the device details is the header and alarms list.
      Header contains information about current state of the device and it's battery level (if device is battery powered). 
      Header also allows you to navigate to the settings of the particular device. Those settings allow you to configure the alarm thresholds.

Some dashboard features (for example, ability to delete devices) were disabled on the live demo dashboard because it is publicly available.

Once you install the solution template, you will also receive access to "**Smart Supermarket Administration**"
that allows you to provision customers, their users, supermarkets and devices. It has multiple states:

* **Main** state allows you to list the retail companies (customers). 
  We assume that the customer is a retail company that own one or multiple supermarkets.
  We have provisioned two "fake" retail companies with number of supermarkets for demonstration purposes.
 * **Device management** state allows you to manage devices in scope of the retail company (customer).
  You may provision new devices or delete existing devices. The state displays a table with all devices assigned to this retail company.
  This means that Tenant or Supermarket Administrator will be able to use those devices to position them in the Supermarket.
  You may treat this list as a pool of devices that are available for installation in the Supermarkets of the Customer. 
* **Supermarket management** state allows you to manage supermarkets in scope of the retail company (customer).
    The dashboard state displays supermarkets on the map and a list of supermarkets in the table.  
    Supermarkets are assets that may contain multiple devices and few attributes: floor plan and address.
* **Supermarket devices** state displays an indoor map with the floor plan of supermarket and device markers.
    You may drag-and-drop the device markers to define precise location of the device in the supermarket.

ThingsBoard platform dramatically reduces time to market and efforts to create smart retail solutions.
Save up to 90% of development time for your smart retail solution by utilizing the following platform benefits:

- Reliable and fault-tolerant data collection from your IoT devices and sensors;
- Powerful rule engine to process collected data and produce alarms and valuable insights;
- Advanced and flexible visualization for real-time and historical data;
- Customizable end-user dashboards to share the monitoring results;
- On-premises and cloud deployment options;
- Remote control and OTA updates for your IoT devices;
- Customizable mobile applications with minimum coding efforts.

The platform provides production-ready server infrastructure to connect your IoT devices, store, analyze and share collected IoT data.


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

## Smart retail solution overview

The diagram below identifies data flow and integration points for a typical supermarket monitoring solution that uses the ThingsBoard platform to collect and analyze data from multiple sources.

<object width="100%" style="max-width: max-content; margin: 32px 0" data="https://img.thingsboard.io/iot-use-cases/common-edge.svg"></object>

You may notice plenty of connectivity options for the IoT sensors: direct connection to the cloud, through the IoT Gateway, integration with a third-party system or ThingsBoard Edge. 

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
