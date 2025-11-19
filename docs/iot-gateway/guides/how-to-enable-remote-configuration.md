---
layout: docwithnav-gw
title: IoT Gateway Remote Configuration
description:  IoT Gateway Remote Configuration

---

* TOC
{:toc}

Remote Configuration is a powerful feature of ThingsBoard IoT Gateway that allows you to manage and configure your 
gateway directly from the ThingsBoard web interface. This feature is especially useful for managing multiple 
gateways or when physical access to the gateway is limited.

For purpose of this guide, we will use following things:
1. Locally installed instance of ThingsBoard platform (How to install you can [read here](/docs/user-guide/install/installation-options/)).
2. ThingsBoard IoT Gateway (How to install you can [read here](/docs/iot-gateway/installation/)).

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

## Gateway List

In order to remotely manage gateways, you need to go to the "**Entities**" > "**Gateways**" tab on the side menu of 
the ThingsBoard.

Gateway list page displays all your gateways and all the necessary details about them, namely:
- Date and time of creation.
- Name of the gateway.
- Status (Active/Inactive).
- Number of enabled connectors.
- Gateway version.

And also navigation elements:
- **Launch command** - when clicked, a modal window opens with a command to launch the gateway.
- **Gateway configuration** - when clicked, a modal window with general gateway settings opens.
- **Connectors** - when clicked, a page for managing and configuring connectors opens.
- **Delete gateway** - when clicked, a gateway deletion confirmation modal window opens.

On this page, you can create a new gateway, as well as sort them according to the parameters described above.

![](/images/gateway/dashboard/gateway-dashboard-list.png)

### Gateway Info Page

If you select a gateway and click on it, you will be transferred to the page of the selected gateway.

![](/images/gateway/dashboard/gateway-dashboard.png)

The dashboard consists of 4 main widgets:
- **General gateway information**, which consists of the following cards:
   - Status (Active/Inactive).
   - Name of the gateway.
   - Type of the gateway.
   - Devices (Active/Inactive).
   - Connectors (Enabled/Disabled) with link to Connectors page.
   - Errors count with link to Logs page.

![](/images/gateway/dashboard/gateway-dashboard-cards.png)

- **Devices** is a table that contains basic information about connected devices through the gateway:
   - Device Name.
   - Device Type.
   - Status (Active/Inactive).
   - Connector Name.
   - Connector Type.
   - Device info button that opens a modal window with detailed information about the device.
   - As well as elements of filtering and searching for the necessary devices.

![](/images/gateway/dashboard/gateway-dashboard-devices.png)

- **Alarms** is a standard alarm widget where you will receive all alarms related to selected gateway.

![](/images/gateway/dashboard/gateway-dashboard-alarms.png)

- **Navigation Panel** is a navigation panel on which all other pages for configuring, managing and monitoring the gateway are located, namely:
   - Launch command - a modal window with an auto-generated command for launching the gateway.
  
   ![](/images/gateway/dashboard/gateway-dashboard-launch-command.png)

   - [General configuration](#general-configuration) - page with general gateway settings.
  
   [![](/images/gateway/dashboard/gateway-dashboard-gen-conf-button.png)](#general-configuration)

   - [Connectors configuration](#connector-configuration) - page with management and configuration of connectors.
  
   [![](/images/gateway/dashboard/gateway-dashboard-connectors-conf-button.png)](#connector-configuration)

   - [Logs](#logs) - a page with various types of logs (it should be noted that the button is active only when **Remote Logging** is enabled on the gateway).
  
   [![](/images/gateway/dashboard/gateway-dashboard-logs-button.png)](#logs)

   - [Statistics](#statistics) - a page with general and custom statistics of the gateway.

   [![](/images/gateway/dashboard/gateway-dashboard-statistics-button.png)](#statistics)

   - [Remote Shell](#remote-shell) - page with Remote Shell (it should be noted that the button is active only when **Remote Shell** is enabled on the gateway).

   [![](/images/gateway/dashboard/gateway-dashboard-remote-shell-button.png)](#remote-shell)

   - [RPC](#rpc) - Gateway RPC sending page.

   [![](/images/gateway/dashboard/gateway-dashboard-rpc-button.png)](#rpc)

### General Configuration

If you click on the **General Configuration** button on the gateway page in the Navigation Panel, you will be 
transferred to the dashboard general settings of the gateway.

You can switch configuration modes between **Basic** and **Advanced**. Basic mode provides a user-friendly interface 
for configuring the gateway, while Advanced mode allows you to edit the configuration file in JSON format directly.

#### Basic Configuration Mode

The page consists of the following tabs:

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

#### Advanced Configuration Mode

Advanced mode allows you to edit the configuration file in JSON format directly and useful for configuring complex 
settings that are not available in Basic mode.

![](/images/gateway/dashboard/gateway-dashboard-general-configuration-advanced-mode.png)

### Connectors Configuration

If you click on the **Connectors configuration** button on the gateway page in the **Navigation Panel**, you will be 
transferred to the **Connectors configuration page**.

![](/images/gateway/dashboard/gateway-dashboard-connectors.png)

The page consists of two main sections:
- Connectors list - basic information and control elements of all created connectors are displayed here:
   - Enabled - enable or disable the connector.
   - Name of connector.
   - Type of connector.
   - Configuration status - displays whether the remote configuration is synchronized with the local configuration.
   - Status of the connector - if it is "green" - there are no errors, and the connector is working correctly. If it is "red" - the connector is not working correctly.
   - Actions:
     - RPC - dashboard for sending RPC through gateway to connector.
     - Logs - dashboard with connector logs.
     - Delete connector.
- Connector configuration - fields for configuring the connector.

Also, you can create a new connector by clicking on the **+** button in the top right corner of the page.

### Logs

{% capture info %}
It should be noted that the **Logs page** is active only when **Remote Logging** is enabled on the gateway.
{% endcapture %}
{% include templates/info-banner.md content=info %}

If you click on the **Logs** button on the gateway page in the **Navigation Panel**, you will be transferred
to the Logs page.

![](/images/gateway/dashboard/gateway-dashboard-logs.png)

The dashboard displays the main gateway log information in real time (General, Service, Connection, Storage, Extension):
- Created time.
- Level.
- Message.

### Statistics

If you click on the **Statistics** button on the gateway page in the **Navigation Panel**, you will be transferred
to the Statistics page. 

In the right sidebar you can switch between **Storage**, **Machine** and **Custom** statistics.
Also, you can check gateway status in the real time in the bottom right corner of the page.

#### Storage Statistics

Storage statistics display information about the storage used by the gateway. The page consists of the following widgets:
- Storage message count - displays the total number of messages stored in the gateway storage.
- Message from platform - displays the total number of messages received from the platform.
- Pushed datapoints char - displays the total number of telemetry and attributes data points pushed to the platform.
- Messages char - displays the total number of messages processed by the gateway:
    - Messages pulled from storage - total number of messages pulled from storage.
    - Messages pushed to platform - total number of messages pushed to the platform.
    - Messages sent to platform - total number of messages sent to the platform.

![](/images/gateway/dashboard/gateway-dashboard-storage-statistics.png)

#### Machine Statistics

Machine statistics display information about the gateway machine performance. The page consists of the following widgets:
- CPU usage - displays the current CPU usage percentage of the gateway machine.
- RAM usage - displays the current RAM usage percentage of the gateway machine.
- Disk usage - displays the current Disk usage percentage of the gateway machine.

![](/images/gateway/dashboard/gateway-dashboard-machine-statistics.png)

#### Custom Statistics

Custom statistics display user-defined statistics of the gateway. You can add custom statistics in the 
**Statistics** tab on **General configuration** page or by clicking on **Create new** button in 
the "**Time series name**" field. Depends on the added custom statistics, the page will consist of different widgets:
char widgets for numerical statistics and table widgets for string statistics.

![](/images/gateway/dashboard/gateway-dashboard-custom-statistics.png)

### Remote Shell

{% capture info %}
It should be noted that the **Remote Shell dashboard** is active only when **Remote Shell** is enabled on the gateway.
{% endcapture %}
{% include templates/info-banner.md content=info %}

If you click on the **Remote Shell** button on the gateway page in the **Navigation Panel**, you will be transferred
to the Remote Shell page.

![](/images/gateway/dashboard/gateway-dashboard-shell.png)

The dashboard allows control of the operating system with the gateway from the Remote Shell widget.

### RPC

If you click on the **RPC** button on the gateway page in the **Navigation Panel**, you will be transferred
to the Gateway RPC sending page. 

![](/images/gateway/dashboard/gateway-dashboard-rpc.png)

The page consists of 3 widgets:
- Service RPC - for sending RPC and viewing the result of command execution:
   - Command - [service gateway RPC](/docs/iot-gateway/guides/how-to-use-gateway-rpc-methods/) (Ping, Stats, Devices, Update, Version, Restart, Reboot).
   - Timeout - command execution time.
   - Response - the result of executing the sent command.
- RPS Logs - displays gateway logs when processing the sent RPC.
- RPC debug terminal - widget for debugging gateway RPCs.

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
