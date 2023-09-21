---
layout: docwithnav-edge
title: Create Device on edge and provision to cloud
description: Create Device on edge and provision to cloud

---

![image](https://img.thingsboard.io/coming-soon.jpg)

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


### Next Steps

{% assign currentGuide = "CreateDeviceOnEdgeAndProvisionToCloud" %}
{% assign docsPrefix = "edge/" %}
{% include templates/edge/guides-banner-edge.md %}
