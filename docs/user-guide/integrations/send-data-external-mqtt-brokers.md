---
layout: docwithnav
title: Send data to external MQTT brokers
description: MQTT downlink guide

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

This tutorial will show how to send data to external MQTT broker using knob control widget.

* TOC
{:toc}

## Use case

Let's assume your device is controlling temperature and you would like to use it as an external MQTT
 broker with the help of Thingsboard. 

In this tutorial we will configure ThingsBoard Rule Engine to automatically send messages using MQTT
 protocol. You can use this tutorial as a basis for much more complex tasks. 
 
 MQTT Integration allows to convert existing protocols and payload formats to ThingsBoard message format and is useful 
 in several deployment scenarios: 
 
  - stream device and/or asset data from external system, IoT platform or connectivity provider back-end.
  - stream device and/or asset data from your custom application running in the cloud.
  - connect the existing device with custom MQTT based protocol to ThingsBoard.
  
 Please review the integration diagram to learn more. 
 
  ![image](/images/user-guide/integrations/mqtt-integration.svg)

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  * [MQTT Integration](/docs/user-guide/integrations/mqtt/).
  * [Data converters](/docs/user-guide/integrations/index/#data-converters). 

## Model definition
  
We will operate with Temperature sensor device that has name "Thermostat-A" and type "thermostat" which will be
automatically created in the process of integration work.

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-device.png)

## Getting started

### Creating converters

In order for integration to work, downlink and uplink converters should be created.

Uplink converter should look like this:

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-uplink-converter.png) 

The full source code of javascript function used in converter is available
 [**here**](/docs/user-guide/resources/mqtt-downlink-uplink-converter.js). 

Downlink converter should look like this:

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-downlink-converter.png)

The full source code of javascript function used in converter is available
 [**here**](/docs/user-guide/resources/mqtt-downlink-downlink-converter.js).

### Creating integration

For integration to work a remote server should be used. In this case you can use iot.eclipse.org for your MQTT data.
Integration should look like this:

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-create-integration-1.png)
![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-create-integration-2.png)

### Setting up dashboard

Download and import attached json [**file**](/docs/user-guide/resources/temperature_control_dashboard.json) 
with a dashboard for this tutorial.

### Turning on virtual device

First, you should check if node, npm and npm module mqtt are installed by using following commands:

```bash
npm -v
#should display npm version
node -v
#should display node version
npm list mqtt
#should be ran in folder with node-modules, will display npm mqtt module version
```


If you don't have npm, you can install it from  [here](https://www.npmjs.com/package/npm),
npm mqtt module with following command:

```bash
npm install mqtt --save
```

and node from [here](https://nodejs.org/en/download/).

Download the [**file**](/docs/user-guide/resources/mqtt-downlink-virtual-device.js) and run it with following 
command to launch virtual device: 

```bash
node mqtt-downlink-virtual-device.js
```

Note: virtual device should be put in the folder where node-modules is situated.


### Work demonstration

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-work-demonstration.png) 

Using a control widget (in this case, a knob) leads to value change on remote MQTT listener.

Dashboard can be found [**here**](/docs/user-guide/resources/temperature_control_dashboard.json).

## Message Flow

In this section, we explain the purpose of each node in this tutorial. 

### Modifying rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-root-rule-chain.png)

  * **Node A**: Originator attributes enrichment node
      
    * Puts server attribute deviceName into metadata
    
   ![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-node-A.png) 
    
  * **Node B**: Script Transformation Node
      
     * Puts deviceName from metadata to message parameters
     
    ![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-node-B.png)

  * **Node C**: Integration Downlink node
  
    * Sends message to integration
    
   ! ![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-node-C.png) 

You can download and import attached json [**file**](/docs/user-guide/resources/mqtt-downlink-root-rule-chain.json) 
with a rule chain for this tutorial.

    


 



