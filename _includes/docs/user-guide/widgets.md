* TOC
{:toc}

{% capture difference %}
Before proceeding with this guide, it&#39;s recommended that you follow [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/){:target="_blank"} guide to become familiar with ThingsBoard devices and dashboards. This will enhance your learning experience and understanding of the concepts presented here.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

A **widget** is a dashboard element that displays a specific type of data or provides functionality.   
Widgets are used to:
- Visualize device data (telemetry and attributes)
- Remotely control devices (RPC)
- Work with alarms (create/view/acknowledge)
- Show static custom HTML content

### Widget types

ThingsBoard provides five main widget types:

- **Time series widgets**. Show data over a selected time window. The window can be:
  - **Real time** — a rolling interval such as the last 5 minutes or last 24 hours.
  - **Historical** — a fixed, past interval.   

  *Example:* line, bar, or area chart widgets.   

  **Note**: Time series widgets are designed for telemetry (time series) rather than attributes.

- **Latest values widgets**. Display the most recent values of selected [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} or [telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} keys.   
*Examples:* device model attribute, latest temperature reading.

- **Control widgets**. Send [RPC commands](/docs/{{docsPrefix}}user-guide/rpc/){:target="_blank"} to your devices.   
  *Example:* set a target temperature on a thermostat.

- **Alarm widgets**. Display and manage [alarms](/docs/{{docsPrefix}}user-guide/alarms/){:target="_blank"} and notifications.
- **Static widgets**. Present static content such as a floor plan or company information (including custom HTML).

Learn more about widget types [here](/docs/{{docsPrefix}}user-guide/ui/widget-library/){:target="_blank"}.

## Adding a widget to the dashboard

To add a new widget to a dashboard, you should:

{% include images-gallery.html imageCollection="add-widget" showListImageTitles="true" %}

## Widget settings

Widget configuration includes setting up one or more [data sources](#data-source-types) (some widgets may have none), as well as configuring **appearance**, **widget card parameters**, **actions**, and **layout**.

When creating a widget, you can switch between **Basic** and **Advanced** modes using the toggle in the top‑right corner of the widget dialog.

<br><b><font size="4">Basic mode</font></b>

Use **Basic** mode for a quick start with a single data source and no extra filters. You’ll configure:

- the [time window](#widget-time-window) (or inherit it from the dashboard),
- the data source ([entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"} or specific [device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}),
- a minimal set of appearance options that depend on the widget type.

{% include images-gallery.html imageCollection="add-widget-basic-mode" %}

<br><b><font size="4">Advanced mode</font></b>

**Advanced** mode supports multiple data sources (when supported by the widget), [filtering](/docs/{{docsPrefix}}user-guide/dashboards/#filters){:target="_blank"}, and five configuration tabs for fine‑grained control: [Data](#data-settings), [Appearance](#appearance), [Widget card](#widget-card), [Actions](#widget-actions), and [Layout](#layout-settings).

Additional data source types are available in Advanced mode (widget‑dependent): [Function](#function-as-datasource), [Entities count](#entities-count), and [Alarms count](#alarms-count).

{% include images-gallery.html imageCollection="add-widget-advanced-mode" %}

### Data settings

#### Widget time window

The widget&#39;s **time window** defines the time interval and aggregation function used to fetch telemetry or alarm data. 

By default, each widget uses its **own** time window. You can instead use the **dashboard time window** by enabling the corresponding option.

To hide the time-window selector from end users for this widget, clear the **Display time window** checkbox.

Learn more in the [time window guide](/docs/{{docsPrefix}}user-guide/dashboards/#time-window){:target="_blank"}.

{% include images-gallery.html imageCollection="timewindow" %}

#### Data source types

Widget data settings let you add one or multiple data sources.

The data source combines a data source type, [an optional filter](/docs/{{docsPrefix}}user-guide/dashboards/#filters){:target="_blank"}, and a list of data keys ([attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} / [telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}).
It defines which specific entity (or entities) the widget will pull data from to display.

**Available types:**
- [Device](#device-as-datasource) — read data from a single, specific device.
- [Entity](#entity-as-datasource) — read data from entities resolved by [an entity alias](/docs/{{docsPrefix}}user-guide/dashboards/#entity-aliases){:target="_blank"} and optional filters.
- [Function](#function-as-datasource) — generate data (e.g., random) to preview a widget without live telemetry.
- [Entities count](#entities-count) — show how many entities match an alias/filter.
- [Alarms count](#alarms-count) — show how many alarms match selected filters.

<hr>

##### Device as datasource

Use this to fetch telemetry from one device.

**Example:** Suppose you have a device that publishes indoor temperature values, and you want to show this data in a widget. Let&#39;s visualize it with the **Thermometer scale** widget.

{% include images-gallery.html imageCollection="data-source-type-device" showListImageTitles="true" %}

<hr>

##### Entity as datasource

Use this to fetch data from entities resolved by an [entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"} (for example: all devices, devices by type, assets in a group, etc.).

**Example:** list all devices in an [Entities table](/docs/{{docsPrefix}}user-guide/ui/entity-table-widget/){:target="_blank"}.

{% include images-gallery.html imageCollection="data-source-type-entity" showListImageTitles="true" %}

<hr>

##### Function as datasource

Use this when you don&#39;t have any data but want to test the widget&#39;s visualization.

**Example:** showing a random value on a **Value card**.

{% include images-gallery.html imageCollection="data-source-type-random" showListImageTitles="true" %}

<hr>

##### Entities count

Shows the number of entities that match an alias/filter (e.g., total devices).

**Example:** display total device count on a **Value card**.

{% include images-gallery.html imageCollection="data-source-type-entities-count" showListImageTitles="true" %}

<hr>

##### Alarms count

Shows the number of alarms that match the selected alias/filter (e.g., all device alarms, severity, status).

**Example:** display total alarms on a **Value card**.

{% include images-gallery.html imageCollection="data-source-type-alarms-count" showListImageTitles="true" %}

<hr>

#### Data keys

Data key defines time series, attribute or entity field that you would like to use in the widget.
Data key definition consists of type (time series, attribute of entity field) and the actual key.

The list of available attribute keys is basically a list of all client, server and shared [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} of your device or other entity.

The list of available time series keys depends on what time series data your devices [report](/docs/{{docsPrefix}}user-guide/telemetry/#device-telemetry-upload-api){:target="_blank"} to ThingsBoard
or what time series data you have saved via rule engine or [REST API](/docs/{{docsPrefix}}reference/rest-api/){:target="_blank"}.

The list of entity fields depends on the entity type and may extend in the future:

* **Devices, assets and entity views** have the following fields: create time, entity type, name, type, label, additional info.
* **User** has the following fields: created time, first name, last name, email and additional info.
* **Customer** has the following fields: create time, entity type, email, title, country, state, city, address, zip code, phone, additional info.

The data keys list for data source depends on the [widget type](/docs/{{docsPrefix}}user-guide/widgets/#widget-types){:target="_blank"}:

* **Timeseries widgets** allow choosing time series data keys. Additionally, you can configure [time window](/docs/{{docsPrefix}}user-guide/widgets/#widget-time-window){:target="_blank"};
* **Latest values widgets** allow choosing time series, attributes and entity fields;
* **Static and Control widgets** do not require a data key;
* **Alarm widgets** allow choosing all data keys: time series, attributes, entity and alarm fields.
  Additionally, you can configure [time window](/docs/{{docsPrefix}}user-guide/widgets/#widget-time-window){:target="_blank"} and [alarm filter](/docs/{{docsPrefix}}user-guide/widgets/#alarm-filter){:target="_blank"}.

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

> Starting from ThingsBoard 4.1, widgets also support automatic data conversion and unit switching based on the selected unit system. Learn more about this [here](/docs/{{docsPrefix}}user-guide/ui/unit-conversion/){:target="_blank"}.

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
aggregation as telemetry, follow for more details at [the link](https://thingsboard.io/docs/pe/user-guide/rule-engine-2-0/analytics-nodes/){:target="_blank"}.

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

Learn more about advanced data key settings [here](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/){:target="_blank"}.

#### Alarm filter

Alarm widgets allow you to filter [alarms](/docs/{{docsPrefix}}user-guide/alarms/){:target="_blank"} based on [status](/docs/{{docsPrefix}}user-guide/alarms/#lifecycle){:target="_blank"}, [severity](/docs/{{docsPrefix}}user-guide/alarms/#severity){:target="_blank"}, and [type](/docs/{{docsPrefix}}user-guide/alarms/#type){:target="_blank"}.
You can choose a combination of alarm statuses and severity. You may also define specific alarm types as well as enable search of [propagated](/docs/{{docsPrefix}}user-guide/alarms/#propagation){:target="_blank"} alarms.

{% include images-gallery.html imageCollection="alarm-filters" %}

### Appearance

Let's assume you have added the "Timeseries Line Chart" widget to display thermometers using the widget data configuration [step](/docs/{{docsPrefix}}user-guide/widgets/#data-settings){:target="_blank"} only.
You should see a similar widget (note that you should send/simulate some data to see the actual lines in the chart):

![image](/images/user-guide/widgets/overview/widget-example.png)

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

If you need to exclude a specific key from stacking, go to the [advanced data key configuration](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/#exclude-from-stacking){:target="_blank"}, and check the "Exclude from stacking" checkbox.

{% include images-gallery.html imageCollection="appearance-stacking-mode-2" %}

#### Legend settings

By default, the "Display legend" option is enabled for chart widgets. This legend displays statistical values, including min, max, average, and total. 
In contrast, other widgets do not have this option enabled.

While the legend is enabled, you have the flexibility to:
 - Choose the legend's direction and position;
 - Select which data values to include (min, max, average, total);
 - Select to sort the data keys or keep them unsorted.

{% include images-gallery.html imageCollection="appearance-legend-settings-1" %}

You may notice that the legend displays the [data key](/docs/{{docsPrefix}}user-guide/widgets/#data-keys){:target="_blank"} label for each configured data key.
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
[Advanced Data key configuration](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/#tooltip-settings){:target="_blank"}.
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

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}

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

<hr>

### Widget actions

Actions allow quickly and easily configuring the transition to the created state, transferring to other dashboards, or even updating the dashboard you are in. Depending on the widget, the action sources differ.
However, the type of action you are able to choose will be the same for all widgets.
Actions are adjusted in the Edit mode of the needed widget.
To fully understand how to use Actions, you have to [add a State to your widget](/docs/{{docsPrefix}}user-guide/dashboards/#manage-dashboard-states){:target="_blank"}.

Read more about [widget actions](/docs/{{docsPrefix}}user-guide/ui/widget-actions/){:target="_blank"} in the documentation dedicated to it.

### Layout settings

Use the **Layout** tab to control how the widget behaves inside the dashboard grid across desktop and mobile layouts.

<b><font size="3">Resize options</font></b>

- **Resizable**. Allows the widget to be resized by the user in Edit mode. When disabled, the widget keeps its current size and resize handles are hidden.
- **Preserve aspect ratio**. Keeps the widget&#39;s width‑to‑height ratio when it is resized. This helps charts and media avoid distortion across different screen sizes and grid breakpoints. If disabled, width and height can change independently.

**Tip**: Enable **Preserve aspect ratio** for charts, images, and video; disable it for tables and lists where extra vertical space is useful.

<b><font size="3">Mobile</font></b>

These options control visibility and sizing in **mobile mode** (responsive layout):

- **Hide widget in mobile mode**. Do not render this widget when the dashboard is viewed on a mobile layout. Useful for large visualizations that don’t fit small screens.
- **Hide widget in desktop mode**. Render this widget only on mobile; hide it on desktop. Handy when you design a compact, mobile‑only alternative to a complex desktop widget.
- **Order**. Sets the widget&#39;s position relative to other widgets in the mobile layout. Lower numbers appear earlier (top‑left). Use integers (e.g., 1, 2, 3…).
- **Height**. Defines the widget’s height in the mobile grid (in grid rows). Increase the value to give lists and cards more space on phones; reduce it for small KPIs.

**Best practices:**
- Keep mobile **Order** consistent across related widgets to maintain reading flow.
- Test with real devices or the dashboard’s mobile preview to validate **Height** and scrolling behavior.

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