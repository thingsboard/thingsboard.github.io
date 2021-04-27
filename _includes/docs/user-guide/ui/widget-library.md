* TOC
{:toc}

## Introduction

All [IoT Dashboards](/docs/{{docsPrefix}}user-guide/dashboards/) are constructed using **ThingsBoard widgets** that are defined in Widget Library.
Each widget provides end-user functions, such as data visualization, remote device control, alarms management and displaying static custom HTML content.

## Widget Types

According to the provided features, each widget definition represents specific widget type.
At the moment there are five widget types:

 - [Latest values;](#latest-values)
 - [Time-series;](#time-series)
 - [RPC (Control widget);](#rpc-control-widget)
 - [Alarm widget;](#alarm-widget)
 - [Static widget.](#static)
 
Each widget type has its own specific data source configuration and the corresponding API widget.
Each widget requires data sources to visualize data. Types of available data source depend on widget type of the widget:

 - Target device - this data source type is used in RPC. Basically, you need to specify the target device for the RPC widget;
 - Alarm source - this data source type is used in Alarm widgets. This data source requires source entity to display related alarms and corresponding alarm fields;
 - Entity - this datasource type is used in both time-series and latest values widgets. Basically, you need to specify the target entity and the time series key, or the attribute name;
 - Function - this data source type is used in both time series and latest values widgets for debugging.
   Basically, you can specify a javascript function that will simulate data from a device in order to set up visualization.

### Latest values

_Latest values_ widget type displays the latest values of a specific entity attribute or time series data point (for example, any Gauge Widget or Entities Table widget).
This kind of widgets uses values of entity attribute(s) or time series as a data source.   
 
{% include images-gallery.html imageCollection="wl-latest-values-datasource-pe" showListImageTitles="true" preview="false" %}

### Time series

_Time series_ widget type displays historical values for the selected period of time, or the latest values in the certain time window (for example, "Time-series Line Chart" or "Time-series Bar Chart").
This kind of widgets uses only the values of entity time series as a data source.
In order to specify the time frame of displayed values, _Timewindow_ settings are used.
The time window can be specified on the dashboard page or in the widget details. It can be either _realtime_ - dynamically changed time frame for a certain latest interval, or _history_ - fixed historical time frame.
All these settings are part of Time series widget configuration.          
 
![image](/images/user-guide/ui/widgets/time-series-datasource.png)

Below is an example of time series widget - "Timeseries - Flot" displaying amperage values of three devices in real-time. 

![image](/images/user-guide/ui/widgets/time-series-widget-example.png)

### RPC (Control widget)

Control widget allows sending RPC commands to devices and handles/visualize reply from the device (for example, "Raspberry Pi GPIO Control").
RPC widgets are configured by specifying the target device as the target endpoint for RPC commands.

{% include images-gallery.html imageCollection="wl-control-widget-pe" showListImageTitles="true" preview="false" %}

### Alarm Widget

_Alarm Widget_ type displays alarms related to the specified entity in the certain time window (for example, "Alarms table").
Alarm widget is configured by specifying an entity as the alarm source, and the corresponding alarm fields.
As the _Time series widgets_, Alarm widgets have the _timewindow_ configuration to specify the time frame of the displayed alarms.  
In addition, the configuration contains "Alarm status", "Alarms severity" and "Alarm type" parameters.
"Alarm status" parameter specifies the status of alarms being fetched. "Alarms severity" controls alarms fetching frequency in seconds. 
"Alarm type" allows selecting existing alarm type lists or creating new ones to  

{% include images-gallery.html imageCollection="wl-alarms-pe" showListImageTitles="true" preview="false" %}

### Static

_Static_ widget type displays static customizable HTML content (for example, "HTML card").
Static widgets don't use any data sources and usually configured by specifying static HTML content and optionally CSS styles.

{% include images-gallery.html imageCollection="wl-static-pe" showListImageTitles="true" preview="false" %}

<details>

<summary>
<b>An example of a CSS style function to adjust an HTML card style.</b>
</summary>

{% highlight ruby %}
.card {
font-weight: bold;
font-size: 32px;
color: #999;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
}
{% endhighlight %}

</details>

<details>

<summary>
<b>An example of an HTML code for specifying card content.</b>
</summary>

{% highlight ruby %}
<h1>Static widget title</h1>
<div class='card'>Your text here</div>
{% endhighlight %}

</details>
 
## Widgets Library (Bundles)

Widgets are grouped into widget bundles according to their purpose. There are System-level and Tenant-level Widgets bundles.
Initial ThingsBoard installation comes with a basic set of system-level Widgets bundles.  
System level bundles can be managed by a **System administrator** and are available for use by any tenant in the system.
Tenant level bundles can be managed by a **Tenant administrator** and are available for use only by this tenant and his customers. 
You can always implement and add your widgets by following this [guide](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/).

{% include images-gallery.html imageCollection="wl" preview="false" %}

### Alarm widgets

Alarm widgets are useful for visualization alarms for specific entities, both in real-time and history modes.

{% include images-gallery.html imageCollection="wl-alarm-bundle-pe" preview="false" %}

### Analog Gauges

Analog Gauges is useful for visualization temperature, humidity, speed, and other integer or float values.

{% include images-gallery.html imageCollection="wl-analog-gauges-bundle-pe" preview="false" %}

### Cards

Cards are useful for visualization time series data or attributes in table or card widgets.

{% include images-gallery.html imageCollection="wl-cards-bundle-pe" preview="false" %}

### Charts

Charts are useful for visualization historical or real-time data with a time window.

{% include images-gallery.html imageCollection="wl-charts-bundle-pe" preview="false" %}

### Control widgets

Control widgets are useful for visualization the current state and sending RPC commands to target devices.

{% include images-gallery.html imageCollection="wl-control-bundle-pe" preview="false" %}

### Digital Gauges

Digital Gauges are useful for visualization temperature, humidity, speed and other integer or float values.

{% include images-gallery.html imageCollection="wl-digital-bundle-pe" preview="false" %}

### Gateway widgets

Gateway widgets are useful for managing extensions.

{% include images-gallery.html imageCollection="wl-gateway-bundle-pe" preview="false" %}

### GPIO widgets

GPIO widgets are useful for visualization and controlling GPIO state for target devices.

{% include images-gallery.html imageCollection="wl-gpio-pe" preview="false" %}

### Maps widgets

Map widgets are useful for visualizing the geographic location of devices and tracking device routes in both real-time and history modes.

{% include images-gallery.html imageCollection="wl-maps-bundle-pe" preview="false" %}

### Input widgets

Input widgets are useful for modifying the attributes of an entity.

{% include images-gallery.html imageCollection="wl-input-bundle-pe" preview="false" %}

## Widgets Bundles export/import

#### Widgets Bundle export

You can export a widgets bundle in JSON format, and import it in the same or different ThingsBoard format.

In order to export widgets bundle, you should:

{% include images-gallery.html imageCollection="wl-export-pe" showListImageTitles="true" preview="false" %}

#### Widgets Bundle import

Similar, to export the widgets bundle, you should: 

{% include images-gallery.html imageCollection="wl-import-pe" showListImageTitles="true" preview="false" %}

## Widget Types export/import

You can export a specific type of widget from a widget bundle in JSON format, and import it in the same or different ThingsBoard format.

#### Widget Type export

In order to export a widget type, you should: 

{% include images-gallery.html imageCollection="wl-export-widget-pe" showListImageTitles="true" preview="false" %}

#### Widget Type import

Please note that only system administrators can modify system (default) widget bundles. This means that only them can delete default widget bundle, edit and delete widgets inside the bundle, 
add or import new widgets into the bundle. 

Likewise, to import a widget type, you should: 

{% include images-gallery.html imageCollection="wl-import-widget-pe" showListImageTitles="true" preview="false" %}