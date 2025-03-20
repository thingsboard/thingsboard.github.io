* TOC
{:toc}

**Calculated fields** allow users to perform real-time computations on telemetry and attributes, enabling seamless data transformations without the need for a rule engine. 
By defining custom expressions or scripts, users can extract meaningful insights, standardize data, and create new computed metrics dynamically. 
This feature is particularly useful for optimizing data processing, improving analytics, and enhancing automation within IoT ecosystems.

### Key benefits

- **effortless data processing**: automates calculations directly on incoming telemetry and attributes, reducing the need for manual intervention. 
- **no additional rule chains needed**: simplifies data transformations without requiring complex rule configurations. 
- **real-time computations**: triggers calculations as telemetry is processed by the [save time series](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node), [save attributes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-attributes-node), or [calculated fields](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#calculated-fields-node) rule nodes, ensuring up-to-date insights. 
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
- Access the Calculated fields tab: in the entity details window, go to the "Calculated fields" section. 
- Add a new calculated field: click the "plus" icon and select "Create new calculated field" from the dropdown menu.

{% include images-gallery.html imageCollection="create-new-calculated-field" %}

A calculated field configuration window will open with four sections: "General", "Arguments", "Expression", and "Output".   
Let's go through each of them one by one.

### General

- **Name**: enter a descriptive title for the calculated field. 
- **Type**: choose between:
  - **Simple**: uses basic mathematical operations and functions. 
  - **Script**: enables complex calculations using the [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} scripting language. 
- **Debug configuration**: enable this setting to track calculated field events, such as state changes and errors, for easier debugging and troubleshooting.

[//]: # (update image -> debug settings)
{% include images-gallery.html imageCollection="calculated-field-general" %}

### Arguments

Calculated fields use different types of arguments that determine what data will be used for calculations.

To configure calculated field, you need to add at least one argument before proceeding. 
Click the **Add argument** button and fill in the required fields:

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
Time series rolling<small>only for Script type</small>%,%timeSeriesRolling%,%templates/calculated-fields/time-series-rolling-argument-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=calculatedfieldsargumenttype %}

### Expression

Expressions define how the calculated field processes incoming data using the predefined arguments added in the [Arguments](#arguments) section.

There are two types of expressions based on the calculated field type:

#### Simple

Simple calculated fields use basic arithmetic operations (+, -, *, /) and standard functions such as `sqrt` (square root), `pow` (power), and `abs` (absolute value).

Specify the mathematical expression using the variables from the [Arguments](#arguments) section.

Example: expression uses the `temperatureF` argument to convert temperature from Fahrenheit (°F) to Celsius (°C):

```text
(temperatureF - 32) / 1.8
```
{: .copy-code}

{% include images-gallery.html imageCollection="expression-simple-calculated-fields-1" %}

#### Script

For complex calculations, [TBEL (ThingsBoard Expression Language)](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} is used. 
It enables advanced operations such as conditional statements, loops, and access to historical data.

Define a function that performs calculations using arguments from the [Arguments](#arguments) section.

Example: function uses the `temperatureF` argument to convert temperature from Fahrenheit (°F) to Celsius (°C), rounds the result to two decimal places:

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
    - Set the **Time series key** that will be used to store the calculation result.
    - Optionally, set **Decimals by default** to determine the number of decimal places to which the calculation result should be rounded. If not set, result will not be rounded.
  - **Attribute**:
    - Choose the **Attribute scope**: **Server attributes**, **Client attributes**, or **Shared attributes**.
    - Set the **Attribute key** that will be used to store the calculation result.
    - Optionally, set **Decimals by default**  to determine the number of decimal places to which the calculation result should be rounded. If not set, result will not be rounded.

{% include images-gallery.html imageCollection="output-simple-1" %}

For **Script** calculated fields:

The computed values are derived from the return output of the script function. 
The returned JSON object must contain **keys** that represent the calculated values, which will be used to store the results within the system.

- Select the **Output type**: **Time series** or **Attribute**.
  - **Time series**: function must return a JSON object or array with or without a timestamp containing the computed value.
  - **Attribute**: function must return a JSON object **without timestamp** information containing the computed value. 
    - Choose the **Attribute scope**: **Server attributes**, **Client attributes**, or **Shared attributes**.

{% include images-gallery.html imageCollection="output-script-1" %}

## Import calculated field

You can import a calculated field configuration from a JSON configuration file. 
This feature is particularly useful when transferring calculated field configurations between entities or profiles, ensuring consistency and reducing manual setup efforts.

##### Steps to import

- Access the Calculated Fields tab: navigate to the "Calculated fields" tab of the target entity or profile. 
- Click the **Import calculated field** button: locate the import option within the UI and select the JSON file containing the calculated field configuration. 
- Verify the imported configuration: when importing, the edit window will open to allow modifications.
  > **Note**: ensure the imported field is correctly applied and update any necessary parameters.
  > * if you import calculated field on any entity, no error occurs, since the original entity where it was created is not preserved during export.
  > * if the referenced entity is the current entity, no error occurs.
  > * if a referenced entity does not exist in your tenant, it will be highlighted as an error in the argument where it is used.
  > * if the referenced entity is the current tenant and you import it into another tenant, it will automatically adjust to the new tenant without errors.

[//]: # (maybe it is worth hiding the steps of image titles)
{% include images-gallery.html imageCollection="import-calculated-field-1" showListImageTitles="true" %}

## Examples

**Example 1: Fahrenheit to Celsius**

This function converts the temperature value from Fahrenheit to Celsius, rounds the result to two decimal places, and returns it along with the timestamp of the incoming message.

```js
function calculate(ctx, temperatureF) {
  var temperatureC = (temperatureF - 32) / 1.8;
  return {
    "ts": ctx.args.temperatureF.ts,
    "values": {
      "temperatureC": toFixed(temperatureC, 2)
    }
  }
}
```
{: .copy-code}

{% include images-gallery.html imageCollection="example-script-calculated-fields-1" showListImageTitles="true" %}

**Example 2: Air density calculation**

[//]: # (altitude - attribute, temperature - rolling)

This function calculates air density using altitude(single value argument) and temperature(time series rolling argument).

```js
function calculate(ctx, altitude, temperature) {
  var avgTemperature = temperature.mean(); // Get average temperature
  var temperatureK = (avgTemperature - 32) * (5 / 9) + 273.15; // Convert Fahrenheit to Kelvin

  // Estimate air pressure based on altitude
  var pressure = 101325 * Math.pow((1 - 2.25577e-5 * altitude), 5.25588);

  // Air density formula
  var airDensity = pressure / (287.05 * temperatureK);

  return {
    "airDensity": toFixed(airDensity, 2)
  };
}
```
{: .copy-code}

[//]: # (add new example image and steps)
{% include images-gallery.html imageCollection="example-script-calculated-fields-1" showListImageTitles="true" %}

**Example 3: Freezer temperature analysis**

This function merges temperature(time series rolling argument) data with the fridge's defrost(time series rolling argument) status. 
It then analyzes the merged data to identify instances where the fridge is not in defrost mode, yet the internal air temperature is too high ( > -5° C).

```js
function calculate(ctx, temperature, defrost) {
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
}
```
{: .copy-code}

[//]: # (add new example image and steps)
{% include images-gallery.html imageCollection="example-script-calculated-fields-1" showListImageTitles="true" %}
