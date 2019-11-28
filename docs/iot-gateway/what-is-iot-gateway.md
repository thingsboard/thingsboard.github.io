---
layout: docwithnav
title: What is ThingsBoard IoT Gateway?
description: Features and advantages of ThingsBoard IoT Gateway

---

The Thingsboard **IoT Gateway** is an open-source solution that allows you to integrate devices connected to legacy and third-party systems with Thingsboard.  

Thingsboard is an open-source IoT platform for data collection, processing, visualization, and device management. See [**What is Thingsboard?**](https://thingsboard.io/docs/getting-started-guides/what-is-thingsboard/) if you are new platform user.  

#### Gateway features

ThingsBoard IoT Gateway provides following features:

 - [**MQTT** connector](/docs/iot-gateway/mqtt.md) to control, configure and collect data from IoT devices that are connected to external MQTT brokers using existing protocols.
 - [**OPC-UA** connector](/docs/iot-gateway/opc-ua.md) to collect data from IoT devices that are connected to OPC-UA servers.
 - [**Modbus** connector](/docs/iot-gateway/modbus.md) to collect data from IoT devices that are connected through Modbus protocol.
 - [**BLE** connector](/docs/iot-gateway/ble.md) to collect data from IoT devices that are connected using Bluetooth Low Energy.
 - [**Custom** connector](/docs/iot-gateway/custom.md) to collect data from IoT devices that are connected by different protocols. (You can create your own connector for the requires protocol).
 - **Persistence** of collected data to guarantee data delivery in case of network or hardware failures.
 - **Automatic reconnect** to ThingsBoard cluster.
 - Simple yet powerful **mapping** of incoming data and messages **to unified format**.
  
#### Architecture  

{:refdef: style="text-align: center;"}
![ThingsBoard IoT Gateway architecture](/images/gateway/Python-gateway.jpg)
{: refdef}



The IoT Gateway is built on top of **Python**, however is different from similar projects that leverage OSGi technology.
The idea is distantly similar to microservices architecture.
The gateway supports custom connectors to connect to new devices or servers and custom converters for processing data from devices.
Especially, when we are talking about language APIs and existing libraries to work with serial ports, GPIOs, I2C, and new modules and sensors that are released every day. 

The Gateway provides simple integration APIs, and encapsulates common Thingsboard related tasks: device provisioning, local data persistence and delivery, message converters and other.
For processing data from devices you also can write custom converter, it will receive information from device and send it to converter to convert to unified format before sending it to the ThingsBoard cluster.  

#### Project Roadmap

The initial Gateway release goal is to bring ThingsBoard [data collection](/docs/user-guide/telemetry/) feature to OPC-UA and MQTT enabled devices.
ThingsBoard Gateway provides the ability to configure and control MQTT enabled devices from ThingsBoard through the Gateway.

The Gateway project is currently in active development stage and you should expect following major features in next releases:

 - Ability to configure IoT devices connected through the Gateway using ThingsBoard [Attributes](/docs/user-guide/attributes) feature.
 - Ability to control IoT devices connected through the Gateway using ThingsBoard [RPC](/docs/user-guide/rpc/) feature.
 - Ability to configure Gateway distantly from ThingsBoard [Dashboards](/docs/user-guide/visualization/).
 - Client-side load balancing based on information about ThingsBoard cluster.
 - Ability to visualize collected device data on the Gateway Web UI.
 - Configurable edge analytics.

#### Next Steps

<p><a href="/docs/iot-gateway/getting-started" class="button">Getting Started</a></p>
