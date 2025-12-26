* TOC
{:toc}

Propagation is used to automatically transfer (copy or transform) data from the current entity to a related entity defined through an entity relation.

This type of calculated field allows you to synchronize attributes and telemetry between entities, ensuring data consistency across different levels of the hierarchy.

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## Configuration

Define the data sources, the propagation path and data, the output type, and the result processing strategy in the system.

### General

{% assign calculatedFieldType = "Select the **Propagation** calculated field type — it automatically transfers (copies or transforms) data to related entities." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Propagation path to related entities

<b><font size="3">Relation direction</font></b>   
Define the path to the entity to which the data will be propagated:
- **Up to parent** — data is propagated to the parent entity.
- **Down to child** — data is propagated to the child entity.

Propagation works only with **direct relationships** — without recursion or multi-level traversal.

<b><font size="3">Relation type</font></b>   
Used to identify the type of relationship between the target entity and the related entities, for example:
- **Contains**
- **Manages**
- or **any custom relation types** defined in ThingsBoard

If multiple entities match the selected relationship direction and relationship type, the data will be propagated to each of them.

{% assign propagationPathToRelatedEntities = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-path-to-related-entities-1-ce.png
        title: Define the path to the entity to which the data will be propagated, as well as the relationship type between the entities.
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

Click **Add argument** and configure the following:

<b><font size="3">Entity type</font></b>   
The data source is the **current entity** to which the calculated field is applied.   
If the field is created at the **Device profile** or **Asset profile** level, the propagation is applied to each entity associated with that profile.

<b><font size="3">Argument type</font></b>   
Defines which entity data will be used for the propagations:
- **Latest telemetry** - the latest telemetry value (for example, *temperature*, *speed*, *voltage*).
- **Attribute** - static or semi-static entity data (for example, *model*, *maxTemperature*).   
  For attributes, you must also specify the scope: **Server**, **Client**, or **Shared**.

<b><font size="3">Time series key / Attribute key</font></b>   
The telemetry or attribute key whose value will be read.

<b><font size="3">Output key</font></b>   
The key under which the propagated data will be stored in the target entity.”

<b><font size="3">Default value</font></b>   
The default value used if the data is unavailable.

After configuring the parameters, click **Add**.

{% assign propagationArgument = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-argument-1-ce.png
        title: Click **Add argument**.<br>The data source will be the current entity to which the calculated field is applied.<br>Specify the **argument type**, **time series key / attribute key**, **output key**, and **default value**, then click **Add**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-argument-2-ce.png
'
%}

{% include images-gallery.liquid imageCollection=propagationArgument %}

<hr>

#### Calculation result

This mode allows you to perform custom calculations using [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} on telemetry and attribute data before sending them to the related entity.

Click **Add argument** and configure the following:

<b><font size="3">Entity type</font></b>   
Specify the data source for the variable, which can be:
- **Сurrent entity** — the entity on which the calculated field is created. If the field is created at the Device Profile or Asset Profile level, the calculation is executed for every entity associated with that profile.
- Another **Device** or **Asset**: references a different device or asset.
- **Customer**: retrieves data from the associated customer entity.
- **Current tenant**: uses data from the tenant entity.
- **Current owner**: refers to the owner of the current entity and uses its data.

{% assign propagationCalculationArgument = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-calculation-argument-1-ce.png
        title: Click **Add argument** and select **entity type**. Then choose **argument type** to continue.
'
%}

{% include images-gallery.liquid imageCollection=propagationCalculationArgument %}

<b><font size="3">Argument type</font></b>   
Defines which entity data will be used for the calculations:
- **Attribute**: uses static or semi-static key-value pairs associated with an entity (e.g., model, max temperature).
- **Latest telemetry**: uses the most recent telemetry data from an entity (e.g., temperature, speed, voltage).
- **Time series rolling**: uses historical time series data over a specified time window for trend analysis.

Select the desired argument type:

{% capture calculatedfieldsargumenttype %}
Attribute<small></small>%,%attribute%,%templates/calculated-fields/propagation/attribute-argument-type.md%br%
Latest telemetry<small></small>%,%latestTelemetry%,%templates/calculated-fields/propagation/latest-telemetry-argument-type.md%br%
Time series rolling<small></small>%,%timeSeriesRolling%,%templates/calculated-fields/propagation/time-series-rolling-argument-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=calculatedfieldsargumenttype %}

<hr>

<b><font size="4">Script</font></b>

Define the function that performs the calculation using the data specified in the [arguments](#calculation-result).   
After the calculation is executed, the resulting value will be propagated to the target entity.

> The variable name that stores the result must be defined directly inside the function body.

**Example.** The provided script converts temperature readings (<span class="code-light">temperature</span>) from Fahrenheit to Celsius.   
The calculation result is stored in the <span class="code-light">temperatureC</span> variable and propagated to the related entity (entities).

```js
return {
    "temperatureC": (temperature - 32) / 1.8
};
```

{% assign scriptFunction = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-script-1-ce.png
        title: Define the function that performs the calculation using the data specified in the **arguments**. The variable name that will store the calculation result is defined within the function itself.
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
Further processing and data persistence are carried out according to the selected [output strategy](#output-strategy).

<b><font size="3">Output type</font></b>   
Select how the result should be stored:
- [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}. the function returns a JSON object or array, **with or without a timestamp**, containing the calculated value.
  To synchronize the result with the timestamp of the input data, use <span class="code-light">ts: ctx.latestTs</span> and assign it directly to the <span class="code-light">ts</span> field in the returned object.
- [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.the function returns a JSON object **without timestamp** information containing the computed value.  
  Also specify the scope: **Server**, **Client**, or **Shared** attributes.

<b><font size="4">Save calculated field</font></b>   
To finish adding the calculated field, click **Add**.

{% assign propagationOutput = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-output-1-ce.png
        title: Time series: function must return a JSON object or array with or without a timestamp containing the computed value.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-output-2-ce.png
        title: Attribute: function must return a JSON object without timestamp information containing the computed value.
'
%}

{% include images-gallery.liquid imageCollection=propagationOutput %}

<hr>

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>

### Result

After the calculated field is created, data propagation starts automatically and is performed immediately after the relevant input data is received.

{% assign propagationResult = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-result-1-ce.png
        title: After the calculated field is created, data propagation starts automatically and is performed immediately after the relevant input data is received.
'
%}

{% include images-gallery.liquid imageCollection=propagationResult %}

To view debug events, click **Events**. In the debug window, you can see events with the input data and the calculated result.

> Please note that ThingsBoard stores all debug events for a calculated field during the first 15 minutes after creation. After that, only error events are saved.

{% assign propagationEvent = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-events-1-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-events-2-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=propagationEvent %}

<hr>

## Example

### Example 1: Propagate device battery level to the parent Asset

<b><font size="4">Scenario</font></b>

The **Tracker** device sends the battery charge level (**batteryLevel**) to ThingsBoard.
It is linked to the **Track 1** asset via the **Contains** relation.

You need to automatically propagate the batteryLevel value to the asset level and store it as an attribute named **deviceBattery**.

{% assign examplePropagationPreparation11 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-11-ce.png
        title: The **Tracker** device sends the **battery charge level** to ThingsBoard.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-12-ce.png
        title: The **Tracker** device linked to the **Track 1** asset via the **Contains** relation.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagationPreparation11 %}

<hr>

<b><font size="4">Configuration</font></b>

Create a calculated field at the **device level** with the following parameters:

<b><font size="3">General</font></b>
- **Name:** Battery level propagation
- **Type:** Propagation

<b><font size="3">Propagation path to related entities</font></b>
- **Relation direction:** Up to parent
- **Relation type:** Contains

<b><font size="3">Data to propagate</font></b>
- **Mode:** Arguments only
- **Add argument:**
  - **Entity type:** Current entity
  - **Argument type:** Latest telemetry
  - **Time series key:** batteryLevel
  - **Output key:** deviceBattery
  - **Default value:** 0

<b><font size="3">Output</font></b>

- **Output type:** Attribute
- **Attribute scope:** Server attributes
- **Strategy**: Process right away

Click **Add** to save the calculated field.

{% assign examplePropagation11 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-13-ce.png
        title: **Create a new calculated field** for the device.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-14-ce.png
        title: Name it **Battery level propagation**. Select the **Propagation** type.<br> **Propagation path to related entities:** **Relation direction**: Up to parent; **Relation type**: Contains.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-15-ce.png
        title: **Data to propagate:** Arguments only<br>Add an argument:<br>- **Entity:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** batteryLevel<br>- **Output key:** deviceBattery<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-16-ce.png
        title: **Output:** **Output type:** Attribute; **Attribute scope:** Server attributes.<br> **Strategy:** Process right away<br>Click **Add** to save the calculated field.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-17-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation11 %}

<hr>

<b><font size="4">Result</font></b>

The **deviceBattery** attribute will be propagated to and stored on the **Track 1** asset.

```json
{
  "deviceBattery": 78
}
```

{% include images-gallery.html imageCollection="example-copy-device-battery-level-to-asset-3" showListImageTitles="true" %}

{% assign examplePropagation12 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-18-ce.png
        title: The **deviceBattery** attribute will be propagated to and stored on the **Track 1** asset.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation12 %}

<hr>

### Example 2: Dew point calculation and propagation to a parent Asset

<b><font size="4">Scenario</font></b>

The **Smart Device** sends **temperature** and **humidity** values and is linked to the **Greenhouse** asset via the **Contains** relation.   
You need to calculate the **dew point**, **propagate the result to the related asset**, and store it as an **attribute**.

{% assign examplePropagation21 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-21-ce.png
        title: The **Smart Device** sends **temperature** and **humidity** values to ThingsBoard.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-22-ce.png
        title: The **Smart Device** linked to the **Greenhouse** asset via the **Contains** relation.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation21 %}

<hr>

<b><font size="4">Configuration</font></b>

Create a calculated field at the **device level**:

<b><font size="3">General</font></b>
- **Name:** Dew point propagation
- **Type:** Propagation

<b><font size="3">Propagation path to related entities</font></b>
- **Relation direction:** Up to parent
- **Relation type:** Contains

<b><font size="3">Data to propagate</font></b>
- **Mode:** Calculation result

**Add two arguments:**

**Argument 1**
- **Entity type:** Current entity
- **Argument type:** Latest telemetry
- **Time series key:** temperature
- **Argument name:** temperature

**Argument 2**
- **Entity type:** Current entity
- **Argument type:** Latest telemetry
- **Time series key:** humidity
- **Argument name:** humidity

<b><font size="3">Script</font></b>

Insert the dew point calculation function into the **Script** field:

**function calculate(ctx, temperatureF) {**
```js
// Constants for Magnus formula
var a = 17.625;
var b = 243.04;

var alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100.0);
var dewPoint = toFixed((b * alpha) / (a - alpha), 1);

return {"dewPoint": dewPoint};
```
{: .copy-code}
**}**

<b><font size="3">Output</font></b>

- **Output type:** Time series
- **Strategy**: Process right away

Click **Add** to save the calculated field.

{% assign examplePropagation22 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-23-ce.png
        title: **Create a new calculated field** for the device.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-24-ce.png
        title: Name it **Dew point propagation**. Select the **Propagation** type.<br> **Propagation path to related entities:** **Relation direction**: Up to parent; **Relation type**: Contains.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-25-ce.png
        title: Add first argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** humidity<br>- **Output key:** humidity<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-26-ce.png
        title: Add a second argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** temperature<br>- **Output key:** temperature<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-27-ce.png
        title: Insert the **dew point** calculation function into the **Script** field.<br>**Output type:** Time series<br>**Strategy:** Process right away.<br>Click **Add** to save the calculated field.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-28-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation22 %}

<hr>

<b><font size="4">Result</font></b>

On the related asset, a new telemetry key **dewPoint** will appear in the **Latest telemetry** tab.

{% assign examplePropagation23 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-29-ce.png
        title: On the related asset, a new telemetry key **dewPoint** will appear in the **Latest telemetry** tab.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation23 %}

<hr>

### Example 3: Propagate HVAC mode to multiple child devices

<b><font size="4">Scenario</font></b>

The **Building A** asset has multiple child HVAC devices linked via the **Manages** relation.
The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).

You need to automatically propagate this value to all child HVAC devices.

{% assign examplePropagation31 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-31-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-32-ce.png
        title: The **Building A** asset has multiple child HVAC devices linked via the **Manages** relation.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation31 %}

<hr>

<b><font size="4">Configuration</font></b>

Create a calculated field **at the Building A asset level**:

<b><font size="3">General</font></b>
- **Name:** Cooling propagation
- **Type:** Propagation

<b><font size="3">Propagation path to related entities</font></b>
- **Relation direction:** Down to child
- **Relation type:** Manages

<b><font size="3">Data to propagate</font></b>
- **Mode:** Arguments only

**Add two arguments:**

**Argument 1**
- **Entity type:** Current entity
- **Argument type:** Attribute
- **Time series key:** hvacMode
- **Argument name:** hvacMode
- **Default value:** `off`

<b><font size="3">Output</font></b>

- **Output type:** Attribute
- **Strategy**: Process right away

Click **Add** to save the calculated field.

{% assign examplePropagation32 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-33-ce.png
        title: **Create a new calculated field** for the Building A asset.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-34-ce.png
        title: Name it **Dew point propagation**. Select the **Propagation** type.<br> **Propagation path to related entities:** **Relation direction**: Down to child; **Relation type**: Manages.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-35-ce.png
        title: Add an argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Attribute<br>- **Attribute key:** hvacMode<br>- **Output key:** hvacMode<br>- **Default mode:** off<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-36-ce.png
        title: **Output type:** Attribute<br>**Strategy:** Process right away.<br>Click **Add** to save the calculated field.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-37-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation32 %}

<hr>

<b><font size="4">Result</font></b>

**Each child HVAC device** will receive the **hvacMode** attribute with the value **cooling**.

{% assign examplePropagation33 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-38-ce.png
        title: **Each child HVAC device** will receive the **hvacMode** attribute with the value **cooling**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-39-ce.png
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-example-39-1-ce.png
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation33 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.