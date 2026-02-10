* TOC
{:toc}

This guide demonstrates how to calculate a telemetry delta using data from two different devices in ThingsBoard and store the result as asset telemetry.

As an example, we will calculate the temperature difference between indoor and outdoor thermometers installed in a warehouse. The calculated value is stored as a new telemetry key and can be used for monitoring, visualization, or alerting.

This guide is introductory and focuses on demonstrating the core capabilities of the platform, rather than building configurations from scratch.   
For this reason, predefined calculated field configurations are provided and imported during the setup.

After importing these configurations into your ThingsBoard instance, you can examine their structure, logic, and behavior, and then adapt them to suit your own use cases.

<hr>

## Use case

Assume you have a warehouse equipped with two temperature sensors:
- Indoor Thermometer
- Outdoor Thermometer

Your objective is to:
- Collect telemetry from both devices 
- Calculate the absolute temperature difference between the indoor and outdoor readings 
- Store the result as telemetry on the warehouse asset 
- Visualize and monitor this value in real time

This example demonstrates cross-entity data aggregation, where telemetry from multiple devices is processed at the asset level.

<hr>

## Prerequisites

Before proceeding, it is recommended to review the ThingsBoard [Calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"} documentation.

This topic provides the necessary foundation for understanding entity relationships and data processing mechanisms used in this example.

<hr>

## 1. Provision asset and devices

In ThingsBoard, an asset is an abstract entity used to represent logical objects such as buildings, warehouses, or production lines.   
In this example, the asset represents a warehouse and is used to store aggregated telemetry from multiple devices.

**Create the asset:**
1. Navigate to **Entities** **&#8702;** **Assets**.
2. Click the **"&#43; Add asset"** button in the top-right corner, select **"Add new asset"** and create:   
&#8194;&#8226;&#8194;**Asset name**: Warehouse A   
&#8194;&#8226;&#8194;**Asset profile**: warehouse

**Create two devices:**
1. Download the CSV file containing the device configuration:   
   [thermometers_device_data.csv](/docs/user-guide/resources/guides/thermometers_device_data.csv){:target="_blank" download="thermometers_device_data.csv"}
2. Navigate to **Entities** **&#8702;** **Devices**.
3. Click the **"&#43; Add device"** button in the top-right corner and select **"Import device"**.
4. [Upload the CSV file](/docs/{{docsPrefix}}user-guide/bulk-provisioning/#upload-file){:target="_blank"} and follow the import wizard instructions.

**CSV configuration details:**
- **CSV delimiter**: <span class="code-light">,</span>
- **Column mapping**:
   - **Name**: Indoor Thermometer, Outdoor Thermometer
   - **Type**: thermometer

<hr>

## 2. Emulate telemetry using Rule Engine

Since this example uses virtual devices, telemetry must be generated artificially.

Use [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"} to periodically publish random temperature values.

> For simplicity, the generators are added to the Root Rule Chain, although in production setups a dedicated rule chain should be used instead.

- Navigate to **Rule chains**.
- Open the **Root Rule Chain**. 
- Drag and drop a [Generator node](/docs/user-guide/rule-engine-2-0/nodes/action/generator){:target="_blank"} onto the canvas. 
- Select **Indoor Thermometer** as the originator. 
- Replace the generator function with the appropriate emulator script. 
- Repeat the same steps for the **Outdoor Thermometer** device. 
- Connect both Generator nodes to the [Entity type filter node](/docs/user-guide/rule-engine-2-0/nodes/filter/entity-type-filter){:target="_blank"} using the **Success** relation.
- Apply changes.

**Indoor Thermometer emulator script:**
```javascript
var indoorTemperature = toFixed(Math.random()*10 + 18, 2);
var msg = { indoorTemperature: indoorTemperature };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

This generator simulates indoor temperatures in the range of approximately 18–28 °C.

**Outdoor Thermometer emulator script:**
```javascript
var outdoorTemperature = toFixed(Math.random()*10 + 16, 2);
var msg = { outdoorTemperature: outdoorTemperature };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

This generator simulates outdoor temperatures in the range of approximately 16–26 °C.

**Verification**

After the generators start running:
1. Open **Entities &#8702; Devices &#8702; Indoor Thermometer &#8702; Latest telemetry**.
2. Open **Entities &#8702; Devices &#8702; Outdoor Thermometer &#8702; Latest telemetry**.

You should see continuously updated <span class="code-light">temperature</span> values.

<hr>

## 3. Import a calculated field on the asset

Calculate the temperature difference between the two thermometers and store it as asset telemetry.
1. Download the calculated field configuration file:   
   [temperature_delta_based_on_2_devices_cf.json](/docs/user-guide/resources/guides/temperature_delta_based_on_2_devices_cf.json){:target="_blank" download="temperature_delta_based_on_2_devices_cf.json"}.
2. Navigate to the **Calculated fields** page.
3. Click the **"&#43; Add calculated field"** button in the top-right corner and select **"Import calculated field"**.
4. [Upload the calculated field configuration file](/docs/{{docsPrefix}}user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"}.
5. Select the **warehouse** [asset profile](/docs/{{docsPrefix}}user-guide/asset-profiles/){:target="_blank"} as the target entity so the calculated field is applied automatically to all relevant assets.
6. Update the calculated field arguments as follows:   
   &#8226;&#8194;**First argument**:   
   &#8194;&#8194;&#8226;&#8194;**Entity type**: Device   
   &#8194;&#8194;&#8226;&#8194;**Device name**: Indoor Thermometer   
   &#8194;&#8194;&#8226;&#8194;**Argument type**: Latest telemetry   
   &#8194;&#8194;&#8226;&#8194;**Time series key**: indoorTemperature   
   &#8194;&#8194;&#8226;&#8194;**Argument name**: indoorTemperature   
   &#8226;&#8194;**Second argument**:   
   &#8194;&#8194;&#8226;&#8194;**Entity type**: Device   
   &#8194;&#8194;&#8226;&#8194;**Device name**: Outdoor Thermometer   
   &#8194;&#8194;&#8226;&#8194;**Argument type**: Latest telemetry   
   &#8194;&#8194;&#8226;&#8194;**Time series key**: outdoorTemperature   
   &#8194;&#8194;&#8226;&#8194;**Argument name**: outdoorTemperature
7. Click **Add** to complete the import.

<b><font size="3">Calculation logic</font></b>

```javascript
abs(indoorTemperature - outdoorTemperature)
```
{: .copy-code}

This calculates the absolute temperature difference regardless of which value is higher.

Once saved, the asset automatically receives updated deltaTemperature telemetry.

<hr>

## 4. Verify the configuration

1. Open **Entities &#8702; Assets &#8702; Warehouse A &#8702; Latest telemetry**.
2. Confirm that the <span class="code-light">deltaTemperature</span> key is present and updates in real time.

This confirms that:
- Telemetry is received from both devices
- The calculated field executes correctly
- The result is stored on the asset

<hr>

## 5. Visualize data using a dashboard (optional)

To monitor temperature differences visually:
- [Download the prepared Warehouse dashboard JSON file](/docs/user-guide/resources/guides/warehouse_dashboard.json){:target="_blank" download="warehouse_dashboard.json"}.
- [Import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it into ThingsBoard.
- After the import, update the [entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"} by setting Warehouse A as the target entity to ensure its data is displayed correctly.

The dashboard should display a real-time chart and table showing the temperature difference between the indoor and outdoor thermometers.

<hr>

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}