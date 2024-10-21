---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Grouping and Aggregation data by time
description: Grouping and Aggregation data by time 
---

In most cases data is grouped by time interval - by hour, day, week, month, etc. You should use **Date** field from left panel
and drag and drop it the **X-axis** section.

Default function for Date aggregation is **RAW** - it means that user can control what is an aggregation interval using
**Group By** combobox near Time Range picker. System will take full range from Time Range picker and devide it 
into smaller intervals depending on selected value. Latter, selected aggregation function applied for each interval. 
Allowed values for **Group By** field are:
* Month
* Week
* Day
* Hour
* Minute 

![image](/images/trendz/date-raw-group.png)


You can have more control on date intervals by selecting other available Date aggregation options:
* RAW,
* MINUTE
* HOUR
* FULL_HOUR - '2020-03-01 23'
* DAY - day of the week
* DATE - day of the month
* FULL_DATE - '2020-03-01'
* START_OF_WEEK - 2020-03-01
* WEEK_OF_YEAR - numeric week of the year
* WEEK_OF_MONTH - numeric week of the month
* MONTH
* QUARTER
* YEAR
* YEARMONTH - '2020-Feb' 

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}
