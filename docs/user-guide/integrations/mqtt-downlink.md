---
layout: docwithnav
title: MQTT downlink
description: MQTT downlink guide

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

This tutorial will show how to send data to external MQTT broker using knob control widget.

* TOC
{:toc}

## Use case

Let's assume your device is controlling temperature and you would like to send MQTT messages to it using Thingsboard. 

In this tutorial we will configure ThingsBoard Rule Engine to automatically send messages using MQTT protocol .
You can use this tutorial as a basis for much more complex filtering. 

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  * [MQTT Integration](/docs/user-guide/integrations/mqtt/).
  * [Data converters](/docs/user-guide/integrations/index/#data-converters). 

## Model definition
  
We will operate with Temperature sensor device that has name "Thermostat A" and type "thermostat".

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-add-device.png)


## Getting started

### Creating converters

In order for integration to work, Downlink and Uplink converters should be created.
Uplink converter should look like this:

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-uplink-converter.png)

The full source code of javascript function used in converter is available [**here**](/docs/user-guide/resources/mqtt-downlink-uplink-converter.js).

Downlink converter should look like this:

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-downlink-converter.png)

The full source code of javascript function used in converter is available [**here**](/docs/user-guide/resources/mqtt-downlink-downlink-converter.js).

### Creating integration

For integration to work a remote server should be used. In this case you can use iot.eclipse.org for your MQTT data.
Integration should look like this:

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-create-integration-1.png)
![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-create-integration-2.png)

### Launching device emulator

In order for control widget to work, device emulator should be running. 
First, you should check if node and mosquitto are installed by using following commands:
```bash
node -v
# should respond installed node version
mosquitto
# should try to launch mosquitto
```
If either of them is missing, you can install node from [here](https://nodejs.org/en/download/) and mosquitto
from [here](https://mosquitto.org/download/). 

Then you need to download device emulator from [here](https://gist.github.com/Terny22/2b380427d1a9af823dac03d14f3379ff).

The second line of the file should be changed as following:

```js
const ACCESS_TOKEN = "$device-token";
```

The following command is used to launch emulator:

```bash
node mqtt-temperature.js
```

### Setting up dashboard

Download and import attached json [**file**](/docs/user-guide/resources/temperature_control_dashboard.json) with a dashboard for this tutorial.

### Turning on MQTT listener

The following command is used to launch listener:

```bash
mosquitto_sub  -h iot.eclipse.org -t "v1/temperature/upload/" --port 1883
```

### Work demonstration

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-work-demonstration.png)

Using a control widget (in this case, a knob) leads to value change on remote MQTT listener.
## Message Flow

In this section, we explain the purpose of each node in this tutorial. 

### Root rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-root-rule-chain.png)

  * **Node A**: Integration Downlink node
  
    * We modify the default root rule chain to forward RPC requests to device to new "Integration downlink" rule node

You can download and import attached json [**file**](/docs/user-guide/resources/mqtt-downlink-root-rule-chain.json) 
with a rule chain for this tutorial.

    
### New "Integration downlink" rule node

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/mqtt-downlink-integration-node.png)

When creating this node, you have to choose your integration.
   

MQTT Integration allows to convert existing protocols and payload formats to ThingsBoard message format and is useful in several deployment scenarios: 

 - stream device and/or asset data from external system, IoT platform or connectivity provider back-end.
 - stream device and/or asset data from your custom application running in the cloud.
 - connect the existing device with custom MQTT based protocol to ThingsBoard.
 
Please review the integration diagram to learn more. 

 ![image](/images/user-guide/integrations/mqtt-integration.svg)
 



