Routes incoming messages based on their message type. The message is forwarded through the output connection whose label exactly matches the message type **rule node connection
label**.

## Configuration

### Field descriptions

There are no available configuration fields.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "EmptyNodeConfiguration",
  "type": "object",
  "properties": {},
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Determines the incoming message's type and looks up its rule node connection label.
2. Routes the message to downstream nodes using the connection with a label that **exactly matches** the rule node connection label.

## Output connections

* Message type connection label
    * Used for all standard message types; the message is routed via the connection whose label corresponds to the specific message type (e.g., `Post telemetry`, `Post attributes`,
      `RPC Request from Device`)
* `Other`:
    * If the message type is custom or does not have a specific connection defined.
* `Failure`:
    * If an unexpected error occurred during message processing.

### Predefined connection labels

| Message type                     | Connection label            |
|----------------------------------|-----------------------------|
| `POST_ATTRIBUTES_REQUEST`        | Post attributes             |
| `POST_TELEMETRY_REQUEST`         | Post telemetry              |
| `TO_SERVER_RPC_REQUEST`          | RPC Request from Device     |
| `ACTIVITY_EVENT`                 | Activity Event              |
| `INACTIVITY_EVENT`               | Inactivity Event            |
| `CONNECT_EVENT`                  | Connect Event               |
| `DISCONNECT_EVENT`               | Disconnect Event            |
| `ENTITY_CREATED`                 | Entity Created              |
| `ENTITY_UPDATED`                 | Entity Updated              |
| `ENTITY_DELETED`                 | Entity Deleted              |
| `ENTITY_ASSIGNED`                | Entity Assigned             |
| `ENTITY_UNASSIGNED`              | Entity Unassigned           |
| `ATTRIBUTES_UPDATED`             | Attributes Updated          |
| `ATTRIBUTES_DELETED`             | Attributes Deleted          |
| `ALARM_ACK`                      | Alarm Acknowledged          |
| `ALARM_CLEAR`                    | Alarm Cleared               |
| `ALARM_ASSIGNED`                 | Alarm Assigned              |
| `ALARM_UNASSIGNED`               | Alarm Unassigned            |
| `COMMENT_CREATED`                | Comment Created             |
| `COMMENT_UPDATED`                | Comment Updated             |
| `RPC_CALL_FROM_SERVER_TO_DEVICE` | RPC Request to Device       |
| `ENTITY_ASSIGNED_FROM_TENANT`    | Entity Assigned From Tenant |
| `ENTITY_ASSIGNED_TO_TENANT`      | Entity Assigned To Tenant   |
| `TIMESERIES_UPDATED`             | Timeseries Updated          |
| `TIMESERIES_DELETED`             | Timeseries Deleted          |
| `RPC_QUEUED`                     | RPC Queued                  |
| `RPC_SENT`                       | RPC Sent                    |
| `RPC_DELIVERED`                  | RPC Delivered               |
| `RPC_SUCCESSFUL`                 | RPC Successful              |
| `RPC_TIMEOUT`                    | RPC Timeout                 |
| `RPC_EXPIRED`                    | RPC Expired                 |
| `RPC_FAILED`                     | RPC Failed                  |
| `RPC_DELETED`                    | RPC Deleted                 |
| `RELATIONS_DELETED`              | All Relations Deleted       |
| `RELATION_ADD_OR_UPDATE`         | Relation Added or Updated   |
| `RELATION_DELETED`               | Relation Deleted            |
| `REST_API_REQUEST`               | REST API request            |
| `OWNER_CHANGED`                  | Owner changed               |
| `ADDED_TO_ENTITY_GROUP`          | Added to Group              |
| `REMOVED_FROM_ENTITY_GROUP`      | Removed from Group          |
| `generateReport`                 | Generate Report             |

## Examples

### Example 1 — Message type is `POST_TELEMETRY_REQUEST` → routed via `Post telemetry`

**Incoming message**

Type: `POST_TELEMETRY_REQUEST`.

**Node configuration**

```json
{}
```

**Result**

Routed via `Post telemetry`.

**Explanation**

For `POST_TELEMETRY_REQUEST`, the rule node connection label is `Post telemetry`. The node routes the message via the connection with that exact label.

---

### Example 2 — Custom message type → routed via `Other`

**Incoming message**

Type: `CUSTOM_MESSAGE_TYPE`.

**Node configuration**

```json
{}
```

**Result**

Routed via `Other`.

**Explanation**

Custom message types that don't have a predefined rule node connection label are routed via the `Other` connection.
