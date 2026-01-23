* TOC
{:toc}

Script calculated fields use [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} (ThingsBoard Expression Language) to perform advanced, real-time computations on telemetry and attributes. Unlike Simple fields, Script fields support conditional logic, iteration over rolling time-series values, working with historical windows, and returning multiple results in a single execution.

Use "Script" calculated fields when you need logic that goes beyond a single math expression, such as:
- Multi-step calculations (e.g., dew point, air density, efficiency metrics)
- Conditional rules (e.g., generate status flags based on multiple inputs)
- Multi-output results (e.g., compute several derived values at once)
- Event-like telemetry generation (e.g., produce anomaly records with timestamps)
- Rolling analytics using historical windows (e.g., rolling average, trend detection, smoothing)

<hr>

## Configuration

{% assign calculatedFieldType = "**Script**" %}
{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

### Arguments

Arguments define which data sources and keys are passed into the script. For Script calculated fields, arguments can be [Latest telemetry](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=latestTelemetry#arguments){:target="_blank"}, [Attribute](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"}, or [time series rolling](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=timeSeriesRolling#arguments){:target="_blank"}).   
The data source can be **Current entity**, another **Device/Asset**, the **Customer**, the **Current tenant**, or the **Current owner**.

For details about argument types and parameters, see the [Arguments](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"} section in the Calculated fields documentation.

<hr>

### Script

{% include docs/user-guide/calculated-fields/blocks/script-calculation.md %}

<hr>

### Output

The calculation result is stored either as a [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or an [attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.   

For more details about output types and processing strategies, see the [Output](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#output){:target="_blank"} section.

<hr>

## Examples

To help you get started, here are three common configuration patterns applied to real-world scenarios.

### Example 1: Fahrenheit to Celsius

<b><font size="4">Scenario</font></b>   
A device reports indoor temperature in **degrees Fahrenheit** as telemetry under the <span class="code-light">temperatureF</span> key.

<b><font size="4">Goal</font></b>   
Convert <span class="code-light">temperatureF</span> to **degrees Celsius**, round to two decimal places, and store the result as telemetry under the <span class="code-light">temperatureC</span> key using the same timestamp as the incoming data.

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Fahrenheit to Celsius" calculated field configuration (JSON)](/docs/user-guide/resources/calculated-fields/script/f_to_c_script_cf.json){:target="_blank" download="f_to_c_script_cf.json"}.

<br><b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes temperature telemetry.
1. Download the CSV file: [fahrenheit-to-celsius-calculation-device-data.csv](/docs/user-guide/resources/calculated-fields/script/fahrenheit-to-celsius-calculation-device-data.csv){:target="_blank" download="fahrenheit-to-celsius-calculation-device-data.csv"}
2. Go to the "Devices" and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Smart Device
- **Type:** smart-device
- **Time series:** <span class="code-light">temperatureF</span>

> **Important note about the CSV:** the column type for the <span class="code-light">temperatureF</span> key must be set to "**Time series**".

{% assign exampleScript1 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-1-1-ce.png
        title: Import a device that publishes temperature telemetry.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript1 %}

<br><b><font size="3">2. Apply the calculated field to the device profile</font></b>

1. [Download the calculated field configuration file (JSON)](/docs/user-guide/resources/calculated-fields/script/f_to_c_script_cf.json){:target="_blank" download="f_to_c_script_cf.json"}.
2. Go to the "Calculated fields" tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.   
   Apply a calculated field to the "smart-device" profile, which is automatically created during device import. This field will apply to all devices associated with this profile.

This configuration reads <span class="code-light">temperatureF</span>, converts it to Celsius, and stores the result as <span class="code-light">temperatureC</span>.

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
}

{% assign exampleScript2 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-1-2-ce.png
        title: Go to the **Calculated fields** tab and import the calculated field configuration.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-1-3-ce.png
        title: Apply the calculated field to the **smart-device** profile so it runs for all devices using it.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-1-4-ce.png
        title: Argument settings:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** temperatureF<br>- **Argument name:** temperatureF.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-1-5-ce.png
        title: The specified <b>script</b> converts the temperature value from Fahrenheit to Celsius and stores the result under the <b>temperatureC</b> telemetry key.<br>Click <b>Add</b> to save the calculated field.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript2 %}

<br><b><font size="4">Result</font></b>

On the "Latest telemetry" tab of the Smart Device, the calculated temperature value in Celsius is displayed under a new telemetry key: <span class="code-light">temperatureC</span>.

{% assign exampleScript3 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-1-6-ce.png
        title: On the "Latest telemetry" tab of the Smart Device, the calculated temperature value in Celsius is displayed under a new telemetry key: **temperatureC**.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript3 %}

<hr>

### Example 2: Air density calculation

<b><font size="4">Scenario</font></b>   
The **Building A** asset has two associated devices:
- **Smart Device** — publishes temperature (Fahrenheit) as telemetry under (<span class="code-light">temperature</span>)
- **Altimeter** — provides altitude as a server attribute (<span class="code-light">altitude</span>)

<b><font size="4">Goal</font></b>   
Calculate air density based on:
- average temperature over the last 15 minutes (rolling window)
- altitude attribute

Store the result as a new telemetry value under the <span class="code-light">airDensity</span> key on Building A.

<b><font size="4">Calculated field configuration</font></b>   
[Click to download the "Air density calculation" field configuration (JSON)](/docs/user-guide/resources/calculated-fields/script/air_density_calculation_cf.json){:target="_blank" download="air_density_calculation_cf.json"}.

<br><b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import two devices: one publishing temperature telemetry and one providing altitude as an attribute.
1. Download the CSV file: [air-density-calculation-device-data.csv](/docs/user-guide/resources/calculated-fields/script/air-density-calculation-device-data.csv){:target="_blank" download="air-density-calculation-device-data.csv"}
2. Go to the "Devices" and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

<b><font size="3">CSV includes:</font></b>

**Device 1**
- **Name:** Smart Device
- **Type:** smart-device
- **Time series:** <span class="code-light">temperature</span>

**Device 2**
- **Name:** Altimeter
- **Type:** height-sensor
- **Server attribute:** <span class="code-light">altitude</span>

> **Important notes about the CSV:**
- the column type for the <span class="code-light">temperature</span> key must be set to "**Time series**".
- the column type for the <span class="code-light">altitude</span> key must be set to "**Server attribute**".
 
{% assign exampleScript4 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-1-ce.png
        title: Go to the **Devices** and **import** device configurations from a CSV file.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-2-ce.png
        title: **Servet attribute:** altitude<br>**Time series:** temperature
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-3-ce.png
        title: The imported **Altimeter** device publishes **altitude** as a server-side attribute.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-4-ce.png
        title: The imported **Smart Device** publishes **temperature** as telemetry data.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript4 %}

<br><b><font size="3">2. Import demo asset</font></b>

Import the asset that represents the building.
1. Download the CSV file: [air-density-calculation-asset-data.csv](/docs/user-guide/resources/calculated-fields/script/air-density-calculation-asset-data.csv){:target="_blank" download="air-density-calculation-asset-data.csv"}
2. Go to "Assets" and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Building A
- **Type:** building

{% assign exampleScript5 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-5-ce.png
        title: Import the demonstration asset Building A.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript5 %}

<br><b><font size="3">3. Apply the calculated field to the asset profile</font></b>

Apply the calculated field to the "building" asset profile, so it runs for Building A.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/script/air_density_calculation_cf.json){:target="_blank" download="air_density_calculation_cf.json"}.
2. Go to the "Calculated fields" tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.   

This configuration:
- reads rolling temperature from Smart Device
- reads altitude from Altimeter as an attribute
- calculates air density
- stores the output as telemetry on the asset

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

<br>

{% assign exampleScript6 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-6-ce.png
        title: Go to the **Calculated fields** tab and import the calculated field configuration.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-7-ce.png
        title: Apply the calculated field to the **building** profile so it runs for all asset using it.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-8-ce.png
        title: First argument settings:<br>- **Entity:** Altimeter<br>- **Argument type:** Attribute<br>- **Attribute scope:** Server attribute<br>- **Attribute key:** altitude<br>- **Argument name:** altitude
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-9-ce.png
        title: Second argument settings:<br>- **Entity:** Smart Device<br>- **Argument type:** Time series rolling<br>- **Time series key:** temperature<br>- **Argument name:** temperature<br>- **Time window:** 15 minutes
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-10-ce.png
        title: The specified <b>script</b> calculates the air density and stores the result under the <b>airDensity</b> key.<br>Click <b>Add</b> to save the calculated field.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript6 %}

<br><b><font size="4">Result</font></b>

In the "Latest telemetry" tab of the Building A asset, the calculated value appears under the <span class="code-light">airDensity</span> key.

{% assign exampleScript7 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-2-11-ce.png
        title: In the **Latest telemetry** tab of the **Building A** asset, the calculated value appears under the **airDensity** key.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript7 %}

<hr>

### Example 3: Freezer temperature analysis

<b><font size="4">Scenario</font></b>   
A freezer device publishes two telemetry keys:
- <span class="code-light">temperature</span> — freezer temperature (°C)
- <span class="code-light">defrost</span> — defrost mode status (0 = OFF, 1 = ON)

<b><font size="4">Goal</font></b>   
Generate an event-like telemetry record under the issue key whenever:
- <span class="code-light">defrost</span> = 0 (defrost is OFF), and
- <span class="code-light">temperature</span> > -5°C

When the condition is met, store an "issue record" with a timestamp.

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Freezer temperature analysis" calculated field configuration (JSON)](/docs/user-guide/resources/calculated-fields/script/freezer_temperature_analysis_cf.json){:target="_blank" download="freezer_temperature_analysis_cf.json"}.

<br><b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes **temperature** and **defrost** data as telemetry.
1. Download the CSV file: [freezer-temperature-analysis-device-data.csv](/docs/user-guide/resources/calculated-fields/script/freezer-temperature-analysis-device-data.csv){:target="_blank" download="freezer-temperature-analysis-device-data.csv"}
2. Go to the "Devices" and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Smart Device
- **Type:** smart-device
- **Time series:** <span class="code-light">temperature</span>, <span class="code-light">defrost</span>

> **Important note about the CSV:** the column type for the <span class="code-light">temperature</span> and <span class="code-light">defrost</span> keys must be set to "**Time series**".

{% assign exampleScript8 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-3-1-ce.png
        title: Import a device that publishes **temperature** and **defrost** data as telemetry.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript8 %}

<br><b><font size="3">2. Apply the calculated field to the device profile</font></b>

Apply the calculated field to the "smart-device" profile so it runs for the freezer device(s).

1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/script/freezer_temperature_analysis_cf.json){:target="_blank" download="freezer_temperature_analysis_cf.json"}.
2. Go to the "Calculated fields" tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This configuration:
- Aligns the temperature and defrost state data by timestamp.
- Selects only the moments when the temperature is higher than -5°C and defrost is off. 
- As a result, you get a list of such moments with the timestamp, the temperature value, and a <span class="code-light">defrostState</span>: **false** flag (or an empty list if no such moments exist).

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
}

<br>
{% assign exampleScript9 = '
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-3-2-ce.png
        title: Go to the **Calculated fields** tab and import the calculated field configuration.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-3-3-ce.png
        title: Apply the calculated field to the **smart-device** profile so it runs for all devices using it.
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-3-4-ce.png
        title: First argument settings:<br>- **Entity type:** Current entity<br>- **Argument type:** Time series rolling<br>- **Time series key:** defrost<br>- **Argument name:** defrost<br>- **Time window:** 15 minutes
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-3-5-ce.png
        title: Second argument settings:<br>- **Entity type:** Current entity<br>- **Argument type:** Time series rolling<br>- **Attribute key:** temperature<br>- **Argument name:** temperature<br>- **Time window:** 15 minutes
    ===
        image: /images/user-guide/calculated-fields/script/script-cf-example-3-6-ce.png
        title: The function aligns the temperature and defrost state data by timestamp, and then selects only the moments when the temperature is higher than -5°C and defrost is off.<br>As a result, you get a list of such moments with the timestamp, the **temperature** value, and a **defrostState: false** flag (or an empty list if no such moments exist).<br>Click **Add** to save the calculated field.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript9 %}

<br><b><font size="4">Result</font></b>

In the "Latest telemetry" tab of the Smart Device, the issue key appears when the condition is met, for example:

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
        image: /images/user-guide/calculated-fields/script/script-cf-example-3-7-ce.png
        title: In the **Latest telemetry** tab of the Smart Device, the issue key appears when the condition is met. This indicates the freezer is in a potentially critical state and may require attention.
'
%}

{% include images-gallery.liquid imageCollection=exampleScript10 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.