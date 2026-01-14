![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/deduplication-node.png)

**Deduplicate messages within the same Originator entity for a configurable period based on a specified deduplication strategy.** 

Deduplication strategies:
- FIRST - return first message that arrived during deduplication period.
- LAST - return last message that arrived during deduplication period.
- ALL - return all messages as a single JSON array message. Where each element represents object with msg and metadata inner properties.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/deduplication-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/deduplication-node-2-pe.png"></object>
{% endif %}
