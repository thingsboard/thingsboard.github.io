* TOC
{:toc}

For complex calculations, [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} (ThingsBoard Expression Language) is used.   
Script calculated fields support conditional logic, loops, working with historical data, and can return multiple results in a single execution.

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## Configuration

Define the data sources, calculation logic, result format, and how it will be further processed in the system.

### General

{% assign calculatedFieldType = "Select **Script** — this type allows you to perform complex calculations using **TBEL** and return one or more results." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Arguments

To configure calculated field, you must add at least one argument.

Click **Add argument** and configure the following:

<b><font size="3">Entity type</font></b>   
Defines the data source that will be used in calculations:
- **Current entity**: refers to the same entity where the calculated field is applied. 
  If the calculated field is created at the **Asset Profile** or **Device Profile** level, the calculation will be executed for each entity associated with that profile.
- Another **Device** or **Asset**: references a different device or asset for data processing.
- **Customer**: retrieves data from the associated customer entity.
- **Current tenant**: uses data from the tenant entity.
- **Current owner**: refers to the owner of the current entity and uses its data.

{% assign simpleExpression = '
    ===
        image: /images/user-guide/calculated-fields/script-argument-1-ce.png
        title: Click "Add argument" and fill in the required fields.
'
%}

{% include images-gallery.liquid imageCollection=simpleExpression %}

{% include images-gallery.html imageCollection="argument-name" %}

<b><font size="3">Argument type</font></b>   
Defines the data type:
- **Attribute**: uses static or semi-static key-value pairs associated with an entity (e.g., model, max temperature).
- **Latest telemetry**: uses the most recent telemetry data from an entity (e.g., temperature, speed, voltage).
- **Time series rolling**: uses historical time series data over a specified time window for trend analysis.

Select the desired argument type:

{% capture calculatedfieldsargumenttype %}
Attribute<small></small>%,%attribute%,%templates/calculated-fields/script/attribute-argument-type.md%br%
Latest telemetry<small></small>%,%latestTelemetry%,%templates/calculated-fields/script/latest-telemetry-argument-type.md%br%
Time series rolling<small></small>%,%timeSeriesRolling%,%templates/calculated-fields/script/time-series-rolling-argument-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=calculatedfieldsargumenttype %}

<hr>

### Script

In this section, the calculation function is defined using the variables specified in the ["Arguments"](#arguments) section.

> The variable name that will store the calculation result is defined within the function itself.

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

{% assign scriptFunction = '
    ===
        image: /images/user-guide/calculated-fields/script-calculated-fields-1-ce.png
        title: Define a function that will perform calculations using the variables defined in the "Arguments" section. The variable name that will store the calculation result is defined within the function itself.
'
%}

{% include images-gallery.liquid imageCollection=scriptFunction %}

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

The result is returned as a JSON object and processed according to the selected strategy.

<b><font size="3">Output type</font></b>   
Select how the result should be stored:
- [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}: the function returns a JSON object or array, **with or without a timestamp**, containing the calculated value.
  > To align the result with the latest timestamp of the input arguments telemetry, use `ctx.latestTs` and assign it explicitly to the `ts` field in the returned object.
- [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}: the function returns a JSON object **without timestamp** information containing the computed value.   
  For attributes, also specify the scope: **Server**, **Client**, or **Shared attributes**.

{% assign scriptOutput = '
    ===
        image: /images/user-guide/calculated-fields/script-output-1-ce.png
        title: Time series: function must return a JSON object or array with or without a timestamp containing the computed value.
    ===
        image: /images/user-guide/calculated-fields/script-output-2-ce.png
        title: Attribute: function must return a JSON object without timestamp information containing the computed value.
'
%}

{% include images-gallery.liquid imageCollection=scriptOutput %}

<hr>

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>

### Result

After clicking the **Add** button, the calculated field will be added to your entity or profile.

{% assign scriptResult = '
    ===
        image: /images/user-guide/calculated-fields/script-result-1-ce.png
        title: After clicking the **Add** button, the calculated field will be added to your entity or profile.
'
%}

{% include images-gallery.liquid imageCollection=scriptResult %}

Let&#39;s check the debug events by clicking the **Events** icon button. The debugging window displays calculated field arguments and the computed result.

> Please note that ThingsBoard stores all debug events for a calculated field during the first 15 minutes after creation. After that, only error events are saved.

{% assign scriptEvent = '
    ===
        image: /images/user-guide/calculated-fields/script-events-1-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/script-events-2-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=scriptEvent %}

<hr>

## Examples

### Example 1: Fahrenheit to Celsius

<b><font size="4">Scenario</font></b>

The device sends the room temperature in degrees Fahrenheit (**temperature**).   
You need to convert the value to degrees Celsius, round the result to two decimal places, and store it as telemetry with the same timestamp.

<hr>

<b><font size="4">Configuration steps</font></b>

Create a calculated field at the device level with the following parameters:

<b><font size="3">General</font></b>
- **Name:** C to F
- **Type:** Script

<b><font size="3">Arguments</font></b>

Add an argument:
- **Entity:** Current entity
- **Argument type:** Latest telemetry
- **Time series key:** temperature
- **Argument name:** temperature

<b><font size="3">Script</font></b>

Insert the calculation function into the **Script** field:

**function calculate(ctx, temperatureF) {**
```js
var temperatureC = (temperature - 32) / 1.8;
return {
    "ts": ctx.latestTs, 
    "values": {
        "temperatureC": toFixed(temperatureC, 2)
    }
}
```
{: .copy-code}
**}**

<b><font size="3">Output</font></b>

- **Output type:** Time series
- **Strategy**: Process right away

Click **Add** to save the calculated field.

{% assign exampleScript11 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-11-ce.png
        title: **Create a new calculated field** for the device and select the **Script** type.
    ===
        image: /images/user-guide/calculated-fields/script-example-12-ce.png
        title: Add an argument:<br>- **Entity:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** <i>temperature</i>.<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/script-example-13-ce.png
        title: Paste the calculation function into the **Script** field.<br>- In the **Output** section, select **type:** Time series.<br>- Click **Add** to save the calculated field. The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript11 %}

<hr>

<b><font size="4">Result</font></b>

In the **Events** window, you will see:
- the input message with **temperature**,
- the output message with **temperatureC**.

Both messages will have the same timestamp.

{% assign exampleScript12 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-14-ce.png
        title: Open the **Events** pop-up window of the calculated field.
    ===
        image: /images/user-guide/calculated-fields/script-example-15-ce.png
        title: You will see the input message with **temperature** and the output message with **temperatureC**. Both messages will have the same timestamp.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript12 %}

In the **Latest telemetry** tab, the **temperatureC** key will appear.

{% assign exampleScript13 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-16-ce.png
        title: In the **Latest telemetry** tab, the following key will appear: **temperatureC** — the result of the calculation, which displays the temperature in degrees Celsius.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript13 %}

<hr>

### Example 2: Air density calculation

<b><font size="4">Scenario</font></b>

The **Building A** asset has two associated devices:
- **Smart Device** — sends the temperature value as telemetry (**temperature**).
- **Altimeter** — sends the altitude value as an attribute (**altitude**).

You need to calculate the **air density** based on these data and store the result as telemetry.

<b><font size="4">Prerequisites</font></b>

{% assign examplePrepareScript2 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-prepare-1-ce.png
        title: An asset: **Building A**.
    ===
        image: /images/user-guide/calculated-fields/script-example-prepare-2-ce.png
        title: A device: **Smart Device** (sends **temperature** telemetry)
    ===
        image: /images/user-guide/calculated-fields/script-example-prepare-3-ce.png
        title: A device: **Altimeter** (sends **altitude** as an attribute)
'
%}

{% include images-gallery.liquid imageCollection=examplePrepareScript2 %}

<hr>

<b><font size="4">Configuration steps</font></b>

Create a calculated field at the asset level with the following parameters:

<b><font size="3">General</font></b>
- **Name:** Air density calculation
- **Type:** Script

<b><font size="3">Arguments</font></b>

Add two arguments:

**Argument 1**
- **Entity type:** Device
- **Device name:** Smart Device
- **Argument type:** Time series rolling
- **Time series key:** temperature
- **Argument name:** temperature
- **Time window:** 15 minutes
- **Max value:** 100

**Argument 2**
- **Entity type:** Device
- **Device name:** Altimeter
- **Argument type:** Attribute
- **Attribute scope:** Shared attribute
- **Attribute key:** altitude
- **Argument name:** altitude

<b><font size="3">Script</font></b>

Paste the calculation function into the **Script** field:

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

<b><font size="3">Output</font></b>

- **Output type:** Time series
- **Strategy**: Process right away

Click **Add** to save the calculated field.

{% assign exampleScript21 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-21-ce.png
        title: **Create a new calculated field** for the asset **Building A** and select the **Script** type.
    ===
        image: /images/user-guide/calculated-fields/script-example-22-ce.png
        title: Add a first argument:<br>- **Entity:** Smart Device<br>- **Argument type:** Time series rolling<br>- **Time series key:** <i>temperature</i>.<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/script-example-23-ce.png
        title: Add a second argument:<br>- **Entity:** Altimeter<br>- **Argument type:** Attribute<br>- **Attribute key:** <i>altitude</i>.<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/script-example-24-ce.png
        title: Paste the calculation function into the **Script** field.<br>- In the **Output** section, select **type:** <i>Time series</i>.<br>- Click **Add** to save the calculated field.
    ===
        image: /images/user-guide/calculated-fields/script-example-25-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript21 %}

<hr>

<b><font size="4">Result</font></b>

In the **Events** window, the arguments and the calculation result are displayed.

{% assign exampleScript22 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-26-ce.png
        title: In the **Events** window, the arguments and the calculation result are displayed.
    ===
        image: /images/user-guide/calculated-fields/script-example-27-ce.png
'
%}

{% include images-gallery.liquid imageCollection=exampleScript22 %}

In the **Latest telemetry** tab of the **Building A** asset, the **airDensity** key will appear.

{% assign exampleScript23 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-28-ce.png
        title: In the **Latest telemetry** tab of the **Building A** asset, the **airDensity** key will appear.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript23 %}

<hr>

### Example 3: Freezer temperature analysis

<b><font size="4">Scenario</font></b>

This example demonstrates freezer operation analysis based on two telemetry parameters:
- **temperature** — internal temperature (rolling time series)
- **defrost** — defrost mode status
  (0 — off, 1 — on)

The goal is to detect situations where:
- the freezer is **not** in defrost mode, **and**
- the air temperature exceeds **-5 °C**.

In such cases, the system should generate a telemetry event containing information about the issue.

<hr>

<b><font size="4">Configuration steps</font></b>

Create a calculated field at the device level with the following parameters:

<b><font size="3">General</font></b>
- **Name:** Freezer temperature analysis
- **Type:** Script

<b><font size="3">Arguments</font></b>

Add two arguments:

**Argument 1**
- **Entity type:** Current entity
- **Argument type:** Time series rolling
- **Time series key:** defrost
- **Argument name:** defrost
- **Time window:** 15 minutes
- **Max value:** 100

**Argument 2**
- **Entity type:** Current entity
- **Argument type:** Time series rolling
- **Time series key:** temperature
- **Argument name:** temperature
- **Time window:** 15 minutes
- **Max value:** 100

<b><font size="3">Script</font></b>

Paste the calculation function into the **Script** field:

**function calculate(ctx, defrost, temperature) {**
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

<b><font size="3">Output</font></b>

- **Output type:** Time series
- **Strategy**: Process right away

Click **Add** to save the calculated field.

{% assign exampleScript31 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-31-ce.png
        title: **Create a new calculated field** for the device and select the **Script** type.
    ===
        image: /images/user-guide/calculated-fields/script-example-32-ce.png
        title: Add first argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Time series rolling<br>- **Time series key:** defrost<br>- **Argument name:** defrost.<br>- Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/script-example-33-ce.png
        title: Add a second argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Time series rolling<br>- **Time series key:** temperature<br>- **Argument name:** temperature.<br>- Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/script-example-34-ce.png
        title: Paste the calculation function into the **Script** field.<br>- In the **Output** section, select **type:** <i>Time series</i>.<br>- Click **Add** to save the calculated field.
    ===
        image: /images/user-guide/calculated-fields/script-example-35-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript31 %}

<hr>

<b><font size="4">Result</font></b>

In the **Events** window, you can view the generated events.

{% assign exampleScript32 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-36-ce.png
        title: In the **Events** window, you can view the generated events.
    ===
        image: /images/user-guide/calculated-fields/script-example-37-ce.png
'
%}

{% include images-gallery.liquid imageCollection=exampleScript32 %}

the **Latest telemetry** tab, the issue key will appear, for example:

```json
{
  "issue": {
    "temperature": 0.8,
    "defrostState": false
  }
}

```

This indicates that the freezer is in a potentially critical state.

{% assign exampleScript33 = '
    ===
        image: /images/user-guide/calculated-fields/script-example-38-ce.png
        title: Go to the **Latest telemetry** tab. The **issue** key is the result of the calculation.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript33 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.