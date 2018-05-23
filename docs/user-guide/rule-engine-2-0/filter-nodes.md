---
layout: docwithnav
title: Filter Nodes
description: Rule Engine 2.0 Filter Nodes

---

Filter Nodes are used for Message filtering and routing.

* TOC
{:toc}

##### Message Type Filter Node

![image](/images/user-guide/rule-engine-2-0/nodes/filter-message-type.png)

In the Node configuration, administrator defines set of allowed Message Types for incoming Message. 
There are [predefined Message Types](/docs/user-guide/rule-engine-2-0/overview/#predefined-message-types) in the system, like **Post attributes**, **Post telemetry**, **RPC Request**, etc.
An administrator can also define any Custom Message Types in the node configuration.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-message-type-config.png)

If incoming Message Type is expected - Message is sent via **True** chain, otherwise **False** chain is used.

##### Message Type Switch Node

![image](/images/user-guide/rule-engine-2-0/nodes/filter-message-type-switch.png)

Route incoming messages by Message Type. If incoming Message has known [Message Type](/docs/user-guide/rule-engine-2-0/overview/#predefined-message-types) then it is sent to the corresponding chain, 
otherwise, message is sent to **Other** chain.

If you use Custom Message Types than you can route those messages via **Other** chain of **Message Type Switch Node** 
to the **Switch Node** or **Message Type Filter Node** configured with required routing logic.

##### Originator Type Switch Node

![image](/images/user-guide/rule-engine-2-0/nodes/filter-originator-type-switch.png)

Route incoming messages by Originator [Entity](/docs/user-guide/entities-and-relations/) type. 

##### Script Filter Node

![image](/images/user-guide/rule-engine-2-0/nodes/filter-script.png)

Evaluate incoming Message with configured JavaScript condition. 

JavaScript function receive 3 input parameters: 

- <code>msg</code> - is a Message payload.
- <code>metadata</code> - is a Message metadata.
- <code>msgType</code> - is a Message type.

Script should return Boolean value.
If **True** - send Message via **True** chain, otherwise **False** chain is used.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-script-config.png)
 
Message payload can be accessed via <code>msg</code> variable. For example <code>msg.temperature < 10;</code><br/> 
Message metadata can be accessed via <code>metadata</code> variable. For example <code>metadata.customerName === 'John';</code><br/> 
Message type can be accessed via <code>msgType</code> variable. For example <code>msgType === 'POST_TELEMETRY_REQUEST'</code><br/> 

Full script example:

{% highlight javascript %}
if(msgType === 'POST_TELEMETRY_REQUEST') {
    if(metadata.deviceType === 'vehicle') {
        return msg.humidity > 50;
    } else if(metadata.deviceType === 'controller') {
        return msg.temperature > 20 && msg.humidity > 60;;
    }
}

return false;
{% endhighlight %}

JavaScript condition can be verified using [Test JavaScript function](/docs/user-guide/rule-engine-2-0/overview/#test-javascript-functions).

You can see real life example, how to use this node in those tutorials:

- [Create and Clear Alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)
- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-filter-script-node)

##### Switch Node

![image](/images/user-guide/rule-engine-2-0/nodes/filter-switch.png)

Route incoming Message to one OR multiple output chains. Node executes configured JavaScript function.

JavaScript function receive 3 input parameters: 

- <code>msg</code> - is a Message payload.
- <code>metadata</code> - is a Message metadata.
- <code>msgType</code> - is a Message type.
 
The script should return **_an array of next Relation names_** where Message should be routed.
If returned array is empty - message will not be routed to any Node and discarded.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-switch-config.png)

Message payload can be accessed via <code>msg</code> variable. For example <code>msg.temperature < 10;</code><br/> 
Message metadata can be accessed via <code>metadata</code> variable. For example <code>metadata.customerName === 'John';</code><br/> 
Message type can be accessed via <code>msgType</code> variable. For example <code>msgType === 'POST_TELEMETRY_REQUEST'</code><br/> 

Full script example:

{% highlight javascript %}
if (msgType === 'POST_TELEMETRY_REQUEST') {
    if (msg.temperature < 18) {
        return ['Low Temperature Telemetry'];
    } else {
        return ['Normal Temperature Telemetry'];
    }
} else if (msgType === 'POST_ATTRIBUTES_REQUEST') {
    if (msg.currentState === 'IDLE') {
        return ['Idle State', 'Update State Attribute'];
    } else if (msg.currentState === 'RUNNING') {
        return ['Running State', 'Update State Attribute'];
    } else {
        return ['Unknown State'];
    }
}
return [];
{% endhighlight %}

JavaScript switch function can be verified using [Test JavaScript function](/docs/user-guide/rule-engine-2-0/overview/#test-javascript-functions).

In order to specify custom relation name **Custom** type should be selected. This will allow to input custom relation name.
Custom relation names are case-insensitive.

![image](/images/user-guide/rule-engine-2-0/nodes/filter-switch-custom-relation.png)
