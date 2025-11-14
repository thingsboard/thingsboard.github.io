Changes the owner of the message originator entity to a specified tenant or customer.

## Configuration

The configuration allows you to specify the target owner type and how the system behaves when the target owner doesn't exist.

- **Owner type** - Specifies the type of the new owner. Can be either *Tenant* or *Customer*.
- **Customer title** (only for *Customer* type) - The name of the target customer. Supports templatization using `${metadataKey}` or `$[dataKey]` to substitute values from the
  message metadata or data.
- **Create new customer if it doesn't exist** (only for *Customer* type) - When enabled, creates a new customer if no customer matching the title is found. When disabled, the
  processing fails if the target customer doesn't exist.
- **Create new customer on the same level as message originator** (only for *Customer* type) - When enabled along with **Create new customer if it doesn't exist**, creates the new
  customer as a sub-customer of the current owner of the originator entity. When disabled, creates the customer at the tenant level.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbChangeOwnerNodeConfiguration",
  "type": "object",
  "properties": {
    "ownerType": {
      "type": "string",
      "enum": [
        "TENANT",
        "CUSTOMER"
      ],
      "description": "Type of the new owner"
    },
    "ownerNamePattern": {
      "type": "string",
      "description": "Target customer name, supports templatization. Only applicable when 'ownerType' is 'CUSTOMER'"
    },
    "createOwnerIfNotExists": {
      "type": "boolean",
      "description": "Whether to create a new customer if the target doesn't exist"
    },
    "createOwnerOnOriginatorLevel": {
      "type": "boolean",
      "description": "Whether to create new customer as sub-customer of current owner"
    }
  },
  "required": [
    "ownerType"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the **originator entity** from the incoming message.
2. Based on the **Owner type** configuration:
    - If *Tenant*:
        - Changes the owner of the originator entity to the tenant
    - If *Customer*:
        - Resolves any templates in the **Customer title** using values from the message data and metadata
        - Searches for an existing customer with the resolved title within the tenant
        - If the customer doesn't exist and **Create new customer if it doesn't exist** is enabled:
            - Creates a new customer with the resolved title
            - If **Create new customer on the same level as message originator** is enabled, the new customer is created as a sub-customer of the originator's current owner
            - Otherwise, the new customer is created at the tenant level
            - Generates a `ENTITY_CREATED` lifecycle event for newly created customer
        - If the customer doesn't exist and creation is disabled, the processing fails
3. Changes the owner of the originator entity to the target owner (tenant or customer)
4. If the entity already belongs to the target owner, no change is made but the operation is still considered successful
5. On successful completion, the message is forwarded to the `Success` connection. If an error occurs, the message is routed to the `Failure` connection.

## Output connections

- `Success`
    - The entity owner was successfully changed or the entity already belongs to the target owner.
- `Failure`
    - An error occurred during processing, such as the target customer not existing when creation is disabled, or unsupported entity type.

## Examples

### Example 1 — Changing owner to tenant

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "ownerType": "TENANT"
}
```

**State of the system**

- A customer named "My Customer" exists under the tenant.
- Originator device belongs to that customer.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The device ownership is transferred from the customer to the tenant.

### Example 2 — Changing owner to existing customer

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "ownerType": "CUSTOMER",
  "ownerNamePattern": "My Customer",
  "createOwnerIfNotExists": false,
  "createOwnerOnOriginatorLevel": false
}
```

**State of the system**

- Originator device belongs to the tenant.
- A customer named "My Customer" exists under the tenant.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The device ownership is transferred from the tenant to the "My Customer".

### Example 3 — Using pattern for customer name

**Incoming message**

Data:

```json
{
  "region": "North"
}
```

Metadata:

```json
{
  "customerType": "Premium"
}
```

Originator: `ASSET`.

**Node configuration**

```json
{
  "ownerType": "CUSTOMER",
  "ownerNamePattern": "${customerType} - $[region] Region",
  "createOwnerIfNotExists": false,
  "createOwnerOnOriginatorLevel": false
}
```

**State of the system**

- A customer named "Premium - North Region" exists under the tenant.
- Originator asset belongs to the tenant.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The pattern `${customerType} - $[region] Region` is resolved by substituting values from metadata and data, resulting in "Premium - North Region". The asset ownership is
transferred to this customer.

### Example 4 — Creating customer if it doesn't exist

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "ownerType": "CUSTOMER",
  "ownerNamePattern": "New Customer",
  "createOwnerIfNotExists": true,
  "createOwnerOnOriginatorLevel": false
}
```

**State of the system**

- No customer named "New Customer" exists.
- Originator device belongs to the tenant.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since the customer "New Customer" doesn't exist and `createOwnerIfNotExists` is true, a new customer top-level is created with the title "New Customer". The device
ownership is then transferred to this newly created customer. A `ENTITY_CREATED` lifecycle event for newly created is generated.

### Example 5 — Creating sub-customer on originator level

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "ownerType": "CUSTOMER",
  "ownerNamePattern": "Sub Customer",
  "createOwnerIfNotExists": true,
  "createOwnerOnOriginatorLevel": true
}
```

**State of the system**

- "Parent Customer" exists under the tenant.
- Originator device belongs to the "Parent Customer".
- No customer named "Sub Customer" exists.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since `createOwnerIfNotExists` and `createOwnerOnOriginatorLevel` are both true, a new customer "Sub Customer" is created as a sub-customer of "Parent Customer" (the current owner
of the device). The device ownership is then transferred to "Sub Customer".

### Example 6 — Entity already belongs to target owner

**Incoming message**

Originator: `ASSET`.

**Node configuration**

```json
{
  "ownerType": "CUSTOMER",
  "ownerNamePattern": "Target Customer",
  "createOwnerIfNotExists": false,
  "createOwnerOnOriginatorLevel": false
}
```

**State of the system**

- "Target Customer" exists under the tenant.
- Originator asset belongs to the "Target Customer".

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since the asset already belongs to "Target Customer", no ownership change is performed, but the operation is considered successful.

### Example 7 — Customer doesn't exist and creation disabled

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "ownerType": "CUSTOMER",
  "ownerNamePattern": "Non-existent Customer",
  "createOwnerIfNotExists": false,
  "createOwnerOnOriginatorLevel": false
}
```

**State of the system**

- No customer named "Non-existent Customer" exists.
- Originator device belongs to the tenant.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

The processing fails with an error because the target customer doesn't exist and `createOwnerIfNotExists` is false.
