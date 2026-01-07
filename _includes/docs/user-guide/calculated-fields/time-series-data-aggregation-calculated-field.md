* TOC
{:toc}

Time series data aggregation is a calculated field type designed for **scheduled aggregation of historical telemetry** for the **current entity**. 
It periodically computes metrics such as **average, min, max, sum, count**, and **count unique** over fixed time intervals (hour, day, week, month, etc.) and stores the results as new time series keys.

Unlike "latest-value" aggregation across related entities, this type operates on historical time series data, making it ideal for analytics, reporting, and long-term KPIs.

Use "Time series data aggregation" when you need to:
- Generate hourly/daily/weekly aggregates (e.g., hourly average temperature, daily energy usage)
- Build KPIs from historical data (e.g., daily runtime, peak load, total consumption)
- Reduce dashboard and API load by storing pre-aggregated metrics instead of computing them on the fly
- Create reporting-ready statistics for exports, audits, or automation
- Handle delayed telemetry and automatically correct historical aggregates when late data arrives
- Track near-real-time aggregates using intermediate results (e.g., “current hour average so far”)

<hr>

## Configuration

Define the telemetry keys to aggregate, which metrics to compute, how often aggregation runs, and how results are stored.

### General

{% assign calculatedFieldType = "Select **Time series data aggregation** — this type aggregates historical telemetry of the current entity over configured time intervals." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Arguments

Arguments define which telemetry values are used for aggregation.

> All data is always read from the Current entity.

> This calculated field supports only historical telemetry data.

For each argument:
- **Time series key** — key whose data will be aggregated (for example, temperature, power, voltage)
- **Argument name** — variable name that will be referenced in the metrics

{% assign timeSeriesAggrArgument = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-data-aggregation-argument-1-ce.png
        title: Click "Add argument" and fill in the required fields.
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-data-aggregation-argument-2-ce.png
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesAggrArgument %}

<hr>

### Metrics

Define the function type (aggregation) that will be applied to the data specified in the arguments, and the key under which the aggregated result will be stored.
Each metric is linked to a single argument and uses one aggregation function.

For each metric:
- **Metric name**: the output key name under which the aggregated result will be stored as a time series key.
- **Aggregation**: Average / Min / Max / Sum / Count / Count unique
- Argument name — which argument is aggregated
- Default value — used if the interval contains no data

> You can create multiple metrics using data from the same argument (for example: tempAvg, tempMin, tempMax).

{% assign timeSeriesAggrMetric = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-data-aggregation-metric-1-ce.png
        title: Allows you to shift the start of each interval by a specified offset.
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-data-aggregation-metric-2-ce.png
        title: Allows you to shift the start of each interval by a specified offset.
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesAggrMetric %}

<hr>

### Aggregation interval

Defines how often aggregation runs and how time boundaries are aligned.

Example: **every 1 hour** produces results at **00:00, 01:00, 02:00**, etc.

<b><font size="3">Aggregate interval type</font></b>   
Choose one of: Hour / Day / Week (Mon - Sun) / Week (Sun - Sat) / Month / Quarter / Year / Custom

<b><font size="3">Time zone</font></b>   
Specifies the time zone used to align interval boundaries. This is essential for correct alignment in:
- daily/weekly reports
- business-hour KPIs
- region-specific scheduling

{% assign timeSeriesDataAggregationInterval = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-data-aggregation-interval-1-ce.png
        title: Click "Add argument" and fill in the required fields.
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesDataAggregationInterval %}

<hr>

<b><font size="4">Advanced interval options</font></b>

<b><font size="3">Apply offset to aggregation interval</font></b>   
Shifts the start of each interval by a fixed offset.   
Example: +10 minutes → intervals start at 00:10, 01:10, 02:10, etc.

Useful when telemetry arrives slightly after boundaries or when aligning with external systems.

{% assign advancedIntervalOption1 = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-advanced-interval-1-ce.png
        title: Shifts the start of each interval by a fixed offset.
'
%}

{% include images-gallery.liquid imageCollection=advancedIntervalOption1 %}

<br><b><font size="3">Apply await timeout for delayed telemetry</font></b>   
Defines how long the system waits for telemetry that arrives late after an interval ends.   
If late telemetry belongs to the finished interval, the system recalculates the aggregated result to improve accuracy.

{% assign advancedIntervalOption2 = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-advanced-interval-2-ce.png
        title: Defines how long the system waits for telemetry that arrives late after an interval ends.   
'
%}

{% include images-gallery.liquid imageCollection=advancedIntervalOption2 %}

<br><b><font size="3">Produce intermediate result</font></b>   
Calculates aggregates during the current (not yet finished) interval and stores intermediate values.
- updates occur no more often than once every 5 minutes
- useful for dashboards that need “current interval” values (for example, “current hourly average so far”)

{% assign advancedIntervalOption3 = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-advanced-interval-3-ce.png
        title: Calculates aggregates during the current (not yet finished) interval and stores intermediate values.
'
%}

{% include images-gallery.liquid imageCollection=advancedIntervalOption3 %}

<hr>

### Output

The calculated values are returned as a JSON object whose keys match the configured Metric names, and they are stored as [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} keys.

> The calculation result can be stored **only as a time series**.

For more details about output types and processing strategies, see the [Output](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#output){:target="_blank"} section.

{% assign timeSeriesDataAggrOutput = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-output-1-ce.png
        title: The calculated values are returned as a JSON object whose keys match the configured Metric names, and they are stored as time series keys.
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesDataAggrOutput %}

<hr>

## Example 1: Aggregate temperature

<b><font size="4">Scenario</font></b>   
Multiple temperature sensor devices are installed in **Building A** and continuously publish telemetry values.

<b><font size="4">Goal</font></b>   
Collect the temperature telemetry from all related sensors and calculate:
- the **average temperature** in the building
- the **maximum temperature** in the building

Store both results on **Building A**.

<hr>

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Time series data aggregation" calculated field configuration file.](/docs/user-guide/resources/calculated-fields/time-series-data-aggregation/temperature_aggregation_cf_tsda.json){:target="_blank" download="temperature_aggregation_cf_tsda.json"}.

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
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/time-series-data-aggregation/temperature_aggregation_cf_tsda.json){:target="_blank" download="temperature_aggregation_cf_tsda.json"}.
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