* TOC
{:toc}

Aggregate the **latest data** from multiple related entities (devices, assets, customers, or the tenant) and store the result in the target entity.

Aggregation is executed only across **direct (single-level) relations**, ensuring precise and predictable selection of entities for processing.

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## Configuration

Define the data sources, calculation logic, result format, and how it will be further processed in the system.

### General

{% assign calculatedFieldType = "Select the **Related Entities Aggregation** calculated field type — aggregation (average, minimum, maximum, sum, count, count unique) of the latest data from related entities." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Aggregation path to related entities

ThingsBoard will collect data for aggregation from all entities that match the selected relationship direction and relationship type.

<b><font size="3">Relation direction</font></b>   
Define the path to the entities from which the data will be read:
- **Down to child** — data is aggregated from child entities.
- **Up to parent** — data is aggregated from parent entities.

Aggregation works only with direct (single-level) relationships, without recursion or multi-level traversal.

<b><font size="3">Relation type</font></b>   
Define the relationship type between the target entity and the related entities, for example:
- **Contains**
- **Manages**
- or **any custom relation types** defined in ThingsBoard

{% assign relatedPathToRelatedEntities = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-path-to-related-entities-1-ce.png
        title: Define the path to the entities from which the data will be read for aggregation, as well as the relationship type between the target entity and the related entities.
'
%}

{% include images-gallery.liquid imageCollection=relatedPathToRelatedEntities %}

<hr>

### Arguments

Arguments define which data will be retrieved from the related entities before performing aggregation.

Click **Add argument** and configure the following:

<b><font size="3">Argument type</font></b>   
Defines the data type:
- **Attribute**: uses static or semi-static key-value pairs associated with an entity (e.g., model, max temperature).
- **Latest telemetry**: uses the most recent telemetry data from an entity (e.g., temperature, speed, voltage).

<b><font size="3">Time series key / Attribute key</font></b>   
The telemetry or attribute key whose value will be read.

<b><font size="3">Argument name</font></b>   
The name of the variable used in the formula or script.

<b><font size="3">Default value</font></b>   
The default value used if the data is unavailable.

After configuring the parameters, click **Add**.

{% assign relatedArgument = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-argument-1-ce.png
        title: Click **Add argument** and define the data source.<br>Specify the **argument type**, **time series key / attribute key**, **argument name**, and **default value**.<br>Then click **Add**.
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-argument-2-ce.png
'
%}

{% include images-gallery.liquid imageCollection=relatedArgument %}

<hr>

### Metrics

Metrics define which aggregated values should be calculated based on the collected arguments.

Click **Add metric** and configure the following:

<b><font size="3">Metric name</font></b>      
The key under which the aggregated result will be stored.

<b><font size="3">Aggregation</font></b>   
Available aggregation functions: **Average** / **Minimum** / **Maximum** / **Sum** / **Count** / **Count unique**

<b><font size="3">Filter (on/off)</font></b>   
Allows you to filter data before performing aggregation.

The filter is defined as a function that returns a **boolean value** (<span class="code-light">true / false</span>) and can use any arguments specified in the configuration. If the function returns <span class="code-light">true</span>, the data is included in the aggregation; if it returns <span class="code-light">false</span>, the data is skipped.

Example:

```js
return temperature > 10 && status == "active";
```
{:.copy-code}

<b><font size="3">Value source</font></b>   
Choose which value should be used in the metric:
- **Key** — use the argument value directly
- **Function** — use the result of a function (e.g., in Script-based aggregations)

<b><font size="3">Argument name</font></b>   
Select the argument that will serve as the data source for this metric.

{% assign relatedMetrics = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-metrics-1-ce.png
        title: Click **Add metric** and configure the following:<br>Specify the **metric name** and select **aggregation** type.
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-metrics-2-ce.png
        title: Select **value source** (Key or Function) and set **argument name**.<br>Then click **Add**.
'
%}

{% include images-gallery.liquid imageCollection=relatedMetrics %}

<br><b><font size="4">Deduplication interval</font></b>

**Deduplication interval** is the minimum time period between repeated aggregations.   
It limits how often a calculated field can re-aggregate data from related entities in response to frequent updates.

<b><font size="3">Why it is needed</font></b>   
In **Related entities aggregation**, the results depend on multiple entities (for example, dozens or hundreds of devices). 
If each of them reports telemetry frequently, the system could trigger aggregation too many times in a row. 
The **Deduplication interval** helps "group" these triggers.

<b><font size="3">How it works</font></b>   
When updates from related entities arrive:
- the first update triggers processing;
- subsequent updates received within the **deduplication interval** do not trigger aggregation again;
- once the interval ends, the system allows aggregation to run again (using the **latest available data**).

{% assign relatedDeduplicationInterval = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-metrics-3-ce.png
        title: **Deduplication interval** is the minimum time period between repeated aggregations. It limits how often a calculated field can re-aggregate data from related entities in response to frequent updates.
'
%}

{% include images-gallery.liquid imageCollection=relatedDeduplicationInterval %}

<hr>

### Output

The calculated values are returned as a JSON object containing **keys** that represent the computed results, which are then used to store those values in the system.   
Further processing and persistence depend on the selected [Output strategy](#output-strategy-1).

<b><font size="3">Output type</font></b>   
Choose how the aggregated result will be stored:
- [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}: the function returns a JSON object or array, **with or without a timestamp**, containing the calculated value.
  > To align the result with the latest timestamp of the input arguments telemetry, use `ctx.latestTs` and assign it explicitly to the `ts` field in the returned object.
- [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}: the function returns a JSON object **without timestamp** information containing the computed value.   
  For attributes, also specify the scope: **Server**, **Client**, or **Shared attributes**.

<b><font size="3">Decimals (optional)</font></b>   
The number of decimal places to round the result to. If left empty, no rounding is applied.

> **[Only for Time series]**<br>
"**Use latest timestamp**" option — when enabled, the calculated value will be saved using the latest timestamp from the arguments, rather than the server time.

<b><font size="4">Save calculated field</font></b>   
To finish adding the calculated field, click **Add**.

{% assign relatedOutput = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-output-1-ce.png
        title: Time series: the function returns a JSON object or array, **with or without a timestamp**, containing the calculated value.<br>To finish adding the calculated field, click **Add**.
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-output-2-ce.png
        title: Attribute: the function returns a JSON object **without timestamp** information containing the computed value.<br>To finish adding the calculated field, click **Add**.
'
%}

{% include images-gallery.liquid imageCollection=relatedOutput %}

<hr>

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>

### Result

After the calculated field is created, data aggregation will start running immediately after the relevant input data is received.

{% assign relatedResult = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-result-1-ce.png
        title: After the calculated field is created, data aggregation will start running immediately after the relevant input data is received.
'
%}

{% include images-gallery.liquid imageCollection=relatedResult %}

To view debug events, click **Events**. In the debug window, you can see events with the input data and the calculated result.

> Please note that ThingsBoard stores all debug events for a calculated field during the first 15 minutes after creation. After that, only error events are saved.

{% assign relatedEvents = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-events-1-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-events-2-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-events-3-ce.png
'
%}

{% include images-gallery.liquid imageCollection=relatedEvents %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.