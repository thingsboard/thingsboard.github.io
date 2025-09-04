<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.3.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/flow-nodes/rule-chain-node.png)

Forwards the message to the selected [rule chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain){:target="_blank"}.
Since TB Version 3.3.3, the target rule chain may also output the results of processing using [output node](#output-node). 
The output node enables reuse of the rule chains and extraction of the processing logic to modules (rule chains).

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/flow-nodes/rule-chain-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/flow-nodes/rule-chain-node-2-pe.png"></object>
{% endif %}

For example, you may create a rule chain that validates the incoming message, and process valid and invalid messages separately.

![image](/images/user-guide/rule-engine-2-0/nodes/rule-chain-node-main.png)

The logic of message validation may be reused in other rule chains. For this purpose, we extract it in a separate rule chain.

![image](/images/user-guide/rule-engine-2-0/nodes/rule-chain-node-inner.png)

Notice the "Output" nodes we use in validation rule chain. 
The names of the output nodes should match the outgoing [relations](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection){:target="_blank"} of the "rule chain node" in the main rule chain.
