<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.3.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/flow-nodes/output-node.png)

Used in combination with the [rule chain node](#rule-chain-node). Allows to publish result of the message processing to the caller rule chain. 
The output rule node name corresponds to the [relation](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection){:target="_blank"} type of the output message,
and it is used to forward messages to other rule nodes in the caller rule chain.
See [rule chain node](#rule-chain-node) documentation for example.
