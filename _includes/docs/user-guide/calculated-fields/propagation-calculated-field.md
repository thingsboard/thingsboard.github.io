* TOC
{:toc}

Propagation is used to automatically transfer (copy or transform) data from the current entity to a related entity defined through an entity relation.

This type of calculated field allows you to synchronize attributes and telemetry between entities, ensuring data consistency across different levels of the hierarchy.

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## Calculated field configuration

Define the data sources, calculation logic, result format, and how it will be further processed in the system.

### General

{% assign calculatedFieldType = "Select the **Propagation** calculated field type — it automatically transfers (copies or transforms) data to related entities." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Propagation path to related entities

Defines a **single-level** path to the target entity that will receive the data.
Propagation works only with **direct relationships** — without recursion or multi-level traversal.

<b><font size="3">Relation direction</font></b>   
Specifies the direction for locating the target entity:
- **Up to parent** — data is propagated to the parent entity.
- **Down to child** — data is propagated to the child entity

<b><font size="3">Relation type</font></b>   
The relation type used to identify the target entity, for example:
- **Contains**
- **Manages**
- or **any custom relation types** defined in ThingsBoard

If multiple entities match the selected direction and relation type, Propagation will send the defined data to **each** of them.

{% assign propagationPathToRelatedEntities = '
    ===
        image: /images/user-guide/calculated-fields/propagation-path-to-related-entities-1-ce.png
        title: Time series: function must return a JSON object or array with or without a timestamp containing the computed value.
'
%}

{% include images-gallery.liquid imageCollection=propagationPathToRelatedEntities %}

<hr>

### Data to propagate

Defines which data will be sent to the related entity — either directly (as arguments) or as a computed value.

Two modes are available:
- [Arguments only](#arguments-only) — works as direct data copying to the related entity, with the ability to rename the key before saving.
- [Calculation result](#calculation-result) — allows you to compute complex values before sending them to the related entity.

#### Arguments only

In this mode, propagation works as **direct data copying** with the option to rename the key before saving.   
The value is delivered to the target entity under the key specified in the **Output key** field.

Click **Add argument** and configure the following parameters:

<b><font size="3">Entity type</font></b>   
The data source is the current entity to which the calculated field is applied.   
If the field is created at the **Device profile** or **Asset profile** level, the calculation is performed for each entity associated with that profile.

<b><font size="3">Argument type</font></b>   
Defines which entity data will be used for the propagations:
- **Latest telemetry** - the latest telemetry value (for example, *temperature*, *speed*, *voltage*).
- **Attribute** - static or semi-static entity data (for example, *model*, *maxTemperature*).   
  For attributes, you must also specify the scope: **Server**, **Client**, or **Shared**.

<b><font size="3">Time series key / Attribute key</font></b>   
The telemetry or attribute key whose value will be read.

<b><font size="3">Output key</font></b>   
The key under which the data will be saved in the target entity.

<b><font size="3">Default value</font></b>   
The default value used if the data is unavailable.

After configuring the parameters, click **Add**.

{% assign propagationArgument = '
    ===
        image: /images/user-guide/calculated-fields/propagation-argument-1-ce.png
        title: Click **Add argument**. The data source will be the current entity to which the calculated field is applied.
    ===
        image: /images/user-guide/calculated-fields/propagation-argument-2-ce.png
        title: Specify the **argument type**, **time series key / attribute key**, **output key**, and **default value**, then click **Add**.
    ===
        image: /images/user-guide/calculated-fields/propagation-argument-3-ce.png
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=propagationArgument %}

<hr>

#### Calculation result

This mode allows you to compute complex values before sending them to a related entity.   
It supports mathematical formulas, functions, logical expressions, and working with historical data.

**Add argument — configuration fields:**
- **Entity type**: specify the data source for the variable, which can be:
    - **Сurrent entity** — the entity on which the calculated field is created. If the field is created at the Device Profile or Asset Profile level, the calculation is executed for every entity associated with that profile.
    - Another **Device** or **Asset**: references a different device or asset.
    - **Customer**: retrieves data from the associated customer entity.
    - **Current tenant**: uses data from the tenant entity.
      {% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
    - **Current owner**: refers to the owner of the current entity and uses its data.
      {% endif %}
- **Argument type**: defines which entity data will be used for the calculations:
    - **Attribute**: uses static or semi-static key-value pairs associated with an entity (e.g., model, max temperature).
    - **Latest telemetry**: uses the most recent telemetry data from an entity (e.g., temperature, speed, voltage).
    - **Time series rolling**: uses historical time series data over a specified time window for trend analysis (Available only for [Script](#script-calculated-field) type).

Select the desired argument type:

{% capture calculatedfieldsargumenttype %}
Attribute<small></small>%,%attribute%,%templates/calculated-fields/attribute-argument-type.md%br%
Latest telemetry<small></small>%,%latestTelemetry%,%templates/calculated-fields/latest-telemetry-argument-type.md%br%
Time series rolling<small></small>%,%timeSeriesRolling%,%templates/calculated-fields/time-series-rolling-argument-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=calculatedfieldsargumenttype %}

<hr>

<b><font size="3">Script</font></b>

Define the function that will perform the calculations using the arguments specified in the ["Data to propagate"](#data-to-propagate) section.
After the computation is completed, the resulting value will be sent to the target entity.

{% capture difference %}
The variable name that stores the result must be defined directly inside the function body.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Example.** The provided script converts temperature readings (<span class="code-light">temperature</span>) from Fahrenheit to Celsius.   
The calculation result is stored in the <span class="code-light">temperatureC</span> variable and propagated to the related entity (entities).

```js
return {
    "temperatureC": (temperature - 32) / 1.8
};
```

{% assign scriptFunction = '
    ===
        image: /images/user-guide/calculated-fields/script-propagation-calculated-fields-1-ce.png
        title: Define a function that will perform calculations using the variables defined in the "Arguments" section. The variable name that will store the calculation result is defined within the function itself.
'
%}

{% include images-gallery.liquid imageCollection=scriptFunction %}




<hr>

<b><font size="4">Script reference</font></b>

Script calculated fields require the definition of a `calculate(ctx, ...)` function. This function receives the `ctx` object and arguments declared in the configuration.

```javascript
function calculate(ctx, arg1, arg2, ...): object | object[]
```

- `ctx`: context object that stores `latestTs` and provides access to all configured arguments.

  Context structure:
    - `ctx.latestTs`: the most recent timestamp (in milliseconds) from the arguments telemetry. Useful for aligning the result with the incoming data time instead of the server time.
    - `ctx.args`: an object that contains all declared arguments, where each argument can be accessed using `.` notation:
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

<hr>

### Output

The calculation result is returned as a JSON object, where each key represents a computed value.   
Further processing and data persistence are carried out according to the selected **output strategy**.

<b><font size="3">Output type</font></b>   
Select how the result should be stored:
- [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}. The function must return a JSON object or an array of objects containing the computed value — with or without an explicit <span class="code-light">ts</span> field.   
  To synchronize the result with the timestamp of the input data, use <span class="code-light">ts: ctx.latestTs</span> and assign it directly to the <span class="code-light">ts</span> field in the returned object.
- [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.The function must return a JSON object with the computed value **without a timestamp**.
  Select the attribute storage scope: **Server**, **Client**, or **Shared attributes**.

{% assign propagationOutput = '
    ===
        image: /images/user-guide/calculated-fields/propagation-output-1-ce.png
        title: Time series: function must return a JSON object or array with or without a timestamp containing the computed value.
    ===
        image: /images/user-guide/calculated-fields/propagation-output-2-ce.png
        title: Attribute: function must return a JSON object without timestamp information containing the computed value.
'
%}

{% include images-gallery.liquid imageCollection=propagationOutput %}

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>

### Result

After clicking the **Add** button, the calculated field will be added to your entity or profile.

{% assign propagationResult = '
    ===
        image: /images/user-guide/calculated-fields/propagation-result-1-ce.png
        title: After clicking the **Add** button, the calculated field will be added to your entity or profile.
'
%}

{% include images-gallery.liquid imageCollection=propagationResult %}

Let&#39;s check the debug events by clicking the **Events** icon button. The debugging window displays calculated field arguments and the computed result.

> Please note that ThingsBoard stores all debug events for a calculated field during the first 15 minutes after creation. After that, only error events are saved.

{% assign propagationEvent = '
    ===
        image: /images/user-guide/calculated-fields/propagation-events-1-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/propagation-events-2-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=propagationEvent %}

<hr>

## Example

### Example 1: Copy device battery level to parent Asset

<b><font size="4">Use case</font></b>

The Tracker device sends its battery level (for example, <span class="code-light">batteryLevel = 78</span>).   
This device is linked to the **Vehicle** asset through a **Contains** relation.   
When the battery level changes, you need to automatically propagate the <span class="code-light">batteryLevel</span> value to the **Vehicle** asset and store it as an attribute called **deviceBattery**.

{% include images-gallery.html imageCollection="example-copy-device-battery-level-to-asset-1" showListImageTitles="true" %}

<b><font size="4">Configuration</font></b>

Create a calculated field on the device with the following configuration:

<b><font size="3">General</font></b>
- **Name:** Battery propagation
- **Type:** Propagation

<b><font size="3">Propagation path to related entities</font></b>
- **Relation direction:** **Up to parent**
- **Relation type:** **Contains**

<b><font size="3">Data to propagate</font></b>
- **Mode:** **Arguments only**
- **Add argument:**
    - **Entity type:** Current entity
    - **Argument type:** Latest telemetry
    - **Time series key:** `batteryLevel`
    - **Output key:** `deviceBattery`
    - **Default value:** `0`

<b><font size="3">Output</font></b>
- **Type:** Attribute
- **Attribute scope:** Server attributes
- **Strategy:** Process right away
    - **Save to database**
    - **Do updates only if the value changes**

{% include images-gallery.html imageCollection="example-copy-device-battery-level-to-asset-2" showListImageTitles="true" %}

Result

The following attribute will be stored on the Vehicle:

```json
{
  "deviceBattery": 78
}
```

{% include images-gallery.html imageCollection="example-copy-device-battery-level-to-asset-3" showListImageTitles="true" %}

<hr>

### Example 2:


The function below uses the <span class="code-light">temperature</span> and <span class="code-light">humidity</span> arguments to calculate the dew point value.   
The calculation result will be stored in the variable <span class="code-light">dewPoint</span>, rounding the value to one decimal places.

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

<hr>

### Example 3: Propagate boolean alert flag to multiple child devices

The **Building A** asset has several child HVAC devices.   
The devices **HVAC 1**, **HVAC 2**, and **HVAC 3** are linked to **Building A** through a **Manages** relation.   
The **hvacMode** attribute on the Building A level defines the HVAC operating mode (e.g., <span class="code-light">cooling</span>, <span class="code-light">heating</span>, <span class="code-light">off</span>).   
The goal is to automatically propagate the <span class="code-light">hvacMode</span> value to all connected HVAC devices so they operate in the correct mode, such as **cooling**.

Configuration

Create a new **Calculated field** on the **Building A** asset with the following settings:

<b><font size="3">General</font></b>
- **Name:** Cooling propagation
- **Type:** Propagation

<b><font size="3">Propagation path to related entities</font></b>
- **Relation direction:** **Down to child**
- **Relation type:** **Manages**

<b><font size="3">Data to propagate</font></b>
- **Mode:** **Arguments only**

**Add argument:**
- **Entity type:** Current entity
- **Argument type:** Attribute
- **Attribute key:** `hvacMode`
- **Output key:** `hvacMode`
- **Default value:** `"off"`

<b><font size="3">Output</font></b>
- **Type:** Attribute

<b><font size="3">Result</font></b>

Each child HVAC device will receive the following attribute:

```json
{
  "hvacMode": "cooling"
}
```

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.