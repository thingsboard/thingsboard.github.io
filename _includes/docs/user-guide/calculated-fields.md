* TOC
{:toc}

{% assign sinceVersion = "4.0.0" %}
{% include templates/since.md %}

**Calculated fields** allow users to perform real-time calculations on telemetry and attributes, enabling seamless data transformation without the need for [rule chains](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview){:target="_blank"} and extra logic blocks.
By defining custom expressions or scripts, users can standardize data, and create new computed metrics dynamically. 
This feature is particularly useful for optimizing data processing, improving analytics.

### Key benefits

- **No additional rule chains needed**: simplifies data transformations without requiring complex rule configurations. 
- **Real-time computations**: triggers calculations as incoming telemetry and attributes are processed by the [save time series](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node){:target="_blank"}, [save attributes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-attributes-node){:target="_blank"}, or [calculated fields](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#calculated-fields-node){:target="_blank"} rule nodes, ensuring up-to-date insights.
- **Optimized performance**: reduces database queries by performing computations as data is received, improving system efficiency. 
- **Cross-entity data merging**: calculate new values by combining data from multiple sources (devices, assets, etc.).
- **Flexible output**: store the results as either [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} or [time series data](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}, depending on the use case.

### Use case examples

- **Combine telemetry from multiple sources**: calculate dew point from Device A&#39;s temperature and Device B&#39;s humidity, etc.
- **Standardize measurement units**: convert temperature readings from Celsius to Fahrenheit or normalize pressure and voltage levels across different sensor models.
- **Energy consumption tracking**: calculate power usage per hour to help optimize energy consumption and cost efficiency.
- **Data smoothing**: compute rolling averages of environmental telemetry like humidity or temperature to reduce fluctuations in sensor readings.
- **Predictive maintenance**: generate efficiency metrics for machines, such as air density calculations, to anticipate maintenance needs before failures occur.
- **Custom business logic**: implement advanced calculations tailored to specific business needs, such as determining occupancy levels based on motion sensor data or adjusting device settings dynamically based on multiple telemetry inputs.

### Configuration levels

Calculated fields can be applied at different levels within the system:
- [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} or [Asset](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"} level – the calculation is applied to a specific device or asset, allowing customized data processing per entity.
- [Device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"} or [Asset profile](/docs/{{docsPrefix}}user-guide/asset-profiles/){:target="_blank"} level: if a calculated field is created at the profile level, it will be executed for each entity associated with that profile.

This flexibility allows users to either define unique calculations per entity or apply standardized logic across a group of similar entities, optimizing data processing and management.

## Create new calculated field

To create a calculated field, follow these steps:

- Select to the Entity or Profile where the calculated field should be applied. 
- In the entity details window, navigate to the "Calculated fields" tab. 
- Click the "plus" icon button and select "Create new calculated field" from the dropdown menu.

The calculated field configuration window will open — let&#39;s proceed with the setup.

{% include images-gallery.html imageCollection="create-new-calculated-field" %}

### General

- **Name**: enter a descriptive title for the calculated field. 
- **Type**: choose between:
  - **Simple**: uses basic mathematical operations and functions. 
  - **Script**: enables complex calculations using the [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} scripting language and can return multiple output values.
- Use the **Debug mode** to track calculated field events, such as state changes and errors, for easier debugging and troubleshooting.

{% assign feature = "components" %}
{% include templates/debug-mode.md %}

{% include images-gallery.html imageCollection="calculated-field-general" %}

### Arguments

To configure calculated field, you need to add at least one argument before proceeding.   
Click the "**Add argument**" button and fill in the required fields:

- **Argument name**: set the reference name for the variable in the expression.
- **Entity type**: set the source of the variable, which can be:
  - **Current entity**: refers to the same entity where the calculated field is applied. 
    If the calculated field is created at the **Asset Profile** or **Device Profile** level, the calculation will be executed for each entity associated with that profile.
  - Another **Device** or **Asset**: references a different device or asset for data processing.
  - **Customer**: retrieves data from the associated customer entity.
  - **Current tenant**: uses data from the tenant entity.

{% include images-gallery.html imageCollection="argument-name" %}

Calculated fields use different types of arguments that determine what data will be used for calculations.

- **Argument type**: define the data source:
  - **Attribute**: uses static or semi-static key-value pairs associated with an entity (e.g., model, max temperature). 
  - **Latest telemetry**: uses the most recent telemetry data from an entity (e.g., temperature, speed, voltage). 
  - **Time series rolling**: uses historical time series data over a specified time window for trend analysis (Available only for [Script](#script-calculated-field) type).

Select the desired argument type:

{% capture calculatedfieldsargumenttype %}
Attribute<small></small>%,%attribute%,%templates/calculated-fields/attribute-argument-type.md%br%
Latest telemetry<small></small>%,%latestTelemetry%,%templates/calculated-fields/latest-telemetry-argument-type.md%br%
Time series rolling<small>only for Script type</small>%,%timeSeriesRolling%,%templates/calculated-fields/time-series-rolling-argument-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=calculatedfieldsargumenttype %}

### Simple calculated field

Simple calculated fields use basic arithmetic operations (+, -, *, /) and standard functions such as `sqrt` (square root), `pow` (power), `abs` (absolute value), etc.

#### Expression

In the "Expression" section, enter the mathematical expression for the calculation using the variables defined in the ["Arguments"](#arguments) section.

{% include images-gallery.html imageCollection="expression-simple-calculated-fields-1" %}

#### Output

The result of the calculation can be saved either as a [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or as an [attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.

In the "Output" section: 
- Specify the variable type: **Time series** or **Attribute**, along with the **attribute scope**.
- Assign a name to the variable that will store the calculation result.
- Optionally, set **Decimals by default** to define how many decimal places the result should be rounded to. If not specified, the result will not be rounded.
- To finish adding the calculated field, click "Add".

{% include images-gallery.html imageCollection="output-simple-1" %}

### Script calculated field

For complex calculations, [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} is used.
It enables advanced operations such as conditional statements, loops, and access to historical data.

#### Script

Define a function that will perform calculations using the variables defined in the ["Arguments"](#arguments) section.

> The variable name that will store the calculation result is defined within the function itself.

<br>

Example: the function below uses the `temperature` and `humidity` arguments to calculate the dew point value.
The calculation result will be stored in the variable `dewPoint`, rounding the value to one decimal places.

```js
// Constants for Magnus formula
var a = 17.625;
var b = 243.04;

var alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100.0);
var dewPoint = toFixed((b * alpha) / (a - alpha), 1);

return {"dewPoint": dewPoint};
```
{: .copy-code}

{% include images-gallery.html imageCollection="expression-script-calculated-fields-1" %}

Script calculated fields require the definition of a `calculate(ctx, ...)` function. This function receives the `ctx` object and arguments declared in the configuration.

```javascript
function calculate(ctx, arg1, arg2, ...): object | object[]
```

- `ctx`: context object that provides access to all configured arguments.
  Context structure:
  `ctx.args`: an object that contains all declared arguments, where each argument can be accessed using `.` notation:
  - **single value arguments** (attribute or latest telemetry):
    - `ctx.args.<arg>.ts`: timestamp of the argument.
    - `ctx.args.<arg>.value`: actual value of the argument.
  - **time series rolling arguments**:
    - `ctx.args.<arg>.timeWindow`: object with `startTs` and `endTs` timestamps.
    - `ctx.args.<arg>.values`: array of `{ ts, value }` records representing timestamped telemetry.
    - `ctx.args.<arg>.<method>`: call built-in aggregation methods such as `mean()`, `sum()`, `min()`, `max()`, `first()`, `last()`, `merge(...)`, and others.
    > For more details, refer to the [time series rolling argument](#arguments).
- `arg1, arg2, ...`: direct access to arguments by name as function parameters. This can be useful for cleaner or more concise expressions. These arguments may be:
  - single value arguments (attribute or latest telemetry arguments): telemetry value may be of type boolean, int64 (long), double, string, or JSON.
  - time series rolling arguments: objects that contain time series data within a defined time window.

Use either `ctx.args.<arg>` or direct parameter access depending on preference and context clarity.

#### Output

The calculated values are returned as a JSON object containing **keys** that represent the computed results, which are then used to store those values in the system.

- Specify the **Output type** for storing the calculation result:
  - [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}: function must return a JSON object or array with or without a timestamp containing the computed value.
  - [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}: function must return a JSON object **without timestamp** information containing the computed value. 
    - Choose the **attribute scope**: **Server attributes**, **Client attributes**, or **Shared attributes**.
- To finish adding the calculated field, click "Add".

{% include images-gallery.html imageCollection="output-script-1" %}

## Result

After clicking the "Add" button, the calculated field will be added to your entity or profile.

{% include images-gallery.html imageCollection="calculated-field-result" %}

Let&#39;s check the debug events by clicking the "Events" icon button. The debugging window displays calculated field arguments and the computed result.

> Please note that ThingsBoard stores all debug events for a calculated field during the first 15 minutes after creation. After that, only error events are saved.

{% include images-gallery.html imageCollection="calculated-field-debug-events-2" %}

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

### Assuming the following time series rolling argument

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

### Usage and result

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

## Merging time series arguments

Time series rolling arguments can be **merged** to align timestamps across multiple datasets.
The merge function combines two or more rolling arguments by taking all timestamps from all arguments and merging the values based on these timestamps.
If value by timestamp does not exist in an argument, it assigns the previous value from that argument; if no previous value exists, it assigns `NaN`.
The result is a new rolling argument that contains a time window and an array of values corresponding to each argument value by each timestamp.

| Method                       | Description                                                                                                               | Returns                                             |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| `merge(other, settings)`     | Merges with another rolling argument. Aligns timestamps and filling missing values with the previous available value.     | Merged object with `timeWindow` and aligned values. |
| `mergeAll(others, settings)` | Merges multiple rolling arguments. Aligns timestamps and filling missing values with the previous available value.        | Merged object with `timeWindow` and aligned values. |

#### Parameters

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

## Export / Import calculated field

You can [export](#export-calculated-field) the calculated field to a JSON file and [import](#import-calculated-field) it into the same or another ThingsBoard instance.

### Export calculated field

To export a calculated field, navigate to the "Calculated fields" tab of the target entity or profile and click the "Export" icon button located in the row of the specific calculated field.

{% include images-gallery.html imageCollection="export-calculated-field" %}

### Import calculated field

You can import a calculated field configuration from a JSON configuration file.
This feature is particularly useful when transferring calculated field configurations between entities or profiles, ensuring consistency and reducing manual setup efforts.

Steps to import:
- Navigate to the "Calculated fields" tab of the target entity or profile.
- Click the "plus" icon button, and select "**Import calculated field**" from the dropdown menu;
- Upload the JSON file containing the calculated field configuration and click "Import";
- Verify the imported configuration: when importing, the edit window will open to allow modifications.
  > **Note**: ensure the imported field is correctly applied and update any necessary parameters.
  > * if you import calculated field on any entity, no error occurs, since the original entity where it was created is not preserved during export.
  > * if the referenced entity is the current entity, no error occurs.
  > * if a referenced entity does not exist in your tenant, it will be highlighted as an error in the argument where it is used.
  > * if the referenced entity is the current tenant and you import it into another tenant, it will automatically adjust to the new tenant without errors.

- Click "Add" to complete the import.

{% include images-gallery.html imageCollection="import-calculated-field-1" %}

## Examples

**Example 1: Dew Point calculation**

Suppose you have a smart device that monitors the current temperature and humidity in real time and sends this data to ThingsBoard. Based on these values, we need to calculate the dew point.

This mathematical expression calculates the dew point using two arguments: temperature and humidity.

```text
(243.04 * (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature)) / (17.625 - (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature))))
```
{: .copy-code}

To implement this, follow these steps:

{% include images-gallery.html imageCollection="example-dew-point-calculated-fields" showListImageTitles="true" %}

<br>

**Example 2: Fahrenheit to Celsius**

Suppose you have a device that sends indoor temperature data in Fahrenheit.   
This function converts the temperature value from Fahrenheit to Celsius, rounds the result to two decimal places, and returns it along with the timestamp of the incoming message:

<br>

**function calculate(ctx, temperatureF) {**
```js
var temperatureC = (temperatureF - 32) / 1.8;
return {
    "ts": ctx.args.temperatureF.ts, 
    "values": {
        "temperatureC": toFixed(temperatureC, 2)
    }
}
```
{: .copy-code}
**}**

<br>
To implement this, follow these steps:

{% include images-gallery.html imageCollection="example-script-calculated-fields-1" showListImageTitles="true" %}

<br>

**Example 3: Air density calculation**

Let&#39;s assume you have an asset called Building A that sends altitude value as an attribute, and a smart device located within it that sends temperature value as telemetry.

Configure a calculated field using these values along with the function provided below. As a result, you&#39;ll obtain a computed air density value, saved as telemetry.

<br>

**function calculate(ctx, altitude, temperature) {**
```js
var avgTemperature = temperature.mean(); // Get average temperature
var temperatureK = (avgTemperature - 32) * (5 / 9) + 273.15; // Convert Fahrenheit to Kelvin

// Estimate air pressure based on altitude
var pressure = 101325 * Math.pow((1 - 2.25577e-5 * altitude), 5.25588);

// Air density formula
var airDensity = pressure / (287.05 * temperatureK);

return {
    "airDensity": toFixed(airDensity, 2)
};

```
{: .copy-code}
**}**

<br>
To implement this, follow these steps:

{% include images-gallery.html imageCollection="example-script-calculated-fields-2" showListImageTitles="true" %}

<br>

**Example 4: Freezer temperature analysis**

This function merges temperature(time series rolling argument) data with the fridge's defrost(time series rolling argument) status.
It then analyzes the merged data to identify instances where the fridge is not in defrost mode, yet the internal air temperature is too high ( > -5° C).

<br>

**function calculate(ctx, temperature, defrost) {**
```js
var merged = temperature.merge(defrost);
var result = [];

foreach(item: merged) {
  if (item.v1 > -5.0 && item.v2 == 0) {
    result.add({
      ts: item.ts,
      values: {
        issue: {
          temperature: item.v1,
          defrostState: false
        }
      }
    });
  }
}

return result;
```
{: .copy-code}
**}**

<br>
To implement this, follow these steps:

{% include images-gallery.html imageCollection="example-script-calculated-fields-3" showListImageTitles="true" %}