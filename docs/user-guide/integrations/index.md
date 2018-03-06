---
layout: docwithnav
title: Platform Integrations
description: Platform Integrations Documentation 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

### Overview

ThingsBoard Platform integrations feature was designed for two primary use cases / deployment options:

  - Connect existing NB IoT, LoRaWAN, SigFox and other devices with specific payload formats directly to ThingsBoard platform.
  - Stream data from devices connected to existing IoT Platforms to enable real-time interactive dashboards and efficient data processing.
  
Both use cases have few things in common. There is a server-side component in the deployment topology that prevents direct access to device and provides set of APIs to interact with the device in the field instead.
The payload format of the device is not well defined. Often two devices that have similar sensors have different payload formats depending on a vendor or even software version.  

The job of ThingsBoard Integration is to provide secure and reliable API bridge between core platform features (telemetry collection, attributes and RPC calls) and specific third-party platform APIs.    

### How it works?

At the moment ThingsBoard support two main integration protocols: HTTP and MQTT. 
For example, SigFox Backend uses HTTP to push data to ThingsBoard or any other system. 
On the other hand, AWS IoT, IBM Watson and Azure Event Hub allows to subscribe to the data feed from devices via MQTT. Similar, some LoRaWAN and NB IoT platforms allow both HTTP and MQTT interfaces.

Once message arrives from External Platform to ThingsBoard it passes validation according to platform specific payload format and security rules. Once message is validated ThingsBoard Integration invokes
assigned [Uplink Data Converter](/docs/user-guide/data-converters/#uplink-data-converters) to extract sub-set of meaningful information out of the incoming message. The message is basically transformed from device and platform specific payload to the format that ThingsBoard uses.
Each Platform Integration can be configured to support downlink message processing which can be triggered by ThingsBoard on device shared attribute update or RPC call. In this case ThingsBoard Integration invokes 
assigned [Downlink Data Converter](/docs/user-guide/data-converters/#downlink-data-converters) to transform ThingsBoard downlink message to device specific payload and forwards it to the configured downlink endpoint according to the Platform Integration rules.       

<br/>

 ![image](/images/user-guide/integrations/integrations-overview.svg)

### Debug mode

This feature allows to persis: 

  - incoming messages from thirdparty system;
  - metadata values;
  - the results of data converter;
  - results of the payload processing. 
  
It enables rapid development of converters and configuration of integrations. 
This feature allows to validate your configuration setup and should be used only for debug purposes, since it dramatically impacts performance.

### Platform Integrations vs IoT Gateway

Experienced ThingsBoard users may notice that functionality of Integrations feature partially overlap with functionality of [IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/).
However, there is a key differences between this two systems/features:

  - IoT Gateway is designed for local network deployments, Integrations are designed for server-to-server integrations.
  - IoT Gateway is designed to support < 1000 devices, while Integrations are designed for high throughput, scalability and cluster deployments as part of ThingsBoard server.
  - Gateway recompilation and restart is required to add custom payload decoder while Integration Converter is a JS function that may be modified in real time. 
  
As you can see, both systems are important and applicable in different use cases.

### Feature Roadmap

#### API limits
 
We plan to introduce API to control limitations of messages processed on a tenant / system levels.

#### More integrations and protocols

We plan to provide specific integrations for new platforms and different communication protocols, like gRPC.

#### More data converters

We plan to collect and maintain data converters for most popular devices on the market to simplify integration path even more. 
Please note that you can share your converters with community and send them to us to make part of official ThingsBoard distributive.   

[Contact us](/docs/contact-us/) to suggest missing feature for your use case.

### Next Steps

Explore guides and video tutorials related to specific integrations:

 - [HTTP](/docs/user-guide/integrations/http/)
 - [MQTT](/docs/user-guide/integrations/mqtt/)
 - [AWS IoT](/docs/user-guide/integrations/aws-iot/)
 - [IBM Watson IoT](/docs/user-guide/integrations/ibm-watson-iot/)
 - [The Things Network](/docs/user-guide/integrations/ttn/)
 - [Azure Event Hub](/docs/user-guide/integrations/azure-event-hub/)
 - [Actility ThingPark](/docs/user-guide/integrations/thingpark/)
 - [SigFox](/docs/user-guide/integrations/sigfox/)
 - [OceanConnect](/docs/user-guide/integrations/ocean-connect/)






