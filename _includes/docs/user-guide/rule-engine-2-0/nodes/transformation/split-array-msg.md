Splits a message whose data is a JSON array into multiple separate messages, one for each element in the array.

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

1. The node inspects the data of the incoming message to verify it is a JSON array.
2. If the data is not a JSON array, the processing fails, and the original message is routed to the `Failure` chain.
3. If the data is a JSON array, the node processes it as follows:
    - If the array is **empty**, the original message is simply acknowledged, and no new messages are generated.
    - If the array contains **one or more elements**, a new message is created for **each element**.
4. Each new message has the array element as its data. The originator, message type, and metadata are all copied from the original incoming message.
5. All newly created messages are sent out via the `Success` chain. The original message is acknowledged once all split messages have been successfully enqueued.

## Output connections

- `Success`:
    - New messages (one for each element in the source array) are sent through this chain.
- `Failure`:
    - If the incoming message data is not a JSON array.

## Examples

### Example 1 — Split an array of objects

**Incoming message**

Data:

```json
[
  {"sensor": "A", "temperature": 22.5},
  {"sensor": "B", "temperature": 23.1}
]
```

**Outgoing messages**

Two new messages are created and sent via the `Success` chain:

1. Message 1:
    - Data: `{"sensor": "A", "temperature": 22.5}`
2. Message 2:
    - Data: `{"sensor": "B", "temperature": 23.1}`

**Explanation**: The original message containing an array of two objects is split into two separate messages. Each new message's data is one of the objects from the original array.

-----

### Example 2 — Input is an empty array

**Incoming message**

Data: `[]`

**Outgoing messages**

No new messages are created. The original message is acknowledged.

**Explanation**: The incoming message data is an empty array. The node processes it successfully by acknowledging without producing any output messages.

-----

### Example 3 — Input is not an array

**Incoming message**

Data: `{"status": "error", "code": 500}`

**Outgoing messages**

The original message is routed to the `Failure` chain. No new messages are created.

**Explanation**: The incoming message data is a JSON object, not an array. The node cannot process it, so it fails.
