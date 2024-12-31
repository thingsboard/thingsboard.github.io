---
layout: docwithnav-paas
assignees:
- stitenko
title: Aliases
description: ThingsBoard Aliases

create-alias:
    0:
        image: /images/user-guide/widgets/overview/add-new-dashboard-1-pe.png
        title: 'Open your dashboard and enter edit mode;'
    1:
        image: /images/user-guide/ui/alias/create-alias-2-pe.png
        title: 'Click the "Entity aliases" icon in the upper right corner of the window;'
    2:
        image: /images/user-guide/ui/alias/create-alias-3-pe.png
        title: 'In the opened "Entity aliases" window click the “Add alias” button on the left side of the dialog box;'
    3:
        image: /images/user-guide/ui/alias/create-alias-4-pe.png
        title: 'In the opened "Add alias" dialog, enter a name for the alias and select a filter type. Then, fill in all required fields and click the "Add" button in the lower right corner;'
    4:
        image: /images/user-guide/ui/alias/create-alias-5-pe.png
        title: 'We can now see that a new alias has been added. In this window you can view, edit and delete your aliases. Click "Save" in the lower right corner of the dialog box.'

use-alias-in-widget:
    0:
        image: /images/user-guide/ui/alias/create-alias-6-pe.png
        title: 'Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    1:
        image: /images/user-guide/ui/alias/create-alias-7-pe.png
        title: 'Select the widget bundle. For example, select "Indoor Environment" widgets bundle;'
    2:
        image: /images/user-guide/ui/alias/create-alias-8-pe.png
        title: 'Now, select the "Indoor temperature card with background" widget;'
    3:
        image: /images/user-guide/ui/alias/create-alias-9-pe.png
        title: 'The "Add Widget" window will appear. Navigate to the "Entity alias" tab. Specify the previously created "A new entity alias" in the "Entity alias" field.'
    4:
        image: /images/user-guide/ui/alias/create-alias-10-pe.png
        title: 'Specify the data key(s) in the "Data key" field. In our example, it&#39;s the "temperature" data key. Then, click "Add";'
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
        title: 'The Entities table widget with the alias that filters one device - Thermometer A1 has been added.'


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
        title: 'The Entities table widget with the alias that displays all devices that belong to the "Thermostats" device group has been added.'


entity-list-1:
    0:
        image: /images/user-guide/ui/alias/entity-list-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, and select the "Entity list" filter type. Then choose the entities type and specify entities whose data you want to display on the widget.'

entity-list-2:
    0:
        image: /images/user-guide/ui/alias/entity-list-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity list" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/entity-list-3-pe.png
        title: 'The Entities table widget with the alias that displays a list of several devices, which in this case are Compressor BC-10, Compressor QA-32, and Thermometer A1 has been added.'


entity-name-1:
    0:
        image: /images/user-guide/ui/alias/entity-name-1-pe.png
        title: 'In the "Add alias" dialog box, enter the alias name, and select the "Entity name" filter type. Then choose the entities type and enter an expression that will filter the names of the displayed entities.'

entity-name-2:
    0:
        image: /images/user-guide/ui/alias/entity-name-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity name" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/entity-name-3-pe.png
        title: 'The Entities table widget with alias that filters devices, which names start with ‘Compressor’, has been added.'


entity-type-1:
    0:
        image: /images/user-guide/ui/alias/entity-type-1-pe.png
        title: 'In the "Add alias" dialog box, enter the alias name, select the "Entity type " filter type, and choose the entity type - "Device". Then, click "Add";'

entity-type-2:
    1:
        image: /images/user-guide/ui/alias/entity-type-2-pe.png
        title: 'Add an Entity table widget that will display a list of entities. Use the "Entity type" alias as a data source;'
    2:
        image: /images/user-guide/ui/alias/entity-type-3-pe.png
        title: 'The Entity table widget that displays a list of devices has been added.'


entity-group-list-1:
    0:
        image: /images/user-guide/ui/alias/entity-group-list-1-pe.png
        title: 'In the “Add alias” dialog, enter the alias name, and select the "Entity group list" filter. Then select the entity type and specify entity groups you want to display on the widget.'

entity-group-list-2:
    0:
        image: /images/user-guide/ui/alias/entity-group-list-3-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity group list" alias in the "Entity alias" field. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/entity-group-list-4-pe.png
        title: 'The Entities table widget displaying a list of device groups has been added.'


entity-group-name-1:
    0:
        image: /images/user-guide/ui/alias/entity-group-name-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, and select the “Entity group name” filter type. Then choose the entity type and enter an expression that will filter the names of the displayed entity groups. Then, click "Add" button.'

entity-group-name-2:
    0:
        image: /images/user-guide/ui/alias/entity-group-name-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity group name" alias in the “Entity alias” field. Click "Add" and apply changes;'
    1:
        image: /images/user-guide/ui/alias/entity-group-name-3-pe.png
        title: 'The Entities table widget, which displays device groups whose name begins with the entered query has been added.'


entities-by-group-name-1:
    0:
        image: /images/user-guide/ui/alias/entities-by-group-name-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, and select the "Entities by group name" filter type. Then select an entity type and enter the exact full name of a group whose entities you want to display.'

entities-by-group-name-2:
    0:
        image: /images/user-guide/ui/alias/entities-by-group-name-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entities by group name" alias in the "Entity alias" field and "temperature" data key in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/entities-by-group-name-3-pe.png
        title: 'The Entities table widget that displays entities filtered by the exact full name of the entity group entered has been added.'


entity-from-dashboard-state-1:
    0:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-2-pe.png
        title: 'To add this alias, enter the alias name, and select the filter type "Entity from dashboard state" in the "Add alias" dialog. Then click "Add".'

entity-from-dashboard-state-2:
    0:
        image: /images/user-guide/ui/alias/group-entities-1-pe.png
        title: 'In the "Add alias" dialog box, enter the alias name, and select the "Group entities" filter type. Then choose the entities type and select the entity group;'
    1:
        image: /images/user-guide/ui/alias/group-entities-2-pe.png
        title: 'Add an Entity table widget that will display a list of entities. Use the "Group entities" alias as a data source;'
    2:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-5-pe.png
        title: 'The Entity table widget that will display a list of devices has been added.'

entity-from-dashboard-state-3:
    0:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-6-pe.png
        title: 'Click the layers icon in the top left corner of the dashboard to create a new state. In the opened dialog window, click a "+" icon to add a new state;'
    1:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-7-pe.png
        title: 'Enter state&#39;s name. For the state to be named after the entity, use ${entityName} as the name of the state. Thus, during the action, you will be transitioned to a state named after the entity that took part in the action. Click "Add";'
    2:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-8-pe.png
        title: 'Now you see a list with two states: the root one, and the one that has just been created. Click "Save" in the lower right corner of the dialog.'

entity-from-dashboard-state-4:
    0:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-9-pe.png
        title: 'In the root dashboard state, enter widget Edit mode by clicking the “pencil” icon in the upper right corner;'
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
        title: 'After successfully adding the action, click the "Save" button. Then, click the "Apply" button;'
    5:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-14-pe.png
        title: 'Now, go to the created state by selecting it from the drop-down menu accessed through the layers icon in the upper left corner;'
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
        title: 'In the add widget window, navigate to the "Entity alias" tab. Specify the "Entity from dashboard state" alias in the "Entity alias" field and "temperature" data key in the “Columns” section. Click the "Add" button in the lower right corner;'
    10:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-19-pe.png
        title: 'After adding the widget save all applied changes;'

entity-from-dashboard-state-5:
    0:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-20-pe.png
        title: 'Now, click an action button opposite any entity;'
    1:
        image: /images/user-guide/ui/alias/entity-from-dashboard-state-21-pe.png
        title: 'You will be transitioned to an inner state, which contains a widget with the details of the selected entity.'


owner-of-entity-from-dashboard-state-1:
    0:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-1-pe.png
        title: 'To add this alias, enter the alias name, and select the filter type "Entity from dashboard state" in the "Add alias" dialog. Then click "Add".'

owner-of-entity-from-dashboard-state-2:
    0:
        image: /images/user-guide/ui/alias/entity-type-1-pe.png
        title: 'In the "Add alias" dialog box, enter the alias name, select the "Entity type " filter type, and choose the entity type - "Device". Then, click "Add";'
    1:
        image: /images/user-guide/ui/alias/entity-type-2-pe.png
        title: 'Add an Entity table widget that will display a list of entities. Use the "Entity type" alias as a data source;'
    2:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-0-pe.png
        title: 'Added the Entity table widget that displays a list of all devices.'

owner-of-entity-from-dashboard-state-3:
    0:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-2-pe.png
        title: 'Add another Entities table widget that will display the owner of the selected device. Specify the "Owner of entity from dashboard state" alias in the "Entity alias" field. Change the title of the widget to "Owner of device". Click the "Add" button in the lower right corner;'
    1:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-3-pe.png
        title: 'Added the Entity Table widget, which will display the owner of the selected device.'
      
owner-of-entity-from-dashboard-state-4:
    0:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-4-pe.png
        title: 'In the root dashboard state, enter widget Edit mode by clicking the “pencil” icon in the upper right corner of it;'
    1:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-5-pe.png
        title: 'Scroll down to find "Actions" section. Click "Add action" button;'
    2:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-6-pe.png
        title: 'The "Entities table: Actions" window will be opened. Click the "Add action" button in the top right corner;'
    3:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-7-pe.png
        title: 'In the "Add action" dialog, enter the action name, select an action source - "on row click", and choose the action type "Update current dashboard state". After, click "Add";'
    4:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-8-pe.png
        title: 'After successfully adding the action, click the "Save" button. Then, click the "Apply" button;'
    5:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-9-pe.png
        title: 'Save the dashboard;'

owner-of-entity-from-dashboard-state-5:
    0:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-10-pe.png
        title: 'Click on the row with the device name in the "Entities" widget. The action will be executed, and the owner of the selected device will be displayed in the "Device Owner" widget;'
    1:
        image: /images/user-guide/ui/alias/owner-of-entity-from-dashboard-state-11-pe.png
        title: 'Repeat this action with another device.'


asset-type-1:
    0:
        image: /images/user-guide/ui/alias/asset-type-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, and select the “Asset type” filter type. Next, specify the asset profile(s) and optionally enter an expression to filter the names of the displayed assets;'

asset-type-2:
    0:
        image: /images/user-guide/ui/alias/asset-type-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Asset type" alias in the "Entity alias" field. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/asset-type-3-pe.png
        title: 'The Entities table widget that displays assets with the asset profile "buildings" and whose names begins with "Build" has been added'


device-type-1:
    0:
        image: /images/user-guide/ui/alias/device-type-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, and select the "Device type" filter type. Then specify the device profile(s) and optionally enter an expression to filter the names of the displayed devices;'

device-type-2:
    0:
        image: /images/user-guide/ui/alias/device-type-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Device type" alias in the "Entity alias" field. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/device-type-3-pe.png
        title: 'The Entities table widget that displays assets with the asset profile "thermometers" and whose names begins with "Therm" has been added'


entity-view-type-1:
    0:
        image: /images/user-guide/ui/alias/entity-view-type-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, and select the "Entity view type" filter type. Then specify the entity view type(s) and optionally enter an expression to filter the names of the displayed entity views;'

entity-view-type-2:
    0:
        image: /images/user-guide/ui/alias/entity-view-type-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity view type" alias in the "Entity alias" field. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/entity-view-type-3-pe.png
        title: 'The Entities table widget that displays entity views with the entity view type "Entity view type" and whose names begins with "Compressor" has been added'


edge-type-1:
    0:
        image: /images/user-guide/ui/alias/edge-type-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, and select the "Edge type" filter type. Then specify the edge type(s) and enter an expression that will filter the names of the displayed edges;'

edge-type-2:
    0:
        image: /images/user-guide/ui/alias/edge-type-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Edge type" alias in the "Entity alias" field. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/edge-type-3-pe.png
        title: 'The Entities table widget that displays edges with the edge type "edge instance" and whose names begins with "Edge" has been added'


api-usage-state-1:
    0:
        image: /images/user-guide/ui/alias/api-usage-state-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, and select the "Api Usage State" filter type.'

api-usage-state-2:
    0:
        image: /images/user-guide/ui/alias/api-usage-state-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Api Usage State" alias in the "Entity alias" field and add data key(s) in the "Columns" section that fetches statistics from an API usage. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/api-usage-state-3-pe.png
        title: 'The Entities table widget that displays API usage statistics has been added.'


relations-query-1:
    0:
        image: /images/user-guide/ui/alias/relations-query-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, specify the "Relations query" filter type. Then, select the type of entity and the entity itself, the relationship with which you want to display. Set direction to "From" or "To" and max relation level.'

relations-query-2:
    0:
        image: /images/user-guide/ui/alias/relations-query-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Relations query" alias in the "Entity alias" field and add the "entityType" data key in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/relations-query-3-pe.png
        title: 'The Entities table widget displays entities and their type that have any relation to the asset "District A" up to relation level 3.'


asset-search-query-1:
    0:
        image: /images/user-guide/ui/alias/asset-search-query-1-pe.png
        title: 'in the "Add alias" dialog, enter the alias name, select the "Asset search query" filter type, and select the entity type and an entity itself, the relationship with which you want to display. Set direction to "From" or "To" and max relation level and specify the asset profile(s) by which the assets will be filtered.'

asset-search-query-2:
    0:
        image: /images/user-guide/ui/alias/asset-search-query-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Asset search query" alias in the "Entity alias" field and add "name" and "type" data keys in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/asset-search-query-3-pe.png
        title: 'The Entities table widget that displays assets that have any relation to the device "Compressor QA-32" with relation level 2 has been added.'


device-search-query-1:
    0:
        image: /images/user-guide/ui/alias/device-search-query-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, select the "Device search query" filter type, and select the entity type and choose an entity itself, the relationship with which you want to display. Set direction to "From" or "To" and max relation level and specify the device profile(s) by which the devices will be filtered.'

device-search-query-2:
    0:
        image: /images/user-guide/ui/alias/device-search-query-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Device search query" alias in the "Entity alias" field and add "name", "type" and "temperature" data keys in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/device-search-query-3-pe.png
        title: 'The Entities table widget that displays devices that have any relation to the asset “Building A” up to relation level 1 has been added.'


entity-view-search-query-1:
    0:
        image: /images/user-guide/ui/alias/entity-view-search-query-1-pe.png
        title: 'In the “Add alias” dialog, enter the alias name, select the "Entity view search query" filter type, and select the entity type and choose an entity itself, the relationship with which you want to display. Set direction to "From" or "To" and max relation level and specify the entity view type(s) by which entity views will be filtered'

entity-view-search-query-2:
    0:
        image: /images/user-guide/ui/alias/entity-view-search-query-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Entity view search query" alias in the "Entity alias" field and add "name", "type" and "temperature" data keys in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/entity-view-search-query-3-pe.png
        title: 'The Entities table widget that displays entity views that have any relation to the asset "Building A" up to relation level 1 has been added.'


edge-search-query-1:
    0:
        image: /images/user-guide/ui/alias/edge-search-query-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, select the "Edge search query" filter type, and select the entity type and an entity itself, the relationship with which you want to display. Set the direction to "From" or "To", max relation level and specify the edge type(s) by which the edges will be filtered.'

edge-search-query-2:
    0:
        image: /images/user-guide/ui/alias/edge-search-query-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Edge search query" alias in the "Entity alias" field and add "name" and "type" data keys in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/edge-search-query-3-pe.png
        title: 'The Entities table widget that displays edges that have any relation to the asset "Building A" up to relation level 1 has been added.'


scheduler-events-1:
    0:
        image: /images/user-guide/ui/alias/scheduler-events-1-pe.png
        title: 'In the "Add alias" dialog, enter the alias name, select the "Scheduler events" filter type, and select the entity for which scheduler events will be displayed.'

scheduler-events-2:
    0:
        image: /images/user-guide/ui/alias/scheduler-events-2-pe.png
        title: 'In the "Tables" widgets bundle select the "Entities table" widget. Navigate to the "Entity alias" tab. Specify the "Scheduler events" alias in the "Entity alias" field and add "name", "type" and "schedule" data keys in the "Columns" section. Click "Add";'
    1:
        image: /images/user-guide/ui/alias/scheduler-events-3-pe.png
        title: 'The Entities table widget that displays scheduler events for the "Compressor BC-10" device has been added.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/aliases.md %}