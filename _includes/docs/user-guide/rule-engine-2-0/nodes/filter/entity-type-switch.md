Routes incoming messages based on the originator entity type. The message is forwarded through the output connection whose label exactly matches the entity type’s **normal name**.

## Configuration

### Field descriptions

There are no available configuration fields.

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

1. Determines the incoming message’s originator entity type and looks up its normal name.
2. Routes the message to downstream nodes using the connection with a label that **exactly matches** the normal name.

## Output connections

* Normal name of the originator entity type
    * Used for all messages; the message is routed via the connection whose label exactly matches the normal name.
* `Failure`:
    * If an unexpected error occurred during message processing.

## Examples

The examples below show only the **relevant** fields of the incoming message. Unless explicitly stated otherwise, other message fields may have any values.

---

### Example 1 — Originator entity type is a `DEVICE` → routed via **`Device`**

**Incoming message**

Originator entity type is a `DEVICE`.

**Node configuration**

```json
{}
```

**State of the system**

Not relevant.

**Result**

Routed via **`Device`**.

**Explanation**

For `DEVICE`, the normal name is `Device`. The node routes the message via the connection with that exact label.

---

### Example 2 — Originator entity type is an `ENTITY_VIEW` → routed via **`Entity View`**

**Incoming message**

Originator entity type is an `ENTITY_VIEW`.

**Node configuration**

```json
{}
```

**State of the system**

Not relevant.

**Result**

Routed via **`Entity View`**.

**Explanation**

For `ENTITY_VIEW`, the normal name is `Entity View`. The node routes the message via the connection with that exact label.

---

### Example 3 — Originator entity type is an `AI_MODEL` → routed via **`AI model`**

**Incoming message**

Originator entity type is an `AI_MODEL`.

**Node configuration**

```json
{}
```

**State of the system**

Not relevant.

**Result**

Routed via **`AI model`**.

**Explanation**

For `AI_MODEL`, the normal name is `AI model`. The node routes the message via the connection with that exact label.
