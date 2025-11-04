Delays incoming messages for a configurable period before forwarding them to the next rule node.

{% capture deprecation_note %}
**This node is deprecated** due to potential data loss. It acknowledges incoming messages (removing them from the persistent queue) but stores them only in memory, which is lost
if the server restarts or crashes.
{% endcapture %}
{% include templates/warn-banner.md content=deprecation_note %}

## Configuration

- **Use period in seconds pattern** - When enabled, uses the **Period in seconds pattern** to extract delay period from message metadata or data. When disabled, uses the fixed
  **Period in seconds** field
    - **Period in seconds** - Fixed delay period in seconds
    - **Period in seconds pattern** - Pattern to extract delay period from message metadata or data (e.g., `${metadataKey}` or `$[dataKey]`)
- **Maximum pending messages** - Maximum number of messages that can be held in memory waiting for delay timeout

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgDelayNodeConfiguration",
  "type": "object",
  "properties": {
    "periodInSeconds": {
      "type": "integer",
      "description": "Fixed delay period in seconds"
    },
    "useMetadataPeriodInSecondsPatterns": {
      "type": "boolean",
      "description": "Whether to use pattern to extract delay from message metadata/data"
    },
    "periodInSecondsPattern": {
      "type": "string",
      "description": "Pattern to extract delay period from message metadata or data"
    },
    "maxPendingMsgs": {
      "type": "integer",
      "description": "Maximum number of messages that can be pending delay"
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node checks if the number of pending messages is below the configured maximum limit
    - If limit exceeded, processing fails and the message is routed to the `Failure` connection
2. **Delay period determination**:
    - If **Use period in seconds pattern** is enabled: extracts the delay period from message metadata or data using the configured pattern
    - If pattern extraction fails or value is not parsable as integer: processing fails and the message is routed to the `Failure` connection
    - If pattern mode is disabled: uses the fixed **Period in seconds** configuration value
3. **Message delay processing**:
    - Stores the message in memory for the calculated delay period
    - After the delay period expires, forwards the original message to the `Success` connection
    - The original message is acknowledged immediately

## Output connections

- `Success`
    - Message delay timeout has expired and the message is being forwarded
- `Failure`
    - Maximum pending messages limit exceeded
    - Failed to parse delay period from metadata/data pattern
    - Other unexpected errors occurred

## Examples

### Example 1 — Fixed delay period

**Incoming message**

Any message.

**Node configuration**

```json
{
  "periodInSeconds": 5,
  "useMetadataPeriodInSecondsPatterns": false,
  "maxPendingMsgs": 1000
}
```

**Result**

The message will be delayed for 5 seconds, then forwarded to the `Success`.

### Example 2 — Dynamic delay from metadata

**Incoming message**

Metadata:

```json
{
  "delaySeconds": "10"
}
```

**Node configuration**

```json
{
  "useMetadataPeriodInSecondsPatterns": true,
  "periodInSecondsPattern": "${delaySeconds}",
  "maxPendingMsgs": 1000
}
```

**Result**

The message will be delayed for 10 seconds (extracted from metadata), then forwarded to the `Success` connection.

### Example 3 — Dynamic delay from message data

**Incoming message**

Data:

```json
{
  "waitTime": "3"
}
```

**Node configuration**

```json
{
  "useMetadataPeriodInSecondsPatterns": true,
  "periodInSecondsPattern": "$[waitTime]",
  "maxPendingMsgs": 1000
}
```

**Result**

The message will be delayed for 3 seconds (extracted from message data), then forwarded to the `Success` connection.

### Example 4 — Maximum pending messages exceeded

**Incoming message**

Any message.

**Node configuration**

```json
{
  "periodInSeconds": 60,
  "useMetadataPeriodInSecondsPatterns": false,
  "maxPendingMsgs": 5
}
```

**State of the system**

- 5 messages are already delayed

**Outgoing message**

The message is routed to the `Failure` connection.

**Result**

Processing fails with error because the pending messages limit has been exceeded.

### Example 5 — Invalid delay pattern

**Incoming message**

Metadata:

```json
{
  "someOtherKey": "value"
}
```

**Node configuration**

```json
{
  "useMetadataPeriodInSecondsPatterns": true,
  "periodInSecondsPattern": "${invalidKey}",
  "maxPendingMsgs": 1000
}
```

**Result**

Processing fails with runtime exception because the specified pattern is resolved to `${invalidKey}` which cannot be parsed as integer.
