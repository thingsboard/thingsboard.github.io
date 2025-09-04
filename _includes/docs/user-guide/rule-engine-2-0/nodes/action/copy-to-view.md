![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/copy-to-view-1.png)

Copy attributes from asset/device to related entity view according to entity view configuration. Copy will be done only for attributes that are between start and end dates and according to attribute keys configuration.
Changes message originator to related entity view and produces new messages according to count of updated entity views

Configuration:

{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/copy-to-view-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/copy-to-view-2-pe.png"></object>
{% endif %}
