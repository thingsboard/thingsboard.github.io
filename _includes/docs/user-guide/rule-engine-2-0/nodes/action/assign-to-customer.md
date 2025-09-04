<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-assign-to-customer-node.png)

Assign Message Originator Entity to [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/).

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**, **Dashboard**.

Finds target Customer by customer name pattern and then assign Originator Entity to this customer.

Will create new Customer if it doesn't exists and **Create new Customer if not exists** is set to **true**.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-assign-to-customer-node-configuration.png)

- **Customer name pattern** - can be set direct customer name or pattern can be used, that will be resolved to the real customer name using Message metadata.
- **Create new customer if not exists** - if checked will create new customer if it doesn't exist.
- **Customers cache expiration time** - specifies maximum time interval is seconds allowed to store found customers records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target customer doesn't exist and **Create customer if not exists** is unchecked.

In other cases Message will be routed via **Success** chain.
