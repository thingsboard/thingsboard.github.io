---
layout: docwithnav
title: EXXN IoT Gateway
description: EXXN IoT Gateway Integration guide

---

* TOC
{:toc}

## Introduction

The EXXN IoT Gateway is a versatile device with an ARM processor that can be adapted to a variety of use cases, including monitoring environmental sensors, energy consumption, radon gas levels, marine environments, and edge computing.

This guide outlines the process for integrating an EXXN IoT Gateway with the ThingsBoard platform to enable remote monitoring and management of devices.

<br>
An example of a dashboard developed with ThingsBoard that displays metrics captured by an EXXN IoT Gateway.

![image](/images/samples/exxn/ennx-dashboard.png)

## Prerequisites

In this tutorial, we will configure an EXXN IoT Gateway to integrate it with ThingsBoard via the MQTT API. In order to do this we will use:

 - EXXN IoT Gateway 'Cell 1024';
 - We must have connection to the device and the Device have to be connected to the Internet via Ethernet, Modem or Wifi.

## Technical characteristics
The technical specifications of the EXXN IoT Gateway 'Cell 1024' used in this guide are:
* ARM Cortex-A53 Quad-Core 64-bit Processor
* GPU Mali 470
* 2GB DDR4
* 8GB eMMC
* 10/100 Mbit/s Ethernet
* Wi-Fi 802.11 b/g/n/AC
* Bluetooth 4.2
* PoE
* Possibility of hardware development for custom functionalities

<p align="center">
   <img src="/images/samples/exxn/cell_1024.jpg" alt="cell 1024">
</p>

## Provisioning the device for Thingsboard

Contains instructions that are necessary to connect your device to ThingsBoard.

### Create device

Open your platform instance or ThingsBoard [cloud](https://thingsboard.cloud/) in browser and login as tenant administrator.

Go to "**Device groups**" tab -> "**All**" and click "plus" button to add a new device.

Enter device name, select existing or create a new [device profile](https://thingsboard.io/docs/user-guide/device-profiles/) and click on "Add" button.

![image](/images/samples/exxn/exxn-create-device-cell-1.png)

Your device has been created. Open its details and copy auto-generated **access token** by clicking on the "Copy access token" button.

![image](/images/samples/exxn/exxn-create-device-cell-2.png)

### Device configuration

Open a Browser to the administration web of Cell 1024 using this URL: https://[IP_DEVICE] and go to the 'Cloud' tab:
<br>
<br>
  <img src="/images/samples/exxn/conn1.png" alt="conn1">

Activate the Cloud control and configure all the parameters to connect the device to the specific ThingsBoard platform via MQTT:

<img src="/images/samples/exxn/conn2.png" alt="conn2">

Configuration parameters:
- **Cloud Platform**: Select ThingsBoard.
- **MQTT broker URL**: URL to de Broker of the server we want to integrate to.
- **MQTT broker port**: Number of the port used by the server.
- **TLS**: Select true if the server use the Transport Layer Security protocol.
- **Connection Type**: Select 'Access Token' option. We will use an Access token previously created in ThingsBoard.
- **Access Token**: Indicate the Access token previously copyed in ThingsBoard.

{% capture domain_owner_note %}
**Note**

Currently, the IoT EXXN Gateways use the 'Access Token' integration method. We are working on a Pre-Provisioning integration method that will eliminate the need to copy this Access token on the device.

{% endcapture %}
{% include templates/info-banner.md content=domain_owner_note %}

Click "Save configuration" button.

<img src="/images/samples/exxn/conn3.png" alt="conn3">

<br>
To verify that the device is connected correctly to ThingsBoard, go to the **Device groups** menu -> **All** devices, select your device. In the **device details** select **client attributes** tab and check if the client attributes have been communicated to the device.

If you did everything is correct, we will see client attributes like the *serial_number*, *last_rebbot*, *device_model*, etc.

![image](/images/samples/exxn/exxn-client-attributes-device-1.png)

## ThingsBoard configuration

The EXXN IoT Gateway will connect to ThingsBoard using the MQTT API. <br>
We have previously covered how to configure the device to connect to ThingsBoard. Now, we will show the steps to configure the device in ThingsBoard in order to monitor data and manage the device.

In order to configurate the datalogger options of the EXXN IoT Gateway, we must to create a new JSON 'Shared' Attribute for the Device with de key 'config'.

 - Go to devices **attributes** tab in the device details. Add a new "**Shared**" attribute with the key "config" of type **JSON**.

![image](/images/samples/exxn/exxn-shared-attributes-device-1.png)

 - Expand the content of the attribute to full screen for ease of writing it. Paste the contents of the device configuration file into the attribute value.

![image](/images/samples/exxn/ennx-config-json.png)

An example of this JSON file can be downloaded from this [link](/docs/samples/exxn/resources/config.json).

All the information to configure the device correctly through this JSON File can be found in the EXXN IoT Gateway Manual.

 - Click "Add" attribute.

![image](/images/samples/exxn/exxn-shared-attributes-device-2.png)

### Data Visualization

Create a [dashboard](https://thingsboard.io/docs/pe/user-guide/dashboards/) to visualize telemetry values in widgets.

 - Go to the **Dashboard groups** tab -> **All**. Creat new dashboard by clicking the "plus" button in the upper right corner of the dashboards page. Enter dashboard name and click on "Add" button.

![image](/images/samples/exxn/exxn-create-dashboard-1.png)

 - Create **Radial gauge** widget from the **Analohue gauges** bundle. Read more about widgets and their creation in [this guide](https://thingsboard.io/docs/pe/user-guide/dashboards/#widgets).

All the measures that are 'enabled' in the device's JSON configuration file will be found as metrics with the name specified in the same file.

![image](/images/samples/exxn/exxn-create-dashboard-2.png)

<br>
![image](/images/samples/exxn/exxn-create-dashboard-3.png)

### RPC commands

It is possible to send commands to the device to execute certain tasks. The parameters of the method must be in JSON format.

![image](/images/samples/exxn/exxn-rpc-button.png)

All the commands that can be sent to the device are explained in the EXXN IoT Gateway manual.

## Additional information

### Troubleshooting
 - The most common problem in the integration process is not having a connection with the MQTT Broker. Make sure the device is connected to the internet and is able to communicate with the ThingsBoard Broker.
 - Another common problem is not setting the correct Access Token. Check that the provided Access token is configured in ThingsBoard for the device.

<br>

### Feedback & Contact Us for your integration

For more information, visit our website at [EXXN Engineering](http://exxn.es/en/).
<br>
If you have any problems or doubts, please do not hesitate in contact us at: [troubleshooting@exxn.es](mailto://troubleshooting@exxn.es)

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
