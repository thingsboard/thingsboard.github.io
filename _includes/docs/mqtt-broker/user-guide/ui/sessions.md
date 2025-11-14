
* TOC
{:toc}

The respective page offers the capability to observe and analyze all the sessions stored within the broker's system. 
This encompasses both the existing online sessions, representing clients currently connected to the broker, and the disconnected sessions of persistent clients. 
By accessing this page, users can gain a comprehensive overview of all stored sessions, enabling them to monitor and 
manage both the active and historical records of client interactions with the broker.

To access the detailed information of the current TBMQ sessions, please follow these steps:

1. Open the 'Sessions' page in the left-hand menu.
2. Click on the Session table row to open a window with session details.

In the "Session Details" users can disconnect or remove client session:
* To **disconnect** a client, click on the "Disconnect client" button. Please note that only `Connected` clients can be disconnected.
* To **remove** a client session, click on the "Remove session" button. Keep in mind that only `Disconnected` clients can be removed.

{% include images-gallery.html imageCollection="sessions-details" %}

## Session Details

The **Details** tab contains the next information: 
   * **Connected Status** (Connected/Disconnected).
   * **Connected At** - timestamp when the client connected.
   * **Disconnected At** - for persistent disconnected clients, timestamp when the client disconnected.
   * **Keep Alive** (seconds) - indicates the duration for which the broker and client can remain without communication before the session is closed.
   * **Node ID** - broker node to which the client is/was connected to.
   * **Clean Start** (clean/persistent session) - if true, the broker will discard any available previous session info and messages, and start a new one.
   * **Session expiry interval** - for persistent disconnected clients, for how long the client session information is stored after the connection is lost.
   * **Session end** - for persistent disconnected clients, when the session info and messages will be removed.
   * **Client ID** - the identifier of the client.
   * **Client IP** - the IP address of the client.
   * [**Client type**](/docs/{{docsPrefix}}mqtt-broker/user-guide/mqtt-client-type) (Device/Application).
   * [**Client Credentials**](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/mqtt-client-credentials/) that authenticated current session.
   * **MQTT version** - determines which version of MQTT protocol to be used - MQTT 3.1 (3), MQTT 3.1.1 (4), or MQTT 5.0 (5).

## Subscriptions

On the **Subscriptions** tab users can view various details about the subscriptions associated with a session, such as:
{% include templates/mqtt-broker/subscription-options.md %}

While session details are generally read-only, users can effectively manage their subscriptions within the session, making additions, removals, and edits as needed. 
Here are the available actions for managing subscriptions:
* To **add** a new subscription, click on the "Add Subscription" button. 
* To **remove** a subscription, click on the "Delete" icon associated with the specific subscription. 
* To **edit** existing Topic filter or QoS, make the desired changes in the provided form and click the "Update" button.

{% include images-gallery.html imageCollection="sessions-subscriptions" %}

## Metrics

The **Metrics** tab provide detailed insights into the flow of MQTT messages within the session that may be helpful in monitoring the performance and reliability of message delivery:
* **Received PUBLISH Messages**. The total number of PUBLISH messages received by the client.
* **Received QoS 0 Messages**. The count of received messages with QoS level 0 ("AT_MOST_ONCE").
* **Received QoS 1 Messages**. The count of received messages with QoS level 1 ("AT_LEAST_ONCE").
* **Received QoS 2 Messages**. The count of received messages with QoS level 2 ("EXACTLY_ONCE").
* **Sent PUBLISH Messages**. The total number of PUBLISH messages sent by the client.
* **Sent QoS 0 Messages**. The count of sent messages with QoS level 0 ("AT_MOST_ONCE").
* **Sent QoS 1 Messages**. The count of sent messages with QoS level 1 ("AT_LEAST_ONCE").
* **Sent QoS 2 Messages**. The count of sent messages with QoS level 2 ("EXACTLY_ONCE").

{% include images-gallery.html imageCollection="sessions-metrics" %}

