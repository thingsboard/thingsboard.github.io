Duplicates an incoming message to every entity belonging to a specified entity group. For each entity, a new message is created with that entity set as the new originator.

## Preconditions

If the node is configured with **Entity group is message originator** enabled, the incoming message **must** originate from an entity of the type `ENTITY_GROUP`. If the originator
is any other entity type (like a `DEVICE` or `ASSET`), the message will be routed to the `Failure` chain.

## Configuration

The node can be configured in two modes.

### Mode 1: Specific entity group

This is the default mode, where you manually select the target entity group.

- **Entity group is message originator** - disabled (toggle is off).
- **Owner** - the owner of the entity group (e.g., a specific Customer or Tenant).
- **Type** - the entity type of the entities within the group (e.g., *Device*, *Asset*).
- **Select entity group** - the specific entity group to which the message will be duplicated.

### Mode 2: Originator is the entity group

In this mode, the target entity group is dynamically determined from the incoming message originator.

- **Entity group is message originator** - enabled (toggle is on).

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbDuplicateMsgToGroupNodeConfiguration",
  "type": "object",
  "properties": {
    "entityGroupIsMessageOriginator": {
      "type": "boolean",
      "description": "If true, the message originator is expected to be the entity group. If false, a specific 'entityGroupId' must be provided."
    },
    "entityGroupId": {
      "type": "object",
      "description": "Object containing entity type and UUID of the target entity group. Required when 'entityGroupIsMessageOriginator' is false.",
      "properties": {
        "entityType": {
          "const": "ENTITY_GROUP"
        },
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "The UUID of the target entity group."
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "entityGroupIsMessageOriginator"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node first determines the target **Entity Group** based on its configuration:
    - If a specific group is selected, it uses that group.
    - If **Entity group is message originator** is enabled, it checks if the incoming message originator is an `ENTITY_GROUP`. If it's not, the processing fails. If it is, that
      originator is used as the target group.
2. The node fetches a list of all entities that are members of the target entity group.
3. For **each entity** in the group, a new message is created. This new message is a copy of the original, but its originator is set to the current entity from the group.
4. All newly created messages are sent out via the `Success` chain. The original message is acknowledged once all duplicates have been successfully enqueued.
5. If the target entity group is empty or does not exist, the original message is routed to the `Failure` chain.

## Output connections

- `Success`:
    - New messages (one for each entity in the group) are sent through this chain.
- `Failure`:
    - If the target entity group is empty.
    - If the **Entity group is message originator** option is enabled, but the actual message originator is not an entity group.
    - If any other unexpected error occurs.

## Examples

### Example 1 — Duplicate to a specific device group

**Incoming message**

Data: `{"targetTemperature": 100"}`

**Node configuration**

{% capture status_property_note %}
**Note:** The `entityGroupId` is a placeholder UUID for the `Thermostats Floor 1` group.
{% endcapture %}
{% include templates/info-banner.md content=status_property_note %}

```json
{
  "entityGroupIsMessageOriginator": false,
  "entityGroupId": {
    "entityType": "ENTITY_GROUP",
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef"
  }
}
```

**State of the system**

Device group named `Thermostats Floor 1` exists with ID `a1b2c3d4-e5f6-7890-1234-567890abcdef` and contains two entities: `Thermostat A` and `Thermostat B`.

**Outgoing messages**

Two new messages are created and sent via the `Success` chain:

1. **Message 1**:
    - **Originator**: `Thermostat A`
    - **Data**: `{"targetTemperature": 100}`
2. **Message 2**:
    - **Originator**: `Thermostat B`
    - **Data**: `{"targetTemperature": 100}`

**Explanation**: The original message is duplicated to all members (`Thermostat A`, `Thermostat B`) of the `Thermostats Floor 1` entity group.

---

### Example 2 — Entity group is originator of the incoming message

**Incoming message**

Originator: entity group named `All sensors`

Data: `{"command": "reboot"}`

**Node configuration**

```json
{
  "entityGroupIsMessageOriginator": true
}
```

**State of the system**

Entity group named `All sensors` exists and contains two entities: `Sensor A` and `Sensor B`

**Outgoing messages**

Two new messages are created and sent via the `Success` chain:

1. **Message 1**:
    - Originator: `Sensor X`
    - Data: `{"command": "reboot"}`
2. **Message 2**:
    - Originator: `Sensor Y`
    - Data: `{"command": "reboot"}`

**Explanation**: The incoming message originator is the entity group itself. The node duplicates the message to all members of that group.
