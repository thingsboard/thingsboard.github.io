---
layout: docwithnav-gw
title: Getting started with ThingsBoard IoT Gateway
description: Write your first IoT project using ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide covers initial IoT Gateway installation and configuration.
We will connect IoT Gateway to ThingsBoard server and visualize some basic gateway statistics: the amount of devices connected and messages processed.
We will also configure MQTT and OPC-UA extension in order to subscribe to device data feed from external devices or applications.  


### Prerequisites

If you don't have access to a running ThingsBoard instance, use either [**Live Demo**](https://thingsboard.cloud/signup) or
[**Installation Guide**](/docs/user-guide/install/installation-options/) 
to fix this. 


## Create new gateway device on ThingsBoard

Firstly, we have to add Gateway device on your ThingsBoard instance. To do this we use following steps:
- Open **Dashboards** tab and go to **Gateway** dashboard;
  <br><br>
  ![](/images/gateway/dashboard/gateway-getting-started-1-ce.png)
- Click **"+"** button, fill in gateway device name and select device profile in the opened modal window;
  <br><br>
  ![](/images/gateway/dashboard/gateway-getting-started-2-ce.png)

{% capture info %}
<body>
  <p>
    <b style="color:red">WARNING:</b>
    <span style="color:black">if you have already configured the gateway - save the settings in another place, as the remote configuration will overwrite the settings. Also, if you used gateway version < 3.4, the gateway will automatically generate a new configuration in JSON format.</span>
  </p>
</body>
{% endcapture %}
{% include templates/info-banner.md content=info %}

{% capture gatewaycreatingspec %}
Docker<small>Recommended</small>%,%docker%,%templates/iot-gateway/remote-creating-gateway-docker.md%br%
Manually<small>Recommended if you installed Gateway any other way except docker</small>%,%manually%,%templates/iot-gateway/remote-creating-gateway-manually.md{% endcapture %}

{% include content-toggle.html content-toggle-id="GatewayCreating" toggle-spec=gatewaycreatingspec %}

## Add new connector

Let's finally add MQTT connector to the created gateway. To do this we use following steps:
- Click **"Connectors configuration"** button on the right panel;
  <br><br>
  ![](/images/gateway/dashboard/gateway-getting-started-7-ce.png)
- Click **"+"** button and fill in **"Name"**, **"Type"** and **"Logging level"** fields;
  <br><br>
  ![](/images/gateway/dashboard/gateway-getting-started-8-ce.png)
- Paste your connector configuration into **"Configuration"** field and click on "Save" button;
  <br><br>
  ![](/images/gateway/dashboard/gateway-getting-started-9-ce.png)

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

Open the web UI of your ThingsBoard server and review statistics that is uploaded from your thingsboard gateway.  
Login as Tenant Administrator and open **Devices** page. Click on the gateway device card.   
Open "Latest Telemetry" tab and review following statistics: "**eventsProduced**", "**eventsSent**" and parameters that provide information about every connector.  
All values should be set to "0".

{:refdef: style="text-align: center;"}
![image](/images/gateway/review-gateway-statistics.png)
{: refdef}
