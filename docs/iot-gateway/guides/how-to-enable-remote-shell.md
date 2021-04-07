---
layout: docwithnav-gw
title: How to enable remote shell feature on ThingsBoard IoT Gateway
description: How to enable remote shell feature on ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to enable remote shell feature and control operation system with ThingsBoard IoT Gateway from your ThingsBoard platform instance.  

For purpose of this guide, we will use following things:
1. Instance of ThingsBoard platform (How to install you can [read here](https://thingsboard.io/docs/user-guide/install/installation-options/)). For this guide we will use [thingsboard.cloud](https://thingsboard.cloud)
2. Installed and configured ThingsBoard IoT Gateway (How to install you can [read here](https://thingsboard.io/docs/iot-gateway/installation/)).

# Step 1. Remote shell activation

 - To activate remote shell in ThingsBoard IoT Gateway you should add or change parameter **remoteShell** to **true** in the section **thingsboard** in the general configuration file (**tb_gateway.yaml**).
 {% capture info %}
<br>
**{: style="color:red" } WARNING: This feature can cause security problems for your device, we strongly recommend using it with ssl encryption only and not enabling it if you don't need it.**  
{% endcapture %}
{% include templates/info-banner.md content=info %}
 

 - Restart the gateway with the new configuration.

Example of the **thingsboard** section in the general configuration file:
```yaml
thingsboard:
  host: thingsboard.cloud
  port: 1883
  remoteShell: true
  remoteConfiguration: false
  security:
    accessToken: PUT_YOUR_GW_ACCESS_TOKEN_HERE
```
  
# Step 2. Create a dashboard to use the remote shell

To use the remote shell we have to use the widget **RPC remote shell** from **Control widget bundle**.
To do this we use following steps:
  
  - Open **Dashboards** tab:
  <br><br>
  ![](/images/gateway/remote-shell-1.png)
 
  - We will add a new dashboard:  
  <br><br>
  ![](/images/gateway/remote-shell-2.png)
  
  - Open created dashboard, open edit mode by **pencil** button and add new widget:
  <br><br>
  ![](/images/gateway/remote-shell-3.png)
  
  - Select widget budle "**Control widgets**":
  <br><br>
  ![](/images/gateway/remote-shell-4.png)
  
  - Scroll down and select **RPC remote shell** widget:
  <br><br>
  ![](/images/gateway/remote-shell-5.png)
  
  - We haven't specify the entity type for the widget so we will **Create a new one**:
  <br><br>
  ![](/images/gateway/remote-shell-6.png)
  
  - We have to fill required fields and same the entity. **Gateway** - is our gateway device:
  <br><br>
  ![](/images/gateway/remote-shell-7.png)
  
  - To prevent TimeoutException, we will increase the default RPC command timeout to 5000 milliseconds in the **advanced** settings tab and press **ADD** and check mark icon to save the dashboard:
  <br><br>
  ![](/images/gateway/remote-shell-8.png)
  
  - The connected widget looks like (Connection setups automatically):
  <br><br>
  ![](/images/gateway/remote-shell-9.png)
  
  - Now you can use the shell to control device with the gateway. For example we run **ls** command to get the list of files and directories in the current directory. 
  <br><br>
  ![](/images/gateway/remote-shell-10.png)

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
