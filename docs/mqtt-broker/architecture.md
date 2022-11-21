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
* **fault-tolerant**: no single-point-of-failure, every broker (node) in the cluster is identical.
* **robust and efficient**: single server node can handle tens or even hundreds thousands of clients depending on use case.
  ThingsBoard MQTT broker cluster can handle millions of clients.
* **durable**: never lose your data. ThingsBoard MQTT broker supports Kafka queue implementation to provide extremely high message durability.

#### Architecture diagram

TODO: Architecture diagram will be placed here.

The main parts of the broker nodes are: 
- the heart of the system - MQTT broker.
- Web UI.

## Motivation

We designed ThingsBoard MQTT Broker so that both relatively small and highly loaded use cases may work in a reliable, fast and efficient way. Beforehand, we used our 
experience in setting up and maintaining a large variety of use cases that run on ThingsBoard platform. 
We wanted to cover some important requirements.

Broker would need to provide high speed of messages consumption and persistence.

It would need to have low-latency delivery of messages to the clients.

It would need to provide the ability to reliably pass the periods of pick loads of publishing clients with the possibility to back up all of those messages for offline clients.

We wanted to support distributed, partitioned processing with a way to easily scale as we go.

The last but not least, we needed to provide a fault-tolerant way of message processing in cases when any participant in the flow could struggle with any type of failure.

All of that brings us to the choice we made on what system could help us solve our needs and work under the hood of the MQTT layer.

## How does ThingsBoard MQTT Broker work in a nutshell

ThingsBoard MQTT Broker highly uses [Kafka](https://kafka.apache.org/) to ensure that all our requirements are covered and 
no message gets lost in case of client or broker failures.

Additionally, other parts of MQTT workflow are also highly dependent on Kafka. For instance, client sessions, client subscriptions and retain messages are stored
in the respectful Kafka topics. This helps all the broker nodes to easily retrieve the latest states of all the client sessions and maintain a copy of them in their 
local memory. As soon as the client loses the connection to the specific broker node, the other ones are ready to continue from the freshest state. Adding to that, all the newly 
added broker nodes to the cluster are able to get that information once they are up and running. 

Client subscriptions are one of the key components in the MQTT pub/sub pattern. In order to maximize the performance, ThingsBoard MQTT broker implements the Trie data structure
for efficient persistence of client subscriptions in the memory to provide fast access to the needed topic patterns. See more details below in this document.

After a _publisher_ client sends a **PUBLISH** message, it gets saved into the Kafka topic called _publish_msg_. 
Once Kafka acknowledges that the message is persisted, the broker responds to the _publisher_ with the **PUBACK**/**PUBREC**.
The separate thread(s) (Kafka consumer) reads messages from that Kafka topic and uses [Subscription Trie ](/docs/mqtt-broker/architecture/#subscriptions-trie) to
search for the recipients. Then it either puts the message into another specific Kafka topic or delivers msg to the recipient,
depending on the type of the client (**DEVICE** or **APPLICATION**, see more details below). 

Based on our experience in the IoT ecosystem and implementation of quite many IoT use cases, the MQTT clients can be divided into 2 categories:

- clients that _publish_ a lot of messages, but _subscribe_ to a few topics with low message rates (we'll call these clients **DEVICES**);
- clients that _subscribe_ to topics with high message rates and with the requirement to persist messages when the client is offline (we'll call these clients **APPLICATIONS**).

Respectively we decided to maximize performance by separating the processing flow for those two types of clients.

### Non-persistent client

If the MQTT client connects to the broker with `clean_session` flag as `true` for **MQTT v3.x** clients or `clean_start` flag as `true` and `sessionExpiryInterval` as `0(or empty)`
for **MQTT v5** clients we consider it to be a non-persistent client and therefore all messages are published to such clients directly without being persisted.
Such clients can only be of type **DEVICE**.

### Persistent client

MQTT clients for which the above non-persistent conditions are not matched are considered persistent clients, i.e. if `clean_session` flag is set to `false`
for **MQTT v3.x** clients or if `sessionExpiryInterval` is greater than `0` (regardless of the `clean_start` flag) or if `clean_start` flag is set to `false`
plus `sessionExpiryInterval` is `0(or empty)` for **MQTT v5 clients**.

For both types of clients we provide [instruments](/docs/mqtt-broker/mqtt-options/#device-persistence-options) to regulate how many messages can be persisted per client and for what period of time.

#### DEVICE client

For **DEVICE** clients we are using _device_persisted_msg_ Kafka topic, where published messages are pushed from _publish_msg_ topic.
The separate thread(s) (Kafka consumer) reads those messages and pushes them to PostgreSQL database used as persistence storage
because such clients don't usually need to receive large amounts of messages or even don't care if messages got lost when the client is offline.
This approach provides a convenient way to restore persisted messages when **DEVICE** is reconnected and at the same time it has a decent performance
for a small incoming message rate.

#### APPLICATION client

For **APPLICATION** clients we use a different approach - for each client the Kafka topic is created and every message that should be sent to a specific **APPLICATION** is first of all stored in the Kafka topic.
Afterward, the separate thread reads messages from this topic and delivers them to the client. The mentioned approach increases performance drastically.
This way we can guarantee that at any point in time none of the messages gets lost even if there's some issue with a client at the moment.

### PostgreSQL database

ThingsBoard MQTT Broker uses a database to store entities (users, user credentials, MQTT client credentials, published messages for **DEVICES**, etc.).

It is worth noting, as an SQL database, Postgres has limitations in terms of message persistence speed (i.e. how many writes per second are possible) 
and surely it can not compete with Kafka in that. Take in mind the 3-5k (depending on the hardware where Postgres is installed) 
operations per second as limits based on our experience.
So, we recommend using **APPLICATION** clients for use cases that overcome the mentioned limits.

We plan to extend the list of possible third-parties used as persistence storage for client messages
in the future releases with more reliable and sophisticated solutions.

### Web UI

ThingsBoard MQTT Broker provides a lightweight easy-to-use GUI. It will help to administrate the broker in an intuitive and useful way.
One can manage MQTT client credentials, control the state of client sessions and subscriptions, and even more in future releases.

### Subscriptions Trie

All the client subscriptions are consumed from Kafka topic by each broker node and stored in Trie data structure in the memory.
See more details via the following [link](https://en.wikipedia.org/wiki/Trie).
This leads to high performant messages processing, however, as a drawback, this requires more memory consumption by the broker.
As soon as the _publish_ message is read from Kafka, the broker must identify all the clients that have the correlation subscription for the topic pattern of published message,
and thus must receive that message. Once this is done, a copy of the message is forwarded further to each client. 

### Actor system

Broker uses Actor System under the hood to implement actors for MQTT clients. 
[Actor model](https://en.wikipedia.org/wiki/Actor_model) enables high-performance concurrent processing of messages from clients. 
ThingsBoard MQTT Broker uses its own Actor System implementation (sharpened for our use cases).
Two types of actors exist in the system. 
* **Client actor** is created for every connected MQTT client, and it is responsible for processing
of main message types like _CONNECT_, _SUBSCRIBE_, _UNSUBSCRIBE_, _PUBLISH_, etc. 
* **Persisted Device** actor that is created in addition to the first one for all **DEVICE** clients that are considered as persisted.

## Standalone vs cluster mode

Broker is designed to be horizontally scalable and supports automatic discovery of new ThingsBoard MQTT brokers (nodes). 
All broker nodes inside the cluster are identical and are sharing the load. 
Since all nodes are identical there are no “master” or “coordinator” processes and there is no single point of failure. 
The load balancer of your choice may forward connection requests from clients to all ThingsBoard MQTT broker nodes.
As soon as the client loses the connection with a specific broker node (e.g. node was stopped/removed/crashed) it can reconnect to any other healthy node.

## Programming languages

ThingsBoard MQTT broker back-end is written in Java. ThingsBoard front-end is a SPA based on Angular 11 framework.