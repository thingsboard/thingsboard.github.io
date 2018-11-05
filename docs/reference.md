---
layout: docwithnav
title: ThingsBoard architecture overview
description: ThingsBoard architecture

---

ThingsBoard is designed to be:

* **scalable**: horizontally scalable platform, build using leading open-source technologies.
* **fault-tolerant**: no single-point-of-failure, every node in the cluster is identical.
* **robust and efficient**: single server node can handle tens or even hundreds thousands of devices depending on use-case. 
ThingsBoard cluster can handle millions of devices.
* **customizable**: adding new functionality is easy with customizable widgets and rule engine nodes.
* **durable**: never lose your data.

## 10 000 foot view

TODO: put a simple, very high-level diagram here.

## On-premise vs cloud deployments

ThingsBoard supports both on-premise and cloud deployments. 
With more then 2000 ThingsBoard servers running all over the world, ThingsBoard is running in production on AWS, Azure, GCE and private data centers.
It is possible to launch ThingsBoard in the private network with no internet access at all.

## Standalone vs cluster mode

Platform is designed to be horizontally scalable and supports automatic discovery of new ThingsBoard servers (nodes). 
All ThingsBoard nodes inside cluster are identical and are sharing the load. 
Since all nodes are identical there is no "master" or "coordinator" processes and there is no single point of failure. 
The load balancer of your choice may forward request from devices, applications and users to all ThingsBoard nodes.

## Monolithic vs microservices architecture

Starting ThingsBoard v2.2, platform was refactored to support microservices architecture, but also to be able to run the platform as a monolithic application in a standalone mode.
Supporting both options requires some additional programming efforts, however, is critical due to back-ward compatibility with variety of existing installations.

ThingsBoard was always designed to run as a distributed application, but was also originally designed as a monolith application. 
This means that there were single java process running the app on each server node. 
Those processes were communicating using [gRPC](https://grpc.io/) and service discovery was done using [Zookeeper](https://zookeeper.apache.org/). 
This model works well for many installations and require minimum support efforts, knowledge and hardware resources to do the setup. 

However, there are also some challenges that are solved with microservices architecture and applicable for more complex deployments and usage scenarios. 
For example, running a multi-tenant deployments where one need more granular isolation to protect from:

* unpredictable rule chain misconfiguration;
* unpredictable load spikes;
* single devices opening 1000s of concurrent connections due to firmware bugs;
* and many other cases.
 
Please follow the links listed below to learn more and choose the right architecture and deployment option:

* [**monolithic**](/docs/reference/monolithic): Learn more about deployment, configuring and running ThingsBoard platform in a monolythic mode.  
* [**microservices**](/docs/reference/monolithic): Learn more about deployment, configuring and running ThingsBoard platform in a microservices mode.

## SQL vs NoSQL vs Hybrid database approach

ThingsBard supports three database options:

* **SQL** -   

## Programming languages and third-party

ThingsBoard back-end is written in Java, but we also have some micro-services based on Node.js. ThingsBoard front-end is a SPA based on Angular JS framework. 
See [monolithic](/docs/reference/monolithic) and [microservices](/docs/reference/monolithic) pages for more details about third-party components used.  