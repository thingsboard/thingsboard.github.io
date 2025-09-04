<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-change-owner-node.png)

Changes Owner of the Originator entity to the selected Owner by type:

- Tenant

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-change-owner-node-tenent-config.png)

- Customer

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-change-owner-node-customer-config.png)

Rule node finds target Owner by owner name pattern and then change the owner of the originator entity.

- **Owner name pattern** - can be set direct customer name or pattern can be used, that will be resolved to the real customer name using Message metadata.
- **Create new owner if not exists** - if checked will create new owner(customer) if it doesn't exist.
- **Owner cache expiration time** - specifies maximum time interval is seconds allowed to store found owners(customers) records. 0 value means that records will never expire.

If an entity already belongs to this owner or entity owner is successfully changed - Message sent via **Success** chain, otherwise, **Failure** chain will be used.
