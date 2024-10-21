---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Aggregate telemetry and delta
description: Aggregate telemetry and delta
---

## Telemetry Aggregation

The Next important step is to define how data should be aggregated. Here are supported aggregation types:
* AVG
* SUM
* MIN
* MAX
* LATEST
* COUNT
* UNIQ

For changing aggregation type - just click on the field and select required value.

![image](/images/trendz/field-aggregation.png)

## Delta Aggregation

Water meter is a good example of a device with pulse output - telemetry value always growing and during analysis, we want to convert it into delta values.
Here is an example chart for such telemetry:

![image](/images/trendz/pulse-before.png)

Let's apply **DELTA** aggregation for this field and see how our data will look like:

![image](/images/trendz/pulse-after.png)

Trendz automatically computes delta for this field for defined time ranges with required granularity.
In case when **DELTA** aggregation applied for multiple devices - Trendz will apply **SUM** aggregation to the aggregate group - as the result, we can see total consumption on different levels (city, building, etc.)

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}
