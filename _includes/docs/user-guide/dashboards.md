* TOC 
{:toc}

{% capture difference %}
Before proceeding with this guide, it&#39;s recommended that you follow [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/){:target="_blank"} guide to become familiar with ThingsBoard devices and widgets. This will enhance your learning experience and understanding of the concepts presented here.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Introduction

ThingsBoard offers a powerful feature – the ability to create and customize interactive visualizations, also known as dashboards. These dashboards are instruments for monitoring and managing your data and devices efficiently.
With ThingsBoard dashboards, users can adapt interfaces to their specific needs, making it easier than ever to inspect their IoT devices and data. What's brilliant is that each dashboard can be populated with numerous widgets, offering flexibility and customization.
These dashboards aren't limited to a single data source; they can display data from various entities, including devices, assets, and more. Plus, you can assign dashboards to specific Customers, ensuring that the right individuals or teams have access to the data they need.

{% if docsPrefix == null %}
![image](/images/user-guide/dashboards/overview/dashboard-introduction-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](/images/user-guide/dashboards/overview/dashboard-introduction.png)
{% endif %}

Dashboards in ThingsBoard provide users with the following capabilities:

 - **Data Visualization**: Users can create various widgets such as charts, graphs, tables, and more to visualize data obtained from connected devices. This enables operators and analysts to easily analyze information and track device statuses.

 - **Device Management**: Dashboards can be used to perform management operations on devices, such as turning devices on or off, changing parameters, and so on. Users can set actions and respond to real-time data from devices.

 - **Interactivity**: Dashboards can be designed with interactive elements such as buttons, switches, allowing users to interact with devices and data.

 - **Display Customization**: Users can customize the arrangement and size of widgets, choose color palettes, fonts, and other visualization aspects to create a user-friendly and informative interface.

 - **Role-Based Access**: ThingsBoard allows controlling access to dashboards with different levels of privileges based on user [roles](/docs/{{docsPrefix}}user-guide/rbac/). This ensures data security and confidentiality.

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
ThingsBoard also offers convenient IoT solution templates to reduce time-to-market for your IoT products. 
These templates include interactive dashboards, processing logic, sample devices, users, and all other necessary entities. Think of these templates as a complete PoC/MVP. 
Read more about solution templates [here](/docs/{{docsPrefix}}solution-templates/overview/).
{% endif %}

This guide covers main concepts and various dashboard settings.

## Create new dashboard

To add a new dashboard, you should:

{% include images-gallery.html imageCollection="creating-dashboard" showListImageTitles="true" %}

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
At the stage of creating a dashboard, you can specify it to a different owner and a specific dashboard group right away.
How to create a new group of dashboards, read [here](/docs/{{docsPrefix}}user-guide/groups/#create-new-entity-group).

{% include images-gallery.html imageCollection="creating-dashboard-2" showListImageTitles="true" %}

By default, the list of dashboards displays all dashboards, including those of your customers.
To view only your dashboards, disable the "Include customer entities" option.

{% include images-gallery.html imageCollection="creating-dashboard-3" %}
{% endif %}

## Dashboard toolbar

Before starting working with a dashboard, get familiar with its interface to understand which features are responsible for what actions.

The dashboard toolbar allows you to 
[add new widgets](#add-new-widget),
manage [states](/docs/{{docsPrefix}}user-guide/dashboards/#states),
[layouts](/docs/{{docsPrefix}}user-guide/dashboards/#layouts),
[settings](/docs/{{docsPrefix}}user-guide/dashboards/#settings),
[aliases](/docs/{{docsPrefix}}user-guide/dashboards/#entity-aliases),
[filters](/docs/{{docsPrefix}}user-guide/dashboards/#filters),
[version control](/docs/{{docsPrefix}}user-guide/version-control/), {% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}[generate report from dashboard, ](/docs/pe/user-guide/dashboards/#generate-report-from-dashboard){% endif %}and configure [time window](/docs/{{docsPrefix}}user-guide/dashboards/#time-window) using the corresponding icons in the toolbar.

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
<p><a href="/docs/{{docsPrefix}}user-guide/widgets/" class="button">Widgets documentation</a></p>

<br>

### Time window

The Time window is a tool used to define time intervals when working with telemetry data. 
The time window is used by all time series and alarm widgets unless they are configured to use their own [widget time window](/docs/{{docsPrefix}}user-guide/widgets/#widget-time-window){:target="_blank"}.
In the case of a time series widget, ThingsBoard fetches telemetry with a timestamp that matches the time window. In the case of an alarm widget, ThingsBoard fetches alarms with the created time that matches the time window.

&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/3xRWm1W1IM4" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

<br>

**The time window can work in two modes**:

- In the **real-time mode**, widgets constantly receive updates from the server and automatically show you only the data that matches the time window for a current timestamp;
- In the **history mode**, widgets receive data only during the initial load and no updates are issued over WebSockets.

{% include images-gallery.html imageCollection="time-window" %}

<br>
**Key parameters of the time window:**

- **Last**: Displays real-time data for a specified time interval (e.g., the last 5 minutes, the last hour, or the last 24 hours).
- **Range**: Displays data for a fixed period, such as from December 1, 2024, to December 7, 2024.
- **Relative**: Uses predefined intervals, such as the current day, the previous day, or the previous month.

{% include images-gallery.html imageCollection="time-window-key-parameters" %}

<br>
To display data for your desired time period, set the time range in the time window and click "Update".

{% include images-gallery.html imageCollection="displaying-data-for-desired-time-period" %}

{% capture difference %}
**Please note:**
<br>
that the **Current day** interval means 24 hours (12 am at night to 12 am the next night), whereas the **Current day so far** means from 12 am at night until the time when the time window was updated.
All other intervals are distinguished in the same way.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include images-gallery.html imageCollection="time-window-interval" %}

**Aggregation**

The data aggregation function is applied to time series data and does not apply to alarms. Currently, six aggregation functions are available:

- **Min**: Identifies the smallest value among all data in the selected time interval. Useful for displaying the minimum value, such as the lowest temperature recorded in an hour.
- **Max**: Identifies the largest value among all data in the selected time interval. This is useful for displaying the maximum value, such as the highest energy consumption level.
- **Average**: Calculates the arithmetic mean of all data in the selected interval. Useful for analyzing average metrics, such as the average humidity over a day.
- **Sum**: Computes the total sum of all values in the selected time interval. This can be helpful for calculating the total volume of water or electricity consumed.
- **Count**: Counts the number of records in the selected interval. Useful for assessing the volume of data received or to count the number of events.
- **None**: Transmits raw data without applying any aggregation functions. Used when access to each unaltered value is required.

Data aggregation is useful when you do not want to retrieve all raw time series data to the user interface but prefer to pre-aggregate it at the database level.

Using aggregation functions helps save network bandwidth and reduces the computational load on the client's browser. We recommend using aggregation functions whenever possible, especially when dealing with a large amount of raw data points.

{% include images-gallery.html imageCollection="time-window-aggregation" %}

<br>
**Grouping interval**

Group time series values by the specified time interval. This enables data analysis within a defined period and provides a more structured and convenient approach to handling large volumes of data.

For example, if a device sends temperature data every 10 minutes, but you need hourly average values, set the grouping interval to 1 hour and use the "Average" aggregation function. This will provide the desired result without additional processing on the client side.

{% include images-gallery.html imageCollection="time-window-grouping-interval" %}

There are times when the time intervals are long, and you'd like to see the data closer without changing timestamps, therefore, you need to zoom in.
Move the two sliders towards each other to specify the time period for displaying the data.
To zoom out to the original size of the chart, move the sliders back to their default position.

{% include images-gallery.html imageCollection="time-window-zoom-in" %}

The ThingsBoard introduces time zone configurations. By default, the dashboard uses the time zone provided by the browser.
Now it is possible to set the time of your browser or a specific country. To quickly find the needed time zone, start typing its name in the time zone bar.

{% include images-gallery.html imageCollection="time-window-time-zone" %}

<br>
**Time window settings**

You can customize the time window for the end-user by hiding certain configuration elements. Enter the editing mode of the dashboard, click the "edit time window" icon on the dashboard toolbar. In the popup window, click the "gear" icon. The time window configuration window will open.

{% include images-gallery.html imageCollection="time-window-settings" %}

Here, you can perform the following configurations:

*For time window*:

- **Hide the time window section from end-users**: Users will not be able to change the set time interval.

{% include images-gallery.html imageCollection="hide-time-window-section" %}

You can also hide the "Last", "Range" (History) or "Relative" intervals from end-users.

{% include images-gallery.html imageCollection="hide-only-last-or-relative-interval" %}

Edit the list of intervals available to users. Additionally, for each interval, you can configure the grouping intervals and set a default grouping interval.

{% include images-gallery.html imageCollection="edit-list-of-intervals" %}

*For aggregation function*:

- **Hide the aggregation from end-users**: Users will not be able to change or disable the aggregation function you set during configuration.

{% include images-gallery.html imageCollection="hide-aggregation" %}

You can edit the list of available aggregation functions. List the available aggregation functions for the end-user.

{% include images-gallery.html imageCollection="edit-aggregation-list" %}

*For grouping interval*:

- **Hide the grouping interval from end-users**: Users will not be able to change the grouping interval set during configuration.

{% include images-gallery.html imageCollection="hide-grouping-interval" %}

- **Hide the time zone from end-users**: Restrict users from changing the timezone.

{% include images-gallery.html imageCollection="hide-time-zone" %}

*Available only when Aggregation is None*:

{% if docsPrefix == null or docsPrefix == "pe/" %}
- **Max values**: Limits the number of data points rendered in time-series widgets within the selected time window. For self-hosted installations, this limit is configurable via the DASHBOARD_MAX_DATAPOINTS_LIMIT [parameter](/docs/user-guide/install/{{docsPrefix}}config/#ui-settings-parameters){:target="_blank"}.
{% endif %}

{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
- **Max values**: Limits the number of data points rendered in time-series widgets within the selected time window.
{% endif %}

{% include images-gallery.html imageCollection="max-values" %}

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
    <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/yTAhUpZiFkM?start=177" frameborder="0" allowfullscreen=""></iframe>
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

The checkboxes "Display dashboard selection", "Display entities selection", "Display filters", "Display time window", "Display export" and "Display update dashboard image" are responsible for the visibility of the appropriate options on the Dashboard toolbar panel.

The "Display filters" option is shown on the toolbar panel only if at least one filter has been created. 
If the filter was created, but you'd like to limit the customer's opportunity to modify the device's indicators, we disable the ability to see filters on the toolbar panel by unchecking the corresponding checkbox.

You can display/hide toolbar icons. Let's hide "Display dashboards selection", "Display time window" and "Display export" icons on the dashboard page.

{% include images-gallery.html imageCollection="toolbar-dashboard-1" %}

The "Hide Toolbar" option will hide the toolbar from the dashboard page.
Instead of it, on the upper right of the screen, you will find "Enter edit mode" icon.

{% include images-gallery.html imageCollection="toolbar-dashboard-2" %}

The "Keep toolbar opened" option is responsible for displaying the toolbar on the dashboard page. 
If we disable it, the toolbar will be closed. Instead of it, on the upper right of the screen you find the three-dots icon. 
By clicking on it, the hidden toolbar will be opened.

{% include images-gallery.html imageCollection="toolbar-dashboard-3" %}

### Layouts

Layouts determine how widgets will be displayed and organized on the dashboard grid. [Read more about layouts in a separate documentation](/docs/{{docsPrefix}}user-guide/ui/layouts/){:target="_blank"}.

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

{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
### Generate report from dashboard

A Tenant Administrator or Customer User can **generate a report** from the currently opened dashboard in **PDF**, **PNG**, or **JPEG** format.
- Click the "**Export Dashboard**" button, located on the right side of the dashboard toolbar.

<object width="40%" data="/images/user-guide/dashboards/overview/generate-report-from-dashboard-1-pe.png"></object>

- In the expanded drop-down menu, select the desired export format. 

<object width="40%" data="/images/user-guide/dashboards/overview/generate-report-from-dashboard-2-pe.png"></object>

- The report generation process will start automatically.

<object width="40%" data="/images/user-guide/dashboards/overview/generate-report-from-dashboard-3-pe.png"></object>

And finally, the report file will be automatically downloaded and saved to your PC.

**Generate dashboard report by schedule**

Report generation can also be automated on a schedule using the [event scheduler](/docs/{{docsPrefix}}user-guide/scheduler/#generate-report){:target="_blank"} with the "**Generate Dashboard Report**" event type.
{% endif %}

## Managing dashboard

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
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

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
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

### Import dashboard

You can import a dashboard from a JSON configuration file. This can be useful when you are migrating your dashboard configuration from another instance.

To import a dashboard, follow these steps:

{% include images-gallery.html imageCollection="import-dashboard" showListImageTitles="true" %}

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
### Manage dashboard owner and groups

You can change the <b>dashboard owner</b> to ensure that only users associated with the selected customer have access to the dashboard.

> <b>Note</b>: This step is essential for maintaining strict [access control](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}. Each customer user will only have access to the data explicitly granted to them.   
<b>Keep in mind</b> that granting access to a dashboard gives the customer access only to the dashboard itself, <b>not</b> to the data displayed on it. For the widgets to display data, the customer must also be granted access to the corresponding devices or other entities.

<b>Changing the dashboard owner:</b>

- Open the dashboard details by clicking the "<b>pencil</b>" icon in the dashboard list.
- Click the "<b>Manage owner and groups</b>" button.
- Select a new dashboard owner from the list. If needed, add the dashboard to an existing group or create a new one. 
- Confirm the changes to update the owner information.

In the <b>"Customer name" column</b>, you can see the current owner of the dashboard.

> <b>Note</b>: A Tenant Administrator always has the right to reassign or revoke dashboard ownership.

{% include images-gallery.html imageCollection="dashboard-manage-owner-and-groups" %}

#### Include customer entities

The "<b>Include customer entities</b>" option on the "<b>Dashboards</b>" page determines whether dashboards owned by customers are shown or hidden in the list.

{% include images-gallery.html imageCollection="include-customer-dashboards" showListImageTitles="true" %}

### Share dashboard group

You can share a dashboard group with your customers, granting them permissions such as "Read", "Write", or using a previously created role.
Roles are sets of permissions that define what actions users can perform. For more information about roles read [here](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}.

To share a dashboard group, follow these steps:

{% include images-gallery.html imageCollection="share-dashboard-group" showListImageTitles="true" %}

{% endif %}

{% if docsPrefix == null %}
### Make dashboard public

You can make the dashboard public and share a link to it with other users.
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
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
To display data on a public dashboard, the associated entities must also be made public. This can be done by making the device or asset group public for Professional Edition or by making individual devices or assets for Community Edition.
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

## Next steps

 - [Widgets](/docs/{{docsPrefix}}user-guide/widgets) - This guide contains instructions for configuring ThingsBoard widgets.

 - [Data visualization](/docs/{{docsPrefix}}guides/#AnchorIDDataVisualization) - These guides contain instructions how to configure complex ThingsBoard dashboards.

 - [Data processing & actions](/docs/{{docsPrefix}}guides/#AnchorIDDataProcessing) - Learn how to use ThingsBoard Rule Engine.
