Deletes relations from the message originator based on configured direction, type, and optional target entity.

## Configuration

- **Direction**: Defines the direction of relations to delete from the message originator.
    - *From originator*: Deletes relations where the message originator is the "from" entity
    - *To originator*: Deletes relations where the message originator is the "to" entity
- **Relation type**: Type of relations to delete. Supports templatization using `${metadataKey}` and `$[dataKey]` patterns.
- **Delete relation with specific entity**: When enabled, deletes relation only with the specified target entity. When disabled, deletes all relations of the specified type and
  direction.

### Target entity configuration (when **Delete relation with specific entity** is enabled)

- **Type**: Type of target entity to delete relation with.
- **Entity identifier**: Name, title, or email of the target entity (depends on entity type). Supports templatization using `${metadataKey}` and `$[dataKey]` patterns.

Supported target entity types:

- *Device*, *Asset*, *Entity View*, *Edge*, *Converter*, *Role* - specify name as entity identifier
- *Customer*, *Dashboard* - specify title as entity identifier
- *User* - specify email as entity identifier
- *Tenant* - no identifier needed (uses current tenant)

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbDeleteRelationNodeConfiguration",
  "type": "object",
  "properties": {
    "direction": {
      "type": "string",
      "enum": [
        "FROM",
        "TO"
      ],
      "description": "Direction of relations to delete"
    },
    "relationType": {
      "type": "string",
      "description": "Type of relations to delete"
    },
    "deleteForSingleEntity": {
      "type": "boolean",
      "description": "Whether to delete relation with specific entity only"
    },
    "entityType": {
      "type": "string",
      "enum": [
        "TENANT",
        "DEVICE",
        "ASSET",
        "CUSTOMER",
        "ENTITY_VIEW",
        "DASHBOARD",
        "USER",
        "EDGE",
        "CONVERTER",
        "ROLE"
      ],
      "description": "Target entity type (when 'deleteForSingleEntity' is true)"
    },
    "entityNamePattern": {
      "type": "string",
      "description": "Target entity name/title/email pattern (when 'deleteForSingleEntity' is true)"
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Process relation type**: Processes the configured relation type pattern, substituting any placeholders with values from the message.
2. **Determine deletion mode**:
    - If **Delete relation with specific entity** is enabled, proceeds to specific entity deletion
    - If disabled, proceeds to delete all relations of the specified type and direction
3. **Specific entity deletion** (when **Delete relation with specific entity** is enabled):
    - Processes the target entity identifier pattern, substituting placeholders with message values
    - Looks up the target entity by type and processed identifier (processing fails if entity doesn't exist)
    - Deletes the relation of specified type and direction between message originator and target entity
4. **Bulk deletion** (when **Delete relation with specific entity** is disabled):
    - Deletes all relations of the specified type and direction involving the message originator
5. **Route message**: Routes the original message to `Success` if all deletions were successful, otherwise to `Failure`.

## Output connections

- `Success`
    - All relations of the specified type and direction involving the message originator were successfully deleted
    - Relation of specified type and direction between message originator and target entity was deleted
- `Failure`
    - Target entity was not found
    - Unexpected error occurred during processing

## Examples

### Example 1 — Delete all relations of specific type

**Incoming message**

Any message.

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "Contains",
  "deleteForSingleEntity": false
}
```

**State of the system**

Following relations exist:

- From originator with type `Contains` to `Device A`, `Device B`, and `Device C`.
- From originator with type `Uses` to `Asset D`

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

All `Contains` relations from the originator are deleted (relations to `Device A`, `Device B`, and `Device C`).
The `Uses` relation to `Asset D` remains unchanged.

### Example 2 — Delete relation with specific entity using patterns

**Incoming message**

Originator: `DEVICE`

Data:

```json
{
  "targetAssetName": "Building"
}
```

Metadata:

```json
{
  "relationType": "LocatedIn"
}
```

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "${relationType}",
  "deleteForSingleEntity": true,
  "entityType": "ASSET",
  "entityNamePattern": "$[targetAssetName]"
}
```

**State of the system**

Following relations exist:

- From originator device with type `LocatedIn` to asset named `Building`.
- From originator with various type to other assets.

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

The `LocatedIn` relation between originator device and asset `Building` is deleted.
All other relations remain unchanged.

### Example 3 — Delete relation with tenant

**Incoming message**

Any message.

**Node configuration**

```json
{
  "direction": "TO",
  "relationType": "Owns",
  "deleteForSingleEntity": true,
  "entityType": "TENANT"
}
```

**State of the system**

Following relation exist:

- From current tenant with type `Owns` to the originator.

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

The `Owns` relation from the tenant to originator device is deleted.
Note that there is no need to specify an entity identifier since there is only one tenant to choose from: the current tenant.

### Example 4 — Attempt to delete relation with non-existent entity

**Incoming message**

Any message.

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "Contains",
  "deleteForSingleEntity": true,
  "entityType": "ASSET",
  "entityNamePattern": "nonexistent_asset"
}
```

**State of the system**

No asset named `nonexistent_asset` exists in the system.

**Outgoing message**

Same as incoming message, routed via `Failure` connection.

**Result**

Processing fails because target entity does not exist. No relations are modified. 
