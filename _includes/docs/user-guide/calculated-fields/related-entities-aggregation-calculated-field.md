* TOC
{:toc}

Related entities aggregation collects the **latest telemetry** or **attribute** values from multiple entities (devices, assets, customer, or tenant) related to the target entity, applies one or more aggregation functions, and stores the aggregated result on the target entity.   

Aggregation is performed only across **direct (single-level) relations**, ensuring predictable selection of entities.

Use "Related entities aggregation" when you need to compute a "group-level" metric from many entities, for example:
- **Fleet / building dashboards**: average temperature across all sensors, total power across all meters, max vibration across machines
- **Operational KPIs**: number of active devices, count of alarms, percentage of online units
- **Occupancy / presence tracking**: count how many devices are in a certain state (e.g., motion = true)
- **Energy and usage totals**: sum energy consumption across multiple devices or zones
- **Quality monitoring**: detect min/max readings across a group (e.g., lowest freezer temperature, highest humidity)
- **Filtered aggregation**: aggregate only a subset of entities (e.g., only "active" devices or only readings above a threshold)

<hr>

## Configuration

Define the related entity set, which data to read, which aggregation metrics to calculate, and how to store the result.

### General

{% assign calculatedFieldType = "Select the **Related Entities Aggregation** — aggregates latest values from related entities using functions such as **Average**, **Minimum**, **Maximum**, **Sum**, **Count**, **Count unique**." %}
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
Define the relationship type between the target entity and the related entities (for example, Contains, Manages, or any relation type).

{% assign relatedPathToRelatedEntities = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-path-to-related-entities-1-ce.png
        title: Define the path to the entities from which the data will be read for aggregation, as well as the relationship type between the target entity and the related entities.
'
%}

{% include images-gallery.liquid imageCollection=relatedPathToRelatedEntities %}

<hr>

### Arguments

The arguments define the data that will be retrieved from each related entity for aggregation.

For each argument, configure:
- **Argument type**: [Latest telemetry](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=latestTelemetry#arguments){:target="_blank"}, [Attribute](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"}
- **Time series key / Attribute key**: the key to read
- **Argument name**: variable name used in metrics
- **Default value**: fallback if data is missing

For more details about arguments and configuration, see the [Arguments](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"} section.

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

Define the function type (aggregation) that will be applied to the data specified in the arguments, and the key under which the aggregated result will be stored.

Each metric includes:
- **Metric name**: the output key name under which the aggregated result will be stored on the target entity.
- **Aggregation**: Average / Min / Max / Sum / Count / Count unique
- **Filter** (optional): include/exclude entity values before aggregation
- **Value source**: use a direct argument value (Key) or a function result (Function)
- **Argument name**: the [argument](#arguments) whose data is being aggregated

<b><font size="3">Filter</font></b>   
The filter is a function that returns <span class="code-light">true/false</span> and can use any defined arguments. If it returns <span class="code-light">true</span>, the entity value is included in the aggregation; otherwise, it is skipped.

Example:

```js
return temperature > 10 && status == "active";
```
{:.copy-code}

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

The Deduplication interval limits how often aggregation is executed when many related entities send frequent updates.

How it works:
- the first update triggers aggregation
- additional updates arriving within the interval do not trigger aggregation again
- after the interval ends, aggregation run again using the latest available data

> Minimum time between telemetry aggregations: 60 seconds.

This prevents excessive reprocessing and reduces system load in high-frequency environments.

{% assign relatedDeduplicationInterval = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-aggregation-metrics-3-ce.png
        title: **Deduplication interval** is the minimum time period between repeated aggregations. It limits how often a calculated field can re-aggregate data from related entities in response to frequent updates.
'
%}

{% include images-gallery.liquid imageCollection=relatedDeduplicationInterval %}

<hr>

### Output

The calculation result is stored either as a [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or an [attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.   
If needed, set Decimals to round the value.

> **[Only for Time series]**   
Enable **Use latest timestamp** to store the result using the most recent argument timestamp instead of server time.

For more details about output types and processing strategies, see the [Output](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#output){:target="_blank"} section.

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

## Example 1: Aggregate temperature values from multiple child devices

<b><font size="4">Scenario</font></b>   
Multiple temperature sensor devices are installed in **Building A** and continuously publish telemetry values.

<b><font size="4">Goal</font></b>   
Collect the temperature telemetry from all related sensors and calculate:
- the **average temperature** in the building
- the **maximum temperature** in the building

Store both results on **Building A**.

<hr>

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Related entities aggregation" calculated field configuration file.](/docs/user-guide/resources/calculated-fields/related-entities-aggregation/temperature_aggregation_cf.json){:target="_blank" download="temperature_aggregation_cf.json"}.

<hr>

<b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo devices</font></b>

Import multiple smart devices that publish temperature telemetry.
1. Download the CSV file: [related-entities-aggregation-device-data.csv](/docs/user-guide/resources/calculated-fields/related-entities-aggregation/related-entities-aggregation-device-data.csv){:target="_blank" download="related-entities-aggregation-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Smart Device 1
- **Type:** sensor
- **Time series:** <span class="code-light">temperature</span>

{% assign exampleRelatedEntities1 = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-1-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-2-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-3-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
'
%}

{% include images-gallery.liquid imageCollection=exampleRelatedEntities1 %}
<hr>

<b><font size="3">2. Import demo asset</font></b>

Import the asset that represents the building.
1. Download the CSV file: [related-entities-aggregation-asset-data.csv](/docs/user-guide/resources/calculated-fields/related-entities-aggregation/related-entities-aggregation-asset-data.csv){:target="_blank" download="related-entities-aggregation-asset-data.csv"}
2. Go to **Assets** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Building A
- **Type:** building

{% assign exampleRelatedEntities2 = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-4-ce.png
        title: Import an asset that represents the building.
'
%}

{% include images-gallery.liquid imageCollection=exampleRelatedEntities2 %}

<hr>

<b><font size="3">3. Create relations between the asset and devices</font></b>

Create a relationship between the **Building A** asset and the **smart devices**.
- Relation direction: **From**
- Relation type: **Manages**

These relations define the set of child entities whose telemetry will be aggregated.

{% assign examplePropagation33 = '
    ===
        image: /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-5-ce.png
        title: Create a relationship between the **Building A** asset and the **smart devices**.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation33 %}

<hr>

<b><font size="3">4. Apply the calculated field to the asset</font></b>

Configure a **Related entities aggregation** calculated field directly on the **Building A** asset.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/related-entities-aggregation/temperature_aggregation_cf.json){:target="_blank" download="temperature_aggregation_cf.json"}.
2. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This field will:
- read the latest temperature value from all child devices
- compute aggregated metrics (average and maximum)
- store the results on Building A

{% assign examplePropagation34 = '
    ===
        /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-6-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-7-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-8-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-9-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-10-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-11-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-12-ce.png
        title: Check the debug events by clicking the "Events" icon button".
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation34 %}

<hr>

<b><font size="4">Result</font></b>

The Building A asset stores the aggregated telemetry values, such as:
- <span class="code-light">avgTemperature</span> — average temperature across all sensors
- <span class="code-light">maxTemperature</span> — maximum temperature measured by one of the sensors

{% assign examplePropagation33 = '
    ===
        /images/user-guide/calculated-fields/related-entities/related-entities-cf-example-1-13-ce.png
        title: The Building A asset stores the aggregated telemetry values, such as:<br>- avgTemperature — average temperature across all sensors<br>- maxTemperature — maximum temperature measured by one of the sensors
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation33 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.