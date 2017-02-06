---
layout: docwithnav
assignees:
- ashvayka
title: What is Thingsboard IoT Gateway?

---

The Thingsboard **IoT Gateway** is an open-source solution that allows you to integrate devices connected to legacy and third-party systems with Thingsboard.

Thingsboard is an open-source IoT platform that enables rapid development, management and scaling of IoT applications. See [**What is Thingsboard?**](/docs/getting-started-guides/what-is-thingsboard/) if you are new platform user. 

#### Gateway features

Thingsboard IoT Gateway provides following features:

 - **OPC-UA** extension to collect data from devices that are connected to OPC-UA servers.
 - **MQTT** extension to collect data that is published to external MQTT brokers.
 - **Persistence** of collected data to guarantee data delivery in case of network and hardware failures.
 - **Automatic reconnect** to Thingsboard cluster.
 - Simple yet powerful **mapping** of incoming data and messages **to unified format**.
  
#### Architecture  

The IoT Gateway is built on top of **Java**, however is different from similar projects that leverage OSGi technology.
The idea is distantly similar to microservices architecture.
There are **other programming languages** (C, C++, Python, Javascript, Go..) that may be more suitable for application development that target IoT devices.
Especially, when we are talking about language APIs and existing libraries to work with serial ports, GPIOs, I2C, and new modules and sensors that are released every day. 

The Gateway provides simple integration APIs, and encapsulates common Thingsboard related tasks: device provisioning, local data persistence and delivery, message converters/adaptors and other.
As an application developer, you are able to choose Python, Go, C/C++ and other languages and connect to Thingsboard Gateway through MQTT broker. 
Some legacy devices may be connected through other protocols by implementing custom extension. The Gateway also supports OPC-UA extension out-of-the-box.   

#### Project Roadmap

The initial Gateway release goal is to bring Thingsboard [data collection](/docs/user-guide/telemetry/) feature to OPC-UA and MQTT enabled devices.  
The Gateway project is currently in active development stage and you should expect following major features in next releases:

 - Ability to configure devices connected through the Gateway using Thingsboard [Attributes](/docs/user-guide/attributes) feature.
 - Ability to control devices connected through the Gateway using Thingsboard [RPC](/docs/user-guide/rpc/) feature.
 - Ability to configure Gateway distantly from Thingsboard [Dashboards](/docs/user-guide/visualization/).
 - Client-side load balancing based on information about Thingsboard cluster.
 - Ability to visualize collected device data on the Gateway Web UI. 
 - Configurable edge analytics.

#### Next Steps

<p><a href="/docs/iot-gateway/getting-started" class="button">Getting Started</a></p>
