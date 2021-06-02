* TOC
{:toc}

## Introduction

Alias is a reference to a single entity or group of entities that are used in the widgets. Alias may be static or dynamic.  
To create a dashboard, you first need to create aliases to define the data from which the entities will be used. 
Aliases can be as easy as referring to a single device or as complicated as creating a complex search query for 
specific assets from a list. 

**In this tutorial, aliases will be used on a system according to the scheme shown below and all devices have "temperature" generated values coming to them:**

<object width="60%" data="/images/user-guide/ui/alias-scheme.svg"></object>

## Alias types

### Single entity

This alias allows choosing a single entity. It can be a device, asset, entity view, tenant, customer, dashboard, 
data converter, scheduler event, blob entity, or current customer.  
In the example, an alias was created that filters one device, which in this case is Thermometer 1.  

Let's learn how to add a Single entity alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Single entity_ filter type.
From the Type drop-down menu, Select the _Device_ and enter the name of the needed device (start typing it and it will be found automatically).
5. After configuring the alias, click the "Add" button in the lower right corner. 
6. We can now see that a new alias has been added. Click "Save" in the lower right corner of the dialog box. 

{% include images-gallery.html imageCollection="single-alias" %}
<br>

Let's use an added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type, select alias name from the list, and add telemetry.
4. Click the "Add" button in the lower right corner of the dialog box.
5. Widget with alias that filters one device has been added.
6. Don't forget to save all the changes by clicking on the big orange checkmark in the lower right corner of the screen.

{% include images-gallery.html imageCollection="single-alias-1" %}


### Entity list

This alias allows choosing several entities manually without entering a query, which can be devices, assets, entity 
views, tenants, customers, dashboards, data converters, scheduler events, blob entities, or customers.
In this example, an alias was created that filters a list of multiple devices.  

Let's learn how to add an Entity list alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select an _Entity list_ filter type.
   From the Type drop-down menu, Select the _Device_ and input names of the individual devices (start typing it and it will be found automatically).
5. After configuring the alias, click the "Add" button in the lower right corner.
6. We can now see that a new alias has been added. Click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-list" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type, select the name of the created alias from the list, and add telemetry.
4. Click the "Add" button in the lower right corner of the dialog box.
5. Widget with alias that filters a list of several devices, which in this case are Device D and Device E, has been added.
6. Don't forget to save all the changes by clicking on the big orange checkmark in the lower right corner of the screen.

{% include images-gallery.html imageCollection="entity-list-1" %}


### Entity name

This alias allows choosing one or more entity names that begin with an entered query, which can be devices, 
assets, entity views, tenants, customers, dashboards, data converters, scheduler events, blob entities, or customers.  
In this example, an alias was created to filter devices that start with "Compressor".

Let's learn how to add an Entity name alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select the filter type _Entity name_.
   From the Type drop-down menu, Select the _Device_ and enter a name, or just the beginning of the name, by which devices will be filtered.
5. After configuring the alias, click the "Add" button in the lower right corner.
6. We can now see that a new alias has been added. Click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-name" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type, select the name of the created alias from the list, and add telemetry.
4. Click the "Add" button in the lower right corner of the dialog box.
5. Widget with alias that filters devices, which names start with ‘Device’, has been added.
6. Don't forget to save all the changes by clicking on the big orange checkmark in the lower right corner of the screen.

{% include images-gallery.html imageCollection="entity-name-1" %}


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

 


