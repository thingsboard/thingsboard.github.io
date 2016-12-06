---
assignees:
- ashvayka

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
 - RPC - allows to send RPC commands to devices and handles/visualize reply from device.
 
## Datasource types

Each widget requires datasource for data visualization. Types of the avaliable datasource depends on widget type of the widget:

 - Target device - this datasource type is used in RPC. Basically, you need to specify target device for RPC widget
 - Device data - this datasource type is used in both time-series and latest values widgets. Basically, you need to specify target device and timeseries key or attribute name.
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
 
Useful for visualization of device geo location.

![image](/images/user-guide/ui/maps-widgets.png)

## Cards
 
Useful for visualization of latest timeseries data or attributes in a table or card widget.

![image](/images/user-guide/ui/cards.png)
