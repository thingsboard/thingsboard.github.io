
* TOC
{:toc}

An **MQTT session** is a core concept that enables reliable communication between MQTT clients and the MQTT Broker, even when network connections are unstable. This is especially important in IoT environments, where devices may disconnect and reconnect due to power-saving modes, connectivity issues, or network changes.

An MQTT session stores state related to the interaction between a **client** and the **Broker**. This state can be reused when the client reconnects, allowing communication to continue without reinitializing everything from scratch.

Think of an MQTT session like a hotel reservation.
- A **persistent** session is like a “booked room”: even if you go out for dinner (disconnect), your luggage (subscriptions and missed messages) stays in the room waiting for your return.
- A **non-persistent** session is like a “walk-in”: if you leave the lobby, the hotel forgets you were ever there.

## Persistent Session

A persistent session preserves the session state after the client disconnects, allowing subscriptions and queued messages to be restored when the client reconnects.

- Messages are retained only while the session is active. If the session expires before reconnection, any queued messages are discarded.
- This mode improves reliability but introduces additional acknowledgments and storage, increasing overall system complexity.
- A persistent session requires a **fixed Client ID**, which allows the Broker to correctly restore the session state.
- **Offline message delivery works only for persistent sessions** and requires both the publisher and subscriber to use **QoS 1** or **QoS 2**. For applications where message loss is unacceptable, always combine persistent sessions with **QoS 1** or **QoS 2** ([QoS documentation](/docs/{{docsPrefix}}mqtt-broker/user-guide/qos/)).

The following **information may be stored as part of a persistent session** and removed when the Session expires or is explicitly cleared:

- The existence of the Session and the associated **Client ID**
- Active **subscriptions**, including Topic Filters and Subscription Identifiers
- **Queued messages** waiting to be delivered to the Client (QoS 1 and QoS 2)
- **In-flight messages** that were sent but not fully acknowledged (QoS 1 and QoS 2)
- QoS 2 messages received from the Client but not yet fully acknowledged
- The configured **Will Message** and **Will Delay Interval**
- The **Session Expiry Interval** and calculated session expiration time
- Internal delivery state required to correctly resume message flow after reconnect

## Non-Persistent Session

A non-persistent (clean) session always starts with a fresh state. The Broker does not retain any session state when the client disconnects.

- Subscriptions are not preserved and must be recreated on every connection.
- Messages published while the client is offline are not stored or delivered later.
- This mode has minimal overhead, as it does not require message acknowledgments or session storage.
- Clean sessions are typically used with **QoS 0** (they can also be used with higher QoS levels), where low latency and simplicity are more important than guaranteed delivery.

## How the Broker Indicates an Existing Session

When a Client connects, the Broker informs it whether a previous session already exists by setting the **Session Present** flag in the **CONNACK** packet.

- **Session Present = true**. Indicates that the Broker has found an existing session for the given **Client ID** and has resumed it. Subscriptions and any stored session state are available to the Client.
- **Session Present = false**. Indicates that no existing session was found and a new session has been created. The Client must subscribe again if needed.

This flag is especially important for Clients using **persistent sessions**, as it allows them to determine whether they are resuming a previous session or starting from a clean state.

## Session Configuration in MQTT v3.x and MQTT v5.0

Session management was significantly improved in **MQTT version 5.0** compared to **MQTT version 3.x**. While MQTT v3.x provides only basic control over session persistence, MQTT v5.0 introduces more flexible and explicit mechanisms that are better suited for modern IoT systems, especially for unstable networks and large numbers of clients.

The key change is that MQTT v5.0 replaces the single **Clean Session** flag with two separate properties: **Clean Start** and **Session Expiry Interval**. This allows clients to precisely control *when* a session starts fresh and *how long* the Broker should keep session data after a disconnect.

<table>
  <thead>
    <tr>
      <td style="width: 20%"><b>Session Type</b></td>
      <td style="width: 20%"><b>MQTT v3.x<br>Configuration</b></td>
      <td style="width: 25%"><b>MQTT v5.0<br>Configuration</b></td>
      <td style="width: 35%"><b>Explanation</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Non-persistent session</b></td>
      <td>Clean Session = 1</td>
      <td>
        Clean Start = 1<br>
        Session Expiry Interval = 0
      </td>
      <td>
        A new session is always created. No subscriptions or messages are stored.
        Messages published while the Client is offline are lost.
        Suitable for simple, real-time data where persistence is not required.
      </td>
    </tr>
    <tr>
      <td><b>Persistent session</b></td>
      <td>Clean Session = 0</td>
      <td>
        Session Expiry Interval &gt; 0<br>
        <b>or</b><br>
        Clean Start = 0<br>
        Session Expiry Interval = 0
      </td>
      <td>
        Session state is preserved across disconnects for a defined period.
        The maximum Session Expiry Interval in MQTT v5.0 is <b>4,294,967,295 seconds</b> (~136 years).
        Subscriptions and queued messages are restored on reconnect.
        Suitable for intermittent connectivity with controlled resource usage.
      </td>
    </tr>
  </tbody>
</table>

> If the Session Expiry Interval is not specified, it defaults to 0. The value is expressed in seconds.
> Clean Start is a boolean flag, equivalent to Clean Session, where a value of 0 means false and a value of 1 means true.

For details on viewing and managing MQTT sessions in the TBMQ UI, see the [documentation](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/sessions/).

## Session State Management in TBMQ

TBMQ is designed to operate at scale in environments with highly diverse MQTT traffic patterns, ranging from lightweight IoT devices to high-throughput backend applications. 
Session state in TBMQ is not managed in isolation. Its lifecycle, persistence, and resource impact are influenced by how a client connects, how much data it produces or consumes, and how reliably messages must be delivered. 

### Client Types and Session Behavior

TBMQ improves scalability and reliability by classifying clients into two types: **DEVICE** and **APPLICATION**. 
Each [Client Type](/docs/{{docsPrefix}}mqtt-broker/user-guide/mqtt-client-type/) has distinct traffic patterns and usage expectations, allowing TBMQ to apply tailored session persistence and message delivery strategies for efficient resource usage.

<table>
  <thead>
    <tr>
      <td style="width: 15%"><b>Client Type</b></td>
      <td style="width: 20%"><b>Session Type</b></td>
      <td style="width: 35%"><b>Typical Use Case</b></td>
      <td style="width: 30%"><b>Persistence Details</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DEVICE</td>
      <td>Non-persistent</td>
      <td>
        Simple environmental monitoring.<br>
        Example: temperature sensor publishing every minute using QoS 0.
      </td>
      <td>
        No session storage. Messages are dropped on disconnect. The device must re-subscribe after reconnect. TBMQ skips messages if the device is too slow, preventing broker overload.
      </td>
    </tr>
    <tr>
      <td>DEVICE</td>
      <td>Persistent</td>
      <td>
        Command delivery and configuration updates.<br>
        Example: firmware update commands over unstable mobile networks.
      </td>
      <td>
        Messages are queued while offline. TBMQ limits stored messages per DEVICE session to <b>65,535</b> and removes stale messages using a configurable TTL.
      </td>
    </tr>
    <tr>
      <td>APPLICATION</td>
      <td>Non-persistent</td>
      <td>
        Generally not recommended for data processing applications.
      </td>
      <td>
        Messages may be lost during disconnects. TBMQ shows a warning to administrators about the risk of data loss.
      </td>
    </tr>
    <tr>
      <td>APPLICATION</td>
      <td>Persistent</td>
      <td>
        Enterprise backend and analytics systems.<br>
        Example: consuming telemetry from thousands of devices.
      </td>
      <td>
        Designed for very high throughput. Supports shared subscriptions with efficient load balancing across multiple application instances.
      </td>
    </tr>
  </tbody>
</table>

### Session Configuration Parameters

The configuration parameters (see [Configuration properties](/docs/{{docsPrefix}}mqtt-broker/install/config/)) control how TBMQ handles 
**persistent sessions** and **session expiration**. They define limits and cleanup rules that affect message retention, buffering behavior, and the lifetime of inactive client sessions.

- The `client-session-expiry` parameters control how long inactive sessions are allowed to exist and how expired sessions are periodically cleaned up, preventing unused session state from accumulating in the system.
- The `persistent-session` parameters regulate how messages are stored and delivered for persistent **DEVICE** and **APPLICATION** clients, influencing memory usage, throughput, and delivery latency.

```yaml
client-session-expiry:
  # Cron job to schedule clearing of expired and not active client sessions. Defaults to 'every hour', e.g. at 20:00:00 UTC
  cron: "${MQTT_CLIENT_SESSION_EXPIRY_CRON:0 0 * ? * *}"
  # Timezone for the client sessions clearing cron-job
  zone: "${MQTT_CLIENT_SESSION_EXPIRY_ZONE:UTC}"
  # Max expiry interval allowed of inactive sessions in seconds. The current value corresponds to one week
  max-expiry-interval: "${MQTT_CLIENT_SESSION_EXPIRY_MAX_EXPIRY_INTERVAL:604800}"
  # Administration TTL in seconds for clearing sessions that do not expire by session expiry interval
  # (e.g. MQTTv3 cleanSession=false or MQTTv5 cleanStart=false && sessionExpiryInterval == 0).
  # The current value corresponds to one week. 0 or negative value means this TTL is disabled
  ttl: "${MQTT_CLIENT_SESSION_EXPIRY_TTL:604800}"
persistent-session:
  device:
    persisted-messages:
      # Maximum number of PUBLISH messages stored for each persisted DEVICE client
      limit: "${MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_LIMIT:10000}"
      # TTL of persisted DEVICE messages in seconds. The current value corresponds to one week
      ttl: "${MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_TTL:604800}"
      # If enabled, each message is published to persistent DEVICE client subscribers with flush. When disabled, the messages are buffered in the channel and are flushed once in a while
      write-and-flush: "${MQTT_PERSISTENT_MSG_WRITE_AND_FLUSH:true}"
      # Number of messages buffered in the channel before the flush is made. Used when `MQTT_PERSISTENT_MSG_WRITE_AND_FLUSH` = false
      buffered-msg-count: "${MQTT_PERSISTENT_BUFFERED_MSG_COUNT:5}"
  app:
    persisted-messages:
      # Kafka topic properties separated by semicolon for `tbmq.msg.app` topics
      topic-properties: "${TB_KAFKA_APP_PERSISTED_MSG_TOPIC_PROPERTIES:retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1}"
      # If enabled, each message is published to persistent APPLICATION client subscribers with flush. When disabled, the messages are buffered in the channel and are flushed once in a while
      write-and-flush: "${MQTT_APP_MSG_WRITE_AND_FLUSH:false}"
      # Number of messages buffered in the channel before the flush is made. Used when `MQTT_APP_MSG_WRITE_AND_FLUSH` = false
      buffered-msg-count: "${MQTT_APP_BUFFERED_MSG_COUNT:10}"
```

## Message Expiry Interval and Session State

The **Message Expiry Interval** (MQTT v5.0) defines how long a published message remains valid before it is discarded by the Broker. 
It applies to individual messages and is independent of the Client’s connection state.

The Message Expiry Interval starts counting down **as soon as the Broker receives the message**. 
The message remains eligible for delivery only while its expiry interval has not elapsed. 
Once the interval expires, the message is discarded and will not be delivered, even if the Session still exists.

For **persistent sessions**, Message Expiry Interval plays a critical role in offline message queuing:
- Messages with **QoS 1 or QoS 2** may be queued while the Client is offline.
- If a queued message **expires before the Client reconnects**, it is removed from the session queue.
- This prevents delivery of outdated data and limits long-lived message accumulation in persistent sessions.

For **non-persistent sessions**, Message Expiry Interval has limited practical effect:
- Messages are delivered only while the Client is connected.
- If the Client is offline, messages are not queued, regardless of the expiry setting.

**Message Expiry Interval** and **Session Expiry Interval** serve different purposes:
- **Message Expiry Interval** controls how long an individual message is valid.
- **Session Expiry Interval** controls how long the Session State is retained after disconnect.

A message is delivered only if the Session still exists **and** the Message Expiry Interval has not expired.

## Demonstrating a Persistent Session

This example shows how a **persistent session** works in practice using the TBMQ [**WebSocket Client**](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/websocket-client/).
You will see that messages published while a Client is offline are **not lost** and are delivered when the Client reconnects.

The screenshots below demonstrate a simple IoT-style scenario:
1. One Client subscribes to a topic using a persistent session.
2. The Client then disconnects.
3. Another Client publishes messages to the same topic.
4. When the first Client reconnects, it receives the messages that were published while it was offline.

This behavior is possible only because the session is **persistent** and messages are delivered using **QoS 1** or **QoS 2**.

{% include images-gallery.html imageCollection="persistent-session-demo" %}