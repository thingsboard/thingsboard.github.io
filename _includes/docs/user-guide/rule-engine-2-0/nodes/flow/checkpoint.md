Transfers messages to a specified queue. After successful transfer, the incoming message is acknowledged.

## Configuration

* Queue name - Specify the target queue where messages should be transferred.

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

1. The node receives an incoming message.
2. A copy of the incoming message is created. This copy is enqueued to the configured target queue.
3. Once the copy is successfully enqueued to the target queue, the original incoming message is acknowledged.
4. If enqueueing fails, the original message is routed via the `Failure` connection without being acknowledged.

## Output connections

- **Success**
    - The message was successfully transferred to the target queue and acknowledged.
- **Failure**
    - An error occurred while enqueueing the message.
    - An unexpected error occurred during processing.
