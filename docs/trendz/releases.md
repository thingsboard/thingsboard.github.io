---
layout: docwithnav-trendz
title: Trendz Release Notes
description: ThingsBoard Trendz Analytics Release Notes

---

* TOC
{:toc}

## v1.8.0 (August, 2021)

**Improvements:**

 * Add persistent cache for states, simple and calculated fields
 * Add view report short term cache
 * Scheduled field cache refresh
 * Add native widget bundle for ThingsBoard
 * Change rendering engine for views that uses canvas
 * Add simplified REST API for 3rd party services
 * Add date click event for calendar view
 * Add row click event for tables
 * Add field changed event for switch config
 * Save state & calculated fields configuration
 * Improve query partitioning
 * Improve anomalies loading time
 * Add option for loading raw telemetry instead of partitioning
 * Add preview/edit links for views added on the dashboard
 * Add option for mark field as hidden in view
 

**Bug fixes:**

 * Table - fix total row when first field is not static
 * Clear duplicates when anomaly detection model cloned
 * Fix state duration percent calculation
 * Fix interval formatting issue on horizontal charts
 * Fix not valid JWT token storage
 * Fix deadlock in batch field calculation


## v1.7.0 (April, 2021)

**Improvements:**

 * Add automated anomaly detection for assets and devices
 * Switch from in-memory DB to PostgreSQL
 * Add configuration Import/Export to file
 * Configure default sort order for reports
 * Table widget - add fit columns options


**Bug fixes:**

 * Fix state overlapping issue
 * Fix duration formatting for states
 * Fix filtering for text fields


## v1.6.0 (January, 2021)

**Improvements:**

 * Support ThingsBoard Filtering API
 * Add Calendar heatmap widget
 * Configure Filter visibility
 * Support of row-click events in ThingsBoard dashboards
 * Access to rquest start/end time in calculated fields
 * Add support for Centos 8
 * Improve Fourier Transformation prediction model
 * Other performance improvements


**Bug fixes:**

 * Fix state duration rounding problems
 * Fix data duplication in reports
 * Fix data double loading
 * Fix label formatting for states and calculated fields

## v1.5.1 (September, 2020)

**Bug fixes:**

 * Fix total row calculation for tables
 * Validate filtering options
 * Fix query partitioning for duplicated intervals

## v1.5.0 (August, 2020)

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


## v1.4.1 (June, 2020)


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
 

## v1.4.0 (April, 2020)

**Improvements:**

 * Timeseries forecast
 * State fields
 * Cache and reuse data streams
 * Remove redundant points form analysis
 * Enable horizontal bars

**Bug fixes:**

 * Fix TB connection leaks
 * Fix subcustomer fetching
