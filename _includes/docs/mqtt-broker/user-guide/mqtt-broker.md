* TOC
{:toc}


[MQTT](/docs/{{docsPrefix}}mqtt-broker/user-guide/mqtt-protocol/) is a lightweight, publish/subscribe messaging protocol widely used in the Internet of Things (IoT) and other distributed systems. 
It is specifically designed to work efficiently in environments with limited resources, low bandwidth, high latency, or unreliable network connections.

At the heart of every MQTT architecture lies the <a href="/products/mqtt-broker/" target="_blank" style="color: inherit; text-decoration: none;">MQTT broker</a> — 
the central server that manages all communication between clients. 
The broker is responsible for receiving messages from publishers, determining which subscribers are interested in those messages, and reliably delivering them according to the protocol’s rules. 
In this way, the broker acts as the backbone of the MQTT system, ensuring seamless, secure, and efficient message exchange.

![image](/images/mqtt-broker/user-guide/mqtt/mqtt_broker.svg)

### MQTT Clients

An <a href="/products/mqtt-broker/" target="_blank" style="color: inherit; text-decoration: none;">MQTT client</a> is any device, application, or service that connects to the broker to send or receive messages.
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

An <a href="/products/mqtt-broker/" target="_blank" style="color: inherit; text-decoration: none;">MQTT topic</a> is a structured string used by the broker to **route messages** between publishers and subscribers. 
Topics define the subject or channel of communication and are the backbone of the publish/subscribe model.

Key characteristics:

* **Hierarchical structure**: Topics are organized in levels separated by slashes (`/`).
  Example: `home/livingroom/temperature`
* **Message flow**:

   * **Publishers** send messages to a specific topic.
   * **Subscribers** register their interest in one or more topics and receive all messages published to them.

#### Wildcards in Topics

MQTT supports special characters called <a href="/products/mqtt-broker/" target="_blank" style="color: inherit; text-decoration: none;">MQTT wildcards</a> to simplify subscription patterns:

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
* **Quality of Service (QoS)**: Guaranteeing message delivery according to the selected <a href="/products/mqtt-broker/" target="_blank" style="color: inherit; text-decoration: none;">MQTT QoS</a> level — *At most once (QoS 0)*, *At least once (QoS 1)*, or *Exactly once (QoS 2)*.

In short, the broker serves as the **backbone of the MQTT network**, ensuring that communication between clients is scalable, secure, and dependable.

### How It Works

The operation of an MQTT system can be broken down into distinct stages — from the moment a client connects to the broker, through authentication and authorization, to message publishing and distribution.

#### Client Connection

* A client (device, app, or service) initiates a connection to the broker using the **CONNECT** packet.
* This packet typically includes:

    * Client identifier (`clientId`)
    * Protocol version (e.g., MQTT 3.1.1 or MQTT 5.0)
    * Optional username and password
    * Clean session flag or session expiry interval (for session persistence)
    * Last Will and Testament (LWT) message, if defined

#### Authentication & Authorization

* The broker validates the connection request by checking credentials (username/password, certificates for SSL/TLS, or token-based mechanisms).
* Once authenticated, the broker enforces **authorization policies**, determining which topics the client is allowed to **publish** to and **subscribe** from.
* If the connection is accepted, the broker replies with a **CONNACK** packet confirming session parameters. If not, the connection is refused.

#### Subscribing to Topics

* To receive messages, the client sends a **SUBSCRIBE** packet specifying one or more topics (with optional wildcards) and the desired **QoS level**.
* The broker registers the client’s subscription and replies with a **SUBACK** packet that confirms which QoS levels were granted.

#### Publishing Messages

* When a client wants to send data, it sends a **PUBLISH** packet to the broker.
* The packet contains:

    * The topic name
    * The message payload
    * The QoS level for delivery reliability
    * Retain flag (if the message should be stored as the last known good value for that topic)
* Depending on QoS, the broker and client may exchange acknowledgment packets (**PUBACK**, **PUBREC**, **PUBREL**, **PUBCOMP**) to guarantee delivery.

#### Message Distribution

* The broker receives the published message and looks up all active subscriptions that match the topic.
* For each matching subscriber, the broker forwards the message:

    * Respecting the **QoS level** agreed upon with each subscriber.
    * Delivering retained messages where applicable.
    * Storing messages for offline subscribers if persistent sessions are enabled.

#### Receiving Messages

* Subscribers receive the message in a **PUBLISH** packet from the broker.
* Based on QoS, the subscriber may need to send back acknowledgment packets to confirm receipt.
* Once processed, subscribers can act on the message — logging it, storing it, visualizing it, or triggering actions.

#### Disconnecting

* When a client no longer needs the connection, it sends a **DISCONNECT** packet.
* If the client disconnects unexpectedly, the broker triggers the **Last Will and Testament (LWT)** message (if configured) and may keep the session alive based on the persistence settings.

This end-to-end lifecycle — from connection and authentication to message delivery and disconnection — 
makes MQTT a lightweight but **robust messaging protocol** for everything from simple IoT gadgets to massive distributed systems.

### Key Features of an MQTT Broker

An MQTT broker combines **protocol-level features** of MQTT with **system-level capabilities** to ensure efficient, secure, and reliable messaging.

#### MQTT Protocol Features Supported by the Broker

* **Quality of Service (QoS)**: Guarantees message delivery at different levels — *at most once (0)*, *at least once (1)*, or *exactly once (2)*.
* **Keep Alive mechanism**: Ensures the connection between client and broker stays active by requiring periodic communication, helping detect broken connections quickly.
* **Last Will and Testament (LWT)**: Sends a predefined message if a client disconnects unexpectedly, helping detect failures automatically.
* **Retained messages**: Stores the last message on a topic so new subscribers receive the most recent state instantly.
* **Topic-based routing**: Efficiently matches published messages to subscribers using hierarchical topics and wildcards.
* **Session persistence**: Maintains subscriptions and undelivered messages for clients that reconnect, allowing reliable communication even after temporary disconnections.
* **Shared subscriptions** (MQTT 5.0): Distributes messages among a group of subscribers to balance load.

These are some of the most important MQTT features supported by brokers. 
Depending on the version of the protocol (MQTT 3.1.1 or 5.0) and the specific broker implementation, many more features may be available to enhance reliability, efficiency, and security.

> TBMQ supports the full range of MQTT 3.x and MQTT 5.0 protocol features.

#### Broker Capabilities

* **Scalability**: Handles thousands or millions of simultaneous client connections and messages with consistent reliability.
* **Performance**: Optimized for low latency and high throughput, even in large distributed systems.
* **Durability**: Ensures that critical messages and session data are stored persistently (e.g., in databases or disk-backed queues), so they survive restarts or crashes.
* **Security**: Provides TLS/SSL encryption, authentication, and fine-grained access control to ensure safe communication.
* **High availability & clustering**: Supports clustering, load balancing, and fault tolerance for production-grade deployments.
* **Integration**: Connects seamlessly with external systems such as databases, Kafka, or cloud services for data processing and analytics.

> TBMQ provides all of these capabilities out of the box: horizontal scalability to millions of clients, high throughput with low latency, persistence and durability powered by Redis/Kafka, 
> built-in TLS/SSL security, clustering with fault tolerance, and integration with external systems like Kafka, other MQTT brokers, and HTTP-based services.

### Types of MQTT Brokers

MQTT brokers come in different forms depending on how they are deployed, licensed, and used. The main categories are:

1. **Open-source brokers**

    * Free to use and highly customizable, with active developer communities.
    * Suitable for prototyping, self-hosted deployments, and integration into larger systems.

2. **Commercial brokers**

    * Provide enterprise-grade features such as clustering, monitoring dashboards, advanced security, and SLA-backed support.
    * Ideal for organizations that need guaranteed reliability, high availability, and professional support.

3. **Cloud-based brokers (MQTT-as-a-Service)**

    * Fully managed services where the provider handles deployment, scaling, maintenance, and uptime.
    * Great for rapid adoption and use cases where infrastructure management should be outsourced.

4. **Embedded brokers**

    * Extremely lightweight brokers that run directly on edge devices, gateways, or inside applications.
    * Useful for local processing, offline-first scenarios, or edge computing environments where low latency is critical.

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

> <a href="/pricing/?section=tbmq-options" target="_blank" style="color: inherit; text-decoration: none;">TBMQ</a> is built to meet all these criteria — 
> it offers enterprise-level scalability, clustering, persistence, strong security, and deep integration options while remaining easy to operate and cost-efficient. 
> This makes it a strong choice for both open-source adopters and enterprises looking for a production-ready MQTT platform.

### Final Words

The MQTT broker is the backbone of any MQTT-based system, enabling efficient and reliable communication between distributed devices and services. 
It plays a critical role in diverse domains such as IoT ecosystems, smart homes, industrial automation, connected vehicles, and large-scale data infrastructures.

By offloading responsibilities like message routing, delivery guarantees, and connection management to the broker, client devices remain simple, lightweight, and resource-efficient. 
This not only reduces device complexity but also improves scalability, security, and overall system reliability — making the MQTT broker a cornerstone of modern connected applications.
