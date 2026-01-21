* TOC
{:toc}

**Propagation** automatically transfers data from the current entity to one or more related entities resolved through entity relations. 
It can either **copy values as-is** or **compute a new value before sending**, which makes it ideal for synchronizing telemetry and attributes across entity hierarchies.

Use "Propagation" when you need to:
- Mirror device telemetry to a parent asset (e.g., battery level, signal quality, last known status)
- Push configuration attributes from an asset to child devices (e.g., HVAC mode, setpoints, operating profiles)
- Transform data before sharing it (e.g., calculate dew point on a device and store it on the greenhouse asset)
- Propagate to multiple entities (e.g., update all devices managed by a building or a group)

<hr>

## Configuration

{% assign calculatedFieldType = "**Propagation**" %}
{% include /docs/user-guide/calculated-fields/blocks/creating-calculated-field.md %}

<hr>

### Propagation path to related entities

<b><font size="3">Relation direction</font></b>   
Define the path from the current entity to the entity to which the data will be propagated:
- **Up to parent** — data is propagated to the parent entity.
- **Down to child** — data is propagated to the child entity.

> Propagation works only with direct (single-level) relationships — without recursion or multi-level traversal.

<b><font size="3">Relation type</font></b>   
Defines the relationship type between the target entity and the related entities (for example, _Contains_, _Manages_, or any other type).

> If multiple entities match the selected relationship direction and relationship type, the data will be propagated to each of them.

{% assign propagationPathToRelatedEntities = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-path-to-related-entities-1-ce.png
        title: Define the path to the entity to which the data will be propagated, as well as the relationship type between the entities.
'
%}

{% include images-gallery.liquid imageCollection=propagationPathToRelatedEntities %}

<hr>

### Data to propagate

Define which data will be propagated to the related entity.   
The data to propagate is configured as arguments. For details on argument types and configuration, see the [Arguments](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"} section.

Two modes are available:

<b><font size="3">1. Arguments only</font></b>   
  Works as direct data copying data ([attribute](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"} or [latest telemetry](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=latestTelemetry#arguments){:target="_blank"}) from the _current entity_ to the related entity, with the option to rename the propagated key before storing it.

{% assign propagationArgument = '
    ===
        image: /images/user-guide/calculated-fields/propagation/data-to-propagate-1-ce.png
        title: Click **Add argument** (1).
    ===
        image: /images/user-guide/calculated-fields/propagation/data-to-propagate-2-ce.png
        title: The data source will be the current entity to which the calculated field is applied.<br>Specify the **argument type** (2), **time series key / attribute key** (3), **output key** (4), and **default value** (5), then click **Add** (6).
'
%}

{% include images-gallery.liquid imageCollection=propagationArgument %}

<b><font size="3">2. Calculation result</font></b>   
  Allows you to compute or transform data ([attribute](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#arguments){:target="_blank"}, [latest telemetry](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=latestTelemetry#arguments){:target="_blank"}, or [time series rolling](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=timeSeriesRolling#arguments){:target="_blank"}) from multiple entities (_Current entity / Device / Asset / Customer / Current tenant / Current owner_) before propagating it to the related entity.

The sequence of actions is as follows:
- Configure the arguments that will provide input data  from the selected entity for further processing.
- Provide a [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} script that will calculate a new value based on the defined arguments.
- The computed result is then propagated to the related entity.

> The variable name that stores the computed result must be defined directly in the function body.

{% assign propagationArgument = '
    ===
        image: /images/user-guide/calculated-fields/propagation/data-to-propagate-3-ce.png
        title: Switch to **Calculation result** mode (1). Click **Add argument** (2).
    ===
        image: /images/user-guide/calculated-fields/propagation/data-to-propagate-4-ce.png
        title: The data source will be the **current entity** (3) to which the calculated field is applied.<br>Specify the **argument type** (4), **time series key / attribute key** (5), **output key** (6), and **default value** (7), then click **Add** (8).
    ===
        image: /images/user-guide/calculated-fields/propagation/data-to-propagate-5-ce.png
        title: Provide a TBEL script that will calculate a new value based on the defined arguments.
'
%}

{% include images-gallery.liquid imageCollection=propagationArgument %}

<hr>

<b><font size="4">Script</font></b>

{% include docs/user-guide/calculated-fields/blocks/script-calculation.md %}

<hr>

### Output

Data is propagated to each related entity and stored there as either [time series](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} or [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"}.

For more details about output types and processing strategies, see the [Output](/docs/user-guide/calculated-fields/?calculatedfieldsargumenttype=attribute#output){:target="_blank"} section.

<hr>

## Examples

To help you get started, here are three common configuration patterns applied to real-world scenarios.

### Example 1: Propagate device battery level to the parent Asset

<b><font size="4">Use case</font></b>   
The Tracker A device sends its battery charge level (<span class="code-light">batteryLevel</span>) to ThingsBoard as telemetry.

<b><font size="4">Goal</font></b>   
Automatically propagate the device battery level to the related Truck 1 asset and store it as a server-side attribute under a new key: <span class="code-light">deviceBatteryLevel</span>.

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Battery level propagation" calculated field configuration (JSON)](/docs/user-guide/resources/calculated-fields/propagation/battery_level_propagation_cf.json){:target="_blank" download="battery_level_propagation_cf.json"}.

<br><b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes battery telemetry.
1. Download the CSV file: [battery-level-device-data.csv](/docs/user-guide/resources/calculated-fields/propagation/battery-level-device-data.csv){:target="_blank" download="battery-level-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Tracker A
- **Type:** tracker
- **Time series:** <span class="code-light">batteryLevel</span>

> **Important note about the CSV:** the column type for the <span class="code-light">batteryLevel</span> key must be set to "**Time series**".

{% assign examplePropagateDeviceBattery1 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-1-ce.png
        title: Import a device that publishes **battery level** telemetry.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery1 %}

<br><b><font size="3">2. Import demo asset</font></b>

Import an asset that represents the tracked truck.
1. Download the CSV file: [battery-level-asset-data.csv](/docs/user-guide/resources/calculated-fields/propagation/battery-level-asset-data.csv){:target="_blank" download="battery-level-asset-data.csv"}
2. Go to **Assets** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Truck 1
- **Type:** truck

{% assign examplePropagateDeviceBattery2 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-2-ce.png
        title: Import the demonstration asset Truck 1.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery2 %}

<br><b><font size="3">3. Create a relation between the asset and the device</font></b>

Create a relation so the calculated field can resolve the target asset.

Create a relationship between the **Track 1** asset and the **Tracker A** device:
- Relation direction: **From**
- Relation type: **Contains**

This relation is used by the propagation calculated field to locate the parent entity.

{% assign examplePropagateDeviceBattery3 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-3-ce.png
        title: The **Tracker** device linked to the **Track 1** asset via the **Contains** relation.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery3 %}

<br><b><font size="3">4. Apply the Propagation calculated field to the device profile</font></b>

Configure a **Propagation** calculated field in the **tracker** device profile (automatically created during device import) so that it works for Tracker A.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/propagation/battery_level_propagation_cf.json){:target="_blank" download="battery_level_propagation_cf.json"}.
2. Go to the "Calculated fields" tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This configuration propagates the latest telemetry value of <span class="code-light">batteryLevel</span> to the parent asset (**Truck 1**).

{% assign examplePropagateDeviceBattery4 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-4-ce.png
        title: Go to the **Calculated fields** tab and import the calculated field configuration.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-5-ce.png
        title: Apply the calculated field to the **tracker** profile so it runs for all devices using it.<br>Propagation path to related entities: Relation direction: Up to parent; Relation type: Contains
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-6-ce.png
        title: Argument settings:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** batteryLevel<br>- **Output key:** deviceBatteryLevel<br>- **Default value:** no data.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-7-ce.png
        title: The output value will be stored as a server-side **attribute**.<br>Click **Add** to save the calculated field.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery4 %}

<br><b><font size="4">Result</font></b>

The <span class="code-light">deviceBatteryLevel</span> attribute is propagated and stored on the **Truck 1** asset as a **server-side attribute**.

{% assign examplePropagateDeviceBattery5 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-8-ce.png
        title: The **deviceBatteryLevel** attribute is propagated and stored on the **Truck 1** asset as a **server-side attribute**.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery5 %}

<hr>

### Example 2: Dew point calculation and propagation to a parent Asset

<b><font size="4">Scenario</font></b>   
A Smart Device sends <span class="code-light">temperature</span> and <span class="code-light">humidity</span> telemetry to ThingsBoard and is linked to the Greenhouse A asset via the _Contains_ relation.

<b><font size="4">Goal</font></b>   
Calculate the **dew point**, propagate the result to the related asset (**Greenhouse A**), and store it as a **telemetry**.

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Dew point propagation" calculated field configuration (JSON)](/docs/user-guide/resources/calculated-fields/propagation/dew_point_propagation_cf.json){:target="_blank" download="dew_point_propagation_cf.json"}.

<br><b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes temperature and humidity telemetry.
1. Download the CSV file: [dew-point-calculation-device-data.csv](/docs/user-guide/resources/calculated-fields/propagation/dew-point-calculation-device-data.csv){:target="_blank" download="dew-point-calculation-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Smart Device
- **Type:** smart-device
- **Time series:** <span class="code-light">humidity</span>, <span class="code-light">temperature</span>

> **Important note about the CSV:** the column type for the <span class="code-light">humidity</span> and <span class="code-light">temperature</span> keys must be set to "**Time series**".

{% assign exampleDewPointPropagation1 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-1-ce.png
        title: Import a device that publishes **temperature** and **humidity** telemetry.
'
%}

{% include images-gallery.liquid imageCollection=exampleDewPointPropagation1 %}

<br><b><font size="3">2. Import demo asset</font></b>

Import the asset that represents the greenhouse.
1. Download the CSV file: [dew-point-calculation-and-propagation-asset-data.csv](/docs/user-guide/resources/calculated-fields/propagation/dew-point-calculation-and-propagation-asset-data.csv){:target="_blank" download="dew-point-calculation-and-propagation-asset-data.csv"}
2. Go to **Assets** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Greenhouse A
- **Type:** greenhouse

{% assign exampleDewPointPropagation2 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-2-ce.png
        title: Import the demonstration asset Greenhouse A.
'
%}

{% include images-gallery.liquid imageCollection=exampleDewPointPropagation2 %}

<br><b><font size="3">3. Create a relation between the asset and the device</font></b>

Create a relationship between the **Greenhouse A** asset and the **Smart Device**:
- Relation direction: **From**
- Relation type: **Contains**

This relation allows the calculated field to locate the parent asset when propagating output.

{% assign exampleDewPointPropagation3 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-3-ce.png
        title: Create a relationship between the **Greenhouse A** asset and the **Smart Device**.
'
%}

{% include images-gallery.liquid imageCollection=exampleDewPointPropagation3 %}

<br><b><font size="3">4. Apply the calculated field to the device profile</font></b>

Configure the calculated field on the "smart-device" device profile (created automatically during device import), so it runs for Smart Device.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/propagation/dew_point_propagation_cf.json){:target="_blank" download="dew_point_propagation_cf.json"}.
3. Go to the "Calculated fields" tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This scenario calculates the dew point value from the specified input data. The value is propagated and stored as telemetry on the parent asset (**Greenhouse A**) under the <span class="code-light">dewPoint</span> key.

{% assign exampleDewPointPropagation4 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-4-ce.png
        title: Go to the **Calculated fields** tab and import the calculated field configuration.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-5-ce.png
        title: Apply the calculated field to the **smart-device** profile so it runs for all devices using it.<br>Propagation path to related entities: **Relation direction**: Up to parent; **Relation type**: Contains.<br><br>**Data to propagate:** switch to **Calculation result** mode.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-6-ce.png
        title: First argument settings:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** humidity<br>- **Argument name:** humidity.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-7-ce.png
        title: Second argument settings:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** temperature<br>- **Argument name:** temperature.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-8-ce.png
        title: This scenario calculates the dew point value from the specified input data. The value is propagated and stored as telemetry on the parent asset under the **dewPoint** key.<br>Click **Add** to save the calculated field.
'
%}

{% include images-gallery.liquid imageCollection=exampleDewPointPropagation4 %}

<br><b><font size="4">Result</font></b>

The calculated value is propagated to the **Greenhouse A** asset and stored as a **telemetry** under the key <span class="code-light">dewPoint</span>.

{% assign exampleDewPointPropagation5 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-9-ce.png
        title: The calculated value is propagated to the **Greenhouse A** asset and stored as a **telemetry** under the key **dewPoint**.
'
%}

{% include images-gallery.liquid imageCollection=exampleDewPointPropagation5 %}

<hr>

### Example 3: Propagate HVAC mode to multiple child devices

<b><font size="4">Scenario</font></b>   
The Building A asset manages multiple child HVAC devices linked via the _Manages_ relation. The asset-level <span class="code-light">hvacMode</span> server attribute defines the operating mode for all devices (for example, _cooling_, _heating_, _off_).

<b><font size="4">Goal</font></b>   
Automatically propagate the <span class="code-light">hvacMode</span> attribute from Building A to all related HVAC devices.

<b><font size="4">Calculated field configuration</font></b>   
[Download the "Propagate HVAC mode" calculated field configuration (JSON)](/docs/user-guide/resources/calculated-fields/propagation/cooling_propagation_cf.json){:target="_blank" download="cooling_propagation_cf.json"}.

<br><b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo devices</font></b>
1. Download the CSV file: [propagate-hvac-mode-device-data.csv](/docs/user-guide/resources/calculated-fields/propagation/propagate-hvac-mode-device-data.csv){:target="_blank" download="propagate-hvac-mode-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Room Sensor 1
- **Type:** sensor

{% assign examplePropagation31 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-1-ce.png
        title: Go to the **Devices** and **import** device configurations from a CSV file.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation31 %}

<br><b><font size="3">2. Import demo asset</font></b>

Import an asset that represents the building.
1. Download the CSV file: [propagate-hvac-mode-asset-data.csv](/docs/user-guide/resources/calculated-fields/propagation/propagate-hvac-mode-asset-data.csv){:target="_blank" download="propagate-hvac-mode-asset-data.csv"}
2. Go to **Assets** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Building A
- **Type:** building
- **Server attributes:** <span class="code-light">hvacMode</span>

> **Important note about the CSV:** the column type for the <span class="code-light">hvacMode</span> keys must be set to "**Server attributes**".

{% assign examplePropagation32 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-2-ce.png
        title: The imported **Building A** asset publishes the **hvacMode** value as an attribute.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation32 %}

<hr>

<b><font size="3">3. Create a relation between the asset and the devices</font></b>

Create a relationship between the **Building A** asset and the **room devices**.
- Relation direction: **From**
- Relation type: **Manages**

This relation is used by the propagation calculated field to locate the parent entity.

{% assign examplePropagation33 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-3-ce.png
        title: Create a relationship between the **Building A** asset and the **room devices**.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation33 %}

<br><b><font size="3">4. Apply the calculated field to the asset profile</font></b>

Configure a **Propagation** calculated field on the "building" asset profile (created automatically during asset import), so it runs for Building A.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/propagation/cooling_propagation_cf.json){:target="_blank" download="cooling_propagation_cf.json"}.
3. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This configuration propagates the attribute value of <span class="code-light">hvacMode</span> to the child devices.

{% assign examplePropagation34 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-4-ce.png
        title: Go to the **Calculated fields** tab and import the calculated field configuration.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-5-ce.png
        title: Apply the calculated field to the **building** profile so it runs for all asset using it.<br>Propagation path to related entities: **Relation direction**: Down to child; **Relation type**: Manages
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-6-ce.png
        title: Argument settings.<br>The propagated value will be stored on devices as an attribute.<br>Click <b>Add</b> to save the calculated field.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation34 %}

<br><b><font size="4">Result</font></b>

Each HVAC device received the <span class="code-light">hvacMode</span> attribute with the value **cooling**.

{% assign examplePropagation35 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-7-ce.png
        title: Each HVAC device received the **hvacMode** attribute with the value **cooling**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-8-ce.png
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-9-ce.png
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation35 %}

<hr>

## Troubleshooting

### Propagation path settings do not apply after the update

**Problem:** When editing an existing Calculated Field to change the **Relation direction** or **Relation type** (e.g., switching from *Contains* to *Manages*), the field ignores these changes and continues to propagate data using the originally configured path.

**Cause:** The Calculated Field logic caches the **Propagation path to related entities** defined during the initial creation. It does not correctly detect updates made specifically to the relation direction or relation type in the configuration, resulting in the field failing to re-initialize the path.

**Solution:** To force the Calculated Field to apply the new propagation path settings,
the system requires a configuration change to the **Data to propagate** section.
Any modification to the arguments will trigger the necessary re-initialization.

Choose one of the following safe methods:

1. Re-create the Field (Cleanest)
   If you must keep your current arguments exactly as they are (e.g., you cannot change default values), the only way to trigger the update is to delete the existing Calculated Field and create a new one with the correct propagation path settings.

2. Modify Default Value (Recommended Workaround)
   If you want to fix the issue without re-creating the field,
   edit an existing argument and change its **Default value** (e.g., set a value if it was empty, or update it).
   > If the source data is missing, the new default value will be used. However, if the source data is always present, this is the smartest method as it forces the update with zero impact on your data.

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.