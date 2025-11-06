Creates relations between the message originator and a specified target entity based on configured direction and type.

## Configuration

### Relation parameters

- **Direction**: Defines the direction of the relation from the perspective of the message originator.
    - *From originator to target entity*: Creates relation where originator is the "from" entity and target is the "to" entity
    - *From target entity to originator*: Creates relation where target is the "from" entity and originator is the "to" entity
- **Relation type**: Type of the relation to create (e.g., "Contains", "Manages"). Supports templatization using `$[dataKey]` and `${metadataKey}` patterns.

### Target entity

- **Type**: Type of the target entity to create relation with. Supported types:
    - **Device**: Target a device by name. Requires **Device name** pattern.
    - **Asset**: Target an asset by name. Requires **Asset name** pattern.
    - **Entity View**: Target an entity view by name. Requires **Entity view name** pattern.
    - **Tenant**: Target the current tenant (no additional fields required).
    - **Customer**: Target a customer by title. Requires **Customer title** pattern.
    - **Dashboard**: Target a dashboard by title. Requires **Dashboard title** pattern.
    - **User**: Target a user by email. Requires **User email** pattern.
    - **Edge**: Target an edge by name. Requires **Edge name** pattern.

- **Entity name/title/email pattern**: Pattern to identify the target entity. Supports templatization using `$[dataKey]` and `${metadataKey}` patterns.
- **Profile name**: Required when **Create new entity if it doesn't exist** is enabled for *Device* or *Asset* types. Specifies the device profile or asset profile for newly
  created entities.
- **Create new entity if it doesn't exist**: When enabled, creates the target entity if it doesn't exist. Available for *Device*, *Asset*, and *Customer* entity types.
    - For *Device* and *Asset*: Requires profile name to be specified
    - For *Customer*: Creates customer with specified title

### Advanced settings

- **Remove current relations**: Removes all existing relations of the same type and direction before creating the new relation.
- **Change originator to related entity**: When enabled, changes the message originator to the target entity after successful relation creation.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbCreateRelationNodeConfiguration",
  "type": "object",
  "properties": {
    "direction": {
      "type": "string",
      "enum": [
        "FROM",
        "TO"
      ],
      "description": "Relation direction from originator perspective"
    },
    "relationType": {
      "type": "string",
      "description": "Type of relation to create"
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
        "EDGE"
      ],
      "description": "Type of target entity"
    },
    "entityNamePattern": {
      "type": "string",
      "description": "Pattern to identify target entity"
    },
    "entityTypePattern": {
      "type": "string",
      "description": "Profile pattern for entity creation"
    },
    "createEntityIfNotExists": {
      "type": "boolean",
      "description": "Whether to create target entity if not found"
    },
    "removeCurrentRelations": {
      "type": "boolean",
      "description": "Whether to remove existing relations of same type/direction"
    },
    "changeOriginatorToRelatedEntity": {
      "type": "boolean",
      "description": "Whether to change message originator to target entity"
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Extract target entity identifier**: Processes the configured entity name/title/email pattern, substituting any placeholders with values from message data and metadata.

2. **Find or create target entity**:
    - Searches for the target entity based on type and identifier
    - If entity doesn't exist and **Create new entity if it doesn't exist** is enabled:
        - Creates new entity with appropriate profile/type
        - Sends entity creation lifecycle event
    - If entity doesn't exist and creation is disabled, processing fails and message is routed via `Failure`

3. **Remove existing relations**:
    - If **Remove current relations** is enabled, deletes all existing relations of the same type and direction for the message originator

4. **Create relation**:
    - Checks if relation already exists between originator and target entity
    - If relation doesn't exist, creates new relation with specified type and direction

5. **Route message**:
    - **If Change originator to related entity** is disabled: Routes message to `Success`
    - **If Change originator to related entity** is enabled: Changes originator of the message to related entity and routes message to `Success`

## Output connections

- `Success`
    - Relation already existed or was successfully created
    - Target entity did not exist and was created (when **Create new entity if it doesn't exist** is enabled)
    - If **Change originator to related entity** is enabled, message originator is changed to target entity
- `Failure`
    - Target entity not found and creation disabled
    - Another unexpected error occurred during processing

## Examples

### Example 1 — Creating new entity and relation

**Incoming message**

Originator: `DEVICE`

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "Contains",
  "entityType": "ASSET",
  "entityNamePattern": "My Asset",
  "createEntityIfNotExists": false,
  "removeCurrentRelations": false,
  "changeOriginatorToRelatedEntity": false
}
```

**State of the system**

Asset named "My Asset" exists.

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

A "Contains" relation is created from originator device to "My Asset".

### Example 2 — Updating relations with removal

**Incoming message**

Data:

```json
{
  "targetEntity": "Asset 1"
}
```

Originator: `DEVICE`

**Node configuration**

```json
{
  "direction": "FROM",
  "relationType": "ConnectedTo",
  "entityType": "ASSET",
  "entityNamePattern": "$[targetEntity]",
  "createEntityIfNotExists": false,
  "removeCurrentRelations": true,
  "changeOriginatorToRelatedEntity": false
}
```

**State of the system**

- Asset named "Asset 1" exists
- Asset named "Asset 2" exists
- Originator device has existing "ConnectedTo" relation to asset "Asset 2"

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

The following actions occur:

- **Old relation removed**: The existing "ConnectedTo" relation from originator device to asset "Asset 2" is deleted.
- **New relation created**: A new "ConnectedTo" relation is created from originator device to asset "Asset 1". 

The message is routed to the `Success` connection.

### Example 3 — Changing originator

**Incoming message**

Originator: `DEVICE`

**Node configuration**

```json
{
  "direction": "TO",
  "relationType": "LocatedIn",
  "entityType": "ASSET",
  "entityNamePattern": "My Asset",
  "createEntityIfNotExists": false,
  "removeCurrentRelations": false,
  "changeOriginatorToRelatedEntity": true
}
```

**State of the system**

Asset named "My Asset" exists.

**Outgoing message**

Same as incoming message, but originator changed to asset "My Asset". Routed via `Success` connection.
