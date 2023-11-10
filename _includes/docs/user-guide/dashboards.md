* TOC 
{:toc}

## Prerequisites

Before proceeding with this guide, it's recommended that you follow [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide to become familiar with ThingsBoard devices and dashboards. This will enhance your learning experience and understanding of the concepts presented here.

## Introduction

ThingsBoard offers a powerful feature – the ability to create and customize interactive visualizations, also known as dashboards. These dashboards are instruments for monitoring and managing your data and devices efficiently.
With ThingsBoard dashboards, users can adapt interfaces to their specific needs, making it easier than ever to inspect their IoT devices and data. What's brilliant is that each dashboard can be populated with numerous widgets, offering flexibility and customization.
These dashboards aren't limited to a single data source; they can display data from various entities, including devices, assets, and more. Plus, you can assign dashboards to specific Customers, ensuring that the right individuals or teams have access to the data they need.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/dashboards/overview/dashboard-introduction-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/dashboards/overview/dashboard-introduction.png)
{% endif %}

Dashboards in ThingsBoard provide users with the following capabilities:

 - **Data Visualization**: Users can create various widgets such as charts, graphs, tables, and more to visualize data obtained from connected devices. This enables operators and analysts to easily analyze information and track device statuses.

 - **Device Management**: Dashboards can be used to perform management operations on devices, such as turning devices on or off, changing parameters, and so on. Users can set actions and respond to real-time data from devices.

 - **Interactivity**: Dashboards can be designed with interactive elements such as buttons, switches, allowing users to interact with devices and data.

 - **Display Customization**: Users can customize the arrangement and size of widgets, choose color palettes, fonts, and other visualization aspects to create a user-friendly and informative interface.

 - **Role-Based Access**: ThingsBoard allows controlling access to dashboards with different levels of privileges based on user [roles](/docs/{{docsPrefix}}user-guide/rbac/). This ensures data security and confidentiality.

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
ThingsBoard also offers convenient IoT solution templates to reduce time-to-market for your IoT products. 
These templates include interactive dashboards, processing logic, sample devices, users, and all other necessary entities. Think of these templates as a complete PoC/MVP. 
Read more about solution templates [here](/docs/{{docsPrefix}}solution-templates/overview/).
{% endif %}

This guide covers main concepts and various dashboard settings.

## Create new dashboard

To add a new dashboard, you should:

{% include images-gallery.html imageCollection="creating-dashboard" showListImageTitles="true" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
At the stage of creating a dashboard, you can specify it to a different owner and a specific dashboard group right away.
How to create a new group of dashboards, read [here](/docs/{{docsPrefix}}user-guide/groups/#create-new-entity-group).

{% include images-gallery.html imageCollection="creating-dashboard-2" showListImageTitles="true" %}

By default, the list of dashboards displays all dashboards, including those of your customers.
To view only your dashboards, disable the "Include customer entities" option.

{% include images-gallery.html imageCollection="creating-dashboard-3" %}
{% endif %}

### Import dashboard

You can import a dashboard from a JSON file.

To import a dashboard, follow these steps:

{% include images-gallery.html imageCollection="import-dashboard" showListImageTitles="true" %}

## Managing dashboard

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
With your dashboards, you can perform operations such as [export dashboard in the JSON format](#export-dashboard), [share dashboard group](#share-dashboard-group), [make dashboard group public](#make-dashboard-group-public), [edit dashboard](#edit-dashboard) and [delete dashboard](#delete-dashboard) using the corresponding icon next to the dashboard.
{% endif %}

{% if docsPrefix == null %}
With your dashboards, you can perform operations such as [export dashboard in the JSON format](#export-dashboard), [make dashboard public](#make-dashboard-public), [manage assigned customers](#manage-assigned-customers), [edit dashboard](#edit-dashboard) and [delete dashboard](#delete-dashboard) using the corresponding icon next to the dashboard.
{% endif %}

Let's look at each operation.

### Export dashboard

In the ThingsBoard you can export a dashboard as a configuration file in JSON format.
You can use this file to transfer your Dashboard or widget configuration to another instance.

To export a dashboard, go to the “Dashboards” page. Find the dashboard you want to export in the list and click on the "Export dashboard" button located next to the dashboard's name. The configuration file in JSON format with all settings on the control panel will be saved on your PC.

{% include images-gallery.html imageCollection="export-dashboard" %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
To export the dashboard directly from the toolbar, open the dashboard and click the "Export dashboard" button in the upper right corner of the screen and select "Export JSON configuration".
The dashboard is exported to the configuration file in JSON format.

{% include images-gallery.html imageCollection="dashboard-toolbar-export" %}

Dashboard export is also possible in several additional formats: PDF, PNG or JPEG.
This is useful when you need to send the data displayed in your dashboard by email or print.

{% include images-gallery.html imageCollection="pro-export" %}

{% endif %}
{% if docsPrefix == null %}
To export the dashboard directly from the toolbar, open the dashboard and click the "Export dashboard" button in the upper right corner of the screen.
Dashboard is exported to the configuration file in JSON format.

{% include images-gallery.html imageCollection="dashboard-toolbar-export" %}

In **ThingsBoard Professional Edition**, in addition to exporting the dashboard in JSON format, dashboard export is possible in several additional formats: PDF, PNG & JPEG. This is useful when you need to send the data displayed in your dashboard by email or print.

{% include images-gallery.html imageCollection="pro-export" %}

{% endif %}

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Share dashboard group

You can share a dashboard group with your customers, granting them permissions such as "Read", "Write", or using a previously created role. 
Roles are sets of permissions that define what actions users can perform. For more information about roles read [here](/docs/{{docsPrefix}}user-guide/rbac/).

To share a dashboard group, follow these steps:

{% include images-gallery.html imageCollection="share-dashboard-group" showListImageTitles="true" %}

{% endif %}

{% if docsPrefix == null %}
### Make dashboard public

You can make the dashboard public and share a link to it with other users.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Make dashboard group public

You can make the dashboard group and all its dashboards public and then share links to those dashboards with other users.
{% endif %}

For this you should:

{% include images-gallery.html imageCollection="make-public" showListImageTitles="true" %}

To make a dashboard private again, follow these steps:

{% include images-gallery.html imageCollection="make-private" showListImageTitles="true" %}

{% capture difference %}
**Please note:**
<br>
that you shouldn't forget to make related devices, assets and entity views public in order to access their data.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% if docsPrefix == null %}
### Manage assigned customers

You can assign a dashboard to your client. The customer will only have the ability to view the dashboard and won't be able to perform any other operations on the dashboard.

To assign a dashboard to a customer you should:

{% include images-gallery.html imageCollection="manage-assigned-customers" showListImageTitles="true" %}

You can unassign a dashboard from a customer. For this:

{% include images-gallery.html imageCollection="manage-unassigned-customers" showListImageTitles="true" %}

To assign/unassign multiple dashboards to a customer(s) simultaneously, select the desired dashboards and use the "Assign Dashboards" and "Unassign Dashboards" buttons.

{% include images-gallery.html imageCollection="assigned-multiple-dashboards" showListImageTitles="true" %}

{% endif %}

### Edit dashboard

Edit the fields you need, such as the title or description of the dashboard. After making the edits, remember to save all changes.
With these steps, you will have successfully updated the dashboard information.

Let’s see how to do this:

{% include images-gallery.html imageCollection="dashboard-details" showListImageTitles="true" %}

### Delete dashboard

You can delete a dashboard using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-dashboard-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-dashboard-2" showListImageTitles="true" %}

You can also delete multiple dashboards at once.

{% include images-gallery.html imageCollection="delete-dashboard-3" showListImageTitles="true" %}

## Dashboard toolbar

Before starting working with a dashboard, get familiar with its interface to understand which features are responsible for what actions.

The dashboard toolbar allows you to manage
[states](/docs/{{docsPrefix}}user-guide/dashboards/#states),
[layouts](/docs/{{docsPrefix}}user-guide/dashboards/#layouts),
[settings](/docs/{{docsPrefix}}user-guide/dashboards/#settings),
[aliases](/docs/{{docsPrefix}}user-guide/dashboards/#entity-aliases),
[filters](/docs/{{docsPrefix}}user-guide/dashboards/#filters),
[version control](/docs/{{docsPrefix}}user-guide/version-control/),
configure [timewindow](/docs/{{docsPrefix}}user-guide/dashboards/#timewindow),
[enter edit mode](#edit-mode) and [add new widgets](#add-new-widget) using the corresponding icons in the toolbar.

Some of these icons (states, layout, settings, entity aliases, filters, version control, add new widget) are visible only in the "Edit" mode. All other icons are visible in both "View" and "Edit" modes.
You can hide these icons or configure the toolbar to be minimized by default using [settings](/docs/{{docsPrefix}}user-guide/dashboards/#settings).

{% include images-gallery.html imageCollection="dashboard-toolbar" %}

### Edit mode

To enter dashboard edit mode, simply open the dashboard you wish to edit and click the "Edit mode" button found in the upper right corner of the screen.

Once you've switched to edit mode, you access the dashboard toolbar to add new elements and access controls. 
Don't forget to save your changes using the "Save" button, or if you decide to discard any unsaved edits, you can do so by clicking the "Cancel" button.

{% include images-gallery.html imageCollection="edit-mode" %}

### Add new widget

All IoT dashboards are constructed using ThingsBoard widgets.
A widget is an element that displays a specific type of information or functionality on a dashboard.
Widgets are used to visualize data, remote device control, alarms management, and display static custom HTML content.

To add a widget to a dashboard, you should:

{% include images-gallery.html imageCollection="add-new-widget" showListImageTitles="true" %}

Each widget typically has specific settings and parameters that allow users to customize its behavior and appearance according to their needs.
For more information about widgets, how to create them, and their settings, click the button below:

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/widgets/" class="n-button add-device">Widgets documentation</a></p>

<br>

### Timewindow

Dashboard timewindow represents the time interval and aggregation function that will be used to fetch the time series or alarm data.
Timewindow is used by all the time series and alarm widgets unless they are explicitly [configured](/docs/{{docsPrefix}}user-guide/widgets/#widget-time-window) to overwrite its execution.
In the case of a time series widget, ThingsBoard fetches telemetry with a timestamp that matches the timewindow.
In the case of an alarm widget, ThingsBoard fetches alarms with the created time that matches the timewindow.

The timewindow can work in two modes:
- In the **real-time mode**, widgets constantly receive updates from the server and automatically show you only the data that matches the time window for a current timestamp;
- In the **history mode**, widgets receive data only during the initial load and no updates are issued over WebSockets.

{% include images-gallery.html imageCollection="time-window" %}

**The data aggregation function** is applicable for time series data and is not applicable for alarms.
There are five aggregation functions available at the moment: Min, Max, Average, Sum and Count. The special function called None is used to disable the aggregation.
Data aggregation is useful when you don't want to fetch all time-series data to UI, and you would like to pre-aggregate it on the database level.
Using the aggregation functions saves network bandwidth and computation power of the client browser.
We recommend using aggregation functions whenever possible if you have a lot of raw values.

{% include images-gallery.html imageCollection="time-window-aggregation" %}

The ThingsBoard it is possible to use predefined **intervals** (Current Day, Previous Day, Previous Month, etc.) in addition to last X minutes/hours/days.

{% capture difference %}
**Please note:**
<br>
that the **Current day** interval means 24 hours (12 am at night to 12 am the next night), whereas the **Current day so far** means from 12 am at night until the time when the time window was updated.
All other intervals are distinguished in the same way.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include images-gallery.html imageCollection="time-window-interval" %}

There are times when the time intervals are long, and you'd like to see the data closer without changing timestamps, therefore, you need to zoom in.
Zoom in by holding the right mouse key and move it on the chart to the place where you need to get a closer look.
To zoom out to the original size of the chart, double-click on the widget.

{% include images-gallery.html imageCollection="time-window-zoom-in" %}

The ThingsBoard introduces time zone configurations. By default, the dashboard uses the time zone provided by the browser.
Now it is possible to set the time of your browser or a specific country. To quickly find the needed time zone, start typing its name in the time zone bar.

{% include images-gallery.html imageCollection="time-window-time-zone" %}

### Filters

Entity filters allow you to specify a filter for the list of entities resolved by the entity alias.

Let's look at an example. Suppose you have thousands of "Thermometer" devices, and you would like to display thermometers of a specific model and with certain battery levels.
Let's also assume that thermometer model is stored as an attribute, and the battery level is stored as a time series data.
We will define a filter that checks if the sensor model is "DHT22" and the battery level is less than 20 percent.

{% capture difference %}
**Please note:**
<br>
while adding the filter, you can configure the ability to edit it for users by moving the slider opposite the Filter name.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include images-gallery.html imageCollection="filters" showListImageTitles="true" %}

Filters are applied only to the "latest" value of the attribute or time series key. Don't use this feature to "filter out" historical time series values.

You can combine different logical expressions over one key using "complex" filters. For example: "(A > 0 and A < 20) or (A > 50 and A < 100)".
Also, you can combine two expressions for different keys using the "and" relation. For example: "(A > 0 and A < 20) and (B > 50 and B < 100)".
It's not possible to use "or" in relation to combining different keys yet. For example: "(A > 0 and A < 20) or (B > 50 and B < 100)".

See more examples of how to use filters in this video:

<br>
<div id="video">
  <div id="video_wrapper">
    <iframe src="https://www.youtube.com/embed/yTAhUpZiFkM?start=177" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>

### Entity aliases

Entity Aliases determine which entities (devices, assets, etc.) you would like to display on the dashboard.
An alias can be thought of as a reference to one or more devices. These references can be static or dynamic.

An example of the static alias is the [Single entity](/docs/{{docsPrefix}}user-guide/ui/aliases/#single-entity) alias. An entity is configured once in the alias dialog box.
All users see the same data if they have permission to access this device.

An example of a dynamic alias is the [Device type](/docs/{{docsPrefix}}user-guide/ui/aliases/#device-type) alias, which displays all devices of a certain type (e.g. "Thermometer").
This alias is dynamic because the list of devices depends on the user using the dashboard.
If you are logged in as a Tenant administrator, this alias will be allowed for all Thermometer devices.
However, if you are logged in as a Customer user, this alias will be resolved to Thermometer devices that are assigned/owned by that Customer.

Let’s create a dynamic alias, which displays all devices of a certain "Smart sensors" type.

{% include images-gallery.html imageCollection="aliases" showListImageTitles="true" %}

Please see the [Entity aliases documentation](/docs/{{docsPrefix}}user-guide/ui/aliases) for more information.

### Settings

Dashboard settings allow adjusting and altering the overall look of the Dashboard. You can change the title, logo, and customize the toolbar.

To start customizing the Dashboard enter [Edit mode](#edit-mode), then click the "gear" icon in the upper right corner of the dashboard window to open the dashboard settings window.

{% include images-gallery.html imageCollection="settings" %}

**Title settings**

If you want the Title to be displayed on the dashboard, you need to enable the "Display dashboard title" checkbox. The default text color is black. 
Color and transparency are easily adjusted using the Title color parameter by clicking the colored circle and choosing the desired color for the title by moving the slider. 
The changed title appears on the top left of the Dashboard.

{% include images-gallery.html imageCollection="title-settings" %}

**Dashboard logo settings**

You can set dashboard logo which displayed in dashboard fullscreen mode. For this, check the box "Display logo in dashboard fullscreen mode" and add dashboard logo image.

{% include images-gallery.html imageCollection="dashboard-logo-settings" %}

**Toolbar settings**

The checkboxes "Display dashboard selection", "Display entities selection", "Display filters", "Display timewindow", "Display export" and "Display update dashboard image" are responsible for the visibility of the appropriate options on the Dashboard toolbar panel.

The "Display filters" option is shown on the toolbar panel only if at least one filter has been created. 
If the filter was created, but you'd like to limit the customer's opportunity to modify the device's indicators, we disable the ability to see filters on the toolbar panel by unchecking the corresponding checkbox.

You can display/hide toolbar icons. Let's hide "Display dashboards selection", "Display timewindow" and "Display export" icons on the dashboard page.

{% include images-gallery.html imageCollection="toolbar-dashboard-1" %}

The "Hide Toolbar" option will hide the toolbar from the dashboard page.
Instead of it, on the upper right of the screen, you will find "Enter edit mode" icon.

{% include images-gallery.html imageCollection="toolbar-dashboard-2" %}

The "Keep toolbar opened" option is responsible for displaying the toolbar on the dashboard page. 
If we disable it, the toolbar will be closed. Instead of it, on the upper right of the screen you find the three-dots icon. 
By clicking on it, the hidden toolbar will be opened.

{% include images-gallery.html imageCollection="toolbar-dashboard-3" %}

### Layouts

Layouts define how widgets are arranged on a Dashboard. 
To manage a layout, you should enter [edit mode](#edit-mode) and click the button three-rectangles "Manage layouts" in the upper left corner of the dashboard window.
It opens the small window for layouts' control.

{% include images-gallery.html imageCollection="layout-1" %}

The "Main" layout is the one that you’re managing now. Basically, it's your dashboard.
Click the "gear" icon named "Layout setting" to open the layout settings window.

{% include images-gallery.html imageCollection="layout-2" %}

**Layout settings**

*Columns count*

While editing the Dashboard, specifically the size and space of your widgets, you can notice a whitish grid on a gray background.
These are columns that determine how many widgets can fit horizontally on a Dashboard.
By default, the number of columns is 24. You can increase or decrease their number. The minimum number of columns is 10. The maximum number is 1000 columns.

{% include images-gallery.html imageCollection="columns" %}

*Margin between widgets*

This margin type determines how much space is between widgets.
By default, the margin is set to 10. You can remove it by setting the _Margin between widgets_ field to 0 or increasing the margin, meaning the distance between widgets. The maximum allowable margin is 50.

{% include images-gallery.html imageCollection="margin" %}

*Auto fill layout height*

By default, the _Auto fill layout height_ checkbox is unchecked so that you can freely adjust the size of the widgets.
If you tick this option, all the widgets on the Dashboard will fill in vertically in the space of the screen.

{% include images-gallery.html imageCollection="autofill" %}

*Background color*

The Background color option allows you to customize the color that you'd like to be on the Dashboard's background.
To change it, click on the background color row. In the pop-up window with sliders choose the needed color and wished transparency. Then, press "Save" to apply changes.
After saving, you can see the customized background.

{% include images-gallery.html imageCollection="background-settings" %}

*Background image*

This option allows setting the picture as a background. To do this, you should drop an image in the appropriate field, or upload it from a folder on your computer.
Once you select it, an image preview will appear on the left of the Settings window.
To adjust the position of the image more precisely, click the drop-down menu and choose how exactly the picture will fill the background space.
For instance, let's choose "Cover" and click "Save" to see how the background has changed.

{% include images-gallery.html imageCollection="background-image" %}

*Mobile layout settings*

By default, the *Auto fill layout height* checkbox is unchecked so that you can freely adjust the size of the widgets on your mobile device.
If you tick this option, all the widgets on the Dashboard will fill in vertically in the space of the screen.

*Mobile row height* determines how tall you’d like your widgets to be on your mobile device.
By default, the height is set to 70px, but you can make it smaller or larger. The minimum Mobile row height is 5px, and the maximum allowable value is 200px.
<br>

**Divider**

If we toggle the "Divider" checkbox, we divide the dashboard into two separate parts. For each part, we are able to configure their own settings and interface.

{% include images-gallery.html imageCollection="layout-3" %}

Just to see how it can look like, let's set up both layouts in completely different ways.
Let's add a background image to the left layout and apply a new background color to the right layout.
And we resize the window in a certain percentage ratio to each other (it is just an example and definitely not a recommendation).
After setting the parameters, click the "Save" button in the Layouts window to see the changes.
After setting the parameters, click the "Save" button in the Layouts window to see the changes.

{% include images-gallery.html imageCollection="layout-4" %}

### States

The States feature exists to create a layered hierarchy in your Dashboard. To use States properly, you need to assign a specific action to a widget that will help you fast "travel" among the required states.
To do this, you should enter [edit mode](#edit-mode) and click the button two-layered squares "Manage dashboard states" in the upper left corner of the dashboard window. The Manage dashboard states configuration window will open.

{% include images-gallery.html imageCollection="states-1" %}

Since you haven't created any states yet, you have only your "Root state", namely your Dashboard. Root state defines the main state of your hierarchy.
After creating additional states, you easily can change a root state by clicking the "Pencil" icon (Edit dashboard state) and selecting the “Root state” checkbox.

{% include images-gallery.html imageCollection="states-root" %}

To add a new state, you need to click on the "+" icon in the right upper of the window, it will open the Add dashboard state window.
Assign a name, and the State ID will automatically generate based on that name, though you have the option to modify it. Click "Add" and then save all changes.

{% include images-gallery.html imageCollection="states-2" %}

Giving a corresponding action to a particular widget allows traveling between states.
To add an action, you should click the "pencil" icon (Edit widget) in the upper right corner of the widget to enter the widget configuration mode.
There you need to navigate to the "Action" tab and click the "+" icon to add a new action.

{% include images-gallery.html imageCollection="states-3" %}

It will open the "Add action" window.

- The _Action source_ is a particular act that needs to be done to achieve an aim.
- The _Name_ means a preferred title to an action.
- The _Icon_ defines a symbol for action.
- The _Type_ determines an aim of the action.

In our case, a _Type_ should be "Navigate to new dashboard state". After choosing this option, the line "Target dashboard state" will appear, where we have to choose a newly created state.
When the configuration for a new action is done, click the "Add" button. The new action appears in the actions list. Click the "Apply" button at the upper right of the window to apply changes.

As we have chosen the "On row click" action, we need to click on the row of our widget to bring the action into effect. After clicking, we immediately transfer to the chosen state.

{% include images-gallery.html imageCollection="states-4" %}

For the state to be named after the entity, use **${entityName}** as the name of the state. Thus during the action, you will be transitioned to a state that is called the same as the entity that took part in the action.

{% include images-gallery.html imageCollection="states-entity-name" %}

## Next steps

 - [Widgets](/docs/{{docsPrefix}}user-guide/widgets) - This guide contains instructions for configuring ThingsBoard widgets.

 - [Data visualization](/docs/{{docsPrefix}}guides/#AnchorIDDataVisualization) - These guides contain instructions how to configure complex ThingsBoard dashboards.

 - [Data processing & actions](/docs/{{docsPrefix}}guides/#AnchorIDDataProcessing) - Learn how to use ThingsBoard Rule Engine.
