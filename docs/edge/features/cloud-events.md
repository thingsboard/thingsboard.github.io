---
layout: docwithnav
title: Cloud Events
description: Cloud Events
cloudEvents:
    0:
        image: /images/edge/cloud-events.png
---

**Cloud Events** page shows events that ThingsBoard Edge pushes to the cloud.

{% include images-gallery.html imageCollection="cloudEvents" %}

You can check status of this event by **Status** column.
There are two status types:
* **Deployed** - event already pushed to the ThingsBoard CE/PE server.
* **Pending** - event is created on ThingsBoard Edge, stored to the local database and will be pushed to cloud as soon as connection is restored.

List of possible cloud actions:
* Added
* Deleted
* Updated
* Attributes Updated
* Attributes Deleted
* Timeseries Deleted
* Timeseries Updated
* RPC Call
* Credentials Updated
* Relation Add or Update
* Relation Deleted
* Relations Deleted
* Alarm Ack
* Alarm Clear
* Added to Entity Group **PE**
* Removed from Entity Group **PE**
* Attributes Request
* Rule Chain Metadata Request
* Relation Request
* Credentials Request
* Group Entities Request
* Permissions Request **PE**

## Next steps

{% include templates/edge/next-steps.md %}