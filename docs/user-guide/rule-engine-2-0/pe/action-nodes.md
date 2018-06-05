---
layout: docwithnav
title: Action Nodes
description: Rule Engine 2.0 PE Action Nodes

---

{% assign feature = "PE Action Nodes" %}{% include templates/pe-feature-banner.md %}

Action Nodes that are specific to ThingsBoard PE. Execute various actions based on incoming Message.

* TOC
{:toc}

# Add To Group Node

![image](/images/user-guide/rule-engine-2-0/pe/nodes/action-add-to-group.png)

Adds Message Originator Entity to [Entity Group](/docs/user-guide/groups/). 

Following Message Originator types are allowed: **Customer**, **Asset**, **Device**.

Finds target Entity Group by group name pattern and then adds Originator Entity to this group.
Will create new Entity Group if it doesn't exist and **Create new group if not exists** is set to true.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/action-add-to-group-config.png)

- **Group name pattern** - can be set direct group name or pattern can be used, that will be resolved to the real group name using Message metadata.
- **Create new group if not exists** - if checked will create new entity group if it doesn't exist.
- **Groups cache expiration time** - specifies maximum time interval is seconds allowed to store found entity group records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target entity group doesn't exist and **Create new group if not exists** is unchecked.

In other cases Message will be routed via **Success** chain. 

<br/>

# Remove From Group Node

![image](/images/user-guide/rule-engine-2-0/pe/nodes/action-remove-from-group.png)

Removes Message Originator Entity from [Entity Group](/docs/user-guide/groups/).

Following Message Originator types are allowed: **Customer**, **Asset**, **Device**.

Finds target Entity Group by group name pattern and then removes Originator Entity from this group.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/action-remove-from-group-config.png)

- **Group name pattern** - can be set direct group name or pattern can be used, that will be resolved to the real group name using Message metadata.
- **Groups cache expiration time** - specifies maximum time interval is seconds allowed to store found entity group records. 0 value means that records will never expire.

Message will be routed via **Failure** chain in the following cases:

- When Originator entity type is not supported.
- Target entity group doesn't exist.

In other cases Message will be routed via **Success** chain. 

<br/>

# Integration Downlink Node

![image](/images/user-guide/rule-engine-2-0/pe/nodes/action-integration-downlink.png)

Forwards Message to selected [Integration](/docs/user-guide/integrations/) as downlink message.
 
Message will be pushed to the selected integration downlink queue.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/action-integration-downlink-config.png)

- **Integration** - target Integration for downlink message processing.

**Failure** chain is used if Message push to Integration will fail, otherwise **Success** chain.

<br/>
