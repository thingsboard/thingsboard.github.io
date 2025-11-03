Removes the message originator entity from an entity group based on a configurable group name pattern.

## Configuration

- **Group name pattern** - A pattern that defines the name of the target entity group. The pattern supports templatization using `${metadataKey}` or `$[dataKey]` to substitute
  values from the message metadata or data.
- **Groups cache expiration time (sec)** - Specifies the maximum time interval (in seconds) to cache entity group records. A value of 0 means records will never expire from the
  cache. This improves performance by reducing database lookups for frequently accessed groups.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbRemoveFromGroupConfiguration",
  "type": "object",
  "properties": {
    "groupNamePattern": {
      "type": "string",
      "description": "Target entity group name, supports templatization."
    },
    "groupCacheExpiration": {
      "type": "integer",
      "description": "Cache expiration time for group records in seconds."
    }
  },
  "required": [
    "groupNamePattern",
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
4. If the target group exists: the originator entity is removed from the target group, unless the target group is a special group 'All'
5. If the target group doesn't exist, the processing fails
6. Group lookups are cached according to the **Groups cache expiration time** setting to improve performance
7. On successful completion, the message is forwarded to the `Success` connection. If an error occurs (such as the group not existing), the message is routed to the `Failure`
   connection.

## Output connections

- `Success`
    - The entity was successfully removed from the target group.
- `Failure`
    - An error occurred during processing, such as the target group not existing.

## Examples

### Example 1 — Removing device from group

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "groupNamePattern": "My device group",
  "groupCacheExpiration": 300
}
```

**State of the system**

- The originator device belongs to the tenant
- There is a device group named "My device group" which belongs to a tenant
- The originator device is currently a member of "My device group"

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The originator device is removed from the "My device group" group.

### Example 2 — Using pattern for target group name

**Incoming message**

Data:

```json
{
  "location": "Warehouse"
}
```

Originator: `DEVICE`.

**Node configuration**

```json
{
  "groupNamePattern": "$[location] devices",
  "groupCacheExpiration": 300
}
```

**State of the system**

- The originator device belongs to the tenant
- There is a device group named "Warehouse devices" which belongs to a tenant
- The originator device is currently a member of "Warehouse devices"

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The pattern `$[location] devices` is resolved by substituting the location value from the message data, resulting in the group name "Warehouse devices". The originator device is
removed from the "Warehouse devices" group.

### Example 3 — Group does not exist

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "groupNamePattern": "Non-existent group",
  "groupCacheExpiration": 300
}
```

**State of the system**

- The originator device belongs to the tenant
- Device group named "Non-existent group" does not exist.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

Since the group "Non-existent group" does not exist, the processing fails with an error message indicating that no entity group was found.

### Example 4 — Device not in the specified group

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "groupNamePattern": "Target Group",
  "groupCacheExpiration": 300
}
```

**State of the system**

- Device group "Target Group" exists
- The originator device is NOT a member of "Target Group"

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The removal operation completes successfully even though the device was not a member of "Group A". The system treats this as a successful operation (idempotent behavior).

### Example 5 — Ownership hierarchy error

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "groupNamePattern": "Customer Group",
  "groupCacheExpiration": 300
}
```

**State of the system**

- The originator device belongs to the tenant
- Device group "Customer Group" exists but is owned by a customer

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

The processing fails because the node looks for a group named "Customer Group" under the tenant's ownership (since the device belongs to the tenant), but the group "Customer Group"
exists under a customer.

### Example 6 — Unsupported entity type

**Incoming message**

Originator: `TENANT`.

**Node configuration**

```json
{
  "groupNamePattern": "My Group",
  "groupCacheExpiration": 300
}
```

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

The processing fails because the originator entity type `TENANT` does not support entity groups.
