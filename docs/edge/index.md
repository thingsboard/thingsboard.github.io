---
layout: docwithnav
title: ThingsBoard Edge
description: Edge computing solution on the ThingsBoard platform
---

* TOC
{:toc}

The [**ThingsBoard Edge**](/products/edge/) is a ThingsBoard's software product for edge gateways. 
It allows to bring edge computing, data collection and management to the edge, while seamlessly synchronizing with the cloud. 

## Key benefits
 - **Local deployment on site.** The ability to operate with local devices without internet connection to cloud
 - **Traffic filtering.** Filter data from the devices on the edge and push to cloud only subset of the data
 - **Local alarms.** React instantly to cricital situations on site without internet connection to cloud
 - **Visualization.** Monitor local events/timeseries data with a real-time dashboard
 - **Batch update.** Update thousands of edge configurations in a single click
 - **Local storage.** Store data from the devices on the edge without internet connection to the cloud and push to the cloud updates once connection restored

![image](/images/edge/edge-in-thingsboard.png) 

## Edge architecture

- **Robust and efficient.** Single edge can handle tens or even hundreds thousands of devices depending on the [use-case](/docs/edge/use-cases) and deployed hardware
- **Scalable.** Spread your computation and data analysis on thousands of edges
- **Customizable.** Adding new functionality is easy with customizable widgets, rule engine and plugin system
- **Fault-tolerant.** All messages and events are collected in the persistence layer and will be delivered to cloud

![image](/images/edge/architecture.png) 
 
## Video Tutorial

&nbsp; 
  
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/CDt-B5_JiIs" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Installation and connection with ThingsBoard

The ThingsBoard Edge 1.0 release requires installation as distinct service and can be connected to:
 * Open source [**ThingsBoard Community Edition**](/docs/user-guide/install/installation-options/)
 * [**ThingsBoard Professional Edition**](/docs/user-guide/install/pe/installation-options/)

In the next release multiple ThingsBoard Edge components will be built in and managed by a 
single ThingsBoard CE/PE installation.<br>

Detailed instructions on **how to install ThingsBoard Edge** on various platforms:
* [**Ubuntu**](/docs/edge/install/deb-installation)
* [**CentOS/RHEL**](/docs/edge/install/rhel)
* [**Windows**](/docs/edge/install/iwindows)
* [**Docker (Windows)**](/docs/edge/install/docker-windows)
* [**Docker (Linux or Mac OS)**](/docs/edge/install/docker)

## Next Steps with ThingsBoard Edge
* [**Use cases**](/docs/edge/use-cases)
* [**How it works**](/docs/edge/how-edge-works)
* [**How to connect device**](/docs/edge/how-connect-device)
* [**Performance test results**](/docs/edge/performance)
* [**Security**](/docs/edge/security)
* [**Roadmap**](/docs/edge/roadmap)