* TOC
{:toc}

Script calculated fields use [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} (ThingsBoard Expression Language) to perform advanced, real-time computations on telemetry and attributes. Unlike Simple fields, Script fields support conditional logic, loops, working with historical time series windows, and returning multiple results in a single execution.

Use "Script" calculated fields when you need logic that goes beyond a single math expression, such as:
- Multi-step calculations (e.g., dew point, air density, efficiency metrics)
- Conditional rules (e.g., generate status flags based on multiple inputs)
- Multi-output results (e.g., compute several derived values at once)
- Event generation (e.g., produce anomaly events with timestamps)
- Rolling analytics using historical windows (e.g., rolling average, trend detection, smoothing)

<hr>

## Configuration

Define the data sources, calculation logic, result format, and how it will be further processed in the system.

### General

{% assign calculatedFieldType = "Select **Script** — this type allows you to perform complex calculations using **TBEL** and return one or more results." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Arguments

For a Simple calculated field, arguments can be either [Latest telemetry](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=latestTelemetry#arguments){:target="_blank"}, [Attribute](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"}, or [time series rolling](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=timeSeriesRolling#arguments){:target="_blank"}).   
The data source can be **Current entity**, another **Device/Asset**, the **Customer**, the **Current tenant**, or the **Current owner**.

For more information about arguments, their types, and configuration parameters, see the [Arguments](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"} section in the Calculated Fields documentation.

<hr>

### Script

{% include docs/user-guide/calculated-fields/blocks/script-calculation.md %}

<hr>

### Output

The calculation result is stored either as a [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or an [attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.   

For more details about output types and processing strategies, see the [Output](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#output){:target="_blank"} section.

{% assign scriptOutput = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-output-1-ce.png
        title: Time series: function must return a JSON object or array with or without a timestamp containing the computed value.<br>To finish adding the calculated field, click **Add**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-output-2-ce.png
        title: Attribute: function must return a JSON object without timestamp information containing the computed value.<br>To finish adding the calculated field, click **Add**.
'
%}

{% include images-gallery.liquid imageCollection=scriptOutput %}

<hr>

## Usage examples

To help you get started, here are three common configuration patterns applied to real-world scenarios.

### Example 1: Fahrenheit to Celsius

<b><font size="4">Scenario</font></b>   
A device reports indoor temperature in degrees Fahrenheit as telemetry under the <span class="code-light">temperature</span> key.

<b><font size="4">Goal</font></b>   
Convert the temperature to degrees Celsius, round the result to two decimal places, and store it as telemetry under the <span class="code-light">temperatureC</span> key using the same timestamp as the incoming data.

<hr>

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Fahrenheit to Celsius" calculated field configuration](/docs/user-guide/resources/calculated-fields/script/f_to_c_script_cf.json){:target="_blank" download="f_to_c_script_cf.json"}.

<hr>

<b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes temperature telemetry.
1. Download the CSV file: [fahrenheit-to-celsius-calculation-device-data.csv](/docs/user-guide/resources/calculated-fields/script/fahrenheit-to-celsius-calculation-device-data.csv){:target="_blank" download="fahrenheit-to-celsius-calculation-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Smart Device
- **Type:** smart-device
- **Time series:** <span class="code-light">temperature</span>

{% assign exampleScript1 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-1-1-ce.png
        title: Go to the **Devices** and **import** device configurations from a CSV file.<br>>CSV includes:<br>Name: Smart Device; Type: smart-device; Time series: temperature
'
%}

{% include images-gallery.liquid imageCollection=exampleScript1 %}

<hr>

<b><font size="3">2. Apply the calculated field to the device profile</font></b>

When importing the device, the **smart-device** device profile is created automatically and assigned to it.   
Configure the calculated field on this profile so it runs for all devices using it.

1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/script/f_to_c_script_cf.json){:target="_blank" download="f_to_c_script_cf.json"}.
2. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.   
   Apply a calculated field to the "smart-device" profile, which is automatically created during device import. This field will apply to all devices associated with this profile.

This configuration reads the Fahrenheit value from <span class="code-light">temperatureF</span> key, converts it to Celsius, and stores the result as a new <span class="code-light">temperatureC</span> telemetry key.

**Script used in this example:**

**function calculate(ctx, altitude, temperature) {**
```js
var temperatureC = (temperatureF - 32) / 1.8;
return {
    "ts": ctx.latestTs,
    "values": {
        "temperatureC": toFixed(temperatureC, 2)
    }
}
```
{: .copy-code}
**}**

{% assign exampleScript2 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-1-2-ce.png
        title: **Create a new calculated field** for the device and select the **Script** type.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-1-3-ce.png
        title: Add an argument:<br>- **Entity:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** <i>temperature</i>.<br>Click **Add**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-1-4-ce.png
        title: Paste the calculation function into the **Script** field.<br>- In the **Output** section, select **type:** Time series.<br>- Click **Add** to save the calculated field. The calculated field has been added.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-1-5-ce.png
        title: Add an argument:<br>- **Entity:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** <i>temperature</i>.<br>Click **Add**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-1-6-ce.png
        title: Paste the calculation function into the **Script** field.<br>- In the **Output** section, select **type:** Time series.<br>- Click **Add** to save the calculated field. The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript2 %}

<hr>

<b><font size="4">Result</font></b>

In the device&#39;s "Latest telemetry" tab, the calculated temperature appears as a new telemetry key: <span class="code-light">temperatureC</span>.

{% assign exampleScript3 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-1-7-ce.png
        title: In the device&#39;s "Latest telemetry" tab, the calculated temperature appears as a new telemetry key: **temperatureC**.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript3 %}

<hr>

### Example 2: Air density calculation

<b><font size="4">Scenario</font></b>   
The Building A asset has two associated devices:
- Smart Device — publishes temperature as telemetry (<span class="code-light">temperature</span>)
- Altimeter — provides altitude as an attribute (<span class="code-light">altitude</span>)

<b><font size="4">Goal</font></b>   
Calculate the air density based on the average temperature over the last 15 minutes and the altitude, and store the result as a new telemetry value under the <span class="code-light">airDensity</span> key for Building A.

<hr>

<b><font size="4">Calculated field configuration</font></b>   
[Click to download the "Air density calculation" field configuration](/docs/user-guide/resources/calculated-fields/script/air_density_calculation_cf.json){:target="_blank" download="air_density_calculation_cf.json"}.

<hr>

<b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import two devices: one publishing temperature telemetry and one providing altitude as an attribute.
1. Download the CSV file: [air-density-calculation-device-data.csv](/docs/user-guide/resources/calculated-fields/script/air-density-calculation-device-data.csv){:target="_blank" download="air-density-calculation-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

<b><font size="3">CSV includes:</font></b>

**Device 1**
- Name: Smart Device
- Type: smart-device
- Time series: <span class="code-light">temperature</span>

**Device 2**
- Name: Altimeter
- Type: height-sensor
- Server attribute: <span class="code-light">altitude</span>
 
{% assign exampleScript4 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-1-ce.png
        title: An asset: **Building A**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-2-ce.png
        title: A device: **Smart Device** (sends **temperature** telemetry)
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-3-ce.png
        title: A device: **Smart Device** (sends **temperature** telemetry)
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-4-ce.png
        title: A device: **Altimeter** (sends **altitude** as an attribute)
'
%}

{% include images-gallery.liquid imageCollection=exampleScript4 %}

<hr>

<b><font size="3">2. Import demo asset</font></b>

Import the asset that represents the building.
1. Download the CSV file: [air-density-calculation-asset-data.csv](/docs/user-guide/resources/calculated-fields/script/air-density-calculation-asset-data.csv){:target="_blank" download="air-density-calculation-asset-data.csv"}
2. Go to **Assets** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Building A
- **Type:** building

{% assign exampleScript5 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-5-ce.png
        title: An asset: **Building A**.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript5 %}

<hr>

<b><font size="3">3. Apply the calculated field to the asset profile</font></b>

Configure the calculated field on the building asset profile so it applies to Building A.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/script/air_density_calculation_cf.json){:target="_blank" download="air_density_calculation_cf.json"}.
2. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.   

This calculated field:
- reads <span class="code-light">temperature</span> telemetry from Smart Device using Time series rolling
- reads <span class="code-light">altitude</span> from Altimeter as an attribute
- calculates air density
- stores the output as telemetry on the asset

{% assign exampleScript6 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-6-ce.png
        title: **Create a new calculated field** for the asset **Building A** and select the **Script** type.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-7-ce.png
        title: **Create a new calculated field** for the asset **Building A** and select the **Script** type.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-8-ce.png
        title: Add a first argument:<br>- **Entity:** Smart Device<br>- **Argument type:** Time series rolling<br>- **Time series key:** <i>temperature</i>.<br>Click **Add**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-9-ce.png
        title: Add a second argument:<br>- **Entity:** Altimeter<br>- **Argument type:** Attribute<br>- **Attribute key:** <i>altitude</i>.<br>Click **Add**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-10-ce.png
        title: Paste the calculation function into the **Script** field.<br>- In the **Output** section, select **type:** <i>Time series</i>.<br>- Click **Add** to save the calculated field.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-11-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript6 %}

<br>

**Script used in this example:**

function calculate(ctx, altitude, temperature) {
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
}

<hr>

<b><font size="4">Result</font></b>

In the **Latest telemetry** tab of the **Building A** asset, the calculated value appears under the <span class="code-light">airDensity</span> key.

{% assign exampleScript7 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-2-12-ce.png
        title: In the **Latest telemetry** tab of the **Building A** asset, the calculated value appears under the **airDensity** key.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript7 %}

<hr>

### Example 3: Freezer temperature analysis

<b><font size="4">Scenario</font></b>   
This example demonstrates freezer operation monitoring using two telemetry parameters:
temperature- <span class="code-light">defrost</span> — defrost mode status (0 = off, 1 = on)

The goal is to detect cases where:
- the freezer is **not** in defrost mode (defrost = 0), and
- the temperature is **above -5°C**

When such a condition occurs, the system should generate an **event-like telemetry record** containing issue details.

<hr>

<b><font size="4">Goal</font></b>   
Generate a telemetry event under the <span class="code-light">issue</span> key whenever the freezer temperature exceeds -5°C while defrost mode is OFF.

<hr>

<b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes both telemetry keys.
1. Download the CSV file: [freezer-temperature-analysis-device-data.csv](/docs/user-guide/resources/calculated-fields/script/freezer-temperature-analysis-device-data.csv){:target="_blank" download="freezer-temperature-analysis-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

<b><font size="3">CSV includes:</font></b>

**CSV includes:**
- Name: Smart Device
- Type: smart-device
- Time series: <span class="code-light">temperature</span>
- Time series: <span class="code-light">defrost</span>

{% assign exampleScript8 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-1-ce.png
        title: An asset: **Building A**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-2-ce.png
        title: A device: **Smart Device** (sends **temperature** telemetry)
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-3-ce.png
        title: A device: **Smart Device** (sends **temperature** telemetry)
'
%}

{% include images-gallery.liquid imageCollection=exampleScript8 %}

<hr>

<b><font size="3">2. Apply the calculated field to the device profile</font></b>

Configure the calculated field on the "smart-device" device profile so it runs for Smart Device.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/script/freezer_temperature_analysis_cf.json){:target="_blank" download="freezer_temperature_analysis_cf.json"}.
2. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This configuration:
- reads rolling telemetry for both <span class="code-light">temperature</span> and <span class="code-light">defrost</span>
- aligns timestamps using `merge()`
- generates a telemetry record for each detected issue

**Script used in this example:**

function calculate(ctx, altitude, temperature) {
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

{% assign exampleScript9 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-4-ce.png
        title: **Create a new calculated field** for the asset **Building A** and select the **Script** type.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-4-ce.png
        title: **Create a new calculated field** for the asset **Building A** and select the **Script** type.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-4-ce.png
        title: Add a first argument:<br>- **Entity:** Smart Device<br>- **Argument type:** Time series rolling<br>- **Time series key:** <i>temperature</i>.<br>Click **Add**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-4-ce.png
        title: Add a second argument:<br>- **Entity:** Altimeter<br>- **Argument type:** Attribute<br>- **Attribute key:** <i>altitude</i>.<br>Click **Add**.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-4-ce.png
        title: Paste the calculation function into the **Script** field.<br>- In the **Output** section, select **type:** <i>Time series</i>.<br>- Click **Add** to save the calculated field.
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-4-ce.png
        title: The calculated field has been added.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript9 %}

<hr>

<b><font size="4">Result</font></b>

In the device&#39;s **Latest telemetry** tab, the issue key appears when the condition is met, for example:

```json
{
  "issue": {
    "temperature": 0.8,
    "defrostState": false
  }
}

```

This indicates the freezer is in a potentially critical state and may require attention.

{% assign exampleScript10 = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-cf-example-3-10-ce.png
        title: In the device&#39;s **Latest telemetry** tab, the issue key appears when the condition is met. This indicates the freezer is in a potentially critical state and may require attention.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript10 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.