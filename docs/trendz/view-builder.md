---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Clear, Filter, Group and Aggregate data
description: How to customize aggregation, filter and clear dataset in Trendz Analytics 
---

This guide describes how to prepare your dataset for visualization

* TOC
{:toc}

During Data Analysis it is a common task to define how a big dataset should be aggregated. 
This task can be split into 2 phases - define groups that will be used during analysis and define aggregation function for groups.

## Define Groups for analysis
In this step, we want to define on what logical level we want to see our data. In the Energy Metering scenario, we can make analysis on different levels such as 
city, region, building, apartment or concrete energy meter. The good news is that Trendz provides this grouping automatically in real-time. 
You don't need to explicitly define aggregation rules and pre-compute value for different levels before analysis.

In this example we just add 2 fields - **Building name** and **Energy Consumption**. We do not have any aggregation rules in the Rule Engine. 
Trendz knows what Energy Meters are registered in each building, so energy meters divided into a separate groups for each building.

![image](/images/trendz/data-grouping-simple.png)

We see total consumption for the last year. Now let's group data by quarters - add **Date** field with **quarter** type:

![image](/images/trendz/data-grouping-quarter.png)

Finally lets deep dive and see total consumption separated by room number - add **Room Number** attribute from **Apartment** Business Entity:

![image](/images/trendz/data-grouping-room.png)


## Aggregate telemetry and groups
The Next important step is to define how data should be aggregated. Here are supported aggregation types:
* AVG
* SUM
* MIN
* MAX
* LATEST
* COUNT
* UNIQ
* DELTA - special case described later in this guide

For changing aggregation type - just click on the field and select required value.
![image](/images/trendz/field-aggregation.png)


## Work with pulse output telemetry
Water meter is a good example of a device with pulse output - telemetry value always growing and during analysis, we want to convert it into delta values.
Here is an example chart for such telemetry:
 
![image](/images/trendz/pulse-before.png)

Let's apply **DELTA** aggregation for this field and see how our data will look like:

![image](/images/trendz/pulse-after.png)

Trendz automatically computes delta for this field for defined time ranges with required granularity. 
In case when **DELTA** aggregation applied for multiple devices - Trendz will apply **SUM** aggregation to the aggregate group - as the result, we can see total consumption on different levels (city, building, etc.)

## Filter Data
To get better results during analysis it is required to filter data from noisy sources or we want to focus on a concrete subset of entities. 
Drag-n-drop fields that you want to filter on into **Filter** section and apply the required filter. 

You can apply filters even on fields that are not used for actual data visualization. For example, during energy consumption analysis, we want to filter out all 
empty apartments and focus on apartments located on the second and third floors. Here is how our config will look like:

![image](/images/trendz/filter-example.png)

You can filter by any field type (string, numeric, date, etc.). To change filter condition - click on the filter field and select the required option:

![image](/images/trendz/filter-dialog.png)


