Checks the incoming message type against the configured set of message types. If the type is in the set, the message is routed via `True`; otherwise, via `False`.

## Configuration

### Field descriptions

* **Select message types** — required. A set of message types to check against; at least one must be specified.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgTypeFilterNodeConfiguration",
  "type": "object",
  "required": [
    "messageTypes"
  ],
  "additionalProperties": false,
  "properties": {
    "messageTypes": {
      "description": "Non-empty set of message types to check against.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "uniqueItems": true,
      "minItems": 1
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Determine the incoming message **type**.
2. Check whether the type is in the configured set.
    1. If it is, route the message to downstream nodes via `True`.
    2. If it is not, route the message to downstream nodes via `False`.

## Output connections

* `True`:
    * If the incoming message type matches any of the message types configured for the node.
* `False`:
    * If the incoming message type does not match any of the message types configured for the node.
* `Failure`:
    * If an unexpected error occurred during message processing.

## Examples

### Example 1 — Message type matches → `True`

**Incoming message**

Message type is `POST_TELEMETRY_REQUEST`.

**Node configuration**

```json
{
  "messageTypes": [
    "POST_TELEMETRY_REQUEST",
    "POST_ATTRIBUTES_REQUEST"
  ]
}
```

**State of the system**

Not relevant.

**Result**

Routed via **`True`**.

**Explanation**

The message type is in the configured set.

---

### Example 2 — Message type does not match → `False`

**Incoming message**

Message type is `POST_TELEMETRY_REQUEST`.

**Node configuration**

```json
{
  "messageTypes": [
    "POST_ATTRIBUTES_REQUEST",
    "TO_SERVER_RPC_REQUEST"
  ]
}
```

**State of the system**

Not relevant.

**Result**

Routed via **`False`**.

**Explanation**

The message type is not in the configured set.
