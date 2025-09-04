![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/duplicate-to-group-by-name-node.png)

**Duplicates message to all entities belonging to resolved Entity group.**

Entities are fetched from entity group that is detected according to the configuration. When "search entity group on Tenant level only" is enabled, the search is restricted to the Tenant level only. If "consider originator as a group owner" is enabled and the originator is a Tenant or Customer, the search starts from the originator's level and goes up the hierarchy to the tenant level if the group isn't found. Otherwise, the search starts at the same level as the message originator's owner. Entity group is dynamically resolved based on it's name and type. For each entity from group new message is created with entity as originator and message parameters copied from original message.

Output connections: `Success`, `Failure`.

Configuration:
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/duplicate-to-group-by-name-node-2-pe.png"></object>
