Adds the message originator entity to an entity group based on a configurable group name pattern.

## Configuration

The configuration allows you to specify how entities are added to groups and how the system behaves when groups don't exist or when entities are already in other groups.

- **Group name pattern** - A pattern that defines the name of the target entity group. The pattern supports templatization using `${metadataKey}` or `$[dataKey]` to substitute
  values from the message metadata or data.
- **Create new group if not exists** - When enabled, creates a new entity group if no group matching the pattern is found. When disabled, the processing fails if the target group
  doesn't exist.
- **Remove from current groups** - When enabled, removes the entity from all its current groups (except the "All" group) before adding it to the target group. This ensures the
  entity belongs only to the target group and the "All" group.
- **Groups cache expiration time (sec)** - Specifies the maximum time interval (in seconds) to cache entity group records. A value of 0 means records will never expire from the
  cache. This improves performance by reducing database lookups for frequently accessed groups.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbAddToGroupConfiguration",
  "type": "object",
  "properties": {
    "groupNamePattern": {
      "type": "string",
      "description": "Target entity group name, supports templatization."
    },
    "createGroupIfNotExists": {
      "type": "boolean",
      "description": "Whether to create a new group if the target group doesn't exist."
    },
    "removeFromCurrentGroups": {
      "type": "boolean",
      "description": "Whether to remove the entity from its current groups before adding to target group."
    },
    "groupCacheExpiration": {
      "type": "integer",
      "description": "Cache expiration time for group records in seconds."
    }
  },
  "required": [
    "groupNamePattern",
    "createGroupIfNotExists",
    "removeFromCurrentGroups",
    "groupCacheExpiration"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the **owner** of the message originator entity (tenant or customer).
2. It resolves any templates in the **Group name pattern** using values from the message data and metadata.
3. The node searches for an existing entity group matching the resolved group name, entity type and owner of the originator.
4. If **Remove from current groups** is enabled:
    - The node retrieves all entity groups that currently contain the originator entity
    - It removes the entity from all groups except the target group and the special "All" group
5. If the target group exists or **Create new group if not exists** is enabled:
    - If the group doesn't exist and creation is enabled, a new entity group is created with the resolved name
    - The originator entity is added to the target group
6. If the target group doesn't exist and creation is disabled, the processing fails
7. Group lookups are cached according to the **Groups cache expiration time** setting to improve performance
8. On successful completion, the message is forwarded to the `Success` connection. If an error occurs, the message is routed to the `Failure` connection.

## Output connections

- `Success`:
    - The entity was successfully added to the target group.
- `Failure`:
    - An error occurred during processing, such as the target group not existing when creation is disabled.

## Examples

### Example 1 — Adding device to group

**Incoming message**

Originator: `DEVICE` that belongs to the tenant.

**Node configuration**

```json
{
  "groupNamePattern": "My device group",
  "createGroupIfNotExists": false,
  "removeFromCurrentGroups": false,
  "groupCacheExpiration": 300
}
```

**State of the system**

There is a device group named "My device group" which belongs to a tenant.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The originator device is added to the "My device group" group.

### Example 2 — Using pattern for target group name

**Incoming message**

Data:

```json
{
  "location": "Warehouse"
}
```

Originator: `DEVICE` that belongs to the tenant.

**Node configuration**

```json
{
  "groupNamePattern": "$[location] devices",
  "createGroupIfNotExists": false,
  "removeFromCurrentGroups": false,
  "groupCacheExpiration": 300
}
```

**State of the system**

There is a device group named "Warehouse devices" which belongs to a tenant.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The pattern `${location}` devices is resolved by substituting the location value from the message data, resulting in the group name "Warehouse devices". The originator device is
added to the "Warehouse devices" group.

### Example 3 — Creating group if it does not exist

**Incoming message**

Originator: `DEVICE` that belongs to the tenant.

**Node configuration**

```json
{
  "groupNamePattern": "My device group",
  "createGroupIfNotExists": true,
  "removeFromCurrentGroups": false,
  "groupCacheExpiration": 300
}
```

**State of the system**

Device group named "My device group" does not exist.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since the group "My device group" does not exist and `createGroupIfNotExists` is set to true, the group is first created at the tenant level (same hierarchy level as the device),
then the originator device is added to the newly created "My device group" group.

### Example 4 — Removing device from current groups

**Incoming message**

Originator: `DEVICE` that belongs to the tenant.

**Node configuration**

```json
{
  "groupNamePattern": "Group A",
  "createGroupIfNotExists": false,
  "removeFromCurrentGroups": true,
  "groupCacheExpiration": 300
}
```

**State of the system**

- Device group "All" exists
- Device group "Group A" exists
- Device group "Group B" exists
- Device group "Group C" exists
- The originator device is currently a member of "All", "Group B" and "Group C" groups
- All groups are located on the same hierarchy level as device (tenant level)

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since `removeFromCurrentGroups` is set to true, the originator device is first removed from its current groups ("Group B" and "Group C"), then added to the "Group A" group. The
device ends up being a member of "Group A" and the "All" group.

### Example 5 — Ownership hierarchy error

**Incoming message**

Originator: `DEVICE` that belongs to the tenant.

**Node configuration**

```json
{
  "groupNamePattern": "Customer Group",
  "createGroupIfNotExists": false,
  "removeFromCurrentGroups": false,
  "groupCacheExpiration": 300
}
```

**State of the system**

Device group "Customer Group A" exists but is owned by a customer

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

The processing fails because the node looks for a group named "Customer Group" under the tenant's ownership (since the device belongs to the tenant), but the group "Customer Group"
exists under a customer.

### Example 6 — Unsupported entity type

**Incoming message**

Originator: `TENANT` entity.

**Node configuration**

```json
{
  "groupNamePattern": "My Group",
  "createGroupIfNotExists": false,
  "removeFromCurrentGroups": false,
  "groupCacheExpiration": 300
}
```

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

The processing fails because the originator entity type `TENANT` does not support entity groups. 
