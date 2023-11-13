---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Grouping by category
description: Grouping and Aggregation data by category 
---

With Trendz you can group data based on different attributes of business entity. For example, in the Energy Metering scenario, you can group data by building, apartment, room, etc.
Any field defined in Business Entity model can be used to group data and filter data. It means that we can apply required telemetry aggregation for the whole group in rela-time.
You don't need to explicitly define aggregation rules and pre-compute value for different levels before analysis.

In this example we just add 2 fields - **Building name** and **Energy Consumption**. We do not have any aggregation rules in the Rule Engine. 
Trendz knows what Energy Meters are registered in each building, so energy meters divided into a separate groups for each building.

![image](/images/trendz/data-grouping-simple.png)

We see total consumption for the last year. Now let's group data by quarters - add **Date** field with **quarter** type:

![image](/images/trendz/data-grouping-quarter.png)

Finally, lets deep dive and see total consumption separated by room number - add **Room Number** attribute from **Apartment** Business Entity:

![image](/images/trendz/data-grouping-room.png)


## Next Steps

{% assign currentGuide = "GroupAndAggregateData" %}{% include templates/trndz-guides-banner.md %}