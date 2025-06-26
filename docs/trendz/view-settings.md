---
layout: docwithnav-trendz
title: View Settings
description: Trendz View Settings
---

* TOC
{:toc}

The **View Settings** icon is located in the bottom-right corner of each view. These settings let you control how the
visualization is displayed and how data behaves in different view types.

## General Settings

- **Title** – Text shown at the top of the view
- **Size** – Title font size (vh units, default: 1)

Common to most views:

- **Enable filter auto refresh** – Updates filter values in real-time. By default, filters load only when "Build" is clicked
- **Remove empty series** – Hides entries without telemetry
- **Hide legend** – Toggle legend display  
  If shown:
  - **Legend position** – top, right, bottom, or left

- **Show toolbox export** – Adds export options (CSV, XLS, XLSX)  
  If enabled:
  - **Show date range and filters** – Include filter context in exported files
    - **Filter to show in XLS** – Select which filters to include
  - **Rotate export result** – Flip rows and columns in export

### Card View

- **Size Content** – Main content font size (vh units, default: 1)
- **Show label** – Display field label on the card
- **Show icon** – Display selected icon on the card

### Table View

- **Sort order** – Enable sorting by column. Click once to enable, again to disable  
  Options:
  - **Order way** – Ascending or descending
  - **Sort column** – Pick a column to sort by
  - **Select top** – Show top N rows by sort

- **Column fit** – Adjust column sizing  
  Options:
  - Fit headers – Based on column headers
  - Fit cells – Based on content
  - Fit screen – Fill full width

- **Show total row** – Adds a summary row with totals for numeric columns

### Bar View

- **Dashed line** – Make bar outlines dashed
- **Horizontal bar** – Display bars horizontally
- **Stacked bar** – Stack values on top of each other  
  If enabled:
  - **100% stacked** – Normalize bars to the same height (proportional display)

- **Tooltip type** – How tooltip behaves on hover  
  Options:
  - axis – Show by X-axis value
  - item – Show by X-axis and series
  - none – No tooltip

- **Show labels** – Show values directly on bars
- **Show timeline** – Add timeline for time selection (useful with date fields)
- **Use single Y-axis** – Share one scale if values use same units
  - **Y-axis label** – Label for shared Y-axis

- **Hide Y-axis label** – Remove Y-axis label
- **Hide X-axis label** – Remove X-axis label  
  If shown:
  - **X-axis position** – Choose top or bottom

- **Sort bars** – Enable bar sorting  
  Options:
  - **Order way** – Ascending or descending
  - **Target field** – Pick a field to sort by
  - **Select top** – Limit to top N bars

- **Manual Y/X axis range** – Set axis boundaries
  - **Y-axis min / max** – Define vertical limits
  - **X-axis min / max** – Define range of bars shown

### Line View

- **Dashed line** – Use dashed style for line borders
- **Stroke type** – Controls how data points are connected  
  Options:
  - smooth – Curved connections
  - straight – Angular connections
  - stepline – 90° stepwise connections (like stairs)

- **Show labels** – Show values directly on the line
- **Show timeline** – Add timeline for time selection (useful with date fields)
- **Use single Y-axis** – Share one scale if values use the same units
  - **Y-axis label** – Label for shared Y-axis

- **Hide Y-axis label** – Remove Y-axis label
- **Hide X-axis label** – Remove X-axis label  
  If shown:
  - **X-axis position** – Choose top or bottom

- **Trend line** – Add a straight line showing the overall trend

- **Manual Y/X axis range** – Set axis boundaries
  - **Y-axis min / max** – Define vertical limits
  - **X-axis min / max** – Define horizontal limits

### Pie View

- **Show labels** – Show values near each sector  
  If enabled:
  - **Show sector name** – Display sector name on label
  - **Show sector value** – Display sector value on label
  - **Show sector percent** – Display sector percent on label

- **Sort order** – Enable sorting by field. Click once to enable, again to disable  
  Options:
  - **Order way** – Ascending or descending
  - **Target field** – Pick a field to sort by
  - **Select top** – Show top N values by sort

### Scatter Plot View

- **Tooltip type** – How tooltip behaves on hover  
  Options:
  - axis – Show values for all items from series with a specific X-axis value
  - item – Show value for specific item
  - none – No tooltip

- **Hide Y-axis label** – Remove Y-axis label
- **Hide X-axis label** – Remove X-axis label  
  If shown:
  - **X-axis position** – Choose top or bottom

- **Trend line** – Add a straight line showing the overall trend

- **Manual Y/X axis range** – Set axis boundaries
  - **Y-axis min / max** – Define vertical limits
  - **X-axis min / max** – Define horizontal limits

### Heat Map

- **Show labels** – Show values directly on each cell
- **Hide Y-axis label** – Remove Y-axis label
- **Hide X-axis label** – Remove X-axis label  
  If shown:
  - **X-axis position** – Choose top or bottom

- **Sort order** – Enable sorting by column. Click once to enable, again to disable  
  Options:
  - **Order way** – Ascending or descending
  - **Target field** – Pick a field to sort by
  - **Select top** – Show top N values from X-axis by sort

### Heat Map Calendar

- **Range** – How much data will be shown  
  Options:
  - full – All data
  - trim to current day – Data after the current day will not be shown
  - trim all – Empty months will not be shown (borderless)

- **Stretch** – If enabled, heat map calendar will take full view width

### Card With Line

- **Size Content** – Main content font size (vh units, default: 1)
- **Enable comparison** – If enabled, shows percentage increase/decrease of the last value compared to the first one in the defined time range  
  If enabled:
  - **Reverse comparison colors** – If enabled, positive changes are shown in red and negative in green

## Query Params

Let’s say we have 2 buildings and 2 sensors registered in ThingsBoard with the following relationships:

- **Building A** contains **Sensor_1**
- **Building B** has no sensors
- **Sensor_2** is not assigned to any building

We want to create a view showing how many sensors are in each building. The result depends on the **root entity** used for the calculation:

- If **Building** is the root – Building A shows 1 sensor, Building B shows 0
- If **Sensor** is the root – Sensor_1 is linked to 1 building, Sensor_2 is unassigned

You can control how the query is built using these parameters:

- **Preview mode** – Load a limited set of data to preview how the view will look
  - **Preview item count** – Number of root items to load for preview

- **Entities Root** – Override the default root entity automatically selected by Trendz

- **Topology Entities** – Trendz builds a query plan using the Topology Graph by finding the shortest path between all used entities  
  For complex graphs, shortest path may not be optimal — you can manually define which entities to include

- **Raw data loading** – Load unaggregated data directly from the ThingsBoard

- **Enable multi-root items loading** – Allows multiple root-level entities to be processed in the same view

## View Mode Fields

These settings apply only when the view is shown in full-screen mode or embedded in a Trendz Widget on the ThingsBoard dashboard. [More details here](/docs/trendz/widget-actions/)

- **Hide filters** – Hide the filter section
- **Hide date filters** – Hide the date picker
- **Hide group by** – Hide the group-by dropdown
- **Hide AI Summary button** – Hide the AI summary option
- **Get filter values from URL** – Load filter parameters from browser URL query string
- **Set filter values to URL** – Save selected filter values into the browser URL
- **Hidden filters** – Hide specific filters
- **Row click entities** – On clicking a chart or table item, send the selected entity to ThingsBoard alias  
  (commonly used for triggering filter updates in other widgets)  
  [Read more here](/docs/trendz/widget-actions/#configure-onrowclick-action)

### Anomalies View

- **Hide anomalies list** – Hide the anomalies list section from the view
- **Hide anomalies chart** – Hide the anomalies chart section from the view

## AI Assistant

- **Prompt** – Select the AI prompt used when the **AI Summary** button is clicked  
  Learn more about the AI Summary button [here](/docs/trendz/ai-widget-summary#trendz-widgets)  
  To create your own prompts, see [this guide](/docs/trendz/ai-assistance-prompts)

## Colors

- **Annotations** – Highlight background ranges on the chart to indicate levels  
  You can add multiple annotations, each with:
  - **From Y** – Start value on the Y-axis
  - **To Y** – End value on the Y-axis
  - **Color** – Background color of the annotation

- **Theme** – Choose the widget theme:
  - **Default**, **Light**, **Dark**, or **Custom**
  - If **Custom** is selected:
    - **Background** – Widget background color
    - **Text** – Text color

## Cache

[Read more about caching here](/docs/trendz/cache-settings/)

- **Cache Report** – Use the cached View Report when the query plan and time range haven't changed (default: enabled).
- **Enable caching** – Enables Metrics Long-Term Cache.
  - **Caching Time Unit** – Choose data aggregation level.
  - **Auto Refresh** – Preloads the cache in the background on a schedule:
    - **Every** – Interval value
    - **Time Unit** – Time unit (e.g. hour, day)

## Chart Option

You can fine-tune all chart settings using JSON format.

**Left Panel (Editor):**
- **Merged** – Shows the full chart configuration. You can edit this directly.
- **Delta** – Displays only your changes (differences) from the default configuration.
- **Cancel changes** – Clears all unsaved modifications.
- **Hide data** – Hides actual data values from items. Useful for privacy or when sharing configuration.
- **Save** – Applies and stores your changes.

**Right Panel (Preview):** Shows a live preview of how your JSON changes affect the chart.

## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}
