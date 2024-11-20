---
layout: docwithnav
assignees:
- ashvayka
title: Working with IoT dashboards
description: IoT dashboards using ThingsBoard
redirect_from: "/docs/user-guide/ui/dashboards/"

creating-dashboard:
    0:
        image: /images/user-guide/dashboards/overview/create-dashboard-1-ce.png
        title: 'Login to your ThingsBoard instance and navigate to the "Dashboards" page through the main menu on the left of the screen. Then, click the "+" sign in the upper right corner of the screen, and select "Create new dashboard" from the drop-down menu;'
    1:
        image: /images/user-guide/dashboards/overview/create-dashboard-2-ce.png
        title: 'In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "Add";'
    2:
        image: /images/user-guide/dashboards/overview/create-dashboard-3-ce.png
        title: 'Once you have created the dashboard, it will be automatically opened. Save it by clicking the "Save" button in the upper right corner.'
    3:
        image: /images/user-guide/dashboards/overview/create-dashboard-4-ce.png
        title: 'Your first dashboard has been successfully created. As you continue to add new dashboards, they will appear at the top of the list. This default sort is based on the creation timestamp.'

import-dashboard:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-1-ce.png
        title: 'Go to the "Dashboards" page and click on the "+" button in the upper right corner of the page and select "Import dashboard" from the drop-down menu;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-2-ce.png
        title: 'In the import dashboard window, upload the dashboard configuration JSON file and click "Import";'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-3-ce.png
        title: 'You have imported a dashboard. Open it;'
    3:
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-4-ce.png
        title: 'As you can see, your dashboard has been imported along with all of its widgets.'

export-dashboard:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/export-dashboard-1-ce.png
        title: 'To export a dashboard, go to the "Dashboards" page and click the "Export dashboard" icon next to the dashboard that you want to export. The configuration file in JSON format with all settings on the control panel will be saved on your PC.'

make-public:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-1-ce.png
        title: 'Go to the "Dashboards" page. Click the "Make public" icon next to the dashboard that you want to make public;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-2-ce.png
        title: 'Dashboard is now public. In the pop-up window, click "Copy public link" icon. You can now share the dashboard using this link, for example, by sending it via email. Or you can use the quick buttons to share the link on social networks;'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-3-ce.png
        title: 'Next time you can find the public link to the dashboard in the dashboard details window;'

make-private:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-4-ce.png
        title: 'Click the "Make private" icon next to the dashboard that you want to make private;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/make-public-dashboard-5-ce.png
        title: 'In the confirmation dialog box, click "Yes".'

manage-assigned-customers:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-1-ce.png
        title: 'Go to the "Dashboards" page and click the "Manage assigned customers" icon next to the dashboard that you want to make assigned to the customer;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-2-ce.png
        title: 'Select the customer(s) to assign the dashboard. Click "Update";'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-3-ce.png
        title: 'The dashboard assigned to the selected customer.'

manage-unassigned-customers:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-1-ce.png
        title: 'Go to the "Dashboards" page and click the "Manage assigned customers" icon next to the dashboard that you want to make assigned to the customer;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-5-ce.png
        title: 'Remove the customer(s) from the assigned customer list. Click "Update";'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-6-ce.png
        title: 'Assigned customers list updated.'

assigned-multiple-dashboards:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-4-ce.png
        title: 'Go to the "Dashboards" page and mark one or multiple dashboards. Then, select the desired function using the "Assign Dashboards" or "Unassign Dashboards" buttons in the upper right corner of the screen.'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-7-ce.png
        title: 'Select the customer(s) to assign the dashboards, then click "Assign";'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/manage-assigned-customers-8-ce.png
        title: 'The list of clients to whom the selected dashboards were assigned has been updated.'

dashboard-details:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/dashboard-details-1-ce.png
        title: 'Go to the "Dashboards" page and click the "Dashboard details" icon next to the dashboard that you want to edit;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/dashboard-details-2-ce.png
        title: 'Click the "pencil" icon to enter edit mode;'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/dashboard-details-3-ce.png
        title: 'Edit the fields you need. For example, edit the title of the dashboard, specify description. After making the edits, remember to save all changes;'
    3:
        image: /images/user-guide/dashboards/managing-dashboard/dashboard-details-4-ce.png
        title: 'You have updated the dashboard information.'

delete-dashboard-1:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-1-ce.png
        title: 'Go to the "Dashboards" page and click the "Trash" icon opposite the dashboard`s name you want to delete;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-2-ce.png
        title: 'Confirm deleting the dashboard in the dialog box.'

delete-dashboard-2:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-3-ce.png
        title: 'Click the "Dashboard details" icon next to the dashboard that you want to delete;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-4-ce.png
        title: 'In the dashboard details, click "Delete dashboard" button;'
    2:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-5-ce.png
        title: 'Confirm deleting the dashboard in the dialog box.'

delete-dashboard-3:
    0:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-6-ce.png
        title: 'Mark one or multiple dashboards you want to delete. Click on the "Trash" bin icon in the top right corner;'
    1:
        image: /images/user-guide/dashboards/managing-dashboard/delete-dashboard-7-ce.png
        title: 'Confirm deleting dashboards in the dialog box.'

dashboard-toolbar:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-toolbar-view-mode-ce.png
        title: 'Dashboard toolbar in view mode.'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-toolbar-edit-mode-ce.png
        title: 'Dashboard toolbar in edit mode.'

edit-mode:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-settings-edit-mode-1-ce.png
        title: 'To enter dashboard edit mode, simply open the dashboard you wish to edit and click the "Edit mode" button found in the upper right corner of the screen;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-settings-edit-mode-2-ce.png
        title: 'Click "Save" button to save the dashboard or click "Cancel" button to rollback all unsaved changes.'

add-new-widget:
    0:
        image: /images/user-guide/widgets/overview/add-new-dashboard-1-ce.png
        title: 'Open your dashboard and enter edit mode;'
    1:
        image: /images/user-guide/widgets/overview/add-new-dashboard-2-ce.png
        title: 'Click the "+ Add widget" icon at the top of the screen, or (if this is your first widget on this dashboard) click a large "Add new widget" sign in the middle of the screen to open the Select widgets bundle dialog box;'
    2:
        image: /images/user-guide/widgets/overview/add-new-dashboard-3-ce.png
        title: 'Select a widget bundle, such as "Charts". To quickly find your desired widget, use the search bar by clicking the magnifying glass icon and entering the widget&#39;s name;'
    3:
        image: /images/user-guide/widgets/overview/add-new-dashboard-4-ce.png
        title: 'Choose a widget, for instance, "Timeseries Line Chart," and click on it to open the "Add Widget" dialog window;'
    4:
        image: /images/user-guide/widgets/overview/add-new-dashboard-5-ce.png
        title: 'Specify the data source, add the data key, and click the "Add" button. Finally, apply your changes;'
    5:
        image: /images/user-guide/widgets/overview/add-new-dashboard-6-ce.png
        title: 'Your first widget has been created.'

dashboard-toolbar-export:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-toolbar-export-1-ce.png
        title: 'Go to the "Dashboards" page, open the dashboard and click the "Export dashboard" button in the upper right corner of the screen.'

pro-export:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-toolbar-export-png-pdf-1-pe.png
        title: 'To enter dashboard edit mode, open the dashboard and click the "Edit mode" button in the upper right corner of the screen;'
    1:
        image: /images/user-guide/dashboards/overview/pdf-export.png
        title: 'The dashboard that was exported as PNG.'

time-window:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-real-time-mode-1-ce.png
        title: 'In the real-time mode, widgets constantly receive updates from the server and automatically show you only the data that matches the time window for a current timestamp.'
    1:
        image: /images/user-guide/dashboards/overview/timewindow-history-mode-1-ce.png
        title: 'In the history mode, widgets receive data only during the initial load and no updates are issued over WebSockets.'

time-window-aggregation:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-aggregation-1-ce.png

time-window-interval:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-interval-3-ce.png
        title: ''
    1:    
        image: /images/user-guide/dashboards/overview/timewindow-interval-1-ce.png
        title: 'From the begging of the specified timestamp (12 am) to the end of it (12 am the next night).'
    2:
        image: /images/user-guide/dashboards/overview/timewindow-interval-2-ce.png
        title: 'The chart shows from the begging of the day (12 am at night) until the time when the time window was updated.'

time-window-time-zone:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-timezone-1-ce.png

time-window-zoom-in:
    0:
        image: /images/user-guide/dashboards/overview/timewindow-zoom-1-ce.png
        title: 'Move the two sliders towards each other to specify the time period for displaying the data.'
    1:
        image: /images/user-guide/dashboards/overview/timewindow-zoom-2-ce.png
        title: 'The data for the selected period is displayed on the chart.'
    2:
        image: /images/user-guide/dashboards/overview/timewindow-zoom-3-ce.png
        title: 'To zoom out to the original size of the chart, move the sliders back to their default position.'

filters:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-filters-1-ce.png
        title: 'Open your dashboard, enter edit mode and click the "Filters" button in the upper right corner of the dashboard window. In the pop-up window click "Add filter" button;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-filters-2-ce.png
        title: 'In the pop-up window click "Add key filter" button;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-filters-3-ce.png
        title: 'Enter key name, select key type and value type. Then add a filter that checks if the sensor model is "DHT22" and click "Add";'
    3:
        image: /images/user-guide/dashboards/overview/dashboard-filters-4-ce.png
        title: 'Add another key filter;'
    4:
        image: /images/user-guide/dashboards/overview/dashboard-filters-5-ce.png
        title: 'Add filter that checks if the battery level is less than 20 percent;'
    5:
        image: /images/user-guide/dashboards/overview/dashboard-filters-6-ce.png
        title: 'Click "Add" button to add new filter;'
    6:
        image: /images/user-guide/dashboards/overview/dashboard-filters-7-ce.png
        title: 'Click "Save" and apply all changes.'

aliases:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-aliases-1-ce.png
        title: 'Open your dashboard, enter edit mode and click the "Entity aliases" button in the upper right corner of the dashboard window. In the pop-up window click "Add alias" button;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-aliases-2-ce.png
        title: 'In the pop-up window enter alias name, select filter type and device type. Then click "Add" button;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-aliases-3-ce.png
        title: 'Click "Save" button to save the alias and save all changes.'

settings:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-settings-1-ce.png
        title: 'Open the dashboard and click the "Edit mode" button in the upper right corner of the screen;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-settings-2-ce.png
        title: 'Click the “gear” icon at the top of the window;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-settings-3-ce.png
        title: 'The dashboard settings window will open.'

title-settings:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-settings-title-color-1-ce.png
        title: 'Check the box "Display dashboard title" and select color of title;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-settings-title-color-2-ce.png
        title: 'The changed title appears on the top left of the Dashboard.'

dashboard-logo-settings:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-logo-settings-2-ce.png
        title: 'Display logo in dashboard fullscreen mode" and add dashboard logo image. Apply changes;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-logo-settings-3-ce.png
        title: 'Expand dashboard to fullscreen;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-logo-settings-4-ce.png
        title: 'The added logo appears in the top left corner in the fullscreen mode of the dashboard.'

toolbar-dashboard-1:
    0:
        image: /images/user-guide/dashboards/overview/toolbar-settings-1-ce.png
        title: 'Hide "Display dashboards selection", "Display time window" and "Display export" icons on the dashboard page;'
    1:
        image: /images/user-guide/dashboards/overview/toolbar-settings-2-ce.png
        title: 'The specified icons are hidden on the dashboard page.'

toolbar-dashboard-2:
    0:
        image: /images/user-guide/dashboards/overview/toolbar-settings-3-ce.png
        title: 'The “Hide Toolbar” will hide the toolbar from the dashboard page.'
    1:
        image: /images/user-guide/dashboards/overview/toolbar-settings-4-ce.png
        title: 'Instead of the toolbar, on the upper right of the screen, you will find “Enter edit mode” icon.'

toolbar-dashboard-3:
    0:
        image: /images/user-guide/dashboards/overview/toolbar-settings-5-ce.png
        title: 'The "Keep toolbar opened" is responsible for displaying the toolbar on the dashboard page.'
    1:
        image: /images/user-guide/dashboards/overview/toolbar-settings-6-ce.png
        title: 'Instead of the toolbar, on the upper right of the screen you find the three-dots icon. By clicking on it, the hidden toolbar will be opened.'

states-1:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-1-ce.png
        title: 'Enter edit mode and сlick the button two-layered squares "Manage dashboard states" in the upper left corner of the dashboard window. It will open the window with a dashboard state configuration.'

states-root:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-root-1-ce.png
        title: 'You can change a root state by clicking the “Pencil” icon (Edit dashboard state);'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-root-2-ce.png
        title: 'Tick the “Root state” checkbox, and save changes.'

states-2:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-2-ce.png
        title: 'To add a new state, you need to click the “+” button in the right upper of the manage dashboard states window;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-4-ce.png
        title: 'Enter a state name, State ID will form automatically according to the name, but you can change it. Click "Add";'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-states-5-ce.png
        title: 'After adding states, save all changes;'
    3:
        image: /images/user-guide/dashboards/overview/dashboard-states-6-ce.png
        title: 'You can navigate between states through a drop-down menu.'

states-3:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-7-ce.png
        title: 'Click the “pencil” icon (edit widget) in the upper right corner of the widget to enter the widget configuration mode;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-8-ce.png
        title: 'Navigate to the “Action” tab and click the “+” icon to add a new action.'

states-4:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-9-ce.png
        title: 'Enter the action name, select the action source, an aim of the action, and select the state to which you will be transferred. Then click "Add" button;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-10-ce.png
        title: 'The new action appears in the actions list. Apply changes;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-states-11-ce.png
        title: 'Click on the button to activate the action;'
    3:
        image: /images/user-guide/dashboards/overview/dashboard-states-12-ce.png
        title: 'After clicking, we immediately transfer to the chosen state.'

states-entity-name:
    0:
        image: /images/user-guide/dashboards/overview/dashboard-states-13-ce.png
        title: 'For the state to be named after the entity, use ${entityName} as the name of the state;'
    1:
        image: /images/user-guide/dashboards/overview/dashboard-states-14-ce.png
        title: 'Click the “pencil” icon (edit widget) in the upper right corner of the widget to enter the widget configuration mode. Navigate to the “Action” tab and click the “+” icon to add a new action;'
    2:
        image: /images/user-guide/dashboards/overview/dashboard-states-15-ce.png
        title: 'Enter action name, select action source, an aim of the action and select a state to which you will be transferred. Then click "Add" button;'
    3:
        image: /images/user-guide/dashboards/overview/dashboard-states-16-ce.png
        title: 'The new action appears in the actions list. Apply changes;'
    4:
        image: /images/user-guide/dashboards/overview/dashboard-states-17-ce.png
        title: 'Click the row of our widget to activate the action;'
    5:
        image: /images/user-guide/dashboards/overview/dashboard-states-18-ce.png
        title: 'After clicking, you will be transitioned to a state that is called the same as the entity that took part in the action.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/dashboards.md %}
