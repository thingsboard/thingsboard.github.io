Transformation nodes are used for changing incoming Message fields like Originator, Message Type, Payload and Metadata.

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

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-change-originator.png)

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

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-change-originator-config.png)

If multiple Related Entities are found, **_only the first Entity is used_** as new originator, other entities are discarded.

**Failure** chain is used if no Related Entity / Customer / Tenant was found, otherwise - **Success** chain.

Outbound Message will have new originator Id.

## Copy key-value pairs

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/copy-key-value-pairs-node.png)

**Copies key-value pairs from message to message metadata or vice-versa.**

Copies key-value pairs from the message to message metadata, or vice-versa, according to the configured direction and keys. Regular expressions can be used to define which keys- value pairs to copy. Any configured key not found in the source will be ignored.

Output connections: `Success`, `Failure`.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/copy-key-value-pairs-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/copy-key-value-pairs-node-2-pe.png"></object>
{% endif %}

## Deduplication

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/deduplication-node.png)

**Deduplicate messages within the same Originator entity for a configurable period based on a specified deduplication strategy.** 

Deduplication strategies:
- FIRST - return first message that arrived during deduplication period.
- LAST - return last message that arrived during deduplication period.
- ALL - return all messages as a single JSON array message. Where each element represents object with msg and metadata inner properties.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/deduplication-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/deduplication-node-2-pe.png"></object>
{% endif %}

## Delete key-value pairs

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/delete-key-value-pairs-node.png)

**Deletes key-value pairs from message or message metadata.**

Deletes key-value pairs from the message or message metadata according to the configured keys and/or regular expressions.

Output connections: `Success`, `Failure`.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/delete-key-value-pairs-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/delete-key-value-pairs-node-2-pe.png"></object>
{% endif %}

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
## Duplicate to group

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/transformation-duplicate-to-group.png)

Duplicates message to all entities belonging to specific [Entity Group](/docs/{{peDocsPrefix}}user-guide/groups/).

Entities are fetched from Entity Group detected according to the configuration.

Entity Group can be specified directly or can be message originator entity itself.

For each entity from group new message is created with entity as originator and message parameters copied from original message.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/transformation-duplicate-to-group-config.png)

- **Entity group is message originator** - if set, message originator will be considered as Entity Group used to fetch entities.
  In this case incoming message will be routed via **Failure** chain if message originator type is not Entity Group.
- **Target entity group** - specific target Entity Group used to fetch entities.

New messages will be duplicated to group entities and forwarded via **Success** chain if target Entity Group is detected successfully and contains at least one entity.
Otherwise original message will be forwarded via **Failure** chain.

## Duplicate to group by name

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/duplicate-to-group-by-name-node.png)

**Duplicates message to all entities belonging to resolved Entity group.**

Entities are fetched from entity group that is detected according to the configuration. When "search entity group on Tenant level only" is enabled, the search is restricted to the Tenant level only. If "consider originator as a group owner" is enabled and the originator is a Tenant or Customer, the search starts from the originator's level and goes up the hierarchy to the tenant level if the group isn't found. Otherwise, the search starts at the same level as the message originator's owner. Entity group is dynamically resolved based on it's name and type. For each entity from group new message is created with entity as originator and message parameters copied from original message.

Output connections: `Success`, `Failure`.

Configuration:
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/duplicate-to-group-by-name-node-2-pe.png"></object>

## Duplicate to related

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/transformation-duplicate-to-related.png)

Duplicates message to related entities fetched by relation query.

Related Entities found using configured relation direction and Relation Type.

For each found related entity new message is created with related entity as originator and message parameters copied from original message.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/transformation-duplicate-to-related-config.png)

- **Relations query** - query used to find new entities starting from incoming message originator.
  In ‘Relations query’ configuration Administrator can select required **Direction** and **relation depth level**. Also set of **Relation filters** can be configured with required Relation type and Entity Types.

New messages will be duplicated to found entities and forwarded via **Success** chain if at least one entity will be found using Relations Query.
Otherwise original message will be forwarded via **Failure** chain.

{% endif %}

## JSON path

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/json-path-node.png)

**Transforms incoming message body using JSONPath expression.**

JSONPath expression specifies a path to an element or a set of elements in a JSON structure.

Output connections: `Success`, `Failure`.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/json-path-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/json-path-node-2-pe.png"></object>
{% endif %}

## Rename keys

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/rename-keys-node.png)

**Renames message or message metadata keys.**

Renames keys in the message or message metadata according to the provided mapping. If key to rename doesn't exist in the specified source (message or message metadata) it will be ignored.

Output connections: `Success`, `Failure`.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/rename-keys-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/rename-keys-node-2-pe.png"></object>
{% endif %}

## Script

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-script.png)

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

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-script-config.png)

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

## Split array msg

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/split-array-msg-node.png)

**Split array message into several messages.**

Splits an array message into individual elements, with each element sent as a separate message. All outbound messages will have the same type and metadata as the original array message.

Output connections: `Success`, `Failure`.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/split-array-msg-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/split-array-msg-node-2-pe.png"></object>
{% endif %}

## To email

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-to-email.png)

Transforms message to Email Message by populating email fields using values derived from Message metadata.
Set 'SEND_EMAIL' output Message type that can be accepted later by [**Send Email Node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#send-email-node).
All email fields can be configured to use values from metadata. Supports sending of HTML pages and images.
  
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/transformation-nodes/transformation-to-email-config.png)

For example incoming message has **deviceName** field in metadata and email body should contain its value.

In this case value of **deviceName** can be referenced as <code>${deviceName}</code> like in the following example:

 ```
 Device ${deviceName} has high temperature
 ```
 
<br>

If you like to send html or image you have to choose **HTML** or **Dynamic** in field **Mail Body type**. See [send HTML or image inside email](/docs/user-guide/rule-engine-2-0/tutorials/send-email-html)
examples.

Additionally, this node can prepare email attachments if incoming message metadata contains **attachments** field with reference to files stored in DataBase.
> **Note** This is part of [File Storage](/docs/{{docsPrefix}}user-guide/file-storage/) feature supported by [ThingsBoard Professional Edition](/products/thingsboard-pe/).

<br>

You can see the real life example, where this node is used, in the next tutorial:

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)
- [Send HTML or image inside email](/docs/user-guide/rule-engine-2-0/tutorials/send-email-html)