Duplicates an incoming message to all entities that are related to the message originator, based on a specified relations query.

## Configuration

The node is configured using a **Relations query** to find the target entities.

- **Direction** - specifies the direction of the relation to search, either *From originator* or *To originator*.
- **Max relation level** - sets the maximum depth for traversing nested relations (e.g., a value of 2 would find entities related to the originator, and entities related to those
  entities).
- **Fetch last level relation only** - TODO double check and test this to be correct! if enabled, only entities found at the maximum specified level are used. This is only applicable if **Max relation level** is greater than 1.
- **Relation filters** - a list of criteria to filter the relations. Each filter specifies:
    - **Relation type** - the type of the relation to look for (e.g., *Contains*, *Manages*).
    - **Entity type** - a list of acceptable entity types for the related entities (e.g., *Device*, *Asset*).

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbDuplicateMsgToRelatedNodeConfiguration",
  "type": "object",
  "properties": {
    "relationsQuery": {
      "type": "object",
      "description": "Defines the query to find related entities.",
      "properties": {
        "direction": {
          "type": "string",
          "enum": [
            "FROM",
            "TO"
          ],
          "description": "Direction of the relation search."
        },
        "maxLevel": {
          "type": "integer",
          "description": "Maximum level of nested relations to follow."
        },
        "fetchLastLevelOnly": {
          "type": "boolean",
          "description": "If true, only entities found on the 'maxLevel' are returned."
        },
        "filters": {
          "type": "array",
          "description": "List of filters to apply to the relations.",
          "items": {
            "type": "object",
            "properties": {
              "relationType": {
                "type": "string",
                "description": "The type of the relation (e.g., 'Contains')."
              },
              "entityTypes": {
                "type": "array",
                "description": "A list of allowed entity types for the related entity.",
                "items": {
                  "type": "string"
                }
              }
            },
            "required": [
              "relationType",
              "entityTypes"
            ]
          }
        }
      },
      "required": [
        "direction",
        "filters"
      ]
    }
  },
  "required": [
    "relationsQuery"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the originator of the incoming message.
2. It executes the configured **Relations query**, starting from the originator entity, to find all related entities.
3. If the query does not find any matching related entities, the processing fails and the message is routed via `Failure`.
4. For **each related entity** that is found, a new message is created. This new message is a copy of the original, but its originator is set to that related entity.
5. All newly created messages are sent out via the `Success` chain. The original message is acknowledged once all duplicates have been successfully enqueued.

## Output connections

- **`Success`**:
    - New messages (one for each found related entity) are sent through this chain.
- **`Failure`**:
    - If the relations query finds no entities.
    - If any other unexpected error occurs.

## Examples

### Example 1 — Duplicate to related devices

**Incoming message**

Originator: Asset `Building A`

Data: `{"command": "setFanSpeed", "value": "HIGH"}`

**Node configuration**

```json
{
  "relationsQuery": {
    "direction": "FROM",
    "maxLevel": 1,
    "filters": [
      {
        "relationType": "Contains",
        "entityTypes": ["DEVICE"]
      }
    ]
  }
}
```

**State of the system**

The asset `Building A` has two outgoing `Contains` relations: one to `Device HVAC-1` and one to `Device HVAC-2`.

**Outgoing messages**

Two new messages are created and sent via the `Success` chain:

1. **Message 1**:
    - **Originator**: `Device HVAC-1`
    - **Data**: `{"command": "setFanSpeed", "value": "HIGH"}`
2. **Message 2**:
    - **Originator**: `Device HVAC-2`
    - **Data**: `{"command": "setFanSpeed", "value": "HIGH"}`

**Explanation**: The node queries for devices contained by the originator (`Building A`). It finds two such devices and creates a copy of the message for each one, setting them as
the new originators.

-----

### Example 2 — Duplicate to a related customer

**Incoming message**

Originator: Device `Thermostat-Z1`

Data: `{"alert": "battery_low"}`

**Node configuration**

```json
{
  "relationsQuery": {
    "direction": "TO",
    "maxLevel": 1,
    "filters": [
      {
        "relationType": "Manages",
        "entityTypes": [
          "CUSTOMER"
        ]
      }
    ]
  }
}
```

**State of the system**

A customer named `Customer B` has an outgoing `Manages` relation to the device `Thermostat-Z1`.

**Outgoing messages**

One new message is created and sent via the `Success` chain:

1. **Message 1**:
    - **Originator**: `Customer B`
    - **Data**: `{"alert": "battery_low"}`

**Explanation**: The node searches for entities that have a `Manages` relation *to* the originator (`Thermostat-Z1`). It finds `Customer B` and creates a new message with the
customer as the originator. This is useful for propagating device alerts up to owning customers.
