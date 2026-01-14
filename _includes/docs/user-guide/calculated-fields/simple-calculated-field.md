* TOC
{:toc}

Simple calculated fields perform real-time calculations using a single **mathematical expression**. 
They support basic arithmetic operations (<span class="code-light">+</span>, <span class="code-light">-</span>, <span class="code-light">*</span>, <span class="code-light">/</span>) and standard functions such as <span class="code-light">sqrt</span>, <span class="code-light">pow</span>, <span class="code-light">abs</span>, <span class="code-light">min</span>, and <span class="code-light">max</span>. 
This type is designed for lightweight transformations and derived values that do not require scripting.

Use Simple calculated fields when you need fast, declarative computations such as:
- Normalization and scaling (multipliers, offsets, calibration factors)
- Derived sensor metrics (e.g., dew point, heat index, power = voltage × current)
- Threshold-based values (clamping, simple scoring, deltas)
- Cross-entity calculations (e.g., combine device telemetry with asset attributes)

<hr>

## Configuration

{% assign calculatedFieldType = "**Simple**" %}
{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

### Arguments

For a Simple calculated field, arguments can be either [latest telemetry](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=latestTelemetry#arguments){:target="_blank"} or [attribute](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"}.   
The data source can be **Current entity**, another **Device/Asset**, the **Customer**, the **Current tenant**, or the **Current owner**.

For details about argument types and configuration parameters, see the [Arguments](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"}.

<hr>

### Expression

In the **Expression** section, define the calculation using a single mathematical formula.
- References [argument](#arguments) variables directly by name (e.g., temperature, humidity)
- Supports arithmetic operations (<span class="code-light">+</span>, <span class="code-light">-</span>, <span class="code-light">*</span>, <span class="code-light">/</span>) and standard functions such as <span class="code-light">abs</span>, <span class="code-light">sqrt</span>, <span class="code-light">pow</span>, <span class="code-light">min</span>, and <span class="code-light">max</span>.
- Produces a **single result value**, saved under the configured output key

<hr>

### Output

The calculation result is stored either as a [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or an [attribute](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.

In Output, specify:
- **Key** — the name under which the computed value will be saved
- **Decimals** — optional rounding

> **[Only for Time series]**   
**Use latest timestamp** — stores the result using the most recent argument timestamp instead of server time.

For more details about output types and processing strategies, see the [Output](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#output){:target="_blank"}.

<hr>

## Example: Dew point calculation

<b><font size="4">Scenario</font></b>   
The Smart Device sends <span class="code-light">temperature</span> and <span class="code-light">humidity</span> telemetry in real time.

<b><font size="4">Goal</font></b>   
Calculate the dew point and store the result as telemetry under the <span class="code-light">dewPoint</span> key on the same device.

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Dew point calculation" calculated field configuration (JSON)](/docs/user-guide/resources/calculated-fields/simple/dew_point_calculation_simple_cf.json){:target="_blank" download="dew_point_calculation_simple_cf.json"}.

<br><b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes temperature and humidity telemetry.
1. Download the CSV file: [dew-point-calculation-device-data.csv](/docs/user-guide/resources/calculated-fields/propagation/dew-point-calculation-device-data.csv){:target="_blank" download="dew-point-calculation-device-data.csv"}
2. Go to the "Devices" and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Smart Device
- **Type:** smart-device
- **Time series:** <span class="code-light">humidity</span>, <span class="code-light">temperature</span>

> **Important note about the CSV:** the column type for the <span class="code-light">humidity</span> and <span class="code-light">temperature</span> keys must be set to "**Time series**".

{% assign exampleSimple1 = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-1-ce.png
        title: Import a device that publishes **temperature** and **humidity** telemetry.
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple1 %}

<br><b><font size="3">2. Apply the calculated field to the device profile</font></b>

During the Smart Device import, a "smart-device" profile is automatically created and assigned to it.   
Apply the calculated field to this profile so it runs for all devices that use the same profile.
1. [Download the calculated field configuration file (JSON)](/docs/user-guide/resources/calculated-fields/simple/dew_point_calculation_simple_cf.json){:target="_blank" download="dew_point_calculation_simple_cf.json"}.
2. Go to the "Calculated fields" tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.   

Expression used in this example:

```bash
(243.04 * (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature)) /
(17.625 - (ln(humidity / 100) + 17.625 * temperature / (243.04 + temperature))))
```
{:.copy-code}

Output settings:
- **Output type:** Time series
- **Key:** <span class="code-light">dewPoint</span>

{% assign exampleSimple2 = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-2-ce.png
        title: Go to the **Calculated fields** tab and import the calculated field configuration.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-3-ce.png
        title: Apply the calculated field to the **smart-device** profile so it runs for all devices using it.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-4-ce.png
        title: First argument settings:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** humidity<br>- **Argument name:** humidity.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-5-ce.png
        title: Second argument settings:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** temperature<br>- **Argument name:** temperature.
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-6-ce.png
        title: The specified **mathematical expression** calculates the dew point.<br>The output value is stored as a time series under the **dewPoint** key.<br>Click **Add** to save the calculated field.
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple2 %}

<br><b><font size="4">Result</font></b>

The dew point is calculated and saved as telemetry on the Smart Device under the <span class="code-light">dewPoint</span> key.

{% assign exampleSimple3 = '
    ===
        image: /images/user-guide/calculated-fields/simple/simple-example-7-ce.png
        title: The dew point is calculated and saved as telemetry on the Smart Device under the **dewPoint** key.
'
%}

{% include images-gallery.liquid imageCollection=exampleSimple3 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.