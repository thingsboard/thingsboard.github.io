---
layout: docwithnav
title: Enrichment Nodes
description: Rule Engine 2.0 Enrichment Nodes

---

Enrichment Nodes are used to update meta-data of the incoming Message.

* TOC
{:toc}

##### Customer attributes

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes.png)

Node finds Customer of the Message Originator entity and adds Customers Attributes or Latest Telemetry value into Message Metadata. 

Administrator can configure the mapping between original attribute name and Metadata attribute name.

There is **Latest Telemetry** checkbox in the Node configuration. 
If this checkbox selected, Node will fetch Latest telemetry for configured keys. Otherwise, Node will fetch server scope attributes.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-attributes-config.png)

Outbound Message Metadata will contain configured attributes if they exist.
To access fetched attributes in other nodes you can use this template '<code>metadata.temperature</code>'

Following Message Originator types are allowed: **Customer**, **User**, **Asset**, **Device**.
 
If unsupported Originator type found, an error is thrown.

If Originator does not have assigned Customer Entity **Failure** chain is used, otherwise **Success** chain.

You can see the real life example, where this node is used, in the next tutorial:

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)

##### Device attributes

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes.png)

Node finds Related Device of the Message Originator entity using configured query and adds Attributes (client\shared\server scope) 
and Latest Telemetry value into Message Metadata.

Attributes are added into metadata with scope prefix:

- shared attribute -> <code>shared_</code>
- client attribute -> <code>cs_</code>
- server attribute -> <code>ss_</code>
- telemetry -> no prefix used 

For example, shared attribute 'version' will be added into Metadata with the name 'shared_version'. Client attributes will use 'cs_' prefix. 
Server attributes use 'ss_' prefix. Latest telemetry value added into Message Metadata as is, without prefix.

In 'Device relations query' configuration Administrator can select required **Direction** and **relation depth level**.
Also **Relation type** can be configured with required set of **Device types**.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-device-attributes-config.png)

If multiple Related Entities were found, **_only the first Entity is used_** for attributes enrichment, other entities will be discarded.

**Failure** chain is used if no Related Entity was found, otherwise - **Success** chain.

If attribute or telemetry was not found, it is not added into Message Metadata and still routed via **Success** chain.

Outbound Message Metadata will contain configured attributes only if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.temperature</code>'

**Note:** Since TB Version 2.3.1 the rule node has the ability to enable/disable reporting **Failure** if at least one selected key doesn't exist in the outbound message.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-orignator-and-device-attributes-tell-failure.png)

##### Originator attributes

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-attributes.png)

Add Message Originator Attributes (client\shared\server scope) and Latest Telemetry value into Message Metadata. 

Attributes are added into metadata with scope prefix:

- shared attribute -> <code>shared_</code>
- client attribute -> <code>cs_</code>
- server attribute -> <code>ss_</code>
- telemetry -> no prefix used 

For example, shared attribute 'version' will be added into Metadata with the name 'shared_version'. Client attributes will use 'cs_' prefix. 
Server attributes use 'ss_' prefix. Latest telemetry value added into Message Metadata as is, without prefix.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-attributes-config.png)

Outbound Message Metadata will contain configured attributes if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.cs_temperature</code>'

**Note:** Since TB Version 2.3.1 the rule node has the ability to enable/disable reporting **Failure** if at least one selected key doesn't exist in the outbound message.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-orignator-and-device-attributes-tell-failure.png)

You can see the real life example, where this node is used, in the following tutorials:

- [Transform telemetry using previous record](/docs/user-guide/rule-engine-2-0/tutorials/transform-telemetry-using-previous-record/)
- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)

##### Originator fields

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0.1</em></strong></td>
     </tr>
   </thead>
</table> 


![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields.png)

Node fetches fields values of the Message Originator entity and adds them into Message Metadata. 
Administrator can configure the mapping between field name and Metadata attribute name.
If specified field is not part of Message Originator entity fields it will be ignored.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-fields-config.png)

Following Message Originator types are allowed: **Tenant**, **Customer**, **User**, **Asset**, **Device**, **Alarm**, **Rule Chain**.

**Failure** chain is used If unsupported Originator type found, otherwise - **Success** chain.

If field value was not found, it is not added into Message Metadata and still routed via **Success** chain.

Outbound Message Metadata will contain configured attributes only if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.devType</code>'

##### Related attributes

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-related-attributes.png)

Node finds Related Entity of the Message Originator entity using configured query and adds Attributes or Latest Telemetry value into Message Metadata.
 
Administrator can configure the mapping between original attribute name and Metadata attribute name.

In 'Relations query' configuration Administrator can select required **Direction** and **relation depth level**. 
Also set of **Relation filters** can be configured with required Relation type and Entity Types.

There is **Latest Telemetry** checkbox in the Node configuration. If this checkbox selected, Node will fetch Latest telemetry for configured keys. 
Otherwise, Node will fetch server scope attributes.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-related-attributes-config.png)

If multiple Related Entities are found, **_only first Entity is used_** for attributes enrichment, other entities are discarded.

If no Related Entity found **Failure** chain is used, otherwise **Success** chain.

Outbound Message Metadata will contain configured attributes if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.tempo</code>'

You can see the real life example, where this node is used, in the next tutorial:

- [Reply to RPC Calls](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/#add-related-attributes-node)

##### Tenant attributes

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-attributes.png)

Node finds Tenant of the Message Originator entity and adds Tenant Attributes or Latest Telemetry value into Message Metadata. 

Administrator can configure the mapping between original attribute name and Metadata attribute name.

There is **Latest Telemetry** checkbox in the Node configuration. If this checkbox selected, Node will fetch Latest telemetry for configured keys. Otherwise, Node will fetch server scope attributes.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-attributes-config.png)

Outbound Message Metadata will contain configured attributes if they exist. To access fetched attributes in other nodes you can use this template '<code>metadata.tempo</code>'

Following Message Originator types are allowed: **Tenant**, **Customer**, **User**, **Asset**, **Device**, **Alarm**, **Rule Chain**.

If unsupported Originator type found, an error is thrown.

**Failure** chain is used if Originator does not have assigned Tenant Entity, otherwise - **Success** chain.

##### Originator telemetry

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry.png)

Adds Message Originator telemetry values from particular time range that was selected in node configuration to the Message Metadata. 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-config.png)

Telemetry values added to Message Metadata without prefix.

The rule node has three fetch modes:

 - FIRST: retrieves telemetry from the database that is closest to the beginning of the time range

 - LAST: retrieves telemetry from the database that is closest to the end of the time range

 - ALL: retrieves all telemetry from the database, which is in the specified time range.
 
![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-mode.png)

If selected fetch mode **FIRST** or **LAST**, Outbound Message Metadata would contain JSON elements(key/value)

Otherwise if the selected fetch mode **ALL**, telemetry would be fetched as an array.

<table  style="width: 60%">
   <thead>
     <tr>
	 <td><strong><em>Note:</em></strong></td>
     </tr>
   </thead>
   <tbody>
     <tr>
	<td>
	<p>The rule node can extract a limit size of records into array: 1000 records</p>
	</td>
     </tr>
   </tbody>
</table>

This array will contain JSON objects with the timestamp and value. 

<table  style="width: 60%">
   <thead>
     <tr>
	 <td><strong><em>Note:</em></strong></td>
     </tr>
   </thead>
   <tbody>
     <tr>
	<td>
	<p>End of the interval must always be less than the beginning of the interval.</p>
	</td>
     </tr>
   </tbody>
</table>

If selected checkbox: **Use metadata interval patterns**, rule node will use Start Interval and End Interval patterns from metadata.

Patterns units sets in the milliseconds since the UNIX epoch (January 1, 1970 00:00:00 UTC)

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-patterns.png)

 - If any pattern will be absent in the Message metadata, the outbound message will be routed via **failure** chain.
 
 - In addition, if any pattern will have invalid data type, the outbound message will be also routed via **failure** chain.

Outbound Message Metadata will contain configured telemetry fields if they exist and belong to the selected range.

If attribute or telemetry was not found, it is not added into Message Metadata and still routed via **Success** chain. 
 
To access fetched telemetry in other nodes you can use this template: <code>JSON.parse(metadata.temperature)</code>

**Note:** Since TB Version 2.3 the rule node has the ability to choose telemetry sampling order when selected Fetch mode: **ALL**.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-order-by.png)

You can see the real-life example, where this node is used, in the following tutorials:

- [Telemetry delta calculation](/docs/user-guide/rule-engine-2-0/tutorials/telemetry-delta-validation/)

##### Tenant details

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-details.png)

Rule Node Adds fields from Tenant details to the message body or metadata.

There is **Add selected details to the message metadata** checkbox in the Node configuration. If this checkbox selected, existing fields will be added to the message metadata instead of message data.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-tenant-details-config.png)

Selected details are added into metadata with prefix: **tenant_**. Outbound Message will contain configured details if they exist.

To access fetched details in other nodes you can use one of the following template: 

- <code>metadata.tenant_address</code>

- <code>msg.tenant_address</code>

**Failure** chain is used if Originator does not have assigned Tenant Entity, otherwise - **Success** chain.

##### Customer details

<table  style="width:12%">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.3.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-details.png)

Rule Node Adds fields from Customer details to the message body or metadata.

There is **Add selected details to the message metadata** checkbox in the Node configuration. If this checkbox selected, existing fields will be added to the message metadata instead of message data.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-customer-details-config.png)

Selected details are added into metadata with prefix: **customer_**. Outbound Message will contain configured details if they exist.

To access fetched details in other nodes you can use one of the following template: 

- <code>metadata.customer_email</code>

- <code>msg.customer_email</code>

Following Message Originator types are allowed: **Asset**, **Device**, **Entity View**.
  
If unsupported Originator type found, an error is thrown.
 
If Originator does not have assigned Customer Entity **Failure** chain is used, otherwise **Success** chain.