![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/rename-keys-node.png)

**Renames message or message metadata keys.**

Renames keys in the message or message metadata according to the provided mapping. If key to rename doesn't exist in the specified source (message or message metadata) it will be ignored.

Output connections: `Success`, `Failure`.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/rename-keys-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/rename-keys-node-2-pe.png"></object>
{% endif %}
