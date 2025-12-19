Sends notifications to specified recipients using notification templates through the [notification center](/docs/{{docsPrefix}}user-guide/notifications/){:target="_
blank"}.

## Configuration

### Template

The notification template that defines the content, format, and delivery channels (Web, Email, SMS, Slack, etc.) of the notification. Select an
existing [notification template](/docs/{{docsPrefix}}user-guide/notifications/#templates){:target="_blank"} from your ThingsBoard instance.

{% capture template_type_note %}
**Note**: Only notification templates with type **Rule node** can be used in this rule node.
{% endcapture %}
{% include templates/info-banner.md content=template_type_note %}

You can use [values from the incoming message](/docs/{{docsPrefix}}user-guide/notifications/#rule-node){:target="_blank"} in your notification templates by using `${key}` syntax to
reference message data fields, metadata, and other message properties.

{% capture template_syntax_note %}
**Note**: Even for message data fields that typically use `$[key]` syntax in rule nodes, notification templates require the `${key}` syntax.
{% endcapture %}
{% include templates/info-banner.md content=template_syntax_note %}

### Recipients

A list of [recipient groups](/docs/{{docsPrefix}}user-guide/notifications/#recipients){:target="_blank"} that will receive the notification. Multiple recipient groups can be
selected. The notification system will automatically resolve and deduplicate recipients across all selected groups.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbNotificationNodeConfiguration",
  "type": "object",
  "properties": {
    "templateId": {
      "type": "object",
      "description": "ID of the notification template to use.",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "entityType": {
          "type": "string",
          "enum": [
            "NOTIFICATION_TEMPLATE"
          ]
        }
      },
      "required": [
        "id",
        "entityType"
      ]
    },
    "targets": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uuid"
      },
      "minItems": 1,
      "description": "List of recipient target UUIDs."
    }
  },
  "required": [
    "templateId",
    "targets"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node transforms the incoming message by adding notification request statistics to the message metadata while preserving the original message data.

When a notification is successfully processed and sent, the following field is added to the message metadata:

- `notificationRequestResult` – A JSON string containing statistics about the notification delivery, including:
    - `sent` – Map of delivery channels to the number of notifications successfully sent per channel
    - `errors` – Map of delivery channels to the number of failed deliveries per channel (if any)
    - `totalSent` – Total number of notifications successfully sent across all channels
    - `totalErrors` – Total number of failed deliveries across all channels
    - `error` – Error message if the entire notification request failed (null if successful)

**Example:**

Original message metadata:

```json
{
  "deviceType": "sensor"
}
```

After successful notification, metadata becomes:

```json
{
  "deviceType": "sensor",
  "notificationRequestResult": "{\"sent\":{\"WEB\":1},\"errors\":{},\"totalErrors\":0,\"error\":null,\"totalSent\":1}"
}
```

The message data remains unchanged.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt. A new message is created with the updated metadata
  and is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire notification operation. The message is transformed in place, its
  metadata is updated with the notification result, and the modified message is passed to the next node after the notification completes.

## Message processing algorithm

1. The node creates a notification request using the incoming message data, metadata, originator information, and the configured template and recipients.
2. The notification request is submitted asynchronously to the notification center, which sends the notification to resolved recipients.
3. When processing completes:
    - **Success**: Delivery statistics are added to the message metadata as `notificationRequestResult` and the message is routed to the `Success` connection.
    - **Failure**: The message is routed to the `Failure` connection.

## Output connections

- **Success**
    - The notification was successfully processed and sent to recipients.
    - Delivery statistics (`notificationRequestResult`) are included in the outgoing message metadata, showing how many notifications were sent per channel.
- **Failure**
    - **Unexpected error**: An unexpected error occurred during notification processing.

## Examples

### Example 1 — Sending telemetry values in notification

Send a notification containing the latest telemetry values from a device.

**Incoming message**

Data:

```json
{
  "temperature": 23.5,
  "humidity": 65.2,
  "pressure": 1013.25
}
```

Metadata:

```json
{
  "deviceName": "Weather Station 01",
  "deviceType": "sensor"
}
```

**Node configuration**

```json
{
  "templateId": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "entityType": "NOTIFICATION_TEMPLATE"
  },
  "targets": [
    "784f394c-42b6-435a-983c-b7beff2784f9"
  ]
}
```

**Node configuration**

The notification template with ID `a1b2c3d4-e5f6-7890-abcd-ef1234567890` has the following content:

```text
Weather Update from ${deviceName}

Current readings:
- Temperature: ${temperature}°C
- Humidity: ${humidity}%
- Pressure: ${pressure} hPa

Device type: ${deviceType}
```

**Outgoing message**

Data: unchanged.

Metadata:

```json
{
  "deviceName": "Weather Station 01",
  "deviceType": "sensor",
  "notificationRequestResult": "{\"sent\":{\"WEB\":1},\"errors\":{},\"totalErrors\":0,\"error\":null,\"totalSent\":1}"
}
```

Routed via the `Success` connection.

**Result**

The notification was successfully sent to users via Web interface. The notification content:

```text
Weather Update from Weather Station 01

Current readings:
- Temperature: 23.5°C
- Humidity: 65.2%
- Pressure: 1013.25 hPa

Device type: sensor
```
