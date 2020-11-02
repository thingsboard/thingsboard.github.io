---
layout: docwithnav
title: MyDevice1 integration guide
description: ThingsBoard IoT Platform sample for usage of MyDevice1 
hidetoc: "true"
---

* TOC
{:toc}

## Introduction

This guide contains step-by-step instructions on how to connect your device to the ThingsBoard Community Edition through the next connectivity way([ThingsBoard IoT Gateway](docs/iot-gateway/what-is-iot-gateway/), [ThingsBoard Device API](/docs/api/), [Third-Party Application](https://application_link_authority:port/path)) In particular, this sample application will allow you to monitor data from devices of 'My Company' with the usage of the ThingsBoard. 

### MyDevice 1
[MyDevice 1](https://my_device_link) called **"MyDevice1"** is a device which provides with the data about the ... 

You can refer for this link for the device configuration guides [MyDevice 1 docs](https://my_device_link/docs)

Once you complete this sample/tutorial, you will see your **"MyDevice1"** data on a dashboard like the following on the right.

## Prerequisites

### Hardware  

 - 1x [MyDevice1](https://my_device_link)
 - 1x Ethernet cable
 - ...

### Software  

 - [MyDevice1 configuration interface](https://my_device_link/docs).
 - The ThingsBoard Community Edition (the guide is based on the to the ThingsBoard 2.5.4 version) installed locally, though, you can use the [Live Demo](/docs/user-guide/live-demo/) or [Installation Guide](/docs/user-guide/install/installation-options/) to install ThingsBoard.
 - ...
 
## Connection diagram

The following picture summarizes the connectivity diagram for this simple project:

![image](/images/samples/my_company_device_guides/integration_guide_2/connectivity_diagram.png)

## ThingsBoard configuration
...  
This step contains instructions that are necessary to connect your device to ThingsBoard.
...  
Login for the ThingsBoard UI.

### Device
...  
How to connect the device description.  
...  
### Rule Chains
...  
Rule chains configuration details.  
...  
Rule chain used in this topic you can upload via [this link](/docs/samples/my_company_device_guides/resources/rule_chains.json)  
### Dashboard and Data visualization
...  
Dashboard configuration part.  
...  

You can download the resulted dashboard file (.json) using this [link](/docs/samples/my_company_device_guides/resources/dashboard.json) and you can import it on the ThingsBoard side of yours using via the import option.   
Use import/export [instructions](/docs/user-guide/ui/dashboards/#iot-dashboard-importexport) to import the dashboard to your ThingsBoard instance.


## See also

Browse other [samples](/docs/samples) or explore guides related to main ThingsBoard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.

{% include templates/feedback.md %}

{% include socials.html %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}