![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/flow-nodes/acknowledge-node.png)

The node will mark the message as successfully processed (acknowledged). See [message processing result](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#message-processing-result){:target="_blank"} for more details. 
This indicates to rule engine that the message was successfully processed.

Useful if you don't want to reprocess the failed messages. 
For example, the rule chain below will reprocess the failed messages only for important messages. 
Failure of unimportant message will be simply ignored. 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/acknowledge-failed.png)

> **Note:** We recommend the "acknowledge" rule node to be the last in the processing chain.
Theoretically, you may add other rule nodes after the "acknowledge" one. However, this may cause the OOM errors. 
For example, subsequent rule nodes may process messages slowly. Unprocessed messages will be stored in memory and will consume too much RAM
