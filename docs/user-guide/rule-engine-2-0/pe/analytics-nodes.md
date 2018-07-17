---
layout: docwithnav
title: Analytics Nodes
description: Rule Engine 2.0 Analytics Nodes

---

{% assign feature = "PE Analytics Nodes" %}{% include templates/pe-feature-banner.md %}

Analytics Nodes that are specific to ThingsBoard PE. Used for analysis of streamed or persisted data.

* TOC
{:toc}

# Aggregate Latest Node

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-latest.png)

Periodically aggregates entities attributes or latest timeseries.
Performs aggregation of attributes or latest timeseries fetched from child entities with configurable period.
Generates 'POST_TELEMETRY_REQUEST' messages with aggregated values for each parent entity.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-latest-config.png)

Mapping Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-latest-mapping-config.png)

TBD-2.1

<br/>

# Aggregate Stream Node

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-stream.png)

Calculates MIN/MAX/AVG/SUM based on the incoming data.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-stream-config.png)

TBD-2.1

<br/>

# Alarms Count Node

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-alarms-count.png)

Periodically counts alarms for entities. Performs count of alarms for parent entities and child entities if specified with configurable period.
Generates 'POST_TELEMETRY_REQUEST' messages with alarm count values for each found entity.

Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-alarms-count-config.png)

Mapping Configuration:

![image](/images/user-guide/rule-engine-2-0/pe/nodes/analytics-alarms-count-mapping-config.png)

TBD-2.1

<br/>
