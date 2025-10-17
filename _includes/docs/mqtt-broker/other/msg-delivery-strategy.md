
* TOC
{:toc}

This feature addresses how messages are delivered to MQTT subscribers in TBMQ. When a client subscribes to a topic and a new matching message is published, 
TBMQ delivers the message to the subscriber using its underlying networking layer—**Netty**.

Netty provides two main ways to send messages over a network channel:
- `writeAndFlush()`: Sends the message and immediately flushes the channel, pushing data to the network right away.
- `write()` (without `flush()`): Writes the message to the channel's buffer but does not send it immediately. It remains in the buffer until a separate `flush()` call is made.

TBMQ leverages this capability to offer two **delivery strategies**:
- **Write and flush for each message**;
- **Buffer messages and flush periodically or based on count**.

These strategies are configurable for [two types of clients](/docs/{{docsPrefix}}mqtt-broker/user-guide/mqtt-client-type/):
- **Device clients** (non-persistent and persistent clients);
- **Application clients** (persistent clients).


## Write and Flush for Each Message

- **Behavior**: TBMQ calls `writeAndFlush()` for every message sent to a subscriber.
- **Pros**:
    - Ensures low latency — messages are delivered as soon as they are available.
    - Simple and reliable, ideal for low-throughput environments.
- **Cons**:
    - High CPU and I/O overhead under heavy load.
    - Can cause performance bottlenecks due to excessive flushing.

## Buffered Delivery (Write without Flush)

- **Behavior**: TBMQ calls `write()` to queue the message in the Netty channel buffer. A `flush()` is triggered:
    - After a configured number of messages (`buffered-msg-count`) are buffered.
    - If a session becomes idle for the duration specified by `idle-session-flush-timeout-ms` (i.e., no new messages are sent to the subscriber during this time), the buffer is automatically flushed. This behavior applies only to Device clients.
- **Pros**:
    - Greatly reduces the number of flush operations, improving throughput.
    - More efficient under high-load or bursty message traffic.
- **Cons**:
    - May introduce delivery delays, particularly in low-throughput scenarios where messages are published infrequently.

## Configuration

You can configure the strategy separately for **Device clients** and **Application clients** via application properties.

### Device Clients

```yaml
# If enabled, each message is published to non-persistent subscribers with flush. When disabled, the messages are buffered in the channel and are flushed once in a while
write-and-flush: "${MQTT_MSG_WRITE_AND_FLUSH:true}"
# Number of messages buffered in the channel before the flush is made. Used when `MQTT_MSG_WRITE_AND_FLUSH` = false
buffered-msg-count: "${MQTT_BUFFERED_MSG_COUNT:5}"

# If enabled, each message is published to persistent DEVICE client subscribers with flush. When disabled, the messages are buffered in the channel and are flushed once in a while
persistent-session.device.write-and-flush: "${MQTT_PERSISTENT_MSG_WRITE_AND_FLUSH:true}"
# Number of messages buffered in the channel before the flush is made. Used when `MQTT_PERSISTENT_MSG_WRITE_AND_FLUSH` = false
persistent-session.device.buffered-msg-count: "${MQTT_PERSISTENT_BUFFERED_MSG_COUNT:5}"
```

### Additional Buffered Delivery Settings (Device Clients)

When message buffering is enabled, TBMQ maintains a cache of active client sessions to track buffered messages and determine when to flush them. 
The parameters below define the cache size, expiration policies, and scheduler behavior responsible for flushing message buffers based on activity or thresholds.

```yaml
# When either `MQTT_MSG_WRITE_AND_FLUSH` or `MQTT_PERSISTENT_MSG_WRITE_AND_FLUSH` is set to false,
# the broker buffers outgoing messages in the outbound channel to improve throughput.
# The respective buffer sizes are controlled by `MQTT_BUFFERED_MSG_COUNT` (for non-persistent clients)
# and `MQTT_PERSISTENT_BUFFERED_MSG_COUNT` (for persistent clients).
# This property defines the maximum number of session entries that can be stored in the flush state cache.
# When the cache exceeds this size, the least recently used sessions are evicted
# and their pending message buffers are flushed automatically
session-cache-max-size: "${MQTT_BUFFERED_CACHE_MAX_SIZE:10000}"
# Time in milliseconds after which an inactive session entry in the flush cache expires.
# A session is considered inactive if it receives no new messages during this period.
# Upon expiration, the session is evicted from the cache and its buffer is flushed.
# Default is 5 minutes
session-cache-expiration-ms: "${MQTT_BUFFERED_CACHE_EXPIRY_MS:300000}"
# Interval in milliseconds at which the scheduler checks all sessions in the cache
# for potential flushing. A smaller value results in more frequent flush checks
scheduler-execution-interval-ms: "${MQTT_BUFFERED_SCHEDULER_INTERVAL_MS:100}"
# Maximum duration in milliseconds that a session can remain idle (i.e., without being flushed)
# before its message buffer is automatically flushed to the client.
# In essence, a flush occurs either when the buffer limit is reached or when this timeout elapses
idle-session-flush-timeout-ms: "${MQTT_BUFFERED_IDLE_FLUSH_MS:200}"
```

### Application Clients

```yaml
# If enabled, each message is published to persistent APPLICATION client subscribers with flush. When disabled, the messages are buffered in the channel and are flushed once in a while
write-and-flush: "${MQTT_APP_MSG_WRITE_AND_FLUSH:false}"
# Number of messages buffered in the channel before the flush is made. Used when `MQTT_APP_MSG_WRITE_AND_FLUSH` = false
buffered-msg-count: "${MQTT_APP_BUFFERED_MSG_COUNT:10}"
```

## How It Works

When a **Device client** session is active and buffering is enabled:

1. **Session Buffer Creation**  
   TBMQ stores the session state in a cache with a `SessionFlushState` object that holds:
    - The count of buffered messages.
    - The timestamp of the last flush.
    - The client’s Netty channel context.

2. **Message Write without Flush**  
   When a message is delivered:
    - It's written using `channel.write()`, without an immediate flush.
    - The buffer count is incremented.

3. **Flush Trigger**  
   A flush is triggered in any of the following cases:
    - **Buffered count** reaches the configured threshold (e.g., 5).
    - **Session is idle** for more than the configured timeout.
    - **Session is evicted** from cache (due to expiration or max size), and pending messages are flushed to avoid data loss.

4. **Scheduled Background Flusher**  
   A background thread periodically scans the cache and flushes idle session buffers.

5. **Shutdown Handling**  
   On service shutdown, all buffered sessions are flushed to ensure message delivery consistency.

For **Application clients**, buffered delivery is applied during message processing in batches.

- Messages are written to the Netty channel using `write()` without an immediate flush.
- A flush is triggered **after a configured number of messages** (`buffered-msg-count`, default: 10) have been written.
- Once the entire batch is processed, **any remaining unflushed messages are flushed explicitly**.
- This approach avoids idle-time-based flushing and is optimized for high-throughput, batched delivery scenarios.

This strategy is made possible because each Application client is processed in a dedicated thread (consumer) that polls messages from dedicated Kafka topic, allowing TBMQ to control flushing independently per client. 
This design provides precise batching and flushing without requiring shared caches or background schedulers, leading to both scalability and consistency in message delivery.

## Recommendations

Choosing the right message delivery strategy depends on your workload characteristics, performance goals, and client behavior. Below are some practical recommendations to guide your configuration.

**Use `write-and-flush = true` (No Buffering) When:**

- You prioritize **low latency** over throughput.
- Your system experiences **low to moderate message rates**.
- Clients expect **immediate delivery** (e.g., real-time dashboards, alerts).
- Simplicity and predictability are more important than raw performance.

**Use `write-and-flush = false` (Buffered Delivery) When:**

- You expect **high-throughput** workloads with **frequent publications**.
- Minimizing **system call overhead and I/O pressure** is important.
- Clients can tolerate slight delivery delays in exchange for improved efficiency.
- You want to **scale to thousands of clients** without saturating the CPU or network.

### Tuning Tips

- Start with `buffered-msg-count` values between **5–10** and adjust based on profiling.
- For Device clients, tune `idle-session-flush-timeout-ms` to balance between delay and timely delivery.
- Monitor logs for cache evictions and flush timings to identify performance bottlenecks.
- If messages are frequently delayed in low-throughput setups, consider enabling immediate flushing.

### Recommendation Summary

| Scenario                           | Recommended Setting                      |
|------------------------------------|------------------------------------------|
| Low-latency, real-time delivery    | `write-and-flush = true`                 |
| High message volume                | `write-and-flush = false`, with tuning   |
| Batch-based Application processing | Application buffering with custom count  |
| Low-frequency messages             | Avoid buffering to prevent delays        |

> In our 3 million messages per second (3M msg/sec) performance test on a single TBMQ node, buffered delivery was enabled to maximize throughput and overall system performance.
> This configuration significantly reduced CPU overhead and improved latency, resulting in more efficient message processing under high load.
> See the [performance test results](/docs/{{docsPrefix}}mqtt-broker/reference/3m-throughput-single-node-performance-test/) and 
> [configuration details](https://github.com/thingsboard/tbmq/blob/3M-single-node-perf-test/k8s/aws/tb-broker-configmap.yml) for more information.

## Conclusion

The Buffered Message Delivery mechanism provides a smart and flexible way to manage how messages are sent to MQTT subscribers in TBMQ. By leveraging Netty’s ability to defer flushing, TBMQ can significantly reduce I/O overhead and increase throughput in demanding environments.

**Choose the delivery strategy that best matches your deployment needs:**
- Use **write-and-flush** for low-latency, low-throughput scenarios.
- Enable **buffering** for high-throughput workloads where performance optimization is crucial.

This feature ensures that your MQTT message delivery pipeline remains efficient, reliable, and adaptable to varying client behaviors and system loads.
