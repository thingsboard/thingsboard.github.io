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

In the "Add alias" dialog, enter the alias name, and select the "Single entity" filter type. Then choose the entity type and specify the final entity/entities.

{% include images-gallery.html imageCollection="single-alias-1" %}

In this example, an alias was created that filters one device - Thermometer A1. Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Single entity" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters one device has been added.

{% include images-gallery.html imageCollection="single-alias-2" %}

### Group entities

This alias allows choosing one entity group as the data source. It can be a device group, asset group, entity view group, customer group, dashboard group, user group and edge group.

In the "Add alias" dialog, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and select the entity group.

{% include images-gallery.html imageCollection="group-entities-1" %}

In this example, an alias was created that filters device group - Thermostats. Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Group entities" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters one device has been added.

{% include images-gallery.html imageCollection="group-entities-2" %}

### Entity list

This alias allows you to display multiple entities.
It can be devices, assets, entity views, tenants, customers, dashboards, user, data converters, integrations, scheduler events, blob entities, roles or edges.

In the "Add alias" dialog, enter the alias name, and select the "Entity list" filter type. Then choose the entities type and choose the entities whose data you want to display on the widget.

{% include images-gallery.html imageCollection="entity-list-1" %}

In this example, an alias was created that filters a list of multiple devices. Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity list" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters a list of several devices, which in this case are Compressor BC-10, Compressor QA-32 and Thermometer A1, has been added

{% include images-gallery.html imageCollection="entity-list-2" %}

### Entity name

This alias allows you to display entities whose names start with the entered expression.
These objects can be devices, assets, entity views, tenants, customers, dashboards, users, data converters, integrations, scheduler events, blob entities, rales or edges.  

In the "Add alias" dialog, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and enter an expression that will filter the names of the displayed entities - "Compressor".

{% include images-gallery.html imageCollection="entity-name-1" %}

In this example, an alias was created to filter devices whose names start with "Compressor". Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity name" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with alias that filters devices, which names start with ‘Compressor’, has been added.

{% include images-gallery.html imageCollection="entity-name-2" %}

### Entity type

This alias allows you to display all your entities and your customers' entities of the specified type.
These objects can be devices, assets, entity views, tenants, customers, dashboards, users, data converters, integrations, scheduler events, blob entities, rales or edges.

In the "Add Alias" dialog, enter the alias name, select the filter as "Entity Type," and choose the entity type.

{% include images-gallery.html imageCollection="entity-type-1" %}

In this example, an alias was created to display all your and your customers' devices. Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity type" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget displaying all your devices and your customers' devices has been added.

{% include images-gallery.html imageCollection="entity-type-2" %}

### Entity group list

This alias allows you to display multiple entity groups.
It can be a device group device groups, asset groups, entity view groups, customer groups, dashboard groups, or user groups.

In the “Add alias” dialog, enter the alias name, and select the “Entity group list” filter. Then select the entity type and specify entity groups that you want to display on the widget.

{% include images-gallery.html imageCollection="entity-group-list-1" %}

In this example, an alias was created that filters a list of device groups, which in this case are "Compressors" and "Thermostats". Let’s use an added alias in a widget:

In the “Tables” widgets bundle select the “Entities table” widget. Navigate to the “Entity alias” tab. Specify the “Entity group list” alias in the “Entity alias” field. Click “Add” and apply changes. The Entities table widget displaying a list of device groups specified in the alias has been added.

{% include images-gallery.html imageCollection="entity-group-list-2" %}


Let's learn how to add an Entity group list alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select an _Entity group list_ filter type.
5. Select the Device and input device groups. Click "Add" in the lower right corner of the dialog box.
6. After adding the first alias, click the "Add alias" button again.
7. Enter a name for the alias, select a _Group entities_ filter type.
8. Move the slider to use a dashboard state entity as an entity group.
9. In the Default state entity group, Select the _Device_ type and Irrigation system as entity group.
10. Click "Add" in the lower right corner of the dialog box.
11. After adding both aliases, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-group-list" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type and _Entity group list_ alias. Click "Add" in the lower right corner to add a widget.
4. After adding the widget, click the "pencil" icon in the upper right corner to enter the widget editing mode.
5. Move to the Action cell and click a "+" icon to add a new action.
6. In the Add widget dialog, select an [action source](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#action-sources) which is responsible for each entity separately (action cell button, on row click etc.)
7. Enter the name of the action.
8. If necessary, select the icon representing the button to perform the action.
9. Select the _Update current dashboard state_ action type and click "Add" to add a new action to the widget.
10. After successfully adding the action, click the large orange checkmark in the upper right of the screen to apply the changes.
11. Now, add a widget on which action will be performed by clicking the orange "+" icon in the lower right corner of the screen and choosing a "Paper" icon ("Create new widget").
12. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
13. Input data source: Entity type and _group entities_ alias and add telemetry. Click "Add" in the lower right corner.
14. After adding both widgets, click the checkmark in the lower right corner of the screen.

To execute an action and filter aliases by device groups, click the action cell button.

{% include images-gallery.html imageCollection="entity-group-list-1" %}

### Entity group name

This alias allows choosing multiple entity name groups that begin with an entered query, which can be device group(s),
asset group(s), entity view group(s), customer group(s), dashboard group(s) or user group(s). In this example, an alias filters device groups whose names start with ‘Irrigation’.

For this example, an empty device group named 'Irrigation machines' was created.

Let's learn how to add an Entity group name alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select an _Entity group name_ filter type.
5. Select the Device and enter the beginning of the group name, for example, "Irrigation". Click "Add" in the lower right corner.
6. After adding the first alias, click the "Add alias" button again.
7. Enter a name for the alias, select a _Group entities_ filter type.
8. Move the slider to use a dashboard state entity as an entity group.
9. In the Default state entity group, Select the _Device_ type and _Irrigation system_ as an entity group.
10. Click "Add" in the lower right corner of the dialog box.
11. After adding both aliases, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-group-name" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type and _Entity group name_ alias. Click "Add" in the lower right corner to add a widget.
4. After adding the widget, click the "pencil" icon in the upper right corner to enter the widget editing mode.
5. Move to the Action cell and click a "+" icon to add a new action.
6. In the Add widget dialog, select an [action source](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#action-sources) which is responsible for each entity separately (action cell button, on row click etc.)
7. Enter the name of the action.
8. If necessary, select the icon representing the button to perform the action.
9. Select the _Update current dashboard state_ action type and click "Add" to add a new action to the widget.
10. After successfully adding the action, click big orange tick mark in the upper right of the screen to apply the changes.
11. Now, add a widget on which action will be performed by clicking the orange "+" icon in the lower right corner of the screen and choosing a "Paper" icon ("Create new widget").
12. In the opened widget bundles selection, click "Cards system". There select the Entity table widget.
13. Input data source: Entity type and _group entities_ alias and add telemetry. Click "Add" in the lower right corner.
14. After adding both widgets, click the checkmark in the lower right corner of the screen.

{% include images-gallery.html imageCollection="entity-group-name-1" %}

### Entities by group name

This alias allows choosing entities by entering the exact full name of an entity group. This entity can be device group(s), asset group(s), entity view group(s), customer group(s), dashboard group(s), or user group(s).
The difference between Entities by group name and Group entities is that the first one resolved the group by the specified name while the second one uses hard-coded group ID.
More important, during the lookup of entities, this alias will use information about the current user. So, if you share the dashboard with multiple customers,
and would like each customer to see devices that belong to him, you should use this alias instead of "Group entities".

Let's learn how to add an _Entities by group name_ alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Entities by group name e_ filter type.
5. Choose entity type and enter the exact full name of the entity group. Click "Add" in the lower right corner of the dialog box.
6. After the alias has been added, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entities-by-group-name" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type and _Entities by group name_ alias. Click "Add" in the lower right corner to add a widget.
4. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="entities-by-group-name-1" %}

### Entity from dashboard state

This alias allows choosing entity(-ies) from dashboard state which can be device, asset, entity view, tenant, customer, 
dashboard, user, data converter, integration, scheduler event, blob entity, role, edge, current customer, current tenant, current user, current user owner.

To add this alias, enter the alias name, and select the filter type "Entity from dashboard state" in the "Add alias" dialog. Then click "Add".

{% include images-gallery.html imageCollection="entity-from-dashboard-state-1" %}

It is used for filtering data for other dashboard states.
For example, if Time series widget is created on a [root dashboard state](/docs/{{docsPrefix}}user-guide/dashboards/#states) with several entities displayed on it, and you'd like to create a dashboard state which will display
a widget with the entity you clicked on, you need to use this alias. 

For the next example, we will need two aliases: the previously discussed "[Group entities](#group-entities)" alias and the "Entity from dashboard state" alias. Let's start:

First we need to create an Entity table widget that will display a list of entities:

- Add an Entity table widget that will display a list of entities. Use the "Group entities" alias as a data source.

{% include images-gallery.html imageCollection="entity-from-dashboard-state-2" %}

After adding the widget, add a new a [state](/docs/{{docsPrefix}}user-guide/dashboards/#states):

{% include images-gallery.html imageCollection="entity-from-dashboard-state-3" showListImageTitles="true" %}

Time to add an action to a root dashboard widget and perform it using an Entity from dashboard state alias on the widget in the created state:

{% include images-gallery.html imageCollection="entity-from-dashboard-state-4" showListImageTitles="true" %}

Now, click an action button opposite any entity. You will be transitioned to an inner state that shows a widget with entity from dashboard’s state details

{% include images-gallery.html imageCollection="entity-from-dashboard-state-5" %}

### Owner of entity from dashboard state

This alias allows displaying owners of the devices, assets, entities, etc. Commonly used when there is a hierarchy of customers and it is needed to see what devices belong to whom.

To add this alias, enter the alias name, and select the filter type "Owner of entity from dashboard state" in the "Add alias" dialog. Then click "Add".

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-1" %}

Let’s learn how to use the "Owner of entity from dashboard state" alias to display device owners on the widget.

For the next example, we will need two aliases: the previously discussed "[Entity type](#entity-type)" alias and the "Owner of entity from dashboard state" alias.

First let's add an Entity table widget that will display a list of all devices. Use the “Entity type” alias as a data source.

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-2" %}

Add another Entities table widget that will display the owner of the selected device. Specify the "Owner of entity from dashboard state" alias in the "Entity alias" field. Click the "Add" button in the lower right corner;

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-3" %}

Now we need to add an action that updates the current state of the dashboard.

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-4" showListImageTitles="true" %}

Click on the row with the device name in the "Entities" widget. The action will be executed, and the owner of the selected device will be displayed in the "Device Owner" widget.

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state-5" %}

### Asset type

This alias allows choosing assets of entered type (and, if needed) names of which begin with an entered query. This alias filters assets of type ‘field’ and with name starting with ‘Build’.

Let's learn how to add an Asset type alias and use it in a widget:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Asset type_ filter type.
5. Select asset type from the drop-down menu and enter the beginning of the asset name. Click "Add" in the lower right corner of the dialog box.
6. After the alias has been added, click "Save" in the lower right corner of the dialog box.
7. Click the "Add new widget" icon in the center of the screen.
8. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
9. Input data source: Entity type, _Asset type_ alias and click "Add" in the lower right corner to add a widget.
10. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="asset-type-1" %}
<br>
{% include images-gallery.html imageCollection="asset-type-2" %}
 
### Device type

This alias allows choosing devices of entered type (and, if needed) names of which begin with an entered query. This alias filters devices of type ‘Device’.

Let's learn how to add a Device types alias and use it in a widget:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Device types_ filter type. 
5. Choose previously created device type from the drop-down menu and click "Add" in the lower right corner of the dialog box.
6. After the alias has been added, click "Save" in the lower right corner of the dialog box.
7. Click the "Add new widget" icon in the center of the screen.
8. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
9. Input data source: Entity type, _Device types_ alias and add telemetry. Click "Add" in the lower right corner to add a widget.
10. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="device-type-alias" %}
<br>
 
 
### Entity view type

This alias allows choosing entity views of entered type (and, if needed) names of which begin with an entered query. 
An entity views called 'Compressor LK-45 Entity View' and 'Compressor ZX-77 Entity View' was created with a type 'Compressors Entity View Type' which provides access to 'Power' timeseries from Compressor LK-45 and Compressor ZX-77.
This alias filters entity Views of type ‘Compressors Entity View Type’ and with name starting with ‘Compressor’.

Let's learn how to add an Entity view type alias and use it in a widget:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select an _Entity view types_ filter type.
5. Choose previously created entity view type from the drop-down menu and enter the beginning of an entity view name. Click "Add" in the lower right corner of the dialog box.
6. After the alias has been added, click "Save" in the lower right corner of the dialog box.
7. Click the "Add new widget" icon in the center of the screen.
8. From the drop-down Select widget menu, select a Cards bundle. In the cell “Latest values”, pick a _Entities table_ widget.
9. Select the _Entity view type_ alias and add telemetry. Click "Add" in the lower right corner to add a widget.
10. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="entity-view-type" %}
<br>

### Edge type



### Api Usage State

There is an API Usage layout in the main menu of the TB platform. API Usage shows full statistics on the platform.  
_Api Usage State_ alias allows fetching only the data you need from the user dashboard statistics.

Let's learn how to add an Api Usage State alias and use it in a widget:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Api Usage State_ filter type.
5. After the alias has been added, click "Save" in the lower right corner of the dialog box.
6. Click the "Add new widget" icon in the center of the screen.
7. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
8. Input data source: Entity type, _Api Usage State_ alias and add telemetry that fetches statistics from an API usage state. Click "Add" in the lower right corner to add a widget.
9. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="api-usage-state" %}

### Relations query

This alias allows choosing entities which are related to specified originator up to specified level and in specified 
direction.

In the example alias filters entities that have any relation from Asset ‘District A’ up to relation level 2.

Let's learn how to add a Relations query alias and use it in a widget:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Relations query_ filter type.
5. Select the _Asset_ type and choose an asset. Set direction to "From" and max relation level 2.
6. Click "Add" in the lower right corner of the dialog box.
7. After the alias has been added, click "Save" in the lower right corner of the dialog box.
8. Click the "Add new widget" icon in the center of the screen.
9. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
10. Input data source: Entity type, _Relations query_ alias and add telemetry. Click "Add" in the lower right corner to add a widget.
11. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="relations-query" %}


### Asset search query

This alias allows choosing assets of specified type which are related to specified originator up to specified level and
in specified direction.  
This alias filters assets with types ‘field’ that have any relation to Device ‘Compressor ZX-77’ with relation level 2.

Let's learn how to add an Asset search query alias and use it in a widget:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Asset search query_ filter type.
5. Select the _Device_ type and choose a device. Set direction to "To" and max relation level 2. Input asset type.
6. Click "Add" in the lower right corner of the dialog box.
7. After the alias has been added, click "Save" in the lower right corner of the dialog box.
8. Click the "Add new widget" icon in the center of the screen.
9. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
10. Input data source: Entity type, _Asset search query_ alias and add telemetry. Click "Add" in the lower right corner to add a widget.
11. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="asset-search-query" %}

### Device search query

This alias allows choosing devices of specified type which are related to specified originator up to specified level
and in specified direction.  
This alias filters devices with types ‘Device’ that have any relation from Asset ‘Building A’ up to relation level 1.

Let's learn how to add a Device search query alias and use it in a widget:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Device search query_ filter type.
5. Select the _Asset_ type and choose an asset. Set direction to "From" and max relation level 1. Input device type.
6. Click "Add" in the lower right corner of the dialog box.
7. After the alias has been added, click "Save" in the lower right corner of the dialog box.
8. Click the "Add new widget" icon in the center of the screen.
9. From the drop-down Select widget menu, select a Cards bundle. In the cell "Latest values", pick a _Entities table_ widget.
10. Select the _Device search query_ alias and add telemetry. Click "Add" in the lower right of the dialog.
11. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="device-search-query" %}

### Entity view search query

This alias allows choosing entity views of specified type which are related to specified originator up to specified level and in specified direction.  
An entity view called 'Compressor ZX-77 Entity View' which has 'contains' relation to it from Compressor ZX-77 was created with a type 'Compressors Entity View Type
' which provides access to 'Power' timeseries from Compressor ZX-77.  
This alias filters entity views with types ‘Compressors Entity View Type’ that have any relation from device ‘Compressor ZX-77’ up to
relation level 1.

Let's learn how to add a Device search query alias and use it in a widget:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select an _Entity view search query_ filter type.
5. Select the _Device_ type and choose an asset. Set direction to "From" and max relation level 1. Input entity view type.
6. Click "Add" in the lower right corner of the dialog box.
7. After the alias has been added, click "Save" in the lower right corner of the dialog box.
8. Click the "Add new widget" icon in the center of the screen.
9. From the drop-down Select widget menu, select a Cards bundle. In the cell "Latest values", pick a _Entities table_ widget.
10. Select the _Entity view search query_ alias and add telemetry. Click "Add" in the lower right of the dialog.
11. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="entity-view-search-query" %}

### Edge search query

### Scheduler events