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

In the "Add alias" dialog box, enter the alias name, and select the "Single entity" filter type. Then choose the entity type and specify the final entity/entities.

{% include images-gallery.html imageCollection="single-alias-1" %}

In this example, an alias was created that filters one device - Thermometer A1. Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Single entity" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters one device has been added.

{% include images-gallery.html imageCollection="single-alias-2" %}

### Group entities

This alias allows choosing one entity group as the data source. It can be a device group, asset group, entity view group, customer group, dashboard group, user group and edge group.

In the "Add alias" dialog box, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and select the entity group.

{% include images-gallery.html imageCollection="group-entities-1" %}

In this example, an alias was created that filters device group - Thermostats. Let's use an added alias in a widget. Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Group entities" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters one device has been added.

{% include images-gallery.html imageCollection="group-entities-2" %}

### Entity list

This alias allows choosing several entities manually without entering a query, which can be devices, assets, entity views, tenants, customers, dashboards, user, data converters, integrations, scheduler events, blob entities, roles or edges.

In the "Add alias" dialog box, enter the alias name, and select the "Entity list" filter type. Then choose the entities type and choose the entities whose data you want to display on the widget.

{% include images-gallery.html imageCollection="entity-list-1" %}

In this example, an alias was created that filters a list of multiple devices. Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity list" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with the alias that filters a list of several devices, which in this case are Compressor BC-10, Compressor QA-32 and Thermometer A1, has been added

{% include images-gallery.html imageCollection="entity-list-2" %}

### Entity name

This alias allows you to display entities whose names start with the entered expression.
These objects can be devices, assets, entity views, tenants, customers, dashboards, users, data converters, integrations, scheduler events, blob entities, rales or edges.  

In the "Add alias" dialog box, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and enter an expression that will filter the names of the displayed entities - "Compressor".

{% include images-gallery.html imageCollection="entity-name-1" %}

In this example, an alias was created to filter devices whose names start with "Compressor". Let's use an added alias in a widget:

In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity name" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add" and apply changes. The Entities table widget with alias that filters devices, which names start with ‘Compressor’, has been added.

{% include images-gallery.html imageCollection="entity-name-2" %}

### Entity type

### Entity group list

### Entities by group name

### Entity from dashboard state

This alias allows choosing entity(-ies) from dashboard state which can be device, asset, entity view, tenant, customer,
dashboard, data converter, scheduler event, blob entity or current customer. It is used for filtering data for other dashboard states.  
For example, if Time series widget is created on a [root dashboard state](/docs/{{docsPrefix}}user-guide/dashboards/#states) with several entities displayed on it, and you'd like to create a dashboard state which will display
a widget with the entity you clicked on, you need to use this alias. 

**The following example uses an alias after creating an alias for group entities.**

Let's learn how to add an _Entity from dashboard state_ alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon. 
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select an _Entity from dashboard state_ filter type.
5. Click "Add" in the lower right corner of the dialog box.
6. After adding both aliases, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-from-dashboard-state" %}
<br>

Now let's use an added alias in a widget and add a [state](/docs/{{docsPrefix}}user-guide/dashboards/#states) to see how this alias works:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the Entity table widget.
3. Input data source: Entity type, _Entity list_ alias and add telemetry. Click "Add" in the lower right corner to add a widget.
4. After adding the widget, click layers icon in the top left corner of the dashboard to create a new state.
In the opened dialog window, click a "+" icon to add a new state.
5. Enter state's name and click "Add".
6. Now you see a list with two states: root one, and the one that has been just created. Click "Save" in the lower right of the dialog.

{% include images-gallery.html imageCollection="entity-from-dashboard-state-1" %}
<br>

Time to add an action to a root dashboard widget and perform it using an Entity from dashboard state alias on the widget in the created state:
1. In the root dashboard state, enter widget Edit mode by clicking the "pencil" icon in the upper right corner of it to enter an Edit mode of the widget.
2. Move to the Action cell and click a "+" icon to add a new action.
3. In the Add widget dialog, select an [action source](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#action-sources) which is responsible for each entity separately (action cell button, on row click etc.)
4. Enter the name of the action.
5. If necessary, select the icon representing the button to perform the action.
6. Select the _Navigate to new dashboard state_ action type and set newly created state as a target dashboard state. Click "Add" to add a new action to the widget.
7. After successfully adding the action, click big orange tick mark in the upper right of the screen to apply the changes.
8. Then, go to the created state by selecting it from the drop-down menu by clicking layers icon in the upper right corner.
9. Click the "Add new widget" icon in the center of the screen. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
10. Input data source: Entity type and Select the _Entity from dashboard state_ alias. Click "Add" in the lower right corner.
11. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

By clicking a button opposite needed entity, you will be transitioned to an inner state that shows a widget with entity from dashboard's state details.

{% include images-gallery.html imageCollection="entity-from-dashboard-state-2" %}




### Owner of entity from dashboard state



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

{% include images-gallery.html imageCollection="asset-type-alias" %}
<br>

 
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