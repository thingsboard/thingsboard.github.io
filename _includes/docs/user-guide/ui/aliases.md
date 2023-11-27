* TOC
{:toc}

Alias is a reference to a single entity or group of entities that are used in the widgets. Alias may be static or dynamic.

Aliases can be as easy as referring to a single device or as complicated as creating a complex search query for specific assets from a list. 

**In this tutorial, aliases will be used on a system according to the scheme shown below and all devices have "temperature" generated values coming to them:**

<object width="60%" data="/images/user-guide/ui/alias-scheme.svg"></object>

## Prerequisites

Before proceeding with this guide, it's recommended that you follow [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide to become familiar with ThingsBoard devices dashboards and widgets. This will enhance your learning experience and understanding of the concepts presented here.

## Creating alias

To create an alias, you need to define the entities from which data will be extracted.

Then follow these steps:

{% include images-gallery.html imageCollection="create-alias" showListImageTitles="true" %}

Now, let’s use an added alias in a widget:

{% include images-gallery.html imageCollection="use-alias-in-widget" showListImageTitles="true" %}

## Alias types

In the ThingsBoard, there are the following types of aliases: [Single entity](#single-entity), [Group entities](#group-entities), [Entity list](#entity-list), [Entity name](#entity-name), [Entity type](#entity-type), [Entity group list](#entity-group-list), [Entities by group name](#entities-by-group-name), [Entity from dashboard state](#entity-from-dashboard-state), [Owner of entity from dashboard state](#owner-of-entity-from-dashboard-state), [Asset type](#asset-type), [Device type](#device-type), [Entity view type](#entity-view-type), [Edge type](#edge-type), [Api Usage State](#api-usage-state), [Relations query](#relations-query), [Asset search query](#asset-search-query), [Device search query](#device-search-query), [Entity view search query](#entity-view-search-query), [Edge search query](#edge-search-query) and [Scheduler events](#scheduler-events).

They provide flexibility and powerful capabilities for configuring dashboards in ThingsBoard, allowing users to efficiently organize and visualize data from various sources.

Let's take a look at each of them.

### Single entity

This alias allows choosing a single entity. It can be a device, asset, entity view, tenant, customer, dashboard, user, data converter, integration, scheduler event, blob entity, role, edge, current customer, current tenant, current user or current user owner.

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Single entity" filter type. Then choose the entity type and specify the final entity/entities.

{% include images-gallery.html imageCollection="single-alias-1" %}

In this example, an alias was created that filters one device - Thermometer A1. Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Single entity" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters one device has been added.

{% include images-gallery.html imageCollection="single-alias-2" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Group entities

This alias allows choosing one entity group as the data source. It can be a device group, asset group, entity view group, customer group, dashboard group, user group and edge group.

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and select the entity group.

{% include images-gallery.html imageCollection="group-entities-1" %}

This alias filters the device group - Thermostats. 

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Group entities" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters one device has been added.

{% include images-gallery.html imageCollection="group-entities-2" %}
{% endif %}

### Entity list

This alias allows you to display multiple entities.
It can be devices, assets, entity views, tenants, customers, dashboards, user, data converters, integrations, scheduler events, blob entities, roles or edges.

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Entity list" filter type. Then choose the entities type and choose the entities whose data you want to display on the widget.

{% include images-gallery.html imageCollection="entity-list-1" %}

This alias filters a list of several devices: Thermometer A1, Compressor BC-10, Compressor QA-32.

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity list" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters a list of several devices, which in this case are Compressor BC-10, Compressor QA-32 and Thermometer A1, has been added

{% include images-gallery.html imageCollection="entity-list-2" %}

### Entity name

This alias allows you to display entities whose names start with the entered expression.
These objects can be devices, assets, entity views, tenants, customers, dashboards, users, data converters, integrations, scheduler events, blob entities, rales or edges.  

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Entity name" filter type. Then choose the entities type and enter an expression that will filter the names of the displayed entities - "Compressor".

{% include images-gallery.html imageCollection="entity-name-1" %}

This alias filters devices whose names start with "Compressor". 

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity name" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with alias that filters devices, which names start with ‘Compressor’, has been added.

{% include images-gallery.html imageCollection="entity-name-2" %}

### Entity type

This alias allows you to display all your entities and your customers' entities of the specified type.
These objects can be devices, assets, entity views, tenants, customers, dashboards, users, data converters, integrations, scheduler events, blob entities, rales or edges.

Adding an alias: in the "Add Alias" dialog, enter the alias name, select the filter as "Entity Type," and choose the entity type.

{% include images-gallery.html imageCollection="entity-type-1" %}

This alias displays all your and your customers' devices. 

Let's use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity type" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget displaying all your devices and your customers' devices has been added.

{% include images-gallery.html imageCollection="entity-type-2" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Entity group list

This alias allows you to display list of entity groups.
It can be a device group(s), asset group(s), entity view group(s), customer group(s), dashboard group(s), user group(s) or edge group(s).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the “Entity group list” filter. Then select the entity type and specify entity groups you want to display on the widget.

{% include images-gallery.html imageCollection="entity-group-list-1" %}

This alias filters a list of device groups, which in this case are "Compressors" and "Thermostats". 

Let’s use an added alias in a widget. In this example, we will need two aliases: created "Entity group list" alias and the previously discussed "[Group entities](#group-entities)" alias.

{% include images-gallery.html imageCollection="entity-group-list-2" %}

First we need to create widget that will display a list of device groups. Add an Entities table widget. Use the "Entity group list" alias as a data source.

{% include images-gallery.html imageCollection="entity-group-list-3" %}

Now we need to create another Entities table widget to display devices. This time, use the "Group entities" alias as the data source.

{% include images-gallery.html imageCollection="entity-group-list-4" %}

Finally, we need to add an [action](/docs/{{docsPrefix}}user-guide/ui/widget-actions) that updates the current state of the dashboard.

{% include images-gallery.html imageCollection="entity-group-list-5" showListImageTitles="true" %}

Click on the row with the device group name in the “Device groups” widget. The action will be executed, and the devices of the selected devices group will be displayed in the “Devices” widget.

{% include images-gallery.html imageCollection="entity-group-list-6" %}

### Entity group name

This alias allows choosing multiple entity name groups that begin with an entered query, which can be device group(s),
asset group(s), entity view group(s), customer group(s), dashboard group(s) user group(s) or edge group(s).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the "Entity group name" filter type. Then choose the entity type and enter an expression that will filter the names of the displayed entity groups.

{% include images-gallery.html imageCollection="entity-group-name-1" %}

This alias filters device groups whose names start with "Compressor".

Let’s use an added alias in a widget. In this example, we will need two aliases: created "Entity group name" alias and the previously discussed "[Group entities](#group-entities)" alias.

{% include images-gallery.html imageCollection="entity-group-name-2" %}

First we need to create widget that will display a list of device groups whose names start with "Compressor". Add an Entities table widget. Use the “Entity group name” alias as a data source.

{% include images-gallery.html imageCollection="entity-group-name-3" %}

Add an [action](/docs/{{docsPrefix}}user-guide/ui/widget-actions) that updates the current state of the dashboard.

{% include images-gallery.html imageCollection="entity-group-name-4" showListImageTitles="true" %}

Now we need to create another Entities table widget to display devices. This time, use the “Group entities” alias as the data source.

{% include images-gallery.html imageCollection="entity-group-name-5" %}

Click on the row with the device group name in the “Device groups” widget. 
The action will be executed, and the devices of the selected devices group will be displayed in the “Devices” widget.

{% include images-gallery.html imageCollection="entity-group-name-6" %}

### Entities by group name

This alias allows choosing entities by entering the exact full name of an entity group. This entity can be device group(s), asset group(s), entity view group(s), customer group(s), dashboard group(s), user group(s), or edge group(s).
The difference between Entities by group name and Group entities is that the first one resolved the group by the specified name while the second one uses hard-coded group ID.
More important, during the lookup of entities, this alias will use information about the current user. So, if you share the dashboard with multiple customers,
and would like each customer to see devices that belong to him, you should use this alias instead of "Group entities".

Adding an alias: in the "Add alias" dialog, enter the alias name, and select the "Entities by group name" filter type. Then choose the entity type and enter an expression that will filter the names of the displayed entity groups.

{% include images-gallery.html imageCollection="entities-by-group-name-1" %}

This alias filters device group - Thermostats. 

Let’s use an added alias in a widget. In the “Tables” widgets bundle select the “Entities table” widget. 
Navigate to the “Entity alias” tab. Specify the “Group entities” alias in the “Entity alias” field and “temperature” data key in the “Columns” section. 
Click “Add” and apply changes. The Entities table widget with the alias that filters one device has been added.

{% include images-gallery.html imageCollection="entities-by-group-name-2" %}
{% endif %}

### Entity from dashboard state

This alias allows choosing entity(-ies) from dashboard state which can be device, asset, entity view, tenant, customer, 
dashboard, user, data converter, integration, scheduler event, blob entity, role, edge, current customer, current tenant, current user, current user owner.

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the filter type "Entity from dashboard state". Then click "Add".

{% include images-gallery.html imageCollection="entity-from-dashboard-state-1" %}

It is used for filtering data for other dashboard states.
For example, if Time series widget is created on a [root dashboard state](/docs/{{docsPrefix}}user-guide/dashboards/#states) with several entities displayed on it, and you'd like to create a dashboard state which will display
a widget with the entity you clicked on, you need to use this alias. 

For the next example, we will need two aliases: the previously discussed "[Group entities](#group-entities)" alias and the "Entity from dashboard state" alias. Let's start:

First we need to create an Entity table widget that will display a list of entities: add an Entity table widget that will display a list of entities. Use the "Group entities" alias as a data source.

{% include images-gallery.html imageCollection="entity-from-dashboard-state-2" %}

After adding the widget, add a new a [state](/docs/{{docsPrefix}}user-guide/dashboards/#states):

{% include images-gallery.html imageCollection="entity-from-dashboard-state-3" showListImageTitles="true" %}

Time to add an [action](/docs/{{docsPrefix}}user-guide/ui/widget-actions) to a root dashboard widget and perform it using an Entity from dashboard state alias on the widget in the created state:

{% include images-gallery.html imageCollection="entity-from-dashboard-state-4" showListImageTitles="true" %}

Now, click an action button opposite any entity. You will be transitioned to an inner state that shows a widget with entity from dashboard’s state details

{% include images-gallery.html imageCollection="entity-from-dashboard-state-5" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Owner of entity from dashboard state

This alias allows displaying owners of the devices, assets, entities, etc. Commonly used when there is a hierarchy of customers and it is needed to see what devices belong to whom.

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

This alias allows you to filter assets by the specified asset profile (and optionally by names starting with the entered query).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the “Asset type” filter type. Then specify the asset profile(s) and enter an expression that will filter the names of the displayed assets.

{% include images-gallery.html imageCollection="asset-type-1" %}

This alias filters assets whose asset profile is "buildings" and whose names start with “Build”.

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Asset type" alias in the "Entity alias" field. Click "Add" and apply changes. The Entities table widget that displays assets with the asset profile "buildings" and whose name begins with "Build" has been added.

{% include images-gallery.html imageCollection="asset-type-2" %}
 
### Device type

This alias allows you to filter devices by the specified device profile (and optionally by names starting with the entered query).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the “Device type” filter type. Then specify the device profile(s) and enter an expression that will filter the names of the displayed devices.

{% include images-gallery.html imageCollection="device-type-1" %}

This alias filters devices whose device profile is "thermometers" and whose names start with “Therm”.

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Device type" alias in the "Entity alias" field. Click "Add" and apply changes. The Entities table widget that displays devices with the device profile "thermometers" and whose name begins with "Therm" has been added.

{% include images-gallery.html imageCollection="device-type-2" %}
 
### Entity view type

This alias allows you to filter devices by the specified entity view type (and optionally by names starting with the entered query).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the “Entity view type” filter type. Then specify the entity view type(s) and enter an expression that will filter the names of the displayed entity view.

{% include images-gallery.html imageCollection="entity-view-type-1" %}

This alias filters entity Views of type ‘Compressors Entity View Type’ and with name starting with ‘Compressor’.
An entity views called 'Compressor BC-10 Entity View' and 'Compressor QA-32 Entity View' was created with a type 'Compressors Entity View Type' which provides access to 'Power' timeseries from Compressor BC-10 and Compressor QA-32.

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity view type" alias in the "Entity alias" field. Click "Add" and apply changes. The Entities table widget that displays entity views with the entity view type "Compressors Entity View Type" and whose name begins with "Compressor" has been added.

{% include images-gallery.html imageCollection="entity-view-type-2" %}

### Edge type

This alias allows you to filter devices by the specified edge type (and optionally by names starting with the entered query).

Adding an alias: in the “Add alias” dialog, enter the alias name, and select the “Entity view type” filter type. Then specify the entity view type(s) and enter an expression that will filter the names of the displayed entity view.

{% include images-gallery.html imageCollection="edge-type-1" %}

This alias filters edges whose edge type is "edge instance" and whose names start with “Edge”.

Let’s use an added alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Edge type" alias in the "Entity alias" field. Click "Add" and apply changes. The Entities table widget that displays edges with the edge type "edge instance" and whose name begins with "Edge" has been added.

{% include images-gallery.html imageCollection="edge-type-2" %}

### Api Usage State

There is an API Usage layout in the main menu of the TB platform. API Usage shows full statistics on the platform.  
Api Usage State alias allows fetching only the data you need from the user dashboard statistics.

{% include images-gallery.html imageCollection="api-usage-state-1" %}

Let's learn how to use the "Api Usage State" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Api Usage State" alias in the "Entity alias" field and add data key(s) in the "Columns" section that fetches statistics from an API usage. Click "Add" and apply changes. The Entities table widget that displays API usage statistics has been added.

{% include images-gallery.html imageCollection="api-usage-state-2" %}

### Relations query

This alias allows choosing entities which are related to specified originator up to specified level and in specified 
direction.

Adding an alias: in the “Add alias” dialog, enter the alias name, select the “Relations query” filter type, and select the entity type and an entity. Set direction to "From" or "To" and max relation level.

{% include images-gallery.html imageCollection="relations-query-1" %}

In the example alias filters entities that have any relation to Asset ‘District A’ up to relation level 3.

Let's learn how to use the "Relations query" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Api Usage State" alias in the "Entity alias" field and add data key(s) in the "Columns" section that fetches statistics from an API usage. Click "Add" and apply changes. The Entities table widget that displays API usage statistics has been added.

{% include images-gallery.html imageCollection="relations-query-2" %}

### Asset search query

This alias allows choosing assets of specified type which are related to specified entity up to specified level and in specified direction.  

Adding an alias: in the “Add alias” dialog, enter the alias name, select the "Asset search query" filter type, and select the entity type and an entity. Set direction to "From" or "To" and max relation level and specify the asset type(s) by which the assets will be filtered.

{% include images-gallery.html imageCollection="asset-search-query-1" %}

This alias filters assets with asset profiles "buildings" and "district" that have any relation to device "Compressor QA-32" with relation level 2.

Let's learn how to use the "Asset search query" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Asset search query" alias in the "Entity alias" field and add "name" and "type" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget that displays assets that have any relation to device “Compressor QA-32” with relation level 2 has been added.

{% include images-gallery.html imageCollection="asset-search-query-2" %}

### Device search query

This alias allows choosing devices of specified type which are related to specified originator up to specified level and in specified direction.  

Adding an alias: in the “Add alias” dialog, enter the alias name, select the "Device search query" filter type, and select the entity type and an entity. Set direction to "From" or "To" and max relation level and specify the device profile(s) by which devices will be filtered.

{% include images-gallery.html imageCollection="device-search-query-1" %}

This alias filters devices with device profiles "compressors" that have any relation from asset "Building A" up to relation level 1.

Let's learn how to use the "Device search query alias" in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Device search query" alias in the "Entity alias" field and add "name" and "type" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget that displays devices that have any relation to asset “Building A” up to relation level 1 has been added.

{% include images-gallery.html imageCollection="device-search-query-2" %}

### Entity view search query

This alias allows choosing entity views of specified type which are related to specified originator up to specified level and in specified direction.  
An entity view called 'Compressor BC-10 Entity View' which has 'contains' relation to it from Compressor BC-10 was created with a type 'Compressors Entity View Type' which provides access to 'Power' timeseries from Compressor BC-10.

Adding an alias: in the “Add alias” dialog, enter the alias name, select the "Entity view search query" filter type, and select the entity type and an entity. Set direction to "From" or "To" and max relation level and specify the entity view type(s) by which entity views will be filtered.

{% include images-gallery.html imageCollection="entity-view-search-query-1" %}

This alias filters entity views with types "Compressors Entity View Type" that have any relation from asset "Building A" up to relation level 1.

Let's learn how to use the "Entity view search query" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity view search query" alias in the "Entity alias" field and add "name" and "type" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget that displays devices that have any relation to asset “Building A” up to relation level 1 has been added.

{% include images-gallery.html imageCollection="entity-view-search-query-2" %}

### Edge search query

This alias allows choosing entity views of specified type which are related to specified originator up to specified level and in specified direction.  
An entity view called 'Compressor BC-10 Entity View' which has 'contains' relation to it from Compressor BC-10 was created with a type 'Compressors Entity View Type' which provides access to 'Power' timeseries from Compressor BC-10.

Adding an alias: in the "Add alias" dialog, enter the alias name, select the "Entity view search query" filter type, and select the entity type and an entity. Set direction to "From" or "To" and max relation level and specify the entity view type(s) by which entity views will be filtered.

{% include images-gallery.html imageCollection="edge-search-query-1" %}

This alias filters devices with entity view types "Compressors Entity View Type" that have any relation from asset "Building A" up to relation level 1.

Let's learn how to use the "Entity view search query" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Edge search query" alias in the "Entity alias" field and add "name" and "type" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget that displays devices that have any relation to asset “Building A” up to relation level 1 has been added.

{% include images-gallery.html imageCollection="edge-search-query-2" %}


{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Scheduler events

This alias allows displaying scheduler events of specified an entity.

Adding an alias: in the "Add alias" dialog, enter the alias name, select the "Scheduler events" filter type, and select the entity.

{% include images-gallery.html imageCollection="scheduler-events-1" %}

This alias filters scheduler events for the selected entity - Compressor BC-10.

Let's learn how to use the "Scheduler events" alias in a widget. In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Scheduler events" alias in the "Entity alias" field and add "name" and "type" data keys in the "Columns" section. Click "Add" and apply changes. The Entities table widget that displays scheduler events for the Compressor BC-10 device has been added.

{% include images-gallery.html imageCollection="scheduler-events-2" %}

{% endif %}