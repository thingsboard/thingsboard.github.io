Checks the incoming message’s originator entity type against the configured set of entity types. If the type is in the set, the message is routed via `True`; otherwise, via
`False`.

## Configuration

### Field descriptions

* **Select entity types** - a set of entity types to check against; at least one must be specified.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbOriginatorTypeFilterNodeConfiguration",
  "type": "object",
  "required": [
    "originatorTypes"
  ],
  "additionalProperties": false,
  "properties": {
    "originatorTypes": {
      "description": "Non-empty set of originator entity types to check against.",
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

1. Determine whether the incoming message’s originator entity type matches one of the configured entity types.
    1. If it matches, route the message to downstream nodes via `True`.
    2. If it does not match, route the message to downstream nodes via `False`.

## Output connections

* `True`:
    * If incoming message’s originator entity type matches any of the entity types configured for the node.
* `False`:
    * If incoming message’s originator entity type does not match any of the entity types configured for the node.
* `Failure`:
    * If unexpected error occurred during message processing.

## Examples

The examples below show only the **relevant** fields of the incoming message. Unless explicitly stated otherwise, other message fields may have any values.

---

### Example 1 — Entity type matches → `True`

**Incoming message**

Originator entity type is an `ASSET`.

**Node configuration**

```json
{
  "originatorTypes": [
    "ASSET",
    "DEVICE"
  ]
}
```

**State of the system**

Not relevant.

**Result**

Routed via **`True`**.

**Explanation**

Incoming message originator entity type is in the configured set, so the message is routed via `True`.

### Example 2 — Entity type does not match → `False`

**Incoming message**

Originator entity type is a `TENANT`.

**Node configuration**

```json
{
  "originatorTypes": [
    "ASSET",
    "DEVICE"
  ]
}
```

**State of the system**

Not relevant.

**Result**

Routed via **`False`**.

**Explanation**

Incoming message originator entity type is not in the configured set, so the message is routed via `False`.
