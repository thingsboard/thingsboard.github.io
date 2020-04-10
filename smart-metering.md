---
layout: docwithnav
title: IoT smart metering solutions and smart meter data visualization with ThingsBoard 
description: IoT smart metering solutions and smart meter data visualization with ThingsBoard
horizontaltoc: "true"

---
<link rel="stylesheet" href="/smart-metering-slider/widget-slider.css">

<ul class="widget-slider">
  <li>
    <a href="/docs/contact-us/" class="orderThisCase"><span>ORDER THIS USE CASE</span></a>
  </li>
</ul>

Traditionally being a part of the electrical grid infrastructure, a smart meter is an electronic device for remote monitoring and recording of energy consumption. However, in the age of IoT and IoT platforms, standalone smart meters give way to more advanced and multi-purpose smart metering solutions, which offer a broader range of remote monitoring and alerting capabilities as well as provide powerful data analytics tools to help companies and individual users optimize their energy, water, gas, fuel and other resources consumption.  

A typical challenge for companies implementing smart meters is how to integrate them within their infrastructure and set up custom-tailored smart metering use cases. The very short (and probably best) way to achieve these goals is by using an IoT platform that offers out-of-the-box solutions and templates for smart metering. ThingsBoard provides that option. One of the strongest advantages of an enterprise-grade IoT platform is its data processing capabilities. This means the ability to perform not only the data collection (from diverse smart meters in a centralized way), but customized visualization of received data, configuration of user alerts and notifications, and feeding the collected data into other applications or data stores also.

Another critical advantage is, definitely, the cost of smart metering implementation. Using an IoT platform of above-mentioned class allows you to have all the necessary functionality right away and focus on building particular smart metering use cases instead, saving time and avoiding the risks associated with in-house IoT development.  

### Smart metering solutions with ThingsBoard

ThingsBoard Team has prepared out-of-the-box Smart Metering application designed to be used by the platform administrator and non-technical customer users and operators.

<link rel="stylesheet" href="/smart-metering-slider/slider.css">

<section id="slider">
  <input type="radio" name="slider" id="s1">
  <input type="radio" name="slider" id="s2">
  <input type="radio" name="slider" id="s3" checked>
  <input type="radio" name="slider" id="s4">
  <input type="radio" name="slider" id="s5">
  <label for="s1" id="slide1">
  <p class="slide_description">With this use case you get pre-configured multi-state dashboard, pre-configured rules and alarms. No need to code.
    The one can populate thresolds and conditions in order to receive or send notifications.</p>
  </label>
  <label for="s2" id="slide2">
  <p class="slide_description">Simple End users do not have the ability to manage the system.
    With ReadOnly role they can view the dashboard and set thresholds only.</p>
  </label>
  <label for="s3" id="slide3">
  <p class="slide_description">ThingsBoard delivers and stores the data from smart meters in reliable and fault-tolerant way, 
  administrator provides permission to visualized data. The top-level admin user see all info about Entites.</p>
  </label>
  <label for="s4" id="slide4">
   <p class="slide_description">In this use case, the data is aggregated for each level of hierarchy. 
  Facility manager of particular asset has access to related entities' data.</p>
  </label>
  <label for="s5" id="slide5">
  <p class="slide_description">All Customer entites are separated from each other. The Administrator of a Customer is able to manage Entities (e.g. create Users, add  devices) and respective data that belongs to particular Customer only.</p>
  </label>
</section>

This application is basically an IoT solution blueprint with the following features:

- Reliable and fault tolerant data collection for your smart water and smart energy meters;
- Create customers and provision assets and meters for those customers;
- Manage customer users with role-based access control;
- Configure resource consumption, RSSI, battery level and other thresholds;
- Track online/off-line devices and execute required alarms;
- Analyze and Visualize collected data;

The application can be deployed to any ThingsBoard Professional Edition instance via REST API based script. This ready-to-use solution can be ordered via [contact us](/docs/contact-us/).
   
### Solution architecture

![Smart metering solution diagram](/images/iot-use-cases/smart-energy-monitoring1.svg)

**Device Connectivity**

Solution supports any well-know connectivity options for smart-meters: 

- LoRaWAN devices are easily connected using existing LoRaWAN NS integrations: [Actility ThingPark](/docs/user-guide/integrations/thingpark/),
[TheThingsNetwork](/docs/user-guide/integrations/ttn/) or any other NS based on HTTP webhooks (/docs/user-guide/integrations/http/);
- IP enabled devices using existing HTTP, MQTT or CoAP protocols described [here](https://thingsboard.io/docs/api/);
- NB IoT devices using [TCP](/docs/user-guide/integrations/tcp/), [UDP](/docs/user-guide/integrations/udp/) or other [custom](/docs/user-guide/integrations/custom/) integrations;
- Modbus, OPC-UA, BLE or other devices deployed in the LAN of a Customer using [IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/);
- Consume data streams from AWS ([AWS IoT](/docs/user-guide/integrations/aws-iot/), [AWS Kinesis](/docs/user-guide/integrations/aws-kinesis/))
, [IBM Watson](/docs/user-guide/integrations/ibm-watson-iot/) or [Azure Event Hub](/docs/user-guide/integrations/azure-event-hub/);

If you don't see suitable connectivity option listed above, or have any troubles connecting your device, please [contact us](/docs/contact-us/).

**Device Provisioning**
 
When using ThingsBoard Integrations, devices may be provisioned automatically and should be pushed to "Smart Water Meters" and "Smart Energy Meters" device groups.
When using IP enabled devices or IoT Gateway, devices should be pre-provisioned using [CSV bulk-upload](/docs/user-guide/bulk-provisioning/) feature.    

**Data Processing**

Once the data arrives to the platform it is processed by the pre-configured [Rule Chains](/docs/user-guide/rule-engine-2-0/overview/). 
Those Rule Chains are configured to aggregate the incoming data on an hourly, daily, weekly and monthly basis and match it against thresholds. 
Thresholds are configured either by the Tenant Administrator or Customer Users.

**Dashboards**

There are three Dashboards configured for this use-case that correspond to three main User Roles:

- "Smart Building" dashboard is for Tenant Administrator users and enables the following functionality:
  - CRUD (Create/Read/Update/Delete) operations for Customers;
  - CRUD operations for Customer Administrators and Customer Users;
  - CRUD of Customer Assets - buildings and other facilities;
  - Ability to assign Water and Energy meters from a pre-configured smart meter groups to particular customer asset;
  - Ability to configure various thresholds for both smart meters and customer assets;
  - Ability to manage list of users that should receive notifications for each asset;
  - Ability to browse charts that display energy consumption on an Asset or Device level;
- "	Smart Building (Administrator)" dashboard is for Customer Administrator users and enabled the following functionality:
  - CRUD of Customer Assets - buildings and other facilities;
  - Ability to claim Water and Energy meters from a pre-configured smart meter groups to particular customer asset;
  - Ability to configure various thresholds for both smart meters and customer assets;
  - Ability to browse charts that display energy consumption on an Asset or Device level;
- "	Smart Building (User)" dashboard is for Customer Read-Only users and enabled the following functionality:
  - Ability to configure various thresholds for both smart meters and customer assets;
  - Ability to browse charts that display energy consumption on an Asset or Device level;
  
**Customization capabilities**

The use-case is intended to be a PoC or even MVP of particular solution, however, you might want to customize the end-user dashboards and rule chains to match your particular requirements.
It is also possible to integrate with advanced analytics frameworks and solutions for additional processing of smart metering data and reporting. 
Examples of such solutions are [Trendz Analytics](/docs/trendz/) or [Kafka Streams]((/docs/samples/analytics/kafka-streams/))
  