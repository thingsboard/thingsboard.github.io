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

---

* TOC
{:toc}

ThingsBoard provides the ability to create and manage dashboards. 
Dashboards may display data from many entities: devices, assets, etc. Dashboards may be assigned to Customers.  
This guide covers main concepts and various configuration settings.

## Prerequisites 

We assume you have already followed the [Getting Started](/docs/getting-started/) guide to get familiar with ThingsBoard devices and dashboards.

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

For example, you may use "[Device type](/docs/user-guide/ui/aliases/#device-type)" alias to display all devices of type "Thermometer".
This alias is dynamic, because the list of devices depends on the user that is using the dashboard. 
If you login as a Tenant administrator, the alias will resolve to all "Thermometer" devices. 
However, if you login as a Customer User, the alias will resolve to "Thermometer" devices that are assigned/belong to this Customer. 

Good example of the static alias is the "[Single Entity](/docs/user-guide/ui/aliases/#single-entity)" alias. The entity is configured once in the alias definition. 
All users will see the same data if they do have permissions to access this device.

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

## Widgets

### Widget types

Widgets are the building blocks of your dashboard. There are 5 types of widgets:

* **Time series** widgets display data for specific time window. The time window may be realtime (e.g., last 24 hours) or historical (December 2020).  
  Examples of the time series widgets are chart widgets. Obviously, time series widgets are designed to display time series and not attributes. 
* **Latest values** widgets display the latest values of particular [attribute](/docs/user-guide/attributes/) or [time series](/docs/user-guide/telemetry/) keys. For example, device model or latest temperature reading.
* **Control** widgets allow you to send [RPC commands](/docs/user-guide/rpc/) to your devices. For example, control desired temperature on the thermostat device.  
* **Alarm** widgets allow you to display [alarms](/docs/user-guide/alarms/).
* **Static** widgets are designed to display static information. For example, floor plan or static company information.

### Adding widget to the dashboard

To add a widget to the dashboard you should:

* Switch to the "edit" mode and click on the "+" ("Add new widget") icon in the bottom right part of the screen. 
* Click on the "Create new widget" to open the "widget selection" dialog.
* Select widget bundle, for example "Charts".
* Select a widget, for example "Timeseries - Flot", and click on it's name to open the "Add Widget" dialog. 

### Add widget dialog

Widget definition consts of the widget type, one or multiple data sources, basic and advanced settings, and the list of actions.   
Thus, the "Add widget" dialog contains four tabs to define a widget. Note that only the datasource configuration is strictly required. 
You may leave all other configuration tabs with the default values in most of the cases.   
We will discuss each of those tabs below.

#### Widget Data settings

#### Basic widget settings

#### Advanced widget settings

#### Widget actions


## Time window

## Settings

## Layouts

## States

## Export

