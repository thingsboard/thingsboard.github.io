---
layout: docwithnav-paas
assignees:
- ashvayka
title: Working with IoT dashboards
description: IoT dashboards using ThingsBoard
redirect_from: "/docs/paas/user-guide/ui/dashboards/"

creating-dashboard:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-1-pe.png
        title: 'Login to your ThingsBoard instance and navigate to the "Dashboards" page through the main menu on the left of the screen. By default, you navigate to the dashboard group "All";'
    1:
        image: /images/user-guide/dashboards/overview/create-dashboard-2-pe.png
        title: 'Click the "+" sign in the upper right corner of the screen, and select "Create new dashboard" from the drop-down menu;'
    2:
        image: /images/user-guide/dashboards/overview/create-dashboard-3-pe.png
        title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "Add";'
    3:
        image: /images/user-guide/dashboards/overview/create-dashboard-4-pe.png
        title: 'Once you have created the dashboard, it will be automatically opened. Save it by clicking the "Save" button in the upper right corner.'
    4:
        image: /images/user-guide/dashboards/overview/create-dashboard-4-1-pe.png
        title: 'Your first dashboard has been successfully created. As you continue to add new dashboards, they will appear at the top of the list. This default sort is based on the creation timestamp.'

creating-dashboard-2:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-5-pe.png
        title: 'In the "Add Dashboard" dialog, enter the dashboard title, and then click "Next: Owner and groups";'
    1:
        image: /images/user-guide/dashboards/overview/create-dashboard-6-pe.png
        title: 'Change the owner and select an existing dashboard group or create a new one, then click "Add";'
    2:
        image: /images/user-guide/dashboards/overview/create-dashboard-7-pe.png
        title: 'The created dashboard is located in the "Sensors" dashboard&#39;s group and belongs to Customer A.'

creating-dashboard-3:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-8-pe.png
        title: 'By default, the list of dashboards displays all dashboards, including those of your customers. To view only your dashboards, toggle the "Include customer entities" option.'

import-dashboard:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-1-pe.png
        title: 'Go to the "Dashboards" page and click on the "+" button in the upper right corner of the page and select "Import dashboard" from the drop-down menu;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-2-pe.png
        title: 'In the dashboard import window, upload the JSON file and click "Import";'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-3-pe.png
        title: 'You have imported a dashboard. Open it;'
    3:
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-4-pe.png
        title: 'Your dashboard has been imported along with all of its widgets.'

export-dashboard:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/export-dashboard-1-pe.png
        title: 'To export a dashboard, go to the "Dashboards" page. Opposite the name of the dashboard in the list, click on the “Export dashboard” button. The configuration file in JSON format with all settings on the control panel will be saved on your PC.'

share-dashboard-group:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/share-dashboard-group-1-pe.png
        title: 'Go to the "Dashboards" page and navigate to the "Groups" tab. Click the "Share" icon next to the dashboard group that you want to share;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/share-dashboard-group-2-pe.png
        title: 'Select the customer to which you want to share the dashboard group. Additionally, you can share the dashboard group with a specific user group or with all users of the customer. Specify permissions and click "Share".'

make-public:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-1-pe.png
        title: 'Go to the "Dashboards" page and navigate to the "Groups" tab. Click the "Make public" icon next to the dashboard group that you want to make public;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-2-pe.png
        title: 'In the confirmation dialog box, click "Yes";'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-3-pe.png
        title: 'To copy the public dashboard link and share it, open public dashboard group and click the "Public dashboard link" icon opposite the needed dashboard;'
    3:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-4-pe.png
        title: 'In the pop-up window, click "Copy public link" icon. You can now share the dashboard using this link, for example, by sending it via email. Or you can use the quick buttons to share the link on social networks.'

make-private:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-5-pe.png
        title: 'Go to the "Dashboards" page and select the "Groups" tab. Click the "Make private" icon next to the dashboard group that you want to make private;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-6-pe.png
        title: 'In the confirmation dialog box, click "OK".'

dashboard-details:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/dashboard-details-1-pe.png
        title: 'Go to the "Dashboards" page and click the "Dashboard details" icon next to the dashboard that you want to edit;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/dashboard-details-2-pe.png
        title: 'In the "Dashboard details" window, click the "Pencil" icon to enter edit mode;'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/dashboard-details-3-pe.png
        title: 'Edit the fields you need. For example, edit the title of the dashboard, specify description. After making the edits, remember to save all changes;'
    3:
        image: /images/user-guide/dashboards/managing-dashboard/dashboard-details-4-pe.png
        title: 'You have updated the dashboard information.'

delete-dashboard-1:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-1-pe.png
        title: 'Go to the "Dashboards" page and click the "Trash" icon opposite the dashboard`s name you want to delete;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-2-pe.png
        title: 'Confirm deleting the dashboard in the dialog box.'

delete-dashboard-2:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-3-pe.png
        title: 'Click the "Dashboard details" icon next to the dashboard that you want to delete;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-4-pe.png
        title: 'In the "Dashboard details" window, click "Delete dashboard" button;'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-5-pe.png
        title: 'Confirm deleting the dashboard in the dialog box.'

delete-dashboard-3:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-6-pe.png
        title: 'Mark one or multiple dashboards you want to delete. Click on the "Trash" bin icon in the top right corner;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-7-pe.png
        title: 'Confirm deleting dashboards in the dialog box.'

dashboard-toolbar:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-toolbar-view-mode.png
        title: 'Dashboard toolbar in view mode.'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-toolbar-edit-mode.png
        title: 'Dashboard toolbar in edit mode.'

edit-mode:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-settings-edit-mode-1-pe.png
        title: 'To enter dashboard edit mode, simply open the dashboard you wish to edit and click the "Edit mode" button found in the upper right corner of the screen;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-settings-edit-mode-2-pe.png
        title: 'Click "Save" button to save the dashboard or click "Cancel" button to rollback all unsaved changes.'

add-new-widget:
    0:
        image: /images/user-guide/widgets/overview/add-new-dashboard-1-pe.png
        title: 'Open your dashboard and enter edit mode;'
    1:
        image: /images/user-guide/widgets/overview/add-new-dashboard-2-pe.png
        title: 'Click the "+ Add widget" icon at the top of the screen, or (if this is your first widget on this dashboard) click a large "Add new widget" sign in the middle of the screen to open the Select widgets bundle dialog box;'
    2:
        image: /images/user-guide/widgets/overview/add-new-dashboard-3-pe.png
        title: 'Select a widget bundle, such as "Charts". To quickly find your desired widget, use the search bar by clicking the magnifying glass icon and entering the widget&#39;s name;'
    3:
        image: /images/user-guide/widgets/overview/add-new-dashboard-4-pe.png
        title: 'Choose a widget, for instance, "Timeseries Line Chart," and click on it to open the "Add Widget" dialog window;'
    4:
        image: /images/user-guide/widgets/overview/add-new-dashboard-5-pe.png
        title: 'Specify the data source, add the data key, and click the "Add" button. Finally, apply your changes;'
    5:
        image: /images/user-guide/widgets/overview/add-new-dashboard-6-pe.png
        title: 'Your first widget has been created.'

dashboard-toolbar-export:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-toolbar-export-1-pe.png
        title: 'Go to the "Dashboards" page, open the dashboard and click the "Export dashboard" button in the upper right corner of the screen and select "Export JSON configuration".'

pro-export:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-toolbar-export-png-pdf-1-pe.png
        title: 'Go to the "Dashboards" page, open the dashboard and click the "Export dashboard" button in the upper right corner of the screen. Choose from several additional formats: PDF, PNG or JPEG, and click on it;'
    1:
        image: /images/user-guide/dashboards/overview/pdf-export.png
        title: 'The dashboard that was exported as PNG.'

time-window:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-real-time-mode-1-pe.png
        title: 'In the real-time mode, widgets constantly receive updates from the server and automatically show you only the data that matches the time window for a current timestamp.'
    1:
        image: /images/user-guide/dashboards/overview/timewindow-history-mode-1-pe.png
        title: 'In the history mode, widgets receive data only during the initial load and no updates are issued over WebSockets.'

time-window-aggregation:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-aggregation-pe.png

time-window-interval:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-interval-3-pe.png
        title: ''
    1:
        image: /images/user-guide/dashboards/overview/timewindow-interval-1-pe.png
        title: 'From the beginning of the specified timestamp (12 a.m.) to the end of it (12 a.m. the next night).'
    2:
        image: /images/user-guide/dashboards/overview/timewindow-interval-2-pe.png
        title: 'The chart shows from the begging of the day (12 a.m. at night) until the time when the time window was updated.'

time-window-time-zone:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-timezone-pe.png

time-window-zoom-in:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-zoom-1-pe.png
        title: 'Zoom in by holding the right mouse key and move it on the chart to the place where you need to get a closer look.'
    1:
        image: /images/user-guide/dashboards/overview/timewindow-zoom-2-pe.png
        title: 'To zoom out to the original size of the chart, double-click on the widget.'

filters:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-filters-1-pe.png
        title: 'Open your dashboard, enter edit mode and click the "Filters" button in the upper right corner of the dashboard window. In the pop-up window click "Add filter" button;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-filters-2-pe.png
        title: 'In the pop-up window click "Add key filter" button;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-filters-3-pe.png
        title: 'Enter key name, select key type and value type. Then add a filter that checks if the sensor model is "DHT22" and click "Add";'
    3:
        image: /images/user-guide/dashboards/overview/dashboard-filters-4-pe.png
        title: 'Add another key filter;'
    4:
        image: /images/user-guide/dashboards/overview/dashboard-filters-5-pe.png
        title: 'Add filter that checks if the battery level is less than 20 percent;'
    5:
        image: /images/user-guide/dashboards/overview/dashboard-filters-6-pe.png
        title: 'Click "Add" button to add new filter;'
    6:
        image: /images/user-guide/dashboards/overview/dashboard-filters-7-pe.png
        title: 'Click "Save" and apply all changes.'

aliases:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-aliases-1-pe.png
        title: 'To add an alias, open your dashboard and enter edit mode. Then, in the upper right corner, locate the "Entity aliases" button and click it. A pop-up window will appear, where you should click the "Add alias" button;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-aliases-2-pe.png
        title: 'In the new pop-up window, fill in the alias name, select the filter type and device type, and then click the "Add" button;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-aliases-3-pe.png
        title: 'Click "Save" button to save the alias and all changes.'

settings:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-settings-1-pe.png
        title: 'Open the dashboard and click the "Edit mode" button in the upper right corner of the screen;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-settings-2-pe.png
        title: 'Click the “gear” icon at the top of the window;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-settings-3-pe.png
        title: 'The dashboard settings window will open.'

title-settings:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-settings-title-color-1-pe.png
        title: 'Check the box "Display dashboard title" and select color of title;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-settings-title-color-2-pe.png
        title: 'The changed title appears on the top left of the Dashboard.'

dashboard-logo-settings:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-logo-settings-2-pe.png
        title: 'Display logo in dashboard fullscreen mode" and add dashboard logo image. Apply changes;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-logo-settings-3-pe.png
        title: 'Expand dashboard to fullscreen;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-logo-settings-4-pe.png
        title: 'The added logo appears in the top left corner in the fullscreen mode of the dashboard.'

toolbar-dashboard-1:
    0:
        image: /images/user-guide/dashboards/overview/toolbar-settings-1-pe.png
        title: 'Hide "Display dashboards selection", "Display timewindow" and "Display export" icons on the dashboard page;'
    1:
        image: /images/user-guide/dashboards/overview/toolbar-settings-2-pe.png
        title: 'The specified icons are hidden on the dashboard page.'

toolbar-dashboard-2:
    0:
        image: /images/user-guide/dashboards/overview/toolbar-settings-3-pe.png
        title: 'The “Hide Toolbar” will hide the toolbar from the dashboard page.'
    1:
        image: /images/user-guide/dashboards/overview/toolbar-settings-4-pe.png
        title: 'Instead of the toolbar, on the upper right of the screen, you will find “Enter edit mode” icon.'

toolbar-dashboard-3:
    0:
        image: /images/user-guide/dashboards/overview/toolbar-settings-5-pe.png
        title: 'The "Keep toolbar opened" is responsible for displaying the toolbar on the dashboard page.'
    1:
        image: /images/user-guide/dashboards/overview/toolbar-settings-6-pe.png
        title: 'Instead of the toolbar, on the upper right of the screen you find the three-dots icon. By clicking on it, the hidden toolbar will be opened.'

layout-1:
    0:
        image: /images/user-guide/dashboards/overview/manage-layouts-1-pe.png
        title: 'Enter edit mode and click the button three-rectangles "Manage layouts" in the upper left corner of the dashboard window. It opens the small window for layouts’ control;'

layout-2:
    0:
        image: /images/user-guide/dashboards/overview/manage-layouts-2-pe.png
        title: 'Click the "gear" icon named "Layout setting" to open layout settings window.'
    1:    
        image: /images/user-guide/dashboards/overview/manage-layouts-3-pe.png
        title: 'The layouts’ settings are identical to the layout settings and the background settings of the dashboard settings.'

layout-3:
    0:
        image: /images/user-guide/dashboards/overview/manage-layouts-4-pe.png
        title: 'Toggle the "Divider" to divide the dashboard into two separate parts.'

layout-4:   
    0:
        image: /images/user-guide/dashboards/overview/manage-layouts-5-pe.png
        title: 'Set up both layouts in completely different ways. Set a different background for each window. And resize the window sizes in a certain percentage ratio to each other. Then save changes;'
    1:
        image: /images/user-guide/dashboards/overview/manage-layouts-6-pe.png

columns:
    0:
        image: /images/user-guide/dashboards/overview/layout-settings-columns-count-1-pe.png
        title: 'Specify the number of columns;'
    1:
        image: /images/user-guide/dashboards/overview/layout-settings-columns-count-2-pe.png

margin:
    0:
        image: /images/user-guide/dashboards/overview/layout-settings-margin-between-widgets-1-pe.png
        title: 'Specify the margin between widgets;'
    1:
        image: /images/user-guide/dashboards/overview/layout-settings-margin-between-widgets-2-pe.png
        title: 'By default, the margin is set to 10;'
    2:
        image: /images/user-guide/dashboards/overview/layout-settings-margin-between-widgets-3-pe.png
        title: 'The maximum margin is 50.'

autofill:
    0:
        image: /images/user-guide/dashboards/overview/layout-settings-auto-fill-layout-height-1-pe.png
        title: 'When the checkbox is ticked, all the widgets fit vertically in the space of a screen;'
    1:
        image: /images/user-guide/dashboards/overview/layout-settings-auto-fill-layout-height-2-pe.png
        title: 'Auto fill layout height disabled, so we have to scroll down the widgets;'
    2:
        image: /images/user-guide/dashboards/overview/layout-settings-auto-fill-layout-height-3-pe.png
        title: 'When auto fill layout height is enabled, the widgets fit on the screen.'

background-settings:
    0:
        image: /images/user-guide/dashboards/overview/layout-settings-background-color-1-pe.png
        title: 'Click on the "Background color" row;'
    1:
        image: /images/user-guide/dashboards/overview/layout-settings-background-color-2-pe.png
        title: 'In the Color pop-up, choose the needed color and wished transparency. Then, click "Save" to apply changes;'
    2:
        image: /images/user-guide/dashboards/overview/layout-settings-background-color-3-pe.png
        title: 'After saving, you can see the customized background.'

background-image:
    0:
        image: /images/user-guide/dashboards/overview/layout-settings-background-image-1-pe.png
        title: 'Drop an image in the appropriate field, or upload it from a folder on your computer;'
    1:
        image: /images/user-guide/dashboards/overview/layout-settings-background-image-2-pe.png
        title: 'To adjust the position of the image more precisely, click the "Background size mode" drop-down menu and choose how exactly the picture will fill the background space. And apply changes;'
    2:
        image: /images/user-guide/dashboards/overview/layout-settings-background-image-3-pe.png
        title: 'After saving changes, you can see the customized background.'

states-1:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-1-pe.png
        title: 'Enter edit mode and click the button two-layered squares "Manage dashboard states" in the upper left corner of the dashboard window. It will open the window with a dashboard state configuration.'

states-root:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-root-1-pe.png
        title: 'You can change a root state by clicking the “Pencil” icon (Edit dashboard state);'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-root-2-pe.png
        title: 'Tick the “Root state” checkbox, and save changes.'

states-2:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-2-pe.png
        title: 'To add a new state, you need to click the “+” button in the right upper of the manage dashboard states window;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-4-pe.png
        title: 'Enter a state name, State ID will form automatically according to the name, but you can change it. Click "Add";'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-states-5-pe.png
        title: 'After adding states, save all changes;'
    3:
        image: /images/user-guide/dashboards/overview/dashboard-states-6-pe.png
        title: 'You can navigate between states through a drop-down menu.'

states-3:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-7-pe.png
        title: 'Click the “pencil” icon (edit widget) in the upper right corner of the widget to enter the widget configuration mode;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-8-pe.png
        title: 'Navigate to the “Action” tab and click the “+” icon to add a new action;'

states-4:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-9-pe.png
        title: 'Enter the action name, select the action source, an aim of the action, and select the state to which you will be transferred. Then click "Add" button;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-10-pe.png
        title: 'The new action appears in the actions list. Apply changes;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-states-11-pe.png
        title: 'Click the row of our widget to activate the action;'
    3:
        image: /images/user-guide/dashboards/overview/dashboard-states-12-pe.png
        title: 'After clicking, we immediately transfer to the chosen state.'

states-entity-name:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-13-pe.png
        title: 'For the state to be named after the entity, use ${entityName} as the name of the state;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-14-pe.png
        title: 'Click the “pencil” icon (edit widget) in the upper right corner of the widget to enter the widget configuration mode. Navigate to the “Action” tab and click the “+” icon to add a new action;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-states-15-pe.png
        title: 'Enter action name, select action source, an aim of the action and select a state to which you will be transferred. Then click "Add" button;'
    3:
        image: /images/user-guide/dashboards/overview/dashboard-states-16-pe.png
        title: 'The new action appears in the actions list. Apply changes;'
    4:
        image: /images/user-guide/dashboards/overview/dashboard-states-17-pe.png
        title: 'Click the row of our widget to activate the action;'
    5:
        image: /images/user-guide/dashboards/overview/dashboard-states-18-pe.png
        title: 'After clicking, you will be transitioned to a state that is called the same as the entity that took part in the action.'

--- 

{% assign docsPrefix = "paas/" %}
{% include docs/user-guide/dashboards.md %}