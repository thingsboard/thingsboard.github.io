---
layout: docwithnav
assignees:
- vparomskiy
title: View Settings
description: Trendz View Settings
---

* TOC
{:toc}

View Settings icon located in the bottom right corner of the View. There are multiple settings there that controls 
how visualisation created.

## Number of Decimal Points

The number of decimal places that are displayed can be customized for each visualization once it is critical. 
On the visualization open the Setting bar and set the number of decimal places, press Build Report


## Axis control

By default each timeseries field in **Y-axis** re-use separate axis. If you show 3 timeseries on chart - you will have 3 different Y-axis.

However if measured unit is the same for all fields - you can join them and show on single axis:

* Open View Settings
* Select **Enable single axis**

## Entities Root

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


## Topology Entities

Trendz create query plan for each view. For making it system collects all fields and entities that are used in the View. 
Then, using **Topology Graph**, system identified best query plan for this request by finding the shortest path between used Entities.

For Complex Topology shortest path is not always the best and you modify what entities included in the query plan:

* Open View Settings
* Select required **Topology Entities** that should be included into query plan
* Save and rebuild view
