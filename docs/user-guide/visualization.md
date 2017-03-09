---
layout: docwithnav
assignees:
- ashvayka
title: Data Visualization

---

* TOC
{:toc}

Thingsboard allows you to configure customizable dashboards. 
Each Dashboard may contain multiple widgets that visuzalize data from multiple devices.
Once Dashboard is created, you may assign it to one of your customers
 
Dashboards are light-weight and you may have millions of dashboards. 
For example, you may automatically create dashboard for each new customer based on data from registered customer devices. 
Or you may modify dashboard via script when new device is assigned to customer. All this actions may be done manually or automated via REST API.

You can find useful links to get started below:

 - [Getting started guide](/docs/getting-started-guides/helloworld/) - will cover basic steps to create a dashboard.
 - [Dashboards](/docs/user-guide/ui/dashboards/) - contains tutorials about basic dashboard operations.
 - [Samples](/docs/samples/) - contains several examples that include both client-side applications and corresponding data visualization.
 - [Widget Library](/docs/user-guide/ui/widget-library/) - contains overview of widget bundles:
   - **Digital** and **analog** gauges for latest real-time values visualization 
   - Highly customizable Bar and Line **charts** for visualization of historical and sliding-window data points  
   - **Map widgets** for tracking movement and latest positions of IoT devices on Google or OpenStreet maps.
   - **GPIO** control widgets that allow to send GPIO toggle commands to devices.
   - **Card** widgets to enhance your dashboards with flexible HTML labels based on static content or latest telemetry values from devices. 