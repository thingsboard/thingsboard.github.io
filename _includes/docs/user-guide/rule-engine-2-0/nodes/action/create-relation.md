<table  style="min-width:12%; max-width: 20%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation.png)

Create the relation from the selected entity to originator of the message by type and direction.

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Customer**, **Tenant**, **Dashboard**.

Finds target Entity by metadata key patterns and then create a relation between Originator Entity and the target entity.

If selected entity type **Asset**, **Device** or **Customer**  rule node will create new Entity if it doesn’t exist and selected checkbox: **Create new Entity if not exists**.

**Note:** if selected entity type **Asset** or **Device** you need to set two patterns:

- entity name pattern;

- entity type pattern.

Otherwise, only name pattern should be set.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation-node-configuration.png)

- **Direction** - following types are allowed: **From**, **To**.
- **Relation type** - type of directed connections to message originator entity. Default types **Contains** and **Manages** can be selected from the drop-down list.
- **Name pattern** and **Type pattern** - can be set direct entity name/type or pattern can be used, that will be resolved to the real entity name/type using Message metadata.
- **Entities cache expiration time** - specifies maximum time interval is seconds allowed to store found target entity records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target entity doesn't exist.

In other cases Message will be routed via **Success** chain.

> **Note:** Since TB Version 2.3 the rule node has the ability to:

- remove current relations from the originator of the incoming message based on direction and type:

  ![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation-node-remove-relations.png)

- change the originator of the incoming message to the selected entity and process outboud messages as messages from another entity:

  ![image](/images/user-guide/rule-engine-2-0/nodes/action-create-relation-node-change-originator.png)
