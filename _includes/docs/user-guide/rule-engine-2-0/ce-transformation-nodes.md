Transformation Nodes are used for changing incoming Message fields like Originator, Message Type, Payload and Metadata.

* TOC
{:toc}


## Change originator

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-change-originator.png)

All incoming Messages in the Thingsboard have originator field that identifies an entity that submits Message. 
It could be a Device, Asset, Customer, Tenant, etc.

This node is used in cases when a submitted message should be processed as a message from another entity. 
For example, Device submits telemetry and telemetry should be copied into higher level Asset or to a Customer. 
In this case, Administrator should add this node before [**Save Timeseries**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node) Node.

The originator can be changed to:

- Originator's Customer
- Originator's Tenant
- Related Entity that is identified by Relations Query

In 'Relations query' configuration Administrator can select required **Direction** and **relation depth level**. 
Also set of **Relation filters** can be configured with required Relation type and Entity Types.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-change-originator-config.png)

If multiple Related Entities are found, **_only the first Entity is used_** as new originator, other entities are discarded.

**Failure** chain is used if no Related Entity / Customer / Tenant was found, otherwise - **Success** chain.

Outbound Message will have new originator Id.

<br>

## Script Transformation Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-script.png)

Changes Message payload, Metadata or Message type using configured JavaScript function.

JavaScript function receives 3 input parameters: 

- <code>msg</code> - is a Message payload.
- <code>metadata</code> - is a Message metadata.
- <code>msgType</code> - is a Message type.

Script should return the following structure:
{% highlight java %}
{   
    msg: new payload,
    metadata: new metadata,
    msgType: new msgType 
}
{% endhighlight %}

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-script-config.png)

All fields in resulting object are optional and will be taken from original message if not specified.

Outbound Message from this Node will be new Message that was constructed using configured JavaScript function.

JavaScript transform function can be verified using [Test JavaScript function](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#test-script-functions).

<br>
**Example**

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


Original **Message Type** - POST_TELEMETRY_REQUEST
<br>

The following modifications should be performed:

- change message type to 'CUSTOM_UPDATE' 
- add additional attribute **_version_** into payload with value **_v1.1_**
- change _**sensorType**_ attribute value in Metadata to **_roomTemp_**

The following transform function will perform all necessary modifications:
{% highlight java %}
var newType = "CUSTOM_UPDATE";
msg.version = "v1.1";
metadata.sensorType = "roomTemp"
return {msg: msg, metadata: metadata, msgType: newType};
{% endhighlight %}

You can see real life example, how to use this node in those tutorials:

- [Transform incoming telemetry](/docs/user-guide/rule-engine-2-0/tutorials/transform-incoming-telemetry/)
- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial#add-transform-script-node)

## To Email Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-to-email.png)

Transforms message to Email Message by populating email fields using values derived from Message metadata.
Set 'SEND_EMAIL' output Message type that can be accepted later by [**Send Email Node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#send-email-node).
All email fields can be configured to use values from metadata. Supports sending of HTML pages and images.
  
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-to-email-config.png)

For example incoming message has **deviceName** field in metadata and email body should contain its value.

In this case value of **deviceName** can be referenced as <code>${deviceName}</code> like in the following example:

 ```
 Device ${deviceName} has high temperature
 ```
 
<br>

If you like to send html or image you have to choose **HTML** or **Dynamic** in field **Mail Body type**. See [send HTML or image inside email](/docs/user-guide/rule-engine-2-0/tutorials/send-email-html)
examples.

Additionally, this node can prepare email attachments if incoming message metadata contains **attachments** field with reference to files stored in DataBase.
**NOTE**: This is part of [File Storage](/docs/{{docsPrefix}}user-guide/file-storage/) feature supported by [ThingsBoard Professional Edition](/products/thingsboard-pe/).

<br>

You can see the real life example, where this node is used, in the next tutorial:

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)
- [Send HTML or image inside email](/docs/user-guide/rule-engine-2-0/tutorials/send-email-html)

