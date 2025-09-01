![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/entity-type-switch-node.png)

Filters incoming messages by type of message originator entity. 
Checks that the entity type of the incoming message originator matches one of the values specified in the filter.

**Configuration**

* **Select entity types** - list of entity types to filter messages: **Device**, **Asset**, **User**, etc.

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/entity-type-filter-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/entity-type-filter-2-pe.png"></object>
{% endif %}

**Output connections**
* **True:**
  * If the message originator type matches one of the selected entity types.
* **False:**
  * If the message originator type does not match any of the selected entity types.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

See configuration screenshot.
