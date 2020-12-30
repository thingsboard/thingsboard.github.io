---
layout: docwithnav
title: Getting started with ThingsBoard Edge
description: Getting started with ThingsBoard Edge

---

* TOC
{:toc}

## Introduction

The goal of this tutorial is to demonstrate the basic usage of the most popular ThingsBoard Edge features. You will learn how to:

- Connect devices to ThingsBoard Edge;
- Provision devices from ThingsBoard Edge to ThingsBoard CE/PE server (cloud); 
- Push data from devices to ThingsBoard Edge and propagate this data to ThingsBoard CE/PE server (cloud);
- Build real-time end-user dashboards on cloud and provision them to edge;

We will connect and visualize data from the temperature sensor to keep it simple.

{% include templates/edge/prerequisites.md %}

## Step 1. Provision Device

For simplicity, we will provision device manually using the UI.

{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %}

You may also use:
* [Bulk provisioning](/docs/user-guide/bulk-provisioning/) to provision multiple devices from a CSV file using UI;
* [Device provisioning](/docs/user-guide/device-provisioning/) to allow device firmware to automatically provision the device, so you don't need to configure each device manually;
* [REST API](/docs/api/) to provision devices and other entities programmatically;

## Step 2. Provision Device from ThingsBoard Edge to ThingsBoard CE/PE server (cloud)

## Step 3. Connect device

To connect the device you need to get the device credentials first.
ThingsBoard support different device credentials. We recommend to use default auto-generated credentials which is access token for this guide.

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}

Now you are ready to publish telemetry data on behalf of your device.
We will use simple commands to publish data over HTTP or MQTT in this example.

{% capture connectdevicetogglespec %}
HTTP<small>Linux, macOS or Windows</small>%,%http%,%templates/helloworld/http.md%br%
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/helloworld/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/helloworld/mqtt-windows.md%br%
CoAP<small>Linux or macOS</small>%,%coap%,%templates/helloworld/coap.md%br%
Other Protocols<small>Modbus, SNMP, LoRaWAN, etc</small>%,%other%,%templates/helloworld/other.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

Once you have successfully published the "temperature" readings, you should immediately see them in the Device Telemetry Tab:

{% include images-gallery.html imageCollection="step3" showListImageTitles="true" %}

## Step 4. Push data from ThingsBoard Edge to ThingsBoard CE/PE server (cloud)

## Step 5. Create Dashboard

We will create a dashboard and add most popular widgets. See instructions below.

### Step 5.1 Create Empty Dashboard

{% include images-gallery.html imageCollection="step31" showListImageTitles="true" %}

### Step 5.2 Add Entity Alias

Alias is a reference to single entity or group of entities that is used in the widgets.
Alias may be static or dynamic. For simplicity, we will use "Single entity" alias reference one and only one entity ("My New Device" in our case).
It is possible to configure an alias that reference multiple devices. For example, devices of a certain type or related to a certan asset.
You may learn more about different aliases [here](/docs/user-guide/ui/aliases/).

{% include images-gallery.html imageCollection="step32" showListImageTitles="true" %}

### Step 5.3 Add Table Widget

To add the table widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

{% include images-gallery.html imageCollection="step33" showListImageTitles="true" %}

Congratulations! You have added first widget. Now you can send new telemetry reading and it will immediately appear in the table.

### Step 5.4 Add Chart Widget

To add the chart widget we need to select it from the widget library.
Chart widget displays multiple historical values of the same data key ("temperature" in our case).
We should also configure the time window to use the chart widget.

{% include images-gallery.html imageCollection="step34" showListImageTitles="true" %}

Congratulations! You have added chart widget. Now you can send new telemetry reading and it will immediately appear in the chart.

## Step 6. Provision Dashboard to ThingsBoard Edge

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/guides-banner.md %}

## Your feedback

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.

