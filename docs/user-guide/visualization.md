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
Each IoT Dashboard may contain multiple dashboard widgets that visualize data from multiple IoT devices.
Once IoT Dashboard is created, you may assign it to one of the customers in your IoT project.

IoT Dashboards are lightweight and you may have millions of dashboards.
For example, you may automatically create a dashboard for each new customer based on data from the registered customer´s IoT devices,
or you may modify a dashboard by using a script when a new device is assigned to a customer. All these actions may be done manually or automated via REST APIs.

You can find the following ThingsBoard links to get started and use the dashboards:

 - [Getting started guide](/docs/getting-started-guides/helloworld/) - covers the basic steps to create a dashboard.
 - [IoT Dashboards](/docs/user-guide/ui/dashboards/) - explains tutorials about basic IoT dashboard operations.
 - [Samples](/docs/samples/) - shows several examples that include both client-side applications and corresponding data visualization.
 - [Widget Library](/docs/user-guide/ui/widget-library/) - introduces an overview of dashboard widget bundles:
   - **Digital** and **an                                                                                                                                                       alog** gauges to visualize the latest real-time values.
   - Highly customizable Bar and Line **charts** to visualize the historical and sliding-window data points
   - **Map widgets** for tracking the movement and latest positions of IoT devices on Google or OpenStreet maps.
   - **GPIO** control widgets that allow sending GPIO toggle commands to devices.
   - **Card** widgets to enhance your dashboards with flexible HTML labels based on static content or latest telemetry values from IoT devices.