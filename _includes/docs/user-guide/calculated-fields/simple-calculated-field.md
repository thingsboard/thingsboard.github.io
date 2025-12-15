* TOC
{:toc}

Simple calculated fields use basic arithmetic operations (+, -, *, /) and standard functions such as `sqrt` (square root), `pow` (power), `abs` (absolute value), etc.

<hr>

## Creating a calculated field

{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

## Calculated field configuration

Define the data sources, calculation logic, result format, and how it will be further processed in the system.

### General

{% assign calculatedFieldType = "Select the **Simple** calculated field type — it uses basic mathematical operations and standard functions." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Arguments

To configure a calculated field, you must add at least one argument.

Click **Add argument** and configure the following parameters:

<b><font size="3">Entity type</font></b>   
Defines the data source:
- **Current entity**- the current entity to which the calculated field is applied.   
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
        image: /images/user-guide/calculated-fields/simple-argument-1-ce.png
        title: Click **Add argument** and define the data source.
    ===
        image: /images/user-guide/calculated-fields/simple-argument-2-ce.png
        title: Specify the **entity type**, **time series key / attribute key**, **argument name**, and **default value**, then click **Add**.
    ===
        image: /images/user-guide/calculated-fields/simple-argument-3-ce.png
'
%}

{% include images-gallery.liquid imageCollection=simpleArgument %}

<hr>

### Expression

In the **Expression** section, enter the mathematical expression for the calculation using the variables defined in the [Arguments](#arguments) section.

{% assign simpleExpression = '
    ===
        image: /images/user-guide/calculated-fields/simple-expression-1-ce.png
        title: In the **Expression** section, enter the mathematical expression for the calculation using the variables defined in the **Arguments** section.
'
%}

{% include images-gallery.liquid imageCollection=simpleExpression %}

<hr>

### Output

The calculation result can be stored either as [Time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or as an [Attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.   
Further processing and persistence depend on the selected [Output strategy](#output-strategy).

<b><font size="3">Output type</font></b>   
Select how the result should be stored:
- **Time series** or 
- **Attribute**.   
  For attributes, also specify the scope: **Server**, **Client**, or **Shared attributes**.

<b><font size="3">Output type</font></b>   
Specify the key under which the calculated value will be stored.

<b><font size="3">Decimals (optional)</font></b>   
Define the number of decimal places to round the result to.   
If not specified, the value will not be rounded.

> **[Only for Time series]**<br>
"**Use latest timestamp**" option — when enabled, the calculated value will be stored using the most recent timestamp from the arguments telemetry instead of the server time.

{% assign simpleOutput = '
    ===
        image: /images/user-guide/calculated-fields/simple-output-1-ce.png
        title: Select the output type as **Time series**. Set a name to the variable that will store the calculation result. Optionally, specify the number of decimal places.
    ===
        image: /images/user-guide/calculated-fields/simple-output-2-ce.png
        title: Select the output type as **Attribute** and choose its scope: **Server attributes**, **Client attributes**, or **Shared attributes**. Set a name to the variable that will store the calculation result. Optionally, set the number of decimal places.
'
%}

{% include images-gallery.liquid imageCollection=simpleOutput %}

{% include /docs/user-guide/calculated-fields/blocks/output-strategy.md %}

<hr>

### Result

After clicking the **Add** button, the calculated field will be added to your entity or profile.

{% assign scriptResult = '
    ===
        image: /images/user-guide/calculated-fields/simple-result-1-ce.png
        title: After clicking the **Add** button, the calculated field will be added to your entity or profile.
'
%}

{% include images-gallery.liquid imageCollection=scriptResult %}

Let&#39;s check the debug events by clicking the **Events** icon button. The debugging window displays calculated field arguments and the computed result.

> Please note that ThingsBoard stores all debug events for a calculated field during the first 15 minutes after creation. After that, only error events are saved.

{% assign scriptEvent = '
    ===
        image: /images/user-guide/calculated-fields/simple-events-1-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/simple-events-2-ce.png
        title: The debugging window displays calculated field arguments and the computed result.
'
%}

{% include images-gallery.liquid imageCollection=scriptEvent %}

<hr>

<hr>

## Example: Dew point calculation

<b><font size="3">Scenario</font></b>

Suppose you have a smart device that monitors the **current temperature and humidity** in real time and sends this data to ThingsBoard. 

Based on these values, we need to calculate the **dew point**.

<hr>

<b><font size="3">Expression</font></b>

This mathematical expression calculates the dew point using two arguments: temperature and humidity:

```text
(243.04 * (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature)) / (17.625 - (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature))))
```
{: .copy-code}

<hr>

<b><font size="3">Configuration steps</font></b>

- **Create a new calculated field** for the device and select the **Simple** type.
- - In the **Arguments** section, add an argument:
  - **Entity type:** Current entity
  - **Argument type:** Latest telemetry
  - **Time series key:** temperature
  - **Argument name:** temperature
- Add a second argument:
    - **Entity type:** Current entity
    - **Argument type:** Latest telemetry
    - **Time series key:** humidity
    - **Argument name:** humidity
- Insert the mathematical **expression** to calculate the dew point.
- In the **Output** section, select:
  - **Type:** Time series
  - Specify the name of the calculated variable — **dewPoint** — under which the calculation result will be saved.
- Click **Add** to save the calculated field.


{% assign exampleSimple1 = '
    ===
        image: /images/user-guide/calculated-fields/simple-example-1-ce.png
        title: **Create a new calculated field** for the device and select the **Simple** type.
    ===
        image: /images/user-guide/calculated-fields/simple-example-2-ce.png
        title: Add first argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** <i>temperature</i><br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/simple-example-3-ce.png
        title: Add a second argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** <i>humidity</i><br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/simple-example-4-ce.png
        title: Insert the mathematical **expression** to calculate the dew point.<br>In the **Output** section<br>- Select **type:** <i>Time series</i>.<br>- Specify the name of the calculated variable — **dewPoint** — under which the calculation result will be saved.<br>Click **Add** to save the calculated field.
    ===
        image: /images/user-guide/calculated-fields/simple-example-5-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple1 %}

<hr>

<b><font size="3">Result</font></b>

In the **Events** pop-up window, you can view the input arguments and the calculation result.

{% assign exampleSimple2 = '
    ===
        image: /images/user-guide/calculated-fields/simple-example-6-ce.png
        title: In the **Events** pop-up window, you can view the input arguments and the calculation result.
    ===
        image: /images/user-guide/calculated-fields/simple-example-7-ce.png
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple2 %}

Go to the **Latest telemetry** tab. You&#39;ll see the **temperature** and **humidity** telemetry values from the device, along with **dewPoint** — the calculated dew point result.

{% assign exampleSimple3 = '
    ===
        image: /images/user-guide/calculated-fields/simple-example-8-ce.png
        title: Go to the **Latest telemetry** tab. You&#39;ll see the **temperature** and **humidity** telemetry values from the device, along with **dewPoint** — the calculated dew point result.
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple3 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.