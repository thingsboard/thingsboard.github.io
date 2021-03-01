---
layout: docwithnav
assignees:
- yefimov-andrey
title: Aliases
description: ThingsBoard Aliases

single-alias:
 0:
  image: /images/user-guide/ui/alias/1.png
 1:
  image: /images/user-guide/ui/alias/2.png
 2:
  image: /images/user-guide/ui/alias/single-alias-2.png
 3:
  image: /images/user-guide/ui/alias/single-alias-3.png

single-alias-1:
 4:
  image: /images/user-guide/ui/alias/4.png
 5:
  image: /images/user-guide/ui/alias/5.png
 6:
  image: /images/user-guide/ui/alias/6.png
 7:
  image: /images/user-guide/ui/alias/single-alias-7.png
 8:
  image: /images/user-guide/ui/alias/single-alias-8.png

group-entities:
 0:
  image: /images/user-guide/ui/alias/1.png
 1:
  image: /images/user-guide/ui/alias/2.png
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

entity-list:
 0:
  image: /images/user-guide/ui/alias/1.png
 1:
  image: /images/user-guide/ui/alias/2.png
 2:
  image: /images/user-guide/ui/alias/entity-list-3.png
 3:
  image: /images/user-guide/ui/alias/entity-list-4.png

entity-list-1:
 4:
  image: /images/user-guide/ui/alias/4.png
 5:
  image: /images/user-guide/ui/alias/5.png
 6:
  image: /images/user-guide/ui/alias/6.png
 7:
  image: /images/user-guide/ui/alias/entity-list-6.png
 8:
  image: /images/user-guide/ui/alias/entity-list-7.png

entity-name:
 0:
  image: /images/user-guide/ui/alias/1.png
 1: 
  image: /images/user-guide/ui/alias/2.png
 2:
  image: /images/user-guide/ui/alias/entity-name-3.png
 3:
  image: /images/user-guide/ui/alias/entity-name-4.png

entity-name-1:
 4:
  image: /images/user-guide/ui/alias/4.png
 5:
  image: /images/user-guide/ui/alias/5.png
 6:
  image: /images/user-guide/ui/alias/6.png
 7:
  image: /images/user-guide/ui/alias/entity-name-7.png
 8:
  image: /images/user-guide/ui/alias/entity-name-8.png

entity-group-list:
 0:
  image: /images/user-guide/ui/alias/1.png
 1:
  image: /images/user-guide/ui/alias/2.png
 2:
  image: /images/user-guide/ui/alias/entity-group-list-3.png
 3:
  image: /images/user-guide/ui/alias/entity-group-list-4.png
 4:
  image: /images/user-guide/ui/alias/entity-group-list-5.png
 5:
  image: /images/user-guide/ui/alias/entity-group-list-6.png

entity-group-list-1:
 0:
  image: /images/user-guide/ui/alias/4.png
 1:
  image: /images/user-guide/ui/alias/5.png
 2:
  image: /images/user-guide/ui/alias/6.png
 3:
  image: /images/user-guide/ui/alias/entity-group-list-7.png
 4:
  image: /images/user-guide/ui/alias/entity-group-list-8.png
 5:
  image: /images/user-guide/ui/alias/entity-group-list-9.png
 6:
  image: /images/user-guide/ui/alias/entity-group-list-10.png
 7:
  image: /images/user-guide/ui/alias/entity-group-list-11.png
 8:
  image: /images/user-guide/ui/alias/entity-group-list-12.png
 9:
  image: /images/user-guide/ui/alias/entity-group-list-13.png
 10:
  image: /images/user-guide/ui/alias/entity-group-list-14.png

entity-group-name:
 0:
  image: /images/user-guide/ui/alias/1.png
 1:
  image: /images/user-guide/ui/alias/2.png
 2: 
  image: /images/user-guide/ui/alias/entity-group-name-3.png
 3:
  image: /images/user-guide/ui/alias/entity-group-name-4.png
 4:
  image: /images/user-guide/ui/alias/entity-group-name-5.png
 5:
  image: /images/user-guide/ui/alias/entity-group-name-6.png

entity-group-name-1:
 0:
  image: /images/user-guide/ui/alias/4.png
 1:
  image: /images/user-guide/ui/alias/5.png
 2:
  image: /images/user-guide/ui/alias/6.png
 3:
  image: /images/user-guide/ui/alias/entity-group-name-7.png
 4:
  image: /images/user-guide/ui/alias/entity-group-name-7.5.png
 5:
  image: /images/user-guide/ui/alias/entity-group-name-8.png
 6:
  image: /images/user-guide/ui/alias/entity-group-name-9.png
 7:
  image: /images/user-guide/ui/alias/entity-group-name-10.png
 8:
  image: /images/user-guide/ui/alias/entity-group-name-11.png
 9:
  image: /images/user-guide/ui/alias/entity-group-name-12.png
 10:
  image: /images/user-guide/ui/alias/entity-group-name-13.png

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

Let's learn how to add a Single entity alias:
1. Enter the dashboard edit mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left of the dialog.
4. In the opened dialog _Add alias_, enter the alias name, select a _Single entity_ filter type of the alias.
In the drop-down menu Type, select _Device_ and enter the name of the needed device (start typing it and it will be found automatically).
5. After configuring the alias, click the "Add" button at the bottom right. 
6. Now we see that a new alias has been added. Click "Save" in the lower right corner of the dialog box. 

{% include images-gallery.html imageCollection="single-alias" %}
<br>

Let's use an added alias in a widget:
1. Click the "Add new widget" sign in the middle of the screen.
2. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
3. Input a data source: Entity type, select the name of the alias from the list, and add telemetry.
4. Click the "Add" button in the bottom right of the dialog window.
5. Widget with alias that filters one device has been added.
6. Don't forget to save all the changes by clicking the big orange tick icon at the right bottom of the screen.

{% include images-gallery.html imageCollection="single-alias-1" %}

### Group entities

This alias allows choosing a single group of entities, which can be a customer group, an asset group, or a device group.
In the example was created an alias that filters a group of devices, which in this case is Irrigation systems.  

Let's learn how to add a Group entities alias:
1. Enter the dashboard edit mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left of the dialog.
4. In the opened dialog _Add alias_, enter the alias name, select a _Group entities_ filter type of the alias.
   In the drop-down menu Type, select _Device_ and enter the name of the needed entity group of devices (start typing it and it will be found automatically).
5. After configuring the alias, click the "Add" button at the bottom right.
6. Now we see that a new alias has been added. Click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="group-entities" %}
<br>

Now let's use an added alias in a widget:
1. Click the "Add new widget" sign in the middle of the screen.
2. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
3. Input a data source: Entity type, select the name of the created alias from the list, and add telemetry.
4. Click the "Add" button in the bottom right of the dialog window.
5. Widget with alias that filters a group of devices, which in this case is Irrigation systems, has been added.
6. Don't forget to save all the changes by clicking the big orange tick icon at the right bottom of the screen.

{% include images-gallery.html imageCollection="group-entities-1" %}


### Entity list

This alias allows choosing several entities manually without entering query, which can be devices, assets, entity 
views, tenants, customers, dashboards, data converters, scheduler events, blob entities or customers.
In the example was created an alias that filters a list of several devices, which in this case are Device D and Device E.  

Let's learn how to add a Entity list alias:
1. Enter the dashboard edit mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left of the dialog.
4. In the opened dialog _Add alias_, enter the alias name, select a _Entity list_ filter type of the alias.
   In the drop-down menu Type, select _Device_ and input names of the separate devices (start typing it and it will be found automatically).
5. After configuring the alias, click the "Add" button at the bottom right.
6. Now we see that a new alias has been added. Click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-list" %}
<br>

Now let's use an added alias in a widget:
1. Click the "Add new widget" sign in the middle of the screen.
2. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
3. Input a data source: Entity type, select the name of the created alias from the list, and add telemetry.
4. Click the "Add" button in the bottom right of the dialog window.
5. Widget with alias that filters a list of several devices, which in this case are Device D and Device E, has been added.
6. Don't forget to save all the changes by clicking the big orange tick icon at the right bottom of the screen.

{% include images-gallery.html imageCollection="entity-list-1" %}


### Entity name

This alias allows choosing one or more entities names of which start with entered query, which can be devices, 
assets, entity views, tenants, customers, dashboards, data converters, scheduler events, blob entities or customers.  
In the example was created an alias that filters devices, which names start with ‘Device’.

Let's learn how to add an Entity name alias:
1. Enter the dashboard edit mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left of the dialog.
4. In the opened dialog _Add alias_, enter the alias name, select a _Entity name_ filter type of the alias.
   In the drop-down menu Type, select _Device_ and input name or just the beginning of the name by which devices will be filtered.
5. After configuring the alias, click the "Add" button at the bottom right.
6. Now we see that a new alias has been added. Click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-name" %}
<br>

Now let's use an added alias in a widget:
1. Click the "Add new widget" sign in the middle of the screen.
2. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
3. Input a data source: Entity type, select the name of the created alias from the list, and add telemetry.
4. Click the "Add" button in the bottom right of the dialog window.
5. Widget with alias that filters devices, which names start with ‘Device’, has been added.
6. Don't forget to save all the changes by clicking the big orange tick icon at the right bottom of the screen.

{% include images-gallery.html imageCollection="entity-name-1" %}

 
### Entity group list

This alias allows choosing several entity groups manually without entering query, which can be device groups, 
asset groups, entity view groups, customer groups, dashboard groups or user groups.
In the example was created an alias that filters a list of device groups, which in this case are ‘Irrigation systems’ and ‘Moisture sensors’.

Let's learn how to add an Entity group list alias:
1. Enter the dashboard edit mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left of the dialog.
4. In the opened dialog _Add alias_, enter the alias name, select a _Entity group list_ filter type of the alias.
5. Select Device type and input device groups. Click "Add" in the lower right corner of the dialog box.
6. After first alias has been added, click an "Add alias" button again.
7. Enter the alias name, select a _Group entities_ filter type of the alias.
8. Move slider on to use a dashboard state entity as an entity group.
9. In Default state entity group, select _Device_ type and Irrigation system as entity group.
10. Click "Add" in the lower right corner of the dialog box.
11. After both aliases have been added, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-group-list" %}
<br>

Now let's use an added alias in a widget:
1. Click the "Add new widget" sign in the middle of the screen.
2. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
3. Input a data source: Entity type and _Entity group list_ alias. Click "Add" in the lower right corner to add a widget.
4. After a widget has been added, click the "pencil" icon in the top right corner of it to enter an Edit mode of the widget. 
5. Move to the Action cell and click a "+" icon to add a new action.
6. In the Add widget dialog, select an [action source](/docs/user-guide/ui/widget-actions/#action-sources) which is responsible for each entity separately (action cell button, on row click etc.)
7. Enter the name of the action ${entityName} which takes the clicked on entity's name and uses it during the action performance. 
8. If it is needed, choose an icon that represents a button for an action execution.
9. Select _Update current dashboard state_ action type and click "Add" to add a new action to the widget.
10. After the action has been added successfully, click big orange tick mark in the top right of the screen to apply changes.
11. Now, add a widget on which action will be performed by clicking orange "+" sign in the bottom right corner of the screen and choosing a "Paper" sign ("Create new widget").
12. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
13. Input a data source: Entity type and _group entities_ alias and add a telemetry. Click "Add" in the bottom right corner. 
14. After both widgets have been added, click a tick mark in the bottom right corner of the screen.

To execute an action and filter aliases by device groups, click the action cell button.

{% include images-gallery.html imageCollection="entity-group-list-1" %}

 
### Entity group name

This alias allows choosing several entity groups names of which start with entered query, which can be device group(s),
asset group(s), entity view group(s), customer group(s), dashboard group(s) or user group(s). In this example, an alias filters device groups which names start with ‘Irrigation’.

For this example an empty device group named 'Irrigation machines' was created.

Let's learn how to add an Entity group name alias:
1. Enter the dashboard edit mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left of the dialog.
4. In the opened dialog _Add alias_, enter the alias name, select a _Entity group name_ filter type of the alias.
5. Select Device type and enter the beginning of the group name, for example, "Irrigation". Click "Add" in the lower rigth corner.
6. After first alias has been added, click an "Add alias" button again.
7. Enter the alias name, select a _Group entities_ filter type of the alias.
8. Move slider on to use a dashboard state entity as an entity group.
9. In Default state entity group, select _Device_ type and _Irrigation system_ as entity group.
10. Click "Add" in the lower right corner of the dialog box.
11. After both aliases have been added, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-group-name" %}
<br>

Now let's use an added alias in a widget:
1. Click the "Add new widget" sign in the middle of the screen.
2. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
3. Input a data source: Entity type and _Entity group name_ alias. Click "Add" in the lower right corner to add a widget.
4. After a widget has been added, click the "pencil" icon in the top right corner of it to enter an Edit mode of the widget.
5. Move to the Action cell and click a "+" icon to add a new action.
6. In the Add widget dialog, select an [action source](/docs/user-guide/ui/widget-actions/#action-sources) which is responsible for each entity separately (action cell button, on row click etc.)
7. Enter the name of the action ${entityName} which takes the clicked on entity's name and uses it during the action performance.
8. If it is needed, choose an icon that represents a button for an action execution.
9. Select _Update current dashboard state_ action type and click "Add" to add a new action to the widget.
10. After the action has been added successfully, click big orange tick mark in the top right of the screen to apply changes.
11. Now, add a widget on which action will be performed by clicking orange "+" sign in the bottom right corner of the screen and choosing a "Paper" sign ("Create new widget").
12. From the drop-down Select widget menu, select a Cards bundle. Move to the cell "Latest values" and pick an Entity Table widget.
13. Input a data source: Entity type and _group entities_ alias and add a telemetry. Click "Add" in the bottom right corner.
14. After both widgets have been added, click a tick mark in the bottom right corner of the screen.

{% include images-gallery.html imageCollection="entity-group-name-1" %}

 
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

