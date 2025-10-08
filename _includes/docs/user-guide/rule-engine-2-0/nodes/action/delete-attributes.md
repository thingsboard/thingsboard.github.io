Deletes specified attributes from the message originator based on configured scope and attribute keys.

## Configuration

- **Attributes scope**: Defines the scope of attributes to delete from the message originator.
    - *Server attributes*: Deletes attributes from server scope (`SERVER_SCOPE`)
    - *Shared attributes*: Deletes attributes from shared scope (`SHARED_SCOPE`)
    - *Client attributes*: Deletes attributes from client scope (`CLIENT_SCOPE`)
- **Attributes keys**: Set of attribute keys to delete. Supports templatization using `${metadataKey}` and `$[dataKey]` patterns.

### Advanced settings

- **Send attributes deleted notification**: When enabled, sends an `ATTRIBUTES_DELETED` event to the default rule chain of the message originator after successful deletion.
  Example of such event:

Type: `ATTRIBUTES_DELETED`

Originator: same as original message originator

Data contains a set of deleted attribute keys: 

```json
{
  "attributes": ["deletedKey1", "deletedKey2"]
}
```

Metadata contains the rule node ID that performed the deletion and the scope of the deleted attributes:

```json
{
  "ruleNodeId": "3567a4c0-924c-11f0-b7fc-93ceb833d90b",
  "scope": "SERVER_SCOPE"
}
```

- **Force notification to the device**: When enabled, forces notification to be sent to the device. Only available for *Shared attributes* scope. Alternatively, device notification
  can be triggered by setting the `notifyDevice` metadata key to `"true"` in the incoming message.

Notification contains a set of deleted attribute keys:
```json
{
  "deleted": ["key1", "key2"]
}
```

### Scope override

The attribute scope can be dynamically overridden using the `scope` metadata key in the incoming message. If provided, this overrides the scope configured in the node settings.

Supported `scope` values:

- `SERVER_SCOPE` - Server attributes scope
- `SHARED_SCOPE` - Shared attributes scope
- `CLIENT_SCOPE` - Client attributes scope

If provided, value must exactly match one of these constants (case-sensitive).

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgDeleteAttributesNodeConfiguration",
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "enum": [
        "SERVER_SCOPE",
        "SHARED_SCOPE",
        "CLIENT_SCOPE"
      ],
      "description": "Attribute scope for deletion"
    },
    "keys": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Set of attribute keys to delete"
    },
    "sendAttributesDeletedNotification": {
      "type": "boolean",
      "description": "Whether to send attributes deleted notification event"
    },
    "notifyDevice": {
      "type": "boolean",
      "description": "Whether to force device notification (shared scope only)"
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Process attribute keys**: Processes each configured attribute key pattern, substituting any placeholders with values from message.
2. **Filter valid keys**: Removes duplicate keys and filters out empty/blank keys from the processed list.
3. **Determine attribute scope**:
    - Uses `scope` metadata value from the message if present
    - Falls back to configured scope if no metadata scope is provided
4. **Skip processing if no keys**: If no valid keys remain after processing, routes message directly to `Success` without performing any deletions.
5. **Delete attributes**: Deletes the specified attributes from the message originator using the processed key list and determined scope.
6. **Handle notifications**:
    - For shared scope: Applies device notification if configured or if `notifyDevice` metadata is set to true
    - Sends `ATTRIBUTES_DELETED` event to default originator rule chain if `sendAttributesDeletedNotification` is enabled
7. **Route message**: Routes the original message to `Success` or `Failure` based on deletion operation result.

## Output connections

- `Success`
    - Attributes were successfully deleted from the message originator
    - No attribute keys were provided (empty keys list after processing)
    - If **Send attributes deleted notification** is enabled, `ATTRIBUTES_DELETED` event is sent to the originator's default rule chain
    - If **Force notification to the device** is enabled and attributes scope is `SHARED_SCOPE`, notification about deleted attributes is sent to device
- `Failure`
    - Unexpected error occurred during processing

## Examples

### Example 1 — Delete specific attributes

**Incoming message**

Metadata: `{}`

**Node configuration**

```json
{
  "scope": "SERVER_SCOPE",
  "keys": [
    "attribute1",
    "attribute2"
  ],
  "sendAttributesDeletedNotification": false,
  "notifyDevice": false
}
```

**State of the system**

Originator has server attributes: `attribute1`, `attribute2`, `attribute3`

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

The `attribute1` and `attribute2` server attributes are deleted from the originator. The `attribute3` attribute remains unchanged.
No events or notifications were sent.

### Example 2 — Dynamic key deletion with patterns

**Incoming message**

Data:

```json
{
  "attributeFromData": "attribute1"
}
```

Metadata:

```json
{
  "attributeFromMetadata": "attribute2"
}
```

Originator: `DEVICE`

**Node configuration**

```json
{
  "scope": "SERVER_SCOPE",
  "keys": [
    "$[attributeFromData]",
    "${attributeFromMetadata}",
    "attribute3"
  ],
  "sendAttributesDeletedNotification": false,
  "notifyDevice": false
}
```

**State of the system**

Device has client attributes: `sensorReading=123`, `lastUpdate=2023-10-15`, `staticKey=value`, `keepThis=data`

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

The `attribute1`, `attribute2`, and `attribute3` server attributes are deleted from the originator. No events or notifications were sent.

### Example 3 — Scope override with shared attributes

**Incoming message**

Originator: `DEVICE`

Metadata:

```json
{
  "scope": "SHARED_SCOPE"
}
```

**Node configuration**

```json
{
  "scope": "SERVER_SCOPE",
  "keys": [
    "sharedAttribute"
  ],
  "sendAttributesDeletedNotification": false,
  "notifyDevice": true
}
```

**State of the system**

Device has shared attribute: `sharedAttribute`

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

The following actions occur:

- **Scope override**: Despite being configured for `SERVER_SCOPE`, the node uses `SHARED_SCOPE` from message metadata
- **Attribute deleted**: `sharedValue` is removed from the shared scope
- **Device notification**: Device is notified of the attribute deletion due to shared scope and `notifyDevice` being set to `true`
