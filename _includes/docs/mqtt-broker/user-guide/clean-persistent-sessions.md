
* TOC
{:toc}

An **MQTT Session** is a core concept that enables reliable communication between MQTT Clients and the Broker, even when network connections are unstable. This is especially important in IoT environments, where devices may disconnect and reconnect due to power-saving modes, connectivity issues, or network changes.

An MQTT session stores state related to the interaction between a **Client** and the **Broker**. This state can be reused when the Client reconnects, allowing communication to continue without reinitializing everything from scratch.

## Session Configuration in MQTT v3.1.1 and MQTT v5.0

Session management was significantly improved in **MQTT Version 5.0** compared to **MQTT Version 3.1.1**. While MQTT v3.1.1 provides only basic control over session persistence, MQTT v5.0 introduces more flexible and explicit mechanisms that are better suited for modern IoT systems with unstable networks and large numbers of clients.

The key change is that MQTT v5.0 replaces the single **CleanSession** flag with two separate properties: **Clean Start** and **Session Expiry Interval**. This allows Clients to precisely control *when* a session starts fresh and *how long* the Broker should keep session data after a disconnect.

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
      <td><b>Non-Persistent Session</b></td>
      <td>
        CleanSession = 1
      </td>
      <td>
        Clean Start = 1<br>
        Session Expiry Interval = 0
      </td>
      <td>
        A new Session is always created. No subscriptions or messages are stored.
        Messages published while the Client is offline are lost.
        Suitable for simple, real-time data where persistence is not required.
      </td>
    </tr>

    <tr>
      <td><b>Persistent Session<br>(Finite Lifetime)</b></td>
      <td>
        CleanSession = 0
      </td>
      <td>
        Clean Start = 0<br>
        Session Expiry Interval &gt; 0
      </td>
      <td>
        Session State is preserved across disconnects for a defined period.
        Subscriptions and queued messages are restored on reconnect.
        Ideal for intermittent connectivity with controlled resource usage.
      </td>
    </tr>

    <tr>
      <td><b>Persistent Session<br>(Indefinite)</b></td>
      <td>
        CleanSession = 0
      </td>
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
      <td><b>Forced Session Reset</b></td>
      <td>
        CleanSession = 1
      </td>
      <td>
        Clean Start = 1<br>
        Session Expiry Interval &gt; 0 (ignored)
      </td>
      <td>
        Any existing Session is discarded immediately.
        A new Session is created regardless of previous state.
        Useful for manual resets, troubleshooting, or reinitialization.
      </td>
    </tr>
  </tbody>
</table>

For details on viewing and managing MQTT sessions in the TBMQ UI, see [documentation](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/sessions/).

## Persistent Session

A persistent session preserves the Session State after the Client disconnects, allowing subscriptions and queued messages to be restored when the Client reconnects.

- Messages are retained only while the Session is active. If the Session expires before reconnection, any queued messages are discarded.
- This mode improves reliability but introduces additional acknowledgments and storage, increasing overall system complexity.
- A persistent session requires a **fixed Client ID**, which allows the Broker to correctly restore the Session State.
- Offline message delivery works only when both the publisher and subscriber use **QoS 1** or **QoS 2**.

Typical use cases:

- Devices with intermittent or unreliable network connectivity.
- Command-and-control scenarios where message delivery must be guaranteed.
- Backend APPLICATIONs that process critical data streams.
- Systems that require message continuity across Client restarts or failovers.

## Non-Persistent Session

A non-persistent (clean) session always starts with a fresh state. The Broker does not retain any Session State when the Client disconnects.

- Subscriptions are not preserved and must be recreated on every connection.
- Messages published while the Client is offline are not stored or delivered later.
- This mode has minimal overhead, as it does not require message acknowledgments or session storage.
- Clean sessions are typically used with **QoS 0**, where low latency and simplicity are more important than guaranteed delivery.

Typical use cases:

- Simple telemetry publishing where occasional data loss is acceptable
- Sensors publishing frequently updated values (temperature, humidity, status)
- Short-lived Clients, test tools, or diagnostic utilities
- Scenarios where minimal latency and minimal Broker storage are preferred

## How QoS Affects Message Delivery in Persistent Sessions

Message queuing works **only for persistent sessions** and requires both the publisher and subscriber to use **QoS 1 or QoS 2**.
For applications where message loss is unacceptable, always combine **persistent sessions** with **QoS 1 or QoS 2**.

- **QoS 0** messages are never queued by the Broker. If the Client is offline, these messages are immediately dropped.
- **QoS 1** enables offline message storage and guarantees that messages are delivered *at least once* when the Client reconnects.
- **QoS 2** provides the highest reliability by ensuring messages are delivered *exactly once*, even across disconnects.

Read more about Quality of Service (QoS) [here](/docs/{{docsPrefix}}mqtt-broker/user-guide/qos/).

## Session Handling in TBMQ Architecture

Session handling in TBMQ is designed to balance **reliability**, **performance**, and **resource efficiency** at scale.  
By combining MQTT session semantics with internal client classification and flow-control mechanisms, 
TBMQ ensures predictable behavior for both high-frequency device traffic and large-scale data consumers, even under unstable network conditions.

### Client Type

TBMQ improves scalability and reliability by classifying Clients into two [types](/docs/{{docsPrefix}}mqtt-broker/user-guide/mqtt-client-type/): **DEVICE** and **APPLICATION**.  
Each type has distinct traffic patterns and usage expectations, allowing TBMQ to apply tailored session persistence and message delivery strategies for efficient resource usage.

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
      <td>Non-Persistent<br>(Clean Start)</td>
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
      <td>Non-Persistent<br>(Clean Start)</td>
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

Backpressure in TBMQ is used when a Client cannot consume messages fast enough, helping protect the Broker from overload.

Backpressure behavior depends on the **session type**:
- With **non-persistent sessions**, messages are dropped when the Client is slow, as no delivery guarantees are expected.
- With **persistent sessions**, messages are preserved to maintain delivery guarantees, either by buffering (DEVICE clients) or pausing consumption at the infrastructure level (APPLICATION clients).

For a detailed explanation, see the dedicated Backpressure [documentation](/docs/{{docsPrefix}}mqtt-broker/user-guide/backpressure/).
