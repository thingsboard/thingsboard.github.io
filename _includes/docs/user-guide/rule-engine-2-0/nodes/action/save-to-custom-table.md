<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table.png)

Node stores data from incoming Message payload to the Cassandra database into the predefined custom table that should have **cs_tb_** prefix, to avoid the data insertion to the common TB tables.

Please note, that rule node can be used only for **Cassandra DB**.

Configuration:

Administrator should set the custom table name without prefix: **cs_tb_**.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table-name-config.png)

Administrator can configure the mapping between the Message field names and Table columns name. If the mapping key is **$entityId**, that is identified by the Message Originator, then to the appropriate column name(mapping value) will be write the message originator id.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/action-save-to-custom-cassandra-table-config.png)

If specified message field does not exist in the **data** of the message or is not a JSON Primitive, the outbound message will be routed via **Failure** chain, otherwise, the message will be routed via **Success** chain.

**Note**: Please make sure that you are not using **metadata** keys in the configuration - only **data** keys are possible.
