---
layout: docwithnav
title: Transformation Nodes
description: Rule Engine 2.0 Transformation Nodes

---

{% assign feature = "PE Transformation Nodes" %}{% include templates/pe-feature-banner.md %}

Transformation Nodes that are specific to ThingsBoard PE. Used for changing incoming Message fields like Originator, Message Type, Payload and Metadata.

* TOC
{:toc}

# Aggregation Node

![image](/images/user-guide/rule-engine-2-0/pe/nodes/transformation-aggregation.png)

Calculates MIN/MAX/AVG/SUM based on the incoming data.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/transformation-aggregation-config.png)

TBD-2.1