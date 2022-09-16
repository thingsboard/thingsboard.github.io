---
layout: common
title: ThingsBoard is a Google IoT Core alternative
description: ThingsBoard Products
notitle: "true"
---


## ThingsBoard as a Google IoT Core alternative

Google Cloud will shut down the IoT Core service in August 2023. 
You might be wondering where and how to migrate. 
ThingsBoard is an excellent alternative to Google IoT Cloud. 
Launched in 2016 as an open source project, ThingsBoard has grown to a mature platform with 1000+ customers worldwide.

ThingsBoard, Inc. provides managed services, training, support, and software development services around the platform. 
We may also host and manage a private platform instance in your existing Google Cloud infrastructure. 


#### Features comparison

Google IoT Core acts as an MQTT Broker and provides Device Registry and Pub/Sub integration. 
ThingsBoard provides an alternative implementation to Google IoT Core features with similar and, in some cases, identical APIs. 
Our platform is much more than a scalable service to accept and route telemetry. 
ThingsBoard brings full IoT application enablement capabilities. See the feature comparison table below: 

| **Features**                                          | **Google IoT Core** | **ThingsBoard PE** |
|-------------------------------------------------------|------------------|--------------------|
| Asset/Device Management and Data Collection           |           \+     |             \+     |
| MQTT, HTTP transports                                 |           \+     |             \+     |
| Pub/Sub Integration                                   |           \+     |             \+     |
| Commands to devices                                   |           \+     |             \+     |
| End\-user, real\-time, customizable dashboards        |            \-    |             \+     |
| White\-labeled branded IoT solutions                  |            \-    |             \+     |
| FOTA updates support                                  |            \-    |             \+     |
| Additional LWM2M and SNMP transports                  |            \-    |             \+     |
| NB\-IoT, SigFox, LoRaWAN, CoAP and other integrations |            \-    |             \+     |

Learn more about ThingsBoard features [here](/docs/pe/getting-started-guides/what-is-thingsboard/).

#### Key concepts

See mapping of the key IoT Core concepts to ThingsBoard features documentation below:

##### Device

ThingsBoard supports provisioning and management of [Devices](https://thingsboard.io/docs/pe/user-guide/ui/devices/) similar to Google IoT Core. 
However, IoT application is not only about devices.      