---
layout: docwithnav-pe
asiconees:
- yefimov-andrey
title: Aliases
description: ThingsBoard Aliases

create-alias:
    0:
        image: /images/user-guide/widgets/overview/add-new-dashboard-1-pe.png
        title: 'Open your dashboard and enter edit mode;'
    1:
        image: /images/user-guide/ui/alias/create-alias-2-pe.png
        title: 'Click an "Entity aliases" icon in the upper right corner of the window;'
    2:
        image: /images/user-guide/ui/alias/create-alias-3-pe.png
        title: 'In the opened "Entity aliases" window click the “Add alias” button on the left side of the dialog box;'
    3:
        image: /images/user-guide/ui/alias/create-alias-4-pe.png
        title: 'In the opened dialog Add alias, enter a name for the alias and select a filter type. Then, fill in all required fields and click the "Add" button in the lower right corner;'
    4:
        image: /images/user-guide/ui/alias/create-alias-5-pe.png
        title: 'We can now see that a new alias has been added. In this window you can view, edit and delete your aliases. Click "Save" in the lower right corner of the dialog box.'

use-alias-in-widget:
    0:
        image: /images/user-guide/ui/alias/create-alias-6-pe.png
        title: 'Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    1:
        image: /images/user-guide/ui/alias/create-alias-7-pe.png
        title: 'Select the widget bundle. For example select "Indoor Environment" widgets bundle;'
    2:
        image: /images/user-guide/ui/alias/create-alias-8-pe.png
        title: 'Now, select the "Indoor temperature card with background" widget;'
    3:
        image: /images/user-guide/ui/alias/create-alias-9-pe.png
        title: 'The "Add Widget" window will appear. Navigate to the "Entity alias" tab. Specify the previously created "A new entity alias" alias in the "Entity alias" field.'
    4:
        image: /images/user-guide/ui/alias/create-alias-10-pe.png
        title: 'Specify the data key(s) in the "Data key" field. In our example is the "temperature" data key. Then, click "Add";'
    5:
        image: /images/user-guide/ui/alias/create-alias-11-pe.png
        title: 'You have added a widget that uses the previously configured alias as a data source.'

single-alias-1:
    0:
        image: /images/user-guide/ui/alias/single-entity-1-pe.png
        title: 'In the "Add Alias" dialog box, enter the alias name, and select the "Single Entity" filter type. Then choose the entity type and specify the final entity/entities.'

single-alias-2:
    0:
        image: /images/user-guide/ui/alias/single-entity-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Single entity" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/single-entity-3-pe.png
        title: 'The Entities table widget with the alias that filters one device has been added.'


group-entities-1:
    0:
        image: /images/user-guide/ui/alias/group-entities-1-pe.png
        title: 'In the "Add alias" dialog box, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and select the entity group.'

group-entities-2:
    0:
        image: /images/user-guide/ui/alias/group-entities-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Group entities" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/group-entities-3-pe.png
        title: 'The Entities table widget with the alias that filters "Thermostats" device group has been added.'


entity-list-1:
    0:
        image: /images/user-guide/ui/alias/entity-list-1-pe.png
        title: 'In the "Add alias" dialog box, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and select the entity group.'

entity-list-2:
    0:
        image: /images/user-guide/ui/alias/entity-list-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity list" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/entity-list-3-pe.png
        title: 'The Entities table widget with an alias that filters a list of several devices, which in this case are Compressor BC-10, Compressor QA-32 and Thermometer A1, has been added.'


entity-name-1:
    0:
        image: /images/user-guide/ui/alias/entity-name-1-pe.png
        title: 'In the "Add alias" dialog box, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and enter an expression that will filter the names of the displayed entities - “Compressor”.'

entity-name-2:
    0:
        image: /images/user-guide/ui/alias/entity-name-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity name" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/entity-name-3-pe.png
        title: 'The Entities table widget with alias that filters devices, which names start with ‘Compressor’, has been added.'

entity-from-dashboard-state-1:
    0:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-2-pe.png
        title: 'To add this alias, enter the alias name, and select the filter type "Entity from dashboard state" in the "Add alias" dialog. Then click "Add".'

entity-from-dashboard-state-2:
    0:
        image: /images/user-guide/ui/alias/group-entities-1-pe.png
        title: 'In the "Add alias" dialog box, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and select the entity group;'
    1:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-4-pe.png
        title: 'Add an Entity table widget that will display a list of entities. Use the "Group entities" alias as a data source;'
    2:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-5-pe.png
        title: 'Add an Entity table widget that will display a list of devices is created.'

entity-from-dashboard-state-3:
    0:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-6-pe.png
        title: 'Click layers icon in the top left corner of the dashboard to create a new state. In the opened dialog window, click a "+" icon to add a new state;'
    1:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-7-pe.png
        title: 'Enter state&#39;s name and click "Add";'
    2:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-8-pe.png
        title: 'Now you see a list with two states: root one, and the one that has been just created. Click "Save" in the lower right of the dialog.'

entity-from-dashboard-state-4:
    0:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-9-pe.png
        title: 'In the root dashboard state, enter widget Edit mode by clicking the “pencil” icon in the upper right corner of it;'
    1:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-10-pe.png
        title: 'Scroll down to find "Actions" section. Click "Add action" button;'
    2:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-11-pe.png
        title: 'The "Entities table: Actions" window will be opened. Click the "Add action" button in the top right corner;'
    3:    
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-12-pe.png
        title: 'In the "Add action" dialog, enter the action name, and select an action source responsible for each entity separately (action cell button, on row click etc.). Then, choose the action type "Navigate to new dashboard state" and specify the new dashboard state to which the transition will be made. After, click "Add";'
    4:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-13-pe.png
        title: 'After successfully adding the action, click "Save" to apply changes;'
    5:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-14-pe.png
        title: 'Then, go to the created state by selecting it from the drop-down menu by clicking layers icon in the upper right corner;'
    6:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-15-pe.png
        title: 'Click the “Add new widget” icon in the center of the screen;'
    7:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-16-pe.png
        title: 'In the opened widget bundles selection, select "Indoor Environment";'
    8:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-17-pe.png
        title: 'Select the "Indoor temperature card with background" widget;'
    9:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-18-pe.png
        title: 'Navigate to the "Entity alias" tab. Specify the "Entity from dashboard state" alias in the "Entity alias" field. Click the “Add” button in the lower right corner;'
    10:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-19-pe.png
        title: 'After adding the widget save all applied changes;'
    11:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-20-pe.png
        title: 'Now, click a action button opposite any entity;'
    12:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-21-pe.png
        title: 'You will be transitioned to an inner state that shows a widget with entity from dashboard’s state details.'
















entity-group-list:
 0:
  image: /images/user-guide/ui/alias/alias-1-paas.png
 1:
  image: /images/user-guide/ui/alias/alias-2-paas.png
 2:
  image: /images/user-guide/ui/alias/entity-group-list-3-paas.png
 3:
  image: /images/user-guide/ui/alias/entity-group-list-4-paas.png
 4:
  image: /images/user-guide/ui/alias/entity-group-list-5-paas.png
 5:
  image: /images/user-guide/ui/alias/entity-group-list-6-paas.png

entity-group-list-1:
 0:
  image: /images/user-guide/ui/alias/alias-5-paas.png
 1:
  image: /images/user-guide/ui/alias/alias-6-paas.png
 2:
  image: /images/user-guide/ui/alias/alias-7-paas.png
 3:
  image: /images/user-guide/ui/alias/entity-group-list-10-paas.png
 4:
  image: /images/user-guide/ui/alias/entity-group-list-11-paas.png
 5:
  image: /images/user-guide/ui/alias/entity-group-list-12-paas.png
 6:
  image: /images/user-guide/ui/alias/entity-group-list-13-paas.png
 7:
  image: /images/user-guide/ui/alias/entity-group-list-14-paas.png
 8:
  image: /images/user-guide/ui/alias/entity-group-list-15-paas.png
 9:
  image: /images/user-guide/ui/alias/entity-group-list-16-paas.png
 10:
  image: /images/user-guide/ui/alias/entity-group-list-17-paas.png
 11:
  image: /images/user-guide/ui/alias/entity-group-list-18-paas.png
 12:
  image: /images/user-guide/ui/alias/entity-group-list-19-paas.png

entity-group-name:
 0:
  image: /images/user-guide/ui/alias/alias-1-paas.png
 1:
  image: /images/user-guide/ui/alias/alias-2-paas.png
 2:
  image: /images/user-guide/ui/alias/entity-group-name-3-paas.png
 3:
  image: /images/user-guide/ui/alias/entity-group-name-4-paas.png
 4:
  image: /images/user-guide/ui/alias/entity-group-name-5-paas.png
 5:
  image: /images/user-guide/ui/alias/entity-group-name-6-paas.png

entity-group-name-1:
 0:
  image: /images/user-guide/ui/alias/alias-5-paas.png
 1:
  image: /images/user-guide/ui/alias/alias-6-paas.png
 2:
  image: /images/user-guide/ui/alias/alias-7-paas.png
 3:
  image: /images/user-guide/ui/alias/entity-group-name-10-paas.png
 4:
  image: /images/user-guide/ui/alias/entity-group-name-11-paas.png
 5:
  image: /images/user-guide/ui/alias/entity-group-name-12-paas.png
 6:
  image: /images/user-guide/ui/alias/entity-group-name-13-paas.png
 7:
  image: /images/user-guide/ui/alias/entity-group-name-14-paas.png
 8:
  image: /images/user-guide/ui/alias/entity-group-name-15-paas.png
 9:
  image: /images/user-guide/ui/alias/entity-group-name-16-paas.png
 10:
  image: /images/user-guide/ui/alias/entity-group-name-17-paas.png
 11:
  image: /images/user-guide/ui/alias/entity-group-name-18-paas.png
 12:
  image: /images/user-guide/ui/alias/entity-group-name-19-paas.png

entities-by-group-name:
 0:
  image: /images/user-guide/ui/alias/alias-1-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-2-pe.png
 2:
  image: /images/user-guide/ui/alias/entities-by-group-name-3-pe.png
 3:
  image: /images/user-guide/ui/alias/entities-by-group-name-4-pe.png

entities-by-group-name-1:
 0:
  image: /images/user-guide/ui/alias/alias-5-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-6-pe.png
 2:
  image: /images/user-guide/ui/alias/alias-7-pe.png
 3:
  image: /images/user-guide/ui/alias/entities-by-group-name-8-pe.png
 4:
  image: /images/user-guide/ui/alias/entities-by-group-name-9-pe.png

owner-of-entity-from-dashboard-state:
 0:
  image: /images/user-guide/ui/alias/alias-1-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-2-pe.png
 2:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-3-pe.png
 3:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-4-pe.png
 4:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-5-pe.png
 5:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-6-pe.png
 6:
  image: /images/user-guide/ui/alias/alias-5-pe.png
 7:
  image: /images/user-guide/ui/alias/alias-6-pe.png
 8:
  image: /images/user-guide/ui/alias/alias-7-pe.png
 9:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-10-pe.png
 10:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-11-pe.png
 11:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-12-pe.png
 12:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-13-pe.png
 13:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-14-pe.png
 14:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-15-pe.png
 15:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-16-pe.png
 16:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-17-pe.png
 17:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-18-pe.png
 18:
  image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-19-pe.png

asset-type-alias:
 0:
  image: /images/user-guide/ui/alias/alias-1-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-2-pe.png
 2:
  image: /images/user-guide/ui/alias/asset-type-3-pe.png 
 3:
  image: /images/user-guide/ui/alias/asset-type-4-pe.png
 4:
  image: /images/user-guide/ui/alias/alias-5-pe.png
 5:
  image: /images/user-guide/ui/alias/alias-6-pe.png
 6:
  image: /images/user-guide/ui/alias/alias-7-pe.png
 7:
  image: /images/user-guide/ui/alias/asset-type-8-pe.png
 8:
  image: /images/user-guide/ui/alias/asset-type-9-pe.png

device-type-alias:
 0:
  image: /images/user-guide/ui/alias/alias-1-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-2-pe.png
 2:
  image: /images/user-guide/ui/alias/device-type-3-pe.png
 3:
  image: /images/user-guide/ui/alias/device-type-4-pe.png
 4:
  image: /images/user-guide/ui/alias/alias-5-pe.png
 5:
  image: /images/user-guide/ui/alias/alias-6-pe.png
 6:
  image: /images/user-guide/ui/alias/alias-7-pe.png
 7:
  image: /images/user-guide/ui/alias/device-type-8-pe.png
 8:
  image: /images/user-guide/ui/alias/device-type-9-pe.png

entity-view-type:
 0:
  image: /images/user-guide/ui/alias/alias-1-paas.png
 1:
  image: /images/user-guide/ui/alias/alias-2-paas.png
 2:
  image: /images/user-guide/ui/alias/entity-view-type-3-paas.png
 3:
  image: /images/user-guide/ui/alias/entity-view-type-4-paas.png
 4:
  image: /images/user-guide/ui/alias/alias-5-paas.png
 5:
  image: /images/user-guide/ui/alias/alias-6-paas.png
 6:
  image: /images/user-guide/ui/alias/alias-7-paas.png
 7:
  image: /images/user-guide/ui/alias/entity-view-type-8-paas.png
 8:
  image: /images/user-guide/ui/alias/entity-view-type-9-paas.png

api-usage-state:
 0:
  image: /images/user-guide/ui/alias/api-usage-state-1-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-1-pe.png
 2:
  image: /images/user-guide/ui/alias/alias-2-pe.png
 3:
  image: /images/user-guide/ui/alias/api-usage-state-4-pe.png
 4:
  image: /images/user-guide/ui/alias/api-usage-state-5-pe.png
 5:
  image: /images/user-guide/ui/alias/alias-5-pe.png
 6:
  image: /images/user-guide/ui/alias/alias-6-pe.png
 7:
  image: /images/user-guide/ui/alias/alias-7-pe.png
 8:
  image: /images/user-guide/ui/alias/api-usage-state-9-pe.png
 9:
  image: /images/user-guide/ui/alias/api-usage-state-10-pe.png
 10:
  image: /images/user-guide/ui/alias/api-usage-state-11-pe.png

relations-query:
 0:
  image: /images/user-guide/ui/alias/alias-1-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-2-pe.png
 2:
  image: /images/user-guide/ui/alias/relations-query-3-pe.png
 3:
  image: /images/user-guide/ui/alias/relations-query-4-pe.png
 4:
  image: /images/user-guide/ui/alias/alias-5-pe.png
 5:
  image: /images/user-guide/ui/alias/alias-6-pe.png
 6:
  image: /images/user-guide/ui/alias/alias-7-pe.png
 7:
  image: /images/user-guide/ui/alias/relations-query-8-pe.png
 8:
  image: /images/user-guide/ui/alias/relations-query-9-pe.png

asset-search-query:
 0:
  image: /images/user-guide/ui/alias/alias-1-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-2-pe.png
 2:
  image: /images/user-guide/ui/alias/asset-search-query-3-pe.png
 3:
  image: /images/user-guide/ui/alias/asset-search-query-4-pe.png
 4:
  image: /images/user-guide/ui/alias/alias-5-pe.png
 5:
  image: /images/user-guide/ui/alias/alias-6-pe.png
 6:
  image: /images/user-guide/ui/alias/alias-7-pe.png
 7:
  image: /images/user-guide/ui/alias/asset-search-query-8-pe.png
 8:
  image: /images/user-guide/ui/alias/asset-search-query-9-pe.png

device-search-query:
 0:
  image: /images/user-guide/ui/alias/alias-1-pe.png
 1:
  image: /images/user-guide/ui/alias/alias-2-pe.png
 2:
  image: /images/user-guide/ui/alias/device-search-query-3-pe.png
 3:
  image: /images/user-guide/ui/alias/device-search-query-4-pe.png
 4:
  image: /images/user-guide/ui/alias/alias-5-pe.png
 5:
  image: /images/user-guide/ui/alias/alias-6-pe.png
 6:
  image: /images/user-guide/ui/alias/alias-7-pe.png
 7:
  image: /images/user-guide/ui/alias/device-search-query-8-pe.png
 8:
  image: /images/user-guide/ui/alias/device-search-query-9-pe.png

entity-view-search-query:
 0:
  image: /images/user-guide/ui/alias/alias-1-paas.png
 1:
  image: /images/user-guide/ui/alias/alias-2-paas.png
 2:
  image: /images/user-guide/ui/alias/entity-view-search-query-3-paas.png
 3:
  image: /images/user-guide/ui/alias/entity-view-search-query-4-paas.png
 4:
  image: /images/user-guide/ui/alias/alias-5-paas.png
 5:
  image: /images/user-guide/ui/alias/alias-6-paas.png
 6:
  image: /images/user-guide/ui/alias/alias-7-paas.png
 7:
  image: /images/user-guide/ui/alias/entity-view-search-query-8-paas.png
 8:
  image: /images/user-guide/ui/alias/entity-view-search-query-9-paas.png

---

{% assign docsPrefix = "pe/" %}
{% include docs/pe/user-guide/ui/aliases.md %}
