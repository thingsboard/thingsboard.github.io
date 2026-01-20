* TOC
{:toc}

In high-throughput messaging systems like TBMQ, [backpressure](https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7) 
handling is essential to ensure stability, maintain performance, and prevent out-of-memory (OOM) errors under heavy load. 
Backpressure can occur in two directions: **inbound**, when data is flowing into the broker from publishers, and **outbound**, when the broker delivers data to subscribers. 
TBMQ is designed to effectively handle both.

TBMQ uses Netty as the backbone for its MQTT communication, handling all low-level networking and I/O operations. 
While Netty provides high performance and scalability, it also requires careful control of inbound and outbound message flow.

## Inbound Backpressure

TBMQ is architected to handle virtually unlimited load from publishers. 
Incoming messages are not stored in memory indefinitely — instead, they are immediately persisted to **Kafka**, which acts as the backbone for further processing and routing. 
This design ensures that even under extreme publisher throughput, memory usage remains stable and predictable.

To support growing workloads, TBMQ can be **horizontally scaled** by deploying multiple broker instances, distributing the load and increasing throughput capacity. 
However, in cases where users prefer not to scale horizontally or avoid investing heavily in infrastructure or advanced configuration tuning, 
TBMQ offers additional mechanisms to manage incoming traffic effectively.

These include TCP-level backpressure, controlled via Netty's socket receive buffer, and application-level rate limiting, which allows enforcing both per-client and cluster-wide message rate policies. 
Together, these options provide flexible, cost-efficient ways to protect the broker from overload and ensure stable performance under varying traffic conditions.

### TCP-Level Backpressure

One of the key mechanisms is TCP-level backpressure, enabled through the Netty socket receive buffer. This buffer can be configured using the `so_receive_buffer` parameter:

```yaml
# Socket receive buffer size for Netty in KB.
# If the buffer limit is reached, TCP will trigger backpressure and notify the sender to slow down.
# If set to 0 (default), the system's default buffer size will be used.
so_receive_buffer: "${NETTY_SO_RECEIVE_BUFFER:0}"
```

When the receive buffer is filled and not being drained fast enough (e.g., due to high load or slow downstream processing), TCP will signal the remote sender to apply backpressure.
This allows the broker to slow down inbound traffic naturally without immediately dropping connections or overloading memory.

> In most cases, it is recommended to leave this value at 0, which lets the operating system apply an optimized default. 
> Only consider tuning this parameter in low-latency or high-throughput scenarios after profiling, or when you want tighter control over memory usage and backpressure behavior.

### Rate limiting

While not a reactive backpressure mechanism, rate limiting in TBMQ serves as an additional layer of protection by proactively controlling the volume of incoming messages. 
It complements true backpressure mechanisms by enforcing traffic constraints before the system becomes overloaded. 
TBMQ supports both cluster-wide rate limits (to control total incoming traffic) and per-client rate limits (to prevent individual publishers from overwhelming the broker). 
These settings allow operators to define message rate policies that help maintain system stability, fairness across clients, and protect against spikes in traffic.

```yaml
rate-limits:
  total:
    # Enable/disable total incoming and outgoing messages rate limits for the broker (per whole cluster)
    enabled: "${MQTT_TOTAL_RATE_LIMITS_ENABLED:false}"
    # Limit the total message rate across the cluster (e.g., 1000 messages per second, 50000 per minute)
    config: "${MQTT_TOTAL_RATE_LIMITS_CONFIG:1000:1,50000:60}"

  incoming-publish:
    # Enable/disable per-client publish rate limits
    enabled: "${MQTT_INCOMING_RATE_LIMITS_ENABLED:false}"
    # Limit how many messages each client can send over time (e.g., 10 messages per second, 300 per minute)
    client-config: "${MQTT_INCOMING_RATE_LIMITS_CLIENT_CONFIG:10:1,300:60}"
```

Together, TCP backpressure and configurable rate limits make TBMQ highly resilient and capable of self-regulating traffic before any internal processing bottlenecks or memory pressure occur.

## Outbound Backpressure

If a subscriber cannot keep up, the broker’s outbound channel buffer may become overwhelmed.
Without backpressure control, this can lead to uncontrolled memory growth and eventually cause the broker to run out of memory.
To address this, TBMQ introduces a backpressure-aware delivery mechanism that detects when a Netty channel becomes non-writable and temporarily pauses message delivery.
Delivery resumes automatically once the channel becomes writable again.
This ensures efficient memory usage and stable operation even under heavy load.

### Netty Channel Writability Monitoring

TBMQ uses Netty as the underlying network framework, which provides built-in support for monitoring the **writability** (`channelWritabilityChanged` event) of each channel. 
This allows TBMQ to detect when a subscriber’s connection becomes overwhelmed with outbound data and apply backpressure by pausing further writes to that channel.

Netty determines writability based on **write buffer watermarks** — a pair of thresholds:

- **High Watermark**: If the outbound buffer size exceeds this threshold, the channel is marked as **non-writable**. TBMQ will stop sending messages to that client until the buffer drains.
- **Low Watermark**: When the buffer size drops below this value, the channel becomes **writable** again, and TBMQ resumes message delivery.

These thresholds are configurable via environment variables:

- `NETTY_WRITE_BUFFER_LOW_WATER_MARK` – defines the low watermark in bytes (default: `32768`, i.e. 32 KB)
- `NETTY_WRITE_BUFFER_HIGH_WATER_MARK` – defines the high watermark in bytes (default: `65536`, i.e. 64 KB)

These values are applied during Netty server bootstrap using the `WRITE_BUFFER_WATER_MARK` channel option.

By leveraging this mechanism, TBMQ ensures that no client connection can consume excessive memory due to unchecked message delivery. 
Instead, delivery is paused and resumed dynamically based on channel health, preserving broker stability under load.

### Handling Non-Persistent and Persistent Clients

TBMQ differentiates backpressure behavior based on whether the subscriber client is **persistent** or **non-persistent**, ensuring efficient use of memory and storage resources.

#### Non-Persistent Clients

For non-persistent clients, TBMQ does **not store messages** if the channel becomes non-writable. Instead, when backpressure is detected:

- The broker **skips** delivery of messages to that client.
- These dropped messages are not retained or retried, which aligns with MQTT expectations for non-persistent sessions.
- A global dropped message counter is maintained to track how many messages were skipped due to backpressure. This metric provides visibility into system behavior under load and helps identify bottlenecks.

This approach avoids memory buildup for short-lived or unreliable clients that are not expected to maintain state.

#### Persistent Clients

Persistent clients have guaranteed message delivery, so skipping messages is not acceptable. 
TBMQ ensures durability even under backpressure by using persistent storage for message queuing and controlling delivery based on channel writability.

For **Device clients**, messages are stored in **Redis** before delivery. If the channel becomes non-writable, message sending is paused. 
Once the channel becomes writable again, TBMQ resumes delivery by reading pending messages from Redis.

- Redis has a **per-client message queue limit** (e.g., 10,000 messages). If this limit is exceeded before the client becomes writable, older messages may be dropped.
- This limit is configurable via an environment variable `MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_LIMIT`.
- Additionally, each message stored in Redis has a **time-to-live (TTL)** to ensure stale messages are eventually cleaned up. 
The TTL is configurable via the environment variable `MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_TTL`.
For MQTT 5.0 clients that specify a `message expiry interval`, TBMQ respects the client-defined value and uses it in place of the configured default.

For **Application clients**, messages are stored in **Kafka**. If the channel to the client becomes non-writable, 
TBMQ temporarily **pauses the Kafka consumer** for that client to avoid polling and buffering unnecessary messages. 
Once the channel becomes writable, the consumer is resumed and message delivery continues.

- Kafka's **retention policy** ensures that even when consumers are paused, messages remain available for a defined period:
```
retention.ms=604800000 (7 days)
retention.bytes=1048576000 (1 GB)
```
- These settings can be customized via the following environment variable `TB_KAFKA_APP_PERSISTED_MSG_TOPIC_PROPERTIES`.

This mechanism ensures that persistent clients can reliably receive messages even under backpressure, without overloading the broker or losing data.

### Shared Subscriptions and Backpressure Handling

TBMQ also applies backpressure handling logic in the context of [shared subscriptions](/docs/{{docsPrefix}}mqtt-broker/user-guide/shared-subscriptions/), ensuring reliable and efficient message delivery across all subscription types. 
A shared subscription group may contain one or more subscribers, and messages are distributed among them according to MQTT 5.0 rules. 
When backpressure is detected, the broker adjusts delivery based on the type and persistence level of the shared group.

#### Non-Persistent Shared Subscription Group

If a subscriber in the group becomes non-writable, TBMQ skips it and attempts to deliver the message to another writable subscriber in the group. 
If all subscribers in the group are non-writable, the message is dropped entirely and not queued or retained. 
This behavior matches the expectation for non-persistent clients, where message loss is acceptable under overload conditions.

#### Persistent Device Shared Subscription Group

If a subscriber is non-writable, it is skipped, and the message is routed to another writable subscriber in the same group. 
If none of the subscribers are writable, the message is saved to Redis, using a per-group queue associated with the shared subscription key. 
Redis ensures that once any subscriber in the group becomes writable again, delivery resumes from the stored messages. 
Queue size and TTL are controlled via the same configuration as for individual persistent device clients.

#### Persistent Application Shared Subscription Group

When a subscriber in the group becomes non-writable, TBMQ removes it from the Kafka consumer group associated with the shared subscription. 
Other writable subscribers continue polling messages from Kafka as usual. 
If all subscribers in the group become non-writable, the consumer group becomes temporarily empty, and no messages are polled. 
Kafka retains undelivered messages according to the topic’s configured retention policy (environment variable `TB_KAFKA_APP_PERSISTED_MSG_SHARED_TOPIC_PROPERTIES`), 
ensuring that once any subscriber becomes writable and rejoins the group, message delivery resumes.

This approach ensures that TBMQ maintains performance, reliability, and resource efficiency even when handling shared subscriptions under pressure. Each strategy is tailored to the persistence level of the clients in the group.

## Recommendations

To maximize the effectiveness of TBMQ’s backpressure handling and ensure system resilience under variable load, we recommend the following:

- **Monitor the number of non-writable clients**: Track the number of clients currently under outbound backpressure using the `nonWritableClients` counter. 
This metric is available both in logs and through the monitoring system (e.g., Prometheus). 
For production environments, it's recommended to set up alerts when the value increases unexpectedly or stays elevated over time.

- **Start with Default Backpressure Settings**: For most deployments, the default Netty buffer thresholds — 32 KB low watermark and 64 KB high watermark — provide robust performance. 
These settings have been tested to support **around 10,000 messages per second per subscriber** under typical conditions.

- **Ensure Sufficient Redis and Kafka Capacity**: Persistent client buffering relies on Redis and Kafka. Monitor their memory, disk, and throughput to avoid secondary bottlenecks.

- **Use Horizontal Scaling**: For sustained high throughput, scale broker nodes horizontally. Backpressure is not a substitute for adequate compute and I/O resources.

- **Test Under Load**: Perform load testing with simulated slow and fast consumers to validate how your configuration handles backpressure in real scenarios.

By following these practices, you can take full advantage of TBMQ’s backpressure handling mechanisms, ensuring reliable operation, efficient resource usage, and high performance even in demanding MQTT workloads.

## Conclusion

The backpressure handling mechanisms in TBMQ significantly enhance the broker’s resilience and efficiency when dealing with varying client consumption rates. 
By dynamically monitoring channel writability, intelligently controlling message delivery, and integrating with both transport-level and application-level flow control,
TBMQ ensures reliable performance and optimal resource utilization—even under sustained or bursty high-load conditions. 
This makes TBMQ well-suited for demanding MQTT workloads at scale.
