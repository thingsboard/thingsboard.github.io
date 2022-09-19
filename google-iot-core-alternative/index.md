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
Our platform is much more than a [scalable](/docs/reference/msa/) service to accept and route telemetry. 
ThingsBoard brings full IoT application enablement capabilities. See the feature comparison table below: 

| **Features**                                          | **Google IoT Core** | **ThingsBoard PE** |
|-------------------------------------------------------|------------------|--------------------|
| Asset/Device Management and Data Collection           |           \+     |             \+     |
| MQTT, HTTP transports                                 |           \+     |             \+     |
| Pub/Sub Integration                                   |           \+     |             \+     |
| Commands to devices                                   |           \+     |             \+     |
| Scalability                                           |           \+     |             \+     |
| User management and RBAC                              |            \-    |             \+     |
| Real-time, customizable dashboards                   |            \-    |             \+     |
| White-labeled branded IoT solutions                  |            \-    |             \+     |
| FOTA updates support                                  |            \-    |             \+     |
| Additional LWM2M and SNMP transports                  |            \-    |             \+     |
| NB-IoT, SigFox, LoRaWAN, CoAP and other integrations |            \-    |             \+     |

Learn more about ThingsBoard features [here](/docs/pe/getting-started-guides/what-is-thingsboard/).

#### Key concepts

See mapping of the key IoT Core concepts to ThingsBoard features documentation below:

##### Device

ThingsBoard supports the provisioning and management of [devices](https://thingsboard.io/docs/pe/user-guide/ui/devices/) similar to Google IoT Core. 
However, IoT application is not only about devices. ThingsBoard support other [entities and relations](/docs/pe/user-guide/entities-and-relations/) between them.
The relations model enables advanced use cases and business logic. For example, you may configure relations between assets, devices, customers, etc. 

##### Telemetry

Telemetry is the event data sent from the device to the cloud. For example, measurements about the environment.
ThingsBoard allows you to collect data from devices similar to IoT Core. 
ThingsBoard also enables data processing (including validation, alerting, etc.) and storage inside the platform. 
See [Rule Engine](https://thingsboard.io/docs/pe/user-guide/rule-engine-2-0/re-getting-started/) for more details.
You may also forward the data to external systems (e.g. PubSub) and reuse your existing data processing flow.

##### Device state

ThingsBoard monitors device [connectivity status](https://thingsboard.io/docs/pe/user-guide/device-connectivity-status/) 
and allows devices to upload their state via the client [attributes](https://thingsboard.io/docs/pe/user-guide/attributes/#client-side-attributes) feature.  

##### Device configuration

ThingsBoard capabilities of device configuration as similar to Google IoT Core. 
See docs about device [attributes](https://thingsboard.io/docs/pe/user-guide/attributes/).
Experienced users may notice a few important differences:

 * ThingsBoard allows to push each attribute(configuration) update separately.
 * One may change configuration attributes via Dashboard, Admin UI, REST API call, or script.
 * Attributes are sent to the device via JSON or protobuf format. 

##### Device registry and device manager

ThingsBoard provides flexible interfaces for registering, monitoring, and configuring devices: 
Dashboards, Admin Web UI, REST API, [CSV upload](https://thingsboard.io/docs/pe/user-guide/bulk-provisioning/), and automatic [provisioning](https://thingsboard.io/docs/pe/user-guide/device-provisioning/). 
The platform gives you much more flexibility on how to add, group and control devices. 
You can register devices under different tenants or assign devices to different customers. 
End users are able to [claim devices](https://thingsboard.io/docs/pe/user-guide/claiming-devices/) during the [self-registration](https://thingsboard.io/docs/pe/user-guide/self-registration/) process. 
ThingsBoard has all the required built-in instruments to enable complex use cases.

##### Publishing over MQTT and HTTP

A central IoT Core point is an MQTT broker that allows data exchange between devices and the cloud. 
ThingsBoard also acts like an MQTT broker, but there are a few differences. 
With ThingsBoard, you are not limited by static topic name patterns and can define any wildcard topic filters for your needs.
The platform accepts JSON or protobuf payloads.
ThingsBoard suppors [access tokens](https://thingsboard.io/docs/pe/user-guide/access-token/), 
[basic MQTT credentials](https://thingsboard.io/docs/pe/user-guide/basic-mqtt/) or 
[X.509 certificates](https://thingsboard.io/docs/user-guide/certificates/).

In addition to MQTT and HTTP support, devices can natively communicate with the platform using other protocols like CoAP, LwM2M, and SNMP. 
You may also use our [IoT Gateway](https://thingsboard.io/docs/iot-gateway/what-is-iot-gateway/) to integrate devices connected to legacy and third-party systems via BLE, CAN, Modbus, OPC-UA, BACnet, ODBC, etc.

ThingsBoard also has built-in integrations with external systems like SigFox, LoRaWAN, NB IoT, etc. 
You may find a list of all available integrations [here](https://thingsboard.io/docs/user-guide/integrations/).

##### Send commands to and from devices

You may send commands to and from devices with the ThingsBoard [RPC](https://thingsboard.io/docs/user-guide/rpc/) feature. 
The commands can be persisted or not, one-way or two-way, and you can configure retry and failure policies for different command types.
Commands may be triggered by the user via the dashboard, via REST API, or based on events received by the platform.  
