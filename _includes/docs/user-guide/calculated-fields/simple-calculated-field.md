* TOC
{:toc}

Simple calculated fields use basic arithmetic operations (+, -, *, /) and standard functions such as `sqrt` (square root), `pow` (power), `abs` (absolute value), etc.

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## Configuration

Define the data sources, calculation logic, result format, and how it will be further processed in the system.

### General

{% assign calculatedFieldType = "Select the **Simple** calculated field type — it uses basic mathematical operations and standard functions." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Arguments

To configure a calculated field, you must add at least one argument.

Click **Add argument** and configure the following:

<b><font size="3">Entity type</font></b>   
Defines the data source that will be used in calculations:
- **Current entity** - the current entity to which the calculated field is applied.   
  If the field is created at the **Device profile** or **Asset profile** level, the calculation is performed for each entity associated with that profile.
- Another **Device** or **Asset** — another entity from which data is read.
- **Customer** — the associated customer.
- **Current tenant** — the current tenant.
- **Current owner** — the owner of the current entity.

<b><font size="3">Entity type</font></b>   
Defines the type of data used in calculations:
- **Latest telemetry** - the latest telemetry value (for example, *temperature*, *speed*, *voltage*).
- **Attribute** - static or semi-static entity data (for example, *model*, *maxTemperature*).   
  For attributes, you must also specify the scope: **Server**, **Client**, or **Shared**.

<b><font size="3">Time series key / Attribute key</font></b>   
The telemetry or attribute key whose value will be read.

<b><font size="3">Argument name</font></b>   
The name of the variable used in the formula or script.

<b><font size="3">Default value</font></b>   
The default value used if the data is unavailable.

After configuring the parameters, click **Add**.

{% assign simpleArgument = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-argument-1-ce.png
        title: Click **Add argument** and define the data source.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-argument-2-ce.png
        title: Specify the **entity type**, **time series key / attribute key**, **argument name**, and **default value**, then click **Add**.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-argument-3-ce.png
'
%}

{% include images-gallery.liquid imageCollection=simpleArgument %}

<hr>

### Expression

In the **Expression** section, enter the mathematical expression for the calculation using the variables defined in the [Arguments](#arguments) section.

{% assign simpleExpression = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-expression-1-ce.png
        title: In the **Expression** section, enter the mathematical expression for the calculation using the variables defined in the **Arguments** section.
'
%}

{% include images-gallery.liquid imageCollection=simpleExpression %}

<hr>

### Output

<b><font size="3">Output type</font></b>   
Select how the result should be stored:
- [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or 
- [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}   
  For attributes, also specify the scope: **Server**, **Client**, or **Shared attributes**.

<b><font size="3">Time series key / Attribute key</font></b>   
Specify the key under which the calculated value will be stored.

<b><font size="3">Decimals (optional)</font></b>   
Define the number of decimal places to round the result to.   
If not specified, the value will not be rounded.

> **[Only for Time series]**<br>
"**Use latest timestamp**" option — when enabled, the calculated value will be stored using the most recent timestamp from the arguments telemetry instead of the server time.

Further processing and persistence depend on the selected [output strategy](#output-strategy).

<b><font size="4">Save calculated field</font></b>   
To finish adding the calculated field, click **Add**.

{% assign simpleOutput = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-output-1-ce.png
        title: Select the output type as **Time series**.<br>Set a name to the variable that will store the calculation result.<br>To finish adding the calculated field, click **Add**.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-output-2-ce.png
        title: Select the output type as **Attribute** and choose its scope: **Server attributes**, **Client attributes**, or **Shared attributes**.<br>Set a name to the variable that will store the calculation result.<br>To finish adding the calculated field, click **Add**.
'
%}

{% include images-gallery.liquid imageCollection=simpleOutput %}

<hr>

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>

### Result

After the calculated field is created, data calculation will start immediately once the relevant input data is received.

{% assign scriptResult = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-result-1-ce.png
        title: After the calculated field is created, data calculation will start immediately once the relevant input data is received.
'
%}

{% include images-gallery.liquid imageCollection=scriptResult %}

To view debug events, click **Events**. In the debug window, you can see events with the input data and the calculated result.

> Please note that ThingsBoard stores all debug events for a calculated field during the first 15 minutes after creation. After that, only error events are saved.

{% assign scriptEvent = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-events-1-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/simple/simple-events-2-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-events-3-ce.png
    ===
        image: /images/user-guide/calculated-fields/simple/simple-events-4-ce.png
'
%}

{% include images-gallery.liquid imageCollection=scriptEvent %}

<hr>

## Example: Dew point calculation

<b><font size="4">Scenario</font></b>

The **Smart Device** sends **temperature** and **humidity** values in real time.   
Based on these data, you need to calculate the **dew point** and store the result as telemetry.

{% assign exampleSimple1 = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-9-ce.png
        title: The **Smart Device** sends **temperature** and **humidity** values in real time.  
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple1 %}

<hr>

<b><font size="4">Configuration steps</font></b>

Create a calculated field at the **device level** with the following parameters:

<b><font size="3">General</font></b>
- **Name:** Dew point calculation
- **Type:** Simple

<b><font size="3">Arguments</font></b>

Add two arguments:

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

<b><font size="3">Expression</font></b>

The following mathematical expression, based on temperature and humidity values, is used to calculate the dew point.

```text
(243.04 * (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature)) / (17.625 - (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature))))
```
{: .copy-code}

<b><font size="3">Output</font></b>

- **Output type**: Time series
- **Time series key**: dewPoint
- **Decimals by default**: 1
- **Strategy**: Process right away

Click **Add** to save the calculated field.

{% assign exampleSimple2 = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-1-ce.png
        title: Create a **"Simple"** calculated field at the device level.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-2-ce.png
        title: Add first argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** <i>temperature</i><br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-3-ce.png
        title: Add a second argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** <i>humidity</i><br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-4-ce.png
        title: Insert the mathematical **expression** to calculate the dew point.<br>In the **Output** section<br>- Select **type:** <i>Time series</i>.<br>- Specify the name of the calculated variable — **dewPoint** — under which the calculation result will be saved.<br>Click **Add** to save the calculated field.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-5-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple2 %}

<hr>

<b><font size="4">Result</font></b>

In the **Latest telemetry** tab, you&#39;ll see the **temperature** and **humidity** telemetry values from the device, along with **dewPoint** — the calculated dew point result.

{% assign exampleSimple4 = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-8-ce.png
        title: In the **Latest telemetry** tab, you&#39;ll see the **temperature** and **humidity** telemetry values from the device, along with **dewPoint** — the calculated dew point result.
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple4 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.