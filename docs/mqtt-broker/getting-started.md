---
layout: docwithnav-mqtt-broker
title: Getting started with ThingsBoard MQTT Broker
description: ThingsBoard MQTT Broker - broker for real Use Cases

---

* TOC
{:toc}

## Introduction

The goal of this tutorial is to demonstrate the basic usage of the ThingsBoard MQTT Broker. 

You can navigate to the following [document](/docs/mqtt-broker/architecture/) for more details about the broker architecture.

## Installing ThingsBoard MQTT Broker

Detailed instruction on how to install ThingsBoard MQTT Broker on various platforms located here:
* [**Installation options**](/docs/mqtt-broker/install/installation-options) 

## Publishing and Subscribing to Topics

Now, let's try to publish messages and subscribe to topics to review the message flow. In this tutorial we will be using [Mosquitto](https://mosquitto.org/) clients.
Please review respectful links on how to [publish messages](https://mosquitto.org/man/mosquitto_pub-1.html) to the topic 
and [subscribe](https://mosquitto.org/man/mosquitto_sub-1.html) to topics to receive messages.

### Subscribe to topic

Use the following command to subscribe to the **sensors/temperature** topic and receive messages from the ThingsBoard MQTT Broker.

```bash
mosquitto_sub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t sensors/temperature -q 1
```
{: .copy-code}
**Note**, replace the $THINGSBOARD_MQTT_BROKER_HOST_NAME with the correct public IP address or DNS name of the broker.

### Publish message

Use the following command to publish message for the topic **sensors/temperature** to the ThingsBoard MQTT Broker.

```bash
mosquitto_pub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t sensors/temperature -m 32 -q 1
```
{: .copy-code}
**Note**, replace the $THINGSBOARD_MQTT_BROKER_HOST_NAME with the correct public IP address or DNS name of the broker.

### Result

You should receive and see the published message for the subscribed client.
![image](/images/mqtt-broker/broker-pub-sub.png)

## Next Steps

{% assign currentGuide = "GettingStartedGuide" %}{% include templates/mqtt-broker-guides-banner.md %}