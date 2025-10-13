Publishes messages to [Apache Kafka](https://kafka.apache.org/){:target="_blank"} topics, sending the incoming message data as the record value.

## Configuration

### Topic and key configuration

Define the target Kafka topic and optional partition key for message routing.

- **Topic pattern** – The name of the Kafka topic to publish messages to. Supports [templates](/docs/{{docsPrefix}}user-guide/templatization/).
- **Key pattern** – The partition key used to determine which partition receives the message. Supports templates. Leave empty if no specific partitioning is required.

### Producer configuration

Configure Kafka producer behavior for message delivery, batching, and reliability.

- **Automatically retry times if fails** – The number of retries (`retries`) for the Kafka producer if the record send fails.
  Producer will retry sending records that failed due to transient errors. Set to `0` to disable retries.

- **Produces batch size in bytes** – The batch size (`batch.size`) for the Kafka producer. The producer attempts to batch records together into fewer requests whenever multiple
  records are being sent to the same partition. This helps improve throughput. A batch size of `0` will disable batching.

- **Time to buffer locally (ms)** – The linger time (`linger.ms`) for the Kafka producer. The amount of time the producer waits before sending a batch to allow more records to
  accumulate. Setting this to a value greater than `0` will add a delay to allow more records to accumulate, improving batching at the cost of increased latency.

- **Client buffer max size in bytes** – The buffer memory (`buffer.memory`) for the Kafka producer. The total bytes of memory the producer can use to buffer records waiting to be
  sent to the server.

- **Number of acknowledgments** – The number of acknowledgments (`acks`) the producer requires the broker to receive before considering a request complete.
  Available options:
    - **-1 (all)** – The producer waits for the full set of in-sync replicas to acknowledge the record. This provides the strongest durability guarantee but has the highest
      latency.
    - **0** – The producer does not wait for any acknowledgment from the broker. Messages may be lost if the broker fails, but this provides the lowest latency.
    - **1** – The producer waits for the leader to write the record to its local log but does not wait for full acknowledgment from followers. This is a balance between durability
      and latency.

### Connection configuration

Configure the connection to your Kafka cluster.

- **Bootstrap servers** – A comma-separated list of Kafka broker addresses in the format `host:port`. The producer uses these addresses to establish a connection to the cluster.

### Advanced settings

Configure additional Kafka producer properties, message headers, and character encoding.

- **Other properties** – Custom key-value pairs for advanced Kafka producer configuration.
  These properties are passed directly to the Kafka producer client. Common use cases include SSL/TLS configuration (e.g., `ssl.keystore.location`, `ssl.truststore.location`).

- **Add Message metadata key-value pairs to Kafka record headers** – When enabled, all message metadata key-value pairs are added to the Kafka record headers with the prefix
  `tb_msg_md_`.

- **Charset encoding** – The character encoding used when converting message metadata values to byte arrays for Kafka headers.
  Only applies when **Add Message metadata key-value pairs to Kafka record headers** is enabled.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbKafkaNodeConfiguration",
  "type": "object",
  "properties": {
    "topicPattern": {
      "type": "string",
      "description": "Name of the Kafka topic (supports templatization)."
    },
    "keyPattern": {
      "type": [
        "string",
        "null"
      ],
      "description": "Partition key for message routing (supports templatization)."
    },
    "bootstrapServers": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated list of Kafka broker addresses (host:port)."
    },
    "retries": {
      "type": "integer",
      "minimum": 0,
      "description": "Number of retries if record send fails."
    },
    "batchSize": {
      "type": "integer",
      "minimum": 0,
      "description": "Producer batch size in bytes."
    },
    "linger": {
      "type": "integer",
      "minimum": 0,
      "description": "Time to buffer records locally in milliseconds."
    },
    "bufferMemory": {
      "type": "integer",
      "minimum": 0,
      "description": "Total bytes of memory for buffering records."
    },
    "acks": {
      "type": "string",
      "enum": [
        "-1",
        "0",
        "1",
        "all"
      ],
      "description": "Number of acknowledgments required from broker."
    },
    "otherProperties": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "Additional Kafka producer properties as key-value pairs."
    },
    "addMetadataKeyValuesAsKafkaHeaders": {
      "type": "boolean",
      "description": "Add message metadata as Kafka record headers."
    },
    "kafkaHeadersCharset": {
      "type": "string",
      "description": "Character encoding for metadata values in headers."
    }
  },
  "required": [
    "topicPattern",
    "bootstrapServers"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node preserves the original message data in both success and failure cases. Metadata is updated with Kafka-specific information or error details.

### Success case

When a message is successfully published to Kafka, the following fields are added to the outgoing message metadata:

- `offset` – The offset assigned to the record in the Kafka partition. This is a unique identifier for the record's position in the partition log.
- `partition` – The partition number where the record was stored.
- `topic` – The name of the topic where the record was published.

The original message data remains unchanged.

**Example:**

Original message metadata:

```json
{
  "deviceType": "sensor",
  "deviceName": "Sensor-001"
}
```

After successful publishing (e.g., to partition 2, offset 12345 in topic "telemetry"), metadata becomes:

```json
{
  "deviceType": "sensor",
  "deviceName": "Sensor-001",
  "offset": "12345",
  "partition": "2",
  "topic": "telemetry"
}
```

### Failure case

When publishing fails, the following field is added to the outgoing message metadata:

- `error` – Contains the exception class name and error message in the format: `class <ExceptionClass>: <error message>`

**Example:**

Original message metadata:

```json
{
  "deviceType": "sensor"
}
```

After a failure (e.g., connection timeout), metadata becomes:

```json
{
  "deviceType": "sensor",
  "error": "class org.apache.kafka.common.errors.TimeoutException: Expiring 1 record(s) for telemetry-0: 30000 ms has passed since batch creation"
}
```

The message data remains unchanged.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt. A new message is created with the updated metadata
  and is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire Kafka publish operation. The message is transformed in place, its
  metadata is updated after the publish completes, and the modified message is passed to the next node.

## Message processing algorithm

1. The node constructs a Kafka producer record:
    - If the **topic pattern** is configured, templates are resolved using values from the incoming message data and metadata to determine the target topic.
    - If the **key pattern** is configured, templates are resolved using values from the incoming message data and metadata to determine the partition key. If empty, no key is
      specified.
    - If **Add Message metadata key-value pairs to Kafka record headers** is enabled, all metadata entries are added as headers with the prefix `tb_msg_md_`, encoded using the
      specified charset.
2. The message data is used as the record value (sent as a UTF-8 string).
3. The publish operation is executed asynchronously using the Kafka producer:
    - The record is sent to the specified topic with the resolved key (if provided).
    - The Kafka client determines the partition based on the key (if provided) or uses default distribution.
4. When the Kafka broker acknowledges the record successfully:
    - The offset, partition, and topic are added to the message metadata.
    - The resulting message is forwarded via the `Success` connection.
5. If an error occurs during publishing:
    - Error details are added to the outgoing message metadata under the `error` key.
    - The message is forwarded via the `Failure` connection.

## Output connections

- **Success**
    - The message was successfully published to Kafka.
    - The message metadata includes `offset`, `partition`, and `topic` fields.
- **Failure**
    - **Publishing error**: The Kafka broker rejected the message, the topic doesn't exist, or the producer encountered a timeout.
    - **Initialization error**: The Kafka producer failed to initialize (e.g., invalid configuration, SSL certificate issues).
    - **Unexpected error**: An unexpected error occurred during message processing.

## Examples

### Example 1 — Basic telemetry publishing

Publish telemetry data to a dedicated telemetry topic without a partition key.

**Incoming message**

Data:

```json
{
  "temperature": 25.5,
  "humidity": 60.2
}
```

Metadata:

```json
{
  "deviceType": "TH-Sensor",
  "deviceName": "Sensor-001"
}
```

**Node configuration**

```json
{
  "topicPattern": "telemetry",
  "keyPattern": "",
  "bootstrapServers": "kafka.example.com:9092",
  "retries": 3,
  "batchSize": 16384,
  "linger": 10,
  "bufferMemory": 33554432,
  "acks": "-1",
  "otherProperties": {},
  "addMetadataKeyValuesAsKafkaHeaders": false,
  "kafkaHeadersCharset": "UTF-8"
}
```

**Outgoing message**

Data: unchanged.

Metadata:

```json
{
  "deviceType": "TH-Sensor",
  "deviceName": "Sensor-001",
  "offset": "12345",
  "partition": "2",
  "topic": "telemetry"
}
```

Routed via the `Success` connection.

**Result**

The telemetry data was successfully published to the "telemetry" topic. The Kafka broker assigned the record to partition 2 at offset 12345. Since no key was specified, the Kafka
client used default distribution across available partitions. The producer waited for all in-sync replicas to acknowledge the record (acks=-1), ensuring durability.
