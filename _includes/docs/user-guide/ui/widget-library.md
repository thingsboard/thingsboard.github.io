* TOC
{:toc}

## Introduction

All [IoT Dashboards](/docs/{{docsPrefix}}user-guide/dashboards/) are constructed using **ThingsBoard widgets** defined in the Widget Library.
Widgets are used to display data and visualize information obtained from devices connected to the ThingsBoard platform, remote device control, alarms management, and display static custom HTML content.

## Widget Types

According to the provided features, each widget definition represents a specific type of widget.
There are five widget types:

 - [Latest values;](#latest-values)
 - [Time series;](#time-series)
 - [Control widget;](#control-widget)
 - [Alarm widget;](#alarm-widget)
 - [Static widget.](#static)

{% include images-gallery.html imageCollection="wl-dashboard-widgets" preview="false" %}
 
Each widget type has its own specific data source configuration to visualize data. Types of available data source depend on widget type:

 - **Alarm source** - this data source type, used primarily in Alarm widgets, requires a source entity to display related alarms and their corresponding fields;
 - **Alarms count** - this data source type is used in latest values widgets. You need to specify the target entity;
 - **Device** - this data source type is used in both time-series and latest values widgets. Basically, you need to specify the target device, and the time series key, or the attribute name, or entity field;
 - **Entities count** - this data source type is used in latest values widgets. You need to specify the target entity;
 - **Entity** - this data source type is used in both time-series and latest values widgets. Basically, you need to select the target entity by specifying an [entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/), and the time series key, or the attribute name;
 - **Function** - this data source type is used in both time series and latest values widgets for debugging. Basically, you can specify a JavaScript function that will simulate data from a device in order to set up visualization.

### Latest values

The Latest values widget type is designed to showcase the latest values of a specific entity attribute or time series data point (e.g., any Gauge Widget or Entities Table widget).
This type of widget uses values of entity attribute(s) or time series as a data source.
Digital Gauge in example is displaying current temperature value.
 
{% include images-gallery.html imageCollection="wl-latest-values-datasource" %}

### Time series

The Time series widget type displays historical values for the selected period of time, or the latest values in the certain time window (e.g., Timeseries Line Chart or Timeseries Bar Chart).
This widget type uses only the values of entity time series as a data source.
In order to specify the time frame of displayed values, _Timewindow_ settings are used.
The timewindow can be specified on the dashboard page or in the widget details. It can be either _Realtime_ - the dynamically changed time frame for a certain latest interval, or _History_ - a fixed historical time frame.
All these settings are part of Timeseries widget configuration.
In the example, the "Timeseries Line Chart" displays the speed value of device in realtime.

{% include images-gallery.html imageCollection="wl-timeseries" %}

### Control widget

The Control widget allows sending RPC commands to devices, it handles and visualizes reply from the device (e.g., Raspberry Pi GPIO Control)
The RPC widgets are configured by specifying the target device as the target endpoint for RPC commands.
In the example, the “Basic GPIO Control” widget sends GPIO switch commands and detects the current GPIOs switch status.

{% include images-gallery.html imageCollection="wl-control-widget" %}

### Alarm Widget

The Alarm Widget type displays alarms related to the specified entity in the certain time window (e.g., Alarms table).
The Alarm widget is configured by specifying an entity as the alarm source, and the corresponding alarm fields.
As the _Timeseries widgets_, Alarm widgets have the _timewindow_ configuration to specify the time frame of the displayed alarms.
Additionally, the configuration includes parameters such as "Alarm status", "Alarm severity", and "Alarm type".
The "Alarm status" parameter is used to show the status of the alarms being fetched.
The "Alarm severity" parameter shows the frequency of alarm fetches in seconds.
The "Alarm Type" parameter helps identify the primary source of the alarm.
For instance, "HighTemperature" and "LowHumidity" represent two different alarms.
In this context, the "Alarms table" widget displays the latest alarm for the device in real time.

{% include images-gallery.html imageCollection="wl-alarms" %}

### Static

The Static widget type displays static customizable HTML content (e.g., HTML card).
Static widgets don’t use any data sources and are usually configured by specifying static HTML content and optionally CSS styles.
An example of a Static widget is the “HTML card” that displays the specified HTML content.

{% include images-gallery.html imageCollection="wl-static" %}

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

Widgets are grouped into widget bundles according to their purposes.
Some widgets can be found in multiple packages simultaneously. For example, the Alarm Count widget can be found in the Alarm widgets bundle and the Count widgets bundle.

There are system-level and tenant-level widgets bundles. Initial ThingsBoard installation comes with a basic set of system-level widgets bundles.

The system-level bundles can be managed by a **System administrator** and are available for use by any tenant in the system.
The tenant-level bundles can be managed by a **Tenant administrator** and are available for use only by this tenant and his customers.
You can always implement and add your widgets by following this [guide](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/).

To find the widget you need among all the widget bundles, you can use the search function.

{% include images-gallery.html imageCollection="wl-bundle" %}

You can also find the widget you need by its name on the "Widgets" tab. Here, all available widgets are listed by default in alphabetical order.

{% include images-gallery.html imageCollection="wl" %}

### Alarm widgets

The Alarm widgets bundle is useful for visualization of alarms for specific entities, both in real-time and history modes.

{% include images-gallery.html imageCollection="wl-alarm-bundle" %}

### Analog Gauges

The Analog Gauges bundle is useful for visualization of temperature, humidity, speed, and other integer or float values.

{% include images-gallery.html imageCollection="wl-analog-gauges-bundle" %}

### Cards

The Cards bundle is useful for visualization of time series data or attributes in table or card widgets.

{% include images-gallery.html imageCollection="wl-cards-bundle" %}

### Charts

The Charts bundle is useful for visualization of historical or real-time data with a time window.

{% include images-gallery.html imageCollection="wl-charts-bundle" %}

### Control widgets

The Control widgets bundle is useful for visualization of the current state and sending RPC commands to target devices.

{% include images-gallery.html imageCollection="wl-control-bundle" %}

### Count widgets

The Counter widgets bundle is useful for counting and visualizing the current number of alarms and entities based on the selected filter.

{% include images-gallery.html imageCollection="wl-count-bundle" %}

### Date widgets 

The Date widgets bundle is useful for changing the data range for other widgets on the dashboard.

{% include images-gallery.html imageCollection="wl-date-bundle" %}

### Digital Gauges

The Digital Gauges bundle is useful for visualization of temperature, humidity, speed and other integer or float values.

{% include images-gallery.html imageCollection="wl-digital-bundle" %}

### Edge widgets

The Edge widgets bundle is useful for an overview of entities related to the specified ThingsBoard Edge instance.

{% include images-gallery.html imageCollection="wl-edge-widgets-bundle" %}

### Entity admin widgets

The Entity admin widgets are templates of complex widgets that allow listing and creating/updating/deleting devices and assets.

{% include images-gallery.html imageCollection="wl-entity-admin-bundle" %}

### Entity widgets

The Entity admin widgets display a list of entities with their data, counting entities, and display the hierarchy of entities based on their relations.

{% include images-gallery.html imageCollection="wl-entity-bundle" %}

### Files widgets

{% capture difference %}
**Available only in PE and PaaS.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The Files widgets display a list of files or PDF reports as a table. Allows to download and delete the file.

{% include images-gallery.html imageCollection="wl-files-bundle" %}

### Gateway widgets

The Gateway widgets bundle is useful for managing extensions.

{% include images-gallery.html imageCollection="wl-gateway-bundle" %}

### GPIO widgets

The GPIO widgets bundle is useful for visualization and controlling GPIO state for target devices.

{% include images-gallery.html imageCollection="wl-gpio" %}

### Home page widgets

The Home page widget bundle is useful for customizing and displaying quick links to the platform's UI components, documentation, or any other resources on the home page, displaying statistics about the number of entities and API usege, etc.

{% include images-gallery.html imageCollection="wl-home" %}

### HTML widgets

The HTML widgets bundle is useful for injecting custom HTML code. Or for displaying configurable HTML with the ability to inject values from the selected data source.

{% include images-gallery.html imageCollection="wl-html" %}

### Input widgets

The Input widgets bundle is useful for modifying the attributes of an entity.

{% include images-gallery.html imageCollection="wl-input-bundle" %}

### Maps widgets

The Map widgets bundle is useful for visualizing the geographic location of devices and tracking device routes in both real-time and history modes.

{% include images-gallery.html imageCollection="wl-maps-bundle" %}

### Navigation widgets

The Navigation widgets bundle is useful for defining the home dashboard of the user.

{% include images-gallery.html imageCollection="wl-navigation-bundle" %}

### Scheduling widgets

{% capture difference %}
**Available only in PE and PaaS.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The Scheduling widgets bundle is useful for [scheduling](/docs/{{docsPrefix}}user-guide/scheduler/) various types of events with flexible schedule configuration.  

{% include images-gallery.html imageCollection="wl-scheduling-bundle" %}

### Tables Widgets

The Tables widget bundle is useful when you need to display a list of entities, a list of alarm signals, and time series data for one or several entities.
Additionally, this widget bundle showcases Persistent RPC requests, which are based on entity alias. 
It can also be filtered optionally and supports pagination for enhanced usability.

{% include images-gallery.html imageCollection="wl-tables-bundle" %}

## Operations with Widget

### Adding Widget

If the system administrator adds a new widget, it automatically becomes a system one. 
This means that only the administrator has the privilege to modify, or delete the widget. 
Tenant administrators can also create widgets. But they have permission to modify only the widgets they created.
You can always implement and add your widgets by following this [guide](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/).

To add a new widget, you should:

{% include images-gallery.html imageCollection="add-widget" showListImageTitles="true" %}

### Exporting Widget

You can export a specific type of widget from a widget bundle in JSON format, and import it in the same or different ThingsBoard instance.

In order to export a widget type, you should go to the Widgets Library page, navigate to the "Widgets" tab and click the export button on the particular widget card. The widget configuration file will be saved in JSON format on your computer.

{% include images-gallery.html imageCollection="export-widget" %}

### Importing Widget

Please note that only system administrators can modify system (default) widgets. This means that only they can edit and delete widgets inside the bundle, add or import new widgets into the bundle.
When a system administrator creates a new widget bundle, it's set as a system-level item for tenants, preventing them from modifying it.
Nevertheless, tenants can add their own widgets. In this case, they have full rights to manage created widget types inside the bundle.

To import a widget, you should:

{% include images-gallery.html imageCollection="import-widget" showListImageTitles="true" %}

### Deleting Widget

The system administrator or tenant administrator can delete a widget type using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-widget-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-widget-2" showListImageTitles="true" %}

## Operations with Widgets Bundle

### Adding Widgets Bundle

If the system administrator adds a new widgets bundle, it automatically becomes a system one. 
It means that only he can delete, edit, and add widget into the bundle. 
Tenant administrators can create widgets bundles as well. In this case, they have permissions to modify created bundles.
You can always implement and add your widgets by following this [guide](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/).

To add a new widgets bundle, you should:

{% include images-gallery.html imageCollection="wl-add-widgets-bundle" showListImageTitles="true" %}

### Exporting Widgets Bundle 

You can export a widgets bundle in JSON format, and import it in the same or different ThingsBoard instance.

In order to export widgets bundle, you should:

{% include images-gallery.html imageCollection="export-widgets-bundle" showListImageTitles="true" %}

### Importing Widgets Bundle

To import widgets bundle, you should: 

{% include images-gallery.html imageCollection="import-widgets-bundle" showListImageTitles="true" %}

### Deleting Widgets Bundle

The system administrator or tenant administrator can delete a widgets bundle using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-widgets-bundle-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-widgets-bundle-2" showListImageTitles="true" %}