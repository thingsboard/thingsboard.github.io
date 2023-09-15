---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Business Entities
description: Business Entities 
---

This guide describes how Trendz uses entities from ThingsBoard, like asset, device, relation, etc.

* TOC
{:toc}

## Business Entities Topology
Let's assume that we have a Smart Building solution. Our topology contains Buildings, Apartments and different Meters that are connected with each other using relations.
Here is how our topology will look like:

![image](https://img.thingsboard.io/reference/pe-demo/smart-metering-model.svg)


In fact, Trendz operates with this topology as with the flat table that has columns for all attributes/telemetry from all Devices/Assets in this topology.
The Relation between entities used to join fields from different Business Entities.

## How it works

Now let's check how Trendz resolves data from ThingsBoard using following report: we are using only 2 fields from Smart Building topology: 

- `building name` that belongs to the Building Asset
- `energy` telemetry, that belongs to the Energy Meter Device
- aggregation type `SUM`
- time range - last month


* Trendz will find all available buildings in the ThingsBoard. 
* Then all Apartments for each Building.
* Finally, all Energy Meters that belong to the apartment.
* After that, for all Energy Meters for each building, Trendz will load all energy telemetry for the last month 
* Trendz aggregates all loaded telemetry using `SUM` aggregation. 
* As a result we can see how much energy was consumed by each building.

It is not an exact algorithm description and there are a lot of optimizations performed in the background. But it allows to understand how much complexity handled inside Trendz, so you can focus on analytics but not on data fetching.

## Aggregate telemetry and groups
The Next important step is to define how data should be aggregated. Here are supported aggregation types:
* AVG
* SUM
* MIN
* MAX
* LATEST
* COUNT
* UNIQ

For changing aggregation type - just click on the field and select required value.
![image](https://img.thingsboard.io/trendz/field-aggregation.png)


## Work with pulse output telemetry
Water meter is a good example of a device with pulse output - telemetry value always growing and during analysis, we want to convert it into delta values.
Here is an example chart for such telemetry:

![image](https://img.thingsboard.io/trendz/pulse-before.png)

Let's apply **DELTA** aggregation for this field and see how our data will look like:

![image](https://img.thingsboard.io/trendz/pulse-after.png)

Trendz automatically computes delta for this field for defined time ranges with required granularity.
In case when **DELTA** aggregation applied for multiple devices - Trendz will apply **SUM** aggregation to the aggregate group - as the result, we can see total consumption on different levels (city, building, etc.)
