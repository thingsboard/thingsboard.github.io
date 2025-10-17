
* TOC 
{:toc}

TBMQ Kafka Integration enables seamless communication with **Apache Kafka**. It allows TBMQ to **publish messages** to the external Kafka clusters and can be useful for the following scenarios:

- **Streaming IoT Data** – Forwarding device telemetry, logs, or events to Kafka for processing and storage.
- **Event-Driven Architectures** – Publishing messages to Kafka topics for real-time analytics and monitoring.
- **Decoupled System Communication** – Using Kafka as a buffer between TBMQ and downstream applications.

## Data Flow Overview

TBMQ Kafka Integration processes messages and forwards them to an external Kafka cluster in the following steps:

1. **Device (client) publishes an MQTT message** to a topic that matches the Integration's **Topic Filters**.
2. **TBMQ broker receives the message** and forwards to TBMQ Integration Executor.
3. **TBMQ Integration Executor processes the message**, formats it accordingly, and sends it to a configured **Kafka topic**.
4. **Kafka consumers process the message** in downstream systems.

![image](/images/mqtt-broker/integrations/tbmq-kafka-integration.png)

## Prerequisites

Before setting up the integration, ensure the following:

- A running **[TBMQ](/docs/{{docsPrefix}}mqtt-broker/install/installation-options/) instance**.
- An external service ready to receive Kafka message (e.g. **Confluent Cloud**).
- A client capable of publishing MQTT messages (e.g., **TBMQ WebSocket Client**).

## Create TBMQ Kafka Integration

1. Navigate to the **Integrations** page and click the **"+"** button to create a new integration.
2. Select **Kafka** as the integration type and click **Next**.
3. On the **Topic Filters** page click **Next** to subscribe to the default topic `tbmq/#`.

{% include images-gallery.html imageCollection="add-kafka-integration" %}

<ol start="4">
  <li>In the <strong>Configuration</strong> step enter the <strong>Bootstrap servers</strong> (Kafka broker addresses).</li>
</ol>
{% capture integrationTypes %}
Kafka<br><small>Common/Docker </small>%,%common%,%templates/mqtt-broker/user-guide/integrations/kafka/kafka-common-and-docker-integration%br%
Confluent Cloud<br><small>Cloud solution</small>%,%confluent%,%/templates/mqtt-broker/user-guide/integrations/kafka/kafka-confluent-integration{% endcapture %}
{% include content-toggle.liquid content-toggle-id="integrationTypes" toggle-spec=integrationTypes %}
<ol start="5">
  <li>Click <strong>Add</strong> to save the integration.</li>
</ol>

> You can test the connectivity to the configured Kafka brokers by using the 'Check connection' button. 
> This action creates an admin client that connects to the Kafka cluster and verifies whether the specified topic exists on the target brokers.
> Even if the topic is missing, you can still proceed with creating the integration. 
> If the Kafka cluster has `auto.create.topics.enable` set to `true`, the topic will be automatically created when the first message is published.

### Topic Filters

{% include templates/mqtt-broker/user-guide/integrations/topic-filters.md %}

### Configuration

|**Field**|**Description**|
|:-|:-|-
| **Send only message payload** | If enabled, only the raw message payload is forwarded. If disabled, TBMQ wraps the payload in a JSON object containing additional metadata. |
| **Bootstrap servers** | The Kafka broker addresses (comma-separated list of hostnames/IPs and ports). |
| **Topic** | The Kafka topic where messages will be published. |
| **Key** | (Optional) Used for partitioning messages. If specified, Kafka hashes the key to consistently assign messages to the same partition. |
| **Client ID prefix** | (Optional) Defines the prefix for the Kafka client ID. If not set, the default `tbmq-ie-kafka-producer` is used. |
| **Automatically retry times if fails** | Number of retries before marking a message as failed. |
| **Produces batch size in bytes** | Maximum batch size before sending messages to Kafka. |
| **Time to buffer locally (ms)** | Time in milliseconds to buffer messages locally before sending. |
| **Client buffer max size in bytes** | Maximum memory allocated for buffering messages before sending them to Kafka. |
| **Number of acknowledgments** | Specifies Kafka's acknowledgment mode: `all`, `1`, `0`. |
| **Compression** | Defines the compression algorithm used for messages: `none`, `gzip`, `snappy`, `lz4`, `zstd`. |
| **Other properties** | A collection of key-value pairs for additional Kafka producer configurations. |
| **Kafka headers** | Custom headers added to Kafka messages. |
| **Metadata** | Custom metadata that can be used for processing and tracking. |
|---

### Events

{% include templates/mqtt-broker/user-guide/integrations/events.md %}

## Sending an Uplink Message

To send a message, follow these steps:

1. Navigate to the **WebSocket Client** page.
2. Select 'WebSocket Default Connection' or any other available working connection, then click **Connect**. Make sure the 'Connection status' is shown as `Connected`.
3. Set the 'Topic' field to `tbmq/kafka-integration` to match the Integration's 'Topic Filter' `tbmq/#`.
4. Click the **Send** icon to publish the message.
5. If successful, the message should be available in your Kafka service under the topic `tbmq.messages`.

{% include images-gallery.html imageCollection="send-uplink-message-kafka" %}
