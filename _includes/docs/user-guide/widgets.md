* TOC
{:toc}

## Prerequisites

Before proceeding with this guide, it's recommended that you follow [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide to become familiar with ThingsBoard dashboards and widgets. This will enhance your learning experience and understanding of the concepts presented here.

## Introduction

All IoT dashboards are constructed using ThingsBoard widgets.

A widget is an element that displays a specific type of information or functionality on a dashboard. 
Widgets are used to display data and visualize information obtained from devices connected to the ThingsBoard platform, remote device control, alarms management, and display static custom HTML content.

### Widget types

There are five types of widgets:

* **Timeseries** widgets display data for a specific time window. It can be either Realtime - the dynamically changed time frame for a certain latest interval, or History - a fixed historical time frame.  
  Examples of timeseries widgets are chart widgets. Obviously, timeseries widgets are designed to display time series and not attributes;
* **Latest values** widgets display the latest values of particular [attribute](/docs/{{docsPrefix}}user-guide/attributes/) or [time series](/docs/{{docsPrefix}}user-guide/telemetry/) keys. For example, device model or latest temperature reading;
* **Control** widgets allow you to send [RPC commands](/docs/{{docsPrefix}}user-guide/rpc/) to your devices. For example, control desired temperature on the thermostat device;
* **Alarm** widgets allow you to display [alarms](/docs/{{docsPrefix}}user-guide/alarms/);
* **Static** widgets are designed to display static data. For example, floor plan or static company information.

More about widget types you can learn [here](/docs/{{docsPrefix}}user-guide/ui/widget-library/).

Each widget typically has specific settings and parameters that allow users to customize its behavior and appearance according to their needs.

This guide covers main concepts and various widget settings.

## Adding a widget to the dashboard

To add a new widget to a dashboard, you should:

{% include images-gallery.html imageCollection="add-widget" showListImageTitles="true" %}

## Widget settings

Widget settings consist of one or multiple data sources, appearance settings, widget card settings, actions, and mobile appearance that you can customize and perform on the widget’s content.

{% capture difference %}
**Please note**
<br>
that only the data source configuration is strictly required. You can leave all other configuration tabs with the default values in most of the cases.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

During widget creation, you can choose between **basic** and **advanced** functionality.
Switching between modes is done in the top right corner of the widget creation window.

**Basic functionality**

Basic functionality is suitable for a quick start when you are using a single data source type without additional conditions or filters.
It includes settings for the timewindow, datasource selection (entity alias or device), and a basic set of settings for the appearance of widgets, which depends on the widget's purpose.

{% include images-gallery.html imageCollection="add-widget-basic-mode" %}

**Advanced functionality**

In the advanced functionality, you can use multiple datasources (if supported by the widget), and apply filters, and it includes five tabs for more detailed widget configuration: [Data](#data-settings), [Appearance](#appearance), [Widget card](#widget-card), [Actions](#widget-actions), and [Mobile](#mobile-mode-settings).

Additionally, in the advanced functionality, there are additional [datasource](#data-source-types) types available: Function, Entities count and Alarms count (these data types are not supported by all widgets).

{% include images-gallery.html imageCollection="add-widget-advanced-mode" %}

### Data settings

#### Widget time window

A widget timewindow defines a time interval and aggregation function that should be used to fetch the time series or alarm data.
By default, every widget uses the main [timewindow](/docs/{{docsPrefix}}user-guide/dashboards/#timewindow) determined in the dashboard's [toolbar](/docs/{{docsPrefix}}user-guide/dashboards/#dashboard-toolbar).
You can overwrite the default timewindow by toggling the option to "Use widget timewindow" parameter.
You can also hide the timewindow selection for a specific widget from the user using the "Display timewindow" checkbox.

{% include images-gallery.html imageCollection="timewindow" %}

Learn more about time window configuration [here](/docs/{{docsPrefix}}user-guide/dashboards/#timewindow).

#### Data source types

Widget data settings are for adding one or multiple data sources.
A data source is a combination of a data source type,
[an entity alias](/docs/{{docsPrefix}}user-guide/dashboards/#entity-aliases), [an optional filter](/docs/{{docsPrefix}}user-guide/dashboards/#filters), and list of data keys (entity time series).
Basically, the data source determines which entities (alias and filter) widget should use and what data keys to fetch for those entities.

There are three main types of data sources: **Device**, **Entity**, and **Function**.

Additionally, for some widgets (such as the Value card), there are additional data source types, such as **Entities count** and **Alarms count**.

Below, we will discuss each of these types.

<br>
**Device as the datasource**

Specifying a device as the data source retrieves data from the specified device.

Let's assume you have a device that publishes indoor temperature values, and you want to display these data on a widget.
Let's visualize this data using the Thermometer scale widget.

{% include images-gallery.html imageCollection="data-source-type-device" showListImageTitles="true" %}

{% capture difference %}
**Please note**
<br>
that in this case, the data source can only be a single device.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Entity as the datasource**

Specifying an entity as a data source fetches data from specified entity alias. 

Let’s get familiar with this feature using a basic example, displaying all existing devices on the widget.

{% include images-gallery.html imageCollection="data-source-type-entity" showListImageTitles="true" %}

<br>

**Function as the datasource**

Function as a data source is used when you do not have any data, but you'd like to test a widget visualization.
Let's say you haven't added alias and haven't received any telemetry, but you want to see how a widget displays data.

{% include images-gallery.html imageCollection="data-source-type-random" showListImageTitles="true" %}

<br>

**Entities сount**

The Entities сount allows you to see the number of entities by displaying them on a widget and thus determine the number of devices, assets, etc.

Let's get familiar with this feature using a basic example, displaying the total number of existing devices on the widget.

{% include images-gallery.html imageCollection="data-source-type-entities-сount" showListImageTitles="true" %}

<br>

**Alarms count**

The Alarms count allows you to display the total number of alarms from all your devices and devices of your customers on a widget.

Let's get familiar with this feature using a basic example, displaying the total number of existing alarms on the widget.

{% include images-gallery.html imageCollection="data-source-type-alarms-сount" showListImageTitles="true" %}

#### Data keys

Data key defines time series, attribute or entity field that you would like to use in the widget.
Data key definition consists of type (time series, attribute of entity field) and the actual key.

The list of available attribute keys is basically a list of all client, server and shared [attributes](/docs/{{docsPrefix}}user-guide/attributes/) of your device or other entity.

The list of available time series keys depends on what time series data your devices [report](/docs/{{docsPrefix}}user-guide/telemetry/#device-telemetry-upload-api) to ThingsBoard
or what time series data you have saved via rule engine or [REST API](/docs/{{docsPrefix}}reference/rest-api/).

The list of entity fields depends on the entity type and may extend in the future:

* **Devices, assets and entity views** have the following fields: create time, entity type, name, type, label, additional info.
* **User** has the following fields: created time, first name, last name, email and additional info.
* **Customer** has the following fields: create time, entity type, email, title, country, state, city, address, zip code, phone, additional info.

The data keys list for data source depends on the [widget type](/docs/{{docsPrefix}}user-guide/widgets/#widget-types):

* **Timeseries widgets** allow choosing time series data keys. Additionally, you can configure [timewindow](/docs/{{docsPrefix}}user-guide/widgets/#widget-time-window);
* **Latest values widgets** allow choosing time series, attributes and entity fields;
* **Static and Control widgets** do not require a data key;
* **Alarm widgets** allow choosing all data keys: time series, attributes, entity and alarm fields.
  Additionally, you can configure [timewindow](/docs/{{docsPrefix}}user-guide/widgets/#widget-time-window) and [alarm filter](/docs/{{docsPrefix}}user-guide/widgets/#alarm-filter).

To add a time series or attribute key to the data source, click on the data keys row and select the desired key from the dropdown menu.

{% include images-gallery.html imageCollection="add-data-key" %}

Let's assume you don't have the required time series or attribute key in the database yet.
In such a case, you can still add a key to the data source, and the widget will start displaying the data as soon as the device will send it to ThingsBoard.
To do this, click on the data key row, then enter the name and select the type of the future key: Attributes, Entity field, or Timeseries.

{% include images-gallery.html imageCollection="add-key-in-the-future" %}

Within the Advanced widget settings, the data key can be configured in two distinct modes: General and Advanced. 
Both modes offer unique configuration options.

**General data key configuration**

The data key configuration varies based on the widget type and its accepted data type. 
In general settings, some widgets allow you to modify the key's name and color, adjust the label name, add a specific character next to the value (exclusive to the Timeseries key), define decimal precision, and toggle the "Use post-processing function" on or off.

If you use the basic functionality for adding a new widget, these settings are available right in the widget creation window.

{% include images-gallery.html imageCollection="edit-basic-key-configuration" %}

If you use the advanced functionality for adding a new widget, click the “pencil” icon of a key in the data keys row to open the full data key settings.

{% include images-gallery.html imageCollection="edit-key-configuration" %}

**Basic data key configuration**

Let's look at the basic data key settings an example of the "Entities table" widget from the "Tables" bundle:

- **Key.** You can change the name of the key. In this case, will be displayed data of the key, which key name you specify in the "Key" line. Change the name of the key and click “Save”.

{% capture difference %}
**Please note:** 
<br>
There are four types of keys: Attributes, Time Series, Entity Field and Alarm Field (only for Alarm widget). To correctly display data, change the key name to the existing key name of the same type. If you don’t have the required time series or attribute key in the database yet, you can still add a key to the data source. The widget will start displaying the data as soon as the device will send it to ThingsBoard.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include images-gallery.html imageCollection="data-key-configuration-key" %}

- **Label.** In your widget, the name of the data column is the label name. Change the label name as desired and click “Save” in the lower right corner of the dialog window.

{% include images-gallery.html imageCollection="data-key-configuration-label" %}

- **Units.** You can indicate a special symbol that will be displayed next to the value. Enter the desired character in the units field and click "Save".

{% include images-gallery.html imageCollection="data-key-configuration-units" %}

- **Decimals.** Specify the desired number of digits to be displayed after floating-point number and click “Save”.

{% include images-gallery.html imageCollection="data-key-configuration-decimals" %}

- **Color.** Each key is assigned a different color. In some widgets (for example, Chart), the color of the graph line displayed in the widget is the color of the key. You can change color of the key. Click on the colored circle, select the desired label color and press “Select”.

{% include images-gallery.html imageCollection="data-key-configuration-color" %}

**Aggregation of key** 

By default, the Latest values widgets do not have the time window. If you enable aggregation for any data
key in the '**Latest values**' widgets, the time window control will appear. You can set up aggregation for each telemetry
key individually, which you want to display and at the same time do not need to store it in the database. The time window
configuration is limited to the real-time intervals (**Current Hour/Day/Month**) and '**History**' time intervals. The real-time
intervals like 'last 30 minutes' or 'last 24 hours' are not supported for performance reasons. If you need to store the
aggregation as telemetry, follow for more details at [the link](https://thingsboard.io/docs/pe/user-guide/rule-engine-2-0/analytics-nodes/).

{% include images-gallery.html imageCollection="data-key-configuration-aggregation" %}

**Aggregation options:**

- **Min** or **Max**:
  <br>
  Selects the minimum or maximum value from the given interval. Using to detect peak negative or positive values.
  For example, power surges in the power cable, air pollution, equipment workload, etc.
  {% include images-gallery.html imageCollection="aggregation-min-max" %}
- **Average:**
  <br>
  Calculates the average from the selected interval (Summarizes, then divides by the count of telemetry from the selected interval).
  For example, you can use average aggregation for weekly fuel consumption, acoustical noise in dB, rotation fan speed, signal quality, etc.
  {% include images-gallery.html imageCollection="aggregation-average" %}
- **Sum:**
  <br>
  Summarizes all telemetry for the specified period.
  Aggregation, for example, uses for different types of telemetry, mileage (km), water consumption, idle time, etc.
  {% include images-gallery.html imageCollection="aggregation-sum" %}
- **Count:**
  <br>
  Calculates the total number of transmitted messages for the selected period. It can be useful in setting up and
  optimizing devices running on battery power or when evaluating sensor activation sensitivity, etc.
  {% include images-gallery.html imageCollection="aggregation-count" %}

  **Delta function:**

Allows you to calculate the delta between aggregated values for current and relative time window intervals.

  **Comparison period** - is a parameter that takes the history interval as a basis and converts it according to the selected option. List of options below.
- **Previous interval** (default) - set as a default option, when calculating, not only time is taken into account, but
  also the type of interval (**Current day** or **Current day so far**, etc.)
  <br>
  Example: **History** - **Current month so far** option, suppose is interval 1.09.22 to 25.09.22 then previous interval will be 1.08.22 to 25.08.22

  {% include images-gallery.html imageCollection="aggregation-previous-interval" %}

- **Day ago** - from the start and end of the history interval, takes away 24 hours.
  <br>
  For example, with the amount of water spent **Current day** and **Delta** - **Day ago**:
  {% include images-gallery.html imageCollection="aggregation-day-ago" %}

- **Week ago** - takes interval one week earlier from history interval (168 hours).
  <br>
  Example with average, history interval - **Current day**, and **Week ago** delta:
  {% include images-gallery.html imageCollection="aggregation-week-ago" %}

- **Month ago** - The same interval (in days) as the history interval and subtracts from the current history interval.
  Example, if the current month is February (28 days) then **Month ago** would be the previous 28 days, not the entire previous month.
  <br>
  Example, with sum water, history - **Current day** and **Delta** - **Month ago**:

  {% include images-gallery.html imageCollection="aggregation-month-ago" %}

- **Year ago** - Interval that was 365 days ago from the current history interval.
  <br>If it is necessary to compare, suppose the aggregation for the previous month and the month of the past year.
  {% include images-gallery.html imageCollection="aggregation-year-ago" %}

- **Custom interval** - This option is for setting individual intervals. The maximum allowed value is limited to the **int** type. Example: 43200000 = 12 hours.

  {% include images-gallery.html imageCollection="aggregation-custom-interval" %}

**Delta calculation result:**

This option allows you to specify how the result should be displayed:
<br>
- **Previous Value** - Displays aggregation value of compare interval (not current history interval).

- **Delta (absolute)** - Displays the difference between compared intervals, this option is set by default.

- **Delta (percent)** - Displays the result as a percentage relative to the previous interval <br>formula: **(IntervalValue - prevIntervalValue)/prevIntervalValue*100**

**Use data post-processing function.** The data post-processing function allows changing the output data depending on your wishes. To use data post-processing function, you must check the "Use data post-processing function" checkbox and enter the function in the field below. Then click the "Save" button in the lower-right corner.

{% include images-gallery.html imageCollection="data-key-configuration-settings-post-processing" %}

**Advanced data key settings**

Advanced data keys configuration is responsible for the visibility, style, and appearance of a specific data key column on the widget.
Entity table widget, alarms table widget, and entity admin widget bundles have the same advanced data key configuration.
Charts widget bundle has its own unique advanced data key configuration. All other widget bundles have only basic data key configuration.

Learn more about advanced data key settings [here](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/).

#### Alarm filter

Alarm widgets allow you to filter [alarms](/docs/{{docsPrefix}}user-guide/alarms/) based on [status](/docs/{{docsPrefix}}user-guide/alarms/#lifecycle), [severity](/docs/{{docsPrefix}}user-guide/alarms/#severity), and [type](/docs/{{docsPrefix}}user-guide/alarms/#type).
You can choose a combination of alarm statuses and severity. You may also define specific alarm types as well as enable search of [propagated](/docs/{{docsPrefix}}user-guide/alarms/#propagation) alarms.

{% include images-gallery.html imageCollection="alarm-filters" %}

### Appearance

Let's assume you have added the "Timeseries Line Chart" widget to display thermometers using the widget data configuration [step](/docs/{{docsPrefix}}user-guide/widgets/#data-settings) only.
You should see a similar widget (note that you should send/simulate some data to see the actual lines in the chart):

![image](https://img.thingsboard.io/user-guide/widgets/overview/widget-example.png)

Let's use the basic widget settings to customize the widget. We will demonstrate how each setting affects the widget.

#### Data settings

You can choose which symbol to display next to the value and the number of digits after the floating-point number.
These settings are useful if you want to apply the same settings for all axes.
For example, if you are showing temperature readings for multiple devices, you can add '°C' or '°F' symbol.
However, if you are displaying both temperature and humidity, you have to configure these data keys separately using data key settings.

You can also specify an alternative message that will be displayed if widget doesn't have incoming data. When data arrives, the message will disappear and the incoming data will be displayed.

You can find these settings in the "**Advanced**" functionality, "**Appearance**" tab of the widgets settings.

{% include images-gallery.html imageCollection="default-data-settings" %}

#### Common settings

**Stacking mode**

This option is relevant to the "Timeseries Bar Chart" widget.
The Stacking mode function displays the summed entity values to prevent overlap, with each value distinguished by a unique color. 
This function can be used only if the data aggregation function **is not** set to None.
Without activating the "Enable stacking mode", the bars will be split according to the values of the entities used. 
To view the values of all entities, you need to hover your mouse over the bar.

{% include images-gallery.html imageCollection="appearance-stacking-mode-1" %}

If you need to exclude a specific key from stacking, go to the [advanced data key configuration](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/#exclude-from-stacking), and check the "Exclude from stacking" checkbox.

{% include images-gallery.html imageCollection="appearance-stacking-mode-2" %}

#### Legend settings

By default, the "Display legend" option is enabled for chart widgets. This legend displays statistical values, including min, max, average, and total. 
In contrast, other widgets do not have this option enabled.

While the legend is enabled, you have the flexibility to:
 - Choose the legend's direction and position;
 - Select which data values to include (min, max, average, total);
 - Select to sort the data keys or keep them unsorted.

{% include images-gallery.html imageCollection="appearance-legend-settings-1" %}

You may notice that the legend displays the [data key](/docs/{{docsPrefix}}user-guide/widgets/#data-keys) label for each configured data key.
When you have data from multiple devices in the same widget, it is hard to find which device corresponds to which record in the legend or in the tooltip.
In order to make the legend and tooltip clear, you should use **${entityName}** or **${entityLabel}** in the data key configuration.

{% include images-gallery.html imageCollection="appearance-legend-settings-2" %}

#### Axis settings

Configure the preferred axis parameters.

Specify the titles of the vertical and horizontal axes, and set the minimum and maximum scale values.

You can also set the ticks color, the number of decimal places, and step size between ticks.

**Vertical axis settings**:

{% include images-gallery.html imageCollection="appearance-vertical-axis" %}

**Horizontal axis settings**:

{% include images-gallery.html imageCollection="appearance-horizontal-axis" %}

**Ticks formatter function, f(value)**

Let’s say we have telemetry which takes values of very large numbers, especially when there is a special symbol near values. 
However, we need to build a small graph (since we don’t have a lot of free space on the dashboard). 
Therefore, using the ticks-formatter function, we can convert the ticks values to a more compact form.

```ruby
return value.toExponential(1) + " C";
```
{: .copy-code}

{% include images-gallery.html imageCollection="appearance-ticks-formatter-function" %}

#### Chart background settings

You can change the appearance of the chart grid: customize the color of the background, the grid frame and its ticks, and turn off lines visibility.

{% include images-gallery.html imageCollection="appearance-chart-background" %}

#### Tooltip settings

- **Hover individual points**. When the box "Hover individual points" is checked, you won't see value points on the lines.

- **Show cumulative values in stacking mode**. While stacking mode is on, you can check the box "Cumulative values" to enable your chart to display sum of all entity values.

**Tooltip value format function, f(value, latestData)** is used when you want to manually customize the tooltip.

You can customize the values that will be displayed in the tooltip via tooltip settings or
[Advanced Data key configuration](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/#tooltip-settings).
Tooltip configuration via Settings is basic and applied to all entities at the same time. When configured in the Advanced Data key configuration,
it is applied only to the specific time series data, and the basic tooltip function will be overwritten by this configuration.

In State Chart, you can configure entity states to be shown on a tooltip depending on entity values.

Let's use the function to convert values from Celsius to Fahrenheit and display these values side by side:

```ruby
let celsiusValue = parseFloat(value).toFixed(2);
let farenheitValue = parseFloat(celsiusValue*1.8 + 32).toFixed(2);
return celsiusValue + ' °C (' + farenheitValue + ' °F)';
```
{: .copy-code}

{% include images-gallery.html imageCollection="appearance-tooltip-function" showListImageTitles="true" %}

#### Comparison settings

You can show historical data with which to compare.

{% include images-gallery.html imageCollection="appearance-comparison" showListImageTitles="true" %}

#### Custom legend settings

Use Custom Legend Settings when you need to showcase data that isn't suitable for chart representation, such as specific attributes, or when you want to display only certain time series in the Chart legend. 
For instance, consider active/inactive attributes that can be displayed in a Table widget but not on a Chart.

{% include images-gallery.html imageCollection="appearance-custom-legend-settings" showListImageTitles="true" %}

### Widget card

#### Widget title settings

You can input custom widget title, tooltip and title style. You may also add an icon to the title and control icon color and size. See configuration and the corresponding result below.

{% include images-gallery.html imageCollection="widget-card-title" %}

Title style from the screen above:

```json
{
  "fontSize": "15px",
  "fontWeight": 600
}
```
{: .copy-code}

#### Widget style settings

You can customize personal  style for the widget using CSS properties. This style will be applied to the main div element of the widget.

You may also disable the widget shadow using the "Drop shadow" checkbox and disable fullscreen using the "Enable fullscreen" checkbox.
All those settings are enabled by default.

You can also change the background color, text color, padding, and margin.
See the configuration and the corresponding result below.

Please note that the style and background color are just an example and are definitely not part of our guidelines.

{% include images-gallery.html imageCollection="widget-card-style" %}

Widget style from the screen above:

```json
{
  "border": "3px solid #2E86C1",
  "cursor": "pointer"
}
```
{: .copy-code}

#### Widget buttons settings

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}

**Enable data export**

The "Enable data export" button is responsible for enabling/disabling the ability to export data that is displayed in the widget.
By default, data export is enabled.
To download data, click on the “Export widget data” icon at the top right of the widget.
You can export the data in csv, xls or xlsx format.

{% include images-gallery.html imageCollection="enable-data-export" %}

{% endif %}

**Enable fullscreen**

You may disable fullscreen using the “Enable fullscreen” checkbox. This setting is enabled by default.

All those settings are enabled by default.

{% include images-gallery.html imageCollection="enable-fullscreen" %}

### Widget actions

Actions allow quickly and easily configuring the transition to the created state, transferring to other dashboards, or even updating the dashboard you are in. Depending on the widget, the action sources differ.
However, the type of action you are able to choose will be the same for all widgets.
Actions are adjusted in the Edit mode of the needed widget.
To fully understand how to use Actions, you have to [add a State to your widget](/docs/{{docsPrefix}}user-guide/dashboards/#manage-dashboard-states).

Read more about [widget actions](/docs/{{docsPrefix}}user-guide/ui/widget-actions/) in the documentation dedicated to it.

### Mobile mode settings

With mobile mode settings, you can optimize the widget for easy viewing on mobile devices.

Additionally, you can hide/show the widget in mobile mode or desktop mode.

Mobile Mode settings consist of two options:
- **Order** - set to an integer, specifies the priority of the order of displaying widgets in mobile mode (note that in mobile mode all widgets are displayed in one vertical column).
  If you need to arrange widgets in this column in a custom order, you can configure different order values for each widget.
- **Height** - takes an integer value from 1 to 10. It sets the height of the widget in Mobile Mode in the range from 70px (1) to 700px (10), ignoring its original height.
  For example, with a value of 5, the widget height will be 350px. (70 * 5)
  If no value is specified, its original height will be used.

{% include images-gallery.html imageCollection="mobile-settings" %}

## Import and Export widget

### Import widget

You can import a widget from a JSON file.

To import a widget, you should:

{% include images-gallery.html imageCollection="import-widget" showListImageTitles="true" %}

### Export widget

To export a widget, you should go to a dashboard, where a widget is located.  
Then go to the "Edit mode".
Now in the upper right corner of the needed widget, click the button "Export widget".
This action saves the configuration file of the JSON format with all the settings of a particular widget to your PC.

{% include images-gallery.html imageCollection="export-widget" %}

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}