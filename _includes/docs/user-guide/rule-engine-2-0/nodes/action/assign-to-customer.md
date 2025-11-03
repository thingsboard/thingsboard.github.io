Assigns the message originator to a specified customer.

## Configuration

- **Customer title** - The name of the target customer. Supports templatization using `${metadataKey}` or `$[dataKey]` to substitute values from the message metadata or data.
- **Create new customer if it doesn't exist** - When enabled, creates a new customer if no customer matching the title is found. When disabled, the processing fails if the target
  customer doesn't exist.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbAssignToCustomerNodeConfiguration",
  "type": "object",
  "properties": {
    "customerNamePattern": {
      "type": "string",
      "description": "Target customer name, supports templatization"
    },
    "createCustomerIfNotExists": {
      "type": "boolean",
      "description": "Whether to create a new customer if the target doesn't exist"
    }
  },
  "required": [
    "customerNamePattern"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Resolves any templates in the **Customer title** using values from the message data and metadata.
2. Searches for an existing customer with the resolved title within the tenant.
3. If the customer doesn't exist and **Create new customer if it doesn't exist** is enabled:
    - Creates a new customer with the resolved title
    - Generates a `ENTITY_CREATED` lifecycle event for the newly created customer
4. If the customer doesn't exist and creation is disabled, the processing fails.
5. Assigns the originator to the target customer.
6. If the entity is already assigned to the target customer, no change is made but the processing is still considered successful.
7. On successful completion, the message is forwarded to the `Success` connection. If an error occurs, the message is routed to the `Failure` connection.

## Output connections

- `Success`
    - The entity was successfully assigned to the customer or the entity was already assigned to the target customer.
- `Failure`
    - An error occurred during processing, such as the target customer not existing when creation is disabled.

## Examples

### Example 1 — Assigning to existing customer

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "customerNamePattern": "My Customer",
  "createCustomerIfNotExists": false
}
```

**State of the system**

- A customer named "My Customer" exists under the tenant.
- Originator device is not assigned to any customer.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The device is assigned to "My Customer".

### Example 2 — Using pattern for customer name

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
  "customerNamePattern": "${customerType} - $[region] Region",
  "createCustomerIfNotExists": false
}
```

**State of the system**

- A customer named "Premium - North Region" exists under the tenant.
- Originator asset is not assigned to any customer.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The pattern `${customerType} - $[region] Region` is resolved by substituting values from metadata and data, resulting in "Premium - North Region". The asset is assigned to this
customer.

### Example 3 — Creating customer if it doesn't exist

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "customerNamePattern": "New Customer",
  "createCustomerIfNotExists": true
}
```

**State of the system**

- No customer named "New Customer" exists.
- Originator device is not assigned to any customer.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since the customer "New Customer" doesn't exist and `createCustomerIfNotExists` is true, a new customer is created at the tenant level with the title "New Customer". The device is
then assigned to this newly created customer. A `ENTITY_CREATED` lifecycle event for the newly created customer is generated.

### Example 4 — Entity already assigned to target customer

**Incoming message**

Originator: `ASSET`.

**Node configuration**

```json
{
  "customerNamePattern": "Target Customer",
  "createCustomerIfNotExists": false
}
```

**State of the system**

- "Target Customer" exists under the tenant.
- Originator asset is already assigned to "Target Customer".

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since the asset is already assigned to "Target Customer", no assignment change is performed, but the processing is considered successful.

### Example 5 — Customer doesn't exist and creation disabled

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "customerNamePattern": "Non-existent Customer",
  "createCustomerIfNotExists": false
}
```

**State of the system**

- No customer named "Non-existent Customer" exists.
- Originator device is not assigned to any customer.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

The processing fails with an error because the target customer doesn't exist and `createCustomerIfNotExists` is false.

### Example 6 — Reassigning from one customer to another

**Incoming message**

Originator: `ENTITY_VIEW`.

**Node configuration**

```json
{
  "customerNamePattern": "New Customer",
  "createCustomerIfNotExists": false
}
```

**State of the system**

- "Old Customer" and "New Customer" both exist under the tenant.
- Originator entity view is currently assigned to "Old Customer".

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The entity view is reassigned from "Old Customer" to "New Customer".
