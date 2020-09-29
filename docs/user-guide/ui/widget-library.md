---
layout: docwithnav
assignees:
- ashvayka
title: Widgets Library
description: ThingsBoard Dashboard Widgets Library

---

* TOC
{:toc}

## Introduction

All [IoT Dashboards](/docs/user-guide/ui/dashboards/) are constructed using **ThingsBoard widgets** that are defined in Widget Library.
Each widget provides end-user functions such as data visualization, remote device control, alarms management and displaying static custom html content.

## Widget Types

According to the provided features, each widget definition represents specific widget type.
At the moment there are five widget types:

 - [Latest values](#latest-values)
 - [Time-series](#time-series)
 - [RPC (Control widget)](#rpc-control-widget)
 - [Alarm widget](#alarm-widget)
 - [Static](#static)
 
Each widget type has own specific datasource configuration and corresponding widget API.
Each widget requires datasource for data visualization. Types of the available datasource depend on widget type of the widget:

 - Target device - this datasource type is used in RPC. Basically, you need to specify target device for RPC widget
 - Alarm source - this datasource type is used in Alarm widgets. This datasource requires source entity to display related alarms and corresponding alarm fields.
 - Entity - this datasource type is used in both time-series and latest values widgets. Basically, you need to specify target entity and timeseries key or attribute name.
 - Function - this datasource type is used in both time-series and latest values widgets for debug purposes. 
   Basically, you are able to specify a javascript function that will emulate data from a device in order to tune visualization.

### Latest values

Displays latest values of particular entity attribute or timeseries data point (for ex. any Gauge Widget or Entities Table widget).
This kind of widgets uses values of entity attribute(s) or timeseries as datasource.   
 
![image](/images/user-guide/ui/widgets/latest-values-datasource.png)

Below is an example of latest values widget - Digital Gauge displaying current power value. 

![image](/images/user-guide/ui/widgets/latest-values-widget-example.png)

### Time-series

Displays historical values for the selected time period or latest values in the certain time window (for ex. "Timeseries - Flot" or "Timeseries table").
This kind of widgets uses only values of entity timeseries as datasource.
In order to specify the time frame of displayed values, **Timewindow** settings are used.
Timewindow can be specified on the dashboard level or on the widget level. It can be either realtime - dynamically changed time frame for some latest interval, or history - fixed historical time frame.
All these settings are part of **Time-series** widget configuration.          
 
![image](/images/user-guide/ui/widgets/time-series-datasource.png)

Below is an example of time series widget - "Timeseries - Flot" displaying amperage values of three devices in real-time. 

![image](/images/user-guide/ui/widgets/time-series-widget-example.png)

### RPC (Control widget)

Allows to send RPC commands to devices and handles/visualize reply from the device (for ex. "Raspberry Pi GPIO Control").
RPC widgets are configured by specifying target device as target endpoint for RPC commands.

![image](/images/user-guide/ui/widgets/rpc-datasource.png)

Below is an example of RPC widget - "Basic GPIO Control" - sending GPIO switch commands and detecting current GPIOs switch status.

![image](/images/user-guide/ui/widgets/rpc-widget-example.png)

### Alarm Widget

Display alarms related to the specified entity in the certain time window (for ex. "Alarms table").
Alarm widgets are configured by specifying entity as alarms source and corresponding alarm fields.
Like **Time-series widgets** alarm widgets have the timewindow configuration in order to specify the time frame of displayed alarms.
Additionally configuration contains "Alarm status" and "Alarms polling interval" parameters.
"Alarm status" parameter specifies the status of alarms being fetched. "Alarms polling interval" controls alarms fetching frequency in seconds. 

![image](/images/user-guide/ui/widgets/alarm-datasource.png) 

Below is an example of Alarm widget - "Alarms table" displaying latest alarms for the asset in real-time. 

![image](/images/user-guide/ui/widgets/alarm-widget-example.png)

### Static

Displays static customizable html content (for ex. "HTML card").
Static widgets don't use any datasources and usually configured by specifying static html content and optionally css styles.

![image](/images/user-guide/ui/widgets/static-html.png)

Below is an example of a Static widget - "HTML card" displaying specified html content. 

![image](/images/user-guide/ui/widgets/static-widget-example.png) 
 
## Widgets Library (Bundles)

Widget definitions are grouped into widget bundles according to their purpose. There are System level and Tenant level **Widgets Bundles**.
Initial ThingsBoard installation is shipped with the basic set of system level **Widgets Bundles**.
There are more than thirty widgets in seven widget bundles available out-of-the-box.
System level bundles can be managed by a **System administrator** and are available for use by any tenant in the system.
Tenant level bundles can be managed by a **Tenant administrator** and are available for use only by this tenant and its customers. 
You can always implement and add your widgets by following this [guide](/docs/user-guide/contribution/widgets-development/).
 
![image](/images/user-guide/ui/widget-bundles.png)
 
### Digital Gauges
 
Useful for visualization of temperature, humidity, speed and other integer or float values.

![image](/images/user-guide/ui/digital-gauges.png)

### Analog Gauges
 
Similar to digital gauges, but have a different style. 

![image](/images/user-guide/ui/analog-gauges.png)


### Charts
 
Useful for visualization of historical or real-time data with a time window.

![image](/images/user-guide/ui/charts.png)

### GPIO widgets
 
Useful for visualization and control of GPIO state for target devices.

![image](/images/user-guide/ui/gpio-widgets.png)

### Control widgets
 
Useful for visualization of current state and sending RPC commands to target devices.

![image](/images/user-guide/ui/control-widgets.png)

### Maps widgets
 
Useful for visualization of devices geo locations and tracking devices routes both in real-time and history mode.

![image](/images/user-guide/ui/maps-widgets.png)

### Cards
 
Useful for visualization of timeseries data or attributes in a table or card widget.

![image](/images/user-guide/ui/cards.png)

### Alarm widgets

Useful for visualization of alarms for specific entities both in real-time and history mode.

![image](/images/user-guide/ui/alarm-widgets.png)

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
