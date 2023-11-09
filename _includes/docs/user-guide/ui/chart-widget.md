* TOC
{:toc}

## Overview

This guide will study Chart widgets: their functionality, features, basic and advanced settings of the widgets, and widgets’ data keys.

Chart widgets allow you to display time series data with customizable line charts and bar charts. Moreover, you can use various pie charts to display the latest values.

## How to create a Chart widget

To add any chart widgets to your dashboards, you should:

{% include images-gallery.html imageCollection="charts-addwidget" showListImageTitles="true" %}

## Chart widget types

Chart widgets are divided into Timeseries and Latest value widgets. Timeseries widgets are useful for visualizing changes in time series data over time.
Latest values widgets are used when you need to see the latest attribute values or time series data for multiple entities.

### Timeseries widgets

Time series widgets visualize changes in time series data over time. Read [here](/docs/{{docsPrefix}}user-guide/dashboards/#time-window) how to set up the time window.

##### Bar Chart

[Bar Chart](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#timeseries-bar-chart) widget displays changes to time series data over time. The example shows the temperature readings.

{% include images-gallery.html imageCollection="charts-bar" %}

##### Line Chart

[Line Chart](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#timeseries-line-chart) widget displays changes to time series data over time. The example shows temperature and humidity readings.

{% include images-gallery.html imageCollection="charts-line" %}

##### State Chart

[State Chart](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#state-chart-1) widget displays changes to the state of the entity over time. 
For example, if a device on and off, its states and conditions.

{% include images-gallery.html imageCollection="charts-state" %}

### Last values widgets

Latest values widgets render the latest values of attributes or time series data for multiple entities. Latest values widgets mostly support numeric values.

##### Radar

Radar widget displays the latest attribute or time series data values for multiple entities in a radar chart. Supports numeric values only.

In the example, the widget displays the latest pressure time series data for three devices.

{% include images-gallery.html imageCollection="charts-radar" %}

##### Polar Area

Polar Area widget displays the latest attribute or time series data values for multiple entities in a polar area chart. Supports numeric values only.

In the example, the widget displays the latest pressure time series data for three devices.

{% include images-gallery.html imageCollection="charts-polar" %}

##### Pie - Chart.js

Pie - Chart.js widget displays the latest attribute or time series data values for multiple entities in a pie chart. Supports numeric values only.

In the example, the widget displays the latest temperature time series data values for three devices.

{% include images-gallery.html imageCollection="charts-piejs" %}

##### Pie - Flot

[Pie - Flot](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#latest-values-pie---flot) widget displays the latest attribute or time series data values for multiple entities in a pie chart. 
Supports numeric values only.

In the example, the widget displays the latest pressure time series data values for three devices.

{% include images-gallery.html imageCollection="charts-pieflot" %}

##### Doughnut

[Doughnut](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#latest-values-doughnut) widget displays the latest attribute or time series data values for multiple entities in a donut chart. 
Supports numeric values only.

In the example, the widget displays the latest humidity time series data values for three devices.

{% include images-gallery.html imageCollection="charts-doughnut" %}

##### Bars

Bars widget displays the latest values of the attributes or time series data for multiple entities as separate bars.
The only latest values chart widget that allows using not only numeric values.

In the example, widget is displaying the latest pressure time series data values for three devices.

{% include images-gallery.html imageCollection="charts-bars" %}

## Chart widget settings

### Basic widget settings 

Basic widget settings are responsible for the appearance and style of the widget: from the title style and legend configuration to the settings for mobile devices. 
All of ThingsBoard widgets have the same basic settings, you can learn how to customize them [here](/docs/{{docsPrefix}}user-guide/dashboards/#basic-widget-settings).

### Advanced widgets settings

Advanced widget settings vary for different widget types. Advanced settings are responsible for configuring the unique features of the specific widget.  
To enter the widget Edit mode and start configuring its Advanced settings, first enter the dashboard edit mode. Then, you should:

{% include images-gallery.html imageCollection="charts-bar-advanced" showListImageTitles="true" %}

#### Timeseries Bar Chart

##### 1. Common Settings

**1.1.** Stacking

Use this function if the data aggregation function **is not** set to None.
If the Stacking box checked, the bar will be split according to the values of the entities used.
If this box isn't checked, the widget will show you the sum of the used entity values. To see the values of all entities, you need to hover your mouse over the bar.

{% include images-gallery.html imageCollection="charts-bar-adv-stacking" showListImageTitles="true" %}

If your data is not aggregated, you can adjust **the Default bar width for non-aggregated data (milliseconds)** by changing the number. This action makes the bars of the chart wider.

**Bar alignment** is responsible for the placement of the bars on the Chart widget relative to the time point.

**Default line width for all thresholds**, **Shadow size**, **Font color and size** work for Timeseries Line Chart and State Chart widgets.

**Tooltip value format function, f(value)** is used when you want to manually customize the tooltip.
You can customize the values that will be displayed in the tooltip via [Settings](/docs/{{docsPrefix}}user-guide/dashboards/#5-other-settings) or 
[Advanced Data key configuration](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/#2-charts). 
Tooltip configuration via Settings is basic and applied to all entities at the same time. When configured in the Advanced Data key configuration,
it is applied only to the specific time series data, and the basic tooltip function will be overwritten by this configuration.

But, if you need something really special for your widget, the Tooltip value format function is for you.
Suppose you have temperature readings, and you'd like to see Celsius and Fahrenheit values on your widget, which will be displayed with two floating points.

{% include images-gallery.html imageCollection="bars-tooltipfunction" showListImageTitles="true" %}

**1.2.** Grid settings

You can change the appearance of the Chart grid: customize the color of the background, the grid frame and its ticks; change the width of the lines and turn off their visibility.

{% include images-gallery.html imageCollection="bars-grid" showListImageTitles="true" %}

**1.3.** Axis settings

{% include images-gallery.html imageCollection="bars-axis" showListImageTitles="true" %}

**1.4.** Ticks formatter function, f(value)

Let's say we have telemetry which takes values of very large numbers, especially when there is a special symbol near values.
However, we need to build a small graph (since we don't have a lot of free space on the dashboard).
Therefore, using the ticks-formatter function, we can convert the ticks values to a more compact form.

{% include images-gallery.html imageCollection="bars-ticksfun" showListImageTitles="true" %}

##### 2. Comparison Settings

Comparison settings allow you to compare the difference in values over a specific period of time. Works only in the History time window.

{% include images-gallery.html imageCollection="bars-comparison" showListImageTitles="true" %}

##### 3. Custom Legend Settings

Custom Legend Settings are for cases when you need to display data that cannot be displayed in the chart such as attributes or display specific time series only in the Chart legend.
For the example let's use active/inactive attributes that can not be displayed on a Chart, only in a Table widget.

{% include images-gallery.html imageCollection="bars-legend" showListImageTitles="true" %}

#### Timeseries Line Chart

Advanced settings for the _Timeseries Line Chart_ widget are the same as for Timeseries Bar Chart. You can learn about these settings [above](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#timeseries-bar-chart).

##### 1. Display smooth (curved) lines 

{% include images-gallery.html imageCollection="lines-smooth" showListImageTitles="true" %}

###### 2. Default line width for all thresholds

{% include images-gallery.html imageCollection="lines-thresholds" showListImageTitles="true" %}

#### State Chart

##### 1. Common Settings

**1.1.** Stacking

Stacking mode works in widgets where you need to see entity values.

**1.2.** Display smooth (curved) lines works only in Line Charts.

**1.3.** Hover individual points

When the box **Hover individual points** is checked, you won't see value points on the lines. 

**1.4.** Cumulative values in stacking mode

While stacking mode is on, you can check the box "Cumulative values" to enable your chart to display sum of all entity values.

**1.5. Tooltip value format function, f(value)** is used when you want to manually customize the tooltip.
You can customize the values that will be displayed in the tooltip via [Settings](/docs/{{docsPrefix}}user-guide/dashboards/#5-other-settings) or
[Advanced Data key configuration](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/#2-charts).
Tooltip configuration via Settings is basic and applied to all entities at the same time. When configured in the Advanced Data key configuration,
it is applied only to the specific time series data, and the basic tooltip function will be overwritten by this configuration.

In State Chart, you can configure entity states to be shown on a tooltip depending on entity values.

<summary>
<b>Let's use function to set the needed configuration:</b>
</summary>

{% highlight ruby %}
let celsiusValue = parseFloat(value).toFixed(2);
let farenheitValue = parseFloat(celsiusValue*1.8 + 32).toFixed(2);
return celsiusValue + ' °C (' + farenheitValue + ' °F)';
{% endhighlight %}

{% include images-gallery.html imageCollection="state-tooltipfunction" showListImageTitles="true" %}

**1.6. Grid settings**

Grid settings are the same as in [Timeseries Bar Chart](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#1-common-settings). 

**1.7. Axis settings**

Axis settings are the same as in [Timeseries Bar Chart](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#1-common-settings).

**1.8. Ticks formatter function**

{% include images-gallery.html imageCollection="state-ticksfun" showListImageTitles="true" %}

##### 2. Comparison Settings

{% include images-gallery.html imageCollection="state-comparison" showListImageTitles="true" %}

##### 3. Custom Legend Settings

Custom Legend Settings are the same as in [Timeseries Bar Chart](/docs/{{docsPrefix}}user-guide/ui/chart-widget/#3-custom-legend-settings).

#### Latest values Pie - Flot

##### 1. Radius

Sets the radius of the pie. If the value is between 0 and 1 (inclusive) then it will use that as a percentage of the available space (size of the container). 
Otherwise, it will use the value as a direct pixel length.

{% include images-gallery.html imageCollection="pieflot-radius" showListImageTitles="true" %}

##### 2. Inner radius

Sets the radius of the donut hole. If value is between 0 and 1 (inclusive) then it will use that as a percentage of the radius, otherwise it will use the value as a direct pixel length.

{% include images-gallery.html imageCollection="pieflot-innerradius" showListImageTitles="true" %}

##### 3. Enable pie animation

With the changing of entities values the Pie - Flot obviously moves, but these moves are rather sharp movements. Nevertheless, Pie animation makes these moves smoother and softer. 

{% include images-gallery.html imageCollection="pieflot-animation" showListImageTitles="true" %}

##### 4. Tilt

Percentage of tilt ranging from 0 and 1, where 1 has no change (fully vertical) and 0 is completely flat (fully horizontal, in which case nothing actually gets drawn).
The tilt value is now used when calculating the maximum radius of the pie in relation to the height of the container. 
This should prevent the pie from being smaller than it needed to in some cases, as well as reducing the amount of extra white space generated above and below the pie.

{% include images-gallery.html imageCollection="pieflot-tilt" showListImageTitles="true" %}

##### 5. Stroke

{% include images-gallery.html imageCollection="pieflot-stroke" showListImageTitles="true" %}

#### Latest values Doughnut

##### 1. Border

{% include images-gallery.html imageCollection="donut-border" showListImageTitles="true" %}

##### 2. Legend settings

{% include images-gallery.html imageCollection="donut-legend" showListImageTitles="true" %}

