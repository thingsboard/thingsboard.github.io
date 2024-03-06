---
layout: docwithnav-pe
assignees:
- ashvayka
title: Widget Actions
description: ThingsBoard Dashboard Widget Actions

add-new-action-1:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/add-action-1-pe.png
        title: 'Enter the widget editing mode, scroll down and find the "Actions" menu item;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/add-action-2-pe.png
        title: 'Click the "Add action" button (later, when you have created one or more actions, the "Add actions" button will change to the "plus" icon). The "Actions" window will open. Right now, it’s empty, but later it will display all created actions;'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/add-action-3-pe.png
        title: 'Click the "plus" icon in the top right corner of the screen to open a new "Add action" window.'

add-new-action-2:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/add-action-4-pe.png
        title: 'Enter the widget editing mode, scroll down and find the "Actions" menu item;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/add-action-5-pe.png
        title: 'Click the "Add action" button (later, when you have created one or more actions, the "Add actions" button will change to the "plus" icon). The "Actions" window will open. Right now, it’s empty, but later it will display all created actions;'


navigate-to-new-dashboard-state-1:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-1-pe.png
        title: 'As an example for this manual, choose "Widget header button" action source. Input a name for the action and choose an icon that will represent a button. With this icon, action will be performed. Choose a "Navigate to new dashboard state" action type from the "Action" drop-down menu. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you&#39;d like to be transitioned to. When the desired state has been selected, click the "Add" button;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-2-pe.png
        title: 'Now in the "Actions" window, you can see the configured action, so you can double-check the action source, icon, and action type. Click "Save";'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-3-pe.png
        title: 'Click "Apply" to save the widget settings;'
    3:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-4-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper right corner of the dashboard page.'
        
navigate-to-new-dashboard-state-2:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-5-pe.png
        title: 'After saving the changes, you can see an icon-button in the upper right part of the widget. Click this icon;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-6-pe.png
        title: 'You will go to the state specified in the action.'

navigate-to-new-dashboard-state-3:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-7-pe.png
        title: 'If you want to open the state in a separate dialog or popup, select the corresponding option from the "dashboard state display option" dropdown menu in the action settings;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-8-pe.png
        title: 'After selecting the dashboard state display option, menu items will appear where you can make additional settings for the dialog window. All these parameters are optional;'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-9-pe.png
        title: 'Click again on the "temperature" icon in the top right corner of the widget;'
    3:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-new-dashboard-state-10-pe.png
        title: 'The new state will open according to the selected parameter.'

update-current-dashboard-state-1:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-1-pe.png
        title: 'Enter edit mode of the dashboard and click the "Add new widget" button at the top of the screen;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-2-pe.png
        title: 'Select the "Charts" widget bundle;'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-3-pe.png
        title: 'Select the "Timeseries Line Chart" widget;'
    3:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-4-pe.png
        title: 'Navigate to the Entity alias tab in the "Datasource" section. Enter the name of the future alias in the "Entity alias" field and click the "Create a new one!";'
    4:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-5-pe.png
        title: 'Choose the "Entity from dashboard state" from the "Filter type" field and click "Add";'
    6:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-6-pe.png
        title: 'Replace the label of the "temperature" key with <b>${entityName}</b>. Then, click "Add" to add new widget on the dashboard;'
    7:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-7-pe.png
        title: 'Drag the "Time Series Line Chart" widget to a free space and resize it.'

update-current-dashboard-state-2:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-8-pe.png
        title: 'Choose the "Action cell button" action source. Input a name for the action and choose an icon that will represent a button. With this icon, action will be performed. Choose an "Update current dashboard state" action type from the "Action" drop-down menu. Then, click the "Add" button;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-9-pe.png
        title: 'Now in the "Actions" window, you can see the configured action, so you can double-check the action source, icon, and action type. Click "Save";'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-10-pe.png
        title: 'Click "Apply" to save the widget settings;'
    3:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-11-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper right corner of the dashboard page.'

update-current-dashboard-state-3:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-12-pe.png
        title: 'After saving changes, you will see icons opposite the entity names in the "Entities table" widget. Clicking on any of these icons will update the entity details, and they will be shown on the "Timeseries Line Chart" widget on the current dashboard.'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/update-current-dashboard-state-13-pe.png
        title: ''

navigate-to-other-dashboard:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-other-dashboard-1-pe.png
        title: 'As an example for this manual, choose "Widget header button" action source. Input a name for the action and choose an icon that will represent a button. With this icon, action will be performed. Choose a "Navigate to other dashboard" action type from the "Action" drop-down menu. After choosing an action type, the drop-down menu "Target dashboard" appears. Select a dashboard you&#39;d like to be transitioned to. Note that you can also navigate to an existing state of the selected dashboard. When the desired dashboard has been selected, click the "Add" button;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-other-dashboard-2-pe.png
        title: 'Now in the "Actions" window, you can see the configured action, so you can double-check the action source, icon, and action type. Click "Save";'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-other-dashboard-3-pe.png
        title: 'Click "Apply" to save the widget settings;'
    3:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-other-dashboard-4-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper right corner of the dashboard page;'
    4:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-other-dashboard-5-pe.png
        title: 'After saving the changes, you can see an icon in the upper right part of the widget. Click this icon;'
    5:
        image: /images/user-guide/ui/widgets/actions/guide/navigate-to-other-dashboard-6-pe.png
        title: 'You will transfer to the previously selected dashboard (or chosen state in that dashboard).'

custom-action-1:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-1-pe.png
        title: 'Choose the "Action cell button" action source. Input a name for the action and choose an icon that will represent a button. With this icon, action will be performed. Choose an "Custom action" action type from the "Action" drop-down menu. After choosing a "Custom action" type, a field for inputting a function will appear. Enter your custom function there. Then, click the "Add" button;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-2-pe.png
        title: 'Now in the "Actions" window, you can see the configured action, so you can double-check the action source, icon, and action type. Click "Save";'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-3-pe.png
        title: 'Click "Apply" to save the widget settings;'
    3:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-4-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper right corner of the dashboard page;'

custom-action-2:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-5-pe.png
        title: 'After saving the changes, you will see "trash" icons next to the entity names in the "Entities table" widget. Clicking on one of them will perform the action of deleting the corresponding object. Try removing one of the devices;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-6-pe.png
        title: 'Confirm deleting the device in the dialog box;'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-7-pe.png
        title: 'The device has been removed.'

custom-action-html-1:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-1-pe.png
        title: 'As an example for this manual, choose "Widget header button" action source. Input a name for the action and choose an icon that will represent a button. With this icon, action will be performed. Choose a "Custom action (with HTML template)" action type from the "Action" drop-down menu. In the tabs that appear, select "JavaScript" tab;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-2-pe.png
        title: 'Enter a JavaScript function for your custom action;'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-3-pe.png
        title: 'In "HTML" tab, enter an HTML code for your custom action. After input functions, click the "Add" button;'
    3:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-4-pe.png
        title: 'The first action button for adding a new entity has been added.'

custom-action-html-2:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-5-pe.png
        title: 'Click the "plus" icon in the top right corner of the screen again to open a new "Add action" window;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-6-pe.png
        title: 'Choose the "Action cell button" action source. Input a name for the action and choose an icon that will represent a button. With this icon, action will be performed. Choose an "Custom action (with HTML template)" action type from the "Action" drop-down menu. In the tabs that appear, select "JavaScript" tab;'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-7-pe.png
        title: 'Enter a JavaScript function for your custom action;'
    3:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-8-pe.png
        title: 'In "HTML" tab, enter an HTML code for your custom action. After input functions, click the "Add" button;'
    4:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-9-pe.png
        title: 'Now in the “Actions” window, you can see the configured actions, so you can double-check the action source, icon, and action type. Click "Save";'
    5:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-10-pe.png
        title: 'Click "Apply" to save the widget settings;'
    6:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-11-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper right corner of the dashboard page;'

custom-action-html-3:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-12-pe.png
        title: 'Perform the actions of adding a new device by clicking the "Add device" action button at the top of the widget;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-13-pe.png
        title: 'In the "Add entity" window that opens, select the type of new entity - "Device" and enter its name;'
    2:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-14-pe.png
        title: 'The new device has been added.'
        
custom-action-html-4:
    0:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-15-pe.png
        title: 'Click on the "pencil" icon next to the name of the device you want to edit;'
    1:
        image: /images/user-guide/ui/widgets/actions/guide/custom-action-with-html-template-16-pe.png
        title: 'After clicking the action button, the device editing window will open. Make the necessary changes and click "Save".'

entity-sources:
    0:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-sources-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-sources-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-sources-3-pe.png

entity-cellbutton:
    0:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-action-cellbutton-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-action-cellbutton-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-action-cellbutton-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-action-cellbutton-4-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-action-cellbutton-5-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-action-cellbutton-6-pe.png

entity-widgetheaderbutton:
    0:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-widgetheaderbutton-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-widgetheaderbutton-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-widgetheaderbutton-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-widgetheaderbutton-4-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-widgetheaderbutton-5-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-widgetheaderbutton-6-pe.png

entity-onrowclick:
    0:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowclick-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowclick-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowclick-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowclick-4-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowclick-5-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowclick-6-pe.png

entity-onrowdoubleclick:
    0:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowdoubleclick-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowdoubleclick-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowdoubleclick-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowdoubleclick-4-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowdoubleclick-5-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/entity-cards/entity-onrowdoubleclick-6-pe.png

onnode:
    0:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onnode-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onnode-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onnode-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onnode-4-pe.png

onhtml:
    0:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-4-pe.png

onhtml-title:
    0:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-title-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-title-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-title-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-title-4-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/entity-cards/onhtml-title-5-pe.png








chart-editmode:
    0:
        image: /images/user-guide/ui/widgets/actions/charts/chart-editmode.png
    1:
        image: /images/user-guide/ui/widgets/actions/charts/chart-editmode-1.png
    2:
        image: /images/user-guide/ui/widgets/actions/charts/chart-editmode-2.png

charts-source-whb:
    0:
        image: /images/user-guide/ui/widgets/actions/charts/charts-source-whb.png
    1:
        image: /images/user-guide/ui/widgets/actions/charts/charts-source-whb-1.png
    2:
        image: /images/user-guide/ui/widgets/actions/charts/charts-source-whb-2.png
    3:
        image: /images/user-guide/ui/widgets/actions/charts/charts-source-whb-3.png
    4:
        image: /images/user-guide/ui/widgets/actions/charts/charts-source-whb-4.png
    5:
        image: /images/user-guide/ui/widgets/actions/charts/charts-source-whb-5.png
    6:
        image: /images/user-guide/ui/widgets/actions/charts/charts-source-whb-6.png
    7:
        image: /images/user-guide/ui/widgets/actions/charts/charts-source-whb-7.png

map-creation:
    0:
        image: /images/user-guide/ui/widgets/actions/maps/to-create-a-map-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/maps/to-create-a-map-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/maps/to-create-a-map-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/maps/to-create-a-map-4-pe.png  
    4:
        image: /images/user-guide/ui/widgets/actions/maps/to-create-a-map-5-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/maps/to-create-a-map-6-pe.png

map-polygon:
    0:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-4-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-5-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-6-pe.png
    6:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-7-pe.png
    7:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-8-pe.png
    8:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-9-pe.png
    9:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-10-pe.png
    10:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-11-pe.png
    11:
        image: /images/user-guide/ui/widgets/actions/maps/polygon-12-pe.png
  
navigate-to-actions-map:
    0:
        image: /images/user-guide/ui/widgets/actions/maps/navigate-to-actions-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/maps/navigate-to-actions-2-pe.png

whb-map:
    0:
        image: /images/user-guide/ui/widgets/actions/maps/whb-map.png
    1:
        image: /images/user-guide/ui/widgets/actions/maps/whb-map-1.png
    2:
        image: /images/user-guide/ui/widgets/actions/maps/whb-map-2.png

omc-map:
    0:
        image: /images/user-guide/ui/widgets/actions/maps/omc-map-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/maps/omc-map-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/maps/omc-map-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/maps/omc-map-4-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/maps/omc-map-5-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/maps/omc-map-6-pe.png

tooltiptag:
    0:
        image: /images/user-guide/ui/widgets/actions/maps/tooltiptag-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/maps/tooltiptag-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/maps/tooltiptag-3-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/maps/tooltiptag-4-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/maps/tooltiptag-5-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/maps/tooltiptag-6-pe.png
    6:
        image: /images/user-guide/ui/widgets/actions/maps/tooltiptag-7-pe.png

mob:
    0:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-1-pe.png
    1:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-2-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-3-pe.png

mob-layout-1:
    1: 
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-4-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-5-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-6-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-7-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-8-pe.png
    6:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-9-pe.png
    7:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-10-pe.png

mob-layout-2:
    1:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-11-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-12-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-13-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-14-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-15-pe.png
    6:
        image: /images/user-guide/ui/widgets/actions/settings/mob-layout-16-pe.png

dialog-window:
    1:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-1-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-2-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-3-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-4-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-5-pe.png
    6:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-6-pe.png

dialog-window-1:
    1:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-7-pe.png
    2:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-8-pe.png
    3:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-9-pe.png
    4:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-10-pe.png
    5:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-11-pe.png
    6:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-12-pe.png
    7:
        image: /images/user-guide/ui/widgets/actions/settings/dialog-window-13-pe.png

entityfromwidget:
    0:
        image: /images/user-guide/ui/widgets/actions/settings/entityfromwidget-pe.png

---

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/ui/widget-actions.md %}