Calculates the delta and the amount of time passed between the previous time series key reading and the current value for this key from the incoming message.

## Configuration

The node configuration allows you to define which key to use for the calculation, where to store the result, and how to handle specific conditions like meter resets.

- **Input value key** - The key in the incoming message's data that contains the cumulative value (e.g., `fuelLevel`). The value must be numeric or a string that can be parsed
  into a number.
- **Output value key** - The key under which the calculated delta will be added to the message data (e.g., `consumption`).
- **Number of digits after floating point** - An integer specifying the number of decimal places to round the calculated delta to. If not specified, no rounding is performed.
- **Tell Failure if delta is negative** - If enabled, any message that results in a negative delta will be routed to the `Failure` connection.
- **Use caching** - If enabled, the node keeps the last known value for each originator in memory. This improves performance by avoiding database queries. If
  unchecked, the node fetches the last stored timeseries value from the database for each message. **Note**: The cache is local to this rule node and will be cleared on node
  restart.
- **Add the time difference between readings** - If enabled, the node will also calculate the time difference (in milliseconds) between the current and previous messages from the
  originator.
- **Period value key** - The key for the calculated time difference in milliseconds (e.g., `periodInMs`). This field is required if **Add the time difference between readings** is
  enabled.
- **Exclude zero deltas from outbound message** - If enabled, messages that result in a delta of zero will be passed through to the `Success` connection without adding the output
  key-value pairs to the message data.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "CalculateDeltaNodeConfiguration",
  "type": "object",
  "properties": {
    "inputValueKey": {
      "type": "string",
      "description": "The key from the incoming message's data to use for calculations."
    },
    "outputValueKey": {
      "type": "string",
      "description": "The key under which the calculated delta will be added to the message data."
    },
    "useCache": {
      "type": "boolean",
      "description": "If true, the node caches the last message from each originator in memory for faster calculations."
    },
    "addPeriodBetweenMsgs": {
      "type": "boolean",
      "description": "If true, the node will also calculate the time difference (in milliseconds) between the current and previous messages."
    },
    "periodValueKey": {
      "type": "string",
      "description": "The key for the calculated time difference. Required if 'addPeriodBetweenMsgs' is true."
    },
    "round": {
      "type": "integer",
      "description": "The number of decimal places to round the delta to."
    },
    "tellFailureIfDeltaIsNegative": {
      "type": "boolean",
      "description": "If true, messages with a negative delta will be routed to the 'Failure' connection."
    },
    "excludeZeroDeltas": {
      "type": "boolean",
      "description": "If true, messages with a delta of zero will not be modified."
    }
  },
  "required": [
    "inputValueKey",
    "outputValueKey"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node first checks if the incoming message's type is a `POST_TELEMETRY_REQUEST` and if its data contains the specified **Input value key**. If not, the message is passed to
   the `Other` connection.
2. It retrieves the previous value and timestamp for the message originator. If **Use caching** is enabled, it checks its internal cache first. If the value is not in the cache, it
   fetches the latest time series value for the **Input value key** from the database. If no previous value is found, it's assumed to be `0`.
3. The node calculates the delta: `delta = currentValue - previousValue`.
4. If **Tell Failure if delta is negative** is enabled and the calculated delta is less than zero, the original message is immediately routed to the `Failure` connection.
5. If **Exclude zero deltas from outbound message** is enabled and the delta is exactly zero, the original message is routed to the `Success` connection without any modifications.
6. If a **Number of digits after floating point** value is configured, the delta is rounded to the specified number of decimal places.
7. The calculated delta is added to the message data using the **Output value key**.
8. If **Add period between messages** is enabled, the time elapsed since the previous message (in milliseconds) is also calculated and added to the data using the **Period value
   key**.
9. The enriched message is then forwarded via the `Success` connection.

## Output connections

- `Success`:
    - The delta was calculated successfully, and the message has been enriched.
- `Failure`:
    - An error occurred. The most common cause is a negative delta being calculated when the **Tell Failure if delta is negative** option is enabled.
- `Other`:
    - The incoming message is not a `POST_TELEMETRY_REQUEST` message or its data does not contain the required **Input value key**.

## Examples

### Example 1 — Basic meter consumption

This example shows how to calculate consumption from a cumulative counter.

**Scenario**: A water meter reports its total cumulative reading via the `pulseCounter` key. We want to calculate the water consumed since the last report and add it to the message
as `waterConsumption`.

**Incoming message**

Data:

```json
{
  "pulseCounter": 1500
}
```

Previous value for this originator (stored in cache or database) for the `pulseCounter` key is `1450`.

**Node configuration**

```json
{
  "inputValueKey": "pulseCounter",
  "outputValueKey": "waterConsumption",
  "useCache": true,
  "addPeriodBetweenMsgs": false,
  "tellFailureIfDeltaIsNegative": false,
  "excludeZeroDeltas": false
}
```

**Outgoing message**

The message is routed to the `Success` connection with the added `waterConsumption` field.

Data:

```json
{
  "pulseCounter": 1500,
  "waterConsumption": 50
}
```

**Explanation**: The node calculated the delta: `1500 - 1450 = 50`, and added this result to the message data.

### Example 2 — Calculating rate and handling a meter reset

This example shows how the node handles a negative delta.

**Scenario**: A meter is reset, causing its cumulative counter to drop. We are configured to detect this.

**Incoming message**

Data:

```json
{
  "pulseCounter": 10
}
```

Previous value for this originator for the `pulseCounter` key is `1680`.

**Node configuration**

```json
{
  "inputValueKey": "pulseCounter",
  "outputValueKey": "waterConsumption",
  "useCache": true,
  "addPeriodBetweenMsgs": false,
  "tellFailureIfDeltaIsNegative": true,
  "excludeZeroDeltas": false
}
```

**Outgoing message**

The **original message** is routed to the `Failure` connection.

Data:

```json
{
  "pulseCounter": 10
}
```

**Explanation**: The calculated delta is `10 - 1680 = -1670`. Since this is negative and **Tell failure if delta is negative** is enabled, the node routes the message to `Failure`.
