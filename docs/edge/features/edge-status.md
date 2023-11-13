---
layout: docwithnav-edge
title: Edge Information page
description: Edge Information page
edgeInfo:
    0:
        image: /images/edge/edge-status.png
---

**Edge Info** page introduced to provide user information regarding basic edge configuration and ThingsBoard CE server information (URL and server version): 
* Name, ID, Type, Routing Key
* Connection status with the cloud: **Connected / Disconnected**
* Last time connected to/disconnected from cloud

{% include images-gallery.html imageCollection="edgeInfo" %}

## Next steps

{% assign currentGuide = "EdgeStatus" %}
{% assign docsPrefix = "edge/" %}
{% include templates/edge/guides-banner-edge.md %}
