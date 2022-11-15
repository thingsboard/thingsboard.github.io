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

We designed ThingsBoard MQTT Broker so that both relatively small and highly loaded use cases may work in a reliable, fast and efficient way. Beforehand, we used our 
experience in setting up and maintaining large variety of use cases that run on ThingsBoard platform. 
We wanted to cover some important requirements.

Broker would need to provide high speed of messages consumption and persistence.

It would need to have low-latency delivery of messages to the clients.

It would need to provide the ability to reliably pass the periods of pick loads of publishing clients with the possibility to back up all of those messages for offline clients.

We wanted to support distributed, partitioned processing with the way to easily scale as we go.

The last but not least, we needed to provide the fault-tolerant way of message processing in cases when any participant of the flow could struggle of any type of failures.

All of that brings us to the choice we made on what system could help us solve our needs and work under the hood of the MQTT layer.

## How does ThingsBoard MQTT Broker work in a nutshell

ThingsBoard MQTT Broker highly uses [Kafka](https://kafka.apache.org/) to ensure that all our requirements are covered and 
no message get lost in case of client or broker failures.

Additionally, other parts of MQTT workflow are also highly dependent of Kafka. For instance, client sessions, client subscriptions and retain messages are stored
in the respectful Kafka topics. This helps all the broker nodes to easily retrieve the latest states of all the client sessions and maintain a copy of them in theirs 
local memory. As soon as client loses the connection to the specific broker node, the other once are ready to continue from the freshest state. Adding to that, all the newly 
added broker nodes to the cluster are able to get that information once they are up and running. 

Client subscriptions are one of the key components in the MQTT pub/sub pattern. In order to maximize the performance, ThingsBoard MQTT broker implements the Trie data structure
for efficient persistence of client subscriptions in the memory to provide the fast access to the needed topic patterns. See more details below in this document.

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

### PostgreSQL database

...

### Subscriptions Trie

See more details via the following [link](https://en.wikipedia.org/wiki/Trie) 

### Actor system

Actor system is

## Standalone vs cluster mode

Broker is designed to be horizontally scalable and supports automatic discovery of new ThingsBoard MQTT brokers (nodes). 
All broker nodes inside cluster are identical and are sharing the load. 
Since all nodes are identical there is no “master” or “coordinator” processes and there is no single point of failure. 
The load balancer of your choice may forward connection requests from clients to all ThingsBoard MQTT broker nodes.
As soon as the client loses the connection with specific broker node (e.g. node was stopped/removed/crashed) it can reconnect to any other healthy node.

## Programming languages

ThingsBoard MQTT broker back-end is written in Java. ThingsBoard front-end is an SPA based on Angular 11 framework.