Triggers calculated field processing for incoming time series or attributes without persisting the data to the database.

## Preconditions

The message type and data structure must correspond to your incoming data type:

- **Time series data**: Use `POST_TELEMETRY_REQUEST` with [formats defined here](/docs/user-guide/rule-engine-2-0/nodes/action/save-timeseries)
- **Attributes data**: Use `POST_ATTRIBUTES_REQUEST` with [formats defined here](/docs/user-guide/rule-engine-2-0/nodes/action/save-attributes)

## Configuration

This node has no configuration options.

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

1. The node examines the **type** of the incoming message.
2. For `POST_TELEMETRY_REQUEST` or `POST_ATTRIBUTES_REQUEST` messages:
    - Parses the time series or attribute data from the message data (including attribute scope from metadata when applicable)
    - Triggers the evaluation of any calculated fields that use this data
    - The incoming time series or attribute data itself is **not** persisted to the database
3. When calculated fields are evaluated:
    - A new message is generated with the originator whose calculated field state was updated
    - This new message is pushed into the root rule chain of the originator
4. After triggering calculated field processing, the original message is forwarded to the `Success` connection
5. If an unsupported message type is received or an error occurs, the message is routed to the `Failure` connection

{% capture persistence_note %}
**Note**: The calculated results are included in the newly generated message (step 3). To persist these results to the database, you still need to use a "save time series" or "save attributes" node in the rule chain.
{% endcapture %}
{% include templates/info-banner.md content=persistence_note %}

## Output connections

- `Success`
    - The message data contains valid time series or attribute data and calculated field processing was triggered
    - The message data is empty (no processing required)
- `Failure`
    - The incoming message type is not `POST_TELEMETRY_REQUEST` or `POST_ATTRIBUTES_REQUEST`
    - The incoming message data could not be parsed into time series data or attributes data
    - An unexpected error occurred during message processing

## Examples

### Example 1 — Processing time series for calculated fields

**Incoming message**

Type: `POST_TELEMETRY_REQUEST`

Data:

```json
{
  "temperature": 25.5,
  "humidity": 60
}
```

Originator: `DEVICE`.

**Node configuration**

```json
{}
```

**State of the system**

The device has a calculated field "heatIndex" defined that uses the formula: `temperature + 0.5 * humidity`

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The calculated field "heatIndex" is evaluated using the incoming temperature and humidity values (25.5 + 0.5 * 60 = 55.5). A new message containing the calculated value is
generated with the device as the originator and pushed to the root rule chain. The original time series data (temperature and humidity) is **not** stored in the database.

### Example 2 — Processing attributes for calculated fields

**Incoming message**

Type: `POST_ATTRIBUTES_REQUEST`

Data:

```json
{
  "maxSpeed": 100,
  "currentSpeed": 75
}
```

Metadata:

```json
{
  "scope": "SERVER_SCOPE"
}
```

Originator: `DEVICE`.

**Node configuration**

```json
{}
```

**State of the system**

The device has a calculated field "speedPercentage" defined that calculates: `(currentSpeed / maxSpeed) * 100`

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

The calculated field "speedPercentage" is evaluated (75 / 100 * 100 = 75%). A new message with the calculated value is generated and pushed to the root rule chain. The original
attributes are **not** persisted to the database.

### Example 3 — Empty payload handling

**Incoming message**

Type: `POST_TELEMETRY_REQUEST`

Data: `{}`

**Node configuration**

```json
{}
```

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

No calculated fields are triggered since the data is empty. The message passes through successfully without any processing.

### Example 4 — Unsupported message type

**Incoming message**

Type: `ENTITY_CREATED`

**Node configuration**

```json
{}
```

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Failure` connection.

**Result**

The processing fails because the node only supports `POST_TELEMETRY_REQUEST` and `POST_ATTRIBUTES_REQUEST` message types. `ENTITY_CREATED` lifecycle events cannot trigger
calculated field processing.
