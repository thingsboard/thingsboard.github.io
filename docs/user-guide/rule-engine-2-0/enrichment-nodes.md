---
layout: docwithnav
title: Enrichment Nodes
description: Rule Engine 2.0 Enrichment Nodes

---

Enrichment Nodes are used for adding additional data into incoming Message.

* TOC
{:toc}

##### Customer attributes
Node finds Customer of the Message Originator entity and adds Customers Attributes or Latest Telemetry value into Message Metadata. 

Administrator can configure the mapping between original attribute name and Metadata attribute name.

There is **Latest Telemetry** checkbox in the Node configuration. 
If this checkbox selected, Node will fetch Latest telemetry for configured keys. Otherwise, Node will fetch server scope attributes.

Outbound Message Metadata will contain configured attributes if they exist.
To access fetched attributes in other nodes you can use this template '<code>metadata.temperature</code>'

Following Message Originator types are allowed: 

- Customer
- User
- Asset
- Device
 
If unsupported Originator type found, an error is thrown.

If Originator does not have assigned Customer Entity **Failure** chain is used, otherwise **Success** chain.

**!!! TODO-RE - add link to tutorial with this node**
{: style="color:red" }

##### Device attributes

**!!! TODO-RE - add description**
{: style="color:red" }

##### Originator attributes
Add Message Originator Attributes (client\shared\server scope) and Latest Telemetry value into Message Metadata. 

Attributes are added into metadata with scope prefix:
- shared attribute -> <code>shared_</code>
- client attribute -> <code>cs_</code>
- server attribute -> <code>ss_</code>
- telemetry -> no prefix used 

For example, shared attribute 'version' will be added into Metadata with the name 'shared_version'. Client attributes will use 'cs_' prefix. 
Server attributes use 'ss_' prefix. Latest telemetry value added into Message Metadata as is, without prefix.

Outbound Message Metadata will contain configured attributes if they exist.

If attribute or telemetry was not found, it is not added into Message Metadata and still routed via **Success** chain. 

To access fetched attributes in other nodes you can use this template '<code>metadata.cs_temperature</code>'

**!!! TODO-RE - add link to tutorial with this node**
{: style="color:red" }

##### Related attributes
Node finds Related Entity of the Message Originator entity using configured query and adds Attributes or Latest Telemetry value into Message Metadata.
 
Administrator can configure the mapping between original attribute name and Metadata attribute name.

In relation query configuration Administrator can select required **Direction** and **relation depth level**. 
Also set of **Relation filters** can be configured with required Relation type and Entity Types.

If multiple Related Entities are found, **_only first Entity is used_** for attributes enrichment, other entities are discarded.

If no Related Entity found **Failure** chain is used, otherwise **Success** chain.

There is **Latest Telemetry** checkbox in the Node configuration. If this checkbox selected, Node will fetch Latest telemetry for configured keys. 
Otherwise, Node will fetch server scope attributes.

Outbound Message Metadata will contain configured attributes if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.temperature</code>'

**!!! TODO-RE - add link to tutorial with this node**
{: style="color:red" }

##### Tenant attributes
Node finds Tenant of the Message Originator entity and adds Tenant Attributes or Latest Telemetry value into Message Metadata. 

Administrator can configure the mapping between original attribute name and Metadata attribute name.

There is **Latest Telemetry** checkbox in the Node configuration. If this checkbox selected, Node will fetch Latest telemetry for configured keys. 
Otherwise, Node will fetch server scope attributes.

Outbound Message Metadata will contain configured attributes if they exist.

To access fetched attributes in other nodes you can use this template '<code>metadata.temperature</code>'

Following Message Originator types are allowed: 
- Tenant
- Customer
- User
- Asset
- Device
- Plugin
- Alarm
- Rule Chain

If unsupported Originator type found, an error is thrown.

If Originator does not have assigned Tenant Entity **Failure** chain is used, otherwise **Success** chain.

**!!! TODO-RE - add link to tutorial with this node**
{: style="color:red" }