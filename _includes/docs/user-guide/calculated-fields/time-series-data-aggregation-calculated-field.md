* TOC
{:toc}

**Time Series Data Aggregation** is a calculated field type designed for periodic aggregation of historical (time series) data of the current entity. 
It automatically computes metrics (**average / min / max / sum / count / count unique**) for the specified telemetry keys over fixed time intervals (hour, day, week, etc.) and stores the result as a new time series.

This type is suitable for scenarios where you need to:
- generate hourly/daily aggregates
- build analytical KPIs based on historical data
- reduce dashboard load (instead of performing aggregations "on the fly")
- create statistics for reports and automation

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## Configuration

Define the data sources, calculation logic, result format, and how it will be further processed in the system.

### General

{% assign calculatedFieldType = "Select the **Time series data aggregation** calculated field type — it aggregates historical time series data of the current entity over the specified time intervals." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Arguments

In this section, you configure the data that will be aggregated.

> All data is always read from the Current entity.

Click **Add argument** and configure the following:

<b><font size="3">Argument settings</font></b>

> For this calculated field type, only one Argument type is available: **Latest telemetry**

- **Time series key** — the telemetry key whose data will be aggregated (for example, temperature, power, voltage).
- **Argument name** — the name of the variable used in the metrics.

Click **Add** to save the argument.

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

The Metrics section defines the metrics that will be calculated for each aggregation interval.
Each metric is linked to a single argument and uses one aggregation function.

<b><font size="3">Metric settings</font></b>   
- **Metric name** — the name under which the result will be stored as a time series key.
- **Aggregation** — the aggregation function: **average / min / max / sum / count / count unique**
- **Argument name** — a reference to the argument being aggregated. 
- **Default value** — the default value used if no data is available in the interval.

Click **Add** to add the metric.

> You can create multiple metrics for the same argument, for example: tempAvg, tempMin, tempMax.

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

This section defines **how often and with what time alignment the aggregation** will be executed.
For example, an every 1 hour interval means the system will aggregate data hourly: 00:00, 01:00, 02:00, and so on.

<b><font size="3">Aggregate interval type</font></b>   
Select the aggregate interval type: **Hour / Day / Week (Mon - Sun) / Week (Sun - Sat) / Month / Quarter / Year / Custom**

<b><font size="3">Time zone</font></b>   
Specifies the time zone used to align interval boundaries.
This is critical for:
- daily/weekly reports,
- business hours,
- alignment with local time.

{% assign timeSeriesDataAggregationInterval = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-data-aggregation-interval-1-ce.png
        title: Click "Add argument" and fill in the required fields.
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesDataAggregationInterval %}

<hr>

#### Advanced interval options

<b><font size="3">Apply offset to aggregation interval</font></b>   
Allows you to shift the start of each interval by a specified offset.

_Example:_ offset +10 minutes → intervals will start at 00:10, 01:10, 02:10, etc.

This is useful when telemetry does not arrive exactly at the hour/day boundary, or when alignment with external systems is required.

{% assign advancedIntervalOption1 = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-advanced-interval-1-ce.png
        title: Allows you to shift the start of each interval by a specified offset.
'
%}

{% include images-gallery.liquid imageCollection=advancedIntervalOption1 %}

<br><b><font size="3">Apply await timeout for delayed telemetry</font></b>   
Defines how long the system should wait for **delayed telemetry** after the interval ends.

If telemetry arrives during this time with a timestamp that falls within the completed interval, the result for that interval will be **recalculated**.

This allows you to:
- improve aggregate accuracy,
- correctly handle buffered/delayed data.

{% assign advancedIntervalOption2 = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-advanced-interval-2-ce.png
        title: Defines how long the system should wait for **delayed telemetry** after the interval ends.
'
%}

{% include images-gallery.liquid imageCollection=advancedIntervalOption2 %}

<br><b><font size="3">Produce intermediate result</font></b>   
Enables calculation of metrics **within an active interval** and generation of an intermediate result.

**Key points:**
- recalculation happens no more frequently than **once every 5 minutes**;
- used for near-real-time dashboard visualization of aggregates.

This is useful when you need to see the "current hourly average" before the hour has fully ended.

{% assign advancedIntervalOption3 = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-advanced-interval-3-ce.png
        title: Enables calculation of metrics **within an active interval** and generation of an intermediate result.
'
%}

{% include images-gallery.liquid imageCollection=advancedIntervalOption3 %}

<hr>

### Output

The calculated values are returned as a JSON object, where the keys correspond to the metric names. These values are then stored in the system as time series keys according to the selected [output strategy](#output-strategy).

<b><font size="3">Output type</font></b>   
The results are always stored as [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} keys (using the metric names).

<b><font size="3">Decimals (optional)</font></b>   
Specifies the number of decimal places for metric results.   
If not set, the value is stored without rounding.

<b><font size="4">Save calculated field</font></b>   
To finish adding the calculated field, click **Add**.

{% assign timeSeriesDataAggrOutput = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-output-1-ce.png
        title: Time series: function must return a JSON object or array with or without a timestamp containing the computed value.<br>To finish adding the calculated field, click **Add**.
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesDataAggrOutput %}

<hr>

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>

### Result

After the calculated field is created, data aggregation will start running immediately after the relevant input data is received.

{% assign timeSeriesDataAggrResult = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-result-1-ce.png
        title: After the calculated field is created, data aggregation will start running immediately after the relevant input data is received.
'
%}

{% include images-gallery.liquid imageCollection=timeSeriesDataAggrResult %}

To view debug events, click **Events**. In the debug window, you can see events with the input data and the calculated result.

> Please note that ThingsBoard stores all debug events for a calculated field during the first 15 minutes after creation. After that, only error events are saved.

{% assign relatedEvents = '
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-events-1-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/time-series-data-aggregation/time-series-agr-events-2-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=relatedEvents %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.