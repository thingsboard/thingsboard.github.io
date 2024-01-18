---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Card with line chart
description: Card with line chart to show data trend
---

* TOC
{:toc}


Card with line chart widget allows visualizing the single important metric and compare the dynamics of it with the previous similar period, if necessary.

## Simple Card with line chart

For creating simple Card with line chart view:

* Drag and drop the field that you would like to monitor in the Value column;
* Select required aggregation type;
* Click “Build Report”.

![image](/images/trendz/card-with-line-simple.png)

## Comparison with the previous period

Comparison with the previous similar period allows us to compare the value and dynamics with the corresponding period. 
For example, if we have the amount of water consumed in the last 7 days, we can compare it with the amount of water consumed in the previous 7 days.

* Turn on **Enable comparison in the settings**.
* Click **Build Report**.

![image](/images/trendz/card-with-line-comparison.png)

The compared value will present the difference between these two figures in percentage. The chart will also show the dynamics together for both of these periods.


## Fast setting the visualization colors of the value difference

The comparison of two periods will be presented by default as a red number with a warning if the dynamics are negative, or as a green number without a warning if the dynamics are positive.

* To invert the color, enable or disable the **Reverse comparison colors** option in the settings.
* Click **Build Report**.

![image](/images/trendz/card-with-line-reverse-colors.png)

## Manual setting the visualization of the value difference
It is also possible to manually set the visualization of the value difference by specifying ranges and colors for normal, warning, and dangerous value ranges.

* Set the minimum and maximum values for the ranges in the field settings;
* Click **Build Report**.

Please note that in this case, the **Reverse comparison colors setting** will be ignored.

![image](/images/trendz/card-with-line-custom-colors.png)