* TOC
{:toc}

**Calculated fields** allow users to perform real-time computations on telemetry and attributes, enabling seamless data transformations without the need for a rule engine. 
By defining custom expressions or scripts, users can extract meaningful insights, standardize data, and create new computed metrics dynamically. 
  This feature is particularly useful for optimizing data processing, improving analytics, and enhancing automation within IoT ecosystems.

### Key benefits

- **effortless data processing**: automates calculations directly on incoming telemetry and attributes, reducing the need for manual intervention. 
- **no additional rule chains needed**: simplifies data transformations without requiring complex rule configurations. 
- **real-time computations**: triggers calculations as telemetry is processed by the [save time series](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node), [save attributes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-attributes-node), or **calculated fields** rule nodes, ensuring up-to-date insights. 
- **optimized performance**: reduces database queries by performing computations as data is received, improving system efficiency. 
- **flexible output**: allows results to be stored as either attributes or time series data, depending on the use case.

### Use cases

- **standardize measurement units**: convert temperature readings from Celsius to Fahrenheit or normalize pressure and voltage levels across different sensor models.
- **energy consumption tracking**: calculate power usage per hour to help optimize energy consumption and cost efficiency.
- **data smoothing**: compute rolling averages of environmental telemetry like humidity or temperature to reduce fluctuations in sensor readings.
- **predictive maintenance**: generate efficiency metrics for machines, such as air density calculations, to anticipate maintenance needs before failures occur.
- **custom business logic**: implement advanced calculations tailored to specific business needs, such as determining occupancy levels based on motion sensor data or adjusting device settings dynamically based on multiple telemetry inputs.

### Configuration levels

Calculated fields can be applied at different levels within the system:
- **Device** or **Asset** level – the calculation is applied to a specific device or asset, allowing customized data processing per entity.
- **Device Profile** or **Asset Profile** level: the calculation is shared across multiple devices or assets using a common profile, ensuring consistency and reducing redundancy in configurations. 
  If a calculated field is created at the profile level, it will be executed for each entity associated with that profile.

This flexibility allows users to either define unique calculations per entity or apply standardized logic across a group of similar entities, optimizing data processing and management.

## Create new calculated field

To create a calculated field, follow these steps:

- Navigate to the Entity or Profile: open the device, asset, or profile where the calculated field should be applied. 
- Access the Calculated Fields tab: in the entity details window, go to the "Calculated Fields" section. 
- Add a new calculated field: click the "plus" icon and select "Create new calculated field" from the dropdown menu.

{% include images-gallery.html imageCollection="create-new-calculated-field" %}

A calculated field configuration window will open with four sections: "General", "Arguments", "Expression", and "Output".   
Let's go through each of them one by one.

### General

- **Name**: enter a descriptive title for the calculated field. 
- **Type**: choose between:
  - **Simple** Type: uses basic mathematical operations and functions. 
  - **Script** Type: enables complex calculations using the [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} scripting language. 
- **Debug configuration**: enable this setting to track calculated field events, such as state changes and errors, for easier debugging and troubleshooting.

{% include images-gallery.html imageCollection="calculated-field-general" %}

### Arguments

Calculated fields use different types of arguments that determine what data will be used for calculations.

To configure calculated field, you need to add at least one argument before proceeding. 
Click the "Add argument" button and fill in the required fields:

- **Argument name**: set the reference name for the variable in the expression.
- **Entity type**: set the source of the variable, which can be:
  - **Current entity**: refers to the same entity where the calculated field is applied. 
    If the calculated field is created at the **Asset Profile** or **Device Profile** level, the calculation will be executed for each entity associated with that profile.
  - Another **Device** or **Asset**: references a different device or asset for data processing.
  - **Customer**: retrieves data from the associated customer entity.
  - **Current tenant**: uses data from the tenant entity.

{% include images-gallery.html imageCollection="argument-name" %}

- **Argument type**: define the data source:
  - **Attribute**: uses static or semi-static key-value pairs associated with an entity (e.g., model, max temperature). 
  - **Latest telemetry**: uses the most recent telemetry data from an entity (e.g., temperature, speed, voltage). 
  - **Time series rolling**: uses historical time series data over a specified time window for trend analysis.
  > **Note**: Available only for **Script** type.

Select the desired argument type:

{% capture calculatedfieldsargumenttype %}
Attribute<small></small>%,%attribute%,%templates/calculated-fields/attribute-argument-type.md%br%
Latest telemetry<small></small>%,%latestTelemetry%,%templates/calculated-fields/latest-telemetry-argument-type.md%br%
Time series rolling<small>only for Script calculated type</small>%,%timeSeriesRolling%,%templates/calculated-fields/time-series-rolling-argument-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=calculatedfieldsargumenttype %}

### Expression

Expressions define how the calculated field processes incoming data using the predefined arguments added in the [Arguments](#arguments) section.

There are two types of expressions based on the calculated field type:

#### Simple calculated field

Simple calculated fields use basic arithmetic operations (+, -, *, /) and standard functions such as `sqrt` (square root), `pow` (power), and `abs` (absolute value).

Specify the mathematical expression using the variables from the [Arguments](#arguments) section.

Example: expression uses the `temperatureF` [arguments](#arguments) to convert temperature from Fahrenheit (°F) to Celsius (°C):

```text
(temperatureF - 32) / 1.8
```
{: .copy-code}

{% include images-gallery.html imageCollection="expression-simple-calculated-fields-1" %}

#### Script calculated field

For complex calculations, [TBEL (ThingsBoard Expression Language)](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} is used. 
It enables advanced operations such as conditional statements, loops, and access to historical data.

Define a function that performs calculations using arguments from the [Arguments](#arguments) section.

Example: function uses the `temperatureF` [argument](#arguments) to convert temperature from Fahrenheit (°F) to Celsius (°C), rounds the result to two decimal places:

```js
var temperatureC = (temperatureF - 32) / 1.8;
return {
  "temperatureC": toFixed(temperatureC, 2)
}
```
{: .copy-code}

{% include images-gallery.html imageCollection="expression-script-calculated-fields-1" %}

### Output

The output configuration depends on the calculated field type:

For **Simple** calculated fields:
- Select the **Output type**: **Time series** or **Attribute**.
  - **Time series**:
    - Set the **Time series key** that will be used to store the calculation result;
    - Optionally, set **Decimals by default** to determine the number of decimal places to which the calculation result should be rounded. If not set, result will not be rounded.
  - **Attribute**:
    - Choose the **Attribute scope**: **Server attributes**, **Client attributes**, or **Shared attributes**;
    - Set the **Attribute key** that will be used to store the calculation result;
    - Optionally, set **Decimals by default**  to determine the number of decimal places to which the calculation result should be rounded. If not set, result will not be rounded.

For **Script** calculated fields:

- Select the **Output type**: **Time series** or **Attribute**.

The script must return a JSON object containing the computed value.

The result can be stored as either a Time Series or an Attribute, depending on the selected output type.

The attribute scope must be defined when selecting Attribute as the output type.

The output of a calculated field can be stored as either **Attributes** or **Time series** data. This choice determines how the computed results are used within the system.

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