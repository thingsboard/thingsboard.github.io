---
layout: docwithnav
title: Remote Integrations
description: Remote Integrations Documentation 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

### Introduction

It is possible to execute any ThingsBoard Integration remotely from main ThingsBoard instance.
This guide contains step-by-step instructions how to launch ThingsBoard integration remotely.
For example, we will launch MQTT integration that connects to the local MQTT Broker and pushes data to 
[cloud.thingsboard.io](https://cloud.thingsboard.io/signup).  

See [deployment options](/docs/user-guide/integrations/#deployment-options) for more general information.

### Prerequisites

We assume you already have a tenant administrator account on your own ThingsBoard PE v2.4.1+ instance or
[cloud.thingsboard.io](https://cloud.thingsboard.io/signup).  

### ThingsBoard configuration steps

#### Step 1. Create default Uplink and Downlink Converters

Let's create dummy uplink and downlink converters and will set them to work in debug mode.
While running in debug mode, those converters will record all incoming events. 
This will help us to tune the converters once we start receiving the data.

![image](/images/user-guide/integrations/remote/default-converters.gif)  

#### Step 2. Create Remote Integration 

Let's create remote integration that will connect to the local broker using port 1883 and subscribe to all topics. 
Notice that we enable "Debug" and "Execute remotely".   

![image](/images/user-guide/integrations/remote/mqtt-integration.gif)

#### Step 3. Save Remote Integration credentials.

Let's copy-paste the integration key and secret from the integration details.

![image](/images/user-guide/integrations/remote/copy-integration-credentials.gif)


### Remote integration installation steps

#### Step 4. Choose your platform and deployment package

One can install ThingsBoard Integration via Docker, Debian or RPM packages and zip archive on Windows.
Please use one of the next steps. 

#### Step 5. Installing using Docker

#### Step 6. Installing to Ubuntu 18.04 using Debian packages
  

### Remote integration troubleshooting

### See Also

Explore guides and video tutorials related to specific integrations:

 - [HTTP](/docs/user-guide/integrations/http/)
 - [MQTT](/docs/user-guide/integrations/mqtt/)
 - [AWS IoT](/docs/user-guide/integrations/aws-iot/)
 - [IBM Watson IoT](/docs/user-guide/integrations/ibm-watson-iot/)
 - [Azure Event Hub](/docs/user-guide/integrations/azure-event-hub/)
 - [Actility ThingPark](/docs/user-guide/integrations/thingpark/)
 - [SigFox](/docs/user-guide/integrations/sigfox/)
 - [OceanConnect](/docs/user-guide/integrations/ocean-connect/)
 - [TheThingsNetwork](/docs/user-guide/integrations/ttn/)
 - [OPC-UA](/docs/user-guide/integrations/opc-ua/)
 - [TCP](/docs/user-guide/integrations/tcp/)
 - [UDP](/docs/user-guide/integrations/udp/)


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}




