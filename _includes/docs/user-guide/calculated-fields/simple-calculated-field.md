* TOC
{:toc}

**Simple** calculated fields perform real-time calculations using basic arithmetic operations (<span class="code-light">+</span>, <span class="code-light">-</span>, <span class="code-light">*</span>, <span class="code-light">/</span>) and standard mathematical functions such as <span class="code-light">sqrt</span>, <span class="code-light">pow</span>, <span class="code-light">abs</span>, <span class="code-light">min</span>, and <span class="code-light">max</span>. They are designed for lightweight transformations and derived values that do not require scripting.

Use "Simple" calculated fields when you need fast, declarative computations such as:
- Normalization and scaling (e.g., apply multipliers, offsets, calibration factors)
- Derived sensor metrics (e.g., dew point, heat index, power from voltage × current)
- Threshold-based values (e.g., clamp values, compute deltas, simple scoring)
- Cross-entity calculations (e.g., combine telemetry from device + attribute from asset)

<hr>

## Configuration

Define the data sources, calculation logic, result format, and how it will be further processed in the system.

### General

{% assign calculatedFieldType = "Select the **Simple** - this type uses a single mathematical expression with standard functions." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

<hr>

### Arguments

For a Simple calculated field, arguments can be either [latest telemetry](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=latestTelemetry#arguments){:target="_blank"} or [attribute](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"}.   
The data source can be **Current entity**, another **Device/Asset**, the **Customer**, the **Current tenant**, or the **Current owner**.

For more information about arguments, their types, and configuration parameters, see the [Arguments](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"} section in the Calculated Fields documentation.

<hr>

### Expression

In the **Expression** section, define the calculation using a single mathematical expression.
- References [argument](#arguments) variables directly by name.
- Supports arithmetic operations (<span class="code-light">+</span>, <span class="code-light">-</span>, <span class="code-light">*</span>, <span class="code-light">/</span>) and standard functions such as <span class="code-light">abs</span>, <span class="code-light">sqrt</span>, <span class="code-light">pow</span>, <span class="code-light">min</span>, and <span class="code-light">max</span>.
- Produces a single result value, which is saved under the configured output key.

<hr>

### Output

The calculation result is stored either as a [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or an [attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.   
Specify the key under which the computed value will be saved, and if needed, set Decimals to round the value.

> **[Only for Time series]**   
Enable **Use latest timestamp** to store the result using the most recent argument timestamp instead of server time.

For more details about output types and processing strategies, see the [Output](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#output){:target="_blank"} section.

<hr>

## Example: Dew point calculation

<b><font size="4">Scenario</font></b>   
The Smart Device sends <span class="code-light">temperature</span> and <span class="code-light">humidity</span> telemetry data in real time.

<b><font size="4">Goal</font></b>   
You need to calculate the dew point and store the result as telemetry on the same device.

<hr>

<b><font size="4">Calculated field configuration</font></b>   
[Click to download the dew point calculated field configuration](/docs/user-guide/resources/calculated-fields/simple/dew_point_calculation_simple_cf.json){:target="_blank" download="dew_point_calculation_simple_cf.json"}.

<hr>

<b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes temperature and humidity telemetry.
1. Download the CSV file: [dew-point-calculation-device-data.csv](/docs/user-guide/resources/calculated-fields/propagation/dew-point-calculation-device-data.csv){:target="_blank" download="dew-point-calculation-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Smart Device
- **Type:** smart-device
- **Time series:** <span class="code-light">humidity</span>
- **Time series:** <span class="code-light">temperature</span>

{% assign examplePropagation21 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-1-ce.png
        title: Go to the Devices and Import device configurations from a CSV file.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-2-ce.png
        title: CSV includes:<br>Name: Smart Device; Type: smart-device; Time series: humidity; Time series: temperature
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-3-ce.png
        title: Smart Device has been added.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation21 %}

<hr>

<b><font size="3">2. Apply the calculated field to the device profile</font></b>

Configure the calculated field on the **smart-device** device profile (created automatically during device import), so it runs for Smart Device.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/simple/dew_point_calculation_simple_cf.json){:target="_blank" download="dew_point_calculation_simple_cf.json"}.
2. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.   
   Apply a calculated field to the "smart-device" profile, which is automatically created during device import. This field will apply to all devices associated with this profile.

The expression used in this example is:

```bash
(243.04 * (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature)) /
(17.625 - (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature))))
```
{:.copy-code}

This configuration reads <span class="code-light">temperature</span> and <span class="code-light">humidity</span>, calculates the dew point, and stores the result on the device that uses the smart-device profile.

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

The dew point is calculated and saved as telemetry on the Smart Device under the <span class="code-light">dewPoint</span> key.

{% assign exampleSimple3 = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-8-ce.png
        title: The dew point is calculated and saved as telemetry on the Smart Device under the <span class="code-light">dewPoint</span> key.
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple3 %}



<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.