---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Data Filtering
description: How to filter and clear dataset in Trendz Analytics 

date-filtering-example:
  0: 
    image: /images/trendz/date-filtering-1.png
  1:
    image: /images/trendz/date-filtering-2.png
---

* TOC
{:toc}

To get better results during analysis it is required to filter data from noisy sources or we want to focus on a concrete subset of entities. 
Drag-n-drop fields that you want to filter on into **Filter** section and apply the required filter. 

You can apply filters even on fields that are not used for actual data visualization. For example, during energy consumption analysis, we want to filter out all 
empty apartments and focus on apartments located on the second and third floors. Here is how our config will look like:

![image](/images/trendz/filter-example.png)


## Filter Options

You can filter by any field that is present in the ThingsBoard:
* Asset/Device Name 
* Asset/Device Label 
* Asset/Device Owner (Customer) 
* Attribute
* Telemetry field


## Filter types and conditions:

Filter support following field types:
* Numeric
* Text 
* Boolean
* Date 

To change filter condition - click on the filter field and select the required option:

![image](/images/trendz/filter-dialog.png)

## Filter by hierarchy (relation)

If you have relations configured between assets/device then you can filter by hierarchy. 

*Example:* You have Buildings and each building has relation to Apartments. If you need to focus on apartments only 
from 1 Building - you should drop Building name into **Filter** section and selected required building. As the result 
view will contains only apartments from selected building.

Same logic work if you want to filter asset/devices by customer that they belongs to.

## Filter by date

This feature allows the filtering of telemetry data based on specific date periods, providing greater control over how data is displayed. You can filter your telemetry data by:
* **Hour:** Filters data by the hour of the day (0-23).
* **Day:** Filters data by the day of the week (Mon-Sun).
* **Date:** Filters data by the day of the month (1-31).
* **Month:** Filters data by the month of the year (Jan-Dec).

*Example:* You want to analyze the energy consumption data of your meters, but only for weekdays (Monday to Friday), excluding weekends. Let`s create new table, add date field and energyConsumption telemetry to the Columns section. Then, drag-n-drop the Date field into the 
Filters section, open the date filter and select Day as the aggregation. After that choose only options from Monday to Friday. Click on the Build Report button, the view will show energyConsumption data for weekdays only, excluding weekends.

{% include images-gallery.html imageCollection="date-filtering-example" %}

## Next Steps

{% assign currentGuide = "Filtering" %}{% include templates/trndz-guides-banner.md %}
