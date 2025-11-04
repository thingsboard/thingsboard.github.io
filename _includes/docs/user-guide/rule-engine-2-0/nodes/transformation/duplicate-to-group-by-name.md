Duplicates an incoming message to every entity belonging to an entity group that is dynamically resolved by its name and type.

## Configuration

The node finds a target entity group by its name. The search logic depends on the configuration.

- **Type** - the entity type of the entities within the group (e.g., *Device*, *Asset*).
- **Entity group name** - the name of the group to find. This field supports templates to dynamically extract the name from the message data or metadata (e.g., `${groupName}`).
- **Search entity group on Tenant level only** - if enabled, the search is restricted to only those groups directly owned by the Tenant.
- **Consider originator as a group owner** - if enabled, the search for the group starts from the message originator's level (if the originator is a Tenant or Customer). If
  disabled, the search starts from the level of the originator's direct owner.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbDuplicateMsgToGroupByNameNodeConfiguration",
  "type": "object",
  "properties": {
    "groupType": {
      "type": "string",
      "enum": [
        "DEVICE",
        "ASSET",
        "ENTITY_VIEW",
        "CUSTOMER",
        "USER",
        "DASHBOARD",
        "EDGE"
      ],
      "description": "The type of entities in the target group."
    },
    "groupName": {
      "type": "string",
      "description": "The name of the entity group. Supports templates."
    },
    "searchEntityGroupForTenantOnly": {
      "type": "boolean",
      "description": "If true, the search is restricted to the Tenant level only."
    },
    "considerMessageOriginatorAsAGroupOwner": {
      "type": "boolean",
      "description": "If true and originator is Tenant or Customer, search starts from originator's level."
    }
  },
  "required": [
    "groupType",
    "groupName",
    "searchEntityGroupForTenantOnly",
    "considerMessageOriginatorAsAGroupOwner"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node resolves the **Group name** by processing the configured pattern against the incoming message data and metadata.
2. It then determines the starting point for the group search based on the configuration flags and the message originator.
    - If **Search entity group on Tenant level only** is enabled, it looks for the group under the Tenant only.
    - If **Consider originator as a group owner** is enabled (and the originator is a Tenant or Customer), the search begins from the originator itself.
    - Otherwise, the search begins from the direct owner of the message originator (e.g., a Customer that owns a Device).
3. The node searches for an entity group matching the resolved name and configured type. If a group is not found at the starting level, the search moves up the ownership
   hierarchy (e.g., from Customer to Tenant).
4. If no matching group is found anywhere in the hierarchy, the processing fails.
5. Once the group is found, the node fetches a list of all its member entities.
6. For **each entity** in the group, a new message is created. This new message is a copy of the original, but its originator is set to the current entity from the group.
7. All newly created messages are sent out via the `Success` chain. The original message is acknowledged once all duplicates have been successfully enqueued.
8. If the target entity group is found but is empty, the processing fails and the original message is routed to the `Failure` chain.

## Output connections

- `Success`:
    - New messages (one for each entity in the group) are sent through this chain.
- `Failure`:
    - If no entity group matching the name and type is found.
    - If the found entity group is empty.
    - If any other unexpected error occurs.

## Examples

### Example 1 — Search starting from originator's owner

**Incoming message**

Originator: `Device A`

Data: `{"command": "update_firmware"}`

**Node configuration**

```json
{
  "groupType": "DEVICE",
  "groupName": "Factory A Devices",
  "searchEntityGroupForTenantOnly": false,
  "considerMessageOriginatorAsAGroupOwner": false
}
```

**State of the system**

- A Tenant owns `Customer A`.
- `Customer A` owns `Device A`.
- `Customer A` also owns a device group named `Factory A Devices`, which contains two entities: `Device B` and `Device C`.

**Outgoing messages**

Two new messages are created and sent via the `Success` chain:

1. **Message 1**:
    - **Originator**: `Device B`
    - **Data**: `{"command": "update_firmware"}`
2. **Message 2**:
    - **Originator**: `Device C`
    - **Data**: `{"command": "update_firmware"}`

**Explanation**: Since `considerMessageOriginatorAsAGroupOwner` is `false`, the search starts from the owner of `Device A`, which is `Customer A`. It finds the group
`Factory A Devices` under `Customer A` and duplicates the message to its members.

-----

### Example 2 — Hierarchical search (owner to tenant)

**Incoming message**

Originator: `Asset X`

Data: `{"status": "maintenance_required"}`

**Node configuration**

```json
{
  "groupType": "ASSET",
  "groupName": "All Factory Assets",
  "searchEntityGroupForTenantOnly": false,
  "considerMessageOriginatorAsAGroupOwner": false
}
```

**State of the system**

- A Tenant owns `Customer B`.
- `Customer B` owns `Asset X`.
- `Customer B` does **not** own an asset group named `All Factory Assets`.
- The **Tenant** owns an asset group named `All Factory Assets`, which contains `Asset Y` and `Asset Z`.

**Outgoing messages**

Two new messages are created and sent via the `Success` chain:

1. **Message 1**:
    - **Originator**: `Asset Y`
    - **Data**: `{"status": "maintenance_required"}`
2. **Message 2**:
    - **Originator**: `Asset Z`
    - **Data**: `{"status": "maintenance_required"}`

**Explanation**: The search starts at the originator's owner, `Customer B`, but fails to find the group. It then automatically moves up the hierarchy to the Tenant, where it finds
the group and duplicates the message to its members.

-----

### Example 3 — Search restricted to Tenant level

**Incoming message**

Originator: `Device A`

Data: `{"command": "check_status"}`

**Node configuration**

```json
{
  "groupType": "DEVICE",
  "groupName": "Building Monitors",
  "searchEntityGroupForTenantOnly": true,
  "considerMessageOriginatorAsAGroupOwner": false
}
```

**State of the system**

- A Tenant owns `Customer A`.
- `Customer A` owns `Device A`.
- `Customer A` owns a device group named `Building Monitors` that contains `Device B`.
- The Tenant also owns a device group named `Building Monitors` that contains `Device C` and `Device D`.

**Outgoing messages**

Two new messages are created and sent via the `Success` chain:

1. **Message 1**:
    - **Originator**: `Device C`
    - **Data**: `{"command": "check_status"}`
2. **Message 2**:
    - **Originator**: `Device D`
    - **Data**: `{"command": "check_status"}`

**Explanation**: Because `searchEntityGroupForTenantOnly` is true, the search is restricted to the Tenant level. Even though a group with the same name exists under `Customer A` (the
originator's owner), it is ignored. The node finds the group owned by the Tenant and duplicates the message to its members (`Device C` and `Device D`).
