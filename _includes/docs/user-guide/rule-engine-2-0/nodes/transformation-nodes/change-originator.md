<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-change-originator.png)

All incoming Messages in the Thingsboard have originator field that identifies an entity that submits Message. 
It could be a Device, Asset, Customer, Tenant, etc.

This node is used in cases when a submitted message should be processed as a message from another entity. 
For example, Device submits telemetry and telemetry should be copied into higher level Asset or to a Customer. 
In this case, Administrator should add this node before [**Save Timeseries**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node) Node.

The originator can be changed to:

- Originator's Customer
- Originator's Tenant
- Related Entity that is identified by Relations Query

In 'Relations query' configuration Administrator can select required **Direction** and **relation depth level**. 
Also set of **Relation filters** can be configured with required Relation type and Entity Types.

![image](/images/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-change-originator-config.png)

If multiple Related Entities are found, **_only the first Entity is used_** as new originator, other entities are discarded.

**Failure** chain is used if no Related Entity / Customer / Tenant was found, otherwise - **Success** chain.

Outbound Message will have new originator Id.
