---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: View Settings
description: Trendz View Settings
---

* TOC
{:toc}

View Settings icon located in the bottom right corner of the View. There are multiple settings there that controls 
how visualisation created.

## General Settings
##### Title 
Set title and title font size for View
##### Hide Legend
Show or Hide Legend for Views that have it
##### Legend position
Control where legend located. Possible options:

* top
* right
* bottom
* left

##### Dashed Line
For line and bar charts you enabled or disable dashed lines.

##### Stroke Type 
For line and bar charts can select stroke type that used for drawing lines. Possible options:

* smooth
* straight
* stepline

##### Horizontal Bar
For bar charts you can select horizontal or vertical bars.

##### Stacked Bar
Show the composition and comparison of several variables, relative or absolute, over a period of time, appearing as a series of bars stacked on top of each other.

##### Show Labels
Shows values in charts.

##### Show timeline
Add a timeline at the bottom of the chart for quick selection of time periods (zoom).

##### Use single Y-axis

By default each timeseries field in **Y-axis** re-use separate axis. If you show 3 timeseries on chart - you will have 3 different Y-axis.

However if measured unit is the same for all fields - you can join them and show on single axis:

* Open View Settings
* Select **Enable single axis**

##### Hide X-axis label
Show or Hide X-axis label for View. It cna be usefull for scenarios where Category located on X-axis and label not required.

##### X axis position
X axis can be drawn on top of the chart or bottom. This config useful for big heatmaps with scrolls.

##### Remove empty series
When multiple entities are used for visualization and some of them do have telemetry and others don't it may be useful to 
remove entities without telemetry from the view (chart/table/heatmap). For making it - enable empty series removing and system will not render them.

##### Enable filter auto refresh
Loading the list of elements for the selected filters in real time. By default, the actual list of these elements is loaded during the creation of the view (after pressing the "Build" buttons).

##### Sort Order
Define default sorting for Tables.

##### Manual Y axis range
Set the MIN and MAX values to display on the Y-axis

##### Manual X axis range
Set the MIN and MAX values to display on the X-axis.

##### Show toolbox (export and zoom)
Displays a toolbox in the upper right corner of the visualization that allows you to export and zoom in on a selection for some types of visualizations

##### Show total row
Show/Hide Total row for Tables.

##### Enable Export to CSV
Show/Hide export to CSV button for Tables

##### Palette Colors
If chart contains multiple lines/series system applies different colors for them. By select Palette Color, you can define what colors are used.

Note that you can also define specific color for each field individually in field configuration window. 

## Query params

##### Preview mode
The ability to load only part of the data from limited set of devices or assets to quickly see how the view will look.

##### Entities Root

Let's assume that we have 2 buildings and 2 sensors registered in the ThingsBoard and relations configured among them:

* Building A **Contains** Sensor_1
* Building B do not have any sensors
* Sensor_2 do not assigned to any building

We want to create a view that shows how many sensors are located in each building. In this case results depends on 
who is the root for calculation - **Building** or **Sensor**.

If **Building** is the root entity - we will see that **Building_A** has 1 sensor and **Building_B** has no sensors  
If **Sensor** is the root entity - we will see that **Sensor_1** installed in 1 building and **Sensor_2** do not installed in buildings

Trendz select Root Entity automatically during view calculation. However you can control what Entity selected as Root for the request:

* Open View Settings
* Select required **Entities Root** for the request
* Save and rebuild view  


##### Topology Entities

Trendz create query plan for each view. For making it system collects all fields and entities that are used in the View. 
Then, using **Topology Graph**, system identified best query plan for this request by finding the shortest path between used Entities.

For Complex Topology shortest path is not always the best and you modify what entities included in the query plan:

* Open View Settings
* Select required **Topology Entities** that should be included into query plan
* Save and rebuild view

## View Mode fields

##### Hide filters
Hide the **filter** field for full-screen view and for display on the dashboard.

##### Hide date picker
Hide the **date picker** field for full-screen view and for display on the dashboard.

##### Hide By Option
Hide the **by option** field for full-screen view and for display on the dashboard.

##### GET filter values from url
The ability to get filtering parameters for the ThingsBoard dashboard using the URL line (query parameters) of the browser.

##### SET filter values to url
The ability to set filtering parameters for the ThingsBoard dashboard using the URL line (query parameters) of the browser.

##### Hidden filters
Hide specific filters when displayed in the ThingsBoard dashboard

##### Row-click entity
An entity that will be passed on a click on a view element (table row, bar of chart, etc.) to the ThingsBoard alias. This is usually used to change filters of view in other widgets.
[**More details you can find here**](/docs/trendz/widget-actions/#configure-onrowclick-action)

## Colors

##### Annotations
Color Zones on the chart for ranges along the Y axis. [**More details you can find here**](/docs/trendz/visualizations-line/#color-zones) 

## Caching

##### Cache report
If the query plan is not changed will be return cached View Report without loading data from ThingsBoard.
[**More details you can find here**](/docs/trendz/cache-settings/)

##### Enable caching
In cases when data can be grouped by fixed intervals, like Hour or Date, will be load already computed\aggregated field value from cache instead of reloading data from ThingsBoard.
[**More details you can find here**](/docs/trendz/cache-settings/#metrics-long-term-cache)
