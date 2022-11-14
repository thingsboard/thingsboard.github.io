---
layout: docwithnav-mqtt-broker
title: ThingsBoard MQTT Broker architecture
description: ThingsBoard MQTT Broker architecture

---

* TOC
{:toc}

## Introduction

This article describes ThingsBoard MQTT broker architecture and consists of a description of data flow between various components and some architecture choices made.
ThingsBoard MQTT broker is designed to be:

* **scalable**: horizontally scalable platform, build using leading open-source technologies.
* **fault-tolerant**: no single-point-of-failure, every node in the cluster is identical.
* **robust and efficient**: single server node can handle tens or even hundreds thousands of clients depending on use case.
  ThingsBoard MQTT broker cluster can handle millions of clients.
* **durable**: never lose your data. ThingsBoard MQTT broker supports Kafka queue implementation to provide extremely high message durability.

#### Architecture diagram

...

## Motivation

We designed ThingsBoard MQTT Broker in a way ...

## How does ThingsBoard MQTT Broker work in a nutshell

ThingsBoard MQTT Broker highly uses [Kafka](https://kafka.apache.org/) to ensure that no message get lost in case of client or broker failures.

After a _publisher_ client sends a **PUBLISH** message it gets saved into the Kafka topic and after that _publisher_ receives **PUBACK**/**PUBREC** response.
Then the separate thread reads messages from Kafka topic, searches for the recipients and either puts message in either specific or delivers msg to the recepient,
depending on the type of the client (**DEVICE** or **APPLICATION**) and 'clean session' flag.

### Non-persistent client

What is this client?

### Persistent client

What is this client?

#### DEVICE client

What is the device client?

#### APPLICATION client

What is the application client?

#### Subscriptions Trie

See more details via the following [link](https://en.wikipedia.org/wiki/Trie) 

## Standalone vs cluster mode

Platform is designed to be horizontally scalable and supports automatic discovery of new ThingsBoard servers (nodes). 
All ThingsBoard nodes inside cluster are identical and are sharing the load. 
Since all nodes are identical there is no “master” or “coordinator” processes and there is no single point of failure. 
The load balancer of your choice may forward request from devices, applications and users to all ThingsBoard nodes.