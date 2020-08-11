---
layout: docwithnav
title: Trendz Release Notes
description: ThingsBoard Trendz Analytics Release Notes

---

* TOC
{:toc}

## v1.5.0

**Improvements:**

 * Add White-Labeling options
 * Support of built-in and custom Themes for visualizations 
 * Configurable palette colors for charts and heatmaps
 * Configurable font size
 * Individual decimal points for each field
 * Configurable visualization toolbar
 * Show/Hide Total column for tables
 * Change legend position
 * Configurable stroke types for charts
 * Widget Bundle: take time from ThingsBoard dashboard 
 * Widget Bundle: support multi-value filters via ThingsBoard aliases 
 * Configurable axis position and labels

**Bug fixes:**

 * Fix for timezone precessing 
 * Remove redundant scroll for embedded visualizations
 * Fix for empty heatmap/bar chart with single series
 * Fix for topology rediscovery process
 * Fix sorting of date fields


## v1.4.1


**Improvements:**

 * ThingsBoard v3.x support
 * Apply decimal points for visualizations
 * Change order of fields loading
 * Remove empty series from visualization
 * Reuse saved date grouping
 * User User API for entity fetching
 * Fill gaps in loaded data
 * Add Label field into topology


**Bug fixes:**

 * Fix infinit canceled tasks
 * Clear removed relations after topology rediscovery
 * ThingsBoard public user authentication
 * Not valid Count aggregation for streams
 * Fix bar height detection
 

## v1.4.0

**Improvements:**

 * Timeseries forecast
 * State fields
 * Cache and reuse data streams
 * Remove redundant points form analysis
 * Enable horizontal bars

**Bug fixes:**

 * Fix TB connection leaks
 * Fix subcustomer fetching