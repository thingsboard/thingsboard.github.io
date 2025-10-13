Publishes messages to [Google Cloud Pub/Sub](https://cloud.google.com/pubsub){:target="_blank"} topics, sending the incoming message data as the message body. 
The node returns the Pub/Sub response metadata as part of the outgoing message.

## Configuration

### GCP project ID

The Google Cloud project ID where your Pub/Sub topic is deployed.

You can find your project ID in the Google Cloud Console or in your service account credentials file.

### Topic name

The name of the Pub/Sub topic to publish messages to.

Specify only the topic name, not the full resource path. The node automatically constructs the full topic path in the format: `projects/{projectId}/topics/{topicName}`

The topic name can include templates to dynamically select topics based on message data:

- `${topicName}` - Substitutes values from message metadata
- `$[severity]` - Substitutes values from message data
- `notifications-$[severity]` - Combined with static text

### Message attributes

Define custom attributes to attach to each Pub/Sub message. Message attributes allow you to provide structured metadata about the message without modifying the message body.

Both attribute names and values support templates:

- `${key}` – Substitutes values from message metadata
- `$[key]` – Substitutes values from message data

All message attributes are sent as string key-value pairs.

### GCP credentials (service account key file)

Provide your Google Cloud service account key in JSON format. The associated account must have permissions to publish messages to the Pub/Sub topic.

{% capture credentials_note %}
**Note**: If you use Professional Edition, we highly recommend using [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} to securely store your service
account key.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

### Timeout and retries

The node uses fixed timeout and retry settings for Google Cloud Pub/Sub operations:
- **Total timeout**: 10 seconds for the entire publish operation
- **Initial retry delay**: 50 milliseconds
- **Maximum retry delay**: 2 seconds
- **Retry delay multiplier**: 1.1
- **RPC timeout**: 2-10 seconds (starts at 2s, can grow to 10s)

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbPubSubNodeConfiguration",
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "minLength": 1,
      "description": "Google Cloud project ID where the Pub/Sub topic is deployed."
    },
    "topicName": {
      "type": "string",
      "minLength": 1,
      "description": "Name of the Pub/Sub topic to publish to (supports templatization)."
    },
    "messageAttributes": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "Custom message attributes to attach to each message."
    },
    "serviceAccountKey": {
      "type": "string",
      "minLength": 1,
      "description": "GCP service account key in JSON format for authentication."
    },
    "serviceAccountKeyFileName": {
      "type": "string",
      "description": "Name of the service account key file (for UI display purposes)."
    }
  },
  "required": [
    "projectId",
    "topicName",
    "messageAttributes",
    "serviceAccountKey"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node transforms the incoming message by adding Google Cloud Pub/Sub response information to the outgoing message metadata while preserving the original message data.

### Success case

When a message is successfully published to Pub/Sub, the following field is added to the outgoing message metadata:

- `messageId` – Unique identifier assigned by Google Cloud Pub/Sub to the message. This server-assigned ID can be used to track and identify the message in the Pub/Sub system.

**Example:**

Original message metadata:

```json
{
  "deviceType": "sensor"
}
```

After successful publish, metadata becomes:

```json
{
  "deviceType": "sensor",
  "messageId": "1234567890"
}
```

The message data remains unchanged.

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

After a failure (e.g., topic not found), metadata becomes:

```json
{
  "deviceType": "sensor",
  "error": "class com.google.api.gax.rpc.NotFoundException: Topic not found"
}
```

The message data remains unchanged.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt. A new message is created with the updated metadata
  and is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire Pub/Sub publish operation. The message is transformed in place,
  its metadata is updated with the Pub/Sub response fields, and the modified message is passed to the next node after the publish completes.

## Message processing algorithm

1. The node constructs a Pub/Sub message:
    - The **topic name** is processed, replacing templates with values from the incoming message data and metadata.
    - The incoming message data is set as the Pub/Sub message body.
    - **Message attributes** are processed: each attribute name and value is evaluated for templates and added to the Pub/Sub message as string key-value pairs.
2. The publish request is executed asynchronously with the configured retry settings.
3. When Pub/Sub responds successfully:
    - The message ID assigned by Pub/Sub is added to the outgoing message metadata.
    - The resulting message is forwarded via the `Success` connection.
4. If an error occurs during publishing:
    - Error details are added to the outgoing message metadata under the `error` key.
    - The message is forwarded via the `Failure` connection.

## Output connections

- **Success**
    - The message was successfully published to the Pub/Sub topic.
    - Pub/Sub message ID is included in the outgoing message metadata.
- **Failure**
    - **Timeout**: Failed to publish the message within the configured timeout period (10 seconds total).
    - **Pub/Sub error**: The Google Cloud Pub/Sub service returned an error, such as invalid credentials, insufficient permissions, non-existent topic, or invalid topic name
      format.
    - **Unexpected error**: An unexpected error occurred during message processing.

## Examples

### Example 1 — Basic message to Pub/Sub topic

Publish a telemetry message to a Pub/Sub topic with custom attributes.

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
  "projectId": "my-iot-project",
  "topicName": "telemetry-events",
  "messageAttributes": {
    "deviceType": "${deviceType}",
    "deviceName": "${deviceName}"
  },
  "serviceAccountKey": "{\"type\":\"service_account\",\"project_id\":\"my-iot-project\",...}"
}
```

**Outgoing message**

Data: unchanged.

Metadata (only added fields shown):

```json
{
  "messageId": "1234567890"
}
```

Routed via the `Success` connection.

**Result**

The telemetry data was successfully published to the `telemetry-events` topic with custom attributes indicating the device type and name.

### Example 2 — Dynamic topic selection

Publish alarm messages to different topics based on alarm severity using templates.

**Incoming message**

Data:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "bfb13620-7737-400b-9c89-d569a0835de6"
  },
  "createdTime": 1755173119647,
  "type": "Overheating",
  "severity": "CRITICAL",
  "status": "ACTIVE_UNACK"
}
```

Metadata:

```json
{
  "tenantId": "888e6780-78f5-11f0-8e01-57f51829cedc"
}
```

**Node configuration**

```json
{
  "projectId": "my-iot-project",
  "topicName": "alarms-$[severity]",
  "messageAttributes": {
    "tenantId": "${tenantId}",
    "alarmType": "$[type]"
  },
  "serviceAccountKey": "{\"type\":\"service_account\",\"project_id\":\"my-iot-project\",...}"
}
```

**Outgoing message**

Data: unchanged.

Metadata (only added fields shown):

```json
{
  "messageId": "2345678901"
}
```

Routed via the `Success` connection.

**Result**

The alarm was dynamically routed to the `alarms-CRITICAL` topic based on the severity level in the message data. The message includes attributes for tenant ID and alarm type.

### Example 3 — Error handling for invalid topic

Attempt to publish to a non-existent Pub/Sub topic, resulting in a failure.

**Incoming message**

Data:

```json
{
  "temperature": 25.5,
  "humidity": 60.2
}
```

**Node configuration**

```json
{
  "projectId": "my-iot-project",
  "topicName": "non-existent-topic",
  "messageAttributes": {},
  "serviceAccountKey": "{\"type\":\"service_account\",\"project_id\":\"my-iot-project\",...}"
}
```

**Outgoing message**

Data: unchanged.

Metadata (only added fields shown):

```json
{
  "error": "class com.google.api.gax.rpc.NotFoundException: Topic projects/my-iot-project/topics/non-existent-topic not found"
}
```

Routed via the `Failure` connection.

**Result**

The Pub/Sub publish operation failed because the specified topic does not exist. The error details were captured in the message metadata and routed to the `Failure` connection.
