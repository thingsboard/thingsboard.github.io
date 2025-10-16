Flow nodes control how messages move between different parts of the rule engine.

These nodes can transfer messages between queues to enable sequential processing or separate different workloads, forward messages to other rule chains, and return results back 
to the calling rule chain.

This allows you to build modular workflows by breaking complex logic into reusable rule chains.

- [acknowledge](/docs/user-guide/rule-engine-2-0/nodes/flow/acknowledge) — acknowledges the incoming message and forwards it to the next nodes in the rule chain.
- [checkpoint](/docs/user-guide/rule-engine-2-0/nodes/flow/checkpoint) — transfers incoming messages to a specified queue.
- [rule chain](/docs/user-guide/rule-engine-2-0/nodes/flow/rule-chain) — forwards incoming messages to a specified rule chain.
- [output](/docs/user-guide/rule-engine-2-0/nodes/flow/output) — Used in combination with the rule chain node. Allows to publish result of the message processing to the caller rule chain.
