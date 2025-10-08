Publishes messages to AWS Simple Notification Service (SNS) topics, sending the incoming message data as the notification payload. The node returns the SNS response metadata as
part of the outgoing message.

## Configuration

### Topic configuration

Define the target SNS topic to publish messages to.

#### Topic ARN pattern

The Amazon Resource Name (ARN) of the SNS topic to publish to.

You can specify the topic ARN in the standard AWS format:

- **Full ARN**: `arn:aws:sns:us-east-1:123456789012:MyNewTopic`

The ARN can include template expressions to dynamically select topics based on message data:

- `arn:aws:sns:${metadata.region}:123456789012:${topicName}`
- `arn:aws:sns:us-east-1:123456789012:notifications-$[severity]`

### AWS Credentials

Provide authentication credentials to access your AWS SNS service.

#### AWS Access Key ID

The access key ID for your AWS account. This credential is used to sign requests to AWS SNS.

#### AWS Secret Access Key

The secret access key corresponding to your access key ID.

{% capture credentials_note %}
**Note**: If you use Professional Edition, we highly recommend using [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} to securely store your
secret key.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

#### AWS Region

The AWS region where your SNS topic is deployed. The region must match the location of your SNS topic.

{% capture timeout_note %}
**Note**: The node uses fixed timeout values for AWS SNS operations: 10 seconds for establishing a connection and 5 seconds for the SNS service to process and respond to the
request.
{% endcapture %}
{% include templates/info-banner.md content=timeout_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSnsNodeConfiguration",
  "type": "object",
  "properties": {
    "topicArnPattern": {
      "type": "string",
      "minLength": 1,
      "description": "ARN of the SNS topic to publish to (supports templatization)."
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
      "description": "AWS region where the SNS topic is deployed."
    }
  },
  "required": [
    "topicArnPattern",
    "accessKeyId",
    "secretAccessKey",
    "region"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node transforms the incoming message by adding AWS SNS response information to the message metadata while preserving the original message data.

### Success case

When a message is successfully published to SNS, the following fields are added to the message metadata:

- **messageId** – Unique identifier assigned by AWS SNS to the published message. This ID can be used to track the message delivery status.
- **requestId** – Unique identifier for the API request to AWS. Useful for troubleshooting and correlating with AWS CloudTrail logs.

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
  "messageId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "requestId": "12345678-1234-1234-1234-123456789012"
}
```

The message data remains unchanged.

### Failure case

When publishing fails, the following field is added to the message metadata:

- **error** – Contains the exception class name and error message in the format: `class <ExceptionClass>: <error message>`

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
  "error": "class com.amazonaws.services.sns.model.NotFoundException: Topic does not exist"
}
```

The message data remains unchanged.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt.
  A new message is created with the updated metadata and is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire SNS publish operation.
  The message is transformed in place, its metadata is updated with the SNS response fields, and the modified message is passed to the next node after the publish completes.

## Message processing algorithm

1. The node constructs an SNS publish request:
    - The **topic ARN pattern** is processed, replacing templates with values from the incoming message data and metadata.
    - A `PublishRequest` is created with the message data as the notification payload and the resolved topic ARN as the destination.
2. The publish request is sent asynchronously to AWS SNS with the configured timeouts:
    - **Connection timeout** (10 seconds) applies to establishing the connection to AWS SNS.
    - **Request timeout** (5 seconds) applies to waiting for the SNS service to accept the message and return a response.
3. When SNS responds successfully:
    - The message ID from AWS (unique identifier for the published message) is added to the message metadata as `messageId`.
    - The request ID from AWS (unique identifier for the API request) is added to the message metadata as `requestId`.
    - The resulting message is forwarded via the `Success` connection.
4. If an error occurs during publishing:
    - Error details are added to the message metadata under the `error` key.
    - The message is forwarded via the `Failure` connection.

## Output connections

- **Success**
    - The message was successfully published to the SNS topic.
    - The SNS service accepted the message and returned a message ID.
    - Response metadata (`messageId` and `requestId`) is included in the outgoing message metadata.
- **Failure**
    - **Timeout**: Failed to establish a connection to AWS SNS or the SNS service did not respond within the configured timeout periods (10 seconds for connection, 5 seconds for
      request).
    - **SNS error**: The AWS SNS service returned an error, such as invalid credentials, insufficient permissions, non-existent topic, or invalid topic ARN format.
    - **Unexpected error**: An unexpected error occurred during message processing.

## Examples

### Example 1 — Basic notification

Publish a simple notification message to an SNS topic for alert distribution.

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
    "summary": "The temperature has persistently exceeded 85 °C for at least 10 minutes, while vibration (3.8–4.1 mm/s) and acoustic deviation (9–10.5%) remain normal. Immediate attention is required to prevent possible thermal damage."
  }
}
```

**Node configuration**

```json
{
  "topicArnPattern": "arn:aws:sns:us-east-1:123456789012:device-alerts",
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
  "requestId": "12345678-1234-1234-1234-123456789012"
}
```

Routed via the `Success` connection.

**Result**

The alarm notification was successfully published to the SNS topic. The AWS message ID and request ID were added to the metadata.

### Example 2 — Error handling for invalid topic

Attempt to publish to a non-existent SNS topic, resulting in a failure.

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
    "summary": "The temperature has persistently exceeded 85 °C for at least 10 minutes, while vibration (3.8–4.1 mm/s) and acoustic deviation (9–10.5%) remain normal. Immediate attention is required to prevent possible thermal damage."
  }
}
```

**Node configuration**

```json
{
  "topicArnPattern": "arn:aws:sns:us-east-1:123456789012:non-existent-topic",
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
  "error": "class com.amazonaws.services.sns.model.NotFoundException: Topic does not exist"
}
```

Routed via the `Failure` connection.

**Result**

The SNS publish operation failed because the specified topic does not exist. The error details were captured in the message metadata and routed to the `Failure` connection.
