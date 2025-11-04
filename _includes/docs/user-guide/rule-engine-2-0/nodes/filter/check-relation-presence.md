Checks whether a relation exists between the incoming message originator and another entity - either any entity or a specific one - based on the configured direction and relation
type.

## Configuration

### Field descriptions

#### Relation search parameters

* **Direction** — required. Specifies the direction of the relation (*From originator* or *To originator*), relative to the incoming message originator.
* **Relation type** — required. Specifies the type of relation to match (e.g., *Contains*, *Manages*).
* **Check relation to specific entity** — toggle.
    * When enabled, the node checks for a relation that matches the specified direction and type and points to a specific entity. Two additional fields appear:
        * **Type** — required. Specifies the entity type of the target.
        * [Entity selector] — required. Lets you select the specific entity by name. The field label changes based on the selected type (e.g., Device, Asset, Customer).
    * When disabled, the node checks for any relation that matches the selected direction and type, regardless of the other entity.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbCheckRelationNodeConfiguration",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "direction": {
      "type": "string",
      "description": "Direction of the relation relative to the originator.",
      "enum": [
        "FROM",
        "TO"
      ]
    },
    "relationType": {
      "type": "string",
      "description": "Type of the relation to match."
    },
    "checkForSingleEntity": {
      "type": "boolean",
      "description": "When enabled, the relation must match a specific target entity."
    },
    "entityType": {
      "type": "string",
      "description": "Type of the entity."
    },
    "entityId": {
      "type": "string",
      "format": "uuid",
      "description": "UUID of the specific entity to check against. Required if 'checkForSingleEntity' is true."
    }
  },
  "required": [
    "direction",
    "relationType",
    "checkForSingleEntity"
  ]
}

```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. If **Check relation to specific entity** is enabled:
    1. Check whether a relation exists that matches:
        * The configured **direction**,
        * The specified **relation type**,
        * And the configured **target entity**.
    2. If such a relation is found, route the message via `True`; otherwise, via `False`.
2. If **Check relation to specific entity** is disabled:
    1. Search for any relation that matches the configured **direction** and **type**.
    2. If at least one matching relation is found, route the message via `True`; otherwise, via `False`.

## Output connections

* `True`:
    * If matching relation was found.
* `False`:
    * If matching relation was not found.
* `Failure`:
    * If unexpected error occurred during message processing.

## Examples

The examples below show only the **relevant** fields of the incoming message. Unless explicitly stated otherwise, other message fields may have any values.

---

### Example 1 — Relation to specific entity exists → `True`

**Incoming message**

Any message.

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "Contains",
  "checkForSingleEntity": true,
  "entityType": "ASSET",
  "entityId": "8c67e3b0-1234-4e9a-9b8c-781be214172f"
}
```

**State of the system**

A relation of type `Contains` exists **from** the originator **to** the specified asset.

**Result**

Routed via **`True`**.

**Explanation**

The relation with matching direction, type, and target entity was found.

---

### Example 2 — Relation to specific entity does not exist → `False`

**Incoming message**

Any message.

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "Manages",
  "checkForSingleEntity": true,
  "entityType": "ASSET",
  "entityId": "3b4f2d90-7891-4b2d-88d7-d3cfb90ec501"
}
```

**State of the system**

No relation of type `Manages` exists **from** the originator to the specified asset.

**Result**

Routed via **`False`**.

**Explanation**

The configured relation was not found.

---

### Example 3 — Relation to any entity exists → `True`

**Incoming message**

Any message.

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "Connected",
  "checkForSingleEntity": false
}
```

**State of the system**

The originator has at least one `Connected` relation in the `FROM` direction to another entity.

**Result**

Routed via **`True`**.

**Explanation**

A relation with matching direction and type exists.

---

### Example 4 — No matching relation exists → `False`

**Incoming message**

Any message.

**Node configuration**

```json
{
  "direction": "TO",
  "relationType": "Contains",
  "checkForSingleEntity": false
}
```

**State of the system**

No `Contains` relations in the `TO` direction exist for the originator.

**Result**

Routed via **`False`**.

**Explanation**

No matching relation was found.

---

### Example 5 — Multi-level relation is not considered → `False`

**Incoming message**

Originator is a `CUSTOMER`.

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "Contains",
  "checkForSingleEntity": true,
  "entityType": "DEVICE",
  "entityId": "de305d54-75b4-431b-adb2-eb6b9e546013"
}
```

**State of the system**

* A `Contains` relation exists **from** the customer to an asset.
* Another `Contains` relation exists **from** that asset to the target device.
* No direct relation exists between the customer and the device.

**Result**

Routed via **`False`**.

**Explanation**

The node checks only **direct** relations. Indirect or multi-level relations (e.g., customer → asset → device) are **not** followed. Since there is no direct relation from the
originator to the target device, the result is `False`.
