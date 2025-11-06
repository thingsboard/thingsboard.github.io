Parses the incoming payload as a ThingsBoard alarm, fetches the latest alarm by ID, and compares its current status to a configured set of statuses.
If the fetched status matches, the message is routed via `True`; otherwise via `False`. Parsing errors, missing alarm ID, or a non-existent alarm result in `Failure`.

## Preconditions

Generally, the incoming message data should be a JSON alarm object:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "bfb13620-7737-400b-9c89-d569a0835de6"
  },
  "createdTime": 1755173119647,
  "tenantId": {
    "entityType": "TENANT",
    "id": "888e6780-78f5-11f0-8e01-57f51829cedc"
  },
  "customerId": null,
  "type": "Overheating",
  "originator": {
    "entityType": "DEVICE",
    "id": "b3e86d40-78f5-11f0-8e01-57f51829cedc"
  },
  "severity": "CRITICAL",
  "acknowledged": false,
  "cleared": false,
  "assigneeId": null,
  "startTs": 1755173119647,
  "endTs": 1755173119647,
  "ackTs": 0,
  "clearTs": 0,
  "assignTs": 0,
  "propagate": false,
  "propagateToOwner": false,
  "propagateToOwnerHierarchy": false,
  "propagateToTenant": false,
  "propagateRelationTypes": [],
  "originatorName": "device",
  "originatorLabel": "device",
  "assignee": null,
  "name": "Overheating",
  "status": "ACTIVE_UNACK",
  "details": {
    "summary": "The temperature has persistently exceeded 85 °C for at least 10 minutes, while vibration (3.8–4.1 mm/s) and acoustic deviation (9–10.5%) remain normal. Immediate attention is required to prevent possible thermal damage."
  }
}
```

However, the following object is sufficient, because only the `id` field is used:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "bfb13620-7737-400b-9c89-d569a0835de6"
  }
}
```

## Configuration

### Field descriptions

* **Alarm status** - required. A set of statuses: if the fetched alarm’s status matches any of them, the node routes the message via the `True` connection; otherwise, via the
  `False` connection.

Available statuses:

- *Active Acknowledged* (`ACTIVE_ACK`)
- *Active Unacknowledged* (`ACTIVE_UNACK`)
- *Cleared Acknowledged* (`CLEARED_ACK`)
- *Cleared Unacknowledged* (`CLEARED_UNACK`)

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/2020-12/schema",
  "title": "TbCheckAlarmStatusNodeConfig",
  "type": "object",
  "required": [
    "alarmStatusList"
  ],
  "additionalProperties": false,
  "properties": {
    "alarmStatusList": {
      "type": "array",
      "description": "Non-empty set of unique alarm statuses to check against.",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "type": "string",
        "enum": [
          "ACTIVE_UNACK",
          "ACTIVE_ACK",
          "CLEARED_UNACK",
          "CLEARED_ACK"
        ]
      },
      "default": [
        "ACTIVE_ACK",
        "ACTIVE_UNACK"
      ]
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Parses the incoming message data as a ThingsBoard alarm object (the alarm must include an ID, so it must be an existing alarm).
2. Fetches the alarm from the database to get the latest information.
    1. If no such alarm is found, processing ends with a `Failure`. The usual failure-connection mechanics apply.
3. Checks whether the status of the fetched alarm matches the configured alarm statuses.
    1. If the status matches, the incoming message is routed to downstream nodes using the `True` connection.
    2. If the status does not match, the incoming message is routed to downstream nodes using the `False` connection.

{% capture status_property_note %}
**Note:** `status` property is ignored for routing.
{% endcapture %}
{% include templates/info-banner.md content=status_property_note %}

## Output connections

* `True`:
    * If the incoming message data is successfully parsed into an alarm, the alarm is found, and its fetched status matches one of the statuses set in the node configuration.
* `False`:
    * If the incoming message data is successfully parsed into an alarm and the alarm is found, but its fetched status does not match any status set in the node configuration.
* `Failure`:
    * If the incoming message data failed to be parsed into an alarm.
    * If the parsed alarm has no ID.
    * If an alarm with such an ID was not found.
    * If another unexpected error occurred during message processing.

## Examples

The examples below show only the **relevant** fields of the incoming message. Unless explicitly stated otherwise, other message fields may have any values.

---

### Example 1 — Status matches → `True`

**Incoming message data**

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "c0d5c904-792b-11f0-8de9-0242ac120002"
  }
}
```

**Node configuration**

```json
{
  "alarmStatusList": [
    "ACTIVE_UNACK"
  ]
}
```

**State of the system**

Alarm exists with status `ACTIVE_UNACK`.

**Result**

Routed via **`True`**.

**Explanation**

The node fetches the alarm by ID and compares its **fetched** status to the configured set; the status matches, so the message is routed via `True`.

### Example 2 — Status does not match → `False`

**Incoming message data**

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "c0d5c904-792b-11f0-8de9-0242ac120002"
  }
}
```

**Node configuration**

```json
{
  "alarmStatusList": [
    "ACTIVE_ACK"
  ]
}
```

**State of the system**

Alarm exists with status `ACTIVE_UNACK`.

**Result**

Routed via **`False`**.

**Explanation**

Fetched status (`ACTIVE_UNACK`) is not in the configured set.

---

### Example 3 — Cleared Acknowledged allowed → `True`

**Incoming message data**

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "c0d5c904-792b-11f0-8de9-0242ac120002"
  }
}
```

**Node configuration**

```json
{
  "alarmStatusList": [
    "CLEARED_ACK"
  ]
}
```

**State of the system**

Alarm exists with status `CLEARED_ACK`.

**Result**

Routed via **`True`**.

**Explanation**

Fetched status matches the configuration.

---

### Example 4 — Alarm not found → `Failure`

**Incoming message data**

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "c0d5c904-792b-11f0-8de9-0242ac120002"
  }
}
```

**Node configuration**

```json
{
  "alarmStatusList": [
    "ACTIVE_ACK",
    "ACTIVE_UNACK"
  ]
}
```

**State of the system**

No alarm with this ID exists.

**Result**

**`Failure`**.

**Explanation**

Lookup by ID returned no alarm; the node fails.

---

### Example 5 — Missing ID in incoming message data → `Failure`

**Incoming message data**

```json
{
  "type": "Overheating"
}
```

**Node configuration**

```json
{
  "alarmStatusList": [
    "ACTIVE_ACK",
    "ACTIVE_UNACK"
  ]
}
```

**State of the system**

Not relevant.

**Result**

**`Failure`**.

**Explanation**

Alarm cannot be fetched without an ID; parsing/validation error leads to failure.

---

### Example 6 — Malformed / non-alarm JSON → `Failure`

**Incoming message data**

```json
{
  "notAnAlarm": true
}
```

**Node configuration**

```json
{
  "alarmStatusList": [
    "ACTIVE_ACK"
  ]
}
```

**State of the system**

Not relevant.

**Result**

**`Failure`**.

**Explanation**

Incoming message data cannot be parsed into an alarm object.

---

### Example 7 — Incoming status differs from database (database wins) → `False`

**Incoming message data** (includes a status, but it is ignored for routing)

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "c0d5c904-792b-11f0-8de9-0242ac120002"
  },
  "status": "ACTIVE_ACK"
}
```

**Node configuration**

```json
{
  "alarmStatusList": [
    "ACTIVE_ACK"
  ]
}
```

**State of the system**

Alarm exists with status `CLEARED_UNACK`.

**Result**

Routed via **`False`**.

**Explanation**

Routing uses the **fetched** status (`CLEARED_UNACK`), not the incoming field.
