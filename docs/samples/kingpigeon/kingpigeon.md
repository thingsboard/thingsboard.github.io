---
layout: docwithnav
title: 4G LTE Industrial Router and ThingsBoard
description: 4G LTE Industrial Router with ThingsBoard PE Platform
hidetoc: "true"
---

* TOC
{:toc}

## Introduction

This article contains instructions on how to configure ThingsBoard PE platform and connect KERNEL devices. ThingsBoard PE platform is an open-source IoT platform for data collection, processing, visualization, and device management. It enables device connectivity via industry standard MQTT protocol. ThingsBoard combines scalability, fault-tolerance and performance so you will never lose your data.

## Integration flow:

### Step 1 ThingsBoard : Device configuration

* [Step 1.1] Login to your ThingsBoard instance, Open "Device Groups" page.
<br>
<img src="/images/samples/kingpigeon/home.png" width="1000" alt="home">
<br>

* [Step 1.2] Navigate to default Device group “All”.
<br>
<img src="/images/samples/kingpigeon/device.png" width="1000" alt="device">
<br>1.Click on one of the marked in red buttons in the Device groups overview page. In this page you can also add additional device groups in order to distinguish different devices with unique data flows.
<br>2.Click marked "+" buttons to add new device to the group.
<br>

* [Step 1.3] Input device name, For example "R40". No other changes are required at this time. Click "Next:Credentials" to configure credentials.
<br>
<img src="/images/samples/kingpigeon/device_new.png" width="1000" alt="device new">
<br>

* [Step 1.4] Credentials type: MQTT Basic
<br>
<img src="/images/samples/kingpigeon/mqtt_basic.png" width="1000" alt="mqtt basic">
<br>1.Choose credentials type:MQTT Basic.
<br>2.Set Client ID, For example "R40".
<br>3.Set username which will be used in MQTT authorization.
<br>4.Set password which will be used in MQTT authorization.
<br>

### Step 2 Industrial Router configuration

* [Step 2.1] Login to Router. The default username is "admin", and no password.
<br>
<img src="/images/samples/kingpigeon/r4000.png" width="800" alt="step 1">
<br>

* [Step 2.2] Click Menu "Cloud platform", Choose "Custom cloud", Click "Add" to add a cloud configuration..
<br>
<img src="/images/samples/kingpigeon/r4001.png" width="800" alt="step 2">
<br>

* [Step 2.3] Click "Edit" to edit configuration.
<br>
<img src="/images/samples/kingpigeon/r4002.png" width="800" alt="step 3">
<br>

* [Step 2.4] Edit thingsboard configuration.
<br>
<img src="/images/samples/kingpigeon/r4003.png" width="800" alt="step 4">
<br>1.Choose ThingsBoard platform.
<br>2.Set MQTT ID, See "Step 1.4".
<br>3.Set username, See "Step 1.4".
<br>4.Set password, See "Step 1.4".
<br>5.Set publishing period.
<br>6.Click "Save" to save configuration and "Back to Overview".
<br>

* [Step 2.5] Check "Enable setting", Click "Save&Apply" to apply configuration.
<br>
<img src="/images/samples/kingpigeon/r4004.png" width="800" alt="step 5">
<br>

### Step 3 Adding widget to the dashboard
* [Step 3.1] The collected data can be displayed using various a widgets. To create one you should be able to see gathered data in the Latest telemetry section.To access it you should follow these steps:
<br>
<img src="/images/samples/kingpigeon/telemetry.png" width="1000" alt="telemetry">
<br>1.Click on the configured device.
<br>2.From the pop-up menu select Latest telemetry option. There you should see collected data.
<br>

* [Step 3.2] In order to display data in the widget you should:
<br>
<img src="/images/samples/kingpigeon/telemetry02.png" width="1000" alt="telemetry 2">
<br>1.Click on the gathered data row.
<br>2.Press Show on widget button.
<br>
<img src="/images/samples/kingpigeon/chart.png" width="1000" alt="chart 1">
<br>1.Choose bundle accordingly to your data.
<br>2.Choose suitable chart for your data visualization.
<br>3.Add widget to dashboard.
<br>
<img src="/images/samples/kingpigeon/chart02.png" width="400" alt="chart 2">
<br>1.Create new dashboard.
<br>2.With this option enabled after addition you will be redirected to newly created dashboard
<br>3.Adds widget to dashboard.
<br>
<img src="/images/samples/kingpigeon/chart03.png" width="400" alt="chart 3">
<br>

Explore guides related to main ThingsBoard features:

 - [Create Dashboard](/docs/getting-started-guides/helloworld/#step-3-create-dashboard) - how to create a new dashboard.
 - [Working with IoT dashboards](/docs/user-guide/dashboards/) - how to work with dashboards.
<br>

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
