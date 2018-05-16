---
layout: docwithnav
title: Transformation Nodes
description: Rule Engine 2.0 Transformation Nodes

---

Transformation Nodes are used for changing incoming Message fields like Originator, Message Type, Message Payload, Message Metadata.

* TOC
{:toc}


# Change originator
All incoming Messages in the Thingsboard have originator field that identifies an entity that submits Message. 
It could be a Device, Asset, Customer, Tenant, etc.

This node is used in cases when a submitted message should be processed as a message from another entity. 
For example, Device submits telemetry and telemetry should be copied into higher level Asset or to a Customer. 
In this case, Administrator should add this node before **Save Timeseries** Node.

The originator can be changed to:
- Originator's Customer
- Originator's Tenant
- Related Entity that is identified by Relation Query

In relation query configuration Administrator can select required Direction and relation depth level. 
Also set of Relation filters can be configured with required Relation type and Entity Types.

If multiple Related Entities are found, **_only first Entity is used_** for attributes enrichment, other entities are discarded.

If no Related Entity / Customer / Tenant found **Failure** chain is used, otherwise **Success** chain.

Outbound Message will have new originator ID.

**!!! TODO-RE - add link to tutorial with this node**
{: style="color:red" }

<br/>

# Script Transformation Node
Change Message payload, Metadata or Message type using configured JavaScript function.<br/>
JavaScript function receive 3 input parameters 

- <code>metadata</code> - is a Message metadata.
- <code>msg</code> - is a Message payload.
- <code>msgType</code> - is a Message type.

Script should return the following structure:
{% highlight java %}
{   
    msg: new payload,
    metadata: new metadata,
    msgType: new msgType 
}
{% endhighlight %}

All fields in resulting object are optional and will be taken from original message if not specified.

Outbound Message from this Node will be new Message that was constructed using configured Javascript function.

During Node configuration, Administrator can make test executions of configured Script. Just press **Test transformer function** 
button and new test window will be opened.

You can define:

- Message payload in left 'Message' section.
- Message Type in the top left field.
- Metadata in right 'Metadata' section.
- Actual JS script in 'Transformer' section.

After pressing **Test** output will be returned in left **Output** section.

#### Example:
Node receives Message with **payload**:
{% highlight java %}
{
    "temperature": 22.4,
    "humidity": 78
}
{% endhighlight %}

Original **Metadata**:
{% highlight java %}
{ "sensorType" : "temperature" }
{% endhighlight %}


Original **Message Type** - POST_TELEMETRY
<br/>

And we want to :

- change message type to 'CUSTOM_UPDATE' 
- add additional attribute **_version_** into payload with value **_v1.1_**
- change _**sensorType**_ attribute value in Metadata to **_roomTemp_**

Here is our Function:
{% highlight java %}
var newType = "CUSTOM_UPDATE";
msg.version = "v1.1";
metadata.sensorType = "roomTemp"
return {msg: msg, metadata: metadata, msgType: newType};
{% endhighlight %}

<br/><br/>

# To Email Node

**!!! TODO-RE - add description and link to tutorial**
{: style="color:red" }

