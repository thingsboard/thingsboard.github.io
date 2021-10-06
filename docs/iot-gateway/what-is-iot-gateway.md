---
layout: docwithnav-gw
title: What is ThingsBoard IoT Gateway?
description: Features and advantages of ThingsBoard IoT Gateway

---

The Thingsboard **IoT Gateway** is an open-source solution that allows you to integrate devices connected to legacy and third-party systems with Thingsboard.  

Thingsboard is an open-source IoT platform for data collection, processing, visualization, and device management. See [**What is Thingsboard?**](/docs/getting-started-guides/what-is-thingsboard/) if you are new platform user.

<object width="80%" data="/images/gateway/python-gateway-animd-ff.svg"></object>

#### Gateway features

ThingsBoard IoT Gateway provides following features:

 - [**MQTT** connector](/docs/iot-gateway/config/mqtt/) to control, configure and collect data from IoT devices that are connected to external MQTT brokers using existing protocols.
 - [**OPC-UA** connector](/docs/iot-gateway/config/opc-ua/) to collect data from IoT devices that are connected to OPC-UA servers.
 - [**Modbus** connector](/docs/iot-gateway/config/modbus/) to collect data from IoT devices that are connected through Modbus protocol.
 - [**BLE** connector](/docs/iot-gateway/config/ble/) to collect data from IoT devices that are connected using Bluetooth Low Energy.
 - [**Request** connector](/docs/iot-gateway/config/request/) to collect data from IoT devices that are have HTTP(S) API endpoints.
 - [**CAN** connector](/docs/iot-gateway/config/can/) to collect data from IoT devices that are connected through CAN protocol.
 - [**BACnet** connector](/docs/iot-gateway/config/bacnet/) to collect data from IoT devices that are connected throughBACnet protocol.
 - [**ODBC** connector](/docs/iot-gateway/config/odbc/) to collect data from ODBC databases.
 - [**REST** connector](/docs/iot-gateway/config/rest/) to create endpoints and collect data from incoming HTTP requests.
 - [**SNMP** connector](/docs/iot-gateway/config/rest/) to collect data from SNMP managers.
 - [**FTP** connector](/docs/iot-gateway/config/ftp/) to collect data from FTP server
 - [**Custom** connector](/docs/iot-gateway/custom/) to collect data from IoT devices that are connected by different protocols. (You can create your own connector for the requires protocol).
 - **Persistence** of collected data to guarantee data delivery in case of network or hardware failures.
 - **Automatic reconnect** to ThingsBoard cluster.
 - Simple yet powerful **mapping** of incoming data and messages **to unified format**.


#### Architecture

The IoT Gateway is a software component that is designed to run on a Linux based microcomputers that support **Python 3.5+**.
Main components of ThingsBoard IoT Gateway are listed below.

**Connector**

The purpose of this component is to connect to external system (e.g. MQTT broker or OPC-UA server) or directly to devices (e.g. Modbus, BLE or CAN).
Once connected, connector is either poll data from those systems or subscribe to updates. Poll vs subscribe depends on the protocol capabilities. 
For example, we use subscription model for MQTT connectors and polling for Modbus and CAN. 
Connector is also able to push updates to devices either directly or via external systems.

It is possible to define your own connector using the [customization guide](/docs/iot-gateway/custom/).

**Converter**   
 
Converters are responsible for converting data from protocol specific format to/from ThingsBoard format.
Converters are invoked by Connectors. Converters are often specific to protocol supported by Connector.
There are uplink and downlink converters. Uplink converter is used to convert data from specific protocol to ThingsBoard format.
Downlink converter is used to convert messages from ThingsBoard to specific protocol format.

It is possible to define your own converter using the [customization guide](/docs/iot-gateway/custom/).

**Event Storage**

Event Storage is used to temporary store the telemetry and other events produced by Connectors until they are delivered to ThingsBoard.
Event Storage support two implementations: in-memory queue and persistent file storage. 
Both implementations make sure that your device data is eventually delivered in case of network outages.
In-memory queue minimizes the IO operations but may lose message in case of gateway process restart.  
Persistent file storage survives the restart of the process but executes IO operations to the file system.

**ThingsBoard Client**

The Gateway communicates to ThingsBoard via MQTT protocol and uses API described [here](/docs/reference/gateway-mqtt-api/).
ThingsBoard Client is a separate thread that polls Event Storage and delivers messages once connection to ThingsBoard is active.  
ThingsBoard Client supports monitoring of the connectivity, batching the events for performance improvement and many other features.

**Gateway Service**

The Gateway Service is responsible for bootstrap of the Connectors, Event Storage and ThingsBoard Client. 
This Service collects and periodically reports statistics to ThingsBoard about incoming messages and connected devices.
Gateway Service persists list of connected devices to be able to re-subscribe to device configuration updates in case of the restart of the gateway. 

#### Project Roadmap

<p><a href="/docs/iot-gateway/roadmap" class="button">Gateway Roadmap</a></p>

#### Next Steps

<p><a href="/docs/iot-gateway/getting-started" class="button">Getting Started Guide</a></p>
