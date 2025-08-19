# entity type filter

Checks the incoming message’s originator entity type against the configured set of entity types. If the type is in the set, the message is routed via `True`; otherwise, via`False`.

## Preconditions

There are no preconditions.

## Configuration

### Field descriptions

* **Select entity types** - required. A set of entity types to check against; at least one must be specified. Default value: *Device*.

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
        "$ref": "https://schemas.thingsboard.io/pe/4.3.0/entity-type.schema.json"
      },
      "uniqueItems": true,
      "minItems": 1
    }
  }
}
```

## Message processing algorithm

1. Determine whether the incoming message’s originator entity type matches one of the configured entity types.
    1. If it matches, route the message to downstream nodes via `True`.
    2. If it does not match, route the message to downstream nodes via `False`.

> Note: The incoming message is not modified.

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

## Use cases

TODO add link to entity type switch node here

Use **entity type filter** when processing requires a binary decision (include/exclude) based on the originator type. The node routes messages to `True` if the originator entity
type is in the configured set, and to `False` otherwise. This is ideal for guarding a pipeline, whitelisting allowed types, or pruning messages before a single downstream path.

When to prefer **entity type switch** instead:

- You need to branch to different sub-chains per originator type (fan-out), for example sending `DEVICE` to one path, `ASSET` to another, and `ENTITY_VIEW `to a third.
