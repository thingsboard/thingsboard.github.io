* TOC
{:toc}

## Overview

In this guide, we will study Chart widgets: their functionality, features, basic and advanced settings of the widgets and widgets' data keys.

Chart widgets allow displaying time series data using customizable line and bar charts. Moreover, you can use various pie charts to display the latest values.

## How to create a Chart widget

To add any of the chart widgets to your dashboards, you should:

{% include images-gallery.html imageCollection="charts-addwidget" showListImageTitles="true" preview="false" %}

## Chart widget types

Chart widgets are divided on Timeseries and Latest value widgets. Timeseries widgets are useful to visualize changes to time series data over time.
Latest values widgets are used when you need to see the latest values of the attributes or time series data for multiple entities.

### Timeseries widgets

Time series widgets visualize changes to time series data over time. How to set up the time window, learn [here](/docs/{{docsPrefix}}user-guide/dashboards/#time-window).

##### Bar Chart

Bar Chart widget displays changes to time series data over time. In the example the temperature for the last month is shown.

{% include images-gallery.html imageCollection="charts-bar" preview="false" %}

##### Line Chart

Line Chart widget displays changes to time series data over time. In the example the temperature and humidity readings are shown.

{% include images-gallery.html imageCollection="charts-line" preview="false" %}

##### State Chart

State Chart widget displays changes to the state of the entity over time. For example, on and off. Learn about advanced configuring of the State Chart widget [here].

{% include images-gallery.html imageCollection="charts-state" preview="false" %}

### Last values widgets

Latest values widgets visualize the latest values of the attributes or time series data for multiple entities. Latest values widgets mostly support numeric values only.

##### Radar

Radar widget displays the latest values of the attributes or time series data for multiple entities in a radar chart. Supports numeric values only.

In the example, widget is displaying the latest pressure time series data values of three devices.

{% include images-gallery.html imageCollection="charts-radar" preview="false" %}

##### Polar Area

Polar Area displays the latest values of the attributes or time series data for multiple entities in a polar area chart. Supports numeric values only.

In the example, widget is displaying the latest pressure time series data values of three devices.

{% include images-gallery.html imageCollection="charts-polar" preview="false" %}

##### Pie - Chart.js

Pie - Chart.js displays the latest values of the attributes or time series data for multiple entities in a pie chart. Supports numeric values only.

In the example, widget is displaying the latest temperature time series data values of three devices.

{% include images-gallery.html imageCollection="charts-piejs" preview="false" %}

##### Pie - Flot

Pie - Flot displays the latest values of the attributes or time series data for multiple entities in a pie chart. Supports numeric values only.

In the example, widget is displaying the latest pressure time series data values of three devices.

{% include images-gallery.html imageCollection="charts-pieflot" preview="false" %}

##### Doughnut

Doughnut widget displays the latest values of the attributes or times eries data for multiple entities in a doughnut chart. Supports numeric values only.

In the example, widget is displaying the latest humidity time series data values of three devices.

{% include images-gallery.html imageCollection="charts-doughnut" preview="false" %}

##### Bars

Bars widget displays the latest values of the attributes or time series data for multiple entities as separate bars.
The only latest values chart widget that allows using not only numeric values.

In the example, widget is displaying the latest pressure time series data values of three devices.

{% include images-gallery.html imageCollection="charts-bars" preview="false" %}

## Chart widget settings

### Basic widget settings 

Basic widget settings are responsible for widget's appearance and style: starting from the Title to Mobile settings.  
All of ThingsBoard widgets have the same basic settings, you can learn about configuring them [here](/docs/{{docsPrefix}}user-guide/dashboards/#basic-widget-settings).

### Advanced widget settings

Advanced widget settings vary for different widget types. Advanced settings are responsible for configuring the unique features of the widget. 

##### Time series Bar Chart

Time series Bar chart is useful for visualizing changes to time series data over time. For example, daily water consumption for the last month.

To enter widget edit mode and start adjusting its Advanced settings, first enter the dashboard edit mode. Then you should:

{% include images-gallery.html imageCollection="charts-bar-advanced" showListImageTitles="true" preview="false" %}

* Common Settings

* Comparison Settings

* Custom Legend Settings

##### Time series Line Chart

##### Time series State Chart

##### Latest values Pie - Flot

##### Latest values Doughnut

## Key settings

##### Basic key settings

##### Advanced key settings

link on https://thingsboard.io/docs/user-guide/ui/advanced-data-key-configuration/#2-charts

