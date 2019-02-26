---
layout: docwithnav
assignees:
- yefimov-andrey
title: Aliases
description: ThingsBoard Aliases

---

* TOC
{:toc}

In order to create a dashboard, aliases have to be created first in order to define data from which entities will be 
used. Aliases can be as easy as referring to a single device or as complicated as creating a complex search query for 
specific assets from a list.

In this guide aliases will be used on a system with a following scheme:

![image](/images/user-guide/ui/alias-scheme.png)

and all devices have "water_level" generated values coming to them.

## Alias types

### Single entity

This alias allows to choose a single entity, which can be device, asset, entity view, tenant, customer, dashboard, 
data converter, scheduler event, blob entity or current customer.

<img data-gifffer="/images/user-guide/ui/single-entity-alias.gif" />

This alias filters one device, which in this case is Device A.

### Group entities

This alias allows to choose a single group of entities, which can be a customer group, an asset group or a device group.

<img data-gifffer="/images/user-guide/ui/group-entity-alias.gif" />

This alias filters group of devices, which in this case is Irrigation systems.

### Entity list

This alias allows to choose several entities manually without entering query, which can be device(s), asset(s), entity 
view(s), tenant(s), customer(s), dashboard(s), data converter(s), scheduler event(s), blob entity(-ies) or customer(s).

<img data-gifffer="/images/user-guide/ui/entity-list-alias.gif" />

This alias filters a list of several devices, which in this case are Device A and Device B.

### Entity name

This alias allows to choose one or more entities names of which start with entered query, which can be device(s), 
asset(s), entity view(s), tenant(s), customer(s), dashboard(s), data converter(s), scheduler event(s), blob entity(-ies)
 or customer(s).
 
<img data-gifffer="/images/user-guide/ui/entity-name-alias.gif" />

 This alias filters devices whose names start with ‘Device’.
 
### Entity group list

This alias allows to choose several entity groups manually without entering query, which can be device group(s), 
asset group(s), entity view group(s), customer group(s), dashboard group(s) or user group(s). 

<img data-gifffer="/images/user-guide/ui/entity-group-list-alias.gif" />
 
 This alias filters a list of device groups, which in this case are ‘Irrigation systems’ and ‘Moisture sensors’.
 
### Entity group name

This alias allows to choose several entity groups names of which start with entered query, which can be device group(s),
asset group(s), entity view group(s), customer group(s), dashboard group(s) or user group(s). 

For this example an empty device group named 'Irrigation machines' was created.

<img data-gifffer="/images/user-guide/ui/entity-group-name-alias.gif" />
 
 This alias filters device groups whose names start with ‘Irrigation’.
 
### Entity from dashboard state
This alias allows to choose entity(-ies) from dashboard state which can be device, asset, entity view, tenant, customer,
 dashboard, data converter, scheduler event, blob entity or current customer. 
  
It is used for filtering data for other dashboard states, for example, if Timeseries widget is created on a 
root dashboard state with several entities displayed on it and you want to create a dashboard state which will display
a widget with the entity you clicked on, you need to use this alias. 
 
 In the following example the alias is used after group entities alias was created.
 
 <img data-gifffer="/images/user-guide/ui/entity-dashboard-state-alias.gif" />

### Asset type

This alias allows to choose assets of entered type (and, if needed) names of which start with entered query.

 <img data-gifffer="/images/user-guide/ui/asset-type-alias.gif" />
 
 This alias filters assets of type ‘field’ and with name starting with ‘House’.
 
### Device type

This alias allows to choose devices of entered type (and, if needed) names of which start with entered query.

 <img data-gifffer="/images/user-guide/ui/device-type-alias.gif" />
 
 This alias filters devices of type ‘Device’.
 
### Entity view type

This alias allows to choose entity views of entered type (and, if needed) names of which start with entered query.

An entity view called 'Device-D-entity-view' was created with a type 'example-type' which provides access to
 'water_level' timeseries from Device D.

 <img data-gifffer="/images/user-guide/ui/entity-view-type-alias.gif" />
 
This alias filters entity Views of type ‘example-type’ and with name starting with ‘Device’.

### Relations query

This alias allows to choose entities which are related to specified originator up to specified level and in specified 
direction.

 <img data-gifffer="/images/user-guide/ui/relations-query-alias.gif" />

This alias filters entities that have any relation from Asset ‘Street A’ up to relation level 2.

### Asset search query

This alias allows to choose assets of specified type which are related to specified originator up to specified level and
in specified direction.

 <img data-gifffer="/images/user-guide/ui/Asset-search-query-alias.gif" />

This alias filters assets with types ‘field’ that have any relation to Device ‘Device D’ with relation level 1.

### Device search query

This alias allows to choose devices of specified type which are related to specified originator up to specified level
and in specified direction. 

 <img data-gifffer="/images/user-guide/ui/Device-search-query-alias.gif" />

This alias filters devices with types ‘Device’ that have any relation from Asset ‘House C’ up to relation level 1.

### Entity view search query

This alias allows to choose entity views of specified type which are related to specified originator up to specified
level and in specified direction.

An entity view called 'Device-D-entity-view' which has 'contains' relation to it from Device D was created with a type
 'example-type' which provides access to 'water_level' timeseries from Device D.

 <img data-gifffer="/images/user-guide/ui/entity-view-type-search-query-alias.gif" />
 
This alias filters entity views with types ‘example-type’ that have any relation from device ‘Device D’ up to
relation level 1.

