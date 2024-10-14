
* TOC
{:toc}

### Introduction to MQTT

MQTT is a lightweight messaging protocol designed for constrained devices and low-bandwidth, high-latency, or unreliable networks. 
It follows the publish/subscribe messaging model, allowing devices to communicate efficiently in environments with limited resources, 
such as IoT (Internet of Things) systems, mobile applications, and embedded systems. 
MQTT is built for simplicity, ensuring minimal overhead and ease of implementation across a wide range of devices, from small sensors to large industrial systems.

#### MQTT protocol format

The MQTT protocol is designed to minimize data transfer overhead. Its messages consist of a fixed header, an optional variable header, and a payload. 
Here's a breakdown of the format:

1. **Fixed Header:**
   - Present in every MQTT message, consisting of a control byte and flags.
   - Indicates the type of message (e.g., CONNECT, PUBLISH, SUBSCRIBE) and specific control information.

2. **Variable Header:**
   - Contains additional information depending on the message type.
   - Examples include packet identifiers or topic names in specific messages.

3. **Payload:**
   - Carries the actual application data or message content.
   - For publish messages, this is the data being transmitted; for subscription messages, it contains the topic filters.

The simple format, with its fixed and variable header components, enables MQTT to keep message sizes small and optimize network use.

#### Comparison with other protocols

When compared to other widely-used messaging and communication protocols, MQTT stands out for its simplicity and focus on low-bandwidth environments. Here is a brief comparison:

- **MQTT vs. HTTP:**
   - **HTTP** is a request/response protocol typically used in web applications. It requires a higher bandwidth and more overhead, making it less suitable for devices with limited resources. HTTP is stateless, meaning each request from a client must include all necessary information, increasing data load.
   - **MQTT** operates on a persistent connection, maintaining a lightweight, stateful session between client and broker. This allows for continuous data exchange with minimal overhead, making it ideal for IoT applications where low power and bandwidth consumption are priorities.

- **MQTT vs. CoAP (Constrained Application Protocol):**
   - **CoAP** is another protocol designed for constrained devices. Like HTTP, it operates over UDP and follows a request/response model, but with a reduced overhead for IoT applications.
   - **MQTT**, by contrast, uses TCP for reliable message delivery and supports the publish/subscribe model, which is better suited for scenarios where devices need to send or receive messages without direct communication between sender and receiver.

- **MQTT vs. AMQP (Advanced Message Queuing Protocol):**
   - **AMQP** is a more feature-rich protocol that supports complex messaging patterns and is commonly used in enterprise messaging systems.
   - While **MQTT** focuses on simplicity and minimizing overhead, **AMQP** offers more control over messaging guarantees (e.g., message queues, routing) at the cost of increased complexity and resource requirements.

In summary, MQTT excels in environments where simplicity, low bandwidth, and power efficiency are critical, 
while other protocols like HTTP, CoAP, and AMQP may be better suited for applications that require richer feature sets, 
more complex communication patterns, or higher network bandwidth.

#### Purpose of the MQTT protocol

The main goal of MQTT is to provide a flexible and efficient way to transfer data between devices, particularly in environments where:
- **Low bandwidth** is a constraint.
- **Power consumption** needs to be minimized.
- **Network reliability** may be inconsistent.

By using a small message footprint and lightweight communication, MQTT allows devices with limited processing power and memory to participate in data exchange. 
It is particularly popular in IoT applications, enabling devices to communicate with each other, cloud platforms, or data processing systems with minimal overhead.

Some common use cases of MQTT include:
- **Smart home automation** (lighting, HVAC, security systems).
- **Wearable devices** (fitness trackers, health monitors).
- **Connected vehicles** (vehicle telemetry, fleet management).
- **Industrial monitoring and control** (factory equipment sensors).

#### Core principles

MQTT operates based on the following key principles:

1. **Publish/Subscribe model:**
    - **Publishers** send messages on specific topics without knowing who the receivers (subscribers) are.
    - **Subscribers** express interest in certain topics and receive only messages that match their subscriptions.
This model decouples message producers and consumers, allowing for more scalable and flexible communication patterns.

2. **Broker-based communication:**
    - The MQTT broker acts as a central intermediary that routes messages between publishers and subscribers.
    - The broker is responsible for managing connections, distributing messages, and ensuring reliable delivery based on the requested Quality of Service (QoS) level.
    - Multiple clients can publish and subscribe to the same topic, with the broker ensuring that messages are delivered to all interested subscribers.

### MQTT architecture

At the core of the MQTT protocol is a simple but powerful architecture that enables scalable and efficient communication between devices. 
The architecture is based on three key components: Clients, Brokers, and Topics, each playing a distinct role in ensuring seamless message delivery and communication.

1. **Client:**
    - In MQTT, a **client** can be any device or system that participates in the communication process. It can either **publish** data or **subscribe** to receive data. Clients are typically constrained devices such as sensors, mobile devices, or embedded systems.
    - **Publisher:** A client that sends or "publishes" messages to a specific **topic**.
    - **Subscriber:** A client that listens to or "subscribes" to topics of interest in order to receive the data being published.
    - Clients do not need to know each other; they only interact with the **broker**. This makes MQTT scalable and efficient, especially when the number of devices grows significantly.

2. **Broker:**
    - The **broker** acts as a central server responsible for routing messages between clients. It ensures that messages published by one client are delivered to all clients subscribed to the relevant topic.
    - The broker also manages client connections, handles message delivery based on the specified **QoS** (Quality of Service), and can persist messages for offline clients.
    - The broker decouples the publisher and subscriber, allowing them to operate independently. This enables a more scalable system where clients don't need direct knowledge of one another.

3. **Topics:**
    - A **topic** is essentially a channel through which data is transmitted. When a publisher sends a message, it does so to a specific topic, and the broker delivers that message to all subscribers of the topic.
    - Topics are arranged in a hierarchical structure, allowing subscribers to listen to specific topics or use wildcards (`+`, `#`) to subscribe to multiple topics at once.
    - Example: A topic might be `/home/livingroom/temperature` where a client can publish temperature data, and any subscribers to this topic will receive that data.

### MQTT message flow

In MQTT, messages are exchanged using the **publish/subscribe** pattern, which decouples message producers (publishers) from consumers (subscribers). This allows for flexible, scalable communication across numerous devices. The key to this flow is the **broker**, which handles routing messages between publishers and subscribers.

1. **How Messages Are Exchanged:**
    - **Publishers** send messages to specific **topics** on the broker, which acts as the central message handler.
    - **Subscribers** express interest in certain topics by subscribing to them. When a message is published to a topic, all clients subscribed to that topic will receive the message via the broker.
    - The system allows multiple publishers and subscribers to operate independently, simplifying communication management and enabling robust, many-to-many communication patterns.

2. **Description of Message Types:**
   MQTT defines several packet types, also known as **Control Packets**, that govern communication between clients and the broker:

#### CONNECT

- **Purpose:** Establishes a connection between the client and the broker.
- **Packet Format:**
    - **Fixed Header:** Includes packet type and flags.
    - **Variable Header:** Contains important connection information such as protocol name, protocol level, clean session flag, and more.
    - **Payload:** Contains client-specific data such as the `clientId`, `username`, `password`, and optionally the Will topic and message.
- **Description:**
    - Sent by the client to request a connection to the broker.
    - Includes authentication details (username, password) and connection options (keep-alive time, clean session).
    - May include the Last Will and Testament (LWT) to notify other clients if the client disconnects unexpectedly.

#### CONNACK

- **Purpose:** Acknowledges a client's connection request.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains a `return code` indicating whether the connection was successful or not.
- **Description:**
    - Sent by the broker in response to a CONNECT packet.
    - Indicates whether the connection was accepted or rejected (e.g., due to authentication failure).

#### PUBLISH

- **Purpose:** Delivers an application message from a publisher to the broker (and eventually to subscribers).
- **Packet Format:**
    - **Fixed Header:** Packet type, DUP flag (for duplicate messages), QoS level, Retain flag.
    - **Variable Header:** Contains the topic name and, in case of QoS levels 1 or 2, the packet identifier.
    - **Payload:** Contains the actual message to be delivered.
- **Description:**
    - The PUBLISH packet is sent by the publisher to the broker and contains the message being sent to the subscribed clients.
    - Includes the QoS level to define how the message is delivered and whether acknowledgments are required.
    - The message can be marked as retained, so future subscribers receive it upon subscription.

#### PUBACK

- **Purpose:** Acknowledges receipt of a PUBLISH packet when QoS 1 is used.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains the packet identifier corresponding to the original PUBLISH packet.
- **Description:**
    - Sent by the subscriber or broker to acknowledge a QoS 1 message received from the publisher.
    - Ensures the message is delivered exactly once when using QoS 1.

#### PUBREC

- **Purpose:** Acknowledges the receipt of a PUBLISH packet when QoS 2 is used.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains the packet identifier of the PUBLISH packet.
- **Description:**
    - The first step in ensuring that a QoS 2 message is delivered exactly once.
    - Sent by the subscriber or broker after receiving a QoS 2 PUBLISH message to begin the handshake process.

#### PUBREL

- **Purpose:** Confirms the receipt of a PUBREC packet in QoS 2 communication.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains the packet identifier of the PUBREC packet.
- **Description:**
    - Sent by the publisher after receiving a PUBREC, indicating that the publisher is ready to complete the message delivery.
    - Part of the handshake in QoS 2 communication.

#### PUBCOMP

- **Purpose:** Acknowledges the completion of a QoS 2 message delivery.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains the packet identifier.
- **Description:**
    - Sent by the subscriber to confirm that a QoS 2 message has been completely processed.
    - This concludes the four-step handshake for QoS 2 delivery.

#### SUBSCRIBE

- **Purpose:** Subscribes a client to one or more topics.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains the packet identifier.
    - **Payload:** Contains a list of topic filters and their associated QoS levels.
- **Description:**
    - Sent by a client to the broker to subscribe to specific topics.
    - Each topic can be associated with a different QoS level, depending on how the client wants to receive messages.

#### SUBACK

- **Purpose:** Acknowledges a SUBSCRIBE packet.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains the packet identifier from the SUBSCRIBE packet.
    - **Payload:** Contains a list of return codes indicating the success or failure of the subscription for each topic.
- **Description:**
    - Sent by the broker to confirm or deny the client's subscription to each requested topic.

#### UNSUBSCRIBE

- **Purpose:** Unsubscribes a client from one or more topics.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains the packet identifier.
    - **Payload:** Contains a list of topics to unsubscribe from.
- **Description:**
    - Sent by a client to the broker to remove its subscription to specific topics.

#### UNSUBACK

- **Purpose:** Acknowledges an UNSUBSCRIBE packet.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains the packet identifier from the UNSUBSCRIBE packet.
- **Description:**
    - Sent by the broker to confirm that the client has been unsubscribed from the specified topics.

#### PINGREQ

- **Purpose:** Sent by the client to check if the broker is still available.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags (this packet does not have a variable header or payload).
- **Description:**
    - Sent periodically by the client if it doesn't have any data to send but needs to maintain the connection with the broker.
    - This is used to ensure the connection is still alive, especially when long periods of inactivity are expected.

#### PINGRESP

- **Purpose:** Acknowledges a PINGREQ packet.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags (this packet does not have a variable header or payload).
- **Description:**
    - Sent by the broker to confirm that it is still connected to the client after receiving a PINGREQ packet.

#### DISCONNECT

- **Purpose:** Sent by the client to cleanly disconnect from the broker and optionally provide a reason for the disconnection.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header** (MQTT 5.0 only): Contains an optional `Reason Code` (e.g., normal disconnection, session expiry) and optional `Session Expiry Interval` or `User Properties`.
- **Description:**
    - The client sends this to indicate it is disconnecting intentionally, allowing the broker to clear the session state if needed.

#### AUTH

- **Purpose:** Used for authentication during an MQTT session, specifically in MQTT 5.0, to continue or complete the authentication process after the initial connection.
- **Packet Format:**
    - **Fixed Header:** Packet type and flags.
    - **Variable Header:** Contains `Auth Method` and `Auth Data`, as well as an optional `Reason Code` and `User Properties`.
    - **Payload:** The content of the `Auth Data`, which depends on the authentication method being used (e.g., SASL mechanisms, OAuth tokens).

- **Description:**
    - The **AUTH** packet is introduced in MQTT 5.0 to support enhanced authentication flows. It allows for complex authentication methods that require multiple exchanges between the client and the broker.
    - After a CONNECT packet, if the broker requires additional authentication steps, it may send an AUTH packet, and the client can respond with another AUTH packet until the authentication process is complete.
    - This mechanism allows for more secure, pluggable authentication mechanisms compared to previous MQTT versions.

### Quality of Service (QoS) levels

MQTT defines three **Quality of Service (QoS)** levels that control message delivery reliability between the client and broker:

- **QoS 0 (At most once):** The message is delivered at most once, without acknowledgment. It’s also known as "fire and forget." There is no guarantee of delivery.
- **QoS 1 (At least once):** The message is guaranteed to be delivered at least once, but it may be delivered multiple times if acknowledgments are lost.
- **QoS 2 (Exactly once):** The message is guaranteed to be delivered exactly once, ensuring no duplicates in delivery through a four-step handshake process.

These levels provide flexibility based on the reliability requirements of the application.

### Session management

Session management in MQTT defines how the broker maintains the state of the client’s connection over time. It impacts message delivery, subscriptions, and other session data.

- **Persistent Session:**
    - The broker stores session information, such as subscriptions and undelivered messages, even when the client disconnects. When the client reconnects, it can resume where it left off, receiving any messages it missed while offline.

- **Clean Session:**
    - With a clean session, all session data (subscriptions, undelivered messages) is cleared when the client disconnects. When the client reconnects, it starts fresh, with no history of its previous session.

#### Reconnecting clients and message redelivery:

- When a client reconnects after a disconnect, the broker can redeliver any missed messages if a persistent session was used.
- If using QoS 1 or 2, the broker ensures that messages are redelivered until they are acknowledged by the client, ensuring message reliability.

This session flexibility allows clients to maintain continuous operation, even with intermittent connectivity.

### MQTT protocol versions

#### Differences between MQTT 3.1.1 and MQTT 5.0:

- **MQTT 3.1.1:** This version is widely adopted and provides core functionalities like the publish/subscribe model, QoS levels, and simple session management. It is known for its lightweight nature and ease of implementation.
- **MQTT 5.0:** Introduced more advanced features to enhance scalability, flexibility, and control, building on the foundation of MQTT 3.1.1.

#### New features in MQTT 5.0:

1. **Reason Codes:**
   Provides detailed feedback for both successful operations and errors, enabling better diagnostics and error handling between clients and brokers.

2. **User Properties:**
   Allows clients and brokers to attach custom key-value pairs to MQTT packets, giving more flexibility for transmitting metadata or application-specific information.

3. **Session Expiry:**
   Clients can specify how long their session data (such as subscriptions or undelivered messages) should be retained by the broker after disconnecting, offering better control over session persistence.

4. **Message Expiry Interval:**
   Messages can have an expiration time, allowing brokers to discard undelivered messages that exceed this timeframe, preventing outdated messages from being delivered.

5. **Shared Subscriptions:**
   Allows multiple clients to share the load of receiving messages from the same topic, which is useful for load balancing in high-traffic environments.

6. **Topic Alias:**
   Reduces message size by allowing clients to replace frequently used topic names with aliases, optimizing performance in bandwidth-constrained networks.

7. **Enhanced Authentication (AUTH Packet):**
   Adds support for more complex, multi-step authentication mechanisms, making it easier to integrate advanced security protocols like OAuth.

8. **Flow Control:**
   Introduces the ability for clients to control the rate at which messages are sent to them, preventing message flooding and managing traffic more effectively.

9. **Request-Response Pattern:**
   Facilitates asynchronous communication by enabling clients to send a request and receive a response on a different topic, improving interaction between devices.

10. **Payload Format Indicator and Content Type:**
    Enables clients to indicate the format of the payload (e.g., JSON, XML) and specify the content type, which enhances the interpretation and parsing of message data.

11. **Subscription Options:**
    Provides clients with additional controls over how they receive messages, allowing for more customized subscription behavior.
    Clients can enable features like **Retain As Published** (to receive messages with the original retain flag), **No Local** (to avoid receiving messages they themselves published), **Retain Handling** (to control whether retained messages should be delivered immediately upon subscribing), and **Maximum QoS** (to limit the QoS level for received messages).

12. **Subscription Identifier:**
    Allows the broker to assign a unique identifier to each subscription, which can then be included in the PUBLISH packet to help clients track which subscription a message corresponds to.

These features collectively enhance MQTT 5.0’s scalability, performance, security, and flexibility for complex use cases, especially in IoT and enterprise systems.

### Best practices

1. **Optimizing Performance:**
    - **Reducing latency:** To minimize latency, ensure that the broker and clients are running on optimized hardware and network infrastructure. Keep messages small and use appropriate **QoS levels** to balance reliability with performance. Avoid excessive use of retained messages and carefully manage topic hierarchies to prevent message flooding.
    - **Managing QoS:** Use the right **Quality of Service (QoS)** level based on the application’s needs. For most scenarios, **QoS 0** (fire-and-forget) provides the lowest latency but offers no guarantee of delivery. **QoS 1** and **QoS 2** provide delivery guarantees but introduce additional overhead, so use them only when necessary.

2. **Security Considerations:**
    - **Use of TLS/SSL:** Always use TLS/SSL to secure communication between clients and broker. This ensures that messages are encrypted, protecting against data interception and unauthorized access.
    - **Authentication:** Implement robust authentication mechanisms, such as username/password, certificates, or enhanced authentication methods like SCRAM in MQTT 5.0. This prevents unauthorized devices from connecting to the broker.
    - **Access Control:** Enforce access control at the broker level to limit what topics clients can publish to or subscribe to, reducing the risk of unauthorized data access.

3. **Scalability:**
    - **Horizontally scaling brokers:** To support large-scale systems with many clients, scale brokers horizontally by clustering them or using load balancers. Distribute client connections across multiple brokers to handle high traffic efficiently. Shared subscriptions can also help distribute the load across clients.
    - **Monitoring and metrics:** Use monitoring tools to track broker performance and health, and capture important metrics such as connection counts, message throughput, and system resource usage. This helps in identifying bottlenecks and planning for scaling.

