<table  style="min-width:12%; max-width: 20%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2.1</em></strong></td>
     </tr>
   </thead>
</table> 


![image](/images/user-guide/rule-engine-2-0/nodes/action-delete-relation.png)

Delete the relation from the selected entity to originator of the message by type and direction.

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Customer**, **Tenant**, **Dashboard**.

Finds target Entity by entity name pattern and then delete a relation between Originator Entity and this entity.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-delete-relation-node-configuration.png)

- **Direction** - following types are allowed: **From**, **To**.
- **Relation type** - type of directed connections to message originator entity. Default types **Contains** and **Manages** can be selected from the drop-down list.
- **Name pattern** - can be set direct entity name or pattern can be used, that will be resolved to the real entity name using Message metadata.
- **Entities cache expiration time** - specifies maximum time interval is seconds allowed to store found target entity records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target entity doesn't exist.

In other cases Message will be routed via **Success** chain.

> **Note:** Since TB Version 2.3 the rule node has the ability to deletes relation from the originator of the incoming message to the specified entity or to the list of entities based on direction and type by disabling the following checkbox in the rule node configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-delete-relation-node-new-functionality.png)
