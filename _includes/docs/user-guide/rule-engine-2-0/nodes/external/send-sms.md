Sends SMS messages to specified phone numbers via configured SMS provider.

## Configuration

### Phone Numbers To Template

A comma-separated list of phone numbers that will receive the SMS message. This field supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/){:target="_blank"}.

### SMS Message Template

The content of the SMS message to send. This field supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/){:target="_blank"}.

### Use System SMS Provider Settings

When enabled, the node uses the [SMS provider configured in the system settings](/docs/{{docsPrefix}}user-guide/ui/sms-provider-settings/){:target="_blank"}. 
This allows centralized SMS provider configuration at the tenant or system level without configuring individual rule nodes.

When disabled, you must configure the SMS provider directly in the rule node. The following SMS provider types are supported:

#### AWS SNS

Amazon Simple Notification Service for SMS delivery. Required configuration:

- **AWS Access Key ID** – Your AWS IAM access key ID with SNS permissions.
- **AWS Secret Access Key** – Your AWS IAM secret access key.
- **AWS Region** – The AWS region for SNS (e.g., `us-east-1`, `eu-west-1`).

#### Twilio

Twilio messaging service. Required configuration:

- **Phone Number From** – The Twilio phone number or Messaging Service SID to send from (E.164 format, e.g., `+19995550123`).
- **Twilio Account SID** – Your Twilio account identifier.
- **Twilio Account Token** – Your Twilio authentication token.

#### SMPP

SMS Messaging Peer-to-Peer protocol for direct carrier integration. For SMPP configuration details, refer to the [SMPP protocol specification](https://smpp.org/){:target="_blank"}.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSendSmsNodeConfiguration",
  "type": "object",
  "properties": {
    "numbersToTemplate": {
      "type": "string",
      "description": "Template for target phone number(s). Supports templatization."
    },
    "smsMessageTemplate": {
      "type": "string",
      "description": "Template for SMS message content. Supports templatization."
    },
    "useSystemSmsSettings": {
      "type": "boolean",
      "description": "If true, uses system-configured SMS provider. If false, uses provider configured in this node."
    },
    "smsProviderConfiguration": {
      "description": "SMS provider configuration (required when useSystemSmsSettings is false).",
      "oneOf": [
        {
          "type": "object",
          "title": "AWS SNS",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "AWS_SNS"
              ]
            },
            "accessKeyId": {
              "type": "string",
              "description": "AWS Access Key ID"
            },
            "secretAccessKey": {
              "type": "string",
              "description": "AWS Secret Access Key"
            },
            "region": {
              "type": "string",
              "description": "AWS region (e.g., us-east-1)"
            }
          },
          "required": [
            "type",
            "accessKeyId",
            "secretAccessKey",
            "region"
          ]
        },
        {
          "type": "object",
          "title": "Twilio",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "TWILIO"
              ]
            },
            "numberFrom": {
              "type": "string",
              "description": "Twilio phone number or Messaging Service SID"
            },
            "accountSid": {
              "type": "string",
              "description": "Twilio Account SID"
            },
            "accountToken": {
              "type": "string",
              "description": "Twilio Account Token"
            }
          },
          "required": [
            "type",
            "numberFrom",
            "accountSid",
            "accountToken"
          ]
        },
        {
          "type": "object",
          "title": "SMPP",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "SMPP"
              ]
            }
          },
          "required": [
            "type"
          ],
          "description": "SMPP configuration with additional provider-specific properties"
        }
      ]
    }
  },
  "required": [
    "numbersToTemplate",
    "smsMessageTemplate",
    "useSystemSmsSettings"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node does not modify the incoming message. Both message data and metadata are passed through unchanged to the next node in the chain.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt. A new message is created as a copy. 
  The SMS sending operation proceeds asynchronously, and after completion, the copy is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire SMS sending operation. The message is passed to the next node
  after the SMS operation completes.

## Message processing algorithm

1. The node processes the phone numbers template to extract target phone numbers from the incoming message data and metadata.
2. The node processes the SMS message template to create the message content using values from the incoming message data and metadata.
3. The SMS is sent asynchronously via either the system-configured SMS provider or the node-specific SMS provider configuration.
4. When processing completes:
    - **Success**: The message is routed to the `Success` connection.
    - **Failure**: The message is routed to the `Failure` connection.

## Output connections

- **Success**
    - The SMS was successfully sent to all specified phone numbers.
- **Failure**
    - An unexpected error occurred during SMS sending (e.g., invalid phone number format, SMS provider authentication failure, network error).

## Examples

### Example 1 — Sending temperature alert

Send an SMS alert when a device reports high temperature.

**Incoming message**

Data:

```json
{
  "temperature": 85.3,
  "humidity": 45.2
}
```

Metadata:

```json
{
  "deviceName": "Temperature Sensor 01",
  "userPhone": "+15551234567"
}
```

**Node configuration**

```json
{
  "numbersToTemplate": "${userPhone}",
  "smsMessageTemplate": "Device ${deviceName} has high temperature $[temperature]",
  "useSystemSmsSettings": true
}
```

**Outgoing message**

Data: unchanged.

Metadata: unchanged.

Routed via the `Success` connection.

**Result**

An SMS message is sent to +15551234567:

```text
Device Temperature Sensor 01 has high temperature 85.3
```
