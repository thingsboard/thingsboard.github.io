---
layout: docwithnav
assignees:
- yefimov-andrey
title: Aliases
description: ThingsBoard Aliases

single-alias:
 0:
  image: /images/user-guide/ui/alias/single-alias.png
 1:
  image: /images/user-guide/ui/alias/single-alias-1.png
 2:
  image: /images/user-guide/ui/alias/single-alias-2.png
 3:
  image: /images/user-guide/ui/alias/single-alias-3.png

single-alias-1:
 4:
  image: /images/user-guide/ui/alias/single-alias-4.png
 5:
  image: /images/user-guide/ui/alias/single-alias-5.png
 6:
  image: /images/user-guide/ui/alias/single-alias-6.png
 7:
  image: /images/user-guide/ui/alias/single-alias-7.png
 8:
  image: /images/user-guide/ui/alias/single-alias-8.png

group-entities:
 0:
  image: /images/user-guide/ui/alias/group-entities.png
 1:
  image: /images/user-guide/ui/alias/group-entities-1.png
 2:
  image: /images/user-guide/ui/alias/group-entities-2.png
 3:
  image: /images/user-guide/ui/alias/group-entities-3.png

group-entities-1:
 4:
  image: /images/user-guide/ui/alias/group-entities-4.png
 5:
  image: /images/user-guide/ui/alias/group-entities-5.png
 6:
  image: /images/user-guide/ui/alias/group-entities-6.png
 7:
  image: /images/user-guide/ui/alias/group-entities-7.png

---

* TOC
{:toc}

## Introduction

Alias is a reference to a single entity or group of entities that are used in the widgets. Alias may be static or dynamic.  
To create a dashboard, you first need to create aliases to define the data from which the entities will be used. 
Aliases can be as easy as referring to a single device or as complicated as creating a complex search query for 
specific assets from a list. 

In this tutorial, aliases will be used on a system according to the scheme shown below and all devices have "water_level" generated values coming to them:

![image](/images/user-guide/ui/alias-scheme.png)


## Alias types

### Single entity

This alias allows choosing a single entity. It can be a device, asset, entity view, tenant, customer, dashboard, 
data converter, scheduler event, blob entity, or current customer.  
In the example was created an alias that filters one device, which in this case is Device A.  
Let's learn how to add a single entity alias:

1. Enter the dashboard edit mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left of the dialog.
4. In the opened dialog _Add alias_, enter an alias name, select a _Single entity_ filter type of the alias.
In the drop-down menu Type, select _Device_ and enter the name of the needed device (start typing it and it will be found automatically).
5. After configuring the alias, click the "Add" button at the bottom right. 
6. Now we see that a new alias has been added. Click "Save" in the lower right corner of the dialog box. 

{% include images-gallery.html imageCollection="single-alias" %}

Let's use an added alias in a widget:

1. Click the "Add new widget" sign in the middle of the screen.
2. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
3. Input a data source: Entity type, select the name of the alias from the list, and add telemetry.
4. Click the "Add" button in the bottom left of the dialog window.
5. Widget with alias that filters one device has been added.
6. Don't forget to save all the changes by clicking the big orange tick icon at the right bottom of the screen.

{% include images-gallery.html imageCollection="single-alias-1" %}

### Group entities

This alias allows choosing a single group of entities, which can be a customer group, an asset group, or a device group.
In the example was created an alias that filters a group of devices, which in this case is Irrigation systems.  
Let's learn how to add a group entities alias:

1. Enter the dashboard edit mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left of the dialog.
4. In the opened dialog _Add alias_, enter an alias name, select a _Group entities_ filter type of the alias.
   In the drop-down menu Type, select _Device_ and enter the name of the needed entity group of devices (start typing it and it will be found automatically).
5. After configuring the alias, click the "Add" button at the bottom right.
6. Now we see that a new alias has been added. Click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="group-entities" preview="false" %}

1. Click the "Add new widget" sign in the middle of the screen.
2. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
3. Input a data source: Entity type, select the name of the alias from the list, and add telemetry.
4. Click the "Add" button in the bottom left of the dialog window.
5. Widget with alias that filters a group of devices, which in this case is Irrigation systems, has been added.
6. Don't forget to save all the changes by clicking the big orange tick icon at the right bottom of the screen.

{% include images-gallery.html imageCollection="group-entities-1" %}


### Entity list

This alias allows choosing several entities manually without entering query, which can be device(s), asset(s), entity 
view(s), tenant(s), customer(s), dashboard(s), data converter(s), scheduler event(s), blob entity(-ies) or customer(s).

<img data-gifffer="/images/user-guide/ui/entity-list-alias.gif" />

This alias filters a list of several devices, which in this case are Device A and Device B.

### Entity name

This alias allows choosing one or more entities names of which start with entered query, which can be device(s), 
asset(s), entity view(s), tenant(s), customer(s), dashboard(s), data converter(s), scheduler event(s), blob entity(-ies)
 or customer(s).
 
<img data-gifffer="/images/user-guide/ui/entity-name-alias.gif" />

 This alias filters devices whose names start with ‘Device’.
 
### Entity group list

This alias allows choosing several entity groups manually without entering query, which can be device group(s), 
asset group(s), entity view group(s), customer group(s), dashboard group(s) or user group(s). 

<img data-gifffer="/images/user-guide/ui/entity-group-list-alias.gif" />
 
 This alias filters a list of device groups, which in this case are ‘Irrigation systems’ and ‘Moisture sensors’.
 
### Entity group name

This alias allows choosing several entity groups names of which start with entered query, which can be device group(s),
asset group(s), entity view group(s), customer group(s), dashboard group(s) or user group(s). 

For this example an empty device group named 'Irrigation machines' was created.

<img data-gifffer="/images/user-guide/ui/entity-group-name-alias.gif" />
 
 This alias filters device groups whose names start with ‘Irrigation’.
 
### Entity from dashboard state
This alias allows choosing entity(-ies) from dashboard state which can be device, asset, entity view, tenant, customer,
 dashboard, data converter, scheduler event, blob entity or current customer. 
  
It is used for filtering data for other dashboard states, for example, if Timeseries widget is created on a 
root dashboard state with several entities displayed on it and you want to create a dashboard state which will display
a widget with the entity you clicked on, you need to use this alias. 
 
 In the following example the alias is used after group entities alias was created.
 
 <img data-gifffer="/images/user-guide/ui/entity-dashboard-state-alias.gif" />

### Asset type

This alias allows choosing assets of entered type (and, if needed) names of which start with entered query.

 <img data-gifffer="/images/user-guide/ui/asset-type-alias.gif" />
 
 This alias filters assets of type ‘field’ and with name starting with ‘House’.
 
## Device types

This alias allows choosing devices of entered type (and, if needed) names of which start with entered query.

 <img data-gifffer="/images/user-guide/ui/device-type-alias.gif" />
 
 This alias filters devices of type ‘Device’.
 
### Entity view type

This alias allows choosing entity views of entered type (and, if needed) names of which start with entered query.

An entity view called 'Device-D-entity-view' was created with a type 'example-type' which provides access to
 'water_level' timeseries from Device D.

 <img data-gifffer="/images/user-guide/ui/entity-view-type-alias.gif" />
 
This alias filters entity Views of type ‘example-type’ and with name starting with ‘Device’.

### Relations query

This alias allows choosing entities which are related to specified originator up to specified level and in specified 
direction.

 <img data-gifffer="/images/user-guide/ui/relations-query-alias.gif" />

This alias filters entities that have any relation from Asset ‘Street A’ up to relation level 2.

### Asset search query

This alias allows choosing assets of specified type which are related to specified originator up to specified level and
in specified direction.

 <img data-gifffer="/images/user-guide/ui/Asset-search-query-alias.gif" />

This alias filters assets with types ‘field’ that have any relation to Device ‘Device D’ with relation level 1.

### Device search query

This alias allows choosing devices of specified type which are related to specified originator up to specified level
and in specified direction. 

 <img data-gifffer="/images/user-guide/ui/Device-search-query-alias.gif" />

This alias filters devices with types ‘Device’ that have any relation from Asset ‘House C’ up to relation level 1.

### Entity view search query

This alias allows choosing entity views of specified type which are related to specified originator up to specified
level and in specified direction.

An entity view called 'Device-D-entity-view' which has 'contains' relation to it from Device D was created with a type
 'example-type' which provides access to 'water_level' timeseries from Device D.

 <img data-gifffer="/images/user-guide/ui/entity-view-type-search-query-alias.gif" />
 
This alias filters entity views with types ‘example-type’ that have any relation from device ‘Device D’ up to
relation level 1.

