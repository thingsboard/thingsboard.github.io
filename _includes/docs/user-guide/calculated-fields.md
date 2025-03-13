* TOC
{:toc}

**Calculated fields** are a mechanism for automatically computing values based on input data. They allow users to process data in real time and store it as **attributes** or **telemetry**, using **algorithms** or **expressions**.

For example, the calculated fields feature can be used to convert temperature values from Celsius to Fahrenheit directly in the device interface or calculate the average device speed over the last hour.

Calculated fields can be configured:
- **At the Device or Asset level** – to calculate data for a specific device or asset.
- **At the Device or Asset profile level** – to share calculated fields across multiple devices or assets using a device or asset profile, respectively.

## Create new calculated field

To create a new calculated field, select the entity or profile for which you want to apply this function.
In the details window, navigate to the "Calculated fields" tab. Click the "plus" icon, and from the dropdown menu, select "Create new calculated field".   

{% include images-gallery.html imageCollection="create-new-calculated-field" %}

A calculated field configuration window will open with four sections: "General", "Arguments", "Expression", and "Output".   
Let's go through each of them one by one.

### General

In the "General" section, you need to enter a title for the calculated field and select the calculation type: **Simple** or **Script**.

- **Simple type** – uses basic mathematical operations and functions for calculation.
- **Script type** – allows for more complex computations using the [TBEL (ThingsBoard Expression Language)](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} scripting language.

{% include images-gallery.html imageCollection="calculated-field-general" %}

### Arguments

Calculated fields use different types of arguments (input data) that determine what data will be used for calculations.   
Click "Add argument" and fill in the following fields here:

- **Argument name** – set the name used to reference the variable in the expression.
- **Entity type** – define the source of the variable. It can be the **current entity**, another **device** or **asset**, a **customer**, or a **current tenant**. 

{% include images-gallery.html imageCollection="argument-name" %} 

- **Argument type** – the data source that will be used as input for calculations.   
Types of arguments:

  - **Attribute** – A static or semi-static key-value pair associated with an entity.   
  *For example*: serial number, model, firmware version, or maximum allowable temperature.

  - **Latest telemetry** – Telemetry data obtained from a device or another input source.   
  *For example*: current temperature, speed, voltage, humidity, or pressure as measured by a sensor.

  - **Time series rolling** – A set of historical data points collected over a specified period.   This allows for calculating trends, averages, and other time-based statistics.   
  &#42; *Note: This argument type is available only for the "Script" calculated type.*

Select the desired argument type:

{% capture calculatedfieldsargumenttype %}
Attribute<small></small>%,%attribute%,%templates/calculated-fields/attribute-argument-type.md%br%
Latest telemetry<small></small>%,%latestTelemetry%,%templates/calculated-fields/latest-telemetry-argument-type.md%br%
Time series rolling<small>only for Script calculated type</small>%,%timeSeriesRolling%,%templates/calculated-fields/time-series-rolling-argument-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=calculatedfieldsargumenttype %}

### Expression

#### Simple calculated field

Simple calculated fields use basic arithmetic operations (+, -, *, /) and standard functions such as sqrt (square root), pow (power), and abs (absolute value).

- Specify the mathematical expression that will be used for calculations, using the variables added in the "[Arguments](#arguments)" section.
- In the "[Output](#output)" section, specify the type ("Time series" or "Attribute") and assign a name to the new variable that will store the calculation result.
- Then, click "Add";

For example, this expression uses the `temperatureF` [argument](#arguments) to convert temperature from Fahrenheit (°F) to Celsius (°C):

```text
(temperatureF - 32) / 1.8
```
{: .copy-code}

In the "Output" section, set the variable type to "Time series" and assign the name `temperatureC` to the new variable.
Go to the "Latest telemetry" tab. You will see two keys:

- temperature – the temperature value received from the device, measured in Fahrenheit;
- temperatureC – the result of the calculated field, displaying the temperature in Celsius.

{% include images-gallery.html imageCollection="expression-simple-calculated-fields-1" %}

#### Script calculated field

For complex calculations, a specialized scripting language called [TBEL (ThingsBoard Expression Language)](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"}. 
It enables complex calculations, including conditional statements, loops, and access to historical data. The result can be a number, text, an object, or an array of values.

- Define a function that will perform calculations using the variables added in the "[Arguments](#arguments)" section.
- The variable name that stores the calculation result is specified within the function itself.
- The variable type must be set in the "[Output](#output)" section.

For example, this function uses the `temperatureF` [argument](#arguments) to convert temperature from Fahrenheit (°F) to Celsius (°C), rounds the result to two decimal places, and returns it as the value of the key `temperatureC`:

```js
var temperatureC = (temperatureF - 32) / 1.8;
return {
  "temperatureC": toFixed(temperatureC, 2)
}
```
{: .copy-code}

Depending on whether you saved the key value as an attribute or time series, find the calculation result in the corresponding tab.   
In our case, go to the "Latest telemetry" tab. You will see two keys:

- temperature – the temperature value received from the device, measured in Fahrenheit;
- temperatureC – the result of the calculated field, displaying the temperature in Celsius.

{% include images-gallery.html imageCollection="expression-script-calculated-fields-1" %}

### Output

The calculation results can be saved as either an "**Attribute**" or "**Time series**" data.

**For the "Simple" argument type**:
- Select the output type: "**Time series**" or "**Attribute**".
- For the "**Time series**":
  - Set the name to the variable that will store the calculation result;
  - Optionally, set the number of decimal places.

- For the "**Attribute**":
  - Choose the attribute scope: "Server attributes", "Client attributes", or "Shared attributes";
  - Set the name to the variable that will store the calculation result;
  - Optionally, set the number of decimal places.

{% include images-gallery.html imageCollection="output-simple-1" %}

<br>
**For the "Script" argument type**:
- Select the type for the output variable. The variable name is defined in the calculation function.
- For the "**Time series**":
  - Select the "Time series" output type.

- For the "**Attribute**":
  - Select the "Attribute" output type;
  - Choose the attribute scope: "Server attributes", "Client attributes", or "Shared attributes";

{% include images-gallery.html imageCollection="output-script-1" %}

## Import calculated field

You can import a calculated field configuration from a JSON configuration file. This is useful when transferring a calculated field configuration from another entity or profile.

{% include images-gallery.html imageCollection="import-calculated-field-1" showListImageTitles="true" %}

## Examples

**Example 1: Fahrenheit to Celcius**

This function converts the temperature value from Fahrenheit to Celsius, rounds the result to two decimal places, and returns it along with the timestamp of the incoming message.

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


{% include images-gallery.html imageCollection="example-script-calculated-fields-1" showListImageTitles="true" %}