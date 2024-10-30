
* TOC
{:toc}

Quality of Service (QoS) levels are one of the critical features of MQTT, which sets the rules for message delivery. 
This feature is pivotal in the design of robust and reliable communication systems, particularly in the realm of the Internet of Things (IoT), 
enhancing its interaction between the broker and connected clients.

Here's a list of challenges that the Quality of Service feature in MQTT helps to tackle:

* **Network reliability**: MQTT relies on the TCP, a data transportation protocol. TCP does not guarantee that the packets will be delivered in case of poor network conditions. QoS 1 and QoS 2 levels handle this problem by ensuring that the messages are delivered according to the requirement.
* **System crashes**: If either the publisher or the subscriber crashes after the message is sent but before it can be processed, QoS ensures that the messages aren't lost.
* **Preventing duplicates**: QoS 2 is designed to ensure that the message is delivered to the receiver only once.
* **Avoiding overloading the subscriber**: With QoS 1 and QoS 2, the publisher will not send further messages to a client if it is not acknowledging the receipt of previous messages.
* **Persisting messages**: MQTT includes the ability to persist QoS 1 and QoS 2 messages for a client that is currently disconnected. The next time the client connects, these missed messages are sent out.

### QoS levels

MQTT defines three levels of Quality of Service:

1. **QoS 0 - At Most Once** (default). Used for non-critical data where speed is more important than reliability.
2. **QoS 1 - Al Least Once**. Used for important data where occasional duplicates are manageable.
3. **QoS 2 - Exactly Once**. Used for critical data where neither loss nor duplication can be tolerated.

#### QoS 0 - At Most Once

![image](https://img.thingsboard.io/mqtt-broker/user-guide/tbmq-qos0.png)

In this default method the message can be delivered either one time or not delivered. The duplicate messages are impossible.

**Requires one message**: 
1. Sender sends **PUBLISH (1)** packet.

After the message is sent the sender removes it from the message queue. That’s why this mode is sometimes called **"fire and forget"**. 
The sender does not expect an acknowledgment (confirmation), like in the QoS 1, from the receiver that the message has been delivered.

QoS 0 requires **minimal network usage** and subsequently has the fastest performance (minimal delay) due to no overhead of acknowledgments.

At the same time QoS 0 has the **lowest reliability** as there is no guarantee of message delivery. So it is not suitable for critical data where every message must be received.

#### QoS 1 - Al Least Once

![image](https://img.thingsboard.io/mqtt-broker/user-guide/tbmq-qos1.png)

The messages are delivered at least once, ensuring that the receiver gets the message, but it does not guarantee that it will be delivered only once.

**Requires two messages**:
1. The sender sends **PUBLISH (1)** packet.
2. The receiver responds with **PUBACK (2)** packet.

The duplicate messages are possible due to scenarios with unstable connection, for example:
1. The sender sends a PUBLISH packet, but the receiver does not get it. So the sender will try to send duplicates of PUBLISH packets again and again. When the sender gets confirmation from the receiver (PUBACK packet), the message will be removed from the queue.
2. The sender sends a PUBLISH packet, the receiver gets it and sends back the PUBACK packet, but it is lost on its way back. So the sender does not know if the receiver got it. So it will produce another copy of the message until it is acknowledged.

The use of QoS 1 ensures that important data is not lost due to transmission issues, but it also means that any failure to acknowledge receipt will result in duplicate messages. 

#### QoS 2 - Exactly Once

![image](https://img.thingsboard.io/mqtt-broker/user-guide/tbmq-qos2.png)

The messages are delivered exactly once, ensuring that neither duplication nor loss occurs.

**Requires 4 messages**:
1. The sender sends **PUBLISH (1)** packet.
2. The receiver responds with **PUBREC (2)** packet.
3. The sender gets a PUBREC packet and sends **PUBREL (3)** packet with important details as packet ID that is a key for guaranteeing that a message is sent exactly once.
4. The receiver gets PUBREL packet and responds with **PUBCOMP (4)** packet.

Only after the sender gets PUBCOMP packet, it will be allowed to retransmit the PUBLISH packet or send a new message with the same Packet ID.

The guarantee of exactly once message delivery by using four-step handshake process between sender and receiver has its price - **slowest performance and highest network usage**.

### Which QoS to use? IoT use cases

Below are some common scenarios to consider when selecting the appropriate QoS for your IoT system.

#### QoS 0 - At Most Once

Suitable for applications where speed is more important than reliability or occasional message loss (due to the different reasons as network Instability, unexpected client disconnection, 
broker overload etc) is acceptable, such as non-critical sensor data.
1. **Environmental Sensor Data**
   * Use Case: Temperature sensors in a greenhouse send periodic updates to a monitoring system.
   * Reason to use: Occasional data loss is acceptable because subsequent readings will provide the latest state.
4. **Non-Critical Notifications**
   * Use Case: A smart light system sends status updates to a central server.
   * Reason to use: If a message is lost, the next update will correct the state, and immediate consistency is not crucial.

#### QoS 1 - Al Least Once

Suitable for applications where data loss is unacceptable, but duplicates can be managed.
1. **Telemetry Data from Vehicles**
   * Use Case: A vehicle sends telemetry data (e.g., location, speed, fuel level) to a fleet management system.
     If the vehicle experiences a temporary network disconnection or if the acknowledgment from the broker is delayed or lost, the vehicle's MQTT client will resend the telemetry data. This results in the fleet management system receiving the same data multiple times.
   * Reason to use: Ensures that important data is received at least once, even if duplicates occur.
4. **Home Security Alerts**
   * Use Case: A home security system sends alerts (e.g., motion detected, door opened) to the homeowner's smartphone app.
     When the MQTT broker fails to send an acknowledgment due to network latency or interruptions, the security system will retransmit the alert. Consequently, the homeowner might receive multiple notifications for the same event.
   * Reason to use: Important alerts must reach the app, even if duplicates need to be handled.

#### QoS 2 - Exactly Once

Best for critical applications where message duplication or loss is unacceptable, such as financial transactions or critical commands.
1. **Financial Transactions**
   * Use Case: A payment system sends transaction details between terminals and a central server.
   * Reason to use: Ensures that each transaction is processed exactly once to prevent duplicates or losses.
4. **Industrial Automation Commands**
   * Use Case: Commands sent to industrial machinery for precise control and operations.
   * Reason to use: Critical commands must be executed exactly once to avoid errors or accidents.

#### Comparison table

<table>
  <thead>
      <tr>
          <td></td>
          <td><b>Performance</b></td>
          <td><b>Will message be delivered</b></td>
          <td><b>Duplicates</b></td>
          <td><b>Packets</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>QoS 0 - At Most Once</td>
          <td>Fastets</td>
          <td>Maybe</td>
          <td>Impossible</td>
          <td>1. PUBLISH</td>
      </tr>
      <tr>
          <td>QoS 1 - Al Least Once</td>
          <td>Normal</td>
          <td>Yes</td>
          <td>Possible</td>
          <td>1. PUBLISH<br>2. PUBACK</td>
      </tr>
      <tr>
          <td>QoS 2 - Exactly Once</td>
          <td>Slowest</td>
          <td>Yes</td>
          <td>Impossible</td>
          <td>1. PUBLISH<br>2. PUBREC<br>3. PUBREL<br>4. PUBCOMP</td>
      </tr>
  </tbody>
</table>

### Downgrade

In MQTT communication in order to understand each other publisher and subscriber must use the same Quality of Service. 
But QoS of the published message and QoS of the subscribing client may differ.

There is a simple rule for cases when QoS differs - **the lowest QoS will be used**, regardless of which side, sender or receiver, it is. 
For example, Client A has published a message with QoS 1. Meanwhile, Client B is subscribed to the same topic with QoS 2. As a result, the message will be delivered with a QoS level of 1.

### Queuing messages and session persistence

In the MQTT protocol, the message queue behavior depends on the selected Quality of Service that directly affects the delivery and storage of messages.

If the **session is clean** (clean session is set to true), regardless of the selected QoS the broker will not store any information for the client and the session ends when the client disconnects.
This means any queues or unacknowledged messages are lost.

If the **session is persistent** (clean session flag set to false) and selected **QoS 1** or **QoS 2**, the broker will queue any messages for 
disconnected clients which have a subscription for the topic on which the message was published. 
The queued message is sent to the client after it reconnects. The broker ensures that messages are delivered in the order they were published, even after the client reconnects.

Upon **reconnection**, clients must be prepared to process potentially large bursts of queued messages, which can impact performance and require efficient message handling logic. 
Each message must be acknowledged by the client to remove it from the queue. 
After reconnection, if the client had received some messages before going offline, there might be duplicates upon reconnecting. 
The client needs to handle these duplicates appropriately.

Please note, for **QoS 0** the broker does not queue messages.

