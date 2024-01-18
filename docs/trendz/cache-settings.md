---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Cache settings
description: Trendz Cache settings 
---

* TOC
{:toc}

Trendz has many built-in optimization mechanisms for improving report generation time. Most of them work out of the box 
and do not require any configuration. But some of those mechanisms should be enabled explicitly by the administrator.

## Trendz cache levels

Trendz supports 2 cache levels - `View Report` cache and `Metrics long term cache`. To explain the difference between them 
we first need to understand how reports are generated in Trendz:

1. User creates View configuration, adds required fields, and press Build Report.
2. Trendz generates a query execution plan based on view configuration. Query plan contains fields load order and aggregation strategy.
3. System loads required items (devices\assets) based on the query plan and configured filters.
4. System loads field values for each item and aggregates them.
5. In the final step, View Report is generated and passed to UI for visualization.

Most of the time is spent on item loading and data loading (Step 3 & Step 4). By caching intermediate results on those steps we can increase system performance.

`View Report cache` - if the query plan is not changed we can return cached View Report without loading data from ThignsBoard.
`Metrics long term cache` - in cases when data can be grouped by fixed intervals, like Hour or Date, we can load already computed\aggregated field 
value from cache instead of reloading data from ThingsBoard. 

## Metrics long term cache

For enabling this type of cache - open view settings, navigate to **Caching settings** and enable checkbox **Enable caching**.

When cache is enabled - the system will store aggregated item field data in cache. It can be telemetry, state or calculated field.
If field value is already in cache - system will reuse it. If it is not there yet, system will load data directly from ThingsBoard and save it in the cache.

This cache does not connected to specific visualization and can be reused in case when the same field used in multiple views. 

#### Cache intervals

Trendz cache contains aggregated field data for specific time intervals. User can define what time interval used for data caching.

**Full Date** - telemetry data aggregated by day. We will have 1 value in cache for each day.
**Full Hour** - telemetry data aggregated by hour. We will have 1 value in cache for each hour.

What time unit to select depends on requirements, but in most cases it should be fine to aggregate by Day. 
The only option when Hour aggregation can be useful - final report has HOUR dimension. For example, it may be a weekly heatmap because it has 
HOUR field in X axis. 

#### Scheduled cache refresh

By default, the cache is initialized/updated only when the Build Report button is pressed. It may be critical when a heavy 
report is generated on a daily\weekly basis and the user loads it for the first time. In this case, there would be no values 
in cache yet, the system will load data directly from ThingsBoard and as a result - the user will wait few minutes while the report is ready.

We can trigger periodic cache refresh in the background. In this case, when report required we can be sure that all values already loaded 
in cache and user will not wait for raw report generation.

* Open View settings
* Navigate to **Caching** section
* Enable checkbox **Auto refresh**
* Select refresh interval. For example every day.
* Save changes

During cache refresh in the background, Trendz will make requests to the ThingsBoard. All such requests should be authenticated and signed with JWT token.
For enabling such authentication, administrator should define login\password pair in Trendz configuration file - `ADMIN_LOGIN` and `ADMIN_PASSWORD`. 
Without this step scheduled cache refresh would not work and cache would be refreshed only when user request report from the UI or Rest API.

#### Clear cache

You can clear long term cache if required. It may be useful if you re-import or change historical data in ThingsBoard. 

* Click on System settings icon in bottom left corner
* Open Settings
* Press **Clear cache** button in **Caching** section 

## View Report cache

In some cases, we can reuse the already computed View Report instead of computing it from scratch. This feature is helpful 
when a view is added on the dashboard with multiple states and users actively navigate between them. Each time when the 
state opened - UI will request View Report from the server

Here are conditions that we should check before taking cached Report:

* Query plan not changed.
* Time range not changed.
* Existing View Report not expired.
 
For enabling this type of cache:

* Enable it in system settings - `cache.report.enabled` - by default it is enabled.
* In View Settings -> Caching -> set checkbox **Cache Report** - by default it is enabled.