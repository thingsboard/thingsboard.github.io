---
layout: docwithnav
title: Filter Nodes
description: Rule Engine 2.0 Filter Nodes

---

Filter Nodes are used for Message filtering and routing.

* TOC
{:toc}

##### Message Type Filter Node
In the Node configuration, administrator defines set of allowed Message Types for incoming Message. 
There are predefined MessageTypes in the system, like **POST_ATTRIBUTES**, **POST_TELEMETRY**, **RPC_REQUEST**, etc.
An administrator can also define any custom message types in the node configuration.

If incoming MessageType is expected - send Message via **Success** chain, otherwise **Failure** chain is used.

##### Message Type Switch Node
Route incoming messages by Message Type. If incoming Message has known MessageTypes, it sends to the corresponding chain, 
otherwise, message sends to **Other** chain.
Here is the list of known Message Types:

- POST_ATTRIBUTES_REQUEST
- POST_TELEMETRY_REQUEST
- TO_SERVER_RPC_REQUEST
- ACTIVITY_EVENT
- INACTIVITY_EVENT
- CONNECT_EVENT
- DISCONNECT_EVENT
- **!!! TODO-RE - add additional message types for other incoming plugins (Kafka, Rest ...)** 

**!!! TODO-RE - describe not trivial message types and when they generated**
{: style="color:red" }
If you use Custom Message Types than you can route those messages via **Other** chain of **Message Type Switch Node** 
to the **Switch Node** or **Message Type Filter Node** configured with required routing logic.

##### Originator Type Switch Node

Route incoming messages by Originator [Entity](http://localhost:4000/docs/user-guide/entities-and-relations/) type. 

##### Script Filter Node
Evaluate incoming Message with configured JS condition. Script must return Boolean value. If **True** - send Message via **True** chain, otherwise **False** chain is used.
 
Message payload can be accessed via <code>msg</code> property. For example <code>msg.temperature < 10;</code><br/> 
Message metadata can be accessed via <code>metadata</code> property. For example <code>metadata.customerName === 'John';</code><br/> 
Message type can be accessed via <code>msgType</code> property. For example <code>msgType === 'POST_TELEMETRY'</code><br/> 

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

During Node configuration, Administrator can make test executions of configured Script. Just press **Test script function** 
button and new test window will be opened.
You can define:

- **Message payload** in left Message section.
- **Message Type** in the top left field.
- **Metadata** in right Metadata section.
- Actual **JS script** in Filter section.

After pressing **Test** output will be returned in left **Output** section.

You can see real life example, how to use this node in those tutorials:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial.md#add-filter-script-node)


##### Switch Node
Route incoming Message to one OR multiple output chains. Node executes configured JS script.
 
The script should return **_an array of next Relation names_** where Message should be routed.
If returned array is empty - message not routed to next Node and discarded.

For configuring next Nodes **Custom** relation with preferred relation name should be created for the next node.
Custom relation names are case-insensitive.

Full script example:

**!!! TODO-RE - add full script example**
{: style="color:red" }

**!!! TODO-RE - add link to tutorial where this node is used**
{: style="color:red" }

Message payload can be accessed via <code>msg</code> property. For example <code>msg.temperature < 10;</code><br/> 
Message metadata can be accessed via <code>metadata</code> property. For example <code>metadata.customerName === 'John';</code><br/> 
Message type can be accessed via <code>msgType</code> property. For example <code>msgType === 'POST_TELEMETRY'</code><br/> 

During Node configuration, Administrator can make test executions of configured Script. Just press **Test switch function** 
button and new test window will be opened.
You can define:

- **Message payload** in left Message section.
- **Message Type** in the top left field.
- **Metadata** in right Metadata section.
- Actual **JS script** in Filter section.

After pressing **Test** output will be returned in left **Output** section.
