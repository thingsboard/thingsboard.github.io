* TOC
{:toc}

## Overview

In ThingsBoard, **device attributes** are key-value pairs associated with devices. They are used to store configuration settings, metadata, or other relevant information. 

Subscribing to device attributes enables clients to receive updates when these attributes change. The subscription methods vary based on the attribute type and the communication protocol used.

Attributes are categorized into three types:
* **Server-side Attributes:** Set and used exclusively by the server. Can be configured via User Interface (UI) or REST API.
* **Shared Attributes:** Devices can subscribe to updates to receive real-time notifications when the server modifies them. Can be configured via UI or REST API.
* **Client-side Attributes:** Set by the device and stored on the server. Can only be read via UI or REST API.

For more detailed information and examples, please refer to the ThingsBoard documentation on [Working with IoT Device Attributes](/docs/{{peDocsPrefix}}user-guide/attributes/){: target="_blank"}.

## Subscribe to Attribute Updates on Edge from the Cloud Server

This following instruction explain real-time, bidirectional communication between your device and the ThingsBoard Cloud via ThingsBoard Edge. 

#### Prerequisites 

To configure ThingsBoard Edge for seamless communication with ThingsBoard Cloud, you require:
* MQTT Broker: In this guide we are using HTTP protocol. HTTP or CoAP are the alternatives.
* ThingsBoard Edge: Installed and running.
* Registered Devices with access tokens

#### Step 
Implementation based on netty MQTT framework with following most of the MQTT protocol design documents, but TB edge and server brokers are not providing regular publish/subscribe models.

you can subscribe to the following topic: "v1/devices/me/attributes".

Here is the steps that you should do in your test case:

Subscribe to topic 'v1/devices/me/attributes' from the device.

#### Step

Publish any timeseries or attribute message from the device.

#### Step
Send this message to the cloud. Here is a sample how to configure edge root rule chain to publish message to the cloud: https://thingsboard.io/docs/edge/use-cases/data-filtering-traffic-reduce/#configure-edge-rule-engine-to-push-filtered-data-to-the-cloud

#### Step
On the cloud modify root rule chain to send back some attributes update message to the edge. You should use 'push to edge' node for this

#### Step 
Once the attribute update message will arrive to the edge you should see this message on the device.
