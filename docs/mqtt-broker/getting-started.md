---
layout: docwithnav-mqtt-broker
title: Getting started with ThingsBoard MQTT Broker
description: ThingsBoard MQTT Broker - broker for real Use Cases

---

* TOC
{:toc}

## Introduction

Here in ThingsBoard we work a lot with IoT devices and we've helped to configure multiple IoT use-cases.
Through our work we saw that usually MQTT clients can be divided into 2 categories:

- clients that _publish_ a lot of messages, but _subscribe_ to a few topics with low message rate (we'll call these clients **DEVICES**)
- clients that _subscribe_ to topics with high message rate and with the requirement to persist messages when client is offline (we'll call these clients **APPLICATIONS**)

Based on these observations we decided to maximize performance by separating processing flow for those two types of clients.

### Non-persistent clients

If MQTT client connects to the broker with `clean_session` flag as `true` we consider it to be a non-persistent client and therefore all messages go to such clients directly without being persisted.

### Devices

For **DEVICE** clients we are using PostgreSQL database as persistence storage for messages (in case client connected with persistent session)
because such clients don't usually need to receive large amounts of messages or even don't care if messages got lost when client is offline.
This approach provides a convenient way to restore persisted messages when **DEVICE** is reconnected and at the same time it has a decent performance for small incoming message rate.

### Applications

For **APPLICATION** clients we use a different approach - for each client the Kafka topic is created and every message that should be sent to specific **APPLICATION** is first of all stored in the Kafka topic.
Afterwards the separate thread reads messages from this topic and delivers them to client.
This way we can guaranty that at any point of the time all messages that none of the messages gets lost even if there's some issue with a client at the moment.


For both types of clients we provide [instruments](/docs/mqtt-broker/persistence) to regulate how many messages can be persisted per client and for how long.

## How does ThingsBoard MQTT Broker work in a nutshell

ThingsBoard MQTT Broker highly uses Kafka to ensure that no message get lost in case of client or broker failures.

After a _publisher_ client sends a **PUBLISH** message it gets saved into the Kafka topic and after that _publisher_ receives **PUBACK**/**PUBREC** response.
Then the separate thread reads messages from Kafka topic, searches for the recipients and either puts message in either specific or delivers msg to the recepient, depending on the type of the client (**DEVICE** or **APPLICATION**) and 'clean session' flag.

## Installing ThingsBoard MQTT Broker

Detailed instruction on how to install ThingsBoard MQTT Broker on various platforms located here:
* [**Installation options**](/docs/mqtt-broker/install/installation-options) 

