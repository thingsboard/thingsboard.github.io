Acknowledges the incoming message and forwards it to the next node in the rule chain. This node
explicitly [marks the message as successfully processed](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#message-processing-result){:target="_blank"}.

## Configuration

This node requires no configuration.

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

1. The node receives the incoming message.
2. The message is immediately acknowledged.
3. The message is forwarded to the next nodes via the `Success` connection.

## Output connections

- **Success**
    - The message was successfully acknowledged and forwarded.
