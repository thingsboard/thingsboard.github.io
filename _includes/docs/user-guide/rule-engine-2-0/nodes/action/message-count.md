Counts incoming messages over a specified time interval and outputs a message containing the count result.

## Configuration

### Count parameters

- **Interval in seconds**: Time interval in seconds for counting messages. The node will output the message count at each interval and reset the counter.
- **Output time series key prefix**: Prefix used to create the property name in the output message that holds the count result. The property name will be formatted as
  `{prefix}_{serviceId}`, where serviceId is the unique identifier of the ThingsBoard service instance (e.g., "tb-rule-engine1").

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgCountNodeConfiguration",
  "type": "object",
  "properties": {
    "interval": {
      "type": "integer",
      "description": "Time interval in seconds for counting messages"
    },
    "telemetryPrefix": {
      "type": "string",
      "description": "Prefix for the output telemetry key"
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Initialize counter**: On node initialization, creates a counter set to 0 and schedules the first tick message based on the configured interval.
2. **Process incoming message**:
    - **Regular message**: Increments the message counter by 1 and acknowledges the message
    - **Tick message**: Processes the accumulated count and generates telemetry output
3. **Generate telemetry output** (on tick):
    - Places the current message count in the message data under the key `{telemetryPrefix}_{serviceId}`
    - Resets the message counter to 0 for the next interval
    - Adds metadata with `delta` key containing the actual time difference since last scheduled tick
    - Creates a `POST_TELEMETRY_REQUEST` message with tenant as originator
4. **Schedule next tick**:
    - Calculates the next tick timestamp to maintain consistent intervals
    - Schedules the next internal tick message with appropriate delay

## Output connections

- `Success`
    - Generated result message containing the message count for the interval

## Examples

### Example 1 — Basic message counting

**Incoming messages over 5 seconds**

- Message 1 at t = 0s
- Message 2 at t = 1s
- Message 3 at t = 3s

**Node configuration**

```json
{
  "interval": 5,
  "telemetryPrefix": "msgCount"
}
```

**State of the system**

Current service ID is `tb-rule-engine1`.

**Outgoing message at t = 5s**

Type: `POST_TELEMETRY_REQUEST`

Originator: current tenant

Data:

```json
{
  "msgCount_tb-rule-engine1": 3
}
```

Metadata:

```json
{
  "delta": "5000"
}
```

**Result**

After 5 seconds, a result message is generated showing that 3 messages were processed during the interval. The counter is reset to 0 for the next interval.
