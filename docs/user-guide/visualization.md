---
layout: docwithnav
assignees:
- ashvayka
title: Data Visualization
description: IoT data visualization for various IoT projects using iot dashboards, dashboard widgets and real-time charts 

---

* TOC
{:toc}

ThingsBoard allows you to configure customizable IoT dashboards.
Each IoT Dashboard can contain multiple dashboard widgets that visualize data from multiple IoT devices.
Once IoT Dashboard is created, you can assign it to one of the customers of your IoT project.
 
IoT Dashboards are light-weight, and you can have millions of dashboards. 
For example, you can automatically create a dashboard for each new customer based on data from registered customer IoT devices. 
Or you may modify the dashboard via script when a new device is assigned to a customer. All these actions may be done manually or automated via REST API.

You can find useful links to get started below:

 - [Getting started guide](/docs/getting-started-guides/helloworld/) - covers basic steps to create a dashboard.
 - [IoT Dashboards](/docs/user-guide/ui/dashboards/) - contains tutorials about basic IoT dashboard operations.
 - [Samples](/docs/samples/) - contains several examples that include both client-side applications and corresponding data visualization.
 - [Widget Library](/docs/user-guide/ui/widget-library/) - contains an overview of dashboard widget bundles:
   - **Digital** and **analog** gauges for the latest real-time values visualization; 
   - Highly customizable Bar and Line **charts** for visualization of historical and sliding-window data points;  
   - **Map widgets** for tracking movement and the latest positions of IoT devices on Google or OpenStreet maps;
   - **GPIO** control widgets that allow sending GPIO toggle commands to devices;
   - **Card** widgets to enhance your dashboards with flexible HTML labels based on static content or latest telemetry values from IoT devices. 