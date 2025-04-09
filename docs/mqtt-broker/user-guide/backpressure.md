---
layout: docwithnav-mqtt-broker
title: Backpressure
description: TBMQ Backpressure guide

---

* TOC
{:toc}


In high-throughput messaging systems like TBMQ, backpressure handling is critical to ensure stability and prevent out-of-memory (OOM) errors under high load. 
TBMQ already includes mechanisms to efficiently handle **inbound backpressure** — when publishers send messages faster than the broker can process them. 
In this document, we focus on **outbound backpressure**: when the broker sends messages to subscribers.

TBMQ uses Netty as the backbone for its MQTT communication, handling all low-level networking and I/O operations. 
While Netty provides high performance and scalability, it also requires careful control of outbound message flow, especially when dealing with slow subscribers.

If a subscriber cannot keep up, the broker’s outbound channel buffer may become overwhelmed. 
Without backpressure control, this can lead to uncontrolled memory growth and eventually cause the broker to run out of memory. 
To address this, TBMQ introduces a backpressure-aware delivery mechanism that detects when a Netty channel becomes non-writable and temporarily pauses message delivery. 
Delivery resumes automatically once the channel becomes writable again. 
This ensures efficient memory usage and stable operation even under heavy load.


## Netty Channel Writability Monitoring

TBMQ uses **Netty** as the underlying network framework, which provides built-in support for monitoring the **writability** (`channelWritabilityChanged` event) of each channel. 
This allows TBMQ to detect when a subscriber’s connection becomes overwhelmed with outbound data and apply backpressure by pausing further writes to that channel.

Netty determines writability based on **write buffer watermarks** — a pair of thresholds:

- **High Watermark**: If the outbound buffer size exceeds this threshold, the channel is marked as **non-writable**. TBMQ will stop sending messages to that client until the buffer drains.
- **Low Watermark**: When the buffer size drops below this value, the channel becomes **writable** again, and TBMQ resumes message delivery.

These thresholds are configurable via environment variables:

- `NETTY_WRITE_BUFFER_LOW_WATER_MARK` – defines the low watermark in bytes (default: `32768`, i.e. 32 KB)
- `NETTY_WRITE_BUFFER_HIGH_WATER_MARK` – defines the high watermark in bytes (default: `65536`, i.e. 64 KB)

These values are applied during Netty server bootstrap using the `WRITE_BUFFER_WATER_MARK` channel option.

By leveraging this mechanism, TBMQ ensures that no client connection can consume excessive memory due to unchecked message delivery. Instead, delivery is paused and resumed dynamically based on channel health, preserving broker stability under load.

## Handling Persistent and Non-Persistent Clients

TBMQ distinguishes between persistent and non-persistent clients to manage backpressure appropriately:

- **Persistent Clients**: Messages destined for persistent clients are stored in external systems during periods of backpressure:

    - **Application Clients**: Messages are stored in Kafka, ensuring durability and eventual delivery once the client is ready to receive them.

    - **Device Clients**: Messages are stored in Redis, providing a temporary holding area until the device client can process them.

- **Non-Persistent Clients**: Messages for non-persistent clients are discarded when the channel is non-writable, aligning with the expected behavior for such clients where message durability is not guaranteed.



## Handling Non-Persistent and Persistent Clients

TBMQ differentiates backpressure behavior based on whether the subscriber client is **persistent** or **non-persistent**, ensuring efficient use of memory and storage resources.

### Non-Persistent Clients

For non-persistent clients, TBMQ does **not store messages** if the channel becomes non-writable. Instead, when backpressure is detected:

- The broker **skips** delivery of messages to that client.
- These dropped messages are **not retained or retried**, which aligns with MQTT expectations for non-persistent sessions.
- A global dropped message counter is maintained to track how many messages were skipped due to backpressure. This metric provides visibility into system behavior under load and helps identify bottlenecks.

> Monitoring Dropped Messages
> To maintain visibility into system performance, TBMQ includes metrics to count dropped messages when delivery to non-persistent subscribers is skipped due to backpressure.
> This monitoring allows for proactive system tuning and resource allocation to mitigate potential issues.

This approach avoids memory buildup for short-lived or unreliable clients that are not expected to maintain state.

### Persistent Clients

Persistent clients have guaranteed message delivery, so skipping messages is not acceptable. TBMQ ensures durability even under backpressure:

- For **device clients**, messages are stored in **Redis** before delivery. If the channel becomes non-writable, message sending is paused. Once writable, TBMQ resumes delivery by pulling pending messages from Redis.
- For **application clients**, messages are stored in **Kafka**. While the Kafka consumer continues polling, TBMQ will skip delivery to non-writable channels and resume delivery when they become writable again.

To avoid message loss:
- Redis has a **per-client queue size limit** (e.g., 10,000 messages). If this limit is reached before the client becomes writable again, older messages may be dropped.
- For Kafka, proper offset handling or **consumer pausing** can be used to avoid skipping messages for slow subscribers.

This distinction allows TBMQ to maintain a balance between reliability for persistent clients and performance for non-persistent ones.




### Persistent Clients

Persistent clients have guaranteed message delivery, so skipping messages is not acceptable. TBMQ ensures durability even under backpressure by using persistent storage for message queuing and controlling delivery based on channel writability.

- For **device clients**, messages are stored in **Redis** before delivery. If the channel becomes non-writable, message sending is paused. Once the channel becomes writable again, TBMQ resumes delivery by reading pending messages from Redis.

    - Redis has a **per-client message queue limit** (e.g., 10,000 messages). If this limit is exceeded before the client becomes writable, older messages may be dropped.
    - This limit is configurable via an environment variable, for example:  
      `TB_PERSISTENT_SESSIONS_MSG_QUEUE_MAX_MESSAGES_PER_CLIENT`
    - Additionally, each message stored in Redis has a **time-to-live (TTL)** to ensure stale messages are eventually cleaned up. The TTL is configurable via another environment variable (e.g., `TB_PERSISTENT_SESSIONS_MSG_TTL_MS`).

- For **application clients**, messages are stored in **Kafka**. If the channel to the client becomes non-writable, TBMQ temporarily **pauses the Kafka consumer** for that client to avoid polling and buffering unnecessary messages. Once the channel becomes writable, the consumer is resumed and message delivery continues.

    - Kafka's **retention policy** ensures that even when consumers are paused, messages remain available for a defined period. By default, the topic used for persisted messages has a generous retention configuration:
      ```
      retention.ms=604800000 (7 days)
      retention.bytes=1048576000 (1 GB)
      segment.bytes=26214400 (25 MB)
      replication.factor=1
      ```
      These settings can be customized via the following environment variable:
      ```
      TB_KAFKA_APP_PERSISTED_MSG_TOPIC_PROPERTIES
      ```

This mechanism ensures that persistent clients can reliably receive messages even under backpressure, without overloading the broker or losing data.





## Shared Subscriptions and Backpressure Handling



TBMQ also applies backpressure handling logic in the context of [shared subscriptions](/docs/mqtt-broker/user-guide/shared-subscriptions/), ensuring reliable and efficient message delivery across all subscription types. 
A shared subscription group may contain one or more subscribers, and messages are distributed among them according to MQTT 5.0 rules. 
When backpressure is detected, the broker adjusts delivery based on the type and persistence level of the shared group.

### 1. Non-Persistent Shared Subscription Group

- If a subscriber in the group becomes non-writable, TBMQ **skips it** and attempts to deliver the message to another writable subscriber in the group.
- If **all subscribers in the group are non-writable**, the message is **dropped** entirely (not queued or retained).
- This behavior matches the expectation for non-persistent clients, where message loss is acceptable under overload conditions.

If a subscriber in the group becomes non-writable, TBMQ skips it and attempts to deliver the message to another writable subscriber in the group. 
If all subscribers in the group are non-writable, the message is dropped entirely and not queued or retained. 
This behavior matches the expectation for non-persistent clients, where message loss is acceptable under overload conditions.

### 2. Persistent Device Shared Subscription Group

- If a subscriber is non-writable, it is **skipped**, and the message is routed to another **writable subscriber** in the same group.
- If **none of the subscribers are writable**, the message is **saved to Redis**, using a per-group queue associated with the shared subscription key.
- Redis ensures that once any subscriber in the group becomes writable again, delivery resumes from the stored messages.
- Queue size and TTL are controlled via the same configuration as for individual persistent device clients.

If a subscriber is non-writable, it is skipped, and the message is routed to another writable subscriber in the same group. 
If none of the subscribers are writable, the message is saved to Redis, using a per-group queue associated with the shared subscription key. 
Redis ensures that once any subscriber in the group becomes writable again, delivery resumes from the stored messages. 
Queue size and TTL are controlled via the same configuration as for individual persistent device clients.

### 3. Persistent Application Shared Subscription Group

- When a subscriber in the group becomes non-writable, TBMQ **removes it** from the Kafka consumer group associated with the shared subscription.
- Other writable subscribers continue **polling messages** from Kafka as usual.
- If **all subscribers in the group become non-writable**, the consumer group becomes temporarily **empty**, and no messages are polled.
- Kafka retains undelivered messages according to the topic’s configured **retention policy**, ensuring that once any subscriber becomes writable and rejoins the group, message delivery resumes.

When a subscriber in the group becomes non-writable, TBMQ removes it from the Kafka consumer group associated with the shared subscription. 
Other writable subscribers continue polling messages from Kafka as usual. 
If all subscribers in the group become non-writable, the consumer group becomes temporarily empty, and no messages are polled. 
Kafka retains undelivered messages according to the topic’s configured retention policy, 
ensuring that once any subscriber becomes writable and rejoins the group, message delivery resumes.



This approach ensures that TBMQ maintains performance, reliability, and resource efficiency even when handling shared subscriptions under pressure. Each strategy is tailored to the persistence level of the clients in the group.


## Conclusion

The implementation of backpressure handling in TBMQ enhances the broker's resilience and efficiency in managing varying client consumption speeds. 
By dynamically monitoring channel writability, controlling message delivery, and integrating with existing flow control mechanisms, 
TBMQ ensures optimal resource utilization and reliable message delivery, even under high-load conditions.
