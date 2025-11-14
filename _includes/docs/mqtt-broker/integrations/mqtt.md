
* TOC
{:toc}

TBMQ MQTT Integration enables forwarding messages to **external MQTT brokers**, allowing real-time data delivery to third-party platforms. This is useful in scenarios such as:

- Data from TBMQ needs to be **forwarded** to an external MQTT broker or IoT platform.
- TBMQ is used as an **intermediary to route data** between internal sources and external MQTT-based systems.

## Data Flow Overview

MQTT Integration processes messages and forwards them to an external MQTT broker or system in the following steps:

1. **Device (client) publishes an MQTT message** to a topic that matches the Integration's **Topic Filters**.
2. **TBMQ broker receives the message** and forwards to TBMQ Integration Executor.
3. **TBMQ Integration Executor processes the message**, formats it accordingly, and forwards it to the external MQTT broker or system.
4. **External system receives the message** and processes the data as needed.

![image](/images/mqtt-broker/integrations/tbmq-mqtt-integration.png)

## Prerequisites

Before setting up the integration, ensure the following:

- A running **[TBMQ](/docs/{{docsPrefix}}mqtt-broker/install/installation-options/) instance**.
- A client capable of publishing MQTT messages (e.g., **TBMQ WebSocket Client**).
- A client capable of receiving MQTT messages (e.g., **TBMQ WebSocket Client**).

## Create TBMQ MQTT Integration

1. Navigate to the **Integrations** page and click the **"+"** button to create a new integration.
2. Select **MQTT** as the integration type and click **Next**.
3. On the **Topic Filters** subscribe to the topic `tbmq/mqtt-integration` and click **Next**.
4. In the **Configuration** step:
   * Enter the **Host** (`localhost`);
   * Enter the **Port** (`1883`);
   * Set 'Dynamic topic name' to `false` and 'Topic name' to `sensors/mqtt-integration`;
   * Set 'Credentials' type to `Basic` and 'Username' to `tbmq_websockets_username`;
5. Click **Add** to save the integration.

{% include images-gallery.html imageCollection="add-mqtt-integration" %}

{% capture mqtt_integration_localhost_dynamic_topic %}
**Important: When configuring an integration to publish messages back to TBMQ, make sure to disable "Dynamic topic name" and ensure that the publish topic does not overlap with the integration's topic filter, to prevent creating an infinite message loop**.
{% endcapture %}
{% include templates/warn-banner.md content=mqtt_integration_localhost_dynamic_topic %}

> You can test the connectivity to the configured MQTT broker by using the 'Check connection' button. 
> This will create an MQTT client that attempts to connect to the broker and then immediately disconnects.

### Topic Filters

{% include templates/mqtt-broker/user-guide/integrations/topic-filters.md %}

### Configuration

|**Field**|**Description**|
|:-|:-|-
| **Send only message payload** | If enabled, the incoming message's payload is forwarded as is. If disabled, a JSON object with the payload and other properties is sent. |
| **Host** | MQTT broker host. |
| **Port** | MQTT broker port. |
| **Client ID** | Client identifier used for connecting to the external broker. |
| **Dynamic topic name** | If enabled, the message will be forwarded with the topic name from the incoming message. |
| **Topic name** | If **Dynamic topic name** is disabled, this Topic name is used to send message. |
| **Credentials** | Supported authentication options: |
| | **Anonymous** – No authentication. |
| | **Basic Authentication** – Uses `Username` and `Password` for authentication. |
| | **PEM-based authentication** – Uses PEM certificate to authenticate. |
| | **Enable SSL** – Enables a secure connection using SSL/TLS. |
| **Keep alive (seconds)** | Indicates the duration for which the broker and client can remain without communication before the session is closed. |
| **Connect timeout (seconds)** | Time to wait before a 'CONNACK' is received. |
| **Reconnect period (seconds)** | Defines how often TBMQ should attempt to reconnect if the connection is lost. |
| **Dynamic QoS** | If enabled, the message will be forwarded with QoS from the incoming message. |
| **QoS** | If **Dynamic QoS** is disabled, you can set the desired QoS. |
| **Dynamic retain** | If enabled, the message will be forwarded with the Retain flag from the incoming message. |
| **Retain** | If **Dynamic retain** is disabled, you can set the desired Retain as "true" or "false". |
| **Metadata** | Custom metadata that can be used for additional processing. |
|---

### Events

{% include templates/mqtt-broker/user-guide/integrations/events.md %}

## Sending an Uplink Message

To send a message, follow these steps:

1. Navigate to the **WebSocket Client** page.
2. Select 'WebSocket Default Connection' or any other available working connection, then click **Connect**. Make sure the 'Connection status' is shown as `Connected`.
3. Set the 'Topic' field to `tbmq/mqtt-integration` to match the Integration's 'Topic Filter'. 
4. Click the **Send** icon to publish the message. 
5. If successful, two new messages should appear in the 'Messages' table:

* One sent by the **WebSocket Client**.
* One received from the **MQTT Integration** with message payload similar to:
```json
{
   "payload": "eyJ0ZW1wZXJhdHVyZSI6MjV9",
   "topicName": "tbmq/mqtt-integration",
   "clientId": "tbmq_7QUvZzow",
   "eventType": "PUBLISH_MSG",
   "qos": 1,
   "retain": false,
   "tbmqIeNode": "tbmq_ie_node",
   "tbmqNode": "tbmq_node",
   "ts": 1742554969254,
   "props": {},
   "metadata": {
      "integrationName": "MQTT integration"
   }
}
```

Message description:

- **payload**: Base64-encoded content of the MQTT message (e.g., `"eyJ0ZW1wZXJhdHVyZSI6MjV9"` is a JSON object `{"temperature": 25}`).
- **topicName**: The MQTT topic to which the message was published.
- **clientId**: The ID of the MQTT client that published the message.
- **eventType**: Type of MQTT event, here it's a published message (the only supported type for now).
- **qos**: Quality of Service level used for the incoming message.
- **retain**: Indicates if the message is a retained MQTT message.
- **tbmqIeNode**: Node ID of the Integration Executor service that handled the message.
- **tbmqNode**: Node ID of the TBMQ broker that received the message.
- **ts**: Timestamp (in milliseconds) when the message was received.
- **props**: MQTT 5.0 user properties or other MQTT properties.
- **metadata**: Additional metadata added from integration configuration, e.g., the name of the integration that handled the message, added by default.

{% include images-gallery.html imageCollection="send-uplink-message" %}
