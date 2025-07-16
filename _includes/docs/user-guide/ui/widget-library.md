* TOC
{:toc}

All [IoT Dashboards](/docs/{{docsPrefix}}user-guide/dashboards/) are constructed using **ThingsBoard widgets** defined in the Widget Library.

A widget is an element that displays a specific type of information or functionality on a dashboard.
Widgets are used to display data and visualize information obtained from devices connected to the ThingsBoard platform, remote device control, alarms management, and display static custom HTML content.

## Widget Types

According to the provided features, each widget definition represents a specific widget type.
There are five widget types:

 - [Latest values;](#latest-values)
 - [Time series;](#time-series)
 - [Control widget;](#control-widget)
 - [Alarm widget;](#alarm-widget)
 - [Static widget.](#static)

{% include images-gallery.html imageCollection="wl-dashboard-widgets" preview="false" %}
 
Each widget type has its own specific data source configuration to visualize data. Types of available data sources depend on widget type:

 - **Alarm source** - this data source type, used primarily in Alarm widgets, requires a source entity to display related alarms and their corresponding fields;
 - **Alarms count** - this data source type is used in latest values widgets. You need to specify the target entity;
 - **Device** - this data source type is used in both time-series and latest values widgets. Basically, you need to specify the target device, and the time series key, or the attribute name, or entity field;
 - **Entities count** - this data source type is used in latest values widgets. You need to specify the target entity;
 - **Entity** - this data source type is used in both time-series and latest values widgets. Basically, you need to select the target entity by specifying an [entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/), and the time series key, or the attribute name;
 - **Function** - this data source type is used in both time series and latest values widgets for debugging. Basically, you can specify a JavaScript function that will simulate data from a device in order to set up visualization.

### Latest values

The Latest values widget type is designed to showcase the latest values of a specific entity attribute or time series data point (e.g., any Gauge Widget or Entities Table widget).
This type of widget uses values of entity attribute(s) or time series as a data source.
Digital Gauge in the example is displays the current temperature value.
 
{% include images-gallery.html imageCollection="wl-latest-values-datasource" %}

### Time series

The Time series widget type displays historical values for the selected period of time, or the latest values in the certain time window (e.g., Timeseries Line Chart or Timeseries Bar Chart).
This widget type uses only the values of entity time series as a data source.
In order to specify the time frame of displayed values, _Time window_ settings are used.
The time window can be specified on the dashboard page or via widget details. It can be either _Realtime_ - the dynamically changed time frame for a certain latest interval, or _History_ - a fixed historical time frame.
All these settings are part of Timeseries widget configuration.
In the example, the "Timeseries Line Chart" displays the speed value of the device in real-time.

{% include images-gallery.html imageCollection="wl-timeseries" %}

### Control widget

The Control widget allows sending RPC commands to devices, it handles and visualizes replies from the device (e.g., Raspberry Pi GPIO Control).
The RPC widgets are configured by specifying the target device as the target endpoint for RPC commands.
In the example, the “Basic GPIO Control” widget sends GPIO switch commands and detects the current GPIO switch status.

{% include images-gallery.html imageCollection="wl-control-widget" %}

### Alarm Widget

The Alarm Widget type displays alarms related to the specified entity in the certain time window (e.g., Alarms table).
To configure the Alarm widget, you designate an entity as the alarm source and define the corresponding alarm fields.
As the _Timeseries widgets_, Alarm widgets have the _time window_ configuration to specify the time frame of the displayed alarms.
Additionally, the configuration includes parameters such as "Alarm status", "Alarm severity", and "Alarm type".
The “Alarm status” parameter shows the status of the alarms being fetched.
The "Alarm severity" parameter shows the frequency of alarm fetches in seconds.
The "Alarm Type" parameter helps identify the primary source of the alarm.
For instance, "HighTemperature" and "LowHumidity" represent two different alarms.
In this context, the "Alarms table" widget displays the latest alarm for the device in real-time.

{% include images-gallery.html imageCollection="wl-alarms" %}

### Static

The Static widget type displays static customizable HTML content (e.g., HTML card).
Static widgets don’t use any data sources and are usually configured by specifying static HTML content and, optionally, CSS styles.
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
Some widgets can be found in multiple packages simultaneously. For example, the Alarm Count widget can be both found in the Alarm widgets bundle and the Count widgets bundle.

There are system-level and tenant-level widget bundles. Initial ThingsBoard installation comes with a basic set of system-level widget bundles.

The system-level bundles can be managed by a **System administrator** and are available for use by any tenant in the system.
The tenant-level bundles can be managed by a **Tenant administrator** and are available for use only by this tenant and his customers.
You can always implement and add your widgets by following this [guide](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/).

To find the widget you need among all the widget bundles, you can use the search function.

{% include images-gallery.html imageCollection="wl-bundle" %}

You can also find the widget you need by its name on the "Widgets" tab. Here, all available widgets are listed by default in alphabetical order.

{% include images-gallery.html imageCollection="wl" %}

### Air quality

This widgets bundle includes widgets for visualizing air quality data.

{% include images-gallery.html imageCollection="wl-air-quality" %}

### Alarm widgets

The Alarm widgets bundle is useful for visualization of alarms for specific entities, both in real-time and history modes.

{% include images-gallery.html imageCollection="wl-alarm-bundle" %}

### Analog gauges

The Analog Gauges widgets bundle is useful for visualization of temperature, humidity, speed, and other integer or float values.

{% include images-gallery.html imageCollection="wl-analog-gauges-bundle" %}

### Buttons

The Buttons bundle allows you to organize navigation between dashboard states, send RPC commands to devices, and update device attributes or time-series data.

{% include images-gallery.html imageCollection="wl-buttons-bundle" %}

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

### Date

The Date widgets bundle is useful for changing the data range for other widgets on the dashboard.

{% include images-gallery.html imageCollection="wl-date-bundle" %}

### Digital gauges

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

### Files

{% capture difference %}
**Available only in PE and PaaS.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The Files widgets display a list of files or PDF reports as a table. Allows to download and delete the file.

{% include images-gallery.html imageCollection="wl-files-bundle" %}

### Gateway widgets

The Gateway widgets bundle is useful for managing extensions.

{% include images-gallery.html imageCollection="wl-gateway-bundle" %}

### General high-performance SCADA symbols

This bundle contains high-performance SCADA widgets for broad industrial monitoring and control. It covers elements ranging from panels and gauges to mechanical assets and site facilities. 
Use it to assemble clean, high-contrast HMI screens that convey status at a glance across mixed-equipment dashboards.

{% include images-gallery.html imageCollection="wl-scada-hp-general-symbols" %}

### GPIO widgets

The GPIO widgets bundle is useful for visualization and controlling GPIO state for target devices.

{% include images-gallery.html imageCollection="wl-gpio" %}

### High-performance SCADA energy system

This bundle contains high-performance SCADA symbols that cover the complete electrical flow — from renewable generation (solar, wind) and backup generators through storage, conversion, protection, metering, and low/high-voltage distribution to residential and industrial consumers. 
It is ideal for building interactive dashboards that visualize production, quality, and consumption across modern energy infrastructures.

{% include images-gallery.html imageCollection="wl-scada-hp-energy-system" %}

### High-performance SCADA fluid system

This high-performance symbol bundle is focused on fluid-handling processes in oil-and-gas, chemical, and water-treatment domains. 
It spans drilling and well-control components, pumps and pipelines, separators, heat-exchange units, turbines, and related equipment—ideal for flow diagrams, production dashboards, and process-safety views.

{% include images-gallery.html imageCollection="wl-scada-hp-fluid-system" %}

### High-performance SCADA oil & gas

The bundle of high-performance SCADA symbols designed for upstream and early-stage processing workflows in the oil and gas sector.
It covers drilling and well-control equipment, artificial lift and drive units, surface gathering lines, separator trains, heat exchange, and power generation assets — everything needed to visualize the complete flow from wellhead to initial treatment in a clean High-performance SCADA style.
Perfect for real-time dashboards that track drilling progress, production efficiency, and safety barriers across both onshore and offshore installations.

{% include images-gallery.html imageCollection="wl-scada-hp-fluid-oil-and-gas" %}

### Home page widgets

The Home page widgets bundle is useful for customizing and displaying quick links to the platform's UI components, documentation, or any other resources on the home page, displaying statistics about the number of entities and API usege, etc.

{% include images-gallery.html imageCollection="wl-home" %}

### HTML widgets

The HTML widgets bundle is useful for injecting custom HTML code. Or for displaying configurable HTML with the ability to inject values from the selected data source.

{% include images-gallery.html imageCollection="wl-html" %}

### Indoor Environment

The Indoor Environment widget bundle is effective in visualizing data related to indoor environments.

{% include images-gallery.html imageCollection="wl-indoor-environment-bundle" %}

### Industrial widgets

The Industrial widgets bundle is useful for displaying industrial telemetry data.

{% include images-gallery.html imageCollection="wl-industrial-bundle" %}

### Input widgets

The Input widgets bundle is useful for modifying the attributes of an entity.

{% include images-gallery.html imageCollection="wl-input-bundle" %}

### Liquid level

The Liquid level widgets bundle includes widgets for visualizing the level of liquid inside the tank.

{% include images-gallery.html imageCollection="wl-liquid-level-bundle" %}

### Maps

The Map widgets bundle is useful for visualizing the geographic location of devices and tracking device routes in both real-time and history modes.

{% include images-gallery.html imageCollection="wl-maps-bundle" %}

### Navigation widgets

The Navigation widgets bundle is useful for defining the home dashboard of the user.

{% include images-gallery.html imageCollection="wl-navigation-bundle" %}

### Outdoor Environment

The Outdoor Environment widget bundle is effective in visualizing data related to outdoor environments.

{% include images-gallery.html imageCollection="wl-outdoor-environment-bundle" %}

### SCADA symbols

Use for uploading SVG symbols to your SCADA dashboard.

{% include images-gallery.html imageCollection="wl-scada-symbols-bundle" %}

### Scheduling

{% capture difference %}
**Available only in PE and PaaS.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The Scheduling widgets bundle is useful for [scheduling](/docs/{{docsPrefix}}user-guide/scheduler/) various types of events with flexible schedule configuration.  

{% include images-gallery.html imageCollection="wl-scheduling-bundle" %}

### Status indicators

The Status indicators widgets bundle includes widgets for visualizing battery level, signal strength, and progress bar.

{% include images-gallery.html imageCollection="wl-status-indicators-bundle" %}

### Tables

The Tables widgets bundle is useful when you need to display a list of entities, a list of alarm signals, and time series data for one or several entities.
Additionally, this widget bundle showcases Persistent RPC requests, which are based on entity alias. 
It can also be filtered optionally and supports pagination for enhanced usability.

{% include images-gallery.html imageCollection="wl-tables-bundle" %}

### Traditional SCADA fluid system

This bundle of SCADA symbols in a traditional design style covers the essentials for many industrial diagrams. 
It packs straight and elbow pipes, tees, drains, flow & level meters, pumps, filters, valves, tanks of various shapes, pools, and other core components - everything you need to assemble piping, hydraulic, and other process-control schematics with ease.

{% include images-gallery.html imageCollection="wl-scada-traditional-fluid-system" %}

## Operations with Widget

### Adding Widget

When a system administrator adds a new widget, it automatically becomes a system widget.
This means that only the administrator has the privilege to modify, or delete the widget.
Tenant administrators can also create widgets, but they are granted permission to modify only the widgets they have created.
You can always implement and add your widgets by following this [guide](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/).

To add a new widget, you should:

{% include images-gallery.html imageCollection="add-widget" showListImageTitles="true" %}

### Exporting Widget

You can export a specific type of widget from a widget bundle in JSON format, and import it in the same or different ThingsBoard instance.

In order to export a widget type, you should go to the Widgets Library page, navigate to the "Widgets" tab and click the export button on the particular widget card. The widget configuration file will be saved in JSON format on your computer.

{% include images-gallery.html imageCollection="export-widget" %}

### Importing Widget

Please note that only system administrators can modify system (default) widgets. This includes the ability to edit, delete, add, or import widgets within the bundle.
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

When a system administrator adds a new widgets bundle, it automatically becomes a system widgets bundle.
It means that only they can delete, edit, and add widget to the bundle. 
Tenant administrators can create widget bundles as well. In this case, they have permission to modify already created bundles.
You can always implement and add your widgets by following this [guide](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/).

To add a new widgets bundle, you should:

{% include images-gallery.html imageCollection="wl-add-widgets-bundle" showListImageTitles="true" %}

### Exporting Widgets Bundle 

You can export a widgets bundle in JSON format, and import it in the same or different ThingsBoard instance.

In order to export widgets bundle, you should:

{% include images-gallery.html imageCollection="export-widgets-bundle" showListImageTitles="true" %}

### Importing Widgets Bundle

To import a widgets bundle, you should: 

{% include images-gallery.html imageCollection="import-widgets-bundle" showListImageTitles="true" %}

### Deleting Widgets Bundle

The system administrator or tenant administrator can delete a widgets bundle using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-widgets-bundle-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-widgets-bundle-2" showListImageTitles="true" %}