---
layout: docwithnav-gw
title: Getting started with ThingsBoard IoT Gateway
description: Write your first IoT project using ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide covers initial IoT Gateway installation and configuration, we will do the following things:
- Create a new gateway device using [ThingsBoard IoT Gateways dashboard](#prerequisites);
- Launch the gateway using Docker command;
- Configure different connector types ([MQTT](/docs/iot-gateway/config/mqtt/), [OPC-UA](/docs/iot-gateway/config/opc-ua/), [Modbus](/docs/iot-gateway/config/modbus/)) in order to connect to a local demo servers and read data from them;
- Check received device data on ThingsBoard.

## Prerequisites

If you don't have access to a running ThingsBoard instance, you can use [**Live Demo**](https://demo.thingsboard.io) or [**ThingsBoard Cloud**](https://thingsboard.cloud) to connect your gateway. 

If you don't have a dashboard installed, you can download Gateway widget bundle [here](/docs/iot-gateway/resources/thingsboard-gateway-widget-bundle.json){:target="_blank" download="thingsboard-gateway-widget-bundle.json"} and ThingsBoard IoT Gateways dashboard [here](/docs/iot-gateway/resources/thingsboard-gateways-dashboard.json){:target="_blank" download="thingsboard-gateways-dashboard.json"}.

## Create new gateway device on ThingsBoard

First, we have to add a gateway device to your ThingsBoard instance. You can do this using following steps:

{% assign createNewGatewayDevice = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-1-ce.png,
        title: Go to "**Dashboards**" tab and open "**ThingsBoard IoT Gateways**" dashboard.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-2-ce.png,
        title: Click the "**+**" button, fill in the gateway device name, and select the device profile.
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
        title: Copy auto-generated command and execute it in your terminal.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=remoteCreateGatewayDocker %}

After running gateway docker image, you can see the following logs in your terminal:

![](/images/gateway/dashboard/launch-gateway-docker.png)

## Add new connector

To see how the connector works, you can choose one of the following connectors:

{% capture connectorscreationspec %}
MQTT<small></small>%,%mqtt%,%templates/iot-gateway/remote-creating-connector-mqtt.md%br%
Modbus<small></small>%,%modbus%,%templates/iot-gateway/remote-creating-connector-modbus.md%br%
OPC-UA<small></small>%,%opcua%,%templates/iot-gateway/remote-creating-connector-opcua.md{% endcapture %}

{% include content-toggle.html content-toggle-id="connectorsCreation" toggle-spec=connectorscreationspec %}

## Check device data

To review the data uploaded from your gateway, use the following steps:

{% assign checkDeviceData = '
    ===
        image: /images/gateway/dashboard/review-gateway-statistics-1-ce.png,
        title: Navigate to the **Devices** page and click on the created device. Open the "**Attributes**" tab, and you will be able to see that attributes configured in the connector.
    ===
        image: /images/gateway/dashboard/review-gateway-statistics-2-ce.png,
        title: Go to the "**Latest Telemetry**" tab to see parameters from device like "**humidity**", "**temperature**".
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

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
