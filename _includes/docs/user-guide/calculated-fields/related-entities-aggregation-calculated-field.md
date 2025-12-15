* TOC
{:toc}

**Related entities aggregation** — this type of calculated field performs data aggregation from related entities (devices, assets, customers, or the tenant) at a single relation level.

Aggregation is executed only across **direct (single-level) relations**, ensuring precise and predictable selection of entities for processing.

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## General

{% assign calculatedFieldType = "Select the **Related entities aggregation** calculated field type — it aggregates data from related entities (min, max, average, count, etc.)." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

## Aggregation path to related entities

Defines a **single-level** path to the entities from which data will be retrieved for aggregation.   
Only **direct relations** are supported between:

**Device ↔ Asset ↔ Customer ↔ Tenant**

**Relation direction**

Specifies the direction for locating the target entity:
- **Up to parent** — data is propagated to the parent entity.
- **Down to child** — data is propagated to the child entity

**Relation type**

The relation type used to identify the target entity, for example:
- **Contains**
- **Manages**
- or **any custom relation types** defined in ThingsBoard

### Arguments

Arguments define which data will be retrieved from the related entities before performing aggregation.

Click **Add argument** and configure the following:

**Argument settings**   
(Data is fetched from related entities)

- **Argument type**: defines which entity data will be used for the calculations:
    - **Latest telemetry** — the most recent telemetry value of the entity (for example, *temperature*, *speed*, *voltage*).
    - **Attribute** — static or semi-static data associated with the entity (for example, *model*, *maxTemperature*).   
      For attributes, also specify the scope: **Server**, **Client**, or **Shared attributes**.
- **Time series key / Attribute key**   
  The key of the data that will be read from the related entity.
- **Argument name**   
  A logical variable name used in Metrics and Filter expressions.
- **Default value**   
  A fallback value to use if the data source is unavailable.
- Finally, click **Add** button.

{% include content-toggle.liquid content-toggle-id="simplecalculatedfieldsargumenttype" toggle-spec=simplecalculatedfieldsargumenttype %}

### Metrics

Metrics define which aggregated values should be calculated based on the collected arguments.

Click **Add metric** and configure the following:

**Metric settings**
- **Metric name**   
  The key under which the aggregated result will be stored.
- **Aggregation**   
  Available aggregation functions:
    - **Average**
    - **Minimum**
    - **Maximum**
    - **Sum**
    - **Count**
    - **Count unique**
- **Filter (on/off)**   
  Allows filtering entities before aggregation.   
  A filter is a function that must return a boolean value (<span class="code-light">true/false</span>) and may use any of the defined arguments.
  Example:

```js
return temperature > 10 && status == "active";
```

- **Value source**
  Choose which value should be used in the metric:
    - **Key** — use the argument value directly
    - **Function** — use the result of a function (e.g., in Script-based aggregations)
- **Argument name**
  Select the argument that will serve as the data source for this metric.

**Deduplication interval**
This parameter defines the minimum time interval between two identical results.   
If the result does not change within this interval, the system will not generate an update.

### Output

The calculated values are returned as a JSON object containing **keys** that represent the computed results, which are then used to store those values in the system.   
Further processing and persistence depend on the selected [Output strategy](#output-strategy-1).

- **Output type**   
  Choose how the aggregated result will be stored:
    - [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}: function must return a JSON object or array with or without a timestamp containing the computed value.
  > To align the result with the latest timestamp of the input arguments telemetry, use `ctx.latestTs` and assign it explicitly to the `ts` field in the returned object.
    - [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}: function must return a JSON object **without timestamp** information containing the computed value.   
      For attributes, also specify the scope: **Server**, **Client**, or **Shared attributes**.
- **Decimals (optional)**   
  The number of decimal places to round the result to. If left empty, no rounding is applied.
- **Output strategy (optional)**   
  Select how the result should be processed. By default, the value is processed and saved immediately.   
  Learn more about the output strategy in the section [below](#output-strategy).
- To finish adding the calculated field, click **Add**.

> **[Only for Time series]**<br>
"**Use latest timestamp**" option — when enabled, the calculated value will be saved using the latest timestamp from the arguments, rather than the server time.

{% include images-gallery.html imageCollection="output-script-1" %}

<hr>

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>