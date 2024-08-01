---
layout: docwithnav-gw
title: Getting started with ThingsBoard IoT Gateway
description: Configure MQTT, OPC-UA, and Modbus connectors to establish connections with their respective demo servers in the Docker container and retrieve data.

---

* TOC
{:toc}

The ThingsBoard IoT Gateway is an open-source solution, designed to serve as a bridge between IoT devices connected to 
legacy and third-party systems with ThingsBoard.

This guide covers initial IoT Gateway installation and configuration, we will do the following things:
- Create a new gateway device using [ThingsBoard IoT Gateways dashboard](#prerequisites);
- Launch the gateway using Docker command;
- Configure different connector types ([MQTT](/docs/iot-gateway/config/mqtt/), [OPC-UA](/docs/iot-gateway/config/opc-ua/), [Modbus](/docs/iot-gateway/config/modbus/)) in order to connect to a local demo servers and read data from them;
- Check received device data on ThingsBoard.

## Prerequisites

- Before initiating the Gateway setup, ensure that the ThingsBoard server is up and running. The simplest approach is to utilize the [Live Demo](https://demo.thingsboard.io) or [ThingsBoard Cloud](https://thingsboard.cloud). Alternatively, you can install ThingsBoard manually by following the steps outlined in the [Installation Guide](/docs/user-guide/install/installation-options/).
- Before moving forward, ensure Docker is installed and properly configured on your machine. If you haven't installed Docker yet, you can download it from the [official Docker website](https://docs.docker.com/engine/install/) and follow their installation guide for your specific operating system. 
- If you don't have a dashboard installed, you can download Gateway widget bundle [JSON file here](/docs/iot-gateway/resources/thingsboard-gateway-widget-bundle.json){:target="_blank" download="thingsboard-gateway-widget-bundle.json"} and ThingsBoard IoT Gateways dashboard [JSON file here](/docs/iot-gateway/resources/thingsboard-iot-gateways.json){:target="_blank" download="thingsboard-iot-gateways.json"}. Use this [guide](#optional-import-gateway-widgets-bundle-and-dashboard) to import gateway widgets bundle and dashboard.

## Step 1. Create new gateway device on ThingsBoard

First, add a gateway device to your ThingsBoard instance by following these steps:

{% assign createNewGatewayDevice = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-1-ce.png,
        title: Go to "**Dashboards**" tab and open "**ThingsBoard IoT Gateways**" dashboard.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-2-ce.png,
        title: Click the "**+**" button, enter the gateway device name (e.g., "My Gateway"), and select the device profile.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createNewGatewayDevice %} 

{% capture info %}
<div>
  <p>
    <span style="color:black">If you've previously configured the gateway, create a backup, as the new remote configuration will overwrite existing settings files.  
    <br>For those who used a gateway version earlier than 3.4, the gateway will automatically generate a new configuration file in JSON format.</span>
  </p>
</div>
{% endcapture %}
{% include templates/info-banner.md content=info %}

To launch the gateway, use the following steps:

{% assign remoteCreateGatewayDocker = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-3-ce.png,
        title: On the gateway dashboard, click on **"Launch command"** button in the top right corner.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-4-ce.png,
        title: Click to download docker-compose.yml file to your PC, copy command and execute it in your terminal.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=remoteCreateGatewayDocker %}

After running gateway docker image, you can see the following logs in your terminal:

![](/images/gateway/dashboard/launch-gateway-docker.png)

## Step 2. Enable remote logging

To view gateway and connector logs on the dashboard, you need to enable remote logging. For this purpose, 
use the following steps:

{% assign enableRemoteLogging = '
    ===
        image: /images/gateway/dashboard/general-configuration-1-ce.png,
        title: On the gateway dashboard, click on **"General configuration"** button on the right panel.
    ===
        image: /images/gateway/dashboard/general-configuration-2-ce.png,
        title: Navigate to the "**Logs**" tab. Enable the "**Remote logs**" toggle. Select "**DEBUG**" in the "**Log level**" drop-down menu.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=enableRemoteLogging %}

## Step 3. Add new connector

By choosing the type of connector, you determine the specific method of connection you will use to ensure the 
interaction of your gateway with other systems or devices.

To see how the connector works, you can choose one of the following connectors:

{% capture connectorscreationspec %}
MQTT<small></small>%,%mqtt%,%templates/iot-gateway/remote-creating-connector-mqtt.md%br%
Modbus<small></small>%,%modbus%,%templates/iot-gateway/remote-creating-connector-modbus.md%br%
OPC-UA<small></small>%,%opcua%,%templates/iot-gateway/remote-creating-connector-opcua.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="connectorsCreation" toggle-spec=connectorscreationspec %}

## Step 4. Check device data

To review the data uploaded from your gateway, use the following steps:

{% assign checkDeviceData = '
    ===
        image: /images/gateway/dashboard/review-gateway-statistics-1-ce.png,
        title: Navigate to the **Devices** page and click on the created device. This will open the device details page. From there, switch to the **"Attributes"** tab to view the attributes that were configured in the connector.
    ===
        image: /images/gateway/dashboard/review-gateway-statistics-2-ce.png,
        title: To view real-time telemetry data from the device, navigate to the "**Latest Telemetry**" tab. Here, you will find the telemetry data being sent by the device, including metrics like "**humidity**" and "**temperature**". This tab provides real-time device telemetry updates.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=checkDeviceData %}

## Configure other connectors

After the successful installation and configuration of your first connector, you can configure other connectors to 
connect to different devices. You can find more information about connectors in the following articles:  
 - [**MQTT** connector](/docs/iot-gateway/config/mqtt/)
 - [**OPC-UA** connector](/docs/iot-gateway/config/opc-ua/)
 - [**Modbus** connector](/docs/iot-gateway/config/modbus/)
 - [**BLE** connector](/docs/iot-gateway/config/ble/)
 - [**Request** connector](/docs/iot-gateway/config/request/)
 - [**REST** connector](/docs/iot-gateway/config/rest/)
 - [**CAN** connector](/docs/iot-gateway/config/can/)
 - [**FTP** connector](/docs/iot-gateway/config/ftp/)
 - [**Socket** connector](/docs/iot-gateway/config/socket/)
 - [**XMPP** connector](/docs/iot-gateway/config/xmpp/)
 - [**BACnet** connector](/docs/iot-gateway/config/bacnet/)
 - [**OCPP** connector](/docs/iot-gateway/config/ocpp/)
 - [**ODBC** connector](/docs/iot-gateway/config/odbc/)
 - [**SNMP** connector](/docs/iot-gateway/config/snmp/)
 - [**Custom** connector](/docs/iot-gateway/custom/)

More about *ThingsBoard IoT Gateways* Dashboard, you can [read here](/docs/iot-gateway/guides/how-to-enable-remote-configuration/).

## (Optional) Import gateway widgets bundle and dashboard

First, we have to import gateway widgets bundle, for this purpose, use the following steps:

{% assign importWidgetsBundle = '
    ===
        image: /images/gateway/dashboard/wl-import-bundle-gateway-1-ce.png,
        title: Go to the "**Widgets Library**" page, and click the "**+**" button in the upper right corner of the "**Widgets Bundles**" page. Select "**Import widgets bundle**" from the drop-down menu.
    ===
        image: /images/gateway/dashboard/wl-import-bundle-gateway-2-ce.png,
        title: You will be prompted to upload the downloaded gateway widgets bundle JSON file in the pop-up. Drag and drop a file from your computer, then click "**Import**" to add a widget bundle to the library.
    ===
        image: /images/gateway/dashboard/wl-import-bundle-gateway-3-ce.png,
        title: The widgets bundle is imported.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=importWidgetsBundle %} 

To import ThingsBoard IoT Gateways dashboard, follow these steps:

{% assign importGatewayDashboard = '
    ===
        image: /images/gateway/dashboard/import-dashboard-gateway-1-ce.png,
        title: Go to the "**Dashboards**" page and click on the "**+**" button in the upper right corner of the page and select "**Import dashboard**" from the drop-down menu;
    ===
        image: /images/gateway/dashboard/import-dashboard-gateway-2-ce.png,
        title: In the import dashboard window, upload the downloaded gateway dashboard JSON file and click "**Import**".
    ===
        image: /images/gateway/dashboard/import-dashboard-gateway-3-ce.png,
        title: Dashboard imported. Click on the row with the dashboard name to open it.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=importGatewayDashboard %} 

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
