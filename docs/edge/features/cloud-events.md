---
layout: docwithnav-edge
title: Cloud Events
description: Cloud Events
cloudEvents:
    0:
        image: /images/edge/cloud-events.png
---

**Cloud Events** page shows events that ThingsBoard Edge pushes to the cloud.

{% include images-gallery.html imageCollection="cloudEvents" %}

Check **Status** column to know if an event has been pushed to the cloud.
There are two status types:
* **Deployed** - event has been already pushed to the ThingsBoard CE/PE server.
* **Pending** - event has been created on the ThingsBoard Edge, stored to the local database and will be pushed to cloud as soon as connection is restored.

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
* Attributes Request
* Rule Chain Metadata Request
* Relation Request
* Credentials Request

## Next steps

{% assign currentGuide = "CloudEvents" %}
{% assign docsPrefix = "edge/" %}
{% include templates/edge/guides-banner-edge.md %}
