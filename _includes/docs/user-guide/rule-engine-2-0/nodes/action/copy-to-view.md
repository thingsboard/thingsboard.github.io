Replicates attribute changes from asset/device to associated entity views by either saving/updating or deleting attributes on the entity view (depending on the message type), and
creates a new message for each processed entity view that is an exact copy of the original message but with the originator changed to the entity view.

## Configuration

This node has no configuration options.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "EmptyNodeConfiguration",
  "type": "object",
  "properties": {},
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node validates that the incoming message is one of the supported types: `ATTRIBUTES_UPDATED`, `ATTRIBUTES_DELETED`, `ACTIVITY_EVENT`, `INACTIVITY_EVENT`, or
   `POST_ATTRIBUTES_REQUEST`.
2. It verifies that the message metadata is not empty.
3. If message metadata is empty or message type is unsupported, the message is routed to the `Failure` connection
4. The node determines the **attribute scope** based on the message type:
    - For `POST_ATTRIBUTES_REQUEST`: uses `CLIENT_SCOPE`
    - For other message types: extracts scope from message metadata using `scope` key
5. The node retrieves all **entity views** associated with the message originator.
6. For each entity view found:
    - Checks if the current system time falls within the entity view's start and end time range. If this check fails, the entity view is skipped and no processing occurs for it.
    - Determines which attributes should be copied based on the entity view's attribute key configuration
    - **Processing by message type**:
        - For `ATTRIBUTES_DELETED` messages: Deletes the specified attributes from the entity view (only those configured in the entity view)
        - For other message types: Saves/updates the attributes on the entity view (only those configured in the entity view)
    - **New message creation**: Creates a new message that is an exact copy of the original message, but changes the originator to the entity view ID instead of the original
      asset/device ID
    - **Message forwarding**: The newly created message is forwarded to the `Success` connection
7. **Original message handling**: The original message is acknowledged and does not continue down the rule chain

## Output connections

- `Success`
    - Attributes were successfully copied to entity view(s) and message originator was changed to the entity view
    - Multiple messages may be produced if the originator has multiple associated entity views
- `Failure`
    - Message metadata is empty
    - Unsupported message type
    - Another unexpected error occurred

## Examples

### Example 1 — Copying attributes to entity view

**Incoming message**

Type: `POST_ATTRIBUTES_REQUEST`

Data:

```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
```

Originator: `DEVICE` named `device`.

**State of the system**

- Device `device` has an associated entity view `deviceView`
- Entity view is configured to copy following client-side attributes: `["key1", "key2"]`
- Current time is within the entity view's time range

**Outgoing message**

Type: `POST_ATTRIBUTES_REQUEST`

Data:

```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
```

Originator: `ENTITY_VIEW` named `deviceView`

Routed via the `Success` connection.

**Result**

Only `key1` and `key2` attributes are copied to the entity view (as per entity view configuration). The `key3` attribute is not copied since it's not in the entity
view's attribute filter. Message originator is changed from device to entity view.

Original incoming message was acknowledged.

### Example 2 — Multiple entity views

**Incoming message**

Type: `ATTRIBUTES_UPDATED`

Data:

```json
{
  "key1": "value1",
  "key2": "value2"
}
```

Metadata:

```json
{
  "scope": "SERVER_SCOPE"
}
```

Originator: `DEVICE` named `device`

**State of the system**

- Device `device` has two associated entity views: `deviceView1` and `deviceView2`
- `deviceView1` is configured to copy following server-side attributes `["key1"]`
- `deviceView2` is configured to copy following server-side attributes `["key2"]`
- Current system time is withing time range of both entity views

**Outgoing messages**

Two messages are produced, each being an exact copy of the incoming message with only the originator changed:

Message 1:

- Originator: `ENTITY_VIEW` named `deviceView1`
- Routed via `Success` connection

Message 2:

- Originator: `ENTITY_VIEW` named `deviceView2`
- Routed via `Success` connection

**Result**

`key1` attribute is copied to `deviceView1`, `key2` attribute is copied to `deviceView2`. Two separate messages are generated with different entity view originators.

Original incoming message was acknowledged.

### Example 3 — Deleting attributes from entity view

**Incoming message**

Type: `ATTRIBUTES_DELETED`

Data:

```json
{
  "attributes": [
    "key1",
    "key2",
    "key3"
  ]
}
```

Metadata:

```json
{
  "scope": "SERVER_SCOPE"
}
```

Originator: `DEVICE` named `device`

**State of the system**

- Device `device` has an associated entity view `deviceView`
- Entity view is configured to copy following server-side attributes: `["key1", "key2"]`
- Current time is within the entity view's time range

**Outgoing message**

The outgoing message is identical to the incoming one, but originator changed to `ENTITY_VIEW` named `deviceView`.
Routed via the `Success` connection.

**Result**

Only `key1` and `key2` attributes are deleted from the entity view. The `key3` attribute deletion is ignored since it's not configured in the entity view's attribute filter.

### Example 4 — Entity view outside time range

**Incoming message**

Type: `ATTRIBUTES_UPDATED`

Data:

```json
{
  "key": "value"
}
```

Originator: `DEVICE` named `device`

**State of the system**

- Device `device` has an associated entity view `deviceView`
- Entity view is configured to copy following server-side attributes: `["key"]`
- Entity view time range: end time was 1 hour ago (expired)

**Outgoing message**

No outgoing message is produced.

**Result**

No attributes are copied because the entity view is outside its valid time range. The original message is acknowledged but no new messages are generated.

### Example 5 — Unsupported message type

**Incoming message**

Type: `POST_TELEMETRY_REQUEST`

**Outgoing message**

The message is routed to the `Failure` connection.

**Result**

Processing fails because `POST_TELEMETRY_REQUEST` is not a supported message type for this rule node.

### Example 6 — Empty metadata

**Incoming message**

Type: `ATTRIBUTES_UPDATED`

Metadata: `{}` (empty)

**Outgoing message**

The message is routed to the `Failure` connection.

**Result**

Processing fails because the message metadata is empty, which is required for determining the attribute scope.
