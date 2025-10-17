
* TOC
{:toc}

The **Last Will** feature in MQTT allows clients to notify others if they disconnect unexpectedly, giving a way to trigger actions like switching to backup systems or alerting users.

The term "Last Will", like a will in the real world, speaks for itself. In the real world, a last will or testament is a legal document that specifies a person's wishes after they pass away. It usually includes instructions for distributing assets, taking care of dependents, and other final wishes.

Here are examples from IoT. In a **smart home** setup, devices such as thermostats and security cameras communicate with a central hub. If a security camera goes offline unexpectedly, a Last Will message could trigger an alert to the homeowner or even activate a backup system, such as turning on lights or alarms. 
Similarly, in **agriculture**, devices monitor field conditions to optimize irrigation. If a key sensor disconnects, the Last Will message can notify the farmer, allowing them to take preventive actions.

## How the Last Will works

1. The Last Will message and its [parameters](/docs/{{docsPrefix}}mqtt-broker/user-guide/last-will/#parameters-of-the-last-will) are set when a client connects to the broker, in the `CONNECT` packet. The broker stores a Last Will message data in the session state.
2. In case happens unexpected (ungraceful) disconnection, the Last Will message is sent to the clients that are subscribed to the Will Topic.

## Ungraceful disconnection - publish

Ungraceful disconnection happens when a client disconnects unexpectedly due to reasons such as network failure, a crash, or power loss. 
In this case, the broker does not receive the `DISCONNECT` message, and it assumes the client has disconnected abnormally.

Ungraceful situations, according to the official [documentation](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901040), include but are not limited to:
* **An I/O error** or network failure detected by the server.
* The client fails to communicate within the **Keep Alive time**.
* The **client** closes the connection without sending a `DISCONNECT` packet with **Reason Code 0x00** (Normal disconnection).
* The **server** closes the connection without receiving a `DISCONNECT` packet with **Reason Code 0x00** (Normal disconnection).

## Graceful disconnection - do not publish

Graceful disconnection occurs when a client sends a `DISCONNECT` message before terminating the connection.
This informs the broker that the client is intentionally disconnecting, and as a result, the Last Will message is not triggered. The client is effectively saying, "I'm leaving on purpose, and everything is fine".

The Last Will message will be removed from the session state when:
* **After the Last Will message is Published**. Once the broker detects an unexpected disconnection and successfully publishes the Last Will message to the clients subscribed to the Will Topic, the Last Will message is removed from the session.
* **Normal Disconnection**. If the broker receives a `DISCONNECT` packet with Reason Code 0x00 (Normal disconnection) from the client, the broker will not publish the Last Will message, and it will be removed from the session.

## Parameters of the Last Will

The feature “Last Will and Testament” was introduced in [MQTT 3.1](https://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html#connect) with the following parameters:
* **Will Topic**. The MQTT topic where the Last Will message will be published.
* **Will Message**. The content of the Last Will. This can be an empty message.
* **Will QoS**. The Quality of Service level for the Last Will message ([which QoS to use?](/docs/{{docsPrefix}}mqtt-broker/user-guide/qos)).
* **Will Retain**. Use the Retain flag if the Will Message should be available to any new clients subscribing to the topic after the message is published. This is useful for status messages that need to stay available until updated.

In [MQTT 5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901040), the feature gained additional properties:
* **Payload Format Indicator**. If true, it indicates the payload is UTF-8 encoded text. If false or not set, it assumes binary data.
* **Content Type**. Describes the format of the Will Message content.
* **Will Delay Interval**. The amount of time the broker waits after an unexpected disconnection before sending the Will Message. If the Will Delay Interval is not set or is set to 0, the Will Message will be sent immediately.
  * This helps avoid sending the Will Message if a temporary network issue occurs and the client reconnects before the delay period ends.
* **Message Expiry Interval**. The time limit for delivering the Will Message to subscribers. If the interval passes, the message won’t be sent to new subscribers. 
  * This may be useful for time-sensitive messages that lose relevance after a certain period. For example, a temperature reading that is several hours old may no longer be useful, so it should expire and not be sent to new subscribers.
* **Response Topic**. A topic where the broker can publish a response after sending the Will Message.
* **Correlation Data**. Binary data used to match a response message to the Will Message.
* **User Properties**. Custom metadata in the form of key-value pairs that the client can include in the Will Message.

{% capture difference %}
Unsure how to set up a session with the Last Will? Check out the WebSocket Client [documentation](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/websocket-client/#last-will) for detailed step-by-step instructions.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Last Will with delay

The **Will Delay Interval** specifies how long the broker needs to wait before publishing the Last Will message after an ungraceful disconnection. 
This feature allows clients to reconnect within the delay interval without triggering the Last Will message, which **can be useful in situations where brief network interruptions occur**.

If a client disconnects unexpectedly and doesn't reconnect before the Will Delay Interval expires, the broker will publish the Last Will message to the Will Topic. 
If the client reconnects within the delay, the Last Will message is discarded, as the client is considered back online.

Example with Will Delay Interval:

* **Clean Start = 0 (false)**
* **Session Expiry Interval = 1 hour**
* **Will Delay Interval = 2 minutes**

In this case:

* If the client disconnects unexpectedly, the session will remain active for up to 1 hour, and the broker will wait for 2 minutes before sending the Last Will message. 
* If the client reconnects within 2 minutes, the Last Will message will not be published, and the session will continue.
* If the client reconnects after 2 minutes but within 1 hour, the session will resume, but the Last Will message may have already been sent.
* If the client does not reconnect within the session expiry time (1 hour), the session will be discarded. However, the Last Will message should have already been sent after the 2-minute delay following the unexpected disconnection.

**Note**: if the Session Expiry Interval is shorter than the Will Delay Interval, the Last Will message will be delivered when the session expires.

## Last Will as retained message

The **Retain Flag** is used to keep the Last Will message on the broker, so that new subscribers can receive it immediately upon subscribing to the relevant topic, even if the message was published before they subscribed.

If a client disconnects unexpectedly, its Last Will message indicates an important state change. By using the **Retain Flag = true**, this message will be **stored** by the broker and **sent to any future subscribers** of the topic. 
For example, if a new device joins a network after a client disconnects, it will still receive the "offline" or "disconnected" Last Will message.

## Last Will guide with TBMQ WebSocket Client

In this guide, we will demonstrate how the Last Will feature works in the TBMQ using a WebSocket client. 
By simulating an ungraceful disconnection, you'll see how the broker publishes the Last Will message to inform other connected clients.

### Step 1. Add client "Security Camera"

To add a new client **Security Camera**, which will publish a Last Will message, follow these steps:

1. Navigate to the _WebSocket Client_ page and click on _Select Connection_ icon.
2. Click the _Add new connection_ button. 
3. Set the connection name as _Security Camera_, then configure the Last Will topic and payload.
4. Click _Connect_ to establish the client connection.

{% include images-gallery.html imageCollection="ws-connection-add-camera" %}

### Step 2. Add client "Security Hub"

Now let's add another connection, **Security Hub**, which will receive the Last Will message from the **Security Camera**:

1. Once again, click on the _Add new connection_ button.
2. Set the connection name as _Security Hub_.
3. Click _Connect_.
4. Add subscription with the default topic filter `sensors/#` to receive Last Will message.

{% include images-gallery.html imageCollection="ws-connection-add-hub" %}

### Step 3. Trigger an ungraceful disconnection

To publish the Last Will message, the connection between the client and the broker must be terminated ungracefully. To do this in TBMQ, follow these steps:

1. Click on _Select Connection_ icon and open the _Security Camera_ session details window.
2. Click _Disconnect client_ to forcefully terminate the connection.
3. In the _Messages_ table of the WebSocket client _Security Hub_ you should see the received Last Will message.

{% include images-gallery.html imageCollection="ws-connection-ungraceful-disconnect" %}
