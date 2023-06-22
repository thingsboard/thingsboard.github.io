---
layout: docwithnav-mqtt-broker
title: TBMQ architecture
description: TBMQ architecture

---

* TOC
{:toc}

## Introduction

This article elucidates the architectural structure of TBMQ, encompassing analysis of the data flow among diverse components and delineating the underlying architectural decisions.
TBMQ is meticulously engineered to embody the following attributes:

* **scalability**: it constitutes a horizontally scalable platform constructed using cutting-edge open-source technologies.
* **fault-tolerance**: no single point of failure, each broker (node) within the cluster is indistinguishable in terms of functionality.
* **robustness and efficiency**: a solitary server node possesses the capability to accommodate millions of clients and process hundreds of thousands of messages per second.
  Remarkably, TBMQ cluster can handle a staggering volume of [100M clients and 3M messages per second](/docs/mqtt-broker/reference/performance-tests/).
* **durability**: the preservation of data integrity is of paramount importance.
  TBMQ employs a Kafka queue implementation to furnish exceptionally high message durability, ensuring that data is never lost.

#### Architecture diagram

The subsequent diagram illustrates the pivotal constituents of the broker and the route of message transmission.

![image](/images/mqtt-broker/architecture/tbmq-architecture.png)

## Motivation

Within the ThingsBoard company, our extensive expertise and profound understanding of diverse IoT requirements and use cases have 
enabled us to discern two primary scenarios in which our clients develop their solutions. 
The first scenario entails numerous devices generating a substantial volume of messages that are consumed by specific applications, resulting in a fan-in pattern. 
Conversely, the second scenario involves numerous devices subscribing to specific updates or notifications, 
leading to a few incoming requests that necessitate a high volume of outgoing data, known as a fan-out pattern. 
Acknowledging these scenarios, we purposefully designed TBMQ to be exceptionally well-suited for both.

Moreover, our design principles focused on ensuring the broker's reliability, speed, and efficiency while addressing crucial requirements. 
These include the imperative of facilitating rapid message consumption and persistence, guaranteeing low-latency delivery of messages to clients, 
and providing the ability to withstand peak loads from publishing clients, all while ensuring backup storage for offline clients.

Additionally, we prioritized supporting distributed and partitioned processing, allowing for seamless scalability as our operations expand. 
Crucially, we sought to implement a fault-tolerant mechanism for message processing, capable of handling any potential failures that may arise among the participants in the data flow.

Consideration of all these factors led us to make a strategic decision regarding the choice of the underlying system 
that could effectively address our requirements and operate seamlessly within the MQTT layer.

## How does TBMQ work in a nutshell

To ensure the fulfillment of the aforementioned requirements and prevent message loss in the event of client or broker failures,
TBMQ leverages the powerful capabilities of [Kafka](https://kafka.apache.org/) as its underlying infrastructure.

Moreover, Kafka plays a critical role in various stages of the MQTT workflow. Notably, client sessions and subscriptions are stored within dedicated [Kafka topics](#kafka-topics). 
By utilizing these Kafka topics, all broker nodes can readily access the most up-to-date states of client sessions and subscriptions, 
allowing them to maintain local copies for efficient message processing and delivery. 
In the event of a client losing connection to a specific broker node, other nodes seamlessly continue operations based on the latest state. 
Additionally, newly added broker nodes to the cluster acquire this vital information upon their activation.

Client subscriptions hold significant importance within the MQTT publish/subscribe pattern. 
To optimize performance, TBMQ employs the [Trie](#subscriptions-trie) data structure, 
enabling efficient persistence of client subscriptions in memory and facilitating swift access to relevant topic patterns.

Upon a publisher client dispatching a _PUBLISH_ message, it is stored in the initial Kafka topic called **tbmq.msg.all**. 
Once Kafka acknowledges the message's persistence, the broker promptly responds to the publisher with either a _PUBACK_/_PUBREC_ message or no response at all, 
depending on the chosen Quality of Service (QoS) level.

Subsequently, separate threads, functioning as Kafka consumers, retrieve messages from the aforementioned Kafka topic and utilize the 
Subscription Trie data structure to identify the intended recipients. 
Depending on the [client type](/docs/mqtt-broker/user-guide/mqtt-client-type/) (**DEVICE** or **APPLICATION**) and persistence options described below, 
the broker either redirects the message to another specific Kafka topic or directly delivers it to the recipient.

### Non-persistent client

A client is classified as a non-persistent one when the following conditions are met in the _CONNECT_ packet:

For **MQTT v3.x**:
* `clean_session` flag is set to _true_.

For **MQTT v5**:
* `clean_start` flag is set to _true_ and `sessionExpiryInterval` is set to _0_ or not specified.

In the case of non-persistent clients, all messages intended for them are published directly without undergoing additional persistence.
It is important to note that non-persistent clients can only be of type **DEVICE**.

![image](/images/mqtt-broker/architecture/tbmq-non-persistent-dev.png)

### Persistent client

MQTT clients that do not meet the non-persistent conditions mentioned above are categorized as persistent clients. 
Let's delve into the conditions for persistent clients:

For **MQTT v3.x**:
* `clean_session` flag is set to _false_.

For **MQTT v5 clients**:
* `sessionExpiryInterval` is greater than _0_ (regardless of the `clean_start` flag).
* `clean_start` flag is set to _false_ and `sessionExpiryInterval` is set to _0_ or not specified.

### Client type

Drawing upon our extensive experience in the IoT ecosystem and the successful implementation of numerous IoT use cases, we have classified MQTT clients into two distinct categories:

* The **DEVICE** clients primarily engaged in publishing a significant volume of messages while subscribing to a limited number of topics with relatively low message rates.
  These clients are typically associated with IoT devices or sensors that frequently transmit data to TBMQ.

* The **APPLICATION** clients specialize in subscribing to topics with high message rates.
  They often require messages to be persisted when the client is offline with later delivery, ensuring the availability of crucial data.
  APPLICATION clients are commonly utilized for real-time analytics, data processing, or other application-level functionalities.

Consequently, we made a strategic decision to optimize performance by segregating the processing flow for these two types of clients.

#### DEVICE client

![image](/images/mqtt-broker/architecture/tbmq-persistent-dev.png)

For **DEVICE** persistent clients, we employ the **tbmq.msg.persisted** Kafka topic as a means of processing published messages that are extracted from the **tbmq.msg.all** topic. 
Dedicated threads, functioning as Kafka consumers, retrieve these messages and store them in a [PostgreSQL](#postgresql-database) database utilized for persistence storage. 
This approach is particularly suitable for DEVICE clients, as they typically do not require extensive message reception and may not be concerned about message loss during offline periods. 
By leveraging this method, we facilitate the seamless restoration of persisted messages upon reconnection of a DEVICE client, 
while simultaneously ensuring satisfactory performance for scenarios involving a low incoming message rate.

#### APPLICATION client

![image](/images/mqtt-broker/architecture/tbmq-app.png)

For **APPLICATION** persistent clients, we adopt a distinct approach. 
A dedicated Kafka topic is created for each client and every message that is extracted from the **tbmq.msg.all** topic and is intended for a specific APPLICATION is stored in the corresponding Kafka topic. 
Subsequently, a separate thread (Kafka consumer) is assigned to each APPLICATION. These threads retrieve messages from the corresponding Kafka topics and deliver them to the respective clients. 
This approach significantly enhances performance by ensuring efficient message delivery.

By utilizing this method, we can provide a guarantee that no messages are lost, even if a client experiences temporary issues. 
The inherent persistence of messages within the Kafka topics ensures their availability at all times.

It is important to note that APPLICATION clients can only be classified as [persistent](#persistent-client).

For both types of clients, we provide configurable instruments to govern the persistence of messages per client and the duration for which they are retained.
You can refer to the following environment variables to adjust these settings:
* TB_KAFKA_APP_PERSISTED_MSG_TOPIC_PROPERTIES;
* MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_LIMIT;
* MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_TTL.

These options allow fine-tuning the number of messages that can be persisted per client and the time frame for which they are preserved.
For more detailed information, please refer to the configurations provided in the following [documentation](/docs/mqtt-broker/install/config/).

### Kafka Topics

Below is a comprehensive list of Kafka topics used within TBMQ, along with their respective descriptions.

* **tbmq.msg.all** - for all published messages from MQTT clients, regardless of their type, to the broker.
* **tbmq.msg.app. + ${client_id}** - for messages the APPLICATION client should receive based on its subscriptions.
* **tbmq.msg.app.shared. + ${topic_filter}** - for messages related to the APPLICATION shared subscription.
* **tbmq.msg.persisted**  - for messages the DEVICE clients should receive based on their subscriptions.
* **tbmq.msg.retained** - for retained messages.
* **tbmq.client.session**  - for client sessions.
* **tbmq.client.subscriptions**  - for client subscriptions.
* **tbmq.client.session.event.request** - for processing client session events like request session connection,  request session cleanup, notify client disconnected, etc.
* **tbmq.client.session.event.response. + ${service_id}** - for responses to client session events of the previous topic sent to specific broker node where target client is connected.
* **tbmq.client.disconnect. + ${service_id}** - for force client disconnections (by admin request from UI/API or on sessions conflicts).
* **tbmq.msg.downlink.basic. + ${service_id}** - to send messages from one Broker node to another to which the DEVICE subscriber is connected.
* **tbmq.msg.downlink.persisted. + ${service_id}** - to send messages from one Broker node to another to which the DEVICE persistent subscriber is connected.
* **tbmq.sys.app.removed** - for events to process removal of APPLICATION client topic.
* **tbmq.sys.historical.data** - for historical data stats published from each broker in the cluster to calculate the total.

### PostgreSQL database

TBMQ incorporates a [PostgreSQL](https://www.postgresql.org/) database to store various entities such as users, user credentials, MQTT client credentials, and published messages for DEVICES, among others.

It is important to acknowledge that Postgres, being an SQL database, has certain limitations regarding the speed of message persistence, 
particularly in terms of the number of writes per second it can handle. It should be noted that Postgres cannot match the performance capabilities of Kafka in this regard. 
Based on our experience, we have observed limits of approximately 3 - 5k operations per second, depending on the hardware configuration of the Postgres installation.

Considering these limitations, we recommend utilizing APPLICATION clients for use cases that surpass the aforementioned performance thresholds. 
APPLICATION clients, with their dedicated Kafka topics and separate threads for message delivery, 
offer higher performance and scalability for scenarios requiring robust message persistence.

In future releases, we have plans to expand the options for third-party persistence storage for client messages, 
aiming to incorporate more reliable and advanced solutions that can cater to a broader range of requirements.

### Web UI

TBMQ offers a user-friendly and lightweight graphical user interface (GUI) 
that simplifies the administration of the broker in an intuitive and efficient manner. 
This GUI provides several key features to facilitate broker management:

* MQTT Client Credential Management: users can easily manage MQTT client credentials through the GUI, allowing for the creation, modification, and revocation of client credentials as needed.
* Client Session and Subscriptions Control: the GUI enables administrators to monitor and control the state of client sessions, including terminating, and managing active client connections. 
  It also provides functionality to manage client subscriptions, allowing for the addition, removal, and modification of subscriptions.
* Shared Subscription Management: the GUI includes tools for managing shared subscriptions. 
  Administrators can create and manage shared subscription groups, facilitating efficient message distribution to multiple subscribed clients of type APPLICATION.
* Retained Message Management: the GUI allows administrators to manage retained messages, which are messages that are saved by the broker and delivered to new subscribers.

In addition to these administrative features, the GUI provides monitoring dashboards that offer comprehensive statistics and insights into the broker's performance. 
These dashboards provide key metrics and visualizations to facilitate real-time monitoring of essential broker statistics, 
enabling administrators to gain a better understanding of the system's health and performance.

The combination of these features makes the GUI an invaluable tool for managing, configuring, and monitoring TBMQ in a user-friendly and efficient manner.

### Subscriptions Trie

Within TBMQ, all client subscriptions are consumed from a Kafka topic and stored in a Trie data structure in the memory. 
The Trie organizes the topic filters hierarchically, with each node representing a level in the topic filter.

When a _PUBLISH_ message is read from Kafka, the broker needs to identify all clients with relevant subscriptions for the topic name of the published message to ensure they receive the message. 
The Trie data structure enables efficient retrieval of client subscriptions based on the topic name. 
Once the relevant subscriptions are identified, a copy of the message is forwarded to each respective client.

This approach ensures high-performance message processing as it allows for quick and precise determination of the clients that need to receive a specific message. 
However, it is worth noting that this method requires increased memory consumption by the broker due to the storage of the Trie data structure.

For more detailed information on the Trie data structure, you can refer to the provided [link](https://en.wikipedia.org/wiki/Trie).

### Actor system

TBMQ utilizes an Actor System as the underlying mechanism for implementing actors responsible for handling MQTT clients.
The adoption of the Actor model enables efficient and concurrent processing of messages received from clients, thereby ensuring high-performance operation.

The broker employs its own custom implementation of an Actor System, specifically tailored to meet the requirements of TBMQ.
Within this system, two distinct types of actors are present:

* **Client Actors**: for every connected MQTT client, a corresponding Client actor is created.
  These actors are responsible for processing the main message types, such as _CONNECT_, _SUBSCRIBE_, _UNSUBSCRIBE_, _PUBLISH_, and others.
  The Client actors handle the interactions with the MQTT clients and facilitate the execution of the associated message operations.
* **Persisted Device Actors**: in addition to the Client actors, an extra Persisted Device actor is created for all DEVICE clients that are categorized as persistent.
  These actors are specifically designated to manage the persistence-related operations and handle the storage and retrieval of messages for persistent DEVICE clients.

By utilizing the Actor System and employing different types of actors, TBMQ achieves efficient and concurrent processing of messages,
ensuring optimal performance and responsiveness in handling client interactions.

For further insights into the Actor model, you can refer to the provided [link](https://en.wikipedia.org/wiki/Actor_model).

## Standalone vs cluster mode

TBMQ is designed to be horizontally scalable, allowing for the addition of new broker nodes to the cluster automatically. 
All nodes within the cluster are identical and share the overall load, ensuring a balanced distribution of client connections and message processing.

The design of the broker eliminates the need for "master" or "coordinator" processes, as there is no hierarchy or central node responsible for managing the others. 
This decentralized approach removes the presence of a single point of failure, enhancing the system's overall robustness and fault tolerance.

To handle client connection requests, a load balancer of your choice can be employed. 
The load balancer distributes incoming client connections across all available TBMQ nodes, 
evenly distributing the workload and maximizing resource utilization.

In the event that a client loses its connection with a specific broker node (e.g., due to node shutdown, removal, or failure), 
it can easily reconnect to any other healthy node within the cluster. 
This seamless reconnection capability ensures continuous operation and uninterrupted service for connected clients, 
as they can establish connections with any available node in the cluster.

By leveraging horizontal scalability, load balancing, and automatic discovery of new nodes, 
TBMQ provides a highly scalable and resilient architecture for handling MQTT communication in large-scale deployments.

## Programming languages

The back-end of TBMQ is implemented in Java 17. The front-end of ThingsBoard is developed as a SPA using the Angular 11 framework.
