Changes the originator of the incoming message to another entity, as defined in the configuration. The originator can be changed to:

* **Customer** — the customer of the current originator.
* **Tenant** — the tenant of the current originator.
* **Related entity** — an entity related to the current originator.
* **Alarm originator** — the originator of the alarm, if the current originator is an alarm.
* **Entity by name pattern** — an entity found in the database by a configured name pattern.

## Configuration

### Field descriptions

* **New originator** — specifies which entity to set as the new originator for the outgoing message. Can be one of:
    * *Customer* — the customer assigned to the current originator.
    * *Tenant* — the tenant that owns the current originator.
    * *Related entity* — an entity related to the current originator, resolved using the configured **Relations query**.
    * *Alarm originator* — the entity that originated the alarm; available only when the current originator is an `ALARM`.
    * *Entity by name pattern* — an entity looked up in the database by **Type** and a configured **Name pattern**.

If *Related entity* is configured for *New originator*, you need to specify **Relations query** to resolve new originator:

* **Direction** — specifies the direction of the relation (*From originator* or *To originator*), relative to the current originator.
* **Max relation level** - maximum level of nested relations that are followed. If not specified, there is no limit for nesting.
* **Fetch last level relation only** - if enabled, only relations located in the **Max relation level** are considered, others are discarded. If disabled, entities found on all
  levels are considered. This field is shown only if **Max relation level** is set to a value other than 1.
* **Relation filters** - list of filters that found relation must satisfy to be considered.
    * **Relation type** - found relation must have this type.
    * **Entity type** - set of entity types that related entity must match.

If *Entity by name pattern* is configured for *New originator*, you need to specify following fields to find new originator:

* **Type** - type of the entity to look for. Can be one of: *Device*, *Asset*, *Entity View*, *User* or *Edge*.
* **Name pattern** - name pattern of the entity to look for. For example, `MyDevice` or, if using pattern, `${deviceName}`.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbChangeOriginatorNodeConfiguration",
  "type": "object",
  "properties": {
    "originatorSource": {
      "description": "Specifies which entity to set as the new originator for the outgoing message.",
      "type": "string",
      "enum": [
        "CUSTOMER",
        "TENANT",
        "RELATED",
        "ALARM_ORIGINATOR",
        "ENTITY"
      ]
    },
    "relationsQuery": {
      "description": "Configuration for finding a related entity. Used only when 'originatorSource' is 'RELATED'.",
      "type": "object"
    },
    "entityType": {
      "description": "The type of entity to look for. Used only when 'originatorSource' is 'ENTITY'.",
      "type": "string"
    },
    "entityNamePattern": {
      "description": "The name pattern of the entity to find. Used only when 'originatorSource' is 'ENTITY'.",
      "type": "string"
    }
  },
  "required": [
    "originatorSource"
  ]
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Try to find new originator based on configuration
    1. If found, change originator of the message to the new one and route the message via `Success`.
    2. If not found, route the message via `Failure`.

## Output connections

* `Success`:
    * If new originator was found and changed.
* `Failure`:
    * If new originator was not found.
    * If unexpected error occurred during message processing.

## Examples

### Example 1 — Changing originator to a customer

**Incoming message**

Originator is an asset.

**Node configuration**

```json
{
  "originatorSource": "CUSTOMER"
}
```

**State of the system**

Originator asset is assigned to a customer with ID `781a4826-8334-11f0-8de9-0242ac120002`.

**Outgoing message**

Originator is `CUSTOMER` with ID `781a4826-8334-11f0-8de9-0242ac120002`.

**Output connections:** `Success`.

**Explanation:** Because incoming message originator (an asset) is assigned to a customer, customer was found and originator was changed to that customer.

---

### Example 2 — Changing originator to a tenant

**Incoming message**

Any message.

**Node configuration**

```json
{
  "originatorSource": "TENANT"
}
```

**State of the system**

Processing happens in tenant with ID `a8b88d08-8339-11f0-8de9-0242ac120002`.

**Outgoing message**

Same as incoming message but originator is a `TENANT` with ID `a8b88d08-8339-11f0-8de9-0242ac120002`.

**Output connections:** `Success`.

**Explanation:** Because message processing always happens under some tenant, tenant can always be found an so originator was changed to that tenant.

---

### Example 3 — Changing originator to a related entity

**Incoming message**

Originator is an asset named `Parent Asset`.

**Node configuration**

```json
{
  "originatorSource": "RELATED",
  "relationsQuery": {
    "direction": "FROM",
    "maxLevel": 1,
    "filters": [
      {
        "relationType": "Contains",
        "entityTypes": []
      }
    ]
  }
}
```

**State of the system**

The system has the following relations:

Level 1: `Parent Asset` -- Contains --> `Child Device`

Level 2: `Child Device` -- Contains --> `Grandchild Device`

**Outgoing message**

Same as incoming message, but the originator is changed to the `Child Asset`.

**Output connections**: `Success`.

**Explanation**: The node searches for related entities starting from `Parent Asset`. It finds `Child Device` at level 1. Since `maxLevel` is set to 1, the search stops there, and `Child
Device` becomes the new originator. The `Grandchild Device` at level 2 is ignored.

---

### Example 4 — Changing originator to an alarm originator

**Incoming message**

Originator is an `ALARM`.

**Node configuration**

```json
{
  "originatorSource": "ALARM_ORIGINATOR"
}
```

**State of the system**

Originator of the incoming alarm is a device with ID `c4d81246-8341-11f0-8de9-0242ac120002`.

**Outgoing message**

Same as incoming but the originator is the `DEVICE` with ID `c4d81246-8341-11f0-8de9-0242ac120002`.

**Output connections**: `Success`.

**Explanation**: The incoming message's originator is an alarm. The node successfully identifies the entity that created the alarm (the device) and sets it as the new originator
for the outgoing message.

---

### Example 5 - Changing originator to entity by name pattern

**Incoming message**

Metadata:

```json
{
  "sensorName": "Sensor-T1000"
}
```

**Node configuration**

```json
{
  "originatorSource": "ENTITY",
  "entityType": "DEVICE",
  "entityNamePattern": "${sensorName}"
}
```

**State of the system**

A device with the name `Sensor-T1000` and ID `e6f15598-8345-11f0-8de9-0242ac120002` exists.

**Outgoing message**

Originator is the `DEVICE` with ID `e6f15598-8345-11f0-8de9-0242ac120002`.

**Output connections**: `Success`.

**Explanation**: The node resolves the name pattern `${sensorName}` by substituting it with the value from the message metadata, resulting in the name `Sensor-T1000`. It then finds
the
device with this name and successfully changes the originator.
