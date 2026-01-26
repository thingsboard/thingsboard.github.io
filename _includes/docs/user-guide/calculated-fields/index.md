* TOC
{:toc}

{% assign sinceVersion = "4.0.0" %}
{% include templates/since.md %}

<br>

Calculated fields allow you to transform raw data into actionable insights in real time. 
Think of Calculated Fields as a built-in "logic layer" for your IoT entities. 
Instead of just storing raw data, you can automatically generate high-value metrics as soon as data arrives.

By combining data from **multiple sources** — such as incoming telemetry, existing entity attributes, or even data from related assets — you can execute custom logic the moment your data arrives.
The resulting output is automatically stored as either **time-series data** or **attributes**, ensuring your calculated insights are immediately ready for visualization, reporting, or further automation.
 
To support complex workflows, calculated field execution can be **chained**: the output of one field can automatically trigger the execution of another, allowing you to build sophisticated data processing pipelines step-by-step.

Calculated fields can be applied at two different levels within the system:
- Entity Level: At this level, the calculation is applied to a single, specific entity - [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} or [Asset](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"}.
- Profile Level: When a calculated field is defined within a [Device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"} or [Asset profile](/docs/{{docsPrefix}}user-guide/asset-profiles/){:target="_blank"}, the logic is inherited by every entity associated with that profile.

This flexibility allows users to either define unique calculations per entity or apply standardized logic across a group of similar entities, optimizing data processing and management.

In addition to real-time processing, ThingsBoard supports calculated field [reprocessing](#data-reprocessing), which allows you to apply the same calculation logic to historical telemetry data and generate missing or updated results for a selected time range.

<hr>

### Creating a calculated field

> The process of creating a calculated field is the same for [Devices](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}, [Assets](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"}, [Device profiles](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}, or [Asset profiles](/docs/{{docsPrefix}}user-guide/asset-profiles/){:target="_blank"}.

- Open the "Calculated fields" page from the left-hand menu.
- Click the "**+**" button in the top-right corner.
- Select **Create new calculated field** from the dropdown menu.

{% assign createCalculatedFieldCE = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-ce.png
        title: Open the **Calculated fields** page from the left-hand menu.<br>Click the "**+**" button in the top-right corner and select **Create new calculated field** from the dropdown menu.
'
%}

{% assign createCalculatedFieldPE = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-pe.png
        title: Open the **Calculated fields** page from the left-hand menu.<br>Click the "**+**" button in the top-right corner and select **Create new calculated field** from the dropdown menu.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldCE %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldPE %}
{% endif %}

<hr>

## Types

ThingsBoard supports several types of calculated fields, each designed for a specific class of tasks:

{% include calculated-fields-cards.liquid %}

<hr>

## Configuration

### General

The "General" section defines the basic configuration of the calculated field:
- **Title** — descriptive name for the calculated field that reflects its purpose.
- **Entity type** - the target entity or entity profile where the calculated field will be applied.
- **Type** - the calculated field [type](#types) that defines the calculation model and available configuration blocks.

{% assign typeOfCalculatedFieldCE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-general-1-ce.png
        title: Enter a <b>descriptive name</b> for the calculated field, select the entity or entity profile to which the calculated field will be applied, and choose calculated field <b>type</b>.
'
%}

{% assign typeOfCalculatedFieldPE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-general-1-pe.png
        title: Enter a <b>descriptive name</b> for the calculated field, select the entity or entity profile to which the calculated field will be applied, and choose calculated field <b>type</b>.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=typeOfCalculatedFieldPE %}
{% else %}  
{% include images-gallery.liquid imageCollection=typeOfCalculatedFieldCE %}
{% endif %}

<hr>

### Arguments

Arguments define which data the calculated field reads and exposes as variables for the calculation logic. Each argument maps to a specific data source (attributes or telemetry) from a selected entity, so it can be referenced in a Simple expression, TBEL script, or other calculated field types.

Click the **Add argument** button and fill in the required fields:

<b><font size="3">Entity type</font></b>   
Define where the data is read from:
- **Current entity** — the same device/asset (device profile/asset profile) to which the calculated field is applied.   
  If the field is created at the **Device profile** or **Asset profile** level, the calculation is performed for each entity associated with that profile.
- Another **Device / Asset** — a specific referenced entity 
- **Customer** — the customer associated with the entity 
- **Current tenant** — the tenant entity 
- **Current owner** — the owner of the current entity 
- **Related entities** (for specific calculated field types) — entities resolved dynamically via relations

{% assign argumentsCE = '
    ===
        image: /images/user-guide/calculated-fields/argument-name-1-ce.png
        title: Click the **Add argument** button (1) and fill in the required fields:<br>Defines the data source (2) that will be used in calculations.<br>Choose the desired argument type (3).
'
%}

{% assign argumentsPE = '
    ===
        image: /images/user-guide/calculated-fields/argument-name-1-pe.png
        title: Click the **Add argument** button (1) and fill in the required fields:<br>Defines the data source (2) that will be used in calculations.<br>Choose the desired argument type (3).
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=argumentsPE %}
{% else %}  
{% include images-gallery.liquid imageCollection=argumentsCE %}
{% endif %}

<br><b><font size="3">Argument types</font></b>

Calculated fields support the following argument types:

{% capture calculatedfieldsargumenttype %}
Attribute<small></small>%,%attribute%,%templates/calculated-fields/attribute-argument-type.md%br%
Latest telemetry<small></small>%,%latestTelemetry%,%templates/calculated-fields/latest-telemetry-argument-type.md%br%
Time series rolling<small>for Script-based calculations and specific aggregation modes</small>%,%timeSeriesRolling%,%templates/calculated-fields/time-series-rolling-argument-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=calculatedfieldsargumenttype %}

### Calculation

Calculated fields support multiple calculation models depending on the selected type. A calculation can be defined as a single expression, a TBEL script, a geospatial zone evaluation, a value propagation to related entities, or an aggregation.

For more details about the capabilities and configuration options, refer to the documentation for the corresponding calculated field [type](#types).

### Output

Regardless of the type, the calculated field produces one or more output values that are then stored as telemetry or attributes and processed according to the configured [output strategy](#output-strategy) (immediately or via Rule Chains).

The result can be stored as:
- [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} — the function returns a JSON object or an array of JSON objects **with or without a timestamp** containing the computed value(s).
- [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} — the function returns a JSON object **without timestamp information** containing the computed value(s). Attributes can be stored in **Server** or **Shared** scope.

{% assign outputCE = '
    ===
        image: /images/user-guide/calculated-fields/output-1-ce.png
        title: Time series: function must return a JSON object or array with or without a timestamp containing the computed value.<br>To finish adding the calculated field, click **Add**.
    ===
        image: /images/user-guide/calculated-fields/output-2-ce.png
        title: Attribute: function must return a JSON object without timestamp information containing the computed value.<br>To finish adding the calculated field, click **Add**.
'
%}

{% assign outputPE = '
    ===
        image: /images/user-guide/calculated-fields/output-1-pe.png
        title: Time series: function must return a JSON object or array with or without a timestamp containing the computed value.<br>To finish adding the calculated field, click **Add**.
    ===
        image: /images/user-guide/calculated-fields/output-2-pe.png
        title: Attribute: function must return a JSON object without timestamp information containing the computed value.<br>To finish adding the calculated field, click **Add**.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=outputPE %}
{% else %}  
{% include images-gallery.liquid imageCollection=outputCE %}
{% endif %}

<hr>

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

## Debug 

ThingsBoard provides built-in tools that help you validate and troubleshoot calculated fields in real time.

<b><font size="3">Enable debug mode</font></b> (_&#42; recommended during development_)

Each calculated field can be switched to Debug mode. When enabled, ThingsBoard records execution details for every run, including the input arguments that triggered the execution (e.g. incoming telemetry or attribute updates) and the calculation result or any execution problems (script errors, missing arguments, invalid values).

{% assign enableDebugCE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-enable-debug-1-ce.png
        title: Enable/manage debug mode when creating a calculated field.
    ===
        image: /images/user-guide/calculated-fields/calculated-field-enable-debug-2-ce.png
        title: Enable/manage debug mode for an existing calculated field.
'
%}

{% assign enableDebugPE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-enable-debug-1-pe.png
        title: Enable/manage debug mode when creating a calculated field.
    ===
        image: /images/user-guide/calculated-fields/calculated-field-enable-debug-2-pe.png
        title: Enable/manage debug mode for an existing calculated field.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=enableDebugPE %}
{% else %}  
{% include images-gallery.liquid imageCollection=enableDebugCE %}
{% endif %}

{% include templates/debug-mode.md %}

<br><b><font size="3">Review debug events</font></b>

Click the **Events** icon in the calculated field row to view recorded debug events

Each event includes:
- **Entity ID** — the ID of the entity where the calculated field was executed (the target entity)
- **Message ID** — unique execution identifier
- **Message type** — indicates which type of internal request triggered the calculated field execution
- **Arguments** — the resolved argument values used during execution, including timestamps where applicable
- **Result** — generated output by the calculated field
- **Error** — execution failure reason (appears if the execution failed)

{% assign reviewDebugCE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-review-debug-events-1-ce.png
        title: Click the **Events** icon in the calculated field row to view recorded debug events
    ===
        image: /images/user-guide/calculated-fields/calculated-field-review-debug-events-2-ce.png
'
%}

{% assign reviewDebugPE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-review-debug-events-1-pe.png
        title: Click the **Events** icon in the calculated field row to view recorded debug events
    ===
        image: /images/user-guide/calculated-fields/calculated-field-review-debug-events-2-pe.png
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=reviewDebugPE %}
{% else %}  
{% include images-gallery.liquid imageCollection=reviewDebugCE %}
{% endif %}

<br><b><font size="4">Testing mode for script-based calculated fields</font></b>

For script-based calculated fields (for example, Script, Propagation (Calculation result mode), ThingsBoard provides a **Test script function (TBEL)** mode that helps you validate execution using real input data before applying changes.

This allows you to:
- re-run the calculation using the same input data
- temporarily modify argument data or script logic (_without saving configuration changes_)
- validate output JSON structure and timestamps
- see the exact script execution output
- quickly reproduce errors and fix the logic

**How it works:**

Click **Test with this message** in the event row to run the testing function.
- **Left panel — Script editor**   
  Shows the TBEL calculate(ctx, ...) function used by the calculated field. You can modify the script directly in this window.
- **Top-right panel — Arguments**   
  Displays the list of arguments used in the calculation. You can adjust the argument value, type, and timestamp to simulate different incoming data. 
- **Bottom-right panel — Output** 
  Shows the result returned by the script after execution (or an error message if execution fails).

{% assign reviewDebug1CE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-debug-test-mode-1-ce.png
        title: Click **Test with this message** in the event row to run the testing function.
    ===
        image: /images/user-guide/calculated-fields/calculated-field-debug-test-mode-2-ce.png
        title: **Left panel — Script editor**. Shows the TBEL calculate(ctx, ...) function used by the calculated field. You can modify the script directly in this window.<br>**Top-right panel — Arguments**. Displays the list of arguments used in the calculation. You can adjust the argument value, type, and timestamp to simulate different incoming data.<br>**Bottom-right panel — Output**. Shows the result returned by the script after execution (or an error message if execution fails).
'
%}

{% assign reviewDebug1PE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-debug-test-mode-1-pe.png
        title: Click **Test with this message** in the event row to run the testing function.
    ===
        image: /images/user-guide/calculated-fields/calculated-field-debug-test-mode-2-pe.png
        title: **Left panel — Script editor**. Shows the TBEL calculate(ctx, ...) function used by the calculated field. You can modify the script directly in this window.<br>**Top-right panel — Arguments**. Displays the list of arguments used in the calculation. You can adjust the argument value, type, and timestamp to simulate different incoming data.<br>**Bottom-right panel — Output**. Shows the result returned by the script after execution (or an error message if execution fails).
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=reviewDebug1PE %}
{% else %}  
{% include images-gallery.liquid imageCollection=reviewDebug1CE %}
{% endif %}

**Workflow:**
- Update the script and/or the argument values.
- Click Test to execute the function with the provided inputs.
- Review the Output section to confirm the returned JSON structure and values.
- When the result is correct, click Save to keep the changes.
- If needed, apply the changes to the calculated field configuration to activate the updated logic.

{% assign reviewDebug2CE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-debug-test-mode-3-ce.png
        title: **1.** Update **script** and/or **argument values**.<br>**2.** Click **Test** to run the function.<br>**3.** Review Output JSON<br>**4.** Click **Save** to apply changes.
    ===
        image: /images/user-guide/calculated-fields/calculated-field-debug-test-mode-4-ce.png
        title: **5.** If needed, apply changes to the calculated field configuration.
'
%}

{% assign reviewDebug2PE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-debug-test-mode-3-pe.png
        title: **1.** Update **script** and/or **argument values**.<br>**2.** Click **Test** to run the function.<br>**3.** Review Output JSON<br>**4.** Click **Save** to apply changes.
    ===
        image: /images/user-guide/calculated-fields/calculated-field-debug-test-mode-4-pe.png
        title: **5.** If needed, apply changes to the calculated field configuration.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=reviewDebug2PE %}
{% else %}  
{% include images-gallery.liquid imageCollection=reviewDebug2CE %}
{% endif %}

<hr>

## Rule Engine integration

Calculated fields are integrated with ThingsBoard [Rule Engine](/docs/user-guide/rule-engine-2-0/overview/){:target="_blank"}, the platform&#39;s flexible system for routing and processing messages.
The execution is seamlessly integrated into your data workflow, triggered automatically whenever telemetry or attributes are processed by the following rule nodes:
- [Save Time Series](/docs/user-guide/rule-engine-2-0/nodes/action/save-timeseries){:target="_blank"}: Triggers calculations when new telemetry is persisted.
- [Save Attributes](/docs/user-guide/rule-engine-2-0/nodes/action/save-attributes){:target="_blank"}: Triggers calculations when client, shared, or server-side attributes are updated.
- [Calculated Fields](/docs/user-guide/rule-engine-2-0/nodes/action/calculated-fields){:target="_blank"}: A dedicated node used to manually invoke field evaluations or facilitate complex chaining.

<hr>

## Data reprocessing

<table style="width:auto">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>The <b>telemetry data reprocessing</b> feature is available only in <b>ThingsBoard PE</b> and <b>ThingsBoard Cloud</b> editions.</em></strong></td>
     </tr>
   </thead>
</table> 

**Calculated field reprocessing** is a mechanism that allows you to apply calculated field logic to historical data.   
This is especially useful when you modify existing calculations or add new fields and want those changes to affect not only new data but also previously collected telemetry.

> **Note:** reprocessing cannot be applied to a calculated field that contains only attribute-based arguments. The Calculated field must include at least one argument based on a time series — either "Latest telemetry" or "Time series rolling" data.

<b><font size="3">Key features</font></b>

- **Recalculation of historical data** — apply updated logic to previously collected telemetry.
- **Flexible time range selection** — choose a specific time period for reprocessing.
- **Store results as telemetry** — processed data is saved in ThingsBoard as telemetry, enabling further use in widgets, rules, or analytics.

<b><font size="4">How to configure</font></b>

- Choose the target **Entity** or **Profile**, go to the "**Calculated fields**" tab, and either [create a new calculated field](#creating-a-calculated-field) or select an existing one that needs historical telemetry reprocessing.
- Click the "**Reprocess calculated field**" icon next to the desired field.
- In the pop-up window, define the time interval for which you want to reprocess telemetry data.
- Click "**Reprocess**" — the system will start recalculating and update historical telemetry data according to the latest logic.
- Once the data reprocessing is complete, click **Finish**.

{% assign dataReprocessing = '
    ===
        image: /images/user-guide/calculated-fields/how-to-configure-reprocessing-1-pe.png,
        title: Choose the target **Entity or Profile**, go to the **Calculated fields** tab, and either create a new calculated field or select an existing one that needs historical telemetry reprocessing.<br>Click the **Reprocess calculated field** icon next to the desired field.
    ===
        image: /images/user-guide/calculated-fields/how-to-configure-reprocessing-2-pe.png,
        title: In the pop-up window, define the time interval for which you want to reprocess telemetry data, and click **Reprocess** — the system will start recalculating and update historical telemetry data according to the latest logic.
    ===
        image: /images/user-guide/calculated-fields/how-to-configure-reprocessing-3-pe.png,
        title: Once the data reprocessing is complete, click **Finish**.
'
%}

{% include images-gallery.liquid imageCollection=dataReprocessing %}

<b><font size="4">Example of using the data reprocessing feature</font></b>

Assume that the Smart Device sends temperature and humidity data in real time. Later, you configure a calculated field to compute the dew point.
On the time series widget, you can see that dew point values start appearing only from 13:44:35 — before that moment, the calculation was not performed.

{% assign reprocessingExample1 = '
    ===
        image: /images/user-guide/calculated-fields/reprocessing-example-1-pe.png,
        title: On the time series widget, you can see that dew point values start appearing only from 13:44:35 — before that moment, the calculation was not performed.
'
%}

{% include images-gallery.liquid imageCollection=reprocessingExample1 %}

To recalculate the dew point for a historical period (before the calculated field was created), follow these steps:

{% assign reprocessingExample2 = '
    ===
        image: /images/user-guide/calculated-fields/reprocessing-example-2-pe.png
        title: Go to the **Calculated fields** tab of the corresponding **Smart Device**. Click the **Reprocess calculated field** icon in the row of the required field.
    ===
        image: /images/user-guide/calculated-fields/reprocessing-example-3-pe.png,
        title: In the dialog window, specify the time interval for recalculation and click **Reprocess**.
    ===
        image: /images/user-guide/calculated-fields/reprocessing-example-4-pe.png,
        title: After the process is completed, click **Finish**.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=reprocessingExample2 %}

As a result, the **dewPoint** values will be generated and stored for the entire selected historical period.

{% assign reprocessingExample3 = '
    ===
        image: /images/user-guide/calculated-fields/reprocessing-example-5-pe.png,
        title: As a result, the **dewPoint** values will be generated and stored for the entire selected historical period.
'
%}

{% include images-gallery.liquid imageCollection=reprocessingExample3 %}

<hr>

<br><b><font size="3">Task manager</font></b>

The Task manager allows you to view the status of tasks, track their progress, see results, and identify any errors that occurred during data processing.

{% assign taskManager = '
    ===
        image: /images/user-guide/calculated-fields/task-manager-1-pe.png
        title: The Task manager allows you to view the status of tasks, track their progress, see results, and identify any errors that occurred during data processing.
'
%}

{% include images-gallery.liquid imageCollection=taskManager %}

<hr>

## Built-in methods for rolling arguments

Time series rolling arguments support built-in functions for calculations. These functions accept an optional `ignoreNaN` boolean parameter.

| Method          | Default Behavior (`ignoreNaN = true`)               | Alternative (`ignoreNaN = false`)           |
|-----------------|-----------------------------------------------------|---------------------------------------------|
| `max()`         | Returns the highest value, ignoring NaN values.     | Returns NaN if any NaN values exist.        |
| `min()`         | Returns the lowest value, ignoring NaN values.      | Returns NaN if any NaN values exist.        |
| `mean(), avg()` | Computes the average value, ignoring NaN values.    | Returns NaN if any NaN values exist.        |
| `std()`         | Calculates the standard deviation, ignoring NaN.    | Returns NaN if any NaN values exist.        |
| `median()`      | Returns the median value, ignoring NaN values.      | Returns NaN if any NaN values exist.        |
| `count()`       | Counts values, ignoring NaN values.                 | Counts all values, including NaN.           |
| `last()`        | Returns the most recent value, skipping NaN values. | Returns the last value, even if it is NaN.  |
| `first()`       | Returns the oldest value, skipping NaN values.      | Returns the first value, even if it is NaN. |
| `sum()`         | Computes the total sum, ignoring NaN values.        | Returns NaN if any NaN values exist.        |

<br><b><font size="4">Assuming the following time series rolling argument</font></b>

```json
{
  "temperature": {
    "timeWindow": {
      "startTs": 1740643762896,
      "endTs": 1740644662896
    },
    "values": [
      { "ts": 1740644350000, "value": 72.32 },
      { "ts": 1740644360000, "value": 72.86 },
      { "ts": 1740644370000, "value": 73.58 },
      { "ts": 1740644380000, "value": "NaN" }
    ]
  }
}
```
<br><b><font size="4">Usage and result</font></b>

```javascript
var avgTemp = temperature.mean(); // Returns 72.92
var tempMax = temperature.max(); // Returns 73.58
var valueCount = temperature.count(); // Returns 3

var avgTempNaN = temperature.mean(false);  // Returns NaN
var tempMaxNaN = temperature.max(false);   // Returns NaN
var valueCountNaN = temperature.count(false); // Returns 4
```

**Where it can be useful**

- **statistical analysis**: computing mean, median, and standard deviation for trend analysis.
- **data filtering**: identifying maximum and minimum values within a time window.
- **quality control**: detecting missing or outlier values with count() and std().
- **energy efficiency monitoring**: summing up power consumption over a period to evaluate energy usage patterns.

<hr>

## Merging time series arguments

Time series rolling arguments can be **merged** to align timestamps across multiple datasets.
The merge function combines two or more rolling arguments by taking all timestamps from all arguments and merging the values based on these timestamps.
If value by timestamp does not exist in an argument, it assigns the previous value from that argument; if no previous value exists, it assigns `NaN`.
The result is a new rolling argument that contains a time window and an array of values corresponding to each argument value by each timestamp.

| Method                       | Description                                                                                                               | Returns                                             |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| `merge(other, settings)`     | Merges with another rolling argument. Aligns timestamps and filling missing values with the previous available value.     | Merged object with `timeWindow` and aligned values. |
| `mergeAll(others, settings)` | Merges multiple rolling arguments. Aligns timestamps and filling missing values with the previous available value.        | Merged object with `timeWindow` and aligned values. |

<b><font size="4">Parameters</font></b>

| Parameter            | Description                                                                                                                                                |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `other` or `others`  | Another rolling argument or array of rolling arguments to merge with.                                                                                      |
| `settings`(optional) | Configuration object that supports: <br> - `ignoreNaN` - controls whether NaN values should be ignored.<br> - `timeWindow` - defines a custom time window. |

**Assuming the following arguments and their values:**

```json
{
  "humidity": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741356882759,
      "value": 43
    }, {
      "ts": 1741356918779,
      "value": 46
    }]
  },
  "pressure": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741357047945,
      "value": 1023
    }, {
      "ts": 1741357056144,
      "value": 1026
    }, {
      "ts": 1741357147391,
      "value": 1025
    }]
  },
  "temperature": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741356874943,
      "value": 76
    }, {
      "ts": 1741357063689,
      "value": 77
    }]
  }
}
```

**Usage:**

```javascript
var mergedData = temperature.merge(humidity, { ignoreNaN: false });
```

**Output:**

```json
{
  "mergedData": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741356874943,
      "values": [76.0, "NaN"]
    }, {
      "ts": 1741356882759,
      "values": [76.0, 43.0]
    }, {
      "ts": 1741356918779,
      "values": [76.0, 46.0]
    }, {
      "ts": 1741357063689,
      "values": [77.0, 46.0]
    }]
  }
}
```

**Usage:**

```javascript
var mergedData = temperature.mergeAll([humidity, pressure], { ignoreNaN: true });
```

**Output:**

```json
{
  "mergedData": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741357047945,
      "values": [76.0, 46.0, 1023.0]
    }, {
      "ts": 1741357056144,
      "values": [76.0, 46.0, 1026.0]
    }, {
      "ts": 1741357063689,
      "values": [77.0, 46.0, 1026.0]
    }, {
      "ts": 1741357147391,
      "values": [77.0, 46.0, 1025.0]
    }]
  }
}
```

**Where it can be useful**

Merging time series arguments is useful in scenarios where multiple sensors provide data streams at different intervals.
By aligning timestamps and filling missing values, merging enables:

- **sensor data synchronization**: aligns readings from different sensors measuring related parameters, such as temperature and humidity.
- **anomaly detection**: merges multiple telemetry sources to identify inconsistencies or deviations in system performance.
- **energy consumption analysis**: combines power usage data from various devices to provide a unified view of energy trends.
- **predictive maintenance**: merges vibration, temperature, and operational status data to predict equipment failures.

<hr>

## Export / Import calculated field

You can **export** the calculated field to a JSON file and **import** it into the same or another ThingsBoard instance.

<br><b><font size="4">Export calculated field</font></b>

- Navigate to the **Calculated fields** page.
- Click the **Export** button located in the corresponding calculated field row. 

{% assign exportCalculatedFieldCE = '
    ===
        image: /images/user-guide/calculated-fields/export-calculated-field-1-ce.png,
        title: Navigate to the <b>Calculated fields</b> page and click the <b>Export</b> button located in the row of the specific calculated field.
'
%}

{% assign exportCalculatedFieldPE = '
    ===
        image: /images/user-guide/calculated-fields/export-calculated-field-1-pe.png,
        title: Navigate to the <b>Calculated fields</b> page and click the <b>Export</b> button located in the row of the specific calculated field.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=exportCalculatedFieldCE %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=exportCalculatedFieldPE %}
{% endif %}

<br><b><font size="4">Import calculated field</font></b>

You can import a calculated field configuration from a JSON configuration file.
This feature is particularly useful when transferring calculated field configurations between entities or profiles, ensuring consistency and reducing manual setup efforts.

Steps to import:

{% assign importCalculatedFieldCE = '
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-1-ce.png,
        title: Navigate to the **Calculated fields** page. Click the "**+**" icon button, and select **Import calculated field** from the dropdown menu.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-2-ce.png,
        title: In the opened window, upload the JSON file with the calculated field configuration and click **Import**.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-3-ce.png,
        title: In the dialog that opens, **specify the entity or profile** to which the calculated field will be applied.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-4-ce.png,
        title: If there are any problems with arguments, they will be highlighted.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-5-ce.png,
        title: Ensure the imported field is correctly applied and update any necessary parameters.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-6-ce.png,
        title: Click **Add** to complete the import.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-7-ce.png,
        title: You have imported the calculated field configuration.
'
%}

{% assign importCalculatedFieldPE = '
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-1-pe.png,
        title: Navigate to the **Calculated fields** page. Click the "**+**" icon button, and select **Import calculated field** from the dropdown menu.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-2-pe.png,
        title: In the opened window, upload the JSON file with the calculated field configuration and click **Import**.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-3-pe.png,
        title: In the dialog that opens, **specify the entity or profile** to which the calculated field will be applied.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-4-pe.png,
        title: If there are any problems with arguments, they will be highlighted.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-5-pe.png,
        title: Ensure the imported field is correctly applied and update any necessary parameters.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-6-pe.png,
        title: Click **Add** to complete the import.
    ===
        image: /images/user-guide/calculated-fields/import-calculated-field-7-pe.png,
        title: You have imported the calculated field configuration.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=importCalculatedFieldCE %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=importCalculatedFieldPE %}
{% endif %}

> **Note**: ensure the imported field is correctly applied and update any necessary parameters:
  - if the referenced entity is the current entity, no error occurs. 
  - if a referenced entity does not exist in your tenant, it will be highlighted as an error in the argument where it is used. 
  - if the referenced entity is the current tenant and you import it into another tenant, it will automatically adjust to the new tenant without errors.

<hr>

## Managing calculated fields

Use the "Calculated fields" page to manage all calculated fields from a single place.

Each calculated field includes an action panel for managing the field:
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}1. **Data reprocessing** - applying the calculated field logic to historical data.{% endif %}
2. **Copy** — duplicate the configuration to quickly create a new calculated field.
3. **Export** — download the configuration as a JSON file for backup or migration.
4. **Events** — view execution events, including state changes and errors.
5. **Debug** — enable debug mode and inspect detailed execution data.
6. **Delete** — remove the calculated field from the system.

{% assign calculatedFieldsParametersCE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-fields-parameters-1-ce.png
        title: Each calculated field includes an action panel for managing the field.
'
%}

{% assign calculatedFieldsParametersPE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-fields-parameters-1-pe.png
        title: Each calculated field includes an action panel for managing the field.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=calculatedFieldsParametersCE %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=calculatedFieldsParametersPE %}
{% endif %}

<br><b><font size="4">View detailed information of the calculated field</font></b>

Click the calculated field to view its details.

{% assign calculatedFieldsParameters2CE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-fields-parameters-2-ce.png
        title: Click the calculated field to view its details.
'
%}

{% assign calculatedFieldsParameters2PE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-fields-parameters-2-pe.png
        title: Click the calculated field to view its details.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=calculatedFieldsParameters2CE %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=calculatedFieldsParameters2PE %}
{% endif %}

<br><b><font size="4">Modify the calculated field</font></b>

To modify the calculated field, click it to open the details view, then click the orange **pencil** button.   
After making your changes, click the orange **check** button to apply the updates.

{% assign calculatedFieldsParameters3CE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-fields-parameters-3-ce.png
        title: To modify the calculated field, click it to open the details view, then click the orange **pencil** button.   
    ===
        image: /images/user-guide/calculated-fields/calculated-fields-parameters-4-ce.png
        title: After making your changes, click the orange **check** button to apply the updates.
'
%}

{% assign calculatedFieldsParameters3PE = '
    ===
        image: /images/user-guide/calculated-fields/calculated-fields-parameters-3-pe.png
        title: To modify the calculated field, click it to open the details view, then click the orange **pencil** button.   
    ===
        image: /images/user-guide/calculated-fields/calculated-fields-parameters-4-pe.png
        title: After making your changes, click the orange **check** button to apply the updates.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=calculatedFieldsParameters3CE %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=calculatedFieldsParameters3PE %}
{% endif %}

## Calculated fields overview video

Prefer visual learning? Watch this short video for a quick introduction to **Calculated fields** in ThingsBoard.   
It covers the core concepts, supported calculation types, and practical examples for processing and transforming data in real time.

&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/wBUcWMSH4QI" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.
