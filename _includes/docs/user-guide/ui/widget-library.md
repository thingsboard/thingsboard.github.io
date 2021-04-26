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

Alarm widgets are useful for visualization of alarms for specific entities both in real-time and history mode.

{% include images-gallery.html imageCollection="wl-alarm-bundle-pe" preview="false" %}

### Analog Gauges

Analog Gauges is useful for visualization of temperature, humidity, speed and other integer or float values.

{% include images-gallery.html imageCollection="wl-analog-gauges-bundle-pe" preview="false" %}

### Cards

Cards are useful for visualization of time series data or attributes in a table or card widgets.

{% include images-gallery.html imageCollection="wl-cards-bundle-pe" preview="false" %}

### Charts

Charts are useful for visualization of historical or real-time data with a time window.

{% include images-gallery.html imageCollection="wl-charts-bundle-pe" preview="false" %}

### Control widgets

Control widgets are useful for visualization of current state and sending RPC commands to target devices.

{% include images-gallery.html imageCollection="wl-control-bundle-pe" preview="false" %}

### Digital Gauges

Digital Gauges are useful for visualization of temperature, humidity, speed and other integer or float values.

{% include images-gallery.html imageCollection="wl-digital-bundle-pe" preview="false" %}

### GPIO widgets

GPIO widgets are useful for visualization and control of GPIO state for target devices.

{% include images-gallery.html imageCollection="wl-gpio-pe" preview="false" %}

### Maps widgets
 
Useful for visualization of devices geo locations and tracking devices routes both in real-time and history mode.

![image](/images/user-guide/ui/maps-widgets.png)

### Gateway widgets

Useful for managing extensions.

![image](/images/user-guide/ui/gateway-widgets.png)

### Input widgets

Useful for changing entity attributes.

![image](/images/user-guide/ui/input-widgets.png)

## Widgets Bundles import/export

#### Widgets Bundle export

You are able to export widgets bundle to JSON format and import it to the same or another ThingsBoard instance.

In order to export widgets bundle, you should navigate to the **Widgets Library** page and click on the export button located on the particular widgets bundle row.
 
![image](/images/user-guide/ui/export-widgets-bundle.png)

#### Widgets Bundle import

Similar, to import the widgets bundle you should navigate to the **Widgets Library** page and click on the "+" button in the top-right corner of the **Widgets Bundles** table and then choose "Import widgets bundle" option. 

![image](/images/user-guide/ui/import-widgets-bundle.png)

The widgets bundle import window should a popup and you will be prompted to upload the json file.

![image](/images/user-guide/ui/import-widgets-bundle-window.png)

## Widgets Types import/export

#### Widget Type export

You are able to export particular widget type from widgets bundle to JSON format and import it to the same or another ThingsBoard instance.

In order to export widget type, you should navigate to the **Widgets Library** page, then open desired widgets bundle and finally click on the export button located on the particular widget type card.
 
![image](/images/user-guide/ui/export-widget-type.png)

#### Widget Type import

Similar, to import the widget type you should navigate to the **Widgets Library** page, then open your widgets bundle and click on the big "+" button in the bottom-right part of the screen and then click on the import button. 

![image](/images/user-guide/ui/import-widget-type.png)

The widget type import window will show a popup and you will be prompted to upload the json file.

![image](/images/user-guide/ui/import-widget-type-window.png)
