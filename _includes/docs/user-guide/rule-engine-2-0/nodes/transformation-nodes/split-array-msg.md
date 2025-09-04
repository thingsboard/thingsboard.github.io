![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/split-array-msg-node.png)

**Split array message into several messages.**

Splits an array message into individual elements, with each element sent as a separate message. All outbound messages will have the same type and metadata as the original array message.

Output connections: `Success`, `Failure`.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/split-array-msg-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/split-array-msg-node-2-pe.png"></object>
{% endif %}
