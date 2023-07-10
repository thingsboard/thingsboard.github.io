---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Save telemetry to ThingsBoard
description: Save telemetry to ThingsBoard 
---

* TOC
{:toc}

Sometimes you can face to situation, where you need to do some complicated action on the data using different features 
of Trendz and ThingsBoard at the same time. You understand you need to provide Trendz result data to ThingsBoard 
for different purposes - make alert rules to data derived from particular calculations or provide the data to the rule chain. 
After that, you notice that you can share data from Thingsboard, but not vice versa. 
To solve this problem we have made a **Save Telemetry To TB** feature for each view configuration that you can create (table, line chart, etc).

The **Save Telemetry To TB** feature provides the ability to make and save (to the same item) a new telemetry that is made 
by a calculation field that is derived from any telemetry field that you want. It is a scheduled action that will be launched every chosen time unit to keep actual values during the present time.

## Configuration steps:
* Create a view configuration (usually a table).
* Add a Date field to the Columns with the next types of date aggregation: **FULL_HOUR** or **FULL_DATE**.
* Add item name field of needed business entity - for example, if you have lamps that provide telemetry “light” you need to add the “lamps” business entity field (drop list on the left side of the screen).
* In the view config settings (right side of the screen) choose the **View Mode Field** menu, select `Row Click Entity` and choose the needed business entity - for example, lamp.
* Add Batched Calculated Field to the Columns and write a script that defines the necessary data for your business entity - for example, lamp. You can add a lot of these fields. Notice that you must use only one same Business Entity (for example, lamp). Usual calculation fields (not batched) are forbidden.
* Also, you must name fields by custom names and select the needed aggregation. Each name of each calculation field must be unique - otherwise, there will be collisions and data will rewrite each other.
* In the view config settings (right side of the screen) choose `TB calculated telemetry save`, choose how often the task must be launched by **Every** and **Time Unit** fields and switch on the checkbox.
* Press the **Save changes** Button to save the view configuration.

## Review historical jobs
In view settings page where scheduling was configured you can press `Show History` button will appear in the **TB calculated telemetry save** menu and you can check when the task was performed, what was the duration of the task and their status.

## Important notes

* You can add any telemetry/attribute field just to see the data - they will be ignored for saving to TB.
* Only Batched Calculation Fields will be used.
* Usual calculation fields (not batched) are forbidden.
* Use only one same Business Entity.
* The new telemetry key would have name: `Trendz_[field aggreagtion]_[field name]`
* Used Date field aggregation will define how often the data will be represented on the timeline (each hour/each day).
