---
layout: docwithnav
assignees:
- ashvayka
title: Widgets Library
description: Thingsboard Dashboard Widgets Library

---

* TOC
{:toc}

Thingsboard widgets are grouped into widget bundles. There are more then thirty widgets in six widget bundles available out-of-the-box.
You can always implement and add your widgets.
 
![image](/images/user-guide/ui/widget-bundles.png)

## Widget types

There are three types of widgets available by default:

 - Latest values - display latest values of particular device attribute or timeseries data point.
 - Time-series - display historical values for selected time period or latest values in certain time window.
 - RPC (Control widget) - allows to send RPC commands to devices and handles/visualize reply from device.
 - Static - displays static customizable html content.
 
## Datasource types

Each widget requires datasource for data visualization. Types of the avaliable datasource depends on widget type of the widget:

 - Target device - this datasource type is used in RPC. Basically, you need to specify target device for RPC widget
 - Device - this datasource type is used in both time-series and latest values widgets. Basically, you need to specify target device and timeseries key or attribute name.
 - Function - this datasource type is used in both time-series and latest values widgets for debug purposes. 
   Basically, you are able to specify javascript function that will emulate data from device in order to tune visualization.
 
## Digital Gauges
 
Useful for visualization of temperature, humidity, speed and other integer or float values.

![image](/images/user-guide/ui/digital-gauges.png)

## Analog Gauges
 
Similar to digital gauges, but have different style. 

![image](/images/user-guide/ui/analog-gauges.png)


## Charts
 
Useful for visualization of historical or real-time data with time window.

![image](/images/user-guide/ui/charts.png)

## GPIO widgets
 
Useful for visualization and control of GPIO state for target devices.

![image](/images/user-guide/ui/gpio-widgets.png)

## Maps widgets
 
Useful for visualization of devices geo locations and track devices routes both in real-time and history mode.

![image](/images/user-guide/ui/maps-widgets.png)

## Cards
 
Useful for visualization of timeseries data or attributes in a table or card widget.

![image](/images/user-guide/ui/cards.png)

## Widgets Bundles import/export

#### Widgets Bundle export

You are able to export widgets bundle to JSON format and import it to the same or another Thingsboard instance.

In order to export widgets bundle you should navigate to the **Widgets Library** page and click on the export button located on the particular widgets bundle card.
 
![image](/images/user-guide/ui/export-widgets-bundle.png)

#### Widgets Bundle import

Similar, to import the widgets bundle you should navigate to the **Widgets Library** page and click on the big "+" button in the bottom-right part of the screen and then click on the import button. 

![image](/images/user-guide/ui/import-widgets-bundle.png)

The widgets bundle import window should popup and you will be prompted to upload the json file.

![image](/images/user-guide/ui/import-widgets-bundle-window.png)

## Widgets Types import/export

#### Widget Type export

You are able to export particular widget type from widgets bundle to JSON format and import it to the same or another Thingsboard instance.

In order to export widget type you should navigate to the **Widgets Library** page, then open desired widgets bundle and finally click on the export button located on the particular widget type card.
 
![image](/images/user-guide/ui/export-widget-type.png)

#### Widget Type import

Similar, to import the widget type you should navigate to the **Widgets Library** page, then open your widgets bundle and click on the big "+" button in the bottom-right part of the screen and then click on the import button. 

![image](/images/user-guide/ui/import-widget-type.png)

The widget type import window should popup and you will be prompted to upload the json file.

![image](/images/user-guide/ui/import-widget-type-window.png)
