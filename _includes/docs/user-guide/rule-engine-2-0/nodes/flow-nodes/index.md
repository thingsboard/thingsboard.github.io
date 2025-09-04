
- [Acknowledge node](/docs/user-guide/rule-engine-2-0/nodes/flow-nodes/acknowledge-node) — The node will mark the message as successfully processed (acknowledged). See [message processing result](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#message-processing-result){:target="_blank"} for more details.
- [Checkpoint node](/docs/user-guide/rule-engine-2-0/nodes/flow-nodes/checkpoint-node) — Publish a copy of the message to the selected [rule engine queue](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/){:target="_blank"}.
- [Rule Chain node](/docs/user-guide/rule-engine-2-0/nodes/flow-nodes/rule-chain-node) — Forwards the message to the selected rule chain.
- [Output node](/docs/user-guide/rule-engine-2-0/nodes/flow-nodes/output-node) — Used in combination with the rule chain node. Allows to publish result of the message processing to the caller rule chain.
