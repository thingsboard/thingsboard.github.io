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

Define the propagation path, the data to propagate, and the output type for the results.

### General

{% assign calculatedFieldType = "Select **Propagation** — this calculated field type propagates data from the current entity to related entities based on relation direction and relation type." %}
{% include /docs/user-guide/calculated-fields/blocks/general-configuration.md %}

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
        title: Click **Add argument**.
    ===
        image: /images/user-guide/calculated-fields/propagation/data-to-propagate-2-ce.png
        title: The data source will be the current entity to which the calculated field is applied.<br>Specify the **argument type**, **time series key / attribute key**, **output key**, and **default value**, then click **Add**.
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
        title: Click **Add argument**.
    ===
        image: /images/user-guide/calculated-fields/propagation/data-to-propagate-4-ce.png
        title: The data source will be the **current entity** to which the calculated field is applied.<br>Specify the **argument type**, **time series key / attribute key**, **output key**, and **default value**, then click **Add**.
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

## Usage examples

To help you get started, here are three common configuration patterns applied to real-world scenarios.

### Example 1: Propagate device battery level to the parent Asset

<b><font size="4">Use case</font></b>   
The Tracker A device sends its battery charge level (<span class="code-light">batteryLevel</span>) to ThingsBoard as telemetry.

<b><font size="4">Goal</font></b>   
Automatically propagate the device battery level to the related Truck 1 asset and store it as a server-side attribute under a new key: <span class="code-light">deviceBatteryLevel</span>.

<hr>

<b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo device</font></b>

Import a device that publishes battery telemetry.
1. Download the CSV file: [battery-level-device-data.csv](/docs/user-guide/resources/calculated-fields/propagation/battery-level-device-data.csv){:target="_blank" download="battery-level-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Tracker A
- **Type:** tracker
- **Time series:** <span class="code-light">batteryLevel</span>

{% assign examplePropagateDeviceBattery1 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-11-ce.png
        title: The **Tracker** device sends the **battery charge level** to ThingsBoard.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-12-ce.png
        title: The **Tracker A** device linked to the **Track 1** asset via the **Contains** relation.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-13-ce.png
        title: The **Tracker A** device linked to the **Track 1** asset via the **Contains** relation.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery1 %}

<hr>

<b><font size="3">2. Import demo asset</font></b>

Import an asset that represents the tracked truck.
1. Download the CSV file: [battery-level-asset-data.csv](/docs/user-guide/resources/calculated-fields/propagation/battery-level-asset-data.csv){:target="_blank" download="battery-level-asset-data.csv"}
2. Go to **Assets** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Truck 1
- **Type:** truck

{% assign examplePropagateDeviceBattery2 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-14-ce.png
        title: The **Tracker** device sends the **battery charge level** to ThingsBoard.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-15-ce.png
        title: The **Tracker** device linked to the **Track 1** asset via the **Contains** relation.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery2 %}

<hr>

<b><font size="3">3. Create a relation between the asset and the device</font></b>

Create a relation so the calculated field can resolve the target asset.

Create a relationship between the **Track 1** asset and the **Tracker A** device:
- Relation direction: **From**
- Relation type: **Contains**

This relation is used by the propagation calculated field to locate the parent entity.

{% assign examplePropagateDeviceBattery4 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-16-ce.png
        title: Check the debug events by clicking the "Events" icon button".
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery4 %}

<hr>

<b><font size="3">4. Apply the Propagation calculated field to the device profile</font></b>

Configure a **Propagation** calculated field on the "tracker" device profile (created automatically during device import), so it runs for Tracker A.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/propagation/battery_level_propagation_cf.json){:target="_blank" download="battery_level_propagation_cf.json"}.
2. Open the "tracker" device profile.
3. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This configuration propagates the latest telemetry value of <span class="code-light">batteryLevel</span> to the parent asset.

{% assign examplePropagateDeviceBattery4 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-17-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-18-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-19-ce.png
        title: Check the debug events by clicking the "Events" icon button".
'
%}

{% include images-gallery.liquid imageCollection=examplePropagateDeviceBattery4 %}

<hr>

<b><font size="4">Result</font></b>

The <span class="code-light">deviceBatteryLevel</span> attribute is propagated and stored on the **Truck 1** asset as a **server-side attribute**.

{% assign examplePropagation12 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-1-result-ce.png
        title: The **deviceBatteryLevel** attribute is propagated and stored on the **Truck 1** asset as a **server-side attribute**.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation12 %}

<hr>

### Example 2: Dew point calculation and propagation to a parent Asset

<b><font size="4">Scenario</font></b>   
A Smart Device sends <span class="code-light">temperature</span> and <span class="code-light">humidity</span> telemetry to ThingsBoard and is linked to the Greenhouse A asset via the _Contains_ relation.

<b><font size="4">Goal</font></b>   
Calculate the **dew point**, propagate the result to the related asset (**Greenhouse A**), and store it as a **telemetry**.

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

<b><font size="3">2. Import demo asset</font></b>

Import the asset that represents the greenhouse.
1. Download the CSV file: [dew-point-calculation-and-propagation-asset-data.csv](/docs/user-guide/resources/calculated-fields/propagation/dew-point-calculation-and-propagation-asset-data.csv){:target="_blank" download="dew-point-calculation-and-propagation-asset-data.csv"}
2. Go to **Assets** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Greenhouse A
- **Type:** greenhouse

{% assign examplePropagation22 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-4-ce.png
        title: The **Tracker** device sends the **battery charge level** to ThingsBoard.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation22 %}

<hr>

<b><font size="3">3. Create a relation between the asset and the device</font></b>

Create a relation so the calculated field can resolve the target asset.

Create a relationship between the **Greenhouse A** asset and the **Smart Device**:
- Relation direction: **From**
- Relation type: **Contains**

This relation allows the calculated field to locate the parent asset when propagating output.

{% assign examplePropagation23 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-5-ce.png
        title: The **Tracker** device sends the **battery charge level** to ThingsBoard.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation23 %}

<hr>

<b><font size="3">4. Apply the calculated field to the device profile</font></b>

Configure the calculated field on the **smart-device** device profile (created automatically during device import), so it runs for Smart Device.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/propagation/dew_point_propagation_cf.json){:target="_blank" download="dew_point_propagation_cf.json"}.
2. Open the "**smart-device**" device profile.
3. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This configuration propagates the latest telemetry value of <span class="code-light">dewPoint</span> to the parent asset.

{% assign examplePropagation24 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-6-ce.png
        title: Import the calculated field configuration.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-7-ce.png
        title: Name **Dew point propagation**.<br>Specify **smart-device** entity<br>Propagation path to related entities:<br>**Relation direction**: Up to parent; **Relation type**: Contains.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-8-ce.png
        title: First argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** humidity<br>- **Output key:** humidity<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-9-ce.png
        title: Second argument:<br>- **Entity type:** Current entity<br>- **Argument type:** Latest telemetry<br>- **Time series key:** temperature<br>- **Output key:** temperature<br>Click **Add**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-10-ce.png
        title: The provided script will calculate a new dew point value based on the defined arguments.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-11-ce.png
        title: The calculated field has been imported.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation24 %}

<hr>

<b><font size="4">Result</font></b>

The calculated value is propagated to the **Greenhouse A** asset and stored as a **telemetry** under the key <span class="code-light">dewPoint</span>.

{% assign examplePropagation25 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-2-12-ce.png
        title: The calculated value is propagated to the **Greenhouse A** asset and stored as a **telemetry** under the key **dewPoint**.
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation25 %}

<hr>

### Example 3: Propagate HVAC mode to multiple child devices

<b><font size="4">Scenario</font></b>   
The Building A asset manages multiple child HVAC devices linked via the _Manages_ relation. The asset-level <span class="code-light">hvacMode</span> server attribute defines the operating mode for all devices (for example, _cooling_, _heating_, _off_).

<b><font size="4">Goal</font></b>   
Automatically propagate the <span class="code-light">hvacMode</span> attribute from Building A to all related HVAC devices.

<hr>

<b><font size="4">Configuration steps</font></b>

<b><font size="3">1. Import demo devices</font></b>

Import HVAC devices that will receive the propagated value.
1. Download the CSV file: [propagate-hvac-mode-device-data.csv](/docs/user-guide/resources/calculated-fields/propagation/propagate-hvac-mode-device-data.csv){:target="_blank" download="propagate-hvac-mode-device-data.csv"}
2. Go to the **Devices** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Room Sensor 1
- **Type:** sensor

{% assign examplePropagation31 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-1-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation31 %}
<hr>

<b><font size="3">2. Import demo asset</font></b>

Import an asset that represents the building.
1. Download the CSV file: [propagate-hvac-mode-asset-data.csv](/docs/user-guide/resources/calculated-fields/propagation/propagate-hvac-mode-asset-data.csv){:target="_blank" download="propagate-hvac-mode-asset-data.csv"}
2. Go to **Assets** and [import](/docs/user-guide/bulk-provisioning/){:target="_blank"} the CSV file.

**CSV includes:**
- **Name:** Building A
- **Type:** building
- **Server attributes:** hvacMode

{% assign examplePropagation32 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-2-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-3-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-4-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation32 %}

<hr>

<b><font size="3">3. Create a relation between the asset and the devices</font></b>

Create a relationship between the **Building A** asset and the **smart devices**.
- Relation direction: **From**
- Relation type: **Manages**

This relation is used by the propagation calculated field to locate the parent entity.

{% assign examplePropagation33 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-5-ce.png
        title: The **hvacMode** attribute on the asset level defines the operating mode of the devices (_cooling_, _heating_, _off_).
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation33 %}

<hr>

<b><font size="3">4. Apply the calculated field to the device profile</font></b>

Configure a **Propagation** calculated field on the "tracker" device profile (created automatically during device import), so it runs for Tracker A.
1. [Download the calculated field configuration file](/docs/user-guide/resources/calculated-fields/propagation/cooling_propagation_cf.json){:target="_blank" download="cooling_propagation_cf.json"}.
2. Open the "tracker" device profile.
3. Go to the Calculated fields tab and [import](/docs/user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} the configuration.

This configuration propagates the latest telemetry value of <span class="code-light">batteryLevel</span> to the parent asset.

{% assign examplePropagation34 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-6-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-7-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-8-ce.png
        title: Check the debug events by clicking the "Events" icon button".
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-9-ce.png
        title: Check the debug events by clicking the "Events" icon button".
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation34 %}

<hr>

<b><font size="4">Result</font></b>

**Each child HVAC device** will receive the **hvacMode** attribute with the value **cooling**.

{% assign examplePropagation33 = '
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-10-ce.png
        title: **Each child HVAC device** will receive the **hvacMode** attribute with the value **cooling**.
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-11-ce.png
    ===
        image: /images/user-guide/calculated-fields/propagation/propagation-cf-example-3-12-ce.png
'
%}

{% include images-gallery.liquid imageCollection=examplePropagation33 %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.