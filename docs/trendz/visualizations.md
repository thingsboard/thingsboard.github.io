---
layout: docwithnav
assignees:
- vparomskiy
title: Visualisation Types
description: Built in Visualisation Types in Trendz Analytics 
---

Trendz provides major visualization types required for analyzing IoT datasets. 
This guide contains a basic description of how to use and configure them.

* TOC
{:toc}


Before we continue overview of available visualization we need to discuss important topic to understand how data resolved by Trendz:
## How Trendz resolve fields from different Business Entities
Let's assume that we have a Smart Building solution. Our topology contains Buildings, Apartments and different meters Meters that are connected with each other using relations.
Here is how our topology will look like:

![image](/images/reference/pe-demo/smart-metering-model.png)


In fact, Trendz operates with this topology as with the flat table that has columns for all attributes/telemetry from all Devices/Assets in this topology.
The Relation between entities used to join fields from different Business Entities.

**What it gives us:** when we are using only 2 fields from this topology: 

- `building name` that belongs to the Building Asset
- `energy` telemetry, that belongs to the Energy Meter Device
- aggregation type `SUM`
- time range - last month


Trendz will find all available buildings in the ThingsBoard, then all Apartments for each Building and finally all Energy Meters that belong to the apartment.
After that, for all Energy Meters for each building, Trendz will load all energy telemetry for the last month and sum it. As a result we can see how much energy was consumed by each building.

It is not an exact algorithm description and there are a lot of optimizations performed in the background. But it allows to understand how much complexity handled inside Trendz, so you can focus on analytics but not on data fetching.



## Tables
There are 3 modifications of this visualization.

#### Simple Table
In this mode, you drag-n-drop fields only to the **Columns** section. Each field represents a column in the table. 
 You can sort and filter rows, change columns order, etc.  
 
Telemetry fields aggregation:
* If there is no **Date** field in column list - Trendz will apply aggregation function for the whole time range.

![image](/images/trendz/simple-table.png)
* If **Date** field present in the column list - system will split time range into multiple time ranges and apply aggregation to each range separately. 

![image](/images/trendz/simple-table-with-date.png)

#### Table With Dynamic Columns
This table modification allows showing telemetry aggregation as additional columns instead os separate rows. 
For making it - add the telemetry field into **Dynamic Value** section and Date field into **Dynamic Column** section with required date grouping.
 
![image](/images/trendz/table-dynamic-columns.png)
 
You can add any field (date/attribute) into the **Dynamic Column** section to build required table. Here is an example when we want to show consumption for each building as a separate column and floor represent a row. 

![image](/images/trendz/table-dynamic-building.png)


#### Table with Individual Time Range for Column
To see a bigger picture sometimes is useful to compare different time ranges for the same entity. For example, we want to know 
what is today consumption, yesterday and for the last month. In this case, we add the telemetry field into **Dynamic Value** section, enable and select **local date** for the field and leave 
**Dynamic Column** section empty. Note that we can add same telemetry field few times with different local dates.

![image](/images/trendz/table-local-date.png)

## Bar/Line charts
In case of Bar and Line charts you have 3 configurable sections:
* **X-axis** - define what value will be used in the X-axis of the chart (horizontal axis). In most cases it will be Date field, 
but it can be any field from your Topology or event combination of field.
* **Y-axis** - define what value will be used in the Y-axis of the chart (vertical axis). You can drop few telemetry fields in this section with required aggregation.
* **Series** - split data into multiple groups using single (or multiple) field criteria

![image](/images/trendz/basic-line.png)

Another example shows how to combine multiple fields in 1 section. This concrete example show what was overall building 
energy consumption for different quarters split by day of the week.

![image](/images/trendz/multiple-bar.png)

#### Compare time ranges
It is easy to compare dataset patterns with different time ranges using **Compare** dropdown. It is just a preset for X-axis and Series section.
You can always fine-tune configuration to build required view. Here is an example how to compare energy monthly energy consumption for few months 

![image](/images/trendz/compare-by-month.png)

## Pie charts
Configuration of the Pie Chart is the following:
* **Sector Value** section contains field that defines amount of something measurable
* **Sector Name** section defines how data is split into multiple groups

![image](/images/trendz/simple-pie.png)

## Scatter Plot
Scatter plot show dependency between few properties of your topology.

#### Compare 2 dimensions
In this case you only use **X-axis** and **Y-axis** sections and drop there fields of interest.
![image](/images/trendz/simple-scatter.png)

#### Compare Many dimensions
In case when more than 2 dimensions should be compared, we can group measurements by multiple fields and apply a different colors to each group. 
Here is an example of how it can be used on the same dataset - we compare heat and energy consumption, but apply different color for each floor of each building.
As a result, we see that the first and third floors of Retroville are most energy-efficient and the first floor in Astarta is less efficient.

![image](/images/trendz/complex-scatter.png)

## Heat Map
Heatmap is one of the easiest way to describe repeatable patterns and find outliers. It is similar to the table, but the cells of the table highlighted with different colors depend on value.
* **X axis** - fields define table columns (horizontal axis)
* **Y axis** - fields define table rows (vertical axis)
* **Value** - fields define cell value

There are few predefined templates available for heat map:
* Hour VS Day of Week
* Minute VS Hour
* Day Vs Month
* Hor VS Day of Month

However, you can always use your configuration that will match your scenario the best.

In this example, we can see the pattern of weekly energy consumption. And now we know, on what day and time most energy is consumed.

![image](/images/trendz/heat-week-pattern.png) 


And here is another example that shows
* Each apartment in the building as a separate row. 
* Each column represents a month of the year.
* Total Energy consumption as cell value
 
Now it is easy to identify outliers and their dynamic. 

![image](/images/trendz/complex-heatmap.png) 

## Customize labels and units
You can change axes labels and units if the field configuration by clicking on the field 

![image](/images/trendz/lable-unit.png) 
