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

**Advanced** mode supports multiple data sources (when supported by the widget), [filtering](#filters){:target="_blank"}, and five configuration tabs for fine‑grained control: [Data](#data-settings), [Appearance](#appearance), [Widget card](#widget-card), [Actions](#widget-actions), and [Layout](#layout-settings).

Additional data source types are available in Advanced mode (widget‑dependent): [Function](#function-as-datasource), [Entities count](#entities-count), and [Alarms count](#alarms-count).

{% include images-gallery.html imageCollection="add-widget-advanced-mode" %}

### Data settings

#### Widget time window

The widget&#39;s **time window** defines the time interval and aggregation function used to fetch telemetry or alarm data. 

By default, each widget uses its **own** time window. You can instead use the **dashboard time window** by enabling the corresponding option.

To hide the time-window selector from end users for this widget, turn off the **Display time window** option.

Learn more in the [time window guide](/docs/{{docsPrefix}}user-guide/dashboards/#time-window){:target="_blank"}.

{% include images-gallery.html imageCollection="timewindow" %}

#### Data source types

Widget data settings let you add one or multiple data sources.

The data source combines a data source type, [an optional filter](#filters){:target="_blank"}, and a list of data keys ([attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} / [telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}).
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

A data key identifies the telemetry, attribute, or entity field a widget should use.

<b><font size="3">Sources of keys</font></b>
- **Attributes** — the combined set of Client, Server, and Shared [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} of the selected entity. If a needed attribute doesn&#39;t exist yet, you can still add the key; the widget will show data once the device reports it.
- **Time series** — telemetry keys reported by devices or written by the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"} / [REST API](/docs/{{docsPrefix}}reference/rest-api/){:target="_blank"}.
- **Entity fields** — metadata fields that depend on entity type and may evolve over time (e.g. created time, entity type, name, type, label).

The data keys list for data source depends on the [widget type](/docs/{{docsPrefix}}user-guide/widgets/#widget-types){:target="_blank"}:
- **Timeseries widgets** allow choosing time series data keys. Additionally, you can configure [time window](/docs/{{docsPrefix}}user-guide/widgets/#widget-time-window){:target="_blank"};
- **Latest values widgets** allow choosing time series, attributes and entity fields;
- **Static and Control widgets** do not require a data key;
- **Alarm widgets** allow choosing all data keys: time series, attributes, entity and alarm fields.
  Additionally, you can configure [time window](#widget-time-window) and [alarm filter](#alarm-filter).

<b><font size="3">Adding keys</font></b>

Click the **Data keys** row and select a key from the dropdown. If a key is not yet present in the database, type its name and select the type (**Attribute**, **Entity field**, or **Time series**). The widget will display values once they become available.

{% include images-gallery.html imageCollection="add-data-key" %}

<b><font size="3">Configuring data keys</font></b>

Data keys can be configured in two modes:

- **General** — common options shown in **Basic mode** and during widget creation.
- **Advanced** — full per‑key controls; open by clicking the **pencil** icon next to a key in **Advanced** widget settings.

<b><font size="3">Basic options (vary by widget)</font></b>

In **Basic** mode, these settings appear in the **Add widget** dialog.
- **Key** — specify the key to show its data).
- **Label** — the human‑readable name shown in the widget (e.g., table column header or legend item).
- **Units** — a symbol or unit shown next to values.   
  **Note:** Starting with ThingsBoard 4.1, widgets support automatic data conversion and [unit switching](/docs/{{docsPrefix}}user-guide/ui/unit-conversion/){:target="_blank"} based on the selected unit system.
- **Decimals** — number of digits after the decimal point.
- **Color** — used by many chart widgets for series styling.

{% include images-gallery.html imageCollection="edit-basic-key-configuration" %}

<b><font size="3">Advanced options</font></b>

In **Advanced** mode, open settings via the key&#39;s **pencil** icon.

{% include images-gallery.html imageCollection="edit-key-configuration" %}

Let&#39;s look at the basic data key settings an example of the "Entities table" widget from the "Tables" bundle:

- **Key.** You can change the name of the key. In this case, will be displayed data of the key, which key name you specify in the "Key" line. Change the name of the key and click “Save”.

{% capture difference %}
**Please note:** There are four types of keys: Attributes, Time Series, Entity Field and Alarm Field (only for Alarm widget). To correctly display data, change the key name to the existing key name of the same type. If you don’t have the required time series or attribute key in the database yet, you can still add a key to the data source. The widget will start displaying the data as soon as the device will send it to ThingsBoard.
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

- [**Use data post-processing function**](#data-post-processing-function) — enable a custom function to transform raw values before display.

##### Aggregation of key

By default, the Latest values widgets do not have the time window. If you enable aggregation for any data
key in the **Latest values** widgets, the time window control will appear. You can set up aggregation for each telemetry
key individually, which you want to display and at the same time do not need to store it in the database. The time window
configuration is limited to the real-time intervals (**Current Hour/Day/Month**) and **History** time intervals. The real-time
intervals like **last 30 minutes** or **last 24 hours** are not supported for performance reasons. If you need to store the
aggregation as telemetry, follow for more details at [the link](https://thingsboard.io/docs/user-guide/rule-engine-2-0/nodes/analytics/){:target="_blank"}.

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

##### Data post-processing function
The data post-processing function enables real-time transformation of incoming telemetry values before they are displayed 
in widgets. This feature allows you to apply custom JavaScript logic to each data point — for example, convert units, 
filter out anomalies, or calculate derived metrics without touching upstream sources.

  **How to use:**
 - In the widget → go to section with **Data keys** → click the **Pencil** icon of the target data key.
 - Enable toggle **Use data post-processing function**.
 - Enter your code in the function body. The platform automatically injects the function header:
<br>     **function** (time, value, prevValue, timePrev, prevOrigValue) {
<br>        **`YOUR_JS_CODE`**
<br>     }
 - Click **Save** button.

**Once enabled, the function has access to the following parameters:**

- **time** – timestamp of the current value,
- **value** – the current value,
- **prevValue** – value returned by the previous function call,
- **timePrev** – timestamp of the previous value,
- **prevOrigValue** – original previous value.

The function must **return** a value (**number**|**string**|**boolean**|**null**).
Returning **null** excludes the data point from visualization.

{% include images-gallery.html imageCollection="data-key-configuration-settings-post-processing" %}

**Advanced data key settings**

Advanced data keys configuration is responsible for the visibility, style, and appearance of a specific data key column on the widget.
Entity table widget, alarms table widget, and entity admin widget bundles have the same advanced data key configuration.
Charts widget bundle has its own unique advanced data key configuration. All other widget bundles have only basic data key configuration.

Learn more about advanced data key settings [here](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/){:target="_blank"}.

#### Filters

**Filters** let you narrow which data a widget retrieves from its data sources. Filters are built by adding keys and defining conditions on those keys. You can combine multiple keys and conditions.

**Key types:**

When adding a filter, choose one of the following key types:

- **Entity field**. A built‑in field on the entity (e.g., **device name**, **type**, **label**, **createdTime**, etc.). Useful for targeting entities by metadata rather than telemetry.
- **Attribute**. A generic attribute key when you don’t need to distinguish where the attribute is stored.
- **Client attribute**. Attributes set or reported by the device/edge client (typically via MQTT/HTTP/CoAP). Example: firmware **build** reported by the device at runtime.
- **Server attribute**. Attributes stored on the platform and usually configured by users or services. Example: **targetTemperature**, **threshold**.
- **Shared attribute**. Often used to deliver configuration from the server to devices (e.g., **displayUnits**).
- **Time series**. Telemetry keys that represent values over time (e.g., **temperature**, **humidity**, **voltage**). Best for conditions based on recent or historical readings.

**Operations**

Use operations to define how the key is compared to a value: **equal**, **not equal**, **greater than**, **less than**, **greater or equal**, **less or equal**.

For the comparison value, you can use a **fixed literal** or a **Dynamic source type**. Dynamic sources let the filter pull the value from context at runtime. This makes filters adaptable—for instance, "temperature **greater or equal** than **targetTemperature** (server attribute)" or "voltage **less than** the value the user selects in a **control widget**".

{% capture difference %}
**Tip:** Prefer **Dynamic source** for thresholds that may change, so you don’t have to edit filters whenever the value updates.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

##### Alarm filter

Alarm widgets allow you to filter [alarms](/docs/{{docsPrefix}}user-guide/alarms/){:target="_blank"} based on [status](/docs/{{docsPrefix}}user-guide/alarms/#lifecycle){:target="_blank"}, [severity](/docs/{{docsPrefix}}user-guide/alarms/#severity){:target="_blank"}, and [type](/docs/{{docsPrefix}}user-guide/alarms/#type){:target="_blank"}.
You can choose a combination of alarm statuses and severity. You may also define specific alarm types as well as enable search of [propagated](/docs/{{docsPrefix}}user-guide/alarms/#propagation){:target="_blank"} alarms.

{% include images-gallery.html imageCollection="alarm-filters" %}

### Appearance

Let&#39;s assume you have added the "Timeseries Line Chart" widget to display thermometers using the widget data configuration [step](/docs/{{docsPrefix}}user-guide/widgets/#data-settings){:target="_blank"} only.
You should see a similar widget (note that you should send/simulate some data to see the actual lines in the chart):

![image](/images/user-guide/widgets/overview/widget-example.png)

Let&#39;s use the basic widget settings to customize the widget. We will demonstrate how each setting affects the widget.

#### Data settings

You can choose which symbol to display next to the value and the number of digits after the floating-point number.
These settings are useful if you want to apply the same settings for all axes.

- **Units by default**. If you are showing temperature readings for multiple devices, you can add symbol (e.g., °C or °F).
However, if you are displaying both temperature and humidity, you have to configure these data keys separately using data key settings.

- **Decimals by default**. Controls how many decimal places are displayed when a data key doesn&#39;t have its own formatting.

- **"No data to display" message**. An alternative message shown when the widget has no data in the selected time window or cannot render values (e.g., missing keys). Use it to provide helpful next steps.<br>
**Examples:**<br>
• "No data to display"<br>
• "No data for the selected time range"<br>
• "No telemetry received yet — check the device connection or time range".

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

The <b>legend</b> displays statistical values including <b>minimum, maximum, average, total</b>, and <b>latest</b> values.

By default, the <b>show legend</b> option is enabled only for chart widgets. For other widgets, this option is disabled, but you can enable it by switching the <b>Legend</b> toggle in the widget settings.

In the legend settings, you can:
- Configure <b>font settings</b> and <b>colors</b> for labels, values, and column headers.
- Choose the <b>legend position</b>.
- Select which statistical values to display (<b>minimum, maximum, average, total, latest</b>).
- Enable <b>sorting of data keys</b> or keep them unsorted.

{% include images-gallery.html imageCollection="appearance-legend-settings-1" %}

The legend displays a label for each [data key](/docs/{{docsPrefix}}user-guide/widgets/#data-keys). When a widget contains data from multiple devices, or when several devices use the same data key name (for example, temperature), it may be difficult to determine which key value corresponds to which device in the legend or tooltip.

To make the legend clearer, you should use **${entityName}** or **${entityLabel}** in the **Label** field of the data key configuration.

- **${entityName}** – a variable that automatically inserts the system name of the entity in the legend. This helps clearly identify the object, especially when its technical name or unique identifier is important.   
  Example: If a device has the name **sensor-101**, then in the field where **${entityName}** is used, you will see **sensor-101**.

{% include images-gallery.html imageCollection="entity-name-legend" %}

- **${entityLabel}** – a variable that inserts the entity's label in the legend. This is often used as a human-readable label and allows you to display a more descriptive name of the device or entity.   
   Example: A device has:
    - **Name** = **sensor-101**
    - **Label** = **Temperature Sensor, Warehouse #1**

    In the field where **${entityLabel}** is used, the operator will see the more understandable text: **Temperature Sensor, Warehouse #1**.

{% include images-gallery.html imageCollection="entity-label-legend" %}

#### Axis settings

Configure the preferred axis parameters.

Specify the titles of the vertical and horizontal axes, and set the minimum and maximum scale values.

You can also set the ticks color, the number of decimal places, and step size between ticks.

**Vertical axis settings**:

{% include images-gallery.html imageCollection="appearance-vertical-axis" %}

**Horizontal axis settings**:

{% include images-gallery.html imageCollection="appearance-horizontal-axis" %}

**Ticks formatter function, f(value)**

Let&#39;s say we have telemetry which takes values of very large numbers, especially when there is a special symbol near values. 
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

- **Hover individual points**. When the box "Hover individual points" is checked, you won&#39;t see value points on the lines.

- **Show cumulative values in stacking mode**. While stacking mode is on, you can check the box "Cumulative values" to enable your chart to display sum of all entity values.

Tooltip value format function, **f(value, latestData)** is used when you want to manually customize the tooltip.

To make the tooltip clearer, you should use **${entityName}** or **${entityLabel}** in the **Label** field of the data key configuration.

- **${entityName}** – a variable that automatically inserts the system name of the entity in the tooltip. This helps clearly identify the object, especially when its technical name or unique identifier is important.   
  Example: If a device has the name **Sensor 1**, then in the field where **${entityName}** is used, you will see **Sensor 1**.

{% include images-gallery.html imageCollection="entity-name-tooltip" %}

- **${entityLabel}** – a variable that inserts the entity's label in the tooltip. This is often used as a human-readable label and allows you to display a more descriptive name of the device or entity.   
   Example: A device has:
    - **Name** = **Sensor 1**
    - **Label** = **Sensor 1 Label**

    In the field where **${entityLabel}** is used, the operator will see the more understandable text: **Sensor 1 Label**.

{% include images-gallery.html imageCollection="entity-label-tooltip" %}

You can customize the values that will be displayed in the tooltip via tooltip settings or
[Advanced Data key configuration](/docs/{{docsPrefix}}user-guide/ui/advanced-data-key-configuration/#tooltip-settings){:target="_blank"}.
Tooltip configuration via Settings is basic and applied to all entities at the same time. When configured in the Advanced Data key configuration,
it is applied only to the specific time series data, and the basic tooltip function will be overwritten by this configuration.

In State Chart, you can configure entity states to be shown on a tooltip depending on entity values.

Let&#39;s use the function to convert values from Celsius to Fahrenheit and display these values side by side:

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

Use Custom Legend Settings when you need to showcase data that isn&#39;t suitable for chart representation, such as specific attributes, or when you want to display only certain time series in the Chart legend. 
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

You may disable fullscreen using the "Enable fullscreen" checkbox. This setting is enabled by default.

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

{% capture difference %}
**Tip**: Enable **Preserve aspect ratio** for charts, images, and video; disable it for tables and lists where extra vertical space is useful.{% endcapture %}
{% include templates/info-banner.md content=difference %}

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

You can import a widget from a **JSON** file.

{% include images-gallery.html imageCollection="import-widget" showListImageTitles="true" %}

{% capture difference %}
**Tip:** If the imported widget uses entity aliases or keys that don&#39;t exist in your environment, map them during Edit widget.{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Export widget

Export saves a widget&#39;s configuration (as **JSON**) so you can reuse it elsewhere.

**Steps:**
- Open the dashboard containing the widget and switch to **Edit mode**.
- On the widget&#39;s top‑right toolbar, click **Export widget**.
- A **JSON** file with the widget configuration is downloaded to your computer.

{% include images-gallery.html imageCollection="export-widget" %}

{% capture difference %}
**Note:** Exports include widget settings but not data.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}
