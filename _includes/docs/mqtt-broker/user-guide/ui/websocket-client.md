* TOC
{:toc}

The TBMQ WebSocket Client is a browser-accessible tool aimed at simplifying the debugging process and testing of MQTT clients across various scenarios. 
Leveraging the [MQTT over WebSocket](/docs/mqtt-broker/user-guide/mqtt-over-ws/) feature, it's designed with principles of simplicity and ease of use in mind.
It offers seamless management of MQTT clients, subscription to topics, and message reception or publication.

TBMQ WebSocket Client utilizes the [MQTT.js](https://github.com/mqttjs/MQTT.js) library for communication between client and broker.

![image](/images/mqtt-broker/user-guide/ui/ws-overview.png)

### Connections

TBMQ WebSocket Client allows managing multiple MQTT client connections simultaneously.
It provides an interface where you can conveniently initiate, monitor and terminate multiple MQTT clients.

#### Add connection

To add a new Connection, please follow these steps:

1. Go to the _WebSocket Client_ page and click the _Select Connection_, represented by the _expand more_ icon.
2. Click on the _Add new connection_ button. Fill in the necessary fields to create and connect an MQTT client, then click _Connect_.

{% include images-gallery.html imageCollection="ws-connection-add" %}

#### Edit connection

TBMQ enables modification of WebSocket Client connection parameters even after the connection has been established.
It is important to understand that changes made to the connection parameters will have immediate effect.

If the client is connected at the time of modifications, TBMQ will gracefully disconnect the current session first. After it will initiate a new session with the updated settings.
This ensures that the changes you make are applied instantly, providing seamless adaptability while maintaining the integrity of the client's ongoing activities.

In order to modify your WebSocket Client connection, please follow these steps:
1. Go to the _WebSocket Client_ page and click on the arrow icon to expand the list of connections.
2. Click on the edit icon of the connection you wish to change.
3. Make changes and click Connect to save changes.

{% include images-gallery.html imageCollection="ws-connection-edit" %}

#### Delete connection

In order to delete the WebSocket Client connection, please follow these steps:
1. Go to the _WebSocket Client_ page and click on the arrow icon to expand the list of connections.
2. Click on the trash icon of the connection you wish to delete.
3. A confirmation prompt will appear. Click _Yes_ to finalize the deletion.

{% include images-gallery.html imageCollection="ws-connection-delete" %}

#### Connection settings

WebSocket connections allow users to establish and configure various parameters, including client credentials, session settings, and last will settings.

##### Connection details
* **Name**. Name of the WebSocket Client connection, must be unique.
* **URL**. Typically, contains the protocol (e.g., 'ws', 'wss'), followed by the hostname and port number of your MQTT broker. 
/mqtt is standard path that should be used for MQTT over Websockets. Example: 'ws://localhost:8084/mqtt'.
* **Authentication**. TBMQ allows to create websocket connection with different types of handling credentials details like clientID (required), username, password:
  * **Auto-generated credentials**. Credentials with random Client ID, random Username and empty Password. Please note that corresponding Credentials will be created.
  * **Custom authentication**. Credentials with custom Client ID, Username, Password.
  * **Use existing credentials**. User selects existing credentials of the [Basic](/docs/mqtt-broker/security/#basic-authentication) type and, if required, input Password.

Password input field appears when the selected credentials require password to establish the connection.

{% include images-gallery.html imageCollection="ws-connection-details" %}

##### Advanced settings

* **Clean start**. When enabled (true), the broker will discard any previous session and will start a new one. This means that all subscriptions will be removed and all undelivered messages will be lost.
* **Keep alive**.  This is the idle time the MQTT client is willing to wait between control packets (PUBLISH, PINGREQ, etc.) sent to the server. It allows you to keep the connection alive during periods of inactivity.
* **Connect timeout**. This is the maximum wait time the client should wait for the MQTT CONNACK packet that acknowledges the connection. If the acknowledgement is not received within this time, the connection is considered unsuccessful.
* **Reconnect period**. This is the interval between two reconnection attempts when the MQTT client gets disconnected from the broker.
* **MQTT version**.  Determines which version of MQTT protocol to be used - MQTT 3.1 (3), MQTT 3.1.1 (4), or MQTT 5.0 (5).

If you select MQTT Version 5, additional parameters are available:
* **Session Expiry Interval**. Sets the time (in seconds) the broker should keep the session alive after a client disconnects.
* **Max Packet Size**. The maximum payload size (in bytes) that the client is willing to accept from the broker.
* **Topic Alias Maximum**. The highest value that the client will accept as a Topic Alias sent by the broker.
* **Receive Maximum**. The maximum number of QoS 1 and QoS 2 messages that can be processed concurrently.
* **Request Response Information**. When set to true, MQTT broker will return additional information about the publish operations in the response.

{% include images-gallery.html imageCollection="ws-connection-advanced" %}

##### Last will

The Last Will is an optional feature in MQTT that lets user specify a message to be sent by the MQTT broker, in the event of an ungraceful disconnection of the client.
Here's a closer look at the Last will properties:
* **Topic**. MQTT topic on which your Last Will message will be published.
* **QoS**. Quality of Service level for the Last Will message.
* **Payload**. The content of the Last Will message.
* **Retain**. Determines whether the broker should keep the last will message after it's been delivered. If true, the will message is stored by the broker and delivered to any future subscribers to the topic.

In case you select MQTT Version 5, please configure additional features:
* **Payload Format Indicator**. When set to true, it indicates the payload is UTF-8 encoded character data. If false or unset, the payload is assumed to be unspecified binary data.
* **Content Type**. Describes the form of the content carried by the will message.
* **Will Delay Interval**. The time period the broker needs to wait after the client gets disconnected ungracefully, before publishing the will message.
* **Message Expiry Interval**. The duration within which the will message should be delivered since it was published.
* **Response Topic**. A topic to which the broker may publish a response after broadcasting the will message.
* **Correlation Data**. Binary data used to match the response message from the broker after it broadcasts the will message.
* **User Properties**. It allows the client to include additional customized metadata to the Will message, in the form of an object of key-value pairs.

{% include images-gallery.html imageCollection="ws-connection-will" %}

#### Connection status

In TBMQ, we provide a feature to store the temporary logs of the WebSocket Client statuses for your convenience. This allows you to monitor and troubleshoot the behavior of your client connections more effectively.
To access these logs, simply hover your cursor over the current status label. This action brings up a detailed status update history, providing vital insight into the sequence of connection-related events.

The status of the WebSocket Client may be one of the following:
1. **Connected**. Shows successfully established connection to the broker.
2. **Disconnected**. Indicated the WebSocket client has closed the connection with the broker.
3. **Reconnecting** This status is displayed when the client is in the process of re-establishing a connection with the broker. The reconnecting can be cancelled clicking on the button Cancel in the top right corner.
4. **Connection failed**. Indicates that the client was unable to establish a connection with the broker. This status may also include additional information such as the cause of the failure - for instance, authentication issues, session taken over, among others.

![image](/images/mqtt-broker/user-guide/ui/ws-logs.png)

### Subscriptions

MQTT subscriptions are an integral part of the MQTT publish-subscribe messaging protocol, allowing clients to subscribe to one or more topics.
Users can manage subscriptions by creating new ones, modifying existing ones, or deleting unnecessary ones.

#### Add subscription

In order to add Subscription please follow next steps:
1. Go to the _WebSocket Client_ page and click on the button _Add Subscription_, represented by the _plus_ icon.
2. Make changes and click _Add_ to save them.

{% include images-gallery.html imageCollection="ws-subscription-add" %}

#### Edit subscription

To modify a subscription, select the edit icon located in the respective row to open the dialog _Edit subscription_.
After making necessary changes,  remember to confirm by clicking on the _Save_ button.

Please note that if you modify an existing subscription while the client is connected, TBMQ will first unsubscribe from the existing topic before subscribing to the updated one. 
After successfully resubscribing, the client will begin receiving messages published to the new topic.

{% include images-gallery.html imageCollection="ws-subscription-edit" %}

#### Delete subscription

Below are the steps to remove a subscription:
1. Identify the specific subscription in the Subscriptions list. Click on the delete icon situated in the corresponding row.
2. A confirmation prompt will appear. To complete the deletion process, click _Yes_.
   
{% include images-gallery.html imageCollection="ws-subscription-delete" %}

#### Subscription settings

Subscription settings encompass various configurations related to how a client subscribes to MQTT topics. 
These settings typically include parameters such as the topic filter, QoS (Quality of Service) level, and any additional options specific to the MQTT client or broker being used.

* **Topic filter**. The MQTT topic filter that you want to subscribe to. **Must be unique per connection.**
* **QoS**. Quality of Service of the subscription.
* **Retain as Published**. When true, messages forwarded using this subscription keep the RETAIN flag they were published with.
If false, messages have the RETAIN flag set to 0.
* **Retain Handling** This option determines how the broker should handle retained messages when the client subscribes to a topic.
  * 0 - send retained messages at subscription time;
  * 1 - send retained messages at subscription time if the subscription does not already exist;
  * 2 - do not send retained messages at subscription time.
* **No local**. When set to true, the broker will not forward messages from this client back to the connection on which this subscription was made.
* **Color**. Color is used for easier differentiation of the messages in the messages table. Can be changed.

![image](/images/mqtt-broker/user-guide/ui/ws-subscription-overview.png)

### Messages

The Messages table functions as a message log, displaying the most recent messages for your review and reference. 
Each row in this table corresponds to a single published or received message and provides a snapshot of key message attributes:
1. **Type**. Identifies whether a message was Received or Published.
2. **Topic**. Lists the topic associated with the message.
3. **QoS**. Displays the Quality of Service level associated with the message.
4. **Retain**. Shows whether the message has been marked as _Retain_ by the sender.
5. **Payload**. Lays out the preview of the content embedded within the message.
   If your message contains a payload, you can inspect it in detail by clicking on the Info icon button. This action will open a dialog that will not only allow you to read the payload but also gives you the option to copy it to your clipboard if needed.
6. **Properties** icon button extends access to further settings contained within a message, such as User properties, Content type, Topic Alias and other.

{% include images-gallery.html imageCollection="ws-table-msg" %}

#### Messages filtering
The table messages can be filtered by:
* **Type 'All/Received/Published'** - click on the type label in the header of the Messages table.
* **Topic/QoS/Retain** - click on the _filter_ icon next to _Clear messages_ button.

![image](/images/mqtt-broker/user-guide/ui/ws-table-filter.png)

#### Publish a message

The WebSocket Client page includes a user-friendly interface features that allow users to publish messages using the WebSocket MQTT protocol.
In order to successfully publish a message using TBMQ, please make sure that:
* **Client is connected**.
* **Topic is specified**. The topic might not be specified in case the Topic Alias feature is used.
* **Message is valid**, if selected JSON format.

Here is a list of basic options for publishing a message, along with brief explanations of their usage:
* **Topic**. The MQTT topic to which your message will be published.
* **QoS**. Quality of Service level guaranteeing the delivery of your message:
  * 0 - At most once (the message may or may not be delivered);
  * 1 - At least once (the message will be delivered, but duplicates can occur);
  * 2 - Exactly once (the message will be delivered exactly once).
* **Retain**. When set to true, the broker stores the last message and its QoS for this topic. All future subscribers for a topic will receive the last retained message for that topic.
* **Color**. Used to mark the published messages in the messages table for easier recognition.
* **Format**. Used to specify formatting for displaying the message.
    * JSON. Has validation of the JSON format of the message content.
    * String. Has no validation.

After filling out the necessary information and settings, locate and **click on the Send icon** to publish your message.
The message will now be dispatched to the broker and relayed to all clients who are subscribed to the given topic.

![image](/images/mqtt-broker/user-guide/ui/ws-publish-msg.png)

For MQTT clients utilizing **MQTT Version 5**, there are also additional parameters available to further customize your message publishing experience. 
The combination of these features provides a comprehensive and flexible environment for MQTT message handling.

To set the published message properties please click on the button _Properties_ in the bottom left corner to open dialog.
Below is a brief explanation of each setting:
* **Payload Format Indicator**. When set to true, indicates that the payload is UTF-8 encoded character data. The default false signifies unspecified binary data.
* **Content Type**. Describes the format of the application message’s data.
* **Message Expiry Interval** The lifetime of the application message in seconds.
* **Topic Alias**. Integer value that can be used as a shorthand notation for the topic. If WebSocket connection has Topic Alias Max value 0 - the usage of topic alias is forbidden.
* **Correlation Data**. Binary data used as correlation identifier.
* **Response Topic**. String which is used as the Topic Name for a response message.
* **User Properties**. Allows user-defined metadata in form of key-value pairs.

![image](/images/mqtt-broker/user-guide/ui/ws-publish-advanced-params.png)
