---
layout: docwithnav
assignees:
- vparomskiy
title: Visualisation Types
description: Built in Visualisation Types in Trendz Analytics 
---

Trendz provide major visualization types required for analysing IoT datasets. 
This guide contains basic description how to use and configure them.

* TOC
{:toc}


Before we continue overview of available visualization we need to discuss important topic to understand how data resolved by Trendz:
## How Trendz resolve fields from different Business Entities
Let's assume that we have Smart Building solution. Our topology contains Buildings, Apartments and different meters Meters that are connected between each other using relations.
Here is how our topology will look like:

![image](/images/reference/pe-demo/smart-metering-model.png)


In fact, Trendz operates with this topology as with the flat table that has columns for all attributes/telemetry from all Devices/Assets in this topology.
Relation between entities used to join fields from different Business Entities.

**What it give us:** when we are using only 2 fields from this topology: 

- `building name` that belongs to the Building Asset
- `energy` telemetry, that belongs to the Energy Meter Device
- aggregation type `SUM`
- time range - last month


Trendz will find all available buildings in the ThingsBoard, then all Appartmetns for each Building and finally all Energy Meters that belongs to appartment.
After that, for all Energy Meters for each building, Trendz will load all energy telemetry for the last month and sum it. As the result we can see how many energy was consumed by each building.

It is not exact algorithm description and there are a lot optimizations performed in the background. But it allows to understand how much complexity handled inside Trendz, so you can focus on analytics but not on data fetching.



## Tables
There are 3 modifications of this visualization.

#### Simple Table
In this mode you drag-n-drop fields only to the **Columns** section. Each field represent a column in the table. 
 You can sort and filter rows, change columns order etc.  
 
Telemetry fields aggregation:
* If there is no **Date** field in column list - Trendz will apply aggregation function for the whole time range.

![image](/images/trendz/simple-table.png)
* If **Date** field present in column list - system will split time range into multiple time ranges and apply aggregation to each range separately. 

![image](/images/trendz/simple-table-with-date.png)

#### Table With Dynamic Columns
This table modification allows to show telemetry aggregation as additional columns instead os separate rows. 
For making it - add telemetry field into **Dynamic Value** section and Date field into **Dynamic Column** section with required date grouping.
 
![image](/images/trendz/table-dynamic-columns.png)
 
You can add any field (date/attribute) into **Dynamic Column** section to build required table. Here is an example when we want to show consumption for each building as separate column and floor represent a row. 

![image](/images/trendz/table-dynamic-building.png)


#### Table with Individual Time Range for Column
To see a bigger picture, sometimes is useful to compare different time ranges for the same entity. For example we want to know 
what is today consumption, yesterday and for the last month. In this case we add telemetry field into **Dynamic Value** section, enable and select **local date** for the field and leave 
**Dynamic Column** section empty. Note that we can add same telemetry field few times with different local date.

![image](/images/trendz/table-local-date.png)

## Bar/Line charts
In case of Bar and Line charts you have 3 configurable sections:
* **X-axis** - define what value will be used in the X-axis of the chart (horizontal axis). In most cases it will be Date field, 
but it can be any field from your Topology or event combination of field.
* **Y-axis** - define what value will be used in the Y-axis of the chart (vertical axis). You can drop few telemetry fields in this section with required aggregation.
* **Series** - split data into multiple groups using single (or multiple) field criteria

![image](/images/trendz/basic-line.png)

Another example show how to combine miltiple fields in 1 section. These concrete example show what was overall building 
energy consumption for different quarters split by day of week.

![image](/images/trendz/multiple-bar.png)

#### Compare time ranges
It is easy to compare dataset patterns with different time ranges using **Compare** dropdown. It is just a preset for X-axis and Series section.
You can always fine-tune configuration to build required view. Here is an example how to compare energy monthly energy consumption for few months 

![image](/images/trendz/compare-by-month.png)

## Pie charts
Configuration of the Pie Chart is the following:
* **Sector Value** section contains field that defines amount of something measurable
* **Sector Name** section defines how data is splitted into multiple groups

![image](/images/trendz/simple-pie.png)

## Scatter Plot
Scatter plot show dependency between few properties of your topology.

#### Compare 2 dimensions
In this case you only use **X-axis** and **Y-axis** sections and drop there fields of interest.
![image](/images/trendz/simple-scatter.png)

#### Compare Many dimensions
In case when more than 2 dimensions should be compared, we can group measurements by multiple fields and apply different color to each group. 
Here is an example how it can be used on the same dataset - we compare heat and energy consumption, but apply different color for each floor of each building.
Is the result, we see that first and third floor of Retroville are most energy efficient and first floor in Astarta is less efficient.

![image](/images/trendz/complex-scatter.png)

## Heat Map
Heatmap is one of the easiest why to describe repeatable patterns and find outliers. It is similar to table, but cells of the table highlited with different colors depends on value.
* **X axis** - fields define table columns (horizontal axis)
* **Y axis** - fields define table rows (vertical axis)
* **Value** - fields define cell value

There are few predefined templates available for heat map:
* Hour VS Day of Week
* Minute VS Hour
* Day Vs Month
* Hor VS Day of Month

However you can always use your configuration that will match your own scenario the best.

On this example we can see pattern of weekly energy consumption. And now whe know, on what day and and time most energy is consumed.

![image](/images/trendz/heat-week-pattern.png) 


And here is another example that shows
* Each apartment in the building as separate row. 
* Each column represent a month of the year.
* Total Energy consumption as cell value
 
Now it is easy to identify outliers and their dynamic. 

![image](/images/trendz/complex-heatmap.png) 

## Customize labels and units
You can change axes labels and units if the field configuration by clicking on the field 

![image](/images/trendz/lable-unit.png) 
