Forwards messages back to the caller rule chain. The "output" node produces the result of rule chain processing and returns it to the rule chain that invoked the current rule chain
via a ["rule chain" input node](/docs/user-guide/rule-engine-2-0/nodes/flow/rule-chain/){:target="_blank"}.

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

1. The node receives an incoming message within the current rule chain.
2. The message is forwarded back to the caller rule chain.
3. The "output" node's **name** determines the connection label used in the caller rule chain.
4. In the caller rule chain, the message exits from the "rule chain" input node via the connection that matches the "output" node's name.

The "output" node's name acts as the connection label in the caller rule chain. For example:

- An "output" node named **Success** routes messages via the **Success** connection in the caller rule chain.
- An "output" node named **Failure** routes messages via the **Failure** connection in the caller rule chain.
- An "output" node named **Valid** routes messages via the **Valid** connection in the caller rule chain.

## Output connections

This node does not have "output' connections within its own rule chain. Instead, it returns messages to the caller rule chain, where routing continues based on the "output" node's name
as the connection label.
