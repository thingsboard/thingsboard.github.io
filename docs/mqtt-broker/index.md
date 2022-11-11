---
layout: docwithnav-mqtt-broker
title: ThingsBoard MQTT Broker
description: ThingsBoard MQTT Broker - broker for real Use Cases
---

**ThingsBoard MQTT Broker** is an open source MQTT message broker that was specifically designed to work fast and reliable in the most common scenarios.
It's written using Java and uses Kafka as internal tool for persisting and processing messages.


#### ThingsBoard MQTT Broker Features

- Clean & persistent sessions
- QoS 0
- QoS 1
- QoS 2
- Retained Messages
- Last Will and Testament
- Keep Alive & Client Take-Over
- TCP / SSL connection support
- Username and password authentication support
- SSL certificate authentication support
- Wildcard subscriptions
- MQTT Ordered Topic guarantees for QoS 1 and 2
- Session & message expiry intervals
- Multi-server node cluster (Cluster)
- Access control (ACL) based on client ID, username or SSL certificate
- Clients status and subscriptions REST query support
- Rate limits of incoming messages per client
- MQTT 5 [*](https://github.com/thingsboard/thingsboard-mqtt-broker#thingsboard-mqtt-broker)


#### Architecture

ThingsBoard MQTT Broker is designed to be:

* **scalable**: the horizontally scalable platform, built using leading open-source technologies.
* **fault-tolerant**: no single-point-of-failure, every node in the cluster is identical.
* **robust and efficient**: a single server node can handle tens of thousands of clients and tens of thousands of messages per second, depending on the use-case.
* **durable**: never lose your data.

See [**ThingsBoard MQTT Broker Architecture**](/docs/mqtt-broker/architecture) for more details.
