---
layout: docwithnav
title: PLC KERNEL and ThingsBoard
description: PLC KERNEL Monitoring with ThingsBoard PE Platform
hidetoc: "true"
---

* TOC
{:toc}

## Intro/Short summary

This article contains instructions on how to configure ThingsBoard PE platform and connect KERNEL devices. ThingsBoard PE platform is an open-source IoT platform for data collection, processing, visualization, and device management. It enables device connectivity via industry standard MQTT protocol. ThingsBoard combines scalability, fault-tolerance and performance so you will never lose your data.

## Note

This procedure applies to all KERNEL PLCs with the ARM microprocessor equipped with an Ethernet port.

## Integration flow:

### Step 1 ThingsBoard : Device configuration

* [Step 1.1] Login to your ThingsBoard instance.
<br>
<img src="/images/samples/kernel/Thingsboard 000.png" width="400" alt="Thingsboard 1">
<br>
<br>

* [Step 1.2] Open "Device Groups" page.
<br>
<img src="/images/samples/kernel/Thingsboard 002.png" width="1000" alt="Thingsboard 2">
<br>
<br>

* [Step 1.3] Navigate to default Device group “ALL”.
<br>
<img src="/images/samples/kernel/Thingsboard 003.png" width="1000" alt="Thingsboard 3">
<br>
<br>

* [Step 1.4] Click on the "+" icon in the top right corner of the table and then select "Add Device".
<br>
<img src="/images/samples/kernel/Thingsboard 004.png" width="1000" alt="Thingsboard 4">
<br>
<br>

* [Step 1.4a] Input device name. For example, "PLC KERNEL Device". No other changes are required at this time. Click "Add" to add the device.
<br>
<br>

* [Step 1.5] Now your device should be listed first, since the table sorts devices using the time of the creation by default.
<br>
<img src="/images/samples/kernel/Thingsboard 005.png" width="1000" alt="Thingsboard ">
<br>
<br>


### Step 2 LogiPaint configuration

To connect the PLC KERNEL device you need to get the device credentials first. ThingsBoard supports various device credentials. We recommend using the default auto-generated credentials which is an access token for this guide.

* [Step 2.1] Click on the device row in the table to open device details.
<br>
<img src="/images/samples/kernel/Thingsboard 006.png" width="1000" alt="Thingsboard 6">
<br>
<br>

* [Step 2.2] Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.
<br>
<img src="/images/samples/kernel/Thingsboard 007.png" width="1000" alt="Thingsboard 7">
<br>
<br>

* [Step 2.3] Open "LogicPaint".
<br>
<img src="/images/samples/kernel/LogicPaint 000.jpg" width="1000" alt="LogicPaint 0">
<br>
<br>

* [Step 2.4] Connect PLC KERNEL to PC (via Serial).
<br>
<br>

* [Step 2.5] Open menu “File” >> “Show Ethernet Port Configuration”.
<br>
<img src="/images/samples/kernel/LogicPaint 001.png" width="1000" alt="LogicPaint 1">
<br>
<br>

* [Step 2.6] Press the button “MQTT Configuration” :
<br>
<img src="/images/samples/kernel/LogicPaint 002.png" width="1000" alt="LogicPaint 2">
<br>
<br>

* [Step 2.7] Paste the copied access token into the indicated box :
<br>
<img src="/images/samples/kernel/LogicPaint 003.png" width="1000" alt="LogicPaint 3">
<br>
<br>

* [Step 2.8] Enter the following fields :
<br>
<img src="/images/samples/kernel/Table 000.png" width="1000" alt="Table 0">
<br>
<br>

* [Step 2.9] Add a slot for each value that needs to be monitored :
<br>
<img src="/images/samples/kernel/Table 001.png" width="1000" alt="Table 1">
<br>
<br>

* [Step 2.10] Close the 2 open windows with the CLOSE button.
<br>
<br>

* [Step 2.11] Finally compile and send the application to the KERNEL PLC with the "Compile + Send Application" button.
<br>
<br>

* [Step 2.12] Once you have successfully published the “temperature” readings, you should immediately see them in the Device Telemetry Tab.
Click on the device row in the table to open device details :
<br>
<img src="/images/samples/kernel/Thingsboard 006.png" width="1000" alt="Thingsboard 6">
<br>
<br>

* [Step 2.13] Navigate to the “Latest telemetry” tab :
<br>
<img src="/images/samples/kernel/Thingsboard 008.png" width="1000" alt="Thingsboard 8">
<br>
<br>

### Step 3 Create dashboard

Finally, the only thing left to do, is create a Dashboard according to your needs.
Dashboards are used to collect and display the data set. Data visualization is achieved through a large variety of widgets.
Explore guides related to main ThingsBoard features:

 - [Create Dashboard](/docs/getting-started-guides/helloworld/#step-3-create-dashboard) - how to create a new dashboard.
 - [Working with IoT dashboards](/docs/user-guide/dashboards/) - how to work with dashboards.
<br>
<br>

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
