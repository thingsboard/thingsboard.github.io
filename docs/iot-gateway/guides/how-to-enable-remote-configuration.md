---
layout: docwithnav-gw
title: IoT Gateway Remote Configuration
description:  IoT Gateway Remote Configuration

---

* TOC
{:toc}

This guide overviews all sub-dashboards of Gateway Dashboard for remote configuration.

For purpose of this guide, we will use following things:
1. Locally installed instance of ThingsBoard platform (How to install you can [read here](/docs/user-guide/install/installation-options/)).
2. ThingsBoard IoT Gateway (How to install you can [read here](/docs/iot-gateway/installation/)).

Resources (OPTIONAL):
1. [Gateway Dashboard](/docs/iot-gateway/resources/thingsboard-gateways-dashboard.json){:target="_blank" download="thingsboard-gateways-dashboard.json"}
2. [Gateway Widget Bundle](/docs/iot-gateway/resources/thingsboard-gateway-widget-bundle.json){:target="_blank" download="thingsboard-gateway-widget-bundle.json"}

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

## Dashboard overview

### Gateway List

![](/images/gateway/dashboard/gateway-dashboard-list.png)

This dashboard displays all your gateways and all the necessary details about them, namely:
- Date and time of creation;
- Name of the gateway;
- Status (Active/Inactive);
- Number of active connectors;
- Gateway version.

And also navigation elements:
- **Docker command** - when clicked, a modal window opens with a command to launch the gateway;
- **Gateway configuration** - when clicked, a modal window with general gateway settings opens;
- **Connectors** - when clicked, a page for managing and configuring connectors opens.

Also, on this page, you can create a new gateway, as well as sort them according to the parameters described above.

### Gateway Dashboard

If you select a gateway and click on it, you will be transferred to the dashboard of the selected gateway.

![](/images/gateway/dashboard/gateway-dashboard.png)

The dashboard consists of 4 main widgets:
- **General gateway information**, which consists of the following cards:
   - Status (Active/Inactive);
   - Name of the gateway;
   - Type of the gateway;
   - Devices (Active/Inactive);
   - Connectors (Active/Inactive) with link to Connectors dashboard;
   - Errors count with link to Logs dashboard.

![](/images/gateway/dashboard/gateway-dashboard-cards.png)

- **Devices** is a table that contains basic information about connected devices through the gateway:
   - Device Name;
   - Device Type;
   - Status (Active/Inactive);
   - Connector Name;
   - Connector Type;
   - As well as elements of filtering and searching for the necessary devices.

![](/images/gateway/dashboard/gateway-dashboard-devices.png)

- **Alarms** is a standard alarm widget where you will receive all alarms related to selected gateway;

![](/images/gateway/dashboard/gateway-dashboard-alarms.png)

- **Navigation Panel** is a navigation panel on which all other dashboards for configuring, managing and monitoring the gateway are located, namely:
   - Launch command - a modal window with an auto-generated command for launching the gateway;
  
   ![](/images/gateway/dashboard/gateway-dashboard-launch-command.png)

   - [General configuration](#general-configuration) - dashboard with general gateway settings;
  
   [![](/images/gateway/dashboard/gateway-dashboard-gen-conf-button.png)](#general-configuration)

   - [Connectors configuration](#connector-configuration) - dashboard with management and configuration of connectors;
  
   [![](/images/gateway/dashboard/gateway-dashboard-connectors-conf-button.png)](#connector-configuration)

   - [Logs](#logs) - a dashboard with various types of logs (it should be noted that the button is active only when **Remote Logging** is enabled on the gateway);
  
   [![](/images/gateway/dashboard/gateway-dashboard-logs-button.png)](#logs)

   - [Statistics](#statistics) - a dashboard with general and custom statistics of the gateway;

   [![](/images/gateway/dashboard/gateway-dashboard-statistics-button.png)](#statistics)

   - [Remote Shell](#remote-shell) - dashboard with Remote Shell (it should be noted that the button is active only when **Remote Shell** is enabled on the gateway);

   [![](/images/gateway/dashboard/gateway-dashboard-remote-shell-button.png)](#remote-shell)

   - [RPC](#rpc) - Gateway RPC sending dashboard.

   [![](/images/gateway/dashboard/gateway-dashboard-rpc-button.png)](#rpc)

### General Configuration

If you click on the **General Configuration** button on the gateway dashboard in the Navigation Panel, you will be transferred to the dashboard
general settings of the gateway.

The dashboard consists of the following tabs:

{% capture info %}
For each field there are hints that appear when hovering over the **"i"** icon.
{% endcapture %}
{% include templates/info-banner.md content=info %}

{% capture gatewayconfigurationspec %}
General%,%general-toggle%,%templates/iot-gateway/gateway-dashboard-general-conf.md%br%
Logs%,%logs-toggle%,%templates/iot-gateway/gateway-dashboard-logs-conf.md%br%
Storage%,%storage-toggle%,%templates/iot-gateway/gateway-dashboard-storage-conf.md%br%
GRPC%,%grpc-toggle%,%templates/iot-gateway/gateway-dashboard-grpc-conf.md%br%
Statistics%,%statistics-toggle%,%templates/iot-gateway/gateway-dashboard-statistics-conf.md%br%
Other%,%other-toggle%,%templates/iot-gateway/gateway-dashboard-other-conf.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="GatewayConfiguration" toggle-spec=gatewayconfigurationspec %}

### Connector Configuration

If you click on the **Connectors configuration** button on the gateway dashboard in the **Navigation Panel**, you will be transferred
to the **Connectors configuration dashboard**.

![](/images/gateway/dashboard/gateway-dashboard-connectors.png)

The dashboard consists of two main sections:
- Connectors list - basic information and control elements of all created connectors are displayed here:
   - Enabled - enable or disable the connector;
   - Name of connector;
   - Type of connector;
   - Configuration status - displays whether the remote configuration is synchronized with the local configuration;
   - Status of the connector - if it is "green" - there are no errors, and the connector is working correctly. If it is "red" - the connector is not working correctly;
   - Actions:
     - RPC - dashboard for sending [RPC through gateway to connector](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods/);
     - Logs - dashboard with connector logs;
     - Delete connectors.
- Connector configuration - fields for configuring the connector are displayed here, namely:
   - Name of the connector;
   - Type of connector;
   - Logging level;
   - Configuration.

### Logs

{% capture info %}
It should be noted that the **Logs dashboard** is active only when **Remote Logging** is enabled on the gateway.
{% endcapture %}
{% include templates/info-banner.md content=info %}

If you click on the **Logs** button on the gateway dashboard in the **Navigation Panel**, you will be transferred
to the Logs dashboard.

![](/images/gateway/dashboard/gateway-dashboard-logs.png)

The dashboard displays the main gateway log information in real time (General, Service, Connection, Storage, Extension):
- Created time;
- Status;
- Message.

### Statistics

If you click on the **Statistics** button on the gateway dashboard in the **Navigation Panel**, you will be transferred
to the Statistics dashboard. 

![](/images/gateway/dashboard/gateway-dashboard-statistics.png)

The dashboard consists of two widgets:
- Gateway General Chart Statistics - general statistics metrics are displayed here, namely:
  - Sent To Device - total amount of data sent from the gateway to devices;
  - Send To ThingsBoard - the total amount of data sent from the gateway to ThingsBoard;
  - Received From ThingsBoard - total amount of data received from RPC and Attribute Updates;
  - Converted From Devices - the total number of converted data on the gateway;
  - Events Produced - the number of events received from ThingsBoard;
  - Events Sent - total number of events sent to ThingsBoard;
  - Received From Devices - total amount of data received from devices.
- Gateway Custom Statistics - custom statistics are displayed here, you can select a single metric using select. Also, the far right widget will change its type depending on the type of data (if integer/float data is a graph, the other type is a table).

### Remote Shell

{% capture info %}
It should be noted that the **Remote Shell dashboard** is active only when **Remote Shell** is enabled on the gateway.
{% endcapture %}
{% include templates/info-banner.md content=info %}

If you click on the **Remote Shell** button on the gateway dashboard in the **Navigation Panel**, you will be transferred
to the Remote Shell dashboard.

![](/images/gateway/dashboard/gateway-dashboard-shell.png)

The dashboard allows control of the operating system with the gateway from the Remote Shell widget.

### RPC

If you click on the **RPC** button on the gateway dashboard in the **Navigation Panel**, you will be transferred
to the Gateway RPC sending dashboard. 

![](/images/gateway/dashboard/gateway-dashboard-rpc.png)

The dashboard consists of 3 widgets:
- Service RPC - for sending RPC and viewing the result of command execution:
   - Command - [service gateway RPC](/docs/iot-gateway/guides/how-to-use-gateway-rpc-methods/) (Ping, Stats, Devices, Update, Version, Restart, Reboot);
   - Timeout - command execution time;
   - Result - the result of executing the sent command.
- RPS Logs - displays gateway logs when processing the sent RPC;
- RPC debug terminal - widget for debugging gateway RPC.

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
