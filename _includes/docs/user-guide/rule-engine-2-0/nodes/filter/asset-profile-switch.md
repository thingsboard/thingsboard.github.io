Routes incoming messages based on the name of the profile of the originator asset.

## Preconditions

Incoming message originator entity type must be an `ASSET`.

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

1. Checks whether incoming message originator entity type is an `ASSET`.
    1. If the incoming message originator entity type is not an `ASSET`, processing end with a `Failure`.
2. Fetches the profile of that asset from the database to get profile name.
    1. If profile was not found (possible if originator no longer exist at the time of message processing), processing ends with a `Failure`.
3. Routes the incoming message to downstream nodes using connection with a label that matches exactly with fetched profile name.

## Output connections

* Asset profile name:
    * If incoming message originator entity type is an `ASSET` and profile for that asset was found.
* `Failure`:
    * If the incoming message originator entity type is not an `ASSET`.
    * If the profile for the incoming message originator was not found.
    * If another unexpected error occurred during message processing.

## Examples

The examples below show only the **relevant** fields of the incoming message. Unless explicitly stated otherwise, other message fields may have any values.

---

### Example 1 — Originator entity type is an `ASSET` with profile “Boiler Room” → routed via **`Boiler Room`**

**Incoming message**

Originator entity type is an `ASSET`.

**Node configuration**

```json
{}
```

**State of the system**

The asset exists and its **profile name** is `Boiler Room`.

**Result**

Routed via **`Boiler Room`**.

**Explanation**

The node fetches the asset’s profile and uses the **exact profile name** as the connection label.

---

### Example 2 — Originator entity type is **not** an `ASSET` → **`Failure`**

**Incoming message**

Originator entity type is not an `ASSET`. For example, it could be a `DEVICE` or any other entity type.

**Node configuration**

```json
{}
```

**State of the system**

Not relevant.

**Result**

**`Failure`**.

**Explanation**

The node requires the originator entity type to be an `ASSET`.

---

### Example 3 — Asset was not found at processing time → **`Failure`**

**Incoming message**

Originator entity type is an `ASSET`.

**Node configuration**

```json
{}
```

**State of the system**

No asset with this ID exists (e.g., it was deleted while message was in queue).

**Result**

**`Failure`**.

**Explanation**

The node cannot fetch the asset’s profile.
