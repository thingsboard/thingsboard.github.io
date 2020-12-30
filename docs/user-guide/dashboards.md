---
layout: docwithnav
assignees:
- ashvayka
title: Working with IoT dashboards
description: IoT dashboards using ThingsBoard
editMode:
    0:
        image: /images/user-guide/dashboards/edit-mode1-src.png
    1:
        image: /images/user-guide/dashboards/edit-mode2-src.png

aliases:
    0:
        image: /images/user-guide/dashboards/alias1-src.png
    1:
        image: /images/user-guide/dashboards/alias2-src.png
    2:
        image: /images/user-guide/dashboards/alias3-src.png

filters:
    0: 
        image: /images/user-guide/dashboards/filters1-src.png
    1:
        image: /images/user-guide/dashboards/filters2-src.png
    2:
        image: /images/user-guide/dashboards/filters3-src.png
    3:
        image: /images/user-guide/dashboards/filters4-src.png
    4:
        image: /images/user-guide/dashboards/filters5-src.png
    5:
        image: /images/user-guide/dashboards/filters6-src.png

add-widget:
    0:
        image: /images/user-guide/dashboards/add-widget1-src.png
    1:
        image: /images/user-guide/dashboards/add-widget2-src.png

add-data-source1:
    0:
        image: /images/user-guide/dashboards/add-data-source1-src.png

add-data-source2:
    0:
        image: /images/user-guide/dashboards/add-data-source2-src.png

add-data-source3:
    0:
        image: /images/user-guide/dashboards/add-data-source3-src.png

time-window1:
    0:
        image: /images/user-guide/dashboards/add-time-window1-src.png

---

* TOC
{:toc}

## Prerequisites

We assume you have already followed the [Getting Started](/docs/getting-started/) guide to get familiar with ThingsBoard devices and dashboards.

## Introduction

ThingsBoard provides the ability to create and manage dashboards. 
Dashboards may display data from many entities: devices, assets, etc. Dashboards may be assigned to Customers.  
This guide covers main concepts and various configuration settings.

## Title

Editable dashboard title appears in the top-left corner of the dashboard. Dashboard Title is also displayed in the application breadcrumbs to simplify navigation.

## Edit mode

The "pencil" button in the bottom-right corner of the screen is used to enter dashboard edit mode. 
Once you switch to the edit mode, you may add new [widgets](/docs/user-guide/dashboards/#widgets) and access controls in the dashboard [toolbar](/docs/user-guide/dashboards/#toolbar).
You may also use button "Apply changes" to save the dashboard or "Decline changes" to rollback all unsaved changes.

{% include images-gallery.html imageCollection="editMode" %}

## Toolbar

Dashboard toolbar allows you to manage 
[states](/docs/user-guide/dashboards/#states), 
[layouts](/docs/user-guide/dashboards/#layouts), 
[settings](/docs/user-guide/dashboards/#settings), 
[aliases](/docs/user-guide/dashboards/#entity-aliases), 
[filters](/docs/user-guide/dashboards/#entity-filters), and configure [timewindow](/docs/user-guide/dashboards/#timewindow) using the corresponding icons in the toolbar.

Some of these icons (stats, layout, settings) are visible only in the "edit" mode. All other icons are visible in both "view" and "edit" mode. 
You may hide those icons or configure the toolbar to be minimized by default using [settings](/docs/user-guide/dashboards/#settings).

## Entity Aliases

Entity Aliases define what entities (devices, assets, etc) you would like to display on the dashboard. 
You can treat alias as a reference to one or more devices. Those references are static or dynamic.

Good example of the static alias is the "[Single Entity](/docs/user-guide/ui/aliases/#single-entity)" alias. The entity is configured once in the alias definition.
All users will see the same data if they do have permissions to access this device.

The example of a dynamic alias is "[Device type](/docs/user-guide/ui/aliases/#device-type)" alias that displays all devices of a certain type (e.g. "Thermometer").
This alias is dynamic, because the list of devices depends on the user that is using the dashboard. 
If you login as a Tenant administrator, the alias will resolve to all "Thermometer" devices. 
However, if you login as a Customer User, the alias will resolve to "Thermometer" devices that are assigned/belong to this Customer.

{% include images-gallery.html imageCollection="aliases" %}

Please see the Entity Aliases [documentation](/docs/user-guide/ui/aliases) for more details.

## Entity Filters

Entity Filters allow you to define a filter for the list of entities resolved by the entity alias.
The easiest way to explain this feature is by example. 

Let's assume you have thousands of "Thermometer" devices and would like to display thermometers of specific model and with certain battery levels.
Let's also assume that the "model" of the thermometer is stored as an attribute and battery level is stored as a time series data.
We will define a filter that checks that the model is equal to "DHT22" and battery level is less than 20 percent. 

{% include images-gallery.html imageCollection="filters" %}

Filters are applied only to the "latest" value of the attribute or time-series key. This feature should not be used to "filter out" historical time series values.

You may combine different logical expressions over one key using "complex" filters. For example: "(A > 0 and A < 20) or (A > 50 and A < 100)".
You may also combine two expressions for different keys using the "and" relation. For example: "(A > 0 and A < 20) and (B > 50 and B < 100)".
It is not possible to use "or" relation to combine different keys yet. For example: "(A > 0 and A < 20) or (B > 50 and B < 100)".

See more examples how to use filters in this video:

<div id="video">
  <div id="video_wrapper">
    <iframe src="https://www.youtube.com/embed/yTAhUpZiFkM?start=177" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>

## Widgets

### Widget types

Widgets are the building blocks of your dashboard. There are 5 types of widgets:

* **Time series** widgets display data for specific time window. The time window may be realtime (e.g., last 24 hours) or historical (December 2020);  
  Examples of the time series widgets are chart widgets. Obviously, time series widgets are designed to display time series and not attributes;
* **Latest values** widgets display the latest values of particular [attribute](/docs/user-guide/attributes/) or [time series](/docs/user-guide/telemetry/) keys. For example, device model or latest temperature reading;
* **Control** widgets allow you to send [RPC commands](/docs/user-guide/rpc/) to your devices. For example, control desired temperature on the thermostat device;  
* **Alarm** widgets allow you to display [alarms](/docs/user-guide/alarms/);
* **Static** widgets are designed to display static information. For example, floor plan or static company information.

### Adding widget to the dashboard

To add a widget to the dashboard you should:

* Switch to the "edit" mode and click on the "+" ("Add new widget") icon in the bottom right part of the screen. 
* Click on the "Create new widget" to open the "widget selection" dialog.
* Select widget bundle, for example "Charts".
* Select a widget, for example "Timeseries - Flot", and click on it's name to open the "Add Widget" dialog.

{% include images-gallery.html imageCollection="add-widget" %}

### Add widget dialog

Widget definition consists of the widget type, one or multiple data sources, basic and advanced settings, and the list of actions.   
Therefore, the "Add widget" dialog contains four tabs to define a widget. Note that only the datasource configuration is strictly required. 
You may leave all other configuration tabs with the default values in most of the cases.   
We will discuss each of those tabs below.

#### Widget data settings

Widget data settings allow you to define one or multiple data sources. 
Data source is a combination of entity [alias](/docs/user-guide/dashboards/#entity-aliases), optional [filter](/docs/user-guide/dashboards/#entity-filters) and list of data keys.
Basically, data source defines which entities widget should use (alias and filter) and what data keys to fetch for those entities.

{% include images-gallery.html imageCollection="add-data-source1" %}

For example, let's configure data source to fetch temperature and humidity values for all "Thermometer" devices that have model "DHT22" and battery level is less than 20 percent.
We will use "Thermometer" alias and "Low battery DHT22 Thermometers filter configured in the previous parts of this doc, see [alias](/docs/user-guide/dashboards/#entity-aliases) and [filter](/docs/user-guide/dashboards/#entity-filters) correspondingly. 

{% include images-gallery.html imageCollection="add-data-source2" %}

The example above assumes that "temperature" and "humidity" are two time series [data keys](/docs/user-guide/dashboards/#data-keys).
The list of available data keys for particular data source depends on the [widget type](/docs/user-guide/dashboards/#widget-types):

 * **Time series** widgets allow you to choose only time series data keys in the data source;
 * **Latest values** widgets allow you to choose time series, attributes and entity fields;
 * **Static** and **Control** widgets does not require a data source;
 * **Alarm** widgets allow you to choose any data keys: time series, attributes, entity and alarm fields;

Let's assume you don't have the required time series or attribute key in the database yet. 
In such case, you can still add a key to the data source, and the widget will start displaying the data once device will send it to ThingsBoard. 

{% include images-gallery.html imageCollection="add-data-source3" %}

Besides the data keys, time series widget allows you to select the [time window](/docs/user-guide/dashboards/#time-window). 
Also, alarm widget allows you to select both [time window](/docs/user-guide/dashboards/#time-window) and [alarm filter](/docs/user-guide/dashboards/#alarm-filter)

##### Data keys

Data key defines time series, attribute or entity field that you would like to use in the widget. 
Data key definition consists of type (time series, attribute of entity field) and the actual key.

List of available attribute keys is basically a list of all client, server and shared [attributes](/docs/user-guide/attributes/) of your device or other entity.

List of available time series keys depends on what time series data you devices [report](/docs/user-guide/telemetry/#device-telemetry-upload-api) to ThingsBoard 
or what time series data you have saved via rule engine or [REST API](/docs/reference/rest-api/).

List of entity fields depends on entity type:

 * **Devices, assets and entity views** have the following fields: create time, entity type, name, type, label, additional info.
 * **User** has the following fields: created time, first name, last name, email and additional info.
 * **Customer** has the following fields: create time, entity type, email, title, country, state, city, address, zip code, phone, additional info.

The list of available entity fields may extend in the future.

##### Widget time window

Widget time window defines time interval and aggregation function that should be used to fetch the time series or alarm data. 
By default, every widget is using the main [time window](/docs/user-guide/dashboards/#time-window) defined in the dashboard [toolbar](/docs/user-guide/dashboards/#toolbar). 
You may overwrite the default time window using "Use dashboard timewindow" checkbox.
You may also hide the time window selection for specific widget from the user using the "Display timewindow" checkbox. 

{% include images-gallery.html imageCollection="time-window1" %}

Learn more about time window configuration [here](/docs/user-guide/dashboards/#time-window). 

##### Alarm filter


#### Basic widget settings

#### Advanced widget settings

#### Widget actions


## Time window

Dashboard time window defines default time interval and aggregation function that will be used to fetch the time series or alarm data.
This time window will be used by all the time series and alarm widgets unless they are explicitly [configured](/docs/user-guide/dashboards/#widget-time-window) to overwrite this behaviour. 
In case of time series widget, ThingsBoard will obviously fetch telemetry with timestamp that matches the time window.
In case of alarm widget, ThingsBoard will fetch alarms with created time that matches the time window.

The data aggregation function is applicable for time series data and is not applicable for alarms.
Data aggregation is useful when you don't want to fetch all time series data to UI, and you would like to pre-aggregate it on the database level.
Using the aggregation functions saves network bandwidth and computation power of the client browser.
We recommend to use aggregation functions whenever is possible if you have a lot of raw values.

There are 5 aggregation functions available at the moment: **Min**, **Max**, **Average**, **Sum** and **Count**. 
The special function called **None** is used to disable the aggregation.
The default behavior of the dashboard is to show average values for the last minute grouped into 1 second intervals.
Most likely, you will need to change this interval to last day ot even last 30 days. 
You may notice that the value of minimum grouping interval is automatically adjusted according to the main time interval.
The goal of the adjustment is to keep number of intervals lower than configurable value (700 in our case).




## Settings

## Layouts

## States

## Export

