---
layout: docwithnav-gw
title: Getting started with ThingsBoard IoT Gateway
description: Write your first IoT project using ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide covers initial IoT Gateway installation and configuration.
We will connect IoT Gateway to ThingsBoard server, control it and visualize some basic gateway statistics: the amount of devices connected and messages processed.
We will also configure MQTT connector in order to subscribe to device data feed from external devices.  


### Prerequisites

If you don't have access to a running ThingsBoard instance, use either [**Live Demo**](https://thingsboard.cloud/signup) or
[**Installation Guide**](/docs/user-guide/install/installation-options/) 
to fix this. 


## Create new gateway device on ThingsBoard

First, we have to add Gateway device to your ThingsBoard instance. This can be done by following these steps:

{% assign createNewGatewayDevice = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-1-ce.png,
        title: Open **Dashboards** tab and go to **Gateway** dashboard.
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-2-ce.png,
        title: Click the **"+"** button, fill in the gateway device name and select the device profile.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createNewGatewayDevice %} 

{% capture info %}
<div>
  <p>
    <b style="color:red">WARNING:</b>
    <span style="color:black">If you've previously configured the gateway, create a backup, as the new remote configuration will overwrite existing settings files.  
    <br>For those who used a gateway version earlier than 3.4, the gateway will automatically generate a new configuration file in JSON format.</span>
  </p>
</div>
{% endcapture %}
{% include templates/warn-banner.md content=info %}

{% capture gatewaycreatingspec %}
Docker<small>Recommended</small>%,%docker%,%templates/iot-gateway/remote-creating-gateway-docker.md%br%
Manually<small>Recommended if you installed Gateway any other way except docker</small>%,%manually%,%templates/iot-gateway/remote-creating-gateway-manually.md{% endcapture %}

{% include content-toggle.html content-toggle-id="GatewayCreating" toggle-spec=gatewaycreatingspec %}

## Add new connector

Let's finally add MQTT connector to the created gateway. To do this we use following steps:

{% assign addNewConnector = '
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click **"Connectors configuration"** button on the right panel.
    ===
        image: https://img.thingsboard.io/gateway/dashboard/gateway-getting-started-8-ce.png,
        title: Paste your connector configuration into **"Configuration"** field and click on "Save" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

After all the above steps, Gateway will receive the configuration, apply it and synchronize the state with the remote.

For now, your Gateway is ready to process data through the newly remote-created and configured MQTT connector.

More about Gateway Dashboard you can [read here](/docs/iot-gateway/guides/how-to-enable-remote-configuration/).
 
## Configure connectors

After successful installation you should configure the connectors to connect to different devices, please use one (or more) following articles to configure connector files:  
 - [**MQTT** connector](/docs/iot-gateway/config/mqtt/)
 - [**OPC-UA** connector](/docs/iot-gateway/config/opc-ua/)
 - [**Modbus** connector](/docs/iot-gateway/config/modbus/)
 - [**BLE** connector](/docs/iot-gateway/config/ble/)
 - [**Request** connector](/docs/iot-gateway/config/request/)
 - [**CAN** connector](/docs/iot-gateway/config/can/)
 - [**FTP** connector](/docs/iot-gateway/config/ftp/)
 - [**Socket** connector](/docs/iot-gateway/config/socket/)
 - [**XMPP** connector](/docs/iot-gateway/config/xmpp/)
 - [**OCPP** connector](/docs/iot-gateway/config/ocpp/)
 - [**Custom** connector](/docs/iot-gateway/custom/)

## Review gateway statistics

To review the statistics uploaded from your gateway, navigate to the **Devices** page and click on the gateway device card. 
Once there, open the “Latest Telemetry” tab to review parameters such as **“eventsProduced”**, **“eventsSent”**, and other 
specifics about each connector.
Note that all values should initially be set to “0”.

{:refdef: style="text-align: center;"}
![image](https://img.thingsboard.io/gateway/review-gateway-statistics.png)
{: refdef}
