![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/check-fields-presence-node.png)

Checks the presence of the specified fields in the message and/or metadata.
Both message and metadata is typically a JSON object.

**Configuration**

* **Message field names** - list of field names that should be present in the message.
* **Metadata field names** - list of field names that should be present in the metadata.
* **Check that all specified fields are present** - if enabled, checks the presence of all fields, otherwise at least one.

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/check-fields-presence-configuration-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/check-fields-presence-configuration-2-pe.png"></object>
{% endif %}

**Output connections**
* **True:**
  * If all specified fields are present when the **Check that all specified fields are present** toggle is enabled.
  * If at least one specified field is present when the **Check that all specified fields are present** toggle is disabled.
* **False:**
  * If any of the specified fields are missing when the **Check that all specified fields are present** toggle is enabled.
  * If none of the specified fields are present when the **Check that all specified fields are present** toggle is disabled.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

See configuration screenshot.
