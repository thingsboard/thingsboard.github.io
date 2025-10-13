Publishes messages to AWS Simple Queue Service (SQS) queues, sending the incoming message data as the message body. The node supports both Standard and FIFO queue types and returns
the SQS response metadata as part of the outgoing message.

## Configuration

### Queue configuration

Define the target SQS queue and its behavior.

#### Queue type

The type of SQS queue to publish messages to: **Standard** or **FIFO**.

#### Queue URL pattern

The full URL of the SQS queue to publish to.

You can specify the queue URL in the standard AWS format:

- **Full URL**: `https://sqs.us-east-1.amazonaws.com/123456789012/my-queue-name`
- **FIFO queue**: `https://sqs.us-east-1.amazonaws.com/123456789012/my-queue-name.fifo`

The URL can include templates to dynamically select queues based on message data:

- `https://sqs.${region}.amazonaws.com/123456789012/${queueName}`
- `https://sqs.us-east-1.amazonaws.com/123456789012/notifications-$[severity]`

#### Delay seconds (Standard queues only)

The number of seconds to delay message delivery (0-900 seconds).

Specifies how long messages will be delayed before becoming available for processing. A value of 0 means no delay.

### FIFO queue behavior

For FIFO queues, the node automatically configures message deduplication and grouping:

- **Message Deduplication ID** – Set to the ThingsBoard message ID to ensure exactly-once processing.
- **Message Group ID** – Set to the message originator ID to maintain message ordering per originator.

### Message attributes

Define custom attributes to attach to each SQS message. Message attributes allow you to provide structured metadata about the message without modifying the message body.

Both attribute names and values support templates:

- `${key}` – Substitutes values from message metadata
- `$[key]` – Substitutes values from message data

All message attributes are sent with data type "String".

### AWS Credentials

Provide authentication credentials to access your AWS SQS service.

- **AWS Access Key ID** - The access key ID for your AWS account. This credential is used to sign requests to AWS SQS.
- **AWS Secret Access Key** - The secret access key corresponding to your access key ID.

{% capture credentials_note %}
**Note**: If you use Professional Edition, we highly recommend using [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} to securely store your secret key.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

#### AWS Region

The AWS region where your SQS queue is deployed. The region must match the location of your SQS queue.

{% capture timeout_note %}
**Note**: The node uses fixed timeout values for AWS SQS operations: 10 seconds for establishing a connection and 5 seconds for the SQS service to process and respond to the
request.
{% endcapture %}
{% include templates/info-banner.md content=timeout_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSqsNodeConfiguration",
  "type": "object",
  "properties": {
    "queueType": {
      "type": "string",
      "enum": [
        "STANDARD",
        "FIFO"
      ],
      "description": "Type of SQS queue (Standard or FIFO)."
    },
    "queueUrlPattern": {
      "type": "string",
      "minLength": 1,
      "description": "URL of the SQS queue to publish to (supports templatization)."
    },
    "delaySeconds": {
      "type": "integer",
      "minimum": 0,
      "maximum": 900,
      "description": "Number of seconds to delay message delivery (Standard queues only)."
    },
    "messageAttributes": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "Custom message attributes to attach to each message."
    },
    "accessKeyId": {
      "type": "string",
      "minLength": 1,
      "description": "AWS Access Key ID for authentication."
    },
    "secretAccessKey": {
      "type": "string",
      "minLength": 1,
      "description": "AWS Secret Access Key for authentication."
    },
    "region": {
      "type": "string",
      "minLength": 1,
      "description": "AWS region where the SQS queue is deployed."
    }
  },
  "required": [
    "queueType",
    "queueUrlPattern",
    "delaySeconds",
    "messageAttributes",
    "accessKeyId",
    "secretAccessKey",
    "region"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node transforms the incoming message by adding AWS SQS response information to the outgoing message metadata while preserving the original message data.

### Success case

When a message is successfully published to SQS, the following fields are added to the outgoing message metadata:

- `messageId` – Unique identifier assigned by AWS SQS to the message. This ID can be used to track and identify the message.
- `requestId` – Unique identifier for the API request to AWS. Useful for troubleshooting.
- `messageBodyMd5` – MD5 hash of the message data. Can be used to verify message integrity.
- `messageAttributesMd5` – MD5 hash of the message attributes. Present only if message attributes were included in the request.
- `sequenceNumber` – Large, non-consecutive number assigned to each message. Present only for FIFO queues.

**Example:**

Original message metadata:

```json
{
  "deviceType": "sensor"
}
```

After successful publish to a FIFO queue, metadata becomes:

```json
{
  "deviceType": "sensor",
  "messageId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "requestId": "12345678-1234-1234-1234-123456789012",
  "messageBodyMd5": "5d41402abc4b2a76b9719d911017c592",
  "messageAttributesMd5": "3e5f0e8c3f3d0c5f6a7b8c9d0e1f2a3b",
  "sequenceNumber": "18849450012345678901234567890"
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

After a failure (e.g., queue not found), metadata becomes:

```json
{
  "deviceType": "sensor",
  "error": "class com.amazonaws.services.sqs.model.QueueDoesNotExistException: The specified queue does not exist"
}
```

The message data remains unchanged.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt. A new message is created with the updated metadata
  and is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire SQS publish operation. The message is transformed in place, its
  metadata is updated with the SQS response fields, and the modified message is passed to the next node after the publish completes.

## Message processing algorithm

1. The node constructs an SQS send message request:
    - The **queue URL pattern** is processed, replacing templates with values from the incoming message data and metadata.
    - A `SendMessageRequest` is created with the message data as the message body and the resolved queue URL as the destination.
    - **Message attributes** are processed: each attribute name and value is evaluated for templates and added to the request with data type "String".
2. For **FIFO queues**, the node sets the message deduplication ID and message group ID as described in the FIFO queue behavior section.
3. For **Standard queues**, the node sets the delay seconds to the configured value.
4. The send message request is executed asynchronously with the configured timeouts:
    - **Connection timeout** (10 seconds) applies to establishing the connection to AWS SQS.
    - **Request timeout** (5 seconds) applies to waiting for the SQS service to accept the message and return a response.
5. When SQS responds successfully:
    - SQS response metadata is added to the outgoing message metadata.
    - The resulting message is forwarded via the `Success` connection.
6. If an error occurs during publishing:
    - Error details are added to the outgoing message metadata under the `error` key.
    - The message is forwarded via the `Failure` connection.

## Output connections

- **Success**
    - The message was successfully published to the SQS queue.
    - SQS response metadata is included in the outgoing message metadata.
- **Failure**
    - **Timeout**: Failed to establish a connection to AWS SQS or the SQS service did not respond within the configured timeout periods (10 seconds for connection, 5 seconds for
      request).
    - **SQS error**: The AWS SQS service returned an error, such as invalid credentials, insufficient permissions, non-existent queue, or invalid queue URL format.
    - **Unexpected error**: An unexpected error occurred during message processing.

## Examples

### Example 1 — Basic message to Standard queue

Publish a telemetry message to a Standard SQS queue with custom attributes and a delay.

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
  "queueType": "STANDARD",
  "queueUrlPattern": "https://sqs.us-east-1.amazonaws.com/123456789012/telemetry-queue",
  "delaySeconds": 30,
  "messageAttributes": {
    "deviceType": "${deviceType}",
    "deviceName": "${deviceName}"
  },
  "accessKeyId": "AKIAIOSFODNN7EXAMPLE",
  "secretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "region": "us-east-1"
}
```

**Outgoing message**

Data: unchanged.

Metadata (only added fields shown):

```json
{
  "messageId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "requestId": "12345678-1234-1234-1234-123456789012",
  "messageBodyMd5": "5d41402abc4b2a76b9719d911017c592",
  "messageAttributesMd5": "3e5f0e8c3f3d0c5f6a7b8c9d0e1f2a3b"
}
```

Routed via the `Success` connection.

**Result**

The telemetry data was successfully published to the SQS Standard queue with custom attributes. The message will be available for processing after a 30-second delay.

### Example 2 — FIFO queue with message ordering

Publish an alarm message to a FIFO queue, ensuring message ordering and exactly-once processing per device.

**Incoming message**

Data:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "bfb13620-7737-400b-9c89-d569a0835de6"
  },
  "createdTime": 1755173119647,
  "tenantId": {
    "entityType": "TENANT",
    "id": "888e6780-78f5-11f0-8e01-57f51829cedc"
  },
  "type": "Overheating",
  "originator": {
    "entityType": "DEVICE",
    "id": "b3e86d40-78f5-11f0-8e01-57f51829cedc"
  },
  "severity": "CRITICAL",
  "acknowledged": false,
  "cleared": false,
  "startTs": 1755173119647,
  "endTs": 1755173119647,
  "name": "Overheating",
  "status": "ACTIVE_UNACK",
  "details": {
    "summary": "The temperature has persistently exceeded 85 °C for at least 10 minutes."
  }
}
```

**Node configuration**

```json
{
  "queueType": "FIFO",
  "queueUrlPattern": "https://sqs.us-east-1.amazonaws.com/123456789012/alarms-queue.fifo",
  "delaySeconds": 0,
  "messageAttributes": {
    "tenantId": "$[tenantId.id]"
  },
  "accessKeyId": "AKIAIOSFODNN7EXAMPLE",
  "secretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "region": "us-east-1"
}
```

**Outgoing message**

Data: unchanged.

Metadata (only added fields shown):

```json
{
  "messageId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "requestId": "12345678-1234-1234-1234-123456789012",
  "messageBodyMd5": "5d41402abc4b2a76b9719d911017c592",
  "messageAttributesMd5": "3e5f0e8c3f3d0c5f6a7b8c9d0e1f2a3b",
  "sequenceNumber": "18849450012345678901234567890"
}
```

Routed via the `Success` connection.

**Result**

The alarm was successfully published to the FIFO queue. Message ordering is guaranteed for all alarms from the same device (originator), and the message deduplication ID prevents
duplicate processing.

### Example 3 — Dynamic queue selection

Publish messages to different queues based on alarm severity using templates.

**Incoming message**

Data:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "cf4a2b30-8848-511f-9d12-68g62930dfed"
  },
  "type": "HighTemperature",
  "severity": "CRITICAL",
  "status": "ACTIVE_UNACK"
}
```

Metadata:

```json
{
  "queueRegion": "us-west-2"
}
```

**Node configuration**

```json
{
  "queueType": "STANDARD",
  "queueUrlPattern": "https://sqs.${queueRegion}.amazonaws.com/123456789012/alarms-$[severity]",
  "delaySeconds": 0,
  "messageAttributes": {},
  "accessKeyId": "AKIAIOSFODNN7EXAMPLE",
  "secretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "region": "us-west-2"
}
```

**Outgoing message**

Data: unchanged.

Metadata (only added fields shown):

```json
{
  "messageId": "c2d3e4f5-g6h7-8901-bcde-fg2345678901",
  "requestId": "23456789-2345-2345-2345-234567890123",
  "messageBodyMd5": "6e52502bcd5c5d6c8a8c0d1e2f3a4b5c"
}
```

Routed via the `Success` connection.

**Result**

The message was dynamically routed to `https://sqs.us-west-2.amazonaws.com/123456789012/alarms-CRITICAL` based on the severity level and region in the message.

### Example 4 — Error handling for invalid queue

Attempt to publish to a non-existent SQS queue, resulting in a failure.

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
  "queueType": "STANDARD",
  "queueUrlPattern": "https://sqs.us-east-1.amazonaws.com/123456789012/non-existent-queue",
  "delaySeconds": 0,
  "messageAttributes": {},
  "accessKeyId": "AKIAIOSFODNN7EXAMPLE",
  "secretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "region": "us-east-1"
}
```

**Outgoing message**

Data: unchanged.

Metadata (only added fields shown):

```json
{
  "error": "class com.amazonaws.services.sqs.model.QueueDoesNotExistException: The specified queue does not exist"
}
```

Routed via the `Failure` connection.

**Result**

The SQS publish operation failed because the specified queue does not exist. The error details were captured in the message metadata and routed to the `Failure` connection.
