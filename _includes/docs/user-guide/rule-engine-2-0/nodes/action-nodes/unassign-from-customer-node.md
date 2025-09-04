<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/action-unassign-from-customer-node.png)

Unassign Message Originator Entity from [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/).

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Dashboard**.

Finds target Customer by customer name pattern and then unassign Originator Entity from this customer.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-unassign-from-customer-node-configuration.png)

- **Customer name pattern** - can be set direct customer name or pattern can be used, that will be resolved to the real customer name using Message metadata.
- **Customers cache expiration time** - specifies maximum time interval is seconds allowed to store found customers records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target customer doesn't exist.

In other cases Message will be routed via **Success** chain.
