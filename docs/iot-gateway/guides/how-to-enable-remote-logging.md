---
layout: docwithnav-gw
title: How to enable remote logging feature on ThingsBoard IoT Gateway
description: How to enable remote logging feature on ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to enable remote logging and read logs from ThingsBoard IoT Gateway on your ThingsBoard platform instance.  

For purpose of this guide, we will use following things:
1. Locally installed instance of ThingsBoard platform (How to install you can [read here](/docs/user-guide/install/installation-options/)).
2. ThingsBoard IoT Gateway (How to install you can [read here](/docs/iot-gateway/installation/)).

## Step 1. Remote logging activation and setting the logging level

To activate and set logging level, please follow next steps:  
   
 - Open the gateway device details in the WEB UI.  
 - Go to a tab "**Attributes**".  
 - Select **Shared Attributes** from an **Entity attribute** scope list.  
 - Click "**+**" button (add new attribute).  
 <br>
  ![](/images/gateway/add-shared-attributes-gateway.png)
 - In "Add attribute" window fill fields with the following values: 
    - The **name** field must be **RemoteLoggingLevel**
    - The **value** field sets the logging level, the values can be as follows:
 ```
 DEBUG
 INFO
 WARNING
 ERROR
 CRITICAL
 NONE
```
  
  ![](/images/gateway/add-remote-logging-level-attribute-1.png)
 - Click **Add**
  ![](/images/gateway/add-remote-logging-level-attribute-2.png)
 - Launch your gateway in case it is not running **[Optional]**.  
 - Open the **Latest telemetry** tab of your gateway device, and you will see the new telemetry key -- **LOGS**.  
  <br><br>
  ![](/images/gateway/logs-telemetry.png)
  <br>
  <br>
  
## Step 2. Display logs on a dashboard

It may be not convenient to review logs in the Device details window. We should show them on a dashboard.  
So we will be able to investigate all logs, not only the latest one.  
To do this we use following steps:

  - Check **LOGS** key and click "**Show on widget**" button:
  ![](/images/gateway/show-logs-on-widget.png)

  - We will use the default **Cards** widget:
  ![](/images/gateway/add-logs-to-dashboard.png)

  - Choose **Timeseries table** Card widget and add it to the Dashboard. It can be either the new one or the existing dashboard.
  ![](/images/gateway/create-new-dashboard-for-logs.png)

  - As a result now we can monitor the status of the gateway device from ThingsBoard environment.
  ![](/images/gateway/logs-dashboard.png) 

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
