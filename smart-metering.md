---
layout: common
title: IoT smart metering solutions and smart meter data visualization with ThingsBoard 
description: IoT smart metering solutions and smart meter data visualization with ThingsBoard
horizontaltoc: "true"

---

## IoT and smart meters

Traditionally being a part of the electrical grid infrastructure, a smart meter is an electronic device that allows for remote monitoring and recording of energy consumption. However, in the age of IoT and IoT platforms, standalone smart meters give way to more advanced and multi-purpose smart metering solutions. These solutions offer a broader range of remote monitoring and alerting capabilities as well as provide powerful data analytics tools to help companies and individual users optimize their energy, water, gas, or fuel consumption.  

A typical challenge for companies implementing smart meters is how to integrate them within their infrastructure and set up custom-tailored smart metering use cases. The best way to achieve these goals is by using an IoT platform that offers out-of-the-box solutions and templates for smart metering, such as ThingsBoard. One of the strongest advantages of an enterprise-grade IoT platform is its data processing capabilities. Not only will you be able to collect data from your diverse smart meters in a centralized way, but also set up custom visualization dashboards, configure user alerts and notifications, and feed the collected data into other applications or data stores.

Another critical advantage is the cost of smart metering implementation. Using an IoT platform allows you to have all the necessary functionality right away and focus on building particular smart metering use cases instead, saving time and avoiding the risks associated with in-house IoT development.  

### Smart metering solutions with ThingsBoard

<table style="border: none; width: initial;">
<tbody>
    <tr>
        <td><i class="fa fa-cloud-upload" style="font-size: 48px; color: #008b8b;" aria-hidden="true"></i></td>
        <td style="font-size: 20px;">Collect data from smart meters using different <a href="/docs/getting-started-guides/connectivity/">connectivity methods</a></td>
    </tr>    
    <tr>
        <td><i class="fa fa-dashboard" style="font-size: 48px; color: #008b8b;" aria-hidden="true"></i></td>
        <td style="font-size: 20px;"><a href="/docs/user-guide/visualization/">Visualize</a> the collected data on a <a href="/docs/iot-video-tutorials/#visualization">custom dashboard</a></td>
    </tr>    
    <tr>
        <td><i class="fa fa-line-chart" style="font-size: 48px; color: #008b8b;" aria-hidden="true"></i></td>
        <td style="font-size: 20px;"><a href="/docs/user-guide/rule-engine-2-0/re-getting-started/#typical-use-cases">Analyze incoming smart meter data to derive actionable insights</a></td>
    </tr>    
    <tr>
        <td><i class="fa fa-database" style="font-size: 48px; color: #008b8b;" aria-hidden="true"></i></td>
        <td style="font-size: 20px;">Store data for <a href="/docs/user-guide/reporting/">reporting</a> and historical analysis</td>
    </tr>    
    <tr>
        <td><i class="fa fa-money" style="font-size: 48px; color: #008b8b;" aria-hidden="true"></i></td>
        <td style="font-size: 20px;">Feed processed smart metering data into <a href="/docs/user-guide/rule-engine-2-0/external-nodes/">third-party applications</a> for accounting and billing</td>
    </tr>    
</tbody>
</table>


## Building end-to-end smart metering solutions with ThingsBoard

ThingsBoard IoT platform provides out-of-the-box components and APIs to dramatically drive down effort required to create smart metering solutions, resulting in highly improved time to market, reliability, and competitiveness of your solutions. By our estimates, companies may save up to 90% of their product development time when utilizing the following features and benefits of ThingsBoard:

- Reliable and fault tolerant data collection for your smart water meters, energy monitors, smart energy meters, etc.;
- Advanced, customizable [data visualization](/docs/user-guide/visualization/) for real-time and historical smart metering monitoring;
- [Alarm widgets](/docs/user-guide/ui/widget-library/#alarm-widgets) to instantly notify users and / or operators about any critical events or unusual consumption levels;
- Device management to allow you organize your endpoints in [groups](/docs/user-guide/groups/) by specific attributes, simplify navigation between different types of [entities](/docs/user-guide/entities-and-relations/) and endpoint groups, and enable more flexible data analysis based on your custom groups;
- Customizable [end-user dashboards](/docs/user-guide/ui/dashboards/) (featuring drill-down capabilities) to analyze and share the results of smart metering monitoring;
- Smart metering management by utilizing [ThingsBoard API](/docs/api/) to control and manage smart meters.

The ThingsBoard IoT platform provides production ready server infrastructure to connect your smart meter devices, collect, store and analyze smart metering data, and share results of the analysis with your customers and end-users.

## Smart metering dashboard

The following interactive dashboard hosted on live demo server represents smart metering IoT data visualization that may be embedded in your IoT project or solution. See the dashboard description below.

<iframe class="demoDashboardFrame" src="https://demo.ThingsBoard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909" frameborder="0" width="100%"></iframe>
<div class="center" style="margin-bottom: 20px;">
    <a target="_blank" href="https://demo.ThingsBoard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909" class="button">Live demo</a>
</div>

The attached dashboard demonstrates real-time data from smart-meters that is collected using [ThingsBoard MQTT API](/docs/reference/mqtt-api/). The data is stored in Cassandra DB on our demo server.

We would like to highlight the following features:

 - low-latency updates using web-sockets;
 - ability to zoom-in into the charts by selecting time range with the mouse;
 - advanced tooltips and legend;
 - dashboard toolbar in the top-right corner enables global time selector and switch between dashboards.

## Smart metering solution overview
 
The diagram below identifies data flow and integration points for typical smart metering solution that uses ThingsBoard platform to collect and analyze monitoring data from smart meters.

<br/>

![Smart metering solution diagram](/images/iot-use-cases/smart-energy-monitoring.svg)

You may notice that there are plenty of connectivity options for smart meters: both via direct connection to the cloud and via [Platform Integrations](/docs/user-guide/integrations/). 
The ThingsBoard platform supports industry standard encryption algorithms [(SSL)](/docs/user-guide/mqtt-over-ssl/) and [device credentials](/docs/user-guide/device-credentials/) types (X.509 certificates and access tokens).
The collected data is stored in Cassandra - a popular NoSQL database, which is widely recognized for its fault-tolerance and reliability. 

ThingsBoard Rule Engine enables forwarding incoming data to various analytics systems, such as Apache Spark or Hadoop using Kafka or other Message buses.

## Learn more

<a style="margin-right: 10px;" href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/industries/smart-buildings/" class="button">Customers feedback</a>
<a style="margin: 10px;" href="/docs/#platform-features" class="button">Platform features</a>
<a style="margin: 10px;" href="/docs/reference/" class="button">Architecture</a>
<a style="margin: 10px;" href="/docs/contact-us/" class="button">Contact us</a>
