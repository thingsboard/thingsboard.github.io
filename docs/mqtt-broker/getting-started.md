---
layout: docwithnav-mqtt-broker
title: Getting started with ThingsBoard MQTT Broker
description: ThingsBoard MQTT Broker - broker for real Use Cases

---

* TOC
{:toc}

## Introduction

ThingsBoard MQTT Broker highly uses Kafka to ensure that no message get lost in case of client or broker failures.

Based on our experience in the IoT ecosystem and implementation of quite many IoT use cases, the MQTT clients can be divided into 2 categories:

- clients that _publish_ a lot of messages, but _subscribe_ to a few topics with low message rates (we'll call these clients **DEVICES**);
- clients that _subscribe_ to topics with high message rates and with the requirement to persist messages when the client is offline (we'll call these clients **APPLICATIONS**).

Respectively we decided to maximize performance by separating processing flow for those two types of clients.

### Non-persistent clients

If the MQTT client connects to the broker with `clean_session` flag as `true` for **MQTT v3.x** clients or `clean_start` flag as `true` and `sessionExpiryInterval` as `0(or empty)`
for **MQTT v5** clients we consider it to be a non-persistent client and therefore all messages are published to such clients directly without being persisted.
Such clients can only be of type **DEVICE**.

### Persistent clients

MQTT clients for which the above non-persistent conditions are not matched are considered persistent clients, i.e. if `clean_session` flag is set to `false`
for **MQTT v3.x** clients or if `sessionExpiryInterval` is greater than `0` (regardless of the `clean_start` flag) or if `clean_start` flag is set to `false` 
plus `sessionExpiryInterval` is `0(or empty)` for **MQTT v5 clients**.

For both types of clients we provide [instruments](/docs/mqtt-broker/persistence) to regulate how many messages can be persisted per client and for what period of time.

#### Devices

For **DEVICE** clients we are using PostgreSQL database as persistence storage for messages
because such clients don't usually need to receive large amounts of messages or even don't care if messages got lost when the client is offline.
This approach provides a convenient way to restore persisted messages when **DEVICE** is reconnected and at the same time it has a decent performance
for a small incoming message rate.

#### Applications

For **APPLICATION** clients we use a different approach - for each client the Kafka topic is created and every message that should be sent to specific **APPLICATION** is first of all stored in the Kafka topic.
Afterward, the separate thread reads messages from this topic and delivers them to the client.
This way we can guaranty that at any point in time none of the messages gets lost even if there's some issue with a client at the moment.

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