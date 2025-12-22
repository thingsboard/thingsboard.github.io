
* TOC
{:toc}

An **MQTT session** is a core concept that enables reliable communication between MQTT clients and the Broker, even when network connections are unstable. This is especially important in IoT environments, where devices may disconnect and reconnect due to power-saving modes, connectivity issues, or network changes.

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

Typical use cases:

- Devices with intermittent or unreliable network connectivity
- Command-and-control scenarios where message delivery must be guaranteed
- Backend APPLICATIONs that process critical data streams
- Systems that require message continuity across client restarts or failovers

## Non-Persistent Session

A non-persistent (clean) session always starts with a fresh state. The Broker does not retain any session state when the client disconnects.

- Subscriptions are not preserved and must be recreated on every connection.
- Messages published while the client is offline are not stored or delivered later.
- This mode has minimal overhead, as it does not require message acknowledgments or session storage.
- Clean sessions are typically used with **QoS 0**, where low latency and simplicity are more important than guaranteed delivery.

Typical use cases:

- Simple telemetry publishing where occasional data loss is acceptable
- Sensors publishing frequently updated values (temperature, humidity, status)
- Short-lived clients, test tools, or diagnostic utilities
- Scenarios where minimal latency and minimal Broker storage are preferred

## Session Configuration in MQTT v3.1.1 and MQTT v5.0

Session management was significantly improved in **MQTT version 5.0** compared to **MQTT version 3.1.1**. While MQTT v3.1.1 provides only basic control over session persistence, MQTT v5.0 introduces more flexible and explicit mechanisms that are better suited for modern IoT systems with unstable networks and large numbers of clients.

The key change is that MQTT v5.0 replaces the single **CleanSession** flag with two separate properties: **Clean Start** and **Session Expiry Interval**. This allows clients to precisely control *when* a session starts fresh and *how long* the Broker should keep session data after a disconnect.

<table>
  <thead>
    <tr>
      <td style="width: 20%"><b>Session Type</b></td>
      <td style="width: 20%"><b>MQTT v3.1.1<br>Configuration</b></td>
      <td style="width: 25%"><b>MQTT v5.0<br>Configuration</b></td>
      <td style="width: 35%"><b>Resulting Behavior & Typical Use</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Non-persistent session</b></td>
      <td>CleanSession = 1</td>
      <td>
        Clean Start = 1<br>
        Session Expiry Interval = 0
      </td>
      <td>
        A new session is always created. No subscriptions or messages are stored.
        Messages published while the client is offline are lost.
        Suitable for simple, real-time data where persistence is not required.
      </td>
    </tr>
    <tr>
      <td><b>Persistent session<br>(finite lifetime)</b></td>
      <td>CleanSession = 0</td>
      <td>
        Clean Start = 0<br>
        Session Expiry Interval &gt; 0
      </td>
      <td>
        Session state is preserved across disconnects for a defined period.
        Subscriptions and queued messages are restored on reconnect.
        Ideal for intermittent connectivity with controlled resource usage.
      </td>
    </tr>
    <tr>
      <td><b>Persistent session<br>(indefinite)</b></td>
      <td>CleanSession = 0</td>
      <td>
        Clean Start = 0<br>
        Session Expiry Interval = 0xFFFFFFFF
      </td>
      <td>
        Session persists indefinitely until explicitly cleared.
        Provides maximum reliability but requires careful lifecycle management
        to avoid unused sessions consuming resources.
      </td>
    </tr>
    <tr>
      <td><b>Forced session reset</b></td>
      <td>CleanSession = 1</td>
      <td>
        Clean Start = 1<br>
        Session Expiry Interval &gt; 0 (ignored)
      </td>
      <td>
        Any existing session is discarded immediately.
        A new session is created regardless of previous state.
        Useful for manual resets, troubleshooting, or reinitialization.
      </td>
    </tr>
  </tbody>
</table>

For details on viewing and managing MQTT sessions in the TBMQ UI, see the [documentation](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/sessions/).

## TBMQ Architecture and Session State Management

TBMQ is designed to operate at scale in environments with highly diverse MQTT traffic patterns, ranging from lightweight IoT devices to high-throughput backend applications. To achieve predictable behavior under load, TBMQ combines MQTT session semantics with internal client classification (**Client Type**) and flow-control mechanisms (**Backpressure**).

Session state in TBMQ is not managed in isolation. Its lifecycle, persistence, and resource impact are influenced by how a client connects, how much data it produces or consumes, and how reliably messages must be delivered. This architecture allows TBMQ to balance **reliability**, **performance**, and **resource efficiency**, even when clients disconnect frequently or experience unstable network conditions.

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
      <td>Non-persistent<br>(Clean Start)</td>
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
      <td>Non-persistent<br>(Clean Start)</td>
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

### Backpressure

**Backpressure** is a flow-control mechanism that protects the Broker from overload when a client cannot consume messages fast enough.  
It is triggered when the client’s network channel becomes non-writable or internal buffers reach configured limits.

For **non-persistent sessions**, messages are delivered only while the client is connected and writable. When backpressure occurs, messages are dropped immediately and no buffering or retries are performed, even for QoS 1 or QoS 2.

In **persistent sessions**, messages are preserved to maintain delivery guarantees. Messages are buffered for **DEVICE** clients or consumption is paused for **APPLICATION** clients, and delivery resumes automatically once the client reconnects or becomes writable again.

Backpressure behavior in TBMQ is controlled by broker-level limits such as the maximum number of persisted messages per session, session storage memory limits, and pause/resume thresholds for high-throughput consumers.

For detailed configuration options and examples, see the dedicated [**Backpressure documentation**](/docs/{{docsPrefix}}mqtt-broker/user-guide/backpressure/).

## Last Will Handling Based on Session State

The **Last Will Message** is associated with an MQTT session and is published by the Broker when a client disconnects abnormally.  
In MQTT v5.0, the **Will Delay Interval** adds session-aware control over when (and if) the Will Message is published.

In a **non-persistent session**, the session ends immediately when the network connection is closed.
- If the client disconnects abnormally, the Will Message is published **immediately**.
- The Will Delay Interval has no practical effect, as the session does not survive the disconnect.
- This behavior matches MQTT v3.1.1 semantics.

In a **persistent session**, the session remains active after a disconnect, allowing the Will Delay Interval to take effect.
- When the client disconnects abnormally, the Broker **delays publishing** the Will Message.
- If the client reconnects and resumes the session **before the Will Delay Interval expires**, the Will Message is **not published**.
- If the client does not reconnect in time, the Will Message is published when the delay expires.
