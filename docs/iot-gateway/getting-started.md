---
layout: docwithnav-gw
title: Getting started with ThingsBoard IoT Gateway
description: Write your first IoT project using ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide covers initial IoT Gateway installation and configuration.
We will connect IoT Gateway to ThingsBoard server, connect a demo device using [**OPC-UA** connector](/docs/iot-gateway/config/opc-ua/) and check received data.

### Prerequisites

If you don't have access to a running ThingsBoard instance, you can use [**Live Demo**](https://demo.thingsboard.io) or [**ThingsBoard Cloud**](https://thingsboard.cloud) to connect your gateway. 

## Create new gateway device on ThingsBoard

First, we have to add a gateway device to your ThingsBoard instance. You can do this using following steps:

{% assign createNewGatewayDevice = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-1-ce.png,
        title: Go to "**Dashboards**" tab and open "**ThingsBoard IoT Gateways**" dashboard.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-2-ce.png,
        title: Click the "**+**" button, fill in the gateway device name and select the device profile.
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

{% capture gatewaycreationspec %}
Docker<small>Recommended</small>%,%docker%,%templates/iot-gateway/remote-creating-gateway-docker.md%br%
Manual installation<small>For package installation or for installation from sources</small>%,%manually%,%templates/iot-gateway/remote-creating-gateway-manually.md{% endcapture %}

{% include content-toggle.html content-toggle-id="gatewayCreation" toggle-spec=gatewaycreationspec %}

## Add new connector

To see how connector works, let's add an **OPC-UA connector**, which will read some data from the public server to the 
created gateway.  
  
Copy the following connector configuration (we will use it later):  

```json
{
  "server": {
    "name": "OPC-UA Default Server",
    "url": "opcua.demo-this.com:51210/UA/SampleServer",
    "timeoutInMillis": 5000,
    "scanPeriodInMillis": 5000,
    "disableSubscriptions": false,
    "subCheckPeriodInMillis": 100,
    "showMap": false,
    "security": "Basic128Rsa15",
    "identity": {
      "type": "anonymous"
    },
    "mapping": [
      {
        "deviceNodePattern": "Root\\.Objects\\.Data\\.Dynamic\\.Scalar",
        "deviceNamePattern": "Device Demo",
        "deviceTypePattern": "default",
        "attributes": [
          {
            "key": "switch",
            "path": "${BooleanValue}"
          },
          {
            "key": "text_value",
            "path": "${StringValue}"
          }
        ],
        "timeseries": [
          {
            "key": "humidity",
            "path": "${NumberValue}"
          },
          {
            "key": "temperature",
            "path": "${DoubleValue}"
          }
        ],
        "rpc_methods": [],
        "attributes_updates": []
      }
    ]
  }
}
```
{:.copy-code}

To create a connector, use the following steps:

{% assign addNewConnector = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-7-ce.png,
        title: Click "**Connectors configuration**" button on the right panel.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-8-ce.png,
        title: Fill in "Name", "Type" and "Logging level" fields, and paste your connector configuration into **Configuration** field and click on **Save** button.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-9-ce.png,
        title: Connector added.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-10-ce.png,
        title: Enable created connector.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewConnector %} 

After all steps, your gateway will receive the configuration, apply it and synchronize the state with the remote 
(you will be able to see the synchronization status of connector configuration in the **Configuration** column).

For now, the gateway is ready to process data through the newly remote-created and configured OPC-UA connector.

## Check device data

To review the data uploaded from your gateway, use the following steps:

{% assign checkDeviceData = '
    ===
        image: /images/gateway/dashboard/review-gateway-statistics-1-ce.png,
        title: Navigate to the **Devices** page and click on the created device. Open the "**Attributes**" tab, and you will be able to see that attributes, configured in the connector.
    ===
        image: /images/gateway/dashboard/review-gateway-statistics-2-ce.png,
        title: Go to the "**Latest Telemetry**" tab to see parameters from device like "**humidity**", "**temperature**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=checkDeviceData %}

## Configure connectors

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

More about *ThingsBoard IoT Gateways* Dashboard you can [read here](/docs/iot-gateway/guides/how-to-enable-remote-configuration/).

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
