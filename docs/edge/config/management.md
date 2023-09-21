---
layout: docwithnav-edge
title: Edge Management Overview
description: Edge Management Overview
---

![image](https://img.thingsboard.io/coming-soon.jpg)

### Synchronization architecture

ThingsBoard Edge and ThingsBoard CE/PE cloud are communicating over gRPC protocol.

Messages serialized using Protocol Buffers (ProtoBuf).

All messages that are pushed from ThingsBoard Edge to ThingsBoard CE/PE cloud are going to be stored in the local PostgreSQL table (**cloud_event table**) prior sending.
In this way ThingsBoard Edge is able to operate without connectivity to the cloud.
Once the connection established ThingsBoard Edge will push all messages in the local **cloud_event** table to the cloud and mark ones that are successfully transferred to the cloud.

All messages that are pushed from ThingsBoard CE/PE cloud to ThingsBoard Edge are going to be stored in the cloud PostgreSQL table (**edge_event table**) prior sending.
Once the connection established ThingsBoard CE/PE cloud will push all messages in the cloud **edge_event** table to the edge and mark ones that are successfully transferred to the edge.

User is able to see list of transferred messages from the cloud to edge using **Downlinks** tab of **Edge** entity.

![image](https://img.thingsboard.io/edge/sync/downlink-events.png)

##### Force synchronization procedure

In case of network outage, or some other communication problem ThingsBoard Edge could become out of sync from the cloud.
User is able to force synchronization process by clicking on the **Sync Edge** button:

![image](https://img.thingsboard.io/edge/sync/sync-button.png)

### Device management on edge

**Device** entity could be created directly on the edge and pushed to the cloud in case connection established.

In case Edge connected to ThingsBoard **CE** any tenant administrator user is able to create device entities on the edge.

In case Edge connected to ThingsBoard **PE** any user that has **DEVICE** write operation is able to create device entities on the edge.

Once device created on the edge this device is going to be pushed for the creation on the cloud.

If Edge connected to ThingsBoard **CE** a newly created device will be *'assigned'* to the edge automatically.

If Edge connected to ThingsBoard **PE** a newly created device:
- will be created on the cloud
- new device entity group will be created, with specific name template: **[Edge] ${NAME_OF_EDGE} All**.
- a newly created device will be added to group above
- group above will be *'assigned'* to the edge automatically.

### Entities management on cloud

At the moment ThingsBoard Edge is not able to create any entity locally, except **Device** entity.
To be able to use other entities on the edge, User must *'assign'* these entities to the edge prior usage.

User can *'assign'* specific entities to the edge using **Edge** entity card.

Once you'll assign any entity to specific edge this entity will be pushed to the edge event queue.
If connection between edge and cloud is active then assigned entity will be created on the edge instantly.
If at the moment edge not connected to the cloud then entity will be created once connection established.


#### Next Steps

{% assign currentGuide = "EdgeManagementOverview" %}
{% assign docsPrefix = "edge/" %}
{% include templates/edge/guides-banner-edge.md %}
