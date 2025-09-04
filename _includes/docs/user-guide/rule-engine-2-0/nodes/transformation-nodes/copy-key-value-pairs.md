![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/copy-key-value-pairs-node.png)

**Copies key-value pairs from message to message metadata or vice-versa.**

Copies key-value pairs from the message to message metadata, or vice-versa, according to the configured direction and keys. Regular expressions can be used to define which keys- value pairs to copy. Any configured key not found in the source will be ignored.

Output connections: `Success`, `Failure`.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/copy-key-value-pairs-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/copy-key-value-pairs-node-2-pe.png"></object>
{% endif %}
