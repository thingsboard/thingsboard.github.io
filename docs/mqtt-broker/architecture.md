---
layout: docwithnav-mqtt-broker
title: ThingsBoard MQTT Broker architecture
description: ThingsBoard MQTT Broker architecture

---

* TOC
{:toc}

![image](/images/coming-soon.jpg)

## How does ThingsBoard MQTT Broker work in a nutshell

ThingsBoard MQTT Broker highly uses Kafka to ensure that no message get lost in case of client or broker failures.

After a _publisher_ client sends a **PUBLISH** message it gets saved into the Kafka topic and after that _publisher_ receives **PUBACK**/**PUBREC** response.
Then the separate thread reads messages from Kafka topic, searches for the recipients and either puts message in either specific or delivers msg to the recepient,
depending on the type of the client (**DEVICE** or **APPLICATION**) and 'clean session' flag.