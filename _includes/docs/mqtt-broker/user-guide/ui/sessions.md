
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

### Session Details

The **Details** tab contains the next information: 
   * **Connected Status** (Connected/Disconnected).
   * **Connected At** time. 
   * **Disconnected At** time.
   * **Keep Alive** (seconds) - indicates the duration for which the broker and client can remain without communication before the session is closed.
   * **Node ID**.
   * **Clean Start** (clean/persistent session) - if true, the broker will discard any available previous session info and messages, and start a new one.
   * **Client ID**.
   * **Client IP**.
   * [**Client type**](docs/mqtt-broker/user-guide/mqtt-client-type) (Device/Application).
   * [**Client Credentials**](docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) that authenticated current session.
   * **MQTT version** - determines which version of MQTT protocol to be used - MQTT 3.1 (3), MQTT 3.1.1 (4), or MQTT 5.0 (5).

### Subscriptions

On the **Subscriptions** tab users can view various details about the subscriptions associated with a session, such as:
* **Topic filter**. The MQTT topic filter.
* **QoS**. Quality of Service of the subscription.
* Subscription options (for MQTT 5.0 only)
  * **Retain as Published**. When true, messages forwarded using this subscription keep the RETAIN flag they were published with.
  * **Retain Handling** This option determines how the broker should handle retained messages when the client subscribes to a topic.
    * 0 - send retained messages at subscription time;
    * 1 - send retained messages at subscription time if the subscription does not already exist;
    * 2 - do not send retained messages at subscription time.
  * **No local**. When set to true, the broker will not forward messages from this client back to the connection on which this subscription was made.
  * **Subscription Identifier**. It is a unique numerical value that assigned to subscription, allowing the client to distinguish messages from different subscriptions.

While session details are generally read-only, users can effectively manage their subscriptions within the session, making additions, removals, and edits as needed. 
Here are the available actions for managing subscriptions:
* To **add** a new subscription, click on the "Add Subscription" button. 
* To **remove** a subscription, click on the "Delete" icon associated with the specific subscription. 
* To **edit** existing Topic filter or QoS, make the desired changes in the provided form and click the "Update" button.

{% include images-gallery.html imageCollection="sessions-subscriptions" %}

### Metrics

The **Metrics** tab provide detailed insights into the flow of MQTT messages within the session that may be helpful in monitoring the performance and reliability of message delivery:
* **Received PUBLISH Messages**. The total number of PUBLISH messages received by the client.
* **Received QoS 0 Messages**. The count of received messages with Quality of Service (QoS) level 0.
* **Received QoS 1 Messages**. The count of received messages with Quality of Service (QoS) level 1.
* **Received QoS 2 Messages**. The count of received messages with Quality of Service (QoS) level 2.
* **Sent PUBLISH Messages**. The total number of PUBLISH messages sent by the client.
* **Sent QoS 0 Messages**. The count of sent messages with Quality of Service (QoS) level 0.
* **Sent QoS 1 Messages**. The count of sent messages with Quality of Service (QoS) level 1.
* **Sent QoS 2 Messages**. The count of sent messages with Quality of Service (QoS) level 2.

{% include images-gallery.html imageCollection="sessions-metrics" %}

