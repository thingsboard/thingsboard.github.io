![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-delete-attributes.png)

**Delete attributes for Message Originator.**

This rule node attempts to delete attributes for the message originator entity (e.g., a device) based on the specified keys.

**Behavior:**
- If the attribute with the specified key is missing – it will be ignored.
- If the attribute with the given key exists – it will be removed.
- On **successful deletion**:
  - An "Attributes Deleted" event is sent the root chain of the message originator.
  - Send the incoming message via **Success** chain.
- On **deletion failure**:
  - The message is routed through the **Failure** chain.

Configuration:

{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-delete-attributes-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-delete-attributes-2-pe.png"></object>
{% endif %}
