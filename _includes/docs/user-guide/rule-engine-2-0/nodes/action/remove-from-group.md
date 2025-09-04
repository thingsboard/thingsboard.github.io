<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0.2</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-remove-from-group.png)

Removes Message Originator Entity from [Entity Group](/docs/{{peDocsPrefix}}user-guide/groups/).

Following Message Originator types are allowed: **Customer**, **Asset**, **Device**.

Finds target Entity Group by group name pattern and then removes Originator Entity from this group.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-remove-from-group-config.png)

- **Group name pattern** - can be set direct group name or pattern can be used, that will be resolved to the real group name using Message metadata.
- **Groups cache expiration time** - specifies maximum time interval is seconds allowed to store found entity group records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target entity group doesn't exist.

In other cases Message will be routed via **Success** chain.
