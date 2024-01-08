* TOC
{:toc}

Alias is a reference to a single entity or group of entities that are used in the widgets. Alias may be static or dynamic.

They can range from a simple reference to a single device to a complex search query for specific assets from a list.

In this tutorial, aliases will be used in the system according to the scheme shown below. And all devices transmit telemetry values - "temperature".

![image](/images/user-guide/ui/alias/alias-scheme.png)

## Prerequisites

Before proceeding with this guide, it's recommended that you follow [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide to become familiar with ThingsBoard devices, dashboards and widgets. This will enhance your learning experience and understanding of the concepts presented here.

## Creating alias

To create an alias, you need to define the entities from which data will be extracted.

Then follow these steps:

{% include images-gallery.html imageCollection="create-alias" showListImageTitles="true" %}

Now, let’s use the added alias in a widget:

{% include images-gallery.html imageCollection="use-alias-in-widget" showListImageTitles="true" %}

## Alias types

{% if docsPrefix == null %}
In the ThingsBoard, there are various types of aliases, each offering different capabilities for configuring widgets: [Single entity](#single-entity), [Entity list](#entity-list), [Entity name](#entity-name), [Entity type](#entity-type), [Entity from dashboard state](#entity-from-dashboard-state), [Asset type](#asset-type), [Device type](#device-type), [Entity view type](#entity-view-type), [Edge type](#edge-type), [Api Usage State](#api-usage-state), [Relations query](#relations-query), [Asset search query](#asset-search-query), [Device search query](#device-search-query), [Entity view search query](#entity-view-search-query), and [Edge search query](#edge-search-query).
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
In the ThingsBoard, there are various types of aliases, each offering different capabilities for configuring widgets: [Single entity](#single-entity), [Group entities](#group-entities), [Entity list](#entity-list), [Entity name](#entity-name), [Entity type](#entity-type), [Entity group list](#entity-group-list), [Entities by group name](#entities-by-group-name), [Entity from dashboard state](#entity-from-dashboard-state), [Owner of entity from dashboard state](#owner-of-entity-from-dashboard-state), [Asset type](#asset-type), [Device type](#device-type), [Entity view type](#entity-view-type), [Edge type](#edge-type), [Api Usage State](#api-usage-state), [Relations query](#relations-query), [Asset search query](#asset-search-query), [Device search query](#device-search-query), [Entity view search query](#entity-view-search-query), [Edge search query](#edge-search-query), and [Scheduler events](#scheduler-events).
{% endif %}

They provide flexibility and powerful capabilities for configuring dashboards in ThingsBoard, allowing users to efficiently organize and visualize data from various sources.

Let's take a look at each of them.

### Single entity

{% if docsPrefix == null %}
This alias allows choosing a single entity. It can be a device, asset, entity view, tenant, customer, user, dashboard, edge, current customer, current tenant, current user or current user owner.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
This alias allows choosing a single entity. It can be a device, asset, entity view, tenant, customer, dashboard, user, data converter, integration, scheduler event, blob entity, role, edge, current customer, current tenant, current user or current user owner.
{% endif %}

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Single entity" filter type. Then choose the entity type and specify the final entity.

{% include images-gallery.html imageCollection="single-alias-1" %}

In this example, an alias has been created that filters one device - Thermometer A1. 

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Single entity" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. 
The Entities table widget with the alias that displays one device - Thermometer A1 has been added.

{% include images-gallery.html imageCollection="single-alias-2" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Group entities

This alias allows choosing one entity group as the data source. It can be a device group, asset group, entity view group, customer group, dashboard group, user group and edge group.

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and select the entity group.

{% include images-gallery.html imageCollection="group-entities-1" %}

In this example, an alias has been created that displays all devices that belong to the "Thermostats" device group.

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Group entities" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. 
The Entities table widget with the alias that displays all devices that belong to the “Thermostats” device group has been added.

{% include images-gallery.html imageCollection="group-entities-2" %}
{% endif %}

### Entity list

{% if docsPrefix == null %}
This alias allows you to display multiple entities. It can be devices, assets, entity views, tenants, customers, dashboards, users or edges.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
This alias allows you to display multiple entities. It can be devices, assets, entity views, tenants, customers, dashboards, users, data converters, integrations, scheduler events, blob entities, roles or edges.
{% endif %}

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Entity list" filter type. Then choose the entities type and specify entities whose data you want to display on the widget.

{% include images-gallery.html imageCollection="entity-list-1" %}

{% if docsPrefix == null %}
This alias filters a list from specified devices: Thermometer A1, Thermometer A2, and Thermometer A3.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
This alias filters a list from specified devices: Thermometer A1, Compressor BC-10, and Compressor QA-32.
{% endif %}

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity list" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. 

{% if docsPrefix == null %}
The Entities table widget with the alias that displays a list of several devices, which in this case are Thermometer A1, Thermometer A2, and Thermometer A3 has been added.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
The Entities table widget with the alias that displays a list of several devices, which in this case are Compressor BC-10, Compressor QA-32, and Thermometer A1 has been added.
{% endif %}


{% include images-gallery.html imageCollection="entity-list-2" %}

### Entity name

{% if docsPrefix == null %}
This alias allows you to display entities whose names start with the entered expression. These objects can be devices, assets, entity views, tenants, customers, users, dashboards or edges.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
This alias allows you to display entities whose names start with the entered expression. These objects can be devices, assets, entity views, tenants, customers, dashboards, users, data converters, integrations, scheduler events, blob entities, rales or edges.
{% endif %}

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Entity name" filter type. Then choose the entities type and enter an expression that will filter the names of the displayed entities.

{% include images-gallery.html imageCollection="entity-name-1" %}

This alias filters devices with names start with "Compressor". 

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity name" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. 
The Entities table widget with alias that filters devices, which names start with ‘Compressor’, has been added.

{% include images-gallery.html imageCollection="entity-name-2" %}

### Entity type

{% if docsPrefix == null %}
This alias allows you to display all your entities and your customers' entities of the specified type. These objects can be devices, assets, entity views, tenants, customers, users, dashboards or edges.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
This alias allows you to display all your entities and your customers' entities of the specified type. These objects can be devices, assets, entity views, tenants, customers, dashboards, users, data converters, integrations, scheduler events, blob entities, rales or edges.
{% endif %}

Adding an alias: in the "Add Alias" dialog, enter the alias name, select the filter as "Entity Type", and choose the entity type.

{% include images-gallery.html imageCollection="entity-type-1" %}

This alias displays all your and your customers' devices. 

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity type" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. 
The Entities table widget displaying all your devices and your customers' devices has been added.

{% include images-gallery.html imageCollection="entity-type-2" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Entity group list

This alias allows you to display a list of entity groups, which can include device group(s), asset group(s), entity view group(s), customer group(s), dashboard group(s), user group(s) or edge group(s).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the "Entity group list" filter. Then select the entity type and specify entity groups you want to display on the widget.

{% include images-gallery.html imageCollection="entity-group-list-1" %}

This alias displays a list of device groups, which in this case are "Compressors" and "Thermostats". 

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity group list" alias in the "Entity alias" field. Click "Add" and apply changes.
The Entities table widget displaying a list of device groups has been added.

{% include images-gallery.html imageCollection="entity-group-list-2" %}

### Entity group name

This alias allows you to display multiple entity name groups that begin with an entered query.
They can include device groups, asset groups, entity view groups, customer groups, dashboard groups, user groups, or edge groups.

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the "Entity group name" filter type. Then choose the entity type and enter an expression that will filter the names of the displayed entity groups.

{% include images-gallery.html imageCollection="entity-group-name-1" %}

This alias displays device groups whose names start with "Compressor".

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity group name" alias in the “Entity alias” field. Click "Add" and apply changes.
The Entities table widget, displaying device groups whose name begins with the entered query, has been added.

{% include images-gallery.html imageCollection="entity-group-name-2" %}

### Entities by group name

This alias allows filtering entities by entering the exact full name of a group whose entities you want to display in the widget.
They can include device groups, asset groups, entity view groups, customer groups, dashboard groups, user groups, or edge groups.

The difference between the "Entities by group name" alias and the "[Group entities](#group-entities)" alias is that the former resolves the group by the specified name while the latter uses a hard-coded group ID.
More importantly, during the lookup of entities, this alias will use information about the current user. 
So, if you share the dashboard with multiple customers, and would like each customer to see devices that belong to them, you should use this alias instead of "Group entities".

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Entities by group name" filter type. Then select an entity type and enter the exact full name of a group whose entities you want to display.

{% include images-gallery.html imageCollection="entities-by-group-name-1" %}

This alias filters device group by name - "Compressors". 

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. 
Navigate to the "Entity alias" tab. Specify the "Entities by group name" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes.
The Entities table widget that displays entities filtered by the exact full name of the entity group entered has been added.

{% include images-gallery.html imageCollection="entities-by-group-name-2" %}
{% endif %}

### Entity from dashboard state

{% if docsPrefix == null %}
This alias allows choosing one or more entities from the dashboard state. The entities can be a device, asset, entity view, tenant, customer, user, dashboard, edge, current customer, current tenant, current user, or current user owner.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
This alias allows choosing one or more entities from the dashboard state. The entities can be a device, asset, entity view, tenant, customer, dashboard, user, data converter, integration, scheduler event, blob entity, role, edge, current customer, current tenant, current user, or current user owner.
{% endif %}

For example, if Entities table widget is created on a [root dashboard state](/docs/{{docsPrefix}}user-guide/dashboards/#states) with several entities displayed on it, and you'd like to create a dashboard state which will display a widget with the entity you clicked on, you need to use this alias.

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the filter type "Entity from dashboard state". Then click "Add".

{% include images-gallery.html imageCollection="entity-from-dashboard-state-1" %}

This alias is used for filtering data for other dashboard states.

{% if docsPrefix == null %}
For the next example, we will need two aliases: the previously discussed "[Entity type](#entity-type)" alias and the "Entity from dashboard state" alias. Let's start:

First we need to create an Entity table widget that will display a list of entities: add an Entities table widget that will display a list of entities. Use the "Entity type" alias as a data source.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
For the next example, we will need two aliases: the previously discussed "[Group entities](#group-entities)" alias and the "Entity from dashboard state" alias. Let's start:

First we need to create an Entity table widget that will display a list of entities: add an Entities table widget that will display a list of entities. Use the "Group entities" alias as a data source.
{% endif %}

{% include images-gallery.html imageCollection="entity-from-dashboard-state-2" %}

After adding the Entities table widget, add a new a [state](/docs/{{docsPrefix}}user-guide/dashboards/#states):

{% include images-gallery.html imageCollection="entity-from-dashboard-state-3" showListImageTitles="true" %}

Time to add an [action](/docs/{{docsPrefix}}user-guide/ui/widget-actions) to a root dashboard widget and execute it using an Entity from dashboard state alias on the widget in the created state:

{% include images-gallery.html imageCollection="entity-from-dashboard-state-4" showListImageTitles="true" %}

Now, click the action button next to any entity. You will be transitioned to an inner state, which contains a widget with the details of the selected entity.

{% include images-gallery.html imageCollection="entity-from-dashboard-state-5" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Owner of entity from dashboard state

This alias allows displaying owners of the devices, assets, entities, etc. Commonly used when there is a hierarchy of customers, providing visibility into which devices belong to whom.

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the filter type "Owner of entity from dashboard state". Then click "Add".

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-1" %}

Let’s learn how to use the "Owner of entity from dashboard state" alias to display device owners on the widget.

For the next example, we will need two aliases: the previously discussed "[Entity type](#entity-type)" alias and the "Owner of entity from dashboard state" alias.

First let's add an Entity table widget that will display a list of all devices. Use the “Entity type” alias as a data source.

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-2" %}

Add another Entities table widget that will display the owner of the selected device. Specify the "Owner of entity from dashboard state" alias in the "Entity alias" field. Click the "Add" button in the lower right corner;

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-3" %}

Now we need to add an [action](/docs/{{docsPrefix}}user-guide/ui/widget-actions) that updates the current state of the dashboard.

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-4" showListImageTitles="true" %}

Click on the row with the device name in the "Entities" widget. The action will be executed, and the owner of the selected device will be displayed in the "Device Owner" widget.

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-5" %}
{% endif %}

### Asset type

This alias allows you to filter assets by the specified asset profile(s) (and optionally by names starting with the entered query).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the “Asset type” filter type. Then specify the asset profile(s) and enter an expression that will filter the names of the displayed assets.

{% include images-gallery.html imageCollection="asset-type-1" %}

This alias filters assets whose asset profile is "buildings" and whose names start with “Build”.

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Asset type" alias in the "Entity alias" field. Click "Add" and apply changes. The Entities table widget that displays assets with the asset profile "buildings" and whose name begins with "Build" has been added.

{% include images-gallery.html imageCollection="asset-type-2" %}
 
### Device type

This alias allows you to filter devices by the specified device profile(s) (and optionally by names starting with the entered query).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the “Device type” filter type. Then specify the device profile(s) and enter an expression that will filter the names of the displayed devices.

{% include images-gallery.html imageCollection="device-type-1" %}

This alias filters devices whose device profile is "thermometers" and whose names start with “Therm”.

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Device type" alias in the "Entity alias" field. Click "Add" and apply changes. The Entities table widget that displays devices with the device profile "thermometers" and whose name begins with "Therm" has been added.

{% include images-gallery.html imageCollection="device-type-2" %}
 
### Entity View type

This alias allows you to filter devices by the specified entity view type(s) (and optionally by names starting with the entered query).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the "Entity view type" filter type. Then specify the entity view type(s) and enter an expression that will filter the names of the displayed entity views.

{% include images-gallery.html imageCollection="entity-view-type-1" %}

This alias filters entity views of type "Compressors Entity View Type" and with name starting with "Compressor".

Let's see an example. Entity views named "Compressor BC-10 Entity View" and "Compressor QA-32 Entity View" have been created with the type "Compressors Entity View Type," providing access to the 'Power' timeseries from Compressor BC-10 and Compressor QA-32.

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity view type" alias in the "Entity alias" field. Click "Add" and apply changes. The Entities table widget that displays entity views with the entity view type "Compressors Entity View Type" and whose name begins with "Compressor" has been added.

{% include images-gallery.html imageCollection="entity-view-type-2" %}

### Edge type

This alias allows you to filter devices by the specified edge type(s) (and optionally by names starting with the entered query).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the “Entity view type” filter type. Then specify the entity view type(s) and enter an expression that will filter the names of the displayed entity view.

{% include images-gallery.html imageCollection="edge-type-1" %}

This alias filters edges with an edge type of "edge instance" and names starting with "Edge".

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Edge type" alias in the "Entity alias" field. Click "Add" and apply changes. The Entities table widget that displays edges with the edge type "edge instance" and whose name begins with "Edge" has been added.

{% include images-gallery.html imageCollection="edge-type-2" %}

### API Usage State

There is an API Usage layout in the main menu of the TB platform. API Usage shows full statistics on the platform.  
Api Usage State alias allows fetching only the data you need from the user dashboard statistics.

{% include images-gallery.html imageCollection="api-usage-state-1" %}

Let's learn how to use the "Api Usage State" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Api Usage State" alias in the "Entity alias" field and add data key(s) in the "Columns" section that fetches statistics from an API usage. Click "Add" and apply changes. The Entities table widget that displays API usage statistics has been added.

{% include images-gallery.html imageCollection="api-usage-state-2" %}

### Relations query

This alias allows displaying entities that are related to a specified originator up to a specified level and in a specified direction.

Adding an alias: in the "Add alias" dialog, enter the alias name, specify the "Relations query" filter type.
Then, select the entity type and the entity itself for which you want to display the relationship. Set direction to "From" or "To" and max relation level.

{% include images-gallery.html imageCollection="relations-query-1" %}

In the example alias displays entities that have any relation to asset ‘District A’ up to relation level 3.

Let's learn how to use the "Relations query" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Relations query" alias in the "Entity alias" field and add the "entityType" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget displays entities and their type that have any relation to the asset "District A" up to relation level 3.

{% include images-gallery.html imageCollection="relations-query-2" %}

### Asset search query

This alias allows displaying assets of the specified asset profile(s) that are related to a specified entity up to a specified level and in a specified direction.  

Adding an alias: in the "Add alias" dialog, enter the alias name, select the "Asset search query" filter type, and select the entity type and an entity itself, for which you want to display the relationship. Set direction to "From" or "To", max relation level and specify the asset profile(s) by which the assets will be filtered.

{% include images-gallery.html imageCollection="asset-search-query-1" %}

This alias displays assets with "buildings" and "district" asset profiles that have any relation to the device "Compressor QA-32" with a direction "From" and a relation level of 2.

Let's learn how to use the "Asset search query" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Asset search query" alias in the "Entity alias" field, and add "name" and "type" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget that displays assets that have any relation to the device "Compressor QA-32" with relation level of 2 has been added.

{% include images-gallery.html imageCollection="asset-search-query-2" %}

### Device search query

This alias allows displaying devices of specified device profile(s) that are related to a specified originator up to a specified level and in a specified direction.  

Adding an alias: in the "Add alias" dialog, enter the alias name, select the "Device search query" filter type, and select the entity type and an entity itself, for which you want to display the relationship. Set direction to "From" or "To", max relation level and specify the device profile(s) by which the devices will be filtered.

{% include images-gallery.html imageCollection="device-search-query-1" %}

{% if docsPrefix == null %}
This alias displays devices with the "thermometers" device profile that have any relation to the asset "Building A" with direction "From" and relation level of 1.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
This alias displays devices with the "compressors" device profile that have any relation to the asset "Building A" with direction "From" and relation level of 1.
{% endif %}

Let's learn how to use the "Device search query alias" in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Device search query" alias in the "Entity alias" field and add "name", "type" and "temperature" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget that displays devices that have any relation to the asset "Building A" up to relation level of 1 has been added.

{% include images-gallery.html imageCollection="device-search-query-2" %}

### Entity view search query

This alias allows displaying entity views of the specified type that are related to a specified originator up to a specified level and in a specified direction.

A "Compressor BC-10 Entity View" entity view which has a relation to the "Compressor BC-10" device was created with a type "compressors entity view type" providing access to “temperature” timeseries from Compressor BC-10.

Adding an alias: in the "Add alias" dialog, enter the alias name, select the "Entity view search query" filter type, and select the entity type and an entity itself, for which you want to display the relationship. Set direction to "From" or "To", max relation level and specify the entity view type(s) by which entity views will be filtered.

{% include images-gallery.html imageCollection="entity-view-search-query-1" %}

{% if docsPrefix == null %}
This alias filters entity views with the "compressors entity view type" type that have any relation to the asset "Building A" with direction "From" and relation level of 1.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
This alias filters entity views with the "Compressors Entity View Type" type that have any relation to the asset "Building A" with direction "From" and relation level of 1.
{% endif %}

Let's learn how to use the "Entity view search query" alias in a widget. In the "Tables" widgets bundle, select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity view search query" alias in the "Entity alias" field and add "name", "type" and "temperature" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget displaying entity views that have any relation to the asset "Building A" up to relation level of 1 has been added.

{% include images-gallery.html imageCollection="entity-view-search-query-2" %}

### Edge search query

This alias allows displaying edges of the specified type that are related to a specified originator up to a specified level and in a specified direction.

Adding an alias: in the "Add alias" dialog, enter the alias name, select the "Edge search query" filter type, and select the entity type and an entity itself, for which you want to display the relationship. Set direction to "From" or "To", max relation level and specify the edge type(s) by which the edges will be filtered.

{% include images-gallery.html imageCollection="edge-search-query-1" %}

This alias filters edges with the "edge instance" type that have any relation to the asset "Building A" with a direction "From" and relation level of 1.

Let's learn how to use the "Edge search query" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Edge search query" alias in the "Entity alias" field and add "name" and "type" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget displaying edges with any relation to the asset "Building A" up to relation level of 1 has been added.

{% include images-gallery.html imageCollection="edge-search-query-2" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Scheduler events

This alias allows displaying scheduler events associated with a specified entity.

Adding an alias: in the "Add alias" dialog, enter the alias name, select the "Scheduler events" filter type, and select the entity for which scheduler events will be displayed.

{% include images-gallery.html imageCollection="scheduler-events-1" %}

This alias displays scheduler events for the "Compressor BC-10" device.

Let's learn how to use the "Scheduler events" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Scheduler events" alias in the "Entity alias" field and add "name", "type" and "schedule" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget that displays scheduler events for the "Compressor BC-10" device has been added.

{% include images-gallery.html imageCollection="scheduler-events-2" %}

{% endif %}