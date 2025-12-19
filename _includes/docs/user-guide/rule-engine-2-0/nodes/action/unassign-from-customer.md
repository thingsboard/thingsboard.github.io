Unassigns the message originator from a customer.

## Configuration

- **Unassign from specific customer if originator is dashboard** - When enabled, allows specifying which customer to unassign the dashboard from.
- **Customer title** - The name of the customer to unassign the dashboard from. Supports templatization using `${metadataKey}` or `$[dataKey]` to
  substitute values from the message metadata or data.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbUnassignFromCustomerNodeConfiguration",
  "type": "object",
  "properties": {
    "customerNamePattern": {
      "type": "string",
      "description": "Target customer name for dashboard unassignment, supports templatization"
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

The processing algorithm varies depending on the originator entity type:

**For `DASHBOARD`:**

1. Checks if **Customer title** is specified: if no customer title is provided, the processing fails with an error.
2. Resolves any templates in the **Customer title** using values from the message data and metadata.
3. Searches for the customer with the resolved title within the tenant.
4. If the customer doesn't exist, the processing fails.
5. Unassigns the dashboard from the specified customer.

**For other originator types:**

1. Unassigns the entity from whatever customer it's currently assigned to.
2. If the entity is not assigned to any customer, the processing is considered successful.

On successful completion, the message is forwarded to the `Success` connection. If an error occurs, the message is routed to the `Failure` connection.

## Output connections

- `Success`
    - The entity was successfully unassigned from the customer or the entity was not assigned to any customer.
- `Failure`
    - Unexpected error occurred during processing.

## Examples

### Example 1 — Unassigning device from customer

**Incoming message**

Originator: `DEVICE`.

**Node configuration**

```json
{
  "customerNamePattern": ""
}
```

**State of the system**

- A customer named "My Customer" exists under the tenant.
- Originator device is assigned to "My Customer".

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The device is unassigned from "My Customer" and becomes a tenant-level entity.

### Example 2 — Unassigning dashboard from specific customer

**Incoming message**

Originator: `DASHBOARD`.

**Node configuration**

```json
{
  "customerNamePattern": "Target Customer"
}
```

**State of the system**

- "Target Customer" and "Other Customer" both exist under the tenant.
- Originator dashboard is assigned to both customers.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The dashboard is unassigned from "Target Customer" but remains assigned to "Other Customer".

### Example 3 — Using pattern for dashboard customer title

**Incoming message**

Data:

```json
{
  "customerName": "Premium"
}
```

Metadata:

```json
{
  "region": "North"
}
```

Originator: `DASHBOARD`.

**Node configuration**

```json
{
  "customerNamePattern": "$[customerName] ${region}"
}
```

**State of the system**

- A customer named "Premium North" exists under the tenant.
- Originator dashboard is assigned to "Premium North".

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The pattern `$[customerName] ${region}` is resolved by substituting values from data and metadata, resulting in "Premium North". The dashboard is unassigned from this customer.

### Example 4 — Entity not assigned to any customer

**Incoming message**

Originator: `ASSET`.

**Node configuration**

```json
{
  "customerNamePattern": ""
}
```

**State of the system**

- Originator asset is not assigned to any customer (tenant-level entity).

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since the asset is not assigned to any customer, no unassignment operation is performed, but the processing is considered successful.

### Example 5 — Dashboard with non-existent customer

**Incoming message**

Originator: `DASHBOARD`.

**Node configuration**

```json
{
  "customerNamePattern": "Non-existent Customer"
}
```

**State of the system**

- No customer named "Non-existent Customer" exists.
- Originator dashboard is assigned to some other customer.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

The processing fails with an error because the specified customer "Non-existent Customer" doesn't exist.
