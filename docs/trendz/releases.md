---
layout: docwithnav-trendz
title: Trendz Release Notes
description: ThingsBoard Trendz Analytics Release Notes

---

* TOC
{:toc}

## v1.11.2 (November, 2024)

**Improvements:**

* Configurable data gap for state fields
* Add manual calculation task repeat
* Extend calculation jobs configuration
* Add failed execution details page
* Add option to show selected date range and filters information in exported XLS/XLSX files

**Bug fixes:**

* Optimize export latency for large datasets
* Fix relative dashboard time-window and interval time ranges

## v1.11.1 (October, 2024)

**Improvements:**

* Add possibility to choose several entities in row click event
* Add advanced formatting for filters in table view
* Add quantile based classification method for heatmaps
* Add additional settings for pie chart labels
* Add time range strategy for calculation fields
* Add export to XLSX

**Bug fixes:**

* Fix export from views (order of rows, formatting strings that contains scientific notation)
* Fix filters in anomaly model settings
* Fix table dynamic columns sorting
* Fix showing units in views tooltips

## v1.11.0 (March, 2024)

**Improvements:**

* Persisted calculation fields management
* Improve calculation fields debug and monitoring instruments
* Implement scheduled tasks
* Implement reprocessing tasks
* Task executions management
* Add search for filter options
* Trendz configuration import/export - add anomaly models, tasks, calculations
* Subscribe to filter updates for Trendz views on the dashboard
* Update Trendz settings page layout

**Bug fixes:**

* Fix search speed in big topology graph
* Fix OOM in python engine

## v1.10.3-HF7 (January, 2024)

**Improvements:**

* Improve query planner based on relation graph
* Add transactional topology refresh
* Add load balancing option for data queries
* Improve calculated scripts error logging
* Re-use time zone from browser time window
* Optional multi-root items loading
* Apply selected sorting for exported data
* Add trend line for line charts
* Add pre-aggregation configuration for prediction models
* Add row click event for pie charts

**Bug fixes:**

* Fix tooltips and units in views
* Fix field load ordering process
* Fix heatmap export for multiple fields
* Fix time synchronization between ThingsBoard dashboard and Trendz view
* Fix Business Entities sorting after topology discovery
* Fix chart background color when exporting as image
* Fix view update in safari
* Fix trendz bundle update in widget library
* Fix duplicated bars on chart for predicted timeseries

## v1.10.3 (September, 2023)

**Improvements:**

* Add support of SQL datasources
* Add option to remove blank series form view
* Improve root selection during query planing
* Add support of new ThingsBoard widget bundle format (ThingBoard 3.6+)
* Improve predefined options to date picker
* Add user timezone to calculated field
* Topology validation during discovery

**Bug fixes:**

* Fix trend-line calculation for scatter plot
* Fix blank view during report generation
* Fix delta aggregation

## v1.10.2 (August, 2023)

**Improvements:**

* Add Python script support for calculated fields (Beta)
* Add Python script support for forecast models (Beta)
* Add support of multivariable prediction models
* Add new forecast models: Prophet, ARIMA, SARIMAX
* Add widget auto-refresh in rela-time on the ThingsBoard dashboard
* Add white labeling settings
* Add dark mode
* Manual set axis min/max ranges

**Bug fixes:**

* Fix discovery process for fields with special characters
* Fix blank Trendz widget on export to PDF
* Fix delta aggregation for calculated fields
* Fix Trendz bundle update process to the latest version

## v1.10.1 (May, 2023)

**Improvements:**
* Add the ability to schedule anomalies autodiscovery
* Add debug instruments for developing calculated fields
* Migrate simple calculated field computation into the backend JS engine
* Update widget bundle to ThingsBoard v3.5
* Add prediction support for calculated fields
* Case-insensitive search for view fields
* Add top-N limit for table, pie, and bar charts
* Add groupBy as the input parameter for a calculated field
* Add the ability to display separately the chart and table of the Anomaly View
* Anomaly calendar - add full range view mode
* Add unit into chart label and tooltip
* Add user details menu

**Bug fixes:**
* Clear cached storage on logout
* Fix responsive layout for calendar heatmap
* Fix background job authorization error
* Fix the model change for the Anomaly view
* Fix view title text size autoscaling
* Fix authentication by the token in URL
* Fix time formatting in exported data
* Fix the merging process in the chart options editor
* Fix date picker positioning for widgets

## v1.10.0 (February, 2023)

**Improvements:**
* New Trendz UI design
* Grouping visualizations into collections
* New Card template with sparkline and comparison 
* Add units into formatting function
* Configurable axis ranges

**Bug fixes:**

* Fix title editor
* Fix heatmap NaN error
* Fix cached report race condition in clustered setup
* Fix caching of non-timeseries fields

## v1.9.2-HF2 (December, 2022)

**Improvements:**
 * Add support of the latest ThingsBoard API version

**Bug fixes:**

 * Fix anomaly field fetching
 * Fix date field formatting inside tables
 * Fix Count aggregation in batch calculation fields
 * Fix direct view sharing on the dashboard
 * Fix formatting for duration percent fields
 * Fix cells color for a heatmap when range value is blank
 * Fix date formatting in CSV export

## v1.9.2 (November, 2022)

**Improvements:**

 * Add alarm report
 * Manual color ranges for heat maps
 * Manual color settings for the calendar
 * Add anomaly review widget for thingsbard
 * Add row click event for bar charts and heatmaps
 * Improve authentication for background tasks
 * Add scheduled task status in the views table
 * Add white labeling options for Trendz UI
 * Improve UI responsiveness for large topologies
 * Support for native data export in ThingsBoard dashboards
 

**Bug fixes:**

 * Resolve formatting issues in CSV data export
 * Fix sorting issues in the table view


## v1.9.1 (July, 2022)

**Improvements:**

 * Preview mode for large reports
 * Add linear regression for scatter plots
 * Use user timezone for scheduled tasks
 * Update native library for ThingsBoard 3.4+
 

**Bug fixes:**

 * Fix delta aggregation
 * Fix individual local dates for fields
 * Fix the horizontal bar zoom
 * Avoid report double loading
 * Fix scroll inside views
 * Fix date-time label formatting

## v1.9.0 (April, 2022)

**Improvements:**

 * Add configurable fill gaps strategy
 * Add view templates
 * Save computed metrics as telemetry in ThingsBoard
 * Support of Alarm fields for reporting
 * Support of Anomaly fields for reporting
 * Combine multiple fields in a pie chart 
 * Save state and calculated fields for reuse
 * Implement multi-root related items loading
 * Switch to the javascript engine for state and calculated fields
 * Improve time series prediction models
 * Support interval time window from ThingsBoard
 * Improve performance for large datasets
 * Update native library for ThingsBoard 3.3+
 * Autorefresh filter values inside reports
 * Update resources path to allow hosting of Trendz & Thingsboard on the same domain
 * Configurable tooltip type for bar/line charts
 * Collect measurements during report build
 * Host ThingsBoard widget library resources inside Trendz service

## v1.8.2 (December, 2021)

Security update for resolving [CVE-2021-44228](https://nvd.nist.gov/vuln/detail/CVE-2021-44228) vulnerability. 

 * Dependencies to log4j-core removed. 
 * Dependencies to log4j API version updated to version 2.15  

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
