![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/message-type-filter-node.png)

Filters incoming messages based on one or more [predefined](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) or custom message types. 
Checks that the message type of the incoming message matches one of the values specified in the configuration.

**Configuration**

* **Select message types** - list of message types. Both [predefined](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) and custom message types are supported.

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/message-type-filter-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/message-type-filter-2-pe.png"></object>
{% endif %}

**Output connections**
* **True:**
  * If the incoming message type matches one of the selected message types.
* **False:**
  * If the incoming message type does not match any of the selected message types.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

See configuration screenshot.
