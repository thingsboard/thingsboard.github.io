* TOC
{:toc}

## Introduction

Advanced data key configuration is responsible for the visibility, style, and appearance of a specific data key column or line on a chart on the widget.

Alarms table widget, "Tables", "Entity widgets", and "Entity admin widget" bundles have the [same advanced data key configuration](#advanced-data-key-configuration).

"Charts" widget bundle has its [own unique advanced data key configuration](#advanced-data-key-configuration-for-charts-widget-bundle).

All other widget bundles have only [basic data key configuration](/docs/{{docsPrefix}}user-guide/widgets/#data-keys).

<br>
To enter a data key configuration, you should click the pencil icon on the specific data key that you'd like to adjust.

{% if docsPrefix == null %}
![image](/images/user-guide/widgets/advanced-data-key/enter-data-key-configuration-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/widgets/advanced-data-key/enter-data-key-configuration-pe.png)
{% endif %}

## Advanced data key configuration

As we know, tру "Alarms table" widget, “Tables”, “Entity widgets”, and “Entity admin widget” bundles have the same advanced data key configuration.
Let's go through the advanced data key configuration for these widgets using the "Entity table" widget from the "Tables" bundle as an example.

Please follow these steps to start the advanced configuration of the key data.

{% include images-gallery.html imageCollection="entity-table-example" showListImageTitles="true" %}

### Custom header title

By default, the column name is the same as the key name. The _custom header title_ allows you to change the column caption to whatever you prefer.

{% include images-gallery.html imageCollection="custom-header-title" %}

### Column width (px or %)

The _"Column width"_ function allows you to adjust the width of the column in pixels or percentage. Manually enter the desired width (for example, 200px).
In the same way, you can change the width as a percentage.

{% include images-gallery.html imageCollection="column-width" %}

### Cell style function

The _cell style function_ allows adjusting color of rows based on values, entity, or [ctx](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/#basic-widget-api).
To configure the cell style function, you should check the box _Use cell style function_ and input the function in the _Cell style function_ field below. 

{% include images-gallery.html imageCollection="style-function" %}

An example of a cell style function where the cell color changes depending on its values:

```ruby
if(value < 0) {
   return {"background-color" : "#5F4DEB"};
} else if (value < 35) {
    return {"background-color" : "#62c5e3", "color" : "#19154a"};
} else if (value < 45) {
    return {"background-color" : "#b50232", "color" : "#f7e18f"};
} else if (value < 55) {
    return {"background-color" : "#e6b500", "color" : "#ff2200"};
} else if (value < 65) {
    return {"background-color" : "#ff9419"};
} else if (value < 75) {
    return {"background-color" : "#d0ff00"};
} else if (value < 85) {
    return {"background-color" : "#35c433"};
} else { 
    return { "background-color" : "red" };
}
```
{: .copy-code}

### Cell content function

The _cell content function_ allows changing the text of the data key column based on the value, entity, or [ctx](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/#basic-widget-api).
To configure the cell style function, you should check the _Use cell content function_ box and input the function in the _Cell content function_ field below.

In the example, we have two possible device answers: true or false. Cell content function can change the answers text. It is acceptable when devices are not so many.

{% include images-gallery.html imageCollection="content-function-1" %}

```ruby
if (value == "true") {
    return "Active";
} else {
    return "Inactive";
}
```
{: .copy-code}

However, there are times when it is not suitable to read the returning text to find out if a device is active or inactive.
The cell content function allows configuring a more convenient way of displaying it by inputting a custom function to depicture an active/inactive status (see an example of a function below).

{% include images-gallery.html imageCollection="content-function-2" %}

Configurable function to depicture an active/inactive status:

```ruby
if (value == "true") {
    return '<div style="border-radius:50%;background-color:green;width:18px;height:18px"></div>';
} else {
    return '<div style="border-radius:50%;background-color:red;width:18px;height:18px"></div>';
}
```
{: .copy-code}

### Default column visibility 

The _"Default column visibility"_ function for the column allows you to choose whether the data key column will be visible on the widget or hidden.
This is especially helpful during exporting a widget when you need to exclude a specific data key.

{% include images-gallery.html imageCollection="column-visibility" %}

### Column selection in 'Column to display'

The _"Column selection in 'Column to display'"_ function allows, you can select whether the column will be shown in the visibility selection menu, therefore, clients without permissions will not be able to hide it.

{% include images-gallery.html imageCollection="column-to-display" %}

### Include column in export

{% assign feature = "Include in column in export" %}{% include templates/pe-feature-banner.md %}

The _"Include column in export"_ function allows, you can choose under what conditions widget with a specific data key column can be exported. 
There are three options: always, only if column visible (you can change the visibility in [default column visibility](#default-column-visibility))
and never.

{% include images-gallery.html imageCollection="column-export" %}

## Advanced data key configuration for "Charts" widget bundle

Advanced data key configuration for the "Charts" widget bundle are different from the advanced data key configuration for other widget bundles.

Let’s break data keys configuration down with an example on the “Timeseries Line Chart” widget from the “Charts” bundle.

Please follow these steps to start the advanced configuration of the data key.

{% include images-gallery.html imageCollection="timeseries-line-chart-example" showListImageTitles="true" %}

### Data is hidden by default

By default, all data from the keys specified in the data source is displayed on the chart.

Enable the _"Data hidden by default"_ function for the selected key so that the data for this key is hidden by default on the chart.

{% include images-gallery.html imageCollection="data-is-hidden-by-default" %}

### Disable data hiding

Enable the _"Disable data hide"_ function for the selected key so that you and your users cannot hide the data on the chart by clicking on the key name.

{% include images-gallery.html imageCollection="disable-data-hiding" %}

### Remove datakey from legend

Enable the _"Remove data key from legend"_ function to prevent the selected key from being displayed in the legend.

{% include images-gallery.html imageCollection="remove-datakey-from-legend" %}

### Exclude from stacking

You can exclude a specific key from the stacking. This function is only available in "Stacking" mode.
Read more about stacking mode and how to use it [here](/docs/{{docsPrefix}}user-guide/widgets/#common-settings).

### Show line

You can show/hide the line on the chart using the _"Show line"_ function. And set the line width in pixels.

{% include images-gallery.html imageCollection="show-line" %}

#### Fill line

Enable the _"Fill line"_ function to fill the space between the line and the bottom border of the chart. You can also specify the opacity of the fill in the range of 0 to 1.

{% include images-gallery.html imageCollection="fill-line" %}

### Show points

Enable the _"Show points"_ function to display data points on the chart. 
You can also specify the line width of points (px), radius of points (px), and point shape of the points.

{% include images-gallery.html imageCollection="show-points" %}

### Tooltip settings

Customizing the tooltip through the advanced widget settings is a basic setting that applies to all data keys simultaneously.
Read more about Tooltip settings for widget [here](/docs/{{docsPrefix}}user-guide/widgets/#tooltip-settings).

By using the _"Tooltip value format function"_ for the selected data key, you can configure the values that will be displayed in the tooltip only for that data key, and the basic tooltip function will be overwritten by this configuration.

{% include images-gallery.html imageCollection="tooltip-settings" %}

### Vertical axis

You can specify the title of the _vertical axis_, set the minimum and maximum values of the scale, and adjust the axis position. 
Additionally, you can specify the number of decimal places and the step size between ticks on the vertical axis.

{% include images-gallery.html imageCollection="vertical-axis-1" %}

In the _"Ticks formatter function"_ window, specify the function that will format the value to be displayed as Y axis tick.

{% include images-gallery.html imageCollection="vertical-axis-2" %}

### Thresholds

Use this function to set a threshold value for the selected key. The threshold value will be displayed on the chart as a horizontal line.
You can specify the color and width of this line.

{% include images-gallery.html imageCollection="thresholds" %}

### Comparison settings

Display historical data on the graph to easily compare data for different time periods. 
This function works when the _comparison_ mode is activated in the widget settings.
For more details on comparison settings and how to use it, please read [here](/docs/{{docsPrefix}}user-guide/widgets/#comparison-settings).