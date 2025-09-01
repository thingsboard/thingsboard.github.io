---
layout: docwithnav-mqtt-broker
title: MQTT broker
description: What is MQTT broker? Learn how the MQTT protocol works, what MQTT server does, and how clients use topics, and connections for reliable IoT communication

---

* TOC
{:toc}


[MQTT](/docs/mqtt-broker/user-guide/mqtt-protocol/) is a lightweight, publish/subscribe messaging protocol widely used in the Internet of Things (IoT) and other distributed systems. 
It is specifically designed to work efficiently in environments with limited resources, low bandwidth, high latency, or unreliable network connections.

At the heart of every MQTT architecture lies the <a href="/products/mqtt-broker/" target="_blank" style="color: inherit; text-decoration: none;">MQTT broker</a> — 
the central server that manages all communication between clients. 
The broker is responsible for receiving messages from publishers, determining which subscribers are interested in those messages, and reliably delivering them according to the protocol’s rules. 
In this way, the broker acts as the backbone of the MQTT system, ensuring seamless, secure, and efficient message exchange.

![image](/images/mqtt-broker/user-guide/mqtt/mqtt_broker.svg)

### MQTT Clients

An **MQTT client** is any device, application, or service that connects to the broker to send or receive messages.
Clients can range from small, resource-constrained IoT sensors to complex enterprise applications.
Common examples include:

* **IoT devices** that publish sensor data, such as temperature, humidity, or GPS location.
* **Mobile or web applications** that subscribe to updates from connected devices.
* **Back-end services** that collect, process, or visualize incoming data streams.

Each client can take on one or more roles:

* **Publisher**: Sends (publishes) messages to a defined topic.
* **Subscriber**: Receives (subscribes to) messages from one or more topics.
* **Hybrid**: Acts as both a publisher and a subscriber, depending on the use case.

By separating publishers and subscribers through the broker, MQTT clients remain loosely coupled, making systems more flexible, scalable, and easier to maintain.

### MQTT Topics

An **MQTT topic** is a structured string used by the broker to **route messages** between publishers and subscribers. 
Topics define the subject or channel of communication and are the backbone of the publish/subscribe model.

Key characteristics:

* **Hierarchical structure**: Topics are organized in levels separated by slashes (`/`).
  Example: `home/livingroom/temperature`
* **Message flow**:

   * **Publishers** send messages to a specific topic.
   * **Subscribers** register their interest in one or more topics and receive all messages published to them.

#### Wildcards in Topics

MQTT supports special characters called **wildcards** to simplify subscription patterns:

* `+` (single-level wildcard) — matches exactly one level in the topic hierarchy.
  Example: `home/+/temperature` → matches `home/livingroom/temperature` and `home/kitchen/temperature`.
* `#` (multi-level wildcard) — matches all remaining levels in the topic hierarchy.
  Example: `home/#` → matches `home/livingroom/temperature`, `home/kitchen/humidity`, and anything else under `home/`.

This flexible topic system allows clients to filter messages with precision, making MQTT highly efficient for large-scale, event-driven communication.

### Role of the MQTT Broker

The **MQTT broker** is the central component that enables communication in an MQTT system. 
Clients never communicate directly with each other — all messages flow through the broker. 
By acting as the trusted intermediary, the broker guarantees that messages are delivered securely, reliably, and according to the rules of the protocol.

Key responsibilities of the broker include:

* **Managing client connections**: Establishing, monitoring, and maintaining sessions with MQTT clients.
* **Authentication and authorization**: Validating client identities and enforcing access control policies to ensure only authorized clients can publish or subscribe.
* **Message routing**: Receiving published messages and efficiently distributing them to all clients subscribed to the relevant topics.
* **Session and state management**: Tracking client subscriptions and, if configured, storing undelivered messages for clients that are offline.
* **Quality of Service (QoS)**: Guaranteeing message delivery according to the selected QoS level — *At most once (QoS 0)*, *At least once (QoS 1)*, or *Exactly once (QoS 2)*.

In short, the broker serves as the **backbone of the MQTT network**, ensuring that communication between clients is scalable, secure, and dependable.

### How It Works

The publish/subscribe model in MQTT is simple yet powerful. The broker acts as the central hub that ensures messages get from publishers to subscribers without them needing to know about each other.

1. **A client publishes a message** on a specific topic (e.g., `sensors/temperature`).
2. The **broker receives the message** and checks which clients are subscribed to that topic.
3. The broker **distributes the message** to all matching subscribers, applying Quality of Service (QoS) levels, retained message rules, and session handling as needed.
4. **Subscribers receive the message** and can process it — for example, storing it in a database, displaying it on a dashboard, or triggering an alert.

This decoupled communication model allows publishers and subscribers to operate independently, making MQTT highly scalable and resilient for distributed systems.

### Key Features of an MQTT Broker

An MQTT broker provides several capabilities that make it well-suited for IoT, real-time data exchange, and distributed applications:

* **Scalability**: Designed to manage thousands — or even millions — of concurrent client connections while maintaining reliable message delivery.
* **Lightweight communication**: Uses minimal bandwidth and processing power, making it ideal for constrained devices and networks with limited resources.
* **Last Will and Testament (LWT)**: Automatically sends a predefined message to subscribers if a client disconnects unexpectedly, enabling failure detection and recovery.
* **Retained messages**: Stores the most recent message on a topic so that new subscribers immediately receive the latest state without waiting for the next publish.
* **Security**: Provides mechanisms such as TLS/SSL encryption, authentication, and fine-grained access control to ensure secure and trusted communication.

Together, these features enable the broker to act as a **reliable backbone** for messaging in IoT and distributed systems.

### Types of MQTT Brokers

MQTT brokers come in different forms depending on how they are deployed, licensed, and used. The main categories are:

1. **Open-source brokers**

    * Free to use and highly customizable, with active developer communities.
    * Suitable for prototyping, self-hosted deployments, and integration into larger systems.
    * **Examples:** Mosquitto, EMQX, VerneMQ, ThingsBoard MQTT Broker (TBMQ).

2. **Commercial brokers**

    * Provide enterprise-grade features such as clustering, monitoring dashboards, advanced security, and SLA-backed support.
    * Ideal for organizations that need guaranteed reliability, high availability, and professional support.
    * **Examples:** HiveMQ, EMQX Enterprise, ThingsBoard MQTT Broker Pro.

3. **Cloud-based brokers (MQTT-as-a-Service)**

    * Fully managed services where the provider handles deployment, scaling, maintenance, and uptime.
    * Great for rapid adoption and use cases where infrastructure management should be outsourced.
    * **Examples:** AWS IoT Core, Azure IoT Hub, GCP IoT Core (now retired, with alternative services available).

4. **Embedded brokers**

    * Extremely lightweight brokers that run directly on edge devices, gateways, or inside applications.
    * Useful for local processing, offline-first scenarios, or edge computing environments where low latency is critical.
    * **Examples:** MQTTnet (in-process .NET broker), NanoMQ.

### How to Choose the Right MQTT Broker

Selecting the right MQTT broker depends on your project’s scale, requirements, and long-term goals. The following criteria can help guide the decision:

* **Scalability**: Ensure the broker can handle your projected number of client connections and message throughput, with room to grow as your system expands.
* **High availability & clustering**: Look for features like clustering, replication, and load balancing to guarantee uptime and fault tolerance in production environments.
* **Performance**: Evaluate latency, throughput, and resource efficiency under real-world load conditions to ensure the broker meets your responsiveness needs.
* **Security**: Check for support of TLS/SSL encryption, authentication, authorization, and fine-grained access controls to protect data and devices.
* **Persistence**: Consider whether the broker provides durable message storage — including retained messages, offline queues, or integration with external databases.
* **Integration capabilities**: Verify compatibility with your ecosystem, such as Kafka, SQL/NoSQL databases, monitoring tools, or cloud platforms.
* **Community & support**: An active open-source community or available enterprise support can make a big difference in troubleshooting and long-term maintenance.
* **Cost**: Balance your budget against needs — choosing between open-source (free, DIY), commercial (license + support), or cloud (subscription-based, managed) options.

By weighing these factors, you can select a broker that not only meets your current needs but also scales with your system as it evolves.


### Why It Matters

The MQTT broker is the **backbone of any MQTT-based system**, enabling efficient and reliable communication between distributed devices and services. 
It plays a critical role in diverse domains such as IoT ecosystems, smart homes, industrial automation, connected vehicles, and large-scale data infrastructures.

By offloading responsibilities like message routing, delivery guarantees, and connection management to the broker, client devices remain simple, lightweight, and resource-efficient. 
This not only reduces device complexity but also improves scalability, security, and overall system reliability — making the MQTT broker a cornerstone of modern connected applications.
