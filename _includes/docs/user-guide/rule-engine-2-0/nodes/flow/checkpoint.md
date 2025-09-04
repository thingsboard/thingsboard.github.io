![image](/images/user-guide/rule-engine-2-0/nodes/flow-nodes/checkpoint-node.png)

Publish a copy of the message to the selected [rule engine queue](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/){:target="_blank"}.
The original message is marked as successfully processed once the target queue acknowledge publish of the copied message. 

Useful if you want to mark message as high priority or process messages sequentially grouped by originator of the message. 
See [default queues](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#default-queues){:target="_blank"} or define your own [queue](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/){:target="_blank"}.
