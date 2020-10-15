---
layout: docwithnav
title: Synchronization with ThingsBoard CE/PE (cloud)
description: Synchronization with ThingsBoard CE/PE (cloud)

---

### Sync architecture

### Entity Groups management

Tenant Administator is able to assign entity(ies) or entity group(s) to edge:
 * **Entity Group(s) of Users, Assets, Devices, Entity Views, Dashboards**. You may also create new entities in assigned groups.
 * **Rule chain**. By default, new edges are created with assigned **root** and **default** rule chain(s).
 * **Scheduler events**.

Edge's entity groups management can be accessed from [UI](/docs/user-guide/ui/edges/):  

![image](/images/thingsboard-edge/overview/cloud-management2.png)

Customer user is able to view entities/entity groups that are assigned to specific edge.

Tenant Administrator is able to **create a new device from ThingsBoard Edge UI**. In this case such device will be created in the cloud and located in device group with special name template: *[Edge] ${name} All*.


### Sync button

### Downlink events