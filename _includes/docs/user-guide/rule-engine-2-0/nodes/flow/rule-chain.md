Transfers the incoming message to another rule chain for processing. The message is forwarded to the input node of the target rule chain.

## Configuration

### Rule chain

The target rule chain to which the incoming message will be forwarded.

Select the rule chain from the dropdown list of available rule chains in your tenant. The message will be sent to the input node of the selected rule chain.

When **Forward message to the originator's default rule chain** is enabled, this rule chain serves as a fallback if the originator's default rule chain cannot be determined.

### Forward message to the originator's default rule chain

When enabled, the node attempts to dynamically determine the target rule chain based on the message originator's default rule chain configuration.

This feature works for the following originator types:

- **Device** – Uses the default rule chain configured in the device's profile
- **Asset** – Uses the default rule chain configured in the asset's profile

If the originator is a different entity type or the default rule chain cannot be determined, the node falls back to the rule chain specified in the **Rule chain** configuration
parameter.

When disabled, all messages are forwarded to the rule chain specified in the configuration, regardless of the originator type.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbRuleChainInputNodeConfiguration",
  "type": "object",
  "properties": {
    "ruleChainId": {
      "type": "string",
      "minLength": 1,
      "description": "UUID of the target rule chain to forward messages to."
    },
    "forwardMsgToDefaultRuleChain": {
      "type": "boolean",
      "description": "Whether to dynamically resolve the target rule chain based on the originator's default rule chain."
    }
  },
  "required": [
    "ruleChainId"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node determines the target rule chain:
    - If **Forward message to the originator's default rule chain** is **disabled**, the configured rule chain is always used.
    - If **Forward message to the originator's default rule chain** is **enabled**:
        - For **Device** originators: The default rule chain from the device's profile is retrieved.
        - For **Asset** originators: The default rule chain from the asset's profile is retrieved.
        - For other originator types or if the default rule chain cannot be determined: The configured rule chain is used as a fallback.
2. The message is forwarded to the input node of the target rule chain.
3. The message proceeds through the target rule chain according to its configuration.
4. Output connections from the target rule chain's output nodes determine the final message routing.

## Output connections

The output connections are determined by the output nodes in the target rule chain, not by this node itself. The message follows the connection types configured in the target rule
chain's output nodes.
