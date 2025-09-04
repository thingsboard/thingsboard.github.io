![image](/images/user-guide/rule-engine-2-0/nodes/filter-nodes/alarm-status-filter-node.png)

Filters messages based on the specified [alarm](/docs/{{docsPrefix}}user-guide/alarms/) statuses.

**Configuration**

* **Alarm status** - controls the statuses to filter by. Available statuses: **_Active Acknowledged_**, **_Active Unacknowledged_**, **_Cleared Acknowledged_**, **_Cleared Unacknowledged_**.

{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/alarm-status-filter-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/filter-nodes/alarm-status-filter-2-pe.png"></object>
{% endif %}

**Output connections**
* **True:**
  * If the message matches any of the selected alarm statuses.
* **False:**
  * If the message does not match any of the selected alarm statuses.
* **Failure:**
  * If unexpected error occurred during message processing.

**Usage example**

Consider a scenario where you want to process alarms that are currently active.
You can configure the rule node to filter for **_Active Unacknowledged_** and **_Active Acknowledged_** statuses.
This setup ensures that only alarms which are currently active, whether they have been acknowledged or not, are processed further.

![image](/images/user-guide/rule-engine-2-0/nodes/check-alarm-status-chain.png)

You may [download](https://gist.github.com/ShvaykaD/dce641880a78013a273f8f8c82fa7f1e#file-alarm-status-filter-example-json) and import the rule chain.
