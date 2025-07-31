
Flow nodes are used to control message processing flow.

* TOC
{:toc}

## Acknowledge node

![image](/images/user-guide/rule-engine-2-0/nodes/flow-nodes/acknowledge-node.png)

The node will mark the message as successfully processed (acknowledged). See [message processing result](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#message-processing-result){:target="_blank"} for more details. 
This indicates to rule engine that the message was successfully processed.

Useful if you don't want to reprocess the failed messages. 
For example, the rule chain below will reprocess the failed messages only for important messages. 
Failure of unimportant message will be simply ignored. 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/acknowledge-failed.png)

> **Note:** We recommend the "acknowledge" rule node to be the last in the processing chain.
Theoretically, you may add other rule nodes after the "acknowledge" one. However, this may cause the OOM errors. 
For example, subsequent rule nodes may process messages slowly. Unprocessed messages will be stored in memory and will consume too much RAM  

## Checkpoint node

![image](/images/user-guide/rule-engine-2-0/nodes/flow-nodes/checkpoint-node.png)

Publish a copy of the message to the selected [rule engine queue](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/){:target="_blank"}.
The original message is marked as successfully processed once the target queue acknowledge publish of the copied message. 

Useful if you want to mark message as high priority or process messages sequentially grouped by originator of the message. 
See [default queues](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#default-queues){:target="_blank"} or define your own [queue](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/){:target="_blank"}. 

## Rule Chain node

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

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/rule-chain-node-main.png)

The logic of message validation may be reused in other rule chains. For this purpose, we extract it in a separate rule chain.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/rule-chain-node-inner.png)

Notice the "Output" nodes we use in validation rule chain. 
The names of the output nodes should match the outgoing [relations](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection){:target="_blank"} of the "rule chain node" in the main rule chain.

## Output node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.3.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/flow-nodes/output-node.png)

Used in combination with the [rule chain node](#rule-chain-node). Allows to publish result of the message processing to the caller rule chain. 
The output rule node name corresponds to the [relation](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-connection){:target="_blank"} type of the output message,
and it is used to forward messages to other rule nodes in the caller rule chain.
See [rule chain node](#rule-chain-node) documentation for example.