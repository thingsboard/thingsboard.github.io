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


## Step 1: Provision the gateway

In order to connect your IoT gateway to ThingsBoard server, you need to provision gateway credentials first. We will use access token credentials as the most simple one.
See [device authentication options](/docs/user-guide/device-credentials/) for more details.

Login as tenant administrator. Use [default credentials](/docs/samples/demo-account/#demo-tenant) in case of local ThingsBoard server.
Open **Devices** and click on "+" button in the top right corner.

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-page.png)
{: refdef} 

Populate your gateway name and select "Is gateway" checkbox. Click "Add".

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-add.png)
{: refdef}

**NOTE:** Gateway and device names should be unique in the scope of a tenant.

Open your new device card and click on "Copy Access Token" button. 
Paste the token to a safe place. We will use it for ThingsBoard configuration in the next steps.

{:refdef: style="text-align: center;"}
![image](/images/gateway/device-token.png)
{: refdef} 

## Step 2: Install the gateway

Browse available gateway [**installation options**](/docs/iot-gateway/installation/) and choose the most suitable installation guide.
Follow steps in chosen gateway installation guide. The Gateway configuration steps are covered below.

## Step 3: Gateway configuration

Navigate to the gateway configuration folder and edit **tb-gateway.yaml** file.
```bash
/etc/thingsboard-gateway/config/tb_gateway.yaml
```
  
Change **host** and **port** properties in the section *"thingsboard"* to your ThingsBoard host.

Change **accessToken** property in the section *"security"* to your access token that was copied during step 3.

Your gateway configuration should look similar to this file:

```yaml

thingsboard:
  host: thingsboard.cloud
  port: 1883
  remoteShell: false
  remoteConfiguration: false
  statistics:
    enable: true
    statsSendPeriodInSeconds: 3600
  minPackSendDelayMS: 0
  checkConnectorsConfigurationInSeconds: 60
  handleDeviceRenaming: true
  checkingDeviceActivity:
    checkDeviceInactivity: false
    inactivityTimeoutSeconds: 120
    inactivityCheckPeriodSeconds: 10
  security:
    accessToken: PUT_YOUR_GW_ACCESS_TOKEN_HERE
storage:
  type: memory
  read_records_count: 10
  max_records_count: 1000
grpc:
  enabled: false
  serverPort: 9595
  keepaliveTimeMs: 10000
  keepaliveTimeoutMs: 5000
  keepalivePermitWithoutCalls: true
  maxPingsWithoutData: 0
  minTimeBetweenPingsMs: 10000
  minPingIntervalWithoutDataMs: 5000
connectors:

  -
    name: MQTT Broker Connector
    type: mqtt
    configuration: mqtt.json

```

**You can read more in [this article](/docs/iot-gateway/configuration/) about configuration files and their properties.**  

## Step 4: Restart gateway to accept new configuration

This step depends on chosen type of installation. If you install thingsboard-gateway as daemon - you should use following command:  
```bash
systemctl restart thingsboard-gateway.service
```
{: .copy-code}

In other case, if you have installed the gateway as python module - you should just rerun gateway process.   

## Step 5: Review gateway statistics

Open the web UI of your ThingsBoard server and review statistics that is uploaded from your thingsboard gateway.  
Login as Tenant Administrator and open **Devices** page. Click on the gateway device card.   
Open "Latest Telemetry" tab and review following statistics: "**eventsProduced**", "**eventsSent**" and parameters that provide information about every connector.  
All values should be set to "0".

{:refdef: style="text-align: center;"}
![image](/images/gateway/review-gateway-statistics.png)
{: refdef}

## Step 6: Add connectors to the main configuration file 
 
For connection to some devices we use connectors, they are connect to different devices and servers to collect data.  
To provide for gateway information about connectors that you need - you should write a configuration to section "connectors" in tb_gateway.yaml (At least one connector needed for correct work).  
For correct configuration please use [this article](/docs/iot-gateway/configuration/#section-connectors).  
 
## Step 7: Configure connectors

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
