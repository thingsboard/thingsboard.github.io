Sends messages to [Slack](https://slack.com/){:target="_blank"} channels or users via Slack API.

## Configuration

### Message Template

The content of the Slack message to send. This field supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/){:target="_blank"}.

### Use System Slack Settings

When enabled, the node uses the [Slack token configured in the system settings](/docs/{{docsPrefix}}user-guide/ui/slack-settings/){:target="_blank"}.
This allows centralized Slack configuration at the tenant or system level without configuring individual rule nodes.

When disabled, you must configure the Slack token directly in the rule node.

### Slack API Token

The Slack token for authentication.

### Slack Channel Type

Specifies the destination type for the message:

- **Public channel** – Send to a public Slack channel (e.g., `#general`, `#alerts`)
- **Private channel** – Send to a private Slack channel (e.g., `#private-alerts`)
- **Direct message** – Send a direct message to a specific user (e.g., `@john.doe`)

### Conversation

The target Slack conversation for the message. This field is required.

The conversation is selected from a dropdown list that is dynamically populated from the Slack API. To configure this field:

1. First provide a valid Slack token in the **Slack API Token** field (or ensure system Slack settings are configured)
2. The dropdown will fetch available conversations from your Slack workspace
3. Select the desired channel or user from the list

The conversation must be accessible by the configured Slack token.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSlackNodeConfiguration",
  "type": "object",
  "properties": {
    "messageTemplate": {
      "type": "string",
      "description": "Template for Slack message content. Supports templatization.",
      "minLength": 1
    },
    "useSystemSettings": {
      "type": "boolean",
      "description": "If true, uses system-configured Slack token. If false, uses token configured in this node."
    },
    "botToken": {
      "type": "string",
      "description": "Slack token (xoxb-...). Required when useSystemSettings is false."
    },
    "conversationType": {
      "type": "string",
      "enum": [
        "PUBLIC_CHANNEL",
        "PRIVATE_CHANNEL",
        "DIRECT"
      ],
      "description": "Type of Slack conversation"
    },
    "conversation": {
      "type": "object",
      "description": "Target Slack conversation",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "PUBLIC_CHANNEL",
            "PRIVATE_CHANNEL",
            "DIRECT"
          ]
        },
        "id": {
          "type": "string",
          "description": "Slack conversation ID (channel or user ID)",
          "minLength": 1
        },
        "name": {
          "type": "string",
          "description": "Conversation name or username",
          "minLength": 1
        },
        "wholeName": {
          "type": "string",
          "description": "Full name for direct messages"
        },
        "email": {
          "type": "string",
          "description": "Email for direct messages"
        }
      },
      "required": [
        "type",
        "id",
        "name"
      ]
    }
  },
  "required": [
    "messageTemplate",
    "useSystemSettings",
    "conversation"
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
  The Slack sending operation proceeds asynchronously, and after completion, the copy is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire Slack sending operation. The message is passed to the next node
  after the Slack operation completes.

## Message processing algorithm

1. The node determines which Slack token to use:
    - If **Use System Slack Settings** is enabled, the system-configured token is retrieved
    - Otherwise, the token from the node configuration is used
2. The node processes the message template to create the message content using values from the incoming message data and metadata.
3. The message is sent asynchronously to the specified Slack conversation via the Slack API.
4. When processing completes:
    - **Success**: The message is routed to the `Success` connection.
    - **Failure**: The message is routed to the `Failure` connection.

## Output connections

- **Success**
    - The message was successfully sent to the specified Slack conversation.
- **Failure**
    - An unexpected error occurred during message sending.

## Examples

### Example 1 — Sending temperature alert to public channel

Send a Slack alert to a public channel when a device reports high temperature.

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
  "deviceId": "TEMP_SENSOR_01",
  "deviceName": "Temperature Sensor 01",
  "location": "Server Room A"
}
```

**Node configuration**

```json
{
  "messageTemplate": "⚠️ *High Temperature Alert*\nDevice: ${deviceName}\nLocation: ${location}\nTemperature: $[temperature]°F",
  "useSystemSettings": true,
  "conversationType": "PUBLIC_CHANNEL",
  "conversation": {
    "type": "PUBLIC_CHANNEL",
    "id": "C01234ABCDE",
    "name": "alerts"
  }
}
```

**Outgoing message**

Data: unchanged.

Metadata: unchanged.

Routed via the `Success` connection.

**Result**

A Slack message is sent to the `#alerts` channel:

```text
⚠️ High Temperature Alert
Device: Temperature Sensor 01
Location: Server Room A
Temperature: 85.3°F
```
